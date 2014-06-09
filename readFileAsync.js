var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, 'utf8', function(err, data){
  if (err) throw err;
  // console.log(data);
  console.log(countNewLines(data));
});

var countNewLines = function (contents) {
  arr = contents.split('\n');
  return arr.length - 1;
};