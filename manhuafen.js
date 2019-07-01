var cheerio = require('cheerio');
var https = require('https');

var kaguya_url = 'https://www.manhuafen.com/comic/2314/';
https.get(kaguya_url, function (res){
    var chunks = [];
    var size = 0;
    res.on('data', function(chunk){
        chunks.push(chunk);
        size += chunk.length;
    });
    res.on('end', function(){
        var data = Buffer.concat(chunks, size);
        var html = data.toString();
        var $ = cheerio.load(html);
        var jobs = [];
        console.log(html);
    });
});
