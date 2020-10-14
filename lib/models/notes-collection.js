'use strict';

const noteModel = require('./notes.js');

class Note {
  constructor() {}
  get(_id) {
    if (_id) {
      if (Object.is){
        return noteModel.find( _id );
      }else{
        return noteModel.find( {_id} );
      }
    } else {
      return noteModel.find({});
    }
  }
  create(record) {
    const newRecord = new noteModel(record);
    return newRecord.save();
  }
  update(_id, record) {
    // {new:true} will return the new updated record without it it will return the old record
    return noteModel.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return noteModel.findByIdAndDelete(_id);
  }
}

module.exports = new Note();