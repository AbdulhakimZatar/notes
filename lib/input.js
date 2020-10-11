'use strict';

const minimist = require('minimist');

function Input() {
    const args = minimist(process.argv.slice(2));
    this.action = this.validateAction(args) ? "add" : false;
    if (this.action) {
        this.payload = this.vaildatePayload(args) ? (args.a) || (args.add) : false;
    }
}

Input.prototype.validateAction = function (action) {
    const act = Object.keys(action)
    if (act.length > 2) {
        return false
    } else if (act.includes('a') || act.includes('add')) {
        return true
    } else { return false }
}

Input.prototype.vaildatePayload = function (payload) {
    const payl = (payload.a) || (payload.add);
    if (payl.length > 0) {
        return (payl)
    } else { return false }
}

module.exports = Input;