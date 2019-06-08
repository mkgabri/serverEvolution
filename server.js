var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
      '<html>'+
      ' <head>'+
      ' <meta charset="utf-8" />'+
      ' <title>Pagina Node.js!</title>'+
      ' </head>'+
      ' <body>'+
      '  <p>Sono un paragrafo <strong>HTML</strong>!</p>'+
      ' </body>'+
      '</html>');
    res.end();
//    res.end('Ciao a tutti, sono un web server!!!!!');
//    res.end('<p>Io sono un paragrafo <strong>HTML</strong></p>');
});
server.listen(8080);