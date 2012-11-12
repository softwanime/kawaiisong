/**
 * jQuery accordion slider with video support
 * (c) Copyright Christian "Kriesi" Budschedl
 * http://www.kriesi.at
 */


(function($)
{
	var pluginNameSpace = 'aviacordion',
		
		//methods used to create the slideshow
		methods = {
		
			init: function()
			{
				//prepare slides
				methods.prepareSlides.apply( this );
			
				//start preloading images if the preloader is available
				if(jQuery.fn.aviaImagePreloader)
				{
					this.aviaImagePreloader({thisData: this, delay:500}, methods.preloadingDone);
				}
				else
				{
					methods.preloadingDone.apply( this );
				}
			},
			
			preloadingDone: function()
			{

				//fetch slider data
				var data = this.data( pluginNameSpace );
				
				//allow animation of slides:
				data.animatingNow = false;
				
				//now that the preloading was done increase the width ff all slides to prevent flickering when they move
				data.slides.css({width: data.expandedSlide});
				
				methods.addBehavior.apply( this );
				
				if(data.options.autorotation)
				{
					methods.autorotation.apply( this );
				}
				
				this.find('.slideshow_overlay').css({visibility:'visible'});
				this.find('.heading_clone').each(function(i)
				{
					var current = $(this);
					
					setTimeout(function()
					{
						current.animate({opacity:0.7});
					}, i * 100);
					
				});
				
			},
			
			prepareSlides :function()
			{
				var data = this.data( pluginNameSpace ), currentslide, imageslide, videoslide, classname;
				
				data.slides.each(function(i)
				{
					currentslide 	= $(this);
					imageslide 		= currentslide.find('img');
					videoslide		= currentslide.find('video, embed, object, iframe, .avia_video');
					
					if(imageslide.length && videoslide.length)
					{
						classname = 'comboslide';
					}
					else if(videoslide.length)
					{
						classname = 'videoslide';
					}
					else if(imageslide.length)
					{
						classname = 'imageslide';
					}
					
					currentslide.addClass(classname);
					$('<span class="slideshow_overlay"></span>').css({'visibility':'hidden'}).appendTo(currentslide);

			
					/*aviacordion additions*/
					var positionData = {
						this_slides_position: i * data.slideWidth,							 // position if no item is active
						pos_active_higher: i * data.minimizedSlide,							 // position of the item if a higher item is active
						pos_active_lower: ((i-1) * data.minimizedSlide) + data.expandedSlide // position of the item if a lower item is active
					}
					
					//save data of each slide via jquerys data method	
					currentslide.data( pluginNameSpace, positionData );
					
					
					//set base properties	
					currentslide.css({zIndex:i+1, left: i * data.slideWidth, display:'block', width:(data.slideWidth+2)}); // +2 to prevent flickering of items bellow the items that need to be loaded yet				
					currentslide.append('<div class="shadow"></div>');
					
					methods.cloneCaption(currentslide);
					
					
				});
				var clones = this.find('.heading_clone'), newheight = 0;
				clones.each(function(){var cloneH = $(this).height(); newheight = cloneH > newheight ? cloneH : newheight; })
				clones.css({width:data.slideWidth, height: newheight, paddingRight:data.expandedSlide, opacity:0 });
			},
			
			cloneCaption: function(currentslide)
			{
				var	real_excerpt 		= currentslide.find('.slideshow_caption').css({'-webkit-text-size-adjust':'none'}),			// wrapper to center the excerpt content verticaly
					real_excerpt_height = real_excerpt.css({display:'block'}).outerHeight(),		// height of the excerpt content
					slide_heading 		= currentslide.find('h1:eq(0)'),  					// slide heading
					cloned_heading 		= slide_heading.clone().appendTo(currentslide)
													   .wrap('<div class="heading_clone">').wrap('<div class="center_helper"></div>'),
					currentslidelink	= currentslide.find('a').not('.slideshow_caption a'),
					captionlink 		= real_excerpt.find('a'),
					lightboxlink 		= currentslide.find('a').not('.slideshow_caption a').filter('a[rel^="prettyPhoto"], a[rel^="lightbox"], a[href$=jpg], a[href$=png], a[href$=gif], a[href$=jpeg], a[href$=".mov"] , a[href$=".swf"] , a[href*="vimeo.com"] , a[href*="youtube.com"] , a[href*="screenr.com"]');
													   
					
					if(currentslidelink.length && !captionlink.length)
					{
						real_excerpt.css({cursor:'pointer'}).click(function()
						{ 
							if(lightboxlink.length)
							{
								currentslidelink.trigger('click');
							}
							else
							{
								top.location.href = currentslidelink.attr('href');
							}
						});
					}
									   
					real_excerpt.css({opacity:0.6, bottom: '-'+real_excerpt_height+'px'});								
					clone_height = cloned_heading.height();
			},
			
			addBehavior: function()
			{
				var current = this, data = this.data( pluginNameSpace );
				
				if(data.isIos)
				{
					data.slides.each(function()
					{
						var slide   = $(this),
							overlay = $('<div class="ios_overlay"></div>').appendTo(slide).css({position:'absolute',top:0,left:0,right:0,bottom:0,zIndex:1000});
					});
					
				}
				
				//show videos
				data.slides.bind('click.'+pluginNameSpace, function()
				{ 
					
					var clicked_item = $(this);
					
					if(data.isIos)
					{	
						data.slides.find('.ios_overlay').css({display:'block'});
						var overlay = clicked_item.find('.ios_overlay:visible');
						
						if(overlay.length)
						{
							overlay.css({display:'none'});
						}
					}
					
					
					if(!data.isIos && clicked_item.is('.comboslide'))
					{
						methods.showvideo.apply(current, [clicked_item]); 
						methods.autorotationStop.apply(current);
						 return false; 
					}
				}).bind(data.options.event+"."+pluginNameSpace,  function(event, continue_autoslide)
				{
					
					//stop autoslide on userinteraction
					if(!continue_autoslide)
					{
						methods.autorotationStop.apply( current );
					}
					
					var currentslide = $(this);
					var objData = currentslide.data( pluginNameSpace );
					var index = data.slides.index(currentslide);
					var cloned_heading = currentslide.find('.heading_clone');
					var	real_excerpt = currentslide.find('.slideshow_caption');
					var excerpt_content = real_excerpt.find('.featured_caption').length;
					
					currentslide.stop().animate({	left: objData.pos_active_higher},
													data.options.animationSpeed, data.options.easing);
													
					cloned_heading.stop().animate({bottom:"-" + cloned_heading.height()});
					
					if(excerpt_content) real_excerpt.stop().animate({bottom:0});
					
					data.slides.each(function(j)
					{
						if (index != j)
						{	
							var current = $(this),
							    currentobjData = current.data( pluginNameSpace ),
								new_pos = currentobjData.pos_active_higher;
								
							if(index  < j) { new_pos = currentobjData.pos_active_lower; }
							
							current.stop().animate({	left:  new_pos },
														data.options.animationSpeed, data.options.easing);
						}
					});
					
					
					
				}).bind("mouseleave."+pluginNameSpace,  function()
				{
					
							var currentslide = $(this),
							cloned_heading = currentslide.find('.heading_clone'),
							real_excerpt = currentslide.find('.slideshow_caption'),
							real_excerpt_height = real_excerpt.outerHeight();
							
							cloned_heading.stop().animate({bottom:0});
							real_excerpt.stop().animate({bottom:'-'+real_excerpt_height+'px'});
							
				});
				
				
				
				//set mouseout event: expand all slides to no-slide-active position and width
				this.bind("mouseleave."+pluginNameSpace, function()
				{
					data.slides.each(function(i)
					{
						var currentslide = $(this),
							objData = currentslide.data( pluginNameSpace ),
							new_pos = objData.this_slides_position;
							
							currentslide.stop().animate({left: new_pos},data.options.animationSpeed, data.options.easing);
							
							if(data.isIos)
							{
								currentslide.find('.ios_overlay').css({display:'block'});
							}
					});
					
				});
				
			}, 
			
			autorotation: function()
			{ 
				var current = this,
					data = this.data( pluginNameSpace ),
					time = (parseInt(data.options.autorotationSpeed) * 1000),
					index = 0,
					firstrun = true;
					
					data.interval = setInterval(function()
					{ 
						if(index == data.slideCount)
						{
							data.slides.filter(':eq('+(index - 1)+')').trigger("mouseleave."+ pluginNameSpace);
							index = 0;
							firstrun = true;
							current.trigger("mouseleave."+ pluginNameSpace);					
						}
						else
						{
							if(!firstrun) data.slides.filter(':eq('+(index - 1)+')').trigger("mouseleave."+ pluginNameSpace);
							data.slides.filter(':eq('+index+')').trigger(data.options.event+"."+pluginNameSpace,[true]);
							
							index++;
							firstrun = false;
						}
					},
					time);
			},
			
			autorotationStop: function()
			{ 
				var data = this.data( pluginNameSpace );
				clearInterval(data.interval);
				data.interval = false;
			},
			
			showvideo: function(clicked_item)
			{
				var data = this.data( pluginNameSpace ),
					image = clicked_item.find('img'),
					newWidth = image.width(),
					newHeight = image.height();
				
				clicked_item.find('img, canvas, .slideshow_overlay, .'+data.options.captionClass).stop().fadeOut();
				clicked_item.find('.slideshow_video').stop().fadeIn();
				clicked_item.find('.slideshow_video iframe, .slideshow_video embed, .slideshow_video object').height(newHeight).width(newWidth);
				
			},
			
			overwrite_options: function()
			{
				var data 	= this.data( pluginNameSpace ),
					optionsWrapper = this.parents('.slideshow_container:eq(0)');
					
					if(optionsWrapper.length)
					{
						var autoInterval = /autoslidedelay__(\d+)/;
						var matchInterval = autoInterval.exec(optionsWrapper[0].className);

						if(matchInterval != null) { data.options.autorotationSpeed = matchInterval[1]; }
						if(optionsWrapper.is('.autoslide_false')) 	data.options.autorotation = false;
						if(optionsWrapper.is('.autoslide_true')) 	data.options.autorotation = true;
						
					}
			}
			
		};



	$.fn.aviaCordion = function(options) 
	{
		return this.each(function()
		{
			var slider =  $(this), data = {},
			
			//default slideshow settings. can be overwritten by passing different values when calling the function 
			defaults = 
			{
				event: 				'mouseover',		//which event should be used to trigger the sliding
				slides: 			'li',				// wich element inside the container should serve as slide
				animationSpeed: 	900,				// animation duration
				easing: 			'easeOutQuint',		// animation easing
				autorotation: 		true,				// autorotation true or false?
				autorotationSpeed:	5,					// duration between autorotation switch in Seconds
				appendControlls: 	true,				// should slidecontrolls be appended or should we use none/predefined,
				captionOpacity:		0.7,
				captionClass:		'slideshow_caption'	// caption class
			};
			
			//merge default options and options passed by the user, then collect some slider data
			data.options 		= $.extend(defaults, options);
			data.slides  		= slider.find(data.options.slides).css({display:'none'});
			data.slideCount 	= data.slides.length;
			data.currentSlide 	= slider.find(data.options.slides + ':eq(0)').css({display:'block'});
			data.nextSlide	 	= slider.find(data.options.slides + ':eq(1)');
			data.interval 		= false;
			data.animatingNow 	= true;
			data.isIos			= navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/);
			
			if(data.isIos) data.options.event = 'click';
			
			//accordion specials
			data.expandedSlide	= data.slides.width();					// size of a slide when expanded, defined in css, class ".featured" by default
			data.slideWidth		= slider.width() / data.slideCount;		// width of the slides
			data.minimizedSlide	= (slider.width() - data.expandedSlide) / (data.slideCount - 1), // remaining width is shared among the non-active slides
			
			
			
			
			//apply data to the slider to keep track of variables and states
			slider.data( pluginNameSpace, data );
			
			//overwrite options with slider specific options if necessary
			methods.overwrite_options.apply( slider );
			
			//initialize the slideshow
			methods.init.apply( slider );
		});
	};
})(jQuery);

