var fs = require('fs');


// streaming is greater in performance then simply reading a file.
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

myReadStream.on('data', function(chunkData){
    console.log('new chunk data recived');
    console.log(chunkData);
});