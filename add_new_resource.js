let db = require('./models');
var url = require("url");

let data = {
  url: process.env.URL,
  path_1: process.env.PATH_1,
  path_2: process.env.PATH_2,
  group_id: process.env.GROUP
};
db.Resource.findOne({
  where:{
    url: data.url
  }
}).then(object=>{
  if(object){
    console.log('Такой обьект уже есть');
    throw new Error('already exist this url')
  }
  return false
}).then(result=>{
  db.Resource.create(data).then(result=>{
    result.getActualUrls().then(urlList=>{
      urlList = urlList.filter(object=>{
        if(object != undefined || object != null){
          let result = url.parse(object)
          if(result.host){
            return object
          }
        }
      });
      console.log(urlList)
      if(urlList.length <= 0){
        console.log('Не правильно введенные path');
        result.destroy();
        return false
      }
      result.update({active: true});
      console.log(true);
      return true
    })
  });
});
