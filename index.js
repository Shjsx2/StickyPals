var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./index');
// Example route
// var user = require('./routes/user');

var app = express();
var router = express.Router();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use('/icons', express.static(path.join(__dirname, 'icons')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', function(req, res) {
    res.render('login');
});

app.get('/index', function(req, res){
  res.render('index')
})

app.get('/createWalls', function(req,res){
    res.render('createWalls');
})

app.get('/tutorial', function(req,res){
  res.render('tutorial');
})

app.get('/settings', function(req,res){
  res.render('settings');
})

app.get('/exploreCommunity', function(req,res){
  res.render('exploreCommunity', require('./communityData.json'));
})

app.get('/viewGallery', function(req,res){
  res.render('viewGallery', require('./galleryData.json'));
})



app.get('/samplePage', function(req,res){
  res.render('samplePage');
  })


app.get('/signup', function(req,res){
  res.render('signup');
})

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});