'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');

jest.mock('minimist');
minimist.mockImplementation(()=>{
  return {
    add: 'test',
  };
});

describe('Input', ()=>{
  xdescribe('validateAction', ()=>{
    it('return undefined if no action was found', ()=>{
      const options = new Input;
      expect(options.validateAction()).toBeUndefined();
    });
    it('return false if it is invalid action', ()=>{
      const options = new Input;
      expect(options.validateAction('foo')).toBeFalsy();
    });
    it('return true if it is vaild action', ()=>{
      const options = new Input;
      const obj = {a: 'test'};
      expect(options.validateAction(obj)).toBeTruthy();
    });
  });
  describe('vaildatePayload', () =>{
    it('return undefined if no flag was found', ()=>{
      const options = new Input;
      expect(options.vaildateText()).toBeUndefined();
    });
    it('return note if text is valid ', ()=>{
      const options = new Input;
      const obj = {a: 'test'};
      expect(options.vaildateText(obj.a)).toEqual(obj.a);
    });
  });
  describe('valid', () =>{
    it('return ture when proper object is given', () =>{
      const options = new Input;
      options.action = 'add';
      options.payload = 'test';
      options.category = 'test';
      expect(options.valid()).toBeTruthy();
    });
    it('return false when not a proper object is given', () =>{
      const options = new Input;
      options.action = undefined;
      options.payload = undefined;
      expect(options.valid()).toBeFalsy();
    });
  });
});