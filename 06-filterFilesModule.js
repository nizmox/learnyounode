module.exports = function(directory, fileExt, callback) {

  var fs = require('fs');
  var path = require('path');

  fs.readdir(directory, function(err, data){
    if (err) {
      return callback(err);
    }
    //call the filter files function
    var output = filterFiles(data);
    //call the callback function and pass in the data
    return callback(null, output);
  });

  var filterFiles = function (fileArray) {

    var filtered = [];
    //loop through files in this directory
    for (var i = 0; i < fileArray.length; i++) {
      //the current filename
      var filename = fileArray[i];
      //get the file extension
      var ext = path.extname(filename);
      //check if the file extension
      if (ext === '.' + fileExt) {
        filtered.push(filename);
      }
    }
    //return results
    return filtered;
  };

};