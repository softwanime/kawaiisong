/*
* File Name: Script Js
* Author Name: arrowthemes
* Author URL: http://themeforest.net/user/arrowthemes
* Version: 1.0 */

$('.sidebar h2,.column h2').wrap('<div class="column-title"></div>');
/*----------R-E-Q-U-I-R-E-D--------------*/
if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add(window,"load",function(){$.ready()});$.extend({includeStates:{},getJs:function(a,b,c){if(typeof b!="function"&&!c){c=b;b=null}a=a.replace("\n","");$.includeStates[a]=false;var d=document.createElement("script");d.type="text/javascript";d.onload=function(){$.includeStates[a]=true;if(b)b.call(d)};d.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[a]=true;if(b)b.call(d)};d.src=a;if(c){if(c.constructor!=Array)c=[c];setTimeout(function(){var a=true;$.each(c,function(b,c){if(!c()){a=false;return false}});if(a)document.getElementsByTagName("head")[0].appendChild(d);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName("head")[0].appendChild(d);return function(){return $.includeStates[a]}},readyOld:$.ready,ready:function(){if($.isReady)return;imReady=true;$.each($.includeStates,function(a,b){});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}})
/*--------------------------------------*/

/*
* File Name: Horizontal JS Menu
* Author Name: arrowthemes
* Author URL: http://themeforest.net/user/arrowthemes
* Version: 1.1*/

jQuery(function() {
    
    var $ = jQuery;
    // retarder
    $.fn.retarder = function(delay, method){
        var node = this;
        if (node.length){
            if (node[0]._timer_) clearTimeout(node[0]._timer_);
            node[0]._timer_ = setTimeout(function(){ method(node); }, delay);
        }
        return this;
    };
    
    // base rules
    $('#menu').addClass('js-active');
    if ($.browser.msie && parseInt($.browser.version) == 7) $('#menu').addClass('ie7');
    $('ul div', '#menu').css('visibility', 'hidden');
    $('.menu>li', '#menu').hover(
        function(){
            var ul  = $('div:first', this);
            if (ul.length){
                if (!ul[0].hei) ul[0].hei = ul.height();
                ul.css({height: 1, overflow: 'hidden'}).retarder(50, function(i){
                    $('#menu').removeClass('js-active');
                    $('a:first', ul[0].parentNode).addClass('over');
                    $('#menu>ul>li.back').css('display', 'none');
                   if ($.browser.msie) i.css('visibility', 'visible').animate({height: ul[0].hei}, {duration: 200, complete : function(){ ul.css('overflow', 'visible'); }});
                    else i.css({visibility: 'visible', opacity: 0}).animate({height: ul[0].hei, opacity: 1}, {duration: 200, complete : function(){ ul.css('overflow', 'visible'); }});
                });
            }
        },
        function(){
            var ul  = $('div:first', this);
            if (ul.length){
                var css = {visibility: 'hidden', height: ul[0].hei};
                $('#menu').addClass('js-active');
                 $('a:first', ul[0].parentNode).removeClass('over');
                ul.stop().retarder(50, function(i){
                    if ($.browser.msie) i.animate({height: 1}, {duration: 150, complete : function(){ ul.css(css); }});
                    else i.css({opacity: 1}).animate({height: 1, opacity: 0}, {duration: 150, complete : function(){ ul.css(css); }});
                });
                
            }
        }
    );
    
    $('ul ul li', '#menu').hover(
        function(){
            var ul = $('div:first', this);
            if (ul.length){
                if (!ul[0].wid) ul[0].wid = ul.width();
                ul.css({width: 0, overflow: 'hidden'}).retarder(50, function(i){
                   if ($.browser.msie || $.browser.opera) i.css('visibility', 'visible').animate({width: ul[0].wid}, {duration: 200, complete : function(){ ul.css('overflow', 'visible'); }});
                    else i.css({visibility: 'visible', opacity: 0}).animate({width: ul[0].wid, opacity: 1}, {duration: 200, complete : function(){ ul.css('overflow', 'visible'); }});
                });
            }
        },
        function(){
            var ul  = $('div:first', this);
            if (ul.length){
                var css = {visibility: 'hidden', width: ul[0].wid};
                ul.stop().retarder(50, function(i){
                     if ($.browser.msie || $.browser.opera) i.animate({width: 1}, {duration: 150, complete : function(){ ul.css(css); }});
                    else i.css({opacity: 1}).animate({width: 1, opacity: 0}, {duration: 150, complete : function(){ ul.css(css); }});
                });
            }
        }
    );
});

/** top links hover effect
-------------------------------------**/
$(document).ready(function() {
	$('.top-links a').hover(function() {
		$(this).stop(true,true).animate({opacity: 0.5});
		},function() {
		$(this).stop(true,true).animate({opacity: 1});
	});
});


/** date widget
-------------------------------------**/
$(document).ready(function(){
var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),
monthNames = new Array("January","February","March","April","May","June","July", "August","September", "October","November","December"),
now = new Date();
document.getElementById("top-date").innerHTML=(dayNames[now.getDay()] + ", " + 
monthNames[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear());
});


/** typewriter function
-------------------------------------**/
function typewriter(millisec, t_element){
    var intervalTime = millisec,
		div = $(t_element), st = div.text(), timer, count = 0, total = st.length;
		div.html("").css("visibility", "visible");
		timer = setInterval(showLetters, intervalTime);
		function showLetters() {
		if(count < total) {
			div.html(div.text().split("").join("") + st.charAt(count) + "");
			count++;
		}
		else {
			clearInterval(timer);
		}}
    }

 //implement typewriter
$(document).ready(function(){
typewriter(75, $('.home #top-date'));
$('.child .show-title').css({opacity: 0.1, 'visibility': 'visible'});
});

/** begin orbit slider
-------------------------------------**/
if ($("#orbit-slider").length) {
$(window).load(function(){
	var oslider = $('#orbit-slider');

	/* Load slider nicely with fade-in effect */
	oslider.fadeIn(1000); 
	$('#orbit-slider>img').css({display: "block"});
	oslider.orbit({
		animation: 'fade', 
		timer: true,
		pauseOnHover: true, 
		captionAnimation: 'fade',
		bullets: true
		});

	$('ul.orbit-bullets').children('li:first').addClass('first-bullet');
	});
}

//add shadow
$(function(){
var shadow =  $('.shadow').each(function () {
	$('<span class="block-shadow"></span>').appendTo( $(this) );
	});
});


/** begin twitter
-------------------------------------**/
if ($(".twitter_widget").length) {
		$(function($){
		  $(".twitter_widget").tweet({
		    join_text: "auto",
		    username: "arrowthemes",
		    avatar_size: null,
		    count: 3,   // change digit to increase/decrease number of tweets
		    auto_join_text_default: "I said,",
		    auto_join_text_ed: "",
		    auto_join_text_ing: "",
		    auto_join_text_reply: "I replied",
		    auto_join_text_url: "",
		    loading_text: "loading tweets..."
		  });
		});
	}

//placerholder text for older browsers
$(document).ready(function(){
$('input, textarea').placeholder();
});

//goto url
function goTo() {
var sE = null, url;
if(document.getElementById) {
	sE = document.getElementById('gotolink');
	} else if(document.all) {
	sE = document.all('gotolink');
}
if(sE && (url = sE.options[sE.selectedIndex].value)) {
	location.href = url;
}}


//tabs, accordions
$(function() {	

var accordion = $(".accordion");
//fallback accordion transition for IE
function msieversion(){
  var ua = window.navigator.userAgent,
  msie = ua.indexOf ( "MSIE " );
  if ( msie > 0 )      // If Internet Explorer, return version number
	 return parseInt (ua.substring (msie+5, ua.indexOf (".", msie )))
  else                 // If another browser, return 0
	 return 0;
}

//fix for accordion
if (accordion.length > 0){
	 if ( msieversion() >= 9 )
	     accordion.tabs(".accordion div.pane", {tabs: 'h2', effect: 'slide', initialIndex: null});
	   else if ( msieversion() >= 8 )
	     accordion.tabs(".accordion div.pane", {tabs: 'h2', effect: 'fade', initialIndex: null});
		else if ( msieversion() >= 7 )
		 accordion.tabs(".accordion div.pane", {tabs: 'h2', effect: 'fade', initialIndex: null});

	}
});


//slider navigation
$(document).ready(function ($) {
	if ($('#slide-nav').length > 0){
	$('#slide-nav li:last-child').addClass('last');
    }
});


/** begin showhide toggle
-------------------------------------**/
$(document).ready(function ($) {
if ($('.showhide li').length > 0) {
	var showhide = $('.showhide li');
		showhide.each(function () {
		var q = $(this);

				if (q.children('section').css('display') === 'block') {
				q.children('h4').addClass('collapse');
				} else if (q.children('section').css('display') === 'none') {
				q.children('h4').addClass('expanded');
				}

				q.children('h4').click(function () {

				q.children('section').slideToggle('normal', function () {
				if (q.children('section').css('display') === 'block') {
				q.children('h4').addClass('collapse');
				q.children('h4').removeClass('expanded');

				} else if (q.children('section').css('display') === 'none') {
				q.children('h4').addClass('expanded');
				q.children('h4').removeClass('collapse');
				}

				});
			});
		});
}
});

/** begin notification alerts
-------------------------------------**/
$(document).ready(function ($) {
    $('.close-note').on('click', (function () {
		$(this).parent().fadeTo('slow', 0, function() {
			$(this).slideUp("slow", function() {
                $(this).remove();
			});
		});
	}));
});


/** begin jquery cycle
-------------------------------------**/
	$(document).ready(function() {
		//client image scroll
		$('.client').cycle({
			fx: 'scrollUp',  // can be fade, scrollUp, shuffle, zoom
			delay:  2000, 
			cleartype:     !$.support.opacity,
			cleartypeNoBg: true,	
			speed:  700,
			timeout: 5000
		});
	
		//testimonials
		$('.testimonial').cycle({
			fx: 'fade',  // can be fade, scrollUp, shuffle, zoom
			delay:  2000, 
			cleartype:     !$.support.opacity,
			cleartypeNoBg: true,	
			speed:  700,
			timeout: 5000
		});
	});	

//back to top
$(document).ready(function() {	
	$().UItoTop({scrollSpeed: 500, easingType: 'easeOutExpo' });
});

/** begin tooltips
-------------------------------------**/

//set item ids/classes for toolips
$(document).ready(function() {
$(".top-links a").tooltip({ effect: 'slide', opacity: 1, position: 'bottom center', offset: [15, 0] });
$(".post-share a").tooltip({ effect: 'slide', opacity: 1, position: 'top center', offset: [5, 0] });
$("a#toTop").tooltip({ effect: 'slide', opacity: 0.8, position: 'top center', offset: [0, 0] });
$("abbr").tooltip({ effect: 'slide', opacity: 1, position: 'top center', offset: [0, 0] });
$("a#mytooltip").tooltip({ effect: 'slide', opacity: 1, position: 'top center', offset: [0, 0] });
$(".color-styles img").tooltip({ effect: 'fade', opacity: 1, position: 'bottom center', offset: [15, 0] });
$(".tabs ul").tabs("#panes-top > div", {effect: 'default', fadeOutSpeed: 400, rotate: true });
$(".accordion").tabs(".accordion div.pane", {tabs: 'h2', effect: 'slide', initialIndex: null});
});

//plugins.js
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

//script
// css helper
(function($) {
    var data = [
        {str:navigator.userAgent,sub:'Chrome',ver:'Chrome',name:'chrome'},
        {str:navigator.vendor,sub:'Apple',ver:'Version',name:'safari'},
        {prop:window.opera,ver:'Opera',name:'opera'},
        {str:navigator.userAgent,sub:'Firefox',ver:'Firefox',name:'firefox'},
        {str:navigator.userAgent,sub:'MSIE',ver:'MSIE',name:'ie'}];
    for (var n=0;n<data.length;n++)	{
        if ((data[n].str && (data[n].str.indexOf(data[n].sub) != -1)) || data[n].prop) {
            var v = function(s){var i=s.indexOf(data[n].ver);return (i!=-1)?parseInt(s.substring(i+data[n].ver.length+1)):'';};
            $('html').addClass(data[n].name+' '+data[n].name+v(navigator.userAgent) || v(navigator.appVersion)); break;			
        }
    }
})(jQuery);
/* end Page */


/** jquery.easing.js ****************/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ?© 2008 George McGinley Smith
 * All rights reserved.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('h.j[\'J\']=h.j[\'C\'];h.H(h.j,{D:\'y\',C:9(x,t,b,c,d){6 h.j[h.j.D](x,t,b,c,d)},U:9(x,t,b,c,d){6 c*(t/=d)*t+b},y:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},17:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},12:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},W:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},X:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},18:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},15:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},1b:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},Q:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},I:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},N:9(x,t,b,c,d){6-c*8.B(t/d*(8.g/2))+c+b},M:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},L:9(x,t,b,c,d){6-c/2*(8.B(8.g*t/d)-1)+b},O:9(x,t,b,c,d){6(t==0)?b:c*8.i(2,10*(t/d-1))+b},P:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.i(2,-10*t/d)+1)+b},S:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.i(2,10*(t-1))+b;6 c/2*(-8.i(2,-10*--t)+2)+b},R:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},K:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},T:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},F:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},E:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.i(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},G:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.u(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.i(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.i(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},1a:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},19:9(x,t,b,c,d,s){e(s==v)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},14:9(x,t,b,c,d,s){e(s==v)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.z))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.z))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.j.w(x,d-t,0,c,d)+b},w:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.V/2.k))*t+.Y)+b}m{6 c*(7.q*(t-=(2.16/2.k))*t+.11)+b}},Z:9(x,t,b,c,d){e(t<d/2)6 h.j.A(x,t*2,0,c,d)*.5+b;6 h.j.w(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|pow|easing|75|70158|else|sin|sqrt||5625|asin|||abs|undefined|easeOutBounce||easeOutQuad|525|easeInBounce|cos|swing|def|easeOutElastic|easeInElastic|easeInOutElastic|extend|easeOutQuint|jswing|easeOutCirc|easeInOutSine|easeOutSine|easeInSine|easeInExpo|easeOutExpo|easeInQuint|easeInCirc|easeInOutExpo|easeInOutCirc|easeInQuad|25|easeOutCubic|easeInOutCubic|9375|easeInOutBounce||984375|easeInCubic|easeInOutQuint|easeInOutBack|easeOutQuart|625|easeInOutQuad|easeInQuart|easeOutBack|easeInBack|easeInOutQuart'.split('|'),0,{}));
/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
 eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.j(0.1,{i:3(x,t,b,c,d){2 0.1.h(x,t,b,c,d)},k:3(x,t,b,c,d){2 0.1.l(x,t,b,c,d)},g:3(x,t,b,c,d){2 0.1.m(x,t,b,c,d)},o:3(x,t,b,c,d){2 0.1.e(x,t,b,c,d)},6:3(x,t,b,c,d){2 0.1.5(x,t,b,c,d)},4:3(x,t,b,c,d){2 0.1.a(x,t,b,c,d)},9:3(x,t,b,c,d){2 0.1.8(x,t,b,c,d)},f:3(x,t,b,c,d){2 0.1.7(x,t,b,c,d)},n:3(x,t,b,c,d){2 0.1.r(x,t,b,c,d)},z:3(x,t,b,c,d){2 0.1.p(x,t,b,c,d)},B:3(x,t,b,c,d){2 0.1.D(x,t,b,c,d)},C:3(x,t,b,c,d){2 0.1.A(x,t,b,c,d)},w:3(x,t,b,c,d){2 0.1.y(x,t,b,c,d)},q:3(x,t,b,c,d){2 0.1.s(x,t,b,c,d)},u:3(x,t,b,c,d){2 0.1.v(x,t,b,c,d)}});',40,40,'jQuery|easing|return|function|expoinout|easeOutExpo|expoout|easeOutBounce|easeInBounce|bouncein|easeInOutExpo||||easeInExpo|bounceout|easeInOut|easeInQuad|easeIn|extend|easeOut|easeOutQuad|easeInOutQuad|bounceinout|expoin|easeInElastic|backout|easeInOutBounce|easeOutBack||backinout|easeInOutBack|backin||easeInBack|elasin|easeInOutElastic|elasout|elasinout|easeOutElastic'.split('|'),0,{}));


/*UITop jquery*/
(function(a){a.fn.UItoTop=function(b){var c={text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1e3,easingType:"linear"};var d=a.extend(c,b);var e="#"+d.containerID;var f="#"+d.containerHoverID;a("body").append('<a href="#" title="Back to top" id="'+d.containerID+'">'+d.text+"</a>");a(e).hide().click(function(){a("html, body").animate({scrollTop:0},d.scrollSpeed,d.easingType);a("#"+d.containerHoverID,this).stop().animate({opacity:0},d.inDelay,d.easingType);return false}).prepend('<span id="'+d.containerHoverID+'"></span>').hover(function(){a(f,this).stop().animate({opacity:1},600,"linear")},function(){a(f,this).stop().animate({opacity:0},700,"linear")});a(window).scroll(function(){var b=a(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){a(e).css({position:"absolute",top:a(window).scrollTop()+a(window).height()-50})}if(b>d.min)a(e).fadeIn(d.inDelay);else a(e).fadeOut(d.Outdelay)})}})(jQuery);

/*hide UITop for handheld*/
$(document).ready(function(){
if ((navigator.userAgent.match(/iPad/i) != null) || (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)) {
 document.getElementById("toTop").style.visibility = "hidden"; }
});


/*form validator*/
(function(a){function l(b,c,e){function l(b,c,d){if(!e.grouped&&b.length){return}var f;if(d===false||a.isArray(d)){f=g.messages[c.key||c]||g.messages["*"];f=f[e.lang]||g.messages["*"].en;var h=f.match(/\$\d/g);if(h&&a.isArray(d)){a.each(h,function(a){f=f.replace(this,d[a])})}}else{f=d[e.lang]||d}b.push(f)}var f=this,i=c.add(f);b=b.not(":button, :image, :reset, :submit");c.attr("novalidate","novalidate");a.extend(f,{getConf:function(){return e},getForm:function(){return c},getInputs:function(){return b},reflow:function(){b.each(function(){var b=a(this),c=b.data("msg.el");if(c){var d=h(b,c,e);c.css({top:d.top,left:d.left})}});return f},invalidate:function(c,d){if(!d){var g=[];a.each(c,function(a,c){var d=b.filter("[name='"+a+"']");if(d.length){d.trigger("OI",[c]);g.push({input:d,messages:[c]})}});c=g;d=a.Event()}d.type="onFail";i.trigger(d,[c]);if(!d.isDefaultPrevented()){k[e.effect][0].call(f,c,d)}return f},reset:function(c){c=c||b;c.removeClass(e.errorClass).each(function(){var b=a(this).data("msg.el");if(b){b.remove();a(this).data("msg.el",null)}}).unbind(e.errorInputEvent||"");return f},destroy:function(){c.unbind(e.formEvent+".V").unbind("reset.V");b.unbind(e.inputEvent+".V").unbind("change.V");return f.reset()},checkValidity:function(c,g){c=c||b;c=c.not(":disabled");if(!c.length){return true}g=g||a.Event();g.type="onBeforeValidate";i.trigger(g,[c]);if(g.isDefaultPrevented()){return g.result}var h=[];c.not(":radio:not(:checked)").each(function(){var b=[],c=a(this).data("messages",b),k=d&&c.is(":date")?"onHide.v":e.errorInputEvent+".v";c.unbind(k);a.each(j,function(){var a=this,d=a[0];if(c.filter(d).length){var h=a[1].call(f,c,c.val());if(h!==true){g.type="onBeforeFail";i.trigger(g,[c,d]);if(g.isDefaultPrevented()){return false}var j=c.attr(e.messageAttr);if(j){b=[j];return false}else{l(b,d,h)}}}});if(b.length){h.push({input:c,messages:b});c.trigger("OI",[b]);if(e.errorInputEvent){c.bind(k,function(a){f.checkValidity(c,a)})}}if(e.singleError&&h.length){return false}});var m=k[e.effect];if(!m){throw'Validator: cannot find effect "'+e.effect+'"'}if(h.length){f.invalidate(h,g);return false}else{m[1].call(f,c,g);g.type="onSuccess";i.trigger(g,[c]);c.unbind(e.errorInputEvent+".v")}return true}});a.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","),function(b,c){if(a.isFunction(e[c])){a(f).bind(c,e[c])}f[c]=function(b){if(b){a(f).bind(c,b)}return f}});if(e.formEvent){c.bind(e.formEvent+".V",function(a){if(!f.checkValidity(null,a)){return a.preventDefault()}a.target=c;a.type=e.formEvent})}c.bind("reset.V",function(){f.reset()});if(b[0]&&b[0].validity){b.each(function(){this.oninvalid=function(){return false}})}if(c[0]){c[0].checkValidity=f.checkValidity}if(e.inputEvent){b.bind(e.inputEvent+".V",function(b){f.checkValidity(a(this),b)})}b.filter(":checkbox, select").filter("[required]").bind("change.V",function(b){var c=a(this);if(this.checked||c.is("select")&&a(this).val()){k[e.effect][1].call(f,c,b)}});var m=b.filter(":radio").change(function(a){f.checkValidity(m,a)});a(window).resize(function(){f.reflow()})}function i(a){function b(){return this.getAttribute("type")==a}b.key="[type="+a+"]";return b}function h(b,c,d){var e=b.offset().top,f=b.offset().left,g=d.position.split(/,?\s+/),h=g[0],i=g[1];e-=c.outerHeight()-d.offset[0];f+=b.outerWidth()+d.offset[1];if(/iPad/i.test(navigator.userAgent)){e-=a(window).scrollTop()}var j=c.outerHeight()+b.outerHeight();if(h=="center"){e+=j/2}if(h=="bottom"){e+=j}var k=b.outerWidth();if(i=="center"){f-=(k+c.outerWidth())/2}if(i=="left"){f-=k}return{top:e,left:f}}a.tools=a.tools||{version:"@VERSION"};var b=/\[type=([a-z]+)\]/,c=/^-?[0-9]*(\.[0-9]+)?$/,d=a.tools.dateinput,e=/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,f=/^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,g;g=a.tools.validator={conf:{grouped:false,effect:"default",errorClass:"invalid",inputEvent:null,errorInputEvent:"keyup",formEvent:"submit",lang:"en",message:"<div/>",messageAttr:"data-message",messageClass:"error",offset:[0,0],position:"center right",singleError:false,speed:"normal"},messages:{"*":{en:"Please correct this value"}},localize:function(b,c){a.each(c,function(a,c){g.messages[a]=g.messages[a]||{};g.messages[a][b]=c})},localizeFn:function(b,c){g.messages[b]=g.messages[b]||{};a.extend(g.messages[b],c)},fn:function(c,d,e){if(a.isFunction(d)){e=d}else{if(typeof d=="string"){d={en:d}}this.messages[c.key||c]=d}var f=b.exec(c);if(f){c=i(f[1])}j.push([c,e])},addEffect:function(a,b,c){k[a]=[b,c]}};var j=[],k={"default":[function(b){var c=this.getConf();a.each(b,function(b,d){var e=d.input;e.addClass(c.errorClass);var f=e.data("msg.el");if(!f){f=a(c.message).addClass(c.messageClass).appendTo(document.body);e.data("msg.el",f)}f.css({visibility:"hidden"}).find("p").remove();a.each(d.messages,function(b,c){a("<p/>").html(c).appendTo(f)});if(f.outerWidth()==f.parent().width()){f.add(f.find("p")).css({display:"inline"})}var g=h(e,f,c);f.css({visibility:"visible",position:"absolute",top:g.top,left:g.left}).fadeIn(c.speed)})},function(b){var c=this.getConf();b.removeClass(c.errorClass).each(function(){var b=a(this).data("msg.el");if(b){b.css({visibility:"hidden"})}})}]};a.each("email,url,number".split(","),function(b,c){a.expr[":"][c]=function(a){return a.getAttribute("type")===c}});a.fn.oninvalid=function(a){return this[a?"bind":"trigger"]("OI",a)};g.fn(":email","Please enter a valid email address",function(a,b){return!b||e.test(b)});g.fn(":url","Please enter a valid URL",function(a,b){return!b||f.test(b)});g.fn(":number","Please enter a numeric value.",function(a,b){return c.test(b)});g.fn("[max]","Please enter a value no larger than $1",function(a,b){if(b===""||d&&a.is(":date")){return true}var c=a.attr("max");return parseFloat(b)<=parseFloat(c)?true:[c]});g.fn("[min]","Please enter a value of at least $1",function(a,b){if(b===""||d&&a.is(":date")){return true}var c=a.attr("min");return parseFloat(b)>=parseFloat(c)?true:[c]});g.fn("[required]","Please complete this mandatory field.",function(a,b){if(a.is(":checkbox")){return a.is(":checked")}return!!b});g.fn("[pattern]",function(a){var b=new RegExp("^"+a.attr("pattern")+"$");return b.test(a.val())});a.fn.validator=function(b){var c=this.data("validator");if(c){c.destroy();this.removeData("validator")}b=a.extend(true,{},g.conf,b);if(this.is("form")){return this.each(function(){var d=a(this);c=new l(d.find(":input"),d,b);d.data("validator",c)})}else{c=new l(this,this.eq(0).closest("form"),b);return this.data("validator",c)}}})(jQuery);


