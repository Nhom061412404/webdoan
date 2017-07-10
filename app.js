var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var passport = require('passport');
var fs = require('fs');
var paypal = require('paypal-rest-sdk');
const LocalStrategy = require('passport-local').Strategy;
var paypal = require('paypal-rest-sdk');
var nodemailer = require('nodemailer');
var multer = require('multer');

var thoat = require('./routes/thoat');
var cauhinh = require('./routes/cauhinh');
var dangnhap = require('./routes/dangnhap');
var donhang = require('./routes/donhang');
var sanpham = require('./routes/sanpham');
var saved_resource1 = require('./routes/saved_resource1');
var saved_resource2 = require('./routes/saved_resource2');
var thanhvien = require('./routes/thanhvien');
var thongtin = require('./routes/thongtin');
var them_sp = require('./routes/them_sp');
var xoa_sp = require('./routes/xoa_sp');
var edit_sp = require('./routes/edit_sp');
var them_dh = require('./routes/them_dh');
var xoa_dh = require('./routes/xoa_dh');
var edit_dh = require('./routes/sua_dh');
var them_tv = require('./routes/them_tv');
var xoa_tv = require('./routes/xoa_tv');
var edit_tv = require('./routes/sua_tv');


try {
    var configJSON = fs.readFileSync(__dirname + "/config.json");
    var config = JSON.parse(configJSON.toString());
} catch (e) {
    console.error('File config.json not found or is invalid: ' + e.message);
    process.exit(1);
}
paypal.configure(config.api);


//Initial
var index = require('./routes/index');

//6/4/2017
var accountinformation = require('./routes/accountinformation'); 
var cart = require('./routes/cart');
var changepassword = require('./routes/changepassword');
var checkout = require('./routes/checkout');
var productdetail = require('./routes/productdetail');
var productlist = require('./routes/productlist');
var search = require('./routes/search');
var register = require('./routes/register');
var login = require('./routes/login');
var logout = require('./routes/logout');
var cancelchangeinfo = require('./routes/cancelchangeinfo');
var changeinfo = require('./routes/changeinfo');

var execute = require('./routes/execute');
var payment = require('./routes/payment');
var cancle = require('./routes/execute');

var admin = require('./routes/sanpham');

var app = express();




//DB connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://bao:bao@ds155418.mlab.com:55418/web');
mongoose.set('debug', true);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


require('./config/passport');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Session
app.use(session({
  secret: 'MySuperSecret',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  cookie: { path: '/', httpOnly: true, maxAge: 30 * 30000 },
  rolling: true})
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


//Initial
app.use('/', index);
//6/4/2017
app.use('/accountinformation', accountinformation);
app.use('/cart', cart);
app.use('/changepassword', changepassword);
app.use('/checkout', checkout);
app.use('/productdetail', productdetail);
app.use('/productlist', productlist);
app.use('/search', search);
app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);
app.use('/cancelchangeinfo', cancelchangeinfo);
app.use('/changeinfo', changeinfo);

app.use('/payment', payment);
app.use('/execute', execute);
app.use('/cancle', cancle);


app.use('/admin', dangnhap);
app.use('/dangnhap', dangnhap);
app.use('/cauhinh', cauhinh);
app.use('/donhang', donhang);
app.use('/sanpham', sanpham);
app.use('/saved_resource1', saved_resource1);
app.use('/saved_resource2', saved_resource2);
app.use('/thanhvien', thanhvien);
app.use('/thongtin', thongtin);
app.use('/them_sp', them_sp);
app.use('/xoa_sp', xoa_sp);
app.use('/edit_sp', edit_sp);
app.use('/them_dh', them_dh);
app.use('/xoa_dh', xoa_dh);
app.use('/sua_dh', edit_dh);
app.use('/them_tv', them_tv);
app.use('/xoa_tv', xoa_tv);
app.use('/sua_tv', edit_tv);

app.use('/thoat', thoat);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.admin = 0;
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cd(null,'./upload')
  },
  filename: function(req, file, cb){
    cd(false,file.originalname)
  }
});

module.exports = app;
