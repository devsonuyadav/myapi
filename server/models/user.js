var mongoose = require('mongoose');
const validator = require('validator');
var UserSchema = new mongoose.Schema({
    email : {
        type : String,
        minLength : 1,
        required : true,
        trim : true,
        unique : true,
        validate : {
            validator :(value) => validator.isEmail(value),
            message : `{VALUE} is not valid`
        }
    },
    password : { 
        type : String,
        required : true,
        minLength : 6
    },
    class : {
        type : String,
        required : true,
        trim : true
       
   
       },
       semester : {
        type : Number,
        required : true,
       
      
       },
       attendance : {
        type : Number,
        required : true,

     },
    tokens : [{
        access : { 
        type : String,
        require : true
        },
        tokens : {

            type : String,
            required : true

        }
    }]
    
  })
var User = mongoose.model('User',UserSchema);

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    
}
  
  
 
  
  module.exports = {
      User
  }