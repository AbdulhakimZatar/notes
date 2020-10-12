'use strict';

class Notes {
  constructor() { }

  execute(opts) {
    if (opts == undefined) {
      //
    } else {
      if (opts.payload == false) {
        console.log(`Error | Empty flag, use: node index.js --add "your note here"`);
      } else if (opts.action) {
        let note = {
          id: getRandomInt(1000),
          note: opts.payload,
        };
        this.add(note);
      } else {
        console.log('Error | Invalid argument');
      }

    }
  }

  add(obj) {
    console.log(`Adding Note: ${obj.note} | ID: ${obj.id}`);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = Notes;
