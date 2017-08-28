class Stack {
	constructor(max, data) {
		this.data = data || [];
		//栈顶指针
		this.top = this.data.length;
		this.max = max;
	}
	isEmpty() {
		if (this.top === 0) {
			return true;
		} else {
			return false;
		}
	}
	isFull() {
		if (this.top === this.max) {
			return true;
		} else {
			return false;
		}
	}
	getTop() {
		return this.data[this.top - 1];
	}
	push(element) {
		this.data[this.top] = element;
		this.top++;
	}
	pop() {
		if (this.top > 0) {
			this.data.pop();
			this.top--
		} else {
			return false;
		}
	}
}

//十进制转换为八进制
function decToOcx(num) {
	var stack = new Stack();
	var Mod, x;
	var ocx = [];
	var ret = "";
	while (num !== 0) {
		Mod = num % 8;
		stack.push(Mod);
		num = Math.floor(num / 8);
	}
	while (!stack.isEmpty()) {
		ocx.push(stack.getTop());
		stack.pop();
	}
	for (var i = 0, length1 = ocx.length; i < length1; i++) {
		ret += ocx[i].toString();
	}
	return parseInt(ret)
}
console.log(decToOcx(10));