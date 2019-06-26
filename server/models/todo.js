var mongoose = require('mongoose')
var Todo = mongoose.model('Todo', {
    text : {
    type : String,
    required : true,
    minLength : 1,
    trim : true 
    },
    completed : {
    type : Boolean,
    default : false
    },
    completedAt : {
     type : Number,
     default : null
    }
    
    });


    var bio = mongoose.model("bio", {
        name : {
            type: String,
            trim : true,
            require : true
        },
        age : {
            type : Number,
            trim : true,
            require : true
            
        },
        edu : {
            type : String,
            trim : true
        },
        salary : {
            type : Number,
            minLength : 2
        },
        married : {
            type : Boolean,
            default : null
        },
        submittedAt: {
            type  : Number,
            default : null
        }
    });

    module.exports = {
        Todo, bio
    }