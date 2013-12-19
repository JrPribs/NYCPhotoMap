$(document).ready(function(){
    function loopIt(stations) {
        var stationed = [];
        for(var i=0; i<stations.length; i++){
        var loc = stations[i].loc;
        name = stations[i].name;
        stationed.push('<a href="#" alt="' + name + '" title="' + name + 
            '" data-i="' + i + '"><area shape="circle" coords="' + loc + '" /></a>');
        }
        return stationed.join('\n');
    }
    $('#subway').append(loopIt(stations));
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});
    $('img[usemap]').rwdImageMaps();
    var options = {imgSource = 'src'};
    $('img').bezoom();
    $('a').on('click', function(e){
        e.preventDefault();
        var ib = $(this).data('i');
        name = stations[ib].name;
        imgs = stations[ib].imgName;
        desc = name + ' - Lines running to this stop: ' + stations[ib].line;
        $.prettyPhoto.open(imgs,name,desc);
    });
})