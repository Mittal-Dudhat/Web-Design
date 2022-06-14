import express from 'express';
import * as todoList from '../controllers/todo-controller.js';

const router = express.Router();

//add record or get all records from table
router.route('/Todos')
    .post(todoList.save)
    .get(todoList.index);

// route to controller methods to get, update or delete a single record using id
router.route('/Todos/:id')
    .get(todoList.get)
    .put(todoList.update)
    .delete(todoList.remove);

export default router; 