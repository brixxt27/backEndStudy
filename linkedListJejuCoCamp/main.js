// const list = {
//   head : {
//     value : 90,
//     next : {
//       value : 10,
//       next : {
//         value : 80,
//         next : {
//           value : 100,
//           next : null
//         }
//       }
//     }
//   }
// }

class Node {
	constructor(value) {
		this.data = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		let init = new Node('init');
		this.head = init;
		this.tail = init;

		this.curr = undefined;
		this.numData = 0;
	}
	
	// getter 본질은 함수와 같으나 외부에서 봤을 때는 Data property와 같다.
	// getter와 setter는 Access property이다.
	get	fullData() {
		let	temp = this.head.next;
		let str = '';

		while (temp != null) {
			str += `${temp.data}, `
			temp = temp.next;
		}
		return (JSON.parse(`[${str.slice(0, -2)}]`));	
	}

	length() {
		return (this.numData);
	}

	append(data) {
		let newNode = new Node(data);

		this.tail.next = newNode;
		this.tail = newNode;
		this.numData += 1;
	}

	printAllData() {
		let	temp = this.head;
		let str = '';

		temp = temp.next;
		while (temp != null) {
			str += `${temp.data}, `
			temp = temp.next;
		}
		//template literal 은 리터럴 값을 특수한 방법으로 처리할 수 있는 템플릿이다.
		return (`[${str.slice(0, -2)}]`);
	}

	printError() {
		console.log("Error!");
	}

	insertData(data, idx) {
		let	newNode = new Node(data);
		let	temp = this.head.next;

		if (idx > this.length() - 1)
		{
			this.printError();
			return ;
		}
		for (let i = 0; i < idx - 1; ++i) {
			temp = temp.next;
		}
		newNode.next = temp.next;
		temp.next = newNode;
	}
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);
l.insertData(42, 3)
l.insertData(42, 1)
// console.log(l.fullData);
console.log(l.printAllData());
