'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    // console.log(args);
    this.action = this.validateAction(args);
    // console.log(this.action);
    if (this.action == 'ADD') {
      this.payload = this.vaildateText((args.a) || (args.add)) ? (args.a) || (args.add) : false;
      this.category = this.vaildateText(args.category) ? args.category : false;
    }else if(this.action == 'DELETE'){
      this.id = this.vaildateText(args.delete) ? args.delete : false;
    }else if(this.action == 'LIST'){
      this.category = this.vaildateText(args.list) ? args.list : false;
    }
  }

  validateAction(action) {
    if (action == undefined) {
      return undefined;
    } else {
      const act = Object.keys(action);
      act.shift();
      // console.log(act);
      if (act.length > 2) {
        return false;
      } else if ((act.includes('a') || act.includes('add')) && (act.includes('category'))) {
        return 'ADD';
      } else if (act.includes('delete')) {
        // console.log('delete');
        return 'DELETE';
      }else if(act.includes('list')){
        return 'LIST';
      } else { return undefined; }
    }
  }

  vaildateText(text) {
    if (text == undefined) {
      return undefined;
    } else {
      if (text.length > 0) {
        return (text);
      } else { return false; }
    }
  }

  valid() {
    // console.log(this.action,this.payload);
    return (this.action && this.payload && this.category) || this.id || this.category;
  }
}

module.exports = Input;