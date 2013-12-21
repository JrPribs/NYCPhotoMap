$(document).ready(function(){
    function loopIt(stations) {
        var stationed = [];
        for(var i=0; i<stations.length; i++){
        var loc = stations[i].loc;
        var name = stations[i].name;
        stationed.push('<a href="#" id="sl" alt="' + name + '" title="' + name + 
            '" data-i="' + i + '"><area shape="circle" coords="' + loc + '" /></a>');
        }
        return stationed.join('\n');
    }
    $('#subway').append(loopIt(stations));

    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false, theme: 'dark_rounded', allow_resize: false});
    $('img[usemap]').rwdImageMaps();
    $('a').on('click', function(e){
        e.preventDefault();
        var ib = $(this).data('i');
        imgs = stations[ib].imgName;
        var line = stations[ib].line;
        var name = [];
        var desc = [];
        for(var i=0; i<imgs.length; i++){
            name.push(stations[ib].name);
            if (line == undefined) {
                desc.push(name[0]);    
            }else{
                desc.push(name[0] + ' - MTA Line(s): ' + line);
            }
        }
        $.prettyPhoto.open(imgs,name,desc);
    });
    $('a#sl').css("cursor","hand");
})