
var http = require('http')
var bl = require('bl')
var index = [0,1,2];
results = [];
function juggle(i){
        console.log(process.argv[2+i]);
    http.get(process.argv[2+i], callback)
}

function final() {
    console.log(results);
   /* console.log(results[1]);
    console.log(results[2]);*/
}

function callback (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)
                data = data.toString()
                console.log(data);
                results.push(data);
            console.log(results);
        }))  
    }

index.forEach(function(i){
    juggle(i, callback);
    console.log(results);
    if(results.length === index.length)
        final()
    
})
    