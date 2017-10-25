'use strict';
var Xray = require('x-ray');
var x = Xray();
let check = require('url')
let xpath = require('xpath'),
 dom = require('xmldom').DOMParser;
let sh = require('cheerio');
let request = require('request');
module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    path_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    path_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    group_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
    },
    timestamps: false,
    underscored: true,
    underscoredAll: true
  });
  Resource.associate = function(models){
    this.hasMany(models.SentStack, {foreignKey: 'resource_id'})
    this.hasMany(models.TopicalStack, {foreignKey: 'resource_id'})
  };
  Resource.prototype.getActualUrls = async function(){
    if(this.url === 'https://www.kp.kg/'){
      let data = {
        url: this.url,
        method: 'GET'
      };
      return new Promise((resolve, reject)=>{
        request(data, (error, req, body)=>{
          let doc = new dom().parseFromString(body);
          let leftsiteBar = xpath.select('//*[@id="newsRegionJS"]', doc).toString();
          let $ = sh.load(leftsiteBar);
          resolve($('div').children('article').map(function(i, elem){
            return ['http://www.kp.kg/online/news/' + $(this).attr('data-news-id') + '/'];
          }).get());
        });
      });
    }
    return new Promise((resolve, reject)=>{
      x(this.url, this.path_1, [this.path_2])((error, list)=>{
        if(error){
          reject(error)
        }
        resolve(list)
      })
    });
  };
  
  Resource.prototype.updateTopicalStack = async function(){
    try{
      let url = await this.getActualUrls();
  
    url = url.filter(object=>{
      if(object != undefined || object != null){
        let result = check.parse(object)
        if(result.host){
          return object
        }
      }
    });
    let actual = await sequelize.models.TopicalStack.findOrCreate({
      where:{
        resource_id: this.id
      },
      defaults: {
        urls: JSON.stringify([])
      }
    });
    let sent = await sequelize.models.SentStack.findOrCreate({
      where:{
        resource_id: this.id
      },
      defaults:{
        urls: JSON.stringify([])
      }
    });
    actual = actual[0];
    sent = sent[0];
    let actualList = JSON.parse(actual.urls);
    let sentList = JSON.parse(sent.urls);
    let diffActual = url.filter(x => sentList.indexOf(x) == -1);
    let result = diffActual.filter(x => actualList.indexOf(x) == -1);
    if(result.length <= 0){
      console.log('not diff');
      return 'not diff ' + this.url
    }
    result.push.apply(result, actualList);
    await actual.update({urls: JSON.stringify(result)})
    return 'update ' + this.url
    }catch(e){
      return e
    }
  };
  
  Resource.prototype.clean = async function(){
    let topicStack = await sequelize.models.TopicalStack.findOne({
      where:{
        resource_id: this.id
      }
    });
    let topList = JSON.parse(topicStack.urls)
    await topicStack.update({urls: JSON.stringify([])})
    let sentStack = await sequelize.models.SentStack.findOne({
      where:{
        resource_id: this.id
      }
    });
    let sentList = JSON.parse(sentStack.urls);
    sentList.push.apply(sentList, topList);
    await sentStack.update({urls: JSON.stringify(sentList)});
    return 'ok'
  }
  return Resource;
};