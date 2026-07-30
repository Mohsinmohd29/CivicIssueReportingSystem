const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getMyComplaints,
  getMyComplaintById,
  getAllComplaints,
  updateComplaintStatus,
  getComplaintById,
  deleteComplaint,
} = require("../controllers/complaintController");

const { auth, isAdmin } = require("../middleware/authMiddleware");

const multer = require("multer");
const { storage } = require("../cloudConfig");

const upload = multer({ storage });

// ================= USER ROUTES =================

// Create Complaint
router.post("/", auth, upload.single("image"), createComplaint);

// Get logged-in user's complaints
router.get("/my", auth, getMyComplaints);

// Get a single complaint of the logged-in user
router.get("/my/:id", auth, getMyComplaintById);

// ================= ADMIN ROUTES =================

// Get all complaints
router.get("/", auth, isAdmin, getAllComplaints);

// Get complaint by ID
router.get("/:id", auth, isAdmin, getComplaintById);

// Update complaint status
router.put("/:id/status", auth, isAdmin, updateComplaintStatus);

// Delete complaint
router.delete("/:id", auth, isAdmin, deleteComplaint);

module.exports = router;