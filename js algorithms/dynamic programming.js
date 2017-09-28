// var line = 5;
// var triangle = [
// 	[7],
// 	[3, 8],
// 	[8, 1, 0],
// 	[2, 7, 4, 4],
// 	[4, 5, 2, 6, 5]
// ];

// function maxSum(number, tri) {
// 	var dp = [];
// 	for (let i = 0; i < number; i++) {
// 		dp[i] = [];
// 		for (let j = 0; j < tri[i].length; j++) {
// 			dp[i][j] = tri[i][j];
// 		}
// 	}
// 	for (var k = 0; k < number; k++) {
// 		dp[number - 1][k] = tri[number - 1][k];
// 	}
// 	for (var i = (number - 1) - 1; i >= 0; i--) {
// 		for (var j = 0; j < tri[i].length; j++) {
// 			dp[i][j] = (dp[i + 1][j] > dp[i + 1][j + 1] ? dp[i + 1][j] : dp[i + 1][j + 1]) + tri[i][j];
// 		}
// 	}
// 	return dp[0][0];
// }

// console.log(maxSum(5, triangle));

var output = [];

function printMatrix(matrix) {
	var row = matrix.length;
	var col = matrix[0].length;
	if (row <= 2 && col <= 2) {
		output.push(matrix[row - 2][col - 2]);
		output.push(matrix[row - 2][col - 1]);
		output.push(matrix[row - 1][col - 1]);
		output.push(matrix[row - 1][col - 2]);
		return output;
	} else {
		for (var i = 0; i < col; i++) {
			output.push(matrix[0][i]);
		}
		for (var j = 1; j < row; j++) {
			output.push(matrix[j][col - 1]);
		}
		for (var k = col - 2; k >= 0; k--) {
			output.push(matrix[row - 1][k]);
		}
		for (var l = row - 2; l >= 1; l--) {
			output.push(matrix[l][0]);
		}
		var newMatrix = [];
		for (var a = 1; a < row - 2; a++) {
			newMatrix[a - 1] = Matrix[a];
			for (var b = 1; b < col - 2; b++) {
				newMatrix[a - 1][b - 1] = Matrix[a][b];
			}
		}
		printMatrix(matrix);
		return output;
	}

}

printMatrix([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
])