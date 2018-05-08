var express = require('express');
var app = express();
var port = 3000;
var primes = require('./primes.js');



app.get('/', function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Hello HTML');
})

app.get('/isPrime/:number', function(req, res){
    res.status(200).send(primes.isPrime(req.params.number));    
})

exports.stop = function(){
    server.close();
}
var server = app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
