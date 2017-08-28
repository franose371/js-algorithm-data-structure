class Queue {
	constructor(maxlen) {
		this.data = [];
		this.front = -1; //队头指针，一般指向队头的前一个位置
		this.rear = -1; //队尾指针
		this.count = 0; //记录元素个数
		this.maxlen = maxlen;
	}
	isEmpty() {
		if (this.count === 0) {
			return true;
		} else {
			return false;
		}
	}
	isFull() {
		if (this.count === this.maxlen) {
			return true;
		} else {
			return false;
		}
	}
	getFront() {
		//取队头元素
		if (this.isEmpty()) {
			return false;
		} else {
			return this.data[(this.front + 1) % this.maxlen];
		}
	}
	append(ele) {
		//入队
		if (this.isFull()) {
			return false;
		} else {
			this.rear = (this.rear + 1) % this.maxlen;
			this.data[this.rear] = ele;
			this.count++;
		}
	}
	serve() {
		//出队
		if (this.isEmpty()) {
			return false;
		} else {
			this.front = (this.front + 1) % this.maxlen;
			this.count--;
			return this.data[this.front];
		}
	}
}

//打印杨辉三角
var outNumber = function(n) {
	var s1, s2;
	var queue = new Queue(n);
	console.log(1);
	queue.append(1);
	for (var i = 2, length1 = n; i <= length1; i++) {
		s1 = 0;
		for (var j = 1, length2 = i - 1; j <= length2; j++) {
			s2 = queue.serve();
			console.log(s1 + s2);
			queue.append(s1 + s2);
			s1 = s2;
		}
		console.log(1);
		queue.append(1);
	}

}