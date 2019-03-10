var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');

var app = express();
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;

//Static folder
app.use(express.static(__dirname + "/public"));

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/send-email', (req, res) => {
  var output = `
  <p>Новый запрос</p>
  <h3>Информация о клиенте:</h3>
  <ul>
    <li>Имя: ${req.body.client-name}</li>
    <li>Номер телефона: ${req.body.phone-number}</li>
  </ul>
  <h3>Информация о неполадке:</h3>
  <ul>
    <li>Устройство: ${req.body.device}</li>
    <li>Описание неполадки: ${req.body.problem}</li>
  </ul>
  `;
  let transporter = nodeMailer.createTransport({
    service: 'Yandex', // no need to set host or port etc.
    auth: {
        user: 'Alitali@yandex.ru',
        pass: 'Alitali25'
    }
});
let mailOptions = {
    from: '"Луговская Татьяна" <Alitali@yandex.ru>', // sender address
    to:  'Alitali@yandex.ru',// list of receivers
    subject: 'Новый запрос', // Subject line
    text: '', // plain text body
    html: '<b>NodeJS Email Tutorial</b>' // html body
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('index');
    });
});

app.listen(port, function () {
  console.log('App listening...');
});
