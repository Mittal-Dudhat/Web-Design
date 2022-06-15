const Mongoose = require('../app.js');

// created table Schema for user 
const UserSchema = new Mongoose.Schema({
    "username": {
        type : String,
        required: "Enter user name"
    },
    "email": {
        type : String,
        required: "Enter Email"
    },
    "password" : {
        type : String,
        required: "Enter Password"
    },
    "classData" :
    {
        type: Array
    },
    "created_date": {
        type: Date,
        default: Date.now()
    },
},
{
    versionKey: false
}
)

UserSchema.virtual('id', () => this._id.toHexString())
UserSchema.set('toJSON', {virtuals: true})

const User =  Mongoose.model('Users', UserSchema);

module.exports = User;