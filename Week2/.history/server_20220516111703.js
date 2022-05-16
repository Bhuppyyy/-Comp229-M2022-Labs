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

    let mime_type = lookup(path.substring(1));
    console.log(`MIME TYPE: ${mime_type}`);

    fs.readFile(__dirname + req.url, function(err, data)
    {
        if(err)
        {
            res.writeHead(404); // status - file not found
            return res.end("ERROR: 404 - File Not Found");
        }
        //no error
        res.setHeader("X-Content-Type-Options", "nosniff"); //security guard
        res.writeHead(200); //status - all ok
        return res.end(data); // output the file that was 
    });
}); 

server.listen(port, function()
{
    console.log(`Server running at Port: ${port}`);
});