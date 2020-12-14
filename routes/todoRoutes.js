const express = require("express");
const {
  getAllTasks,
  createTask,
  verifyPostRequest,
  getById,
} = require("../controllers/taskController");

const router = express.Router();

router
  .route("/tasks")
  .get(getAllTasks, getById)
  .post(verifyPostRequest, createTask);
// router.route("/tasks/:id").get().patch().delete();

module.exports = router;
