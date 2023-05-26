const fs = require('fs');
const { Readable, Writable } = require('stream');
const path = require('path');

// Set highWaterMark value
const highWaterMark = 15;

// Create readable stream
const readableStream = new Readable({
  highWaterMark: highWaterMark,
  read() {}
});

// Create writable stream
const outputFilePath = path.resolve(__dirname, 'output.txt');
const writableStream = fs.createWriteStream(outputFilePath);

// Set newline separator
const newlineSeparator = '\n';

// Pipe readable stream to writable stream
readableStream.pipe(writableStream);

// Read input.txt and push the text to readable stream
const inputFilePath = path.resolve(__dirname, 'input.txt');
const inputStream = fs.createReadStream(inputFilePath, {
  highWaterMark: highWaterMark,
  encoding: 'utf8'
});

inputStream.on('data', chunk => {
  const lines = chunk.split(newlineSeparator);
  lines.forEach(line => {
    readableStream.push(line + newlineSeparator);
  });
});

inputStream.on('end', () => {
  readableStream.push(null); // Signal the end of readable stream
});
