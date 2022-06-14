import Mongoose from 'mongoose';

// created table Schema for todo 
const TodoSchema = new Mongoose.Schema({
    "task_title": {
        type : String,
        required: "Enter Task to be done"
    },
    "description": {
        type : String,
        required: "Describe Task to be done"
    },
    "created_date": {
        type: Date,
        default: Date.now()
    },
    "modified_date": {
        type: Date,
        default: Date.now()
    },
},
{
    versionKey: false
}
)

TodoSchema.virtual('id', () => this._id.toHexString())
TodoSchema.set('toJSON', {virtuals: true})

const Todo =  Mongoose.model('Todos', TodoSchema);

export default Todo;