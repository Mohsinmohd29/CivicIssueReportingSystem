const express = require("express");
const router = express.Router();
const {
  auth,
  isAdmin,
} = require("../middleware/authMiddleware");


const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, getCurrentUser);

router.get("/test", auth, (req, res) => {

  res.status(200).json({
      success: true,
      message: "Protected Route",
      user: req.user,
  });

});

router.get(
  "/admin",
  auth,
  isAdmin,
  (req, res) => {

      res.status(200).json({
          success: true,
          message: "Welcome Admin",
      });

  }
);

module.exports = router;
