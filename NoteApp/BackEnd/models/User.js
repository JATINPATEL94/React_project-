const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        require : true,
        unique : true
    },
    password:{
         type : String,
         require :true
    },
    Date :{
        type : Date,
        default :Date.now
    }
});
const User =  mongoose.model('user', UserSchema);
module.exports = User
