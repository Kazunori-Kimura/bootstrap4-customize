"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (e) {
  var t = {};function n(r) {
    if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  var r;!function (t, n) {
    "use strict";
    "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, i) {
    "use strict";
    var o = [],
        s = n.document,
        a = Object.getPrototypeOf,
        l = o.slice,
        u = o.concat,
        c = o.push,
        f = o.indexOf,
        p = {},
        d = p.toString,
        h = p.hasOwnProperty,
        g = h.toString,
        m = g.call(Object),
        v = {},
        y = function y(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        x = function x(e) {
      return null != e && e === e.window;
    },
        b = { type: !0, src: !0, noModule: !0 };function T(e, t, n) {
      var r,
          i = (t = t || s).createElement("script");if (i.text = e, n) for (r in b) {
        n[r] && (i[r] = n[r]);
      }t.head.appendChild(i).parentNode.removeChild(i);
    }function w(e) {
      return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? p[d.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
    }var C = function C(e, t) {
      return new C.fn.init(e, t);
    },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function _(e) {
      var t = !!e && "length" in e && e.length,
          n = w(e);return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }C.fn = C.prototype = { jquery: "3.3.1", constructor: C, length: 0, toArray: function toArray() {
        return l.call(this);
      }, get: function get(e) {
        return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
      }, pushStack: function pushStack(e) {
        var t = C.merge(this.constructor(), e);return t.prevObject = this, t;
      }, each: function each(e) {
        return C.each(this, e);
      }, map: function map(e) {
        return this.pushStack(C.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      }, slice: function slice() {
        return this.pushStack(l.apply(this, arguments));
      }, first: function first() {
        return this.eq(0);
      }, last: function last() {
        return this.eq(-1);
      }, eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      }, end: function end() {
        return this.prevObject || this.constructor();
      }, push: c, sort: o.sort, splice: o.splice }, C.extend = C.fn.extend = function () {
      var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
        if (null != (e = arguments[a])) for (t in e) {
          n = s[t], s !== (r = e[t]) && (u && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && C.isPlainObject(n) ? n : {}, s[t] = C.extend(u, o, r)) : void 0 !== r && (s[t] = r));
        }
      }return s;
    }, C.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
        throw new Error(e);
      }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
        var t, n;return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === m);
      }, isEmptyObject: function isEmptyObject(e) {
        var t;for (t in e) {
          return !1;
        }return !0;
      }, globalEval: function globalEval(e) {
        T(e);
      }, each: function each(e, t) {
        var n,
            r = 0;if (_(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {} else for (r in e) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }return e;
      }, trim: function trim(e) {
        return null == e ? "" : (e + "").replace(E, "");
      }, makeArray: function makeArray(e, t) {
        var n = t || [];return null != e && (_(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
      }, inArray: function inArray(e, t, n) {
        return null == t ? -1 : f.call(t, e, n);
      }, merge: function merge(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
          e[i++] = t[r];
        }return e.length = i, e;
      }, grep: function grep(e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) {
          !t(e[i], i) !== s && r.push(e[i]);
        }return r;
      }, map: function map(e, t, n) {
        var r,
            i,
            o = 0,
            s = [];if (_(e)) for (r = e.length; o < r; o++) {
          null != (i = t(e[o], o, n)) && s.push(i);
        } else for (o in e) {
          null != (i = t(e[o], o, n)) && s.push(i);
        }return u.apply([], s);
      }, guid: 1, support: v }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      p["[object " + t + "]"] = t.toLowerCase();
    });var A = function (e) {
      var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          p,
          d,
          h,
          g,
          m,
          v,
          y,
          x,
          b = "sizzle" + 1 * new Date(),
          T = e.document,
          w = 0,
          C = 0,
          E = se(),
          _ = se(),
          A = se(),
          S = function S(e, t) {
        return e === t && (f = !0), 0;
      },
          D = {}.hasOwnProperty,
          N = [],
          k = N.pop,
          O = N.push,
          L = N.push,
          j = N.slice,
          I = function I(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }return -1;
      },
          H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          P = "[\\x20\\t\\r\\n\\f]",
          q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          R = "\\[" + P + "*(" + q + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + P + "*\\]",
          $ = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
          M = new RegExp(P + "+", "g"),
          W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
          F = new RegExp("^" + P + "*," + P + "*"),
          B = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
          V = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
          U = new RegExp($),
          G = new RegExp("^" + q + "$"),
          z = { ID: new RegExp("^#(" + q + ")"), CLASS: new RegExp("^\\.(" + q + ")"), TAG: new RegExp("^(" + q + "|[*])"), ATTR: new RegExp("^" + R), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: new RegExp("^(?:" + H + ")$", "i"), needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
          X = /^(?:input|select|textarea|button)$/i,
          Q = /^h\d$/i,
          Y = /^[^{]+\{\s*\[native \w/,
          K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          J = /[+~]/,
          Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
          ee = function ee(e, t, n) {
        var r = "0x" + t - 65536;return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ne = function ne(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          re = function re() {
        p();
      },
          ie = ye(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e);
      }, { dir: "parentNode", next: "legend" });try {
        L.apply(N = j.call(T.childNodes), T.childNodes), N[T.childNodes.length].nodeType;
      } catch (e) {
        L = { apply: N.length ? function (e, t) {
            O.apply(e, j.call(t));
          } : function (e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];) {}e.length = n - 1;
          } };
      }function oe(e, t, r, i) {
        var o,
            a,
            u,
            c,
            f,
            h,
            v,
            y = t && t.ownerDocument,
            w = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;if (!i && ((t ? t.ownerDocument || t : T) !== d && p(t), t = t || d, g)) {
          if (11 !== w && (f = K.exec(e))) if (o = f[1]) {
            if (9 === w) {
              if (!(u = t.getElementById(o))) return r;if (u.id === o) return r.push(u), r;
            } else if (y && (u = y.getElementById(o)) && x(t, u) && u.id === o) return r.push(u), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
          }if (n.qsa && !A[e + " "] && (!m || !m.test(e))) {
            if (1 !== w) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
              for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), a = (h = s(e)).length; a--;) {
                h[a] = "#" + c + " " + ve(h[a]);
              }v = h.join(","), y = J.test(e) && ge(t.parentNode) || t;
            }if (v) try {
              return L.apply(r, y.querySelectorAll(v)), r;
            } catch (e) {} finally {
              c === b && t.removeAttribute("id");
            }
          }
        }return l(e.replace(W, "$1"), t, r, i);
      }function se() {
        var e = [];return function t(n, i) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
        };
      }function ae(e) {
        return e[b] = !0, e;
      }function le(e) {
        var t = d.createElement("fieldset");try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }function ue(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) {
          r.attrHandle[n[i]] = t;
        }
      }function ce(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }return e ? 1 : -1;
      }function fe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }function pe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
        };
      }function de(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }function he(e) {
        return ae(function (t) {
          return t = +t, ae(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--;) {
              n[i = o[s]] && (n[i] = !(r[i] = n[i]));
            }
          });
        });
      }function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }for (t in n = oe.support = {}, o = oe.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
      }, p = oe.setDocument = function (e) {
        var t,
            i,
            s = e ? e.ownerDocument || e : T;return s !== d && 9 === s.nodeType && s.documentElement ? (h = (d = s).documentElement, g = !o(d), T !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = le(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = le(function (e) {
          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = Y.test(d.getElementsByClassName), n.getById = le(function (e) {
          return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
        }), n.getById ? (r.filter.ID = function (e) {
          var t = e.replace(Z, ee);return function (e) {
            return e.getAttribute("id") === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);return n ? [n] : [];
          }
        }) : (r.filter.ID = function (e) {
          var t = e.replace(Z, ee);return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n,
                r,
                i,
                o = t.getElementById(e);if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];for (i = t.getElementsByName(e), r = 0; o = i[r++];) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              }
            }return [];
          }
        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              i = 0,
              o = t.getElementsByTagName(e);if ("*" === e) {
            for (; n = o[i++];) {
              1 === n.nodeType && r.push(n);
            }return r;
          }return o;
        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
        }, v = [], m = [], (n.qsa = Y.test(d.querySelectorAll)) && (le(function (e) {
          h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
        }), le(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
        })), (n.matchesSelector = Y.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function (e) {
          n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", $);
        }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Y.test(h.compareDocumentPosition), x = t || Y.test(h.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }return !1;
        }, S = t ? function (e, t) {
          if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === T && x(T, e) ? -1 : t === d || t.ownerDocument === T && x(T, t) ? 1 : c ? I(c, e) - I(c, t) : 0 : 4 & r ? -1 : 1);
        } : function (e, t) {
          if (e === t) return f = !0, 0;var n,
              r = 0,
              i = e.parentNode,
              o = t.parentNode,
              s = [e],
              a = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? I(c, e) - I(c, t) : 0;if (i === o) return ce(e, t);for (n = e; n = n.parentNode;) {
            s.unshift(n);
          }for (n = t; n = n.parentNode;) {
            a.unshift(n);
          }for (; s[r] === a[r];) {
            r++;
          }return r ? ce(s[r], a[r]) : s[r] === T ? -1 : a[r] === T ? 1 : 0;
        }, d) : d;
      }, oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }, oe.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== d && p(e), t = t.replace(V, "='$1']"), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
          var r = y.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
        } catch (e) {}return oe(t, d, null, [e]).length > 0;
      }, oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }, oe.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
            o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
      }, oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }, oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, oe.uniqueSort = function (e) {
        var t,
            r = [],
            i = 0,
            o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) {
          for (; t = e[o++];) {
            t === e[o] && (i = r.push(o));
          }for (; i--;) {
            e.splice(r[i], 1);
          }
        }return c = null, e;
      }, i = oe.getText = function (e) {
        var t,
            n = "",
            r = 0,
            o = e.nodeType;if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
              n += i(e);
            }
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; t = e[r++];) {
          n += i(t);
        }return n;
      }, (r = oe.selectors = { cacheLength: 50, createPseudo: ae, match: z, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
            return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          }, CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
          }, PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          } }, filter: { TAG: function TAG(e) {
            var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          }, CLASS: function CLASS(e) {
            var t = E[e + " "];return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && E(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          }, ATTR: function ATTR(e, t, n) {
            return function (r) {
              var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(M, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          }, CHILD: function CHILD(e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;return 1 === r && 0 === i ? function (e) {
              return !!e.parentNode;
            } : function (t, n, l) {
              var u,
                  c,
                  f,
                  p,
                  d,
                  h,
                  g = o !== s ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  x = !1;if (m) {
                if (o) {
                  for (; g;) {
                    for (p = t; p = p[g];) {
                      if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                    }h = g = "only" === e && !h && "nextSibling";
                  }return !0;
                }if (h = [s ? m.firstChild : m.lastChild], s && y) {
                  for (x = (d = (u = (c = (f = (p = m)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === w && u[1]) && u[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) {
                    if (1 === p.nodeType && ++x && p === t) {
                      c[e] = [w, d, x];break;
                    }
                  }
                } else if (y && (x = d = (u = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === w && u[1]), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [w, x]), p !== t));) {}return (x -= i) === r || x % r == 0 && x / r >= 0;
              }
            };
          }, PSEUDO: function PSEUDO(e, t) {
            var n,
                i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
              for (var r, o = i(e, t), s = o.length; s--;) {
                e[r = I(e, o[s])] = !(n[r] = o[s]);
              }
            }) : function (e) {
              return i(e, 0, n);
            }) : i;
          } }, pseudos: { not: ae(function (e) {
            var t = [],
                n = [],
                r = a(e.replace(W, "$1"));return r[b] ? ae(function (e, t, n, i) {
              for (var o, s = r(e, null, i, []), a = e.length; a--;) {
                (o = s[a]) && (e[a] = !(t[a] = o));
              }
            }) : function (e, i, o) {
              return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
            };
          }), has: ae(function (e) {
            return function (t) {
              return oe(e, t).length > 0;
            };
          }), contains: ae(function (e) {
            return e = e.replace(Z, ee), function (t) {
              return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
            };
          }), lang: ae(function (e) {
            return G.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
              var n;do {
                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
            };
          }), target: function target(t) {
            var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
          }, root: function root(e) {
            return e === h;
          }, focus: function focus(e) {
            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
            var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
          }, selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          }, empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }return !0;
          }, parent: function parent(e) {
            return !r.pseudos.empty(e);
          }, header: function header(e) {
            return Q.test(e.nodeName);
          }, input: function input(e) {
            return X.test(e.nodeName);
          }, button: function button(e) {
            var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
          }, text: function text(e) {
            var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          }, first: he(function () {
            return [0];
          }), last: he(function (e, t) {
            return [t - 1];
          }), eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }), even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }return e;
          }), odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }return e;
          }), lt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; --r >= 0;) {
              e.push(r);
            }return e;
          }), gt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) {
              e.push(r);
            }return e;
          }) } }).pseudos.nth = r.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
        r.pseudos[t] = fe(t);
      }for (t in { submit: !0, reset: !0 }) {
        r.pseudos[t] = pe(t);
      }function me() {}function ve(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) {
          r += e[t].value;
        }return r;
      }function ye(e, t, n) {
        var r = t.dir,
            i = t.next,
            o = i || r,
            s = n && "parentNode" === o,
            a = C++;return t.first ? function (t, n, i) {
          for (; t = t[r];) {
            if (1 === t.nodeType || s) return e(t, n, i);
          }return !1;
        } : function (t, n, l) {
          var u,
              c,
              f,
              p = [w, a];if (l) {
            for (; t = t[r];) {
              if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            }
          } else for (; t = t[r];) {
            if (1 === t.nodeType || s) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
              if ((u = c[o]) && u[0] === w && u[1] === a) return p[2] = u[2];if (c[o] = p, p[2] = e(t, n, l)) return !0;
            }
          }return !1;
        };
      }function xe(e) {
        return e.length > 1 ? function (t, n, r) {
          for (var i = e.length; i--;) {
            if (!e[i](t, n, r)) return !1;
          }return !0;
        } : e[0];
      }function be(e, t, n, r, i) {
        for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) {
          (o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a)));
        }return s;
      }function Te(e, t, n, r, i, o) {
        return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), ae(function (o, s, a, l) {
          var u,
              c,
              f,
              p = [],
              d = [],
              h = s.length,
              g = o || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
              oe(e, t[r], n);
            }return n;
          }(t || "*", a.nodeType ? [a] : a, []),
              m = !e || !o && t ? g : be(g, p, e, a, l),
              v = n ? i || (o ? e : h || r) ? [] : s : m;if (n && n(m, v, a, l), r) for (u = be(v, d), r(u, [], a, l), c = u.length; c--;) {
            (f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
          }if (o) {
            if (i || e) {
              if (i) {
                for (u = [], c = v.length; c--;) {
                  (f = v[c]) && u.push(m[c] = f);
                }i(null, v = [], u, l);
              }for (c = v.length; c--;) {
                (f = v[c]) && (u = i ? I(o, f) : p[c]) > -1 && (o[u] = !(s[u] = f));
              }
            }
          } else v = be(v === s ? v.splice(h, v.length) : v), i ? i(null, s, v, l) : L.apply(s, v);
        });
      }function we(e) {
        for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, c = ye(function (e) {
          return e === t;
        }, a, !0), f = ye(function (e) {
          return I(t, e) > -1;
        }, a, !0), p = [function (e, n, r) {
          var i = !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
        }]; l < o; l++) {
          if (n = r.relative[e[l].type]) p = [ye(xe(p), n)];else {
            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
              for (i = ++l; i < o && !r.relative[e[i].type]; i++) {}return Te(l > 1 && xe(p), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(W, "$1"), n, l < i && we(e.slice(l, i)), i < o && we(e = e.slice(i)), i < o && ve(e));
            }p.push(n);
          }
        }return xe(p);
      }return me.prototype = r.filters = r.pseudos, r.setFilters = new me(), s = oe.tokenize = function (e, t) {
        var n,
            i,
            o,
            s,
            a,
            l,
            u,
            c = _[e + " "];if (c) return t ? 0 : c.slice(0);for (a = e, l = [], u = r.preFilter; a;) {
          for (s in n && !(i = F.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = B.exec(a)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(W, " ") }), a = a.slice(n.length)), r.filter) {
            !(i = z[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(), o.push({ value: n, type: s, matches: i }), a = a.slice(n.length));
          }if (!n) break;
        }return t ? a.length : a ? oe.error(e) : _(e, l).slice(0);
      }, a = oe.compile = function (e, t) {
        var n,
            i = [],
            o = [],
            a = A[e + " "];if (!a) {
          for (t || (t = s(e)), n = t.length; n--;) {
            (a = we(t[n]))[b] ? i.push(a) : o.push(a);
          }(a = A(e, function (e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function o(_o, s, a, l, c) {
              var f,
                  h,
                  m,
                  v = 0,
                  y = "0",
                  x = _o && [],
                  b = [],
                  T = u,
                  C = _o || i && r.find.TAG("*", c),
                  E = w += null == T ? 1 : Math.random() || .1,
                  _ = C.length;for (c && (u = s === d || s || c); y !== _ && null != (f = C[y]); y++) {
                if (i && f) {
                  for (h = 0, s || f.ownerDocument === d || (p(f), a = !g); m = e[h++];) {
                    if (m(f, s || d, a)) {
                      l.push(f);break;
                    }
                  }c && (w = E);
                }n && ((f = !m && f) && v--, _o && x.push(f));
              }if (v += y, n && y !== v) {
                for (h = 0; m = t[h++];) {
                  m(x, b, s, a);
                }if (_o) {
                  if (v > 0) for (; y--;) {
                    x[y] || b[y] || (b[y] = k.call(l));
                  }b = be(b);
                }L.apply(l, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(l);
              }return c && (w = E, u = T), x;
            };return n ? ae(o) : o;
          }(o, i))).selector = e;
        }return a;
      }, l = oe.select = function (e, t, n, i) {
        var o,
            l,
            u,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && s(e = p.selector || e);if (n = n || [], 1 === d.length) {
          if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
            if (!(t = (r.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }for (o = z.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]);) {
            if ((f = r.find[c]) && (i = f(u.matches[0].replace(Z, ee), J.test(l[0].type) && ge(t.parentNode) || t))) {
              if (l.splice(o, 1), !(e = i.length && ve(l))) return L.apply(n, i), n;break;
            }
          }
        }return (p || a(e, d))(i, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n;
      }, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = le(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      }), le(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || ue("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && le(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || ue("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), le(function (e) {
        return null == e.getAttribute("disabled");
      }) || ue(H, function (e, t, n) {
        var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), oe;
    }(n);C.find = A, C.expr = A.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = A.uniqueSort, C.text = A.getText, C.isXMLDoc = A.isXML, C.contains = A.contains, C.escapeSelector = A.escape;var S = function S(e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (i && C(e).is(n)) break;r.push(e);
        }
      }return r;
    },
        D = function D(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }return n;
    },
        N = C.expr.match.needsContext;function k(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e, t, n) {
      return y(t) ? C.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      }) : t.nodeType ? C.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? C.grep(e, function (e) {
        return f.call(t, e) > -1 !== n;
      }) : C.filter(t, e, n);
    }C.filter = function (e, t, n) {
      var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, C.fn.extend({ find: function find(e) {
        var t,
            n,
            r = this.length,
            i = this;if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
          for (t = 0; t < r; t++) {
            if (C.contains(i[t], this)) return !0;
          }
        }));for (n = this.pushStack([]), t = 0; t < r; t++) {
          C.find(e, i[t], n);
        }return r > 1 ? C.uniqueSort(n) : n;
      }, filter: function filter(e) {
        return this.pushStack(L(this, e || [], !1));
      }, not: function not(e) {
        return this.pushStack(L(this, e || [], !0));
      }, is: function is(e) {
        return !!L(this, "string" == typeof e && N.test(e) ? C(e) : e || [], !1).length;
      } });var j,
        I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init = function (e, t, n) {
      var r, i;if (!e) return this;if (n = n || j, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
          if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), O.test(r[1]) && C.isPlainObject(t)) for (r in t) {
            y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }return this;
        }return (i = s.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
      }return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
    }).prototype = C.fn, j = C(s);var H = /^(?:parents|prev(?:Until|All))/,
        P = { children: !0, contents: !0, next: !0, prev: !0 };function q(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
    }C.fn.extend({ has: function has(e) {
        var t = C(e, this),
            n = t.length;return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (C.contains(this, t[e])) return !0;
          }
        });
      }, closest: function closest(e, t) {
        var n,
            r = 0,
            i = this.length,
            o = [],
            s = "string" != typeof e && C(e);if (!N.test(e)) for (; r < i; r++) {
          for (n = this[r]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
              o.push(n);break;
            }
          }
        }return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
      }, index: function index(e) {
        return e ? "string" == typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function add(e, t) {
        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
      }, addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      } }), C.each({ parent: function parent(e) {
        var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
      }, parents: function parents(e) {
        return S(e, "parentNode");
      }, parentsUntil: function parentsUntil(e, t, n) {
        return S(e, "parentNode", n);
      }, next: function next(e) {
        return q(e, "nextSibling");
      }, prev: function prev(e) {
        return q(e, "previousSibling");
      }, nextAll: function nextAll(e) {
        return S(e, "nextSibling");
      }, prevAll: function prevAll(e) {
        return S(e, "previousSibling");
      }, nextUntil: function nextUntil(e, t, n) {
        return S(e, "nextSibling", n);
      }, prevUntil: function prevUntil(e, t, n) {
        return S(e, "previousSibling", n);
      }, siblings: function siblings(e) {
        return D((e.parentNode || {}).firstChild, e);
      }, children: function children(e) {
        return D(e.firstChild);
      }, contents: function contents(e) {
        return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
      } }, function (e, t) {
      C.fn[e] = function (n, r) {
        var i = C.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (P[e] || C.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
      };
    });var R = /[^\x20\t\r\n\f]+/g;function $(e) {
      return e;
    }function M(e) {
      throw e;
    }function W(e, t, n, r) {
      var i;try {
        e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }C.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};return C.each(e.match(R) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : C.extend({}, e);var t,
          n,
          r,
          i,
          o = [],
          s = [],
          a = -1,
          l = function l() {
        for (i = i || e.once, r = t = !0; s.length; a = -1) {
          for (n = s.shift(); ++a < o.length;) {
            !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
          }
        }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
      },
          u = { add: function add() {
          return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
            C.each(n, function (n, r) {
              y(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== w(r) && t(r);
            });
          }(arguments), n && !t && l()), this;
        }, remove: function remove() {
          return C.each(arguments, function (e, t) {
            for (var n; (n = C.inArray(t, o, n)) > -1;) {
              o.splice(n, 1), n <= a && a--;
            }
          }), this;
        }, has: function has(e) {
          return e ? C.inArray(e, o) > -1 : o.length > 0;
        }, empty: function empty() {
          return o && (o = []), this;
        }, disable: function disable() {
          return i = s = [], o = n = "", this;
        }, disabled: function disabled() {
          return !o;
        }, lock: function lock() {
          return i = s = [], n || t || (o = n = ""), this;
        }, locked: function locked() {
          return !!i;
        }, fireWith: function fireWith(e, n) {
          return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
        }, fire: function fire() {
          return u.fireWith(this, arguments), this;
        }, fired: function fired() {
          return !!r;
        } };return u;
    }, C.extend({ Deferred: function Deferred(e) {
        var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
            r = "pending",
            i = { state: function state() {
            return r;
          }, always: function always() {
            return o.done(arguments).fail(arguments), this;
          }, catch: function _catch(e) {
            return i.then(null, e);
          }, pipe: function pipe() {
            var e = arguments;return C.Deferred(function (n) {
              C.each(t, function (t, r) {
                var i = y(e[r[4]]) && e[r[4]];o[r[1]](function () {
                  var e = i && i.apply(this, arguments);e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          }, then: function then(e, r, i) {
            var o = 0;function s(e, t, r, i) {
              return function () {
                var a = this,
                    l = arguments,
                    u = function u() {
                  var n, u;if (!(e < o)) {
                    if ((n = r.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");u = n && ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || "function" == typeof n) && n.then, y(u) ? i ? u.call(n, s(o, t, $, i), s(o, t, M, i)) : (o++, u.call(n, s(o, t, $, i), s(o, t, M, i), s(o, t, $, t.notifyWith))) : (r !== $ && (a = void 0, l = [n]), (i || t.resolveWith)(a, l));
                  }
                },
                    c = i ? u : function () {
                  try {
                    u();
                  } catch (n) {
                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== M && (a = void 0, l = [n]), t.rejectWith(a, l));
                  }
                };e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c));
              };
            }return C.Deferred(function (n) {
              t[0][3].add(s(0, n, y(i) ? i : $, n.notifyWith)), t[1][3].add(s(0, n, y(e) ? e : $)), t[2][3].add(s(0, n, y(r) ? r : M));
            }).promise();
          }, promise: function promise(e) {
            return null != e ? C.extend(e, i) : i;
          } },
            o = {};return C.each(t, function (e, n) {
          var s = n[2],
              a = n[5];i[n[1]] = s.add, a && s.add(function () {
            r = a;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
          }, o[n[0] + "With"] = s.fireWith;
        }), i.promise(o), e && e.call(o, o), o;
      }, when: function when(e) {
        var t = arguments.length,
            n = t,
            r = Array(n),
            i = l.call(arguments),
            o = C.Deferred(),
            s = function s(e) {
          return function (n) {
            r[e] = this, i[e] = arguments.length > 1 ? l.call(arguments) : n, --t || o.resolveWith(r, i);
          };
        };if (t <= 1 && (W(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();for (; n--;) {
          W(i[n], s(n), o.reject);
        }return o.promise();
      } });var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, C.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };var B = C.Deferred();function V() {
      s.removeEventListener("DOMContentLoaded", V), n.removeEventListener("load", V), C.ready();
    }C.fn.ready = function (e) {
      return B.then(e).catch(function (e) {
        C.readyException(e);
      }), this;
    }, C.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || B.resolveWith(s, [C]));
      } }), C.ready.then = B.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(C.ready) : (s.addEventListener("DOMContentLoaded", V), n.addEventListener("load", V));var U = function U(e, t, n, r, i, o, s) {
      var a = 0,
          l = e.length,
          u = null == n;if ("object" === w(n)) for (a in i = !0, n) {
        U(e, t, a, n[a], !0, o, s);
      } else if (void 0 !== r && (i = !0, y(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function t(e, _t2, n) {
        return u.call(C(e), n);
      })), t)) for (; a < l; a++) {
        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      }return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
        G = /^-ms-/,
        z = /-([a-z])/g;function X(e, t) {
      return t.toUpperCase();
    }function Q(e) {
      return e.replace(G, "ms-").replace(z, X);
    }var Y = function Y(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };function K() {
      this.expando = C.expando + K.uid++;
    }K.uid = 1, K.prototype = { cache: function cache(e) {
        var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      }, set: function set(e, t, n) {
        var r,
            i = this.cache(e);if ("string" == typeof t) i[Q(t)] = n;else for (r in t) {
          i[Q(r)] = t[r];
        }return i;
      }, get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)];
      }, access: function access(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      }, remove: function remove(e, t) {
        var n,
            r = e[this.expando];if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in r ? [t] : t.match(R) || []).length;for (; n--;) {
              delete r[t[n]];
            }
          }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      }, hasData: function hasData(e) {
        var t = e[this.expando];return void 0 !== t && !C.isEmptyObject(t);
      } };var J = new K(),
        Z = new K(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;function ne(e, t, n) {
      var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
          }(n);
        } catch (e) {}Z.set(e, t, n);
      } else n = void 0;return n;
    }C.extend({ hasData: function hasData(e) {
        return Z.hasData(e) || J.hasData(e);
      }, data: function data(e, t, n) {
        return Z.access(e, t, n);
      }, removeData: function removeData(e, t) {
        Z.remove(e, t);
      }, _data: function _data(e, t, n) {
        return J.access(e, t, n);
      }, _removeData: function _removeData(e, t) {
        J.remove(e, t);
      } }), C.fn.extend({ data: function data(e, t) {
        var n,
            r,
            i,
            o = this[0],
            s = o && o.attributes;if (void 0 === e) {
          if (this.length && (i = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) {
              s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = Q(r.slice(5)), ne(o, r, i[r]));
            }J.set(o, "hasDataAttrs", !0);
          }return i;
        }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
          Z.set(this, e);
        }) : U(this, function (t) {
          var n;if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;this.each(function () {
            Z.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      }, removeData: function removeData(e) {
        return this.each(function () {
          Z.remove(this, e);
        });
      } }), C.extend({ queue: function queue(e, t, n) {
        var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)), r || [];
      }, dequeue: function dequeue(e, t) {
        t = t || "fx";var n = C.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = C._queueHooks(e, t);"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
          C.dequeue(e, t);
        }, o)), !r && o && o.empty.fire();
      }, _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: C.Callbacks("once memory").add(function () {
            J.remove(e, [t + "queue", n]);
          }) });
      } }), C.fn.extend({ queue: function queue(e, t) {
        var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = C.queue(this, e, t);C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
        });
      }, dequeue: function dequeue(e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      }, clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      }, promise: function promise(e, t) {
        var n,
            r = 1,
            i = C.Deferred(),
            o = this,
            s = this.length,
            a = function a() {
          --r || i.resolveWith(o, [o]);
        };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
          (n = J.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
        }return a(), i.promise(t);
      } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        se = function se(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display");
    },
        ae = function ae(e, t, n, r) {
      var i,
          o,
          s = {};for (o in t) {
        s[o] = e.style[o], e.style[o] = t[o];
      }for (o in i = n.apply(e, r || []), t) {
        e.style[o] = s[o];
      }return i;
    };function le(e, t, n, r) {
      var i,
          o,
          s = 20,
          a = r ? function () {
        return r.cur();
      } : function () {
        return C.css(e, t, "");
      },
          l = a(),
          u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
          c = (C.cssNumber[t] || "px" !== u && +l) && ie.exec(C.css(e, t));if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; s--;) {
          C.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
        }c *= 2, C.style(e, t, c + u), n = n || [];
      }return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i;
    }var ue = {};function ce(e) {
      var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = ue[r];return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i);
    }function fe(e, t) {
      for (var n, r, i = [], o = 0, s = e.length; o < s; o++) {
        (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && se(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
      }for (o = 0; o < s; o++) {
        null != i[o] && (e[o].style.display = i[o]);
      }return e;
    }C.fn.extend({ show: function show() {
        return fe(this, !0);
      }, hide: function hide() {
        return fe(this);
      }, toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          se(this) ? C(this).show() : C(this).hide();
        });
      } });var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function me(e, t) {
      var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? C.merge([e], n) : n;
    }function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
    }ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;var ye,
        xe,
        be = /<|&#?\w+;/;function Te(e, t, n, r, i) {
      for (var o, s, a, l, u, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
        if ((o = e[d]) || 0 === o) if ("object" === w(o)) C.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
          for (s = s || f.appendChild(t.createElement("div")), a = (de.exec(o) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], c = l[0]; c--;) {
            s = s.lastChild;
          }C.merge(p, s.childNodes), (s = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
      }for (f.textContent = "", d = 0; o = p[d++];) {
        if (r && C.inArray(o, r) > -1) i && i.push(o);else if (u = C.contains(o.ownerDocument, o), s = me(f.appendChild(o), "script"), u && ve(s), n) for (c = 0; o = s[c++];) {
          he.test(o.type || "") && n.push(o);
        }
      }return f;
    }ye = s.createDocumentFragment().appendChild(s.createElement("div")), (xe = s.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), ye.appendChild(xe), v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;var we = s.documentElement,
        Ce = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _e = /^([^.]*)(?:\.(.+)|)/;function Ae() {
      return !0;
    }function Se() {
      return !1;
    }function De() {
      try {
        return s.activeElement;
      } catch (e) {}
    }function Ne(e, t, n, r, i, o) {
      var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        for (a in "string" != typeof n && (r = r || n, n = void 0), t) {
          Ne(e, a, n, r, t[a], o);
        }return e;
      }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;return 1 === o && (s = i, (i = function i(e) {
        return C().off(e), s.apply(this, arguments);
      }).guid = s.guid || (s.guid = C.guid++)), e.each(function () {
        C.event.add(this, t, i, r, n);
      });
    }C.event = { global: {}, add: function add(e, t, n, r, i) {
        var o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            m = J.get(e);if (m) for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(we, i), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
          return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
        }), u = (t = (t || "").match(R) || [""]).length; u--;) {
          d = g = (a = _e.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = C.event.special[d] || {}, c = C.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && C.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[d] = !0);
        }
      }, remove: function remove(e, t, n, r, i) {
        var o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            m = J.hasData(e) && J.get(e);if (m && (l = m.events)) {
          for (u = (t = (t || "").match(R) || [""]).length; u--;) {
            if (d = g = (a = _e.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
              for (f = C.event.special[d] || {}, p = l[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) {
                c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
              }s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C.removeEvent(e, d, m.handle), delete l[d]);
            } else for (d in l) {
              C.event.remove(e, d + t[u], n, r, !0);
            }
          }C.isEmptyObject(l) && J.remove(e, "handle events");
        }
      }, dispatch: function dispatch(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a = C.event.fix(e),
            l = new Array(arguments.length),
            u = (J.get(this, "events") || {})[a.type] || [],
            c = C.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
          l[t] = arguments[t];
        }if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
          for (s = C.event.handlers.call(this, a, u), t = 0; (i = s[t++]) && !a.isPropagationStopped();) {
            for (a.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) {
              a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
            }
          }return c.postDispatch && c.postDispatch.call(this, a), a.result;
        }
      }, handlers: function handlers(e, t) {
        var n,
            r,
            i,
            o,
            s,
            a = [],
            l = t.delegateCount,
            u = e.target;if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) {
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++) {
              void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? C(i, this).index(u) > -1 : C.find(i, this, null, [u]).length), s[i] && o.push(r);
            }o.length && a.push({ elem: u, handlers: o });
          }
        }return u = this, l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a;
      }, addProp: function addProp(e, t) {
        Object.defineProperty(C.Event.prototype, e, { enumerable: !0, configurable: !0, get: y(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          }, set: function set(t) {
            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
          } });
      }, fix: function fix(e) {
        return e[C.expando] ? e : new C.Event(e);
      }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
            if (this !== De() && this.focus) return this.focus(), !1;
          }, delegateType: "focusin" }, blur: { trigger: function trigger() {
            if (this === De() && this.blur) return this.blur(), !1;
          }, delegateType: "focusout" }, click: { trigger: function trigger() {
            if ("checkbox" === this.type && this.click && k(this, "input")) return this.click(), !1;
          }, _default: function _default(e) {
            return k(e.target, "a");
          } }, beforeunload: { postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          } } } }, C.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, C.Event = function (e, t) {
      if (!(this instanceof C.Event)) return new C.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
    }, C.Event.prototype = { constructor: C.Event, isDefaultPrevented: Se, isPropagationStopped: Se, isImmediatePropagationStopped: Se, isSimulated: !1, preventDefault: function preventDefault() {
        var e = this.originalEvent;this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault();
      }, stopPropagation: function stopPropagation() {
        var e = this.originalEvent;this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation();
      }, stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      } }, C.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
        var t = e.button;return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      } }, C.event.addProp), C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
      C.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
          var n,
              r = e.relatedTarget,
              i = e.handleObj;return r && (r === this || C.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
        } };
    }), C.fn.extend({ on: function on(e, t, n, r) {
        return Ne(this, e, t, n, r);
      }, one: function one(e, t, n, r) {
        return Ne(this, e, t, n, r, 1);
      }, off: function off(e, t, n) {
        var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
          for (i in e) {
            this.off(i, t, e[i]);
          }return this;
        }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
          C.event.remove(this, e, n, t);
        });
      } });var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Oe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ie(e, t) {
      return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
    }function He(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }function Pe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }function qe(e, t) {
      var n, r, i, o, s, a, l, u;if (1 === t.nodeType) {
        if (J.hasData(e) && (o = J.access(e), s = J.set(t, o), u = o.events)) for (i in delete s.handle, s.events = {}, u) {
          for (n = 0, r = u[i].length; n < r; n++) {
            C.event.add(t, i, u[i][n]);
          }
        }Z.hasData(e) && (a = Z.access(e), l = C.extend({}, a), Z.set(t, l));
      }
    }function Re(e, t, n, r) {
      t = u.apply([], t);var i,
          o,
          s,
          a,
          l,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          h = t[0],
          g = y(h);if (g || p > 1 && "string" == typeof h && !v.checkClone && Le.test(h)) return e.each(function (i) {
        var o = e.eq(i);g && (t[0] = h.call(this, i, o.html())), Re(o, t, n, r);
      });if (p && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
        for (a = (s = C.map(me(i, "script"), He)).length; f < p; f++) {
          l = i, f !== d && (l = C.clone(l, !0, !0), a && C.merge(s, me(l, "script"))), n.call(e[f], l, f);
        }if (a) for (c = s[s.length - 1].ownerDocument, C.map(s, Pe), f = 0; f < a; f++) {
          l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : T(l.textContent.replace(je, ""), c, l));
        }
      }return e;
    }function $e(e, t, n) {
      for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
        n || 1 !== r.nodeType || C.cleanData(me(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && ve(me(r, "script")), r.parentNode.removeChild(r));
      }return e;
    }C.extend({ htmlPrefilter: function htmlPrefilter(e) {
        return e.replace(ke, "<$1></$2>");
      }, clone: function clone(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            u,
            c = e.cloneNode(!0),
            f = C.contains(e.ownerDocument, e);if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = me(c), r = 0, i = (o = me(e)).length; r < i; r++) {
          a = o[r], l = s[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && pe.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
        }if (t) if (n) for (o = o || me(e), s = s || me(c), r = 0, i = o.length; r < i; r++) {
          qe(o[r], s[r]);
        } else qe(e, c);return (s = me(c, "script")).length > 0 && ve(s, !f && me(e, "script")), c;
      }, cleanData: function cleanData(e) {
        for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++) {
          if (Y(n)) {
            if (t = n[J.expando]) {
              if (t.events) for (r in t.events) {
                i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
              }n[J.expando] = void 0;
            }n[Z.expando] && (n[Z.expando] = void 0);
          }
        }
      } }), C.fn.extend({ detach: function detach(e) {
        return $e(this, e, !0);
      }, remove: function remove(e) {
        return $e(this, e);
      }, text: function text(e) {
        return U(this, function (e) {
          return void 0 === e ? C.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      }, append: function append() {
        return Re(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e);
        });
      }, prepend: function prepend() {
        return Re(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Ie(this, e);t.insertBefore(e, t.firstChild);
          }
        });
      }, before: function before() {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      }, after: function after() {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      }, empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (C.cleanData(me(e, !1)), e.textContent = "");
        }return this;
      }, clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return C.clone(this, e, t);
        });
      }, html: function html(e) {
        return U(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Oe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = C.htmlPrefilter(e);try {
              for (; n < r; n++) {
                1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)), t.innerHTML = e);
              }t = 0;
            } catch (e) {}
          }t && this.empty().append(e);
        }, null, e, arguments.length);
      }, replaceWith: function replaceWith() {
        var e = [];return Re(this, arguments, function (t) {
          var n = this.parentNode;C.inArray(this, e) < 0 && (C.cleanData(me(this)), n && n.replaceChild(t, this));
        }, e);
      } }), C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
      C.fn[e] = function (e) {
        for (var n, r = [], i = C(e), o = i.length - 1, s = 0; s <= o; s++) {
          n = s === o ? this : this.clone(!0), C(i[s])[t](n), c.apply(r, n.get());
        }return this.pushStack(r);
      };
    });var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        We = function We(e) {
      var t = e.ownerDocument.defaultView;return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        Fe = new RegExp(oe.join("|"), "i");function Be(e, t, n) {
      var r,
          i,
          o,
          s,
          a = e.style;return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), !v.pixelBoxStyles() && Me.test(s) && Fe.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s;
    }function Ve(e, t) {
      return { get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
        } };
    }!function () {
      function e() {
        if (c) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", we.appendChild(u).appendChild(c);var e = n.getComputedStyle(c);r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 36 === c.offsetWidth || "absolute", we.removeChild(u), c = null;
        }
      }function t(e) {
        return Math.round(parseFloat(e));
      }var r,
          i,
          o,
          a,
          l,
          u = s.createElement("div"),
          c = s.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(v, { boxSizingReliable: function boxSizingReliable() {
          return e(), i;
        }, pixelBoxStyles: function pixelBoxStyles() {
          return e(), a;
        }, pixelPosition: function pixelPosition() {
          return e(), r;
        }, reliableMarginLeft: function reliableMarginLeft() {
          return e(), l;
        }, scrollboxSize: function scrollboxSize() {
          return e(), o;
        } }));
    }();var Ue = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        ze = { position: "absolute", visibility: "hidden", display: "block" },
        Xe = { letterSpacing: "0", fontWeight: "400" },
        Qe = ["Webkit", "Moz", "ms"],
        Ye = s.createElement("div").style;function Ke(e) {
      var t = C.cssProps[e];return t || (t = C.cssProps[e] = function (e) {
        if (e in Ye) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;) {
          if ((e = Qe[n] + t) in Ye) return e;
        }
      }(e) || e), t;
    }function Je(e, t, n) {
      var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }function Ze(e, t, n, r, i, o) {
      var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;if (n === (r ? "border" : "content")) return 0;for (; s < 4; s += 2) {
        "margin" === n && (l += C.css(e, n + oe[s], !0, i)), r ? ("content" === n && (l -= C.css(e, "padding" + oe[s], !0, i)), "margin" !== n && (l -= C.css(e, "border" + oe[s] + "Width", !0, i))) : (l += C.css(e, "padding" + oe[s], !0, i), "padding" !== n ? l += C.css(e, "border" + oe[s] + "Width", !0, i) : a += C.css(e, "border" + oe[s] + "Width", !0, i));
      }return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l;
    }function et(e, t, n) {
      var r = We(e),
          i = Be(e, t, r),
          o = "border-box" === C.css(e, "boxSizing", !1, r),
          s = o;if (Me.test(i)) {
        if (!n) return i;i = "auto";
      }return s = s && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === C.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), s, r, i) + "px";
    }function tt(e, t, n, r, i) {
      return new tt.prototype.init(e, t, n, r, i);
    }C.extend({ cssHooks: { opacity: { get: function get(e, t) {
            if (t) {
              var n = Be(e, "opacity");return "" === n ? "1" : n;
            }
          } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
              o,
              s,
              a = Q(t),
              l = Ge.test(t),
              u = e.style;if (l || (t = Ke(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];"string" === (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n));
        }
      }, css: function css(e, t, n, r) {
        var i,
            o,
            s,
            a = Q(t);return Ge.test(t) || (t = Ke(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Xe && (i = Xe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
      } }), C.each(["height", "width"], function (e, t) {
      C.cssHooks[t] = { get: function get(e, n, r) {
          if (n) return !Ue.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ae(e, ze, function () {
            return et(e, t, r);
          });
        }, set: function set(e, n, r) {
          var i,
              o = We(e),
              s = "border-box" === C.css(e, "boxSizing", !1, o),
              a = r && Ze(e, t, r, s, o);return s && v.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), a && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), Je(0, n, a);
        } };
    }), C.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, { marginLeft: 0 }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), C.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      C.cssHooks[e + t] = { expand: function expand(n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          }return i;
        } }, "margin" !== e && (C.cssHooks[e + t].set = Je);
    }), C.fn.extend({ css: function css(e, t) {
        return U(this, function (e, t, n) {
          var r,
              i,
              o = {},
              s = 0;if (Array.isArray(t)) {
            for (r = We(e), i = t.length; s < i; s++) {
              o[t[s]] = C.css(e, t[s], !1, r);
            }return o;
          }return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
        }, e, t, arguments.length > 1);
      } }), C.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px");
      }, cur: function cur() {
        var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      }, run: function run(e) {
        var t,
            n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
      } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
          var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        }, set: function set(e) {
          C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
        } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      } }, C.easing = { linear: function linear(e) {
        return e;
      }, swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      }, _default: "swing" }, C.fx = tt.prototype.init, C.fx.step = {};var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;function st() {
      rt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, C.fx.interval), C.fx.tick());
    }function at() {
      return n.setTimeout(function () {
        nt = void 0;
      }), nt = Date.now();
    }function lt(e, t) {
      var n,
          r = 0,
          i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
        i["margin" + (n = oe[r])] = i["padding" + n] = e;
      }return t && (i.opacity = i.width = e), i;
    }function ut(e, t, n) {
      for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, s = i.length; o < s; o++) {
        if (r = i[o].call(n, t, e)) return r;
      }
    }function ct(e, t, n) {
      var r,
          i,
          o = 0,
          s = ct.prefilters.length,
          a = C.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (i) return !1;for (var t = nt || at(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) {
          u.tweens[o].run(r);
        }return a.notifyWith(e, [u, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1);
      },
          u = a.promise({ elem: e, props: C.extend({}, t), opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || at(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
          var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
        }, stop: function stop(t) {
          var n = 0,
              r = t ? u.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
            u.tweens[n].run(1);
          }return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
        } }),
          c = u.props;for (!function (e, t) {
        var n, r, i, o, s;for (n in e) {
          if (i = t[r = Q(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = C.cssHooks[r]) && ("expand" in s)) for (n in o = s.expand(o), delete e[r], o) {
            (n in e) || (e[n] = o[n], t[n] = i);
          } else t[r] = i;
        }
      }(c, u.opts.specialEasing); o < s; o++) {
        if (r = ct.prefilters[o].call(u, e, c, u.opts)) return y(r.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
      }return C.map(c, ut, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u;
    }C.Animation = C.extend(ct, { tweeners: { "*": [function (e, t) {
          var n = this.createTween(e, t);return le(n.elem, e, ie.exec(t), n), n;
        }] }, tweener: function tweener(e, t) {
        y(e) ? (t = e, e = ["*"]) : e = e.match(R);for (var n, r = 0, i = e.length; r < i; r++) {
          n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t);
        }
      }, prefilters: [function (e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && se(e),
            m = J.get(e, "fxshow");for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
          s.unqueued || a();
        }), s.unqueued++, p.always(function () {
          p.always(function () {
            s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
          });
        })), t) {
          if (i = t[r], it.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
              if ("show" !== i || !m || void 0 === m[r]) continue;g = !0;
            }d[r] = m && m[r] || C.style(e, r);
          }
        }if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = J.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (fe([e], !0), u = e.style.display || u, c = C.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (p.done(function () {
          h.display = u;
        }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), l = !1, d) {
          l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", { display: u }), o && (m.hidden = !g), g && fe([e], !0), p.done(function () {
            for (r in g || fe([e]), J.remove(e, "fxshow"), d) {
              C.style(e, r, d[r]);
            }
          })), l = ut(g ? m[r] : 0, r, p), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0));
        }
      }], prefilter: function prefilter(e, t) {
        t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
      } }), C.speed = function (e, t, n) {
      var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? C.extend({}, e) : { complete: n || !n && t || y(e) && e, duration: e, easing: n && t || t && !y(t) && t };return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
      }, r;
    }, C.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
        return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      }, animate: function animate(e, t, n, r) {
        var i = C.isEmptyObject(e),
            o = C.speed(t, n, r),
            s = function s() {
          var t = ct(this, C.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
        };return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
      }, stop: function stop(e, t, n) {
        var r = function r(e) {
          var t = e.stop;delete e.stop, t(n);
        };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              i = null != e && e + "queueHooks",
              o = C.timers,
              s = J.get(this);if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) {
            s[i] && s[i].stop && ot.test(i) && r(s[i]);
          }for (i = o.length; i--;) {
            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          }!t && n || C.dequeue(this, e);
        });
      }, finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = C.timers,
              s = r ? r.length : 0;for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          }for (t = 0; t < s; t++) {
            r[t] && r[t].finish && r[t].finish.call(this);
          }delete n.finish;
        });
      } }), C.each(["toggle", "show", "hide"], function (e, t) {
      var n = C.fn[t];C.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i);
      };
    }), C.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
      C.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }), C.timers = [], C.fx.tick = function () {
      var e,
          t = 0,
          n = C.timers;for (nt = Date.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }n.length || C.fx.stop(), nt = void 0;
    }, C.fx.timer = function (e) {
      C.timers.push(e), C.fx.start();
    }, C.fx.interval = 13, C.fx.start = function () {
      rt || (rt = !0, st());
    }, C.fx.stop = function () {
      rt = null;
    }, C.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C.fn.delay = function (e, t) {
      return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
        var i = n.setTimeout(t, e);r.stop = function () {
          n.clearTimeout(i);
        };
      });
    }, function () {
      var e = s.createElement("input"),
          t = s.createElement("select").appendChild(s.createElement("option"));e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value;
    }();var ft,
        pt = C.expr.attrHandle;C.fn.extend({ attr: function attr(e, t) {
        return U(this, C.attr, e, t, arguments.length > 1);
      }, removeAttr: function removeAttr(e) {
        return this.each(function () {
          C.removeAttr(this, e);
        });
      } }), C.extend({ attr: function attr(e, t, n) {
        var r,
            i,
            o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r);
      }, attrHooks: { type: { set: function set(e, t) {
            if (!v.radioValue && "radio" === t && k(e, "input")) {
              var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
            }
          } } }, removeAttr: function removeAttr(e, t) {
        var n,
            r = 0,
            i = t && t.match(R);if (i && 1 === e.nodeType) for (; n = i[r++];) {
          e.removeAttribute(n);
        }
      } }), ft = { set: function set(e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
      } }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = pt[t] || C.find.attr;pt[t] = function (e, t, r) {
        var i,
            o,
            s = t.toLowerCase();return r || (o = pt[s], pt[s] = i, i = null != n(e, t, r) ? s : null, pt[s] = o), i;
      };
    });var dt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;function gt(e) {
      return (e.match(R) || []).join(" ");
    }function mt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }function vt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
    }C.fn.extend({ prop: function prop(e, t) {
        return U(this, C.prop, e, t, arguments.length > 1);
      }, removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[C.propFix[e] || e];
        });
      } }), C.extend({ prop: function prop(e, t, n) {
        var r,
            i,
            o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
      }, propHooks: { tabIndex: { get: function get(e) {
            var t = C.find.attr(e, "tabindex");return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1;
          } } }, propFix: { for: "htmlFor", class: "className" } }), v.optSelected || (C.propHooks.selected = { get: function get(e) {
        var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
      }, set: function set(e) {
        var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      } }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      C.propFix[this.toLowerCase()] = this;
    }), C.fn.extend({ addClass: function addClass(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l = 0;if (y(e)) return this.each(function (t) {
          C(this).addClass(e.call(this, t, mt(this)));
        });if ((t = vt(e)).length) for (; n = this[l++];) {
          if (i = mt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
            for (s = 0; o = t[s++];) {
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            }i !== (a = gt(r)) && n.setAttribute("class", a);
          }
        }return this;
      }, removeClass: function removeClass(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l = 0;if (y(e)) return this.each(function (t) {
          C(this).removeClass(e.call(this, t, mt(this)));
        });if (!arguments.length) return this.attr("class", "");if ((t = vt(e)).length) for (; n = this[l++];) {
          if (i = mt(n), r = 1 === n.nodeType && " " + gt(i) + " ") {
            for (s = 0; o = t[s++];) {
              for (; r.indexOf(" " + o + " ") > -1;) {
                r = r.replace(" " + o + " ", " ");
              }
            }i !== (a = gt(r)) && n.setAttribute("class", a);
          }
        }return this;
      }, toggleClass: function toggleClass(e, t) {
        var n = typeof e === "undefined" ? "undefined" : _typeof(e),
            r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
          C(this).toggleClass(e.call(this, n, mt(this), t), t);
        }) : this.each(function () {
          var t, i, o, s;if (r) for (i = 0, o = C(this), s = vt(e); t = s[i++];) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
        });
      }, hasClass: function hasClass(e) {
        var t,
            n,
            r = 0;for (t = " " + e + " "; n = this[r++];) {
          if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1) return !0;
        }return !1;
      } });var yt = /\r/g;C.fn.extend({ val: function val(e) {
        var t,
            n,
            r,
            i = this[0];return arguments.length ? (r = y(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        })) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0;
      } }), C.extend({ valHooks: { option: { get: function get(e) {
            var t = C.find.attr(e, "value");return null != t ? t : gt(C.text(e));
          } }, select: { get: function get(e) {
            var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                s = "select-one" === e.type,
                a = s ? null : [],
                l = s ? o + 1 : i.length;for (r = o < 0 ? l : s ? o : 0; r < l; r++) {
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                if (t = C(n).val(), s) return t;a.push(t);
              }
            }return a;
          }, set: function set(e, t) {
            for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--;) {
              ((r = i[s]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
            }return n || (e.selectedIndex = -1), o;
          } } } }), C.each(["radio", "checkbox"], function () {
      C.valHooks[this] = { set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1;
        } }, v.checkOn || (C.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), v.focusin = "onfocusin" in n;var xt = /^(?:focusinfocus|focusoutblur)$/,
        bt = function bt(e) {
      e.stopPropagation();
    };C.extend(C.event, { trigger: function trigger(e, t, r, i) {
        var o,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            g = [r || s],
            m = h.call(e, "type") ? e.type : e,
            v = h.call(e, "namespace") ? e.namespace.split(".") : [];if (a = d = l = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), p = C.event.special[m] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
          if (!i && !p.noBubble && !x(r)) {
            for (u = p.delegateType || m, xt.test(u + m) || (a = a.parentNode); a; a = a.parentNode) {
              g.push(a), l = a;
            }l === (r.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n);
          }for (o = 0; (a = g[o++]) && !e.isPropagationStopped();) {
            d = a, e.type = o > 1 ? u : p.bindType || m, (f = (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) && f.apply(a, t), (f = c && a[c]) && f.apply && Y(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
          }return e.type = m, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !Y(r) || c && y(r[m]) && !x(r) && ((l = r[c]) && (r[c] = null), C.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, bt), r[m](), e.isPropagationStopped() && d.removeEventListener(m, bt), C.event.triggered = void 0, l && (r[c] = l)), e.result;
        }
      }, simulate: function simulate(e, t, n) {
        var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });C.event.trigger(r, null, t);
      } }), C.fn.extend({ trigger: function trigger(e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this);
        });
      }, triggerHandler: function triggerHandler(e, t) {
        var n = this[0];if (n) return C.event.trigger(e, t, n, !0);
      } }), v.focusin || C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      var n = function n(e) {
        C.event.simulate(t, e.target, C.event.fix(e));
      };C.event.special[t] = { setup: function setup() {
          var r = this.ownerDocument || this,
              i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
        }, teardown: function teardown() {
          var r = this.ownerDocument || this,
              i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
        } };
    });var Tt = n.location,
        wt = Date.now(),
        Ct = /\?/;C.parseXML = function (e) {
      var t;if (!e || "string" != typeof e) return null;try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t;
    };var Et = /\[\]$/,
        _t = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;function Dt(e, t, n, r) {
      var i;if (Array.isArray(t)) C.each(t, function (t, i) {
        n || Et.test(e) ? r(e, i) : Dt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
      });else if (n || "object" !== w(t)) r(e, t);else for (i in t) {
        Dt(e + "[" + i + "]", t[i], n, r);
      }
    }C.param = function (e, t) {
      var n,
          r = [],
          i = function i(e, t) {
        var n = y(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
        i(this.name, this.value);
      });else for (n in e) {
        Dt(n, e[n], t, i);
      }return r.join("&");
    }, C.fn.extend({ serialize: function serialize() {
        return C.param(this.serializeArray());
      }, serializeArray: function serializeArray() {
        return this.map(function () {
          var e = C.prop(this, "elements");return e ? C.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;return this.name && !C(this).is(":disabled") && St.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
        }).map(function (e, t) {
          var n = C(this).val();return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
            return { name: t.name, value: e.replace(_t, "\r\n") };
          }) : { name: t.name, value: n.replace(_t, "\r\n") };
        }).get();
      } });var Nt = /%20/g,
        kt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Ht = {},
        Pt = {},
        qt = "*/".concat("*"),
        Rt = s.createElement("a");function $t(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");var r,
            i = 0,
            o = t.toLowerCase().match(R) || [];if (y(n)) for (; r = o[i++];) {
          "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        }
      };
    }function Mt(e, t, n, r) {
      var i = {},
          o = e === Pt;function s(a) {
        var l;return i[a] = !0, C.each(e[a] || [], function (e, a) {
          var u = a(t, n, r);return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1);
        }), l;
      }return s(t.dataTypes[0]) || !i["*"] && s("*");
    }function Wt(e, t) {
      var n,
          r,
          i = C.ajaxSettings.flatOptions || {};for (n in t) {
        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      }return r && C.extend(!0, e, r), e;
    }Rt.href = Tt.href, C.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": qt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
        return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e);
      }, ajaxPrefilter: $t(Ht), ajaxTransport: $t(Pt), ajax: function ajax(e, t) {
        "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};var r,
            i,
            o,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h = C.ajaxSetup({}, t),
            g = h.context || h,
            m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
            v = C.Deferred(),
            y = C.Callbacks("once memory"),
            x = h.statusCode || {},
            b = {},
            T = {},
            w = "canceled",
            E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
            var t;if (c) {
              if (!a) for (a = {}; t = Lt.exec(o);) {
                a[t[1].toLowerCase()] = t[2];
              }t = a[e.toLowerCase()];
            }return null == t ? null : t;
          }, getAllResponseHeaders: function getAllResponseHeaders() {
            return c ? o : null;
          }, setRequestHeader: function setRequestHeader(e, t) {
            return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
          }, overrideMimeType: function overrideMimeType(e) {
            return null == c && (h.mimeType = e), this;
          }, statusCode: function statusCode(e) {
            var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
              x[t] = [x[t], e[t]];
            }return this;
          }, abort: function abort(e) {
            var t = e || w;return r && r.abort(t), _(0, t), this;
          } };if (v.promise(E), h.url = ((e || h.url || Tt.href) + "").replace(It, Tt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
          u = s.createElement("a");try {
            u.href = h.url, u.href = u.href, h.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host;
          } catch (e) {
            h.crossDomain = !0;
          }
        }if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), Mt(Ht, h, t, E), c) return E;for (p in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !jt.test(h.type), i = h.url.replace(kt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (d = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Ct.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Ot, "$1"), d = (Ct.test(i) ? "&" : "?") + "_=" + wt++ + d), h.url = i + d), h.ifModified && (C.lastModified[i] && E.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && E.setRequestHeader("If-None-Match", C.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
          E.setRequestHeader(p, h.headers[p]);
        }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (w = "abort", y.add(h.complete), E.done(h.success), E.fail(h.error), r = Mt(Pt, h, t, E)) {
          if (E.readyState = 1, f && m.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (l = n.setTimeout(function () {
            E.abort("timeout");
          }, h.timeout));try {
            c = !1, r.send(b, _);
          } catch (e) {
            if (c) throw e;_(-1, e);
          }
        } else _(-1, "No Transport");function _(e, t, s, a) {
          var u,
              p,
              d,
              b,
              T,
              w = t;c || (c = !0, l && n.clearTimeout(l), r = void 0, o = a || "", E.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (b = function (e, t, n) {
            for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            }if (r) for (i in a) {
              if (a[i] && a[i].test(r)) {
                l.unshift(i);break;
              }
            }if (l[0] in n) o = l[0];else {
              for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                  o = i;break;
                }s || (s = i);
              }o = o || s;
            }if (o) return o !== l[0] && l.unshift(o), n[o];
          }(h, E, s)), b = function (e, t, n, r) {
            var i,
                o,
                s,
                a,
                l,
                u = {},
                c = e.dataTypes.slice();if (c[1]) for (s in e.converters) {
              u[s.toLowerCase()] = e.converters[s];
            }for (o = c.shift(); o;) {
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
                if (!(s = u[l + " " + o] || u["* " + o])) for (i in u) {
                  if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                    !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));break;
                  }
                }if (!0 !== s) if (s && e.throws) t = s(t);else try {
                  t = s(t);
                } catch (e) {
                  return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
                }
              }
            }return { state: "success", data: t };
          }(h, b, E, u), u ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (C.lastModified[i] = T), (T = E.getResponseHeader("etag")) && (C.etag[i] = T)), 204 === e || "HEAD" === h.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state, p = b.data, u = !(d = b.error))) : (d = w, !e && w || (w = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || w) + "", u ? v.resolveWith(g, [p, w, E]) : v.rejectWith(g, [E, w, d]), E.statusCode(x), x = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [E, h, u ? p : d]), y.fireWith(g, [E, w]), f && (m.trigger("ajaxComplete", [E, h]), --C.active || C.event.trigger("ajaxStop")));
        }return E;
      }, getJSON: function getJSON(e, t, n) {
        return C.get(e, t, n, "json");
      }, getScript: function getScript(e, t) {
        return C.get(e, void 0, t, "script");
      } }), C.each(["get", "post"], function (e, t) {
      C[t] = function (e, n, r, i) {
        return y(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({ url: e, type: t, dataType: i, data: n, success: r }, C.isPlainObject(e) && e));
      };
    }), C._evalUrl = function (e) {
      return C.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
    }, C.fn.extend({ wrapAll: function wrapAll(e) {
        var t;return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }return e;
        }).append(this)), this;
      }, wrapInner: function wrapInner(e) {
        return y(e) ? this.each(function (t) {
          C(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = C(this),
              n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
        });
      }, wrap: function wrap(e) {
        var t = y(e);return this.each(function (n) {
          C(this).wrapAll(t ? e.call(this, n) : e);
        });
      }, unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          C(this).replaceWith(this.childNodes);
        }), this;
      } }), C.expr.pseudos.hidden = function (e) {
      return !C.expr.pseudos.visible(e);
    }, C.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, C.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };var Ft = { 0: 200, 1223: 204 },
        Bt = C.ajaxSettings.xhr();v.cors = !!Bt && "withCredentials" in Bt, v.ajax = Bt = !!Bt, C.ajaxTransport(function (e) {
      var _t3, r;if (v.cors || Bt && !e.crossDomain) return { send: function send(i, o) {
          var s,
              a = e.xhr();if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
            a[s] = e.xhrFields[s];
          }for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) {
            a.setRequestHeader(s, i[s]);
          }_t3 = function t(e) {
            return function () {
              _t3 && (_t3 = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
            };
          }, a.onload = _t3(), r = a.onerror = a.ontimeout = _t3("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout(function () {
              _t3 && r();
            });
          }, _t3 = _t3("abort");try {
            a.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        }, abort: function abort() {
          _t3 && _t3();
        } };
    }), C.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), C.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
          return C.globalEval(e), e;
        } } }), C.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), C.ajaxTransport("script", function (e) {
      var t, _n;if (e.crossDomain) return { send: function send(r, i) {
          t = C("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
          }), s.head.appendChild(t[0]);
        }, abort: function abort() {
          _n && _n();
        } };
    });var Vt,
        Ut = [],
        Gt = /(=)\?(?=&|$)|\?\?/;C.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
        var e = Ut.pop() || C.expando + "_" + wt++;return this[e] = !0, e;
      } }), C.ajaxPrefilter("json jsonp", function (e, t, r) {
      var i,
          o,
          s,
          a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
        return s || C.error(i + " was not called"), s[0];
      }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
        s = arguments;
      }, r.always(function () {
        void 0 === o ? C(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Ut.push(i)), s && y(o) && o(s[0]), s = o = void 0;
      }), "script";
    }), v.createHTMLDocument = ((Vt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), C.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(r)) : t = s), i = O.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = Te([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));var r, i, o;
    }, C.fn.load = function (e, t, n) {
      var r,
          i,
          o,
          s = this,
          a = e.indexOf(" ");return a > -1 && (r = gt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), s.length > 0 && C.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
        o = arguments, s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        s.each(function () {
          n.apply(this, o || [e.responseText, t, e]);
        });
      }), this;
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      C.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), C.expr.pseudos.animated = function (e) {
      return C.grep(C.timers, function (t) {
        return e === t.elem;
      }).length;
    }, C.offset = { setOffset: function setOffset(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            u = C.css(e, "position"),
            c = C(e),
            f = {};"static" === u && (e.style.position = "relative"), a = c.offset(), o = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
      } }, C.fn.extend({ offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          C.offset.setOffset(this, e, t);
        });var t,
            n,
            r = this[0];return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
      }, position: function position() {
        if (this[0]) {
          var e,
              t,
              n,
              r = this[0],
              i = { top: 0, left: 0 };if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) {
              e = e.parentNode;
            }e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0));
          }return { top: t.top - i.top - C.css(r, "marginTop", !0), left: t.left - i.left - C.css(r, "marginLeft", !0) };
        }
      }, offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === C.css(e, "position");) {
            e = e.offsetParent;
          }return e || we;
        });
      } }), C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
      var n = "pageYOffset" === t;C.fn[e] = function (r) {
        return U(this, function (e, r, i) {
          var o;if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
        }, e, r, arguments.length);
      };
    }), C.each(["top", "left"], function (e, t) {
      C.cssHooks[t] = Ve(v.pixelPosition, function (e, n) {
        if (n) return n = Be(e, t), Me.test(n) ? C(e).position()[t] + "px" : n;
      });
    }), C.each({ Height: "height", Width: "width" }, function (e, t) {
      C.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
        C.fn[r] = function (i, o) {
          var s = arguments.length && (n || "boolean" != typeof i),
              a = n || (!0 === i || !0 === o ? "margin" : "border");return U(this, function (t, n, i) {
            var o;return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, a) : C.style(t, n, i, a);
          }, t, s ? i : void 0, s);
        };
      });
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      C.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }), C.fn.extend({ hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      } }), C.fn.extend({ bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      }, unbind: function unbind(e, t) {
        return this.off(e, null, t);
      }, delegate: function delegate(e, t, n, r) {
        return this.on(t, e, n, r);
      }, undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      } }), C.proxy = function (e, t) {
      var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = l.call(arguments, 2), (i = function i() {
        return e.apply(t || this, r.concat(l.call(arguments)));
      }).guid = e.guid = e.guid || C.guid++, i;
    }, C.holdReady = function (e) {
      e ? C.readyWait++ : C.ready(!0);
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = k, C.isFunction = y, C.isWindow = x, C.camelCase = Q, C.type = w, C.now = Date.now, C.isNumeric = function (e) {
      var t = C.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, void 0 === (r = function () {
      return C;
    }.apply(t, [])) || (e.exports = r);var zt = n.jQuery,
        Xt = n.$;return C.noConflict = function (e) {
      return n.$ === C && (n.$ = Xt), e && n.jQuery === C && (n.jQuery = zt), C;
    }, i || (n.jQuery = n.$ = C), C;
  });
}, function (e, t, n) {
  "use strict";
  n.r(t);var r = n(0),
      i = n.n(r);var o = function (e) {
    var t = !1;function n(t) {
      var _this = this;

      var n = !1;return e(this).one(r.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || r.triggerTransitionEnd(_this);
      }, t), this;
    }var r = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));return e;
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var n = t.getAttribute("data-target");n && "#" !== n || (n = t.getAttribute("href") || ""), "#" === n.charAt(0) && (n = function (t) {
          return t = "function" == typeof e.escapeSelector ? e.escapeSelector(t).substr(1) : t.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1");
        }(n));try {
          return e(document).find(n).length > 0 ? n : null;
        } catch (e) {
          return null;
        }
      },
      reflow: function reflow(e) {
        return e.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(n) {
        e(n).trigger(t.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(t);
      }, isElement: function isElement(e) {
        return (e[0] || e).nodeType;
      }, typeCheckConfig: function typeCheckConfig(e, t, n) {
        for (var _o2 in n) {
          if (Object.prototype.hasOwnProperty.call(n, _o2)) {
            var s = n[_o2],
                a = t[_o2],
                l = a && r.isElement(a) ? "element" : (i = a, {}.toString.call(i).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if (!new RegExp(s).test(l)) throw new Error(e.toUpperCase() + ": " + ("Option \"" + _o2 + "\" provided type \"" + l + "\" ") + ("but expected type \"" + s + "\"."));
          }
        }var i;
      }
    };return t = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }, e.fn.emulateTransitionEnd = n, r.supportsTransitionEnd() && (e.event.special[r.TRANSITION_END] = { bindType: t.end, delegateType: t.end, handle: function handle(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      }
    }), r;
  }(i.a);(function (e) {
    var t = "collapse",
        n = "4.0.0",
        r = "bs.collapse",
        i = "." + r,
        s = e.fn[t],
        a = 600,
        l = { toggle: !0, parent: "" },
        u = { toggle: "boolean", parent: "(string|element)" },
        c = { SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + ".data-api" },
        f = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
        p = { WIDTH: "width", HEIGHT: "height" },
        d = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' };
    var h = function () {
      function h(t, n) {
        _classCallCheck(this, h);

        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e("[data-toggle=\"collapse\"][href=\"#" + t.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + t.id + "\"]")));var r = e(d.DATA_TOGGLE);for (var _n2 = 0; _n2 < r.length; _n2++) {
          var _i = r[_n2],
              _s = o.getSelectorFromElement(_i);null !== _s && e(_s).filter(t).length > 0 && (this._selector = _s, this._triggerArray.push(_i));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }

      _createClass(h, [{
        key: "toggle",
        value: function toggle() {
          e(this._element).hasClass(f.SHOW) ? this.hide() : this.show();
        }
      }, {
        key: "show",
        value: function show() {
          var _this2 = this;

          if (this._isTransitioning || e(this._element).hasClass(f.SHOW)) return;var t = void 0,
              n = void 0;if (this._parent && 0 === (t = e.makeArray(e(this._parent).find(d.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"))).length && (t = null), t && (n = e(t).not(this._selector).data(r)) && n._isTransitioning) return;var i = e.Event(c.SHOW);if (e(this._element).trigger(i), i.isDefaultPrevented()) return;t && (h._jQueryInterface.call(e(t).not(this._selector), "hide"), n || e(t).data(r, null));var s = this._getDimension();e(this._element).removeClass(f.COLLAPSE).addClass(f.COLLAPSING), this._element.style[s] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(f.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);var l = function l() {
            e(_this2._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).addClass(f.SHOW), _this2._element.style[s] = "", _this2.setTransitioning(!1), e(_this2._element).trigger(c.SHOWN);
          };if (!o.supportsTransitionEnd()) return void l();var u = "scroll" + (s[0].toUpperCase() + s.slice(1));e(this._element).one(o.TRANSITION_END, l).emulateTransitionEnd(a), this._element.style[s] = this._element[u] + "px";
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this3 = this;

          if (this._isTransitioning || !e(this._element).hasClass(f.SHOW)) return;var t = e.Event(c.HIDE);if (e(this._element).trigger(t), t.isDefaultPrevented()) return;var n = this._getDimension();if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", o.reflow(this._element), e(this._element).addClass(f.COLLAPSING).removeClass(f.COLLAPSE).removeClass(f.SHOW), this._triggerArray.length > 0) for (var _t4 = 0; _t4 < this._triggerArray.length; _t4++) {
            var _n3 = this._triggerArray[_t4],
                _r = o.getSelectorFromElement(_n3);if (null !== _r) {
              e(_r).hasClass(f.SHOW) || e(_n3).addClass(f.COLLAPSED).attr("aria-expanded", !1);
            }
          }this.setTransitioning(!0);var r = function r() {
            _this3.setTransitioning(!1), e(_this3._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).trigger(c.HIDDEN);
          };this._element.style[n] = "", o.supportsTransitionEnd() ? e(this._element).one(o.TRANSITION_END, r).emulateTransitionEnd(a) : r();
        }
      }, {
        key: "setTransitioning",
        value: function setTransitioning(e) {
          this._isTransitioning = e;
        }
      }, {
        key: "dispose",
        value: function dispose() {
          e.removeData(this._element, r), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
        }
      }, {
        key: "_getConfig",
        value: function _getConfig(e) {
          return (e = _extends({}, l, e)).toggle = Boolean(e.toggle), o.typeCheckConfig(t, e, u), e;
        }
      }, {
        key: "_getDimension",
        value: function _getDimension() {
          return e(this._element).hasClass(p.WIDTH) ? p.WIDTH : p.HEIGHT;
        }
      }, {
        key: "_getParent",
        value: function _getParent() {
          var _this4 = this;

          var t = null;o.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = e(this._config.parent)[0];var n = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";return e(t).find(n).each(function (e, t) {
            _this4._addAriaAndCollapsedClass(h._getTargetFromElement(t), [t]);
          }), t;
        }
      }, {
        key: "_addAriaAndCollapsedClass",
        value: function _addAriaAndCollapsedClass(t, n) {
          if (t) {
            var _r2 = e(t).hasClass(f.SHOW);n.length > 0 && e(n).toggleClass(f.COLLAPSED, !_r2).attr("aria-expanded", _r2);
          }
        }
      }], [{
        key: "_getTargetFromElement",
        value: function _getTargetFromElement(t) {
          var n = o.getSelectorFromElement(t);return n ? e(n)[0] : null;
        }
      }, {
        key: "_jQueryInterface",
        value: function _jQueryInterface(t) {
          return this.each(function () {
            var n = e(this);var i = n.data(r);var o = _extends({}, l, n.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t);if (!i && o.toggle && /show|hide/.test(t) && (o.toggle = !1), i || (i = new h(this, o), n.data(r, i)), "string" == typeof t) {
              if (void 0 === i[t]) throw new TypeError("No method named \"" + t + "\"");i[t]();
            }
          });
        }
      }, {
        key: "VERSION",
        get: function get() {
          return n;
        }
      }, {
        key: "Default",
        get: function get() {
          return l;
        }
      }]);

      return h;
    }();

    e(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var n = e(this),
          i = o.getSelectorFromElement(this);e(i).each(function () {
        var t = e(this),
            i = t.data(r) ? "toggle" : n.data();h._jQueryInterface.call(t, i);
      });
    }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
      return e.fn[t] = s, h._jQueryInterface;
    };
  })(i.a);(function (e) {
    var t = "scrollspy",
        n = "4.0.0",
        r = "bs.scrollspy",
        i = "." + r,
        s = e.fn[t],
        a = { offset: 10, method: "auto", target: "" },
        l = { offset: "number", method: "string", target: "(string|element)" },
        u = { ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + ".data-api" },
        c = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active" },
        f = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        p = { OFFSET: "offset", POSITION: "position" };
    var d = function () {
      function d(t, n) {
        var _this5 = this;

        _classCallCheck(this, d);

        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + (this._config.target + " " + f.LIST_ITEMS + ",") + (this._config.target + " " + f.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(u.SCROLL, function (e) {
          return _this5._process(e);
        }), this.refresh(), this._process();
      }

      _createClass(d, [{
        key: "refresh",
        value: function refresh() {
          var _this6 = this;

          var t = this._scrollElement === this._scrollElement.window ? p.OFFSET : p.POSITION,
              n = "auto" === this._config.method ? t : this._config.method,
              r = n === p.POSITION ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
            var i = void 0;var s = o.getSelectorFromElement(t);if (s && (i = e(s)[0]), i) {
              var _t5 = i.getBoundingClientRect();if (_t5.width || _t5.height) return [e(i)[n]().top + r, s];
            }return null;
          }).filter(function (e) {
            return e;
          }).sort(function (e, t) {
            return e[0] - t[0];
          }).forEach(function (e) {
            _this6._offsets.push(e[0]), _this6._targets.push(e[1]);
          });
        }
      }, {
        key: "dispose",
        value: function dispose() {
          e.removeData(this._element, r), e(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
        }
      }, {
        key: "_getConfig",
        value: function _getConfig(n) {
          if ("string" != typeof (n = _extends({}, a, n)).target) {
            var _r3 = e(n.target).attr("id");_r3 || (_r3 = o.getUID(t), e(n.target).attr("id", _r3)), n.target = "#" + _r3;
          }return o.typeCheckConfig(t, n, l), n;
        }
      }, {
        key: "_getScrollTop",
        value: function _getScrollTop() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
      }, {
        key: "_getScrollHeight",
        value: function _getScrollHeight() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
      }, {
        key: "_getOffsetHeight",
        value: function _getOffsetHeight() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
      }, {
        key: "_process",
        value: function _process() {
          var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();if (this._scrollHeight !== t && this.refresh(), e >= n) {
            var _e2 = this._targets[this._targets.length - 1];this._activeTarget !== _e2 && this._activate(_e2);
          } else {
            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var _t6 = this._offsets.length; _t6--;) {
              this._activeTarget !== this._targets[_t6] && e >= this._offsets[_t6] && (void 0 === this._offsets[_t6 + 1] || e < this._offsets[_t6 + 1]) && this._activate(this._targets[_t6]);
            }
          }
        }
      }, {
        key: "_activate",
        value: function _activate(t) {
          this._activeTarget = t, this._clear();var n = this._selector.split(",");n = n.map(function (e) {
            return e + "[data-target=\"" + t + "\"]," + (e + "[href=\"" + t + "\"]");
          });var r = e(n.join(","));r.hasClass(c.DROPDOWN_ITEM) ? (r.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c.ACTIVE), r.addClass(c.ACTIVE)) : (r.addClass(c.ACTIVE), r.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(c.ACTIVE), r.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(c.ACTIVE)), e(this._scrollElement).trigger(u.ACTIVATE, { relatedTarget: t });
        }
      }, {
        key: "_clear",
        value: function _clear() {
          e(this._selector).filter(f.ACTIVE).removeClass(c.ACTIVE);
        }
      }], [{
        key: "_jQueryInterface",
        value: function _jQueryInterface(t) {
          return this.each(function () {
            var n = e(this).data(r);if (n || (n = new d(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), e(this).data(r, n)), "string" == typeof t) {
              if (void 0 === n[t]) throw new TypeError("No method named \"" + t + "\"");n[t]();
            }
          });
        }
      }, {
        key: "VERSION",
        get: function get() {
          return n;
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]);

      return d;
    }();

    e(window).on(u.LOAD_DATA_API, function () {
      var t = e.makeArray(e(f.DATA_SPY));for (var _n4 = t.length; _n4--;) {
        var _r4 = e(t[_n4]);d._jQueryInterface.call(_r4, _r4.data());
      }
    }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
      return e.fn[t] = s, d._jQueryInterface;
    };
  })(i.a);
}]);
