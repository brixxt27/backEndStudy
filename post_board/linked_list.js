/*
리스트에는 아래와 같은 형식의 데이터가 들어가야 합니다
```
{
	idx: number,
	title: string,
	content: string
}
```

저장된 리스트 예시
[{idx: 1, title: "제목", content: "내용"}, {idx: 2, title: "제목", content: "내용"}]

만들어야 하는 함수
1. addArticle(data)
	리스트에 데이터를 저장해야 합니다
	ex) {idx: 3, title: "제목", content: "내용"}을 저장
2. getArticle(idx)
	idx에 해당되는 데이터를 반환합니다
	ex) getArticle(2)
3. getArticles()
	전체 게시글을 반환해야 합니다
*/

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

let	obj = new LinkedList();
obj.addArticle("Jayoon", "1");
obj.addArticle("Mosong", "2");
obj.addArticle("m-min", "3")
obj.addArticle("42Seoul", "4");
// console.log(obj.getArticle(0));
obj.printAllContents();
// console.log(obj.getArticles());
// obj.printAllTitles();
