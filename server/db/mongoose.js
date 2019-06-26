var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI|| "mongodb://localhost:27017/TodoApp" , {useNewUrlParser : true});


mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
module.exports = {
    mongoose : mongoose
}
 

//mongodb+srv://sky32752:<password>@cluster0-b1on8.mongodb.net/test?retryWrites=true&w=majority