jQuery.noConflict();
jQuery(document).ready(function(){	
     if(jQuery.fn.avia_activate_lightbox)		
	jQuery('body').avia_activate_lightbox();
	if(jQuery.fn.avia_activate_hover_effect)		
	jQuery('#slider').avia_activate_hover_effect();
	if(jQuery.fn.aviaCordion)
	jQuery(".aviacordion .slideshow").aviaCordion();
});

(function($)
{
	$.fn.avia_activate_lightbox = function(variables) 
	{
		var defaults = 
		{
			autolinkElements: 'a[rel^="prettyPhoto"], a[rel^="lightbox"], a[href$=jpg], a[href$=png], a[href$=gif], a[href$=jpeg], a[href$=".mov"] , a[href$=".swf"] , a[href*=".swf?"] , a[href*="vimeo.com"] , a[href*="youtube.com"] , a[href*="screenr.com"]'
		};
		
		var options = $.extend(defaults, variables);
		
		return this.each(function()
		{
			var elements = $(options.autolinkElements, this).not('.noLightbox, .noLightbox a'),
				lastParent = "",
				counter = 0;
		
			elements.each(function()
			{
				var el = $(this),
					parentPost = el.parents('.post-entry:eq(0)'),
					group = 'auto_group';
				
				if(parentPost.get(0) != lastParent)
				{
					lastParent = parentPost.get(0);
					counter ++;
				}
					
				if((el.attr('rel') == undefined || el.attr('rel') == '') && !el.hasClass('noLightbox')) 
				{ 
					el.attr('rel','lightbox['+group+counter+']'); 
					
					//manipulate the link in case we got a screenr video
					if(el.is('a[href*="screenr.com"]'))
					{
						var currentlink = el.attr('href');
						
						if(currentlink.indexOf('embed') !== -1)
						{
							el.attr('href', currentlink + '?iframe=true&width=650&height=396');
						}
						else
						{
							var append =  currentlink.substring(currentlink.lastIndexOf('/') + 1,currentlink.length);
							el.attr('href', 'http://www.screenr.com/embed/' + append + '?iframe=true&width=650&height=396');
						}
					}
				}
			});
			
			if($.fn.prettyPhoto)
			elements.prettyPhoto({ "theme": 'premium_photo', 'slideshow': 5000 }); /* facebook /light_rounded / dark_rounded / light_square / dark_square */								
		});
	};
})(jQuery);	



