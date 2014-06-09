var mymodule = require('./06-filterFilesModule');

// var path = '/Users/Nizmox/Projects/Node_Projects/learnyounode';
// var filter = 'js';

var path = process.argv[2];
var filter = process.argv[3];
  
// console.log(path, filter);

mymodule(path, filter, function(err, data) {
  if (err) throw err;

  //log each file
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});