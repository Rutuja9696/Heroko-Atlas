const express = require("express");
const {
  verifyPostRequest,
  getAllTasks,
  getById,
  createTask,
  updateStatus,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.route("/tasks").get(getAllTasks).post(verifyPostRequest, createTask);
router.route("/tasks/:id").delete(deleteTask).patch(updateStatus).get(getById);
module.exports = router;
