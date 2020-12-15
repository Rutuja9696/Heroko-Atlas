const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Task = require("../models/taskSchema.js");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const fileName = path.join(__dirname, "..", "data", "tasks.json");
const tasks = JSON.parse(fs.readFileSync(fileName, "utf-8"));
//verifying post request
const verifyPostRequest = (req, res, next) => {
  const requireProperties = ["taskName"];
  let result = requireProperties.every((key) => {
    return req.body[key];
  });
  if (!result) {
    sendErrorMessage(
      new AppError(400, "unsuccessful", "request body is inavlid"),
      req,
      res
    );
  } else {
    next();
  }
};
//fetch all tasks
const getAllTasks = (req, res, next) => {
  Task.find({})
    .then((allTasks) => {
      console.log("All tasks");
      sendResponse(200, "Successful", allTasks, req, res);
    })
    .catch((err) => {
      console.log(err);
    });
};
//add task
const createTask = (req, res, next) => {
  let newTask = new Task({ taskName: req.body.taskName });
  newTask
    .save()
    .then((data) => {
      console.log(data);
      sendResponse(201, "Successful", data, req, res);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.verifyPostRequest = verifyPostRequest;
