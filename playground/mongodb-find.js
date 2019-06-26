

const {MongoClient,ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client) => {

if(err) {
   return console.log('Unable to connect to Mongodb Server');
}

console.log("Connected to MongoDb Server");
// const db = client.db('TodoApp');

// db.collection('Todos').find({_id :new ObjectID ('5cfe658d07900e02b4aa0a23')}).toArray().then((docs)=> {
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2))
// }, (err) => {
//    console.log("Unable to fetch datas",err);
// })

// // client.close();
// db.collection('Todos').find({}).count().then((sonu)=> {
//    console.log(`Todos${sonu}`);
//    console.log(JSON.stringify(sonu,undefined,2))
//    if(sonu === 2) {
//       console.log("we have run this fnctionality now ")
//    }
//    }, (err) => {
//       console.log("Unable to fetch datas",err);
//    })

  
   
//    // client.close();const db = client.db('TodoApp');

const db = client.db('TodoApp');
db.collection('Todos').find({text: 'Something to do'}).toArray().then((name) => {
   console.log(name, undefined,2);
})


});


