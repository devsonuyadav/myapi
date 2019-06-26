

const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client) => {

if(err) {
   return console.log('Unable to connect to Mongodb Server');
}

console.log("Connected to MongoDb Server");

client.close();
});
// const db = client.db('TodoApp');

// db.collection('new_table').insertOne({
//   text: 'Something to do 2',
//   completed : false

// }, (err, result) =>{
//     if(err) {
//         return console.log('Unable to insert todo')
//     }

//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
// })





// client.close();


// 