import { request, response } from 'express';
import * as todoList from '../services/todo-service.js' 

// error message when api fails
const setErrorResponse=(error, response) =>{
    response.status(500);
    response.json(error);
}

//success message when api works
const setSuccessResponse = (data , response) => {
    response.status(200);
    response.json(data);
}

// index method to search all records from db
export const index = async (request, response) => {
    try {
        const Todo = await todoList.search();
        setSuccessResponse(Todo, response)
    } catch(e) {
        setErrorResponse(e , response);
    }
} 

// save method to add new records to db
export const save = async (request, response) => {
    try{
        const Todo = {...request.body};
        const newTodo = await todoList.create(Todo);
        setSuccessResponse(newTodo, response)
    }catch(e) {
        setErrorResponse(e , response);
    }
} 

//get method to get single record using id from db
export const get = async (request, response) => {
    try{
        const id = request.params.id;
        const Todo = await todoList.get(id);
        setSuccessResponse(Todo, response)
    }catch(e) {
        setErrorResponse(e , response);
    }
} 

// update single record to db using id 
export const update = async (request, response) => {
    try{
        const id = request.params.id;
        const Todo = {...request.body, id};
        const updatedTodo = await todoList.update(Todo);
        setSuccessResponse(updatedTodo, response);
    }catch(e) {
        errorhandler(e.message , response);
    }
}

// remove method to delete task from db
export const remove = async (request, response) => {
    try{
        const id = request.params.id;
        const updatedTodo = await todoList.remove(id);
        setSuccessResponse({message: `Task ${id} removed successfully`}, response);
    }catch(e) {
        errorhandler(e.message , response);
    }
}