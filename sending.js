let db = require('./models');
let _ = require("underscore");
let config = require('./config');
let async = require('async');
let request = require('request')

async function getAllResources(){
  return db.Resource.findAll({
    include: [{
      model: db.TopicalStack
    }]
  })
}


async function linksToSend(){
  let parsers = await getAllResources();
  let list = parsers.map((obj)=>{
    return JSON.parse(obj.TopicalStacks[0].urls).slice(0, config.LIMIT).map(current=>{
      return [{url: current, group_id: obj.group_id, resource_id: obj.id}]
    })
  });
  let zipList = _.chain(list).unzip().flatten().value();
  let result = [];
  let time = 0;
  for (let i in zipList){
    let current = zipList[i];
    if(current === undefined){
      time += config.TIME;
      continue
    }
    current.time = time
    time += config.TIME;
    result.push(current)
  }
  return result
}


linksToSend().then(result=>{
  async.map(result, (obj, next)=>{
    setTimeout(()=>{
      sendArticle(obj.url, obj.group_id, obj.resource_id).then(result=>{
        next(null, result)
      }).catch(er=>{
        next(er, null)
      });
    }, obj.time)
  }, (error, result)=>{
    console.log(result);
    console.log(error)
    process.exit();
  })
});

let nambaone = 'https://api.namba1.co';


async function generateToken(){
  let data = {
    url: nambaone + '/users/auth',
    method: 'POST',
    body: {
      'phone': config.user,
      'password': config.password
    },
    json: true
  };
  return new Promise((resolve, reject)=>{
    request(data, (error, req, body)=>{
      if(error || req.statusCode === 404){
        reject(error || new Error('page not found'))
      }
      console.log(body)
      resolve(body.data.token)
    })
  })
}

async function sendArticle(url, group, resource_id){
  let token = false;
  try{
    token = await generateToken();
  }catch(e){
    return e
  }
  let dataForSend = {
    url:  nambaone + '/groups/' + group +'/post',
    method: 'POST',
    body: {
      content: url,
      comment_enabled: 1
    },
    headers: {
      'X-Namba-Auth-Token': token,
    },
    json: true
  };
  return new Promise((resolve, reject)=>{
    request(dataForSend, (error, req, body)=>{
      return db.sequelize.transaction(t=>{
        return db.TopicalStack.findOne({
          where:{
            resource_id: resource_id
          }
        }, {transaction: t}).then(stack=>{
          let topicalList = JSON.parse(stack.urls)
          let index = topicalList.indexOf(url);
          if(index === -1){
            resolve('Не было найдено такого url в topicalstack')
          }
          return stack.update({urls: JSON.stringify(topicalList.filter((x, i) => i !== index))}, {transaction: t}).then(afterUpdate=>{
             return db.SentStack.findOne({
              where:{
                resource_id: resource_id
              }
            })
          }).then(sentStack=>{
            let sendList = JSON.parse(sentStack.urls);
            sendList.push(url);
            return sentStack.update({urls: JSON.stringify(sendList)}, {transaction: t})
          })
        }).then(result=>{
          if(error || req.statusCode === 404){
            reject(error || new Error('not page found'));
          }
          resolve(req.statusCode);
        })
      }).catch(e=>{
        reject(e)
      })
      
    });
  });
};