# todoList_nodejs

# 1.TITLE:

Todo List backend

# 2.DESCRIPTION:

This aims to create backend for the todo list.It can perform all crud operations like fetch all tasks,fetch task by id,create task,update task and delete task .This project is done using express server.Output is viewed on Postman.

# 3.FILE DETAILS:

a.controller:\
 This file contains all the functions of actions that can be performed.Here ,it includes the controller to fetch all the task ,fetch task by id, create task,update task and delete task.\
 b.helpers:\
 It consists of the class and function to send the response such as successful or unsuccessful or error while running the code.\
 c.modules:\
They are use to modifiy the input .validation can also be added to the data here.
d.routes:\
 Routes is the route handler for all the functions,etc. \
 e.app.js:\
 This is the main entry point. It contains path to all the routes.Also the port on which the server is running will listen from this entry point.\
 f.package.json:\
 It has a record of details such as name,version,description,dependencies,script,author,repository,etc with respect to the current folder.

# OUTPUT:

steps to check output:\
1.Install postman and mongodb.\
2.Login with required credentials.\
3.create new collection (name:blogRendering).\
4.Turn your server on.\
5.Turn on shell.\
6.Add request (post) to create new task(url:http://localhost:5000/todoList/tasks)\
7.Add request (get) to get-all-tasks (url:http://localhost:5000/todoList/tasks)\
8.Add request (get) to get-task-by-id (url:http://localhost:5000/todoList/tasks/< \_id of task to fetch>) \
9.Add request (patch) to update-task-by-id (url:http://localhost:5000/todoList/tasks/< taskId of task to update>)\
10.Add request (delete) to delete-task-by-id (url:http://localhost:5000/todoList/tasks/< taskId of task to delete>)
