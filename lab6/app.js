var express = require('express');
var bodyParser=require('body-parser');
var fs = require('fs');

var app = express();
app.set('view engine','ejs');




//app.set('views', __dirname + 'views');

//express.set('/assets',express.static('assets'))
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/',function (req,res){

   res.render('index');
});

app.get('/contactus',function (req,res){


  res.render('contactus')


});

app.post('/contactus',urlencodedParser,function (req,res){
 console.log(req.body)
 //alert("Thank you");
   var myWrite =fs.createWriteStream(__dirname+'/output.txt');
   myWrite.write(JSON.stringify(req.body));

  res.render('contactus')


});



app.listen(3000,'127.0.0.1');

console.log(' server is running on port 3000');
