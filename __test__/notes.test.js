'use strict';

const Notes = require('../lib/notes.js');
jest.spyOn(global.console,'log');

describe('Notes Module', () =>{
  it('does nothing if payload is empty', () =>{
    const note = new Notes();
    note.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('log out invalid argument when execute() with missing action', () =>{
    const note = new Notes();
    note.execute({payload:'test test'});
    expect(console.log).toHaveBeenCalled();
  });
  it('log out note and id if command and data are vaild', () =>{
    const note = new Notes();
    note.execute({action:'add', payload:'test test'});
    expect(console.log).toHaveBeenCalled();
  });
});