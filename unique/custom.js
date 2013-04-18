
// HOME HOVER EFFECT ===============================================================================		    
    $(document).ready(function() {
        $('.thumb_1').mouseenter(function(e) {
            $(this).children('a').children('img').animate({ height: '90', left: '0', top: '0', width: '150'}, 400);
            $(this).children('a').children('span').fadeIn(300);
        }).mouseleave(function(e) {
            $(this).children('a').children('img').animate({ height: '90', left: '0', top: '0', width: '150'}, 400);
            $(this).children('a').children('span').fadeOut(300);
        });
});

//PLAYLIST ===============================================================================	
$(document).ready(function(){

    $(".slidingDiv").hide();
	$(".show_hide").show();
	
	$('.show_hide').click(function(){
	$(".slidingDiv").slideToggle();
	});

});		
//FANCYBOX BOX VIEWER ===============================================================================	
$("a.fancy").fancybox({
				'titleShow'		: true,
				'autoScale'		: true,
				'transitionIn'	: 'elastic',
				'padding': 0, 
					'margin': 70, 
				'transitionOut'	: 'elastic',
				'titlePosition'	: 'over',
				 'overlayOpacity': '0.9',
				  'overlayColor': '#000'
			});
			
$('a.fancy').each(function() {
        $(this).removeAttr('data-rel').attr('rel', 'fancybox');
});			
	$("a.iframe_content").fancybox({
'padding': 0, // optional
'width': 900, //or whatever you like
'height': 500,
'overlayOpacity': '0.9',
'overlayColor': '#000',
'type': 'iframe' ,
'transitionIn'	: 'elastic',
'transitionOut'	: 'elastic',
'scrolling': 'no'
});		
		
	$(".vimeo").click(function() {
                $.fancybox({
				'overlayOpacity': '0.9',
                'padding'       : 0,
                'autoScale'     : false,
                'transitionIn' : 'elastic',
                 'transitionOut' : 'elastic',
				'overlayColor': '#000',
                'width'         : 830,
                'height'        : 470,
                 'href'          :this.href.replace("http://www.vimeo.com",'http://player.vimeo.com/video'), 
                'type'          : 'iframe'
        });
        return false;
        }); 


$(".video_youtube").click(function() {
$.fancybox({
'autoScale'		: false,
'transitionIn'	: 'elastic',
'transitionOut'	: 'elastic',
'titlePosition'	: 'over',
'overlayOpacity': '0.9',
'padding': 0, // optional
'overlayColor': '#000',
'title'         : this.title,
'width'			: 890,
'height'		: 470,
'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
'type'			: 'swf',
'wmode'             : 'transparent'
		});

		return false;
	});		
	
