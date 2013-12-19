$(document).ready(function(){
    function buildMap(stations) {
        var stationed = [];
        for(var i=0; i<stations.length; i++){
        var loc = stations[i].loc;
        name = stations[i].name;
        stationed.push('<a href="#" alt="' + name + '" title="' + name + 
            '" data-i="' + i + '"><area shape="circle" coords="' + loc + '" /></a>');
        }
        return stationed.join('\n');
    }
    function makeInfo(inf){
        var info = [];
        for(var i=0; i<imgs.length; i++){
            info.push(inf);
        }
        return info.join(',');
    }
    $('#subway').append(buildMap(stations));
    $('#zoom').bezoom();
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});
    $('img[usemap]').rwdImageMaps();
    $('a').on('click', function(e){
        e.preventDefault();
        var ib = $(this).data('i');
        var imgs = stations[ib].imgName;
        var name = makeInfo(stations[ib].name);
        var desc = makeInfo(name + ' - Lines running to this stop: ' + stations[ib].line);
        $.prettyPhoto.open(imgs,name,desc);
    });
})