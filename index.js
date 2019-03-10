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
    <li>Устройство: ${req.body.divece}</li>
    <li>Описание неполадки: ${req.body.problem}</li>
  </ul>
  `;
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'xxx@xx.com',
        pass: 'xxxx'
    }
});
let mailOptions = {
    from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.body, // plain text body
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

  

});
app.listen(port, function () {
  console.log('App listening...');
});
