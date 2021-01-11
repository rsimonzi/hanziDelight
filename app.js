const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const _ = require('lodash');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost: 27017/hanziDelightDB', {
  useNewUrlParser: true
});

const articlesSchema = {
  title: String,
  content: String
}

const Article = mongoose.model("Article", articlesSchema);

var lessonObject = {
  id: 1,
  chapter: "第一章 | dìyīzhāng | Chapter 1",
  lesson: "第一课 | dìyīkè | Lesson 1",
  charList: ['食', '読', '学', '視', '観', '見', '行', '来', '会', '買'],
  speakers: [],
  sentences: ['食べる', "読む", '学ぶ', '視る', '観る', '見る', '行く', '来る', 'する', '会う', '買う'],
  translatedSentences: [
  'I/We/He, she/They eat',
  'I/We/He, she/They read',
  'I/We/He, she/They learn',
  'I/We/He, she/They see',
  'I/We/He, she/They see',
  'I/We/He, she/They see',
  'I/We/He, she/They go',
  'I/We/He, she/They go',
  'I/We/He, she/They do',
  'I/We/He, she/They meet',
  'I/We/He, she/They buy'
]
};

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/toc', function(req, res) {
  res.render('toc');
});

app.get('/signin', function(req, res) {
  res.render('signin');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.get('/lessons/:text', function(req, res) {
  res.render('lessons', {
    chapter: lessonObject.chapter,
    lesson: lessonObject.lesson,
    list: lessonObject.list
  })
});

app.get('/lessons', function(req, res) {
  res.render('lessons');
});

app.listen(3012, function(req, res) {
  console.log("Server running on port 3012");
})
