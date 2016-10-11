var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var crypto = require('crypto');
var db;


 app.set('view engine', 'ejs');


app.get('/',function (request,response){
  db.collection('lab7Coll').findOne({},function (err,doc){
   if(err) throw err;
   console.log("Encrypted: "+doc.message)
   var messg= decrypt("asaadsaad", doc.message);
   console.log("Dencrypted: "+messg)
   response.render('home.ejs',{messg:messg});

   db.close();
  });

})
MongoClient.connect('mongodb://127.0.0.1:27017/lab7',function (err,database){
if (err)  throw err;
db=database;
app.listen(3000,'127.0.0.1')
console.log("Server is running at port 3000")

})


function decrypt(key,data) {
    var decipher = crypto.createDecipher('aes256',key);
    var decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}