/*HTML5 Validation*/				   
$(document).ready(function ($) {
// Regular Expression to test whether the value is valid
$.tools.validator.fn("[type=time]", "Please supply a valid time", function(input, value) { 
	return /^\d\d:\d\d$/.test(value);
});

$.tools.validator.fn("[data-equals]", "Value not equal with the $1 field", function(input) {
	var name = input.attr("data-equals"),
		 field = this.getInputs().filter("[name=" + name + "]"); 
	return input.val() == field.val() ? true : [name]; 
});

$.tools.validator.fn("[minlength]", function(input, value) {
	var min = input.attr("minlength");
	
	return value.length >= min ? true : {     
		en: "Please provide at least " +min+ " character" + (min > 1 ? "s" : ""),
		fi: "Kentän minimipituus on " +min+ " merkkiä" 
	};
});

$.tools.validator.localizeFn("[type=time]", {
	en: 'Please supply a valid time',
	fi: 'Virheellinen aika'		
});
});

$(document).ready(function () {
	$("#regform").validator({
		position: 'top center',
		offset: [-12, 40],
		relative: true,
		message: '<div><em></em></div>'
	});
});


/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-mq-cssclasses-addtest-teststyles-prefixes-ie8compat-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(m.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,m.innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},u=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return t("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e});for(var C in n)w(n,C)&&(s=C.toLowerCase(),e[s]=n[C](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},x(""),i=k=null,e._version=d,e._prefixes=m,e.mq=u,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});

/* Foundation v2.2 http://foundation.zurb.com */
(function(a){a("a[data-reveal-id]").live("click",function(c){c.preventDefault();var b=a(this).attr("data-reveal-id");a("#"+b).reveal(a(this).data())});a.fn.reveal=function(b){var c={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:true,dismissModalClass:"close-reveal-modal",open:a.noop,opened:a.noop,close:a.noop,closed:a.noop};b=a.extend({},c,b);return this.each(function(){var m=a(this),g=parseInt(m.css("top"),10),i=m.height()+g,h=false,e=a(".reveal-modal-bg"),d;if(e.length===0){e=a('<div class="reveal-modal-bg" />').insertAfter(m);e.fadeTo("fast",0.8)}function j(){h=false}function n(){h=true}function k(){if(!h){n();if(b.animation==="fadeAndPop"){m.css({top:a(document).scrollTop()-i,opacity:0,visibility:"visible"});e.fadeIn(b.animationSpeed/2);m.delay(b.animationSpeed/2).animate({top:a(document).scrollTop()+g+"px",opacity:1},b.animationSpeed,function(){m.trigger("reveal:opened")})}if(b.animation==="fade"){m.css({opacity:0,visibility:"visible",top:a(document).scrollTop()+g});e.fadeIn(b.animationSpeed/2);m.delay(b.animationSpeed/2).animate({opacity:1},b.animationSpeed,function(){m.trigger("reveal:opened")})}if(b.animation==="none"){m.css({visibility:"visible",top:a(document).scrollTop()+g});e.css({display:"block"});m.trigger("reveal:opened")}}}m.bind("reveal:open.reveal",k);function f(){if(!h){n();if(b.animation==="fadeAndPop"){m.animate({top:a(document).scrollTop()-i+"px",opacity:0},b.animationSpeed/2,function(){m.css({top:g,opacity:1,visibility:"hidden"})});e.delay(b.animationSpeed).fadeOut(b.animationSpeed,function(){m.trigger("reveal:closed")})}if(b.animation==="fade"){m.animate({opacity:0},b.animationSpeed,function(){m.css({opacity:1,visibility:"hidden",top:g})});e.delay(b.animationSpeed).fadeOut(b.animationSpeed,function(){m.trigger("reveal:closed")})}if(b.animation==="none"){m.css({visibility:"hidden",top:g});e.css({display:"none"});m.trigger("reveal:closed")}}}function l(){m.unbind(".reveal");e.unbind(".reveal");a("."+b.dismissModalClass).unbind(".reveal");a("body").unbind(".reveal")}m.bind("reveal:close.reveal",f);m.bind("reveal:opened.reveal reveal:closed.reveal",j);m.bind("reveal:closed.reveal",l);m.bind("reveal:open.reveal",b.open);m.bind("reveal:opened.reveal",b.opened);m.bind("reveal:close.reveal",b.close);m.bind("reveal:closed.reveal",b.closed);m.trigger("reveal:open");d=a("."+b.dismissModalClass).bind("click.reveal",function(){m.trigger("reveal:close")});if(b.closeOnBackgroundClick){e.css({cursor:"pointer"});e.bind("click.reveal",function(){m.trigger("reveal:close")})}a("body").bind("keyup.reveal",function(o){if(o.which===27){m.trigger("reveal:close")}})})}}(jQuery));(function(b){b.fn.findFirstImage=function(){return this.first().find("img").andSelf().filter("img").first()};var a={defaults:{animation:"horizontal-push",animationSpeed:600,timer:true,advanceSpeed:4000,pauseOnHover:false,startClockOnMouseOut:false,startClockOnMouseOutAfter:1000,directionalNav:true,directionalNavRightText:"Right",directionalNavLeftText:"Left",captions:true,captionAnimation:"fade",captionAnimationSpeed:600,bullets:false,bulletThumbs:false,bulletThumbLocation:"",afterSlideChange:b.noop,fluid:true,centerBullets:true},activeSlide:0,numberSlides:0,orbitWidth:null,orbitHeight:null,locked:null,timerRunning:null,degrees:0,wrapperHTML:'<div class="orbit-wrapper" />',timerHTML:'<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',captionHTML:'<div class="orbit-caption"></div>',directionalNavHTML:'<div class="slider-nav"><span class="right"></span><span class="left"></span></div>',bulletHTML:'<ul class="orbit-bullets"></ul>',init:function(f,e){var c,g=0,d=this;this.clickTimer=b.proxy(this.clickTimer,this);this.addBullet=b.proxy(this.addBullet,this);this.resetAndUnlock=b.proxy(this.resetAndUnlock,this);this.stopClock=b.proxy(this.stopClock,this);this.startTimerAfterMouseLeave=b.proxy(this.startTimerAfterMouseLeave,this);this.clearClockMouseLeaveTimer=b.proxy(this.clearClockMouseLeaveTimer,this);this.rotateTimer=b.proxy(this.rotateTimer,this);this.options=b.extend({},this.defaults,e);if(this.options.timer==="false"){this.options.timer=false}if(this.options.captions==="false"){this.options.captions=false}if(this.options.directionalNav==="false"){this.options.directionalNav=false}this.$element=b(f);this.$wrapper=this.$element.wrap(this.wrapperHTML).parent();this.$slides=this.$element.children("img, a, div");this.$element.bind("orbit.next",function(){d.shift("next")});this.$element.bind("orbit.prev",function(){d.shift("prev")});this.$element.bind("orbit.goto",function(i,h){d.shift(h)});this.$element.bind("orbit.start",function(i,h){d.startClock()});this.$element.bind("orbit.stop",function(i,h){d.stopClock()});c=this.$slides.filter("img");if(c.length===0){this.loaded()}else{c.bind("imageready",function(){g+=1;if(g===c.length){d.loaded()}})}},loaded:function(){this.$element.addClass("orbit").css({width:"1px",height:"1px"});this.$slides.addClass("orbit-slide");this.setDimentionsFromLargestSlide();this.updateOptionsIfOnlyOneSlide();this.setupFirstSlide();if(this.options.timer){this.setupTimer();this.startClock()}if(this.options.captions){this.setupCaptions()}if(this.options.directionalNav){this.setupDirectionalNav()}if(this.options.bullets){this.setupBulletNav();this.setActiveBullet()}},currentSlide:function(){return this.$slides.eq(this.activeSlide)},setDimentionsFromLargestSlide:function(){var d=this,c;d.$element.add(d.$wrapper).width(this.$slides.first().width());d.$element.add(d.$wrapper).height(this.$slides.first().height());d.orbitWidth=this.$slides.first().width();d.orbitHeight=this.$slides.first().height();c=this.$slides.first().findFirstImage().clone();this.$slides.each(function(){var e=b(this),g=e.width(),f=e.height();if(g>d.$element.width()){d.$element.add(d.$wrapper).width(g);d.orbitWidth=d.$element.width()}if(f>d.$element.height()){d.$element.add(d.$wrapper).height(f);d.orbitHeight=d.$element.height();c=b(this).findFirstImage().clone()}d.numberSlides+=1});if(this.options.fluid){if(typeof this.options.fluid==="string"){c=b('<img src="http://placehold.it/'+this.options.fluid+'" />')}d.$element.prepend(c);c.addClass("fluid-placeholder");d.$element.add(d.$wrapper).css({width:"inherit"});d.$element.add(d.$wrapper).css({height:"inherit"});b(window).bind("resize",function(){d.orbitWidth=d.$element.width();d.orbitHeight=d.$element.height()})}},lock:function(){this.locked=true},unlock:function(){this.locked=false},updateOptionsIfOnlyOneSlide:function(){if(this.$slides.length===1){this.options.directionalNav=false;this.options.timer=false;this.options.bullets=false}},setupFirstSlide:function(){var c=this;this.$slides.first().css({"z-index":3}).fadeIn(function(){c.$slides.css({display:"block"})})},startClock:function(){var c=this;if(!this.options.timer){return false}if(this.$timer.is(":hidden")){this.clock=setInterval(function(){c.$element.trigger("orbit.next")},this.options.advanceSpeed)}else{this.timerRunning=true;this.$pause.removeClass("active");this.clock=setInterval(this.rotateTimer,this.options.advanceSpeed/180)}},rotateTimer:function(){var c="rotate("+this.degrees+"deg)";this.degrees+=2;this.$rotator.css({"-webkit-transform":c,"-moz-transform":c,"-o-transform":c});if(this.degrees>180){this.$rotator.addClass("move");this.$mask.addClass("move")}if(this.degrees>360){this.$rotator.removeClass("move");this.$mask.removeClass("move");this.degrees=0;this.$element.trigger("orbit.next")}},stopClock:function(){if(!this.options.timer){return false}else{this.timerRunning=false;clearInterval(this.clock);this.$pause.addClass("active")}},setupTimer:function(){this.$timer=b(this.timerHTML);this.$wrapper.append(this.$timer);this.$rotator=this.$timer.find(".rotator");this.$mask=this.$timer.find(".mask");this.$pause=this.$timer.find(".pause");this.$timer.click(this.clickTimer);if(this.options.startClockOnMouseOut){this.$wrapper.mouseleave(this.startTimerAfterMouseLeave);this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer)}if(this.options.pauseOnHover){this.$wrapper.mouseenter(this.stopClock)}},startTimerAfterMouseLeave:function(){var c=this;this.outTimer=setTimeout(function(){if(!c.timerRunning){c.startClock()}},this.options.startClockOnMouseOutAfter)},clearClockMouseLeaveTimer:function(){clearTimeout(this.outTimer)},clickTimer:function(){if(!this.timerRunning){this.startClock()}else{this.stopClock()}},setupCaptions:function(){this.$caption=b(this.captionHTML);this.$wrapper.append(this.$caption);this.setCaption()},setCaption:function(){var d=this.currentSlide().attr("data-caption"),c;if(!this.options.captions){return false}if(d){c=b(d).html();this.$caption.attr("id",d).html(c);switch(this.options.captionAnimation){case"none":this.$caption.show();break;case"fade":this.$caption.fadeIn(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideDown(this.options.captionAnimationSpeed);break}}else{switch(this.options.captionAnimation){case"none":this.$caption.hide();break;case"fade":this.$caption.fadeOut(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideUp(this.options.captionAnimationSpeed);break}}},setupDirectionalNav:function(){var c=this,d=b(this.directionalNavHTML);d.find(".right").html(this.options.directionalNavRightText);d.find(".left").html(this.options.directionalNavLeftText);this.$wrapper.append(d);this.$wrapper.find(".left").click(function(){c.stopClock();c.$element.trigger("orbit.prev")});this.$wrapper.find(".right").click(function(){c.stopClock();c.$element.trigger("orbit.next")})},setupBulletNav:function(){this.$bullets=b(this.bulletHTML);this.$wrapper.append(this.$bullets);this.$slides.each(this.addBullet);this.$element.addClass("with-bullets");if(this.options.centerBullets){this.$bullets.css("margin-left",-this.$bullets.width()/2)}},addBullet:function(g,e){var d=g+1,h=b("<li>"+(d)+"</li>"),c,f=this;if(this.options.bulletThumbs){c=b(e).attr("data-thumb");if(c){h.addClass("has-thumb").css({background:"url("+this.options.bulletThumbLocation+c+") no-repeat"})}}this.$bullets.append(h);h.data("index",g);h.click(function(){f.stopClock();f.$element.trigger("orbit.goto",[h.data("index")])})},setActiveBullet:function(){if(!this.options.bullets){return false}else{this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active")}},resetAndUnlock:function(){this.$slides.eq(this.prevActiveSlide).css({"z-index":1});this.unlock();this.options.afterSlideChange.call(this,this.$slides.eq(this.prevActiveSlide),this.$slides.eq(this.activeSlide))},shift:function(d){var c=d;this.prevActiveSlide=this.activeSlide;if(this.prevActiveSlide==c){return false}if(this.$slides.length=="1"){return false}if(!this.locked){this.lock();if(d=="next"){this.activeSlide++;if(this.activeSlide==this.numberSlides){this.activeSlide=0}}else{if(d=="prev"){this.activeSlide--;if(this.activeSlide<0){this.activeSlide=this.numberSlides-1}}else{this.activeSlide=d;if(this.prevActiveSlide<this.activeSlide){c="next"}else{if(this.prevActiveSlide>this.activeSlide){c="prev"}}}}this.setActiveBullet();this.$slides.eq(this.prevActiveSlide).css({"z-index":2});if(this.options.animation=="fade"){this.$slides.eq(this.activeSlide).css({opacity:0,"z-index":3}).animate({opacity:1},this.options.animationSpeed,this.resetAndUnlock)}if(this.options.animation=="horizontal-slide"){if(c=="next"){this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock)}if(c=="prev"){this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock)}}if(this.options.animation=="vertical-slide"){if(c=="prev"){this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock)}if(c=="next"){this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock)}}if(this.options.animation=="horizontal-push"){if(c=="next"){this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({left:-this.orbitWidth},this.options.animationSpeed)}if(c=="prev"){this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).animate({left:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({left:this.orbitWidth},this.options.animationSpeed)}}if(this.options.animation=="vertical-push"){if(c=="next"){this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({top:this.orbitHeight},this.options.animationSpeed)}if(c=="prev"){this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).animate({top:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({top:-this.orbitHeight},this.options.animationSpeed)}}this.setCaption()}}};b.fn.orbit=function(c){return this.each(function(){var d=b.extend({},a);d.init(this,c)})}})(jQuery);
/*!
 * jQuery imageready Plugin
 * http://www.zurb.com/playground/
 *
 * Copyright 2011, ZURB
 * Released under the MIT License
 */
(function(c){var b={};c.event.special.imageready={setup:function(f,e,d){b=f||b},add:function(d){var e=c(this),f;if(this.nodeType===1&&this.tagName.toLowerCase()==="img"&&this.src!==""){if(b.forceLoad){f=e.attr("src");e.attr("src","");a(this,d.handler);e.attr("src",f)}else{if(this.complete||this.readyState===4){d.handler.apply(this,arguments)}else{a(this,d.handler)}}}},teardown:function(d){c(this).unbind(".imageready")}};function a(d,f){var e=c(d);e.bind("load.imageready",function(){f.apply(d,arguments);e.unbind("load.imageready")})}}(jQuery));jQuery(document).ready(function(c){function b(d){c("form.custom input:"+d).each(function(){var f=c(this).hide(),e=f.next("span.custom."+d);if(e.length===0){e=c('<span class="custom '+d+'"></span>').insertAfter(f)}e.toggleClass("checked",f.is(":checked"));e.toggleClass("disabled",f.is(":disabled"))})}b("checkbox");b("radio");function a(f){var g=c(f),i=g.next("div.custom.dropdown"),d=g.find("option"),e=0,h;if(i.length===0){$customSelectSize="";if(c(f).hasClass("small")){$customSelectSize="small"}else{if(c(f).hasClass("medium")){$customSelectSize="medium"}else{if(c(f).hasClass("large")){$customSelectSize="large"}else{if(c(f).hasClass("expand")){$customSelectSize="expand"}}}}i=c('<div class="custom dropdown '+$customSelectSize+'"><a href="#" class="selector"></a><ul></ul></div>"');d.each(function(){h=c("<li>"+c(this).html()+"</li>");i.find("ul").append(h)});i.prepend('<a href="#" class="current">'+d.first().html()+"</a>");g.after(i);g.hide()}else{i.find("ul").html("");d.each(function(){h=c("<li>"+c(this).html()+"</li>");i.find("ul").append(h)})}i.toggleClass("disabled",g.is(":disabled"));d.each(function(j){if(this.selected){i.find("li").eq(j).addClass("selected");i.find(".current").html(c(this).html())}});i.find("li").each(function(){i.addClass("open");if(c(this).outerWidth()>e){e=c(this).outerWidth()}i.removeClass("open")});if(!i.is(".small, .medium, .large, .expand")){i.css("width",e+18+"px");i.find("ul").css("width",e+16+"px")}}c("form.custom select").each(function(){a(this)})});(function(c){function b(e){var f=0,g=e.next();$options=e.find("option");g.find("ul").html("");$options.each(function(){$li=c("<li>"+c(this).html()+"</li>");g.find("ul").append($li)});$options.each(function(h){if(this.selected){g.find("li").eq(h).addClass("selected");g.find(".current").html(c(this).html())}});g.removeAttr("style").find("ul").removeAttr("style");g.find("li").each(function(){g.addClass("open");if(c(this).outerWidth()>f){f=c(this).outerWidth()}g.removeClass("open")});g.css("width",f+18+"px");g.find("ul").css("width",f+16+"px")}function a(e){var g=e.prev(),f=g[0];if(false==g.is(":disabled")){f.checked=((f.checked)?false:true);e.toggleClass("checked");g.trigger("change")}}function d(e){var g=e.prev(),f=g[0];c('input:radio[name="'+g.attr("name")+'"]').each(function(){c(this).next().removeClass("checked")});f.checked=((f.checked)?false:true);e.toggleClass("checked");g.trigger("change")}c("form.custom span.custom.checkbox").live("click",function(e){e.preventDefault();e.stopPropagation();a(c(this))});c("form.custom span.custom.radio").live("click",function(e){e.preventDefault();e.stopPropagation();d(c(this))});c("form.custom select").live("change",function(e){b(c(this))});c("form.custom label").live("click",function(f){var e=c("#"+c(this).attr("for")),h,g;if(e.length!==0){if(e.attr("type")==="checkbox"){f.preventDefault();h=c(this).find("span.custom.checkbox");a(h)}else{if(e.attr("type")==="radio"){f.preventDefault();g=c(this).find("span.custom.radio");d(g)}}}});c("form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector").live("click",function(f){var h=c(this),g=h.closest("div.custom.dropdown"),e=g.prev();f.preventDefault();if(false==e.is(":disabled")){g.toggleClass("open");if(g.hasClass("open")){c(document).bind("click.customdropdown",function(i){g.removeClass("open");c(document).unbind(".customdropdown")})}else{c(document).unbind(".customdropdown")}}});c("form.custom div.custom.dropdown li").live("click",function(h){var i=c(this),f=i.closest("div.custom.dropdown"),g=f.prev(),e=0;h.preventDefault();h.stopPropagation();i.closest("ul").find("li").removeClass("selected");i.addClass("selected");f.removeClass("open").find("a.current").html(i.html());i.closest("ul").find("li").each(function(j){if(i[0]==this){e=j}});g[0].selectedIndex=e;g.trigger("change")})})(jQuery);
/*! http://mths.be/placeholder v1.8.7 by @mathias */
(function(o,m,r){var t="placeholder" in m.createElement("input"),q="placeholder" in m.createElement("textarea"),l=r.fn,k;if(t&&q){k=l.placeholder=function(){return this};k.input=k.textarea=true}else{k=l.placeholder=function(){return this.filter((t?"textarea":":input")+"[placeholder]").not(".placeholder").bind("focus.placeholder",s).bind("blur.placeholder",p).trigger("blur.placeholder").end()};k.input=t;k.textarea=q;r(function(){r(m).delegate("form","submit.placeholder",function(){var a=r(".placeholder",this).each(s);setTimeout(function(){a.each(p)},10)})});r(o).bind("unload.placeholder",function(){r(".placeholder").val("")})}function n(b){var c={},a=/^jQuery\d+$/;r.each(b.attributes,function(d,e){if(e.specified&&!a.test(e.name)){c[e.name]=e.value}});return c}function s(){var a=r(this);if(a.val()===a.attr("placeholder")&&a.hasClass("placeholder")){if(a.data("placeholder-password")){a.hide().next().show().focus().attr("id",a.removeAttr("id").data("placeholder-id"))}else{a.val("").removeClass("placeholder")}}}function p(){var d,e=r(this),c=e,a=this.id;if(e.val()===""){if(e.is(":password")){if(!e.data("placeholder-textinput")){try{d=e.clone().attr({type:"text"})}catch(b){d=r("<input>").attr(r.extend(n(this),{type:"text"}))}d.removeAttr("name").data("placeholder-password",true).data("placeholder-id",a).bind("focus.placeholder",s);e.data("placeholder-textinput",d).data("placeholder-id",a).before(d)}e=e.removeAttr("id").hide().prev().attr("id",a).show()}e.addClass("placeholder").val(e.attr("placeholder"))}else{e.removeClass("placeholder")}}}(this,document,jQuery));(function(c){var b={bodyHeight:0,pollInterval:1000};var a={init:function(d){return this.each(function(){var f=c(".has-tip"),e=c(".tooltip"),g=function(j,i){return'<span data-id="'+j+'" class="tooltip">'+i+'<span class="nub"></span></span>'},h=setInterval(a.isDomResized,b.pollInterval);if(e.length<1){f.each(function(k){var n=c(this),o="foundationTooltip"+k,l=n.attr("title"),j=n.attr("class");n.data("id",o);var m=c(g(o,l));m.addClass(j).removeClass("has-tip").appendTo("body");if(Modernizr.touch){m.append('<span class="tap-to-close">tap to close </span>')}a.reposition(n,m,j);m.fadeOut(150)})}c(window).resize(function(){var i=c(".tooltip");i.each(function(){var j=c(this).data();target=f=c(".has-tip"),tip=c(this),classes=tip.attr("class");f.each(function(){(c(this).data().id==j.id)?target=c(this):target=target});a.reposition(target,tip,classes)})});if(Modernizr.touch){c(".tooltip").live("click touchstart touchend",function(i){i.preventDefault();c(this).fadeOut(150)});f.live("click touchstart touchend",function(i){i.preventDefault();c(".tooltip").hide();c("span[data-id="+c(this).data("id")+"].tooltip").fadeIn(150);f.attr("title","")})}else{f.hover(function(){c("span[data-id="+c(this).data("id")+"].tooltip").fadeIn(150);f.attr("title","")},function(){c("span[data-id="+c(this).data("id")+"].tooltip").fadeOut(150)})}})},reposition:function(g,k,e){var d=g.data("width"),l=k.children(".nub"),h=l.outerHeight(),f=l.outerWidth();function j(o,r,p,n,q){o.css({top:r,bottom:n,left:q,right:p})}k.css({top:(g.offset().top+g.outerHeight()+10),left:g.offset().left,width:d});j(l,-h,"auto","auto",10);if(c(window).width()<767){var m=g.parents(".row");k.width(m.outerWidth()-20).css("left",m.offset().left).addClass("tip-override");j(l,-h,"auto","auto",g.offset().left)}else{if(e.indexOf("tip-top")>-1){var i=g.offset().top-k.outerHeight()-h;k.css({top:i,left:g.offset().left,width:d}).removeClass("tip-override");j(l,"auto","auto",-h,"auto")}else{if(e.indexOf("tip-left")>-1){k.css({top:g.offset().top-(g.outerHeight()/2)-(h/2),left:g.offset().left-k.outerWidth()-10,width:d}).removeClass("tip-override");j(l,(k.outerHeight()/2)-(h/2),-h,"auto","auto")}else{if(e.indexOf("tip-right")>-1){k.css({top:g.offset().top-(g.outerHeight()/2)-(h/2),left:g.offset().left+g.outerWidth()+10,width:d}).removeClass("tip-override");j(l,(k.outerHeight()/2)-(h/2),"auto","auto",-h)}}}}},isDomResized:function(){$body=c("body");if(b.bodyHeight!=$body.height()){b.bodyHeight=$body.height();c(window).trigger("resize")}}};c.fn.tooltips=function(d){if(a[d]){return a[d].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof d==="object"||!d){return a.init.apply(this,arguments)}else{c.error("Method "+d+" does not exist on jQuery.tooltips")}}}})(jQuery);


/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9999.3 (08-MAR-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */

(function(a,b){function s(b){function e(b){for(;b&&b.nodeName.toLowerCase()!="html";b=b.parentNode){var d=a.css(b,"background-color");if(d&&d.indexOf("rgb")>=0){var e=d.match(/\d+/g);return"#"+c(e[0])+c(e[1])+c(e[2])}if(d&&d!="transparent")return d}return"#ffffff"}function c(a){a=parseInt(a,10).toString(16);return a.length<2?"0"+a:a}d("applying clearType background-color hack");b.each(function(){a(this).css("background-color",e(this))})}function r(b,c){var d=a(c.pager);a.each(b,function(e,f){a.fn.cycle.createPagerAnchor(e,f,d,b,c)});c.updateActivePagerLink(c.pager,c.startingSlide,c.activePagerClass)}function q(b,c){var d=c?1:-1;var e=b.elements;var f=b.$cont[0],g=f.cycleTimeout;if(g){clearTimeout(g);f.cycleTimeout=0}if(b.random&&d<0){b.randomIndex--;if(--b.randomIndex==-2)b.randomIndex=e.length-2;else if(b.randomIndex==-1)b.randomIndex=e.length-1;b.nextSlide=b.randomMap[b.randomIndex]}else if(b.random){b.nextSlide=b.randomMap[b.randomIndex]}else{b.nextSlide=b.currSlide+d;if(b.nextSlide<0){if(b.nowrap)return false;b.nextSlide=e.length-1}else if(b.nextSlide>=e.length){if(b.nowrap)return false;b.nextSlide=0}}var h=b.onPrevNextEvent||b.prevNextClick;if(a.isFunction(h))h(d>0,b.nextSlide,e[b.nextSlide]);n(e,b,1,c);return false}function o(a,b,c,e){if(c.timeoutFn){var f=c.timeoutFn.call(a,a,b,c,e);while(c.fx!="none"&&f-c.speed<250)f+=c.speed;d("calculated timeout: "+f+"; speed: "+c.speed);if(f!==false)return f}return c.timeout}function n(c,e,f,g){function q(){var a=0,b=e.timeout;if(e.timeout&&!e.continuous){a=o(c[e.currSlide],c[e.nextSlide],e,g);if(e.fx=="shuffle")a-=e.speedOut}else if(e.continuous&&h.cyclePause)a=10;if(a>0)h.cycleTimeout=setTimeout(function(){n(c,e,0,!e.backwards)},a)}var h=e.$cont[0],i=c[e.currSlide],j=c[e.nextSlide];if(f&&e.busy&&e.manualTrump){d("manualTrump in go(), stopping active transition");a(c).stop(true,true);e.busy=0;clearTimeout(h.cycleTimeout)}if(e.busy){d("transition active, ignoring new tx request");return}if(h.cycleStop!=e.stopCount||h.cycleTimeout===0&&!f)return;if(!f&&!h.cyclePause&&!e.bounce&&(e.autostop&&--e.countdown<=0||e.nowrap&&!e.random&&e.nextSlide<e.currSlide)){if(e.end)e.end(e);return}var k=false;if((f||!h.cyclePause)&&e.nextSlide!=e.currSlide){k=true;var l=e.fx;i.cycleH=i.cycleH||a(i).height();i.cycleW=i.cycleW||a(i).width();j.cycleH=j.cycleH||a(j).height();j.cycleW=j.cycleW||a(j).width();if(e.multiFx){if(g&&(e.lastFx==b||++e.lastFx>=e.fxs.length))e.lastFx=0;else if(!g&&(e.lastFx==b||--e.lastFx<0))e.lastFx=e.fxs.length-1;l=e.fxs[e.lastFx]}if(e.oneTimeFx){l=e.oneTimeFx;e.oneTimeFx=null}a.fn.cycle.resetState(e,l);if(e.before.length)a.each(e.before,function(a,b){if(h.cycleStop!=e.stopCount)return;b.apply(j,[i,j,e,g])});var m=function(){e.busy=0;a.each(e.after,function(a,b){if(h.cycleStop!=e.stopCount)return;b.apply(j,[i,j,e,g])});if(!h.cycleStop){q()}};d("tx firing("+l+"); currSlide: "+e.currSlide+"; nextSlide: "+e.nextSlide);e.busy=1;if(e.fxFn)e.fxFn(i,j,e,m,g,f&&e.fastOnEvent);else if(a.isFunction(a.fn.cycle[e.fx]))a.fn.cycle[e.fx](i,j,e,m,g,f&&e.fastOnEvent);else a.fn.cycle.custom(i,j,e,m,g,f&&e.fastOnEvent)}else{q()}if(k||e.nextSlide==e.currSlide){e.lastSlide=e.currSlide;if(e.random){e.currSlide=e.nextSlide;if(++e.randomIndex==c.length){e.randomIndex=0;e.randomMap.sort(function(a,b){return Math.random()-.5})}e.nextSlide=e.randomMap[e.randomIndex];if(e.nextSlide==e.currSlide)e.nextSlide=e.currSlide==e.slideCount-1?0:e.currSlide+1}else if(e.backwards){var p=e.nextSlide-1<0;if(p&&e.bounce){e.backwards=!e.backwards;e.nextSlide=1;e.currSlide=0}else{e.nextSlide=p?c.length-1:e.nextSlide-1;e.currSlide=p?0:e.nextSlide+1}}else{var p=e.nextSlide+1==c.length;if(p&&e.bounce){e.backwards=!e.backwards;e.nextSlide=c.length-2;e.currSlide=c.length-1}else{e.nextSlide=p?0:e.nextSlide+1;e.currSlide=p?c.length-1:e.nextSlide-1}}}if(k&&e.pager)e.updateActivePagerLink(e.pager,e.currSlide,e.activePagerClass)}function m(b,c){b.addSlide=function(d,e){var f=a(d),g=f[0];if(!b.autostopCount)b.countdown++;c[e?"unshift":"push"](g);if(b.els)b.els[e?"unshift":"push"](g);b.slideCount=c.length;if(b.random){b.randomMap.push(b.slideCount-1);b.randomMap.sort(function(a,b){return Math.random()-.5})}f.css("position","absolute");f[e?"prependTo":"appendTo"](b.$cont);if(e){b.currSlide++;b.nextSlide++}if(!a.support.opacity&&b.cleartype&&!b.cleartypeNoBg)s(f);if(b.fit&&b.width)f.width(b.width);if(b.fit&&b.height&&b.height!="auto")f.height(b.height);g.cycleH=b.fit&&b.height?b.height:f.height();g.cycleW=b.fit&&b.width?b.width:f.width();f.css(b.cssBefore);if(b.pager||b.pagerAnchorBuilder)a.fn.cycle.createPagerAnchor(c.length-1,g,a(b.pager),c,b);if(a.isFunction(b.onAddSlide))b.onAddSlide(f);else f.hide()}}function l(b){var c,f,g=a.fn.cycle.transitions;if(b.fx.indexOf(",")>0){b.multiFx=true;b.fxs=b.fx.replace(/\s*/g,"").split(",");for(c=0;c<b.fxs.length;c++){var h=b.fxs[c];f=g[h];if(!f||!g.hasOwnProperty(h)||!a.isFunction(f)){e("discarding unknown transition: ",h);b.fxs.splice(c,1);c--}}if(!b.fxs.length){e("No valid transitions named; slideshow terminating.");return false}}else if(b.fx=="all"){b.multiFx=true;b.fxs=[];for(p in g){f=g[p];if(g.hasOwnProperty(p)&&a.isFunction(f))b.fxs.push(p)}}if(b.multiFx&&b.randomizeEffects){var i=Math.floor(Math.random()*20)+30;for(c=0;c<i;c++){var j=Math.floor(Math.random()*b.fxs.length);b.fxs.push(b.fxs.splice(j,1)[0])}d("randomized fx sequence: ",b.fxs)}return true}function k(b){b.original={before:[],after:[]};b.original.cssBefore=a.extend({},b.cssBefore);b.original.cssAfter=a.extend({},b.cssAfter);b.original.animIn=a.extend({},b.animIn);b.original.animOut=a.extend({},b.animOut);a.each(b.before,function(){b.original.before.push(this)});a.each(b.after,function(){b.original.after.push(this)})}function j(c,d,g,i,j){var o;var p=a.extend({},a.fn.cycle.defaults,i||{},a.metadata?c.metadata():a.meta?c.data():{});var t=a.isFunction(c.data)?c.data(p.metaAttr):null;if(t)p=a.extend(p,t);if(p.autostop)p.countdown=p.autostopCount||g.length;var u=c[0];c.data("cycle.opts",p);p.$cont=c;p.stopCount=u.cycleStop;p.elements=g;p.before=p.before?[p.before]:[];p.after=p.after?[p.after]:[];if(!a.support.opacity&&p.cleartype)p.after.push(function(){h(this,p)});if(p.continuous)p.after.push(function(){n(g,p,0,!p.backwards)});k(p);if(!a.support.opacity&&p.cleartype&&!p.cleartypeNoBg)s(d);if(c.css("position")=="static")c.css("position","relative");if(p.width)c.width(p.width);if(p.height&&p.height!="auto")c.height(p.height);if(p.startingSlide!=b){p.startingSlide=parseInt(p.startingSlide,10);if(p.startingSlide>=g.length||p.startSlide<0)p.startingSlide=0;else o=true}else if(p.backwards)p.startingSlide=g.length-1;else p.startingSlide=0;if(p.random){p.randomMap=[];for(var v=0;v<g.length;v++)p.randomMap.push(v);p.randomMap.sort(function(a,b){return Math.random()-.5});if(o){for(var w=0;w<g.length;w++){if(p.startingSlide==p.randomMap[w]){p.randomIndex=w}}}else{p.randomIndex=1;p.startingSlide=p.randomMap[1]}}else if(p.startingSlide>=g.length)p.startingSlide=0;p.currSlide=p.startingSlide||0;var x=p.startingSlide;d.css({position:"absolute",top:0,left:0}).hide().each(function(b){var c;if(p.backwards)c=x?b<=x?g.length+(b-x):x-b:g.length-b;else c=x?b>=x?g.length-(b-x):x-b:g.length-b;a(this).css("z-index",c)});a(g[x]).css("opacity",1).show();h(g[x],p);if(p.fit){if(!p.aspect){if(p.width)d.width(p.width);if(p.height&&p.height!="auto")d.height(p.height)}else{d.each(function(){var b=a(this);var c=p.aspect===true?b.width()/b.height():p.aspect;if(p.width&&b.width()!=p.width){b.width(p.width);b.height(p.width/c)}if(p.height&&b.height()<p.height){b.height(p.height);b.width(p.height*c)}})}}if(p.center&&(!p.fit||p.aspect)){d.each(function(){var b=a(this);b.css({"margin-left":p.width?(p.width-b.width())/2+"px":0,"margin-top":p.height?(p.height-b.height())/2+"px":0})})}if(p.center&&!p.fit&&!p.slideResize){d.each(function(){var b=a(this);b.css({"margin-left":p.width?(p.width-b.width())/2+"px":0,"margin-top":p.height?(p.height-b.height())/2+"px":0})})}var y=p.containerResize&&!c.innerHeight();if(y){var z=0,A=0;for(var B=0;B<g.length;B++){var C=a(g[B]),D=C[0],E=C.outerWidth(),F=C.outerHeight();if(!E)E=D.offsetWidth||D.width||C.attr("width");if(!F)F=D.offsetHeight||D.height||C.attr("height");z=E>z?E:z;A=F>A?F:A}if(z>0&&A>0)c.css({width:z+"px",height:A+"px"})}var G=false;if(p.pause)c.bind("mouseenter.cycle",function(){G=true;this.cyclePause++;f(u,true)}).bind("mouseleave.cycle",function(){G&&this.cyclePause--;f(u,true)});if(l(p)===false)return false;var H=false;i.requeueAttempts=i.requeueAttempts||0;d.each(function(){var b=a(this);this.cycleH=p.fit&&p.height?p.height:b.height()||this.offsetHeight||this.height||b.attr("height")||0;this.cycleW=p.fit&&p.width?p.width:b.width()||this.offsetWidth||this.width||b.attr("width")||0;if(b.is("img")){var c=a.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete;var d=a.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete;var f=a.browser.opera&&(this.cycleW==42&&this.cycleH==19||this.cycleW==37&&this.cycleH==17)&&!this.complete;var g=this.cycleH==0&&this.cycleW==0&&!this.complete;if(c||d||f||g){if(j.s&&p.requeueOnImageNotLoaded&&++i.requeueAttempts<100){e(i.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){a(j.s,j.c).cycle(i)},p.requeueTimeout);H=true;return false}else{e("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}}return true});if(H)return false;p.cssBefore=p.cssBefore||{};p.cssAfter=p.cssAfter||{};p.cssFirst=p.cssFirst||{};p.animIn=p.animIn||{};p.animOut=p.animOut||{};d.not(":eq("+x+")").css(p.cssBefore);a(d[x]).css(p.cssFirst);if(p.timeout){p.timeout=parseInt(p.timeout,10);if(p.speed.constructor==String)p.speed=a.fx.speeds[p.speed]||parseInt(p.speed,10);if(!p.sync)p.speed=p.speed/2;var I=p.fx=="none"?0:p.fx=="shuffle"?500:250;while(p.timeout-p.speed<I)p.timeout+=p.speed}if(p.easing)p.easeIn=p.easeOut=p.easing;if(!p.speedIn)p.speedIn=p.speed;if(!p.speedOut)p.speedOut=p.speed;p.slideCount=g.length;p.currSlide=p.lastSlide=x;if(p.random){if(++p.randomIndex==g.length)p.randomIndex=0;p.nextSlide=p.randomMap[p.randomIndex]}else if(p.backwards)p.nextSlide=p.startingSlide==0?g.length-1:p.startingSlide-1;else p.nextSlide=p.startingSlide>=g.length-1?0:p.startingSlide+1;if(!p.multiFx){var J=a.fn.cycle.transitions[p.fx];if(a.isFunction(J))J(c,d,p);else if(p.fx!="custom"&&!p.multiFx){e("unknown transition: "+p.fx,"; slideshow terminating");return false}}var K=d[x];if(!p.skipInitializationCallbacks){if(p.before.length)p.before[0].apply(K,[K,K,p,true]);if(p.after.length)p.after[0].apply(K,[K,K,p,true])}if(p.next)a(p.next).bind(p.prevNextEvent,function(){return q(p,1)});if(p.prev)a(p.prev).bind(p.prevNextEvent,function(){return q(p,0)});if(p.pager||p.pagerAnchorBuilder)r(g,p);m(p,g);return p}function i(b,c){if(c.next)a(c.next).unbind(c.prevNextEvent);if(c.prev)a(c.prev).unbind(c.prevNextEvent);if(c.pager||c.pagerAnchorBuilder)a.each(c.pagerAnchors||[],function(){this.unbind().remove()});c.pagerAnchors=null;a(b).unbind("mouseenter.cycle mouseleave.cycle");if(c.destroy)c.destroy(c)}function h(b,c){if(!a.support.opacity&&c.cleartype&&b.style.filter){try{b.style.removeAttribute("filter")}catch(d){}}}function g(c,d,g){function k(b,c,d){if(!b&&c===true){var f=a(d).data("cycle.opts");if(!f){e("options not found, can not resume");return false}if(d.cycleTimeout){clearTimeout(d.cycleTimeout);d.cycleTimeout=0}n(f.elements,f,1,!f.backwards)}}if(c.cycleStop==b)c.cycleStop=0;if(d===b||d===null)d={};if(d.constructor==String){switch(d){case"destroy":case"stop":var h=a(c).data("cycle.opts");if(!h)return false;c.cycleStop++;if(c.cycleTimeout)clearTimeout(c.cycleTimeout);c.cycleTimeout=0;h.elements&&a(h.elements).stop();a(c).removeData("cycle.opts");if(d=="destroy")i(c,h);return false;case"toggle":c.cyclePause=c.cyclePause===1?0:1;k(c.cyclePause,g,c);f(c);return false;case"pause":c.cyclePause=1;f(c);return false;case"resume":c.cyclePause=0;k(false,g,c);f(c);return false;case"prev":case"next":var h=a(c).data("cycle.opts");if(!h){e('options not found, "prev/next" ignored');return false}a.fn.cycle[d](h);return false;default:d={fx:d}}return d}else if(d.constructor==Number){var j=d;d=a(c).data("cycle.opts");if(!d){e("options not found, can not advance slide");return false}if(j<0||j>=d.elements.length){e("invalid slide index: "+j);return false}d.nextSlide=j;if(c.cycleTimeout){clearTimeout(c.cycleTimeout);c.cycleTimeout=0}if(typeof g=="string")d.oneTimeFx=g;n(d.elements,d,1,j>=d.currSlide);return false}return d}function f(b,c,d){var e=a(b).data("cycle.opts");var f=!!b.cyclePause;if(f&&e.paused)e.paused(b,e,c,d);else if(!f&&e.resumed)e.resumed(b,e,c,d)}function e(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function d(b){a.fn.cycle.debug&&e(b)}var c="2.9999.3";if(a.support==b){a.support={opacity:!a.browser.msie}}a.expr[":"].paused=function(a){return a.cyclePause};a.fn.cycle=function(b,c){var f={s:this.selector,c:this.context};if(this.length===0&&b!="stop"){if(!a.isReady&&f.s){e("DOM not ready, queuing slideshow");a(function(){a(f.s,f.c).cycle(b,c)});return this}e("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var h=g(this,b,c);if(h===false)return;h.updateActivePagerLink=h.updateActivePagerLink||a.fn.cycle.updateActivePagerLink;if(this.cycleTimeout)clearTimeout(this.cycleTimeout);this.cycleTimeout=this.cyclePause=0;var i=a(this);var k=h.slideExpr?a(h.slideExpr,this):i.children();var l=k.get();var m=j(i,k,l,h,f);if(m===false)return;if(l.length<2){e("terminating; too few slides: "+l.length);return}var p=m.continuous?10:o(l[m.currSlide],l[m.nextSlide],m,!m.backwards);if(p){p+=m.delay||0;if(p<10)p=10;d("first timeout: "+p);this.cycleTimeout=setTimeout(function(){n(l,m,0,!h.backwards)},p)}})};a.fn.cycle.resetState=function(b,c){c=c||b.fx;b.before=[];b.after=[];b.cssBefore=a.extend({},b.original.cssBefore);b.cssAfter=a.extend({},b.original.cssAfter);b.animIn=a.extend({},b.original.animIn);b.animOut=a.extend({},b.original.animOut);b.fxFn=null;a.each(b.original.before,function(){b.before.push(this)});a.each(b.original.after,function(){b.after.push(this)});var d=a.fn.cycle.transitions[c];if(a.isFunction(d))d(b.$cont,a(b.elements),b)};a.fn.cycle.updateActivePagerLink=function(b,c,d){a(b).each(function(){a(this).children().removeClass(d).eq(c).addClass(d)})};a.fn.cycle.next=function(a){q(a,1)};a.fn.cycle.prev=function(a){q(a,0)};a.fn.cycle.createPagerAnchor=function(b,c,e,g,h){var i;if(a.isFunction(h.pagerAnchorBuilder)){i=h.pagerAnchorBuilder(b,c);d("pagerAnchorBuilder("+b+", el) returned: "+i)}else i='<a href="#">'+(b+1)+"</a>";if(!i)return;var j=a(i);if(j.parents("body").length===0){var k=[];if(e.length>1){e.each(function(){var b=j.clone(true);a(this).append(b);k.push(b[0])});j=a(k)}else{j.appendTo(e)}}h.pagerAnchors=h.pagerAnchors||[];h.pagerAnchors.push(j);var l=function(c){c.preventDefault();h.nextSlide=b;var d=h.$cont[0],e=d.cycleTimeout;if(e){clearTimeout(e);d.cycleTimeout=0}var f=h.onPagerEvent||h.pagerClick;if(a.isFunction(f))f(h.nextSlide,g[h.nextSlide]);n(g,h,1,h.currSlide<b)};if(/mouseenter|mouseover/i.test(h.pagerEvent)){j.hover(l,function(){})}else{j.bind(h.pagerEvent,l)}if(!/^click/.test(h.pagerEvent)&&!h.allowPagerClickBubble)j.bind("click.cycle",function(){return false});var m=h.$cont[0];var o=false;if(h.pauseOnPagerHover){j.hover(function(){o=true;m.cyclePause++;f(m,true,true)},function(){o&&m.cyclePause--;f(m,true,true)})}};a.fn.cycle.hopsFromLast=function(a,b){var c,d=a.lastSlide,e=a.currSlide;if(b)c=e>d?e-d:a.slideCount-d;else c=e<d?d-e:d+a.slideCount-e;return c};a.fn.cycle.commonReset=function(b,c,d,e,f,g){a(d.elements).not(b).hide();if(typeof d.cssBefore.opacity=="undefined")d.cssBefore.opacity=1;d.cssBefore.display="block";if(d.slideResize&&e!==false&&c.cycleW>0)d.cssBefore.width=c.cycleW;if(d.slideResize&&f!==false&&c.cycleH>0)d.cssBefore.height=c.cycleH;d.cssAfter=d.cssAfter||{};d.cssAfter.display="none";a(b).css("zIndex",d.slideCount+(g===true?1:0));a(c).css("zIndex",d.slideCount+(g===true?0:1))};a.fn.cycle.custom=function(b,c,d,e,f,g){var h=a(b),i=a(c);var j=d.speedIn,k=d.speedOut,l=d.easeIn,m=d.easeOut;i.css(d.cssBefore);if(g){if(typeof g=="number")j=k=g;else j=k=1;l=m=null}var n=function(){i.animate(d.animIn,j,l,function(){e()})};h.animate(d.animOut,k,m,function(){h.css(d.cssAfter);if(!d.sync)n()});if(d.sync)n()};a.fn.cycle.transitions={fade:function(b,c,d){c.not(":eq("+d.currSlide+")").css("opacity",0);d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.cssBefore.opacity=0});d.animIn={opacity:1};d.animOut={opacity:0};d.cssBefore={top:0,left:0}}};a.fn.cycle.ver=function(){return c};a.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:false,animIn:null,animOut:null,aspect:false,autostop:0,autostopCount:0,backwards:false,before:null,center:null,cleartype:!a.support.opacity,cleartypeNoBg:false,containerResize:1,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:true,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:false,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:b,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);(function(a){a.fn.cycle.transitions.none=function(b,c,d){d.fxFn=function(b,c,d,e){a(c).show();a(b).hide();e()}};a.fn.cycle.transitions.fadeout=function(b,c,d){c.not(":eq("+d.currSlide+")").css({display:"block",opacity:1});d.before.push(function(b,c,d,e,f,g){a(b).css("zIndex",d.slideCount+(!g===true?1:0));a(c).css("zIndex",d.slideCount+(!g===true?0:1))});d.animIn.opacity=1;d.animOut.opacity=0;d.cssBefore.opacity=1;d.cssBefore.display="block";d.cssAfter.zIndex=0};a.fn.cycle.transitions.scrollUp=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssBefore.top=e;d.cssBefore.left=0;d.cssFirst.top=0;d.animIn.top=0;d.animOut.top=-e};a.fn.cycle.transitions.scrollDown=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssFirst.top=0;d.cssBefore.top=-e;d.cssBefore.left=0;d.animIn.top=0;d.animOut.top=e};a.fn.cycle.transitions.scrollLeft=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0;d.cssBefore.left=e;d.cssBefore.top=0;d.animIn.left=0;d.animOut.left=0-e};a.fn.cycle.transitions.scrollRight=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0;d.cssBefore.left=-e;d.cssBefore.top=0;d.animIn.left=0;d.animOut.left=e};a.fn.cycle.transitions.scrollHorz=function(b,c,d){b.css("overflow","hidden").width();d.before.push(function(b,c,d,e){if(d.rev)e=!e;a.fn.cycle.commonReset(b,c,d);d.cssBefore.left=e?c.cycleW-1:1-c.cycleW;d.animOut.left=e?-b.cycleW:b.cycleW});d.cssFirst.left=0;d.cssBefore.top=0;d.animIn.left=0;d.animOut.top=0};a.fn.cycle.transitions.scrollVert=function(b,c,d){b.css("overflow","hidden");d.before.push(function(b,c,d,e){if(d.rev)e=!e;a.fn.cycle.commonReset(b,c,d);d.cssBefore.top=e?1-c.cycleH:c.cycleH-1;d.animOut.top=e?b.cycleH:-b.cycleH});d.cssFirst.top=0;d.cssBefore.left=0;d.animIn.top=0;d.animOut.left=0};a.fn.cycle.transitions.slideX=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide();a.fn.cycle.commonReset(b,c,d,false,true);d.animIn.width=c.cycleW});d.cssBefore.left=0;d.cssBefore.top=0;d.cssBefore.width=0;d.animIn.width="show";d.animOut.width=0};a.fn.cycle.transitions.slideY=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide();a.fn.cycle.commonReset(b,c,d,true,false);d.animIn.height=c.cycleH});d.cssBefore.left=0;d.cssBefore.top=0;d.cssBefore.height=0;d.animIn.height="show";d.animOut.height=0};a.fn.cycle.transitions.shuffle=function(b,c,d){var e,f=b.css("overflow","visible").width();c.css({left:0,top:0});d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,true,true)});if(!d.speedAdjusted){d.speed=d.speed/2;d.speedAdjusted=true}d.random=0;d.shuffle=d.shuffle||{left:-f,top:15};d.els=[];for(e=0;e<c.length;e++)d.els.push(c[e]);for(e=0;e<d.currSlide;e++)d.els.push(d.els.shift());d.fxFn=function(b,c,d,e,f){if(d.rev)f=!f;var g=f?a(b):a(c);a(c).css(d.cssBefore);var h=d.slideCount;g.animate(d.shuffle,d.speedIn,d.easeIn,function(){var c=a.fn.cycle.hopsFromLast(d,f);for(var i=0;i<c;i++)f?d.els.push(d.els.shift()):d.els.unshift(d.els.pop());if(f){for(var j=0,k=d.els.length;j<k;j++)a(d.els[j]).css("z-index",k-j+h)}else{var l=a(b).css("z-index");g.css("z-index",parseInt(l,10)+1+h)}g.animate({left:0,top:0},d.speedOut,d.easeOut,function(){a(f?this:b).hide();if(e)e()})})};a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0})};a.fn.cycle.transitions.turnUp=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false);d.cssBefore.top=c.cycleH;d.animIn.height=c.cycleH;d.animOut.width=c.cycleW});d.cssFirst.top=0;d.cssBefore.left=0;d.cssBefore.height=0;d.animIn.top=0;d.animOut.height=0};a.fn.cycle.transitions.turnDown=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false);d.animIn.height=c.cycleH;d.animOut.top=b.cycleH});d.cssFirst.top=0;d.cssBefore.left=0;d.cssBefore.top=0;d.cssBefore.height=0;d.animOut.height=0};a.fn.cycle.transitions.turnLeft=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true);d.cssBefore.left=c.cycleW;d.animIn.width=c.cycleW});d.cssBefore.top=0;d.cssBefore.width=0;d.animIn.left=0;d.animOut.width=0};a.fn.cycle.transitions.turnRight=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true);d.animIn.width=c.cycleW;d.animOut.left=b.cycleW});a.extend(d.cssBefore,{top:0,left:0,width:0});d.animIn.left=0;d.animOut.width=0};a.fn.cycle.transitions.zoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,false,true);d.cssBefore.top=c.cycleH/2;d.cssBefore.left=c.cycleW/2;a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH});a.extend(d.animOut,{width:0,height:0,top:b.cycleH/2,left:b.cycleW/2})});d.cssFirst.top=0;d.cssFirst.left=0;d.cssBefore.width=0;d.cssBefore.height=0};a.fn.cycle.transitions.fadeZoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,false);d.cssBefore.left=c.cycleW/2;d.cssBefore.top=c.cycleH/2;a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH})});d.cssBefore.width=0;d.cssBefore.height=0;d.animOut.opacity=0};a.fn.cycle.transitions.blindX=function(b,c,d){var e=b.css("overflow","hidden").width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.animIn.width=c.cycleW;d.animOut.left=b.cycleW});d.cssBefore.left=e;d.cssBefore.top=0;d.animIn.left=0;d.animOut.left=e};a.fn.cycle.transitions.blindY=function(b,c,d){var e=b.css("overflow","hidden").height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.animIn.height=c.cycleH;d.animOut.top=b.cycleH});d.cssBefore.top=e;d.cssBefore.left=0;d.animIn.top=0;d.animOut.top=e};a.fn.cycle.transitions.blindZ=function(b,c,d){var e=b.css("overflow","hidden").height();var f=b.width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.animIn.height=c.cycleH;d.animOut.top=b.cycleH});d.cssBefore.top=e;d.cssBefore.left=f;d.animIn.top=0;d.animIn.left=0;d.animOut.top=e;d.animOut.left=f};a.fn.cycle.transitions.growX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true);d.cssBefore.left=this.cycleW/2;d.animIn.left=0;d.animIn.width=this.cycleW;d.animOut.left=0});d.cssBefore.top=0;d.cssBefore.width=0};a.fn.cycle.transitions.growY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false);d.cssBefore.top=this.cycleH/2;d.animIn.top=0;d.animIn.height=this.cycleH;d.animOut.top=0});d.cssBefore.height=0;d.cssBefore.left=0};a.fn.cycle.transitions.curtainX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true,true);d.cssBefore.left=c.cycleW/2;d.animIn.left=0;d.animIn.width=this.cycleW;d.animOut.left=b.cycleW/2;d.animOut.width=0});d.cssBefore.top=0;d.cssBefore.width=0};a.fn.cycle.transitions.curtainY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false,true);d.cssBefore.top=c.cycleH/2;d.animIn.top=0;d.animIn.height=c.cycleH;d.animOut.top=b.cycleH/2;d.animOut.height=0});d.cssBefore.height=0;d.cssBefore.left=0};a.fn.cycle.transitions.cover=function(b,c,d){var e=d.direction||"left";var f=b.css("overflow","hidden").width();var g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);if(e=="right")d.cssBefore.left=-f;else if(e=="up")d.cssBefore.top=g;else if(e=="down")d.cssBefore.top=-g;else d.cssBefore.left=f});d.animIn.left=0;d.animIn.top=0;d.cssBefore.top=0;d.cssBefore.left=0};a.fn.cycle.transitions.uncover=function(b,c,d){var e=d.direction||"left";var f=b.css("overflow","hidden").width();var g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,true,true);if(e=="right")d.animOut.left=f;else if(e=="up")d.animOut.top=-g;else if(e=="down")d.animOut.top=g;else d.animOut.left=-f});d.animIn.left=0;d.animIn.top=0;d.cssBefore.top=0;d.cssBefore.left=0};a.fn.cycle.transitions.toss=function(b,c,d){var e=b.css("overflow","visible").width();var f=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,true,true);if(!d.animOut.left&&!d.animOut.top)a.extend(d.animOut,{left:e*2,top:-f/2,opacity:0});else d.animOut.opacity=0});d.cssBefore.left=0;d.cssBefore.top=0;d.animIn.left=0};a.fn.cycle.transitions.wipe=function(b,c,d){var e=b.css("overflow","hidden").width();var f=b.height();d.cssBefore=d.cssBefore||{};var g;if(d.clip){if(/l2r/.test(d.clip))g="rect(0px 0px "+f+"px 0px)";else if(/r2l/.test(d.clip))g="rect(0px "+e+"px "+f+"px "+e+"px)";else if(/t2b/.test(d.clip))g="rect(0px "+e+"px 0px 0px)";else if(/b2t/.test(d.clip))g="rect("+f+"px "+e+"px "+f+"px 0px)";else if(/zoom/.test(d.clip)){var h=parseInt(f/2,10);var i=parseInt(e/2,10);g="rect("+h+"px "+i+"px "+h+"px "+i+"px)"}}d.cssBefore.clip=d.cssBefore.clip||g||"rect(0px 0px 0px 0px)";var j=d.cssBefore.clip.match(/(\d+)/g);var k=parseInt(j[0],10),l=parseInt(j[1],10),m=parseInt(j[2],10),n=parseInt(j[3],10);d.before.push(function(b,c,d){if(b==c)return;var g=a(b),h=a(c);a.fn.cycle.commonReset(b,c,d,true,true,false);d.cssAfter.display="block";var i=1,j=parseInt(d.speedIn/13,10)-1;(function o(){var a=k?k-parseInt(i*(k/j),10):0;var b=n?n-parseInt(i*(n/j),10):0;var c=m<f?m+parseInt(i*((f-m)/j||1),10):f;var d=l<e?l+parseInt(i*((e-l)/j||1),10):e;h.css({clip:"rect("+a+"px "+d+"px "+c+"px "+b+"px)"});i++<=j?setTimeout(o,13):g.css("display","none")})()});a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0});d.animIn={left:0};d.animOut={left:0}}})(jQuery);

