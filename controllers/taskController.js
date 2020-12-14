//all route handlers
const fs = require("fs");
const path = require("path");
const Task = require("../models/task.js");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const uniqid = require("uniqid");
const fileName = path.join(__dirname, "..", "data", "tasks.json");
const tasks = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const verifyPostRequest = (req, res, next) => {
  const requiredProperties = ["taskName"];
  // let result = Object.keys(req.body).every((key) => {
  // return requiredProperties.includes(key);
  // });
  let result = requiredProperties.every((key) => {
    return req.body[key];
  });
  if (!result) {
    sendErrorMessage(
      new AppError(400, "Unsuccessful", "Request Body is not valid"),
      req,
      res
    );
    console.log("Result", req.body.taskName);
  } else {
    console.log("Result", req.body.taskName);
    next();
  }
};
const getAllTasks = (req, res, next) => {
  sendResponse(200, "Successful", tasks, req, res);
};
const createTask = (req, res, next) => {
  let newTask = new Task(req.body.taskName);
  tasks.push(newTask);
  fs.writeFile(fileName, JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      sendErrorMessage(
        new AppError(500, "Internal Error", "Error in completing Request"),
        req,
        res
      );
      return err;
    }
    sendResponse(201, "Successful", newTask, req, res);
  });
};
const getById = (req, res) => {
  const taskDisplay = tasks.find((task) => {
    return task.taskId == req.params.taskId;
  });
  if (taskDisplay) {
    sendResponse(200, "Successful", [taskDisplay], req, res);
  } else {
    sendError(new AppError(404, "Not Found", "task not available"), req, res);
  }
};
// module.exports.getAllTasks = getAllTasks;
// module.exports.createTask = createTask;
// module.exports.verifyPostRequest = verifyPostRequest;
// module.exports.getById = getById;

module.exports = {
  getAllTasks,
  createTask,
  verifyPostRequest,
  getById,
};
