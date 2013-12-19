jQuery(document).ready(function(){
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
    jQuery('#subway').append(loopIt(stations));
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});
    jQuery('img[usemap]').rwdImageMaps();
    jQuery('img#mainmap').addpowerzoom();
    jQuery('a').on('click', function(e){
        e.preventDefault();
        var ib = $(this).data('i');
        name = stations[ib].name;
        imgs = stations[ib].imgName;
        desc = name + ' - Lines running to this stop: ' + stations[ib].line;
        jQuery.prettyPhoto.open(imgs,name,desc);
    });
})