// CheckLines

/* function getLineUrls(){
	$('div#contentbox').find('.roundCorners').find('a').each(function(){
		var lines = [];
		var url = $(this).attr('href');
		lines.push(url);
		return lines.join('\n');
	});	
} */

var lineUrls = ["/nyct/service/oneline.htm","/nyct/service/twoline.htm","/nyct/service/threelin.htm","/nyct/service/fourline.htm","/nyct/service/fiveline.htm","/nyct/service/sixline.htm","/nyct/service/6d.htm","/nyct/service/sevenlin.htm","/nyct/service/7d.htm","/nyct/service/aline.htm","/nyct/service/cline.htm","/nyct/service/eline.htm","/nyct/service/bline.htm","/nyct/service/dline.htm","/nyct/service/fline.htm","/nyct/service/mline.htm","/nyct/service/gline.htm","/nyct/service/jline.htm","/nyct/service/zline.htm","/nyct/service/lline.htm","/nyct/service/sline.htm","/nyct/service/nline.htm","/nyct/service/qline.htm","/nyct/service/rline.htm","/nyct/service/rline.htm","/nyct/service/rline.htm","/nyct/service/rline.htm"];
var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');
var fs = require('fs');

function getReq(line){
	var scores = [];
	var options = {
		url: "http://www.mta.info" + line,
		header: {
			'User-Agent': 'request'
		}
	};
	function callBack(error, response, html){
		if(!error && response.statusCode == 200) {
			var $ = cheerio.load(html);
			var station = {};
			var preName = url.split('/');
			var name = preName[preName.length -1];
			var stops = [];
			$('span.emphasized').each(function(){
				var stop = $(this).text();
				stops.push(stop);
				return stops.join('\n');
			});
			var station = {
				name: name,
				stops: stops
			};
			console.log(station)
		}
	}
	request(options, callBack);
}

//*[@id="contentbox"]/table[1]/tbody/tr[2]/td[2]/spacer/spacer/spacer/img
var lineStops = {};
for(var i=0; i<lineUrls.length; i++){
	var thisLine = getReq(lineUrls[i]);
	var lineName = thisLine.name;
	lineStops[lineName] = thisLine;
}
console.log(lineStops);



	