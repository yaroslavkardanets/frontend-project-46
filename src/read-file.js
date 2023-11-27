const path = require('path');
const fs = require('fs');

const readFilePath = (filePath) => {
	// const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
	const absolutePath = path.resolve(process.cwd(), filePath);
	console.log('absolutePath =', absolutePath);
	const getFile = JSON.parse(fs.readFileSync(absolutePath));
	console.log('getFile =', getFile);
	// return JSON.stringify(getFile);
	return getFile;
};

console.log(path.resolve(process.cwd()));
console.log(path.resolve('../__fixtures__/file2.json'));

console.log(readFilePath('/mnt/c/Slow/Hexlet/frontend-project-46/__fixtures__/file2.json'))
console.log(readFilePath('../__fixtures__/file2.json'))

// export default readFilePath;