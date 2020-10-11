'use strict';

const notes = {}

notes.execute = function(opts){
    if(opts.action){
        notes.add(opts.payload)
    }else {
        console.log("Error | Invalid argument");
    }
}

notes.add = function(note){
    if(note){
        console.log(`Adding Note: ${note}`)
    }else{
        console.log("Error | Didn't provide any text")
    }
}

module.exports = notes