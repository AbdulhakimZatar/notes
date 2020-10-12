'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.validateAction(args) ? 'add' : false;
    if (this.action) {
      this.payload = this.vaildatePayload(args) ? (args.a) || (args.add) : false;
    }
  }

  validateAction(action) {
    if (action == undefined) {
      return undefined;
    } else {
      const act = Object.keys(action);
      if (act.length > 2) {
        return false;
      } else if (act.includes('a') || act.includes('add')) {
        return true;
      } else { return undefined; }
    }
  }

  vaildatePayload(payload) {
    if (payload == undefined) {
      return undefined;
    } else {
      const payl = (payload.a) || (payload.add);
      if (payl.length > 0) {
        return (payl);
      } else { return false; }
    }
  }

  valid() {
    // console.log(this.action,this.payload);
    return this.action && this.payload;
  }
}

module.exports = Input;