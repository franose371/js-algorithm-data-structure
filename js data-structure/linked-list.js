class LinkList {
	constructor() {
		this.count = 0;
		this.head = null;
		this.Node = class {
			constructor(data, next) {
				this.data = data;
				this.next = null;
			}
		}
	}
	getLength() {
		return this.count;
	}
	getElement(index) {
		let cur = this.head;
		if (index && index > 0 && index < this.count) {
			while (index > 0) {
				cur = cur.next;
				index--;
			}
			return cur.next;
		}
	}
	search(ele) {
		let cur = this.head;
		while (cur) {
			if (cur.data === ele) {
				return cur;
			} else {
				cur = cur.next;
			}
		}
		return false;
	}
	insert(ele, index) {
		//index可选，若不传index，则默认在最后插入
		if (index && index > 0 && index < this.count) {
			//传入index
			let cur = this.head;
			let node = new this.Node(ele, index);
			while (index > 0) {
				cur = cur.next
				index--;
			}
			cur.next = node;
			count++;
		} else if (!index) {
			//若不传入index
			let node = new this.Node(ele);
			let cur = this.head;
			if (this.head == null) {
				//head指针为空，即插入的为链表中的第一个元素时
				this.head = node;
			} else {
				//若head不为空时
				while (cur.next) {
					//一直向后查找到next指针为空时，就是插入的位置
					cur = cur.next;
				}
				cur.next = node;
			}
			this.count++;
		} else {
			//插入不成功，返回false
			return false;
		}
	}
	delete(index) {
		let cur = this.head;
		if (!index) {
			//若没有输入index，则删除最后一个
			while (cur.next.next) {
				cur = cur.next;
			}
			cur.next = null;
			this.count--;
			return true;
		}
		if (index && index > 0 && index < this.count) {
			while (index - 1 > 0) {
				cur = cur.next;
				index--;
			}
			if (cur.next.next !== null) {
				//将指针指向下一个元素
				cur.next = cur.next.next;
				this.count--;
			} else {
				cur.next = null;
			}
			return true;
		}
		return false;
	}

}