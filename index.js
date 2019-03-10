var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');
var nodeMailer = require('nodemailer');

var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;

//Static folder
app.use("/public", express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index');
});
app.post('/send', function (req, res) {
  var output =
  `
  <h3></h3>
  <ul>Имя: ${req.body.client_name}</ul>
  <ul></ul>
  <h3></h3>
  `;
  let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: 'fastserviceplus24@gmail.com',
          pass: 'FSP24fsp24'
      }
  });
  let mailOptions = {
      from: '"FSP24" <fastserviceplus24@gmail.com>', // sender address
      to: 'fastserviceplus24@gmail.com', // list of receivers
      subject: 'УРА!!', // Subject line
      text: 'УРА!', // plain text body
      html: output // html body
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