/*!
 * jQuery Tools v1.2.6 - The missing UI library for the Web
 * 
 * tooltip/tooltip.js
 * tooltip/tooltip.slide.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();g=="center"&&(f-=i/2),g=="left"&&(f-=i);return{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw"Nonexistent effect \""+e.effect+"\"";r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.bind(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).bind(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);h.data("__set")||(h.unbind(p[0]).bind(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.unbind(p[1]).bind(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0));return f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(!c.isDefaultPrevented()){n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)});return f}},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}})}a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);
(function(a){var b=a.tools.tooltip;a.extend(b.conf,{direction:"up",bounce:!1,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!a.browser.msie});var c={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};b.addEffect("slide",function(a){var b=this.getConf(),d=this.getTip(),e=b.slideFade?{opacity:b.opacity}:{},f=c[b.direction]||c.up;e[f[1]]=f[0]+"="+b.slideOffset,b.slideFade&&d.css({opacity:0}),d.show().animate(e,b.slideInSpeed,a)},function(b){var d=this.getConf(),e=d.slideOffset,f=d.slideFade?{opacity:0}:{},g=c[d.direction]||c.up,h=""+g[0];d.bounce&&(h=h=="+"?"-":"+"),f[g[1]]=h+"="+e,this.getTip().animate(f,d.slideOutSpeed,function(){a(this).hide(),b.call()})})})(jQuery);


//twitter widget
(function(a){a.fn.tweet=function(b){function l(b){var d={};d.item=b;d.source=b.source;d.screen_name=b.from_user||b.user.screen_name;d.avatar_size=c.avatar_size;d.avatar_url=j(b.profile_image_url||b.user.profile_image_url);d.retweet=typeof b.retweeted_status!="undefined";d.tweet_time=g(b.created_at);d.join_text=c.join_text=="auto"?i(b.text):c.join_text;d.tweet_id=b.id_str;d.twitter_base="http://"+c.twitter_url+"/";d.user_url=d.twitter_base+d.screen_name;d.tweet_url=d.user_url+"/status/"+d.tweet_id;d.reply_url=d.twitter_base+"intent/tweet?in_reply_to="+d.tweet_id;d.retweet_url=d.twitter_base+"intent/retweet?tweet_id="+d.tweet_id;d.favorite_url=d.twitter_base+"intent/favorite?tweet_id="+d.tweet_id;d.retweeted_screen_name=d.retweet&&b.retweeted_status.user.screen_name;d.tweet_relative_time=h(d.tweet_time);d.tweet_raw_text=d.retweet?"RT @"+d.retweeted_screen_name+" "+b.retweeted_status.text:b.text;d.tweet_text=a([d.tweet_raw_text]).linkUrl().linkUser().linkHash()[0];d.tweet_text_fancy=a([d.tweet_text]).makeHeart().capAwesome().capEpic()[0];d.user=e('<a class="tweet_user" href="{user_url}">{screen_name}</a>',d);d.join=c.join_text?e(' <span class="tweet_join">{join_text}</span> ',d):" ";d.avatar=d.avatar_size?e('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',d):"";d.time=e('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',d);d.text=e('<span class="tweet_text">{tweet_text_fancy}</span>',d);d.reply_action=e('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',d);d.retweet_action=e('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',d);d.favorite_action=e('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',d);return d}function k(){var a="https:"==document.location.protocol?"https:":"http:";var b=c.fetch===null?c.count:c.fetch;if(c.list){return a+"//"+c.twitter_api_url+"/1/"+c.username[0]+"/lists/"+c.list+"/statuses.json?page="+c.page+"&per_page="+b+"&callback=?"}else if(c.favorites){return a+"//"+c.twitter_api_url+"/favorites/"+c.username[0]+".json?page="+c.page+"&count="+b+"&callback=?"}else if(c.query===null&&c.username.length==1){return a+"//"+c.twitter_api_url+"/1/statuses/user_timeline.json?screen_name="+c.username[0]+"&count="+b+(c.retweets?"&include_rts=1":"")+"&page="+c.page+"&callback=?"}else{var d=c.query||"from:"+c.username.join(" OR from:");return a+"//"+c.twitter_search_url+"/search.json?&q="+encodeURIComponent(d)+"&rpp="+b+"&page="+c.page+"&callback=?"}}function j(a){return"https:"==document.location.protocol?a.replace(/^http:/,"https:"):a}function i(a){if(a.match(/^(@([A-Za-z0-9-_]+)) .*/i)){return c.auto_join_text_reply}else if(a.match(d)){return c.auto_join_text_url}else if(a.match(/^((\w+ed)|just) .*/im)){return c.auto_join_text_ed}else if(a.match(/^(\w*ing) .*/i)){return c.auto_join_text_ing}else{return c.auto_join_text_default}}function h(a){var b=arguments.length>1?arguments[1]:new Date;var c=parseInt((b.getTime()-a)/1e3,10);var d="";if(c<60){d=c+" seconds ago"}else if(c<120){d="a minute ago"}else if(c<45*60){d=parseInt(c/60,10).toString()+" minutes ago"}else if(c<2*60*60){d="an hour ago"}else if(c<24*60*60){d=""+parseInt(c/3600,10).toString()+" hours ago"}else if(c<48*60*60){d="a day ago"}else{d=parseInt(c/86400,10).toString()+" days ago"}return"about "+d}function g(a){return Date.parse(a.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"))}function f(b,c){return function(){var d=[];this.each(function(){d.push(this.replace(b,c))});return a(d)}}function e(a,b){if(typeof a==="string"){var c=a;for(var d in b){var e=b[d];c=c.replace(new RegExp("{"+d+"}","g"),e===null?"":e)}return c}else return a(b)}var c=a.extend({username:null,list:null,favorites:false,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:true,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"search.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(a,b){return b["tweet_time"]-a["tweet_time"]},filter:function(a){return true}},b);var d=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;a.extend({tweet:{t:e}});a.fn.extend({linkUrl:f(d,function(a){var b=/^[a-z]+:/i.test(a)?a:"http://"+a;return'<a href="'+b+'">'+a+"</a>"}),linkUser:f(/@(\w+)/gi,'@<a href="http://'+c.twitter_url+'/$1">$1</a>'),linkHash:f(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+c.twitter_search_url+"/search?q=&tag=$1&lang=all"+(c.username&&c.username.length==1?"&from="+c.username.join("%2BOR%2B"):"")+'">#$1</a>'),capAwesome:f(/\b(awesome)\b/gi,'<span class="awesome">$1</span>'),capEpic:f(/\b(epic)\b/gi,'<span class="epic">$1</span>'),makeHeart:f(/(<)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")});return this.each(function(b,d){var f=a('<ul class="tweet_list">').appendTo(d);var g='<p class="tweet_intro">'+c.intro_text+"</p>";var h='<p class="tweet_outro">'+c.outro_text+"</p>";var i=a('<p class="loading">'+c.loading_text+"</p>");if(c.username&&typeof c.username=="string"){c.username=[c.username]}if(c.loading_text)a(d).append(i);a(d).bind("tweet:load",function(){a.getJSON(k(),function(b){if(c.loading_text)i.remove();if(c.intro_text)f.before(g);f.empty();var j=a.map(b.results||b,l);j=a.grep(j,c.filter).sort(c.comparator).slice(0,c.count);f.append(a.map(j,function(a){return"<li>"+e(c.template,a)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");if(c.outro_text)f.after(h);a(d).trigger("loaded").trigger(j.length===0?"empty":"full");if(c.refresh_interval){window.setTimeout(function(){a(d).trigger("tweet:load")},1e3*c.refresh_interval)}})}).trigger("tweet:load")})}})(jQuery);

