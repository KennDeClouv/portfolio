// !function (e, t) {
//     "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
// }(this, function (e) {
//     "use strict";
//     function _defineProperties(e, t) {
//         for (var r = 0; r < t.length; r++) {
//             var n = t[r];
//             n.enumerable = n.enumerable || !1,
//                 n.configurable = !0,
//                 "value" in n && (n.writable = !0),
//                 Object.defineProperty(e, n.key, n)
//         }
//     }
//     function s() {
//         return "undefined" != typeof window
//     }
//     function t() {
//         return B || s() && (B = window.gsap) && B.registerPlugin && B
//     }
//     function w() {
//         return String.fromCharCode.apply(null, arguments)
//     }
//     function D(e) {
//         return Z.maxScroll(e || L)
//     }
//     var B, F, L, I, j, q, W, Y, Z, K, $, G, J, Q, X, i = "ScrollSmoother", a = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), l = w(103, 115, 97, 112, 46, 99, 111, 109), c = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, r = (function (e) {
//         var t = "undefined" != typeof window
//             , r = 0 === (t ? window.location.href : "").indexOf(w(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(w(108, 111, 99, 97, 108, 104, 111, 115, 116)) || c.test(e) || (t ? window.location.hostname : "").split(".").pop() === w(108, 111, 99, 97, 108)
//             , n = [a, l, w(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), w(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), w(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), w(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), w(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), w(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), w(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), w(99, 100, 112, 110, 46, 105, 111), w(112, 101, 110, 115, 46, 105, 111), w(103, 97, 110, 110, 111, 110, 46, 116, 118), w(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), w(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), w(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), w(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), w(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), w(112, 108, 110, 107, 114, 46, 99, 111), w(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), w(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), w(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), w(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), w(99, 115, 98, 46, 97, 112, 112), w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), w(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), w(99, 111, 100, 105, 101, 114, 46, 105, 111), w(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), w(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), w(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), w(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), w(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), w(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)]
//             , o = n.length;
//         for (setTimeout(function checkWarn() {
//             if (t)
//                 if ("loading" === document.readyState || "interactive" === document.readyState)
//                     document.addEventListener("readystatechange", console.log(  "%cSUCCESS | Ave - Smooth scroll",
//                     "font-size: 20px; color: black; font-weight: bold; background-color: white; padding: 5px 20px;font-family:'Chakra Petch',sans-serif;border-radius:1rem"));

//         }, 50); -1 < --o;)
//             if (-1 !== e.indexOf(n[o]))
//                 return;
//         r || setTimeout(function () {
//             t && (console.log(  "%cCustom Console Log",
//             "font-size: 20px; color: blue; font-weight: bold; background-color: yellow; padding: 5px 25px;"))
//         }, 4e3)
//     }("undefined" != typeof window ? window.location.host : ""),
//         ScrollSmoother.register = function register(e) {
//             return F || (B = e || t(),
//                 s() && window.document && (L = window,
//                     I = document,
//                     j = I.documentElement,
//                     q = I.body),
//                 B && (W = B.utils.toArray,
//                     Y = B.utils.clamp,
//                     $ = B.parseEase("expo"),
//                     Q = B.core.context || function () { }
//                     ,
//                     Z = B.core.globals().ScrollTrigger,
//                     B.core.globals("ScrollSmoother", ScrollSmoother),
//                     q && Z && (X = B.delayedCall(.2, function () {
//                         return Z.isRefreshing || K && K.refresh()
//                     }).pause(),
//                         G = Z.core._getVelocityProp,
//                         J = Z.core._inputObserver,
//                         ScrollSmoother.refresh = Z.refresh,
//                         F = 1))),
//                 F
//         }
//         ,
//         function _createClass(e, t, r) {
//             return t && _defineProperties(e.prototype, t),
//                 r && _defineProperties(e, r),
//                 e
//         }(ScrollSmoother, [{
//             key: "progress",
//             get: function get() {
//                 return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
//             }
//         }]),
//         ScrollSmoother);

//     function ScrollSmoother(t) {
//         var o = this;
//         F || ScrollSmoother.register(B) || console.warn("Please"),
//             t = this.vars = t || {},
//             K && K.kill(),
//             Q(K = this);
//         function Pa() {
//             return U.update(-H)
//         }
//         function Ra() {
//             return n.style.overflow = "visible"
//         }
//         function Ta(e) {
//             e.update();
//             var t = e.getTween();
//             t && (t.pause(),
//                 t._time = t._dur,
//                 t._tTime = t._tDur),
//                 g = !1,
//                 e.animation.progress(e.progress, !0)
//         }

