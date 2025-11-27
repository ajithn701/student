//import
const express = require("express");
require("./connection");
const studentmodel = require("./studentmodel");
var cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});
app.post("/addstudent", async (req, res) => {
  await studentmodel(req.body).save();
  console.log(req.body);
  res.send("Student Added");
});

app.get("/view", async (req, res) => {
  var data = await studentmodel.find();
  res.send(data);
});

app.delete("/remove/:id", async (req, res) => {
  await studentmodel.findByIdAndDelete(req.params.id);
  console.log(req.params.id);
  res.send("Student Deleted");
});

app.put("/update/:id", async (req, res) => {
  await studentmodel.findByIdAndUpdate(req.params.id, req.body);
  console.log(req.params.id);
  res.send("Student Updated");
});

app.listen(3000);
