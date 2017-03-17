// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 8082;
var morgan = require('morgan');

var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var config = require('./config/database.js');

// configuration ===============================================================

if (!mongoose.connect(config.url)) {
    res.send("DB Fail");
} // connect to our database

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// routes ======================================================================
require('./routes/root.js')(app);
require('./routes/404.js')(app);
// launch ======================================================================
app.listen(port);
console.log('Server Started On Port: ' + port);

