/*var http = require('http');
var url = process.argv[2];
var data = ;

http.get(url, function(chunk){
    chunk.setEncoding('utf8');
    chunk.on('data',function(resp){
        data += resp;
    });
    chunk.on('error',function(resp){
        data += resp;
    });
    chunk.end()
})
*/

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))  
})