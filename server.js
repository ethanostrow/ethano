// server.js
require ('newrelic');
// BASE SETUP
// ==============================================

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();


// home page route (http://localhost:3000)
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.sendfile('index.html');
});

// apply the routes to our application
app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
