import Todo from "../models/todo.js";

//Search method to get all todos
export const search = (params = {}) => {
    const promise = Todo.find(params).exec();
    return promise;
};

//create method to add new todo to table
export const create = (todo) => {
    const newTodo = new Todo(todo);
    return newTodo.save(); 
}

// get method to retrieve a single record from db
export const get = (id) => {
    const promise = Todo.findById(id).exec();
    return promise;
}

// update method to update single record to db
export const update = (todo) => {
    todo._id = todo.id;
    const promise = Todo.findByIdAndUpdate(todo.id, todo, { new: true }).exec();
    return promise; 
}

// remove method to delete records from db
export const remove = (id) => {
    const promise = Todo.findByIdAndRemove(id).exec();
    return promise;
}