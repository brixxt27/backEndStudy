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
	constructor(data) {
		this.data = data;
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

	get	fullData() {
		let	temp = this.head;
		let str = '';

		temp = temp.next;
		while (temp != null) {
			str += `${temp.data}, `
			temp = temp.next;
		}
		return (JSON.parse(`[${str.slice(0, -2)}]`));	
	}
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(4);
l.append(5);
console.log(l.fullData);