//         function Ua(e, t) {
//             (e !== H && !f || t) && (x && (e = Math.round(e)),
//                 k && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)",
//                     n._gsap.y = e + "px"),
//                 M = e - H,
//                 H = e,
//                 Z.isUpdating || ScrollSmoother.isRefreshing || Z.update())
//         }
//         function Va(e) {
//             return arguments.length ? (e < 0 && (e = 0),
//                 z.y = -e,
//                 g = !0,
//                 f ? H = -e : Ua(-e),
//                 Z.isRefreshing ? i.update() : E(e / A),
//                 this) : -H
//         }
//         function Ya(e) {
//             w.scrollTop = 0,
//                 e.target.contains && e.target.contains(w) || _ && !1 === _(o, e) || (Z.isInViewport(e.target) || e.target === p || o.scrollTo(e.target, !1, "center center"),
//                     p = e.target)
//         }
//         function Za(t, e) {
//             if (t < e.start)
//                 return t;
//             var r = isNaN(e.ratio) ? 1 : e.ratio
//                 , n = e.end - e.start
//                 , o = t - e.start
//                 , i = e.offset || 0
//                 , s = e.pins || []
//                 , a = s.offset || 0
//                 , l = e._startClamp && e.start <= 0 || e.pins && e.pins.offset ? 0 : e._endClamp && e.end === D() ? 1 : .5;
//             return s.forEach(function (e) {
//                 n -= e.distance,
//                     e.nativeStart <= t && (o -= e.distance)
//             }),
//                 a && (o *= (n - a / r) / n),
//                 t + (o - i * l) / r - o
//         }
//         function _a(t, r) {
//             b.forEach(function (e) {
//                 return function adjustEffectRelatedTriggers(e, t, r) {
//                     r || (e.pins.length = e.pins.offset = 0);
//                     var n, o, i, s, a, l, c, f, u = e.pins, d = e.markers;
//                     for (c = 0; c < t.length; c++)
//                         if (f = t[c],
//                             e.trigger && f.trigger && e !== f && (f.trigger === e.trigger || f.pinnedContainer === e.trigger || e.trigger.contains(f.trigger)) && (a = f._startNative || f._startClamp || f.start,
//                                 l = f._endNative || f._endClamp || f.end,
//                                 i = Za(a, e),
//                                 s = f.pin && 0 < l ? i + (l - a) : Za(l, e),
//                                 f.setPositions(i, s, !0, (f._startClamp ? Math.max(0, i) : i) - a),
//                                 f.markerStart && d.push(B.quickSetter([f.markerStart, f.markerEnd], "y", "px")),
//                                 f.pin && 0 < f.end && !r)) {
//                             if (n = f.end - f.start,
//                                 o = e._startClamp && f.start < 0) {
//                                 if (0 < e.start)
//                                     return e.setPositions(0, e.end + (e._startNative - e.start), !0),
//                                         void adjustEffectRelatedTriggers(e, t);
//                                 n += f.start,
//                                     u.offset = -f.start
//                             }
//                             u.push({
//                                 start: f.start,
//                                 nativeStart: a,
//                                 end: f.end,
//                                 distance: n,
//                                 trig: f
//                             }),
//                                 e.setPositions(e.start, e.end + (o ? -f.start : n), !0)
//                         }
//                 }(e, t, r)
//             })
//         }
//         function ab() {
//             Ra(),
//                 requestAnimationFrame(Ra),
//                 b && (Z.getAll().forEach(function (e) {
//                     e._startNative = e.start,
//                         e._endNative = e.end
//                 }),
//                     b.forEach(function (e) {
//                         var t = e._startClamp || e.start
//                             , r = e.autoSpeed ? Math.min(D(), e.end) : t + Math.abs((e.end - t) / e.ratio)
//                             , n = r - e.end;
//                         if ((r -= n / 2) < (t -= n / 2)) {
//                             var o = t;
//                             t = r,
//                                 r = o
//                         }
//                         e._startClamp && t < 0 ? (n = (r = e.ratio < 0 ? D() : e.end / e.ratio) - e.end,
//                             t = 0) : (e.ratio < 0 || e._endClamp && r >= D()) && (n = ((r = D()) - (t = e.ratio < 0 || 1 < e.ratio ? 0 : r - (r - e.start) / e.ratio)) * e.ratio - (e.end - e.start)),
//                             e.offset = n || 1e-4,
//                             e.pins.length = e.pins.offset = 0,
//                             e.setPositions(t, r, !0)
//                     }),
//                     _a(Z.sort())),
//                 U.reset()
//         }
//         function bb() {
//             return Z.addEventListener("refresh", ab)
//         }
//         function cb() {
//             return b && b.forEach(function (e) {
//                 return e.vars.onRefresh(e)
//             })
//         }
//         function db() {
//             return b && b.forEach(function (e) {
//                 return e.vars.onRefreshInit(e)
//             }),
//                 cb
//         }
//         function eb(r, n, o, i) {
//             return function () {
//                 var e = "function" == typeof n ? n(o, i) : n;
//                 e || 0 === e || (e = i.getAttribute("data-" + R + r) || ("speed" === r ? 1 : 0)),
//                     i.setAttribute("data-" + R + r, e);
//                 var t = "clamp(" === (e + "").substr(0, 6);
//                 return {
//                     clamp: t,
//                     value: t ? e.substr(6, e.length - 7) : e
//                 }
//             }
//         }
//         function fb(r, e, t, n, o) {
//             function qc() {
//                 e = u(),
//                     t = parseFloat(d().value),
//                     i = parseFloat(e.value) || 1,
//                     a = "auto" === e.value,
//                     c = a || s && s._startClamp && s.start <= 0 || p.offset ? 0 : s && s._endClamp && s.end === D() ? 1 : .5,
//                     l && l.kill(),
//                     l = t && B.to(r, {
//                         ease: $,
//                         overwrite: !1,
//                         y: "+=0",
//                         duration: t
//                     }),
//                     s && (s.ratio = i,
//                         s.autoSpeed = a)
//             }
//             function rc() {
//                 g.y = h + "px",
//                     g.renderTransform(1),
//                     qc()
//             }
//             function uc(e) {
//                 if (a) {
//                     rc();
//                     var t = function _autoDistance(e, t) {
//                         var r, n, o = e.parentNode || j, i = e.getBoundingClientRect(), s = o.getBoundingClientRect(), a = s.top - i.top, l = s.bottom - i.bottom, c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t), f = -c * t;
//                         return 0 < c && (n = .5 == (r = s.height / (L.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, Math.abs(-c * r / (2 * r - 1))) * (t || 1),
//                             f += t ? -n * t : -n / 2,
//                             c += n),
//                         {
//                             change: c,
//                             offset: f
//                         }
//                     }(r, Y(0, 1, -e.start / (e.end - e.start)));
//                     v = t.change,
//                         f = t.offset
//                 } else
//                     f = p.offset || 0,
//                         v = (e.end - e.start - f) * (1 - i);
//                 p.forEach(function (e) {
//                     return v -= e.distance * (1 - i)
//                 }),
//                     e.offset = v || .001,
//                     e.vars.onUpdate(e),
//                     l && l.progress(1)
//             }
//             o = ("function" == typeof o ? o(n, r) : o) || 0;
//             var i, s, a, l, c, f, u = eb("speed", e, n, r), d = eb("lag", t, n, r), h = B.getProperty(r, "y"), g = r._gsap, p = [], m = [], v = 0;
//             return qc(),
//                 (1 !== i || a || l) && (uc(s = Z.create({
//                     trigger: a ? r.parentNode : r,
//                     start: function start() {
//                         return e.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o
//                     },
//                     end: function end() {
//                         return e.value < 0 ? "max" : e.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o
//                     },
//                     scroller: w,
//                     scrub: !0,
//                     refreshPriority: -999,
//                     onRefreshInit: rc,
//                     onRefresh: uc,
//                     onKill: function onKill(e) {
//                         var t = b.indexOf(e);
//                         0 <= t && b.splice(t, 1),
//                             rc()
//                     },
//                     onUpdate: function onUpdate(e) {
//                         var t, r, n, o = h + v * (e.progress - c), i = p.length, s = 0;
//                         if (e.offset) {
//                             if (i) {
//                                 for (r = -H,
//                                     n = e.end; i--;) {
//                                     if ((t = p[i]).trig.isActive || r >= t.start && r <= t.end)
//                                         return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001,
//                                             t.trig.update(0, 0, 1),
//                                             l.resetTo("y", parseFloat(g.y), -M, !0),
//                                             N && l.progress(1)));
//                                     r > t.end && (s += t.distance),
//                                         n -= t.distance
//                                 }
//                                 o = h + s + v * ((B.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c)
//                             }
//                             m.length && !a && m.forEach(function (e) {
//                                 return e(o - s)
//                             }),
//                                 o = function _round(e) {
//                                     return Math.round(1e5 * e) / 1e5 || 0
//                                 }(o + f),
//                                 l ? (l.resetTo("y", o, -M, !0),
//                                     N && l.progress(1)) : (g.y = o + "px",
//                                         g.renderTransform(1))
//                         }
//                     }
//                 })),
//                     B.core.getCache(s.trigger).stRevert = db,
//                     s.startY = h,
//                     s.pins = p,
//                     s.markers = m,
//                     s.ratio = i,
//                     s.autoSpeed = a,
//                     r.style.willChange = "transform"),
//                 s
//         }
//         var n, w, e, i, b, s, a, l, c, f, r, u, d, h, g, p, m = t.smoothTouch, v = t.onUpdate, S = t.onStop, T = t.smooth, _ = t.onFocusIn, C = t.normalizeScroll, x = t.wholePixels, P = this, R = t.effectsPrefix || "", E = Z.getScrollFunc(L), k = 1 === Z.isTouch ? !0 === m ? .8 : parseFloat(m) || 0 : 0 === T || !1 === T ? 0 : parseFloat(T) || .8, A = k && +t.speed || 1, H = 0, M = 0, N = 1, U = G(0), z = {
//             y: 0
//         }, O = "undefined" != typeof ResizeObserver && !1 !== t.autoResize && new ResizeObserver(function () {
//             if (!Z.isRefreshing) {
//                 var e = D(w) * A;
//                 e < -H && Va(e),
//                     X.restart(!0)
//             }
//         }
//         );
//         function refreshHeight() {
//             return e = n.clientHeight,
//                 n.style.overflow = "visible",
//                 q.style.height = L.innerHeight + (e - L.innerHeight) / A + "px",
//                 e - L.innerHeight
//         }
//         bb(),
//             Z.addEventListener("killAll", bb),
//             B.delayedCall(.5, function () {
//                 return N = 0
//             }),
//             this.scrollTop = Va,
//             this.scrollTo = function (e, t, r) {
//                 var n = B.utils.clamp(0, D(), isNaN(e) ? o.offset(e, r, !!t && !f) : +e);
//                 t ? f ? B.to(o, {
//                     duration: k,
//                     scrollTop: n,
//                     overwrite: "auto",
//                     ease: $
//                 }) : E(n) : Va(n)
//             }
//             ,
//             this.offset = function (e, t, r) {
//                 var n, o = (e = W(e)[0]).style.cssText, i = Z.create({
//                     trigger: e,
//                     start: t || "top top"
//                 });
//                 return b && (N ? Z.refresh() : _a([i], !0)),
//                     n = i.start / (r ? A : 1),
//                     i.kill(!1),
//                     e.style.cssText = o,
//                     B.core.getCache(e).uncache = 1,
//                     n
//             }
//             ,
//             this.content = function (e) {
//                 if (arguments.length) {
//                     var t = W(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || q.children[0];
//                     return t !== n && (c = (n = t).getAttribute("style") || "",
//                         O && O.observe(n),
//                         B.set(n, {
//                             overflow: "visible",
//                             width: "100%",
//                             boxSizing: "border-box",
//                             y: "+=0"
//                         }),
//                         k || B.set(n, {
//                             clearProps: "transform"
//                         })),
//                         this
//                 }
//                 return n
//             }
//             ,
//             this.wrapper = function (e) {
//                 return arguments.length ? (w = W(e || "#smooth-wrapper")[0] || function _wrap(e) {
//                     var t = I.querySelector(".ScrollSmoother-wrapper");
//                     return t || ((t = I.createElement("div")).classList.add("ScrollSmoother-wrapper"),
//                         e.parentNode.insertBefore(t, e),
//                         t.appendChild(e)),
//                         t
//                 }(n),
//                     l = w.getAttribute("style") || "",
//                     refreshHeight(),
//                     B.set(w, k ? {
//                         overflow: "hidden",
//                         position: "fixed",
//                         height: "100%",
//                         width: "100%",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0
//                     } : {
//                         overflow: "visible",
//                         position: "relative",
//                         width: "100%",
//                         height: "auto",
//                         top: "auto",
//                         bottom: "auto",
//                         left: "auto",
//                         right: "auto"
//                     }),
//                     this) : w
//             }
//             ,
//             this.effects = function (e, t) {
//                 if (b = b || [],
//                     !e)
//                     return b.slice(0);
//                 (e = W(e)).forEach(function (e) {
//                     for (var t = b.length; t--;)
//                         b[t].trigger === e && b[t].kill()
//                 });
//                 t = t || {};
//                 var r, n, o = t.speed, i = t.lag, s = t.effectsPadding, a = [];
//                 for (r = 0; r < e.length; r++)
//                     (n = fb(e[r], o, i, r, s)) && a.push(n);
//                 return b.push.apply(b, a),
//                     !1 !== t.refresh && Z.refresh(),
//                     a
//             }
//             ,
//             this.sections = function (e, t) {
//                 if (s = s || [],
//                     !e)
//                     return s.slice(0);
//                 var r = W(e).map(function (t) {
//                     return Z.create({
//                         trigger: t,
//                         start: "top 120%",
//                         end: "bottom -20%",
//                         onToggle: function onToggle(e) {
//                             t.style.opacity = e.isActive ? "1" : "0",
//                                 t.style.pointerEvents = e.isActive ? "all" : "none"
//                         }
//                     })
//                 });
//                 return t && t.add ? s.push.apply(s, r) : s = r.slice(0),
//                     r
//             }
//             ,
//             this.content(t.content),
//             this.wrapper(t.wrapper),
//             this.render = function (e) {
//                 return Ua(e || 0 === e ? e : H)
//             }
//             ,
//             this.getVelocity = function () {
//                 return U.getVelocity(-H)
//             }
//             ,
//             Z.scrollerProxy(w, {
//                 scrollTop: Va,
//                 scrollHeight: function scrollHeight() {
//                     return refreshHeight() && q.scrollHeight
//                 },
//                 fixedMarkers: !1 !== t.fixedMarkers && !!k,
//                 content: n,
//                 getBoundingClientRect: function getBoundingClientRect() {
//                     return {
//                         top: 0,
//                         left: 0,
//                         width: L.innerWidth,
//                         height: L.innerHeight
//                     }
//                 }
//             }),
//             Z.defaults({
//                 scroller: w
//             });
//         var V = Z.getAll().filter(function (e) {
//             return e.scroller === L || e.scroller === w
//         });
//         V.forEach(function (e) {
//             return e.revert(!0, !0)
//         }),
//             i = Z.create({
//                 animation: B.fromTo(z, {
//                     y: function y() {
//                         return h = 0
//                     }
//                 }, {
//                     y: function y() {
//                         return h = 1,
//                             -refreshHeight()
//                     },
//                     immediateRender: !1,
//                     ease: "none",
//                     data: "ScrollSmoother",
//                     duration: 100,
//                     onUpdate: function onUpdate() {
//                         if (h) {
//                             var e = g;
//                             e && (Ta(i),
//                                 z.y = H),
//                                 Ua(z.y, e),
//                                 Pa(),
//                                 v && !f && v(P)
//                         }
//                     }
//                 }),
//                 onRefreshInit: function onRefreshInit(e) {
//                     if (!ScrollSmoother.isRefreshing) {
//                         if (ScrollSmoother.isRefreshing = !0,
//                             b) {
//                             var t = Z.getAll().filter(function (e) {
//                                 return !!e.pin
//                             });
//                             b.forEach(function (r) {
//                                 r.vars.pinnedContainer || t.forEach(function (e) {
//                                     if (e.pin.contains(r.trigger)) {
//                                         var t = r.vars;
//                                         t.pinnedContainer = e.pin,
//                                             r.vars = null,
//                                             r.init(t, r.animation)
//                                     }
//                                 })
//                             })
//                         }
//                         var r = e.getTween();
//                         d = r && r._end > r._dp._time,
//                             u = H,
//                             z.y = 0,
//                             k && (1 === Z.isTouch && (w.style.position = "absolute"),
//                                 w.scrollTop = 0,
//                                 1 === Z.isTouch && (w.style.position = "fixed"))
//                     }
//                 },
//                 onRefresh: function onRefresh(e) {
//                     e.animation.invalidate(),
//                         e.setPositions(e.start, refreshHeight() / A),
//                         d || Ta(e),
//                         z.y = -E() * A,
//                         Ua(z.y),
//                         N || (d && (g = !1),
//                             e.animation.progress(B.utils.clamp(0, 1, u / A / -e.end))),
//                         d && (e.progress -= .001,
//                             e.update()),
//                         ScrollSmoother.isRefreshing = !1
//                 },
//                 id: "ScrollSmoother",
//                 scroller: L,
//                 invalidateOnRefresh: !0,
//                 start: 0,
//                 refreshPriority: -9999,
//                 end: function end() {
//                     return refreshHeight() / A
//                 },
//                 onScrubComplete: function onScrubComplete() {
//                     U.reset(),
//                         S && S(o)
//                 },
//                 scrub: k || !0
//             }),
//             this.smooth = function (e) {
//                 return arguments.length && (A = (k = e || 0) && +t.speed || 1,
//                     i.scrubDuration(e)),
//                     i.getTween() ? i.getTween().duration() : 0
//             }
//             ,
//             i.getTween() && (i.getTween().vars.ease = t.ease || $),
//             this.scrollTrigger = i,
//             t.effects && this.effects(!0 === t.effects ? "[data-" + R + "speed], [data-" + R + "lag]" : t.effects, {
//                 effectsPadding: t.effectsPadding,
//                 refresh: !1
//             }),
//             t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections),
//             V.forEach(function (e) {
//                 e.vars.scroller = w,
//                     e.revert(!1, !0),
//                     e.init(e.vars, e.animation)
//             }),
//             this.paused = function (e, t) {
//                 return arguments.length ? (!!f !== e && (e ? (i.getTween() && i.getTween().pause(),
//                     E(-H / A),
//                     U.reset(),
//                     (r = Z.normalizeScroll()) && r.disable(),
//                     (f = Z.observe({
//                         preventDefault: !0,
//                         type: "wheel,touch,scroll",
//                         debounce: !1,
//                         allowClicks: !0,
//                         onChangeY: function onChangeY() {
//                             return Va(-H)
//                         }
//                     })).nested = J(j, "wheel,touch,scroll", !0, !1 !== t)) : (f.nested.kill(),
//                         f.kill(),
//                         f = 0,
//                         r && r.enable(),
//                         i.progress = (-H / A - i.start) / (i.end - i.start),
//                         Ta(i))),
//                     this) : !!f
//             }
//             ,
//             this.kill = this.revert = function () {
//                 o.paused(!1),
//                     Ta(i),
//                     i.kill();
//                 for (var e = (b || []).concat(s || []), t = e.length; t--;)
//                     e[t].kill();
//                 Z.scrollerProxy(w),
//                     Z.removeEventListener("killAll", bb),
//                     Z.removeEventListener("refresh", ab),
//                     w.style.cssText = l,
//                     n.style.cssText = c;
//                 var r = Z.defaults({});
//                 r && r.scroller === w && Z.defaults({
//                     scroller: L
//                 }),
//                     o.normalizer && Z.normalizeScroll(!1),
//                     clearInterval(a),
//                     K = null,
//                     O && O.disconnect(),
//                     q.style.removeProperty("height"),
//                     L.removeEventListener("focusin", Ya)
//             }
//             ,
//             this.refresh = function (e, t) {
//                 return i.refresh(e, t)
//             }
//             ,
//             C && (this.normalizer = Z.normalizeScroll(!0 === C ? {
//                 debounce: !0,
//                 content: !k && n
//             } : C)),
//             Z.config(t),
//             "overscrollBehavior" in L.getComputedStyle(q) && B.set([q, j], {
//                 overscrollBehavior: "none"
//             }),
//             "scrollBehavior" in L.getComputedStyle(q) && B.set([q, j], {
//                 scrollBehavior: "auto"
//             }),
//             L.addEventListener("focusin", Ya),
//             a = setInterval(Pa, 250),
//             "loading" === I.readyState || requestAnimationFrame(function () {
//                 return Z.refresh()
//             })
//     }
//     r.version = "1.0.0",
//         r.create = function (e) {
//             return K && e && K.content() === W(e.content)[0] ? K : new r(e)
//         }
//         ,
//         r.get = function () {
//             return K
//         }
//         ,
//         t() && B.registerPlugin(r),
//         e.ScrollSmoother = r,
//         e.default = r;
//     if (typeof (window) === "undefined" || window !== e) {
//         Object.defineProperty(e, "__esModule", {
//             value: !0
//         })
//     } else {
//         delete e.default
//     }
// });

