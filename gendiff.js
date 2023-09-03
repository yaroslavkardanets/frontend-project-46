#!/usr/bin/env node

const { program } = require('commander');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1> <filepath2>');

program.parse();

