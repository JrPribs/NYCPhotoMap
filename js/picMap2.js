

        $(document).ready(function(){
            var baseUrl = "http://ninjastatus.com/last_stop/Bronx/"
            var checkMultiple = function (stop) {
                if (stop.imgName && stop.imgName.match('|')) {
                    var images = stop.imgName.split('|');
                    for (var i = images.length - 1; i >= 0; i--) {
                        images[i] = baseUrl + images[i].replace('\t\n', '').trim();
                    };
                    return images;
                }
                if (stop.imgName && stop.imgName.replace('\t\n', '').trim() !== undefined) {
                    var images = baseUrl + stop.imgName.replace('\t\n', '').trim();
                    return images;
                }
            }

            for(var i=0; i<stations.length; i++){
                var loc = stations[i].loc;
                var desc = "test description";
<<<<<<< HEAD
                $('#subway').append('<a hr<area shape="circle" coords="' + loc + 
=======
                $('#subway').append('<area shape="circle" coords="' + loc + 
>>>>>>> 790e25dd6fb5b02b3fca3db7c6f087d5897f08bc
                    '" href="#" data-i="' + i + '" />');
            }
            $('area').click(function(e){
                e.preventDefault();
                var ib = $(this).data('i');
                var name = stations[ib].name;
                var imgs = stations[ib].imgName;
                var desc = "test description";
                $(this).prettyPhoto.open(imgs,name,desc);
            });
            $('img[usemap]').rwdImageMaps();
        })