/*
Sequence.js (www.sequencejs.com)
Version: 0.5.2 Beta
Author: Ian Lunn @IanLunn
Author URL: http://www.ianlunn.co.uk/
Github: https://github.com/IanLunn/Sequence

This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html

Sequence.js and its dependencies are (c) Ian Lunn Design 2012 unless otherwise stated.
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/
(function($){	
	function Sequence(element, options, defaults, get){	
		var self = this;
		self.container = $(element),
		self.sequence = self.container.children("ul");
		
		try{ //is Modernizr.prefixed installed?
			Modernizr.prefixed;
			if(Modernizr.prefixed == undefined){
				throw "undefined";
			}
		}
		catch(err){ //if not...get the custom build necessary for Sequence
			get.modernizr();
		}
		
		var prefixes = {
		    'WebkitTransition' : '-webkit-',
		    'MozTransition'    : '-moz-',
		    'OTransition'      : '-o-',
		    'msTransition'     : '-ms-',
		    'transition'       : ''
		},
		transitions = {
		    'WebkitTransition' : 'webkitTransitionEnd webkitAnimationEnd',
		    'MozTransition'    : 'transitionend animationend',
		    'OTransition'      : 'oTransitionEnd oAnimationEnd',
		    'msTransition'     : 'MSTransitionEnd MSAnimationEnd',
		    'transition'       : 'transitionend animationend'
		};
		
		self.prefix = prefixes[Modernizr.prefixed('transition')],
		self.transitionEnd = transitions[Modernizr.prefixed('transition')],
		self.transitionProperties = {},
		self.numberOfFrames = self.sequence.children("li").length,
		self.transitionsSupported = (self.prefix != undefined) ? true : false, //determine if transitions are supported
		self.hasTouch = ("ontouchstart" in window) ? true : false, //determine if this is a touch enabled device
		self.sequenceTimer,
		self.paused = false,
		self.hoverEvent,
		self.defaultPreloader,
		self.init = {
			preloader: function(optionPreloader){
				self.prependTo = (self.settings.prependPreloader == true) ? self.container : self.settings.prependPreloader;
				
				switch(optionPreloader){
					case true:
					case undefined:
						get.defaultPreloader(self.prependTo, self.transitionsSupported, self.prefix);
						if(!self.transitionsSupported || self.prefix == "-o-"){
							self.preloaderFallback();
						}
						return $("#sequence-preloader");
					break;
					
					case false:
					break;
					
					default:
						this.CSSSelectorToHTML(optionPreloader);
						return $(optionPreloader);
					break;
				}
			},
			
			uiElements: function(prependTo, devOption, defaultOption, elementSrc, elementAlt){
								
				switch(devOption){
					case true:
					case undefined:
						
						if(devOption && !prependTo){
							prependTo = true;
						}
						var prependElement = (prependTo == true) ? self.container : prependTo;
						$(prependElement).prepend('<img '+this.CSSSelectorToHTML(defaultOption)+ 'src="'+elementSrc+'" alt="'+elementAlt+'" />');
						return $(defaultOption);
					break;
					
					case false:
						return undefined;
					break;
					
					default:
						var prependElement = (prependTo == true) ? self.container : prependTo;
						$(prependElement).prepend('<img '+this.CSSSelectorToHTML(devOption)+ 'src="'+elementSrc+'" alt="'+elementAlt+'" />');
						return $(devOption);
					break;
				}
			},
			
			CSSSelectorToHTML: function(selector){
				switch(selector.charAt(0)){
					case ".":
						return 'class="'+selector.split(".")[1]+'"';
						break;
					
					case "#":
						return 'id="'+selector.split("#")[1]+'"';
						break;
					
					default:
						return selector;
						break;
				}
			}
		},		
		
		//INIT
		self.settings = $.extend({}, defaults, options),
		self.settings.preloader = self.init.preloader(self.settings.preloader);

		if(self.settings.animateStartingFrameIn){
			self.modifyElements(self.sequence.children("li").children(), "0s");
			self.sequence.children("li").children().removeClass("animate-in");
		}
				
		if(self.settings.preloader){
			$(window).bind("load", function(){
				self.settings.afterPreload();
				if(self.settings.hidePreloaderUsingCSS && self.transitionsSupported && self.prefix != "-o-"){
					self.prependPreloadingCompleteTo = (self.settings.prependPreloadingComplete == true) ? self.settings.preloader : $(self.settings.prependPreloadingComplete);
					self.prependPreloadingCompleteTo.addClass("preloading-complete");
					setTimeout(init, self.settings.hidePreloaderDelay);
				}else{
					self.settings.preloader.fadeOut(self.settings.hidePreloaderDelay, function(){
						clearInterval(self.defaultPreloader);
						init();
					});
				}
				$(window).unbind("load");
			});
		}else{
			init();
		}
		
		function init(){
			$(self.settings.preloader).remove();
						
			self.settings.nextButton = self.init.uiElements(self.settings.prependNextButton, self.settings.nextButton, ".next", self.settings.nextButtonSrc, self.settings.nextButtonAlt); 
			
			self.settings.prevButton = self.init.uiElements(self.settings.prependPrevButton, self.settings.prevButton, ".prev", self.settings.prevButtonSrc, self.settings.prevButtonAlt);
			
			if((self.settings.nextButton != undefined && self.settings.nextButton != false) && self.settings.showNextButtonOnInit){self.settings.nextButton.show()};
			if((self.settings.prevButton != undefined && self.settings.prevButton != false) && self.settings.showPrevButtonOnInit){self.settings.prevButton.show()};
			
			if(self.settings.pauseIcon != false){
				self.settings.pauseIcon = self.init.uiElements(self.settings.prependPauseIcon, self.settings.pauseIcon, ".pause-icon", self.settings.pauseIconSrc);
				if(self.settings.pauseIcon != undefined){
					self.settings.pauseIcon.hide();
				}
			}
						
			if(self.hasTouch){
				self.settings.calculatedSwipeThreshold = self.container.width() * (self.settings.swipeThreshold / 100);
			}
					
			self.currentFrame = self.sequence.children("li:nth-child("+self.settings.startingFrameID+")").addClass("current");	
			self.currentFrameChildren = self.currentFrame.children();
			self.currentFrameID = self.settings.startingFrameID;
			self.nextFrameID = self.currentFrameID;
			self.sequence.children("li").children().removeClass("animate-in");
			self.direction;
			
			self.sequence.css({"width": "100%", "height": "100%"}); //set the sequence list to 100% width/height just incase it hasn't been specified in the CSS
			
			if(self.transitionsSupported){ //initiate the full featured Sequence if transitions are supported...
				var whenFirstAnimateInEnds = function(){
					animationComplete = function(){
						self.settings.afterNextFrameAnimatesIn();
						self.active = false;
						if(self.settings.autoPlay){
							var autoPlaySequence = function(){self.autoPlaySequence()};
							clearTimeout(self.sequenceTimer);
							self.sequenceTimer = setTimeout(autoPlaySequence, self.settings.autoPlayDelay, self);
						}
					}
					self.waitForAnimationsToComplete(self.currentFrameChildren, animationComplete);
				}
							
				if(!self.settings.animateStartingFrameIn){ //start first frame in animated in position
					self.modifyElements(self.currentFrameChildren, "0s");
					self.currentFrameChildren.addClass("animate-in");
					
					setTimeout(function(){	
					self.modifyElements(self.currentFrameChildren, "");
					}, 100);
					
					if(self.settings.autoPlay){
						var autoPlaySequence = function(){self.autoPlaySequence()};
						clearTimeout(self.sequenceTimer);
						self.sequenceTimer = setTimeout(autoPlaySequence, self.settings.autoPlayDelay, self);
					}
				}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.settings.autoPlayDirection -1 && self.settings.animateStartingFrameIn){
					self.active = true;		
					
					self.modifyElements(self.currentFrameChildren, "0s");
					self.currentFrameChildren.addClass("animate-out");				
					
					self.settings.beforeNextFrameAnimatesIn();
					
					setTimeout(function(){	
						self.modifyElements(self.currentFrameChildren, "");
						self.currentFrameChildren.removeClass("animate-out");
						self.currentFrameChildren.addClass("animate-in");
					}, 100);
					
					whenFirstAnimateInEnds();
				}else{
					self.active = true;	
					self.settings.beforeCurrentFrameAnimatesIn();
					setTimeout(function(){			
						self.modifyElements(self.currentFrameChildren, "");
						self.currentFrameChildren.addClass("animate-in");
					}, 100);
					
					whenFirstAnimateInEnds();
				}
			}else{ //initiate a basic slider for browsers that don't support CSS3 transitions
				self.sequence.children("li").children().css("opacity", "0").addClass("animate-in").animate({"opacity": "1"}, 500);
				self.currentFrame.css("z-index", self.numberOfFrames);
				self.sequence.children(":not(li:nth-child("+self.settings.startingFrameID+"))").css({"display": "none", "opacity": 0});
				if(self.settings.autoPlay){
					var autoPlaySequence = function(){self.autoPlaySequence()};
					clearTimeout(self.sequenceTimer);
					self.sequenceTimer = setTimeout(autoPlaySequence, self.settings.autoPlayDelay, self);
				}
			}
			//END INIT			
			//EVENTS
			if(self.settings.nextButton != undefined){
				self.settings.nextButton.click(function(){
					self.next();
				});
			}
									
			if(self.settings.prevButton != undefined){
				self.settings.prevButton.click(function(){
					self.prev();
				});
			}
			
			if(self.settings.keysNavigate == true){
				$(document).keydown(function(e){
					if(e.keyCode == 39){
						self.next();
					}
					if(e.keyCode == 37){
						self.prev();
					}
				});
			}
						
			if(self.settings.pauseOnHover && !self.settings.pauseOnElementsOutsideContainer && self.settings.autoPlay){
				function hoverDetect(e){
					self.containerLeft = self.container.position().left;
					self.containerRight = (self.container.position().left + self.container.width());
					self.containerTop = self.container.position().top;
					self.containerBottom = (self.container.position().top + self.container.height());
					pageX = e.pageX;
					pageY = e.pageY;
					if(pageX >= self.containerLeft && pageX <= self.containerRight && pageY >= self.containerTop && pageY <= self.containerBottom){
						self.settings.autoPlay = false;
						clearTimeout(self.sequenceTimer);
						$(self.settings.pauseIcon).show();
						self.sequence.unbind("mousemove");
					};
				}
				
				self.hoverEvent = self.sequence.mousemove(function(e){
					hoverDetect(e);						
				});
				
				self.sequence.mouseleave(function(e){
						self.settings.autoPlay = true;
						var autoPlaySequence = function(){self.autoPlaySequence()};
						clearTimeout(self.sequenceTimer);
						self.sequenceTimer = setTimeout(autoPlaySequence, self.settings.autoPlayDelay, self);
						$(self.settings.pauseIcon).hide();
						
						if(self.sequence.data("events").mousemove == undefined){
							self.sequence.mousemove(function(e){
								hoverDetect(e);						
							});
						}
				});
			}else if(self.settings.pauseOnHover && self.settings.autoPlay){
				self.hoverEvent = self.sequence.hover(function(e){
					self.settings.autoPlay = false;
					clearTimeout(self.sequenceTimer);
					$(self.settings.pauseIcon).show();
				}, function(){
					self.settings.autoPlay = true;
					var autoPlaySequence = function(){self.autoPlaySequence()};
					clearTimeout(self.sequenceTimer);
					self.sequenceTimer = setTimeout(autoPlaySequence, self.settings.autoPlayDelay, self);
					$(self.settings.pauseIcon).hide();
				});
			}
			
			
			if(self.settings.touchEnabled && self.hasTouch){
			        var touches = {
			            "touchstart": -1,
			            "touchmove": -1
			        };
			        self.sequence.on("touchstart touchmove touchend", function(e){
			            switch(e.originalEvent.type){
			            case "touchstart":
			            case "touchmove":
			                touches[e.originalEvent.type] = e.originalEvent.touches[0].pageX;
			                break;
			            case 'touchend':			            	
			                if(touches["touchmove"] > -1){
				                if(touches["touchstart"] < touches["touchmove"]){
				                    if((touches["touchmove"] - touches["touchstart"]) > self.settings.calculatedSwipeThreshold){
				                    	self.next();
				                    }
				                }else{
				                    if((touches["touchstart"] - touches["touchmove"]) > self.settings.calculatedSwipeThreshold){
				                    	self.prev();
				                    }
				                }
			                }
			                touches = {
			                "touchstart": -1,
			                "touchmove": -1
			                };
			            default:
			                break;
			            }
			        });
			        }
			$(window).resize(function(){ //if the window is resized...
				self.settings.calculatedSwipeThreshold = self.container.width() * (self.settings.swipeThreshold / 100); //recalculate the swipe threshold
			});
			//END EVENTS
		}	
	} //END CONSTRUCTOR
	
	Sequence.prototype = {
		preloaderFallback: function(){ //if transitions aren't supported, call this fallback to show the default preloading animations
			i = 0;
			function preload(){
				i = (i == 1) ? 0 : 1;
				$("#sequence-preloader img:nth-child(1)").animate({"opacity": i}, 100);
				$("#sequence-preloader img:nth-child(2)").animate({"opacity": i}, 350);
				$("#sequence-preloader img:nth-child(3)").animate({"opacity": i}, 600);
			}
			preload();
			self.defaultPreloader = setInterval(function(){
				preload();
			}, 600);
		},
		
		autoPlaySequence: function(direction){
			var self = this;
			if(self.settings.autoPlayDirection == 1){
				self.next();
			}else{
				self.prev();
			}
		},
		
		modifyElements: function($elementToReset, cssValue){
			var self = this;
			$elementToReset.css(
				self.prefixCSS(self.prefix, {
					"transition-duration": cssValue,
					"transition-delay": cssValue
				})
			)
		},
		
		//adds the browser vendors prefix onto multiple CSS properties
		prefixCSS: function(prefix, properties){
			css = {};
			for(property in properties){
				css[prefix + property] = properties[property];
			}
			return css;
		},
		
		//Opera workaround: currently Opera has a bug that prevents retrieving a prefixed CSS property from the DOM, meaning we have to search through the CSS file instead. It's not ideal in terms of performance but hopefully it'll be fixed in the future
		getStyleBySelector: function(selector){
			css = {};
			var sheetList = document.styleSheets, ruleList, i, j;
			for(i = sheetList.length - 1; i >= 0; i--){
				error = false;
				try{
					ruleList = sheetList[i].cssRules;
				}
				catch(e){
					error = true;
				}
				if(!error){
					for(j = 0; j < ruleList.length; j++){
						if(ruleList[j].type == CSSRule.STYLE_RULE && ruleList[j].selectorText == selector){
							css["-o-transition-duration"] = ruleList[j].style.OTransitionDuration;
							css["-o-transition-delay"] = ruleList[j].style.OTransitionDelay;
							return css;
						}
					}
				}
			}
			return null;
		},
		
		startAutoPlay: function(wait, newAutoPlayDelay){
			var self = this;
			wait = (wait == undefined) ? 0 : wait;
			self.settings.autoPlayDelay = (newAutoPlayDelay == undefined) ? self.settings.autoPlayDelay : newAutoPlayDelay;
			self.settings.autoPlay = true;
			var autoPlaySequence = function(){self.autoPlaySequence()};
			clearTimeout(self.sequenceTimer);
			self.sequenceTimer = setTimeout(autoPlaySequence, self.settings.autoPlayDelay, self);
			if(self.settings.pauseOnHover){
				self.hoverEvent = self.sequence.hover(function(){
					self.settings.autoPlay = false;
					clearTimeout(self.sequenceTimer);
					$(self.settings.pauseIcon).show();
				}, function(){
					self.settings.autoPlay = true;
					var autoPlaySequence = function(){self.autoPlaySequence()};
					clearTimeout(self.sequenceTimer);
					self.sequenceTimer = setTimeout(autoPlaySequence, self.settings.autoPlayDelay, self);
					$(self.settings.pauseIcon).hide();
				});
			}
		},
		
		stopAutoPlay: function(){
			var self = this;
			self.settings.autoPlay = false;
			clearTimeout(self.sequenceTimer);
			if(self.hoverEvent != undefined){
				self.hoverEvent.unbind();
			}
		},
		
		next: function(){
			var self = this;
			if(!self.active){
				if(self.settings.cycle || (!self.settings.cycle && self.currentFrame.index() + 1 != self.numberOfFrames)){
					if(self.paused){
						self.paused = false;
						self.startAutoPlay();
					}
					
					self.nextFrameID = (self.currentFrame.index() + 1 != self.numberOfFrames) ? self.currentFrameID + 1 : 1;
					self.goTo(self.nextFrameID, 1); //go to the next frame
				}else if(self.settings.autoPlayDirection == 1){
					self.paused = true;
					self.stopAutoPlay();
				}
			}
		},
		
		prev: function(){
			var self = this;
			if(!self.active){
				if(self.settings.cycle || (!self.settings.cycle && self.currentFrame.index() + 1 != 1)){
					if(self.paused){
						self.paused = false;
						self.startAutoPlay();
					}
					self.nextFrameID = (self.currentFrame.index() + 1 == 1) ? self.numberOfFrames : self.currentFrameID - 1;
					self.goTo(self.nextFrameID, -1); //go to the prev frame
				}else if(self.settings.autoPlayDirection == -1){
					self.paused = true;
					self.stopAutoPlay();
				}
			}
		},
		
		goTo: function(id, direction){ //where the magic happens
			var self = this;
			if(id == self.numberOfFrames){
				self.settings.beforeLastFrameAnimatesIn();
			}else if(id == 1){
				self.settings.beforeFirstFrameAnimatesIn();
			}
			if(id == self.currentFrame.index() + 1){
				return false;
			}else if(!self.active){ //if there are no animations running...
				self.active = true; //set the sequence as active
				self.currentFrame = self.sequence.children(".current"); //find which frame is active
				self.nextFrame = self.sequence.children("li:nth-child("+id+")"); //grab the next frame
				
				if(direction == undefined){ //if no direction is specified...
					self.direction = (id > self.currentFrameID) ? 1 : -1; //work out which way to go based on what frame is currently active
				}else{
					self.direction = direction;
				}
				
				self.frameChildren = self.currentFrame.children(); //save the child elements
				self.nextFrameChildren = self.nextFrame.children(); //save the child elements
				
				if(self.transitionsSupported){ //if the browser supports CSS3 transitions...
					self.settings.beforeCurrentFrameAnimatesOut();		
					self.animateOut(self.direction);
					var animateIn = function(){
						self.animateIn(self.direction);
						self.currentFrameID = id;
					}
						
					switch(self.settings.delayDuringOutInTransitions){
						case true:
							self.waitForAnimationsToComplete(self.frameChildren, animateIn);
							break;
						
						case false:
							animateIn();
							break;
						
						default:
							setTimeout(animateIn, self.settings.delayDuringOutInTransitions);
							break;
					}
				}else{ //if the browser doesn't support CSS3 transitions...
					self.sequence.children("li").css({"position": "relative"}); //this allows for fadein/out in IE
					self.sequence.children(".slider-action").css({"visibility": "visible"}); //this allows for fadein/out in IE
					self.currentFrame.animate({"opacity": 0}, self.settings.fallbackTheme.speed, function(){ //hide the current frame
						self.currentFrame.css({"display": "none", "z-index": "1"});
						self.currentFrame.removeClass("current");
						self.settings.beforeNextFrameAnimatesIn();
						self.nextFrame.addClass("current").css({"display": "block", "z-index": self.numberOfFrames}).animate({"opacity": 1}, 500); //make the next frame the current one and show it
						self.currentFrame = self.nextFrame;
						self.currentFrameID = self.currentFrame.index() + 1;
						self.active = false;
						if(self.settings.autoPlay){
							var autoPlaySequence = function(){self.autoPlaySequence()};
							clearTimeout(self.sequenceTimer);
							self.sequenceTimer = setTimeout(autoPlaySequence, self.settings.autoPlayDelay, self);
						}
					});
				}			
			}
		},
		
		animateOut: function(direction){
			var self = this;
			self.settings.beforeCurrentFrameAnimatesIn();
			if(!self.settings.reverseAnimationsWhenNavigatingBackwards || direction == 1){ //if user hit next button...
				//reset the position of the next frames elements ready for animating in again
				self.modifyElements(self.nextFrameChildren, "0s");
				self.nextFrameChildren.removeClass("animate-out");
				
				//make the current frames elements animate out
				self.modifyElements(self.frameChildren, "");
				if(!self.settings.disableAnimateOut){
					self.frameChildren.addClass("animate-out").removeClass("animate-in");
				}
			}
			
			if(self.settings.reverseAnimationsWhenNavigatingBackwards && direction == -1){ //if the user hit prev button
				self.modifyElements(self.nextFrameChildren, "0s");	
				if(!self.settings.disableAnimateOut){				
					self.nextFrameChildren.addClass("animate-out");		
				}else{
					self.active = false;
				}
				self.modifyElements(self.frameChildren, "");
					
				self.frameChildren.each(function(){
					if(self.prefix == "-o-"){
						selector = "." + $(this).attr("class").replace(" ", ".");
						previousFrameTransitionProperties = self.getStyleBySelector(selector);
						self.transitionProperties["transition-duration"] = previousFrameTransitionProperties["-o-transition-duration"];
						self.transitionProperties["transition-delay"] = previousFrameTransitionProperties["-o-transition-delay"];
						self.transitionProperties["transition-delay"] = (self.transitionProperties["transition-delay"] == "") ? "0s" : self.transitionProperties["transition-delay"];
					}else{
						self.transitionProperties["transition-duration"] = $(this).css(self.prefix + "transition-duration");
						self.transitionProperties["transition-delay"] = $(this).css(self.prefix + "transition-delay");
					}
					

					$(this).css(
						self.prefixCSS(self.prefix, self.transitionProperties)
					).removeClass("animate-in");
				})
			}
		},
		
		waitForAnimationsToComplete: function(elements, onceComplete){
			var self = this;
			var elementsAnimated = {};
			elements.each(function(){
				elementsAnimated[$(this).attr("class")] = false;
			});
									
			self.currentFrame.bind(self.transitionEnd, function(e){ //wait for elements to finish animating...				
				elementsAnimated[e.target.className] = true;
				total = 0;
				for(element in elementsAnimated){
					if(elementsAnimated[element] == true){
						total++;
					}
				}
								
				if(total == elements.length){
					onceComplete();
				}
			});	
		},
		
		animateIn: function(direction){
			var self = this;
			self.currentFrame.removeClass("current");	//remove the active class
			self.currentFrame.unbind(self.transitionEnd); //remove the animation end event
			self.nextFrame.addClass("current"); //activate the next frame
			self.currentFrame = self.nextFrame; //the next frame is now the current one
			if(direction == 1){
				self.currentFrameID = (self.currentFrameID != self.numberOfFrames) ? self.currentFrameID + 1 : 1;
			}else{
				self.currentFrameID = (self.currentFrameID != 1) ? self.currentFrameID - 1 : self.numberOfFrames;
			}
																														
			self.nextFrameChildren = self.nextFrame.children(); //save the child elements
			self.frameChildren = self.currentFrame.children(); //save the child elements (the ones we'll animate) in an array
									
			self.settings.beforeNextFrameAnimatesIn();
							
			if(!self.settings.reverseAnimationsWhenNavigatingBackwards || direction == 1){ //if user hit next button...
				//reset the position of the next frames elements ready for animating in again
				self.modifyElements(self.nextFrameChildren, "0s");
				self.nextFrameChildren.removeClass("animate-out");
				
				setTimeout(function(){
					self.frameChildren.removeClass("animate-out");
					self.modifyElements(self.frameChildren, "");
					self.frameChildren.addClass("animate-in");
					whenAnimationEnds();
				}, 50);
			}
			
			if(self.settings.reverseAnimationsWhenNavigatingBackwards && direction == -1){ //if the user hit prev button
				setTimeout(function(){
					self.modifyElements(self.frameChildren, "");
					self.frameChildren.addClass("animate-in").removeClass("animate-out");
					whenAnimationEnds();					
				}, 50);				
			}
			
			var whenAnimationEnds = function(){
				unbind = function(){
					self.settings.afterNextFrameAnimatesIn();
					
					if(self.currentFrameID == self.numberOfFrames){
						self.settings.afterLastFrameAnimatesIn();
					}else if(self.currentFrameID == 1){
						self.settings.afterFirstFrameAnimatesIn();
					}
					self.currentFrame.unbind(self.transitionEnd); //unbind waiting for the frame to finish as it's no longer needed
					self.active = false; //set the sequence as inactive to allow the next frames to be activated
					if(self.settings.autoPlay){
						var autoPlaySequence = function(){self.autoPlaySequence()};
						clearTimeout(self.sequenceTimer);
						self.sequenceTimer = setTimeout(autoPlaySequence, self.settings.autoPlayDelay, self);
					}
				}
				
				self.waitForAnimationsToComplete(self.nextFrameChildren, unbind);
			}
			
		}
	}; //END PROTOTYPE

	$.fn.sequence = function(options){
		return this.each(function(){
			var sequence = new Sequence($(this), options, defaults, get);
			$(this).data("sequence", sequence);
		});
	};
	
	//some external functions
	var get = {
		/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
		 * Build: http://www.modernizr.com/download/#-prefixed-testprop-testallprops-domprefixes*/
		 modernizr: function(){
		;window.Modernizr = function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b){for(var d in a)if(i[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function C(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+m.join(d+" ")+d).split(" ");return y(b,"string")||y(b,"undefined")?A(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),B(e,b,c))}var d="2.5.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=self;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(self instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e});for(var D in o)v(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return w(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return A([a])},e.testAllProps=C,e.prefixed=function(a,b,c){return b?C(a,b,c):C(a,"pfx")},e}(self,self.document)
		},
		
		defaultPreloader: function(prependTo, transitions, prefix){
			opacity = (transitions) ? 0 : 1;
			$("head").append("<style>#sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 9;}@"+prefix+"keyframes preload{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 0;}}#sequence-preloader img{background: #fff;border-radius: 6px;display: inline-block;height: 10px;opacity: "+opacity+";position: relative;top: -50%;width: 10px;"+prefix+"animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{height: 12px;margin: 0 auto;top: 50%;position: relative;width: 48px;}#sequence-preloader img:nth-child(2){"+prefix+"animation-delay: .15s; animation-delay: .15s;}#sequence-preloader img:nth-child(3){"+prefix+"animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;"+prefix+"transition-duration: 1s; transition-duration: 1s;}</style>");
			$(prependTo).prepend('<div id="sequence-preloader"><div class="preloading"><img src="images/sliders/sequence-preloader.png" alt="Sequence is loading, please wait..." />    <img src="images/sliders/sequence-preloader.png" alt="Sequence is loading, please wait..." />    <img src="images/sliders/sequence-preloader.png" alt="Sequence is loading, please wait..." /></div></div>');
		}
	},
	
	defaults = {
		nextButton: false, //if dev settings are true, the nextButton will be ".next"
		prependNextButton: false,
		nextButtonSrc: "images/bt-next.png",
		nextButtonAlt: "&#gt;",
		showNextButtonOnInit: true,
		prevButton: false, //if dev settings are true, the prevButton will be ".prev"
		prependPrevButton: false,
		prevButtonSrc: "images/bt-prev.png",
		prevButtonAlt: "&#lt;",
		showPrevButtonOnInit: true,
		preloader: true,
		prependPreloader: true,
		prependPreloadingComplete: true,
		hidePreloaderUsingCSS: true,
		hidePreloaderDelay: 0,	
		startingFrameID: 1,
		autoPlay: true,
		autoPlayDirection: 1,
		animatestartingFrameIn: false,
		autoPlayDelay: 5000,
		pauseOnHover: true,
		pauseIcon: false,
		prependPauseIcon: false,
		pauseIconSrc: "images/sliders/pause-icon.png",
		pauseAlt: "Pause",
		keysNavigate: true,
		delayDuringOutInTransitions: 1000,
		touchEnabled: true,
		swipeThreshold: 15,
		cycle: true,
		disableAnimateOut: false,
		reverseAnimationsWhenNavigatingBackwards: true,
		pauseOnElementsOutsideContainer: false,
		
		fallbackTheme: {
			speed: 500
		},
		
		//Callbacks are a work in progress and note it's possible not all of them will make it into v1.0
		beforeCurrentFrameAnimatesOut: function(){},	//triggers before current frame begins to animate out
		beforeNextFrameAnimatesIn: function(){},		//triggers before next frame begins to animate in
		afterNextFrameAnimatesIn: function(){},			//triggers after next frame animates in (and becomes the current frame)
		beforeCurrentFrameAnimatesIn: function(){},
		beforeFirstFrameAnimatesIn: function(){},		//triggers before the first frame animates in
		afterFirstFrameAnimatesIn: function(){},		//triggers after the first frame animates in
		beforeLastFrameAnimatesIn: function(){},		//triggers before the last frame animates in
		afterLastFrameAnimatesIn: function(){},			//triggers after the last frame animates in
		afterPreload: function(){}
	};
})(jQuery);


//settings
$(document).ready(function(){
			var options = {
				nextButton: ".next",
				prevButton: ".prev",
				animateStartingFrameIn: true,
				delayDuringOutInTransitions: 500,
				touchEnabled: true,
				afterPreload: function(){
					$("#slide-nav").fadeIn(100);
					$("#slide-nav li:nth-child("+(sequence.settings.startingFrameID)+")").addClass("active");
				},
				beforeNextFrameAnimatesIn: function(){
					$("#slide-nav li:not(:nth-child("+(sequence.nextFrameID)+"))").removeClass("active");
					$("#slide-nav li:nth-child("+(sequence.nextFrameID)+")").addClass("active");
				}
			};

			var sequence = $("#sequence").sequence(options).data("sequence");
			
			$("#slide-nav li").click(function(){
				if(!sequence.active){
					$(this).children("img").removeClass("active").children("img").addClass("active");
					sequence.nextFrameID = $(this).index()+1;
					sequence.goTo(sequence.nextFrameID);
				}
			});
		});