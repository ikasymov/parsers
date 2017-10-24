'use strict';
var Xray = require('x-ray');
var x = Xray();
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
    return new Promise((resolve, reject)=>{
      x(this.url, this.path_1, [this.path_2])((error, list)=>{
        resolve(list)
      })
    });
  };
  
  Resource.prototype.updateTopicalStack = async function(){
    let url = await this.getActualUrls();
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
      console.log('not diff')
      return true
    }
    actualList.push.apply(actualList, result)
    return await actual.update({urls: JSON.stringify(actualList)})
  };
  return Resource;
};