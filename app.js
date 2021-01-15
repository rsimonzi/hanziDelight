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

const lessonsSchema = {
  id: Number,
  pageNumber: String,
  chapter: String,
  lesson: String,
  charList: [String],
  speakers: [String],
  sentences: [String],
  translatedSentences: [String],
  grammarPoints: [String]
}

const Lesson = mongoose.model("Lesson", lessonsSchema);

const lesson1 = new Lesson({
  id: 1,
  pageNumber: '第一页 | dìyīyè | Page 1',
  chapter: "第一章 | dìyīzhāng | Chapter 1",
  lesson: "第一课 | dìyīkè | Lesson 1",
  charList: ['你', '好', '李', '王', '太',
   '先', '生', '是', '北', '京',
    '东', '去', '在', '吗', '我'],
  speakers: ['李太太', '王先生', '李太太', '王先生', '李太太',
  '王先生', '李太太', '王先生'],
  sentences: [
    '你好!', "你好!", '我是李太太。', '我是王太太。', '你好王先生。',
    '你好李太太。', '你去北京吗。', '我去北京。 我在东京。'],
  translatedSentences: [
  'Hello!',
  'Hello!',
  'I am Mrs. Li.',
  'I am Mrs. Wang.',
  'Hello Mrs. Wang.',
  'Hello Mrs. Li.',
  'Are you going to Beijing?',
  'I am going to Beijing. I am in Tokyo.'
  ],
  grammarPoints: [
'',
'',
'',
'',
''
  ]
});

const lesson2 = new Lesson ({
  id: 2,
  pageNumber: '二 | 弐 | 2',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第二課 | だい二か | Lesson 2",
  charList: ['出', '時', '山', '本', '外'],
  speakers: ['ブラウン', 'スミス', 'ブラウン', 'スミス',
   'ブラウン', 'スミス', 'ブラウン', 'スミス',
   'ブラウン', 'スミス','スミス', 'ブラウン', 'スミス'],
  sentences: [
    '時々食べる', "本を読む", '時々学ぶ', '山を視る',
  '本を観る', '時々見る', '外に行く', '山から来る', '時々する',
  'スミスさんに会う', '本を買う', '外に出る', '山に出る'
  ],
  translatedSentences: [
  'I/We/He, she/They eat sometimes',
  'I/We/He, she/They read a book',
  'I/We/He, she/They learn sometimes',
  'I/We/He, she/They see a mountain',
  'I/We/He, she/They see a book',
  'I/We/He, she/They see sometimes',
  'I/We/He, she/They go outside',
  'I/We/He, she/They come from the mountain',
  'I/We/He, she/They sometimes do',
  'I/We/He, she/They meet Mr. Smith',
  'I/We/He, she/They buy a book',
  'I/We/He, she/They are going outside',
  'I/We/He, she/They are leaving the mountain'
],
grammarPoints: [
'',
'',
'',
'',
''
]
});

const defaultLessons = [lesson1, lesson2];

Lesson.insertMany(defaultLessons, function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("default Lessons successfully saved to DB");
  }
});

let lessonObject = [{
  id: 1,
  pageNumber: '第一页 | dìyīyè | Page 1',
  chapter: "第一章 | dìyīzhāng | Chapter 1",
  lesson: "第一课 | dìyīkè | Lesson 1",
  charList: ['你', '好', '李', '王', '太',
   '先', '生', '是', '北', '京',
    '东', '去', '在', '吗', '我'],
  speakers: ['李太太', '王先生', '李太太', '王先生', '李太太',
  '王先生', '李太太', '王先生'],
  sentences: [
    '你好!', "你好!", '我是李太太。', '我是王太太。', '你好王先生。',
    '你好李太太。', '你去北京吗。', '我去北京。 我在东京。'],
  translatedSentences: [
  'Hello!',
  'Hello!',
  'I am Mrs. Li.',
  'I am Mrs. Wang.',
  'Hello Mrs. Wang.',
  'Hello Mrs. Li.',
  'Are you going to Beijing?',
  'I am going to Beijing. I am in Tokyo.'
  ],
  grammarPoints: [
'',
'',
'',
'',
''
  ]},
{
  id: 2,
  pageNumber: '二 | 弐 | 2',
  chapter: "第一章 | だいいっしょう| Chapter 1",
  lesson: "第二課 | だい二か | Lesson 2",
  charList: ['出', '時', '山', '本', '外'],
  speakers: ['ブラウン', 'スミス', 'ブラウン', 'スミス',
   'ブラウン', 'スミス', 'ブラウン', 'スミス',
   'ブラウン', 'スミス','スミス', 'ブラウン', 'スミス'],
  sentences: [
    '時々食べる', "本を読む", '時々学ぶ', '山を視る',
  '本を観る', '時々見る', '外に行く', '山から来る', '時々する',
  'スミスさんに会う', '本を買う', '外に出る', '山に出る'
  ],
  translatedSentences: [
  'I/We/He, she/They eat sometimes',
  'I/We/He, she/They read a book',
  'I/We/He, she/They learn sometimes',
  'I/We/He, she/They see a mountain',
  'I/We/He, she/They see a book',
  'I/We/He, she/They see sometimes',
  'I/We/He, she/They go outside',
  'I/We/He, she/They come from the mountain',
  'I/We/He, she/They sometimes do',
  'I/We/He, she/They meet Mr. Smith',
  'I/We/He, she/They buy a book',
  'I/We/He, she/They are going outside',
  'I/We/He, she/They are leaving the mountain'
],
grammarPoints: [
'',
'',
'',
'',
''
]}
];

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
    pageNo: lessonObject[0].pageNumber,
    chapter: lessonObject[0].chapter,
    lesson: lessonObject[0].lesson,
    list: lessonObject[0].charList,
    speakers: lessonObject[0].speakers,
    sentences: lessonObject[0].sentences,
    translatedSentences: lessonObject[0].translatedSentences,
    grammarPoints: lessonObject[0].grammarPoints
  })
});

app.get('/lessons', function(req, res) {
  res.render('lessons');
});

app.listen(3012, function(req, res) {
  console.log("Server running on port 3012");
})
