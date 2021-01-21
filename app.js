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
  idNo: Number,
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
idNo: 1,
pageNumber: '第一页 | dìyīyè | Page 1',
chapter: "第一章 | dìyīzhāng | Chapter 1",
lesson: "第一课 | dìyīkè | Lesson 1",
charList: ['你', '好', '有', '钱', '太','先', '生', '是', '北', '京', '东', '去', '在', '我', '吗'],
speakers: ['京太太', '东先生', '东太太', '京太太', '京太太', '京太太', '东太太', '东太太', '京太太', '京太太', '京太太'],
sentences: [
'你好!', "你好!", '我是东先生', '我是京太太', '你好东先生',
'你好京太太', '我有钱。我去北京', '你在东京吗', '我在北京','我有钱', '我去东京'],
translatedSentences: [
'Hello!',
'Hello!',
'I am Mr. Dong.',
'I am Mrs. Jing.',
'Hello Mrs. Jing.',
'Hello Mr. Dong.',
'I have money. I am going to Beijing.',
'Are you going to Tokyo?',
'I am in Beijing.',
'I have money.',
'I am going to Tokyo.'
],
grammarPoints: [
'',
'',
'',
'',
''
]
});

const lesson2 = new Lesson({
idNo: 2,
pageNumber: '第二页 | dìèryè | Page 2',
chapter: "第一章 | dìyīzhāng | Chapter 1",
lesson: "第二课 | dìèrkè | Lesson 2",
charList: ['学', '不', '天', '住', '常'],
speakers: ['京先生', '东太太', '东太太', '京先生',
'京先生', '京先生', '东太太', '东太太', '京先生', '京先生'
],
sentences: [
'你好常太太。', "你好京先生。", '你是学生吗', '是我是学生', '你是学生吗',
'我不是学生', '我住在北京', '我常常去东京', '我住在东京','我天天去东京'],
translatedSentences: [
'Hello Mrs. Chang',
'Hello Mr. Jing',
'Are you a college student?',
'Yes, I am a college student.',
'Are you a college student?',
'I am not a college student.',
'I live in Beijing.',
'I go to Tokyo often.',
'I live in Tokyo.',
'I go to Tokyo daily'
],
grammarPoints: [
'',
'',
'',
'',
''
]
});

const lesson3 = new Lesson({
idNo: 3,
pageNumber: '第三页 | dìsānyè | Page 3',
chapter: "第一章 | dìyīzhāng | Chapter 1",
lesson: "第三课 | dìsānkè | Lesson 3",
charList: ['中', '习', '工', '明', '他'],
speakers: ['京先生', '东太太', '东太太', '京先生',
'京先生', '京先生', '东太太', '东太太', '京先生', '京先生'
],
sentences: [
'你好东太太。', "你好京先生。", '我在中学。', '你是中学生吗', '不是我是学生', '我学习工学',
'我常常去中学', '你是学生吗', '是我是学生在东京', '我明天去东京'],
translatedSentences: [
'Hello Mrs. Dong',
'Hello Mr. Jing',
'I am at the midle school',
'Are you a middle school student?',
'No, I am a college student',
'I study engineering.',
'I often go to the middle school.',
'Are you a college student?',
'Yes, I am a college student in Tokyo',
'I am going to Tokyo tomorrow'
],
grammarPoints: [
'',
'',
'',
'',
''
]
});

const lesson4 = new Lesson({
idNo: 4,
pageNumber: '第四页 | dìsìyè | Page 4',
chapter: "第一章 | dìyīzhāng | Chapter 1",
lesson: "第四课 | dìsìkè | Lesson 4",
charList: ['国', '大', '作', '见', '很'],
speakers: ['中太太', '习先生', '习先生', '习先生',
'习先生', '习先生', '习先生', '习先生', '习先生', '习先生'
],
sentences: [
'你好吗习先生。', "我很好。", '我是大学生。', '我住在大学', '我学习工学', '我在中学工作',
'我常常去东京', '我有钱', '我明天去中国', '明天见'],
translatedSentences: [
'How are you Mr. Xi?',
'I am fine.',
'I am a college student.',
'I live at the university.',
'I am studying engineering.',
'I work at the middle school.',
'I often go to Tokyo.',
'I have money',
'Tomorrow I am going to China',
'See you tomorrow.'
],
grammarPoints: [
'',
'',
'',
'',
''
]
});

const lesson5 = new Lesson({
idNo: 5,
pageNumber: '第五页 | dìwǔyè | Page 5',
chapter: "第一章 | dìyīzhāng | Chapter 1",
lesson: "第五课 | dìwǔkè | Lesson 5",
charList: ['再', '人', '这', '也', '午'],
speakers: ['国先生', '习太太', '国先生', '国先生', '国先生',
'习太太', '中先生', '中先生', '习太太', '中先生', '习太太'
],
sentences: [
'你好习太太.', "你好吗国先生。", '我很好。', '这是中先生', '中先生是工人', '你好吗中先生',
'我很好', '你好吗', '我也很好', '我中午去东京,再见','再见'],
translatedSentences: [
  'Hello Mrs. Xi.',
  'How are you Mr. Guo?',
  'I am fine.',
  'This is Mr. Zhong.',
  'Mr. Zhong is a worker.',
  'How are you Mr. Zhong?',
  'I am fine.',
  'How are you?',
  'I am also fine',
  'I am going to Tokyo at noon, goodbye',
  'Goodbye.'
  ],
grammarPoints: [
'',
'',
'',
'',
''
]
});

const defaultLessons = [lesson1, lesson2, lesson3, lesson4, lesson5];

Lesson.insertMany(defaultLessons, function(err){
if(err) {
console.log(err);
} else {
console.log("default Lessons successfully saved to DB");
}
});

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

app.get('/lessons/:requestedIdNo', function(req, res){
  const requestedIdNo = req.params.requestedIdNo;
  Lesson.findOne({idNo: requestedIdNo}, function(err, foundLesson){
    if(!err){
      if(!foundLesson){
        console.log('No Lesson Found');
      } else {
        res.render('lessons', {
          idNo: foundLesson.idNo,
          pageNo: foundLesson.pageNumber,
          chapter: foundLesson.chapter,
          lesson: foundLesson.lesson,
          list: foundLesson.charList,
          speakers: foundLesson.speakers,
          sentences: foundLesson.sentences,
          translatedSentences: foundLesson.translatedSentences,
          grammarPoints: foundLesson.grammarPoints
        });
      }
    }
  })
});

app.get('/lessons', function(req, res) {
  res.render('lessons');
});

app.listen(3012, function(req, res) {
  console.log("Server running on port 3012");
})
