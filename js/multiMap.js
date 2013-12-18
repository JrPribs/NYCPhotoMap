// nycsubwayphotomap
$(document).ready(function(e){
        var baseUrl = "http://ninjastatus.com/last_stop/"
        var imgNames = [];

    for(var i=0; i<stations.length; i++){
                var loc = stations[i].loc;
                var name = stations[i].name;
                var burb = stations[i].burb;
                var img = stations[i].imgName;
                var imgCheck = String(img);
                if(imgCheck.indexOf("|") != -1){
                    var thisNames = imgCheck.split('|');
                    var img1 = thisNames[0];
                    $('#subway').append('<a href="' + baseUrl + burb + '/' + img1 +
                        '" title="' + name + '" rel="prettyPhoto"> ' +
                        '<area shape="circle" coords="' + loc + '" nohref="nohref" /></a>');
                } else { 
                    $('#subway').append('<a href="' + baseUrl + burb + '/' + img + 
                        '" title="' + name + '" rel="prettyPhoto" > ' +
                        '<area shape="circle" coords="' + loc + '" nohref="nohref" /></a>');
                }
        }
    
    $('a[rel^="prettyPhoto"]').prettyPhoto({social_tools: false});
    $('img[usemap]').rwdImageMaps();
});
