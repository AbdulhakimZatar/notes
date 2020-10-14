'use strict';

const Note = require('./models/notes-collection.js');

class Notes {
  constructor() { }

  execute(opts) {
    if (opts == undefined) {
      //
    } else {
      switch (opts.action) {
      case 'ADD':
        if (opts.payload == false) {
          console.log(`Error | Empty flag, use: node index.js --add "your note here" --category "category name"`);
        } else if (opts.category == false) {
          console.log(`Error | Empty cetegory, use: node index.js --add "your note here" --category "category name"`);
          // process.exit();
        } else if (opts.action) {
          let note = {
            text: opts.payload,
            category: opts.category,
          };
          this.add(note);
        } else {
          console.log('Error | Invalid argument use: node index.js --add "your note here" --category "category name"');
        }
        break;
      case 'DELETE':
        // console.log('DELETE');
        this.delete(opts.id);
        break;
      case 'LIST':
        if (opts.category) {
          // console.log('test 1');
          this.list(opts.category);
        } else {
          // console.log('test 2');
          this.list('ALL');
        }
        // this.list();
        break;
      default:
        console.log('Error | Invalid argument');
        // process.exit();
      }


    }
  }

  async add(obj) {
    let n = await Note.create(obj);
    console.log(`Note saved: ${n.text} | Category: ${n.category} | ID: ${n.id}`);
    process.exit();
  }

  delete(deletedID) {
    if(deletedID == false){
      console.log('Error | You need to provide ID to delete note use: node index.js --delete "<ID>"');
      process.exit();
    }else{
      Note.delete(deletedID).then(()=>{
        console.log(`Deleted Note: ${deletedID}`);
        process.exit();
      }).catch(() =>{
        console.log('Error | Wrong ID use: node index.js --delete "<ID>"');
        process.exit();
      });
      
    }

  }

  async list(type) {
    if (type == 'ALL') {
      const allNotes = await Note.get();
      if (allNotes.length == 0) {
        console.log('Error | There is no notes to show');
      } else {
        allNotes.forEach(element => {
          console.log(element.text);
          console.log('Category:', element.category, ' ID:', element.id);
          console.log('--------------------------------------------------');
        });
      }
    } else {
      const speceficCategory = await Note.get({ category: type });

      if (speceficCategory.length == 0) {
        console.log(`Error | There is no notes in ${type}`);
      } else {
        speceficCategory.forEach(element => {
          console.log(element.text);
          console.log('Category:', element.category, ' ID:', element.id);
          console.log('--------------------------------------------------');
        });
      }
    }
    process.exit();
  }
}

module.exports = Notes;
