const _ = require('lodash');
const fs = require('fs');
const path = require('path');


const file1 = {
	"host": "hexlet.io",
	"timeout": 50,
	"proxy": "123.234.53.22",
	"follow": false,
	"goDeep1": {
		"key2": "obj2",
		"goDeep2": {
			"key3": "obj3"
		}
	}
};

const file2 = {
	"timeout": 20,
	"verbose": true,
	"host": "hexlet.io"
};

// function getPath(filePath) {
// 	const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
//   return absolutePath;
// }

// const readFile = (filePath) => {
// 	const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
// 	const getFile = JSON.parse(fs.readFileSync(absolutePath));
// 	return getFile;
// }

const file3 = readFile('../__fixtures__/file1.json');
const file4 = readFile('/mnt/c/Slow/Hexlet/frontend-project-46/__fixtures__/file2.json');

const comparison = (path1, path2) => {
	//   console.log(path1);
	const keys1 = Object.keys(path1);
	const keys2 = Object.keys(path2);
	const mergedArr = _.union(keys1, keys2);
	// console.log(keys1, keys2);
	// console.log(mergedArr);
	const comparedArr1 = mergedArr.map((key) => {
		if (!keys2.includes(key)) {
			return `- ${key}: ${path1[key]}`;
		} 
		if (!keys1.includes(key)) {
			return `+ ${key}: ${path2[key]}`;
		}
		if (path1[key] === path2[key]) {
			return `  ${key}: ${path1[key]}`;
		}

		return `- ${key}: ${path1[key]}\n+ ${key}: ${path2[key]}`;
	})

	return comparedArr1.join('\n');
};

// const exlusion = (path1, path2) = {
// 	const newArr = comparison(path1, path2);
//   const result = 
// };

console.log('1-2 =', comparison(file1, file2));
console.log('3-4 =', comparison(file3, file4));


export default comparison;