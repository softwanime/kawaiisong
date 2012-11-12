 /*
 * jQuery ThumbFx v1.0 - http://demo.wpthemers.net/thumbfx/
 * Copyright © 2012 WPThemers
 * All rights reserved.
 * 
*/


/*
 * jQuery ThumbFx Slides Function
 * Usage : jQuery('[data-slides]').slides(options);
*/

(function (d) {
	var e = function () {};
	d.extend(e.prototype, {
		name: "slides",
		options: {
			fx: 'fade',
			speed: 700,
			pager: false,
			nav: true,
			easing: 'swing',
			visibleClass: 'current-slide',
			activePagerClass: 'active'
		},
		initialize: function (c, a) {
			a = d.extend({}, this.options, a);
			c.attr("data-slides") && d.each(c.attr("data-slides").split(";"), function (b, c) {
				var d = c.match(/\s*([A-Z_]*?)\s*:\s*(.+)\s*/i);
				d && (a[d[1]] = d[2])
			});
			var slide = c.children();
			var length = slide.size();
			var fadeTime = parseInt(a.speed);
			var maxWidth = 0;
			var maxHeight = 0;
			var index = 0;
			var nav = '<div class="slide-nav"><a class="next"><span></span></a><a class="prev"><span></span></a></div>';
			var visibleClass = a.visibleClass;
			var activePagerClass = a.activePagerClass;
			var visible = {
				"position": "relative",
				"display": "block",
				"z-index": 1
			};
			var hidden = {
				"float": "none",
				"position": "absolute",
				"z-index": 0
			};
			var pagination = function () {
					var pager;
					var pagerLink;
					var pagerIndex = index;
					if(a.pager == "on") {
						var pager = d('<div class="slide-pager"></div>');
						c.append(pager);
						for(var loop = 0; loop < length; loop++) {
							pager.append('<a>' + (loop + 1) + '</a>');
						}
					} else if(a.pager != "on" && a.pager != true) {
						pager = d(a.pager);
					} else {
						var pager = d('<div class="slide-pager"></div>');
						c.append(pager);
						for(var loop = 0; loop < length; loop++) {
							pager.append('<a>' + (loop + 1) + '</a>');
						}
					}
					a.pager = pager;
					pagerLink = pager.children();
					pagerLink.on('click', function () {
						pagerIndex = d(this).index();
						if(index === pagerIndex || c.find("." + visibleClass + ":animated").length) {
							return false;
						}
						if(pagerIndex > length - 1 || pagerIndex < 0) alert('Pager out of bounds');
						else {
							pagerLink.removeClass(activePagerClass);
							d(this).addClass(activePagerClass);
							index = pagerIndex;
							slideTo(index);
							return false;
						}
					});
				};
			var slideTo = function (idx) {
					switch(a.fx) {
					case 'fade':
						slide.stop().fadeOut(fadeTime, a.easing, function () {
							d(this).removeClass(visibleClass).css(hidden);
						}).eq(idx).fadeIn(fadeTime, a.easing, function () {
							d(this).addClass(visibleClass).css(visible);
						});
						break;
					case 'slide':
						var slideVisibleIndex = c.find("." + visibleClass).index();
						if(slideVisibleIndex === 0 && idx === length - 1) slideRight(slideVisibleIndex, idx);
						else if(slideVisibleIndex === length - 1 && idx === 0) slideLeft(slideVisibleIndex, idx);
						else if(slideVisibleIndex < idx) slideLeft(slideVisibleIndex, idx);
						else if(slideVisibleIndex > idx) slideRight(slideVisibleIndex, idx);
						break;
					}
				};
			var slideLeft = function (currentIndex, nextIndex) {
					var wrapW = c.width();
					slide.eq(currentIndex).animate({
						'left': -wrapW
					}, a.speed, a.easing).removeClass(visibleClass).css(hidden);
					slide.eq(nextIndex).css({
						'left': wrapW
					}).show().animate({
						'left': "0px"
					}, a.speed, a.easing, function(){slide.eq(currentIndex).hide()}).addClass(visibleClass).css(visible);
				};
			var slideRight = function (currentIndex, nextIndex) {
					var wrapW = c.width();
					slide.eq(currentIndex).animate({
						'left': wrapW
					}, a.speed, a.easing).removeClass(visibleClass).css(hidden);
					slide.eq(nextIndex).css({
						'left': -wrapW
					}).show().animate({
						'left': "0px"
					}, a.speed, a.easing, function(){slide.eq(currentIndex).hide()}).addClass(visibleClass).css(visible);
				};
			if(length > 1) {
				if(a.nav && a.nav != "off" && a.nav != "false") c.append(nav).addClass('slides clearfix');
				else c.addClass('slides clearfix');
				slide.hide().eq(0).addClass(visibleClass).css(visible).show();
				if(a.pager) pagination();
				if(a.pager) d(a.pager).children().eq(index).addClass(activePagerClass);
			}
			c.find('.next').on('click', function () {
				if(c.find("." + visibleClass + ":animated").length) {
					return false;
				}
				if(index >= length - 1) index = 0;
				else index++;
				if(a.pager) d(a.pager).children().removeClass(activePagerClass).eq(index).addClass(activePagerClass);
				slideTo(index);
			});
			c.find('.prev').on('click', function () {
				if(c.find("." + visibleClass + ":animated").length) {
					return false;
				}
				if(index > 0) index--;
				else index = length - 1;
				if(a.pager) d(a.pager).children().removeClass(activePagerClass).eq(index).addClass(activePagerClass);
				slideTo(index);
			});
		}
	});
	d.fn[e.prototype.name] = function () {
		var c = arguments,
			a = c[0] ? c[0] : null;
		return this.each(function () {
			var b = d(this);
			if(e.prototype[a] && b.data(e.prototype.name) && a != "initialize") b.data(e.prototype.name)[a].apply(b.data(e.prototype.name), Array.prototype.slice.call(c, 1));
			else if(!a || d.isPlainObject(a)) {
				var f = new e;
				e.prototype.initialize && f.initialize.apply(f, d.merge([b], c));
				b.data(e.prototype.name, f)
			} else d.error("Method " + a + " does not exist on jQuery." + e.name)
		})
	}
})(jQuery);

