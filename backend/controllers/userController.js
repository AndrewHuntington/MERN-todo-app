const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel.js");

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register User" });
});

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

// @desc Update user data
// @route PUT /api/users/me
// @access Private
const updateMe = asyncHandler(async (req, res) => {
  res.json({ message: "Update my data" });
});

// @desc DELETE user data
// @route DELETE /api/users/me
// @access Private
const deleteMe = asyncHandler(async (req, res) => {
  res.json({ message: "Delete my data" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  updateMe,
  deleteMe,
};
