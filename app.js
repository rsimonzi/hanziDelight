const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const _ = require('lodash');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/hanziDelightDB', {
 useNewUrlParser: true
});

const lessonsSchema = new mongoose.Schema({
  idNo: Number,
  pageNumber: String,
  chapter: String,
  lesson: String,
  charList: [String],
  speakers: [String],
  sentences: [String],
  traditionalSentences: [String],
  translatedSentences: [String],
  grammarPoints: [String],
  word: [String],
  pinyin: [String],
  meaning: [String],
  partOfSpeech: [String],
  pronunciation: [String],
  exercises: [String]
});

//const User = conn3.model('User', usersSchema);
const Lesson = mongoose.model("Lesson", lessonsSchema);

const lesson1 = new Lesson({
  idNo: 1,
  pageNumber: '第一页 | dìyīyè | Page 1',
  chapter: "第一章 | dìyīzhāng | Chapter 1",
  lesson: "第一课 | dìyīkè | Lesson 1",
  charList: ['你', '好', '有', '钱', '太', '先', '生', '是', '北', '京', '东', '去', '在', '我', '吗'],
  speakers: ['京太太', '东先生', '东太太', '京太太', '京太太', '京太太', '东太太', '东太太', '京太太', '京太太', '京太太'],
  sentences: [
    '你好!', "你好!", '我是东先生', '我是京太太', '你好东先生',
    '你好京太太', '我有钱。我去北京', '你在东京吗', '我在北京', '我有钱', '我去东京'
  ],
  traditionalSentences: [
    '你好!', "你好!", '我是東先生', '我是京太太', '你好東先生',
    '你好京太太', '我有錢。我去北京', '你在東京嗎', '我在北京', '我有錢', '我去東京'
  ],
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
    'In modern Japanese, there are 3 types of verbs – group 1, group 2 and group 3',
    'Group 3 contains only two verbs, する and 来る.',
    'する is called a サ行変格動詞 S row irregular verb.',
    'くる　is called a カ行変格動詞 K row irregular verb.',
    'Since these two verbs are irregular, you need to memorize each conjugation.',
    'Group 2 verbs 上一段動詞 Kami ichidan verbs are verbs that end in いる or える',
    'Group 1 verbs are all verbs not in Group 2 or Group 3 – they are called 五段動詞　Godan verbs.'
    ],
  word: ['食べる', '行く'],
  pinyin: ['たべる', 'いく'],
  meaning: ['to eat', 'to go'],
  partOfSpeech: ['動詞 | どうし | verb', '動詞 | どうし | verb'],
  pronunciation: ['taberu.mp3', 'iku.mp3'],
  exercises: []
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
    '我不是学生', '我住在北京', '我常常去东京', '我住在东京', '我天天去东京'
  ],
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
    '我常常去中学', '你是学生吗', '是我是学生在东京', '我明天去东京'
  ],
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
    '我常常去东京', '我有钱', '我明天去中国', '明天见'
  ],
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
    '我很好', '你好吗', '我也很好', '我中午去东京,再见', '再见'
  ],
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

const lesson6 = new Lesson({
  idNo: 6,
  pageNumber: '第六页 | dìliùyè | Page 6',
  chapter: "第一章 | dìyīzhāng | Chapter 1",
  lesson: "第六课 | dìliùkè | Lesson 6",
  charList: ['谢', '南', '今', '上', '多'],
  speakers: ['也先生 ', '习太太', '也先生', '习太太 ',
    '也先生 ', '习太太', '习太太', '也先生', '习太太', '习太太', '也先生', '习太太', '也先生'
  ],
  sentences: ['你好习太太。 ', "你好也先生。", '我上午去南京。 ', '南京有很多人。 ', '你住在南京吗。 ',
    '我不住在南京。', '我住在东京。 ', ' 我今天去北京。', '你常常去北京吗。 ', '我不常去北京。', '在北京有很多人。', '再见。', '谢谢。再见。'
  ],
  translatedSentences: ['Hello Mrs. Xi', 'Hello Mr. Ye', 'I go to Nanjing in the morning',
    'Nanjing has a lot of people', 'Do you live in Nanjing', 'I don’t live in Nanjing.',
    'I live in Tokyo.', 'I am going to Beijing today.', 'Do you go to Beijing often?', 'I don’t often go to Beijing',
    'There are a lot of people in Beijing', 'Goodbye.', 'Thank you. Goodbye'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ]
});