/*
 * jQuery ThumbFx Lightbox Function
 * Usage : jQuery('[data-lightbox]').lightbox(options);
 * Built and modified upon FancyBox 1.3.4 (http://fancybox.net, Janis Skarnelis, MIT License)
*/

(function (b) {
	var j, m, s, q, e, C, l, B, k, y, z, D, r = 0,
		c = {},
		o = [],
		p = 0,
		a = {},
		f = [],
		A = null,
		t = new Image,
		E, F = 1,
		G = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
		K = /[^\.]\.(swf)\s*$/i,
		H = /(\/\/.*?youtube\.[a-z]+)\/watch\?v=([^&]+)&?(.*)/,
		L = /youtu\.be\/(.*)/,
		I = /(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/,
		M = /\.(mp4|ogv|webm|flv)(.*)?$/i,
		u = 0,
		v = "",
		n, h, i = false,
		w = b.extend(b("<div/>")[0], {
			prop: 0
		});
	_abort = function () {
		s.hide();
		t.onerror = t.onload = null;
		A && A.abort();
		m.empty()
	};
	_error = function () {
		false === c.onError(o, r, c) ? (s.hide(), i = false) : (c.titleShow = false, c.width = "auto", c.height = "auto", m.html('<p id="lightbox-error">The requested content cannot be loaded.<br />Please try again later.</p>'), _process_inline())
	};
	_start = function () {
		var d = o[r],
			a, g, e, h, k, f;
		_abort();
		c = b.extend({}, j.defaults, typeof b(d).data(j.name) == "undefined" ? c : b(d).data(j.name));
		b(d).attr("data-lightbox") && b.each(b(d).attr("data-lightbox").split(";"), function (a, d) {
			var b = d.match(/\s*([A-Z_]*?)\s*:\s*(.+)\s*/i);
			if(b && (c[b[1]] = b[2], c[b[1]] === "true" || c[b[1]] === "false")) c[b[1]] = eval(b[2])
		});
		f = c.onStart(o, r, c);
		if(f === false) i = false;
		else {
			typeof f == "object" && (c = b.extend(c, f));
			e = c.title || (d.nodeName ? b(d).attr("title") : d.title) || "";
			if(d.nodeName && !c.orig) c.orig = b(d).children("img:first").length ? b(d).children("img:first") : b(d);
			e === "" && c.orig && c.titleFromAlt && (e = c.orig.attr("alt"));
			a = c.href || (d.nodeName ? b(d).attr("href") : d.href) || null;
			if(/^(?:javascript)/i.test(a) || a == "#") a = null;
			if(c.type) {
				if(g = c.type, !a) a = c.content
			} else c.content ? g = "html" : a && (a.match(G) ? g = "image" : a.match(K) ? g = "swf" : a.match(M) ? g = "video" : a.match(H) ? (a = a.replace(H, "$1/embed/$2?$3").replace("/(.*)?$/", ""), g = "iframe") : a.match(L) ? (g = a.split("/"), a = "//www.youtube.com/embed/" + g[g.length - 1], g = "iframe") : a.match(I) ? (a = a.replace(I, "$1player.vimeo.com/video/$2"), g = "iframe") : g = a.indexOf("http://") != -1 && a.indexOf(location.hostname.toLowerCase()) == -1 ? "iframe" : a.indexOf("#") === 0 ? "inline" : "ajax");
			if(g) {
				g == "inline" && (d = a.substr(a.indexOf("#")), g = b(d).length > 0 ? "inline" : "ajax");
				c.type = g;
				c.href = a;
				c.title = e;
				if(c.autoDimensions && c.type !== "iframe" && c.type !== "swf" && c.type !== "video" && c.type !== "widget") c.width = "auto", c.height = "auto";
				if(c.modal) c.overlayShow = true, c.hideOnOverlayClick = false, c.hideOnContentClick = false, c.enableEscapeButton = false, c.showCloseButton = false;
				c.padding = parseInt(c.padding, 10);
				c.margin = parseInt(c.margin, 10);
				m.css("padding", c.padding + c.margin);
				b(".lightbox-inline-tmp").unbind("lightbox-cancel").bind("lightbox-change", function () {
					b(this).replaceWith(l.children())
				});
				switch(g) {
				case "html":
					m.html(c.content);
					_process_inline();
					break;
				case "video":
					i = false;
					c.scrolling = "no";
					d = c.width == "auto" ? 320 : c.width;
					e = c.height == "auto" ? 240 : c.height;
					g = [];
					g.push('src="' + a + '"');
					g.push('width="' + d + '"');
					g.push('height="' + e + '"');
					g.push('preload="none"');
					b.type(c.autoplay) != "undefined" && g.push('autoplay="' + String(c.autoplay) + '"');
					b.type(c.controls) != "undefined" && g.push('controls="' + String(c.controls) + '"');
					b.type(c.loop) != "undefined" && g.push('loop="' + String(c.loop) + '"');
					b.type(c.poster) != "undefined" && g.push('poster="' + String(c.poster) + '"');
					m.html("<video " + g.join(" ") + " /></video>");
					b.fn.mediaelementplayer && b("video", m).mediaelementplayer();
					c.width = "auto";
					c.height = "auto";
					_process_inline();
					break;
				case "inline":
					if(b(d).parent().is("#lightbox-content") === true) {
						i = false;
						break
					}
					b('<div class="lightbox-inline-tmp" />').hide().insertBefore(b(d)).bind("lightbox-cleanup", function () {
						b(this).replaceWith(l.children())
					}).bind("lightbox-cancel", function () {
						b(this).replaceWith(m.children())
					});
					b(d).appendTo(m);
					_process_inline();
					break;
				case "image":
					i = false;
					j.showActivity();
					t = new Image;
					t.onerror = function () {
						_error()
					};
					t.onload = function () {
						i = true;
						t.onerror = t.onload = null;
						_process_image()
					};
					t.src = a;
					break;
				case "swf":
					c.scrolling = "no";
					c.autoDimensions = false;
					h = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + c.width + '" height="' + c.height + '"><param name="movie" value="' + a + '"></param>';
					k = "";
					b.each(c.swf, function (a, d) {
						h += '<param name="' + a + '" value="' + d + '"></param>';
						k += " " + a + '="' + d + '"'
					});
					h += '<embed src="' + a + '" type="application/x-shockwave-flash" width="' + c.width + '" height="' + c.height + '"' + k + "></embed></object>";
					m.html(h);
					_process_inline();
					break;
				case "ajax":
					i = false;
					j.showActivity();
					c.ajax.win = c.ajax.success;
					A = b.ajax(b.extend({}, c.ajax, {
						url: a,
						data: c.ajax.data || {},
						error: function (a) {
							a.status > 0 && _error()
						},
						success: function (d, b, g) {
							if((typeof g == "object" ? g : A).status == 200) {
								if(typeof c.ajax.win == "function") if(f = c.ajax.win(a, d, b, g), f === false) {
									s.hide();
									return
								} else if(typeof f == "string" || typeof f == "object") d = f;
								m.html(d);
								_process_inline()
							}
						}
					}));
					break;
				case "iframe":
					c.autoDimensions = false, _show()
				}
			} else _error()
		}
	};
	_process_inline = function () {
		m.wrapInner('<div style="width:' + (c.width == "auto" ? "auto" : c.width + "px") + ";height:" + (c.height == "auto" ? "auto" : c.height + "px") + ";overflow: " + (c.scrolling == "auto" ? "auto" : c.scrolling == "yes" ? "scroll" : "hidden") + '"></div>');
		c.width = m.width();
		c.height = m.height();
		_show()
	};
	_process_image = function () {
		c.width = t.width;
		c.height = t.height;
		b("<img />").attr({
			id: "lightbox-img",
			src: t.src,
			alt: c.title
		}).appendTo(m);
		_show()
	};
	_show = function () {
		var d, J;
		s.hide();
		if(e.is(":visible") && false === a.onCleanup(f, p, a)) b.event.trigger("lightbox-cancel"), i = false;
		else if(i = true, b(l.add(q)).unbind(), b(window).unbind("resize.fb scroll.fb"), b(document).unbind("keydown.fb"), e.is(":visible") && a.titlePosition !== "outside" && e.css("height", e.height()), f = o, p = r, a = c, a.overlayShow ? (q.css({
			"background-color": a.overlayColor,
			opacity: a.overlayOpacity,
			cursor: a.hideOnOverlayClick ? "pointer" : "auto",
			height: b(document).height()
		}), q.is(":visible") || q.show()) : q.hide(), h = _get_zoom_to(), _process_title(), e.is(":visible")) b(B.add(y).add(z)).hide(), d = e.position(), n = {
			top: d.top,
			left: d.left,
			width: e.width(),
			height: e.height()
		}, J = n.width == h.width && n.height == h.height, l.fadeTo(a.changeFade, 0.3, function () {
			var d = function () {
					l.html(m.contents()).fadeTo(a.changeFade, 1, _finish)
				};
			b.event.trigger("lightbox-change");
			l.empty().removeAttr("filter").css({
				"border-width": a.padding,
				width: h.width - a.padding * 2,
				height: a.type == "image" || a.type == "swf" || a.type == "iframe" ? h.height - u - a.padding * 2 : "auto"
			});
			J ? d() : (w.prop = 0, b(w).animate({
				prop: 1
			}, {
				duration: a.changeSpeed,
				easing: a.easingChange,
				step: _draw,
				complete: d
			}))
		});
		else if(e.removeAttr("style"), l.css("border-width", a.padding), l.css("-webkit-transform", "translateZ(0)"), a.transitionIn == "elastic") {
			n = _get_zoom_from();
			l.html(m.contents());
			e.show();
			if(a.opacity) h.opacity = 0;
			w.prop = 0;
			b(w).animate({
				prop: 1
			}, {
				duration: a.speedIn,
				easing: a.easingIn,
				step: _draw,
				complete: _finish
			})
		} else a.titlePosition == "inside" && u > 0 && k.show(), l.css({
			width: h.width - a.padding * 2,
			height: a.type == "image" || a.type == "swf" || a.type == "iframe" ? h.height - u - a.padding * 2 : "auto"
		}).html(m.contents()), e.css(h).fadeIn(a.transitionIn == "none" ? 0 : a.speedIn, _finish)
	};
	_format_title = function (d) {
		return d && d.length ? '<div id="lightbox-title-' + a.titlePosition + '">' + d + "</div>" : false
	};
	_process_title = function () {
		v = a.title || "";
		u = 0;
		k.empty().removeAttr("style").removeClass();
		if(a.titleShow !== false && (v = b.isFunction(a.titleFormat) ? a.titleFormat(v, f, p, a) : _format_title(v)) && v !== "") switch(k.addClass("lightbox-title-" + a.titlePosition).html(v).appendTo("body").show(), a.titlePosition) {
		case "inside":
			k.css({
				width: h.width - a.padding * 2,
				marginLeft: a.padding,
				marginRight: a.padding
			});
			u = k.outerHeight(true);
			k.appendTo(C);
			h.height += u;
			break;
		case "over":
			k.css({
				marginLeft: a.padding,
				width: h.width - a.padding * 2,
				bottom: a.padding
			}).appendTo(C);
			break;
		case "float":
			k.css("left", parseInt((k.width() - h.width - 40) / 2, 10) * -1).appendTo(e);
			break;
		default:
			k.css({
				width: h.width - a.padding * 2,
				paddingLeft: a.padding,
				paddingRight: a.padding
			}).appendTo(e)
		}
		k.hide()
	};
	_set_navigation = function () {
		(a.enableEscapeButton || a.enableKeyboardNav) && b(document).bind("keydown.fb", function (d) {
			if(d.keyCode == 27 && a.enableEscapeButton) d.preventDefault(), j.close();
			else if((d.keyCode == 37 || d.keyCode == 39) && a.enableKeyboardNav && d.target.tagName !== "INPUT" && d.target.tagName !== "TEXTAREA" && d.target.tagName !== "SELECT") d.preventDefault(), j[d.keyCode == 37 ? "prev" : "next"]()
		});
		a.showNavArrows ? ((a.cyclic && f.length > 1 || p !== 0) && y.show(), (a.cyclic && f.length > 1 || p != f.length - 1) && z.show()) : (y.hide(), z.hide())
	};
	_finish = function () {
		b.support.opacity || (l.get(0).style.removeAttribute("filter"), e.get(0).style.removeAttribute("filter"));
		e.css("height", "auto");
		a.type !== "image" && a.type !== "swf" && a.type !== "iframe" && l.css("height", "auto");
		v && v.length && k.show();
		a.showCloseButton && B.show();
		_set_navigation();
		a.hideOnContentClick && l.bind("click", j.close);
		a.hideOnOverlayClick && q.bind("click", j.close);
		b(window).bind("resize.fb", j.resize);
		a.centerOnScroll && b(window).bind("scroll.fb", j.center);
		a.type == "iframe" && b('<iframe id="lightbox-frame" name="lightbox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (b.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + c.scrolling + '" src="' + a.href + '"></iframe>').appendTo(l);
		e.show();
		i = false;
		j.center();
		a.onComplete(f, p, a);
		_preload_images()
	};
	_preload_images = function () {
		var a, b;
		if(f.length - 1 > p && (a = f[p + 1].href, typeof a !== "undefined" && a.match(G))) b = new Image, b.src = a;
		if(p > 0 && (a = f[p - 1].href, typeof a !== "undefined" && a.match(G))) b = new Image, b.src = a
	};
	_draw = function (d) {
		var b = {
			width: parseInt(n.width + (h.width - n.width) * d, 10),
			height: parseInt(n.height + (h.height - n.height) * d, 10),
			top: parseInt(n.top + (h.top - n.top) * d, 10),
			left: parseInt(n.left + (h.left - n.left) * d, 10)
		};
		if(typeof h.opacity !== "undefined") b.opacity = d < 0.5 ? 0.5 : d;
		e.css(b);
		l.css({
			width: b.width - a.padding * 2,
			height: b.height - u * d - a.padding * 2
		})
	};
	_get_viewport = function () {
		return [b(window).width() - a.margin * 2, b(window).height() - a.margin * 2, b(document).scrollLeft() + a.margin, b(document).scrollTop() + a.margin]
	};
	_get_zoom_to = function () {
		var d = _get_viewport(),
			b = {},
			g = a.autoScale,
			e = a.padding * 2;
		b.width = a.width.toString().indexOf("%") > -1 ? parseInt(d[0] * parseFloat(a.width) / 100, 10) : parseInt(a.width) + e;
		b.height = a.height.toString().indexOf("%") > -1 ? parseInt(d[1] * parseFloat(a.height) / 100, 10) : parseInt(a.height) + e;
		if(g && (b.width > d[0] || b.height > d[1])) if(c.type == "image" || c.type == "swf") {
			g = a.width / a.height;
			if(b.width > d[0]) b.width = d[0], b.height = parseInt((b.width - e) / g + e, 10);
			if(b.height > d[1]) b.height = d[1], b.width = parseInt((b.height - e) * g + e, 10)
		} else b.width = Math.min(b.width, d[0]), b.height = Math.min(b.height, d[1]);
		b.top = parseInt(Math.max(d[3] - 20, d[3] + (d[1] - b.height - 40) * 0.5), 10);
		b.left = parseInt(Math.max(d[2] - 20, d[2] + (d[0] - b.width - 40) * 0.5), 10);
		return b
	};
	_get_obj_pos = function (a) {
		var b = a.offset();
		b.top += parseInt(a.css("paddingTop"), 10) || 0;
		b.left += parseInt(a.css("paddingLeft"), 10) || 0;
		b.top += parseInt(a.css("border-top-width"), 10) || 0;
		b.left += parseInt(a.css("border-left-width"), 10) || 0;
		b.width = a.width();
		b.height = a.height();
		return b
	};
	_get_zoom_from = function () {
		var d = c.orig ? b(c.orig) : false,
			e = {};
		d && d.length ? (d = _get_obj_pos(d), e = {
			width: d.width + a.padding * 2,
			height: d.height + a.padding * 2,
			top: d.top - a.padding - 20,
			left: d.left - a.padding - 20
		}) : (d = _get_viewport(), e = {
			width: a.padding * 2,
			height: a.padding * 2,
			top: parseInt(d[3] + d[1] * 0.5, 10),
			left: parseInt(d[2] + d[0] * 0.5, 10)
		});
		return e
	};
	_animate_loading = function () {
		//s.is(":visible") ? (b("div", s).css("top", F * -40 + "px"), F = (F + 1) % 12) : clearInterval(E)
	};
	var x = function () {};
	x.prototype = b.extend(x.prototype, {
		name: "lightbox",
		defaults: {
			padding: 10,
			margin: 40,
			opacity: false,
			modal: false,
			cyclic: true,
			scrolling: "auto",
			width: 560,
			height: 340,
			autoScale: true,
			autoDimensions: false,
			centerOnScroll: true,
			ajax: {},
			swf: {
				wmode: "transparent"
			},
			hideOnOverlayClick: true,
			hideOnContentClick: false,
			overlayShow: true,
			overlayOpacity: 0.6,
			overlayColor: "#000",
			titleShow: true,
			titlePosition: "float",
			titleFormat: null,
			titleFromAlt: false,
			transitionIn: "elastic",
			transitionOut: "elastic",
			speedIn: 300,
			speedOut: 300,
			changeSpeed: 300,
			changeFade: "fast",
			easingIn: "swing",
			easingOut: "swing",
			showCloseButton: true,
			showNavArrows: true,
			enableEscapeButton: true,
			enableKeyboardNav: true,
			onStart: function () {},
			onCancel: function () {},
			onComplete: function () {},
			onCleanup: function () {},
			onClosed: function () {},
			onError: function () {}
		},
		init: function () {
			var d = this;
			b("#lightbox-wrap").length || (b("body").append(m = b('<div id="lightbox-tmp"></div>'), s = b('<div id="lightbox-loading"><div></div></div>'), q = b('<div id="lightbox-overlay"></div>'), e = b('<div id="lightbox-wrap"></div>')), D = q.show().position(), q.hide(), D.top != 0 && q.css("top", D.top * -1), C = b('<div id="lightbox-outer"></div>').appendTo(e), C.append(l = b('<div id="lightbox-content"></div>'), B = b('<a id="lightbox-close"><span></span></a>'), k = b('<div id="lightbox-title"></div>'), y = b('<a href="javascript:;" id="lightbox-left"><span id="lightbox-left-ico"></span></a>'), z = b('<a href="javascript:;" id="lightbox-right"><span id="lightbox-right-ico"></span></a>')), B.bind("click", this.close), s.bind("click", this.cancel), y.bind("click", function (a) {
				a.preventDefault();
				d.prev()
			}), z.bind("click", function (a) {
				a.preventDefault();
				d.next()
			}), b.fn.mousewheel && e.bind("mousewheel.fb", function (b, c) {
				(i || a.type == "image") && b.preventDefault();
				d[c > 0 ? "prev" : "next"]()
			}))
		},
		open: function (a, c) {
			var e;
			if(!i) {
				i = true;
				e = typeof c !== "undefined" ? c : {};
				o = [];
				r = parseInt(e.index, 10) || 0;
				if(b.isArray(a)) {
					for(var f = 0, h = a.length; f < h; f++) typeof a[f] == "object" ? b(a[f]).data(j.name, b.extend({}, e, a[f])) : a[f] = b({}).data(j.name, b.extend({
						content: a[f]
					}, e));
					o = b.merge(o, a)
				} else typeof a == "object" ? b(a).data(j.name, b.extend({}, e, a)) : a = b({}).data(j.name, b.extend({
					content: a
				}, e)), o.push(a);
				if(r > o.length || r < 0) r = 0;
				_start()
			}
		},
		showActivity: function () {
			clearInterval(E);
			s.show();
			E = setInterval(_animate_loading, 66)
		},
		hideActivity: function () {
			s.hide()
		},
		next: function () {
			return this.pos(p + 1)
		},
		prev: function () {
			return this.pos(p - 1)
		},
		pos: function (b) {
			i || (b = parseInt(b), o = f, b > -1 && b < f.length ? (r = b, _start()) : a.cyclic && f.length > 1 && (r = b >= f.length ? 0 : f.length - 1, _start()))
		},
		cancel: function () {
			i || (i = true, b.event.trigger("lightbox-cancel"), _abort(), c.onCancel(o, r, c), i = false)
		},
		close: function () {
			function d() {
				q.fadeOut("fast");
				k.empty().hide();
				e.hide();
				b.event.trigger("lightbox-cleanup");
				l.empty();
				a.onClosed(f, p, a);
				f = c = [];
				p = r = 0;
				a = c = {};
				i = false
			}
			if(!i && !e.is(":hidden")) if(i = true, a && false === a.onCleanup(f, p, a)) i = false;
			else if(_abort(), b(B.add(y).add(z)).hide(), b(l.add(q)).unbind(), b(window).unbind("resize.fb scroll.fb"), b(document).unbind("keydown.fb"), l.find("iframe").attr("src", "about:blank"), a.titlePosition !== "inside" && k.empty(), e.stop(), a.transitionOut == "elastic") {
				n = _get_zoom_from();
				var j = e.position();
				h = {
					top: j.top,
					left: j.left,
					width: e.width(),
					height: e.height()
				};
				if(a.opacity) h.opacity = 1;
				k.empty().hide();
				w.prop = 1;
				b(w).animate({
					prop: 0
				}, {
					duration: a.speedOut,
					easing: a.easingOut,
					step: _draw,
					complete: d
				})
			} else e.fadeOut(a.transitionOut == "none" ? 0 : a.speedOut, d)
		},
		resize: function () {
			q.is(":visible") && q.css("height", b(document).height());
			if(a.type == "image") {
				h = _get_zoom_to();
				switch(a.titlePosition) {
				case "float":
					k.css("left", parseInt((k.width() - h.width - 40) / 2, 10) * -1);
					break;
				default:
					k.css("width", h.width - a.padding * 2)
				}
				if(e.is(":visible") && (pos = e.position(), n = {
					top: pos.top,
					left: pos.left,
					width: e.width(),
					height: e.height()
				}, equal = n.width == h.width && n.height == h.height, l.css({
					width: h.width - a.padding * 2,
					height: a.type == "image" || a.type == "swf" || a.type == "iframe" ? h.height - u - a.padding * 2 : "auto"
				}), !equal)) w.prop = 0, b(w).animate({
					prop: 1
				}, {
					duration: a.changeSpeed,
					easing: a.easingChange,
					step: _draw
				})
			}
			j.center(true)
		},
		center: function (b) {
			var c, g;
			if(!i && (g = b === true ? 1 : 0, c = _get_viewport(), g || !(e.width() > c[0] || e.height() > c[1]))) e.stop().animate({
				top: parseInt(Math.max(c[3] - 20, c[3] + (c[1] - l.height() - 40) * 0.5 - a.padding)),
				left: parseInt(Math.max(c[2] - 20, c[2] + (c[0] - l.width() - 40) * 0.5 - a.padding))
			}, typeof b == "number" ? b : 200)
		}
	});
	b.fn[x.prototype.name] = function () {
		var a = arguments,
			c = a[0] ? a[0] : {};
		return this.each(function () {
			b(this).data(x.prototype.name, c).unbind("click." + x.prototype.name).bind("click." + x.prototype.name, function (a) {
				a.preventDefault();
				i || (i = true, b(this).blur(), o = [], r = 0, (a = b(this).attr("data-lightbox") || "") && (a = a.match(/group:([^;]+)/i)) ? (o = b('a[data-lightbox*="' + a[0] + '"], area[data-lightbox*="' + a[0] + '"]'), r = o.index(this)) : o.push(this), _start())
			})
		})
	};
	b(document).ready(function () {
		j = new x;
		j.init();
		b[x.prototype.name] = j
	})
})(jQuery);

/*
 * jQuery ThumbFx Overlayer Function
 * Usage : jQuery('[data-overlayer]').overlayer(options);
 * Based on jQuery tipTip by Drew Wilson
*/

(function (d) {
	var e = function () {};
	d.extend(e.prototype, {
		name: "overlayer",
		options: {
			effect: "fade",
			duration: 300,
			easing: "swing",
			cls: "overlayer",
			overlaySelector: ".overlay",
			overlayDefault: "overlay-default"
		},
		initialize: function (c, a) {
			a = d.extend({}, this.options, a);
			c.attr("data-overlayer") && d.each(c.attr("data-overlayer").split(";"), function (b, c) {
				var d = c.match(/\s*([A-Z_]*?)\s*:\s*(.+)\s*/i);
				d && (a[d[1]] = d[2])
			});
			a.duration = Math.floor(a.duration);
			var b = c.children(a.overlaySelector).first();
			b.length || (b = d("<div>").addClass(a.overlayDefault).appendTo(c));
			b.css({
				position: "absolute",

				visibility: "hidden",
				display: "block"
			}).wrapInner("<div>");
			c.css({
				position: "relative",
				overflow: "hidden"
			}).addClass(a.cls);
			c.bind({
				mouseenter: function () {
					b.stop().css({
						visibility: "visible",
						width: c.width(),
						height: a.effect == "top" || a.effect == "bottom" ? "auto" : c.height()
					});
					switch(a.effect) {
					case "right":
						b.css({
							right: b.width() * -1,
							top: 0,
							bottom: 0
						}).animate({
							right: 0
						}, a.duration, a.easing);
						break;
					case "left":
						b.css({
							left: b.width() * -1,
							top: 0,
							bottom: 0
						}).animate({
							left: 0
						}, a.duration, a.easing);
						break;
					case "top":
						b.css({
							left: 0,
							top: b.height() * -1
						}).animate({
							top: 0
						}, a.duration, a.easing);
						break;
					case "bottom":
						b.css({
							left: 0,
							bottom: b.height() * -1
						}).animate({
							bottom: 0
						}, a.duration, a.easing);
						break;
					default:
						b.show().css({
							opacity: 0,
							top: 0,
							left: 0
						}).animate({
							opacity: 1
						}, a.duration, a.easing, function () {
							if(d.browser.msie) b.get(0).filter = "", b.attr("style", String(b.attr("style")).replace(/alpha\(opacity=([\d.]+)\)/i, ""))
						})
					}
				},
				mouseleave: function () {
					b.stop();
					switch(a.effect) {
					case "right":
						b.animate({
							right: b.width() * -1
						}, a.duration, a.easing);
						break;
					case "left":
						b.animate({
							left: b.width() * -1
						}, a.duration, a.easing);
						break;
					case "top":
						b.animate({
							top: b.height() * -1
						}, a.duration, a.easing);
						break;
					case "bottom":
						b.animate({
							bottom: b.height() * -1
						}, a.duration, a.easing);
						break;
					default:
						b.animate({
							opacity: 0
						}, a.duration, a.easing, function () {
							b.hide()
						})
					}
				}
			})
		}
	});
	d.fn[e.prototype.name] = function () {
		var c = arguments,
			a = c[0] ? c[0] : null;
		return this.each(function () {
			var b = d(this);
			if(e.prototype[a] && b.data(e.prototype.name) && a != "initialize") b.data(e.prototype.name)[a].apply(b.data(e.prototype.name), Array.prototype.slice.call(c, 1));
			else if(!a || d.isPlainObject(a)) {
				var f = new e;
				e.prototype.initialize && f.initialize.apply(f, d.merge([b], c));
				b.data(e.prototype.name, f)
			} else d.error("Method " + a + " does not exist on jQuery." + e.name)
		})
	}
})(jQuery);

/*
 * jQuery ThumbFx ToolTips Function
 * Usage : jQuery('[data-tooltip]').tooltip(options);
 * Based on jQuery tipTip by Drew Wilson
*/
(function (d) {
	var e = function () {};
	d.extend(e.prototype, {
		name: "tooltip",
		options: {
			activation: "hover",
			maxwidth: 220,
			gutter: 5,
			sticky: false,
			position: "top",
			delay: 0,
			fadeIn: 300,
			fadeOut: 300,
			tipSelector: ".tip-content"
		},
		initialize: function (c, a) {
			a = d.extend({}, this.options, a);
			c.attr("data-tooltip") && d.each(c.attr("data-tooltip").split(";"), function (b, c) {
				var d = c.match(/\s*([A-Z_]*?)\s*:\s*(.+)\s*/i);
				d && (a[d[1]] = d[2])
			});
			a.maxwidth = parseInt(a.maxwidth);
			a.gutter = parseInt(a.gutter);
			a.delay = parseInt(a.delay);
			a.fadeIn = parseInt(a.fadeIn);
			a.fadeOut = parseInt(a.fadeOut);
			var b = c.children(a.tipSelector).first();
			var u = b.length ? b.html() : c.attr('title');
			var flag = b.length ? true : false;
			var v = false;
			if (!flag)
				c.removeAttr('title');
			if(d("#tip_holder").length <= 0) {
				var w = d('<div>', {
					id: 'tip_holder'
				});
				var x = d('<div>', {
					id: 'tip_content',
					Class: 'clearfix'
				});
				var y = d('<div>', {
					id: 'tip_arrow'
				});
				var sp = d('<span>', {
					html: '',
					id: 'close-tip'
				});
				d("body").append(w.html(x).prepend(sp).prepend(y.html('<div id="tip_arrow_inner"></div>')))
			} else {
				var w = d("#tip_holder");
				var x = d("#tip_content");
				var sp = d('#close-tip');
				var y = d("#tip_arrow")
			}
			var z = function () {
					x.empty().html(u);
					if(a.sticky) d(sp).hide().show();
					else d(sp).hide();
					w.css({
						'max-width': a.maxwidth + 'px'
					});
				};
			var A = function () {
					z();
					w.hide().removeAttr("class").css("margin", "0");
					y.removeAttr("style");
					var b = parseInt(c.offset()["top"]);
					var e = parseInt(c.offset()["left"]);
					var f = parseInt(c.outerWidth());
					var g = parseInt(c.outerHeight());
					var h = w.outerWidth();
					var i = w.outerHeight();
					var j = Math.round((f - h) / 2);
					var k = Math.round((g - i) / 2);
					var l = Math.round(e + j);
					var m = Math.round(b + g + a.gutter);
					var n = "";
					var o = "";
					var p = Math.round(h - 12) / 2;
					if(a.position == "bottom") {
						n = "_bottom"
					} else {
						if(a.position == "top") {
							n = "_top"
						} else {
							if(a.position == "left") {
								n = "_left"
							} else {
								if(a.position == "right") {
									n = "_right"
								}
							}
						}
					}
					var q = (j + e) < parseInt(d(window).scrollLeft());
					var r = (h + e) > parseInt(d(window).width());
					if((q && j < 0) || (n == "_right" && !r) || (n == "_left" && e < (h + a.gutter + 5))) {
						n = "_right";
						o = Math.round(i - 13) / 2;
						p = -12;
						l = Math.round(e + f + a.gutter);
						m = Math.round(b + k)
					} else {
						if((r && j < 0) || (n == "_left" && !q)) {
							n = "_left";
							o = Math.round(i - 13) / 2;
							p = Math.round(h);
							l = Math.round(e - (h + a.gutter + 5));
							m = Math.round(b + k)
						}
					}
					var s = (b + g + a.gutter + i + 8) > parseInt(d(window).height() + d(window).scrollTop());
					var t = ((b + g) - (a.gutter + i + 8)) < 0;
					if(s || (n == "_bottom" && s) || (n == "_top" && !t)) {
						if(n == "_top" || n == "_bottom") {
							n = "_top"
						} else {
							n = n + "_top"
						}
						o = i;
						m = Math.round(b - (i + 5 + a.gutter))
					} else if(t | (n == "_top" && t) || (n == "_bottom" && !s)) {
						if(n == "_top" || n == "_bottom") {
							n = "_bottom"
						} else {
							n = n + "_bottom"
						}
						o = -12;
						m = Math.round(b + g + a.gutter)
					}
					if(n == "_right_top" || n == "_left_top") {
						m = m + 5
					} else {
						if(n == "_right_bottom" || n == "_left_bottom") {
							m = m - 5
						}
					}
					if(n == "_left_top" || n == "_left_bottom") {
						l = l + 5
					}
					y.css({
						"margin-left": p + "px",
						"margin-top": o + "px"
					});
					w.css({
						"margin-left": l + "px",
						"margin-top": m + "px"
					}).attr("class", "tip" + n);
					if(v) {
						clearTimeout(v)
					}
					v = setTimeout(function () {
						w.stop(true, true).fadeIn(a.fadeIn)
					}, a.delay)
				};
			var B = function () {
					if(v) {
						clearTimeout(v)
					}
					w.fadeOut(a.fadeOut);
					sp.hide();
				};
			sp.on('click', function () {
				B();
			});
			d(window).resize(function () {
				B();
			});
			if(a.activation == "hover") {
				c.hover(function () {
					A()
				}, function () {
					if(!a.sticky) {
						B()
					}
				});
			} else {
				if(a.activation == "focus") {
					c.focus(function () {
						A()
					}).blur(function () {
						B()
					})
				} else {
					if(a.activation == "click") {
						c.click(function () {
							A();
							return false
						}).hover(function () {}, function () {
							if(!a.sticky) {
								B()
							}
						});
					}
				}
			}
		}
	});
	d.fn[e.prototype.name] = function () {
		var c = arguments,
			a = c[0] ? c[0] : null;
		return this.each(function () {
			var b = d(this);
			if(e.prototype[a] && b.data(e.prototype.name) && a != "initialize") b.data(e.prototype.name)[a].apply(b.data(e.prototype.name), Array.prototype.slice.call(c, 1));
			else if(!a || d.isPlainObject(a)) {
				var f = new e;
				e.prototype.initialize && f.initialize.apply(f, d.merge([b], c));
				b.data(e.prototype.name, f)
			} else d.error("Method " + a + " does not exist on jQuery." + e.name)
		})
	}
})(jQuery);
jQuery(function (d) {
	d('[data-slides]').slides();
	d('[data-overlayer]').overlayer();
	d('[data-lightbox]').lightbox();
	d('[data-tooltip]').tooltip();
});