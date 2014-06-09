var fs = require('fs');

var path = process.argv[2];
var filter = process.argv[3];
// console.log(filter);

fs.readdir(path, function(err, data){
  if (err) throw err;
  logArray(data);
});

var logArray = function (fileArray) {
  //loop through files in this directory
  for (var i = 0; i < fileArray.length; i++) {
    var filename = fileArray[i];
    var ext = filename.split('.')[1];
    if (ext === filter) {
      console.log(filename);
    }
  }
};