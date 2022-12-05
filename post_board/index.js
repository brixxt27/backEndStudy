const express = require("express");
const bodyParser = require("body-parser");
const internal = require("stream");

const app = express();

app.use(bodyParser.json())

class Node {
  constructor(title, content) {
		this.idx;
		this.title = title;
		this.content = content;
		this.next = null;
  }
}

class LinkedList {
	constructor() {
		let	init = new Node('This is', 'dummy node');

		this.idx = 0;
		this.numData = 0;
		this.head = init;
		this.tail = init;
	}

	getNumData() {
		return (this.numData);
	}

	addArticle(title, content) {
		let	tmp = new Node(title, content);

		this.numData++;
		tmp.idx = this.idx;
		this.idx++;
		this.tail.next = tmp;
		this.tail = tmp;
	}

	getArticle(idx) {
		let	tmp = this.head.next;
		let	numData = this.getNumData();

		if (numData == 0) {
			this.printError("List is empty!");
			return ;
		}
		if (numData - 1 < idx || idx < 0) {
			this.printError("Index is not valid!");
			return ;
		}
		while (tmp != null) {
			if (tmp.idx == idx)
				return (tmp);
			tmp = tmp.next;
		}
	}

	getArticles() {
		let	firstData = this.head.next;
		let	numData = this.getNumData();

		if (numData == 0) {
			this.printError("List is empty!");
			return ;
		}
		return (firstData);
	}

	printError(str) {
		let errStr = "Error\n";
		errStr += str
		console.log(errStr);
	}

	printAllTitles() {
		let	tmp = this.head.next;
		let	str = "";

		if (this.getNumData() == 0) {
			this.printError("List is empty!");
			return ;
		}
		while (tmp != null) {
			str += `${tmp.title}, `;
			tmp = tmp.next;
		}
		console.log(`[${str.slice(0, -2)}]`);
	}

	printAllContents() {
		let	tmp = this.head.next;
		let	str = "";

		if (this.getNumData() == 0) {
			this.printError("List is empty!");
			return ;
		}
		while (tmp != null) {
			str += `${tmp.content}, `;
			tmp = tmp.next;
		}
		console.log(`[${str.slice(0, -2)}]`);
	}
}

app.get("/article/:id", (req, res) => {
  const id = req.params.id;

  console.log(id);
  return res.status(200).json({
    post: "get /article:id",
  })
})

let g_obj = new LinkedList();

app.post("/article", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  if (title == '' || content == '')
    return res.status(400).json({
      error: "빈 문자열입니다"
  })
  return res.status(200).json({
    g_obj.addArticle(title, content);
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
