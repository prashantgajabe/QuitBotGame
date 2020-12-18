var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userprogress.routes');
var userbaseRouter = require('./routes/userbase.routes');
var quizRouter = require('./routes/quiz.routes');
var picwordRouter = require('./routes/picworddb.routes');
var picwordlistRouter = require('./routes/picwordlist.routes');
var mathriddlesRouter = require('./routes/mathriddles.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'quizbotng','public')));

app.use('/', indexRouter);
app.use('/users', userbaseRouter);
app.use('/api/userbase', userbaseRouter);
app.use('/api/quiz', quizRouter);
app.use('/api/picworddb', picwordRouter);
app.use('/api/piclist', picwordlistRouter);
app.use('/api/mathriddle', mathriddlesRouter);
app.use('/api/userprog', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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
