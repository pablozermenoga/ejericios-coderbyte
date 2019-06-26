const helpers = {};
function EightQueens(strArr) {
	const newArr = helpers.arraySetup(strArr);
	const len = newArr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 1 + i; j < len; j++) {
			if (helpers.isAttacking(newArr[i], newArr[j])) {
				return `(${newArr[i].slice(0, 2)})`;
			}
		}
	}
	return true;
}
Object.assign(helpers, {
	arraySetup(strArr) {
		return strArr.map(val => JSON.parse(val
			.replace(/\(/g, '[')
			.replace(/\)/g, ']')));
	},
	isAttacking(pos1, pos2) {
		return (pos1[0] === pos2[0] ||
			pos1[1] === pos2[1] ||
			Math.abs(pos1[0] - pos2[0]) === Math.abs(pos1[1] - pos2[1]));
	}
});
console.log(EightQueens( ["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)" , "(7,7)", "(5,8)"]));