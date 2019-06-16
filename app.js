'esversion: 6';

const express = require('express');
const app = express();
const formidable = require('formidable');

app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response) {
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

app.post('/ContactForm', function(request, response) {
    let form = new formidable.IncomingForm();
    form.parse(request, function (err, fields) {
        let lastName = fields.lastName,
        firstName = fields.firstName,
        email = fields.email,
        message = fields.message;
    })
});


const port = 8080;
app.listen(port);
console.log('Listening on port: ' + port);