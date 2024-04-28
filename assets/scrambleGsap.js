var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";

    function i(t, e) {
        for (var i = e.length, s = ""; -1 < --t;) s += e[Math.random() * i | 0];
        return s
    }

    function _(t) {
        var e;
        for (this.chars = C(t), this.sets = [], this.length = 50, e = 0; e < 20; e++) this.sets[e] = i(80, this.chars);
        this.grow = function (t) {
            for (e = 0; e < 20; e++) this.sets[e] += i(t - this.length, this.chars);
            this.length = t
        }
    }

    var s = /(^\s+|\s+$)/g, g = /\s+/g, d = function (t) {
        var e = t.nodeType, i = "";
        if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += d(t)
        } else if (3 === e || 4 === e) return t.nodeValue;
        return i
    }, t = "[î€€-ï£¿]|\ud83c[\udc00-\udfff]|\ud83d[\udc00-\udfff]|[âš”-âš—]|\ud83e[\udd10-\udd5d]|[\ud800-\udbff][\udc00-\udfff]",
        f = new RegExp(t), r = new RegExp(t + "|.", "g"), C = function (t, e, i) {
            return i && (t = t.replace(s, "")), "" !== e && e || !f.test(t) ? t.split(e || "") : t.match(r)
        }, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = e.toLowerCase(), u = {
            upperCase: new _(e),
            lowerCase: new _(n),
            upperAndLowerCase: new _(e + n)
        }, c = "ScrambleTextPlugin",
        h = _gsScope._gsDefine.plugin({
            propName: "scrambleText",
            version: "0.5.2",
            API: 2,
            overwriteProps: ["scrambleText", "text"],
            init: function (t, e, i, s) {
                if (this._prop = "innerHTML" in t ? "innerHTML" : "textContent" in t ? "textContent" : 0, !this._prop) return !1;
                "function" == typeof e && (e = e(s, t)), this._target = t, "object" != typeof e && (e = { text: e });
                var r, n, h, o, a = e.text || e.value, l = !1 !== e.trim;
                return this._delimiter = r = e.delimiter || "", this._original = C(d(t).replace(g, " ").split("&nbsp;").join(""), r, l), "{original}" !== a && !0 !== a && null != a || (a = this._original.join(r)), this._text = C((a || "").replace(g, " "), r, l), this._hasClass = !1, "string" == typeof e.newClass && (this._newClass = e.newClass, this._hasClass = !0), "string" == typeof e.oldClass && (this._oldClass = e.oldClass, this._hasClass = !0), o = "" === r, this._textHasEmoji = f.test(this._text.join(r)) && o, this._charsHaveEmoji = !!e.chars && f.test(e.chars), this._length = o ? this._original.length : this._original.join(r).length, this._lengthDif = (o ? this._text.length : this._text.join(r).length) - this._length, this._fillChar = e.fillChar || e.chars && -1 !== e.chars.indexOf(" ") ? "&nbsp;" : "", this._charSet = h = u[e.chars || "upperCase"] || new _(e.chars), this._speed = .016 / (e.speed || 1), this._prevScrambleTime = 0, this._setIndex = 20 * Math.random() | 0, (n = this._length + Math.max(this._lengthDif, 0)) > h.length && h.grow(n), this._chars = h.sets[this._setIndex], this._revealDelay = e.revealDelay || 0, this._tweenLength = !1 !== e.tweenLength, this._tween = i, this._rightToLeft = !!e.rightToLeft
            },
            set: function (t) {
                var e, i, s, r, n, o, a, l, _ = this._text.length, g = this._delimiter, d = this._tween._time, f = d - this._prevScrambleTime;
                this._revealDelay && (this._tween.vars.runBackwards && (d = this._tween._duration - d), t = 0 === d ? 0 : d < this._revealDelay ? 1e-6 : d === this._tween._duration ? 1 : this._tween._ease.getRatio((d - this._revealDelay) / (this._tween._duration - this._revealDelay))), t < 0 ? t = 0 : 1 < t && (t = 1), this._rightToLeft && (t = 1 - t), e = t * _ + .5 | 0, r = t ? ((f > this._speed || f < -this._speed) && (this._setIndex = (this._setIndex + (19 * Math.random() | 0)) % 20, this._chars = this._charSet.sets[this._setIndex], this._prevScrambleTime += f), this._chars) : this._original.join(g), r = this._rightToLeft ? 1 !== t || !this._tween.vars.runBackwards && "isFromStart" !== this._tween.data ? (o = this._text.slice(e).join(g), s = this._charsHaveEmoji ? C(r).slice(0, this._length + (this._tweenLength ? 1 - t * t * t : 1) * this._lengthDif - (this._textHasEmoji ? C(o) : o).length + .5 | 0).join("") : r.substr(0, this._length + (this._tweenLength ? 1 - t * t * t : 1) * this._lengthDif - (this._textHasEmoji ? C(o) : o).length + .5 | 0), o) : (s = "", this._original.join(g)) : (s = this._text.slice(0, e).join(g), i = (this._textHasEmoji ? C(s) : s).length, this._charsHaveEmoji ? C(r).slice(i, this._length + (this._tweenLength ? 1 - (t = 1 - t) * t * t * t : 1) * this._lengthDif + .5 | 0).join("") : r.substr(i, this._length + (this._tweenLength ? 1 - (t = 1 - t) * t * t * t : 1) * this._lengthDif - i + .5 | 0)), o = this._hasClass ? ((n = (a = this._rightToLeft ? this._oldClass : this._newClass) && 0 != e) ? "<span class='" + a + "'>" : "") + s + (n ? "</span>" : "") + ((l = (h = this._rightToLeft ? this._newClass : this._oldClass) && e !== _) ? "<span class='" + h + "'>" : "") + g + r + (l ? "</span>" : "") : s + g + r, this._target[this._prop] = "&nbsp;" === this._fillChar && -1 !== o.indexOf("  ") ? o.split("  ").join("&nbsp;&nbsp;") : o
            }
        }).prototype;

    for (h in h._newClass = h._oldClass = "", u) u[h.toLowerCase()] = u[h], u[h.toUpperCase()] = u[h]
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function () {
    "use strict";

    function t() {
        return (_gsScope.GreenSockGlobals || _gsScope).ScrambleTextPlugin
    }

    "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite"], t)
}();
