var filterFiles = function(directory, fileExt, callback) {

  var fs = require('fs');

  var path = process.argv[2];
  var filter = process.argv[3];
  
  console.log(path, filter);

  fs.readdir(path, function(err, data){
    if (err) throw err;
    var output = filterFiles(data);
    console.log(output);
  });

  var filterFiles = function (fileArray) {
    var filtered = [];
    //loop through files in this directory
    for (var i = 0; i < fileArray.length; i++) {
      //the current filename
      var filename = fileArray[i];
      //get the file extension
      var ext = filename.split('.')[1];
      //check if the file extension
      if (ext === filter) {
        filtered.push(filename);
      }
    }
    //return results
    return filtered;
  };


}