const http = require("http")
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'})
    response.end('<i>Hello World,Welcome to NodeJS<i>')
}).listen(8000)