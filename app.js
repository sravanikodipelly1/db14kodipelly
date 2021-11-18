require('dotenv').config();
var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var pin = require("./models/pin");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ManagerRouter = require('./routes/Manager');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var pinRouter = require('./routes/pin');
const mongoose = require('mongoose');
var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
const connectionString = 'mongodb+srv://sravanikodipelly:sravani123@cluster0.63ulu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
var app = express();
// We can seed the collection if needed on
async function recreateDB(){
 // Delete everything
 await pin.deleteMany();
 let instance1 = new pin({pin_type:"2-digit", size:'Small'});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First object saved")
 });
 
 let instance2 = new pin({pin_type:"4-digit", size:'medium'});
 instance2.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("Second object saved")
});

 let instance3 = new pin({pin_type:"6-digit", size:'Large'});
 instance3.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("Third object saved")
 });

}

let reseed = true;
if (reseed) { 
  recreateDB();
}
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
  useUnifiedTopology: true
  });
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/pin', pinRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Manager', ManagerRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("sdkjbvvvvvvvvvvvvxc")
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;