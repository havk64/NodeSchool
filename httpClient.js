var http = require('http');
var url = process.argv[2];

http.get(url,function(resp){
    
    //console.log("Got response: "+ resp.statusCode);
        resp.setEncoding('utf8');
        resp.on('data', function(chunk){
            console.log(chunk);
        
    })
    
})

/*
===============> Official Solution <=================
    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })
    */



/*


 http.get('http://www.gnu.org', function(resp){
     resp.setEncoding('utf8');
     newGet = resp;
     console.log("Got response: "+resp.statusCode);
 })
 */