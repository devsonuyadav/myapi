

const {MongoClient,ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client) => {

if(err) {
   return console.log('Unable to connect to Mongodb Server');
}

console.log("Connected to MongoDb Server");

const db = client.db('TodoApp');
//delete many
// db.collection('Todos').deleteMany({text: "lunch"}).then((result) => {
//    console.log(result);
// })

//delete one
//findOneand Delete

db.collection('Todos').findOneAndReplace({completed: false}, {love : "Faize"}).then((result) =>{
   console.log(result)
})


});


