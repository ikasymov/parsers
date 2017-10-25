let db = require('./models');
let async  = require('async');


async function start(){
  let resource = await db.Resource.findAll({
  });
  return new Promise((resolve, reject)=>{
    async.map(resource, (obj, next)=>{
      obj.updateTopicalStack().then(result=>{
        next(null, result)
      })
    }, (error, result)=>{
      console.log(result)
      process.exit()
    })
  });
}

start()
