//const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

console.log(chalk.green.bold.inverse('SUDO Success!'));

//console.log(validator.isEmail('andrew@example.com'))
//console.log(validator.isURL('http://example.com'))