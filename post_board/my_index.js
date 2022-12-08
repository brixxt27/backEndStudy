/**
 * Array list
 */

const db = [
  {
    idx: 0,
    title: "this is dummy",
    content: ""
  }
];

const addArticle = (data) => {
  db.push({ idx: db.length, ...data });
};

const getArticle = (index) => {
  return db.filter((data) => {
    return data.idx === index;
  });
};

const getArticles = () => {
  return db.map((data) => {
    return { idx: data.idx, title: data.title, content: data.content };
  });
};

/**
 * API 작성
 */

const express = require("express");
const bodyParser = require("body-parser");
const internal = require("stream");
const app = express();

app.use(bodyParser.json())

/**
 * POST localhost:8080/article
 */
app.post("/article", (req, res) => {
  const { _title, _content } = req.body;

  if (_title.length == 0 || _content.length == 0)
    return res.status(400).json({
      error: "빈 문자열입니다"
  })
  addArticle({ _title, _content });
  return res.status(200).json({
    _title,
    _content
  })
})

/**
 * GET localhost:8080/article/:id
 */
app.get("/article/:id", (req, res) => {
  const id = req.params.id;
  const _obj = getArticle(id);

  if (id < 0)
  {
    return res.status(400).json({
      error: "id가 음수입니다"
    })
  }
  return res.status(200).json({
    _obj
  })
})

/**
 * GET localhost:8080/article
 */
app.get("/article", (req, res) => {
  const obj = getArticles();
  return res.status(200).json({
    obj
  })
})

app.listen(8080, () => {
  console.log("server start");
})
