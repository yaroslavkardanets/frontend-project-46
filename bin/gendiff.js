#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const _ = require('lodash');
const fs = require('fs');
// import { readFilePath } from '../frontend-project-46/src/read-file.js';
// import { comparison } from '../frontend-project-46/src/index.js';

// console.log(path);

const readFilePath = (filePath) => {
	// const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
	const absolutePath = path.resolve(process.cwd(), filePath);
	// console.log('absolutePath =', absolutePath);
	const getFile = JSON.parse(fs.readFileSync(absolutePath));
	// console.log('getFile =', getFile);
	return getFile;
};

const comparison = (path1, path2) => {
	const keys1 = Object.keys(path1);
	const keys2 = Object.keys(path2);
	const mergedArr = _.union(keys1, keys2);

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

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1> <filepath2>')
  .action((firstFilePath, secondFilePath) => {
    const firstFile = readFilePath(firstFilePath);
    const secondFile = readFilePath(secondFilePath);
    const difference = comparison(firstFile, secondFile);
    console.log(difference);
  });

program.parse();
