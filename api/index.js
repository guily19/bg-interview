var express = require('express');
var search = require('./search/search.js');
var app = express();

// Allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// If get / redirect to the land-page to do the search
app.get('/', function (req, res) {
  res.redirect('https://keen-noether-d8b69f.netlify.com');
});

// Do the search in google of the string passed as a parameter 
app.get('/search', search.getFirst);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port' + port);
});