var express = require('express');
var path = require('path');
var swig = require('swig');
var controllers = require('./controllers/');

swig.setDefaults({ cache: false });

var app = express();

app.engine('swig', swig.renderFile);
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'swig');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.errorHandler());

app.get('/images/featured', controllers.featured_images.get);

module.exports = app;