let e, t, r, o, s, i, n, a, l, c, d, h, f, g, p, u = () => "undefined" != typeof window, m = () => e || u() && (e = window.gsap) && e.registerPlugin && e, v = function () {
    return String.fromCharCode.apply(null, arguments)
}
    , y = v(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), w = v(103, 115, 97, 112, 46, 99, 111, 109),
    b = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, S = (function (t) {
        // var r = "undefined" != typeof window
        // , o = 0 === (r ? window.location.href : "").indexOf(v(102, 105, 108, 101, 58, 47, 47)) || -1 !== t.indexOf(v(108, 111, 99, 97, 108, 104, 111, 115, 116)) || b.test(t) || (r ? window.location.hostname : "").split(".").pop() === v(108, 111, 99, 97, 108)
        // , s = [y, w, v(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), v(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), v(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), v(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), v(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), v(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), v(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), v(99, 100, 112, 110, 46, 105, 111), v(112, 101, 110, 115, 46, 105, 111), v(103, 97, 110, 110, 111, 110, 46, 116, 118), v(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), v(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), v(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), v(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), v(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), v(112, 108, 110, 107, 114, 46, 99, 111), v(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), v(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), v(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), v(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), v(99, 115, 98, 46, 97, 112, 112), v(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), v(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), v(99, 111, 100, 105, 101, 114, 46, 105, 111), v(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), v(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), v(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), v(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), v(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), v(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)]
        // , i = function () {
        //     if (r)
        //         if ("loading" === document.readyState || "interactive" === document.readyState)
        //             document.addEventListener("readystatechange", i);
        //         else {
        //             document.removeEventListener("readystatechange", i);
        //             var t = "object" == typeof e ? e : r && window.gsap;
        //             r && window.console && !window._gsapWarned && "object" == typeof t && !1 !== t.config().trialWarn && (console.log(v(37, 99, 87, 97, 114, 110, 105, 110, 103), v(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)),
        //                 console.log(v(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + "ScrollSmoother" + v(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)),
        //                 console.log(v(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), v(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)),
        //                 window._gsapWarned = 1)
        //         }
        // }
        // , n = s.length;
        for (setTimeout(i, 50); --n > -1;)
            if (-1 !== t.indexOf(s[n]))
                return !0;
        o || setTimeout((function () {
            r && (console.log("woilahh"))
        }
        ), 4e3)
    }
        ("undefined" != typeof window ? window.location.host : ""),
        e => l.maxScroll(e || r)), T = e => {
            let t = o.querySelector(".ScrollSmoother-wrapper");
            return t || (t = o.createElement("div"),
                t.classList.add("ScrollSmoother-wrapper"),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e)),
                t
        }
    ;
