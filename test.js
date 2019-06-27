
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://536B79217A7A313433@cluster0-b1on8.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
