const asyncHandler = require("express-async-handler");

// @desc Get todos
// @route GET /api/todos
// @access Private
const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get todos" });
});

// @desc Create todo
// @route POST /api/todos
// @access Private
const createTodo = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Create todo" });
});

// @desc Update todo
// @route PUT /api/todos/:id
// @access Private
const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update todo ${req.params.id}` });
});

// @desc Delete todo
// @route DELETE /api/todos/:id
// @access Private
const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete todo ${req.params.id}` });
});

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
