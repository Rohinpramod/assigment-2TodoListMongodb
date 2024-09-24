const express = require('express')
const {createTodo, 
    fetchTodo,
    fetchTodoById,
    editTodoById,
    deleteTodo
} =require('../Controllers/todoControllers')
const validateTodoUpdate = require('../middlewares/validateTodoUpdate')
const router = express.Router();

router.post('/todo',validateTodoUpdate,createTodo);

router.get('/todo',fetchTodo);

router.get('/todo/:id',fetchTodoById);

router.put('/todo/:id',validateTodoUpdate,editTodoById);

router.delete('/todo/:id',deleteTodo);

module.exports = router;