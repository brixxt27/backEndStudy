const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const query = require("./mysql"); // 기본적으로 먼저 파일명대로 탐색하고, 없다면 .js를 자동으로 붙여서 읽는다?
const app = express();

const addArticle = (data) => {};

const getArticle = (index) => {};

const getArticles = () => {};

app.use(bodyParser.json()); // body json을 parsing하기 편하게 하기위해 필요

// GET /article
app.get("/article", async (_, res) => {
  // const Articles = getArticles();
  const sql = "SELECT * FROM article";
  const result = await query(sql);
  console.log(result[0]);

  return res.status(200).json({ articles: 1 });
});

// POST /article
app.post("/article", async (req, res) => {
  const { title, content } = req.body;

  const _query = "INSERT INTO article (title, content) VALUES (?, ?)";
  const sql = mysql.format(_query, [title, content]);
  const result = await query(sql);

  if (!title.length) {
    return res.status(400).json({
      error: "빈 문자열입니다",
    });
  }
  addArticle({ title, content });
  return res.status(200).json({
    title,
    content,
  });
});

// GET /article/:id
app.get("/article/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const result = getArticle(id);

  const query = "SELECT * FROM article WHERE idx = ?";
  const sql = mysql.format(query, [id]);
  const q_result = await query(sql);

  if (id < 0) {
    return res.status(400).json({
      error: "id가 음수입니다",
    });
  } else if (!id) {
    return res.status(400).json({
      message: "숫자가 아닌 값이 id로 전달됐습니다.",
    });
  } else if (id >= ) {
    return res.status(404).json({
      message: "요청한 id의 데이터가 없습니다.",
    });
  }
  if (Array.isArray(result) && result.length) {
    return res.status(200).json(result);
  }
});

app.listen(8080, () => {
  console.log("server start");
});
