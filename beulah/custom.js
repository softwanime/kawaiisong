$("#header-inner h1,#header-inner h3,h3.post-title").css("display", "none");
$("span.show-title").text("Welcome!");
$("<p>Anime, Manga, Raws, J-Music, Downloads, Gossip and More, all the information you need in one place.</p>").insertAfter("span.show-title");
$(function () {
	$("ul.white-top").tabs("div.white-top > div");
	$("#nav1 ul").tabs("#panes-top > div", {
		effect: "fade",
		fadeOutSpeed: 400,
		rotate: true
	}).slideshow({
		autopause: true,
		clickable: false,
		autoplay: true,
		interval: 5E3
	});
	$("#nav2 ul").tabs("#panes-bottom > div", {
		effect: "fade",
		fadeOutSpeed: "slow",
		rotate: true
	});
	$(".accord1").tabs(".accord1 div.pane", {
		tabs: "h2",
		effect: "slide",
		initialIndex: null
	});
	$(".accord2").tabs(".accord2 div.pane", {
		tabs: "h2",
		effect: "fade",
		initialIndex: null
	});
	function msieversion() {
		var a = window.navigator.userAgent;
		var b = a.indexOf("MSIE ");
		if (b > 0) return parseInt(a.substring(b + 5, a.indexOf(".", b)));
		else return 0
	}
	if (msieversion() >= 9) $(".accord1").tabs(".accord1 div.pane", {
		tabs: "h2",
		effect: "slide",
		initialIndex: null
	});
	else if (msieversion() >= 8) $(".accord1").tabs(".accord1 div.pane", {
		tabs: "h2",
		effect: "fade",
		initialIndex: null
	});
	else if (msieversion() >= 7) $(".accord1").tabs(".accord1 div.pane", {
		tabs: "h2",
		effect: "fade",
		initialIndex: null
	})
});
$(function () {
	$("a.switch_thumb").toggle(function () {
		$(this).removeClass("swap");
		$("ul.display").fadeOut("fast", function () {
			$(this).fadeIn("slow").removeClass("thumb_view")
		})
	},
	function () {
		$(this).addClass("swap");
		$("ul.display").fadeOut("fast", function () {
			$(this).fadeIn("slow").addClass("thumb_view")
		})
	})
});
$(document).ready(function ($) {
	if ($('.showhide li').length > 0) {
		var a = $('.showhide li');
		a.each(function () {
			var q = $(this);
			q.children('.title').click(function () {
				q.children('section').slideToggle('normal')
			})
		})
	}
});
$(document).ready(function () {
	var c = new Date;
	document.getElementById("top-date").innerHTML = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")[c.getDay()] + ", " + "January February March April May June July August September October November December".split(" ")[c.getMonth()] + " " + c.getDate() + ", " + c.getFullYear()
});
jQuery(function (c) {
	c(".tweeter_widget").tweet({
		join_text: "auto",
		username: "softwanime",
		avatar_size: null,
		count: 1,
		auto_join_text_default: "I said,",
		auto_join_text_ed: "",
		auto_join_text_ing: "",
		auto_join_text_reply: "I replied",
		auto_join_text_url: "",
		loading_text: "loading tweets..."
	})
});
$(document).ready(function () {
	$().UItoTop({
		easingType: "easeOutExpo"
	})
});
$(document).ready(function () {
	$("#related-posts a").tooltip({
		effect: "slide",
		opacity: 0.8,
		position: ["bottom", "center"],
		offset: [0, 0]
	});
	$("a#toTop").tooltip({
		effect: "slide",
		opacity: 0.8,
		position: ["top", "center"],
		offset: [ - 15, 0]
	});
	$("#follow-me a.twit-logo").tooltip({
		effect: "slide",
		opacity: 0.8,
		position: ["top", "center"],
		offset: [ - 20, 10]
	})
});
window.log = function () {
	log.history = log.history || [];
	log.history.push(arguments);
	if (this.console) {
		arguments.callee = arguments.callee.caller;
		var c = [].slice.call(arguments);
		"object" === typeof console.log ? log.apply.call(console.log, console, c) : console.log.apply(console, c)
	}
};
(function (c) {
	function b() {}
	for (var f = "assert count debug dir dirxml error exception group groupCollapsed groupEnd info log timeStamp profile profileEnd time timeEnd trace warn".split(" "), d; d = f.pop();) c[d] = c[d] || b
})(function () {
	try {
		return console.log(),
		window.console
	} catch(c) {
		return window.console = {}
	}
} ());
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (c, b, f, d, a) {
		return jQuery.easing[jQuery.easing.def](c, b, f, d, a)
	},
	easeInQuad: function (c, b, f, d, a) {
		return d * (b /= a) * b + f
	},
	easeOutQuad: function (c, b, f, d, a) {
		return - d * (b /= a) * (b - 2) + f
	},
	easeInOutQuad: function (c, b, f, d, a) {
		return 1 > (b /= a / 2) ? d / 2 * b * b + f: -d / 2 * (--b * (b - 2) - 1) + f
	},
	easeInCubic: function (c, b, f, d, a) {
		return d * (b /= a) * b * b + f
	},
	easeOutCubic: function (c, b, f, d, a) {
		return d * ((b = b / a - 1) * b * b + 1) + f
	},
	easeInOutCubic: function (c, b, f, d, a) {
		return 1 > (b /= a / 2) ? d / 2 * b * b * b + f: d / 2 * ((b -= 2) * b * b + 2) + f
	},
	easeInQuart: function (c, b, f, d, a) {
		return d * (b /= a) * b * b * b + f
	},
	easeOutQuart: function (c, b, f, d, a) {
		return - d * ((b = b / a - 1) * b * b * b - 1) + f
	},
	easeInOutQuart: function (c, b, f, d, a) {
		return 1 > (b /= a / 2) ? d / 2 * b * b * b * b + f: -d / 2 * ((b -= 2) * b * b * b - 2) + f
	},
	easeInQuint: function (c, b, f, d, a) {
		return d * (b /= a) * b * b * b * b + f
	},
	easeOutQuint: function (c, b, f, d, a) {
		return d * ((b = b / a - 1) * b * b * b * b + 1) + f
	},
	easeInOutQuint: function (c, b, f, d, a) {
		return 1 > (b /= a / 2) ? d / 2 * b * b * b * b * b + f: d / 2 * ((b -= 2) * b * b * b * b + 2) + f
	},
	easeInSine: function (c, b, f, d, a) {
		return - d * Math.cos(b / a * (Math.PI / 2)) + d + f
	},
	easeOutSine: function (c, b, f, d, a) {
		return d * Math.sin(b / a * (Math.PI / 2)) + f
	},
	easeInOutSine: function (c, b, f, d, a) {
		return - d / 2 * (Math.cos(Math.PI * b / a) - 1) + f
	},
	easeInExpo: function (c, b, f, d, a) {
		return 0 == b ? f: d * Math.pow(2, 10 * (b / a - 1)) + f
	},
	easeOutExpo: function (c, b, f, d, a) {
		return b == a ? f + d: d * ( - Math.pow(2, -10 * b / a) + 1) + f
	},
	easeInOutExpo: function (c, b, f, d, a) {
		return 0 == b ? f: b == a ? f + d: 1 > (b /= a / 2) ? d / 2 * Math.pow(2, 10 * (b - 1)) + f: d / 2 * ( - Math.pow(2, -10 * --b) + 2) + f
	},
	easeInCirc: function (c, b, f, d, a) {
		return - d * (Math.sqrt(1 - (b /= a) * b) - 1) + f
	},
	easeOutCirc: function (c, b, f, d, a) {
		return d * Math.sqrt(1 - (b = b / a - 1) * b) + f
	},
	easeInOutCirc: function (c, b, f, d, a) {
		return 1 > (b /= a / 2) ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + f: d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + f
	},
	easeInElastic: function (c, b, f, d, a) {
		var c = 1.70158,
		g = 0,
		e = d;
		if (0 == b) return f;
		if (1 == (b /= a)) return f + d;
		g || (g = 0.3 * a);
		e < Math.abs(d) ? (e = d, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(d / e);
		return - (e * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * a - c) * 2 * Math.PI / g)) + f
	},
	easeOutElastic: function (c, b, f, d, a) {
		var c = 1.70158,
		g = 0,
		e = d;
		if (0 == b) return f;
		if (1 == (b /= a)) return f + d;
		g || (g = 0.3 * a);
		e < Math.abs(d) ? (e = d, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(d / e);
		return e * Math.pow(2, -10 * b) * Math.sin((b * a - c) * 2 * Math.PI / g) + d + f
	},
	easeInOutElastic: function (c, b, f, d, a) {
		var c = 1.70158,
		g = 0,
		e = d;
		if (0 == b) return f;
		if (2 == (b /= a / 2)) return f + d;
		g || (g = a * 0.3 * 1.5);
		e < Math.abs(d) ? (e = d, c = g / 4) : c = g / (2 * Math.PI) * Math.asin(d / e);
		return 1 > b ? -0.5 * e * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * a - c) * 2 * Math.PI / g) + f: 0.5 * e * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * a - c) * 2 * Math.PI / g) + d + f
	},
	easeInBack: function (c, b, f, d, a, g) {
		void 0 == g && (g = 1.70158);
		return d * (b /= a) * b * ((g + 1) * b - g) + f
	},
	easeOutBack: function (c, b, f, d, a, g) {
		void 0 == g && (g = 1.70158);
		return d * ((b = b / a - 1) * b * ((g + 1) * b + g) + 1) + f
	},
	easeInOutBack: function (c, b, f, d, a, g) {
		void 0 == g && (g = 1.70158);
		return 1 > (b /= a / 2) ? d / 2 * b * b * (((g *= 1.525) + 1) * b - g) + f: d / 2 * ((b -= 2) * b * (((g *= 1.525) + 1) * b + g) + 2) + f
	},
	easeInBounce: function (c, b, f, d, a) {
		return d - jQuery.easing.easeOutBounce(c, a - b, 0, d, a) + f
	},
	easeOutBounce: function (c, b, f, d, a) {
		return (b /= a) < 1 / 2.75 ? d * 7.5625 * b * b + f: b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + f: b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + f: d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + f
	},
	easeInOutBounce: function (c, b, f, d, a) {
		return b < a / 2 ? 0.5 * jQuery.easing.easeInBounce(c, 2 * b, 0, d, a) + f: 0.5 * jQuery.easing.easeOutBounce(c, 2 * b - a, 0, d, a) + 0.5 * d + f
	}
});
(function (c) {
	for (var b = [{
		str: navigator.userAgent,
		sub: "Chrome",
		ver: "Chrome",
		name: "chrome"
	},
	{
		str: navigator.vendor,
		sub: "Apple",
		ver: "Version",
		name: "safari"
	},
	{
		prop: window.opera,
		ver: "Opera",
		name: "opera"
	},
	{
		str: navigator.userAgent,
		sub: "Firefox",
		ver: "Firefox",
		name: "firefox"
	},
	{
		str: navigator.userAgent,
		sub: "MSIE",
		ver: "MSIE",
		name: "ie"
	}], f = 0; f < b.length; f++) if (b[f].str && -1 != b[f].str.indexOf(b[f].sub) || b[f].prop) {
		var d = function (c) {
			var g = c.indexOf(b[f].ver);
			return - 1 != g ? parseInt(c.substring(g + b[f].ver.length + 1)) : ""
		};
		c("html").addClass(b[f].name + " " + b[f].name + d(navigator.userAgent) || d(navigator.appVersion));
		break
	}
})(jQuery);
jQuery(function () {
	var c = jQuery("div.content");
	if (1 === c.length) {
		var b = c.parent().children(".layout-cell:not(.content)");
		jQuery.browser.msie && 8 > parseInt(jQuery.browser.version) && jQuery(window).bind("resize", function () {
			var f = 0;
			c.hide();
			b.each(function () {
				f += this.clientWidth
			});
			c.w = c.parent().width();
			c.css("width", c.w - f + "px");
			c.show()
		});
		jQuery(window).trigger("resize")
	}
});
(function (c) {
	c.fn.tweet = function (b) {
		function f(g) {
			var b = {};
			b.item = g;
			b.source = g.source;
			b.screen_name = g.from_user || g.user.screen_name;
			b.avatar_size = i.avatar_size;
			b.avatar_url = "https:" == document.location.protocol ? (g.profile_image_url || g.user.profile_image_url).replace(/^http:/, "https:") : g.profile_image_url || g.user.profile_image_url;
			b.retweet = "undefined" != typeof g.retweeted_status;
			b.tweet_time = Date.parse(g.created_at.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"));
			b.join_text = "auto" == i.join_text ? g.text.match(/^(@([A-Za-z0-9-_]+)) .*/i) ? i.auto_join_text_reply: g.text.match(h) ? i.auto_join_text_url: g.text.match(/^((\w+ed)|just) .*/im) ? i.auto_join_text_ed: g.text.match(/^(\w*ing) .*/i) ? i.auto_join_text_ing: i.auto_join_text_default: i.join_text;
			b.tweet_id = g.id_str;
			b.twitter_base = "http://" + i.twitter_url + "/";
			b.user_url = b.twitter_base + b.screen_name;
			b.tweet_url = b.user_url + "/status/" + b.tweet_id;
			b.reply_url = b.twitter_base + "intent/tweet?in_reply_to=" + b.tweet_id;
			b.retweet_url = b.twitter_base + "intent/retweet?tweet_id=" + b.tweet_id;
			b.favorite_url = b.twitter_base + "intent/favorite?tweet_id=" + b.tweet_id;
			b.retweeted_screen_name = b.retweet && g.retweeted_status.user.screen_name;
			b.tweet_relative_time = a(b.tweet_time);
			b.tweet_raw_text = b.retweet ? "RT @" + b.retweeted_screen_name + " " + g.retweeted_status.text: g.text;
			b.tweet_text = c([b.tweet_raw_text]).linkUrl().linkUser().linkHash()[0];
			b.tweet_text_fancy = c([b.tweet_text]).makeHeart().capAwesome().capEpic()[0];
			b.user = e('<a class="tweet_user" href="{user_url}">{screen_name}</a>', b);
			b.join = i.join_text ? e(' <span class="tweet_join">{join_text}</span> ', b) : " ";
			b.avatar = b.avatar_size ? e('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', b) : "";
			b.time = e('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', b);
			b.text = e('<span class="tweet_text">{tweet_text_fancy}</span>', b);
			b.reply_action = e('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', b);
			b.retweet_action = e('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', b);
			b.favorite_action = e('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', b);
			return b
		}
		function d() {
			var c = "https:" == document.location.protocol ? "https:": "http:",
			a = null === i.fetch ? i.count: i.fetch;
			if (i.list) return c + "//" + i.twitter_api_url + "/1/" + i.username[0] + "/lists/" + i.list + "/statuses.json?page=" + i.page + "&per_page=" + a + "&callback=?";
			if (i.favorites) return c + "//" + i.twitter_api_url + "/favorites/" + i.username[0] + ".json?page=" + i.page + "&count=" + a + "&callback=?";
			if (null === i.query && 1 == i.username.length) return c + "//" + i.twitter_api_url + "/1/statuses/user_timeline.json?screen_name=" + i.username[0] + "&count=" + a + (i.retweets ? "&include_rts=1": "") + "&page=" + i.page + "&callback=?";
			var b = i.query || "from:" + i.username.join(" OR from:");
			return c + "//" + i.twitter_search_url + "/search.json?&q=" + encodeURIComponent(b) + "&rpp=" + a + "&page=" + i.page + "&callback=?"
		}
		function a(c) {
			var a = parseInt(((1 < arguments.length ? arguments[1] : new Date).getTime() - c) / 1E3, 10),
			b = "",
			b = 60 > a ? a + " seconds ago": 120 > a ? "a minute ago": 2700 > a ? parseInt(a / 60, 10).toString() + " minutes ago": 7200 > a ? "an hour ago": 86400 > a ? "" + parseInt(a / 3600, 10).toString() + " hours ago": 172800 > a ? "a day ago": parseInt(a / 86400, 10).toString() + " days ago";
			return "about " + b
		}
		function g(a, b) {
			return function () {
				var g = [];
				this.each(function () {
					g.push(this.replace(a, b))
				});
				return c(g)
			}
		}
		function e(c, a) {
			if ("string" === typeof c) {
				var b = c,
				g;
				for (g in a) var e = a[g],
				b = b.replace(RegExp("{" + g + "}", "g"), null === e ? "": e);
				return b
			}
			return c(a)
		}
		var i = c.extend({
			username: null,
			list: null,
			favorites: !1,
			query: null,
			avatar_size: null,
			count: 3,
			fetch: null,
			page: 1,
			retweets: !0,
			intro_text: null,
			outro_text: null,
			join_text: null,
			auto_join_text_default: "i said,",
			auto_join_text_ed: "i",
			auto_join_text_ing: "i am",
			auto_join_text_reply: "i replied to",
			auto_join_text_url: "i was looking at",
			loading_text: null,
			refresh_interval: null,
			twitter_url: "twitter.com",
			twitter_api_url: "api.twitter.com",
			twitter_search_url: "search.twitter.com",
			template: "{avatar}{time}{join}{text}",
			comparator: function (c, a) {
				return a.tweet_time - c.tweet_time
			},
			filter: function () {
				return ! 0
			}
		},
		b),
		h = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\uff6b\uff7b\u706f\u846c]))/gi;
		c.extend({
			tweet: {
				t: e
			}
		});
		c.fn.extend({
			linkUrl: g(h, function (c) {
				return '<a href="' + (/^[a-z]+:/i.test(c) ? c: "http://" + c) + '">' + c + "</a>"
			}),
			linkUser: g(/@(\w+)/gi, '@<a href="http://' + i.twitter_url + '/$1">$1</a>'),
			linkHash: g(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="http://' + i.twitter_search_url + "/search?q=&tag=$1&lang=all" + (i.username && 1 == i.username.length ? "&from=" + i.username.join("Á+") : "") + '">#$1</a>'),
			capAwesome: g(/\b(awesome)\b/gi, '<span class="awesome">$1</span>'),
			capEpic: g(/\b(epic)\b/gi, '<span class="epic">$1</span>'),
			makeHeart: g(/(<)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
		});
		return this.each(function (a, b) {
			var g = c('<ul class="tweet_list">').appendTo(b),
			h = '<p class="tweet_intro">' + i.intro_text + "</p>",
			o = '<p class="tweet_outro">' + i.outro_text + "</p>",
			n = c('<p class="loading">' + i.loading_text + "</p>");
			i.username && "string" == typeof i.username && (i.username = [i.username]);
			i.loading_text && c(b).append(n);
			c(b).bind("tweet:load", function () {
				c.getJSON(d(), function (a) {
					i.loading_text && n.remove();
					i.intro_text && g.before(h);
					g.empty();
					a = c.map(a.results || a, f);
					a = c.grep(a, i.filter).sort(i.comparator).slice(0, i.count);
					g.append(c.map(a, function (c) {
						return "<li>" + e(i.template, c) + "</li>"
					}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");
					i.outro_text && g.after(o);
					c(b).trigger("loaded").trigger(a.length === 0 ? "empty": "full");
					i.refresh_interval && window.setTimeout(function () {
						c(b).trigger("tweet:load")
					},
					1E3 * i.refresh_interval)
				})
			}).trigger("tweet:load")
		})
	}
})(jQuery);
(function (c) {
	function b(a, b, e) {
		var d = this,
		h = a.add(this),
		j = a.find(e.tabs),
		l = b.jquery ? b: a.children(b),
		k;
		j.length || (j = a.children());
		l.length || (l = a.parent().find(b));
		l.length || (l = c(b));
		c.extend(this, {
			click: function (a, b) {
				var g = j.eq(a);
				"string" == typeof a && a.replace("#", "") && (g = j.filter("[href*=" + a.replace("#", "") + "]"), a = Math.max(j.index(g), 0));
				if (e.rotate) {
					var r = j.length - 1;
					if (0 > a) return d.click(r, b);
					if (a > r) return d.click(0, b)
				}
				if (!g.length) {
					if (0 <= k) return d;
					a = e.initialIndex;
					g = j.eq(a)
				}
				if (a === k) return d;
				b = b || c.Event();
				b.type = "onBeforeClick";
				h.trigger(b, [a]);
				if (!b.isDefaultPrevented()) return f[e.effect].call(d, a, function () {
					b.type = "onClick";
					h.trigger(b, [a])
				}),
				k = a,
				j.removeClass(e.current),
				g.addClass(e.current),
				d
			},
			getConf: function () {
				return e
			},
			getTabs: function () {
				return j
			},
			getPanes: function () {
				return l
			},
			getCurrentPane: function () {
				return l.eq(k)
			},
			getCurrentTab: function () {
				return j.eq(k)
			},
			getIndex: function () {
				return k
			},
			next: function () {
				return d.click(k + 1)
			},
			prev: function () {
				return d.click(k - 1)
			},
			destroy: function () {
				j.unbind(e.event).removeClass(e.current);
				l.find("a[href^=#]").unbind("click.T");
				return d
			}
		});
		c.each(["onBeforeClick", "onClick"], function (a, b) {
			c.isFunction(e[b]) && c(d).bind(b, e[b]);
			d[b] = function (a) {
				a && c(d).bind(b, a);
				return d
			}
		});
		e.history && c.fn.history && (c.tools.history.init(j), e.event = "history");
		j.each(function (a) {
			c(this).bind(e.event, function (c) {
				d.click(a, c);
				return c.preventDefault()
			})
		});
		l.find("a[href^=#]").bind("click.T", function (a) {
			d.click(c(this).attr("href"), a)
		});
		location.hash && "a" == e.tabs && a.find("[href=" + location.hash + "]").length ? d.click(location.hash) : (0 === e.initialIndex || 0 < e.initialIndex) && d.click(e.initialIndex)
	}
	c.tools = c.tools || {
		version: "1.2.5"
	};
	c.tools.tabs = {
		conf: {
			tabs: "a",
			current: "current",
			onBeforeClick: null,
			onClick: null,
			effect: "default",
			initialIndex: 0,
			event: "click",
			rotate: !1,
			history: !1
		},
		addEffect: function (a, c) {
			f[a] = c
		}
	};
	var f = {
		"default": function (a, c) {
			this.getPanes().hide().eq(a).show();
			c.call()
		},
		fade: function (a, c) {
			var b = this.getConf(),
			d = b.fadeOutSpeed,
			f = this.getPanes();
			d ? f.fadeOut(d) : f.hide();
			f.eq(a).fadeIn(b.fadeInSpeed, c)
		},
		slide: function (c, b) {
			this.getPanes().slideUp(200);
			this.getPanes().eq(c).slideDown(400, b)
		},
		ajax: function (c, b) {
			this.getPanes().eq(0).load(this.getTabs().eq(c).attr("href"), b)
		}
	},
	d;
	c.tools.tabs.addEffect("horizontal", function (a, b) {
		d || (d = this.getPanes().eq(0).width());
		this.getCurrentPane().animate({
			width: 0
		},
		function () {
			c(this).hide()
		});
		this.getPanes().eq(a).animate({
			width: d
		},
		function () {
			c(this).show();
			b.call()
		})
	});
	c.fn.tabs = function (a, g) {
		var e = this.data("tabs");
		e && (e.destroy(), this.removeData("tabs"));
		c.isFunction(g) && (g = {
			onBeforeClick: g
		});
		g = c.extend({},
		c.tools.tabs.conf, g);
		this.each(function () {
			e = new b(c(this), a, g);
			c(this).data("tabs", e)
		});
		return g.api ? e: this
	}
})(jQuery);
(function (c) {
	function b(b, a) {
		function g(a) {
			var g = c(a);
			return 2 > g.length ? g: b.parent().find(a)
		}
		var e = this,
		f = b.add(this),
		h = b.data("tabs"),
		j,
		l = !0,
		k = g(a.next).click(function () {
			h.next()
		}),
		m = g(a.prev).click(function () {
			h.prev()
		});
		c.extend(e, {
			getTabs: function () {
				return h
			},
			getConf: function () {
				return a
			},
			play: function () {
				if (j) return e;
				var b = c.Event("onBeforePlay");
				f.trigger(b);
				if (b.isDefaultPrevented()) return e;
				j = setInterval(h.next, a.interval);
				l = !1;
				f.trigger("onPlay");
				return e
			},
			pause: function () {
				if (!j) return e;
				var a = c.Event("onBeforePause");
				f.trigger(a);
				if (a.isDefaultPrevented()) return e;
				j = clearInterval(j);
				f.trigger("onPause");
				return e
			},
			stop: function () {
				e.pause();
				l = !0
			}
		});
		c.each(["onBeforePlay", "onPlay", "onBeforePause", "onPause"], function (b, g) {
			c.isFunction(a[g]) && c(e).bind(g, a[g]);
			e[g] = function (a) {
				return c(e).bind(g, a)
			}
		});
		a.autopause && h.getTabs().add(k).add(m).add(h.getPanes()).hover(e.pause, function () {
			l || e.play()
		});
		a.autoplay && e.play();
		a.clickable && h.getPanes().click(function () {
			h.next()
		});
		if (!h.getConf().rotate) {
			var o = a.disabledClass;
			h.getIndex() || m.addClass(o);
			h.onBeforeClick(function (c, a) {
				m.toggleClass(o, !a);
				k.toggleClass(o, a == h.getTabs().length - 1)
			})
		}
	}
	var f;
	f = c.tools.tabs.slideshow = {
		conf: {
			next: ".forward",
			prev: ".backward",
			disabledClass: "disabled",
			autoplay: !1,
			autopause: !0,
			interval: 3E3,
			clickable: !0,
			api: !1
		}
	};
	c.fn.slideshow = function (d) {
		var a = this.data("slideshow");
		if (a) return a;
		d = c.extend({},
		f.conf, d);
		this.each(function () {
			a = new b(c(this), d);
			c(this).data("slideshow", a)
		});
		return d.api ? a: this
	}
})(jQuery);
(function (c) {
	function b(a, b, e) {
		var d = e.relative ? a.position().top: a.offset().top,
		f = e.relative ? a.position().left: a.offset().left,
		j = e.position[0],
		d = d - (b.outerHeight() - e.offset[0]),
		f = f + (a.outerWidth() + e.offset[1]);
		/iPad/i.test(navigator.userAgent) && (d -= c(window).scrollTop());
		var l = b.outerHeight() + a.outerHeight();
		"center" == j && (d += l / 2);
		"bottom" == j && (d += l);
		j = e.position[1];
		a = b.outerWidth() + a.outerWidth();
		"center" == j && (f -= a / 2);
		"left" == j && (f -= a);
		return {
			top: d,
			left: f
		}
	}
	function f(a, g) {
		var e = this,
		f = a.add(e),
		h,
		j = 0,
		l = 0,
		k = a.attr("title"),
		m = a.attr("data-tooltip"),
		o = d[g.effect],
		n,
		r = a.is(":input"),
		s = r && a.is(":checkbox, :radio, select, :button, :submit"),
		p = a.attr("type"),
		q = g.events[p] || g.events[r ? s ? "widget": "input": "def"];
		if (!o) throw 'Nonexistent effect "' + g.effect + '"';
		q = q.split(/,\s*/);
		if (2 != q.length) throw "Tooltip: bad events configuration for " + p;
		a.bind(q[0], function (a) {
			clearTimeout(j);
			g.predelay ? l = setTimeout(function () {
				e.show(a)
			},
			g.predelay) : e.show(a)
		}).bind(q[1], function (a) {
			clearTimeout(l);
			g.delay ? j = setTimeout(function () {
				e.hide(a)
			},
			g.delay) : e.hide(a)
		});
		k && g.cancelDefault && (a.removeAttr("title"), a.data("title", k));
		c.extend(e, {
			show: function (d) {
				if (!h) {
					if (m) h = c(m);
					else if (g.tip) h = c(g.tip).eq(0);
					else if (k) h = c(g.layout).addClass(g.tipClass).appendTo(document.body).hide().append(k);
					else {
						h = a.next();
						h.length || (h = a.parent().next())
					}
					if (!h.length) throw "Cannot find tooltip for " + a;
				}
				if (e.isShown()) return e;
				h.stop(true, true);
				var p = b(a, h, g);
				g.tip && h.html(a.data("title"));
				d = d || c.Event();
				d.type = "onBeforeShow";
				f.trigger(d, [p]);
				if (d.isDefaultPrevented()) return e;
				p = b(a, h, g);
				h.css({
					position: "absolute",
					top: p.top,
					left: p.left
				});
				n = true;
				o[0].call(e, function () {
					d.type = "onShow";
					n = "full";
					f.trigger(d)
				});
				p = g.events.tooltip.split(/,\s*/);
				if (!h.data("__set")) {
					h.bind(p[0], function () {
						clearTimeout(j);
						clearTimeout(l)
					});
					p[1] && !a.is("input:not(:checkbox, :radio), textarea") && h.bind(p[1], function (c) {
						c.relatedTarget != a[0] && a.trigger(q[1].split(" ")[0])
					});
					h.data("__set", true)
				}
				return e
			},
			hide: function (a) {
				if (!h || !e.isShown()) return e;
				a = a || c.Event();
				a.type = "onBeforeHide";
				f.trigger(a);
				if (!a.isDefaultPrevented()) {
					n = false;
					d[g.effect][1].call(e, function () {
						a.type = "onHide";
						f.trigger(a)
					});
					return e
				}
			},
			isShown: function (a) {
				return a ? n == "full": n
			},
			getConf: function () {
				return g
			},
			getTip: function () {
				return h
			},
			getTrigger: function () {
				return a
			}
		});
		c.each(["onHide", "onBeforeShow", "onShow", "onBeforeHide"], function (a, b) {
			c.isFunction(g[b]) && c(e).bind(b, g[b]);
			e[b] = function (a) {
				a && c(e).bind(b, a);
				return e
			}
		})
	}
	c.tools = c.tools || {
		version: "1.2.5"
	};
	c.tools.tooltip = {
		conf: {
			effect: "toggle",
			fadeOutSpeed: "fast",
			predelay: 0,
			delay: 30,
			opacity: 1,
			tip: 0,
			position: ["top", "center"],
			offset: [0, 0],
			relative: !1,
			cancelDefault: !0,
			events: {
				def: "mouseenter,mouseleave",
				input: "focus,blur",
				widget: "focus mouseenter,blur mouseleave",
				tooltip: "mouseenter,mouseleave"
			},
			layout: "<div/>",
			tipClass: "tooltip"
		},
		addEffect: function (a, c, b) {
			d[a] = [c, b]
		}
	};
	var d = {
		toggle: [function (a) {
			var c = this.getConf(),
			b = this.getTip(),
			c = c.opacity;
			1 > c && b.css({
				opacity: c
			});
			b.show();
			a.call()
		},
		function (a) {
			this.getTip().hide();
			a.call()
		}],
		fade: [function (a) {
			var c = this.getConf();
			this.getTip().fadeTo(c.fadeInSpeed, c.opacity, a)
		},
		function (a) {
			this.getTip().fadeOut(this.getConf().fadeOutSpeed, a)
		}]
	};
	c.fn.tooltip = function (a) {
		var b = this.data("tooltip");
		if (b) return b;
		a = c.extend(!0, {},
		c.tools.tooltip.conf, a);
		"string" == typeof a.position && (a.position = a.position.split(/,?\s/));
		this.each(function () {
			b = new f(c(this), a);
			c(this).data("tooltip", b)
		});
		return a.api ? b: this
	}
})(jQuery);
(function (c) {
	var b = c.tools.tooltip;
	c.extend(b.conf, {
		direction: "up",
		bounce: !1,
		slideOffset: 10,
		slideInSpeed: 200,
		slideOutSpeed: 200,
		slideFade: !c.browser.msie
	});
	var f = {
		up: ["-", "top"],
		down: ["+", "top"],
		left: ["-", "left"],
		right: ["+", "left"]
	};
	b.addEffect("slide", function (c) {
		var a = this.getConf(),
		b = this.getTip(),
		e = a.slideFade ? {
			opacity: a.opacity
		}: {},
		i = f[a.direction] || f.up;
		e[i[1]] = i[0] + "=" + a.slideOffset;
		a.slideFade && b.css({
			opacity: 0
		});
		b.show().animate(e, a.slideInSpeed, c)
	},
	function (b) {
		var a = this.getConf(),
		g = a.slideOffset,
		e = a.slideFade ? {
			opacity: 0
		}: {},
		i = f[a.direction] || f.up,
		h = "" + i[0];
		a.bounce && (h = "+" == h ? "-": "+");
		e[i[1]] = h + "=" + g;
		this.getTip().animate(e, a.slideOutSpeed, function () {
			c(this).hide();
			b.call()
		})
	})
})(jQuery);
(function (c) {
	function b(a, b) {
		var e = c(b);
		return 2 > e.length ? e: a.parent().find(b)
	}
	function f(a, g) {
		var e = this,
		f = a.add(e),
		h = a.children(),
		j = 0,
		l = g.vertical;
		d || (d = e);
		1 < h.length && (h = c(g.items, a));
		c.extend(e, {
			getConf: function () {
				return g
			},
			getIndex: function () {
				return j
			},
			getSize: function () {
				return e.getItems().size()
			},
			getNaviButtons: function () {
				return o.add(n)
			},
			getRoot: function () {
				return a
			},
			getItemWrap: function () {
				return h
			},
			getItems: function () {
				return h.children(g.item).not("." + g.clonedClass)
			},
			move: function (a, c) {
				return e.seekTo(j + a, c)
			},
			next: function (a) {
				return e.move(1, a)
			},
			prev: function (a) {
				return e.move( - 1, a)
			},
			begin: function (a) {
				return e.seekTo(0, a)
			},
			end: function (a) {
				return e.seekTo(e.getSize() - 1, a)
			},
			focus: function () {
				return d = e
			},
			addItem: function (a) {
				a = c(a);
				g.circular ? (h.children("." + g.clonedClass + ":last").before(a), h.children("." + g.clonedClass + ":first").replaceWith(a.clone().addClass(g.clonedClass))) : h.append(a);
				f.trigger("onAddItem", [a]);
				return e
			},
			seekTo: function (a, b, k) {
				a.jquery || (a *= 1);
				if (g.circular && 0 === a && -1 == j && 0 !== b || !g.circular && 0 > a || a > e.getSize() || -1 > a) return e;
				var m = a;
				a.jquery ? a = e.getItems().index(a) : m = e.getItems().eq(a);
				var o = c.Event("onBeforeSeek");
				if (!k && (f.trigger(o, [a, b]), o.isDefaultPrevented() || !m.length)) return e;
				m = l ? {
					top: -m.position().top
				}: {
					left: -m.position().left
				};
				j = a;
				d = e;
				void 0 === b && (b = g.speed);
				h.animate(m, b, g.easing, k ||
				function () {
					f.trigger("onSeek", [a])
				});
				return e
			}
		});
		c.each(["onBeforeSeek", "onSeek", "onAddItem"], function (a, b) {
			c.isFunction(g[b]) && c(e).bind(b, g[b]);
			e[b] = function (a) {
				a && c(e).bind(b, a);
				return e
			}
		});
		if (g.circular) {
			var k = e.getItems().slice( - 1).clone().prependTo(h),
			m = e.getItems().eq(1).clone().appendTo(h);
			k.add(m).addClass(g.clonedClass);
			e.onBeforeSeek(function (a, b, c) {
				if (!a.isDefaultPrevented()) {
					if ( - 1 == b) return e.seekTo(k, c, function () {
						e.end(0)
					}),
					a.preventDefault();
					b == e.getSize() && e.seekTo(m, c, function () {
						e.begin(0)
					})
				}
			});
			e.seekTo(0, 0, function () {})
		}
		var o = b(a, g.prev).click(function () {
			e.prev()
		}),
		n = b(a, g.next).click(function () {
			e.next()
		}); ! g.circular && 1 < e.getSize() && (e.onBeforeSeek(function (a, b) {
			setTimeout(function () {
				a.isDefaultPrevented() || (o.toggleClass(g.disabledClass, 0 >= b), n.toggleClass(g.disabledClass, b >= e.getSize() - 1))
			},
			1)
		}), g.initialIndex || o.addClass(g.disabledClass));
		g.mousewheel && c.fn.mousewheel && a.mousewheel(function (a, b) {
			if (g.mousewheel) {
				e.move(b < 0 ? 1 : -1, g.wheelSpeed || 50);
				return false
			}
		});
		if (g.touch) {
			var r, s;
			h[0].ontouchstart = function (a) {
				a = a.touches[0];
				r = a.clientX;
				s = a.clientY
			};
			h[0].ontouchmove = function (a) {
				if (a.touches.length == 1 && !h.is(":animated")) {
					var b = a.touches[0],
					c = r - b.clientX,
					b = s - b.clientY;
					e[l && b > 0 || !l && c > 0 ? "next": "prev"]();
					a.preventDefault()
				}
			}
		}
		g.keyboard && c(document).bind("keydown.scrollable", function (a) {
			if (g.keyboard && !a.altKey && (!a.ctrlKey && !c(a.target).is(":input")) && !(g.keyboard != "static" && d != e)) {
				var b = a.keyCode;
				if (l && (b == 38 || b == 40)) {
					e.move(b == 38 ? -1 : 1);
					return a.preventDefault()
				}
				if (!l && (b == 37 || b == 39)) {
					e.move(b == 37 ? -1 : 1);
					return a.preventDefault()
				}
			}
		});
		g.initialIndex && e.seekTo(g.initialIndex, 0, function () {})
	}
	c.tools = c.tools || {
		version: "1.2.5"
	};
	c.tools.scrollable = {
		conf: {
			activeClass: "active",
			circular: !1,
			clonedClass: "cloned",
			disabledClass: "disabled",
			easing: "swing",
			initialIndex: 0,
			item: null,
			items: ".items",
			keyboard: !0,
			mousewheel: !1,
			next: ".next",
			prev: ".prev",
			speed: 400,
			vertical: !1,
			touch: !0,
			wheelSpeed: 0
		}
	};
	var d;
	c.fn.scrollable = function (a) {
		var b = this.data("scrollable");
		if (b) return b;
		a = c.extend({},
		c.tools.scrollable.conf, a);
		this.each(function () {
			b = new f(c(this), a);
			c(this).data("scrollable", b)
		});
		return a.api ? b: this
	}
})(jQuery);
(function (c) {
	var b = c.tools.scrollable;
	b.autoscroll = {
		conf: {
			autoplay: !0,
			interval: 3E3,
			autopause: !0
		}
	};
	c.fn.autoscroll = function (f) {
		"number" == typeof f && (f = {
			interval: f
		});
		var d = c.extend({},
		b.autoscroll.conf, f),
		a;
		this.each(function () {
			var b = c(this).data("scrollable");
			b && (a = b);
			var e;
			b.play = function () {
				e || (e = setInterval(function () {
					b.next()
				},
				d.interval))
			};
			b.pause = function () {
				e = clearInterval(e)
			};
			b.stop = function () {
				b.pause()
			};
			d.autopause && b.getRoot().add(b.getNaviButtons()).hover(b.pause, b.play);
			d.autoplay && b.play()
		});
		return d.api ? a: this
	}
})(jQuery);
(function (c) {
	function b(a, b) {
		var e = this,
		i = a.add(e),
		h = c(window),
		j,
		l,
		k,
		m = c.tools.expose && (b.mask || b.expose),
		o = Math.random().toString().slice(10);
		m && ("string" == typeof m && (m = {
			color: m
		}), m.closeOnClick = m.closeOnEsc = !1);
		var n = b.target || a.attr("data-value");
		l = n ? c(n) : a;
		if (!l.length) throw "Could not find Overlay: " + n;
		a && -1 == a.index(l) && a.click(function (a) {
			e.load(a);
			return a.preventDefault()
		});
		c.extend(e, {
			load: function (a) {
				if (e.isOpened()) return e;
				var j = d[b.effect];
				if (!j) throw 'Overlay: cannot find effect : "' + b.effect + '"';
				b.oneInstance && c.each(f, function () {
					this.close(a)
				});
				a = a || c.Event();
				a.type = "onBeforeLoad";
				i.trigger(a);
				if (a.isDefaultPrevented()) return e;
				k = true;
				m && c(l).expose(m);
				var n = b.top,
				q = b.left,
				t = l.outerWidth({
					margin: true
				}),
				u = l.outerHeight({
					margin: true
				});
				typeof n == "string" && (n = n == "center" ? Math.max((h.height() - u) / 2, 0) : parseInt(n, 10) / 100 * h.height());
				q == "center" && (q = Math.max((h.width() - t) / 2, 0));
				j[0].call(e, {
					top: n,
					left: q
				},
				function () {
					if (k) {
						a.type = "onLoad";
						i.trigger(a)
					}
				});
				m && b.closeOnClick && c.mask.getMask().one("click", e.close);
				b.closeOnClick && c(document).bind("click." + o, function (a) {
					c(a.target).parents(l).length || e.close(a)
				});
				b.closeOnEsc && c(document).bind("keydown." + o, function (a) {
					a.keyCode == 27 && e.close(a)
				});
				return e
			},
			close: function (a) {
				if (!e.isOpened()) return e;
				a = a || c.Event();
				a.type = "onBeforeClose";
				i.trigger(a);
				if (!a.isDefaultPrevented()) {
					k = false;
					d[b.effect][1].call(e, function () {
						a.type = "onClose";
						i.trigger(a)
					});
					c(document).unbind("click." + o).unbind("keydown." + o);
					m && c.mask.close();
					return e
				}
			},
			getOverlay: function () {
				return l
			},
			getTrigger: function () {
				return a
			},
			getClosers: function () {
				return j
			},
			isOpened: function () {
				return k
			},
			getConf: function () {
				return b
			}
		});
		c.each(["onBeforeLoad", "onStart", "onLoad", "onBeforeClose", "onClose"], function (a, d) {
			c.isFunction(b[d]) && c(e).bind(d, b[d]);
			e[d] = function (a) {
				a && c(e).bind(d, a);
				return e
			}
		});
		j = l.find(b.close || ".close"); ! j.length && !b.close && (j = c('<a class="close"></a>'), l.prepend(j));
		j.click(function (a) {
			e.close(a)
		});
		b.load && e.load()
	}
	c.tools = c.tools || {
		version: "1.2.5"
	};
	c.tools.overlay = {
		addEffect: function (a, b, c) {
			d[a] = [b, c]
		},
		conf: {
			close: null,
			closeOnClick: !0,
			closeOnEsc: !0,
			closeSpeed: "fast",
			effect: "default",
			fixed: !c.browser.msie || 6 < c.browser.version,
			left: "center",
			load: !1,
			mask: null,
			oneInstance: !0,
			speed: "normal",
			target: null,
			top: "10%"
		}
	};
	var f = [],
	d = {};
	c.tools.overlay.addEffect("default", function (a, b) {
		var e = this.getConf(),
		d = c(window);
		e.fixed || (a.top += d.scrollTop(), a.left += d.scrollLeft());
		a.position = e.fixed ? "fixed": "absolute";
		this.getOverlay().css(a).fadeIn(e.speed, b)
	},
	function (a) {
		this.getOverlay().fadeOut(this.getConf().closeSpeed, a)
	});
	c.fn.overlay = function (a) {
		var g = this.data("overlay");
		if (g) return g;
		c.isFunction(a) && (a = {
			onBeforeLoad: a
		});
		a = c.extend(!0, {},
		c.tools.overlay.conf, a);
		this.each(function () {
			g = new b(c(this), a);
			f.push(g);
			c(this).data("overlay", g)
		});
		return a.api ? g: this
	}
})(jQuery);
(function (c) {
	function b(a) {
		var b = a.offset();
		return {
			top: b.top + a.height() / 2,
			left: b.left + a.width() / 2
		}
	}
	var f = c.tools.overlay,
	d = c(window);
	c.extend(f.conf, {
		start: {
			top: null,
			left: null
		},
		fadeInSpeed: "fast",
		zIndex: 9999
	});
	f.addEffect("apple", function (a, g) {
		var e = this.getOverlay(),
		f = this.getConf(),
		h = this.getTrigger(),
		j = this,
		l = e.outerWidth({
			margin: !0
		}),
		k = e.data("img"),
		m = f.fixed ? "fixed": "absolute";
		if (!k) {
			k = e.css("backgroundImage");
			if (!k) throw "background-image CSS property not set for overlay";
			k = k.slice(k.indexOf("(") + 1, k.indexOf(")")).replace(/\"/g, "");
			e.css("backgroundImage", "none");
			k = c('<img src="' + k + '"/>');
			k.css({
				border: 0,
				display: "none"
			}).width(l);
			c("body").append(k);
			e.data("img", k)
		}
		var o = f.start.top || Math.round(d.height() / 2),
		n = f.start.left || Math.round(d.width() / 2);
		h && (h = b(h), o = h.top, n = h.left);
		f.fixed ? (o -= d.scrollTop(), n -= d.scrollLeft()) : (a.top += d.scrollTop(), a.left += d.scrollLeft());
		k.css({
			position: "absolute",
			top: o,
			left: n,
			width: 0,
			zIndex: f.zIndex
		}).show();
		a.position = m;
		e.css(a);
		e.css({
			opacity: 0
		});
		e.show();
		k.animate({
			top: a.top,
			left: a.left,
			width: l
		},
		f.speed, function () {
			e.css({
				opacity: 1
			});
			e.css("zIndex", f.zIndex + 1).fadeIn(f.fadeInSpeed, function () {
				j.isOpened() && !c(this).index(e) ? g.call() : e.hide()
			})
		}).css("position", m)
	},
	function (a) {
		var g = this.getOverlay().hide(),
		e = this.getConf(),
		f = this.getTrigger(),
		g = g.data("img"),
		h = {
			top: e.start.top,
			left: e.start.left,
			width: 0
		};
		f && c.extend(h, b(f));
		e.fixed && g.css({
			position: "absolute"
		}).animate({
			top: "+=" + d.scrollTop(),
			left: "+=" + d.scrollLeft()
		},
		0);
		g.animate(h, e.closeSpeed, a)
	})
})(jQuery);
(function (c) {
	function b() {
		if (c.browser.msie) {
			var a = c(document).height(),
			b = c(window).height();
			return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 20 > a - b ? b: a]
		}
		return [c(document).width(), c(document).height()]
	}
	function f(a) {
		if (a) return a.call(c.mask)
	}
	c.tools = c.tools || {
		version: "1.2.5"
	};
	var d;
	d = c.tools.expose = {
		conf: {
			maskId: "exposeMask",
			loadSpeed: "slow",
			closeSpeed: "fast",
			closeOnClick: !0,
			closeOnEsc: !0,
			zIndex: 9998,
			opacity: 0.8,
			startOpacity: 0,
			color: "#fff",
			onLoad: null,
			onClose: null
		}
	};
	var a, g, e, i, h;
	c.mask = {
		load: function (j, l) {
			if (e) return this;
			"string" == typeof j && (j = {
				color: j
			});
			j = j || i;
			i = j = c.extend(c.extend({},
			d.conf), j);
			a = c("#" + j.maskId);
			a.length || (a = c("<div/>").attr("id", j.maskId), c("body").append(a));
			var k = b();
			a.css({
				position: "absolute",
				top: 0,
				left: 0,
				width: k[0],
				height: k[1],
				display: "none",
				opacity: j.startOpacity,
				zIndex: j.zIndex
			});
			j.color && a.css("backgroundColor", j.color);
			if (!1 === f(j.onBeforeLoad)) return this;
			j.closeOnEsc && c(document).bind("keydown.mask", function (a) {
				a.keyCode == 27 && c.mask.close(a)
			});
			j.closeOnClick && a.bind("click.mask", function (a) {
				c.mask.close(a)
			});
			c(window).bind("resize.mask", function () {
				c.mask.fit()
			});
			l && l.length && (h = l.eq(0).css("zIndex"), c.each(l, function () {
				var a = c(this);
				/relative|absolute|fixed/i.test(a.css("position")) || a.css("position", "relative")
			}), g = l.css({
				zIndex: Math.max(j.zIndex + 1, "auto" == h ? 0 : h)
			}));
			a.css({
				display: "block"
			}).fadeTo(j.loadSpeed, j.opacity, function () {
				c.mask.fit();
				f(j.onLoad);
				e = "full"
			});
			e = !0;
			return this
		},
		close: function () {
			if (e) {
				if (!1 === f(i.onBeforeClose)) return this;
				a.fadeOut(i.closeSpeed, function () {
					f(i.onClose);
					g && g.css({
						zIndex: h
					});
					e = !1
				});
				c(document).unbind("keydown.mask");
				a.unbind("click.mask");
				c(window).unbind("resize.mask")
			}
			return this
		},
		fit: function () {
			if (e) {
				var c = b();
				a.css({
					width: c[0],
					height: c[1]
				})
			}
		},
		getMask: function () {
			return a
		},
		isLoaded: function (a) {
			return a ? "full" == e: e
		},
		getConf: function () {
			return i
		},
		getExposed: function () {
			return g
		}
	};
	c.fn.mask = function (a) {
		c.mask.load(a);
		return this
	};
	c.fn.expose = function (a) {
		c.mask.load(a, this);
		return this
	}
})(jQuery);
(function (c) {
	function b(a, b) {
		var e = this,
		i = a.add(e),
		h,
		j = 0,
		l = 0,
		k = a.attr("title"),
		m = a.attr("data-tooltip"),
		o = d[b.effect],
		n,
		r = a.is(":input"),
		s = r && a.is(":checkbox, :radio, select, :button, :submit"),
		p = a.attr("type"),
		q = b.events[p] || b.events[r ? s ? "widget": "input": "def"];
		if (!o) throw 'Nonexistent effect "' + b.effect + '"';
		q = q.split(/,\s*/);
		if (2 != q.length) throw "Tooltip: bad events configuration for " + p;
		a.bind(q[0], function (a) {
			clearTimeout(j);
			b.predelay ? l = setTimeout(function () {
				e.show(a)
			},
			b.predelay) : e.show(a)
		}).bind(q[1], function (a) {
			clearTimeout(l);
			b.delay ? j = setTimeout(function () {
				e.hide(a)
			},
			b.delay) : e.hide(a)
		});
		k && b.cancelDefault && (a.removeAttr("title"), a.data("title", k));
		c.extend(e, {
			show: function (d) {
				if (!h) {
					if (m) h = c(m);
					else if (b.tip) h = c(b.tip).eq(0);
					else if (k) h = c(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(k);
					else {
						h = a.next();
						h.length || (h = a.parent().next())
					}
					if (!h.length) throw "Cannot find tooltip for " + a;
				}
				if (e.isShown()) return e;
				h.stop(true, true);
				var p = f(a, h, b);
				b.tip && h.html(a.data("title"));
				d = c.Event();
				d.type = "onBeforeShow";
				i.trigger(d, [p]);
				if (d.isDefaultPrevented()) return e;
				p = f(a, h, b);
				h.css({
					position: "absolute",
					top: p.top,
					left: p.left
				});
				n = true;
				o[0].call(e, function () {
					d.type = "onShow";
					n = "full";
					i.trigger(d)
				});
				p = b.events.tooltip.split(/,\s*/);
				if (!h.data("__set")) {
					h.unbind(p[0]).bind(p[0], function () {
						clearTimeout(j);
						clearTimeout(l)
					});
					p[1] && !a.is("input:not(:checkbox, :radio), textarea") && h.unbind(p[1]).bind(p[1], function (b) {
						b.relatedTarget != a[0] && a.trigger(q[1].split(" ")[0])
					});
					b.tip || h.data("__set", true)
				}
				return e
			},
			hide: function (a) {
				if (!h || !e.isShown()) return e;
				a = c.Event();
				a.type = "onBeforeHide";
				i.trigger(a);
				if (!a.isDefaultPrevented()) {
					n = false;
					d[b.effect][1].call(e, function () {
						a.type = "onHide";
						i.trigger(a)
					});
					return e
				}
			},
			isShown: function (a) {
				return a ? n == "full": n
			},
			getConf: function () {
				return b
			},
			getTip: function () {
				return h
			},
			getTrigger: function () {
				return a
			}
		});
		c.each(["onHide", "onBeforeShow", "onShow", "onBeforeHide"], function (a, d) {
			c.isFunction(b[d]) && c(e).bind(d, b[d]);
			e[d] = function (a) {
				a && c(e).bind(d, a);
				return e
			}
		})
	}
	function f(a, b, e) {
		var d = e.relative ? a.position().top: a.offset().top,
		f = e.relative ? a.position().left: a.offset().left,
		j = e.position[0],
		d = d - (b.outerHeight() - e.offset[0]),
		f = f + (a.outerWidth() + e.offset[1]);
		/iPad/i.test(navigator.userAgent) && (d -= c(window).scrollTop());
		var l = b.outerHeight() + a.outerHeight();
		"center" == j && (d += l / 2);
		"bottom" == j && (d += l);
		j = e.position[1];
		a = b.outerWidth() + a.outerWidth();
		"center" == j && (f -= a / 2);
		"left" == j && (f -= a);
		return {
			top: d,
			left: f
		}
	}
	c.tools = c.tools || {
		version: "@VERSION"
	};
	c.tools.tooltip = {
		conf: {
			effect: "toggle",
			fadeOutSpeed: "fast",
			predelay: 0,
			delay: 30,
			opacity: 1,
			tip: 0,
			fadeIE: !1,
			position: ["bottom", "center"],
			offset: [1, 0],
			relative: !1,
			cancelDefault: !0,
			events: {
				def: "mouseenter,mouseleave",
				input: "focus,blur",
				widget: "focus mouseenter,blur mouseleave",
				tooltip: "mouseenter,mouseleave"
			},
			layout: "<div/>",
			tipClass: "tooltip"
		},
		addEffect: function (a, b, c) {
			d[a] = [b, c]
		}
	};
	var d = {
		toggle: [function (a) {
			var b = this.getConf(),
			c = this.getTip(),
			b = b.opacity;
			1 > b && c.css({
				opacity: b
			});
			c.show();
			a.call()
		},
		function (a) {
			this.getTip().hide();
			a.call()
		}],
		fade: [function (a) {
			var b = this.getConf(); ! c.browser.msie || b.fadeIE ? this.getTip().fadeTo(b.fadeInSpeed, b.opacity, a) : (this.getTip().show(), a())
		},
		function (a) {
			var b = this.getConf(); ! c.browser.msie || b.fadeIE ? this.getTip().fadeOut(b.fadeOutSpeed, a) : (this.getTip().hide(), a())
		}]
	};
	c.fn.tooltip = function (a) {
		var d = this.data("tooltip");
		if (d) return d;
		a = c.extend(!0, {},
		c.tools.tooltip.conf, a);
		"string" == typeof a.position && (a.position = a.position.split(/,?\s/));
		this.each(function () {
			d = new b(c(this), a);
			c(this).data("tooltip", d)
		});
		return a.api ? d: this
	}
})(jQuery);
(function (c) {
	var b = c.tools.tooltip;
	c.extend(b.conf, {
		direction: "down",
		bounce: !0,
		slideOffset: 10,
		slideInSpeed: 200,
		slideOutSpeed: 200,
		slideFade: !c.browser.msie
	});
	var f = {
		up: ["-", "top"],
		down: ["+", "top"],
		left: ["-", "left"],
		right: ["+", "left"]
	};
	b.addEffect("slide", function (b) {
		var a = this.getConf(),
		c = this.getTip(),
		e = a.slideFade ? {
			opacity: a.opacity
		}: {},
		i = f[a.direction] || f.up;
		e[i[1]] = i[0] + "=" + a.slideOffset;
		a.slideFade && c.css({
			opacity: 0
		});
		c.show().animate(e, a.slideInSpeed, b)
	},
	function (b) {
		var a = this.getConf(),
		g = a.slideOffset,
		e = a.slideFade ? {
			opacity: 0
		}: {},
		i = f[a.direction] || f.up,
		h = "" + i[0];
		a.bounce && (h = "+" == h ? "-": "+");
		e[i[1]] = h + "=" + g;
		this.getTip().animate(e, a.slideOutSpeed, function () {
			c(this).hide();
			b.call()
		})
	})
})(jQuery);
(function (c) {
	function b(a, b, e) {
		var d = a.offset().top,
		f = a.offset().left,
		g = e.position.split(/,?\s+/),
		h = g[0],
		g = g[1],
		d = d - (b.outerHeight() - e.offset[0]),
		f = f + (a.outerWidth() + e.offset[1]);
		/iPad/i.test(navigator.userAgent) && (d -= c(window).scrollTop());
		e = b.outerHeight() + a.outerHeight();
		"center" == h && (d += e / 2);
		"bottom" == h && (d += e);
		a = a.outerWidth();
		"center" == g && (f -= (a + b.outerWidth()) / 2);
		"left" == g && (f -= a);
		return {
			top: d,
			left: f
		}
	}
	function f(a, d, e) {
		var f = this,
		i = d.add(f),
		a = a.not(":button, :image, :reset, :submit");
		d.attr("novalidate", "novalidate");
		c.extend(f, {
			getConf: function () {
				return e
			},
			getForm: function () {
				return d
			},
			getInputs: function () {
				return a
			},
			reflow: function () {
				a.each(function () {
					var a = c(this),
					d = a.data("msg.el");
					d && (a = b(a, d, e), d.css({
						top: a.top,
						left: a.left
					}))
				});
				return f
			},
			invalidate: function (b, d) {
				if (!d) {
					var g = [];
					c.each(b, function (b, c) {
						var e = a.filter("[name='" + b + "']");
						e.length && (e.trigger("OI", [c]), g.push({
							input: e,
							messages: [c]
						}))
					});
					b = g;
					d = c.Event()
				}
				d.type = "onFail";
				i.trigger(d, [b]);
				d.isDefaultPrevented() || l[e.effect][0].call(f, b, d);
				return f
			},
			reset: function (b) {
				b = b || a;
				b.removeClass(e.errorClass).each(function () {
					var a = c(this).data("msg.el");
					a && (a.remove(), c(this).data("msg.el", null))
				}).unbind(e.errorInputEvent || "");
				return f
			},
			destroy: function () {
				d.unbind(e.formEvent + ".V").unbind("reset.V");
				a.unbind(e.inputEvent + ".V").unbind("change.V");
				return f.reset()
			},
			checkValidity: function (b, d) {
				b = b || a;
				b = b.not(":disabled");
				if (!b.length) return ! 0;
				d = d || c.Event();
				d.type = "onBeforeValidate";
				i.trigger(d, [b]);
				if (d.isDefaultPrevented()) return d.result;
				var m = [];
				b.not(":radio:not(:checked)").each(function () {
					var a = [],
					b = c(this).data("messages", a),
					k = g && b.is(":date") ? "onHide.v": e.errorInputEvent + ".v";
					b.unbind(k);
					c.each(j, function () {
						var g = this[0];
						if (b.filter(g).length) {
							var k = this[1].call(f, b, b.val());
							if (!0 !== k) {
								d.type = "onBeforeFail";
								i.trigger(d, [b, g]);
								if (d.isDefaultPrevented()) return ! 1;
								var j = b.attr(e.messageAttr);
								if (j) return a = [j],
								!1;
								j = a;
								if (e.grouped || !j.length) {
									var m; ! 1 === k || c.isArray(k) ? (m = h.messages[g.key || g] || h.messages["*"], m = m[e.lang] || h.messages["*"].en, (g = m.match(/\$\d/g)) && c.isArray(k) && c.each(g, function (a) {
										m = m.replace(this, k[a])
									})) : m = k[e.lang] || k;
									j.push(m)
								}
							}
						}
					});
					a.length && (m.push({
						input: b,
						messages: a
					}), b.trigger("OI", [a]), e.errorInputEvent && b.bind(k, function (a) {
						f.checkValidity(b, a)
					}));
					if (e.singleError && m.length) return ! 1
				});
				var s = l[e.effect];
				if (!s) throw 'Validator: cannot find effect "' + e.effect + '"';
				if (m.length) return f.invalidate(m, d),
				!1;
				s[1].call(f, b, d);
				d.type = "onSuccess";
				i.trigger(d, [b]);
				b.unbind(e.errorInputEvent + ".v");
				return ! 0
			}
		});
		c.each(["onBeforeValidate", "onBeforeFail", "onFail", "onSuccess"], function (a, b) {
			c.isFunction(e[b]) && c(f).bind(b, e[b]);
			f[b] = function (a) {
				a && c(f).bind(b, a);
				return f
			}
		});
		e.formEvent && d.bind(e.formEvent + ".V", function (a) {
			if (!f.checkValidity(null, a)) return a.preventDefault();
			a.target = d;
			a.type = e.formEvent
		});
		d.bind("reset.V", function () {
			f.reset()
		});
		a[0] && a[0].validity && a.each(function () {
			this.oninvalid = function () {
				return ! 1
			}
		});
		d[0] && (d[0].checkValidity = f.checkValidity);
		e.inputEvent && a.bind(e.inputEvent + ".V", function (a) {
			f.checkValidity(c(this), a)
		});
		a.filter(":checkbox, select").filter("[required]").bind("change.V", function (a) {
			var b = c(this);
			(this.checked || b.is("select") && c(this).val()) && l[e.effect][1].call(f, b, a)
		});
		var s = a.filter(":radio").change(function (a) {
			f.checkValidity(s, a)
		});
		c(window).resize(function () {
			f.reflow()
		})
	}
	c.tools = c.tools || {
		version: "v1.2.6"
	};
	var d = /\[type=([a-z]+)\]/,
	a = /^-?[0-9]*(\.[0-9]+)?$/,
	g = c.tools.dateinput,
	e = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
	i = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,
	h;
	h = c.tools.validator = {
		conf: {
			grouped: !1,
			effect: "default",
			errorClass: "invalid",
			inputEvent: null,
			errorInputEvent: "keyup",
			formEvent: "submit",
			lang: "en",
			message: "<div/>",
			messageAttr: "data-message",
			messageClass: "error",
			offset: [0, 0],
			position: "center right",
			singleError: !1,
			speed: "normal"
		},
		messages: {
			"*": {
				en: "Please correct this value"
			}
		},
		localize: function (a, b) {
			c.each(b, function (b, c) {
				h.messages[b] = h.messages[b] || {};
				h.messages[b][a] = c
			})
		},
		localizeFn: function (a, b) {
			h.messages[a] = h.messages[a] || {};
			c.extend(h.messages[a], b)
		},
		fn: function (a, b, e) {
			c.isFunction(b) ? e = b: ("string" == typeof b && (b = {
				en: b
			}), this.messages[a.key || a] = b);
			if (b = d.exec(a)) {
				var f = b[1],
				a = function () {
					return this.getAttribute("type") == f
				};
				a.key = "[type=" + f + "]"
			}
			j.push([a, e])
		},
		addEffect: function (a, b, c) {
			l[a] = [b, c]
		}
	};
	var j = [],
	l = {
		"default": [function (a) {
			var d = this.getConf();
			c.each(a, function (a, e) {
				var f = e.input;
				f.addClass(d.errorClass);
				var g = f.data("msg.el");
				g || (g = c(d.message).addClass(d.messageClass).appendTo(document.body), f.data("msg.el", g));
				g.css({
					visibility: "hidden"
				}).find("p").remove();
				c.each(e.messages, function (a, b) {
					c("<p/>").html(b).appendTo(g)
				});
				g.outerWidth() == g.parent().width() && g.add(g.find("p")).css({
					display: "inline"
				});
				f = b(f, g, d);
				g.css({
					visibility: "visible",
					position: "absolute",
					top: f.top,
					left: f.left
				}).fadeIn(d.speed)
			})
		},
		function (a) {
			var b = this.getConf();
			a.removeClass(b.errorClass).each(function () {
				var a = c(this).data("msg.el");
				a && a.css({
					visibility: "hidden"
				})
			})
		}]
	};
	c.each(["email", "url", "number"], function (a, b) {
		c.expr[":"][b] = function (a) {
			return a.getAttribute("type") === b
		}
	});
	c.fn.oninvalid = function (a) {
		return this[a ? "bind": "trigger"]("OI", a)
	};
	h.fn(":email", "Please enter a valid email address", function (a, b) {
		return ! b || e.test(b)
	});
	h.fn(":url", "Please enter a valid URL", function (a, b) {
		return ! b || i.test(b)
	});
	h.fn(":number", "Please enter a numeric value.", function (b, c) {
		return a.test(c)
	});
	h.fn("[max]", "Please enter a value no larger than $1", function (a, b) {
		if ("" === b || g && a.is(":date")) return ! 0;
		var c = a.attr("max");
		return parseFloat(b) <= parseFloat(c) ? !0 : [c]
	});
	h.fn("[min]", "Please enter a value of at least $1", function (a, b) {
		if ("" === b || g && a.is(":date")) return ! 0;
		var c = a.attr("min");
		return parseFloat(b) >= parseFloat(c) ? !0 : [c]
	});
	h.fn("[required]", "Please complete this mandatory field.", function (a, b) {
		return a.is(":checkbox") ? a.is(":checked") : b
	});
	h.fn("[pattern]", function (a) {
		return RegExp("^" + a.attr("pattern") + "$").test(a.val())
	});
	c.fn.validator = function (a) {
		var b = this.data("validator");
		b && (b.destroy(), this.removeData("validator"));
		a = c.extend(!0, {},
		h.conf, a);
		if (this.is("form")) return this.each(function () {
			var d = c(this);
			b = new f(d.find(":input"), d, a);
			d.data("validator", b)
		});
		b = new f(this, this.eq(0).closest("form"), a);
		return this.data("validator", b)
	}
})(jQuery);
(function (c) {
	function b(b) {
		var a;
		return b && b.constructor == Array && 3 == b.length ? b: (a = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) ? [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])] : (a = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) ? [2.55 * parseFloat(a[1]), 2.55 * parseFloat(a[2]), 2.55 * parseFloat(a[3])] : (a = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : (a = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) ? [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)] : f[c.trim(b).toLowerCase()]
	}
	c.each("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "), function (d, a) {
		c.fx.step[a] = function (d) {
			if (d.state == 0) {
				var e;
				e = d.elem;
				var f = a,
				h;
				do {
					h = c.curCSS(e, f);
					if (h != "" && h != "transparent" || c.nodeName(e, "body")) break;
					f = "backgroundColor"
				} while (e = e.parentNode);
				e = b(h);
				d.start = e;
				d.end = b(d.end)
			}
			d.start && (d.elem.style[a] = "rgb(" + [Math.max(Math.min(parseInt(d.pos * (d.end[0] - d.start[0]) + d.start[0]), 255), 0), Math.max(Math.min(parseInt(d.pos * (d.end[1] - d.start[1]) + d.start[1]), 255), 0), Math.max(Math.min(parseInt(d.pos * (d.end[2] - d.start[2]) + d.start[2]), 255), 0)].join() + ")")
		}
	});
	var f = {
		aqua: [0, 255, 255],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		black: [0, 0, 0],
		blue: [0, 0, 255],
		brown: [165, 42, 42],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgrey: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkviolet: [148, 0, 211],
		fuchsia: [255, 0, 255],
		gold: [255, 215, 0],
		green: [0, 128, 0],
		indigo: [75, 0, 130],
		khaki: [240, 230, 140],
		lightblue: [173, 216, 230],
		lightcyan: [224, 255, 255],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		navy: [0, 0, 128],
		olive: [128, 128, 0],
		orange: [255, 165, 0],
		pink: [255, 192, 203],
		purple: [128, 0, 128],
		violet: [128, 0, 128],
		red: [255, 0, 0],
		silver: [192, 192, 192],
		white: [255, 255, 255],
		yellow: [255, 255, 0]
	}
})(jQuery);
(function (c) {
	c.fn.lavaLamp = function (b) {
		b = c.extend({
			fx: "linear",
			speed: 500,
			click: function () {}
		},
		b || {});
		return this.each(function (f) {
			function d(a) {
				i.css({
					left: a.offsetLeft + "px",
					width: a.offsetWidth + "px"
				});
				h = a
			}
			function a(a) {
				i.each(function () {
					c.dequeue(this, "fx")
				}).animate({
					width: a.offsetWidth,
					left: a.offsetLeft
				},
				b.speed, b.fx)
			}
			var g = c(this),
			e = function () {},
			i = c('<li class="back"><div class="left"></div></li>').appendTo(g),
			g = c(">li", this),
			h = c("li.current", this)[0] || c(g[0]).addClass("current")[0];
			g.not(".back").hover(function () {
				a(this)
			},
			e);
			c(this).hover(e, function () {
				a(h)
			});
			g.click(function (a) {
				d(this);
				return b.click.apply(this, [a, this])
			});
			d(h);
			0 == f && c(window).resize(function () {
				i.css({
					width: h.offsetWidth,
					left: h.offsetLeft
				})
			})
		})
	}
})(jQuery);
jQuery(function () {
	var c = jQuery;
	c.fn.retarder = function (b, c) {
		var d = this;
		d.length && (d[0]._timer_ && clearTimeout(d[0]._timer_), d[0]._timer_ = setTimeout(function () {
			c(d)
		},
		b));
		return this
	};
	c("#menu").addClass("js-active");
	c("ul div", "#menu").css("visibility", "hidden");
	c(".menu>li", "#menu").hover(function () {
		var b = c("div:first", this);
		b.length && (b[0].hei || (b[0].hei = b.height()), b.css({
			height: 20,
			overflow: "hidden"
		}).retarder(400, function (c) {
			c.css("visibility", "visible").animate({
				height: b[0].hei
			},
			{
				duration: 500,
				complete: function () {
					b.css("overflow", "visible")
				}
			})
		}))
	},
	function () {
		var b = c("div:first", this);
		if (b.length) {
			var f = {
				visibility: "hidden",
				height: b[0].hei
			};
			b.stop().retarder(1, function (b) {
				b.css(f)
			})
		}
	});
	c("ul ul li", "#menu").hover(function () {
		var b = c("div:first", this);
		b.length && (b[0].hei || (b[0].hei = b.height()), b.css({
			height: 0,
			overflow: "hidden"
		}).retarder(100, function (c) {
			c.css("visibility", "visible").animate({
				height: b[0].hei
			},
			{
				duration: 500,
				complete: function () {
					b.css("overflow", "visible")
				}
			})
		}))
	},
	function () {
		var b = c("div:first", this);
		if (b.length) {
			var f = {
				visibility: "hidden",
				height: b[0].hei
			};
			b.stop().retarder(1, function (b) {
				b.css(f)
			})
		}
	});
	c(".menu>li>a, .menu>li>a span", "#menu").css({
		background: "none"
	});
	c("#menu ul.menu").lavaLamp({
		speed: 300
	});
	c.browser.msie && "6" == c.browser.version.substr(0, 1) ? c("ul a span", "#menu").css({
		color: "rgb(255,255,255)"
	}).hover(function () {
		c(this).animate({
			color: "rgb(249,203,72)"
		})
	},
	function () {
		c(this).animate({
			color: "rgb(255,255,255)"
		})
	}) : c("ul a span", "#menu").css({
		color: "rgb(255,255,255)"
	}).hover(function () {
		c(this).animate({
			color: "rgb(249,203,72)"
		},
		500)
	},
	function () {
		c(this).animate({
			color: "rgb(255,255,255)"
		},
		200)
	})
});
(function (c) {
	c.fn.UItoTop = function (b) {
		var f = c.extend({
			text: "To Top",
			min: 200,
			inDelay: 600,
			outDelay: 400,
			containerID: "toTop",
			containerHoverID: "toTopHover",
			scrollSpeed: 1E3,
			easingType: "linear"
		},
		b),
		d = "#" + f.containerID,
		a = "#" + f.containerHoverID;
		c("body").append('<a href="#" title="Back to top" id="' + f.containerID + '">' + f.text + "</a>");
		c(d).hide().click(function () {
			c("html, body").animate({
				scrollTop: 0
			},
			f.scrollSpeed, f.easingType);
			c("#" + f.containerHoverID, this).stop().animate({
				opacity: 0
			},
			f.inDelay, f.easingType);
			return ! 1
		}).prepend('<span id="' + f.containerHoverID + '"></span>').hover(function () {
			c(a, this).stop().animate({
				opacity: 1
			},
			600, "linear")
		},
		function () {
			c(a, this).stop().animate({
				opacity: 0
			},
			700, "linear")
		});
		c(window).scroll(function () {
			var a = c(window).scrollTop();
			"undefined" === typeof document.body.style.maxHeight && c(d).css({
				position: "absolute",
				top: c(window).scrollTop() + c(window).height() - 50
			});
			a > f.min ? c(d).fadeIn(f.inDelay) : c(d).fadeOut(f.Outdelay)
		})
	}
})(jQuery);