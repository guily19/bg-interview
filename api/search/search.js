var request = require('request')
var cheerio = require('cheerio')
var url     = require('url')


exports.getFirst = function(req, res) {
  const text = req.query.q
  console.log('the text to search is:', text)
  request('http://www.google.com/search?q='+ text, function (error, response, body) {
    if (error){
      console.log('error:', error); // Print the error if one occurred
    } else {
      var $ = cheerio.load(body)
      const result = $('#search .g').first()
      var item = {};
      var elemUrl = result.find("h3 a")
      var parsedUrl = url.parse(elemUrl.attr("href"), true)
      if (parsedUrl.pathname === '/url') {
        item['url'] = parsedUrl.query.q
      }
      res.send(item['url'])  
    }  
  })

}