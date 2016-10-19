var http = require('http');
var fs = require ('fs')

http.createServer(function (req,res){
  if (req.url=='/'){
    res.writeHead(200,{'Conntent-Type':"plain/text"})
     fs.createReadStream(__dirname+'/output.txt').pipe(res)

  }
}).listen(3000,'127.0.0.1')
