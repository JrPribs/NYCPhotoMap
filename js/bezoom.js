/*
 * 	BeZoom 0.5 - jQuery plugin
 *	written by Benjamin Mock
 *	http://benjaminmock.de/bezoom-jquery-plugin/
 *
 *	Copyright (c) 2012 Benjamin Mock (http://benjaminmock.de)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

(function($) {
	$.fn.bezoom = function(options){
		// default settings
		var settings = {
			marginLeft : 10,
			identifier : 'bezoom',
			height : 200,
			width : 200,
			titleSource : 'title',
			imgSource : 'src',
			bgColor : '#5398EE',     	// background color for title
			color : '#ffffff',       	// font color for title
			size : '0.8em',          	// font size for title
			showTitle : false 			// set to false, to hide title
		};
		//extending options
		options = options || {};
	   	$.extend(settings, options);

		this.each(function(i){
			var title = $(this).attr(settings.titleSource);
			var imgBigSrc = $(this).attr(settings.imgSource);
			var titleAttribute = $(this).attr("title");

			// saving jquery object of small image
			var img = $(this).find('img');

			// Create new offscreen image to get natural size
			var offscreenImage = new Image();
			offscreenImage.src = imgBigSrc;
			var imgBigWidth;
			var imgBigHeight;

			// saving current element to have access in load function
			item = this;

			// wait for large image to load in order to fetch its size
			$(offscreenImage).load(function () {
				var imgBigWidth = offscreenImage.width;
				var imgBigHeight = offscreenImage.height;

				var imgSmallHeight = $(item).find('img').height();
				var imgSmallWidth = $(item).find('img').width();
					    	
				var widthRel = imgSmallWidth / imgBigWidth;
				var heightRel = imgSmallHeight / imgBigHeight;

				$(item).mouseenter(function(e){
					// removing zoom container if exists to avoid duplicates
					$('#'+settings.identifier).remove();
					// removing title to prevent default tooltip
					$(this).attr("title","");
					var imgSmallHeight = $(this).find('img').height();
					var imgSmallWidth = $(this).find('img').width();

					// calculating position for zoom container
					var pos = $(this).offset();
					var y = Math.ceil(pos.top-0)-imgSmallHeight;
					var x = Math.ceil(pos.left-0)+imgSmallWidth+settings.marginLeft;

					var imgTagToAdd = '<img id="'+settings.identifier+'_img" src="'+imgBigSrc+'" style="position:relative; width:'+imgBigWidth+'px!important;height:'+imgBigHeight+'px!important; max-width:'+imgBigWidth+'px!important;max-height:'+imgBigHeight+'px!important;vertical-align: none;horizontal-align:none;">';
					var titleTagToAdd = '';
					if(settings.showTitle){
						titleTagToAdd = '<div style="background-color:'+settings.bgColor+';color:'+settings.color+';font-size:'+settings.size+';">'+title+'</div>';
					}
					$('body').append('<div id="'+settings.identifier+'" style="z-index:9999; border:1px solid #efefef; position:absolute; top:'+y+'px;left:'+x+'px;width:'+settings.width+'px;">'+titleTagToAdd+'<div style="width:'+settings.width+'px;height:'+settings.height+'px;overflow:hidden;position:relative;">'+imgTagToAdd+'</div></div>');
				}).mouseleave(function(){
					// removing zoom container
					$('#'+settings.identifier).remove();
					// setting title back
					$(this).attr("title",titleAttribute);
				});

				// not chained because IE had some issues with chaining
				$(item).mousemove(function(e){
					// catching mouse movement to position the larger image

					// relative mouse position
					var offset = img.offset();
					var mouseX = e.pageX - offset.left;
					var mouseY = e.pageY - offset.top;

					// positioning image according to image relation and mouse position
					var imgBigX = Math.ceil((mouseX / widthRel)-(settings.width / 2)) * (-1);
					imgBigX = Math.max((-1*imgBigWidth)+settings.width,imgBigX);
					imgBigX = Math.min(0,imgBigX);

					var imgBigY = Math.ceil((mouseY / heightRel)-settings.height*0.5) *(-1);
					imgBigY = Math.min(0,imgBigY);
					imgBigY = Math.max((-1*imgBigHeight)+settings.height,imgBigY);

					$('#'+settings.identifier+'_img').css('left', imgBigX);
					$('#'+settings.identifier+'_img').css('top', imgBigY);
				});
			});
		});

		return this;
	};
})(jQuery);