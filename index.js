#!/usr/bin/node

let http = require("http");
let fs = require("fs");


http.createServer(function(request, response){

    var archivo = "index.html";

    if(request.url != "/"){

        archivo = request.url.substring(1);
    }

    fs.readFile(archivo, function(error, data){

    if(error){ console.log("Error"); return}

    response.writeHead(200);

    response.end(data);
    });

}).listen(1095);