(function($)
{
	$.fn.avia_activate_hover_effect = function(variables) 
	{
		var defaults = 
		{
			autolinkElements: 'a[rel^="prettyPhoto"], a[rel^="lightbox"], a[href$=jpg], a[href$=png], a[href$=gif], a[href$=jpeg], a[href$=".mov"] , a[href$=".swf"] , a[href*="vimeo.com"] , a[href*="youtube.com"]'
		};
		
		var options = $.extend(defaults, variables);
		
		return this.each(function()
		{	
		
			$(options.autolinkElements, this).contents('img').each(function()
			{
				var img = $(this),
					a = img.parent(),
					preload = img.parents('.preloading'),
					$newclass = 'lightbox_video',
					applied= false;
				if(a.attr('href').match(/(jpg|gif|jpeg|png|tif)/)) 
				{ 
					$newclass = 'lightbox_image'; 
				}
				if(a.is('a'))
				{
					if(img.css('float')) {a.css({float:img.css('float')})}
					if(!a.css('position') || a.css('position') == 'static') { a.css({position:'relative', display:'inline-block'}); }
					if(img.is('.aligncenter')) a.css({display:'block'}); 
				}
				
				var bg = $("<span class='image_overlay_effect'><span class='image_overlay_effect_inside'></span></span>").appendTo(a);
					bg.css({display:'block', zIndex:5, opacity:0});
				
				bg.hover(function()
				{	
					if(applied == false && img.css('opacity') > 0.5)
					{
						bg.addClass($newclass);
						applied = true;
					}	
					
					bg.stop().animate({opacity:0.7},400);
				},
				function()
				{
					bg.stop().animate({opacity:0},400);
				});
				
				
				
			});						
		});
	};
})(jQuery);

