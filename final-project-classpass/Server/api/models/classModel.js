const Mongoose = require('../app.js');

// created table Schema for class 
const ClassSchema = new Mongoose.Schema({
    "title": {
        type : String,
    },
    "description": {
        type : String,
    },
    "image" : {
        type : String,
    },
    "instructor" : {
        type : String,
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

ClassSchema.virtual('id', () => this._id.toHexString())
ClassSchema.set('toJSON', {virtuals: true})

const Classes =  Mongoose.model('Classes', ClassSchema);

module.exports = Classes;