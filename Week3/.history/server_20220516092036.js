const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer(function(req, res)  
{
    console.log(`__dirname: ${});

    //fs.readFile(__dirname + req.url)
}); 

server.listen(port, function()
{
    console.log(`Server running at Port: ${port}`);
});