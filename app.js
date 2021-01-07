const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost: 27017/hanziDelightDB', {useNewUrlParser: true});

const articlesSchema = {
  title: String,
  content: String
}

const Article = mongoose.model("Article", articlesSchema);

app.get('/', function(req, res){
  res.render('index');
});

app.get('/lesson1', function(req, res){
  res.render('lesson1');
});

app.get('/toc', function(req, res){
  res.render('toc');
});

app.listen(3012, function(req, res){
  console.log("Server running on port 3012");
})
