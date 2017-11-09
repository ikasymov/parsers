// // let a = [1, 2, 3, 4, 5, 6];
let db = require('./models')
var Xray = require('x-ray');
var x = Xray();
let request = require('request');
// //
// // let b = []
// //
// // let diff = a.filter(x => b.indexOf(x) == -1);
// // console.log(diff)
// // // let a = [1, 2, 3]
// // //
// // // a.push.apply(a, [4,5])
// // // console.log(a)
// //
// // JSON.stringify([])
//
// let db = require('./models');
// //
// db.Resource.findAll({
//   where: {
//     id: 1
//   },
//   include: [{
//     model: db.TopicalStack
//   }]
// }).then(result=>{
//   result[0].getActualUrls().then(result=>{
//     console.log(result)
//   })
// })
//
// let test = 'http://www.eurosport.ru/football/serie-a/2017-2018/story_sto6378854.shtml';
// var url = require("url");
//
// let result = url.parse(test);
// console.log(result.host);
//
// let a = [1, 2, 3, 4,5]
//
// let b = ['a', 'b', 'c']
//
// b.push.apply(b, a)
// console.log(b)

// let a = [1, 2, 3, 4, 5];
//
// console.log()


// db.Resource.findOne({
//   where:{
//     url: 'https://habrahabr.ru/all/'
//   }
// }).then(obj=>{
//   return obj.getActualUrls()
// }).then(urls=>{
//   console.log(urls)
// })

//
let url = 'https://vk.com/in.humour';
// let path_1= '.row.category__items';
// let path_2 = '.item a.item__link@href';

// let url = 'https://tengrinews.kz/';
// let path_1= '#lenta_block';
// let path_2 = '.ten a@href'


// let data = {
//   url: url,
//   method: 'GET'
// };
// async function vk(){
//   return new Promise((resolve, reject)=>{
//     request(data, (error, req, body)=>{
//       x(body, '.wall_item', ['.wi_author a@data-post-id'])((error, list)=>{
//         let urls = list.map((current)=>{
//           return 'https://vk.com/wall' + current
//         });
//         resolve(urls)
//       })
//     });
//   });
// }

// let a = ['hi', 2];
//
// if(1 in a){
//   console.log('hello')
// }

db.Resource.findOne({
  where:{
    url: 'https://ria.ru/lenta/'
  }
}).then(res=>{
  return res.updateTopicalStack()
}).then(afterUpdate=>{
  console.log(afterUpdate)
})

// async function sportsKz(self){
//   return new Promise((resolve, reject)=>{
//     x(self.url, path_1, [path_2])((error, result)=>{
//       let count = 0;
//       if(result.length <= 0){
//         resolve(result)
//       }
//       let list = result.filter(current=>{
//         if((count % 2) === 0){
//           count ++;
//           return current
//         }
//         count ++;
//       });
//       let uniqueItems = Array.from(new Set(list));
//       resolve(uniqueItems)
//     })
//   });
// }

// 'https://data.nur.kz/posts?search[top_status]=1,2&search[section_id]=1&search[language]=ru&per-page=30&search[status]=3&sort=-published_at&thumbnail=r305x185&_format=json&fields=id,slug,catchy_title,description,published_at,thumb,comment_count,section_id&page=1'
// async function nurKz(self){
//   let data = {
//     url: self.url,
//     method: 'GET'
//   };
//   return new Promise((resolve, reject)=>{
//     request(data, (error, req, body)=>{
//       if(error || req.statusCode === 403){
//         resolve([])
//       }
//       let reqBody = JSON.parse(body)
//       let list = reqBody.map((current)=>{
//         return 'https://www.nur.kz/' + current.id + '-' + current.slug + '.html'
//       });
//       resolve(list)
//     })
//   });
// }
// x(url, path_1)((error, list)=>{
//   // var uniqueItems = Array.from(new Set(list))
//   console.log(list)
// });
// function getDateTime() {
//
//   let date = new Date();
//
//   let hour = date.getHours();
//   hour = (hour < 10 ? "0" : "") + hour;
//
//   let min  = date.getMinutes();
//   min = (min < 10 ? "0" : "") + min;
//
//   let sec  = date.getSeconds();
//   sec = (sec < 10 ? "0" : "") + sec;
//
//   let year = date.getFullYear();
//
//   let month = date.getMonth() + 1;
//   month = (month < 10 ? "0" : "") + month;
//
//   let day  = date.getDate();
//   day = parseInt(day) + 1
//   day = (day < 10 ? "0" : "") + day;
//   let dash = '-';
//   return year + dash + month + dash + day
//
// };

// async function hightech(self){
//   let data = {
//     url: self.url + '?month=&date=' + getDateTime(),
//     method: 'GET'
//   };
//   return new Promise((resolve, reject)=>{
//     request(data, (error, req, body)=>{
//       let reqBody = JSON.parse(body)
//       let articles = reqBody.data.days[0].articles;
//       let urls = articles.map(current=>{
//         return 'https://hightech.fm' + current.url
//       });
//       let uniqueItems = Array.from(new Set(urls));
//       resolve(uniqueItems)
//     })
//   });
// }
// let nambaone = 'https://api.namba1.co';
//
// async function generateToken(){
//   let data = {
//     url: nambaone + '/users/auth',
//     method: 'POST',
//     body: {
//       'phone': '996112153142',
//       'password': 'password112'
//     },
//     json: true
//   };
//   return new Promise((resolve, reject)=>{
//     request(data, (error, req, body)=>{
//       if(error || req.statusCode === 404){
//         reject(error || new Error('page not found'))
//       }
//       console.log(body)
//       resolve(body.data.token)
//     })
//   })
// }
//
// async function sendArticle(url, group, resource_id){
//   let token = false;
//   try{
//     token = await generateToken();
//   }catch(e){
//     return e
//   }
//   let dataForSend = {
//     url:  nambaone + '/groups/' + group +'/post',
//     method: 'POST',
//     body: {
//       content: url,
//       comment_enabled: 1
//     },
//     headers: {
//       'X-Namba-Auth-Token': token,
//     },
//     json: true
//   };
//   return new Promise((resolve, reject)=>{
//     request(dataForSend, (error, req, body)=>{
//       console.log(body)
//       // return db.sequelize.transaction(t=>{
//       //   return db.TopicalStack.findOne({
//       //     where:{
//       //       resource_id: resource_id
//       //     }
//       //   }, {transaction: t}).then(stack=>{
//       //     let topicalList = JSON.parse(stack.urls)
//       //     let index = topicalList.indexOf(url);
//       //     if(index === -1){
//       //       resolve('Не было найдено такого url в topicalstack')
//       //     }
//       //     return stack.update({urls: JSON.stringify(topicalList.filter((x, i) => i !== index))}, {transaction: t}).then(afterUpdate=>{
//       //       return db.SentStack.findOne({
//       //         where:{
//       //           resource_id: resource_id
//       //         }
//       //       })
//       //     }).then(sentStack=>{
//       //       let sendList = JSON.parse(sentStack.urls);
//       //       sendList.push(url);
//       //       return sentStack.update({urls: JSON.stringify(sendList)}, {transaction: t})
//       //     })
//       //   }).then(result=>{
//       //     if(error || req.statusCode === 404){
//       //       reject(error || new Error('not page found'));
//       //     }
//       //     resolve(req.statusCode);
//       //   })
//       // }).catch(e=>{
//       //   reject(e)
//       // })
//
//     });
//   });
// };

// sendArticle('Test', 1162, 12)
