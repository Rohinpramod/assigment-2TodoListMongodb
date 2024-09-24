const express = require("express");
const {
  createTodo,
  fetchTodo,
  fetchTodoById,
  editTodoById,
  deleteTodo,
  updateTodo,
} = require("../Controllers/todoControllers");
const validateTodoupdate = require('../middlewares/validateTodoUpdate')
const router = express.Router();

router.post("/todo",validateTodoupdate, createTodo);

router.get("/todo", fetchTodo);

router.get("/todo/:id", fetchTodoById);

router.put("/todo/:id",validateTodoupdate, editTodoById);

router.delete("/todo/:id", deleteTodo);

router.patch('/todo/:id',updateTodo);

module.exports = router;