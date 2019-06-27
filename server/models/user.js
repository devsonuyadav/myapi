var mongoose = require('mongoose');
const validator = require('validator');
var UserSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: 1

    },
    email: {
        type: String,
        minLength: 1,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: `{VALUE} is not valid`
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    class: {
        type: String,

        trim: true


    },
    semester: {
        type: Number,



    },
    attendance: {
        type: Number,


    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        tokens: {

            type: String,
            required: true

        }
    }]

})
var User = mongoose.model('User', UserSchema);

UserSchema.methods.generateAuthToken = function () {
    var user = this;

}




module.exports = {
    User
}