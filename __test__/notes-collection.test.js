'use strict';
require('@code-fellows/supergoose');

const Note = require('../lib/models/notes-collection.js');

describe('Note Model', () => {
  it('can create() a new note item', () => {
    const obj = { text: 'Test note', category: 'Work' };
    return Note.create(obj).then((record) => {
      Object.keys(obj).forEach((key) => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });
  it('can get() a note item', () => {
    const obj = { text: 'Test note', category: 'Work' };
    const expected = { text: 'Test note', category: 'Work' };
    return Note.create(obj).then((record) => {
      return Note.get(record._id).then((data) => {
        expect(data[0].text).toEqual(expected.text);
        expect(data[0].category).toEqual(expected.category);
      });
    });
  });
  it('can delete() a note item', () =>{
    const obj = { text: 'Test note', category: 'Work' };
    return Note.create(obj).then((record)=>{
      return Note.delete(record._id).then(() =>{
        return Note.get(record._id).then((data) =>{
          expect(data._id).toBeUndefined(data._id);
        });
      });
    });
  });
  it('can update() a note item', ()=>{
    const obj = { text: 'Test note', category: 'Work' };
    const newObj = {text: 'New Note', category: 'new'};
    return Note.create(obj).then((record) =>{
      return Note.update(record._id,newObj).then(() =>{
        return Note.get(record._id).then((data) =>{
          expect(newObj.text).toEqual(data[0].text);
        });
      });
    });
  });

});