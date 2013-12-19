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
(function(a){a.fn.bezoom=function(b){var c={marginLeft:10,identifier:"bezoom",height:200,width:200,titleSource:"title",imgSource:"href",bgColor:"#5398EE",color:"#ffffff",size:"0.8em",showTitle:false};b=b||{};a.extend(c,b);this.each(function(b){var d=a(this).attr(c.titleSource);var e=a(this).attr(c.imgSource);var f=a(this).attr("title");var g=a(this).find("img");var h=new Image;h.src=e;var i;var j;item=this;a(h).load(function(){var b=h.width;var i=h.height;var j=a(item).find("img").height();var k=a(item).find("img").width();var l=k/b;var m=j/i;a(item).mouseenter(function(f){a("#"+c.identifier).remove();a(this).attr("title","");var g=a(this).find("img").height();var h=a(this).find("img").width();var j=a(this).offset();var k=Math.ceil(j.top-0)-g;var l=Math.ceil(j.left-0)+h+c.marginLeft;var m='<img id="'+c.identifier+'_img" src="'+e+'" style="position:relative; width:'+b+"px!important;height:"+i+"px!important; max-width:"+b+"px!important;max-height:"+i+'px!important;vertical-align: none;horizontal-align:none;">';var n="";if(c.showTitle){n='<div style="background-color:'+c.bgColor+";color:"+c.color+";font-size:"+c.size+';">'+d+"</div>"}a("body").append('<div id="'+c.identifier+'" style="z-index:9999; border:1px solid #efefef; position:absolute; top:'+k+"px;left:"+l+"px;width:"+c.width+'px;">'+n+'<div style="width:'+c.width+"px;height:"+c.height+'px;overflow:hidden;position:relative;">'+m+"</div></div>")}).mouseleave(function(){a("#"+c.identifier).remove();a(this).attr("title",f)});a(item).mousemove(function(d){var e=g.offset();var f=d.pageX-e.left;var h=d.pageY-e.top;var j=Math.ceil(f/l-c.width/2)*-1;j=Math.max(-1*b+c.width,j);j=Math.min(0,j);var k=Math.ceil(h/m-c.height*.5)*-1;k=Math.min(0,k);k=Math.max(-1*i+c.height,k);a("#"+c.identifier+"_img").css("left",j);a("#"+c.identifier+"_img").css("top",k)})})});return this}})(jQuery)