const http = require('http');
const fs = require('fs');
const mime = require('mime-types');

let lookup = mine.lookup;

const port = 3000;

const server = http.createServer(function(req, res)  
{
    let path = req.url; // alias fro req.url

    if (path =="/" || path =="/home")
    {
        path = "/index.html";
    }

    let mime

    fs.readFile(__dirname + req.url, function(err, data)
    {
        if(err)
        {
            res.writeHead(404); // status - file not found
            console.log(`ERROR ${err.message}`); //output the error message to the page
            return res.end(err.message);
        }
        //no error
        res.writeHead(200); //status - all ok
        return res.end(data);
    });
}); 

server.listen(port, function()
{
    console.log(`Server running at Port: ${port}`);
});