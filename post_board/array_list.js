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