// PRETTIBOX GALLERY VIEWER ===============================================================================
		$(document).ready(function(){
				$("area[rel^='prettyPhoto']").prettyPhoto();
				
				$(".gallery a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, autoplay_slideshow: false});
				$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
	
				
			});
			
			$('a.pretty').each(function() {
        $(this).removeAttr('data-rel').attr('rel', 'prettyPhoto[]');
});	

// SCROLL TO ===============================================================================
$(document).ready(function() {
$('ul.nav a').click(function () {

		$('ul.nav a').removeClass('selected');
		$(this).addClass('selected');
		
		current = $(this);
				
		$('#wrapper').scrollTo($(this).attr('href'), 800);		
		
		return false;
	});
	
	$(window).resize(function () {
		resizePanel();
	});
});	

function resizePanel() {

	width = $(window).width();
	height = $(window).height();

	mask_width = width * $('.item').length;
		
	$('#debug').html(width  + ' ' + height + ' ' + mask_width);
		
	$('#wrapper, .section').css({width: width, height: height});
	$('#mask').css({width: mask_width, height: height});
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
		
}			
// HOVER IMAGE MAGNIFY===============================================================================
$(document).ready(function(){

    //Set opacity on each span to 0%
    $(".magnify").css({'opacity':'0'});

	$('li .image a').hover(
		function() {
			$(this).find('.magnify').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.magnify').stop().fadeTo(500, 0);
		}
	)

});	
$(document).ready(function(){

    //Set opacity on each span to 0%
    $(".magnify").css({'opacity':'0'});

	$('li .image_2 a').hover(
		function() {
			$(this).find('.magnify').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.magnify').stop().fadeTo(500, 0);
		}
	)

});	
$(document).ready(function(){

    //Set opacity on each span to 0%
    $(".magnify_vimeo").css({'opacity':'0'});

	$('li .image a').hover(
		function() {
			$(this).find('.magnify_vimeo').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.magnify_vimeo').stop().fadeTo(500, 0);
		}
	)

});	
$(document).ready(function(){

    //Set opacity on each span to 0%
    $(".magnify_vimeo").css({'opacity':'0'});

	$('li .image_2 a').hover(
		function() {
			$(this).find('.magnify_vimeo').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.magnify_vimeo').stop().fadeTo(500, 0);
		}
	)

});	
$(document).ready(function(){

    //Set opacity on each span to 0%
    $(".magnify_youtube").css({'opacity':'0'});

	$('li .image a').hover(
		function() {
			$(this).find('.magnify_youtube').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.magnify_youtube').stop().fadeTo(500, 0);
		}
	)

});			
$(document).ready(function(){

    //Set opacity on each span to 0%
    $(".magnify_youtube").css({'opacity':'0'});

	$('li .image_2 a').hover(
		function() {
			$(this).find('.magnify_youtube').stop().fadeTo(500, 1);
		},
		function() {
			$(this).find('.magnify_youtube').stop().fadeTo(500, 0);
		}
	)

});			
// HOME GALLERY ===============================================================================
		$(function() {
				$('#sti-menu').iconmenu({
					animMouseenter	: {
						'mText' : {speed : 200, easing : 'easeOutExpo', delay : 0, dir : 1},
						'sText' : {speed : 600, easing : 'easeOutExpo', delay : 400, dir : 1}
					},
					animMouseleave	: {
						'mText' : {speed : 200, easing : 'easeInExpo', delay : 150, dir : 1},
						'sText' : {speed : 200, easing : 'easeInExpo', delay : 0, dir : 1}
					}
				});
			});
// GALLERY PAGINATION===============================================================================
/*
 * 	Easy Paginate 1.0 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/
 *
 *	Copyright (c) 2011 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

(function($) {
		  
	$.fn.easyPaginate = function(options){

		var defaults = {				
			delay: 150,
			numeric: false,
			nextprev: true,
			auto:false,
			pause:4000,
			clickstop:true,
			controls: 'pagination',
			current: 'current' 
		}; 
		
		var options = $.extend(defaults, options); 
		var step = options.step;
		var lower, upper;
		var children = $(this).children();
		var count = children.length;
		var obj, next, prev;		
		var page = 1;
		var timeout;
		var clicked = false;
		
		function show(){
			clearTimeout(timeout);
			lower = ((page-1) * step);
			upper = lower+step;
			$(children).each(function(i){
				var child = $(this);
				child.hide();
				if(i>=lower && i<upper){ setTimeout(function(){ child.fadeIn('slow') }, ( i-( Math.floor(i/step) * step) )*options.delay ); }
				if(options.nextprev){
					if(upper >= count) { next.fadeOut('slow'); } else { next.fadeIn('slow'); };
					if(lower >= 1) { prev.fadeIn('slow'); } else { prev.fadeOut('slow'); };
				};
			});	
			$('li','#'+ options.controls).removeClass(options.current);
			$('li[data-index="'+page+'"]','#'+ options.controls).addClass(options.current);
			
			if(options.auto){
				if(options.clickstop && clicked){}else{ timeout = setTimeout(auto,options.pause); };
			};
		};
		
		function auto(){
			if(upper <= count){ page++; show(); }			
		};
		
		this.each(function(){ 
			
			obj = this;
			
			if(count>step){
				
				var pages = Math.floor(count/step);
				if((count/step) > pages) pages++;
				
				var ol = $('<ol id="'+ options.controls +'"></ol>').insertAfter(obj);
				
				if(options.nextprev){
					prev = $('<li class="prev">Previous</li>')
						.hide()
						.appendTo(ol)
						.click(function(){
							clicked = true;
							page--;
							show();
						});
				};
				
				if(options.numeric){
					for(var i=1;i<=pages;i++){
					$('<li data-index="'+ i +'">'+ i +'</li>')
						.appendTo(ol)
						.click(function(){	
							clicked = true;
							page = $(this).attr('data-index');
							show();
						});					
					};				
				};
				
				if(options.nextprev){
					next = $('<li class="next">Next</li>')
						.hide()
						.appendTo(ol)
						.click(function(){
							clicked = true;			
							page++;
							show();
						});
				};
			
				show();
			};
		});	
		
	};	

})(jQuery);

// GALLERY add or remove items group ===============================================================================
jQuery(function($){
	
	$('ul#items').easyPaginate({
		step:12
	});
	
	$('ul#items_2').easyPaginate({
		step:12
	});
	
	$('ul#items_3').easyPaginate({
		step:12
	});
	
	$('ul#items_4').easyPaginate({
		step:12
	});
	
});    





	
