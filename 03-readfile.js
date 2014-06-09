var fs = require('fs')

var path = process.argv[2];

var file = fs.readFileSync(path).toString();

var lines = file.split('\n');

// log the number of new line characters
console.log(lines.length - 1);