(function($)
{
	$.fn.avia_activate_hover_effect = function(variables) 
	{
		var defaults = 
		{
			autolinkElements: 'a[rel^="prettyPhoto"], a[rel^="lightbox"], a[href$=jpg], a[href$=png], a[href$=gif], a[href$=jpeg], a[href$=".mov"] , a[href$=".swf"] , a[href*="vimeo.com"] , a[href*="youtube.com"]'
		};
		
		var options = $.extend(defaults, variables);
		
		return this.each(function()
		{	
		
			$(options.autolinkElements, this).contents('img').each(function()
			{
				var img = $(this),
					a = img.parent(),
					preload = img.parents('.preloading'),
					$newclass = 'lightbox_video',
					applied= false;
				if(a.attr('href').match(/(jpg|gif|jpeg|png|tif)/)) 
				{ 
					$newclass = 'lightbox_image'; 
				}
				if(a.is('a'))
				{
					if(img.css('float')) {a.css({float:img.css('float')})}
					if(!a.css('position') || a.css('position') == 'static') { a.css({position:'relative', display:'inline-block'}); }
					if(img.is('.aligncenter')) a.css({display:'block'}); 
				}
				
				var bg = $("<span class='image_overlay_effect'><span class='image_overlay_effect_inside'></span></span>").appendTo(a);
					bg.css({display:'block', zIndex:5, opacity:0});
				
				bg.hover(function()
				{	
					if(applied == false && img.css('opacity') > 0.5)
					{
						bg.addClass($newclass);
						applied = true;
					}	
					
					bg.stop().animate({opacity:0.6},400);
				},
				function()
				{
					bg.stop().animate({opacity:0},400);
				});
				
				
				
			});						
		});
	};
})(jQuery);

jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

(function($)
{
	$.fn.aviaImagePreloader = function(variables, callback) 
	{
		var defaults = 
		{
			fadeInSpeed: 800,
			delay:0,
			maxLoops: 10,
			thisData: {},
			data: ''
		};
		
		var options = $.extend(defaults, variables);
			
		return this.each(function()
		{
			var container 	= $(this),
				images		= $('img', this).css({opacity:0, visibility:'visible', display:'block'}),
				parent = images.parent().addClass('preloading'),
				imageCount = images.length,
				interval = '',
				allImages = images ;
							
			
			var methods = 
			{
				checkImage: function()
				{
					images.each(function(i)
					{
						if(this.complete == true) images = images.not(this);
					});
					
					if(images.length && options.maxLoops >= 0)
					{
						options.maxLoops--;
						setTimeout(methods.checkImage, 500);
					}
					else
					{
						methods.showImages();
					}
				},
				
				showImages: function()
				{
					allImages.each(function(i)
					{
						var currentImage = $(this);
						setTimeout(function()
						{
							methods.showSingleImage(currentImage, i);
						},options.delay * i);
						
						
					});
				},
				
				showSingleImage: function(currentImage, i)
				{
					currentImage.animate({opacity:1}, options.fadeInSpeed, function()
					{
						currentImage.parents().removeClass('preloading');
						if(allImages.length == i+1) 
						{
							methods.callback(i);
						}
					});
				},
				
				callback: function()
				{		
					if (variables instanceof Function) { callback = variables; }
					if (callback  instanceof Function) { callback.call(options.thisData, options.data);  }
				}
			};
			
			if(!images.length) { methods.callback(); return }
			methods.checkImage();

		});
	};
})(jQuery);


function avia_iframe_fix()
{
	var iframe 	= jQuery('.slideshow iframe'),
		youtubeEmbed = jQuery('.slideshow object, .slideshow embed').attr('wmode','opaque');
		
		iframe.each(function()
		{
			var current = jQuery(this),
				src 	= current.attr('src');
			
			if(src)
			{
				if(src.indexOf('?') !== -1)
				{
					src += "&wmode=opaque";
				}
				else
				{
					src += "?wmode=opaque";
				}
				
				current.attr('src', src);
			}
		});
} 