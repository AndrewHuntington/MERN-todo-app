const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateMe,
  deleteMe,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router
  .route("/me")
  .get(protect, getMe)
  .put(protect, updateMe)
  .delete(protect, deleteMe);

module.exports = router;
