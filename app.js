require("dotenv").config();

const express = require("express");
const app = express();
const activityRouter = require("./api/activity/activity.router");
const todoRouter = require("./api/todo/todo.router");

app.use(express.json());
app.use("/activity", activityRouter);
app.use("/todo", todoRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Tersambung di PORT : " + process.env.APP_PORT);
});
