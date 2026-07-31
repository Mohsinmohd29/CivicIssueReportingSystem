const Complaint = require("../models/Complaint");

exports.createComplaint = async (req, res) => {
    try {

        const {
            title,
            description,
            category,
            location,
            latitude,
            longitude,
        } = req.body;
        const image = req.file ? req.file.path : "";

        const user = req.user.id;

        const complaint = await Complaint.create({
            title,
            description,
            category,
            image,
            location,
            latitude,
            longitude,
            user,
        });

        return res.status(201).json({
            success: true,
            message: "Complaint created successfully",
            complaint,
        });

    } catch (error) {

        console.log("========== CREATE COMPLAINT ERROR ==========");
        console.log(error);
        console.log(error.message);
        console.log(error.stack);
    
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


exports.getMyComplaints = async (req, res) => {
    try {

        const userId = req.user.id;

        const complaints = await Complaint.find({
            user: userId,
        });

        return res.status(200).json({
            success: true,
            count: complaints.length,
            complaints,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Error while fetching complaints",
        });

    }
};

exports.getMyComplaintById = async (req, res) => {
    try {

        const complaint = await Complaint.findOne({
            _id: req.params.id,
            user: req.user.id,
        }).populate("user", "name email");

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found",
            });
        }

        return res.status(200).json({
            success: true,
            complaint,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Error while fetching complaint",
        });

    }
};

exports.getAllComplaints = async (req, res) => {
    try {

        const complaints = await Complaint.find().populate(
            "user",
            "name email"
        );

        return res.status(200).json({
            success: true,
            count: complaints.length,
            complaints,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Error while fetching complaints",
        });

    }
};

exports.updateComplaintStatus = async (req, res) => {
    try {

        const { id } = req.params;
        const { status } = req.body;

        const allowedStatus = [
            "pending",
            "in-progress",
            "resolved",
        ];

        if (!allowedStatus.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status",
            });
        }

        const complaint = await Complaint.findByIdAndUpdate(
            id,
            {
                status,
            },
            {
                new: true,
            }
        );

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Complaint status updated successfully",
            complaint,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Error while updating complaint status",
        });

    }
};

exports.getComplaintById = async (req, res) => {
    try {
  
      const complaint = await Complaint.findById(req.params.id)
        .populate("user", "name email");
  
      if (!complaint) {
        return res.status(404).json({
          message: "Complaint not found",
        });
      }
  
      res.status(200).json({
        complaint,
      });
  
    } catch (error) {
  
      res.status(500).json({
        message: error.message,
      });
  
    }
};
  
exports.deleteComplaint = async (req, res) => {
    try {
  
      const complaint = await Complaint.findById(req.params.id);
  
      if (!complaint) {
        return res.status(404).json({
          message: "Complaint not found",
        });
      }
  
      await complaint.deleteOne();
  
      res.status(200).json({
        message: "Complaint deleted successfully",
      });
  
    } catch (error) {
  
      res.status(500).json({
        message: error.message,
      });
  
    }
};
  