var express = require('express'),
	path = require('path');
var app = express();

var company = require('./api/company_jobs');
var people = require('./api/company_people');
var overview = require('./api/company_overview');
var picture = require('./api/company_picture');
var about = require('./api/company_about');
var userlogin = require('./api/userlogin');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/api/listjobs', company.getjobs);
app.post('/api/postjobs', company.addjobs);

app.get('/api/listpeople', people.getcompany);
app.post('/api/postpeople', people.addcompany);

app.get('/api/listoverview', overview.getoverview);
app.post('/api/postoverview', overview.addoverview);
app.post('/api/companyInfo', overview.getCompanyDetails);


app.get('/api/listpicture', picture.getpicture);
app.post('/api/postpicture', picture.addpicture);

app.get('/api/listabout', about.getabout);
app.post('/api/postabout', about.addabout);

app.get('/api/listlogin', userlogin.getlogin);
app.post('/api/postlogin', userlogin.addlogin);

app.use('/', express.static(__dirname + '/www'));

app.listen(8000);
console.log('Listening on port 8000...');
