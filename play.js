
// Importing function connect from other file client.js
const connect = require('./client');
const setupInput = require('./input');
console.log('Connecting...');
connect();

setupInput(connect);