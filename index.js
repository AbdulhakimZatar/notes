'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const options = new Input();
const run = new Notes();

options.valid() ? run.execute(options) : run.execute(options);
