'esversion: 6';

const express = require('express');
const app = express();
const formidable = require('formidable');
const creds = require('../personalPage/config/config.js');
const nodemailer = require('nodemailer');

//routes
app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response) {
    response.redirect('index.html');
});

app.get('/index', function(request, response) {
    response.redirect('index.html');
});

app.get ('/about', function(request, response) {
    response.redirect('about.html');
});

app.get ('/contact', function(request, response) {
    response.redirect('contact.html');
});

app.get ('/portfolio', function(request, response) {
    response.redirect('portfolio.html');
});

//email form 
var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }
var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Transport ready');
    }
  });

  app.post('/ContactService', function (request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var name = fields.name,
            email = fields.email,
            message = fields.message;
            var result = 'Thank you, ' + name + '<br/>' + 
            'We will contact you at ' + email + '<br/>'
            + 'Your message: ' + message + '<br />';
            var mail = {
                from: name,
                to: 'mbrothen@gmail.com',
                subject: 'New Contact Form Message',
                text: "From: " + name + "\nEmail: " + email + "\nMessage: " + message
            };
            transporter.sendMail(mail, (err, data) => {
                if (err) {
                    response.json({
                        msg: 'fail'
                    });
                } else {
                    response.json({
                        msg: 'success'
                    });
                }
            });
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end('{ "result": "' + result + '"}');
        console.log('Handled request for ' + name);
    });
});

app.post('/ContactMessage', function (request, response) {
    console.log("Contact Message running");
    let form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        var name = fields.name,
            email = fields.email,
            message = fields.message;
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('Thank you ' + name + '<br/>');
        response.write('We will contact you at ' + email + '<br/>');
        response.end('Your message ' + message + '<br />');
        console.log('Handled request for ' + name);
    });
});


const port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);