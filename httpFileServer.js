var http = require('http');
var fs = require('fs');
var tcp = process.argv[2];
var file = process.argv[3];

var stream = fs.createReadStream(file);

http.createServer(function(req,resp){
    console.log(req.headers);
    resp.writeHead(200, { 'content-type': 'video/mp4'})
    stream.pipe(resp)
}).listen(tcp)

/*net.createServer(function(socket){
    socket.end(stream);
    
}).listen(tcp)*/

/*
===========> Official Solution <=============
    var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
    
    */