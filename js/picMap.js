$(document).ready(function(){
    function loopIt(stations) {
        var stationed = [];
        for(var i=0; i<stations.length; i++){
        var loc = stations[i].loc;
        name = stations[i].name;
        stationed.push('<a href="#" alt="' + name + '" title="' + name + 
<<<<<<< HEAD
            '" data-i="' + i + '"><area shape="circle" coords="' + loc + '" /></a>');
=======
            '" data-i="' + i + '"><area shape="circle" coords="' + loc + '" nohref="nohref" /></a>');
>>>>>>> 790e25dd6fb5b02b3fca3db7c6f087d5897f08bc
        }
        return stationed.join('\n');
    }
    $('#subway').append(loopIt(stations));
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});
    $('img[usemap]').rwdImageMaps();
    $('a').on('click', function(e){
        e.preventDefault();
        var ib = $(this).data('i');
        name = stations[ib].name;
        imgs = stations[ib].imgName;
        desc = name + ' - Lines running to this stop: ' + stations[ib].line;
        $.prettyPhoto.open(imgs,name,desc);
    });
})