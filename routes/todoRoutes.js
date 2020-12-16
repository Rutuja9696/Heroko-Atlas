const express = require("express");
const {
  verifyPostRequest,
  getAllTasks,
  createTask,
  updateStatus,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router
  .route("/tasks")
  .get(getAllTasks)
  .post(verifyPostRequest, createTask)
  .patch(updateStatus)
  .delete(deleteTask);

module.exports = router;