const lesson7 = new Lesson({
  idNo: 7,
  pageNumber: '第七页 | dìqīyè  | Page 7',
  chapter: "第一章 | dìyīzhāng | Chapter 1",
  lesson: "第七课 | dìqīkè | Lesson 7",
  charList: ['早', '了 ', '广', '没', '那'],
  speakers: ['国先生 ', '习太太', '国先生', '习太太 ',
    '国先生 ', '习太太', '国先生 ', '习太太', '习太太', '国先生', '习太太', '国先生', '习太太'
  ],
  sentences: ['你好习太太。 ', "你好国先生。", '你去了南京吗。 ',
    '没去。我去了北京。 ',
    '那是常先生吗', '是。常先生去了东京。', '你在北京大学工作吗。 ',
    '我在中学工作。', '你去了南京吗。 ', '没去。我没有钱。', '我早上去广东。 ', '再见。', ' 再见。'
  ],
  translatedSentences: ['Hello Mrs. Xi.', 'Hello Mr. Guo.', 'Did you go to Nanjing?',
    'No. I went to Beijing.', 'Is that Mr. Chang?', 'Yes, Mr. Chang went to Tokyo.',
    'Do you work at Nanjing University?', 'I work at a middle school.',
    'Did you go to Nanjing?', 'No, I don’t have any money.',
    'I am going to Guangdong in the morning.', 'Goodbye.', 'Goodbye.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ]
});

const lesson8 = new Lesson({
  idNo: 8,
  pageNumber: '第八页 | dìbāyè | Page 8',
  chapter: "第一章 | dìyīzhāng | Chapter 1",
  lesson: "第八课 | dìbākè | Lesson 8",
  charList: ['书', '晚 ', '海', '路', '他'],
  speakers: ['谢先生 ', '也太太', '谢先生', '也太太 ',
    '谢先生 ', '也太太', '谢先生 ', '也太太', '谢先生', '也太太', '谢先生', '也太太', '谢先生'
  ],
  sentences: ['你好也太太。 ', "你好谢先生。", '你有书吗。 ',
    '我没有书。 ', '那是东先生吗', '是。他是大学生在南京大学。', '他住南京路吗。 ',
    '南京路在上海。', '我晚上去上海。 ', '你在上海工作吗。', '我在海南工作。 ', '再见。', ' 再见。'
  ],
  translatedSentences: ['Hello Mrs. Ye.', 'Hello Mr. Xie.', 'Do you have a book?',
    'I don’t have any books.', 'Is that Mr. Dong?', 'Yes, he is a student at Nanjing University.',
    'Does he live on Nanjing road?', 'Nanjing road is in Shanghai.',
    'I am going to Shanghai in the evening.', 'Do you work in Shanghai?', 'I work in Hainan.', 'Goodbye.', 'Goodbye.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ]
});

const lesson9 = new Lesson({
  idNo: 9,
  pageNumber: '第九页 | dìjiǔyè | Page 9',
  chapter: "第一章 | dìyīzhāng | Chapter 1",
  lesson: "第九课 | dìjiǔkè | Lesson 9",
  charList: ['买', '下 ', '州', '公', '西'],
  speakers: ['路先生 ', '也太太', '路先生', '也太太 ',
    '路先生 ', '也太太', '也太太 ', '路先生', '也太太', '路先生', '也太太'
  ],
  sentences: ['早上好也太太。 ', '早上好路先生。', '我今天下午去广州 。 ',
    '你买东西吗。 ', '我买书。', '我今天晚上也买东西。', '我明天上午去广西。 ',
    '你在公路去吗。', '是。广州有很大公路。 ', '明天见。', '明天见。 '
  ],
  translatedSentences: ['Good morning, Mrs. Xi.', 'Good morning, Mr. Lu.', 'This afternoon I am going to Guangzhou.', 'Are you shopping?', 'I am buying books.', 'I am also shopping this evening.',
    'Tomorrow morning, I am going to Guangxi.', 'Are you going on the highway?',
    'Yes, Guangzhou has a very large highway.', 'See you tomorrow.', 'See you tomorrow.'
  ],
  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ]
});

const lesson10 = new Lesson({
  idNo: 10,
  pageNumber: '第九页 | dìjiǔyè | Page 10',
  chapter: "第一章 | dìyīzhāng | Chapter 1",
  lesson: "第九课 | dìjiǔkè | Lesson 10",
  charList: ['要', '岛 ', '她', '等', '冬'],
  speakers: ['路先生', '也太太', '路先生', '路先生 ',
    '也太太 ', '路先生', '也太太 ',
    '路先生', '路先生', '也太太',
    '路先生', '也太太'
  ],
  sentences: ['早上好也太太。 ', '早上好路先生。', '我等你。', '我要去海南岛。 ',
    '我冬天去了海南岛。 ', '我要买东西。', '你买书码。', '是，我要买书。 ',
    '你也要买书吗。', '不要。谢谢。 ', '再见。', '再见。 '
  ],
  translatedSentences: ['Good morning, Mrs. Ye.', 'Hello, Mr. Lu.', 'I am waiting for you.', 'I want to go to Hainan Island.', 'I went to Hainan island in the winter.', 'I plan to shop. ', 'Are you buying books?',
    'Yes, I plan to buy books.', 'Do you want to buy books too?', 'Thank you – I don’t want to buy books.', 'Goodbye.', 'Goodbye.'
  ],

  grammarPoints: [
    '',
    '',
    '',
    '',
    ''
  ]
});

const defaultLessons = [lesson1];

Lesson.insertMany(defaultLessons, function(err) {
  if (err) {
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

app.get('/tategaki', function(req, res){
  res.render('tategaki');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.get('/lessons/:requestedIdNo', function(req, res) {
  const requestedIdNo = req.params.requestedIdNo;
  Lesson.findOne({
    idNo: requestedIdNo
  }, function(err, foundLesson) {
    if (!err) {
      if (!foundLesson) {
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
          traditionalSentences: foundLesson.traditionalSentences,
          translatedSentences: foundLesson.translatedSentences,
          grammarPoints: foundLesson.grammarPoints,
          word: foundLesson.word,
          pinyin: foundLesson.pinyin,
          meaning: foundLesson.meaning,
          partOfSpeech: foundLesson.partOfSpeech,
          pronunciation: foundLesson.pronunciation,
          exercises: foundLesson.exercises
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
