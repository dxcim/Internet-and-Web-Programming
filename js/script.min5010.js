function isTouchDevice() {
    return "ontouchstart"in window || "onmsgesturechange"in window
}


function mainMenu() {
    var t = $(".main-menu")
      , e = $(".hamburger")
      , i = $(".main-menu-close")
      , s = $(".content-wrap")
      , o = $("body")
      , r = $(".main-menu .main-menu-wrap a");
    t.velocity("stop").velocity({
        "translateY": "-120%"
    }, {
        "duration": 0,
        "delay": 0
    }),
    r.on("click", function(i) {
        return $(this).attr("href") !== document.location.href ? (t.velocity("stop").velocity({
            "translateY": "-120%"
        }, {
            "duration": 0,
            "delay": 0,
            "display": "none"
        }),
        !1) : (o.removeClass("menu-open"),
        o.removeClass("disable-close"),
        e.velocity("stop").velocity({
            "translateY": "0%"
        }, {
            "duration": 450,
            "easing": bezBounce
        }),
        t.velocity("stop").velocity({
            "translateY": "-120%"
        }, {
            "duration": 450,
            "delay": 0,
            "easing": bezSwing,
            "display": "none"
        }),
        s.velocity("stop").velocity({
            "translateY": "0%"
        }, {
            "duration": 650,
            "delay": 0,
            "easing": bezSwing
        }),
        !1)
    }),
    e.on("click", function(i) {
        $("html").velocity("scroll", {
            "duration": 0,
            "mobileHA": !0
        }),
        i.preventDefault(),
        $(".client-image-cursor").removeClass("visible"),
        e.velocity({
            "translateY": "-150%"
        }, {
            "duration": 350,
            "delay": 200,
            "easing": bezBounce
        }),
        o.addClass("menu-open"),
        o.addClass("disable-close"),
        t.velocity({
            "translateY": "0%"
        }, {
            "duration": 650,
            "delay": 350,
            "display": "block",
            "easing": bezSwing,
            "complete": function() {
                o.removeClass("disable-close")
            }
        }),
        s.velocity({
            "translateY": "100%"
        }, {
            "duration": 650,
            "delay": 350,
            "easing": bezSwing
        })
    });
    $(".main-menu-wrap ul li").each(function() {
        var t = $(this).find("a")
          , e = $(".main-menu-image-holder")
          , i = $(".main-menu-image-holder img");
        t.mouseenter(function(t) {
            $imageURL = $(this).attr("data-image-hover"),
            i.attr("src", $imageURL),
            e.addClass("visible")
        }).mouseleave(function() {
            i.attr("src", "#"),
            e.removeClass("visible")
        })
    }),
    i.on("click", function(i) {
        i.preventDefault(),
        o.removeClass("menu-open"),
        o.removeClass("disable-close"),
        e.velocity("stop").velocity({
            "translateY": "0%"
        }, {
            "duration": 450,
            "easing": bezBounce
        }),
        t.velocity("stop").velocity({
            "translateY": "-120%"
        }, {
            "duration": 450,
            "delay": 0,
            "easing": bezSwing,
            "display": "none"
        }),
        s.velocity("stop").velocity({
            "translateY": "0%"
        }, {
            "duration": 650,
            "delay": 0,
            "easing": bezSwing
        })
    })
}
function sliders() {
    var t = "<div class='next-arrow'></div>"
      , e = "<div class='prev-arrow'></div>"
      , i = $(".slider-gallery")
      , s = $(".slider-showroom")
      , o = $(".slider-press")
      , r = $(".slider-press-mobile");
    $(".project-caption").velocity({
        "opacity": 0
    }, {
        "duration": 0,
        "delay": 0
    }),
    $(".slider-gallery").length > 0 && i.on("init", function(t, e) {
        $(this).addClass("slider-loaded")
    }).slick({
        "appendArrows": ".slick-arrows",
        "nextArrow": t,
        "prevArrow": e,
        "infinite": !0,
        "accessibility": !1,
        "draggable": !1,
        "slidesToScroll": 1,
        "variableWidth": !0,
        "responsive": [{
            "breakpoint": 767,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "infinite": !0,
                "dots": !1,
                "variableWidth": !0
            }
        }]
    }),
    $(".slider-showroom").length > 0 && s.on("init", function(t, e) {
        $(this).addClass("slider-loaded")
    }).slick({
        "appendArrows": ".slick-arrows",
        "nextArrow": t,
        "prevArrow": e,
        "infinite": !0,
        "accessibility": !1,
        "draggable": !1,
        "slidesToShow": 1,
        "variableWidth": !0
    }),
    $(".slider-press").length > 0 && (!0 === isMobile ? r.on("init", function(t, e) {
        $(this).addClass("slider-loaded")
    }).slick({
        "infinite": !1,
        "nextArrow": t,
        "prevArrow": e,
        "accessibility": !1,
        "draggable": !1,
        "dots": !1,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "variableWidth": !1
    }) : o.on("init", function(t, e) {
        $(this).addClass("slider-loaded")
    }).slick({
        "appendArrows": ".slick-arrows-press",
        "nextArrow": t,
        "prevArrow": e,
        "infinite": !1,
        "accessibility": !1,
        "draggable": !1,
        "dots": !1,
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "variableWidth": !1
    }))
}
function preloader() {
    $("html").velocity("scroll", {
        "offset": 0,
        "duration": 0,
        "mobileHA": !1
    }),
    $(".content-wrap").velocity({
        "translateY": "100%"
    }, {
        "duration": 0
    });
    var t = $(".preloader")
      , e = $(".content-wrap");
    $(".main-header").velocity({
        "opacity": "1"
    }, {
        "duration": 250,
        "delay": 0,
        "complete": function() {
            t.velocity({
                "translateY": "-100%"
            }, {
                "duration": 450,
                "delay": 450,
                "display": "none",
                "easing": bezSwing
            }),
            e.velocity({
                "translateY": "0%"
            }, {
                "duration": 450,
                "delay": 450,
                "easing": bezSwing,
                "complete": function() {
                    $(".content-wrap").hide().show(0)
                }
            })
        }
    })
}
function clientHover() {
    $(".clients-list .client").each(function() {
        var t = $(this)
          , e = $(this).attr("data-image");
        !0 === isMobile ? (t.removeAttr("href"),
        t.on("click", function(t) {
            t.preventDefault(),
            null === e ? ($(".client-image-cursor img").attr("src", "#"),
            $(".client-image-cursor").removeClass("visible")) : ($(".client-image-cursor img").attr("src", e),
            $(".client-image-cursor").addClass("visible"))
        })) : t.on({
            "mouseenter": function() {
                null === e ? ($(".client-image-cursor img").attr("src", "#"),
                $(".client-image-cursor").removeClass("visible")) : ($(".client-image-cursor img").attr("src", e),
                $(".client-image-cursor").addClass("visible"))
            },
            "mouseleave": function() {
                $(".client-image-cursor img").attr("src", "#"),
                $(".client-image-cursor").removeClass("visible")
            }
        })
    })
}
function domScripts() {
    mainMenu(),
    sliders(),
    backgroundColor();
    var t = $(".hamburger");
    $(".projects-grid").length > 0 ? t.addClass("white") : $(".slider-showroom").length > 0 ? t.addClass("white") : t.removeClass("white"),
    $(".clients-list").length > 0 && clientHover();
    $(".home-video-play").each(function() {
        var t = $(this);
        t.length > 0 && t.get(0).play()
    }),
    $(".client-image-cursor").removeClass("visible"),
    $(".hero-video").fitVids(),
    !0 === isMobile || ($(".main-menu nav ul a").each(function() {
        $("<img/>", {
            "src": $(this).data("image-hover"),
            "class": "precachedImg",
            "style": "display:none;"
        }).appendTo(".image-cache")
    }),
    $(".clients-list .client").each(function() {
        $("<img/>", {
            "src": $(this).data("image"),
            "class": "precachedImg",
            "style": "display:none;"
        }).appendTo(".image-cache")
    }))
}
function init() {
    preloader(),
    mainMenu(),
    sliders(),
    backgroundColor();
    var t = $(".hamburger");
    $(".hamburger-white").length > 0 ? t.addClass("white") : t.removeClass("white"),
    clientHover();
    $(".home-video-play").each(function() {
        var t = $(this);
        t.length > 0 && t.get(0).play()
    }),
    !0 === isMobile || ($(".main-menu nav ul a").each(function() {
        $("<img/>", {
            "src": $(this).data("image-hover"),
            "class": "precachedImg",
            "style": "display:none;"
        }).appendTo(".image-cache")
    }),
    $(".clients-list .client").each(function() {
        $("<img/>", {
            "src": $(this).data("image"),
            "class": "precachedImg",
            "style": "display:none;"
        }).appendTo(".image-cache")
    }))
}
!function(t) {
    "use strict";
    function e(t) {
        var e = t.length
          , s = i.type(t);
        return "function" !== s && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === s || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    if (!t.jQuery) {
        var i = function(t, e) {
            return new i.fn.init(t,e)
        };
        i.isWindow = function(t) {
            return t && t === t.window
        }
        ,
        i.type = function(t) {
            return t ? "object" == typeof t || "function" == typeof t ? o[n.call(t)] || "object" : typeof t : t + ""
        }
        ,
        i.isArray = Array.isArray || function(t) {
            return "array" === i.type(t)
        }
        ,
        i.isPlainObject = function(t) {
            var e;
            if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t))
                return !1;
            try {
                if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            for (e in t)
                ;
            return void 0 === e || r.call(t, e)
        }
        ,
        i.each = function(t, i, s) {
            var o = 0
              , r = t.length
              , n = e(t);
            if (s) {
                if (n)
                    for (; o < r && !1 !== i.apply(t[o], s); o++)
                        ;
                else
                    for (o in t)
                        if (t.hasOwnProperty(o) && !1 === i.apply(t[o], s))
                            break
            } else if (n)
                for (; o < r && !1 !== i.call(t[o], o, t[o]); o++)
                    ;
            else
                for (o in t)
                    if (t.hasOwnProperty(o) && !1 === i.call(t[o], o, t[o]))
                        break;
            return t
        }
        ,
        i.data = function(t, e, o) {
            if (void 0 === o) {
                var r = t[i.expando]
                  , n = r && s[r];
                if (void 0 === e)
                    return n;
                if (n && e in n)
                    return n[e]
            } else if (void 0 !== e) {
                var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                return s[a] = s[a] || {},
                s[a][e] = o,
                o
            }
        }
        ,
        i.removeData = function(t, e) {
            var o = t[i.expando]
              , r = o && s[o];
            r && (e ? i.each(e, function(t, e) {
                delete r[e]
            }) : delete s[o])
        }
        ,
        i.extend = function() {
            var t, e, s, o, r, n, a = arguments[0] || {}, l = 1, d = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a,
            a = arguments[l] || {},
            l++),
            "object" != typeof a && "function" !== i.type(a) && (a = {}),
            l === d && (a = this,
            l--); l < d; l++)
                if (r = arguments[l])
                    for (o in r)
                        r.hasOwnProperty(o) && (t = a[o],
                        s = r[o],
                        a !== s && (c && s && (i.isPlainObject(s) || (e = i.isArray(s))) ? (e ? (e = !1,
                        n = t && i.isArray(t) ? t : []) : n = t && i.isPlainObject(t) ? t : {},
                        a[o] = i.extend(c, n, s)) : void 0 !== s && (a[o] = s)));
            return a
        }
        ,
        i.queue = function(t, s, o) {
            if (t) {
                s = (s || "fx") + "queue";
                var r = i.data(t, s);
                return o ? (!r || i.isArray(o) ? r = i.data(t, s, function(t, i) {
                    var s = [];
                    return t && (e(Object(t)) ? function(t, e) {
                        for (var i = +e.length, s = 0, o = t.length; s < i; )
                            t[o++] = e[s++];
                        if (i != i)
                            for (; void 0 !== e[s]; )
                                t[o++] = e[s++];
                        t.length = o
                    }(s, "string" == typeof t ? [t] : t) : [].push.call(s, t)),
                    s
                }(o)) : r.push(o),
                r) : r || []
            }
        }
        ,
        i.dequeue = function(t, e) {
            i.each(t.nodeType ? [t] : t, function(t, s) {
                e = e || "fx";
                var o = i.queue(s, e)
                  , r = o.shift();
                "inprogress" === r && (r = o.shift()),
                r && ("fx" === e && o.unshift("inprogress"),
                r.call(s, function() {
                    i.dequeue(s, e)
                }))
            })
        }
        ,
        i.fn = i.prototype = {
            "init": function(t) {
                if (t.nodeType)
                    return this[0] = t,
                    this;
                throw new Error("Not a DOM node.")
            },
            "offset": function() {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    "top": 0,
                    "left": 0
                };
                return {
                    "top": e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    "left": e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            "position": function() {
                var t = this[0]
                  , e = function(e) {
                    for (var i = t.offsetParent; i && "html" !== i.nodeName.toLowerCase() && i.style && "static" === i.style.position.toLowerCase(); )
                        i = i.offsetParent;
                    return i || document
                }()
                  , s = this.offset()
                  , o = /^(?:body|html)$/i.test(e.nodeName) ? {
                    "top": 0,
                    "left": 0
                } : i(e).offset();
                return s.top -= parseFloat(t.style.marginTop) || 0,
                s.left -= parseFloat(t.style.marginLeft) || 0,
                e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0,
                o.left += parseFloat(e.style.borderLeftWidth) || 0),
                {
                    "top": s.top - o.top,
                    "left": s.left - o.left
                }
            }
        };
        var s = {};
        i.expando = "velocity" + (new Date).getTime(),
        i.uuid = 0;
        for (var o = {}, r = o.hasOwnProperty, n = o.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++)
            o["[object " + a[l] + "]"] = a[l].toLowerCase();
        i.fn.init.prototype = i.fn,
        t.Velocity = {
            "Utilities": i
        }
    }
}(window),
function(t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}(function() {
    "use strict";
    return function(t, e, i, s) {
        function o(t) {
            return m.isWrapped(t) ? t = y.call(t) : m.isNode(t) && (t = [t]),
            t
        }
        function r(t) {
            var e = u.data(t, "velocity");
            return null === e ? s : e
        }
        function n(t, e) {
            var i = r(t);
            i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - e + i.delayBegin,
            i.delayPaused = !0,
            clearTimeout(i.delayTimer.setTimeout))
        }
        function a(t, e) {
            var i = r(t);
            i && i.delayTimer && i.delayPaused && (i.delayPaused = !1,
            i.delayTimer.setTimeout = setTimeout(i.delayTimer.next, i.delayRemaining))
        }
        function l(t, i, s, o) {
            function r(t, e) {
                return 1 - 3 * e + 3 * t
            }
            function n(t, e) {
                return 3 * e - 6 * t
            }
            function a(t) {
                return 3 * t
            }
            function l(t, e, i) {
                return ((r(e, i) * t + n(e, i)) * t + a(e)) * t
            }
            function d(t, e, i) {
                return 3 * r(e, i) * t * t + 2 * n(e, i) * t + a(e)
            }
            function c(e) {
                for (var i = 0, o = 1, r = y - 1; o !== r && b[o] <= e; ++o)
                    i += v;
                var n = i + (e - b[--o]) / (b[o + 1] - b[o]) * v
                  , a = d(n, t, s);
                return a >= p ? function(e, i) {
                    for (var o = 0; o < u; ++o) {
                        var r = d(i, t, s);
                        if (0 === r)
                            return i;
                        i -= (l(i, t, s) - e) / r
                    }
                    return i
                }(e, n) : 0 === a ? n : function(e, i, o) {
                    var r, n, a = 0;
                    do {
                        (r = l(n = i + (o - i) / 2, t, s) - e) > 0 ? o = n : i = n
                    } while (Math.abs(r) > f && ++a < g);return n
                }(e, i, i + v)
            }
            function h() {
                w = !0,
                t === i && s === o || function() {
                    for (var e = 0; e < y; ++e)
                        b[e] = l(e * v, t, s)
                }()
            }
            var u = 4
              , p = .001
              , f = 1e-7
              , g = 10
              , y = 11
              , v = 1 / (y - 1)
              , m = "Float32Array"in e;
            if (4 !== arguments.length)
                return !1;
            for (var S = 0; S < 4; ++S)
                if ("number" != typeof arguments[S] || isNaN(arguments[S]) || !isFinite(arguments[S]))
                    return !1;
            t = Math.min(t, 1),
            s = Math.min(s, 1),
            t = Math.max(t, 0),
            s = Math.max(s, 0);
            var b = m ? new Float32Array(y) : new Array(y)
              , w = !1
              , k = function(e) {
                return w || h(),
                t === i && s === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(c(e), i, o)
            };
            k.getControlPoints = function() {
                return [{
                    "x": t,
                    "y": i
                }, {
                    "x": s,
                    "y": o
                }]
            }
            ;
            var T = "generateBezier(" + [t, i, s, o] + ")";
            return k.toString = function() {
                return T
            }
            ,
            k
        }
        function d(t, e) {
            var i = t;
            return m.isString(t) ? k.Easings[t] || (i = !1) : i = m.isArray(t) && 1 === t.length ? function(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }
            .apply(null, t) : m.isArray(t) && 2 === t.length ? T.apply(null, t.concat([e])) : !(!m.isArray(t) || 4 !== t.length) && l.apply(null, t),
            !1 === i && (i = k.Easings[k.defaults.easing] ? k.defaults.easing : w),
            i
        }
        function c(t) {
            if (t) {
                var e = k.timestamp && !0 !== t ? t : g.now()
                  , i = k.State.calls.length;
                i > 1e4 && (k.State.calls = function(t) {
                    for (var e = -1, i = t ? t.length : 0, s = []; ++e < i; ) {
                        var o = t[e];
                        o && s.push(o)
                    }
                    return s
                }(k.State.calls),
                i = k.State.calls.length);
                for (var o = 0; o < i; o++)
                    if (k.State.calls[o]) {
                        var n = k.State.calls[o]
                          , a = n[0]
                          , l = n[2]
                          , d = n[3]
                          , f = !d
                          , y = null
                          , v = n[5]
                          , S = n[6];
                        if (d || (d = k.State.calls[o][3] = e - 16),
                        v) {
                            if (!0 !== v.resume)
                                continue;
                            d = n[3] = Math.round(e - S - 16),
                            n[5] = null
                        }
                        S = n[6] = e - d;
                        for (var b = Math.min(S / l.duration, 1), w = 0, T = a.length; w < T; w++) {
                            var C = a[w]
                              , P = C.element;
                            if (r(P)) {
                                var A = !1;
                                if (l.display !== s && null !== l.display && "none" !== l.display) {
                                    if ("flex" === l.display) {
                                        u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(t, e) {
                                            x.setPropertyValue(P, "display", e)
                                        })
                                    }
                                    x.setPropertyValue(P, "display", l.display)
                                }
                                l.visibility !== s && "hidden" !== l.visibility && x.setPropertyValue(P, "visibility", l.visibility);
                                for (var H in C)
                                    if (C.hasOwnProperty(H) && "element" !== H) {
                                        var I, O = C[H], j = m.isString(O.easing) ? k.Easings[O.easing] : O.easing;
                                        if (m.isString(O.pattern)) {
                                            var E = 1 === b ? function(t, e, i) {
                                                var s = O.endValue[e];
                                                return i ? Math.round(s) : s
                                            }
                                            : function(t, e, i) {
                                                var s = O.startValue[e]
                                                  , o = O.endValue[e] - s
                                                  , r = s + o * j(b, l, o);
                                                return i ? Math.round(r) : r
                                            }
                                            ;
                                            I = O.pattern.replace(/{(\d+)(!)?}/g, E)
                                        } else if (1 === b)
                                            I = O.endValue;
                                        else {
                                            var z = O.endValue - O.startValue;
                                            I = O.startValue + z * j(b, l, z)
                                        }
                                        if (!f && I === O.currentValue)
                                            continue;
                                        if (O.currentValue = I,
                                        "tween" === H)
                                            y = I;
                                        else {
                                            var V;
                                            if (x.Hooks.registered[H]) {
                                                V = x.Hooks.getRoot(H);
                                                var L = r(P).rootPropertyValueCache[V];
                                                L && (O.rootPropertyValue = L)
                                            }
                                            var N = x.setPropertyValue(P, H, O.currentValue + (p < 9 && 0 === parseFloat(I) ? "" : O.unitType), O.rootPropertyValue, O.scrollData);
                                            x.Hooks.registered[H] && (x.Normalizations.registered[V] ? r(P).rootPropertyValueCache[V] = x.Normalizations.registered[V]("extract", null, N[1]) : r(P).rootPropertyValueCache[V] = N[1]),
                                            "transform" === N[0] && (A = !0)
                                        }
                                    }
                                l.mobileHA && r(P).transformCache.translate3d === s && (r(P).transformCache.translate3d = "(0px, 0px, 0px)",
                                A = !0),
                                A && x.flushTransformCache(P)
                            }
                        }
                        l.display !== s && "none" !== l.display && (k.State.calls[o][2].display = !1),
                        l.visibility !== s && "hidden" !== l.visibility && (k.State.calls[o][2].visibility = !1),
                        l.progress && l.progress.call(n[1], n[1], b, Math.max(0, d + l.duration - e), d, y),
                        1 === b && h(o)
                    }
            }
            k.State.isTicking && $(c)
        }
        function h(t, e) {
            if (!k.State.calls[t])
                return !1;
            for (var i = k.State.calls[t][0], o = k.State.calls[t][1], n = k.State.calls[t][2], a = k.State.calls[t][4], l = !1, d = 0, c = i.length; d < c; d++) {
                var h = i[d].element;
                e || n.loop || ("none" === n.display && x.setPropertyValue(h, "display", n.display),
                "hidden" === n.visibility && x.setPropertyValue(h, "visibility", n.visibility));
                var p = r(h);
                if (!0 !== n.loop && (u.queue(h)[1] === s || !/\.velocityQueueEntryFlag/i.test(u.queue(h)[1])) && p) {
                    p.isAnimating = !1,
                    p.rootPropertyValueCache = {};
                    var f = !1;
                    u.each(x.Lists.transforms3D, function(t, e) {
                        var i = /^scale/.test(e) ? 1 : 0
                          , o = p.transformCache[e];
                        p.transformCache[e] !== s && new RegExp("^\\(" + i + "[^.]").test(o) && (f = !0,
                        delete p.transformCache[e])
                    }),
                    n.mobileHA && (f = !0,
                    delete p.transformCache.translate3d),
                    f && x.flushTransformCache(h),
                    x.Values.removeClass(h, "velocity-animating")
                }
                if (!e && n.complete && !n.loop && d === c - 1)
                    try {
                        n.complete.call(o, o)
                    } catch (t) {
                        setTimeout(function() {
                            throw t
                        }, 1)
                    }
                a && !0 !== n.loop && a(o),
                p && !0 === n.loop && !e && (u.each(p.tweensContainer, function(t, e) {
                    if (/^rotate/.test(t) && (parseFloat(e.startValue) - parseFloat(e.endValue)) % 360 == 0) {
                        var i = e.startValue;
                        e.startValue = e.endValue,
                        e.endValue = i
                    }
                    /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0,
                    e.startValue = 100)
                }),
                k(h, "reverse", {
                    "loop": !0,
                    "delay": n.delay
                })),
                !1 !== n.queue && u.dequeue(h, n.queue)
            }
            k.State.calls[t] = !1;
            for (var g = 0, y = k.State.calls.length; g < y; g++)
                if (!1 !== k.State.calls[g]) {
                    l = !0;
                    break
                }
            !1 === l && (k.State.isTicking = !1,
            delete k.State.calls,
            k.State.calls = [])
        }
        var u, p = function() {
            if (i.documentMode)
                return i.documentMode;
            for (var t = 7; t > 4; t--) {
                var e = i.createElement("div");
                if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e",
                e.getElementsByTagName("span").length)
                    return e = null,
                    t
            }
            return s
        }(), f = function() {
            var t = 0;
            return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                var i, s = (new Date).getTime();
                return i = Math.max(0, 16 - (s - t)),
                t = s + i,
                setTimeout(function() {
                    e(s + i)
                }, i)
            }
        }(), g = function() {
            var t = e.performance || {};
            if ("function" != typeof t.now) {
                var i = t.timing && t.timing.navigationStart ? t.timing.navigationStart : (new Date).getTime();
                t.now = function() {
                    return (new Date).getTime() - i
                }
            }
            return t
        }(), y = function() {
            var t = Array.prototype.slice;
            try {
                return t.call(i.documentElement),
                t
            } catch (e) {
                return function(e, i) {
                    var s = this.length;
                    if ("number" != typeof e && (e = 0),
                    "number" != typeof i && (i = s),
                    this.slice)
                        return t.call(this, e, i);
                    var o, r = [], n = e >= 0 ? e : Math.max(0, s + e), a = (i < 0 ? s + i : Math.min(i, s)) - n;
                    if (a > 0)
                        if (r = new Array(a),
                        this.charAt)
                            for (o = 0; o < a; o++)
                                r[o] = this.charAt(n + o);
                        else
                            for (o = 0; o < a; o++)
                                r[o] = this[n + o];
                    return r
                }
            }
        }(), v = function() {
            return Array.prototype.includes ? function(t, e) {
                return t.includes(e)
            }
            : Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e) >= 0
            }
            : function(t, e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e)
                        return !0;
                return !1
            }
        }, m = {
            "isNumber": function(t) {
                return "number" == typeof t
            },
            "isString": function(t) {
                return "string" == typeof t
            },
            "isArray": Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            ,
            "isFunction": function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            },
            "isNode": function(t) {
                return t && t.nodeType
            },
            "isWrapped": function(t) {
                return t && t !== e && m.isNumber(t.length) && !m.isString(t) && !m.isFunction(t) && !m.isNode(t) && (0 === t.length || m.isNode(t[0]))
            },
            "isSVG": function(t) {
                return e.SVGElement && t instanceof e.SVGElement
            },
            "isEmptyObject": function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e))
                        return !1;
                return !0
            }
        }, S = !1;
        if (t.fn && t.fn.jquery ? (u = t,
        S = !0) : u = e.Velocity.Utilities,
        p <= 8 && !S)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        {
            if (!(p <= 7)) {
                var b = 400
                  , w = "swing"
                  , k = {
                    "State": {
                        "isMobile": /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e.navigator.userAgent),
                        "isAndroid": /Android/i.test(e.navigator.userAgent),
                        "isGingerbread": /Android 2\.3\.[3-7]/i.test(e.navigator.userAgent),
                        "isChrome": e.chrome,
                        "isFirefox": /Firefox/i.test(e.navigator.userAgent),
                        "prefixElement": i.createElement("div"),
                        "prefixMatches": {},
                        "scrollAnchor": null,
                        "scrollPropertyLeft": null,
                        "scrollPropertyTop": null,
                        "isTicking": !1,
                        "calls": [],
                        "delayedElements": {
                            "count": 0
                        }
                    },
                    "CSS": {},
                    "Utilities": u,
                    "Redirects": {},
                    "Easings": {},
                    "Promise": e.Promise,
                    "defaults": {
                        "queue": "",
                        "duration": b,
                        "easing": w,
                        "begin": s,
                        "complete": s,
                        "progress": s,
                        "display": s,
                        "visibility": s,
                        "loop": !1,
                        "delay": !1,
                        "mobileHA": !0,
                        "_cacheValues": !0,
                        "promiseRejectEmpty": !0
                    },
                    "init": function(t) {
                        u.data(t, "velocity", {
                            "isSVG": m.isSVG(t),
                            "isAnimating": !1,
                            "computedStyle": null,
                            "tweensContainer": null,
                            "rootPropertyValueCache": {},
                            "transformCache": {}
                        })
                    },
                    "hook": null,
                    "mock": !1,
                    "version": {
                        "major": 1,
                        "minor": 5,
                        "patch": 1
                    },
                    "debug": !1,
                    "timestamp": !0,
                    "pauseAll": function(t) {
                        var e = (new Date).getTime();
                        u.each(k.State.calls, function(e, i) {
                            if (i) {
                                if (t !== s && (i[2].queue !== t || !1 === i[2].queue))
                                    return !0;
                                i[5] = {
                                    "resume": !1
                                }
                            }
                        }),
                        u.each(k.State.delayedElements, function(t, i) {
                            i && n(i, e)
                        })
                    },
                    "resumeAll": function(t) {
                        (new Date).getTime();
                        u.each(k.State.calls, function(e, i) {
                            if (i) {
                                if (t !== s && (i[2].queue !== t || !1 === i[2].queue))
                                    return !0;
                                i[5] && (i[5].resume = !0)
                            }
                        }),
                        u.each(k.State.delayedElements, function(t, e) {
                            e && a(e)
                        })
                    }
                };
                e.pageYOffset !== s ? (k.State.scrollAnchor = e,
                k.State.scrollPropertyLeft = "pageXOffset",
                k.State.scrollPropertyTop = "pageYOffset") : (k.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body,
                k.State.scrollPropertyLeft = "scrollLeft",
                k.State.scrollPropertyTop = "scrollTop");
                var T = function() {
                    function t(t) {
                        return -t.tension * t.x - t.friction * t.v
                    }
                    function e(e, i, s) {
                        var o = {
                            "x": e.x + s.dx * i,
                            "v": e.v + s.dv * i,
                            "tension": e.tension,
                            "friction": e.friction
                        };
                        return {
                            "dx": o.v,
                            "dv": t(o)
                        }
                    }
                    function i(i, s) {
                        var o = {
                            "dx": i.v,
                            "dv": t(i)
                        }
                          , r = e(i, .5 * s, o)
                          , n = e(i, .5 * s, r)
                          , a = e(i, s, n)
                          , l = 1 / 6 * (o.dx + 2 * (r.dx + n.dx) + a.dx)
                          , d = 1 / 6 * (o.dv + 2 * (r.dv + n.dv) + a.dv);
                        return i.x = i.x + l * s,
                        i.v = i.v + d * s,
                        i
                    }
                    return function t(e, s, o) {
                        var r, n, a, l = {
                            "x": -1,
                            "v": 0,
                            "tension": null,
                            "friction": null
                        }, d = [0], c = 0;
                        for (e = parseFloat(e) || 500,
                        s = parseFloat(s) || 20,
                        o = o || null,
                        l.tension = e,
                        l.friction = s,
                        (r = null !== o) ? (c = t(e, s),
                        n = c / o * .016) : n = .016; a = i(a || l, n),
                        d.push(1 + a.x),
                        c += 16,
                        Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4; )
                            ;
                        return r ? function(t) {
                            return d[t * (d.length - 1) | 0]
                        }
                        : c
                    }
                }();
                k.Easings = {
                    "linear": function(t) {
                        return t
                    },
                    "swing": function(t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    },
                    "spring": function(t) {
                        return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                    }
                },
                u.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(t, e) {
                    k.Easings[e[0]] = l.apply(null, e[1])
                });
                var x = k.CSS = {
                    "RegEx": {
                        "isHex": /^#([A-f\d]{3}){1,2}$/i,
                        "valueUnwrap": /^[A-z]+\((.*)\)$/i,
                        "wrappedValueAlreadyExtracted": /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        "valueSplit": /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    "Lists": {
                        "colors": ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        "transformsBase": ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        "transforms3D": ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                        "units": ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                        "colorNames": {
                            "aliceblue": "240,248,255",
                            "antiquewhite": "250,235,215",
                            "aquamarine": "127,255,212",
                            "aqua": "0,255,255",
                            "azure": "240,255,255",
                            "beige": "245,245,220",
                            "bisque": "255,228,196",
                            "black": "0,0,0",
                            "blanchedalmond": "255,235,205",
                            "blueviolet": "138,43,226",
                            "blue": "0,0,255",
                            "brown": "165,42,42",
                            "burlywood": "222,184,135",
                            "cadetblue": "95,158,160",
                            "chartreuse": "127,255,0",
                            "chocolate": "210,105,30",
                            "coral": "255,127,80",
                            "cornflowerblue": "100,149,237",
                            "cornsilk": "255,248,220",
                            "crimson": "220,20,60",
                            "cyan": "0,255,255",
                            "darkblue": "0,0,139",
                            "darkcyan": "0,139,139",
                            "darkgoldenrod": "184,134,11",
                            "darkgray": "169,169,169",
                            "darkgrey": "169,169,169",
                            "darkgreen": "0,100,0",
                            "darkkhaki": "189,183,107",
                            "darkmagenta": "139,0,139",
                            "darkolivegreen": "85,107,47",
                            "darkorange": "255,140,0",
                            "darkorchid": "153,50,204",
                            "darkred": "139,0,0",
                            "darksalmon": "233,150,122",
                            "darkseagreen": "143,188,143",
                            "darkslateblue": "72,61,139",
                            "darkslategray": "47,79,79",
                            "darkturquoise": "0,206,209",
                            "darkviolet": "148,0,211",
                            "deeppink": "255,20,147",
                            "deepskyblue": "0,191,255",
                            "dimgray": "105,105,105",
                            "dimgrey": "105,105,105",
                            "dodgerblue": "30,144,255",
                            "firebrick": "178,34,34",
                            "floralwhite": "255,250,240",
                            "forestgreen": "34,139,34",
                            "fuchsia": "255,0,255",
                            "gainsboro": "220,220,220",
                            "ghostwhite": "248,248,255",
                            "gold": "255,215,0",
                            "goldenrod": "218,165,32",
                            "gray": "128,128,128",
                            "grey": "128,128,128",
                            "greenyellow": "173,255,47",
                            "green": "0,128,0",
                            "honeydew": "240,255,240",
                            "hotpink": "255,105,180",
                            "indianred": "205,92,92",
                            "indigo": "75,0,130",
                            "ivory": "255,255,240",
                            "khaki": "240,230,140",
                            "lavenderblush": "255,240,245",
                            "lavender": "230,230,250",
                            "lawngreen": "124,252,0",
                            "lemonchiffon": "255,250,205",
                            "lightblue": "173,216,230",
                            "lightcoral": "240,128,128",
                            "lightcyan": "224,255,255",
                            "lightgoldenrodyellow": "250,250,210",
                            "lightgray": "211,211,211",
                            "lightgrey": "211,211,211",
                            "lightgreen": "144,238,144",
                            "lightpink": "255,182,193",
                            "lightsalmon": "255,160,122",
                            "lightseagreen": "32,178,170",
                            "lightskyblue": "135,206,250",
                            "lightslategray": "119,136,153",
                            "lightsteelblue": "176,196,222",
                            "lightyellow": "255,255,224",
                            "limegreen": "50,205,50",
                            "lime": "0,255,0",
                            "linen": "250,240,230",
                            "magenta": "255,0,255",
                            "maroon": "128,0,0",
                            "mediumaquamarine": "102,205,170",
                            "mediumblue": "0,0,205",
                            "mediumorchid": "186,85,211",
                            "mediumpurple": "147,112,219",
                            "mediumseagreen": "60,179,113",
                            "mediumslateblue": "123,104,238",
                            "mediumspringgreen": "0,250,154",
                            "mediumturquoise": "72,209,204",
                            "mediumvioletred": "199,21,133",
                            "midnightblue": "25,25,112",
                            "mintcream": "245,255,250",
                            "mistyrose": "255,228,225",
                            "moccasin": "255,228,181",
                            "navajowhite": "255,222,173",
                            "navy": "0,0,128",
                            "oldlace": "253,245,230",
                            "olivedrab": "107,142,35",
                            "olive": "128,128,0",
                            "orangered": "255,69,0",
                            "orange": "255,165,0",
                            "orchid": "218,112,214",
                            "palegoldenrod": "238,232,170",
                            "palegreen": "152,251,152",
                            "paleturquoise": "175,238,238",
                            "palevioletred": "219,112,147",
                            "papayawhip": "255,239,213",
                            "peachpuff": "255,218,185",
                            "peru": "205,133,63",
                            "pink": "255,192,203",
                            "plum": "221,160,221",
                            "powderblue": "176,224,230",
                            "purple": "128,0,128",
                            "red": "255,0,0",
                            "rosybrown": "188,143,143",
                            "royalblue": "65,105,225",
                            "saddlebrown": "139,69,19",
                            "salmon": "250,128,114",
                            "sandybrown": "244,164,96",
                            "seagreen": "46,139,87",
                            "seashell": "255,245,238",
                            "sienna": "160,82,45",
                            "silver": "192,192,192",
                            "skyblue": "135,206,235",
                            "slateblue": "106,90,205",
                            "slategray": "112,128,144",
                            "snow": "255,250,250",
                            "springgreen": "0,255,127",
                            "steelblue": "70,130,180",
                            "tan": "210,180,140",
                            "teal": "0,128,128",
                            "thistle": "216,191,216",
                            "tomato": "255,99,71",
                            "turquoise": "64,224,208",
                            "violet": "238,130,238",
                            "wheat": "245,222,179",
                            "whitesmoke": "245,245,245",
                            "white": "255,255,255",
                            "yellowgreen": "154,205,50",
                            "yellow": "255,255,0"
                        }
                    },
                    "Hooks": {
                        "templates": {
                            "textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
                            "boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            "clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            "backgroundPosition": ["X Y", "0% 0%"],
                            "transformOrigin": ["X Y Z", "50% 50% 0px"],
                            "perspectiveOrigin": ["X Y", "50% 50%"]
                        },
                        "registered": {},
                        "register": function() {
                            for (var t = 0; t < x.Lists.colors.length; t++) {
                                var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                                x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                            }
                            var i, s, o;
                            if (p)
                                for (i in x.Hooks.templates)
                                    if (x.Hooks.templates.hasOwnProperty(i)) {
                                        o = (s = x.Hooks.templates[i])[0].split(" ");
                                        var r = s[1].match(x.RegEx.valueSplit);
                                        "Color" === o[0] && (o.push(o.shift()),
                                        r.push(r.shift()),
                                        x.Hooks.templates[i] = [o.join(" "), r.join(" ")])
                                    }
                            for (i in x.Hooks.templates)
                                if (x.Hooks.templates.hasOwnProperty(i)) {
                                    o = (s = x.Hooks.templates[i])[0].split(" ");
                                    for (var n in o)
                                        if (o.hasOwnProperty(n)) {
                                            var a = i + o[n]
                                              , l = n;
                                            x.Hooks.registered[a] = [i, l]
                                        }
                                }
                        },
                        "getRoot": function(t) {
                            var e = x.Hooks.registered[t];
                            return e ? e[0] : t
                        },
                        "getUnit": function(t, e) {
                            var i = (t.substr(e || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                            return i && v(x.Lists.units, i) ? i : ""
                        },
                        "fixColors": function(t) {
                            return t.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(t, e, i) {
                                return x.Lists.colorNames.hasOwnProperty(i) ? (e || "rgba(") + x.Lists.colorNames[i] + (e ? "" : ",1)") : e + i
                            })
                        },
                        "cleanRootPropertyValue": function(t, e) {
                            return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]),
                            x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]),
                            e
                        },
                        "extractValue": function(t, e) {
                            var i = x.Hooks.registered[t];
                            if (i) {
                                var s = i[0]
                                  , o = i[1];
                                return (e = x.Hooks.cleanRootPropertyValue(s, e)).toString().match(x.RegEx.valueSplit)[o]
                            }
                            return e
                        },
                        "injectValue": function(t, e, i) {
                            var s = x.Hooks.registered[t];
                            if (s) {
                                var o, r = s[0], n = s[1];
                                return i = x.Hooks.cleanRootPropertyValue(r, i),
                                o = i.toString().match(x.RegEx.valueSplit),
                                o[n] = e,
                                o.join(" ")
                            }
                            return i
                        }
                    },
                    "Normalizations": {
                        "registered": {
                            "clip": function(t, e, i) {
                                switch (t) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var s;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? s = i : (s = i.toString().match(x.RegEx.valueUnwrap),
                                    s = s ? s[1].replace(/,(\s+)?/g, " ") : i),
                                    s;
                                case "inject":
                                    return "rect(" + i + ")"
                                }
                            },
                            "blur": function(t, e, i) {
                                switch (t) {
                                case "name":
                                    return k.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var s = parseFloat(i);
                                    if (!s && 0 !== s) {
                                        var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        s = o ? o[1] : 0
                                    }
                                    return s;
                                case "inject":
                                    return parseFloat(i) ? "blur(" + i + ")" : "none"
                                }
                            },
                            "opacity": function(t, e, i) {
                                if (p <= 8)
                                    switch (t) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var s = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return i = s ? s[1] / 100 : 1;
                                    case "inject":
                                        return e.style.zoom = 1,
                                        parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                    }
                                else
                                    switch (t) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return i
                                    }
                            }
                        },
                        "register": function() {
                            function t(t, e, i) {
                                if ("border-box" === x.getPropertyValue(e, "boxSizing").toString().toLowerCase() === (i || !1)) {
                                    var s, o, r = 0, n = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"], a = ["padding" + n[0], "padding" + n[1], "border" + n[0] + "Width", "border" + n[1] + "Width"];
                                    for (s = 0; s < a.length; s++)
                                        o = parseFloat(x.getPropertyValue(e, a[s])),
                                        isNaN(o) || (r += o);
                                    return i ? -r : r
                                }
                                return 0
                            }
                            function e(e, i) {
                                return function(s, o, r) {
                                    switch (s) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        return parseFloat(r) + t(e, o, i);
                                    case "inject":
                                        return parseFloat(r) - t(e, o, i) + "px"
                                    }
                                }
                            }
                            p && !(p > 9) || k.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                            for (var i = 0; i < x.Lists.transformsBase.length; i++)
                                !function() {
                                    var t = x.Lists.transformsBase[i];
                                    x.Normalizations.registered[t] = function(e, i, o) {
                                        switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return r(i) === s || r(i).transformCache[t] === s ? /^scale/i.test(t) ? 1 : 0 : r(i).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var n = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                n = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                break;
                                            case "scal":
                                            case "scale":
                                                k.State.isAndroid && r(i).transformCache[t] === s && o < 1 && (o = 1),
                                                n = !/(\d)$/i.test(o);
                                                break;
                                            case "skew":
                                            case "rotate":
                                                n = !/(deg|\d)$/i.test(o)
                                            }
                                            return n || (r(i).transformCache[t] = "(" + o + ")"),
                                            r(i).transformCache[t]
                                        }
                                    }
                                }();
                            for (var o = 0; o < x.Lists.colors.length; o++)
                                !function() {
                                    var t = x.Lists.colors[o];
                                    x.Normalizations.registered[t] = function(e, i, o) {
                                        switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var r;
                                            if (x.RegEx.wrappedValueAlreadyExtracted.test(o))
                                                r = o;
                                            else {
                                                var n, a = {
                                                    "black": "rgb(0, 0, 0)",
                                                    "blue": "rgb(0, 0, 255)",
                                                    "gray": "rgb(128, 128, 128)",
                                                    "green": "rgb(0, 128, 0)",
                                                    "red": "rgb(255, 0, 0)",
                                                    "white": "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(o) ? n = a[o] !== s ? a[o] : a.black : x.RegEx.isHex.test(o) ? n = "rgb(" + x.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (n = a.black),
                                                r = (n || o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return (!p || p > 8) && 3 === r.split(" ").length && (r += " 1"),
                                            r;
                                        case "inject":
                                            return /^rgb/.test(o) ? o : (p <= 8 ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"),
                                            (p <= 8 ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                        }
                                    }
                                }();
                            x.Normalizations.registered.innerWidth = e("width", !0),
                            x.Normalizations.registered.innerHeight = e("height", !0),
                            x.Normalizations.registered.outerWidth = e("width"),
                            x.Normalizations.registered.outerHeight = e("height")
                        }
                    },
                    "Names": {
                        "camelCase": function(t) {
                            return t.replace(/-(\w)/g, function(t, e) {
                                return e.toUpperCase()
                            })
                        },
                        "SVGAttribute": function(t) {
                            var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (p || k.State.isAndroid && !k.State.isChrome) && (e += "|transform"),
                            new RegExp("^(" + e + ")$","i").test(t)
                        },
                        "prefixCheck": function(t) {
                            if (k.State.prefixMatches[t])
                                return [k.State.prefixMatches[t], !0];
                            for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, s = e.length; i < s; i++) {
                                var o;
                                if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                    return t.toUpperCase()
                                }),
                                m.isString(k.State.prefixElement.style[o]))
                                    return k.State.prefixMatches[t] = o,
                                    [o, !0]
                            }
                            return [t, !1]
                        }
                    },
                    "Values": {
                        "hexToRgb": function(t) {
                            var e;
                            return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, s) {
                                return e + e + i + i + s + s
                            }),
                            (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                        },
                        "isCSSNullValue": function(t) {
                            return !t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                        },
                        "getUnitType": function(t) {
                            return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                        },
                        "getDisplayType": function(t) {
                            var e = t && t.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                        },
                        "addClass": function(t, e) {
                            if (t)
                                if (t.classList)
                                    t.classList.add(e);
                                else if (m.isString(t.className))
                                    t.className += (t.className.length ? " " : "") + e;
                                else {
                                    var i = t.getAttribute(p <= 7 ? "className" : "class") || "";
                                    t.setAttribute("class", i + (i ? " " : "") + e)
                                }
                        },
                        "removeClass": function(t, e) {
                            if (t)
                                if (t.classList)
                                    t.classList.remove(e);
                                else if (m.isString(t.className))
                                    t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)","gi"), " ");
                                else {
                                    var i = t.getAttribute(p <= 7 ? "className" : "class") || "";
                                    t.setAttribute("class", i.replace(new RegExp("(^|s)" + e.split(" ").join("|") + "(s|$)","gi"), " "))
                                }
                        }
                    },
                    "getPropertyValue": function(t, i, o, n) {
                        function a(t, i) {
                            var o = 0;
                            if (p <= 8)
                                o = u.css(t, i);
                            else {
                                var l = !1;
                                /^(width|height)$/.test(i) && 0 === x.getPropertyValue(t, "display") && (l = !0,
                                x.setPropertyValue(t, "display", x.Values.getDisplayType(t)));
                                var d = function() {
                                    l && x.setPropertyValue(t, "display", "none")
                                };
                                if (!n) {
                                    if ("height" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                        var c = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                        return d(),
                                        c
                                    }
                                    if ("width" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                        var h = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                        return d(),
                                        h
                                    }
                                }
                                var f;
                                f = r(t) === s ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null),
                                "borderColor" === i && (i = "borderTopColor"),
                                "" !== (o = 9 === p && "filter" === i ? f.getPropertyValue(i) : f[i]) && null !== o || (o = t.style[i]),
                                d()
                            }
                            if ("auto" === o && /^(top|right|bottom|left)$/i.test(i)) {
                                var g = a(t, "position");
                                ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (o = u(t).position()[i] + "px")
                            }
                            return o
                        }
                        var l;
                        if (x.Hooks.registered[i]) {
                            var d = i
                              , c = x.Hooks.getRoot(d);
                            o === s && (o = x.getPropertyValue(t, x.Names.prefixCheck(c)[0])),
                            x.Normalizations.registered[c] && (o = x.Normalizations.registered[c]("extract", t, o)),
                            l = x.Hooks.extractValue(d, o)
                        } else if (x.Normalizations.registered[i]) {
                            var h, f;
                            "transform" !== (h = x.Normalizations.registered[i]("name", t)) && (f = a(t, x.Names.prefixCheck(h)[0]),
                            x.Values.isCSSNullValue(f) && x.Hooks.templates[i] && (f = x.Hooks.templates[i][1])),
                            l = x.Normalizations.registered[i]("extract", t, f)
                        }
                        if (!/^[\d-]/.test(l)) {
                            var g = r(t);
                            if (g && g.isSVG && x.Names.SVGAttribute(i))
                                if (/^(height|width)$/i.test(i))
                                    try {
                                        l = t.getBBox()[i]
                                    } catch (t) {
                                        l = 0
                                    }
                                else
                                    l = t.getAttribute(i);
                            else
                                l = a(t, x.Names.prefixCheck(i)[0])
                        }
                        return x.Values.isCSSNullValue(l) && (l = 0),
                        k.debug >= 2 && console.log("Get " + i + ": " + l),
                        l
                    },
                    "setPropertyValue": function(t, i, s, o, n) {
                        var a = i;
                        if ("scroll" === i)
                            n.container ? n.container["scroll" + n.direction] = s : "Left" === n.direction ? e.scrollTo(s, n.alternateValue) : e.scrollTo(n.alternateValue, s);
                        else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", t))
                            x.Normalizations.registered[i]("inject", t, s),
                            a = "transform",
                            s = r(t).transformCache[i];
                        else {
                            if (x.Hooks.registered[i]) {
                                var l = i
                                  , d = x.Hooks.getRoot(i);
                                o = o || x.getPropertyValue(t, d),
                                s = x.Hooks.injectValue(l, s, o),
                                i = d
                            }
                            if (x.Normalizations.registered[i] && (s = x.Normalizations.registered[i]("inject", t, s),
                            i = x.Normalizations.registered[i]("name", t)),
                            a = x.Names.prefixCheck(i)[0],
                            p <= 8)
                                try {
                                    t.style[a] = s
                                } catch (t) {
                                    k.debug && console.log("Browser does not support [" + s + "] for [" + a + "]")
                                }
                            else {
                                var c = r(t);
                                c && c.isSVG && x.Names.SVGAttribute(i) ? t.setAttribute(i, s) : t.style[a] = s
                            }
                            k.debug >= 2 && console.log("Set " + i + " (" + a + "): " + s)
                        }
                        return [a, s]
                    },
                    "flushTransformCache": function(t) {
                        var e = ""
                          , i = r(t);
                        if ((p || k.State.isAndroid && !k.State.isChrome) && i && i.isSVG) {
                            var s = function(e) {
                                return parseFloat(x.getPropertyValue(t, e))
                            }
                              , o = {
                                "translate": [s("translateX"), s("translateY")],
                                "skewX": [s("skewX")],
                                "skewY": [s("skewY")],
                                "scale": 1 !== s("scale") ? [s("scale"), s("scale")] : [s("scaleX"), s("scaleY")],
                                "rotate": [s("rotateZ"), 0, 0]
                            };
                            u.each(r(t).transformCache, function(t) {
                                /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"),
                                o[t] && (e += t + "(" + o[t].join(" ") + ") ",
                                delete o[t])
                            })
                        } else {
                            var n, a;
                            u.each(r(t).transformCache, function(i) {
                                if (n = r(t).transformCache[i],
                                "transformPerspective" === i)
                                    return a = n,
                                    !0;
                                9 === p && "rotateZ" === i && (i = "rotate"),
                                e += i + n + " "
                            }),
                            a && (e = "perspective" + a + " " + e)
                        }
                        x.setPropertyValue(t, "transform", e)
                    }
                };
                x.Hooks.register(),
                x.Normalizations.register(),
                k.hook = function(t, e, i) {
                    var n;
                    return t = o(t),
                    u.each(t, function(t, o) {
                        if (r(o) === s && k.init(o),
                        i === s)
                            n === s && (n = x.getPropertyValue(o, e));
                        else {
                            var a = x.setPropertyValue(o, e, i);
                            "transform" === a[0] && k.CSS.flushTransformCache(o),
                            n = a
                        }
                    }),
                    n
                }
                ;
                var C = function() {
                    function t() {
                        return p ? $.promise || null : f
                    }
                    var l, p, f, g, y, S, w, T = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
                    m.isWrapped(this) ? (p = !1,
                    g = 0,
                    y = this,
                    f = this) : (p = !0,
                    g = 1,
                    y = T ? arguments[0].elements || arguments[0].e : arguments[0]);
                    var $ = {
                        "promise": null,
                        "resolver": null,
                        "rejecter": null
                    };
                    {
                        if (p && k.Promise && ($.promise = new k.Promise(function(t, e) {
                            $.resolver = t,
                            $.rejecter = e
                        }
                        )),
                        T ? (S = arguments[0].properties || arguments[0].p,
                        w = arguments[0].options || arguments[0].o) : (S = arguments[g],
                        w = arguments[g + 1]),
                        y = o(y)) {
                            var P = y.length
                              , A = 0;
                            if (!/^(stop|finish|finishAll|pause|resume)$/i.test(S) && !u.isPlainObject(w)) {
                                w = {};
                                for (var H = g + 1; H < arguments.length; H++)
                                    m.isArray(arguments[H]) || !/^(fast|normal|slow)$/i.test(arguments[H]) && !/^\d/.test(arguments[H]) ? m.isString(arguments[H]) || m.isArray(arguments[H]) ? w.easing = arguments[H] : m.isFunction(arguments[H]) && (w.complete = arguments[H]) : w.duration = arguments[H]
                            }
                            var I;
                            switch (S) {
                            case "scroll":
                                I = "scroll";
                                break;
                            case "reverse":
                                I = "reverse";
                                break;
                            case "pause":
                                var O = (new Date).getTime();
                                return u.each(y, function(t, e) {
                                    n(e, O)
                                }),
                                u.each(k.State.calls, function(t, e) {
                                    var i = !1;
                                    e && u.each(e[1], function(t, o) {
                                        var r = w === s ? "" : w;
                                        return !0 !== r && e[2].queue !== r && (w !== s || !1 !== e[2].queue) || (u.each(y, function(t, s) {
                                            if (s === o)
                                                return e[5] = {
                                                    "resume": !1
                                                },
                                                i = !0,
                                                !1
                                        }),
                                        !i && void 0)
                                    })
                                }),
                                t();
                            case "resume":
                                return u.each(y, function(t, e) {
                                    a(e)
                                }),
                                u.each(k.State.calls, function(t, e) {
                                    var i = !1;
                                    e && u.each(e[1], function(t, o) {
                                        var r = w === s ? "" : w;
                                        return !0 !== r && e[2].queue !== r && (w !== s || !1 !== e[2].queue) || !e[5] || (u.each(y, function(t, s) {
                                            if (s === o)
                                                return e[5].resume = !0,
                                                i = !0,
                                                !1
                                        }),
                                        !i && void 0)
                                    })
                                }),
                                t();
                            case "finish":
                            case "finishAll":
                            case "stop":
                                u.each(y, function(t, e) {
                                    r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout),
                                    r(e).delayTimer.next && r(e).delayTimer.next(),
                                    delete r(e).delayTimer),
                                    "finishAll" !== S || !0 !== w && !m.isString(w) || (u.each(u.queue(e, m.isString(w) ? w : ""), function(t, e) {
                                        m.isFunction(e) && e()
                                    }),
                                    u.queue(e, m.isString(w) ? w : "", []))
                                });
                                var j = [];
                                return u.each(k.State.calls, function(t, e) {
                                    e && u.each(e[1], function(i, o) {
                                        var n = w === s ? "" : w;
                                        if (!0 !== n && e[2].queue !== n && (w !== s || !1 !== e[2].queue))
                                            return !0;
                                        u.each(y, function(i, s) {
                                            if (s === o)
                                                if ((!0 === w || m.isString(w)) && (u.each(u.queue(s, m.isString(w) ? w : ""), function(t, e) {
                                                    m.isFunction(e) && e(null, !0)
                                                }),
                                                u.queue(s, m.isString(w) ? w : "", [])),
                                                "stop" === S) {
                                                    var a = r(s);
                                                    a && a.tweensContainer && !1 !== n && u.each(a.tweensContainer, function(t, e) {
                                                        e.endValue = e.currentValue
                                                    }),
                                                    j.push(t)
                                                } else
                                                    "finish" !== S && "finishAll" !== S || (e[2].duration = 1)
                                        })
                                    })
                                }),
                                "stop" === S && (u.each(j, function(t, e) {
                                    h(e, !0)
                                }),
                                $.promise && $.resolver(y)),
                                t();
                            default:
                                if (!u.isPlainObject(S) || m.isEmptyObject(S)) {
                                    if (m.isString(S) && k.Redirects[S]) {
                                        var E = (l = u.extend({}, w)).duration
                                          , z = l.delay || 0;
                                        return !0 === l.backwards && (y = u.extend(!0, [], y).reverse()),
                                        u.each(y, function(t, e) {
                                            parseFloat(l.stagger) ? l.delay = z + parseFloat(l.stagger) * t : m.isFunction(l.stagger) && (l.delay = z + l.stagger.call(e, t, P)),
                                            l.drag && (l.duration = parseFloat(E) || (/^(callout|transition)/.test(S) ? 1e3 : b),
                                            l.duration = Math.max(l.duration * (l.backwards ? 1 - t / P : (t + 1) / P), .75 * l.duration, 200)),
                                            k.Redirects[S].call(e, e, l || {}, t, P, y, $.promise ? $ : s)
                                        }),
                                        t()
                                    }
                                    var V = "Velocity: First argument (" + S + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return $.promise ? $.rejecter(new Error(V)) : e.console && console.log(V),
                                    t()
                                }
                                I = "start"
                            }
                            var L = {
                                "lastParent": null,
                                "lastPosition": null,
                                "lastFontSize": null,
                                "lastPercentToPxWidth": null,
                                "lastPercentToPxHeight": null,
                                "lastEmToPx": null,
                                "remToPx": null,
                                "vwToPx": null,
                                "vhToPx": null
                            }
                              , N = [];
                            u.each(y, function(t, o) {
                                m.isNode(o) && function(t, o) {
                                    function n(n) {
                                        var p, f;
                                        if (l.begin && 0 === A)
                                            try {
                                                l.begin.call(y, y)
                                            } catch (t) {
                                                setTimeout(function() {
                                                    throw t
                                                }, 1)
                                            }
                                        if ("scroll" === I) {
                                            var g, b, T, C = /^x$/i.test(l.axis) ? "Left" : "Top", H = parseFloat(l.offset) || 0;
                                            l.container ? m.isWrapped(l.container) || m.isNode(l.container) ? (l.container = l.container[0] || l.container,
                                            g = l.container["scroll" + C],
                                            T = g + u(t).position()[C.toLowerCase()] + H) : l.container = null : (g = k.State.scrollAnchor[k.State["scrollProperty" + C]],
                                            b = k.State.scrollAnchor[k.State["scrollProperty" + ("Left" === C ? "Top" : "Left")]],
                                            T = u(t).offset()[C.toLowerCase()] + H),
                                            h = {
                                                "scroll": {
                                                    "rootPropertyValue": !1,
                                                    "startValue": g,
                                                    "currentValue": g,
                                                    "endValue": T,
                                                    "unitType": "",
                                                    "easing": l.easing,
                                                    "scrollData": {
                                                        "container": l.container,
                                                        "direction": C,
                                                        "alternateValue": b
                                                    }
                                                },
                                                "element": t
                                            },
                                            k.debug && console.log("tweensContainer (scroll): ", h.scroll, t)
                                        } else if ("reverse" === I) {
                                            if (!(p = r(t)))
                                                return;
                                            if (!p.tweensContainer)
                                                return void u.dequeue(t, l.queue);
                                            "none" === p.opts.display && (p.opts.display = "auto"),
                                            "hidden" === p.opts.visibility && (p.opts.visibility = "visible"),
                                            p.opts.loop = !1,
                                            p.opts.begin = null,
                                            p.opts.complete = null,
                                            w.easing || delete l.easing,
                                            w.duration || delete l.duration,
                                            l = u.extend({}, p.opts, l),
                                            f = u.extend(!0, {}, p ? p.tweensContainer : null);
                                            for (var O in f)
                                                if (f.hasOwnProperty(O) && "element" !== O) {
                                                    var j = f[O].startValue;
                                                    f[O].startValue = f[O].currentValue = f[O].endValue,
                                                    f[O].endValue = j,
                                                    m.isEmptyObject(w) || (f[O].easing = l.easing),
                                                    k.debug && console.log("reverse tweensContainer (" + O + "): " + JSON.stringify(f[O]), t)
                                                }
                                            h = f
                                        } else if ("start" === I) {
                                            (p = r(t)) && p.tweensContainer && !0 === p.isAnimating && (f = p.tweensContainer);
                                            var E = function(o, r) {
                                                var n, d = x.Hooks.getRoot(o), c = !1, g = r[0], y = r[1], v = r[2];
                                                if (p && p.isSVG || "tween" === d || !1 !== x.Names.prefixCheck(d)[1] || x.Normalizations.registered[d] !== s) {
                                                    (l.display !== s && null !== l.display && "none" !== l.display || l.visibility !== s && "hidden" !== l.visibility) && /opacity|filter/.test(o) && !v && 0 !== g && (v = 0),
                                                    l._cacheValues && f && f[o] ? (v === s && (v = f[o].endValue + f[o].unitType),
                                                    c = p.rootPropertyValueCache[d]) : x.Hooks.registered[o] ? v === s ? (c = x.getPropertyValue(t, d),
                                                    v = x.getPropertyValue(t, o, c)) : c = x.Hooks.templates[d][1] : v === s && (v = x.getPropertyValue(t, o));
                                                    var S, b, w, T = !1, C = function(t, e) {
                                                        var i, s;
                                                        return s = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                                            return i = t,
                                                            ""
                                                        }),
                                                        i || (i = x.Values.getUnitType(t)),
                                                        [s, i]
                                                    };
                                                    if (v !== g && m.isString(v) && m.isString(g)) {
                                                        n = "";
                                                        var $ = 0
                                                          , P = 0
                                                          , A = []
                                                          , H = []
                                                          , I = 0
                                                          , O = 0
                                                          , j = 0;
                                                        for (v = x.Hooks.fixColors(v),
                                                        g = x.Hooks.fixColors(g); $ < v.length && P < g.length; ) {
                                                            var E = v[$]
                                                              , z = g[P];
                                                            if (/[\d\.-]/.test(E) && /[\d\.-]/.test(z)) {
                                                                for (var V = E, N = z, M = ".", F = "."; ++$ < v.length; ) {
                                                                    if ((E = v[$]) === M)
                                                                        M = "..";
                                                                    else if (!/\d/.test(E))
                                                                        break;
                                                                    V += E
                                                                }
                                                                for (; ++P < g.length; ) {
                                                                    if ((z = g[P]) === F)
                                                                        F = "..";
                                                                    else if (!/\d/.test(z))
                                                                        break;
                                                                    N += z
                                                                }
                                                                var q = x.Hooks.getUnit(v, $)
                                                                  , B = x.Hooks.getUnit(g, P);
                                                                if ($ += q.length,
                                                                P += B.length,
                                                                q === B)
                                                                    V === N ? n += V + q : (n += "{" + A.length + (O ? "!" : "") + "}" + q,
                                                                    A.push(parseFloat(V)),
                                                                    H.push(parseFloat(N)));
                                                                else {
                                                                    var D = parseFloat(V)
                                                                      , U = parseFloat(N);
                                                                    n += (I < 5 ? "calc" : "") + "(" + (D ? "{" + A.length + (O ? "!" : "") + "}" : "0") + q + " + " + (U ? "{" + (A.length + (D ? 1 : 0)) + (O ? "!" : "") + "}" : "0") + B + ")",
                                                                    D && (A.push(D),
                                                                    H.push(0)),
                                                                    U && (A.push(0),
                                                                    H.push(U))
                                                                }
                                                            } else {
                                                                if (E !== z) {
                                                                    I = 0;
                                                                    break
                                                                }
                                                                n += E,
                                                                $++,
                                                                P++,
                                                                0 === I && "c" === E || 1 === I && "a" === E || 2 === I && "l" === E || 3 === I && "c" === E || I >= 4 && "(" === E ? I++ : (I && I < 5 || I >= 4 && ")" === E && --I < 5) && (I = 0),
                                                                0 === O && "r" === E || 1 === O && "g" === E || 2 === O && "b" === E || 3 === O && "a" === E || O >= 3 && "(" === E ? (3 === O && "a" === E && (j = 1),
                                                                O++) : j && "," === E ? ++j > 3 && (O = j = 0) : (j && O < (j ? 5 : 4) || O >= (j ? 4 : 3) && ")" === E && --O < (j ? 5 : 4)) && (O = j = 0)
                                                            }
                                                        }
                                                        $ === v.length && P === g.length || (k.debug && console.error('Trying to pattern match mis-matched strings ["' + g + '", "' + v + '"]'),
                                                        n = s),
                                                        n && (A.length ? (k.debug && console.log('Pattern found "' + n + '" -> ', A, H, "[" + v + "," + g + "]"),
                                                        v = A,
                                                        g = H,
                                                        b = w = "") : n = s)
                                                    }
                                                    if (n || (S = C(o, v),
                                                    v = S[0],
                                                    w = S[1],
                                                    S = C(o, g),
                                                    g = S[0].replace(/^([+-\/*])=/, function(t, e) {
                                                        return T = e,
                                                        ""
                                                    }),
                                                    b = S[1],
                                                    v = parseFloat(v) || 0,
                                                    g = parseFloat(g) || 0,
                                                    "%" === b && (/^(fontSize|lineHeight)$/.test(o) ? (g /= 100,
                                                    b = "em") : /^scale/.test(o) ? (g /= 100,
                                                    b = "") : /(Red|Green|Blue)$/i.test(o) && (g = g / 100 * 255,
                                                    b = ""))),
                                                    /[\/*]/.test(T))
                                                        b = w;
                                                    else if (w !== b && 0 !== v)
                                                        if (0 === g)
                                                            b = w;
                                                        else {
                                                            a = a || function() {
                                                                var s = {
                                                                    "myParent": t.parentNode || i.body,
                                                                    "position": x.getPropertyValue(t, "position"),
                                                                    "fontSize": x.getPropertyValue(t, "fontSize")
                                                                }
                                                                  , o = s.position === L.lastPosition && s.myParent === L.lastParent
                                                                  , r = s.fontSize === L.lastFontSize;
                                                                L.lastParent = s.myParent,
                                                                L.lastPosition = s.position,
                                                                L.lastFontSize = s.fontSize;
                                                                var n = {};
                                                                if (r && o)
                                                                    n.emToPx = L.lastEmToPx,
                                                                    n.percentToPxWidth = L.lastPercentToPxWidth,
                                                                    n.percentToPxHeight = L.lastPercentToPxHeight;
                                                                else {
                                                                    var a = p && p.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                                                    k.init(a),
                                                                    s.myParent.appendChild(a),
                                                                    u.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                                                        k.CSS.setPropertyValue(a, e, "hidden")
                                                                    }),
                                                                    k.CSS.setPropertyValue(a, "position", s.position),
                                                                    k.CSS.setPropertyValue(a, "fontSize", s.fontSize),
                                                                    k.CSS.setPropertyValue(a, "boxSizing", "content-box"),
                                                                    u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                                                        k.CSS.setPropertyValue(a, e, "100%")
                                                                    }),
                                                                    k.CSS.setPropertyValue(a, "paddingLeft", "100em"),
                                                                    n.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(a, "width", null, !0)) || 1) / 100,
                                                                    n.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(a, "height", null, !0)) || 1) / 100,
                                                                    n.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(a, "paddingLeft")) || 1) / 100,
                                                                    s.myParent.removeChild(a)
                                                                }
                                                                return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16),
                                                                null === L.vwToPx && (L.vwToPx = parseFloat(e.innerWidth) / 100,
                                                                L.vhToPx = parseFloat(e.innerHeight) / 100),
                                                                n.remToPx = L.remToPx,
                                                                n.vwToPx = L.vwToPx,
                                                                n.vhToPx = L.vhToPx,
                                                                k.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(n), t),
                                                                n
                                                            }();
                                                            var W = /margin|padding|left|right|width|text|word|letter/i.test(o) || /X$/.test(o) || "x" === o ? "x" : "y";
                                                            switch (w) {
                                                            case "%":
                                                                v *= "x" === W ? a.percentToPxWidth : a.percentToPxHeight;
                                                                break;
                                                            case "px":
                                                                break;
                                                            default:
                                                                v *= a[w + "ToPx"]
                                                            }
                                                            switch (b) {
                                                            case "%":
                                                                v *= 1 / ("x" === W ? a.percentToPxWidth : a.percentToPxHeight);
                                                                break;
                                                            case "px":
                                                                break;
                                                            default:
                                                                v *= 1 / a[b + "ToPx"]
                                                            }
                                                        }
                                                    switch (T) {
                                                    case "+":
                                                        g = v + g;
                                                        break;
                                                    case "-":
                                                        g = v - g;
                                                        break;
                                                    case "*":
                                                        g *= v;
                                                        break;
                                                    case "/":
                                                        g = v / g
                                                    }
                                                    h[o] = {
                                                        "rootPropertyValue": c,
                                                        "startValue": v,
                                                        "currentValue": v,
                                                        "endValue": g,
                                                        "unitType": b,
                                                        "easing": y
                                                    },
                                                    n && (h[o].pattern = n),
                                                    k.debug && console.log("tweensContainer (" + o + "): " + JSON.stringify(h[o]), t)
                                                } else
                                                    k.debug && console.log("Skipping [" + d + "] due to a lack of browser support.")
                                            };
                                            for (var z in S)
                                                if (S.hasOwnProperty(z)) {
                                                    var V = x.Names.camelCase(z)
                                                      , M = function(e, i) {
                                                        var s, r, n;
                                                        return m.isFunction(e) && (e = e.call(t, o, P)),
                                                        m.isArray(e) ? (s = e[0],
                                                        !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? n = e[1] : m.isString(e[1]) && !x.RegEx.isHex.test(e[1]) && k.Easings[e[1]] || m.isArray(e[1]) ? (r = d(e[1], l.duration),
                                                        n = e[2]) : n = e[1] || e[2]) : s = e,
                                                        r = r || l.easing,
                                                        m.isFunction(s) && (s = s.call(t, o, P)),
                                                        m.isFunction(n) && (n = n.call(t, o, P)),
                                                        [s || 0, r, n]
                                                    }(S[z]);
                                                    if (v(x.Lists.colors, V)) {
                                                        var F = M[0]
                                                          , q = M[1]
                                                          , B = M[2];
                                                        if (x.RegEx.isHex.test(F)) {
                                                            for (var D = ["Red", "Green", "Blue"], U = x.Values.hexToRgb(F), W = B ? x.Values.hexToRgb(B) : s, R = 0; R < D.length; R++) {
                                                                var Y = [U[R]];
                                                                q && Y.push(q),
                                                                W !== s && Y.push(W[R]),
                                                                E(V + D[R], Y)
                                                            }
                                                            continue
                                                        }
                                                    }
                                                    E(V, M)
                                                }
                                            h.element = t
                                        }
                                        h.element && (x.Values.addClass(t, "velocity-animating"),
                                        N.push(h),
                                        (p = r(t)) && ("" === l.queue && (p.tweensContainer = h,
                                        p.opts = l),
                                        p.isAnimating = !0),
                                        A === P - 1 ? (k.State.calls.push([N, y, l, null, $.resolver, null, 0]),
                                        !1 === k.State.isTicking && (k.State.isTicking = !0,
                                        c())) : A++)
                                    }
                                    var a, l = u.extend({}, k.defaults, w), h = {};
                                    switch (r(t) === s && k.init(t),
                                    parseFloat(l.delay) && !1 !== l.queue && u.queue(t, l.queue, function(e, i) {
                                        if (!0 === i)
                                            return !0;
                                        k.velocityQueueEntryFlag = !0;
                                        var s = k.State.delayedElements.count++;
                                        k.State.delayedElements[s] = t;
                                        var o = function(t) {
                                            return function() {
                                                k.State.delayedElements[t] = !1,
                                                e()
                                            }
                                        }(s);
                                        r(t).delayBegin = (new Date).getTime(),
                                        r(t).delay = parseFloat(l.delay),
                                        r(t).delayTimer = {
                                            "setTimeout": setTimeout(e, parseFloat(l.delay)),
                                            "next": o
                                        }
                                    }),
                                    l.duration.toString().toLowerCase()) {
                                    case "fast":
                                        l.duration = 200;
                                        break;
                                    case "normal":
                                        l.duration = b;
                                        break;
                                    case "slow":
                                        l.duration = 600;
                                        break;
                                    default:
                                        l.duration = parseFloat(l.duration) || 1
                                    }
                                    if (!1 !== k.mock && (!0 === k.mock ? l.duration = l.delay = 1 : (l.duration *= parseFloat(k.mock) || 1,
                                    l.delay *= parseFloat(k.mock) || 1)),
                                    l.easing = d(l.easing, l.duration),
                                    l.begin && !m.isFunction(l.begin) && (l.begin = null),
                                    l.progress && !m.isFunction(l.progress) && (l.progress = null),
                                    l.complete && !m.isFunction(l.complete) && (l.complete = null),
                                    l.display !== s && null !== l.display && (l.display = l.display.toString().toLowerCase(),
                                    "auto" === l.display && (l.display = k.CSS.Values.getDisplayType(t))),
                                    l.visibility !== s && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()),
                                    l.mobileHA = l.mobileHA && k.State.isMobile && !k.State.isGingerbread,
                                    !1 === l.queue)
                                        if (l.delay) {
                                            var p = k.State.delayedElements.count++;
                                            k.State.delayedElements[p] = t;
                                            var f = function(t) {
                                                return function() {
                                                    k.State.delayedElements[t] = !1,
                                                    n()
                                                }
                                            }(p);
                                            r(t).delayBegin = (new Date).getTime(),
                                            r(t).delay = parseFloat(l.delay),
                                            r(t).delayTimer = {
                                                "setTimeout": setTimeout(n, parseFloat(l.delay)),
                                                "next": f
                                            }
                                        } else
                                            n();
                                    else
                                        u.queue(t, l.queue, function(t, e) {
                                            if (!0 === e)
                                                return $.promise && $.resolver(y),
                                                !0;
                                            k.velocityQueueEntryFlag = !0,
                                            n()
                                        });
                                    "" !== l.queue && "fx" !== l.queue || "inprogress" === u.queue(t)[0] || u.dequeue(t)
                                }(o, t)
                            }),
                            (l = u.extend({}, k.defaults, w)).loop = parseInt(l.loop, 10);
                            var M = 2 * l.loop - 1;
                            if (l.loop)
                                for (var F = 0; F < M; F++) {
                                    var q = {
                                        "delay": l.delay,
                                        "progress": l.progress
                                    };
                                    F === M - 1 && (q.display = l.display,
                                    q.visibility = l.visibility,
                                    q.complete = l.complete),
                                    C(y, "reverse", q)
                                }
                            return t()
                        }
                        $.promise && (S && w && !1 === w.promiseRejectEmpty ? $.resolver() : $.rejecter())
                    }
                };
                (k = u.extend(C, k)).animate = C;
                var $ = e.requestAnimationFrame || f;
                if (!k.State.isMobile && i.hidden !== s) {
                    var P = function() {
                        i.hidden ? ($ = function(t) {
                            return setTimeout(function() {
                                t(!0)
                            }, 16)
                        }
                        ,
                        c()) : $ = e.requestAnimationFrame || f
                    };
                    P(),
                    i.addEventListener("visibilitychange", P)
                }
                return t.Velocity = k,
                t !== e && (t.fn.velocity = C,
                t.fn.velocity.defaults = k.defaults),
                u.each(["Down", "Up"], function(t, e) {
                    k.Redirects["slide" + e] = function(t, i, o, r, n, a) {
                        var l = u.extend({}, i)
                          , d = l.begin
                          , c = l.complete
                          , h = {}
                          , p = {
                            "height": "",
                            "marginTop": "",
                            "marginBottom": "",
                            "paddingTop": "",
                            "paddingBottom": ""
                        };
                        l.display === s && (l.display = "Down" === e ? "inline" === k.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"),
                        l.begin = function() {
                            0 === o && d && d.call(n, n);
                            for (var i in p)
                                if (p.hasOwnProperty(i)) {
                                    h[i] = t.style[i];
                                    var s = x.getPropertyValue(t, i);
                                    p[i] = "Down" === e ? [s, 0] : [0, s]
                                }
                            h.overflow = t.style.overflow,
                            t.style.overflow = "hidden"
                        }
                        ,
                        l.complete = function() {
                            for (var e in h)
                                h.hasOwnProperty(e) && (t.style[e] = h[e]);
                            o === r - 1 && (c && c.call(n, n),
                            a && a.resolver(n))
                        }
                        ,
                        k(t, p, l)
                    }
                }),
                u.each(["In", "Out"], function(t, e) {
                    k.Redirects["fade" + e] = function(t, i, o, r, n, a) {
                        var l = u.extend({}, i)
                          , d = l.complete
                          , c = {
                            "opacity": "In" === e ? 1 : 0
                        };
                        0 !== o && (l.begin = null),
                        l.complete = o !== r - 1 ? null : function() {
                            d && d.call(n, n),
                            a && a.resolver(n)
                        }
                        ,
                        l.display === s && (l.display = "In" === e ? "auto" : "none"),
                        k(this, c, l)
                    }
                }),
                k
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(i, s) {
            var o;
            this.defaults = {
                "accessibility": !0,
                "adaptiveHeight": !1,
                "appendArrows": t(i),
                "appendDots": t(i),
                "arrows": !0,
                "asNavFor": null,
                "prevArrow": '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                "nextArrow": '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                "autoplay": !1,
                "autoplaySpeed": 3e3,
                "centerMode": !1,
                "centerPadding": "50px",
                "cssEase": "ease",
                "customPaging": function(e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                "dots": !1,
                "dotsClass": "slick-dots",
                "draggable": !0,
                "easing": "linear",
                "edgeFriction": .35,
                "fade": !1,
                "focusOnSelect": !1,
                "focusOnChange": !1,
                "infinite": !0,
                "initialSlide": 0,
                "lazyLoad": "ondemand",
                "mobileFirst": !1,
                "pauseOnHover": !0,
                "pauseOnFocus": !0,
                "pauseOnDotsHover": !1,
                "respondTo": "window",
                "responsive": null,
                "rows": 1,
                "rtl": !1,
                "slide": "",
                "slidesPerRow": 1,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "speed": 500,
                "swipe": !0,
                "swipeToSlide": !1,
                "touchMove": !0,
                "touchThreshold": 5,
                "useCSS": !0,
                "useTransform": !0,
                "variableWidth": !1,
                "vertical": !1,
                "verticalSwiping": !1,
                "waitForAnimate": !0,
                "zIndex": 1e3
            },
            this.initials = {
                "animating": !1,
                "dragging": !1,
                "autoPlayTimer": null,
                "currentDirection": 0,
                "currentLeft": null,
                "currentSlide": 0,
                "direction": 1,
                "$dots": null,
                "listWidth": null,
                "listHeight": null,
                "loadIndex": 0,
                "$nextArrow": null,
                "$prevArrow": null,
                "scrolling": !1,
                "slideCount": null,
                "slideWidth": null,
                "$slideTrack": null,
                "$slides": null,
                "sliding": !1,
                "slideOffset": 0,
                "swipeLeft": null,
                "swiping": !1,
                "$list": null,
                "touchObject": {},
                "transformsEnabled": !1,
                "unslicked": !1
            },
            t.extend(this, this.initials),
            this.activeBreakpoint = null,
            this.animType = null,
            this.animProp = null,
            this.breakpoints = [],
            this.breakpointSettings = [],
            this.cssTransitions = !1,
            this.focussed = !1,
            this.interrupted = !1,
            this.hidden = "hidden",
            this.paused = !0,
            this.positionProp = null,
            this.respondTo = null,
            this.rowCount = 1,
            this.shouldClick = !0,
            this.$slider = t(i),
            this.$slidesCache = null,
            this.transformType = null,
            this.transitionType = null,
            this.visibilityChange = "visibilitychange",
            this.windowWidth = 0,
            this.windowTimer = null,
            o = t(i).data("slick") || {},
            this.options = t.extend({}, this.defaults, s, o),
            this.currentSlide = this.options.initialSlide,
            this.originalSettings = this.options,
            void 0 !== document.mozHidden ? (this.hidden = "mozHidden",
            this.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (this.hidden = "webkitHidden",
            this.visibilityChange = "webkitvisibilitychange"),
            this.autoPlay = t.proxy(this.autoPlay, this),
            this.autoPlayClear = t.proxy(this.autoPlayClear, this),
            this.autoPlayIterator = t.proxy(this.autoPlayIterator, this),
            this.changeSlide = t.proxy(this.changeSlide, this),
            this.clickHandler = t.proxy(this.clickHandler, this),
            this.selectHandler = t.proxy(this.selectHandler, this),
            this.setPosition = t.proxy(this.setPosition, this),
            this.swipeHandler = t.proxy(this.swipeHandler, this),
            this.dragHandler = t.proxy(this.dragHandler, this),
            this.keyHandler = t.proxy(this.keyHandler, this),
            this.instanceUid = e++,
            this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            this.registerBreakpoints(),
            this.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            "tabindex": "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, i, s) {
        if ("boolean" == typeof i)
            s = i,
            i = null;
        else if (i < 0 || i >= this.slideCount)
            return !1;
        this.unload(),
        "number" == typeof i ? 0 === i && 0 === this.$slides.length ? t(e).appendTo(this.$slideTrack) : s ? t(e).insertBefore(this.$slides.eq(i)) : t(e).insertAfter(this.$slides.eq(i)) : !0 === s ? t(e).prependTo(this.$slideTrack) : t(e).appendTo(this.$slideTrack),
        this.$slides = this.$slideTrack.children(this.options.slide),
        this.$slideTrack.children(this.options.slide).detach(),
        this.$slideTrack.append(this.$slides),
        this.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }),
        this.$slidesCache = this.$slides,
        this.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.animate({
                "height": t
            }, this.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, i) {
        var s = {}
          , o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            "left": e
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            "top": e
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
        t({
            "animStart": o.currentLeft
        }).animate({
            "animStart": e
        }, {
            "duration": o.options.speed,
            "easing": o.options.easing,
            "step": function(t) {
                t = Math.ceil(t),
                !1 === o.options.vertical ? (s[o.animType] = "translate(" + t + "px, 0px)",
                o.$slideTrack.css(s)) : (s[o.animType] = "translate(0px," + t + "px)",
                o.$slideTrack.css(s))
            },
            "complete": function() {
                i && i.call()
            }
        })) : (o.applyTransition(),
        e = Math.ceil(e),
        !1 === o.options.vertical ? s[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[o.animType] = "translate3d(0px," + e + "px, 0px)",
        o.$slideTrack.css(s),
        i && setTimeout(function() {
            o.disableTransition(),
            i.call()
        }, o.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)),
        e
    }
    ,
    e.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = {};
        !1 === this.options.fade ? e[this.transitionType] = this.transformType + " " + this.options.speed + "ms " + this.options.cssEase : e[this.transitionType] = "opacity " + this.options.speed + "ms " + this.options.cssEase,
        !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }
    ,
    e.prototype.autoPlay = function() {
        this.autoPlayClear(),
        this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this.currentSlide + this.options.slidesToScroll;
        this.paused || this.interrupted || this.focussed || (!1 === this.options.infinite && (1 === this.direction && this.currentSlide + 1 === this.slideCount - 1 ? this.direction = 0 : 0 === this.direction && (t = this.currentSlide - this.options.slidesToScroll,
        this.currentSlide - 1 == 0 && (this.direction = 1))),
        this.slideHandler(t))
    }
    ,
    e.prototype.buildArrows = function() {
        !0 === this.options.arrows && (this.$prevArrow = t(this.options.prevArrow).addClass("slick-arrow"),
        this.$nextArrow = t(this.options.nextArrow).addClass("slick-arrow"),
        this.slideCount > this.options.slidesToShow ? (this.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        this.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.prependTo(this.options.appendArrows),
        this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.appendTo(this.options.appendArrows),
        !0 !== this.options.infinite && this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : this.$prevArrow.add(this.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            "tabindex": "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, i;
        if (!0 === this.options.dots) {
            for (this.$slider.addClass("slick-dotted"),
            i = t("<ul />").addClass(this.options.dotsClass),
            e = 0; e <= this.getDotCount(); e += 1)
                i.append(t("<li />").append(this.options.customPaging.call(this, this, e)));
            this.$dots = i.appendTo(this.options.appendDots),
            this.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        this.$slides = this.$slider.children(this.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        this.slideCount = this.$slides.length,
        this.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }),
        this.$slider.addClass("slick-slider"),
        this.$slideTrack = 0 === this.slideCount ? t('<div class="slick-track"/>').appendTo(this.$slider) : this.$slides.wrapAll('<div class="slick-track"/>').parent(),
        this.$list = this.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        this.$slideTrack.css("opacity", 0),
        !0 !== this.options.centerMode && !0 !== this.options.swipeToSlide || (this.options.slidesToScroll = 1),
        t("img[data-lazy]", this.$slider).not("[src]").addClass("slick-loading"),
        this.setupInfinite(),
        this.buildArrows(),
        this.buildDots(),
        this.updateDots(),
        this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0),
        !0 === this.options.draggable && this.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var t, e, i, s, o, r, n;
        if (s = document.createDocumentFragment(),
        r = this.$slider.children(),
        this.options.rows > 1) {
            for (n = this.options.slidesPerRow * this.options.rows,
            o = Math.ceil(r.length / n),
            t = 0; t < o; t++) {
                var a = document.createElement("div");
                for (e = 0; e < this.options.rows; e++) {
                    var l = document.createElement("div");
                    for (i = 0; i < this.options.slidesPerRow; i++) {
                        var d = t * n + (e * this.options.slidesPerRow + i);
                        r.get(d) && l.appendChild(r.get(d))
                    }
                    a.appendChild(l)
                }
                s.appendChild(a)
            }
            this.$slider.empty().append(s),
            this.$slider.children().children().children().css({
                "width": 100 / this.options.slidesPerRow + "%",
                "display": "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, i) {
        var s, o, r, n = !1, a = this.$slider.width(), l = window.innerWidth || t(window).width();
        if ("window" === this.respondTo ? r = l : "slider" === this.respondTo ? r = a : "min" === this.respondTo && (r = Math.min(l, a)),
        this.options.responsive && this.options.responsive.length && null !== this.options.responsive) {
            o = null;
            for (s in this.breakpoints)
                this.breakpoints.hasOwnProperty(s) && (!1 === this.originalSettings.mobileFirst ? r < this.breakpoints[s] && (o = this.breakpoints[s]) : r > this.breakpoints[s] && (o = this.breakpoints[s]));
            null !== o ? null !== this.activeBreakpoint ? (o !== this.activeBreakpoint || i) && (this.activeBreakpoint = o,
            "unslick" === this.breakpointSettings[o] ? this.unslick(o) : (this.options = t.extend({}, this.originalSettings, this.breakpointSettings[o]),
            !0 === e && (this.currentSlide = this.options.initialSlide),
            this.refresh(e)),
            n = o) : (this.activeBreakpoint = o,
            "unslick" === this.breakpointSettings[o] ? this.unslick(o) : (this.options = t.extend({}, this.originalSettings, this.breakpointSettings[o]),
            !0 === e && (this.currentSlide = this.options.initialSlide),
            this.refresh(e)),
            n = o) : null !== this.activeBreakpoint && (this.activeBreakpoint = null,
            this.options = this.originalSettings,
            !0 === e && (this.currentSlide = this.options.initialSlide),
            this.refresh(e),
            n = o),
            e || !1 === n || this.$slider.trigger("breakpoint", [this, n])
        }
    }
    ,
    e.prototype.changeSlide = function(e, i) {
        var s, o, r, n = t(e.currentTarget);
        switch (n.is("a") && e.preventDefault(),
        n.is("li") || (n = n.closest("li")),
        r = this.slideCount % this.options.slidesToScroll != 0,
        s = r ? 0 : (this.slideCount - this.currentSlide) % this.options.slidesToScroll,
        e.data.message) {
        case "previous":
            o = 0 === s ? this.options.slidesToScroll : this.options.slidesToShow - s,
            this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide - o, !1, i);
            break;
        case "next":
            o = 0 === s ? this.options.slidesToScroll : s,
            this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide + o, !1, i);
            break;
        case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || n.index() * this.options.slidesToScroll;
            this.slideHandler(this.checkNavigable(a), !1, i),
            n.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, i;
        if (e = this.getNavigableIndexes(),
        i = 0,
        t > e[e.length - 1])
            t = e[e.length - 1];
        else
            for (var s in e) {
                if (t < e[s]) {
                    t = i;
                    break
                }
                i = e[s]
            }
        return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        this.options.dots && null !== this.$dots && (t("li", this.$dots).off("click.slick", this.changeSlide).off("mouseenter.slick", t.proxy(this.interrupt, this, !0)).off("mouseleave.slick", t.proxy(this.interrupt, this, !1)),
        !0 === this.options.accessibility && this.$dots.off("keydown.slick", this.keyHandler)),
        this.$slider.off("focus.slick blur.slick"),
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow && this.$prevArrow.off("click.slick", this.changeSlide),
        this.$nextArrow && this.$nextArrow.off("click.slick", this.changeSlide),
        !0 === this.options.accessibility && (this.$prevArrow && this.$prevArrow.off("keydown.slick", this.keyHandler),
        this.$nextArrow && this.$nextArrow.off("keydown.slick", this.keyHandler))),
        this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler),
        this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler),
        this.$list.off("touchend.slick mouseup.slick", this.swipeHandler),
        this.$list.off("touchcancel.slick mouseleave.slick", this.swipeHandler),
        this.$list.off("click.slick", this.clickHandler),
        t(document).off(this.visibilityChange, this.visibility),
        this.cleanUpSlideEvents(),
        !0 === this.options.accessibility && this.$list.off("keydown.slick", this.keyHandler),
        !0 === this.options.focusOnSelect && t(this.$slideTrack).children().off("click.slick", this.selectHandler),
        t(window).off("orientationchange.slick.slick-" + this.instanceUid, this.orientationChange),
        t(window).off("resize.slick.slick-" + this.instanceUid, this.resize),
        t("[draggable!=true]", this.$slideTrack).off("dragstart", this.preventDefault),
        t(window).off("load.slick.slick-" + this.instanceUid, this.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        this.$list.off("mouseenter.slick", t.proxy(this.interrupt, this, !0)),
        this.$list.off("mouseleave.slick", t.proxy(this.interrupt, this, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var t;
        this.options.rows > 1 && ((t = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(t))
    }
    ,
    e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        this.autoPlayClear(),
        this.touchObject = {},
        this.cleanUpEvents(),
        t(".slick-cloned", this.$slider).detach(),
        this.$dots && this.$dots.remove(),
        this.$prevArrow && this.$prevArrow.length && (this.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove()),
        this.$nextArrow && this.$nextArrow.length && (this.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove()),
        this.$slides && (this.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }),
        this.$slideTrack.children(this.options.slide).detach(),
        this.$slideTrack.detach(),
        this.$list.detach(),
        this.$slider.append(this.$slides)),
        this.cleanUpRows(),
        this.$slider.removeClass("slick-slider"),
        this.$slider.removeClass("slick-initialized"),
        this.$slider.removeClass("slick-dotted"),
        this.unslicked = !0,
        e || this.$slider.trigger("destroy", [this])
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = {};
        e[this.transitionType] = "",
        !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            "zIndex": i.options.zIndex
        }),
        i.$slides.eq(t).animate({
            "opacity": 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
        i.$slides.eq(t).css({
            "opacity": 1,
            "zIndex": i.options.zIndex
        }),
        e && setTimeout(function() {
            i.disableTransition(t),
            e.call()
        }, i.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(t) {
        !1 === this.cssTransitions ? this.$slides.eq(t).animate({
            "opacity": 0,
            "zIndex": this.options.zIndex - 2
        }, this.options.speed, this.options.easing) : (this.applyTransition(t),
        this.$slides.eq(t).css({
            "opacity": 0,
            "zIndex": this.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        null !== t && (this.$slidesCache = this.$slides,
        this.unload(),
        this.$slideTrack.children(this.options.slide).detach(),
        this.$slidesCache.filter(t).appendTo(this.$slideTrack),
        this.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var s = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = s.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = 0
          , e = 0
          , i = 0;
        if (!0 === this.options.infinite)
            if (this.slideCount <= this.options.slidesToShow)
                ++i;
            else
                for (; t < this.slideCount; )
                    ++i,
                    t = e + this.options.slidesToScroll,
                    e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
        else if (!0 === this.options.centerMode)
            i = this.slideCount;
        else if (this.options.asNavFor)
            for (; t < this.slideCount; )
                ++i,
                t = e + this.options.slidesToScroll,
                e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
        else
            i = 1 + Math.ceil((this.slideCount - this.options.slidesToShow) / this.options.slidesToScroll);
        return i - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var e, i, s, o, r = 0;
        return this.slideOffset = 0,
        i = this.$slides.first().outerHeight(!0),
        !0 === this.options.infinite ? (this.slideCount > this.options.slidesToShow && (this.slideOffset = this.slideWidth * this.options.slidesToShow * -1,
        o = -1,
        !0 === this.options.vertical && !0 === this.options.centerMode && (2 === this.options.slidesToShow ? o = -1.5 : 1 === this.options.slidesToShow && (o = -2)),
        r = i * this.options.slidesToShow * o),
        this.slideCount % this.options.slidesToScroll != 0 && t + this.options.slidesToScroll > this.slideCount && this.slideCount > this.options.slidesToShow && (t > this.slideCount ? (this.slideOffset = (this.options.slidesToShow - (t - this.slideCount)) * this.slideWidth * -1,
        r = (this.options.slidesToShow - (t - this.slideCount)) * i * -1) : (this.slideOffset = this.slideCount % this.options.slidesToScroll * this.slideWidth * -1,
        r = this.slideCount % this.options.slidesToScroll * i * -1))) : t + this.options.slidesToShow > this.slideCount && (this.slideOffset = (t + this.options.slidesToShow - this.slideCount) * this.slideWidth,
        r = (t + this.options.slidesToShow - this.slideCount) * i),
        this.slideCount <= this.options.slidesToShow && (this.slideOffset = 0,
        r = 0),
        !0 === this.options.centerMode && this.slideCount <= this.options.slidesToShow ? this.slideOffset = this.slideWidth * Math.floor(this.options.slidesToShow) / 2 - this.slideWidth * this.slideCount / 2 : !0 === this.options.centerMode && !0 === this.options.infinite ? this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2) - this.slideWidth : !0 === this.options.centerMode && (this.slideOffset = 0,
        this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2)),
        e = !1 === this.options.vertical ? t * this.slideWidth * -1 + this.slideOffset : t * i * -1 + r,
        !0 === this.options.variableWidth && (s = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(t) : this.$slideTrack.children(".slick-slide").eq(t + this.options.slidesToShow),
        e = !0 === this.options.rtl ? s[0] ? -1 * (this.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0,
        !0 === this.options.centerMode && (s = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(t) : this.$slideTrack.children(".slick-slide").eq(t + this.options.slidesToShow + 1),
        e = !0 === this.options.rtl ? s[0] ? -1 * (this.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0,
        e += (this.$list.width() - s.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var t, e = 0, i = 0, s = [];
        for (!1 === this.options.infinite ? t = this.slideCount : (e = -1 * this.options.slidesToScroll,
        i = -1 * this.options.slidesToScroll,
        t = 2 * this.slideCount); e < t; )
            s.push(e),
            e = i + this.options.slidesToScroll,
            i += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, i, s = this;
        return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0,
        !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(o, r) {
            if (r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * s.swipeLeft)
                return e = r,
                !1
        }),
        Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            "data": {
                "message": "index",
                "index": parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        t(this.$slider).hasClass("slick-initialized") || (t(this.$slider).addClass("slick-initialized"),
        this.buildRows(),
        this.buildOut(),
        this.setProps(),
        this.startLoad(),
        this.loadSlider(),
        this.initializeEvents(),
        this.updateArrows(),
        this.updateDots(),
        this.checkResponsive(!0),
        this.focusHandler()),
        e && this.$slider.trigger("init", [this]),
        !0 === this.options.accessibility && this.initADA(),
        this.options.autoplay && (this.paused = !1,
        this.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , i = Math.ceil(e.slideCount / e.options.slidesToShow)
          , s = e.getNavigableIndexes().filter(function(t) {
            return t >= 0 && t < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            "tabindex": "-1"
        }).find("a, input, button, select").attr({
            "tabindex": "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            var o = s.indexOf(i);
            t(this).attr({
                "role": "tabpanel",
                "id": "slick-slide" + e.instanceUid + i,
                "tabindex": -1
            }),
            -1 !== o && t(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + o
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(o) {
            var r = s[o];
            t(this).attr({
                "role": "presentation"
            }),
            t(this).find("button").first().attr({
                "role": "tab",
                "id": "slick-slide-control" + e.instanceUid + o,
                "aria-controls": "slick-slide" + e.instanceUid + r,
                "aria-label": o + 1 + " of " + i,
                "aria-selected": null,
                "tabindex": "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            "tabindex": "0"
        }).end());
        for (var o = e.currentSlide, r = o + e.options.slidesToShow; o < r; o++)
            e.$slides.eq(o).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
            "message": "previous"
        }, this.changeSlide),
        this.$nextArrow.off("click.slick").on("click.slick", {
            "message": "next"
        }, this.changeSlide),
        !0 === this.options.accessibility && (this.$prevArrow.on("keydown.slick", this.keyHandler),
        this.$nextArrow.on("keydown.slick", this.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        !0 === this.options.dots && (t("li", this.$dots).on("click.slick", {
            "message": "index"
        }, this.changeSlide),
        !0 === this.options.accessibility && this.$dots.on("keydown.slick", this.keyHandler)),
        !0 === this.options.dots && !0 === this.options.pauseOnDotsHover && t("li", this.$dots).on("mouseenter.slick", t.proxy(this.interrupt, this, !0)).on("mouseleave.slick", t.proxy(this.interrupt, this, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        this.options.pauseOnHover && (this.$list.on("mouseenter.slick", t.proxy(this.interrupt, this, !0)),
        this.$list.on("mouseleave.slick", t.proxy(this.interrupt, this, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        this.initArrowEvents(),
        this.initDotEvents(),
        this.initSlideEvents(),
        this.$list.on("touchstart.slick mousedown.slick", {
            "action": "start"
        }, this.swipeHandler),
        this.$list.on("touchmove.slick mousemove.slick", {
            "action": "move"
        }, this.swipeHandler),
        this.$list.on("touchend.slick mouseup.slick", {
            "action": "end"
        }, this.swipeHandler),
        this.$list.on("touchcancel.slick mouseleave.slick", {
            "action": "end"
        }, this.swipeHandler),
        this.$list.on("click.slick", this.clickHandler),
        t(document).on(this.visibilityChange, t.proxy(this.visibility, this)),
        !0 === this.options.accessibility && this.$list.on("keydown.slick", this.keyHandler),
        !0 === this.options.focusOnSelect && t(this.$slideTrack).children().on("click.slick", this.selectHandler),
        t(window).on("orientationchange.slick.slick-" + this.instanceUid, t.proxy(this.orientationChange, this)),
        t(window).on("resize.slick.slick-" + this.instanceUid, t.proxy(this.resize, this)),
        t("[draggable!=true]", this.$slideTrack).on("dragstart", this.preventDefault),
        t(window).on("load.slick.slick-" + this.instanceUid, this.setPosition),
        t(this.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(),
        this.$nextArrow.show()),
        !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(t) {
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
            "data": {
                "message": !0 === this.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
            "data": {
                "message": !0 === this.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this)
                  , i = t(this).attr("data-lazy")
                  , s = t(this).attr("data-srcset")
                  , o = t(this).attr("data-sizes") || r.$slider.attr("data-sizes")
                  , n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        "opacity": 0
                    }, 100, function() {
                        s && (e.attr("srcset", s),
                        o && e.attr("sizes", o)),
                        e.attr("src", i).animate({
                            "opacity": 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        r.$slider.trigger("lazyLoaded", [r, e, i])
                    })
                }
                ,
                n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    r.$slider.trigger("lazyLoadError", [r, e, i])
                }
                ,
                n.src = i
            })
        }
        var i, s, o, r = this;
        if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (s = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)),
        o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide,
        o = Math.ceil(s + r.options.slidesToShow),
        !0 === r.options.fade && (s > 0 && s--,
        o <= r.slideCount && o++)),
        i = r.$slider.find(".slick-slide").slice(s, o),
        "anticipated" === r.options.lazyLoad)
            for (var n = s - 1, a = o, l = r.$slider.find(".slick-slide"), d = 0; d < r.options.slidesToScroll; d++)
                n < 0 && (n = r.slideCount - 1),
                i = (i = i.add(l.eq(n))).add(l.eq(a)),
                n--,
                a++;
        e(i),
        r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        this.setPosition(),
        this.$slideTrack.css({
            "opacity": 1
        }),
        this.$slider.removeClass("slick-loading"),
        this.initUI(),
        "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            "data": {
                "message": "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        this.autoPlay(),
        this.options.autoplay = !0,
        this.paused = !1,
        this.focussed = !1,
        this.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        this.unslicked || (this.$slider.trigger("afterChange", [this, e]),
        this.animating = !1,
        this.slideCount > this.options.slidesToShow && this.setPosition(),
        this.swipeLeft = null,
        this.options.autoplay && this.autoPlay(),
        !0 === this.options.accessibility && (this.initADA(),
        this.options.focusOnChange && t(this.$slides.get(this.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            "data": {
                "message": "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, s, o, r, n, a = this, l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(),
        s = i.attr("data-lazy"),
        o = i.attr("data-srcset"),
        r = i.attr("data-sizes") || a.$slider.attr("data-sizes"),
        (n = document.createElement("img")).onload = function() {
            o && (i.attr("srcset", o),
            r && i.attr("sizes", r)),
            i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === a.options.adaptiveHeight && a.setPosition(),
            a.$slider.trigger("lazyLoaded", [a, i, s]),
            a.progressiveLazyLoad()
        }
        ,
        n.onerror = function() {
            e < 3 ? setTimeout(function() {
                a.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            a.$slider.trigger("lazyLoadError", [a, i, s]),
            a.progressiveLazyLoad())
        }
        ,
        n.src = s) : a.$slider.trigger("allImagesLoaded", [a])
    }
    ,
    e.prototype.refresh = function(e) {
        var i, s;
        s = this.slideCount - this.options.slidesToShow,
        !this.options.infinite && this.currentSlide > s && (this.currentSlide = s),
        this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0),
        i = this.currentSlide,
        this.destroy(!0),
        t.extend(this, this.initials, {
            "currentSlide": i
        }),
        this.init(),
        e || this.changeSlide({
            "data": {
                "message": "index",
                "index": i
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, i, s, o = this, r = o.options.responsive || null;
        if ("array" === t.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in r)
                if (s = o.breakpoints.length - 1,
                r.hasOwnProperty(e)) {
                    for (i = r[e].breakpoint; s >= 0; )
                        o.breakpoints[s] && o.breakpoints[s] === i && o.breakpoints.splice(s, 1),
                        s--;
                    o.breakpoints.push(i),
                    o.breakpointSettings[i] = r[e].settings
                }
            o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        this.$slides = this.$slideTrack.children(this.options.slide).addClass("slick-slide"),
        this.slideCount = this.$slides.length,
        this.currentSlide >= this.slideCount && 0 !== this.currentSlide && (this.currentSlide = this.currentSlide - this.options.slidesToScroll),
        this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0),
        this.registerBreakpoints(),
        this.setProps(),
        this.setupInfinite(),
        this.buildArrows(),
        this.updateArrows(),
        this.initArrowEvents(),
        this.buildDots(),
        this.updateDots(),
        this.initDotEvents(),
        this.cleanUpSlideEvents(),
        this.initSlideEvents(),
        this.checkResponsive(!1, !0),
        !0 === this.options.focusOnSelect && t(this.$slideTrack).children().on("click.slick", this.selectHandler),
        this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0),
        this.setPosition(),
        this.focusHandler(),
        this.paused = !this.options.autoplay,
        this.autoPlay(),
        this.$slider.trigger("reInit", [this])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : this.slideCount - 1 : !0 === e ? --t : t,
        this.slideCount < 1 || t < 0 || t > this.slideCount - 1)
            return !1;
        this.unload(),
        !0 === i ? this.$slideTrack.children().remove() : this.$slideTrack.children(this.options.slide).eq(t).remove(),
        this.$slides = this.$slideTrack.children(this.options.slide),
        this.$slideTrack.children(this.options.slide).detach(),
        this.$slideTrack.append(this.$slides),
        this.$slidesCache = this.$slides,
        this.reinit()
    }
    ,
    e.prototype.setCSS = function(t) {
        var e, i, s = {};
        !0 === this.options.rtl && (t = -t),
        e = "left" == this.positionProp ? Math.ceil(t) + "px" : "0px",
        i = "top" == this.positionProp ? Math.ceil(t) + "px" : "0px",
        s[this.positionProp] = t,
        !1 === this.transformsEnabled ? this.$slideTrack.css(s) : (s = {},
        !1 === this.cssTransitions ? (s[this.animType] = "translate(" + e + ", " + i + ")",
        this.$slideTrack.css(s)) : (s[this.animType] = "translate3d(" + e + ", " + i + ", 0px)",
        this.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        !1 === this.options.vertical ? !0 === this.options.centerMode && this.$list.css({
            "padding": "0px " + this.options.centerPadding
        }) : (this.$list.height(this.$slides.first().outerHeight(!0) * this.options.slidesToShow),
        !0 === this.options.centerMode && this.$list.css({
            "padding": this.options.centerPadding + " 0px"
        })),
        this.listWidth = this.$list.width(),
        this.listHeight = this.$list.height(),
        !1 === this.options.vertical && !1 === this.options.variableWidth ? (this.slideWidth = Math.ceil(this.listWidth / this.options.slidesToShow),
        this.$slideTrack.width(Math.ceil(this.slideWidth * this.$slideTrack.children(".slick-slide").length))) : !0 === this.options.variableWidth ? this.$slideTrack.width(5e3 * this.slideCount) : (this.slideWidth = Math.ceil(this.listWidth),
        this.$slideTrack.height(Math.ceil(this.$slides.first().outerHeight(!0) * this.$slideTrack.children(".slick-slide").length)));
        var t = this.$slides.first().outerWidth(!0) - this.$slides.first().width();
        !1 === this.options.variableWidth && this.$slideTrack.children(".slick-slide").width(this.slideWidth - t)
    }
    ,
    e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(s, o) {
            e = i.slideWidth * s * -1,
            !0 === i.options.rtl ? t(o).css({
                "position": "relative",
                "right": e,
                "top": 0,
                "zIndex": i.options.zIndex - 2,
                "opacity": 0
            }) : t(o).css({
                "position": "relative",
                "left": e,
                "top": 0,
                "zIndex": i.options.zIndex - 2,
                "opacity": 0
            })
        }),
        i.$slides.eq(i.currentSlide).css({
            "zIndex": i.options.zIndex - 1,
            "opacity": 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.css("height", t)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, s, o, r, n = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (s = arguments[0],
        a = arguments[1],
        r = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0],
        o = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")),
        "single" === r)
            n.options[s] = o;
        else if ("multiple" === r)
            t.each(s, function(t, e) {
                n.options[t] = e
            });
        else if ("responsive" === r)
            for (i in o)
                if ("array" !== t.type(n.options.responsive))
                    n.options.responsive = [o[i]];
                else {
                    for (e = n.options.responsive.length - 1; e >= 0; )
                        n.options.responsive[e].breakpoint === o[i].breakpoint && n.options.responsive.splice(e, 1),
                        e--;
                    n.options.responsive.push(o[i])
                }
        a && (n.unload(),
        n.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        this.setDimensions(),
        this.setHeight(),
        !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(),
        this.$slider.trigger("setPosition", [this])
    }
    ,
    e.prototype.setProps = function() {
        var t = document.body.style;
        this.positionProp = !0 === this.options.vertical ? "top" : "left",
        "top" === this.positionProp ? this.$slider.addClass("slick-vertical") : this.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === this.options.useCSS && (this.cssTransitions = !0),
        this.options.fade && ("number" == typeof this.options.zIndex ? this.options.zIndex < 3 && (this.options.zIndex = 3) : this.options.zIndex = this.defaults.zIndex),
        void 0 !== t.OTransform && (this.animType = "OTransform",
        this.transformType = "-o-transform",
        this.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (this.animType = !1)),
        void 0 !== t.MozTransform && (this.animType = "MozTransform",
        this.transformType = "-moz-transform",
        this.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (this.animType = !1)),
        void 0 !== t.webkitTransform && (this.animType = "webkitTransform",
        this.transformType = "-webkit-transform",
        this.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (this.animType = !1)),
        void 0 !== t.msTransform && (this.animType = "msTransform",
        this.transformType = "-ms-transform",
        this.transitionType = "msTransition",
        void 0 === t.msTransform && (this.animType = !1)),
        void 0 !== t.transform && !1 !== this.animType && (this.animType = "transform",
        this.transformType = "transform",
        this.transitionType = "transition"),
        this.transformsEnabled = this.options.useTransform && null !== this.animType && !1 !== this.animType
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var e, i, s, o;
        if (i = this.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        this.$slides.eq(t).addClass("slick-current"),
        !0 === this.options.centerMode) {
            var r = this.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(this.options.slidesToShow / 2),
            !0 === this.options.infinite && (t >= e && t <= this.slideCount - 1 - e ? this.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = this.options.slidesToShow + t,
            i.slice(s - e + 1 + r, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === t ? i.eq(i.length - 1 - this.options.slidesToShow).addClass("slick-center") : t === this.slideCount - 1 && i.eq(this.options.slidesToShow).addClass("slick-center")),
            this.$slides.eq(t).addClass("slick-center")
        } else
            t >= 0 && t <= this.slideCount - this.options.slidesToShow ? this.$slides.slice(t, t + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= this.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = this.slideCount % this.options.slidesToShow,
            s = !0 === this.options.infinite ? this.options.slidesToShow + t : t,
            this.options.slidesToShow == this.options.slidesToScroll && this.slideCount - t < this.options.slidesToShow ? i.slice(s - (this.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== this.options.lazyLoad && "anticipated" !== this.options.lazyLoad || this.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, i, s;
        if (!0 === this.options.fade && (this.options.centerMode = !1),
        !0 === this.options.infinite && !1 === this.options.fade && (i = null,
        this.slideCount > this.options.slidesToShow)) {
            for (s = !0 === this.options.centerMode ? this.options.slidesToShow + 1 : this.options.slidesToShow,
            e = this.slideCount; e > this.slideCount - s; e -= 1)
                i = e - 1,
                t(this.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - this.slideCount).prependTo(this.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < s + this.slideCount; e += 1)
                i = e,
                t(this.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + this.slideCount).appendTo(this.$slideTrack).addClass("slick-cloned");
            this.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(t) {
        t || this.autoPlay(),
        this.interrupted = t
    }
    ,
    e.prototype.selectHandler = function(e) {
        var i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , s = parseInt(i.attr("data-slick-index"));
        s || (s = 0),
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(s, !1, !0) : this.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(t, e, i) {
        var s, o, r, n, a, l = null, d = this;
        if (e = e || !1,
        !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === t))
            if (!1 === e && d.asNavFor(t),
            s = t,
            l = d.getLeft(s),
            n = d.getLeft(d.currentSlide),
            d.currentLeft = null === d.swipeLeft ? n : d.swipeLeft,
            !1 === d.options.infinite && !1 === d.options.centerMode && (t < 0 || t > d.getDotCount() * d.options.slidesToScroll))
                !1 === d.options.fade && (s = d.currentSlide,
                !0 !== i ? d.animateSlide(n, function() {
                    d.postSlide(s)
                }) : d.postSlide(s));
            else if (!1 === d.options.infinite && !0 === d.options.centerMode && (t < 0 || t > d.slideCount - d.options.slidesToScroll))
                !1 === d.options.fade && (s = d.currentSlide,
                !0 !== i ? d.animateSlide(n, function() {
                    d.postSlide(s)
                }) : d.postSlide(s));
            else {
                if (d.options.autoplay && clearInterval(d.autoPlayTimer),
                o = s < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + s : s >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : s - d.slideCount : s,
                d.animating = !0,
                d.$slider.trigger("beforeChange", [d, d.currentSlide, o]),
                r = d.currentSlide,
                d.currentSlide = o,
                d.setSlideClasses(d.currentSlide),
                d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide),
                d.updateDots(),
                d.updateArrows(),
                !0 === d.options.fade)
                    return !0 !== i ? (d.fadeSlideOut(r),
                    d.fadeSlide(o, function() {
                        d.postSlide(o)
                    })) : d.postSlide(o),
                    void d.animateHeight();
                !0 !== i ? d.animateSlide(l, function() {
                    d.postSlide(o)
                }) : d.postSlide(o)
            }
    }
    ,
    e.prototype.startLoad = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.hide(),
        this.$nextArrow.hide()),
        !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.hide(),
        this.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var t, e, i, s;
        return t = this.touchObject.startX - this.touchObject.curX,
        e = this.touchObject.startY - this.touchObject.curY,
        i = Math.atan2(e, t),
        (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)),
        s <= 45 && s >= 0 ? !1 === this.options.rtl ? "left" : "right" : s <= 360 && s >= 315 ? !1 === this.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var e, i;
        if (this.dragging = !1,
        this.swiping = !1,
        this.scrolling)
            return this.scrolling = !1,
            !1;
        if (this.interrupted = !1,
        this.shouldClick = !(this.touchObject.swipeLength > 10),
        void 0 === this.touchObject.curX)
            return !1;
        if (!0 === this.touchObject.edgeHit && this.$slider.trigger("edge", [this, this.swipeDirection()]),
        this.touchObject.swipeLength >= this.touchObject.minSwipe) {
            switch (i = this.swipeDirection()) {
            case "left":
            case "down":
                e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide + this.getSlideCount()) : this.currentSlide + this.getSlideCount(),
                this.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide - this.getSlideCount()) : this.currentSlide - this.getSlideCount(),
                this.currentDirection = 1
            }
            "vertical" != i && (this.slideHandler(e),
            this.touchObject = {},
            this.$slider.trigger("swipe", [this, i]))
        } else
            this.touchObject.startX !== this.touchObject.curX && (this.slideHandler(this.currentSlide),
            this.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        if (!(!1 === this.options.swipe || "ontouchend"in document && !1 === this.options.swipe || !1 === this.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (this.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            this.touchObject.minSwipe = this.listWidth / this.options.touchThreshold,
            !0 === this.options.verticalSwiping && (this.touchObject.minSwipe = this.listHeight / this.options.touchThreshold),
            t.data.action) {
            case "start":
                this.swipeStart(t);
                break;
            case "move":
                this.swipeMove(t);
                break;
            case "end":
                this.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var e, i, s, o, r, n;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!this.dragging || this.scrolling || r && 1 !== r.length) && (e = this.getLeft(this.currentSlide),
        this.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX,
        this.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY,
        this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curX - this.touchObject.startX, 2))),
        n = Math.round(Math.sqrt(Math.pow(this.touchObject.curY - this.touchObject.startY, 2))),
        !this.options.verticalSwiping && !this.swiping && n > 4 ? (this.scrolling = !0,
        !1) : (!0 === this.options.verticalSwiping && (this.touchObject.swipeLength = n),
        i = this.swipeDirection(),
        void 0 !== t.originalEvent && this.touchObject.swipeLength > 4 && (this.swiping = !0,
        t.preventDefault()),
        o = (!1 === this.options.rtl ? 1 : -1) * (this.touchObject.curX > this.touchObject.startX ? 1 : -1),
        !0 === this.options.verticalSwiping && (o = this.touchObject.curY > this.touchObject.startY ? 1 : -1),
        s = this.touchObject.swipeLength,
        this.touchObject.edgeHit = !1,
        !1 === this.options.infinite && (0 === this.currentSlide && "right" === i || this.currentSlide >= this.getDotCount() && "left" === i) && (s = this.touchObject.swipeLength * this.options.edgeFriction,
        this.touchObject.edgeHit = !0),
        !1 === this.options.vertical ? this.swipeLeft = e + s * o : this.swipeLeft = e + s * (this.$list.height() / this.listWidth) * o,
        !0 === this.options.verticalSwiping && (this.swipeLeft = e + s * o),
        !0 !== this.options.fade && !1 !== this.options.touchMove && (!0 === this.animating ? (this.swipeLeft = null,
        !1) : void this.setCSS(this.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(t) {
        var e;
        if (this.interrupted = !0,
        1 !== this.touchObject.fingerCount || this.slideCount <= this.options.slidesToShow)
            return this.touchObject = {},
            !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        this.touchObject.startX = this.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        this.touchObject.startY = this.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        this.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        null !== this.$slidesCache && (this.unload(),
        this.$slideTrack.children(this.options.slide).detach(),
        this.$slidesCache.appendTo(this.$slideTrack),
        this.reinit())
    }
    ,
    e.prototype.unload = function() {
        t(".slick-cloned", this.$slider).remove(),
        this.$dots && this.$dots.remove(),
        this.$prevArrow && this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove(),
        this.$nextArrow && this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove(),
        this.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(t) {
        this.$slider.trigger("unslick", [this, t]),
        this.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        Math.floor(this.options.slidesToShow / 2),
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && !this.options.infinite && (this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === this.currentSlide ? (this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - this.options.slidesToShow && !1 === this.options.centerMode ? (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - 1 && !0 === this.options.centerMode && (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").end(),
        this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }
    ,
    t.fn.slick = function() {
        var t, i, s = arguments[0], o = Array.prototype.slice.call(arguments, 1), r = this.length;
        for (t = 0; t < r; t++)
            if ("object" == typeof s || void 0 === s ? this[t].slick = new e(this[t],s) : i = this[t].slick[s].apply(this[t].slick, o),
            void 0 !== i)
                return i;
        return this
    }
}),
window.JSON || (window.JSON = {}),
function() {
    function f(t) {
        return t < 10 ? "0" + t : t
    }
    function quote(t) {
        return escapable.lastIndex = 0,
        escapable.test(t) ? '"' + t.replace(escapable, function(t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + t + '"'
    }
    function str(t, e) {
        var i, s, o, r, n, a = gap, l = e[t];
        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)),
        "function" == typeof rep && (l = rep.call(e, t, l)),
        typeof l) {
        case "string":
            return quote(l);
        case "number":
            return isFinite(l) ? String(l) : "null";
        case "boolean":
        case "null":
            return String(l);
        case "object":
            if (!l)
                return "null";
            if (gap += indent,
            n = [],
            "[object Array]" === Object.prototype.toString.apply(l)) {
                for (r = l.length,
                i = 0; i < r; i += 1)
                    n[i] = str(i, l) || "null";
                return o = 0 === n.length ? "[]" : gap ? "[\n" + gap + n.join(",\n" + gap) + "\n" + a + "]" : "[" + n.join(",") + "]",
                gap = a,
                o
            }
            if (rep && "object" == typeof rep)
                for (r = rep.length,
                i = 0; i < r; i += 1)
                    "string" == typeof (s = rep[i]) && (o = str(s, l)) && n.push(quote(s) + (gap ? ": " : ":") + o);
            else
                for (s in l)
                    Object.hasOwnProperty.call(l, s) && (o = str(s, l)) && n.push(quote(s) + (gap ? ": " : ":") + o);
            return o = 0 === n.length ? "{}" : gap ? "{\n" + gap + n.join(",\n" + gap) + "\n" + a + "}" : "{" + n.join(",") + "}",
            gap = a,
            o
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) {
        return this.valueOf()
    }
    );
    var JSON = window.JSON, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, i) {
        var s;
        if (gap = "",
        indent = "",
        "number" == typeof i)
            for (s = 0; s < i; s += 1)
                indent += " ";
        else
            "string" == typeof i && (indent = i);
        if (rep = e,
        !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length)
            return str("", {
                "": t
            });
        throw new Error("JSON.stringify")
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(t, e) {
            var i, s, o = t[e];
            if (o && "object" == typeof o)
                for (i in o)
                    Object.hasOwnProperty.call(o, i) && (void 0 !== (s = walk(o, i)) ? o[i] = s : delete o[i]);
            return reviver.call(t, e, o)
        }
        var j;
        if (text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, function(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        })),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}(),
function(t, e) {
    "use strict";
    var i = t.History = t.History || {}
      , s = t.jQuery;
    if (void 0 !== i.Adapter)
        throw new Error("History.js Adapter has already been loaded...");
    i.Adapter = {
        "bind": function(t, e, i) {
            s(t).bind(e, i)
        },
        "trigger": function(t, e, i) {
            s(t).trigger(e, i)
        },
        "extractEventData": function(t, e, i) {
            return e && e.originalEvent && e.originalEvent[t] || i && i[t] || void 0
        },
        "onDomLoad": function(t) {
            s(t)
        }
    },
    void 0 !== i.init && i.init()
}(window),
function(t, e) {
    "use strict";
    var i = t.document
      , s = t.setTimeout || s
      , o = t.clearTimeout || o
      , r = t.setInterval || r
      , n = t.History = t.History || {};
    if (void 0 !== n.initHtml4)
        throw new Error("History.js HTML4 Support has already been loaded...");
    n.initHtml4 = function() {
        if (void 0 !== n.initHtml4.initialized)
            return !1;
        n.initHtml4.initialized = !0,
        n.enabled = !0,
        n.savedHashes = [],
        n.isLastHash = function(t) {
            return t === n.getHashByIndex()
        }
        ,
        n.saveHash = function(t) {
            return !n.isLastHash(t) && (n.savedHashes.push(t),
            !0)
        }
        ,
        n.getHashByIndex = function(t) {
            return void 0 === t ? n.savedHashes[n.savedHashes.length - 1] : t < 0 ? n.savedHashes[n.savedHashes.length + t] : n.savedHashes[t]
        }
        ,
        n.discardedHashes = {},
        n.discardedStates = {},
        n.discardState = function(t, e, i) {
            var s, o = n.getHashByState(t);
            return s = {
                "discardedState": t,
                "backState": i,
                "forwardState": e
            },
            n.discardedStates[o] = s,
            !0
        }
        ,
        n.discardHash = function(t, e, i) {
            var s = {
                "discardedHash": t,
                "backState": i,
                "forwardState": e
            };
            return n.discardedHashes[t] = s,
            !0
        }
        ,
        n.discardedState = function(t) {
            var e = n.getHashByState(t);
            return n.discardedStates[e] || !1
        }
        ,
        n.discardedHash = function(t) {
            return n.discardedHashes[t] || !1
        }
        ,
        n.recycleState = function(t) {
            var e = n.getHashByState(t);
            return n.discardedState(t) && delete n.discardedStates[e],
            !0
        }
        ,
        n.emulated.hashChange && (n.hashChangeInit = function() {
            n.checkerFunction = null;
            var e, s, o, a, l = "";
            return n.isInternetExplorer() ? (e = "historyjs-iframe",
            (s = i.createElement("iframe")).setAttribute("id", e),
            s.style.display = "none",
            i.body.appendChild(s),
            s.contentWindow.document.open(),
            s.contentWindow.document.close(),
            o = "",
            a = !1,
            n.checkerFunction = function() {
                if (a)
                    return !1;
                a = !0;
                var e = n.getHash() || ""
                  , i = n.unescapeHash(s.contentWindow.document.location.hash) || "";
                return e !== l ? (l = e,
                i !== e && (o = i = e,
                s.contentWindow.document.open(),
                s.contentWindow.document.close(),
                s.contentWindow.document.location.hash = n.escapeHash(e)),
                n.Adapter.trigger(t, "hashchange")) : i !== o && (o = i,
                n.setHash(i, !1)),
                a = !1,
                !0
            }
            ) : n.checkerFunction = function() {
                var e = n.getHash();
                return e !== l && (l = e,
                n.Adapter.trigger(t, "hashchange")),
                !0
            }
            ,
            n.intervalList.push(r(n.checkerFunction, n.options.hashChangeInterval)),
            !0
        }
        ,
        n.Adapter.onDomLoad(n.hashChangeInit)),
        n.emulated.pushState && (n.onHashChange = function(e) {
            var s, o = e && e.newURL || i.location.href, r = n.getHashByUrl(o), a = null;
            return n.isLastHash(r) ? (n.busy(!1),
            !1) : (n.doubleCheckComplete(),
            n.saveHash(r),
            r && n.isTraditionalAnchor(r) ? (n.Adapter.trigger(t, "anchorchange"),
            n.busy(!1),
            !1) : (a = n.extractState(n.getFullUrl(r || i.location.href, !1), !0),
            n.isLastSavedState(a) ? (n.busy(!1),
            !1) : (n.getHashByState(a),
            (s = n.discardedState(a)) ? (n.getHashByIndex(-2) === n.getHashByState(s.forwardState) ? n.back(!1) : n.forward(!1),
            !1) : (n.pushState(a.data, a.title, a.url, !1),
            !0))))
        }
        ,
        n.Adapter.bind(t, "hashchange", n.onHashChange),
        n.pushState = function(e, s, o, r) {
            if (n.getHashByUrl(o))
                throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== r && n.busy())
                return n.pushQueue({
                    "scope": n,
                    "callback": n.pushState,
                    "args": arguments,
                    "queue": r
                }),
                !1;
            n.busy(!0);
            var a = n.createStateObject(e, s, o)
              , l = n.getHashByState(a)
              , d = n.getState(!1)
              , c = n.getHashByState(d)
              , h = n.getHash();
            return n.storeState(a),
            n.expectedStateId = a.id,
            n.recycleState(a),
            n.setTitle(a),
            l === c ? (n.busy(!1),
            !1) : l !== h && l !== n.getShortUrl(i.location.href) ? (n.setHash(l, !1),
            !1) : (n.saveState(a),
            n.Adapter.trigger(t, "statechange"),
            n.busy(!1),
            !0)
        }
        ,
        n.replaceState = function(t, e, i, s) {
            if (n.getHashByUrl(i))
                throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== s && n.busy())
                return n.pushQueue({
                    "scope": n,
                    "callback": n.replaceState,
                    "args": arguments,
                    "queue": s
                }),
                !1;
            n.busy(!0);
            var o = n.createStateObject(t, e, i)
              , r = n.getState(!1)
              , a = n.getStateByIndex(-2);
            return n.discardState(r, o, a),
            n.pushState(o.data, o.title, o.url, !1),
            !0
        }
        ),
        n.emulated.pushState && n.getHash() && !n.emulated.hashChange && n.Adapter.onDomLoad(function() {
            n.Adapter.trigger(t, "hashchange")
        })
    }
    ,
    void 0 !== n.init && n.init()
}(window),
function(t, e) {
    "use strict";
    var i = t.console || void 0
      , s = t.document
      , o = t.navigator
      , r = t.sessionStorage || !1
      , n = t.setTimeout
      , a = t.clearTimeout
      , l = t.setInterval
      , d = t.clearInterval
      , c = t.JSON
      , h = t.alert
      , u = t.History = t.History || {}
      , p = t.history;
    if (c.stringify = c.stringify || c.encode,
    c.parse = c.parse || c.decode,
    void 0 !== u.init)
        throw new Error("History.js Core has already been loaded...");
    u.init = function() {
        return void 0 !== u.Adapter && (void 0 !== u.initCore && u.initCore(),
        void 0 !== u.initHtml4 && u.initHtml4(),
        !0)
    }
    ,
    u.initCore = function() {
        if (void 0 !== u.initCore.initialized)
            return !1;
        if (u.initCore.initialized = !0,
        u.options = u.options || {},
        u.options.hashChangeInterval = u.options.hashChangeInterval || 100,
        u.options.safariPollInterval = u.options.safariPollInterval || 500,
        u.options.doubleCheckInterval = u.options.doubleCheckInterval || 500,
        u.options.storeInterval = u.options.storeInterval || 1e3,
        u.options.busyDelay = u.options.busyDelay || 250,
        u.options.debug = u.options.debug || !1,
        u.options.initialTitle = u.options.initialTitle || s.title,
        u.intervalList = [],
        u.clearAllIntervals = function() {
            var t, e = u.intervalList;
            if (void 0 !== e && null !== e) {
                for (t = 0; t < e.length; t++)
                    d(e[t]);
                u.intervalList = null
            }
        }
        ,
        u.debug = function() {
            u.options.debug && u.log.apply(u, arguments)
        }
        ,
        u.log = function() {
            var t, e, o, r, n, a = void 0 !== i && void 0 !== i.log && void 0 !== i.log.apply, l = s.getElementById("log");
            for (a ? (r = Array.prototype.slice.call(arguments),
            t = r.shift(),
            void 0 !== i.debug ? i.debug.apply(i, [t, r]) : i.log.apply(i, [t, r])) : t = "\n" + arguments[0] + "\n",
            e = 1,
            o = arguments.length; e < o; ++e) {
                if ("object" == typeof (n = arguments[e]) && void 0 !== c)
                    try {
                        n = c.stringify(n)
                    } catch (t) {}
                t += "\n" + n + "\n"
            }
            return l ? (l.value += t + "\n-----\n",
            l.scrollTop = l.scrollHeight - l.clientHeight) : a || h(t),
            !0
        }
        ,
        u.getInternetExplorerMajorVersion = function() {
            return u.getInternetExplorerMajorVersion.cached = void 0 !== u.getInternetExplorerMajorVersion.cached ? u.getInternetExplorerMajorVersion.cached : function() {
                for (var t = 3, e = s.createElement("div"), i = e.getElementsByTagName("i"); (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && i[0]; )
                    ;
                return t > 4 && t
            }()
        }
        ,
        u.isInternetExplorer = function() {
            return u.isInternetExplorer.cached = void 0 !== u.isInternetExplorer.cached ? u.isInternetExplorer.cached : Boolean(u.getInternetExplorerMajorVersion())
        }
        ,
        u.emulated = {
            "pushState": !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(o.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(o.userAgent)),
            "hashChange": Boolean(!("onhashchange"in t || "onhashchange"in s) || u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 8)
        },
        u.enabled = !u.emulated.pushState,
        u.bugs = {
            "setHash": Boolean(!u.emulated.pushState && "Apple Computer, Inc." === o.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),
            "safariPoll": Boolean(!u.emulated.pushState && "Apple Computer, Inc." === o.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),
            "ieDoubleCheck": Boolean(u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 8),
            "hashEscape": Boolean(u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 7)
        },
        u.isEmptyObject = function(t) {
            for (var e in t)
                return !1;
            return !0
        }
        ,
        u.cloneObject = function(t) {
            var e, i;
            return t ? (e = c.stringify(t),
            i = c.parse(e)) : i = {},
            i
        }
        ,
        u.getRootUrl = function() {
            var t = s.location.protocol + "//" + (s.location.hostname || s.location.host);
            return s.location.port && (t += ":" + s.location.port),
            t += "/"
        }
        ,
        u.getBaseHref = function() {
            var t = s.getElementsByTagName("base")
              , e = null
              , i = "";
            return 1 === t.length && (e = t[0],
            i = e.href.replace(/[^\/]+$/, "")),
            (i = i.replace(/\/+$/, "")) && (i += "index.html"),
            i
        }
        ,
        u.getBaseUrl = function() {
            return u.getBaseHref() || u.getBasePageUrl() || u.getRootUrl()
        }
        ,
        u.getPageUrl = function() {
            return ((u.getState(!1, !1) || {}).url || s.location.href).replace(/\/+$/, "").replace(/[^\/]+$/, function(t, e, i) {
                return /\./.test(t) ? t : t + "/"
            })
        }
        ,
        u.getBasePageUrl = function() {
            return s.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t, e, i) {
                return /[^\/]$/.test(t) ? "" : t
            }).replace(/\/+$/, "") + "/"
        }
        ,
        u.getFullUrl = function(t, e) {
            var i = t
              , s = t.substring(0, 1);
            return e = void 0 === e || e,
            /[a-z]+\:\/\//.test(t) || (i = "/" === s ? u.getRootUrl() + t.replace(/^\/+/, "") : "#" === s ? u.getPageUrl().replace(/#.*/, "") + t : "?" === s ? u.getPageUrl().replace(/[\?#].*/, "") + t : e ? u.getBaseUrl() + t.replace(/^(\.\/)+/, "") : u.getBasePageUrl() + t.replace(/^(\.\/)+/, "")),
            i.replace(/\#$/, "")
        }
        ,
        u.getShortUrl = function(t) {
            var e = t
              , i = u.getBaseUrl()
              , s = u.getRootUrl();
            return u.emulated.pushState && (e = e.replace(i, "")),
            e = e.replace(s, "index.html"),
            u.isTraditionalAnchor(e) && (e = "./" + e),
            e = e.replace(/^(\.\/)+/g, "index.html").replace(/\#$/, "")
        }
        ,
        u.store = {},
        u.idToState = u.idToState || {},
        u.stateToId = u.stateToId || {},
        u.urlToId = u.urlToId || {},
        u.storedStates = u.storedStates || [],
        u.savedStates = u.savedStates || [],
        u.normalizeStore = function() {
            u.store.idToState = u.store.idToState || {},
            u.store.urlToId = u.store.urlToId || {},
            u.store.stateToId = u.store.stateToId || {}
        }
        ,
        u.getState = function(t, e) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0);
            var i = u.getLastSavedState();
            return !i && e && (i = u.createStateObject()),
            t && (i = u.cloneObject(i),
            i.url = i.cleanUrl || i.url),
            i
        }
        ,
        u.getIdByState = function(t) {
            var e, i = u.extractId(t.url);
            if (!i)
                if (e = u.getStateString(t),
                void 0 !== u.stateToId[e])
                    i = u.stateToId[e];
                else if (void 0 !== u.store.stateToId[e])
                    i = u.store.stateToId[e];
                else {
                    for (; i = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""),
                    void 0 !== u.idToState[i] || void 0 !== u.store.idToState[i]; )
                        ;
                    u.stateToId[e] = i,
                    u.idToState[i] = t
                }
            return i
        }
        ,
        u.normalizeState = function(t) {
            var e, i;
            return t && "object" == typeof t || (t = {}),
            void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}),
            e = {},
            e.normalized = !0,
            e.title = t.title || "",
            e.url = u.getFullUrl(u.unescapeString(t.url || s.location.href)),
            e.hash = u.getShortUrl(e.url),
            e.data = u.cloneObject(t.data),
            e.id = u.getIdByState(e),
            e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""),
            e.url = e.cleanUrl,
            i = !u.isEmptyObject(e.data),
            (e.title || i) && (e.hash = u.getShortUrl(e.url).replace(/\??\&_suid.*/, ""),
            /\?/.test(e.hash) || (e.hash += "?"),
            e.hash += "&_suid=" + e.id),
            e.hashedUrl = u.getFullUrl(e.hash),
            (u.emulated.pushState || u.bugs.safariPoll) && u.hasUrlDuplicate(e) && (e.url = e.hashedUrl),
            e)
        }
        ,
        u.createStateObject = function(t, e, i) {
            var s = {
                "data": t,
                "title": e,
                "url": i
            };
            return s = u.normalizeState(s)
        }
        ,
        u.getStateById = function(t) {
            t = String(t);
            return u.idToState[t] || u.store.idToState[t] || void 0
        }
        ,
        u.getStateString = function(t) {
            var e, i;
            return e = u.normalizeState(t),
            i = {
                "data": e.data,
                "title": t.title,
                "url": t.url
            },
            c.stringify(i)
        }
        ,
        u.getStateId = function(t) {
            var e;
            return e = u.normalizeState(t),
            e.id
        }
        ,
        u.getHashByState = function(t) {
            var e;
            return e = u.normalizeState(t),
            e.hash
        }
        ,
        u.extractId = function(t) {
            var e;
            return e = /(.*)\&_suid=([0-9]+)$/.exec(t),
            e ? e[1] || t : t,
            (e ? String(e[2] || "") : "") || !1
        }
        ,
        u.isTraditionalAnchor = function(t) {
            return !/[\/\?\.]/.test(t)
        }
        ,
        u.extractState = function(t, e) {
            var i, s, o = null;
            return e = e || !1,
            (i = u.extractId(t)) && (o = u.getStateById(i)),
            o || (s = u.getFullUrl(t),
            (i = u.getIdByUrl(s) || !1) && (o = u.getStateById(i)),
            !o && e && !u.isTraditionalAnchor(t) && (o = u.createStateObject(null, null, s))),
            o
        }
        ,
        u.getIdByUrl = function(t) {
            return u.urlToId[t] || u.store.urlToId[t] || void 0
        }
        ,
        u.getLastSavedState = function() {
            return u.savedStates[u.savedStates.length - 1] || void 0
        }
        ,
        u.getLastStoredState = function() {
            return u.storedStates[u.storedStates.length - 1] || void 0
        }
        ,
        u.hasUrlDuplicate = function(t) {
            var e;
            return e = u.extractState(t.url),
            e && e.id !== t.id
        }
        ,
        u.storeState = function(t) {
            return u.urlToId[t.url] = t.id,
            u.storedStates.push(u.cloneObject(t)),
            t
        }
        ,
        u.isLastSavedState = function(t) {
            var e, i, s, o = !1;
            return u.savedStates.length && (e = t.id,
            i = u.getLastSavedState(),
            s = i.id,
            o = e === s),
            o
        }
        ,
        u.saveState = function(t) {
            return !u.isLastSavedState(t) && (u.savedStates.push(u.cloneObject(t)),
            !0)
        }
        ,
        u.getStateByIndex = function(t) {
            return void 0 === t ? u.savedStates[u.savedStates.length - 1] : t < 0 ? u.savedStates[u.savedStates.length + t] : u.savedStates[t]
        }
        ,
        u.getHash = function() {
            return u.unescapeHash(s.location.hash)
        }
        ,
        u.unescapeString = function(e) {
            for (var i, s = e; (i = t.unescape(s)) !== s; )
                s = i;
            return s
        }
        ,
        u.unescapeHash = function(t) {
            var e = u.normalizeHash(t);
            return e = u.unescapeString(e)
        }
        ,
        u.normalizeHash = function(t) {
            return t.replace(/[^#]*#/, "").replace(/#.*/, "")
        }
        ,
        u.setHash = function(t, e) {
            var i, o, r;
            return !1 !== e && u.busy() ? (u.pushQueue({
                "scope": u,
                "callback": u.setHash,
                "args": arguments,
                "queue": e
            }),
            !1) : (i = u.escapeHash(t),
            u.busy(!0),
            (o = u.extractState(t, !0)) && !u.emulated.pushState ? u.pushState(o.data, o.title, o.url, !1) : s.location.hash !== i && (u.bugs.setHash ? (r = u.getPageUrl(),
            u.pushState(null, null, r + "#" + i, !1)) : s.location.hash = i),
            u)
        }
        ,
        u.escapeHash = function(e) {
            var i = u.normalizeHash(e);
            return i = t.escape(i),
            u.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")),
            i
        }
        ,
        u.getHashByUrl = function(t) {
            var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return e = u.unescapeHash(e)
        }
        ,
        u.setTitle = function(t) {
            var e, i = t.title;
            i || (e = u.getStateByIndex(0)) && e.url === t.url && (i = e.title || u.options.initialTitle);
            try {
                s.getElementsByTagName("title")[0].innerHTML = i.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (t) {}
            return s.title = i,
            u
        }
        ,
        u.queues = [],
        u.busy = function(t) {
            if (void 0 !== t ? u.busy.flag = t : void 0 === u.busy.flag && (u.busy.flag = !1),
            !u.busy.flag) {
                a(u.busy.timeout);
                var e = function() {
                    var t, i, s;
                    if (!u.busy.flag)
                        for (t = u.queues.length - 1; t >= 0; --t)
                            0 !== (i = u.queues[t]).length && (s = i.shift(),
                            u.fireQueueItem(s),
                            u.busy.timeout = n(e, u.options.busyDelay))
                };
                u.busy.timeout = n(e, u.options.busyDelay)
            }
            return u.busy.flag
        }
        ,
        u.busy.flag = !1,
        u.fireQueueItem = function(t) {
            return t.callback.apply(t.scope || u, t.args || [])
        }
        ,
        u.pushQueue = function(t) {
            return u.queues[t.queue || 0] = u.queues[t.queue || 0] || [],
            u.queues[t.queue || 0].push(t),
            u
        }
        ,
        u.queue = function(t, e) {
            return "function" == typeof t && (t = {
                "callback": t
            }),
            void 0 !== e && (t.queue = e),
            u.busy() ? u.pushQueue(t) : u.fireQueueItem(t),
            u
        }
        ,
        u.clearQueue = function() {
            return u.busy.flag = !1,
            u.queues = [],
            u
        }
        ,
        u.stateChanged = !1,
        u.doubleChecker = !1,
        u.doubleCheckComplete = function() {
            return u.stateChanged = !0,
            u.doubleCheckClear(),
            u
        }
        ,
        u.doubleCheckClear = function() {
            return u.doubleChecker && (a(u.doubleChecker),
            u.doubleChecker = !1),
            u
        }
        ,
        u.doubleCheck = function(t) {
            return u.stateChanged = !1,
            u.doubleCheckClear(),
            u.bugs.ieDoubleCheck && (u.doubleChecker = n(function() {
                return u.doubleCheckClear(),
                u.stateChanged || t(),
                !0
            }, u.options.doubleCheckInterval)),
            u
        }
        ,
        u.safariStatePoll = function() {
            var e = u.extractState(s.location.href);
            if (!u.isLastSavedState(e))
                return e || u.createStateObject(),
                u.Adapter.trigger(t, "popstate"),
                u
        }
        ,
        u.back = function(t) {
            return !1 !== t && u.busy() ? (u.pushQueue({
                "scope": u,
                "callback": u.back,
                "args": arguments,
                "queue": t
            }),
            !1) : (u.busy(!0),
            u.doubleCheck(function() {
                u.back(!1)
            }),
            p.go(-1),
            !0)
        }
        ,
        u.forward = function(t) {
            return !1 !== t && u.busy() ? (u.pushQueue({
                "scope": u,
                "callback": u.forward,
                "args": arguments,
                "queue": t
            }),
            !1) : (u.busy(!0),
            u.doubleCheck(function() {
                u.forward(!1)
            }),
            p.go(1),
            !0)
        }
        ,
        u.go = function(t, e) {
            var i;
            if (t > 0)
                for (i = 1; i <= t; ++i)
                    u.forward(e);
            else {
                if (!(t < 0))
                    throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (i = -1; i >= t; --i)
                    u.back(e)
            }
            return u
        }
        ,
        u.emulated.pushState) {
            var e = function() {};
            u.pushState = u.pushState || e,
            u.replaceState = u.replaceState || e
        } else
            u.onPopState = function(e, i) {
                var o, r, n = !1, a = !1;
                return u.doubleCheckComplete(),
                (o = u.getHash()) ? ((r = u.extractState(o || s.location.href, !0)) ? u.replaceState(r.data, r.title, r.url, !1) : (u.Adapter.trigger(t, "anchorchange"),
                u.busy(!1)),
                u.expectedStateId = !1,
                !1) : (n = u.Adapter.extractEventData("state", e, i) || !1,
                (a = n ? u.getStateById(n) : u.expectedStateId ? u.getStateById(u.expectedStateId) : u.extractState(s.location.href)) || (a = u.createStateObject(null, null, s.location.href)),
                u.expectedStateId = !1,
                u.isLastSavedState(a) ? (u.busy(!1),
                !1) : (u.storeState(a),
                u.saveState(a),
                u.setTitle(a),
                u.Adapter.trigger(t, "statechange"),
                u.busy(!1),
                !0))
            }
            ,
            u.Adapter.bind(t, "popstate", u.onPopState),
            u.pushState = function(e, i, s, o) {
                if (u.getHashByUrl(s) && u.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== o && u.busy())
                    return u.pushQueue({
                        "scope": u,
                        "callback": u.pushState,
                        "args": arguments,
                        "queue": o
                    }),
                    !1;
                u.busy(!0);
                var r = u.createStateObject(e, i, s);
                return u.isLastSavedState(r) ? u.busy(!1) : (u.storeState(r),
                u.expectedStateId = r.id,
                p.pushState(r.id, r.title, r.url),
                u.Adapter.trigger(t, "popstate")),
                !0
            }
            ,
            u.replaceState = function(e, i, s, o) {
                if (u.getHashByUrl(s) && u.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== o && u.busy())
                    return u.pushQueue({
                        "scope": u,
                        "callback": u.replaceState,
                        "args": arguments,
                        "queue": o
                    }),
                    !1;
                u.busy(!0);
                var r = u.createStateObject(e, i, s);
                return u.isLastSavedState(r) ? u.busy(!1) : (u.storeState(r),
                u.expectedStateId = r.id,
                p.replaceState(r.id, r.title, r.url),
                u.Adapter.trigger(t, "popstate")),
                !0
            }
            ;
        if (r) {
            try {
                u.store = c.parse(r.getItem("History.store")) || {}
            } catch (t) {
                u.store = {}
            }
            u.normalizeStore()
        } else
            u.store = {},
            u.normalizeStore();
        u.Adapter.bind(t, "beforeunload", u.clearAllIntervals),
        u.Adapter.bind(t, "unload", u.clearAllIntervals),
        u.saveState(u.storeState(u.extractState(s.location.href, !0))),
        r && (u.onUnload = function() {
            var t, e;
            try {
                t = c.parse(r.getItem("History.store")) || {}
            } catch (e) {
                t = {}
            }
            t.idToState = t.idToState || {},
            t.urlToId = t.urlToId || {},
            t.stateToId = t.stateToId || {};
            for (e in u.idToState)
                u.idToState.hasOwnProperty(e) && (t.idToState[e] = u.idToState[e]);
            for (e in u.urlToId)
                u.urlToId.hasOwnProperty(e) && (t.urlToId[e] = u.urlToId[e]);
            for (e in u.stateToId)
                u.stateToId.hasOwnProperty(e) && (t.stateToId[e] = u.stateToId[e]);
            u.store = t,
            u.normalizeStore(),
            r.setItem("History.store", c.stringify(t))
        }
        ,
        u.intervalList.push(l(u.onUnload, u.options.storeInterval)),
        u.Adapter.bind(t, "beforeunload", u.onUnload),
        u.Adapter.bind(t, "unload", u.onUnload)),
        u.emulated.pushState || (u.bugs.safariPoll && u.intervalList.push(l(u.safariStatePoll, u.options.safariPollInterval)),
        "Apple Computer, Inc." !== o.vendor && "Mozilla" !== (o.appCodeName || "") || (u.Adapter.bind(t, "hashchange", function() {
            u.Adapter.trigger(t, "popstate")
        }),
        u.getHash() && u.Adapter.onDomLoad(function() {
            u.Adapter.trigger(t, "hashchange")
        })))
    }
    ,
    u.init()
}(window),
function(t) {
    "use strict";
    t.fn.fitVids = function(e) {
        var i = {
            "customSelector": null,
            "ignore": null
        };
        if (!document.getElementById("fit-vids-style")) {
            var s = document.head || document.getElementsByTagName("head")[0]
              , o = document.createElement("div");
            o.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',
            s.appendChild(o.childNodes[1])
        }
        return e && t.extend(i, e),
        this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var s = ".fitvidsignore";
            i.ignore && (s = s + ", " + i.ignore);
            var o = t(this).find(e.join(","));
            (o = (o = o.not("object object")).not(s)).each(function() {
                var e = t(this);
                if (!(e.parents(s).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9),
                    e.attr("width", 16));
                    var i = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                    if (!e.attr("name")) {
                        var o = "fitvid" + t.fn.fitVids._count;
                        e.attr("name", o),
                        t.fn.fitVids._count++
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * i + "%"),
                    e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
    ,
    t.fn.fitVids._count = 0
}(window.jQuery || window.Zepto);
var bezEasing = [.19, 1, .22, 1]
  , bezSwing = [1, 0, 0, 1]
  , bezBounce = [.68, -.55, .265, 1.25];
if ("block" === $(".mobile-test").css("display"))
    var isMobile = !0;
$.fn.isInViewport = function() {
    var t = $(this).offset().top + 200
      , e = t + $(this).outerHeight()
      , i = $(window).scrollTop()
      , s = i + $(window).height();
    return e > i && t < s
}
;
var backgroundColor = function() {
    var t = $(".post-content").attr("data-page-color")
      , e = $("body");
    null == t ? e.css("background-color", "") : e.css("background-color", t)
};
$(window).on("resize scroll load", function() {
    $(".video-play");
    $(".video-play").each(function() {
        var t = $(this);
        t.isInViewport() ? t.get(0).play() : t.get(0).pause()
    })
}),
$(document).ready(function() {
    init(),
    $(".hero-video").fitVids()
}),
function(t, e) {
    var i = t.History
      , s = t.jQuery
      , o = t.document;
    if (!i.enabled)
        return !1;
    s(function() {
        var e = s(".content-wrap").filter(":first")
          , r = e.get(0)
          , n = s(".main-menu ul").filter(":first")
          , a = "current_page_item"
          , l = s(t)
          , d = s(o.body)
          , c = i.getRootUrl();
        0 === e.length && (e = d),
        s.expr[":"].internal = function(t, e, i, o) {
            var r = s(t).attr("href") || "";
            return r.substring(0, c.length) === c || -1 === r.indexOf(":")
        }
        ;
        s.fn.ajaxify = function() {
            var t = s(this);
            return t.find("a:internal:not(.no-ajax)").click(function(t) {
                var e = s(this)
                  , r = e.attr("href")
                  , n = e.attr("title") || null;
                s(".loader");
                return !(2 !== t.which && !t.metaKey) || r !== o.location.href && (i.pushState(null, n, r),
                t.preventDefault(),
                !1)
            }),
            t
        }
        ,
        d.ajaxify(),
        l.bind("statechange", function() {
            var t = i.getState().url
              , d = t.replace(c, "")
              , h = (s(".loader"),
            s(".content-wrap"),
            s(".main-menu"))
              , u = s(".hamburger")
              , p = s(".content-wrap")
              , f = s("body");
            h.velocity("stop").velocity({
                "translateY": "-120%"
            }, {
                "duration": 0,
                "delay": 0,
                "display": "none"
            }),
            s(".loader").velocity({
                "opacity": "1"
            }, {
                "duration": 450,
                "easing": bezSwing,
                "display": "flex",
                "complete": function() {
                    s("html").velocity("scroll", {
                        "duration": 0,
                        "mobileHA": !0
                    }),
                    p.velocity({
                        "translateY": "100%"
                    }, {
                        "duration": 0,
                        "delay": 0,
                        "easing": bezSwing
                    }),
                    f.removeClass("menu-open")
                }
            }),
            s.ajax({
                "url": t,
                "success": function(i, h, f) {
                    var g, y, v, m = s(function(t) {
                        var e = String(t).replace(/<\!DOCTYPE[^>]*>/i, "").replace(/<(html|head|body|title|meta|script)([\s\>])/gi, '<div class="document-$1"$2').replace(/<\/(html|head|body|title|meta|script)\>/gi, "</div>");
                        return s.trim(e)
                    }(i)), S = m.find(".document-body:first").find(".content-wrap").filter(":first");
                    if ((v = S.find(".document-script")).length && v.detach(),
                    !(y = S.html() || m.html()))
                        return o.location.href = t,
                        !1;
                    e.stop(!0),
                    e.html(y).ajaxify(),
                    domScripts(),
                    s(".hamburger-white").length > 0 ? u.addClass("white") : u.removeClass("white"),
                    (g = n.find("li")).filter(".current_page_item").removeClass(a),
                    g = g.has('a[href^="' + d + '"],a[href^="/' + d + '"],a[href^="' + t + '"]'),
                    s("#main-navigation").removeClass("white-navigation"),
                    1 === g.length && g.addClass(a),
                    t === c && (g.removeClass(a),
                    g.first().addClass(a)),
                    o.title = m.find(".document-title:first").text();
                    try {
                        o.getElementsByTagName("title")[0].innerHTML = o.title.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (t) {}
                    v.each(function() {
                        var t = s(this)
                          , e = t.text()
                          , i = o.createElement("script");
                        t.attr("src") && (t[0].async || (i.async = !1),
                        i.src = t.attr("src")),
                        i.appendChild(o.createTextNode(e)),
                        r.appendChild(i)
                    }),
                    s(".loader").velocity({
                        "translateY": "-100%"
                    }, {
                        "duration": 450,
                        "easing": bezSwing,
                        "delay": 650,
                        "display": "none",
                        "complete": function() {
                            s(".loader").velocity({
                                "translateY": "0%"
                            }, {
                                "duration": 0,
                                "delay": 0
                            }),
                            u.velocity({
                                "translateY": "0%"
                            }, {
                                "duration": 450,
                                "easing": bezBounce,
                                "display": "block"
                            }),
                            p.velocity({
                                "translateY": "0%"
                            }, {
                                "duration": 650,
                                "delay": 0,
                                "easing": bezSwing,
                                "complete": function() {
                                    s(".content-wrap").hide().show(0)
                                }
                            })
                        }
                    }),
                    l.trigger("statechangecomplete"),
                    ga("send", "pageview", d)
                },
                "error": function(e, i, s) {
                    return o.location.href = t,
                    !1
                }
            })
        })
    })
}(window);
//# sourceMappingURL=script.min.js.map
