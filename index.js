var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var {db, addNote, getNote, updateNote} = require('./db.js')

var index = require('./index');
const bodyParser = require('body-parser');
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
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/wallTextures', express.static(path.join(__dirname, 'wallTextures')));
app.use('/stickynotes', express.static(path.join(__dirname, 'stickynotes')));
app.use(express.json())

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
  res.render('samplePage', require('./sample.json'));
  })
app.get('/signup', function(req,res){
  res.render('signup');
})

app.get('/communityProject1', function(req,res){
  res.render('communityProject1');
})

app.get('/communityProject2', function(req,res){
  res.render('communityProject2');
})

app.get('/clearStorage', function(req, res){
  res.render('clearStorage')
})

app.get('/faq', function(req, res){
	res.render('faq');

})

app.get('/viewNote/:id', function(req, res){
  var id = req.params.id
  console.log('requesting id '+id)
  getNote(id).then(note => {
    console.log(note)
    res.render('createWalls', note)
  }).catch(e => {res.status(404)})
})

app.post("/addNote", function(req, res){
  const note = req.body
  console.log(note)
  addNote(note).then(id => {
    console.log("Note "+id+" added")
    res.send(id)
  }).catch(e => res.status(400))
})

app.post('/updateNote', function(req, res){
  console.log(req.body)
  updateNote(req.body.id, req.body.note, req.body.title).then(result => res.send('Success')).catch(e => res.status(400))
}) 

// Example route
// app.get('/users', user.list);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});




