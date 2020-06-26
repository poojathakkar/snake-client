let connection;
const net = require('net');

const handleUserInput = function(key) {
  if(key === '\u0003') {
    process.exit();
  }
  if(key === 'w') {connection.write('Move: up')};
  if(key === 'a') {connection.write('Move: up')};
  if(key === 's') {connection.write('Move: left')};
  if(key === 'd') {connection.write('Move: right')};
};

const setupInput = function(conn) {
  connection = conn;
  connection.write("PTM");
  connection.setEncoding('utf8');
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput); //callback to pass any key strokes to hUI;
  return stdin;
}
module.exports = setupInput;