var express = require('express');
path = require('path');
favicon = require('serve-favicon');
logger = require('morgan');
cookieParser = require('cookie-parser');
bodyParser = require('body-parser');
index = require('./routes/index');
users = require('./routes/users');
posts = require('./routes/posts');
tasks = require('./routes/tasks');
MongoClient = require('mongodb').MongoClient;
var mongojs=require('mongojs')
// db = require('./model/db');
//test = require('./model/test'),
//connect to mlab (remote server )
// MongoClient.connect('mongodb://admin:admin@ds031617.mlab.com:31617/eonline_db_elkhouly', function (err, database) {
//   if (err) throw err;
//   db = database;
//   console.log("Server is running / port 3000 & connect to database")

// })


//connect to localdb

// MongoClient.connect('mongodb://127.0.0.1:27017/projectdb', function (err, database) {
//   if (err) throw err;
//   db = database;
//   console.log("Server is running / port 3000 & connect to database")

// })

//using mongooes local

 //db=mongojs('mongodb://127.0.0.1:27017/projectdb',['tasks']);

//using mongooes mlab
db=mongojs('mongodb://admin:admin@ds031617.mlab.com:31617/eonline_db_elkhouly');



var  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/posts', posts)
app.use('/api', tasks);

// app.use(function(req, res, next){
//   req.db = db;
//   next();
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
