$(document).ready(function(){
    function loopIt(stations) {
        var stationed = [];
        for(var i=0; i<stations.length; i++){
        var loc = stations[i].loc;
        var name = stations[i].name;
        stationed.push('<a href="#" alt="' + name + '" title="' + name + 
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
        if (line == undefined) {
            var line = " ";
        }
        var name = [];
        var desc = [];
        for(var i=0; i<imgs.length; i++){
            name.push(stations[ib].name);
            desc.push(name[0] + ' - MTA Lines: ' + line);
        }
        $.prettyPhoto.open(imgs,name,desc);
    });
})