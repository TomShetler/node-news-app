const request = require('request');

var getNews = (category, number, callback) => {

request.get({
  url: `https://api.nytimes.com/svc/topstories/v2/${category}.json`,
  qs: {
    'api-key': "YOUR API KEY HERE"
  },
}, (err, response, body) => {
    if (err) throw err;
    body = JSON.parse(body);
    for (var x = 0; x < number; x++) {
    console.log(body.results[x]);
    }
});
}

module.exports.getNews = getNews;
