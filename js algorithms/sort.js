//bubble
function bubble(arr) {
	for (let i = 0, length1 = arr.length; i < length1; i++) {
		for (let j = 1, length2 = arr.length - i; j < length2; j++) {
			if (arr[j] < arr[j - 1]) {
				let temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

//select

function select(arr) {
	for (let i = 0, length1 = arr.length; i < length1; i++) {
		let minIndex = i;
		for (let j = i + 1, length2 = arr.length; j < length2; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

//insert

function insert(arr) {
	for (let i = 0, length1 = arr.length; i < length1; i++) {
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j + 1] < arr[j]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

//merge
function merge(left, right) {
	var ret = [];
	var i = 0;
	var j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			ret.push(left[i]);
			i++;
		} else {
			ret.push(right[j]);
			j++;
		}
	}
	return ret.concat(left.slice(i), right.slice(j));
}

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	} else {
		var mid = Math.floor(arr.length / 2);
		var left = arr.slice(0, mid);
		var right = arr.slice(mid);
		return merge(mergeSort(left), mergeSort(right));
	}
}


//quick
function quickSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr[pivotIndex];
	arr.splice(pivotIndex, 1);
	var left = [];
	var right = [];
	for (var i = 0, length1 = arr.length; i < length1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([pivot], quickSort(right));
}