var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const os = require('os');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));






var calculate = require('./calculate');
var calculate2 = require('./calculate2');

var os1 = require('./1os');
var ls = require('./ls')


;



var artists = [
  {
    id:1,
    name: 'Metallica!!'
  },
  {
    id:2,
    name: 'Madonna'
  },
  {
    id:3,
    name: 'Iron Maiden'
  }
];

app.get('/', function (req, res) {
  res.end('hello API');
})

app.get('/artists', function(req,res) {
res.send(artists)
})

app.get('/artists/:id', function(req,res) {
  console.log(req.params);
  var artist = artists.find(function (art_id) {
    return art_id.id === Number(req.params.id)
  });
  res.send(artist);
})

app.post('/artists', function (req,res) {
  var artist = {
    id: Date.now(),
    name: req.body.name
  }
  artists.push(artist);
  console.log(req.body);
  res.send(artist);
})

app.put('/artists/:id', function(req,res) {
  console.log(req.params);
  var artist = artists.find(function (art_id) {
    return art_id.id === Number(req.params.id)
  });
  artist.name = req.body.name;
  res.sendStatus(200);
})

app.delete('/artists/:id', function(req,res) {
  artists = artists.filter(function (artist) {
    return artist.id !== Number(req.params.id)
  })
  res.sendStatus(200);
})

app.listen(3012, function () {
  console.log('server started')
})

