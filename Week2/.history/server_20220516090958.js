const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res)
{
    console.log(__dirname);

    //fs.readFile(__dirname + req.url)
}); 

server.listen