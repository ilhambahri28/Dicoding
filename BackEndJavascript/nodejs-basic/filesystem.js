const fs = require('fs');
 
const data = fs.readFileSync('notes.txt', 'UTF-8');
console.log(data);
 
const readableStream = fs.createReadStream('notes.txt', {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});