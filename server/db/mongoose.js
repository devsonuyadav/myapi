var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI , {useNewUrlParser : true})
process.env.MONGODB_URI === "mongodb+srv://sky32752:Skyf!zz143@cluster0-b1on8.mongodb.net/test?retryWrites=true&w=majority"

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
module.exports = {
     mongoose
}
 

//mongodb+srv://sky32752:Skyf!zz143@cluster0-b1on8.mongodb.net/test?retryWrites=true&w=majority