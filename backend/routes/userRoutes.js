const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateMe,
  deleteMe,
  getMe,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.route("/me").get(getMe).put(updateMe).delete(deleteMe);

module.exports = router;
