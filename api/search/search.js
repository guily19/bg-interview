var request = require('request');
var cheerio = require('cherio');
var url = require('url');

// The request contains a string with the words to find in google website
// The function returns the first url that appears in google
exports.getFirst = function(req, res) {
  const text = req.query.q;
  if (text === undefined){
    res.status(500).send("There is no parameter to query")
  } else {
    const url2search = 'http://www.google.com/search?q='+ text.toString();
    console.log('the url to search is:', url2search);
    request(url2search, function (error, response, body) {
      if (error){
        console.log('error:', error); // Print the error if one occurred
        res.status(500).send('Something broke!'); // Error doing the request to google
      } else {
        var $ = cheerio.load(body);
        const result = $('#search .g').first();
        var item = {};
        var elemUrl = result.find("h3 a");
        console.log("the elem URL recibed is:", elemUrl.attr("href"));
        if (elemUrl.attr("href") === undefined){
          res.status(500).send('Something broke!'); //The url recibed is not an URL
        } else {
          var parsedUrl = url.parse(elemUrl.attr("href"), true);
          if (parsedUrl.pathname === '/url') {
            item['url'] = parsedUrl.query.q;
          }
          res.send(item['url']);
        }
      }
    });   
  } 
}