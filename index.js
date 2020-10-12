'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const options = new Input();
const run = new Notes();

// run.execute(options);
// console.log(options.valid());
options.valid() ? run.execute(options) : run.execute(options);

// Notes.execute(options);

// function help() {
//   console.log(`USAGE: node index.js --add "<note>"`);
//   // process.exit();
// }