class x {
    constructor(u) {
        t || x.register(e) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
            u = this.vars = u || {},
            c && c.kill(),
            c = this,
            g(this);
        let m, v, y, w, b, C, _, E, P, R, k, A, N, M, z, F, { smoothTouch: L, onUpdate: B, onStop: H, smooth: O, onFocusIn: I, normalizeScroll: U, wholePixels: q } = u, V = this, W = u.effectsPrefix || "", D = l.getScrollFunc(r), j = 1 === l.isTouch ? !0 === L ? .8 : parseFloat(L) || 0 : 0 === O || !1 === O ? 0 : parseFloat(O) || .8, Y = j && +u.speed || 1, K = 0, $ = 0, G = 1, J = h(0), Q = () => J.update(-K), X = {
            y: 0
        }, Z = () => m.style.overflow = "visible", ee = e => {
            e.update();
            let t = e.getTween();
            t && (t.pause(),
                t._time = t._dur,
                t._tTime = t._tDur),
                z = !1,
                e.animation.progress(e.progress, !0)
        }
            , te = (e, t) => {
                (e !== K && !R || t) && (q && (e = Math.round(e)),
                    j && (m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)",
                        m._gsap.y = e + "px"),
                    $ = e - K,
                    K = e,
                    l.isUpdating || x.isRefreshing || l.update())
            }
            , re = function (e) {
                return arguments.length ? (e < 0 && (e = 0),
                    X.y = -e,
                    z = !0,
                    R ? K = -e : te(-e),
                    l.isRefreshing ? w.update() : D(e / Y),
                    this) : -K
            }, oe = "undefined" != typeof ResizeObserver && !1 !== u.autoResize && new ResizeObserver(() => {
                if (!l.isRefreshing) {
                    let e = S(v) * Y;
                    e < -K && re(e),
                        p.restart(!0)
                }
            }
            ), se = e => {
                v.scrollTop = 0,
                    e.target.contains && e.target.contains(v) || I && !1 === I(this, e) || (l.isInViewport(e.target) || e.target === F || this.scrollTo(e.target, !1, "center center"),
                        F = e.target)
            }
            , ie = (e, t) => {
                if (e < t.start)
                    return e;
                let r = isNaN(t.ratio) ? 1 : t.ratio
                    , o = t.end - t.start
                    , s = e - t.start
                    , i = t.offset || 0
                    , n = t.pins || []
                    , a = n.offset || 0
                    , l = t._startClamp && t.start <= 0 || t.pins && t.pins.offset ? 0 : t._endClamp && t.end === S() ? 1 : .5;
                return n.forEach(t => {
                    o -= t.distance,
                        t.nativeStart <= e && (s -= t.distance)
                }
                ),
                    a && (s *= (o - a / r) / o),
                    e + (s - i * l) / r - s
            }
            , ne = (t, r, o) => {
                o || (t.pins.length = t.pins.offset = 0);
                let s, i, n, a, l, c, d, h, f = t.pins, g = t.markers;
                for (d = 0; d < r.length; d++)
                    if (h = r[d],
                        t.trigger && h.trigger && t !== h && (h.trigger === t.trigger || h.pinnedContainer === t.trigger || t.trigger.contains(h.trigger)) && (l = h._startNative || h._startClamp || h.start,
                            c = h._endNative || h._endClamp || h.end,
                            n = ie(l, t),
                            a = h.pin && c > 0 ? n + (c - l) : ie(c, t),
                            h.setPositions(n, a, !0, (h._startClamp ? Math.max(0, n) : n) - l),
                            h.markerStart && g.push(e.quickSetter([h.markerStart, h.markerEnd], "y", "px")),
                            h.pin && h.end > 0 && !o)) {
                        if (s = h.end - h.start,
                            i = t._startClamp && h.start < 0,
                            i) {
                            if (t.start > 0)
                                return t.setPositions(0, t.end + (t._startNative - t.start), !0),
                                    void ne(t, r);
                            s += h.start,
                                f.offset = -h.start
                        }
                        f.push({
                            start: h.start,
                            nativeStart: l,
                            end: h.end,
                            distance: s,
                            trig: h
                        }),
                            t.setPositions(t.start, t.end + (i ? -h.start : s), !0)
                    }
            }
            , ae = (e, t) => {
                b.forEach(r => ne(r, e, t))
            }
            , le = () => {
                Z(),
                    requestAnimationFrame(Z),
                    b && (l.getAll().forEach(e => {
                        e._startNative = e.start,
                            e._endNative = e.end
                    }
                    ),
                        b.forEach(e => {
                            let t = e._startClamp || e.start
                                , r = e.autoSpeed ? Math.min(S(), e.end) : t + Math.abs((e.end - t) / e.ratio)
                                , o = r - e.end;
                            if (t -= o / 2,
                                r -= o / 2,
                                t > r) {
                                let e = t;
                                t = r,
                                    r = e
                            }
                            e._startClamp && t < 0 ? (r = e.ratio < 0 ? S() : e.end / e.ratio,
                                o = r - e.end,
                                t = 0) : (e.ratio < 0 || e._endClamp && r >= S()) && (r = S(),
                                    t = e.ratio < 0 || e.ratio > 1 ? 0 : r - (r - e.start) / e.ratio,
                                    o = (r - t) * e.ratio - (e.end - e.start)),
                                e.offset = o || 1e-4,
                                e.pins.length = e.pins.offset = 0,
                                e.setPositions(t, r, !0)
                        }
                        ),
                        ae(l.sort())),
                    J.reset()
            }
            , ce = () => l.addEventListener("refresh", le), de = () => b && b.forEach(e => e.vars.onRefresh(e)), he = () => (b && b.forEach(e => e.vars.onRefreshInit(e)),
                de), fe = (e, t, r, o) => () => {
                    let s = "function" == typeof t ? t(r, o) : t;
                    s || 0 === s || (s = o.getAttribute("data-" + W + e) || ("speed" === e ? 1 : 0)),
                        o.setAttribute("data-" + W + e, s);
                    let i = "clamp(" === (s + "").substr(0, 6);
                    return {
                        clamp: i,
                        value: i ? s.substr(6, s.length - 7) : s
                    }
                }
            , ge = (t, o, i, n, c) => {
                c = ("function" == typeof c ? c(n, t) : c) || 0;
                let h, f, g, p, u, m, y = fe("speed", o, n, t), w = fe("lag", i, n, t), T = e.getProperty(t, "y"), x = t._gsap, C = [], _ = () => {
                    o = y(),
                        i = parseFloat(w().value),
                        h = parseFloat(o.value) || 1,
                        g = "auto" === o.value,
                        u = g || f && f._startClamp && f.start <= 0 || C.offset ? 0 : f && f._endClamp && f.end === S() ? 1 : .5,
                        p && p.kill(),
                        p = i && e.to(t, {
                            ease: d,
                            overwrite: !1,
                            y: "+=0",
                            duration: i
                        }),
                        f && (f.ratio = h,
                            f.autoSpeed = g)
                }
                    , E = () => {
                        x.y = T + "px",
                            x.renderTransform(1),
                            _()
                    }
                    , P = [], R = 0, k = e => {
                        if (g) {
                            E();
                            let o = ((e, t) => {
                                let o, i, n = e.parentNode || s, a = e.getBoundingClientRect(), l = n.getBoundingClientRect(), c = l.top - a.top, d = l.bottom - a.bottom, h = (Math.abs(c) > Math.abs(d) ? c : d) / (1 - t), f = -h * t;
                                return h > 0 && (o = l.height / (r.innerHeight + l.height),
                                    i = .5 === o ? 2 * l.height : 2 * Math.min(l.height, Math.abs(-h * o / (2 * o - 1))) * (t || 1),
                                    f += t ? -i * t : -i / 2,
                                    h += i),
                                {
                                    change: h,
                                    offset: f
                                }
                            }
                            )(t, a(0, 1, -e.start / (e.end - e.start)));
                            R = o.change,
                                m = o.offset
                        } else
                            m = C.offset || 0,
                                R = (e.end - e.start - m) * (1 - h);
                        C.forEach(e => R -= e.distance * (1 - h)),
                            e.offset = R || .001,
                            e.vars.onUpdate(e),
                            p && p.progress(1)
                    }
                    ;
                return _(),
                    (1 !== h || g || p) && (f = l.create({
                        trigger: g ? t.parentNode : t,
                        start: () => o.clamp ? "clamp(top bottom+=" + c + ")" : "top bottom+=" + c,
                        end: () => o.value < 0 ? "max" : o.clamp ? "clamp(bottom top-=" + c + ")" : "bottom top-=" + c,
                        scroller: v,
                        scrub: !0,
                        refreshPriority: -999,
                        onRefreshInit: E,
                        onRefresh: k,
                        onKill: e => {
                            let t = b.indexOf(e);
                            t >= 0 && b.splice(t, 1),
                                E()
                        }
                        ,
                        onUpdate: t => {
                            let r, o, s, i = T + R * (t.progress - u), n = C.length, a = 0;
                            if (t.offset) {
                                if (n) {
                                    for (o = -K,
                                        s = t.end; n--;) {
                                        if (r = C[n],
                                            r.trig.isActive || o >= r.start && o <= r.end)
                                            return void (p && (r.trig.progress += r.trig.direction < 0 ? .001 : -.001,
                                                r.trig.update(0, 0, 1),
                                                p.resetTo("y", parseFloat(x.y), -$, !0),
                                                G && p.progress(1)));
                                        o > r.end && (a += r.distance),
                                            s -= r.distance
                                    }
                                    i = T + a + R * ((e.utils.clamp(t.start, t.end, o) - t.start - a) / (s - t.start) - u)
                                }
                                P.length && !g && P.forEach(e => e(i - a)),
                                    l = i + m,
                                    i = Math.round(1e5 * l) / 1e5 || 0,
                                    p ? (p.resetTo("y", i, -$, !0),
                                        G && p.progress(1)) : (x.y = i + "px",
                                            x.renderTransform(1))
                            }
                            var l
                        }
                    }),
                        k(f),
                        e.core.getCache(f.trigger).stRevert = he,
                        f.startY = T,
                        f.pins = C,
                        f.markers = P,
                        f.ratio = h,
                        f.autoSpeed = g,
                        t.style.willChange = "transform"),
                    f
            }
            ;
        function pe() {
            return y = m.clientHeight,
                m.style.overflow = "visible",
                i.style.height = r.innerHeight + (y - r.innerHeight) / Y + "px",
                y - r.innerHeight
        }
        ce(),
            l.addEventListener("killAll", ce),
            e.delayedCall(.5, () => G = 0),
            this.scrollTop = re,
            this.scrollTo = (t, r, o) => {
                let s = e.utils.clamp(0, S(), isNaN(t) ? this.offset(t, o, !!r && !R) : +t);
                r ? R ? e.to(this, {
                    duration: j,
                    scrollTop: s,
                    overwrite: "auto",
                    ease: d
                }) : D(s) : re(s)
            }
            ,
            this.offset = (t, r, o) => {
                let s, i = (t = n(t)[0]).style.cssText, a = l.create({
                    trigger: t,
                    start: r || "top top"
                });
                return b && (G ? l.refresh() : ae([a], !0)),
                    s = a.start / (o ? Y : 1),
                    a.kill(!1),
                    t.style.cssText = i,
                    e.core.getCache(t).uncache = 1,
                    s
            }
            ,
            this.content = function (t) {
                if (arguments.length) {
                    let r = n(t || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || i.children[0];
                    return r !== m && (m = r,
                        P = m.getAttribute("style") || "",
                        oe && oe.observe(m),
                        e.set(m, {
                            overflow: "visible",
                            width: "100%",
                            boxSizing: "border-box",
                            y: "+=0"
                        }),
                        j || e.set(m, {
                            clearProps: "transform"
                        })),
                        this
                }
                return m
            }
            ,
            this.wrapper = function (t) {
                return arguments.length ? (v = n(t || "#smooth-wrapper")[0] || T(m),
                    E = v.getAttribute("style") || "",
                    pe(),
                    e.set(v, j ? {
                        overflow: "hidden",
                        position: "fixed",
                        height: "100%",
                        width: "100%",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    } : {
                        overflow: "visible",
                        position: "relative",
                        width: "100%",
                        height: "auto",
                        top: "auto",
                        bottom: "auto",
                        left: "auto",
                        right: "auto"
                    }),
                    this) : v
            }
            ,
            this.effects = (e, t) => {
                if (b || (b = []),
                    !e)
                    return b.slice(0);
                (e = n(e)).forEach(e => {
                    let t = b.length;
                    for (; t--;)
                        b[t].trigger === e && b[t].kill()
                }
                ),
                    t = t || {};
                let r, o, { speed: s, lag: i, effectsPadding: a } = t, c = [];
                for (r = 0; r < e.length; r++)
                    o = ge(e[r], s, i, r, a),
                        o && c.push(o);
                return b.push(...c),
                    !1 !== t.refresh && l.refresh(),
                    c
            }
            ,
            this.sections = (e, t) => {
                if (C || (C = []),
                    !e)
                    return C.slice(0);
                let r = n(e).map(e => l.create({
                    trigger: e,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: t => {
                        e.style.opacity = t.isActive ? "1" : "0",
                            e.style.pointerEvents = t.isActive ? "all" : "none"
                    }
                }));
                return t && t.add ? C.push(...r) : C = r.slice(0),
                    r
            }
            ,
            this.content(u.content),
            this.wrapper(u.wrapper),
            this.render = e => te(e || 0 === e ? e : K),
            this.getVelocity = () => J.getVelocity(-K),
            l.scrollerProxy(v, {
                scrollTop: re,
                scrollHeight: () => pe() && i.scrollHeight,
                fixedMarkers: !1 !== u.fixedMarkers && !!j,
                content: m,
                getBoundingClientRect: () => ({
                    top: 0,
                    left: 0,
                    width: r.innerWidth,
                    height: r.innerHeight
                })
            }),
            l.defaults({
                scroller: v
            });
        let ue = l.getAll().filter(e => e.scroller === r || e.scroller === v);
        ue.forEach(e => e.revert(!0, !0)),
            w = l.create({
                animation: e.fromTo(X, {
                    y: () => (M = 0,
                        0)
                }, {
                    y: () => (M = 1,
                        -pe()),
                    immediateRender: !1,
                    ease: "none",
                    data: "ScrollSmoother",
                    duration: 100,
                    onUpdate: function () {
                        if (M) {
                            let e = z;
                            e && (ee(w),
                                X.y = K),
                                te(X.y, e),
                                Q(),
                                B && !R && B(V)
                        }
                    }
                }),
                onRefreshInit: e => {
                    if (x.isRefreshing)
                        return;
                    if (x.isRefreshing = !0,
                        b) {
                        let e = l.getAll().filter(e => !!e.pin);
                        b.forEach(t => {
                            t.vars.pinnedContainer || e.forEach(e => {
                                if (e.pin.contains(t.trigger)) {
                                    let r = t.vars;
                                    r.pinnedContainer = e.pin,
                                        t.vars = null,
                                        t.init(r, t.animation)
                                }
                            }
                            )
                        }
                        )
                    }
                    let t = e.getTween();
                    N = t && t._end > t._dp._time,
                        A = K,
                        X.y = 0,
                        j && (1 === l.isTouch && (v.style.position = "absolute"),
                            v.scrollTop = 0,
                            1 === l.isTouch && (v.style.position = "fixed"))
                }
                ,
                onRefresh: t => {
                    t.animation.invalidate(),
                        t.setPositions(t.start, pe() / Y),
                        N || ee(t),
                        X.y = -D() * Y,
                        te(X.y),
                        G || (N && (z = !1),
                            t.animation.progress(e.utils.clamp(0, 1, A / Y / -t.end))),
                        N && (t.progress -= .001,
                            t.update()),
                        x.isRefreshing = !1
                }
                ,
                id: "ScrollSmoother",
                scroller: r,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: () => pe() / Y,
                onScrubComplete: () => {
                    J.reset(),
                        H && H(this)
                }
                ,
                scrub: j || !0
            }),
            this.smooth = function (e) {
                return arguments.length && (j = e || 0,
                    Y = j && +u.speed || 1,
                    w.scrubDuration(e)),
                    w.getTween() ? w.getTween().duration() : 0
            }
            ,
            w.getTween() && (w.getTween().vars.ease = u.ease || d),
            this.scrollTrigger = w,
            u.effects && this.effects(!0 === u.effects ? "[data-" + W + "speed], [data-" + W + "lag]" : u.effects, {
                effectsPadding: u.effectsPadding,
                refresh: !1
            }),
            u.sections && this.sections(!0 === u.sections ? "[data-section]" : u.sections),
            ue.forEach(e => {
                e.vars.scroller = v,
                    e.revert(!1, !0),
                    e.init(e.vars, e.animation)
            }
            ),
            this.paused = function (e, t) {
                return arguments.length ? (!!R !== e && (e ? (w.getTween() && w.getTween().pause(),
                    D(-K / Y),
                    J.reset(),
                    k = l.normalizeScroll(),
                    k && k.disable(),
                    R = l.observe({
                        preventDefault: !0,
                        type: "wheel,touch,scroll",
                        debounce: !1,
                        allowClicks: !0,
                        onChangeY: () => re(-K)
                    }),
                    R.nested = f(s, "wheel,touch,scroll", !0, !1 !== t)) : (R.nested.kill(),
                        R.kill(),
                        R = 0,
                        k && k.enable(),
                        w.progress = (-K / Y - w.start) / (w.end - w.start),
                        ee(w))),
                    this) : !!R
            }
            ,
            this.kill = this.revert = () => {
                this.paused(!1),
                    ee(w),
                    w.kill();
                let e = (b || []).concat(C || [])
                    , t = e.length;
                for (; t--;)
                    e[t].kill();
                l.scrollerProxy(v),
                    l.removeEventListener("killAll", ce),
                    l.removeEventListener("refresh", le),
                    v.style.cssText = E,
                    m.style.cssText = P;
                let o = l.defaults({});
                o && o.scroller === v && l.defaults({
                    scroller: r
                }),
                    this.normalizer && l.normalizeScroll(!1),
                    clearInterval(_),
                    c = null,
                    oe && oe.disconnect(),
                    i.style.removeProperty("height"),
                    r.removeEventListener("focusin", se)
            }
            ,
            this.refresh = (e, t) => w.refresh(e, t),
            U && (this.normalizer = l.normalizeScroll(!0 === U ? {
                debounce: !0,
                content: !j && m
            } : U)),
            l.config(u),
            "overscrollBehavior" in r.getComputedStyle(i) && e.set([i, s], {
                overscrollBehavior: "none"
            }),
            "scrollBehavior" in r.getComputedStyle(i) && e.set([i, s], {
                scrollBehavior: "auto"
            }),
            r.addEventListener("focusin", se),
            _ = setInterval(Q, 250),
            "loading" === o.readyState || requestAnimationFrame(() => l.refresh())
    }
    get progress() {
        return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
    }
    static register(v) {
        return t || (e = v || m(),
            u() && window.document && (r = window,
                o = document,
                s = o.documentElement,
                i = o.body),
            e && (n = e.utils.toArray,
                a = e.utils.clamp,
                d = e.parseEase("expo"),
                g = e.core.context || function () { }
                ,
                l = e.core.globals().ScrollTrigger,
                e.core.globals("ScrollSmoother", x),
                i && l && (p = e.delayedCall(.2, () => l.isRefreshing || c && c.refresh()).pause(),
                    h = l.core._getVelocityProp,
                    f = l.core._inputObserver,
                    x.refresh = l.refresh,
                    t = 1))),
            t
    }
}
x.version = "3.12.5",
    x.create = e => c && e && c.content() === n(e.content)[0] ? c : new x(e),
    x.get = () => c,
    m() && e.registerPlugin(x);
// export default x;
// export { x as ScrollSmoother };
