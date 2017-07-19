var http = require('http');
var fs = require('fs');

//// serves plain text
// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
//     //res object is a writable object/stream
//     myReadStream.pipe(res);

//     //res.end('hey wolfys');
// });

//// serves html
// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);
// });

//// serves json
// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type' : 'application/json'});
//     var myObj = {
//         name: 'marcus',
//         job: 'AP',
//         age: 29
//     };

//     //response end takes string or buffer
//     res.end(JSON.stringify(myObj));
// });

//basic node js routing
var server = http.createServer(function(req, res){
    if(req.url === '/home' || req.url === '/')
    {
        res.writeHead('200', {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contactus')
    {
        res.writeHead('200', {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/jsondata')
    {
        res.writeHead('200', {'Content-Type': 'application/json'});
        var myObj =  {
            name: 'marcus',
            job: 'AP',
            age: 29
        };
        res.end(JSON.stringify(myObj));
    }
    else
    {
        res.writeHead('200', {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});
server.listen(3000, '127.0.0.1');

console.log('yo dawgs, now listening to port 3000');