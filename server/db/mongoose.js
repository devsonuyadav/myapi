var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://sky32752:536B79217A7A313433@cluster0-b1on8.mongodb.net/test?retryWrites=true&w=majority" || "http://localhost:27017/TodoApp", {useNewUrlParser : true})

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
module.exports = {
     mongoose
}
 

//mongodb+srv://sky32752:Skyf!zz143@cluster0-b1on8.mongodb.net/test?retryWrites=true&w=majority