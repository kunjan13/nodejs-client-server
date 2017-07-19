var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.on('data', function(chunkData){
//     console.log('new chunk data recived');
//     myWriteStream.write(chunkData);
// });

//we can do this by PIPE

myReadStream.pipe(myWriteStream);