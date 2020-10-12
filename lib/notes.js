'use strict';

const notes = {};

notes.execute = function (opts) {
  if (opts.payload == false) {
    console.log(`Error | Empty flag, use: node index.js --add "your note here"`);
  } else if (opts.action) {
    let note = {
      id: getRandomInt(1000),
      note: opts.payload,
    };
    notes.add(note);
  } else {
    console.log('Error | Invalid argument');
  }
};

notes.add = function (note) {
  console.log(`Adding Note: ${note.note} | ID: ${note.id}`);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = notes;
