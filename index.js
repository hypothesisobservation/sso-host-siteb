var express = require('express');
var app = express();

var requestPort = 3002;

app.use(express.static(__dirname + '/staticReqB')); //3000端口的静态文件，即index.html

app.listen(requestPort, function () {
    console.log('RequesterB is listening on port '+ requestPort);
});