
const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

// CREATE a new report
router.post("/", async (req, res) => {
  try {
    const report = await Report.create(req.body);

    res.status(201).json({
      message: "Report created successfully",
      report
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create report",
      error: error.message
    });
  }
});

// GET all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch reports",
      error: error.message
    });
  }
});

// UPDATE a report by ID
router.put("/:id", async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!report) {
      return res.status(404).json({
        message: "Report not found"
      });
    }

    res.status(200).json({
      message: "Report updated successfully",
      report
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update report",
      error: error.message
    });
  }
});

// DELETE a report by ID
router.delete("/:id", async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);

    if (!report) {
      return res.status(404).json({
        message: "Report not found"
      });
    }

    res.status(200).json({
      message: "Report deleted successfully",
      report
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete report",
      error: error.message
    });
  }
});

module.exports = router;

