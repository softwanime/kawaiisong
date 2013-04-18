(function($) {
	
	var methods = {
			init 	: function( options ) {
				
				if( this.length ) {
					
					var settings = {
						animMouseenter		: {
							'mText' : {speed : 350, easing : 'easeOutExpo', delay : 140, dir : 1},
							'sText' : {speed : 350, easing : 'easeOutExpo', delay : 0, dir : 1}						},
						animMouseleave		: {
							'mText' : {speed : 300, easing : 'easeInExpo', delay : 140, dir : 1},
							'sText' : {speed : 300, easing : 'easeInExpo', delay : 280, dir : 1}
						},
						boxAnimSpeed		: 300,
						defaultTextColor	: '#fff',
						defaultBgColor		: '#fff'
					};
					
					return this.each(function() {
						
						if ( options ) {
							$.extend( settings, options );
						}
						
						var $el 			= $(this),

							$menuItems		= $el.children('li'),

						maxdelay	= Math.max( settings.animMouseleave['mText'].speed + settings.animMouseleave['mText'].delay ,
												settings.animMouseleave['sText'].speed + settings.animMouseleave['sText'].delay 
											  ),
							t_mouseenter;
						
						$menuItems.find('.sti-item').each(function() {
							var $el	= $(this);
							$el.data('deftop', $el.position().top);
						});
						
						$menuItems.bind('mouseenter', function(e) {
							
							clearTimeout(t_mouseenter);
							
							var $item		= $(this),
								$wrapper	= $item.children('a'),
								wrapper_h	= $wrapper.height(),
								$movingItems= $wrapper.find('.sti-item'),
								hovercolor	= $item.data('hovercolor');
							
							t_mouseenter	= setTimeout(function() {
								$item.addClass('sti-current');
								
								$movingItems.each(function(i) {
									var $item			= $(this),
										item_sti_type	= $item.data('type'),
										speed			= settings.animMouseenter[item_sti_type].speed,
										easing			= settings.animMouseenter[item_sti_type].easing,
										delay			= settings.animMouseenter[item_sti_type].delay,
										dir				= settings.animMouseenter[item_sti_type].dir,
										style			= {'top' : -dir * wrapper_h + 'px'};
									
									if( item_sti_type === 'icon' ) {
										style.backgroundPosition	= 'bottom left';
									} else {
										style.color					= hovercolor;
									}
									
									$item.hide().css(style).show();
									clearTimeout($item.data('time_anim'));
									$item.data('time_anim',
										setTimeout(function() {
											$item.stop(true)
												 .animate({top : $item.data('deftop') + 'px'}, speed, easing);
										}, delay)
									);
								});

								$wrapper.stop(true).animate({
									backgroundColor: settings.defaultTextColor
								}, settings.boxAnimSpeed );
							
							}, 100);	

						})

						.bind('mouseleave', function(e) {
							
							clearTimeout(t_mouseenter);
							
							var $item		= $(this),
								$wrapper	= $item.children('a'),
								wrapper_h	= $wrapper.height(),
								$movingItems= $wrapper.find();
							
							if(!$item.hasClass('sti-current')) 
								return false;		
							
							$item.removeClass('sti-current');
							
							$movingItems.each(function(i) {
								var $item			= $(this),
									item_sti_type	= $item.data('type'),
									speed			= settings.animMouseleave[item_sti_type].speed,
									easing			= settings.animMouseleave[item_sti_type].easing,
									delay			= settings.animMouseleave[item_sti_type].delay,
									dir				= settings.animMouseleave[item_sti_type].dir;
								
								clearTimeout($item.data('time_anim'));
								
								setTimeout(function() {
									
									$item.stop(true).animate({'top' : -dir * wrapper_h + 'px'}, speed, easing, function() {
										
										if( delay + speed === maxdelay ) {
											
											$wrapper.stop(true).animate({
												backgroundColor: settings.defaultBgColor
											}, settings.boxAnimSpeed );
											
											$movingItems.each(function(i) {
												var $el				= $(this),
													style			= {'top' : $el.data('deftop') + 'px'};
												
												if( $el.data('type') === 'icon' ) {
													style.backgroundPosition	= 'top left';
												} else {
													style.color					= settings.defaultTextColor;
												}
												
												$el.hide().css(style).show();
											});
											
										}
									});
								}, delay);
							});
						});
						
					});
				}
			}
		};
	
	$.fn.iconmenu = function(method) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.iconmenu' );
		}
	};
	
})(jQuery);