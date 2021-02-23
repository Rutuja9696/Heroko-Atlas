const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Task = require("../models/taskSchema.js");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");
const uniqid = require("uniqid");

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
      sendErrorMessage(
        new AppError(400, "unsuccessful", "request body is inavlid"),
        req,
        res
      );
    });
};
//fetch by id
const getById = (req, res, next) => {
  Task.findById(req.params.id)
    .then((data) => {
      console.log(data);
      sendResponse(201, "Successful", data, req, res);
    })
    .catch((err) => {
      console.log(err);
      sendErrorMessage(
        new AppError(400, "unsuccessful", "Id not found"),
        req,
        res
      );
    });
};
//add task
const createTask = (req, res, next) => {
  let newTask = new Task({ taskId: uniqid(), taskName: req.body.taskName });
  newTask
    .save()
    .then((data) => {
      console.log(data);
      sendResponse(201, "Successful", data, req, res);
    })
    .catch((err) => {
      console.log(err);
      sendErrorMessage(
        new AppError(400, "unsuccessful", "request body is inavlid"),
        req,
        res
      );
    });
};
//update status
const updateStatus = (req, res, next) => {
  Task.findOneAndUpdate(
    { taskId: req.params.id },
    { status: "Completed" },
    { useFindAndModify: false, new: true }
  )
    .then((data) => {
      console.log(data);
      sendResponse(201, "Successful", data, req, res);
    })
    .catch((err) => {
      console.log(err);
      sendErrorMessage(
        new AppError(400, "unsuccessful", "Id to update not found"),
        req,
        res
      );
    });
};
//delete task
const deleteTask = (req, res, next) => {
  // console.log(req.params.id);
  Task.findOneAndDelete({ taskId: req.params.id })
    .then((data) => {
      console.log(data);
      sendResponse(201, "Successful", data, req, res);
    })
    .catch((err) => {
      console.log(err);
      sendErrorMessage(
        new AppError(400, "unsuccessful", "Id to delete not found"),
        req,
        res
      );
    });
};
module.exports.verifyPostRequest = verifyPostRequest;
module.exports.getById = getById;
module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.updateStatus = updateStatus;
module.exports.deleteTask = deleteTask;
