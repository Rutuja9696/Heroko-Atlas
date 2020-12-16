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
  .patch(updateStatus);
router.route("/tasks/:id").delete(deleteTask);
module.exports = router;
