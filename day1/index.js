const express = require("express");
const bodyParser = require("body-parser");
const internal = require("stream");

const app = express();

app.use(bodyParser.json())

app.get("/article/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  return res.status(200).json({
    post: "get /article:id",
  })
})

app.post("/article", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  console.log(title, content);

  return res.status(200).json({
    post: "post article",
  })
})

app.get("/article", (req, res) => {
  console.log("get article");

  return res.status(200).json({
    post: "get article",
  })
})

app.get("/helloworld", (req, res) => {
  console.log("Hello world!");

  return res.status(200).json({
    message: "hello world",
  })
})

app.listen(8080, () => {
  console.log("server start");
})
