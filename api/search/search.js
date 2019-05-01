var request = require('request');
var cheerio = require('cherio');
var url     = require('url');


exports.getFirst = function(req, res) {
  const text = req.query.q;
  const url2search = 'http://www.google.com/search?q='+ text.toString();
  console.log('the url to search is:', url2search);
  request(url2search, function (error, response, body) {
    if (error){
      console.log('error:', error); // Print the error if one occurred
    } else {
      var $ = cheerio.load(body);
      const result = $('#search .g').first();
      var item = {};
      var elemUrl = result.find("h3 a");
      console.log("the elem URL recibed is:", elemUrl.attr("href"));
      if (elemUrl.attr("href") === undefined){
        res.status(500).send('Something broke!');
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