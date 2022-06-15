const Mongoose = require('../app.js');

// created table Schema for feedback 
const FeedbackSchema = new Mongoose.Schema({
    "fullname": {
        type : String,
        required: "Enter full name"
    },
    "email": {
        type : String,
        required: "Enter Email"
    },
    "feedback" : {
        type : String,
        required: "Enter Feedback"
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

FeedbackSchema.virtual('id', () => this._id.toHexString())
FeedbackSchema.set('toJSON', {virtuals: true})

const Feedback =  Mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;