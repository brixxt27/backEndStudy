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
		this.idx = -1;
		this.title = title;
		this.content = content;
		this.next = null;
  }
}

class LinkedList {
	constructor() {
		let	init = new Node('This is', 'dummy node');
		this.head = init;
		this.tail = init;
		this.numData = 0;
	}

	getNumData() {
		return (this.numData);
	}

	addArticle(title, content) {
		let	tmp = new Node(title, content);

		this.numData++;
		tmp.idx++;
		this.tail.next = tmp;
		this.tail = tmp;
	}

	printError(str) {
		let errStr = "Error\n";
		errStr += str
		console.log(errStr);
	}

	printAllTitle() {
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
		console.log(str.slice(0, -2));
	}

	getArticle(idx) {
		let	tmp = this.head.next;

		if (this.getNumData() == 0) {
			this.printError("List is empty!");
			return ;
		}
		if (this.getNumData() - 1 < idx) {
			this.printError("This idx is too big!");
			return ;
		}
		while (tmp != null) {
			if (tmp.idx == idx)
				return (tmp);
			tmp = tmp.next;
		}
	}
}

let	obj = new LinkedList();
obj.addArticle("Jayoon", "1");
obj.addArticle("Mosong", "2");
obj.addArticle("m-min", "3")
console.log(obj.getArticle(0));
obj.printAllTitle();
