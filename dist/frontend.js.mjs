var mi = (e, i, s) => {
  if (!i.has(e))
    throw TypeError("Cannot " + s);
};
var ht = (e, i, s) => (mi(e, i, "read from private field"), s ? s.call(e) : i.get(e)), bt = (e, i, s) => {
  if (i.has(e))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(e) : i.set(e, s);
}, go = (e, i, s, u) => (mi(e, i, "write to private field"), u ? u.call(e, s) : i.set(e, s), s);
var et = (e, i, s) => (mi(e, i, "access private method"), s);
var ws = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Si = {}, Ls = {
  get exports() {
    return Si;
  },
  set exports(e) {
    Si = e;
  }
};
/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */
(function(e) {
  (function(i, s) {
    e.exports = i.document ? s(i, !0) : function(u) {
      if (!u.document)
        throw new Error("jQuery requires a window with a document");
      return s(u);
    };
  })(typeof window < "u" ? window : ws, function(i, s) {
    var u = [], l = Object.getPrototypeOf, d = u.slice, h = u.flat ? function(t) {
      return u.flat.call(t);
    } : function(t) {
      return u.concat.apply([], t);
    }, E = u.push, C = u.indexOf, m = {}, W = m.toString, D = m.hasOwnProperty, he = D.toString, we = he.call(Object), ue = {}, G = function(o) {
      return typeof o == "function" && typeof o.nodeType != "number" && typeof o.item != "function";
    }, Ee = function(o) {
      return o != null && o === o.window;
    }, ne = i.document, Ne = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
    function Be(t, o, a) {
      a = a || ne;
      var r, f, _ = a.createElement("script");
      if (_.text = t, o)
        for (r in Ne)
          f = o[r] || o.getAttribute && o.getAttribute(r), f && _.setAttribute(r, f);
      a.head.appendChild(_).parentNode.removeChild(_);
    }
    function Re(t) {
      return t == null ? t + "" : typeof t == "object" || typeof t == "function" ? m[W.call(t)] || "object" : typeof t;
    }
    var Rt = "3.6.3", c = function(t, o) {
      return new c.fn.init(t, o);
    };
    c.fn = c.prototype = {
      // The current version of jQuery being used
      jquery: Rt,
      constructor: c,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return d.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(t) {
        return t == null ? d.call(this) : t < 0 ? this[t + this.length] : this[t];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(t) {
        var o = c.merge(this.constructor(), t);
        return o.prevObject = this, o;
      },
      // Execute a callback for every element in the matched set.
      each: function(t) {
        return c.each(this, t);
      },
      map: function(t) {
        return this.pushStack(c.map(this, function(o, a) {
          return t.call(o, a, o);
        }));
      },
      slice: function() {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(c.grep(this, function(t, o) {
          return (o + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(c.grep(this, function(t, o) {
          return o % 2;
        }));
      },
      eq: function(t) {
        var o = this.length, a = +t + (t < 0 ? o : 0);
        return this.pushStack(a >= 0 && a < o ? [this[a]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: E,
      sort: u.sort,
      splice: u.splice
    }, c.extend = c.fn.extend = function() {
      var t, o, a, r, f, _, b = arguments[0] || {}, O = 1, T = arguments.length, R = !1;
      for (typeof b == "boolean" && (R = b, b = arguments[O] || {}, O++), typeof b != "object" && !G(b) && (b = {}), O === T && (b = this, O--); O < T; O++)
        if ((t = arguments[O]) != null)
          for (o in t)
            r = t[o], !(o === "__proto__" || b === r) && (R && r && (c.isPlainObject(r) || (f = Array.isArray(r))) ? (a = b[o], f && !Array.isArray(a) ? _ = [] : !f && !c.isPlainObject(a) ? _ = {} : _ = a, f = !1, b[o] = c.extend(R, _, r)) : r !== void 0 && (b[o] = r));
      return b;
    }, c.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (Rt + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: !0,
      error: function(t) {
        throw new Error(t);
      },
      noop: function() {
      },
      isPlainObject: function(t) {
        var o, a;
        return !t || W.call(t) !== "[object Object]" ? !1 : (o = l(t), o ? (a = D.call(o, "constructor") && o.constructor, typeof a == "function" && he.call(a) === we) : !0);
      },
      isEmptyObject: function(t) {
        var o;
        for (o in t)
          return !1;
        return !0;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(t, o, a) {
        Be(t, { nonce: o && o.nonce }, a);
      },
      each: function(t, o) {
        var a, r = 0;
        if (J(t))
          for (a = t.length; r < a && o.call(t[r], r, t[r]) !== !1; r++)
            ;
        else
          for (r in t)
            if (o.call(t[r], r, t[r]) === !1)
              break;
        return t;
      },
      // results is for internal usage only
      makeArray: function(t, o) {
        var a = o || [];
        return t != null && (J(Object(t)) ? c.merge(
          a,
          typeof t == "string" ? [t] : t
        ) : E.call(a, t)), a;
      },
      inArray: function(t, o, a) {
        return o == null ? -1 : C.call(o, t, a);
      },
      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function(t, o) {
        for (var a = +o.length, r = 0, f = t.length; r < a; r++)
          t[f++] = o[r];
        return t.length = f, t;
      },
      grep: function(t, o, a) {
        for (var r, f = [], _ = 0, b = t.length, O = !a; _ < b; _++)
          r = !o(t[_], _), r !== O && f.push(t[_]);
        return f;
      },
      // arg is for internal usage only
      map: function(t, o, a) {
        var r, f, _ = 0, b = [];
        if (J(t))
          for (r = t.length; _ < r; _++)
            f = o(t[_], _, a), f != null && b.push(f);
        else
          for (_ in t)
            f = o(t[_], _, a), f != null && b.push(f);
        return h(b);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: ue
    }), typeof Symbol == "function" && (c.fn[Symbol.iterator] = u[Symbol.iterator]), c.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(t, o) {
        m["[object " + o + "]"] = o.toLowerCase();
      }
    );
    function J(t) {
      var o = !!t && "length" in t && t.length, a = Re(t);
      return G(t) || Ee(t) ? !1 : a === "array" || o === 0 || typeof o == "number" && o > 0 && o - 1 in t;
    }
    var se = (
      /*!
       * Sizzle CSS Selector Engine v2.3.9
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2022-12-19
       */
      function(t) {
        var o, a, r, f, _, b, O, T, R, U, Y, k, B, fe, Oe, de, Ke, Xe, dt, je = "sizzle" + 1 * new Date(), Te = t.document, lt = 0, xe = 0, Ge = kn(), bn = kn(), xn = kn(), ft = kn(), zt = function(g, A) {
          return g === A && (Y = !0), 0;
        }, Gt = {}.hasOwnProperty, rt = [], jt = rt.pop, Et = rt.push, Ht = rt.push, lo = rt.slice, Vt = function(g, A) {
          for (var w = 0, $ = g.length; w < $; w++)
            if (g[w] === A)
              return w;
          return -1;
        }, ui = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Ue = "[\\x20\\t\\r\\n\\f]", Yt = "(?:\\\\[\\da-fA-F]{1,6}" + Ue + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", ro = "\\[" + Ue + "*(" + Yt + ")(?:" + Ue + // Operator (capture 2)
        "*([*^$|!~]?=)" + Ue + // "Attribute values must be CSS identifiers [capture 5]
        // or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Yt + "))|)" + Ue + "*\\]", di = ":(" + Yt + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + ro + ")*)|.*)\\)|)", ps = new RegExp(Ue + "+", "g"), Nn = new RegExp("^" + Ue + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ue + "+$", "g"), _s = new RegExp("^" + Ue + "*," + Ue + "*"), co = new RegExp("^" + Ue + "*([>+~]|" + Ue + ")" + Ue + "*"), hs = new RegExp(Ue + "|>"), bs = new RegExp(di), gs = new RegExp("^" + Yt + "$"), Mn = {
          ID: new RegExp("^#(" + Yt + ")"),
          CLASS: new RegExp("^\\.(" + Yt + ")"),
          TAG: new RegExp("^(" + Yt + "|[*])"),
          ATTR: new RegExp("^" + ro),
          PSEUDO: new RegExp("^" + di),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Ue + "*(even|odd|(([+-]|)(\\d*)n|)" + Ue + "*(?:([+-]|)" + Ue + "*(\\d+)|))" + Ue + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + ui + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + Ue + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Ue + "*((?:-\\d)?\\d*)" + Ue + "*\\)|)(?=[^-]|$)", "i")
        }, ms = /HTML$/i, vs = /^(?:input|select|textarea|button)$/i, ys = /^h\d$/i, gn = /^[^{]+\{\s*\[native \w/, Ss = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, fi = /[+~]/, Ut = new RegExp("\\\\[\\da-fA-F]{1,6}" + Ue + "?|\\\\([^\\r\\n\\f])", "g"), Bt = function(g, A) {
          var w = "0x" + g.slice(1) - 65536;
          return A || // Replace a hexadecimal escape sequence with the encoded Unicode code point
          // Support: IE <=11+
          // For values outside the Basic Multilingual Plane (BMP), manually construct a
          // surrogate pair
          (w < 0 ? String.fromCharCode(w + 65536) : String.fromCharCode(w >> 10 | 55296, w & 1023 | 56320));
        }, uo = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fo = function(g, A) {
          return A ? g === "\0" ? "�" : g.slice(0, -1) + "\\" + g.charCodeAt(g.length - 1).toString(16) + " " : "\\" + g;
        }, po = function() {
          k();
        }, Es = Bn(
          function(g) {
            return g.disabled === !0 && g.nodeName.toLowerCase() === "fieldset";
          },
          { dir: "parentNode", next: "legend" }
        );
        try {
          Ht.apply(
            rt = lo.call(Te.childNodes),
            Te.childNodes
          ), rt[Te.childNodes.length].nodeType;
        } catch {
          Ht = {
            apply: rt.length ? (
              // Leverage slice if possible
              function(A, w) {
                Et.apply(A, lo.call(w));
              }
            ) : (
              // Support: IE<9
              // Otherwise append directly
              function(A, w) {
                for (var $ = A.length, I = 0; A[$++] = w[I++]; )
                  ;
                A.length = $ - 1;
              }
            )
          };
        }
        function $e(g, A, w, $) {
          var I, z, X, te, ae, me, be, ye = A && A.ownerDocument, Le = A ? A.nodeType : 9;
          if (w = w || [], typeof g != "string" || !g || Le !== 1 && Le !== 9 && Le !== 11)
            return w;
          if (!$ && (k(A), A = A || B, Oe)) {
            if (Le !== 11 && (ae = Ss.exec(g)))
              if (I = ae[1]) {
                if (Le === 9)
                  if (X = A.getElementById(I)) {
                    if (X.id === I)
                      return w.push(X), w;
                  } else
                    return w;
                else if (ye && (X = ye.getElementById(I)) && dt(A, X) && X.id === I)
                  return w.push(X), w;
              } else {
                if (ae[2])
                  return Ht.apply(w, A.getElementsByTagName(g)), w;
                if ((I = ae[3]) && a.getElementsByClassName && A.getElementsByClassName)
                  return Ht.apply(w, A.getElementsByClassName(I)), w;
              }
            if (a.qsa && !ft[g + " "] && (!de || !de.test(g)) && // Support: IE 8 only
            // Exclude object elements
            (Le !== 1 || A.nodeName.toLowerCase() !== "object")) {
              if (be = g, ye = A, Le === 1 && (hs.test(g) || co.test(g))) {
                for (ye = fi.test(g) && _i(A.parentNode) || A, (ye !== A || !a.scope) && ((te = A.getAttribute("id")) ? te = te.replace(uo, fo) : A.setAttribute("id", te = je)), me = b(g), z = me.length; z--; )
                  me[z] = (te ? "#" + te : ":scope") + " " + Un(me[z]);
                be = me.join(",");
              }
              try {
                if (a.cssSupportsSelector && // eslint-disable-next-line no-undef
                !CSS.supports("selector(:is(" + be + "))"))
                  throw new Error();
                return Ht.apply(
                  w,
                  ye.querySelectorAll(be)
                ), w;
              } catch {
                ft(g, !0);
              } finally {
                te === je && A.removeAttribute("id");
              }
            }
          }
          return T(g.replace(Nn, "$1"), A, w, $);
        }
        function kn() {
          var g = [];
          function A(w, $) {
            return g.push(w + " ") > r.cacheLength && delete A[g.shift()], A[w + " "] = $;
          }
          return A;
        }
        function Lt(g) {
          return g[je] = !0, g;
        }
        function Tt(g) {
          var A = B.createElement("fieldset");
          try {
            return !!g(A);
          } catch {
            return !1;
          } finally {
            A.parentNode && A.parentNode.removeChild(A), A = null;
          }
        }
        function pi(g, A) {
          for (var w = g.split("|"), $ = w.length; $--; )
            r.attrHandle[w[$]] = A;
        }
        function _o(g, A) {
          var w = A && g, $ = w && g.nodeType === 1 && A.nodeType === 1 && g.sourceIndex - A.sourceIndex;
          if ($)
            return $;
          if (w) {
            for (; w = w.nextSibling; )
              if (w === A)
                return -1;
          }
          return g ? 1 : -1;
        }
        function Ts(g) {
          return function(A) {
            var w = A.nodeName.toLowerCase();
            return w === "input" && A.type === g;
          };
        }
        function As(g) {
          return function(A) {
            var w = A.nodeName.toLowerCase();
            return (w === "input" || w === "button") && A.type === g;
          };
        }
        function ho(g) {
          return function(A) {
            return "form" in A ? A.parentNode && A.disabled === !1 ? "label" in A ? "label" in A.parentNode ? A.parentNode.disabled === g : A.disabled === g : A.isDisabled === g || // Where there is no isDisabled, check manually
            /* jshint -W018 */
            A.isDisabled !== !g && Es(A) === g : A.disabled === g : "label" in A ? A.disabled === g : !1;
          };
        }
        function Xt(g) {
          return Lt(function(A) {
            return A = +A, Lt(function(w, $) {
              for (var I, z = g([], w.length, A), X = z.length; X--; )
                w[I = z[X]] && (w[I] = !($[I] = w[I]));
            });
          });
        }
        function _i(g) {
          return g && typeof g.getElementsByTagName < "u" && g;
        }
        a = $e.support = {}, _ = $e.isXML = function(g) {
          var A = g && g.namespaceURI, w = g && (g.ownerDocument || g).documentElement;
          return !ms.test(A || w && w.nodeName || "HTML");
        }, k = $e.setDocument = function(g) {
          var A, w, $ = g ? g.ownerDocument || g : Te;
          return $ == B || $.nodeType !== 9 || !$.documentElement || (B = $, fe = B.documentElement, Oe = !_(B), Te != B && (w = B.defaultView) && w.top !== w && (w.addEventListener ? w.addEventListener("unload", po, !1) : w.attachEvent && w.attachEvent("onunload", po)), a.scope = Tt(function(I) {
            return fe.appendChild(I).appendChild(B.createElement("div")), typeof I.querySelectorAll < "u" && !I.querySelectorAll(":scope fieldset div").length;
          }), a.cssSupportsSelector = Tt(function() {
            return CSS.supports("selector(*)") && // Support: Firefox 78-81 only
            // In old Firefox, `:is()` didn't use forgiving parsing. In that case,
            // fail this test as there's no selector to test against that.
            // `CSS.supports` uses unforgiving parsing
            B.querySelectorAll(":is(:jqfake)") && // `*` is needed as Safari & newer Chrome implemented something in between
            // for `:has()` - it throws in `qSA` if it only contains an unsupported
            // argument but multiple ones, one of which is supported, are fine.
            // We want to play safe in case `:is()` gets the same treatment.
            !CSS.supports("selector(:is(*,:jqfake))");
          }), a.attributes = Tt(function(I) {
            return I.className = "i", !I.getAttribute("className");
          }), a.getElementsByTagName = Tt(function(I) {
            return I.appendChild(B.createComment("")), !I.getElementsByTagName("*").length;
          }), a.getElementsByClassName = gn.test(B.getElementsByClassName), a.getById = Tt(function(I) {
            return fe.appendChild(I).id = je, !B.getElementsByName || !B.getElementsByName(je).length;
          }), a.getById ? (r.filter.ID = function(I) {
            var z = I.replace(Ut, Bt);
            return function(X) {
              return X.getAttribute("id") === z;
            };
          }, r.find.ID = function(I, z) {
            if (typeof z.getElementById < "u" && Oe) {
              var X = z.getElementById(I);
              return X ? [X] : [];
            }
          }) : (r.filter.ID = function(I) {
            var z = I.replace(Ut, Bt);
            return function(X) {
              var te = typeof X.getAttributeNode < "u" && X.getAttributeNode("id");
              return te && te.value === z;
            };
          }, r.find.ID = function(I, z) {
            if (typeof z.getElementById < "u" && Oe) {
              var X, te, ae, me = z.getElementById(I);
              if (me) {
                if (X = me.getAttributeNode("id"), X && X.value === I)
                  return [me];
                for (ae = z.getElementsByName(I), te = 0; me = ae[te++]; )
                  if (X = me.getAttributeNode("id"), X && X.value === I)
                    return [me];
              }
              return [];
            }
          }), r.find.TAG = a.getElementsByTagName ? function(I, z) {
            if (typeof z.getElementsByTagName < "u")
              return z.getElementsByTagName(I);
            if (a.qsa)
              return z.querySelectorAll(I);
          } : function(I, z) {
            var X, te = [], ae = 0, me = z.getElementsByTagName(I);
            if (I === "*") {
              for (; X = me[ae++]; )
                X.nodeType === 1 && te.push(X);
              return te;
            }
            return me;
          }, r.find.CLASS = a.getElementsByClassName && function(I, z) {
            if (typeof z.getElementsByClassName < "u" && Oe)
              return z.getElementsByClassName(I);
          }, Ke = [], de = [], (a.qsa = gn.test(B.querySelectorAll)) && (Tt(function(I) {
            var z;
            fe.appendChild(I).innerHTML = "<a id='" + je + "'></a><select id='" + je + "-\r\\' msallowcapture=''><option selected=''></option></select>", I.querySelectorAll("[msallowcapture^='']").length && de.push("[*^$]=" + Ue + `*(?:''|"")`), I.querySelectorAll("[selected]").length || de.push("\\[" + Ue + "*(?:value|" + ui + ")"), I.querySelectorAll("[id~=" + je + "-]").length || de.push("~="), z = B.createElement("input"), z.setAttribute("name", ""), I.appendChild(z), I.querySelectorAll("[name='']").length || de.push("\\[" + Ue + "*name" + Ue + "*=" + Ue + `*(?:''|"")`), I.querySelectorAll(":checked").length || de.push(":checked"), I.querySelectorAll("a#" + je + "+*").length || de.push(".#.+[+~]"), I.querySelectorAll("\\\f"), de.push("[\\r\\n\\f]");
          }), Tt(function(I) {
            I.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var z = B.createElement("input");
            z.setAttribute("type", "hidden"), I.appendChild(z).setAttribute("name", "D"), I.querySelectorAll("[name=d]").length && de.push("name" + Ue + "*[*^$|!~]?="), I.querySelectorAll(":enabled").length !== 2 && de.push(":enabled", ":disabled"), fe.appendChild(I).disabled = !0, I.querySelectorAll(":disabled").length !== 2 && de.push(":enabled", ":disabled"), I.querySelectorAll("*,:x"), de.push(",.*:");
          })), (a.matchesSelector = gn.test(Xe = fe.matches || fe.webkitMatchesSelector || fe.mozMatchesSelector || fe.oMatchesSelector || fe.msMatchesSelector)) && Tt(function(I) {
            a.disconnectedMatch = Xe.call(I, "*"), Xe.call(I, "[s!='']:x"), Ke.push("!=", di);
          }), a.cssSupportsSelector || de.push(":has"), de = de.length && new RegExp(de.join("|")), Ke = Ke.length && new RegExp(Ke.join("|")), A = gn.test(fe.compareDocumentPosition), dt = A || gn.test(fe.contains) ? function(I, z) {
            var X = I.nodeType === 9 && I.documentElement || I, te = z && z.parentNode;
            return I === te || !!(te && te.nodeType === 1 && (X.contains ? X.contains(te) : I.compareDocumentPosition && I.compareDocumentPosition(te) & 16));
          } : function(I, z) {
            if (z) {
              for (; z = z.parentNode; )
                if (z === I)
                  return !0;
            }
            return !1;
          }, zt = A ? function(I, z) {
            if (I === z)
              return Y = !0, 0;
            var X = !I.compareDocumentPosition - !z.compareDocumentPosition;
            return X || (X = (I.ownerDocument || I) == (z.ownerDocument || z) ? I.compareDocumentPosition(z) : (
              // Otherwise we know they are disconnected
              1
            ), X & 1 || !a.sortDetached && z.compareDocumentPosition(I) === X ? I == B || I.ownerDocument == Te && dt(Te, I) ? -1 : z == B || z.ownerDocument == Te && dt(Te, z) ? 1 : U ? Vt(U, I) - Vt(U, z) : 0 : X & 4 ? -1 : 1);
          } : function(I, z) {
            if (I === z)
              return Y = !0, 0;
            var X, te = 0, ae = I.parentNode, me = z.parentNode, be = [I], ye = [z];
            if (!ae || !me)
              return I == B ? -1 : z == B ? 1 : (
                /* eslint-enable eqeqeq */
                ae ? -1 : me ? 1 : U ? Vt(U, I) - Vt(U, z) : 0
              );
            if (ae === me)
              return _o(I, z);
            for (X = I; X = X.parentNode; )
              be.unshift(X);
            for (X = z; X = X.parentNode; )
              ye.unshift(X);
            for (; be[te] === ye[te]; )
              te++;
            return te ? (
              // Do a sibling check if the nodes have a common ancestor
              _o(be[te], ye[te])
            ) : (
              // Otherwise nodes in our document sort first
              // Support: IE 11+, Edge 17 - 18+
              // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
              // two documents; shallow comparisons work.
              /* eslint-disable eqeqeq */
              be[te] == Te ? -1 : ye[te] == Te ? 1 : (
                /* eslint-enable eqeqeq */
                0
              )
            );
          }), B;
        }, $e.matches = function(g, A) {
          return $e(g, null, null, A);
        }, $e.matchesSelector = function(g, A) {
          if (k(g), a.matchesSelector && Oe && !ft[A + " "] && (!Ke || !Ke.test(A)) && (!de || !de.test(A)))
            try {
              var w = Xe.call(g, A);
              if (w || a.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              g.document && g.document.nodeType !== 11)
                return w;
            } catch {
              ft(A, !0);
            }
          return $e(A, B, null, [g]).length > 0;
        }, $e.contains = function(g, A) {
          return (g.ownerDocument || g) != B && k(g), dt(g, A);
        }, $e.attr = function(g, A) {
          (g.ownerDocument || g) != B && k(g);
          var w = r.attrHandle[A.toLowerCase()], $ = w && Gt.call(r.attrHandle, A.toLowerCase()) ? w(g, A, !Oe) : void 0;
          return $ !== void 0 ? $ : a.attributes || !Oe ? g.getAttribute(A) : ($ = g.getAttributeNode(A)) && $.specified ? $.value : null;
        }, $e.escape = function(g) {
          return (g + "").replace(uo, fo);
        }, $e.error = function(g) {
          throw new Error("Syntax error, unrecognized expression: " + g);
        }, $e.uniqueSort = function(g) {
          var A, w = [], $ = 0, I = 0;
          if (Y = !a.detectDuplicates, U = !a.sortStable && g.slice(0), g.sort(zt), Y) {
            for (; A = g[I++]; )
              A === g[I] && ($ = w.push(I));
            for (; $--; )
              g.splice(w[$], 1);
          }
          return U = null, g;
        }, f = $e.getText = function(g) {
          var A, w = "", $ = 0, I = g.nodeType;
          if (I) {
            if (I === 1 || I === 9 || I === 11) {
              if (typeof g.textContent == "string")
                return g.textContent;
              for (g = g.firstChild; g; g = g.nextSibling)
                w += f(g);
            } else if (I === 3 || I === 4)
              return g.nodeValue;
          } else
            for (; A = g[$++]; )
              w += f(A);
          return w;
        }, r = $e.selectors = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: Lt,
          match: Mn,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(g) {
              return g[1] = g[1].replace(Ut, Bt), g[3] = (g[3] || g[4] || g[5] || "").replace(Ut, Bt), g[2] === "~=" && (g[3] = " " + g[3] + " "), g.slice(0, 4);
            },
            CHILD: function(g) {
              return g[1] = g[1].toLowerCase(), g[1].slice(0, 3) === "nth" ? (g[3] || $e.error(g[0]), g[4] = +(g[4] ? g[5] + (g[6] || 1) : 2 * (g[3] === "even" || g[3] === "odd")), g[5] = +(g[7] + g[8] || g[3] === "odd")) : g[3] && $e.error(g[0]), g;
            },
            PSEUDO: function(g) {
              var A, w = !g[6] && g[2];
              return Mn.CHILD.test(g[0]) ? null : (g[3] ? g[2] = g[4] || g[5] || "" : w && bs.test(w) && // Get excess from tokenize (recursively)
              (A = b(w, !0)) && // advance to the next closing parenthesis
              (A = w.indexOf(")", w.length - A) - w.length) && (g[0] = g[0].slice(0, A), g[2] = w.slice(0, A)), g.slice(0, 3));
            }
          },
          filter: {
            TAG: function(g) {
              var A = g.replace(Ut, Bt).toLowerCase();
              return g === "*" ? function() {
                return !0;
              } : function(w) {
                return w.nodeName && w.nodeName.toLowerCase() === A;
              };
            },
            CLASS: function(g) {
              var A = Ge[g + " "];
              return A || (A = new RegExp("(^|" + Ue + ")" + g + "(" + Ue + "|$)")) && Ge(
                g,
                function(w) {
                  return A.test(
                    typeof w.className == "string" && w.className || typeof w.getAttribute < "u" && w.getAttribute("class") || ""
                  );
                }
              );
            },
            ATTR: function(g, A, w) {
              return function($) {
                var I = $e.attr($, g);
                return I == null ? A === "!=" : A ? (I += "", A === "=" ? I === w : A === "!=" ? I !== w : A === "^=" ? w && I.indexOf(w) === 0 : A === "*=" ? w && I.indexOf(w) > -1 : A === "$=" ? w && I.slice(-w.length) === w : A === "~=" ? (" " + I.replace(ps, " ") + " ").indexOf(w) > -1 : A === "|=" ? I === w || I.slice(0, w.length + 1) === w + "-" : !1) : !0;
              };
            },
            CHILD: function(g, A, w, $, I) {
              var z = g.slice(0, 3) !== "nth", X = g.slice(-4) !== "last", te = A === "of-type";
              return $ === 1 && I === 0 ? (
                // Shortcut for :nth-*(n)
                function(ae) {
                  return !!ae.parentNode;
                }
              ) : function(ae, me, be) {
                var ye, Le, Fe, ve, Je, it, pt = z !== X ? "nextSibling" : "previousSibling", ze = ae.parentNode, mn = te && ae.nodeName.toLowerCase(), vn = !be && !te, _t = !1;
                if (ze) {
                  if (z) {
                    for (; pt; ) {
                      for (ve = ae; ve = ve[pt]; )
                        if (te ? ve.nodeName.toLowerCase() === mn : ve.nodeType === 1)
                          return !1;
                      it = pt = g === "only" && !it && "nextSibling";
                    }
                    return !0;
                  }
                  if (it = [X ? ze.firstChild : ze.lastChild], X && vn) {
                    for (ve = ze, Fe = ve[je] || (ve[je] = {}), Le = Fe[ve.uniqueID] || (Fe[ve.uniqueID] = {}), ye = Le[g] || [], Je = ye[0] === lt && ye[1], _t = Je && ye[2], ve = Je && ze.childNodes[Je]; ve = ++Je && ve && ve[pt] || // Fallback to seeking `elem` from the start
                    (_t = Je = 0) || it.pop(); )
                      if (ve.nodeType === 1 && ++_t && ve === ae) {
                        Le[g] = [lt, Je, _t];
                        break;
                      }
                  } else if (vn && (ve = ae, Fe = ve[je] || (ve[je] = {}), Le = Fe[ve.uniqueID] || (Fe[ve.uniqueID] = {}), ye = Le[g] || [], Je = ye[0] === lt && ye[1], _t = Je), _t === !1)
                    for (; (ve = ++Je && ve && ve[pt] || (_t = Je = 0) || it.pop()) && !((te ? ve.nodeName.toLowerCase() === mn : ve.nodeType === 1) && ++_t && (vn && (Fe = ve[je] || (ve[je] = {}), Le = Fe[ve.uniqueID] || (Fe[ve.uniqueID] = {}), Le[g] = [lt, _t]), ve === ae)); )
                      ;
                  return _t -= I, _t === $ || _t % $ === 0 && _t / $ >= 0;
                }
              };
            },
            PSEUDO: function(g, A) {
              var w, $ = r.pseudos[g] || r.setFilters[g.toLowerCase()] || $e.error("unsupported pseudo: " + g);
              return $[je] ? $(A) : $.length > 1 ? (w = [g, g, "", A], r.setFilters.hasOwnProperty(g.toLowerCase()) ? Lt(function(I, z) {
                for (var X, te = $(I, A), ae = te.length; ae--; )
                  X = Vt(I, te[ae]), I[X] = !(z[X] = te[ae]);
              }) : function(I) {
                return $(I, 0, w);
              }) : $;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: Lt(function(g) {
              var A = [], w = [], $ = O(g.replace(Nn, "$1"));
              return $[je] ? Lt(function(I, z, X, te) {
                for (var ae, me = $(I, null, te, []), be = I.length; be--; )
                  (ae = me[be]) && (I[be] = !(z[be] = ae));
              }) : function(I, z, X) {
                return A[0] = I, $(A, null, X, w), A[0] = null, !w.pop();
              };
            }),
            has: Lt(function(g) {
              return function(A) {
                return $e(g, A).length > 0;
              };
            }),
            contains: Lt(function(g) {
              return g = g.replace(Ut, Bt), function(A) {
                return (A.textContent || f(A)).indexOf(g) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // http://www.w3.org/TR/selectors/#lang-pseudo
            lang: Lt(function(g) {
              return gs.test(g || "") || $e.error("unsupported lang: " + g), g = g.replace(Ut, Bt).toLowerCase(), function(A) {
                var w;
                do
                  if (w = Oe ? A.lang : A.getAttribute("xml:lang") || A.getAttribute("lang"))
                    return w = w.toLowerCase(), w === g || w.indexOf(g + "-") === 0;
                while ((A = A.parentNode) && A.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(g) {
              var A = t.location && t.location.hash;
              return A && A.slice(1) === g.id;
            },
            root: function(g) {
              return g === fe;
            },
            focus: function(g) {
              return g === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(g.type || g.href || ~g.tabIndex);
            },
            // Boolean properties
            enabled: ho(!1),
            disabled: ho(!0),
            checked: function(g) {
              var A = g.nodeName.toLowerCase();
              return A === "input" && !!g.checked || A === "option" && !!g.selected;
            },
            selected: function(g) {
              return g.parentNode && g.parentNode.selectedIndex, g.selected === !0;
            },
            // Contents
            empty: function(g) {
              for (g = g.firstChild; g; g = g.nextSibling)
                if (g.nodeType < 6)
                  return !1;
              return !0;
            },
            parent: function(g) {
              return !r.pseudos.empty(g);
            },
            // Element/input types
            header: function(g) {
              return ys.test(g.nodeName);
            },
            input: function(g) {
              return vs.test(g.nodeName);
            },
            button: function(g) {
              var A = g.nodeName.toLowerCase();
              return A === "input" && g.type === "button" || A === "button";
            },
            text: function(g) {
              var A;
              return g.nodeName.toLowerCase() === "input" && g.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
              ((A = g.getAttribute("type")) == null || A.toLowerCase() === "text");
            },
            // Position-in-collection
            first: Xt(function() {
              return [0];
            }),
            last: Xt(function(g, A) {
              return [A - 1];
            }),
            eq: Xt(function(g, A, w) {
              return [w < 0 ? w + A : w];
            }),
            even: Xt(function(g, A) {
              for (var w = 0; w < A; w += 2)
                g.push(w);
              return g;
            }),
            odd: Xt(function(g, A) {
              for (var w = 1; w < A; w += 2)
                g.push(w);
              return g;
            }),
            lt: Xt(function(g, A, w) {
              for (var $ = w < 0 ? w + A : w > A ? A : w; --$ >= 0; )
                g.push($);
              return g;
            }),
            gt: Xt(function(g, A, w) {
              for (var $ = w < 0 ? w + A : w; ++$ < A; )
                g.push($);
              return g;
            })
          }
        }, r.pseudos.nth = r.pseudos.eq;
        for (o in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          r.pseudos[o] = Ts(o);
        for (o in { submit: !0, reset: !0 })
          r.pseudos[o] = As(o);
        function bo() {
        }
        bo.prototype = r.filters = r.pseudos, r.setFilters = new bo(), b = $e.tokenize = function(g, A) {
          var w, $, I, z, X, te, ae, me = bn[g + " "];
          if (me)
            return A ? 0 : me.slice(0);
          for (X = g, te = [], ae = r.preFilter; X; ) {
            (!w || ($ = _s.exec(X))) && ($ && (X = X.slice($[0].length) || X), te.push(I = [])), w = !1, ($ = co.exec(X)) && (w = $.shift(), I.push({
              value: w,
              // Cast descendant combinators to space
              type: $[0].replace(Nn, " ")
            }), X = X.slice(w.length));
            for (z in r.filter)
              ($ = Mn[z].exec(X)) && (!ae[z] || ($ = ae[z]($))) && (w = $.shift(), I.push({
                value: w,
                type: z,
                matches: $
              }), X = X.slice(w.length));
            if (!w)
              break;
          }
          return A ? X.length : X ? $e.error(g) : (
            // Cache the tokens
            bn(g, te).slice(0)
          );
        };
        function Un(g) {
          for (var A = 0, w = g.length, $ = ""; A < w; A++)
            $ += g[A].value;
          return $;
        }
        function Bn(g, A, w) {
          var $ = A.dir, I = A.next, z = I || $, X = w && z === "parentNode", te = xe++;
          return A.first ? (
            // Check against closest ancestor/preceding element
            function(ae, me, be) {
              for (; ae = ae[$]; )
                if (ae.nodeType === 1 || X)
                  return g(ae, me, be);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(ae, me, be) {
              var ye, Le, Fe, ve = [lt, te];
              if (be) {
                for (; ae = ae[$]; )
                  if ((ae.nodeType === 1 || X) && g(ae, me, be))
                    return !0;
              } else
                for (; ae = ae[$]; )
                  if (ae.nodeType === 1 || X)
                    if (Fe = ae[je] || (ae[je] = {}), Le = Fe[ae.uniqueID] || (Fe[ae.uniqueID] = {}), I && I === ae.nodeName.toLowerCase())
                      ae = ae[$] || ae;
                    else {
                      if ((ye = Le[z]) && ye[0] === lt && ye[1] === te)
                        return ve[2] = ye[2];
                      if (Le[z] = ve, ve[2] = g(ae, me, be))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function hi(g) {
          return g.length > 1 ? function(A, w, $) {
            for (var I = g.length; I--; )
              if (!g[I](A, w, $))
                return !1;
            return !0;
          } : g[0];
        }
        function Os(g, A, w) {
          for (var $ = 0, I = A.length; $ < I; $++)
            $e(g, A[$], w);
          return w;
        }
        function jn(g, A, w, $, I) {
          for (var z, X = [], te = 0, ae = g.length, me = A != null; te < ae; te++)
            (z = g[te]) && (!w || w(z, $, I)) && (X.push(z), me && A.push(te));
          return X;
        }
        function bi(g, A, w, $, I, z) {
          return $ && !$[je] && ($ = bi($)), I && !I[je] && (I = bi(I, z)), Lt(function(X, te, ae, me) {
            var be, ye, Le, Fe = [], ve = [], Je = te.length, it = X || Os(
              A || "*",
              ae.nodeType ? [ae] : ae,
              []
            ), pt = g && (X || !A) ? jn(it, Fe, g, ae, me) : it, ze = w ? (
              // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
              I || (X ? g : Je || $) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                te
              )
            ) : pt;
            if (w && w(pt, ze, ae, me), $)
              for (be = jn(ze, ve), $(be, [], ae, me), ye = be.length; ye--; )
                (Le = be[ye]) && (ze[ve[ye]] = !(pt[ve[ye]] = Le));
            if (X) {
              if (I || g) {
                if (I) {
                  for (be = [], ye = ze.length; ye--; )
                    (Le = ze[ye]) && be.push(pt[ye] = Le);
                  I(null, ze = [], be, me);
                }
                for (ye = ze.length; ye--; )
                  (Le = ze[ye]) && (be = I ? Vt(X, Le) : Fe[ye]) > -1 && (X[be] = !(te[be] = Le));
              }
            } else
              ze = jn(
                ze === te ? ze.splice(Je, ze.length) : ze
              ), I ? I(null, te, ze, me) : Ht.apply(te, ze);
          });
        }
        function gi(g) {
          for (var A, w, $, I = g.length, z = r.relative[g[0].type], X = z || r.relative[" "], te = z ? 1 : 0, ae = Bn(function(ye) {
            return ye === A;
          }, X, !0), me = Bn(function(ye) {
            return Vt(A, ye) > -1;
          }, X, !0), be = [function(ye, Le, Fe) {
            var ve = !z && (Fe || Le !== R) || ((A = Le).nodeType ? ae(ye, Le, Fe) : me(ye, Le, Fe));
            return A = null, ve;
          }]; te < I; te++)
            if (w = r.relative[g[te].type])
              be = [Bn(hi(be), w)];
            else {
              if (w = r.filter[g[te].type].apply(null, g[te].matches), w[je]) {
                for ($ = ++te; $ < I && !r.relative[g[$].type]; $++)
                  ;
                return bi(
                  te > 1 && hi(be),
                  te > 1 && Un(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    g.slice(0, te - 1).concat({ value: g[te - 2].type === " " ? "*" : "" })
                  ).replace(Nn, "$1"),
                  w,
                  te < $ && gi(g.slice(te, $)),
                  $ < I && gi(g = g.slice($)),
                  $ < I && Un(g)
                );
              }
              be.push(w);
            }
          return hi(be);
        }
        function Cs(g, A) {
          var w = A.length > 0, $ = g.length > 0, I = function(z, X, te, ae, me) {
            var be, ye, Le, Fe = 0, ve = "0", Je = z && [], it = [], pt = R, ze = z || $ && r.find.TAG("*", me), mn = lt += pt == null ? 1 : Math.random() || 0.1, vn = ze.length;
            for (me && (R = X == B || X || me); ve !== vn && (be = ze[ve]) != null; ve++) {
              if ($ && be) {
                for (ye = 0, !X && be.ownerDocument != B && (k(be), te = !Oe); Le = g[ye++]; )
                  if (Le(be, X || B, te)) {
                    ae.push(be);
                    break;
                  }
                me && (lt = mn);
              }
              w && ((be = !Le && be) && Fe--, z && Je.push(be));
            }
            if (Fe += ve, w && ve !== Fe) {
              for (ye = 0; Le = A[ye++]; )
                Le(Je, it, X, te);
              if (z) {
                if (Fe > 0)
                  for (; ve--; )
                    Je[ve] || it[ve] || (it[ve] = jt.call(ae));
                it = jn(it);
              }
              Ht.apply(ae, it), me && !z && it.length > 0 && Fe + A.length > 1 && $e.uniqueSort(ae);
            }
            return me && (lt = mn, R = pt), Je;
          };
          return w ? Lt(I) : I;
        }
        return O = $e.compile = function(g, A) {
          var w, $ = [], I = [], z = xn[g + " "];
          if (!z) {
            for (A || (A = b(g)), w = A.length; w--; )
              z = gi(A[w]), z[je] ? $.push(z) : I.push(z);
            z = xn(
              g,
              Cs(I, $)
            ), z.selector = g;
          }
          return z;
        }, T = $e.select = function(g, A, w, $) {
          var I, z, X, te, ae, me = typeof g == "function" && g, be = !$ && b(g = me.selector || g);
          if (w = w || [], be.length === 1) {
            if (z = be[0] = be[0].slice(0), z.length > 2 && (X = z[0]).type === "ID" && A.nodeType === 9 && Oe && r.relative[z[1].type]) {
              if (A = (r.find.ID(X.matches[0].replace(Ut, Bt), A) || [])[0], A)
                me && (A = A.parentNode);
              else
                return w;
              g = g.slice(z.shift().value.length);
            }
            for (I = Mn.needsContext.test(g) ? 0 : z.length; I-- && (X = z[I], !r.relative[te = X.type]); )
              if ((ae = r.find[te]) && ($ = ae(
                X.matches[0].replace(Ut, Bt),
                fi.test(z[0].type) && _i(A.parentNode) || A
              ))) {
                if (z.splice(I, 1), g = $.length && Un(z), !g)
                  return Ht.apply(w, $), w;
                break;
              }
          }
          return (me || O(g, be))(
            $,
            A,
            !Oe,
            w,
            !A || fi.test(g) && _i(A.parentNode) || A
          ), w;
        }, a.sortStable = je.split("").sort(zt).join("") === je, a.detectDuplicates = !!Y, k(), a.sortDetached = Tt(function(g) {
          return g.compareDocumentPosition(B.createElement("fieldset")) & 1;
        }), Tt(function(g) {
          return g.innerHTML = "<a href='#'></a>", g.firstChild.getAttribute("href") === "#";
        }) || pi("type|href|height|width", function(g, A, w) {
          if (!w)
            return g.getAttribute(A, A.toLowerCase() === "type" ? 1 : 2);
        }), (!a.attributes || !Tt(function(g) {
          return g.innerHTML = "<input/>", g.firstChild.setAttribute("value", ""), g.firstChild.getAttribute("value") === "";
        })) && pi("value", function(g, A, w) {
          if (!w && g.nodeName.toLowerCase() === "input")
            return g.defaultValue;
        }), Tt(function(g) {
          return g.getAttribute("disabled") == null;
        }) || pi(ui, function(g, A, w) {
          var $;
          if (!w)
            return g[A] === !0 ? A.toLowerCase() : ($ = g.getAttributeNode(A)) && $.specified ? $.value : null;
        }), $e;
      }(i)
    );
    c.find = se, c.expr = se.selectors, c.expr[":"] = c.expr.pseudos, c.uniqueSort = c.unique = se.uniqueSort, c.text = se.getText, c.isXMLDoc = se.isXML, c.contains = se.contains, c.escapeSelector = se.escape;
    var Ce = function(t, o, a) {
      for (var r = [], f = a !== void 0; (t = t[o]) && t.nodeType !== 9; )
        if (t.nodeType === 1) {
          if (f && c(t).is(a))
            break;
          r.push(t);
        }
      return r;
    }, He = function(t, o) {
      for (var a = []; t; t = t.nextSibling)
        t.nodeType === 1 && t !== o && a.push(t);
      return a;
    }, ee = c.expr.match.needsContext;
    function oe(t, o) {
      return t.nodeName && t.nodeName.toLowerCase() === o.toLowerCase();
    }
    var re = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Ye(t, o, a) {
      return G(o) ? c.grep(t, function(r, f) {
        return !!o.call(r, f, r) !== a;
      }) : o.nodeType ? c.grep(t, function(r) {
        return r === o !== a;
      }) : typeof o != "string" ? c.grep(t, function(r) {
        return C.call(o, r) > -1 !== a;
      }) : c.filter(o, t, a);
    }
    c.filter = function(t, o, a) {
      var r = o[0];
      return a && (t = ":not(" + t + ")"), o.length === 1 && r.nodeType === 1 ? c.find.matchesSelector(r, t) ? [r] : [] : c.find.matches(t, c.grep(o, function(f) {
        return f.nodeType === 1;
      }));
    }, c.fn.extend({
      find: function(t) {
        var o, a, r = this.length, f = this;
        if (typeof t != "string")
          return this.pushStack(c(t).filter(function() {
            for (o = 0; o < r; o++)
              if (c.contains(f[o], this))
                return !0;
          }));
        for (a = this.pushStack([]), o = 0; o < r; o++)
          c.find(t, f[o], a);
        return r > 1 ? c.uniqueSort(a) : a;
      },
      filter: function(t) {
        return this.pushStack(Ye(this, t || [], !1));
      },
      not: function(t) {
        return this.pushStack(Ye(this, t || [], !0));
      },
      is: function(t) {
        return !!Ye(
          this,
          // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof t == "string" && ee.test(t) ? c(t) : t || [],
          !1
        ).length;
      }
    });
    var Ze, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ot = c.fn.init = function(t, o, a) {
      var r, f;
      if (!t)
        return this;
      if (a = a || Ze, typeof t == "string")
        if (t[0] === "<" && t[t.length - 1] === ">" && t.length >= 3 ? r = [null, t, null] : r = mt.exec(t), r && (r[1] || !o))
          if (r[1]) {
            if (o = o instanceof c ? o[0] : o, c.merge(this, c.parseHTML(
              r[1],
              o && o.nodeType ? o.ownerDocument || o : ne,
              !0
            )), re.test(r[1]) && c.isPlainObject(o))
              for (r in o)
                G(this[r]) ? this[r](o[r]) : this.attr(r, o[r]);
            return this;
          } else
            return f = ne.getElementById(r[2]), f && (this[0] = f, this.length = 1), this;
        else
          return !o || o.jquery ? (o || a).find(t) : this.constructor(o).find(t);
      else {
        if (t.nodeType)
          return this[0] = t, this.length = 1, this;
        if (G(t))
          return a.ready !== void 0 ? a.ready(t) : (
            // Execute immediately if ready is not present
            t(c)
          );
      }
      return c.makeArray(t, this);
    };
    Ot.prototype = c.fn, Ze = c(ne);
    var Mt = /^(?:parents|prev(?:Until|All))/, vt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    c.fn.extend({
      has: function(t) {
        var o = c(t, this), a = o.length;
        return this.filter(function() {
          for (var r = 0; r < a; r++)
            if (c.contains(this, o[r]))
              return !0;
        });
      },
      closest: function(t, o) {
        var a, r = 0, f = this.length, _ = [], b = typeof t != "string" && c(t);
        if (!ee.test(t)) {
          for (; r < f; r++)
            for (a = this[r]; a && a !== o; a = a.parentNode)
              if (a.nodeType < 11 && (b ? b.index(a) > -1 : (
                // Don't pass non-elements to Sizzle
                a.nodeType === 1 && c.find.matchesSelector(a, t)
              ))) {
                _.push(a);
                break;
              }
        }
        return this.pushStack(_.length > 1 ? c.uniqueSort(_) : _);
      },
      // Determine the position of an element within the set
      index: function(t) {
        return t ? typeof t == "string" ? C.call(c(t), this[0]) : C.call(
          this,
          // If it receives a jQuery object, the first element is used
          t.jquery ? t[0] : t
        ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function(t, o) {
        return this.pushStack(
          c.uniqueSort(
            c.merge(this.get(), c(t, o))
          )
        );
      },
      addBack: function(t) {
        return this.add(
          t == null ? this.prevObject : this.prevObject.filter(t)
        );
      }
    });
    function yt(t, o) {
      for (; (t = t[o]) && t.nodeType !== 1; )
        ;
      return t;
    }
    c.each({
      parent: function(t) {
        var o = t.parentNode;
        return o && o.nodeType !== 11 ? o : null;
      },
      parents: function(t) {
        return Ce(t, "parentNode");
      },
      parentsUntil: function(t, o, a) {
        return Ce(t, "parentNode", a);
      },
      next: function(t) {
        return yt(t, "nextSibling");
      },
      prev: function(t) {
        return yt(t, "previousSibling");
      },
      nextAll: function(t) {
        return Ce(t, "nextSibling");
      },
      prevAll: function(t) {
        return Ce(t, "previousSibling");
      },
      nextUntil: function(t, o, a) {
        return Ce(t, "nextSibling", a);
      },
      prevUntil: function(t, o, a) {
        return Ce(t, "previousSibling", a);
      },
      siblings: function(t) {
        return He((t.parentNode || {}).firstChild, t);
      },
      children: function(t) {
        return He(t.firstChild);
      },
      contents: function(t) {
        return t.contentDocument != null && // Support: IE 11+
        // <object> elements with no `data` attribute has an object
        // `contentDocument` with a `null` prototype.
        l(t.contentDocument) ? t.contentDocument : (oe(t, "template") && (t = t.content || t), c.merge([], t.childNodes));
      }
    }, function(t, o) {
      c.fn[t] = function(a, r) {
        var f = c.map(this, o, a);
        return t.slice(-5) !== "Until" && (r = a), r && typeof r == "string" && (f = c.filter(r, f)), this.length > 1 && (vt[t] || c.uniqueSort(f), Mt.test(t) && f.reverse()), this.pushStack(f);
      };
    });
    var pe = /[^\x20\t\r\n\f]+/g;
    function Pe(t) {
      var o = {};
      return c.each(t.match(pe) || [], function(a, r) {
        o[r] = !0;
      }), o;
    }
    c.Callbacks = function(t) {
      t = typeof t == "string" ? Pe(t) : c.extend({}, t);
      var o, a, r, f, _ = [], b = [], O = -1, T = function() {
        for (f = f || t.once, r = o = !0; b.length; O = -1)
          for (a = b.shift(); ++O < _.length; )
            _[O].apply(a[0], a[1]) === !1 && t.stopOnFalse && (O = _.length, a = !1);
        t.memory || (a = !1), o = !1, f && (a ? _ = [] : _ = "");
      }, R = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          return _ && (a && !o && (O = _.length - 1, b.push(a)), function U(Y) {
            c.each(Y, function(k, B) {
              G(B) ? (!t.unique || !R.has(B)) && _.push(B) : B && B.length && Re(B) !== "string" && U(B);
            });
          }(arguments), a && !o && T()), this;
        },
        // Remove a callback from the list
        remove: function() {
          return c.each(arguments, function(U, Y) {
            for (var k; (k = c.inArray(Y, _, k)) > -1; )
              _.splice(k, 1), k <= O && O--;
          }), this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function(U) {
          return U ? c.inArray(U, _) > -1 : _.length > 0;
        },
        // Remove all callbacks from the list
        empty: function() {
          return _ && (_ = []), this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function() {
          return f = b = [], _ = a = "", this;
        },
        disabled: function() {
          return !_;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function() {
          return f = b = [], !a && !o && (_ = a = ""), this;
        },
        locked: function() {
          return !!f;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function(U, Y) {
          return f || (Y = Y || [], Y = [U, Y.slice ? Y.slice() : Y], b.push(Y), o || T()), this;
        },
        // Call all the callbacks with the given arguments
        fire: function() {
          return R.fireWith(this, arguments), this;
        },
        // To know if the callbacks have already been called at least once
        fired: function() {
          return !!r;
        }
      };
      return R;
    };
    function De(t) {
      return t;
    }
    function Ie(t) {
      throw t;
    }
    function We(t, o, a, r) {
      var f;
      try {
        t && G(f = t.promise) ? f.call(t).done(o).fail(a) : t && G(f = t.then) ? f.call(t, o, a) : o.apply(void 0, [t].slice(r));
      } catch (_) {
        a.apply(void 0, [_]);
      }
    }
    c.extend({
      Deferred: function(t) {
        var o = [
          // action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          [
            "notify",
            "progress",
            c.Callbacks("memory"),
            c.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            c.Callbacks("once memory"),
            c.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            c.Callbacks("once memory"),
            c.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], a = "pending", r = {
          state: function() {
            return a;
          },
          always: function() {
            return f.done(arguments).fail(arguments), this;
          },
          catch: function(_) {
            return r.then(null, _);
          },
          // Keep pipe for back-compat
          pipe: function() {
            var _ = arguments;
            return c.Deferred(function(b) {
              c.each(o, function(O, T) {
                var R = G(_[T[4]]) && _[T[4]];
                f[T[1]](function() {
                  var U = R && R.apply(this, arguments);
                  U && G(U.promise) ? U.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[T[0] + "With"](
                    this,
                    R ? [U] : arguments
                  );
                });
              }), _ = null;
            }).promise();
          },
          then: function(_, b, O) {
            var T = 0;
            function R(U, Y, k, B) {
              return function() {
                var fe = this, Oe = arguments, de = function() {
                  var Xe, dt;
                  if (!(U < T)) {
                    if (Xe = k.apply(fe, Oe), Xe === Y.promise())
                      throw new TypeError("Thenable self-resolution");
                    dt = Xe && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof Xe == "object" || typeof Xe == "function") && Xe.then, G(dt) ? B ? dt.call(
                      Xe,
                      R(T, Y, De, B),
                      R(T, Y, Ie, B)
                    ) : (T++, dt.call(
                      Xe,
                      R(T, Y, De, B),
                      R(T, Y, Ie, B),
                      R(
                        T,
                        Y,
                        De,
                        Y.notifyWith
                      )
                    )) : (k !== De && (fe = void 0, Oe = [Xe]), (B || Y.resolveWith)(fe, Oe));
                  }
                }, Ke = B ? de : function() {
                  try {
                    de();
                  } catch (Xe) {
                    c.Deferred.exceptionHook && c.Deferred.exceptionHook(
                      Xe,
                      Ke.stackTrace
                    ), U + 1 >= T && (k !== Ie && (fe = void 0, Oe = [Xe]), Y.rejectWith(fe, Oe));
                  }
                };
                U ? Ke() : (c.Deferred.getStackHook && (Ke.stackTrace = c.Deferred.getStackHook()), i.setTimeout(Ke));
              };
            }
            return c.Deferred(function(U) {
              o[0][3].add(
                R(
                  0,
                  U,
                  G(O) ? O : De,
                  U.notifyWith
                )
              ), o[1][3].add(
                R(
                  0,
                  U,
                  G(_) ? _ : De
                )
              ), o[2][3].add(
                R(
                  0,
                  U,
                  G(b) ? b : Ie
                )
              );
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function(_) {
            return _ != null ? c.extend(_, r) : r;
          }
        }, f = {};
        return c.each(o, function(_, b) {
          var O = b[2], T = b[5];
          r[b[1]] = O.add, T && O.add(
            function() {
              a = T;
            },
            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            o[3 - _][2].disable,
            // rejected_handlers.disable
            // fulfilled_handlers.disable
            o[3 - _][3].disable,
            // progress_callbacks.lock
            o[0][2].lock,
            // progress_handlers.lock
            o[0][3].lock
          ), O.add(b[3].fire), f[b[0]] = function() {
            return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
          }, f[b[0] + "With"] = O.fireWith;
        }), r.promise(f), t && t.call(f, f), f;
      },
      // Deferred helper
      when: function(t) {
        var o = arguments.length, a = o, r = Array(a), f = d.call(arguments), _ = c.Deferred(), b = function(O) {
          return function(T) {
            r[O] = this, f[O] = arguments.length > 1 ? d.call(arguments) : T, --o || _.resolveWith(r, f);
          };
        };
        if (o <= 1 && (We(
          t,
          _.done(b(a)).resolve,
          _.reject,
          !o
        ), _.state() === "pending" || G(f[a] && f[a].then)))
          return _.then();
        for (; a--; )
          We(f[a], b(a), _.reject);
        return _.promise();
      }
    });
    var Ct = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    c.Deferred.exceptionHook = function(t, o) {
      i.console && i.console.warn && t && Ct.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, o);
    }, c.readyException = function(t) {
      i.setTimeout(function() {
        throw t;
      });
    };
    var ke = c.Deferred();
    c.fn.ready = function(t) {
      return ke.then(t).catch(function(o) {
        c.readyException(o);
      }), this;
    }, c.extend({
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: !1,
      // A counter to track how many items to wait for before
      // the ready event fires. See trac-6781
      readyWait: 1,
      // Handle when the DOM is ready
      ready: function(t) {
        (t === !0 ? --c.readyWait : c.isReady) || (c.isReady = !0, !(t !== !0 && --c.readyWait > 0) && ke.resolveWith(ne, [c]));
      }
    }), c.ready.then = ke.then;
    function Ve() {
      ne.removeEventListener("DOMContentLoaded", Ve), i.removeEventListener("load", Ve), c.ready();
    }
    ne.readyState === "complete" || ne.readyState !== "loading" && !ne.documentElement.doScroll ? i.setTimeout(c.ready) : (ne.addEventListener("DOMContentLoaded", Ve), i.addEventListener("load", Ve));
    var nt = function(t, o, a, r, f, _, b) {
      var O = 0, T = t.length, R = a == null;
      if (Re(a) === "object") {
        f = !0;
        for (O in a)
          nt(t, o, O, a[O], !0, _, b);
      } else if (r !== void 0 && (f = !0, G(r) || (b = !0), R && (b ? (o.call(t, r), o = null) : (R = o, o = function(U, Y, k) {
        return R.call(c(U), k);
      })), o))
        for (; O < T; O++)
          o(
            t[O],
            a,
            b ? r : r.call(t[O], O, o(t[O], a))
          );
      return f ? t : R ? o.call(t) : T ? o(t[0], a) : _;
    }, Pt = /^-ms-/, Yn = /-([a-z])/g;
    function Xn(t, o) {
      return o.toUpperCase();
    }
    function xt(t) {
      return t.replace(Pt, "ms-").replace(Yn, Xn);
    }
    var rn = function(t) {
      return t.nodeType === 1 || t.nodeType === 9 || !+t.nodeType;
    };
    function cn() {
      this.expando = c.expando + cn.uid++;
    }
    cn.uid = 1, cn.prototype = {
      cache: function(t) {
        var o = t[this.expando];
        return o || (o = {}, rn(t) && (t.nodeType ? t[this.expando] = o : Object.defineProperty(t, this.expando, {
          value: o,
          configurable: !0
        }))), o;
      },
      set: function(t, o, a) {
        var r, f = this.cache(t);
        if (typeof o == "string")
          f[xt(o)] = a;
        else
          for (r in o)
            f[xt(r)] = o[r];
        return f;
      },
      get: function(t, o) {
        return o === void 0 ? this.cache(t) : (
          // Always use camelCase key (gh-2257)
          t[this.expando] && t[this.expando][xt(o)]
        );
      },
      access: function(t, o, a) {
        return o === void 0 || o && typeof o == "string" && a === void 0 ? this.get(t, o) : (this.set(t, o, a), a !== void 0 ? a : o);
      },
      remove: function(t, o) {
        var a, r = t[this.expando];
        if (r !== void 0) {
          if (o !== void 0)
            for (Array.isArray(o) ? o = o.map(xt) : (o = xt(o), o = o in r ? [o] : o.match(pe) || []), a = o.length; a--; )
              delete r[o[a]];
          (o === void 0 || c.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
        }
      },
      hasData: function(t) {
        var o = t[this.expando];
        return o !== void 0 && !c.isEmptyObject(o);
      }
    };
    var ge = new cn(), ot = new cn(), Oo = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Co = /[A-Z]/g;
    function wo(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t === "null" ? null : t === +t + "" ? +t : Oo.test(t) ? JSON.parse(t) : t;
    }
    function Di(t, o, a) {
      var r;
      if (a === void 0 && t.nodeType === 1)
        if (r = "data-" + o.replace(Co, "-$&").toLowerCase(), a = t.getAttribute(r), typeof a == "string") {
          try {
            a = wo(a);
          } catch {
          }
          ot.set(t, o, a);
        } else
          a = void 0;
      return a;
    }
    c.extend({
      hasData: function(t) {
        return ot.hasData(t) || ge.hasData(t);
      },
      data: function(t, o, a) {
        return ot.access(t, o, a);
      },
      removeData: function(t, o) {
        ot.remove(t, o);
      },
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function(t, o, a) {
        return ge.access(t, o, a);
      },
      _removeData: function(t, o) {
        ge.remove(t, o);
      }
    }), c.fn.extend({
      data: function(t, o) {
        var a, r, f, _ = this[0], b = _ && _.attributes;
        if (t === void 0) {
          if (this.length && (f = ot.get(_), _.nodeType === 1 && !ge.get(_, "hasDataAttrs"))) {
            for (a = b.length; a--; )
              b[a] && (r = b[a].name, r.indexOf("data-") === 0 && (r = xt(r.slice(5)), Di(_, r, f[r])));
            ge.set(_, "hasDataAttrs", !0);
          }
          return f;
        }
        return typeof t == "object" ? this.each(function() {
          ot.set(this, t);
        }) : nt(this, function(O) {
          var T;
          if (_ && O === void 0)
            return T = ot.get(_, t), T !== void 0 || (T = Di(_, t), T !== void 0) ? T : void 0;
          this.each(function() {
            ot.set(this, t, O);
          });
        }, null, o, arguments.length > 1, null, !0);
      },
      removeData: function(t) {
        return this.each(function() {
          ot.remove(this, t);
        });
      }
    }), c.extend({
      queue: function(t, o, a) {
        var r;
        if (t)
          return o = (o || "fx") + "queue", r = ge.get(t, o), a && (!r || Array.isArray(a) ? r = ge.access(t, o, c.makeArray(a)) : r.push(a)), r || [];
      },
      dequeue: function(t, o) {
        o = o || "fx";
        var a = c.queue(t, o), r = a.length, f = a.shift(), _ = c._queueHooks(t, o), b = function() {
          c.dequeue(t, o);
        };
        f === "inprogress" && (f = a.shift(), r--), f && (o === "fx" && a.unshift("inprogress"), delete _.stop, f.call(t, b, _)), !r && _ && _.empty.fire();
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function(t, o) {
        var a = o + "queueHooks";
        return ge.get(t, a) || ge.access(t, a, {
          empty: c.Callbacks("once memory").add(function() {
            ge.remove(t, [o + "queue", a]);
          })
        });
      }
    }), c.fn.extend({
      queue: function(t, o) {
        var a = 2;
        return typeof t != "string" && (o = t, t = "fx", a--), arguments.length < a ? c.queue(this[0], t) : o === void 0 ? this : this.each(function() {
          var r = c.queue(this, t, o);
          c._queueHooks(this, t), t === "fx" && r[0] !== "inprogress" && c.dequeue(this, t);
        });
      },
      dequeue: function(t) {
        return this.each(function() {
          c.dequeue(this, t);
        });
      },
      clearQueue: function(t) {
        return this.queue(t || "fx", []);
      },
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function(t, o) {
        var a, r = 1, f = c.Deferred(), _ = this, b = this.length, O = function() {
          --r || f.resolveWith(_, [_]);
        };
        for (typeof t != "string" && (o = t, t = void 0), t = t || "fx"; b--; )
          a = ge.get(_[b], t + "queueHooks"), a && a.empty && (r++, a.empty.add(O));
        return O(), f.promise(o);
      }
    });
    var Ii = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, un = new RegExp("^(?:([+-])=|)(" + Ii + ")([a-z%]*)$", "i"), kt = ["Top", "Right", "Bottom", "Left"], Ft = ne.documentElement, Zt = function(t) {
      return c.contains(t.ownerDocument, t);
    }, Lo = { composed: !0 };
    Ft.getRootNode && (Zt = function(t) {
      return c.contains(t.ownerDocument, t) || t.getRootNode(Lo) === t.ownerDocument;
    });
    var Ln = function(t, o) {
      return t = o || t, t.style.display === "none" || t.style.display === "" && // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      Zt(t) && c.css(t, "display") === "none";
    };
    function Ri(t, o, a, r) {
      var f, _, b = 20, O = r ? function() {
        return r.cur();
      } : function() {
        return c.css(t, o, "");
      }, T = O(), R = a && a[3] || (c.cssNumber[o] ? "" : "px"), U = t.nodeType && (c.cssNumber[o] || R !== "px" && +T) && un.exec(c.css(t, o));
      if (U && U[3] !== R) {
        for (T = T / 2, R = R || U[3], U = +T || 1; b--; )
          c.style(t, o, U + R), (1 - _) * (1 - (_ = O() / T || 0.5)) <= 0 && (b = 0), U = U / _;
        U = U * 2, c.style(t, o, U + R), a = a || [];
      }
      return a && (U = +U || +T || 0, f = a[1] ? U + (a[1] + 1) * a[2] : +a[2], r && (r.unit = R, r.start = U, r.end = f)), f;
    }
    var Pi = {};
    function Do(t) {
      var o, a = t.ownerDocument, r = t.nodeName, f = Pi[r];
      return f || (o = a.body.appendChild(a.createElement(r)), f = c.css(o, "display"), o.parentNode.removeChild(o), f === "none" && (f = "block"), Pi[r] = f, f);
    }
    function en(t, o) {
      for (var a, r, f = [], _ = 0, b = t.length; _ < b; _++)
        r = t[_], r.style && (a = r.style.display, o ? (a === "none" && (f[_] = ge.get(r, "display") || null, f[_] || (r.style.display = "")), r.style.display === "" && Ln(r) && (f[_] = Do(r))) : a !== "none" && (f[_] = "none", ge.set(r, "display", a)));
      for (_ = 0; _ < b; _++)
        f[_] != null && (t[_].style.display = f[_]);
      return t;
    }
    c.fn.extend({
      show: function() {
        return en(this, !0);
      },
      hide: function() {
        return en(this);
      },
      toggle: function(t) {
        return typeof t == "boolean" ? t ? this.show() : this.hide() : this.each(function() {
          Ln(this) ? c(this).show() : c(this).hide();
        });
      }
    });
    var dn = /^(?:checkbox|radio)$/i, xi = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ni = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var t = ne.createDocumentFragment(), o = t.appendChild(ne.createElement("div")), a = ne.createElement("input");
      a.setAttribute("type", "radio"), a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), o.appendChild(a), ue.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, o.innerHTML = "<textarea>x</textarea>", ue.noCloneChecked = !!o.cloneNode(!0).lastChild.defaultValue, o.innerHTML = "<option></option>", ue.option = !!o.lastChild;
    })();
    var St = {
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    St.tbody = St.tfoot = St.colgroup = St.caption = St.thead, St.th = St.td, ue.option || (St.optgroup = St.option = [1, "<select multiple='multiple'>", "</select>"]);
    function st(t, o) {
      var a;
      return typeof t.getElementsByTagName < "u" ? a = t.getElementsByTagName(o || "*") : typeof t.querySelectorAll < "u" ? a = t.querySelectorAll(o || "*") : a = [], o === void 0 || o && oe(t, o) ? c.merge([t], a) : a;
    }
    function Kn(t, o) {
      for (var a = 0, r = t.length; a < r; a++)
        ge.set(
          t[a],
          "globalEval",
          !o || ge.get(o[a], "globalEval")
        );
    }
    var Io = /<|&#?\w+;/;
    function Mi(t, o, a, r, f) {
      for (var _, b, O, T, R, U, Y = o.createDocumentFragment(), k = [], B = 0, fe = t.length; B < fe; B++)
        if (_ = t[B], _ || _ === 0)
          if (Re(_) === "object")
            c.merge(k, _.nodeType ? [_] : _);
          else if (!Io.test(_))
            k.push(o.createTextNode(_));
          else {
            for (b = b || Y.appendChild(o.createElement("div")), O = (xi.exec(_) || ["", ""])[1].toLowerCase(), T = St[O] || St._default, b.innerHTML = T[1] + c.htmlPrefilter(_) + T[2], U = T[0]; U--; )
              b = b.lastChild;
            c.merge(k, b.childNodes), b = Y.firstChild, b.textContent = "";
          }
      for (Y.textContent = "", B = 0; _ = k[B++]; ) {
        if (r && c.inArray(_, r) > -1) {
          f && f.push(_);
          continue;
        }
        if (R = Zt(_), b = st(Y.appendChild(_), "script"), R && Kn(b), a)
          for (U = 0; _ = b[U++]; )
            Ni.test(_.type || "") && a.push(_);
      }
      return Y;
    }
    var ki = /^([^.]*)(?:\.(.+)|)/;
    function tn() {
      return !0;
    }
    function nn() {
      return !1;
    }
    function Ro(t, o) {
      return t === Po() == (o === "focus");
    }
    function Po() {
      try {
        return ne.activeElement;
      } catch {
      }
    }
    function Jn(t, o, a, r, f, _) {
      var b, O;
      if (typeof o == "object") {
        typeof a != "string" && (r = r || a, a = void 0);
        for (O in o)
          Jn(t, O, a, r, o[O], _);
        return t;
      }
      if (r == null && f == null ? (f = a, r = a = void 0) : f == null && (typeof a == "string" ? (f = r, r = void 0) : (f = r, r = a, a = void 0)), f === !1)
        f = nn;
      else if (!f)
        return t;
      return _ === 1 && (b = f, f = function(T) {
        return c().off(T), b.apply(this, arguments);
      }, f.guid = b.guid || (b.guid = c.guid++)), t.each(function() {
        c.event.add(this, o, f, r, a);
      });
    }
    c.event = {
      global: {},
      add: function(t, o, a, r, f) {
        var _, b, O, T, R, U, Y, k, B, fe, Oe, de = ge.get(t);
        if (rn(t))
          for (a.handler && (_ = a, a = _.handler, f = _.selector), f && c.find.matchesSelector(Ft, f), a.guid || (a.guid = c.guid++), (T = de.events) || (T = de.events = /* @__PURE__ */ Object.create(null)), (b = de.handle) || (b = de.handle = function(Ke) {
            return typeof c < "u" && c.event.triggered !== Ke.type ? c.event.dispatch.apply(t, arguments) : void 0;
          }), o = (o || "").match(pe) || [""], R = o.length; R--; )
            O = ki.exec(o[R]) || [], B = Oe = O[1], fe = (O[2] || "").split(".").sort(), B && (Y = c.event.special[B] || {}, B = (f ? Y.delegateType : Y.bindType) || B, Y = c.event.special[B] || {}, U = c.extend({
              type: B,
              origType: Oe,
              data: r,
              handler: a,
              guid: a.guid,
              selector: f,
              needsContext: f && c.expr.match.needsContext.test(f),
              namespace: fe.join(".")
            }, _), (k = T[B]) || (k = T[B] = [], k.delegateCount = 0, (!Y.setup || Y.setup.call(t, r, fe, b) === !1) && t.addEventListener && t.addEventListener(B, b)), Y.add && (Y.add.call(t, U), U.handler.guid || (U.handler.guid = a.guid)), f ? k.splice(k.delegateCount++, 0, U) : k.push(U), c.event.global[B] = !0);
      },
      // Detach an event or set of events from an element
      remove: function(t, o, a, r, f) {
        var _, b, O, T, R, U, Y, k, B, fe, Oe, de = ge.hasData(t) && ge.get(t);
        if (!(!de || !(T = de.events))) {
          for (o = (o || "").match(pe) || [""], R = o.length; R--; ) {
            if (O = ki.exec(o[R]) || [], B = Oe = O[1], fe = (O[2] || "").split(".").sort(), !B) {
              for (B in T)
                c.event.remove(t, B + o[R], a, r, !0);
              continue;
            }
            for (Y = c.event.special[B] || {}, B = (r ? Y.delegateType : Y.bindType) || B, k = T[B] || [], O = O[2] && new RegExp("(^|\\.)" + fe.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = _ = k.length; _--; )
              U = k[_], (f || Oe === U.origType) && (!a || a.guid === U.guid) && (!O || O.test(U.namespace)) && (!r || r === U.selector || r === "**" && U.selector) && (k.splice(_, 1), U.selector && k.delegateCount--, Y.remove && Y.remove.call(t, U));
            b && !k.length && ((!Y.teardown || Y.teardown.call(t, fe, de.handle) === !1) && c.removeEvent(t, B, de.handle), delete T[B]);
          }
          c.isEmptyObject(T) && ge.remove(t, "handle events");
        }
      },
      dispatch: function(t) {
        var o, a, r, f, _, b, O = new Array(arguments.length), T = c.event.fix(t), R = (ge.get(this, "events") || /* @__PURE__ */ Object.create(null))[T.type] || [], U = c.event.special[T.type] || {};
        for (O[0] = T, o = 1; o < arguments.length; o++)
          O[o] = arguments[o];
        if (T.delegateTarget = this, !(U.preDispatch && U.preDispatch.call(this, T) === !1)) {
          for (b = c.event.handlers.call(this, T, R), o = 0; (f = b[o++]) && !T.isPropagationStopped(); )
            for (T.currentTarget = f.elem, a = 0; (_ = f.handlers[a++]) && !T.isImmediatePropagationStopped(); )
              (!T.rnamespace || _.namespace === !1 || T.rnamespace.test(_.namespace)) && (T.handleObj = _, T.data = _.data, r = ((c.event.special[_.origType] || {}).handle || _.handler).apply(f.elem, O), r !== void 0 && (T.result = r) === !1 && (T.preventDefault(), T.stopPropagation()));
          return U.postDispatch && U.postDispatch.call(this, T), T.result;
        }
      },
      handlers: function(t, o) {
        var a, r, f, _, b, O = [], T = o.delegateCount, R = t.target;
        if (T && // Support: IE <=9
        // Black-hole SVG <use> instance trees (trac-13180)
        R.nodeType && // Support: Firefox <=42
        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
        // Support: IE 11 only
        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
        !(t.type === "click" && t.button >= 1)) {
          for (; R !== this; R = R.parentNode || this)
            if (R.nodeType === 1 && !(t.type === "click" && R.disabled === !0)) {
              for (_ = [], b = {}, a = 0; a < T; a++)
                r = o[a], f = r.selector + " ", b[f] === void 0 && (b[f] = r.needsContext ? c(f, this).index(R) > -1 : c.find(f, this, null, [R]).length), b[f] && _.push(r);
              _.length && O.push({ elem: R, handlers: _ });
            }
        }
        return R = this, T < o.length && O.push({ elem: R, handlers: o.slice(T) }), O;
      },
      addProp: function(t, o) {
        Object.defineProperty(c.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: G(o) ? function() {
            if (this.originalEvent)
              return o(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[t];
          },
          set: function(a) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a
            });
          }
        });
      },
      fix: function(t) {
        return t[c.expando] ? t : new c.Event(t);
      },
      special: {
        load: {
          // Prevent triggered image.load events from bubbling to window.load
          noBubble: !0
        },
        click: {
          // Utilize native event to ensure correct state for checkable inputs
          setup: function(t) {
            var o = this || t;
            return dn.test(o.type) && o.click && oe(o, "input") && Dn(o, "click", tn), !1;
          },
          trigger: function(t) {
            var o = this || t;
            return dn.test(o.type) && o.click && oe(o, "input") && Dn(o, "click"), !0;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function(t) {
            var o = t.target;
            return dn.test(o.type) && o.click && oe(o, "input") && ge.get(o, "click") || oe(o, "a");
          }
        },
        beforeunload: {
          postDispatch: function(t) {
            t.result !== void 0 && t.originalEvent && (t.originalEvent.returnValue = t.result);
          }
        }
      }
    };
    function Dn(t, o, a) {
      if (!a) {
        ge.get(t, o) === void 0 && c.event.add(t, o, tn);
        return;
      }
      ge.set(t, o, !1), c.event.add(t, o, {
        namespace: !1,
        handler: function(r) {
          var f, _, b = ge.get(this, o);
          if (r.isTrigger & 1 && this[o]) {
            if (b.length)
              (c.event.special[o] || {}).delegateType && r.stopPropagation();
            else if (b = d.call(arguments), ge.set(this, o, b), f = a(this, o), this[o](), _ = ge.get(this, o), b !== _ || f ? ge.set(this, o, !1) : _ = {}, b !== _)
              return r.stopImmediatePropagation(), r.preventDefault(), _ && _.value;
          } else
            b.length && (ge.set(this, o, {
              value: c.event.trigger(
                // Support: IE <=9 - 11+
                // Extend with the prototype to reset the above stopImmediatePropagation()
                c.extend(b[0], c.Event.prototype),
                b.slice(1),
                this
              )
            }), r.stopImmediatePropagation());
        }
      });
    }
    c.removeEvent = function(t, o, a) {
      t.removeEventListener && t.removeEventListener(o, a);
    }, c.Event = function(t, o) {
      if (!(this instanceof c.Event))
        return new c.Event(t, o);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === void 0 && // Support: Android <=2.3 only
      t.returnValue === !1 ? tn : nn, this.target = t.target && t.target.nodeType === 3 ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, o && c.extend(this, o), this.timeStamp = t && t.timeStamp || Date.now(), this[c.expando] = !0;
    }, c.Event.prototype = {
      constructor: c.Event,
      isDefaultPrevented: nn,
      isPropagationStopped: nn,
      isImmediatePropagationStopped: nn,
      isSimulated: !1,
      preventDefault: function() {
        var t = this.originalEvent;
        this.isDefaultPrevented = tn, t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function() {
        var t = this.originalEvent;
        this.isPropagationStopped = tn, t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = tn, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
      }
    }, c.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, c.event.addProp), c.each({ focus: "focusin", blur: "focusout" }, function(t, o) {
      c.event.special[t] = {
        // Utilize native event if possible so blur/focus sequence is correct
        setup: function() {
          return Dn(this, t, Ro), !1;
        },
        trigger: function() {
          return Dn(this, t), !0;
        },
        // Suppress native focus or blur if we're currently inside
        // a leveraged native-event stack
        _default: function(a) {
          return ge.get(a.target, t);
        },
        delegateType: o
      };
    }), c.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(t, o) {
      c.event.special[t] = {
        delegateType: o,
        bindType: o,
        handle: function(a) {
          var r, f = this, _ = a.relatedTarget, b = a.handleObj;
          return (!_ || _ !== f && !c.contains(f, _)) && (a.type = b.origType, r = b.handler.apply(this, arguments), a.type = o), r;
        }
      };
    }), c.fn.extend({
      on: function(t, o, a, r) {
        return Jn(this, t, o, a, r);
      },
      one: function(t, o, a, r) {
        return Jn(this, t, o, a, r, 1);
      },
      off: function(t, o, a) {
        var r, f;
        if (t && t.preventDefault && t.handleObj)
          return r = t.handleObj, c(t.delegateTarget).off(
            r.namespace ? r.origType + "." + r.namespace : r.origType,
            r.selector,
            r.handler
          ), this;
        if (typeof t == "object") {
          for (f in t)
            this.off(f, o, t[f]);
          return this;
        }
        return (o === !1 || typeof o == "function") && (a = o, o = void 0), a === !1 && (a = nn), this.each(function() {
          c.event.remove(this, t, a, o);
        });
      }
    });
    var xo = /<script|<style|<link/i, No = /checked\s*(?:[^=]|=\s*.checked.)/i, Mo = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Ui(t, o) {
      return oe(t, "table") && oe(o.nodeType !== 11 ? o : o.firstChild, "tr") && c(t).children("tbody")[0] || t;
    }
    function ko(t) {
      return t.type = (t.getAttribute("type") !== null) + "/" + t.type, t;
    }
    function Uo(t) {
      return (t.type || "").slice(0, 5) === "true/" ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
    }
    function Bi(t, o) {
      var a, r, f, _, b, O, T;
      if (o.nodeType === 1) {
        if (ge.hasData(t) && (_ = ge.get(t), T = _.events, T)) {
          ge.remove(o, "handle events");
          for (f in T)
            for (a = 0, r = T[f].length; a < r; a++)
              c.event.add(o, f, T[f][a]);
        }
        ot.hasData(t) && (b = ot.access(t), O = c.extend({}, b), ot.set(o, O));
      }
    }
    function Bo(t, o) {
      var a = o.nodeName.toLowerCase();
      a === "input" && dn.test(t.type) ? o.checked = t.checked : (a === "input" || a === "textarea") && (o.defaultValue = t.defaultValue);
    }
    function on(t, o, a, r) {
      o = h(o);
      var f, _, b, O, T, R, U = 0, Y = t.length, k = Y - 1, B = o[0], fe = G(B);
      if (fe || Y > 1 && typeof B == "string" && !ue.checkClone && No.test(B))
        return t.each(function(Oe) {
          var de = t.eq(Oe);
          fe && (o[0] = B.call(this, Oe, de.html())), on(de, o, a, r);
        });
      if (Y && (f = Mi(o, t[0].ownerDocument, !1, t, r), _ = f.firstChild, f.childNodes.length === 1 && (f = _), _ || r)) {
        for (b = c.map(st(f, "script"), ko), O = b.length; U < Y; U++)
          T = f, U !== k && (T = c.clone(T, !0, !0), O && c.merge(b, st(T, "script"))), a.call(t[U], T, U);
        if (O)
          for (R = b[b.length - 1].ownerDocument, c.map(b, Uo), U = 0; U < O; U++)
            T = b[U], Ni.test(T.type || "") && !ge.access(T, "globalEval") && c.contains(R, T) && (T.src && (T.type || "").toLowerCase() !== "module" ? c._evalUrl && !T.noModule && c._evalUrl(T.src, {
              nonce: T.nonce || T.getAttribute("nonce")
            }, R) : Be(T.textContent.replace(Mo, ""), T, R));
      }
      return t;
    }
    function ji(t, o, a) {
      for (var r, f = o ? c.filter(o, t) : t, _ = 0; (r = f[_]) != null; _++)
        !a && r.nodeType === 1 && c.cleanData(st(r)), r.parentNode && (a && Zt(r) && Kn(st(r, "script")), r.parentNode.removeChild(r));
      return t;
    }
    c.extend({
      htmlPrefilter: function(t) {
        return t;
      },
      clone: function(t, o, a) {
        var r, f, _, b, O = t.cloneNode(!0), T = Zt(t);
        if (!ue.noCloneChecked && (t.nodeType === 1 || t.nodeType === 11) && !c.isXMLDoc(t))
          for (b = st(O), _ = st(t), r = 0, f = _.length; r < f; r++)
            Bo(_[r], b[r]);
        if (o)
          if (a)
            for (_ = _ || st(t), b = b || st(O), r = 0, f = _.length; r < f; r++)
              Bi(_[r], b[r]);
          else
            Bi(t, O);
        return b = st(O, "script"), b.length > 0 && Kn(b, !T && st(t, "script")), O;
      },
      cleanData: function(t) {
        for (var o, a, r, f = c.event.special, _ = 0; (a = t[_]) !== void 0; _++)
          if (rn(a)) {
            if (o = a[ge.expando]) {
              if (o.events)
                for (r in o.events)
                  f[r] ? c.event.remove(a, r) : c.removeEvent(a, r, o.handle);
              a[ge.expando] = void 0;
            }
            a[ot.expando] && (a[ot.expando] = void 0);
          }
      }
    }), c.fn.extend({
      detach: function(t) {
        return ji(this, t, !0);
      },
      remove: function(t) {
        return ji(this, t);
      },
      text: function(t) {
        return nt(this, function(o) {
          return o === void 0 ? c.text(this) : this.empty().each(function() {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = o);
          });
        }, null, t, arguments.length);
      },
      append: function() {
        return on(this, arguments, function(t) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var o = Ui(this, t);
            o.appendChild(t);
          }
        });
      },
      prepend: function() {
        return on(this, arguments, function(t) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var o = Ui(this, t);
            o.insertBefore(t, o.firstChild);
          }
        });
      },
      before: function() {
        return on(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function() {
        return on(this, arguments, function(t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function() {
        for (var t, o = 0; (t = this[o]) != null; o++)
          t.nodeType === 1 && (c.cleanData(st(t, !1)), t.textContent = "");
        return this;
      },
      clone: function(t, o) {
        return t = t ?? !1, o = o ?? t, this.map(function() {
          return c.clone(this, t, o);
        });
      },
      html: function(t) {
        return nt(this, function(o) {
          var a = this[0] || {}, r = 0, f = this.length;
          if (o === void 0 && a.nodeType === 1)
            return a.innerHTML;
          if (typeof o == "string" && !xo.test(o) && !St[(xi.exec(o) || ["", ""])[1].toLowerCase()]) {
            o = c.htmlPrefilter(o);
            try {
              for (; r < f; r++)
                a = this[r] || {}, a.nodeType === 1 && (c.cleanData(st(a, !1)), a.innerHTML = o);
              a = 0;
            } catch {
            }
          }
          a && this.empty().append(o);
        }, null, t, arguments.length);
      },
      replaceWith: function() {
        var t = [];
        return on(this, arguments, function(o) {
          var a = this.parentNode;
          c.inArray(this, t) < 0 && (c.cleanData(st(this)), a && a.replaceChild(o, this));
        }, t);
      }
    }), c.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(t, o) {
      c.fn[t] = function(a) {
        for (var r, f = [], _ = c(a), b = _.length - 1, O = 0; O <= b; O++)
          r = O === b ? this : this.clone(!0), c(_[O])[o](r), E.apply(f, r.get());
        return this.pushStack(f);
      };
    });
    var Qn = new RegExp("^(" + Ii + ")(?!px)[a-z%]+$", "i"), Zn = /^--/, In = function(t) {
      var o = t.ownerDocument.defaultView;
      return (!o || !o.opener) && (o = i), o.getComputedStyle(t);
    }, Hi = function(t, o, a) {
      var r, f, _ = {};
      for (f in o)
        _[f] = t.style[f], t.style[f] = o[f];
      r = a.call(t);
      for (f in o)
        t.style[f] = _[f];
      return r;
    }, jo = new RegExp(kt.join("|"), "i"), $i = "[\\x20\\t\\r\\n\\f]", Ho = new RegExp(
      "^" + $i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $i + "+$",
      "g"
    );
    (function() {
      function t() {
        if (R) {
          T.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", R.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ft.appendChild(T).appendChild(R);
          var U = i.getComputedStyle(R);
          a = U.top !== "1%", O = o(U.marginLeft) === 12, R.style.right = "60%", _ = o(U.right) === 36, r = o(U.width) === 36, R.style.position = "absolute", f = o(R.offsetWidth / 3) === 12, Ft.removeChild(T), R = null;
        }
      }
      function o(U) {
        return Math.round(parseFloat(U));
      }
      var a, r, f, _, b, O, T = ne.createElement("div"), R = ne.createElement("div");
      R.style && (R.style.backgroundClip = "content-box", R.cloneNode(!0).style.backgroundClip = "", ue.clearCloneStyle = R.style.backgroundClip === "content-box", c.extend(ue, {
        boxSizingReliable: function() {
          return t(), r;
        },
        pixelBoxStyles: function() {
          return t(), _;
        },
        pixelPosition: function() {
          return t(), a;
        },
        reliableMarginLeft: function() {
          return t(), O;
        },
        scrollboxSize: function() {
          return t(), f;
        },
        // Support: IE 9 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Behavior in IE 9 is more subtle than in newer versions & it passes
        // some versions of this test; make sure not to make it pass there!
        //
        // Support: Firefox 70+
        // Only Firefox includes border widths
        // in computed dimensions. (gh-4529)
        reliableTrDimensions: function() {
          var U, Y, k, B;
          return b == null && (U = ne.createElement("table"), Y = ne.createElement("tr"), k = ne.createElement("div"), U.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", Y.style.cssText = "border:1px solid", Y.style.height = "1px", k.style.height = "9px", k.style.display = "block", Ft.appendChild(U).appendChild(Y).appendChild(k), B = i.getComputedStyle(Y), b = parseInt(B.height, 10) + parseInt(B.borderTopWidth, 10) + parseInt(B.borderBottomWidth, 10) === Y.offsetHeight, Ft.removeChild(U)), b;
        }
      }));
    })();
    function fn(t, o, a) {
      var r, f, _, b, O = Zn.test(o), T = t.style;
      return a = a || In(t), a && (b = a.getPropertyValue(o) || a[o], O && b && (b = b.replace(Ho, "$1") || void 0), b === "" && !Zt(t) && (b = c.style(t, o)), !ue.pixelBoxStyles() && Qn.test(b) && jo.test(o) && (r = T.width, f = T.minWidth, _ = T.maxWidth, T.minWidth = T.maxWidth = T.width = b, b = a.width, T.width = r, T.minWidth = f, T.maxWidth = _)), b !== void 0 ? (
        // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        b + ""
      ) : b;
    }
    function Fi(t, o) {
      return {
        get: function() {
          if (t()) {
            delete this.get;
            return;
          }
          return (this.get = o).apply(this, arguments);
        }
      };
    }
    var qi = ["Webkit", "Moz", "ms"], Wi = ne.createElement("div").style, zi = {};
    function $o(t) {
      for (var o = t[0].toUpperCase() + t.slice(1), a = qi.length; a--; )
        if (t = qi[a] + o, t in Wi)
          return t;
    }
    function ei(t) {
      var o = c.cssProps[t] || zi[t];
      return o || (t in Wi ? t : zi[t] = $o(t) || t);
    }
    var Fo = /^(none|table(?!-c[ea]).+)/, qo = { position: "absolute", visibility: "hidden", display: "block" }, Gi = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function Vi(t, o, a) {
      var r = un.exec(o);
      return r ? (
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, r[2] - (a || 0)) + (r[3] || "px")
      ) : o;
    }
    function ti(t, o, a, r, f, _) {
      var b = o === "width" ? 1 : 0, O = 0, T = 0;
      if (a === (r ? "border" : "content"))
        return 0;
      for (; b < 4; b += 2)
        a === "margin" && (T += c.css(t, a + kt[b], !0, f)), r ? (a === "content" && (T -= c.css(t, "padding" + kt[b], !0, f)), a !== "margin" && (T -= c.css(t, "border" + kt[b] + "Width", !0, f))) : (T += c.css(t, "padding" + kt[b], !0, f), a !== "padding" ? T += c.css(t, "border" + kt[b] + "Width", !0, f) : O += c.css(t, "border" + kt[b] + "Width", !0, f));
      return !r && _ >= 0 && (T += Math.max(0, Math.ceil(
        t["offset" + o[0].toUpperCase() + o.slice(1)] - _ - T - O - 0.5
        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0), T;
    }
    function Yi(t, o, a) {
      var r = In(t), f = !ue.boxSizingReliable() || a, _ = f && c.css(t, "boxSizing", !1, r) === "border-box", b = _, O = fn(t, o, r), T = "offset" + o[0].toUpperCase() + o.slice(1);
      if (Qn.test(O)) {
        if (!a)
          return O;
        O = "auto";
      }
      return (!ue.boxSizingReliable() && _ || // Support: IE 10 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Interestingly, in some cases IE 9 doesn't suffer from this issue.
      !ue.reliableTrDimensions() && oe(t, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      O === "auto" || // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      !parseFloat(O) && c.css(t, "display", !1, r) === "inline") && // Make sure the element is visible & connected
      t.getClientRects().length && (_ = c.css(t, "boxSizing", !1, r) === "border-box", b = T in t, b && (O = t[T])), O = parseFloat(O) || 0, O + ti(
        t,
        o,
        a || (_ ? "border" : "content"),
        b,
        r,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        O
      ) + "px";
    }
    c.extend({
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {
        opacity: {
          get: function(t, o) {
            if (o) {
              var a = fn(t, "opacity");
              return a === "" ? "1" : a;
            }
          }
        }
      },
      // Don't automatically add "px" to these possibly-unitless properties
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      // Add in properties whose names you wish to fix before
      // setting or getting the value
      cssProps: {},
      // Get and set the style property on a DOM Node
      style: function(t, o, a, r) {
        if (!(!t || t.nodeType === 3 || t.nodeType === 8 || !t.style)) {
          var f, _, b, O = xt(o), T = Zn.test(o), R = t.style;
          if (T || (o = ei(O)), b = c.cssHooks[o] || c.cssHooks[O], a !== void 0) {
            if (_ = typeof a, _ === "string" && (f = un.exec(a)) && f[1] && (a = Ri(t, o, f), _ = "number"), a == null || a !== a)
              return;
            _ === "number" && !T && (a += f && f[3] || (c.cssNumber[O] ? "" : "px")), !ue.clearCloneStyle && a === "" && o.indexOf("background") === 0 && (R[o] = "inherit"), (!b || !("set" in b) || (a = b.set(t, a, r)) !== void 0) && (T ? R.setProperty(o, a) : R[o] = a);
          } else
            return b && "get" in b && (f = b.get(t, !1, r)) !== void 0 ? f : R[o];
        }
      },
      css: function(t, o, a, r) {
        var f, _, b, O = xt(o), T = Zn.test(o);
        return T || (o = ei(O)), b = c.cssHooks[o] || c.cssHooks[O], b && "get" in b && (f = b.get(t, !0, a)), f === void 0 && (f = fn(t, o, r)), f === "normal" && o in Gi && (f = Gi[o]), a === "" || a ? (_ = parseFloat(f), a === !0 || isFinite(_) ? _ || 0 : f) : f;
      }
    }), c.each(["height", "width"], function(t, o) {
      c.cssHooks[o] = {
        get: function(a, r, f) {
          if (r)
            return Fo.test(c.css(a, "display")) && // Support: Safari 8+
            // Table columns in Safari have non-zero offsetWidth & zero
            // getBoundingClientRect().width unless display is changed.
            // Support: IE <=11 only
            // Running getBoundingClientRect on a disconnected node
            // in IE throws an error.
            (!a.getClientRects().length || !a.getBoundingClientRect().width) ? Hi(a, qo, function() {
              return Yi(a, o, f);
            }) : Yi(a, o, f);
        },
        set: function(a, r, f) {
          var _, b = In(a), O = !ue.scrollboxSize() && b.position === "absolute", T = O || f, R = T && c.css(a, "boxSizing", !1, b) === "border-box", U = f ? ti(
            a,
            o,
            f,
            R,
            b
          ) : 0;
          return R && O && (U -= Math.ceil(
            a["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(b[o]) - ti(a, o, "border", !1, b) - 0.5
          )), U && (_ = un.exec(r)) && (_[3] || "px") !== "px" && (a.style[o] = r, r = c.css(a, o)), Vi(a, r, U);
        }
      };
    }), c.cssHooks.marginLeft = Fi(
      ue.reliableMarginLeft,
      function(t, o) {
        if (o)
          return (parseFloat(fn(t, "marginLeft")) || t.getBoundingClientRect().left - Hi(t, { marginLeft: 0 }, function() {
            return t.getBoundingClientRect().left;
          })) + "px";
      }
    ), c.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(t, o) {
      c.cssHooks[t + o] = {
        expand: function(a) {
          for (var r = 0, f = {}, _ = typeof a == "string" ? a.split(" ") : [a]; r < 4; r++)
            f[t + kt[r] + o] = _[r] || _[r - 2] || _[0];
          return f;
        }
      }, t !== "margin" && (c.cssHooks[t + o].set = Vi);
    }), c.fn.extend({
      css: function(t, o) {
        return nt(this, function(a, r, f) {
          var _, b, O = {}, T = 0;
          if (Array.isArray(r)) {
            for (_ = In(a), b = r.length; T < b; T++)
              O[r[T]] = c.css(a, r[T], !1, _);
            return O;
          }
          return f !== void 0 ? c.style(a, r, f) : c.css(a, r);
        }, t, o, arguments.length > 1);
      }
    });
    function at(t, o, a, r, f) {
      return new at.prototype.init(t, o, a, r, f);
    }
    c.Tween = at, at.prototype = {
      constructor: at,
      init: function(t, o, a, r, f, _) {
        this.elem = t, this.prop = a, this.easing = f || c.easing._default, this.options = o, this.start = this.now = this.cur(), this.end = r, this.unit = _ || (c.cssNumber[a] ? "" : "px");
      },
      cur: function() {
        var t = at.propHooks[this.prop];
        return t && t.get ? t.get(this) : at.propHooks._default.get(this);
      },
      run: function(t) {
        var o, a = at.propHooks[this.prop];
        return this.options.duration ? this.pos = o = c.easing[this.easing](
          t,
          this.options.duration * t,
          0,
          1,
          this.options.duration
        ) : this.pos = o = t, this.now = (this.end - this.start) * o + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), a && a.set ? a.set(this) : at.propHooks._default.set(this), this;
      }
    }, at.prototype.init.prototype = at.prototype, at.propHooks = {
      _default: {
        get: function(t) {
          var o;
          return t.elem.nodeType !== 1 || t.elem[t.prop] != null && t.elem.style[t.prop] == null ? t.elem[t.prop] : (o = c.css(t.elem, t.prop, ""), !o || o === "auto" ? 0 : o);
        },
        set: function(t) {
          c.fx.step[t.prop] ? c.fx.step[t.prop](t) : t.elem.nodeType === 1 && (c.cssHooks[t.prop] || t.elem.style[ei(t.prop)] != null) ? c.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
        }
      }
    }, at.propHooks.scrollTop = at.propHooks.scrollLeft = {
      set: function(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      }
    }, c.easing = {
      linear: function(t) {
        return t;
      },
      swing: function(t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing"
    }, c.fx = at.prototype.init, c.fx.step = {};
    var sn, Rn, Wo = /^(?:toggle|show|hide)$/, zo = /queueHooks$/;
    function ni() {
      Rn && (ne.hidden === !1 && i.requestAnimationFrame ? i.requestAnimationFrame(ni) : i.setTimeout(ni, c.fx.interval), c.fx.tick());
    }
    function Xi() {
      return i.setTimeout(function() {
        sn = void 0;
      }), sn = Date.now();
    }
    function Pn(t, o) {
      var a, r = 0, f = { height: t };
      for (o = o ? 1 : 0; r < 4; r += 2 - o)
        a = kt[r], f["margin" + a] = f["padding" + a] = t;
      return o && (f.opacity = f.width = t), f;
    }
    function Ki(t, o, a) {
      for (var r, f = (wt.tweeners[o] || []).concat(wt.tweeners["*"]), _ = 0, b = f.length; _ < b; _++)
        if (r = f[_].call(a, o, t))
          return r;
    }
    function Go(t, o, a) {
      var r, f, _, b, O, T, R, U, Y = "width" in o || "height" in o, k = this, B = {}, fe = t.style, Oe = t.nodeType && Ln(t), de = ge.get(t, "fxshow");
      a.queue || (b = c._queueHooks(t, "fx"), b.unqueued == null && (b.unqueued = 0, O = b.empty.fire, b.empty.fire = function() {
        b.unqueued || O();
      }), b.unqueued++, k.always(function() {
        k.always(function() {
          b.unqueued--, c.queue(t, "fx").length || b.empty.fire();
        });
      }));
      for (r in o)
        if (f = o[r], Wo.test(f)) {
          if (delete o[r], _ = _ || f === "toggle", f === (Oe ? "hide" : "show"))
            if (f === "show" && de && de[r] !== void 0)
              Oe = !0;
            else
              continue;
          B[r] = de && de[r] || c.style(t, r);
        }
      if (T = !c.isEmptyObject(o), !(!T && c.isEmptyObject(B))) {
        Y && t.nodeType === 1 && (a.overflow = [fe.overflow, fe.overflowX, fe.overflowY], R = de && de.display, R == null && (R = ge.get(t, "display")), U = c.css(t, "display"), U === "none" && (R ? U = R : (en([t], !0), R = t.style.display || R, U = c.css(t, "display"), en([t]))), (U === "inline" || U === "inline-block" && R != null) && c.css(t, "float") === "none" && (T || (k.done(function() {
          fe.display = R;
        }), R == null && (U = fe.display, R = U === "none" ? "" : U)), fe.display = "inline-block")), a.overflow && (fe.overflow = "hidden", k.always(function() {
          fe.overflow = a.overflow[0], fe.overflowX = a.overflow[1], fe.overflowY = a.overflow[2];
        })), T = !1;
        for (r in B)
          T || (de ? "hidden" in de && (Oe = de.hidden) : de = ge.access(t, "fxshow", { display: R }), _ && (de.hidden = !Oe), Oe && en([t], !0), k.done(function() {
            Oe || en([t]), ge.remove(t, "fxshow");
            for (r in B)
              c.style(t, r, B[r]);
          })), T = Ki(Oe ? de[r] : 0, r, k), r in de || (de[r] = T.start, Oe && (T.end = T.start, T.start = 0));
      }
    }
    function Vo(t, o) {
      var a, r, f, _, b;
      for (a in t)
        if (r = xt(a), f = o[r], _ = t[a], Array.isArray(_) && (f = _[1], _ = t[a] = _[0]), a !== r && (t[r] = _, delete t[a]), b = c.cssHooks[r], b && "expand" in b) {
          _ = b.expand(_), delete t[r];
          for (a in _)
            a in t || (t[a] = _[a], o[a] = f);
        } else
          o[r] = f;
    }
    function wt(t, o, a) {
      var r, f, _ = 0, b = wt.prefilters.length, O = c.Deferred().always(function() {
        delete T.elem;
      }), T = function() {
        if (f)
          return !1;
        for (var Y = sn || Xi(), k = Math.max(0, R.startTime + R.duration - Y), B = k / R.duration || 0, fe = 1 - B, Oe = 0, de = R.tweens.length; Oe < de; Oe++)
          R.tweens[Oe].run(fe);
        return O.notifyWith(t, [R, fe, k]), fe < 1 && de ? k : (de || O.notifyWith(t, [R, 1, 0]), O.resolveWith(t, [R]), !1);
      }, R = O.promise({
        elem: t,
        props: c.extend({}, o),
        opts: c.extend(!0, {
          specialEasing: {},
          easing: c.easing._default
        }, a),
        originalProperties: o,
        originalOptions: a,
        startTime: sn || Xi(),
        duration: a.duration,
        tweens: [],
        createTween: function(Y, k) {
          var B = c.Tween(
            t,
            R.opts,
            Y,
            k,
            R.opts.specialEasing[Y] || R.opts.easing
          );
          return R.tweens.push(B), B;
        },
        stop: function(Y) {
          var k = 0, B = Y ? R.tweens.length : 0;
          if (f)
            return this;
          for (f = !0; k < B; k++)
            R.tweens[k].run(1);
          return Y ? (O.notifyWith(t, [R, 1, 0]), O.resolveWith(t, [R, Y])) : O.rejectWith(t, [R, Y]), this;
        }
      }), U = R.props;
      for (Vo(U, R.opts.specialEasing); _ < b; _++)
        if (r = wt.prefilters[_].call(R, t, U, R.opts), r)
          return G(r.stop) && (c._queueHooks(R.elem, R.opts.queue).stop = r.stop.bind(r)), r;
      return c.map(U, Ki, R), G(R.opts.start) && R.opts.start.call(t, R), R.progress(R.opts.progress).done(R.opts.done, R.opts.complete).fail(R.opts.fail).always(R.opts.always), c.fx.timer(
        c.extend(T, {
          elem: t,
          anim: R,
          queue: R.opts.queue
        })
      ), R;
    }
    c.Animation = c.extend(wt, {
      tweeners: {
        "*": [function(t, o) {
          var a = this.createTween(t, o);
          return Ri(a.elem, t, un.exec(o), a), a;
        }]
      },
      tweener: function(t, o) {
        G(t) ? (o = t, t = ["*"]) : t = t.match(pe);
        for (var a, r = 0, f = t.length; r < f; r++)
          a = t[r], wt.tweeners[a] = wt.tweeners[a] || [], wt.tweeners[a].unshift(o);
      },
      prefilters: [Go],
      prefilter: function(t, o) {
        o ? wt.prefilters.unshift(t) : wt.prefilters.push(t);
      }
    }), c.speed = function(t, o, a) {
      var r = t && typeof t == "object" ? c.extend({}, t) : {
        complete: a || !a && o || G(t) && t,
        duration: t,
        easing: a && o || o && !G(o) && o
      };
      return c.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in c.fx.speeds ? r.duration = c.fx.speeds[r.duration] : r.duration = c.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        G(r.old) && r.old.call(this), r.queue && c.dequeue(this, r.queue);
      }, r;
    }, c.fn.extend({
      fadeTo: function(t, o, a, r) {
        return this.filter(Ln).css("opacity", 0).show().end().animate({ opacity: o }, t, a, r);
      },
      animate: function(t, o, a, r) {
        var f = c.isEmptyObject(t), _ = c.speed(o, a, r), b = function() {
          var O = wt(this, c.extend({}, t), _);
          (f || ge.get(this, "finish")) && O.stop(!0);
        };
        return b.finish = b, f || _.queue === !1 ? this.each(b) : this.queue(_.queue, b);
      },
      stop: function(t, o, a) {
        var r = function(f) {
          var _ = f.stop;
          delete f.stop, _(a);
        };
        return typeof t != "string" && (a = o, o = t, t = void 0), o && this.queue(t || "fx", []), this.each(function() {
          var f = !0, _ = t != null && t + "queueHooks", b = c.timers, O = ge.get(this);
          if (_)
            O[_] && O[_].stop && r(O[_]);
          else
            for (_ in O)
              O[_] && O[_].stop && zo.test(_) && r(O[_]);
          for (_ = b.length; _--; )
            b[_].elem === this && (t == null || b[_].queue === t) && (b[_].anim.stop(a), f = !1, b.splice(_, 1));
          (f || !a) && c.dequeue(this, t);
        });
      },
      finish: function(t) {
        return t !== !1 && (t = t || "fx"), this.each(function() {
          var o, a = ge.get(this), r = a[t + "queue"], f = a[t + "queueHooks"], _ = c.timers, b = r ? r.length : 0;
          for (a.finish = !0, c.queue(this, t, []), f && f.stop && f.stop.call(this, !0), o = _.length; o--; )
            _[o].elem === this && _[o].queue === t && (_[o].anim.stop(!0), _.splice(o, 1));
          for (o = 0; o < b; o++)
            r[o] && r[o].finish && r[o].finish.call(this);
          delete a.finish;
        });
      }
    }), c.each(["toggle", "show", "hide"], function(t, o) {
      var a = c.fn[o];
      c.fn[o] = function(r, f, _) {
        return r == null || typeof r == "boolean" ? a.apply(this, arguments) : this.animate(Pn(o, !0), r, f, _);
      };
    }), c.each({
      slideDown: Pn("show"),
      slideUp: Pn("hide"),
      slideToggle: Pn("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(t, o) {
      c.fn[t] = function(a, r, f) {
        return this.animate(o, a, r, f);
      };
    }), c.timers = [], c.fx.tick = function() {
      var t, o = 0, a = c.timers;
      for (sn = Date.now(); o < a.length; o++)
        t = a[o], !t() && a[o] === t && a.splice(o--, 1);
      a.length || c.fx.stop(), sn = void 0;
    }, c.fx.timer = function(t) {
      c.timers.push(t), c.fx.start();
    }, c.fx.interval = 13, c.fx.start = function() {
      Rn || (Rn = !0, ni());
    }, c.fx.stop = function() {
      Rn = null;
    }, c.fx.speeds = {
      slow: 600,
      fast: 200,
      // Default speed
      _default: 400
    }, c.fn.delay = function(t, o) {
      return t = c.fx && c.fx.speeds[t] || t, o = o || "fx", this.queue(o, function(a, r) {
        var f = i.setTimeout(a, t);
        r.stop = function() {
          i.clearTimeout(f);
        };
      });
    }, function() {
      var t = ne.createElement("input"), o = ne.createElement("select"), a = o.appendChild(ne.createElement("option"));
      t.type = "checkbox", ue.checkOn = t.value !== "", ue.optSelected = a.selected, t = ne.createElement("input"), t.value = "t", t.type = "radio", ue.radioValue = t.value === "t";
    }();
    var Ji, pn = c.expr.attrHandle;
    c.fn.extend({
      attr: function(t, o) {
        return nt(this, c.attr, t, o, arguments.length > 1);
      },
      removeAttr: function(t) {
        return this.each(function() {
          c.removeAttr(this, t);
        });
      }
    }), c.extend({
      attr: function(t, o, a) {
        var r, f, _ = t.nodeType;
        if (!(_ === 3 || _ === 8 || _ === 2)) {
          if (typeof t.getAttribute > "u")
            return c.prop(t, o, a);
          if ((_ !== 1 || !c.isXMLDoc(t)) && (f = c.attrHooks[o.toLowerCase()] || (c.expr.match.bool.test(o) ? Ji : void 0)), a !== void 0) {
            if (a === null) {
              c.removeAttr(t, o);
              return;
            }
            return f && "set" in f && (r = f.set(t, a, o)) !== void 0 ? r : (t.setAttribute(o, a + ""), a);
          }
          return f && "get" in f && (r = f.get(t, o)) !== null ? r : (r = c.find.attr(t, o), r ?? void 0);
        }
      },
      attrHooks: {
        type: {
          set: function(t, o) {
            if (!ue.radioValue && o === "radio" && oe(t, "input")) {
              var a = t.value;
              return t.setAttribute("type", o), a && (t.value = a), o;
            }
          }
        }
      },
      removeAttr: function(t, o) {
        var a, r = 0, f = o && o.match(pe);
        if (f && t.nodeType === 1)
          for (; a = f[r++]; )
            t.removeAttribute(a);
      }
    }), Ji = {
      set: function(t, o, a) {
        return o === !1 ? c.removeAttr(t, a) : t.setAttribute(a, a), a;
      }
    }, c.each(c.expr.match.bool.source.match(/\w+/g), function(t, o) {
      var a = pn[o] || c.find.attr;
      pn[o] = function(r, f, _) {
        var b, O, T = f.toLowerCase();
        return _ || (O = pn[T], pn[T] = b, b = a(r, f, _) != null ? T : null, pn[T] = O), b;
      };
    });
    var Yo = /^(?:input|select|textarea|button)$/i, Xo = /^(?:a|area)$/i;
    c.fn.extend({
      prop: function(t, o) {
        return nt(this, c.prop, t, o, arguments.length > 1);
      },
      removeProp: function(t) {
        return this.each(function() {
          delete this[c.propFix[t] || t];
        });
      }
    }), c.extend({
      prop: function(t, o, a) {
        var r, f, _ = t.nodeType;
        if (!(_ === 3 || _ === 8 || _ === 2))
          return (_ !== 1 || !c.isXMLDoc(t)) && (o = c.propFix[o] || o, f = c.propHooks[o]), a !== void 0 ? f && "set" in f && (r = f.set(t, a, o)) !== void 0 ? r : t[o] = a : f && "get" in f && (r = f.get(t, o)) !== null ? r : t[o];
      },
      propHooks: {
        tabIndex: {
          get: function(t) {
            var o = c.find.attr(t, "tabindex");
            return o ? parseInt(o, 10) : Yo.test(t.nodeName) || Xo.test(t.nodeName) && t.href ? 0 : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), ue.optSelected || (c.propHooks.selected = {
      get: function(t) {
        var o = t.parentNode;
        return o && o.parentNode && o.parentNode.selectedIndex, null;
      },
      set: function(t) {
        var o = t.parentNode;
        o && (o.selectedIndex, o.parentNode && o.parentNode.selectedIndex);
      }
    }), c.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      c.propFix[this.toLowerCase()] = this;
    });
    function qt(t) {
      var o = t.match(pe) || [];
      return o.join(" ");
    }
    function Wt(t) {
      return t.getAttribute && t.getAttribute("class") || "";
    }
    function ii(t) {
      return Array.isArray(t) ? t : typeof t == "string" ? t.match(pe) || [] : [];
    }
    c.fn.extend({
      addClass: function(t) {
        var o, a, r, f, _, b;
        return G(t) ? this.each(function(O) {
          c(this).addClass(t.call(this, O, Wt(this)));
        }) : (o = ii(t), o.length ? this.each(function() {
          if (r = Wt(this), a = this.nodeType === 1 && " " + qt(r) + " ", a) {
            for (_ = 0; _ < o.length; _++)
              f = o[_], a.indexOf(" " + f + " ") < 0 && (a += f + " ");
            b = qt(a), r !== b && this.setAttribute("class", b);
          }
        }) : this);
      },
      removeClass: function(t) {
        var o, a, r, f, _, b;
        return G(t) ? this.each(function(O) {
          c(this).removeClass(t.call(this, O, Wt(this)));
        }) : arguments.length ? (o = ii(t), o.length ? this.each(function() {
          if (r = Wt(this), a = this.nodeType === 1 && " " + qt(r) + " ", a) {
            for (_ = 0; _ < o.length; _++)
              for (f = o[_]; a.indexOf(" " + f + " ") > -1; )
                a = a.replace(" " + f + " ", " ");
            b = qt(a), r !== b && this.setAttribute("class", b);
          }
        }) : this) : this.attr("class", "");
      },
      toggleClass: function(t, o) {
        var a, r, f, _, b = typeof t, O = b === "string" || Array.isArray(t);
        return G(t) ? this.each(function(T) {
          c(this).toggleClass(
            t.call(this, T, Wt(this), o),
            o
          );
        }) : typeof o == "boolean" && O ? o ? this.addClass(t) : this.removeClass(t) : (a = ii(t), this.each(function() {
          if (O)
            for (_ = c(this), f = 0; f < a.length; f++)
              r = a[f], _.hasClass(r) ? _.removeClass(r) : _.addClass(r);
          else
            (t === void 0 || b === "boolean") && (r = Wt(this), r && ge.set(this, "__className__", r), this.setAttribute && this.setAttribute(
              "class",
              r || t === !1 ? "" : ge.get(this, "__className__") || ""
            ));
        }));
      },
      hasClass: function(t) {
        var o, a, r = 0;
        for (o = " " + t + " "; a = this[r++]; )
          if (a.nodeType === 1 && (" " + qt(Wt(a)) + " ").indexOf(o) > -1)
            return !0;
        return !1;
      }
    });
    var Ko = /\r/g;
    c.fn.extend({
      val: function(t) {
        var o, a, r, f = this[0];
        return arguments.length ? (r = G(t), this.each(function(_) {
          var b;
          this.nodeType === 1 && (r ? b = t.call(this, _, c(this).val()) : b = t, b == null ? b = "" : typeof b == "number" ? b += "" : Array.isArray(b) && (b = c.map(b, function(O) {
            return O == null ? "" : O + "";
          })), o = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], (!o || !("set" in o) || o.set(this, b, "value") === void 0) && (this.value = b));
        })) : f ? (o = c.valHooks[f.type] || c.valHooks[f.nodeName.toLowerCase()], o && "get" in o && (a = o.get(f, "value")) !== void 0 ? a : (a = f.value, typeof a == "string" ? a.replace(Ko, "") : a ?? "")) : void 0;
      }
    }), c.extend({
      valHooks: {
        option: {
          get: function(t) {
            var o = c.find.attr(t, "value");
            return o ?? // Support: IE <=10 - 11 only
            // option.text throws exceptions (trac-14686, trac-14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            qt(c.text(t));
          }
        },
        select: {
          get: function(t) {
            var o, a, r, f = t.options, _ = t.selectedIndex, b = t.type === "select-one", O = b ? null : [], T = b ? _ + 1 : f.length;
            for (_ < 0 ? r = T : r = b ? _ : 0; r < T; r++)
              if (a = f[r], (a.selected || r === _) && // Don't return options that are disabled or in a disabled optgroup
              !a.disabled && (!a.parentNode.disabled || !oe(a.parentNode, "optgroup"))) {
                if (o = c(a).val(), b)
                  return o;
                O.push(o);
              }
            return O;
          },
          set: function(t, o) {
            for (var a, r, f = t.options, _ = c.makeArray(o), b = f.length; b--; )
              r = f[b], (r.selected = c.inArray(c.valHooks.option.get(r), _) > -1) && (a = !0);
            return a || (t.selectedIndex = -1), _;
          }
        }
      }
    }), c.each(["radio", "checkbox"], function() {
      c.valHooks[this] = {
        set: function(t, o) {
          if (Array.isArray(o))
            return t.checked = c.inArray(c(t).val(), o) > -1;
        }
      }, ue.checkOn || (c.valHooks[this].get = function(t) {
        return t.getAttribute("value") === null ? "on" : t.value;
      });
    }), ue.focusin = "onfocusin" in i;
    var Qi = /^(?:focusinfocus|focusoutblur)$/, Zi = function(t) {
      t.stopPropagation();
    };
    c.extend(c.event, {
      trigger: function(t, o, a, r) {
        var f, _, b, O, T, R, U, Y, k = [a || ne], B = D.call(t, "type") ? t.type : t, fe = D.call(t, "namespace") ? t.namespace.split(".") : [];
        if (_ = Y = b = a = a || ne, !(a.nodeType === 3 || a.nodeType === 8) && !Qi.test(B + c.event.triggered) && (B.indexOf(".") > -1 && (fe = B.split("."), B = fe.shift(), fe.sort()), T = B.indexOf(":") < 0 && "on" + B, t = t[c.expando] ? t : new c.Event(B, typeof t == "object" && t), t.isTrigger = r ? 2 : 3, t.namespace = fe.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + fe.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), o = o == null ? [t] : c.makeArray(o, [t]), U = c.event.special[B] || {}, !(!r && U.trigger && U.trigger.apply(a, o) === !1))) {
          if (!r && !U.noBubble && !Ee(a)) {
            for (O = U.delegateType || B, Qi.test(O + B) || (_ = _.parentNode); _; _ = _.parentNode)
              k.push(_), b = _;
            b === (a.ownerDocument || ne) && k.push(b.defaultView || b.parentWindow || i);
          }
          for (f = 0; (_ = k[f++]) && !t.isPropagationStopped(); )
            Y = _, t.type = f > 1 ? O : U.bindType || B, R = (ge.get(_, "events") || /* @__PURE__ */ Object.create(null))[t.type] && ge.get(_, "handle"), R && R.apply(_, o), R = T && _[T], R && R.apply && rn(_) && (t.result = R.apply(_, o), t.result === !1 && t.preventDefault());
          return t.type = B, !r && !t.isDefaultPrevented() && (!U._default || U._default.apply(k.pop(), o) === !1) && rn(a) && T && G(a[B]) && !Ee(a) && (b = a[T], b && (a[T] = null), c.event.triggered = B, t.isPropagationStopped() && Y.addEventListener(B, Zi), a[B](), t.isPropagationStopped() && Y.removeEventListener(B, Zi), c.event.triggered = void 0, b && (a[T] = b)), t.result;
        }
      },
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function(t, o, a) {
        var r = c.extend(
          new c.Event(),
          a,
          {
            type: t,
            isSimulated: !0
          }
        );
        c.event.trigger(r, null, o);
      }
    }), c.fn.extend({
      trigger: function(t, o) {
        return this.each(function() {
          c.event.trigger(t, o, this);
        });
      },
      triggerHandler: function(t, o) {
        var a = this[0];
        if (a)
          return c.event.trigger(t, o, a, !0);
      }
    }), ue.focusin || c.each({ focus: "focusin", blur: "focusout" }, function(t, o) {
      var a = function(r) {
        c.event.simulate(o, r.target, c.event.fix(r));
      };
      c.event.special[o] = {
        setup: function() {
          var r = this.ownerDocument || this.document || this, f = ge.access(r, o);
          f || r.addEventListener(t, a, !0), ge.access(r, o, (f || 0) + 1);
        },
        teardown: function() {
          var r = this.ownerDocument || this.document || this, f = ge.access(r, o) - 1;
          f ? ge.access(r, o, f) : (r.removeEventListener(t, a, !0), ge.remove(r, o));
        }
      };
    });
    var _n = i.location, eo = { guid: Date.now() }, oi = /\?/;
    c.parseXML = function(t) {
      var o, a;
      if (!t || typeof t != "string")
        return null;
      try {
        o = new i.DOMParser().parseFromString(t, "text/xml");
      } catch {
      }
      return a = o && o.getElementsByTagName("parsererror")[0], (!o || a) && c.error("Invalid XML: " + (a ? c.map(a.childNodes, function(r) {
        return r.textContent;
      }).join(`
`) : t)), o;
    };
    var Jo = /\[\]$/, to = /\r?\n/g, Qo = /^(?:submit|button|image|reset|file)$/i, Zo = /^(?:input|select|textarea|keygen)/i;
    function si(t, o, a, r) {
      var f;
      if (Array.isArray(o))
        c.each(o, function(_, b) {
          a || Jo.test(t) ? r(t, b) : si(
            t + "[" + (typeof b == "object" && b != null ? _ : "") + "]",
            b,
            a,
            r
          );
        });
      else if (!a && Re(o) === "object")
        for (f in o)
          si(t + "[" + f + "]", o[f], a, r);
      else
        r(t, o);
    }
    c.param = function(t, o) {
      var a, r = [], f = function(_, b) {
        var O = G(b) ? b() : b;
        r[r.length] = encodeURIComponent(_) + "=" + encodeURIComponent(O ?? "");
      };
      if (t == null)
        return "";
      if (Array.isArray(t) || t.jquery && !c.isPlainObject(t))
        c.each(t, function() {
          f(this.name, this.value);
        });
      else
        for (a in t)
          si(a, t[a], o, f);
      return r.join("&");
    }, c.fn.extend({
      serialize: function() {
        return c.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var t = c.prop(this, "elements");
          return t ? c.makeArray(t) : this;
        }).filter(function() {
          var t = this.type;
          return this.name && !c(this).is(":disabled") && Zo.test(this.nodeName) && !Qo.test(t) && (this.checked || !dn.test(t));
        }).map(function(t, o) {
          var a = c(this).val();
          return a == null ? null : Array.isArray(a) ? c.map(a, function(r) {
            return { name: o.name, value: r.replace(to, `\r
`) };
          }) : { name: o.name, value: a.replace(to, `\r
`) };
        }).get();
      }
    });
    var es = /%20/g, ts = /#.*$/, ns = /([?&])_=[^&]*/, is = /^(.*?):[ \t]*([^\r\n]*)$/mg, os = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ss = /^(?:GET|HEAD)$/, as = /^\/\//, no = {}, ai = {}, io = "*/".concat("*"), li = ne.createElement("a");
    li.href = _n.href;
    function oo(t) {
      return function(o, a) {
        typeof o != "string" && (a = o, o = "*");
        var r, f = 0, _ = o.toLowerCase().match(pe) || [];
        if (G(a))
          for (; r = _[f++]; )
            r[0] === "+" ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(a)) : (t[r] = t[r] || []).push(a);
      };
    }
    function so(t, o, a, r) {
      var f = {}, _ = t === ai;
      function b(O) {
        var T;
        return f[O] = !0, c.each(t[O] || [], function(R, U) {
          var Y = U(o, a, r);
          if (typeof Y == "string" && !_ && !f[Y])
            return o.dataTypes.unshift(Y), b(Y), !1;
          if (_)
            return !(T = Y);
        }), T;
      }
      return b(o.dataTypes[0]) || !f["*"] && b("*");
    }
    function ri(t, o) {
      var a, r, f = c.ajaxSettings.flatOptions || {};
      for (a in o)
        o[a] !== void 0 && ((f[a] ? t : r || (r = {}))[a] = o[a]);
      return r && c.extend(!0, t, r), t;
    }
    function ls(t, o, a) {
      for (var r, f, _, b, O = t.contents, T = t.dataTypes; T[0] === "*"; )
        T.shift(), r === void 0 && (r = t.mimeType || o.getResponseHeader("Content-Type"));
      if (r) {
        for (f in O)
          if (O[f] && O[f].test(r)) {
            T.unshift(f);
            break;
          }
      }
      if (T[0] in a)
        _ = T[0];
      else {
        for (f in a) {
          if (!T[0] || t.converters[f + " " + T[0]]) {
            _ = f;
            break;
          }
          b || (b = f);
        }
        _ = _ || b;
      }
      if (_)
        return _ !== T[0] && T.unshift(_), a[_];
    }
    function rs(t, o, a, r) {
      var f, _, b, O, T, R = {}, U = t.dataTypes.slice();
      if (U[1])
        for (b in t.converters)
          R[b.toLowerCase()] = t.converters[b];
      for (_ = U.shift(); _; )
        if (t.responseFields[_] && (a[t.responseFields[_]] = o), !T && r && t.dataFilter && (o = t.dataFilter(o, t.dataType)), T = _, _ = U.shift(), _) {
          if (_ === "*")
            _ = T;
          else if (T !== "*" && T !== _) {
            if (b = R[T + " " + _] || R["* " + _], !b) {
              for (f in R)
                if (O = f.split(" "), O[1] === _ && (b = R[T + " " + O[0]] || R["* " + O[0]], b)) {
                  b === !0 ? b = R[f] : R[f] !== !0 && (_ = O[0], U.unshift(O[1]));
                  break;
                }
            }
            if (b !== !0)
              if (b && t.throws)
                o = b(o);
              else
                try {
                  o = b(o);
                } catch (Y) {
                  return {
                    state: "parsererror",
                    error: b ? Y : "No conversion from " + T + " to " + _
                  };
                }
          }
        }
      return { state: "success", data: o };
    }
    c.extend({
      // Counter for holding the number of active queries
      active: 0,
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _n.href,
        type: "GET",
        isLocal: os.test(_n.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        /*
        timeout: 0,
        data: null,
        dataType: null,
        username: null,
        password: null,
        cache: null,
        throws: false,
        traditional: false,
        headers: {},
        */
        accepts: {
          "*": io,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {
          // Convert anything to text
          "* text": String,
          // Text to html (true = no transformation)
          "text html": !0,
          // Evaluate text as a json expression
          "text json": JSON.parse,
          // Parse text as xml
          "text xml": c.parseXML
        },
        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      // Creates a full fledged settings object into target
      // with both ajaxSettings and settings fields.
      // If target is omitted, writes into ajaxSettings.
      ajaxSetup: function(t, o) {
        return o ? (
          // Building a settings object
          ri(ri(t, c.ajaxSettings), o)
        ) : (
          // Extending ajaxSettings
          ri(c.ajaxSettings, t)
        );
      },
      ajaxPrefilter: oo(no),
      ajaxTransport: oo(ai),
      // Main method
      ajax: function(t, o) {
        typeof t == "object" && (o = t, t = void 0), o = o || {};
        var a, r, f, _, b, O, T, R, U, Y, k = c.ajaxSetup({}, o), B = k.context || k, fe = k.context && (B.nodeType || B.jquery) ? c(B) : c.event, Oe = c.Deferred(), de = c.Callbacks("once memory"), Ke = k.statusCode || {}, Xe = {}, dt = {}, je = "canceled", Te = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function(xe) {
            var Ge;
            if (T) {
              if (!_)
                for (_ = {}; Ge = is.exec(f); )
                  _[Ge[1].toLowerCase() + " "] = (_[Ge[1].toLowerCase() + " "] || []).concat(Ge[2]);
              Ge = _[xe.toLowerCase() + " "];
            }
            return Ge == null ? null : Ge.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function() {
            return T ? f : null;
          },
          // Caches the header
          setRequestHeader: function(xe, Ge) {
            return T == null && (xe = dt[xe.toLowerCase()] = dt[xe.toLowerCase()] || xe, Xe[xe] = Ge), this;
          },
          // Overrides response content-type header
          overrideMimeType: function(xe) {
            return T == null && (k.mimeType = xe), this;
          },
          // Status-dependent callbacks
          statusCode: function(xe) {
            var Ge;
            if (xe)
              if (T)
                Te.always(xe[Te.status]);
              else
                for (Ge in xe)
                  Ke[Ge] = [Ke[Ge], xe[Ge]];
            return this;
          },
          // Cancel the request
          abort: function(xe) {
            var Ge = xe || je;
            return a && a.abort(Ge), lt(0, Ge), this;
          }
        };
        if (Oe.promise(Te), k.url = ((t || k.url || _n.href) + "").replace(as, _n.protocol + "//"), k.type = o.method || o.type || k.method || k.type, k.dataTypes = (k.dataType || "*").toLowerCase().match(pe) || [""], k.crossDomain == null) {
          O = ne.createElement("a");
          try {
            O.href = k.url, O.href = O.href, k.crossDomain = li.protocol + "//" + li.host != O.protocol + "//" + O.host;
          } catch {
            k.crossDomain = !0;
          }
        }
        if (k.data && k.processData && typeof k.data != "string" && (k.data = c.param(k.data, k.traditional)), so(no, k, o, Te), T)
          return Te;
        R = c.event && k.global, R && c.active++ === 0 && c.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ss.test(k.type), r = k.url.replace(ts, ""), k.hasContent ? k.data && k.processData && (k.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (k.data = k.data.replace(es, "+")) : (Y = k.url.slice(r.length), k.data && (k.processData || typeof k.data == "string") && (r += (oi.test(r) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (r = r.replace(ns, "$1"), Y = (oi.test(r) ? "&" : "?") + "_=" + eo.guid++ + Y), k.url = r + Y), k.ifModified && (c.lastModified[r] && Te.setRequestHeader("If-Modified-Since", c.lastModified[r]), c.etag[r] && Te.setRequestHeader("If-None-Match", c.etag[r])), (k.data && k.hasContent && k.contentType !== !1 || o.contentType) && Te.setRequestHeader("Content-Type", k.contentType), Te.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + (k.dataTypes[0] !== "*" ? ", " + io + "; q=0.01" : "") : k.accepts["*"]
        );
        for (U in k.headers)
          Te.setRequestHeader(U, k.headers[U]);
        if (k.beforeSend && (k.beforeSend.call(B, Te, k) === !1 || T))
          return Te.abort();
        if (je = "abort", de.add(k.complete), Te.done(k.success), Te.fail(k.error), a = so(ai, k, o, Te), !a)
          lt(-1, "No Transport");
        else {
          if (Te.readyState = 1, R && fe.trigger("ajaxSend", [Te, k]), T)
            return Te;
          k.async && k.timeout > 0 && (b = i.setTimeout(function() {
            Te.abort("timeout");
          }, k.timeout));
          try {
            T = !1, a.send(Xe, lt);
          } catch (xe) {
            if (T)
              throw xe;
            lt(-1, xe);
          }
        }
        function lt(xe, Ge, bn, xn) {
          var ft, zt, Gt, rt, jt, Et = Ge;
          T || (T = !0, b && i.clearTimeout(b), a = void 0, f = xn || "", Te.readyState = xe > 0 ? 4 : 0, ft = xe >= 200 && xe < 300 || xe === 304, bn && (rt = ls(k, Te, bn)), !ft && c.inArray("script", k.dataTypes) > -1 && c.inArray("json", k.dataTypes) < 0 && (k.converters["text script"] = function() {
          }), rt = rs(k, rt, Te, ft), ft ? (k.ifModified && (jt = Te.getResponseHeader("Last-Modified"), jt && (c.lastModified[r] = jt), jt = Te.getResponseHeader("etag"), jt && (c.etag[r] = jt)), xe === 204 || k.type === "HEAD" ? Et = "nocontent" : xe === 304 ? Et = "notmodified" : (Et = rt.state, zt = rt.data, Gt = rt.error, ft = !Gt)) : (Gt = Et, (xe || !Et) && (Et = "error", xe < 0 && (xe = 0))), Te.status = xe, Te.statusText = (Ge || Et) + "", ft ? Oe.resolveWith(B, [zt, Et, Te]) : Oe.rejectWith(B, [Te, Et, Gt]), Te.statusCode(Ke), Ke = void 0, R && fe.trigger(
            ft ? "ajaxSuccess" : "ajaxError",
            [Te, k, ft ? zt : Gt]
          ), de.fireWith(B, [Te, Et]), R && (fe.trigger("ajaxComplete", [Te, k]), --c.active || c.event.trigger("ajaxStop")));
        }
        return Te;
      },
      getJSON: function(t, o, a) {
        return c.get(t, o, a, "json");
      },
      getScript: function(t, o) {
        return c.get(t, void 0, o, "script");
      }
    }), c.each(["get", "post"], function(t, o) {
      c[o] = function(a, r, f, _) {
        return G(r) && (_ = _ || f, f = r, r = void 0), c.ajax(c.extend({
          url: a,
          type: o,
          dataType: _,
          data: r,
          success: f
        }, c.isPlainObject(a) && a));
      };
    }), c.ajaxPrefilter(function(t) {
      var o;
      for (o in t.headers)
        o.toLowerCase() === "content-type" && (t.contentType = t.headers[o] || "");
    }), c._evalUrl = function(t, o, a) {
      return c.ajax({
        url: t,
        // Make this explicit, since user can override this through ajaxSetup (trac-11264)
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        // Only evaluate the response if it is successful (gh-4126)
        // dataFilter is not invoked for failure responses, so using it instead
        // of the default converter is kludgy but it works.
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(r) {
          c.globalEval(r, o, a);
        }
      });
    }, c.fn.extend({
      wrapAll: function(t) {
        var o;
        return this[0] && (G(t) && (t = t.call(this[0])), o = c(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && o.insertBefore(this[0]), o.map(function() {
          for (var a = this; a.firstElementChild; )
            a = a.firstElementChild;
          return a;
        }).append(this)), this;
      },
      wrapInner: function(t) {
        return G(t) ? this.each(function(o) {
          c(this).wrapInner(t.call(this, o));
        }) : this.each(function() {
          var o = c(this), a = o.contents();
          a.length ? a.wrapAll(t) : o.append(t);
        });
      },
      wrap: function(t) {
        var o = G(t);
        return this.each(function(a) {
          c(this).wrapAll(o ? t.call(this, a) : t);
        });
      },
      unwrap: function(t) {
        return this.parent(t).not("body").each(function() {
          c(this).replaceWith(this.childNodes);
        }), this;
      }
    }), c.expr.pseudos.hidden = function(t) {
      return !c.expr.pseudos.visible(t);
    }, c.expr.pseudos.visible = function(t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }, c.ajaxSettings.xhr = function() {
      try {
        return new i.XMLHttpRequest();
      } catch {
      }
    };
    var cs = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // trac-1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    }, hn = c.ajaxSettings.xhr();
    ue.cors = !!hn && "withCredentials" in hn, ue.ajax = hn = !!hn, c.ajaxTransport(function(t) {
      var o, a;
      if (ue.cors || hn && !t.crossDomain)
        return {
          send: function(r, f) {
            var _, b = t.xhr();
            if (b.open(
              t.type,
              t.url,
              t.async,
              t.username,
              t.password
            ), t.xhrFields)
              for (_ in t.xhrFields)
                b[_] = t.xhrFields[_];
            t.mimeType && b.overrideMimeType && b.overrideMimeType(t.mimeType), !t.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
            for (_ in r)
              b.setRequestHeader(_, r[_]);
            o = function(O) {
              return function() {
                o && (o = a = b.onload = b.onerror = b.onabort = b.ontimeout = b.onreadystatechange = null, O === "abort" ? b.abort() : O === "error" ? typeof b.status != "number" ? f(0, "error") : f(
                  // File: protocol always yields status 0; see trac-8605, trac-14207
                  b.status,
                  b.statusText
                ) : f(
                  cs[b.status] || b.status,
                  b.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (b.responseType || "text") !== "text" || typeof b.responseText != "string" ? { binary: b.response } : { text: b.responseText },
                  b.getAllResponseHeaders()
                ));
              };
            }, b.onload = o(), a = b.onerror = b.ontimeout = o("error"), b.onabort !== void 0 ? b.onabort = a : b.onreadystatechange = function() {
              b.readyState === 4 && i.setTimeout(function() {
                o && a();
              });
            }, o = o("abort");
            try {
              b.send(t.hasContent && t.data || null);
            } catch (O) {
              if (o)
                throw O;
            }
          },
          abort: function() {
            o && o();
          }
        };
    }), c.ajaxPrefilter(function(t) {
      t.crossDomain && (t.contents.script = !1);
    }), c.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(t) {
          return c.globalEval(t), t;
        }
      }
    }), c.ajaxPrefilter("script", function(t) {
      t.cache === void 0 && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), c.ajaxTransport("script", function(t) {
      if (t.crossDomain || t.scriptAttrs) {
        var o, a;
        return {
          send: function(r, f) {
            o = c("<script>").attr(t.scriptAttrs || {}).prop({ charset: t.scriptCharset, src: t.url }).on("load error", a = function(_) {
              o.remove(), a = null, _ && f(_.type === "error" ? 404 : 200, _.type);
            }), ne.head.appendChild(o[0]);
          },
          abort: function() {
            a && a();
          }
        };
      }
    });
    var ao = [], ci = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var t = ao.pop() || c.expando + "_" + eo.guid++;
        return this[t] = !0, t;
      }
    }), c.ajaxPrefilter("json jsonp", function(t, o, a) {
      var r, f, _, b = t.jsonp !== !1 && (ci.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ci.test(t.data) && "data");
      if (b || t.dataTypes[0] === "jsonp")
        return r = t.jsonpCallback = G(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, b ? t[b] = t[b].replace(ci, "$1" + r) : t.jsonp !== !1 && (t.url += (oi.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
          return _ || c.error(r + " was not called"), _[0];
        }, t.dataTypes[0] = "json", f = i[r], i[r] = function() {
          _ = arguments;
        }, a.always(function() {
          f === void 0 ? c(i).removeProp(r) : i[r] = f, t[r] && (t.jsonpCallback = o.jsonpCallback, ao.push(r)), _ && G(f) && f(_[0]), _ = f = void 0;
        }), "script";
    }), ue.createHTMLDocument = function() {
      var t = ne.implementation.createHTMLDocument("").body;
      return t.innerHTML = "<form></form><form></form>", t.childNodes.length === 2;
    }(), c.parseHTML = function(t, o, a) {
      if (typeof t != "string")
        return [];
      typeof o == "boolean" && (a = o, o = !1);
      var r, f, _;
      return o || (ue.createHTMLDocument ? (o = ne.implementation.createHTMLDocument(""), r = o.createElement("base"), r.href = ne.location.href, o.head.appendChild(r)) : o = ne), f = re.exec(t), _ = !a && [], f ? [o.createElement(f[1])] : (f = Mi([t], o, _), _ && _.length && c(_).remove(), c.merge([], f.childNodes));
    }, c.fn.load = function(t, o, a) {
      var r, f, _, b = this, O = t.indexOf(" ");
      return O > -1 && (r = qt(t.slice(O)), t = t.slice(0, O)), G(o) ? (a = o, o = void 0) : o && typeof o == "object" && (f = "POST"), b.length > 0 && c.ajax({
        url: t,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: f || "GET",
        dataType: "html",
        data: o
      }).done(function(T) {
        _ = arguments, b.html(r ? (
          // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          c("<div>").append(c.parseHTML(T)).find(r)
        ) : (
          // Otherwise use the full result
          T
        ));
      }).always(a && function(T, R) {
        b.each(function() {
          a.apply(this, _ || [T.responseText, R, T]);
        });
      }), this;
    }, c.expr.pseudos.animated = function(t) {
      return c.grep(c.timers, function(o) {
        return t === o.elem;
      }).length;
    }, c.offset = {
      setOffset: function(t, o, a) {
        var r, f, _, b, O, T, R, U = c.css(t, "position"), Y = c(t), k = {};
        U === "static" && (t.style.position = "relative"), O = Y.offset(), _ = c.css(t, "top"), T = c.css(t, "left"), R = (U === "absolute" || U === "fixed") && (_ + T).indexOf("auto") > -1, R ? (r = Y.position(), b = r.top, f = r.left) : (b = parseFloat(_) || 0, f = parseFloat(T) || 0), G(o) && (o = o.call(t, a, c.extend({}, O))), o.top != null && (k.top = o.top - O.top + b), o.left != null && (k.left = o.left - O.left + f), "using" in o ? o.using.call(t, k) : Y.css(k);
      }
    }, c.fn.extend({
      // offset() relates an element's border box to the document origin
      offset: function(t) {
        if (arguments.length)
          return t === void 0 ? this : this.each(function(f) {
            c.offset.setOffset(this, t, f);
          });
        var o, a, r = this[0];
        if (r)
          return r.getClientRects().length ? (o = r.getBoundingClientRect(), a = r.ownerDocument.defaultView, {
            top: o.top + a.pageYOffset,
            left: o.left + a.pageXOffset
          }) : { top: 0, left: 0 };
      },
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
        if (this[0]) {
          var t, o, a, r = this[0], f = { top: 0, left: 0 };
          if (c.css(r, "position") === "fixed")
            o = r.getBoundingClientRect();
          else {
            for (o = this.offset(), a = r.ownerDocument, t = r.offsetParent || a.documentElement; t && (t === a.body || t === a.documentElement) && c.css(t, "position") === "static"; )
              t = t.parentNode;
            t && t !== r && t.nodeType === 1 && (f = c(t).offset(), f.top += c.css(t, "borderTopWidth", !0), f.left += c.css(t, "borderLeftWidth", !0));
          }
          return {
            top: o.top - f.top - c.css(r, "marginTop", !0),
            left: o.left - f.left - c.css(r, "marginLeft", !0)
          };
        }
      },
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function() {
        return this.map(function() {
          for (var t = this.offsetParent; t && c.css(t, "position") === "static"; )
            t = t.offsetParent;
          return t || Ft;
        });
      }
    }), c.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, o) {
      var a = o === "pageYOffset";
      c.fn[t] = function(r) {
        return nt(this, function(f, _, b) {
          var O;
          if (Ee(f) ? O = f : f.nodeType === 9 && (O = f.defaultView), b === void 0)
            return O ? O[o] : f[_];
          O ? O.scrollTo(
            a ? O.pageXOffset : b,
            a ? b : O.pageYOffset
          ) : f[_] = b;
        }, t, r, arguments.length);
      };
    }), c.each(["top", "left"], function(t, o) {
      c.cssHooks[o] = Fi(
        ue.pixelPosition,
        function(a, r) {
          if (r)
            return r = fn(a, o), Qn.test(r) ? c(a).position()[o] + "px" : r;
        }
      );
    }), c.each({ Height: "height", Width: "width" }, function(t, o) {
      c.each({
        padding: "inner" + t,
        content: o,
        "": "outer" + t
      }, function(a, r) {
        c.fn[r] = function(f, _) {
          var b = arguments.length && (a || typeof f != "boolean"), O = a || (f === !0 || _ === !0 ? "margin" : "border");
          return nt(this, function(T, R, U) {
            var Y;
            return Ee(T) ? r.indexOf("outer") === 0 ? T["inner" + t] : T.document.documentElement["client" + t] : T.nodeType === 9 ? (Y = T.documentElement, Math.max(
              T.body["scroll" + t],
              Y["scroll" + t],
              T.body["offset" + t],
              Y["offset" + t],
              Y["client" + t]
            )) : U === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              c.css(T, R, O)
            ) : (
              // Set width or height on the element
              c.style(T, R, U, O)
            );
          }, o, b ? f : void 0, b);
        };
      });
    }), c.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(t, o) {
      c.fn[o] = function(a) {
        return this.on(o, a);
      };
    }), c.fn.extend({
      bind: function(t, o, a) {
        return this.on(t, null, o, a);
      },
      unbind: function(t, o) {
        return this.off(t, null, o);
      },
      delegate: function(t, o, a, r) {
        return this.on(o, t, a, r);
      },
      undelegate: function(t, o, a) {
        return arguments.length === 1 ? this.off(t, "**") : this.off(o, t || "**", a);
      },
      hover: function(t, o) {
        return this.mouseenter(t).mouseleave(o || t);
      }
    }), c.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(t, o) {
        c.fn[o] = function(a, r) {
          return arguments.length > 0 ? this.on(o, null, a, r) : this.trigger(o);
        };
      }
    );
    var us = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    c.proxy = function(t, o) {
      var a, r, f;
      if (typeof o == "string" && (a = t[o], o = t, t = a), !!G(t))
        return r = d.call(arguments, 2), f = function() {
          return t.apply(o || this, r.concat(d.call(arguments)));
        }, f.guid = t.guid = t.guid || c.guid++, f;
    }, c.holdReady = function(t) {
      t ? c.readyWait++ : c.ready(!0);
    }, c.isArray = Array.isArray, c.parseJSON = JSON.parse, c.nodeName = oe, c.isFunction = G, c.isWindow = Ee, c.camelCase = xt, c.type = Re, c.now = Date.now, c.isNumeric = function(t) {
      var o = c.type(t);
      return (o === "number" || o === "string") && // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(t - parseFloat(t));
    }, c.trim = function(t) {
      return t == null ? "" : (t + "").replace(us, "$1");
    };
    var ds = i.jQuery, fs = i.$;
    return c.noConflict = function(t) {
      return i.$ === c && (i.$ = fs), t && i.jQuery === c && (i.jQuery = ds), c;
    }, typeof s > "u" && (i.jQuery = i.$ = c), c;
  });
})(Ls);
const p = Si;
function Hn(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var j = {}, Ds = {
  get exports() {
    return j;
  },
  set exports(e) {
    j = e;
  }
};
(function(e, i) {
  (function(s) {
    e.exports = s();
  })(function() {
    return function s(u, l, d) {
      function h(m, W) {
        if (!l[m]) {
          if (!u[m]) {
            var D = typeof Hn == "function" && Hn;
            if (!W && D)
              return D(m, !0);
            if (E)
              return E(m, !0);
            throw (W = new Error("Cannot find module '" + m + "'")).code = "MODULE_NOT_FOUND", W;
          }
          D = l[m] = { exports: {} }, u[m][0].call(D.exports, function(he) {
            return h(u[m][1][he] || he);
          }, D, D.exports, s, u, l, d);
        }
        return l[m].exports;
      }
      for (var E = typeof Hn == "function" && Hn, C = 0; C < d.length; C++)
        h(d[C]);
      return h;
    }({ 1: [function(s, u, l) {
      function d(ee, oe) {
        return function(re) {
          if (Array.isArray(re))
            return re;
        }(ee) || function(re, Ye) {
          var Ze = re == null ? null : typeof Symbol < "u" && re[Symbol.iterator] || re["@@iterator"];
          if (Ze != null) {
            var mt, Ot, Mt = [], vt = !0, yt = !1;
            try {
              for (Ze = Ze.call(re); !(vt = (mt = Ze.next()).done) && (Mt.push(mt.value), !Ye || Mt.length !== Ye); vt = !0)
                ;
            } catch (pe) {
              yt = !0, Ot = pe;
            } finally {
              try {
                vt || Ze.return == null || Ze.return();
              } finally {
                if (yt)
                  throw Ot;
              }
            }
            return Mt;
          }
        }(ee, oe) || E(ee, oe) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function h(ee) {
        return function(oe) {
          if (Array.isArray(oe))
            return C(oe);
        }(ee) || function(oe) {
          if (typeof Symbol < "u" && oe[Symbol.iterator] != null || oe["@@iterator"] != null)
            return Array.from(oe);
        }(ee) || E(ee) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function E(ee, oe) {
        var re;
        if (ee)
          return typeof ee == "string" ? C(ee, oe) : (re = (re = Object.prototype.toString.call(ee).slice(8, -1)) === "Object" && ee.constructor ? ee.constructor.name : re) === "Map" || re === "Set" ? Array.from(ee) : re === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re) ? C(ee, oe) : void 0;
      }
      function C(ee, oe) {
        (oe == null || oe > ee.length) && (oe = ee.length);
        for (var re = 0, Ye = new Array(oe); re < oe; re++)
          Ye[re] = ee[re];
        return Ye;
      }
      Object.defineProperty(l, "__esModule", { value: !0 }), l.ModalDialogException = W, l.showCancelButton = l.showActionButton = l.show = l.reset = l.markCancelButtonAsIdle = l.markCancelButtonAsBusy = l.markActionButtonAsIdle = l.markActionButtonAsBusy = l.isVisible = l.isCancelButtonVisible = l.isCancelButtonHidden = l.isCancelButtonBusy = l.isActionButtonVisible = l.isActionButtonHidden = l.isActionButtonBusy = l.hideCancelButton = l.hideActionButton = l.getValues = l.focusError = l.close = l.cancel = l.cacheFormElements = l.action = l.THEME = void 0;
      var m = { lastFocus: null, container: null, dialog: null, dialogContent: null, dialogButtons: null, cancelButton: null, actionButton: null, inputElements: null, selectElements: null, textAreaElements: null, namedFormElements: null };
      function W() {
        var ee = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : null;
        this.message = ee ?? "Unknown exception", this.name = "ModalDialogException";
      }
      l.THEME = { small: "basicModal__small", xclose: "basicModal__xclose" };
      function D() {
        m.inputElements = m.dialog.querySelectorAll("div.basicModal__content input"), m.selectElements = m.dialog.querySelectorAll("div.basicModal__content select"), m.textAreaElements = m.dialog.querySelectorAll("div.basicModal__content textarea"), m.namedFormElements = {}, m.inputElements.forEach(function(ee) {
          ee.name && (m.namedFormElements[ee.name] = ee);
        }), m.selectElements.forEach(function(ee) {
          ee.name && (m.namedFormElements[ee.name] = ee);
        }), m.textAreaElements.forEach(function(ee) {
          ee.name && (m.namedFormElements[ee.name] = ee);
        });
      }
      l.cacheFormElements = D;
      var he = function() {
        var ee = {};
        return m.inputElements.forEach(function(oe) {
          if (oe.name)
            switch (oe.type) {
              case "checkbox":
              case "radio":
                ee[oe.name] = oe.checked;
                break;
              case "number":
              case "range":
                ee[oe.name] = parseInt(oe.value, 10);
                break;
              case "file":
                ee[oe.name] = oe.files;
                break;
              default:
                switch (oe.inputMode) {
                  case "numeric":
                    ee[oe.name] = parseInt(oe.value, 10);
                    break;
                  case "decimal":
                    ee[oe.name] = parseFloat(oe.value);
                    break;
                  default:
                    ee[oe.name] = oe.value;
                }
            }
        }), m.selectElements.forEach(function(oe) {
          oe.name && (ee[oe.name] = oe.selectedIndex !== -1 ? oe.options[oe.selectedIndex].value : null);
        }), m.textAreaElements.forEach(function(oe) {
          oe.name && (ee[oe.name] = oe.value);
        }), ee;
      };
      function we(ee) {
        (ee.target instanceof HTMLInputElement || ee.target instanceof HTMLSelectElement || ee.target instanceof HTMLTextAreaElement) && ee.target.classList.remove("error");
      }
      l.getValues = he, l.show = function ee(oe) {
        var re = oe;
        if (!re || Object.keys(re).length === 0)
          throw new W("Missing or empty modal configuration object");
        if (re.body || (re.body = ""), re.classList || (re.classList = []), re.closable !== !1 && (re.closable = !0), !re.buttons)
          throw new W("basicModal requires at least one button");
        if (re.buttons.action && (re.buttons.action.classList || (re.buttons.action.classList = []), re.buttons.action.attributes || (re.buttons.action.attributes = {}), re.buttons.action.title || (re.buttons.action.title = "OK"), typeof re.buttons.action.fn != "function"))
          throw new W("Missing callback function for action button");
        if (re.buttons.cancel && (re.buttons.cancel.classList || (re.buttons.cancel.classList = []), re.buttons.cancel.attributes || (re.buttons.cancel.attributes = {}), re.buttons.cancel.title || (re.buttons.cancel.title = "Cancel"), typeof re.buttons.cancel.fn != "function"))
          throw new W("Missing callback function for cancel button");
        if (Ne())
          He(!0, function() {
            return ee(oe);
          });
        else {
          m.lastFocus = document.activeElement;
          var Ye, Ze, re = oe;
          if (m.container = document.createElement("div"), m.container.classList.add("basicModalContainer", "basicModalContainer--fadeIn"), m.container.dataset.closable = re.closable ? "true" : "false", m.dialog = m.container.appendChild(document.createElement("div")), m.dialog.classList.add("basicModal", "basicModal--fadeIn"), (Ye = m.dialog.classList).add.apply(Ye, h(re.classList)), m.dialog.setAttribute("role", "dialog"), m.dialogContent = m.dialog.appendChild(document.createElement("div")), m.dialogContent.classList.add("basicModal__content"), m.dialogContent.innerHTML = re.body, m.dialogButtons = m.dialog.appendChild(document.createElement("div")), m.dialogButtons.classList.add("basicModal__buttons"), m.cancelButton = null, re.buttons.cancel) {
            re.buttons.cancel.classList.includes("basicModal__xclose") ? (m.cancelButton = m.dialogButtons.appendChild(document.createElement("div")), m.cancelButton.setAttribute("aria-label", "close"), m.cancelButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M405 136.798l-29.798-29.798-119.202 119.202-119.202-119.202-29.798 29.798 119.202 119.202-119.202 119.202 29.798 29.798 119.202-119.202 119.202 119.202 29.798-29.798-119.202-119.202z"/></svg>') : (m.cancelButton = m.dialogButtons.appendChild(document.createElement("a")), m.cancelButton.textContent = re.buttons.cancel.title), m.cancelButton.id = "basicModal__cancel", m.cancelButton.classList.add("basicModal__button"), (Ye = m.cancelButton.classList).add.apply(Ye, h(re.buttons.cancel.classList));
            for (var mt = 0, Ot = Object.entries(re.buttons.cancel.attributes); mt < Ot.length; mt++) {
              var vt = d(Ot[mt], 2), Mt = vt[0], vt = vt[1];
              m.cancelButton.setAttribute(Mt, vt);
            }
          }
          if (m.actionButton = null, re.buttons.action) {
            m.actionButton = m.dialogButtons.appendChild(document.createElement("a")), m.actionButton.textContent = re.buttons.action.title, m.actionButton.id = "basicModal__action", m.actionButton.classList.add("basicModal__button"), (Ye = m.actionButton.classList).add.apply(Ye, h(re.buttons.action.classList));
            for (var yt = 0, pe = Object.entries(re.buttons.action.attributes); yt < pe.length; yt++) {
              var De = d(pe[yt], 2), Pe = De[0], De = De[1];
              m.actionButton.setAttribute(Pe, De);
            }
          }
          D(), (Ze = oe).buttons.cancel && m.cancelButton && m.cancelButton.addEventListener("click", function() {
            J() || (se(), Ze.buttons.cancel.fn(he()));
          }), Ze.buttons.action && m.actionButton && m.actionButton.addEventListener("click", function() {
            Re() || (Rt(), Ze.buttons.action.fn(he()));
          }), m.dialog.addEventListener("input", we), m.dialog.addEventListener("blur", we), m.dialog.addEventListener("change", we), oe.readyCB && oe.readyCB(m.namedFormElements, m.dialogContent), document.body.appendChild(m.container), m.inputElements.length !== 0 ? (m.inputElements.item(0).focus(), m.inputElements.item(0).select()) : m.textAreaElements.length !== 0 ? (m.textAreaElements.item(0).focus(), m.textAreaElements.item(0).select()) : m.selectElements.length !== 0 ? m.selectElements.item(0).focus() : m.actionButton ? m.actionButton.focus() : m.cancelButton && m.cancelButton.focus();
        }
      };
      function ue() {
        return m.actionButton && m.dialogButtons.contains(m.actionButton);
      }
      function G() {
        return m.actionButton && !m.dialogButtons.contains(m.actionButton);
      }
      function Ee() {
        return m.cancelButton && m.dialogButtons.contains(m.cancelButton);
      }
      function ne() {
        return m.cancelButton && !m.dialogButtons.contains(m.cancelButton);
      }
      l.focusError = function(ee) {
        Ne() && (Be(), (ee = m.namedFormElements[ee] || null) && (ee.classList.add("error"), ee.focus(), (ee instanceof HTMLInputElement || ee instanceof HTMLTextAreaElement) && ee.select(), m.dialog.classList.remove("basicModal--fadeIn", "basicModal--shake"), setTimeout(function() {
          return m.dialog.classList.add("basicModal--shake");
        }, 1)));
      };
      var Ne = function() {
        return m.container !== null;
      }, Be = (l.isVisible = Ne, l.action = function() {
        return !!m.actionButton && (m.actionButton.click(), !0);
      }, l.cancel = function() {
        return !!m.cancelButton && (m.cancelButton.click(), !0);
      }, function() {
        Ne() && (c(), Ce(), m.inputElements.forEach(function(ee) {
          return ee.classList.remove("error");
        }), m.textAreaElements.forEach(function(ee) {
          return ee.classList.remove("error");
        }), m.selectElements.forEach(function(ee) {
          return ee.classList.remove("error");
        }));
      }), Re = (l.reset = Be, function() {
        return !!m.actionButton && m.actionButton.classList.contains("basicModal__button--busy");
      }), Rt = (l.isActionButtonBusy = Re, function() {
        m.actionButton && m.actionButton.classList.add("basicModal__button--busy");
      }), c = (l.markActionButtonAsBusy = Rt, function() {
        m.actionButton && m.actionButton.classList.remove("basicModal__button--busy");
      }), J = (l.markActionButtonAsIdle = c, l.isActionButtonVisible = ue, l.isActionButtonHidden = G, l.hideActionButton = function() {
        ue() && m.dialogButtons.removeChild(m.actionButton);
      }, l.showActionButton = function() {
        G() && m.dialogButtons.appendChild(m.actionButton);
      }, function() {
        return !!m.cancelButton && m.cancelButton.classList.contains("basicModal__button--busy");
      }), se = (l.isCancelButtonBusy = J, function() {
        m.cancelButton && m.cancelButton.classList.add("basicModal__button--busy");
      }), Ce = (l.markCancelButtonAsBusy = se, function() {
        m.cancelButton && m.cancelButton.classList.remove("basicModal__button--busy");
      }), He = (l.markCancelButtonAsIdle = Ce, l.isCancelButtonVisible = Ee, l.isCancelButtonHidden = ne, l.hideCancelButton = function() {
        Ee() && m.dialogButtons.removeChild(m.cancelButton);
      }, l.showCancelButton = function() {
        ne() && (ue() ? m.dialogButtons.insertBefore(m.cancelButton, m.actionButton) : m.dialogButtons.appendChild(m.cancelButton));
      }, function() {
        var ee = 0 < arguments.length && arguments[0] !== void 0 && arguments[0], oe = 1 < arguments.length ? arguments[1] : void 0;
        Ne() ? m.container.dataset.closable === "false" && !ee || (ee = m.container.classList.replace("basicModalContainer--fadeIn", "basicModalContainer--fadeOut"), setTimeout(function() {
          m.container.remove(), m.container = null, m.dialog = null, m.actionButton = null, m.cancelButton = null, m.inputElements = null, m.selectElements = null, (m.textAreaElements = null) !== m.lastFocus && (m.lastFocus.focus(), m.lastFocus = null), oe && oe();
        }, ee ? 300 : 0)) : oe && setTimeout(oe, 0);
      });
      l.close = He;
    }, {}] }, {}, [1])(1);
  });
})(Ds);
const Z = {
  /** @type {?string} */
  status: null,
  /** @type {jQuery} */
  _dom: p("#lychee_loading")
};
Z.dom = function(e) {
  return e == null || e === "" ? Z._dom : Z._dom.find(e);
};
Z.show = function(e = null, i = null) {
  if (e === "error") {
    Z.status = "error", i && (i = i.replace("<br>", "")), i || (i = n.locale.ERROR_TEXT), Z.dom().removeClass().html("<h1>" + n.locale.ERROR + `: <span>${i}</span></h1>`).addClass(e), clearTimeout(Z._timeout), Z._timeout = setTimeout(() => Z.hide(!0), 3e3);
    return;
  }
  if (e === "success") {
    Z.status = "success", i && (i = i.replace("<br>", "")), i || (i = n.locale.ERROR_TEXT), Z.dom().removeClass().html("<h1>" + n.locale.SUCCESS + `: <span>${i}</span></h1>`).addClass(e), clearTimeout(Z._timeout), Z._timeout = setTimeout(() => Z.hide(!0), 2e3);
    return;
  }
  Z.status === null && (Z.status = n.locale.LOADING, clearTimeout(Z._timeout), Z._timeout = setTimeout(() => {
    Z.dom().removeClass().html("").addClass("loading");
  }, 1e3));
};
Z.hide = function(e) {
  (Z.status !== "error" && Z.status !== "success" && Z.status != null || e) && (Z.status = null, p(".basicModalContainer").removeClass("basicModalContainer--error"), p(".basicModal").removeClass("basicModal--error"), clearTimeout(Z._timeout), setTimeout(() => Z.dom().removeClass(), 300));
};
const wn = {};
wn.getCSRFCookieValue = function() {
  const e = document.cookie.split(";").find((i) => /^\s*(X-)?[XC]SRF-TOKEN\s*=/.test(i));
  return e ? e.split("=")[1].trim().replace(/%3D/g, "") : null;
};
let K = {
  /**
   * Global, default error handler
   *
   * @type {?APIErrorCB}
   */
  onError: null
};
K.hasSessionExpired = function(e, i) {
  return e.status === 419 && !!i && i.exception.endsWith("SessionExpiredException") || e.status === 401 && !!i && i.exception.endsWith("UnauthenticatedException");
};
K.post = function(e, i, s = null, u = null, l = null) {
  Z.show();
  const d = (C) => {
    setTimeout(Z.hide, 100), s && s(C);
  }, h = (C) => {
    const m = C.responseJSON;
    if (l && l(C, i, m)) {
      setTimeout(Z.hide, 100);
      return;
    }
    K.onError(C, i, m);
  };
  let E = {
    type: "POST",
    url: "api/" + e,
    contentType: "application/json",
    data: JSON.stringify(i),
    dataType: "json",
    headers: {
      "X-XSRF-TOKEN": wn.getCSRFCookieValue()
    },
    success: d,
    error: h
  };
  u !== null && (E.xhrFields = {
    onprogress: u
  }), p.ajax(E);
};
K.getRawContent = function(e, i) {
  Z.show();
  const s = (l) => {
    setTimeout(Z.hide, 100), i(l);
  }, u = (l) => {
    K.onError(l, {}, null);
  };
  p.ajax({
    type: "GET",
    url: e,
    data: {},
    dataType: "text",
    headers: {
      "X-XSRF-TOKEN": wn.getCSRFCookieValue()
    },
    success: s,
    error: u
  });
};
const vo = "item", Ei = "separator", qn = function(e = "") {
  return document.querySelector(".basicContext " + e);
}, Is = function(e = {}) {
  return Object.keys(e).length === 0 === !0 && (e.type = Ei), e.type == null && (e.type = vo), e.class == null && (e.class = ""), e.visible !== !1 && (e.visible = !0), e.icon == null && (e.icon = null), e.title == null && (e.title = "Undefined"), e.disabled !== !0 && (e.disabled = !1), e.disabled === !0 && (e.class += " basicContext__item--disabled"), e.fn == null && e.type !== Ei && e.disabled === !1 ? (console.warn(`Missing fn for item '${e.title}'`), !1) : !0;
}, Rs = function(e, i) {
  let s = "", u = "";
  return Is(e) === !1 || e.visible === !1 ? "" : (e.num = i, e.icon !== null && (u = `<span class='basicContext__icon ${e.icon}'></span>`), e.type === vo ? s = `
			<tr class='basicContext__item ${e.class}'>
				<td class='basicContext__data' data-num='${e.num}'>${u}${e.title}</td>
			</tr>
				 ` : e.type === Ei && (s = `
			<tr class='basicContext__item basicContext__item--separator'></tr>
		`), s);
}, Ps = function(e) {
  let i = "";
  return i += `
		<div class='basicContextContainer'>
			<div class='basicContext'>
				<table>
					<tbody>
	`, e.forEach((s, u) => i += Rs(s, u)), i += `
					</tbody>
				</table>
			</div>
		</div>
	`, i;
}, xs = function(e = {}) {
  let i = {
    x: e.clientX,
    y: e.clientY
  };
  if (e.type === "touchend" && (i.x == null || i.y == null)) {
    let s = e.changedTouches;
    s != null && s.length > 0 && (i.x = s[0].clientX, i.y = s[0].clientY);
  }
  return (i.x == null || i.x < 0) && (i.x = 0), (i.y == null || i.y < 0) && (i.y = 0), i;
}, Ns = function(e, i) {
  let s = xs(e), u = s.x, l = s.y, d = document.querySelector(".basicContextContainer"), h = {
    width: d.offsetWidth,
    height: d.offsetHeight
  }, E = {
    width: i.offsetWidth,
    height: i.offsetHeight
  };
  u + E.width > h.width && (u = u - (u + E.width - h.width)), l + E.height > h.height && (l = l - (l + E.height - h.height)), E.height > h.height && (l = 0, i.classList.add("basicContext--scrollable"));
  let C = s.x - u, m = s.y - l;
  return { x: u, y: l, rx: C, ry: m };
}, Ms = function(e = {}) {
  return e.fn == null || e.visible === !1 || e.disabled === !0 ? !1 : (qn(`td[data-num='${e.num}']`).onclick = e.fn, qn(`td[data-num='${e.num}']`).oncontextmenu = e.fn, !0);
}, gt = function(e, i, s, u) {
  let l = Ps(e);
  document.body.insertAdjacentHTML("beforeend", l);
  let d = qn(), h = Ns(i, d);
  return d.style.left = `${h.x}px`, d.style.top = `${h.y}px`, d.style.transformOrigin = `${h.rx}px ${h.ry}px`, d.style.opacity = 1, s == null && (s = It), d.parentElement.onclick = s, d.parentElement.oncontextmenu = s, e.forEach(Ms), typeof i.preventDefault == "function" && i.preventDefault(), typeof i.stopPropagation == "function" && i.stopPropagation(), typeof u == "function" && u(), !0;
}, yo = function() {
  let e = qn();
  return !(e == null || e.length === 0);
}, It = function() {
  if (yo() === !1)
    return !1;
  let e = document.querySelector(".basicContextContainer");
  return e.parentElement.removeChild(e), !0;
}, V = {
  offset_for_header: 100,
  next_tab_index: 100
};
V.saveSettings = function(e) {
  if (!n.enable_tabindex)
    return;
  e.find("[tabindex]").each(
    /**
     * @param {number} i - the index
     * @param {Element} e - the HTML element
     * @this {Element} - identical to `e`
     */
    function(s, u) {
      const l = p(u).attr("tabindex");
      p(this).data("tabindex-saved", l);
    }
  );
};
V.restoreSettings = function(e) {
  if (!n.enable_tabindex)
    return;
  p(e).find("[tabindex]").each(
    /**
     * @param {number} i - the index
     * @param {Element} e - the HTML element
     * @this {Element} - identical to `e`
     */
    function(s, u) {
      const l = p(u).data("tabindex-saved");
      p(u).attr("tabindex", l);
    }
  );
};
V.makeUnfocusable = function(e, i = !1) {
  if (!n.enable_tabindex)
    return;
  e.find("[tabindex]").each(
    /**
     * @param {number} i - the index
     * @param {Element} e - the HTML element
     */
    function(u, l) {
      p(l).attr("tabindex", "-1"), i && p(l).is(":focus") && (p(l).data("tabindex-focus", !0), p(l).blur());
    }
  ), e.find("input").attr("disabled", "disabled");
};
V.makeFocusable = function(e, i = !1) {
  if (!n.enable_tabindex)
    return;
  e.find("[data-tabindex]").each(
    /**
     * @param {number} i
     * @param {Element} e
     */
    function(u, l) {
      p(l).attr("tabindex", p(l).data("tabindex")), i && p(l).data("tabindex-focus") && n.active_focus_on_page_load && (p(l).focus(), p(l).removeData("tabindex-focus"));
    }
  ), e.find("input").removeAttr("disabled");
};
V.get_next_tab_index = function() {
  return V.next_tab_index = V.next_tab_index + 1, V.next_tab_index - 1;
};
V.reset = function() {
  V.next_tab_index = V.offset_for_header;
};
const Me = Object.freeze({
  UNSORTED: "unsorted",
  STARRED: "starred",
  PUBLIC: "public",
  RECENT: "recent",
  ON_THIS_DAY: "on_this_day"
});
var Qe = {};
(function(e) {
  (function() {
    var i = {
      not_string: /[^s]/,
      not_bool: /[^t]/,
      not_type: /[^T]/,
      not_primitive: /[^v]/,
      number: /[diefg]/,
      numeric_arg: /[bcdiefguxX]/,
      json: /[j]/,
      not_json: /[^j]/,
      text: /^[^\x25]+/,
      modulo: /^\x25{2}/,
      placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
      key: /^([a-z_][a-z_\d]*)/i,
      key_access: /^\.([a-z_][a-z_\d]*)/i,
      index_access: /^\[(\d+)\]/,
      sign: /^[+-]/
    };
    function s(E) {
      return l(h(E), arguments);
    }
    function u(E, C) {
      return s.apply(null, [E].concat(C || []));
    }
    function l(E, C) {
      var m = 1, W = E.length, D, he = "", we, ue, G, Ee, ne, Ne, Be, Re;
      for (we = 0; we < W; we++)
        if (typeof E[we] == "string")
          he += E[we];
        else if (typeof E[we] == "object") {
          if (G = E[we], G.keys)
            for (D = C[m], ue = 0; ue < G.keys.length; ue++) {
              if (D == null)
                throw new Error(s('[sprintf] Cannot access property "%s" of undefined value "%s"', G.keys[ue], G.keys[ue - 1]));
              D = D[G.keys[ue]];
            }
          else
            G.param_no ? D = C[G.param_no] : D = C[m++];
          if (i.not_type.test(G.type) && i.not_primitive.test(G.type) && D instanceof Function && (D = D()), i.numeric_arg.test(G.type) && typeof D != "number" && isNaN(D))
            throw new TypeError(s("[sprintf] expecting number but found %T", D));
          switch (i.number.test(G.type) && (Be = D >= 0), G.type) {
            case "b":
              D = parseInt(D, 10).toString(2);
              break;
            case "c":
              D = String.fromCharCode(parseInt(D, 10));
              break;
            case "d":
            case "i":
              D = parseInt(D, 10);
              break;
            case "j":
              D = JSON.stringify(D, null, G.width ? parseInt(G.width) : 0);
              break;
            case "e":
              D = G.precision ? parseFloat(D).toExponential(G.precision) : parseFloat(D).toExponential();
              break;
            case "f":
              D = G.precision ? parseFloat(D).toFixed(G.precision) : parseFloat(D);
              break;
            case "g":
              D = G.precision ? String(Number(D.toPrecision(G.precision))) : parseFloat(D);
              break;
            case "o":
              D = (parseInt(D, 10) >>> 0).toString(8);
              break;
            case "s":
              D = String(D), D = G.precision ? D.substring(0, G.precision) : D;
              break;
            case "t":
              D = String(!!D), D = G.precision ? D.substring(0, G.precision) : D;
              break;
            case "T":
              D = Object.prototype.toString.call(D).slice(8, -1).toLowerCase(), D = G.precision ? D.substring(0, G.precision) : D;
              break;
            case "u":
              D = parseInt(D, 10) >>> 0;
              break;
            case "v":
              D = D.valueOf(), D = G.precision ? D.substring(0, G.precision) : D;
              break;
            case "x":
              D = (parseInt(D, 10) >>> 0).toString(16);
              break;
            case "X":
              D = (parseInt(D, 10) >>> 0).toString(16).toUpperCase();
              break;
          }
          i.json.test(G.type) ? he += D : (i.number.test(G.type) && (!Be || G.sign) ? (Re = Be ? "+" : "-", D = D.toString().replace(i.sign, "")) : Re = "", ne = G.pad_char ? G.pad_char === "0" ? "0" : G.pad_char.charAt(1) : " ", Ne = G.width - (Re + D).length, Ee = G.width && Ne > 0 ? ne.repeat(Ne) : "", he += G.align ? Re + D + Ee : ne === "0" ? Re + Ee + D : Ee + Re + D);
        }
      return he;
    }
    var d = /* @__PURE__ */ Object.create(null);
    function h(E) {
      if (d[E])
        return d[E];
      for (var C = E, m, W = [], D = 0; C; ) {
        if ((m = i.text.exec(C)) !== null)
          W.push(m[0]);
        else if ((m = i.modulo.exec(C)) !== null)
          W.push("%");
        else if ((m = i.placeholder.exec(C)) !== null) {
          if (m[2]) {
            D |= 1;
            var he = [], we = m[2], ue = [];
            if ((ue = i.key.exec(we)) !== null)
              for (he.push(ue[1]); (we = we.substring(ue[0].length)) !== ""; )
                if ((ue = i.key_access.exec(we)) !== null)
                  he.push(ue[1]);
                else if ((ue = i.index_access.exec(we)) !== null)
                  he.push(ue[1]);
                else
                  throw new SyntaxError("[sprintf] failed to parse named argument key");
            else
              throw new SyntaxError("[sprintf] failed to parse named argument key");
            m[2] = he;
          } else
            D |= 2;
          if (D === 3)
            throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
          W.push(
            {
              placeholder: m[0],
              param_no: m[1],
              keys: m[2],
              sign: m[3],
              pad_char: m[4],
              align: m[5],
              width: m[6],
              precision: m[7],
              type: m[8]
            }
          );
        } else
          throw new SyntaxError("[sprintf] unexpected placeholder");
        C = C.substring(m[0].length);
      }
      return d[E] = W;
    }
    e.sprintf = s, e.vsprintf = u, typeof window < "u" && (window.sprintf = s, window.vsprintf = u);
  })();
})(Qe);
const x = {};
x.iconic = function(e, i = "") {
  return n.html`<svg class='iconic ${i}'><use xlink:href='#${e}' /></svg>`;
};
x.divider = function(e) {
  return n.html`<div class='divider'><h1>$${e}</h1></div>`;
};
x.editIcon = function(e) {
  return n.html`<div id='${e}' class='edit'>${x.iconic("pencil")}</div>`;
};
x.multiselect = function(e, i) {
  return n.html`<div id='multiselect' style='top: ${e}px; left: ${i}px;'></div>`;
};
x.getAlbumThumb = function(e) {
  const i = e.thumb.type && e.thumb.type.indexOf("video") > -1, s = e.thumb.type && e.thumb.type.indexOf("raw") > -1, u = e.thumb.thumb, l = e.thumb.thumb2x;
  return u === "uploads/thumb/" && i ? `<span class="thumbimg"><img src='img/play-icon.png' alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false'></span>` : u === "uploads/thumb/" && s ? `<span class="thumbimg"><img src='img/placeholder.png' alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false'></span>` : `<span class="thumbimg${i ? " video" : ""}"><img class='lazyload' src='img/placeholder.png' data-src='${u}' ${l !== null ? "data-srcset='" + l + " 2x'" : ""} alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false'></span>`;
};
x.album = function(e, i = !1) {
  const s = n.locale.printMonthYear(e.created_at), u = n.locale.printMonthYear(e.min_taken_at), l = n.locale.printMonthYear(e.max_taken_at), d = !e.rights.can_edit || i || v.isSmartID(e.id) || e.is_tag_album;
  let h = s;
  switch (n.album_subtitle_type) {
    case "description":
      h = e.description ? n.escapeHTML(e.description) : "";
      break;
    case "takedate":
      if (u !== "" || l !== "") {
        h = u === l ? l : u + " - " + l, h = n.html`<span title='${n.locale.CAMERA_DATE}'>${x.iconic("camera-slr")}</span>$${h}`;
        break;
      }
    case "creation":
      break;
    case "oldstyle":
    default:
      n.sorting_albums && e.min_taken_at && e.max_taken_at && (n.sorting_albums.column === "max_taken_at" || n.sorting_albums.column === "min_taken_at") && (u !== "" && l !== "" ? h = u === l ? l : u + " - " + l : u !== "" && n.sorting_albums.column === "min_taken_at" ? h = u : l !== "" && n.sorting_albums.column === "max_taken_at" && (h = l));
  }
  let E = n.html`
			<div class='album ${i ? "disabled" : ""} ${e.policy.is_nsfw && n.nsfw_blur ? "blurred" : ""}'
				data-id='${e.id}'
				data-nsfw='${e.policy.is_nsfw ? "1" : "0"}'
				data-tabindex='${V.get_next_tab_index()}'
				draggable='${d ? "false" : "true"}'
				${d ? "" : `ondragstart='lychee.startDrag(event)'
				ondragover='lychee.overDrag(event)'
				ondragleave='lychee.leaveDrag(event)'
				ondragend='lychee.endDrag(event)'
				ondrop='lychee.finishDrag(event)'`}>
				  ${x.getAlbumThumb(e)}
				  ${x.getAlbumThumb(e)}
				  ${x.getAlbumThumb(e)}
				<div class='overlay'>
					<h1 title='$${e.title}'>$${e.title}</h1>
					<a>${h}</a>
				</div>
			`;
  if (e.rights.can_edit && !i) {
    let m = v.json && v.json.cover_id && e.thumb.id === v.json.cover_id;
    E += n.html`
				<div class='badges'>
					<a class='badge ${e.policy && e.policy.is_nsfw ? "badge--nsfw" : ""} icn-warning'>${x.iconic("warning")}</a>
					<a class='badge ${e.id === Me.STARRED ? "badge--star" : ""} icn-star'>${x.iconic("star")}</a>
					<a class='badge ${e.id === Me.RECENT ? "badge--visible badge--list" : ""}'>${x.iconic("clock")}</a>
					<a class='badge ${e.id === Me.ON_THIS_DAY ? "badge--tag badge--list" : ""}'>${x.iconic("calendar")}</a>
					<a class='badge ${e.id === Me.PUBLIC || e.policy && e.policy.is_public ? "badge--visible" : ""} ${e.policy && e.policy.is_link_required ? "badge--hidden" : "badge--not--hidden"} icn-share'>${x.iconic("eye")}</a>
					<a class='badge ${e.id === Me.UNSORTED ? "badge--visible" : ""}'>${x.iconic("list")}</a>
					<a class='badge ${e.policy && e.policy.is_password_required ? "badge--visible" : ""}'>${x.iconic("lock-unlocked")}</a>
					<a class='badge ${e.is_tag_album ? "badge--tag" : ""}'>${x.iconic("tag")}</a>
					<a class='badge ${m ? "badge--cover" : ""} icn-cover'>${x.iconic("folder-cover")}</a>
				</div>
				`;
  }
  let C = e.num_subalbums;
  switch (n.album_decoration) {
    case "none":
      break;
    case "photo":
      E += n.html`
				<div class='album_counters'>
					<div class='photos'>
						<a class='photos'>${x.iconic("puzzle-piece")}
						<span>${e.num_photos}</span>
						</a>
					</div>
				</div>`;
      break;
    case "layers":
      C > 0 && (E += n.html`
					<div class='album_counters'>
						<a class='layers'>${x.iconic("layers")}</a>
					</div>`);
      break;
    case "album":
      C > 0 && (E += n.html`
					<div class='album_counters'>
						<a class='folders'>${x.iconic("folder")}`, C > 1 && (E += n.html`
						<span>${C}</span>`), E += n.html`
						</a>
					</div>`);
      break;
    case "all":
      (C > 0 || e.num_photos > 0) && (E += n.html`
					<div class='album_counters' style='flex-direction: ${n.album_decoration_orientation}'>`, e.num_photos > 0 && (E += n.html`
							<a class='photos'>${x.iconic("puzzle-piece")}
								<span>${e.num_photos}</span>
							</a>`), C > 0 && (E += n.html`
						<a class='folders'>${x.iconic("folder")}`, C > 1 && (E += n.html`
							<span>${C}</span>`), E += n.html`
						</a>`), E += n.html`
					</div>`);
  }
  return E += "</div>", E;
};
x.photo = function(e, i = !1) {
  let s = "", u = "", l = "";
  const d = v.json && v.json.cover_id === e.id, h = e.type && e.type.indexOf("video") > -1, E = e.type && e.type.indexOf("raw") > -1, C = e.live_photo_url !== "" && e.live_photo_url !== null;
  return e.size_variants.thumb === null ? (C && (u = `<span class="thumbimg"><img src='img/live-photo-icon.png' alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false' data-tabindex='${V.get_next_tab_index()}'></span>`), h ? u = `<span class="thumbimg"><img src='img/play-icon.png' alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false' data-tabindex='${V.get_next_tab_index()}'></span>` : E && (u = `<span class="thumbimg"><img src='img/placeholder.png' alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false' data-tabindex='${V.get_next_tab_index()}'></span>`)) : n.layout === 0 ? (e.size_variants.thumb2x !== null && (l = e.size_variants.thumb2x.url), l !== "" && (l = `data-srcset='${l} 2x'`), u = `<span class="thumbimg${h ? " video" : ""}${C ? " livephoto" : ""}">`, u += `<img class='lazyload' src='img/placeholder.png' data-src='${e.size_variants.thumb.url}' ` + l + ` alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false' >`, u += "</span>") : e.size_variants.small !== null ? (e.size_variants.small2x !== null && (l = `data-srcset='${e.size_variants.small.url} ${e.size_variants.small.width}w, ${e.size_variants.small2x.url} ${e.size_variants.small2x.width}w'`), u = `<span class="thumbimg${h ? " video" : ""}${C ? " livephoto" : ""}">`, u += `<img class='lazyload' src='img/placeholder.png' data-src='${e.size_variants.small.url}' ` + l + ` alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false' >`, u += "</span>") : e.size_variants.medium !== null ? (e.size_variants.medium2x !== null && (l = `data-srcset='${e.size_variants.medium.url} ${e.size_variants.medium.width}w, ${e.size_variants.medium2x.url} ${e.size_variants.medium2x.width}w'`), u = `<span class="thumbimg${h ? " video" : ""}${C ? " livephoto" : ""}">`, u += `<img class='lazyload' src='img/placeholder.png' data-src='${e.size_variants.medium.url}' ` + l + ` alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false' >`, u += "</span>") : h ? (e.size_variants.thumb2x !== null && (l = e.size_variants.thumb2x.url), l !== "" && (l = `data-srcset='${e.size_variants.thumb.url} ${e.size_variants.thumb.width}w, ${l} ${e.size_variants.thumb2x.width}w'`), u = '<span class="thumbimg video">', u += `<img class='lazyload' src='img/placeholder.png' data-src='${e.size_variants.thumb.url}' ` + l + ` alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false' >`, u += "</span>") : (u = `<span class="thumbimg${C ? " livephoto" : ""}">`, u += `<img class='lazyload' src='img/placeholder.png' data-src='${e.size_variants.original.url}' alt='${n.locale.PHOTO_THUMBNAIL}' data-overlay='false' draggable='false' >`, u += "</span>"), s += n.html`
			<div class='photo ${i ? "disabled" : ""}' data-album-id='${e.album_id}' data-id='${e.id}' data-tabindex='${V.get_next_tab_index()}'
			draggable='${!v.isUploadable() || i ? "false" : "true"}'
			ondragstart='lychee.startDrag(event)'
			ondragend='lychee.endDrag(event)'>
				${u}
				<div class='overlay'>
					<h1 title='$${e.title}'>$${e.title}</h1>
			`, e.taken_at !== null ? s += n.html`<a><span title='${n.locale.CAMERA_DATE}'>${x.iconic("camera-slr")}</span>${n.locale.printDateTime(
    e.taken_at
  )}</a>` : s += n.html`<a>${n.locale.printDateTime(e.created_at)}</a>`, s += "</div>", v.isUploadable() && (s += n.html`
				<div class='badges'>
				<a class='badge ${e.is_starred ? "badge--star" : ""} icn-star'>${x.iconic("star")}</a>
				<a class='badge ${e.is_public && v.json && v.json.policy && !v.json.policy.is_public ? "badge--visible badge--hidden" : ""} icn-share'>${x.iconic("eye")}</a>
				<a class='badge ${d ? "badge--cover" : ""} icn-cover'>${x.iconic("folder-cover")}</a>
				</div>
				`), s += "</div>", s;
};
x.check_overlay_type = function(e, i, s = !1) {
  let u = ["desc", "date", "exif", "none"], l = u.indexOf(i);
  if (l < 0)
    return "none";
  s && l++;
  let d = e.make + e.model + e.shutter + e.iso + (e.type.indexOf("video") !== 0 ? e.aperture + e.focal : "");
  for (let h = 0; h < u.length; h++) {
    let E = u[(l + h) % u.length];
    if (E === "date" || E === "none" || E === "desc" && e.description && e.description !== "" || E === "exif" && d !== "")
      return E;
  }
};
x.overlay_image = function(e) {
  let i = "";
  switch (x.check_overlay_type(e, n.image_overlay_type)) {
    case "desc":
      i = n.escapeHTML(e.description);
      break;
    case "date":
      e.taken_at != null ? i = `<a><span title='${n.locale.CAMERA_DATE}'>${x.iconic("camera-slr")}</span>${n.locale.printDateTime(
        e.taken_at
      )}</a>` : i = n.locale.printDateTime(e.created_at);
      break;
    case "exif":
      e.make + e.model + e.shutter + e.aperture + e.focal + e.iso !== "" && (e.shutter && e.shutter !== "" && (i = e.shutter.replace("s", "sec")), e.aperture && e.aperture !== "" && (i !== "" && (i += " at "), i += e.aperture.replace("f/", "&fnof; / ")), e.iso && e.iso !== "" && (i !== "" && (i += ", "), i += Qe.sprintf(n.locale.PHOTO_ISO, e.iso)), e.focal && e.focal !== "" && (i !== "" && (i += "<br>"), i += e.focal + (e.lens && e.lens !== "" ? " (" + e.lens + ")" : "")));
      break;
    case "none":
    default:
      return "";
  }
  return n.html`
		<div id="image_overlay">
		<h1>$${e.title ? e.title : n.locale.UNTITLED}</h1>
		` + (i !== "" ? `<p>${i}</p>` : "") + `
		</div>
		`;
};
x.imageview = function(e, i, s) {
  let u = "", l = "";
  if (e.type.indexOf("video") > -1)
    u += n.html`<video width="auto" height="auto" id='image' controls class='${i ? "" : "full"}' autobuffer ${s ? "autoplay" : ""} data-tabindex='${V.get_next_tab_index()}'><source src='${e.size_variants.original.url}'>Your browser does not support the video tag.</video>`;
  else if (e.type.indexOf("raw") > -1 && e.size_variants.medium === null)
    u += n.html`<img id='image' class='${i ? "" : "full"}' src='img/placeholder.png' draggable='false' alt='big' data-tabindex='${V.get_next_tab_index()}'>`;
  else {
    let d = "";
    if (e.live_photo_url === "" || e.live_photo_url === null)
      if (p(".photo").each(function() {
        if (p(this).attr("data-id") && p(this).attr("data-id") === e.id) {
          let h = p(this).find("img");
          if (h.length > 0)
            return l = h[0].currentSrc ? h[0].currentSrc : h[0].src, !1;
        }
      }), e.size_variants.medium !== null) {
        let h = "";
        e.size_variants.medium2x !== null && (h = `srcset='${e.size_variants.medium.url} ${e.size_variants.medium.width}w, ${e.size_variants.medium2x.url} ${e.size_variants.medium2x.width}w'`), d = `<img id='image' class='${i ? "" : "full"}' src='${e.size_variants.medium.url}' ` + h + `  draggable='false' alt='medium' data-tabindex='${V.get_next_tab_index()}'>`;
      } else
        d = `<img id='image' class='${i ? "" : "full"}' src='${e.size_variants.original.url}' draggable='false' alt='big' data-tabindex='${V.get_next_tab_index()}'>`;
    else if (e.size_variants.medium !== null) {
      let h = e.size_variants.medium.width, E = e.size_variants.medium.height;
      d = `<div id='livephoto' data-live-photo data-proactively-loads-video='true' data-photo-src='${e.size_variants.medium.url}' data-video-src='${e.live_photo_url}'  style='width: ${h}px; height: ${E}px' data-tabindex='${V.get_next_tab_index()}'></div>`;
    } else
      d = `<div id='livephoto' data-live-photo data-proactively-loads-video='true' data-photo-src='${e.size_variants.original.url}' data-video-src='${e.live_photo_url}'  style='width: ${e.size_variants.original.width}px; height: ${e.size_variants.original.height}px' data-tabindex='${V.get_next_tab_index()}'></div>`;
    u += n.html`${d}`;
  }
  return u += x.overlay_image(e) + `
			<div class='arrow_wrapper arrow_wrapper--previous'><a id='previous'>${x.iconic("caret-left")}</a></div>
			<div class='arrow_wrapper arrow_wrapper--next'><a id='next'>${x.iconic("caret-right")}</a></div>
			`, { html: u, thumb: l };
};
x.no_content = function(e) {
  let i = "";
  switch (i += n.html`<div class='no_content fadeIn'>${x.iconic(e)}`, e) {
    case "magnifying-glass":
      i += n.html`<p>${n.locale.VIEW_NO_RESULT}</p>`;
      break;
    case "eye":
      i += n.html`<p>${n.locale.VIEW_NO_PUBLIC_ALBUMS}</p>`;
      break;
    case "cog":
      i += n.html`<p>${n.locale.VIEW_NO_CONFIGURATION}</p>`;
      break;
    case "question-mark":
      i += n.html`<p>${n.locale.VIEW_PHOTO_NOT_FOUND}</p>`;
      break;
  }
  return i += "</div>", i;
};
x.tags = function(e) {
  let i = "";
  const s = v.isUploadable(), l = !n.publicMode || n.public_search ? "tag search" : "tag";
  return e.length !== 0 ? e.forEach(function(d, h) {
    s ? i += n.html`<a class='${l}'>$${d}<span data-index='${h}'>${x.iconic("x")}</span></a>` : i += n.html`<a class='${l}'>$${d}</a>`;
  }) : i = n.html`<div class='empty'>${n.locale.NO_TAGS}</div>`, i;
};
x.user = function(e) {
  return n.html`<div class="users_view_line">
			<p id="UserData${e.id}">
			<input name="id" type="hidden" inputmode="numeric" value="${e.id}" />
			<input class="text" name="username" type="text" value="$${e.username}" placeholder="${n.locale.USERNAME}" />
			<input class="text" name="password" type="text" placeholder="${n.locale.NEW_PASSWORD}" />
			<span class="choice" title="${n.locale.ALLOW_UPLOADS}">
			<label>
			<input type="checkbox" name="may_upload" />
			<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>
			</label>
			</span>
			<span class="choice" title="${n.locale.ALLOW_USER_SELF_EDIT}">
			<label>
			<input type="checkbox" name="may_edit_own_settings" />
			<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>
			</label>
			</span>
			</p>
			<a id="UserUpdate${e.id}"  class="basicModal__button basicModal__button_OK ${e.id !== n.user.id ? "" : "basicModal__button_OK_no_DEL"}">${n.locale.SAVE}</a>
			${e.id !== n.user.id ? `<a id="UserDelete${e.id}"  class="basicModal__button basicModal__button_DEL">${n.locale.DELETE}</a>` : ""}
		</div>
		`;
};
x.u2f = function(e) {
  return n.html`<div class="u2f_view_line">
			<p id="CredentialData${e.id}">
			<input name="id" type="hidden" inputmode="string" value="${e.id}" />
			<span class="text">${e.id.slice(0, 30)}</span>
			</p>
			<a id="CredentialDelete${e.id}"  class="basicModal__button basicModal__button_DEL">Delete</a>
		</div>
		`;
};
var Ti = {}, ks = {
  get exports() {
    return Ti;
  },
  set exports(e) {
    Ti = e;
  }
};
/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 * @license
 */
var Us = ks.exports = function(e) {
  this.top = e.top, this.left = e.left, this.width = e.width, this.spacing = e.spacing, this.targetRowHeight = e.targetRowHeight, this.targetRowHeightTolerance = e.targetRowHeightTolerance, this.minAspectRatio = this.width / e.targetRowHeight * (1 - e.targetRowHeightTolerance), this.maxAspectRatio = this.width / e.targetRowHeight * (1 + e.targetRowHeightTolerance), this.edgeCaseMinRowHeight = e.edgeCaseMinRowHeight, this.edgeCaseMaxRowHeight = e.edgeCaseMaxRowHeight, this.widowLayoutStyle = e.widowLayoutStyle, this.isBreakoutRow = e.isBreakoutRow, this.items = [], this.height = 0;
};
Us.prototype = {
  /**
   * Attempt to add a single item to the row.
   * This is the heart of the justified algorithm.
   * This method is direction-agnostic; it deals only with sizes, not positions.
   *
   * If the item fits in the row, without pushing row height beyond min/max tolerance,
   * the item is added and the method returns true.
   *
   * If the item leaves row height too high, there may be room to scale it down and add another item.
   * In this case, the item is added and the method returns true, but the row is incomplete.
   *
   * If the item leaves row height too short, there are too many items to fit within tolerance.
   * The method will either accept or reject the new item, favoring the resulting row height closest to within tolerance.
   * If the item is rejected, left/right padding will be required to fit the row height within tolerance;
   * if the item is accepted, top/bottom cropping will be required to fit the row height within tolerance.
   *
   * @method addItem
   * @param itemData {Object} Item layout data, containing item aspect ratio.
   * @return {Boolean} True if successfully added; false if rejected.
   */
  addItem: function(e) {
    var i = this.items.concat(e), s = this.width - (i.length - 1) * this.spacing, u = i.reduce(function(C, m) {
      return C + m.aspectRatio;
    }, 0), l = s / this.targetRowHeight, d, h, E;
    return this.isBreakoutRow && this.items.length === 0 && e.aspectRatio >= 1 ? (this.items.push(e), this.completeLayout(s / e.aspectRatio, "justify"), !0) : u < this.minAspectRatio ? (this.items.push(Object.assign({}, e)), !0) : u > this.maxAspectRatio ? this.items.length === 0 ? (this.items.push(Object.assign({}, e)), this.completeLayout(s / u, "justify"), !0) : (d = this.width - (this.items.length - 1) * this.spacing, h = this.items.reduce(function(C, m) {
      return C + m.aspectRatio;
    }, 0), E = d / this.targetRowHeight, Math.abs(u - l) > Math.abs(h - E) ? (this.completeLayout(d / h, "justify"), !1) : (this.items.push(Object.assign({}, e)), this.completeLayout(s / u, "justify"), !0)) : (this.items.push(Object.assign({}, e)), this.completeLayout(s / u, "justify"), !0);
  },
  /**
   * Check if a row has completed its layout.
   *
   * @method isLayoutComplete
   * @return {Boolean} True if complete; false if not.
   */
  isLayoutComplete: function() {
    return this.height > 0;
  },
  /**
   * Set row height and compute item geometry from that height.
   * Will justify items within the row unless instructed not to.
   *
   * @method completeLayout
   * @param newHeight {Number} Set row height to this value.
   * @param widowLayoutStyle {String} How should widows display? Supported: left | justify | center
   */
  completeLayout: function(e, i) {
    var s = this.left, u = this.width - (this.items.length - 1) * this.spacing, l, d, h, E, C, m;
    (typeof i > "u" || ["justify", "center", "left"].indexOf(i) < 0) && (i = "left"), d = Math.max(this.edgeCaseMinRowHeight, Math.min(e, this.edgeCaseMaxRowHeight)), e !== d ? (this.height = d, l = u / d / (u / e)) : (this.height = e, l = 1), this.items.forEach(function(W) {
      W.top = this.top, W.width = W.aspectRatio * this.height * l, W.height = this.height, W.left = s, s += W.width + this.spacing;
    }, this), i === "justify" ? (s -= this.spacing + this.left, h = (s - this.width) / this.items.length, E = this.items.map(function(W, D) {
      return Math.round((D + 1) * h);
    }), this.items.length === 1 ? (C = this.items[0], C.width -= Math.round(h)) : this.items.forEach(function(W, D) {
      D > 0 ? (W.left -= E[D - 1], W.width -= E[D] - E[D - 1]) : W.width -= E[D];
    })) : i === "center" && (m = (this.width - s) / 2, this.items.forEach(function(W) {
      W.left += m + this.spacing;
    }, this));
  },
  /**
   * Force completion of row layout with current items.
   *
   * @method forceComplete
   * @param fitToWidth {Boolean} Stretch current items to fill the row width.
   *                             This will likely result in padding.
   * @param fitToWidth {Number}
   */
  forceComplete: function(e, i) {
    typeof i == "number" ? this.completeLayout(i, this.widowLayoutStyle) : this.completeLayout(this.targetRowHeight, this.widowLayoutStyle);
  },
  /**
   * Return layout data for items within row.
   * Note: returns actual list, not a copy.
   *
   * @method getItems
   * @return Layout data for items within row.
   */
  getItems: function() {
    return this.items;
  }
};
/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 * @license
 */
var Bs = Ti;
function vi(e, i) {
  var s;
  return e.fullWidthBreakoutRowCadence !== !1 && (i._rows.length + 1) % e.fullWidthBreakoutRowCadence === 0 && (s = !0), new Bs({
    top: i._containerHeight,
    left: e.containerPadding.left,
    width: e.containerWidth - e.containerPadding.left - e.containerPadding.right,
    spacing: e.boxSpacing.horizontal,
    targetRowHeight: e.targetRowHeight,
    targetRowHeightTolerance: e.targetRowHeightTolerance,
    edgeCaseMinRowHeight: 0.5 * e.targetRowHeight,
    edgeCaseMaxRowHeight: 2 * e.targetRowHeight,
    rightToLeft: !1,
    isBreakoutRow: s,
    widowLayoutStyle: e.widowLayoutStyle
  });
}
function yi(e, i, s) {
  return i._rows.push(s), i._layoutItems = i._layoutItems.concat(s.getItems()), i._containerHeight += s.height + e.boxSpacing.vertical, s.items;
}
function js(e, i, s) {
  var u = [], l, d, h;
  return e.forceAspectRatio && s.forEach(function(E) {
    E.forcedAspectRatio = !0, E.aspectRatio = e.forceAspectRatio;
  }), s.some(function(E, C) {
    if (isNaN(E.aspectRatio))
      throw new Error("Item " + C + " has an invalid aspect ratio");
    if (d || (d = vi(e, i)), l = d.addItem(E), d.isLayoutComplete()) {
      if (u = u.concat(yi(e, i, d)), i._rows.length >= e.maxNumRows)
        return d = null, !0;
      if (d = vi(e, i), !l && (l = d.addItem(E), d.isLayoutComplete())) {
        if (u = u.concat(yi(e, i, d)), i._rows.length >= e.maxNumRows)
          return d = null, !0;
        d = vi(e, i);
      }
    }
  }), d && d.getItems().length && e.showWidows && (i._rows.length ? (i._rows[i._rows.length - 1].isBreakoutRow ? h = i._rows[i._rows.length - 1].targetRowHeight : h = i._rows[i._rows.length - 1].height, d.forceComplete(!1, h)) : d.forceComplete(!1), u = u.concat(yi(e, i, d)), e._widowCount = d.getItems().length), i._containerHeight = i._containerHeight - e.boxSpacing.vertical, i._containerHeight = i._containerHeight + e.containerPadding.bottom, {
    containerHeight: i._containerHeight,
    widowCount: e._widowCount,
    boxes: i._layoutItems
  };
}
var Hs = function(e, i) {
  var s = {}, u = {}, l = {
    containerWidth: 1060,
    containerPadding: 10,
    boxSpacing: 10,
    targetRowHeight: 320,
    targetRowHeightTolerance: 0.25,
    maxNumRows: Number.POSITIVE_INFINITY,
    forceAspectRatio: !1,
    showWidows: !0,
    fullWidthBreakoutRowCadence: !1,
    widowLayoutStyle: "left"
  }, d = {}, h = {};
  return i = i || {}, s = Object.assign(l, i), d.top = isNaN(parseFloat(s.containerPadding.top)) ? s.containerPadding : s.containerPadding.top, d.right = isNaN(parseFloat(s.containerPadding.right)) ? s.containerPadding : s.containerPadding.right, d.bottom = isNaN(parseFloat(s.containerPadding.bottom)) ? s.containerPadding : s.containerPadding.bottom, d.left = isNaN(parseFloat(s.containerPadding.left)) ? s.containerPadding : s.containerPadding.left, h.horizontal = isNaN(parseFloat(s.boxSpacing.horizontal)) ? s.boxSpacing : s.boxSpacing.horizontal, h.vertical = isNaN(parseFloat(s.boxSpacing.vertical)) ? s.boxSpacing : s.boxSpacing.vertical, s.containerPadding = d, s.boxSpacing = h, u._layoutItems = [], u._awakeItems = [], u._inViewportItems = [], u._leadingOrphans = [], u._trailingOrphans = [], u._containerHeight = s.containerPadding.top, u._rows = [], u._orphans = [], s._widowCount = 0, js(s, u, e.map(function(E) {
    return E.width && E.height ? { aspectRatio: E.width / E.height } : { aspectRatio: E };
  }));
};
let ie = {};
ie.open = function() {
  M.settings.init();
};
ie.getValues = function(e) {
  const i = {};
  return document.querySelectorAll(e + " input[name]").forEach(function(l) {
    switch (l.type) {
      case "checkbox":
      case "radio":
        i[l.name] = l.checked;
        break;
      case "number":
      case "range":
        i[l.name] = parseInt(l.value, 10);
        break;
      case "file":
        i[l.name] = l.files;
        break;
      default:
        switch (l.getAttribute("inputmode")) {
          case "numeric":
            i[l.name] = parseInt(l.value, 10);
            break;
          case "decimal":
            i[l.name] = parseFloat(l.value);
            break;
          default:
            i[l.name] = l.value;
        }
    }
  }), document.querySelectorAll(e + " select[name]").forEach(function(l) {
    i[l.name] = l.selectedIndex !== -1 ? l.options[l.selectedIndex].value : null;
  }), i;
};
ie.bind = function(e, i, s) {
  p(e).on("click", function() {
    s(ie.getValues(i));
  });
};
ie.changeLogin = function(e) {
  if (e.username === "" && (e.username = null), e.password.length < 1) {
    Z.show("error", n.locale.ERROR_EMPTY_PASSWORD), p("input[name=password]").addClass("error");
    return;
  } else
    p("input[name=password]").removeClass("error");
  if (e.password !== e.confirm) {
    Z.show("error", n.locale.ERROR_PASSWORD_DOES_NOT_MATCH), p("input[name=confirm]").addClass("error");
    return;
  } else
    p("input[name=confirm]").removeClass("error");
  K.post(
    "User::updateLogin",
    e,
    /** @param {User} updatedUser */
    function(i) {
      p("input[name]").removeClass("error"), Z.show("success", n.locale.SETTINGS_SUCCESS_LOGIN), M.settings.content.clearLogin(), n.user = i;
    }
  );
};
ie.changeSorting = function(e) {
  K.post("Settings::setSorting", e, function() {
    n.sorting_albums.column = e.sorting_albums_column, n.sorting_albums.order = e.sorting_albums_order, n.sorting_photos.column = e.sorting_photos_column, n.sorting_photos.order = e.sorting_photos_order, q.refresh(), Z.show("success", n.locale.SETTINGS_SUCCESS_SORT);
  });
};
ie.changeDropboxKey = function(e) {
  K.post("Settings::setDropboxKey", e, function() {
    n.dropboxKey = e.key, Z.show("success", n.locale.SETTINGS_SUCCESS_DROPBOX);
  });
};
ie.changeLang = function(e) {
  K.post("Settings::setLang", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_LANG), n.init();
  });
};
ie.setDefaultLicense = function(e) {
  K.post("Settings::setDefaultLicense", e, function() {
    n.default_license = e.license, Z.show("success", n.locale.SETTINGS_SUCCESS_LICENSE);
  });
};
ie.setLayout = function(e) {
  K.post("Settings::setLayout", e, function() {
    n.layout = e.layout, Z.show("success", n.locale.SETTINGS_SUCCESS_LAYOUT);
  });
};
ie.changePublicSearch = function(e) {
  K.post("Settings::setPublicSearch", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_PUBLIC_SEARCH), n.public_search = e.public_search;
  });
};
ie.setAlbumDecoration = function(e) {
  K.post("Settings::setAlbumDecoration", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_ALBUM_DECORATION), q.refresh(), n.album_decoration = e.album_decoration, n.album_decoration_orientation = e.album_decoration_orientation;
  });
};
ie.setOverlayType = function(e) {
  K.post("Settings::setOverlayType", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_IMAGE_OVERLAY), n.image_overlay_type = e.image_overlay_type, n.image_overlay_type_default = e.image_overlay_type;
  });
};
ie.changeMapDisplay = function(e) {
  K.post("Settings::setMapDisplay", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_MAP_DISPLAY), n.map_display = e.map_display, !n.map_display && n.map_display_public && p("#MapDisplayPublic").click();
  });
};
ie.changeMapDisplayPublic = function(e) {
  K.post("Settings::setMapDisplayPublic", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_MAP_DISPLAY_PUBLIC), n.map_display_public = e.map_display_public, n.map_display_public && !n.map_display && p("#MapDisplay").click();
  });
};
ie.setMapProvider = function(e) {
  K.post("Settings::setMapProvider", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_MAP_PROVIDER), n.map_provider = e.map_provider;
  });
};
ie.changeMapIncludeSubAlbums = function(e) {
  K.post("Settings::setMapIncludeSubAlbums", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_MAP_DISPLAY), n.map_include_subalbums = e.map_include_subalbums;
  });
};
ie.changeLocationDecoding = function(e) {
  K.post("Settings::setLocationDecoding", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_MAP_DISPLAY), n.location_decoding = e.location_decoding;
  });
};
ie.changeNSFWVisible = function(e) {
  K.post("Settings::setNSFWVisible", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_NSFW_VISIBLE), n.nsfw_visible = e.nsfw_visible, n.nsfw_visible_saved = n.nsfw_visible;
  });
};
ie.changeLocationShow = function(e) {
  K.post("Settings::setLocationShow", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_MAP_DISPLAY), n.location_show = e.location_show, !n.location_show && n.location_show_public && p("#LocationShowPublic").click();
  });
};
ie.changeLocationShowPublic = function(e) {
  K.post("Settings::setLocationShowPublic", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_MAP_DISPLAY), n.location_show_public = e.location_show_public, n.location_show_public && !n.location_show && p("#LocationShow").click();
  });
};
ie.changeNewPhotosNotification = function(e) {
  K.post("Settings::setNewPhotosNotification", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_NEW_PHOTOS_NOTIFICATION), n.new_photos_notification = e.new_photos_notification;
  });
};
ie.changeCSS = function() {
  const e = {
    css: p("#css").val()
  };
  K.post("Settings::setCSS", e, function() {
    n.css = e.css, Z.show("success", n.locale.SETTINGS_SUCCESS_CSS);
  });
};
ie.changeJS = function() {
  const e = {
    js: p("#js").val()
  };
  K.post("Settings::setJS", e, function() {
    n.js = e.js, Z.show("success", n.locale.SETTINGS_SUCCESS_JS);
  });
};
ie.save = function(e) {
  K.post("Settings::saveAll", e, function() {
    Z.show("success", n.locale.SETTINGS_SUCCESS_UPDATE), M.full_settings.init(), n.init(!1);
  });
};
ie.save_enter = function(e) {
  if (e.which !== 13)
    return;
  const i = (
    // TODO: move the style to the style file, where it belongs.
    '<p style="color: #d92c34; font-size: 1.3em; font-weight: bold; text-transform: capitalize; text-align: center;"></p>'
  );
  j.show({
    body: i,
    readyCB: function(s, u) {
      u.querySelector("p").textContent = n.locale.SETTINGS_ADVANCED_SAVE;
    },
    buttons: {
      action: {
        title: n.locale.ENTER,
        fn: function() {
          ie.save(ie.getValues("#fullSettings")), j.close();
        },
        classList: ["red"]
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
ie.openTokenDialog = function() {
  let e = "", i = null, s = null, u = null, l = null;
  const d = `
		<form class="token">
			<div class="input-group stacked">
				<label for="token-dialog-token"></label>
				<input id="token-dialog-token" name="token" type="text" readonly="readonly" />
				<div class="button-group">
					<a id="button_reset_token" class='button'><svg class='iconic ionicons'><use xlink:href='#reload' /></svg></a>
					<a id="button_copy_token" class='button'><svg class='iconic ionicons'><use xlink:href='#copy' /></svg></a>
					<a id="button_disable_token" class='button'><svg class='iconic ionicons'><use xlink:href='#ban' /></svg></a>
				</div>
			</div>
		</form>`, h = function() {
    n.user.has_token ? (u.style.display = null, e ? (l.value = e, l.disabled = !1, s.style.display = null) : (l.value = n.locale.TOKEN_NOT_AVAILABLE, l.disabled = !0, s.style.display = "none")) : (l.value = n.locale.DISABLED_TOKEN_STATUS_MSG, l.disabled = !0, s.style.display = "none", u.style.display = "none");
  }, E = function(D) {
    navigator.clipboard.writeText(e), D.stopPropagation();
  }, C = function(D) {
    l.value = "", D.stopPropagation(), K.post(
      "User::resetToken",
      {},
      /**
       * @param {{token: string}} data
       */
      function(he) {
        e = he.token, n.user.has_token = !0, h();
      }
    );
  }, m = function(D) {
    l.value = "", D.stopPropagation(), K.post("User::unsetToken", {}, function() {
      e = "", n.user.has_token = !1, h();
    });
  }, W = function(D, he) {
    i = he.querySelector("a#button_reset_token"), i.title = n.locale.RESET, s = he.querySelector("a#button_copy_token"), s.title = n.locale.URL_COPY_TO_CLIPBOARD, u = he.querySelector("a#button_disable_token"), u.title = n.locale.DISABLE_TOKEN_TOOLTIP, l = D.token, l.placeholder = n.locale.TOKEN_WAIT, l.labels[0].textContent = "Token", l.blur(), h(), n.addClickOrTouchListener(s, E), n.addClickOrTouchListener(i, C), n.addClickOrTouchListener(u, m);
  };
  j.show({
    body: d,
    readyCB: W,
    buttons: {
      cancel: {
        title: n.locale.CLOSE,
        fn: j.close
      }
    }
  });
};
let ct = {
  /** @type {?SharingInfo} */
  json: null
};
ct.add = function() {
  const e = {
    /** @type {string[]} */
    albumIDs: [],
    /** @type {number[]} */
    userIDs: []
  };
  if (p("#albums_list_to option").each(function() {
    e.albumIDs.push(this.value);
  }), p("#user_list_to option").each(function() {
    e.userIDs.push(Number.parseInt(this.value, 10));
  }), e.albumIDs.length === 0) {
    Z.show("error", n.locale.ERROR_SELECT_ALBUM);
    return;
  }
  if (e.userIDs.length === 0) {
    Z.show("error", n.locale.ERROR_SELECT_USER);
    return;
  }
  K.post("Sharing::add", e, function() {
    Z.show("success", n.locale.SHARING_SUCCESS), ct.list();
  });
};
ct.delete = function() {
  const e = {
    /** @type {number[]} */
    shareIDs: []
  };
  if (p('input[name="remove_id"]:checked').each(function() {
    e.shareIDs.push(Number.parseInt(this.value, 10));
  }), e.shareIDs.length === 0) {
    Z.show("error", n.locale.ERROR_SELECT_SHARING);
    return;
  }
  K.post("Sharing::delete", e, function() {
    Z.show("success", n.locale.SHARING_REMOVED), ct.list();
  });
};
ct.list = function() {
  K.post(
    "Sharing::list",
    n.rights.is_admin ? {} : { ownerID: n.user.id },
    /** @param {SharingInfo} data */
    function(e) {
      ct.json = e, M.sharing.init();
    }
  );
};
var $t, Kt, En, zn, So, Gn, Eo, Jt, yn, Vn, To, an, Fn, Tn, Ai, An, Oi, On, Ci, Cn, wi;
const At = class {
  /**
   * Create a new WebAuthn instance.
   *
   * @param routes {{registerOptions: string, register: string, loginOptions: string, login: string}}
   * @param headers {{string}}
   * @param includeCredentials {boolean}
   * @param xcsrfToken {string|null} Either a csrf token (40 chars) or xsrfToken (224 chars)
   */
  constructor(i = {}, s = {}, u = !1, l = null) {
    /**
     * Returns a fetch promise to resolve later.
     *
     * @param data {Object}
     * @param route {string}
     * @param headers {{string}}
     * @returns {Promise<Response>}
     */
    bt(this, Jt);
    /**
     * Parses the Public Key Options received from the Server for the browser.
     *
     * @param publicKey {Object}
     * @returns {Object}
     */
    bt(this, An);
    /**
     * Parses the outgoing credentials from the browser to the server.
     *
     * @param credentials {Credential|PublicKeyCredential}
     * @return {{response: {string}, rawId: string, id: string, type: string}}
     */
    bt(this, On);
    /**
     * Routes for WebAuthn assertion (login) and attestation (register).
     *
     * @type {{registerOptions: string, register: string, loginOptions: string, login: string, }}
     */
    bt(this, $t, {
      registerOptions: "WebAuthn/register/options",
      register: "WebAuthn/register",
      loginOptions: "WebAuthn/login/options",
      login: "WebAuthn/login"
    });
    /**
     * Headers to use in ALL requests done.
     *
     * @type {{Accept: string, "Content-Type": string, "X-Requested-With": string}}
     */
    bt(this, Kt, {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    });
    /**
     * If set to true, the credentials option will be set to 'include' on all fetch calls,
     * or else it will use the default 'same-origin'. Use this if the backend is not the
     * same origin as the client or the XSRF protection will break without the session.
     *
     * @type {boolean}
     */
    bt(this, En, !1);
    var E, C;
    Object.assign(ht(this, $t), i), Object.assign(ht(this, Kt), s), go(this, En, u);
    let d, h;
    if (l === null)
      d = ht(At, Gn, Eo), h = ht(At, zn, So);
    else if (l.length === 40)
      h = l;
    else if (l.length === 224)
      d = l;
    else
      throw new TypeError("CSRF token or XSRF token provided does not match requirements. Must be 40 or 224 characters.");
    if (d !== null)
      (E = ht(this, Kt))["X-XSRF-TOKEN"] ?? (E["X-XSRF-TOKEN"] = d);
    else if (h !== null)
      (C = ht(this, Kt))["X-CSRF-TOKEN"] ?? (C["X-CSRF-TOKEN"] = h);
    else
      throw new TypeError('Ensure a CSRF/XSRF token is manually set, or provided in a cookie "XSRF-TOKEN" or or there is meta tag named "csrf-token".');
  }
  /**
   * Register the user credentials from the browser/device.
   *
   * You can add request input if you are planning to register a user with WebAuthn from scratch.
   *
   * @param request {{string}}
   * @param response {{string}}
   * @returns Promise<JSON|ReadableStream>
   */
  async register(i = {}, s = {}) {
    const l = await (await et(this, Jt, yn).call(this, i, ht(this, $t).registerOptions)).json(), d = et(this, An, Oi).call(this, l), h = await navigator.credentials.create({ publicKey: d }), E = et(this, On, Ci).call(this, h);
    return Object.assign(E, s), await et(this, Jt, yn).call(this, E, ht(this, $t).register).then(et(At, Cn, wi));
  }
  /**
   * Log in a user with his credentials.
   *
   * If no credentials are given, the app may return a blank assertion for userless login.
   *
   * @param request {{string}}
   * @param response {{string}}
   * @returns Promise<JSON|ReadableStream>
   */
  async login(i = {}, s = {}) {
    const l = await (await et(this, Jt, yn).call(this, i, ht(this, $t).loginOptions)).json(), d = et(this, An, Oi).call(this, l), h = await navigator.credentials.get({ publicKey: d }), E = et(this, On, Ci).call(this, h);
    return Object.assign(E, s), await et(this, Jt, yn).call(this, E, ht(this, $t).login, s).then(et(At, Cn, wi));
  }
  /**
   * Checks if the browser supports WebAuthn.
   *
   * @returns {boolean}
   */
  static supportsWebAuthn() {
    return typeof PublicKeyCredential < "u";
  }
  /**
   * Checks if the browser doesn't support WebAuthn.
   *
   * @returns {boolean}
   */
  static doesntSupportWebAuthn() {
    return !this.supportsWebAuthn();
  }
};
let Dt = At;
$t = new WeakMap(), Kt = new WeakMap(), En = new WeakMap(), zn = new WeakSet(), So = function() {
  let i = Array.from(document.head.getElementsByTagName("meta")).find((s) => s.name === "csrf-token");
  return i ? i.content : (i = Array.from(document.getElementsByTagName("input")).find((s) => s.name === "_token" && s.type === "hidden"), i ? i.value : null);
}, Gn = new WeakSet(), Eo = function() {
  const i = document.cookie.split(";").find((s) => /^\s*(X-)?[XC]SRF-TOKEN\s*=/.test(s));
  return i ? i.split("=")[1].trim().replaceAll("%3D", "") : null;
}, Jt = new WeakSet(), yn = function(i, s, u = {}) {
  return fetch(s, {
    method: "POST",
    credentials: ht(this, En) ? "include" : "same-origin",
    redirect: "error",
    headers: { ...ht(this, Kt), ...u },
    body: JSON.stringify(i)
  });
}, Vn = new WeakSet(), To = function(i) {
  i = i.replace(/-/g, "+").replace(/_/g, "/");
  const s = i.length % 4;
  if (s) {
    if (s === 1)
      throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");
    i += new Array(5 - s).join("=");
  }
  return atob(i);
}, an = new WeakSet(), Fn = function(i, s = !1) {
  var u;
  return Uint8Array.from(
    s ? atob(i) : et(u = At, Vn, To).call(u, i),
    (l) => l.charCodeAt(0)
  );
}, Tn = new WeakSet(), Ai = function(i) {
  return btoa(String.fromCharCode(...new Uint8Array(i)));
}, An = new WeakSet(), Oi = function(i) {
  var s, u;
  return console.debug(i), i.challenge = et(s = At, an, Fn).call(s, i.challenge), "user" in i && (i.user = {
    ...i.user,
    id: et(u = At, an, Fn).call(u, i.user.id)
  }), [
    "excludeCredentials",
    "allowCredentials"
  ].filter((l) => l in i).forEach((l) => {
    i[l] = i[l].map((d) => {
      var h;
      return { ...d, id: et(h = At, an, Fn).call(h, d.id) };
    });
  }), i;
}, On = new WeakSet(), Ci = function(i) {
  var u;
  let s = {
    id: i.id,
    type: i.type,
    rawId: et(u = At, Tn, Ai).call(u, i.rawId),
    response: {}
  };
  return [
    "clientDataJSON",
    "attestationObject",
    "authenticatorData",
    "signature",
    "userHandle"
  ].filter((l) => l in i.response).forEach((l) => {
    var d;
    return s.response[l] = et(d = At, Tn, Ai).call(d, i.response[l]);
  }), s;
}, Cn = new WeakSet(), wi = function(i) {
  if (!i.ok)
    throw i;
  return new Promise((s) => {
    i.json().then((u) => s(u)).catch(() => s(i.body));
  });
}, /**
 * Returns the CSRF token if it exists as a form input tag.
 *
 * @returns string
 * @throws TypeError
 */
bt(Dt, zn), /**
 * Returns the value of the XSRF token if it exists in a cookie.
 *
 * Inspired by https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#example_2_get_a_sample_cookie_named_test2
 *
 * @returns {?string}
 */
bt(Dt, Gn), /**
 * Decodes a BASE64 URL string into a normal string.
 *
 * @param input {string}
 * @returns {string|Iterable}
 */
bt(Dt, Vn), /**
 * Transform a string into Uint8Array instance.
 *
 * @param input {string}
 * @param useAtob {boolean}
 * @returns {Uint8Array}
 */
bt(Dt, an), /**
 * Encodes an array of bytes to a BASE64 URL string
 *
 * @param arrayBuffer {ArrayBuffer|Uint8Array}
 * @returns {string}
 */
bt(Dt, Tn), /**
 * Handles the response from the Server.
 *
 * Throws the entire response if is not OK (HTTP 2XX).
 *
 * @param response {Response}
 * @returns Promise<JSON|ReadableStream>
 * @throws Response
 */
bt(Dt, Cn);
const tt = {
  /** @type {?WebAuthnCredential[]} */
  json: null
};
tt.is_available = function() {
  return !window.isSecureContext && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" ? (j.show({
    body: "<p></p>",
    readyCB: function(e, i) {
      i.querySelector("p").textContent = n.locale.U2F_NOT_SECURE;
    },
    buttons: {
      cancel: {
        title: n.locale.CLOSE,
        fn: j.close
      }
    }
  }), !1) : !0;
};
tt.login = function() {
  tt.is_available() && new Dt(
    {
      login: "/api/WebAuthn::login",
      loginOptions: "/api/WebAuthn::login/options"
    },
    {},
    !1
  ).login({
    user_id: 1
    // for now it is only available to Admin user via a secret key shortcut.
  }).then(function() {
    Z.show("success", n.locale.U2F_AUTHENTIFICATION_SUCCESS), window.location.reload();
  }).catch(() => Z.show("error", n.locale.ERROR_TEXT));
};
tt.register = function() {
  if (!tt.is_available())
    return;
  const e = new Dt(
    {
      register: "/api/WebAuthn::register",
      registerOptions: "/api/WebAuthn::register/options"
    },
    {},
    !1
  );
  Dt.supportsWebAuthn() ? e.register().then(function() {
    Z.show("success", n.locale.U2F_REGISTRATION_SUCCESS), tt.list();
  }).catch(() => Z.show("error", n.locale.ERROR_TEXT)) : Z.show("error", n.locale.U2F_NOT_SUPPORTED);
};
tt.delete = function(e) {
  K.post("WebAuthn::delete", e, function() {
    Z.show("success", n.locale.U2F_CREDENTIALS_DELETED), tt.list();
  });
};
tt.list = function() {
  K.post(
    "WebAuthn::list",
    {},
    /** @param {WebAuthnCredential[]} data*/
    function(e) {
      tt.json = e, M.u2f.init();
    }
  );
};
const ut = {
  /** @type {?UserDTO[]} */
  json: null
};
ut.update = function(e) {
  if (e.username.length < 1) {
    Z.show("error", n.locale.ERROR_EMPTY_USERNAME);
    return;
  }
  e.password.length === 0 && delete e.password, K.post("Users::save", e, function() {
    Z.show("success", n.locale.USER_UPDATED), ut.list();
  });
};
ut.create = function(e) {
  if (e.username.length < 1) {
    Z.show("error", n.locale.ERROR_EMPTY_USERNAME);
    return;
  }
  if (e.password.length < 1) {
    Z.show("error", n.locale.ERROR_EMPTY_PASSWORD);
    return;
  }
  K.post("Users::create", e, function() {
    Z.show("success", n.locale.USER_CREATED), ut.list();
  });
};
ut.delete = function(e) {
  K.post("Users::delete", e, function() {
    Z.show("success", n.locale.USER_DELETED), ut.list();
  });
};
ut.list = function() {
  K.post(
    "Users::list",
    {},
    /** @param {UserDTO[]} data */
    function(e) {
      ut.json = e, M.users.init();
    }
  );
};
const M = {
  /** @type {ResizeObserver} */
  resizeObserver: function() {
    const e = document.getElementById("lychee_view_container"), i = function() {
      let u = 0;
      return function() {
        e.clientWidth !== u && (u = e.clientWidth, M.album.content.justify(), S.isLivePhotoInitialized() && S.livePhotosObject.updateSize());
      };
    }(), s = new ResizeObserver(i);
    return s.observe(e), s;
  }()
};
M.albums = {
  /** @returns {void} */
  init: function() {
    H.clearSelection(), M.albums.title(), M.albums.content.init();
  },
  /** @returns {void} */
  title: function() {
    n.landing_page_enable ? n.setMetaData() : n.setMetaData(n.locale.ALBUMS);
  },
  content: {
    /** @returns {void} */
    init: function() {
      let e = "", i = "", s = "", u = "";
      n.publicMode === !1 && (q.json.smart_albums.public || q.json.smart_albums.recent || q.json.smart_albums.starred || q.json.smart_albums.unsorted || q.json.smart_albums.on_this_day || q.json.tag_albums.length > 0) && (e = x.divider(n.locale.SMART_ALBUMS)), q.json.smart_albums.unsorted && (q.parse(q.json.smart_albums.unsorted), e += x.album(q.json.smart_albums.unsorted, !n.rights.root_album.can_edit)), q.json.smart_albums.public && (q.parse(q.json.smart_albums.public), e += x.album(q.json.smart_albums.public, !n.rights.root_album.can_edit)), q.json.smart_albums.starred && (q.parse(q.json.smart_albums.starred), e += x.album(q.json.smart_albums.starred, !n.rights.root_album.can_edit)), q.json.smart_albums.recent && (q.parse(q.json.smart_albums.recent), e += x.album(q.json.smart_albums.recent, !n.rights.root_album.can_edit)), q.json.smart_albums.on_this_day && (q.parse(q.json.smart_albums.on_this_day), e += x.album(q.json.smart_albums.on_this_day)), i += q.json.tag_albums.reduce(function(d, h) {
        return q.parse(h), d + x.album(h, !n.rights.root_album.can_edit);
      }, ""), n.publicMode === !1 && q.json.albums.length > 0 && (s = x.divider(n.locale.ALBUMS)), s += q.json.albums.reduce(function(d, h) {
        return q.parse(h), d + x.album(h, !n.rights.root_album.can_edit);
      }, "");
      let l = "";
      u += q.json.shared_albums.reduce(function(d, h) {
        return q.parse(h), l !== h.owner_name && n.publicMode === !1 && (d += x.divider(h.owner_name), l = h.owner_name), d + x.album(h, !n.rights.settings.can_edit);
      }, ""), e === "" && i === "" && s === "" && u === "" ? (n.content.html(""), n.content.append(x.no_content("eye"))) : n.content.html(e + i + s + u), v.apply_nsfw_filter(), M.album.content.restoreScroll();
    },
    /**
     * @param {string} albumID
     * @returns {void}
     */
    title: function(e) {
      const i = q.getByID(e), s = i.title ? i.title : n.locale.UNTITLED;
      p('.album[data-id="' + e + '"] .overlay h1').text(s).attr("title", s);
    },
    /**
     * @param {string} albumID
     * @returns {void}
     */
    delete: function(e) {
      p('.album[data-id="' + e + '"]').css("opacity", 0).animate(
        {
          width: 0,
          marginLeft: 0
        },
        300,
        function() {
          p(this).remove(), q.json.albums.length <= 0 && n.content.find(".divider:last-child").remove();
        }
      );
    }
  }
};
M.album = {
  /** @returns {void} */
  init: function() {
    H.clearSelection(), M.album.sidebar(), M.album.title(), M.album.public(), M.album.nsfw(), M.album.nsfw_warning.init(), M.album.content.init(), v.json.init = !0;
  },
  /** @returns {void} */
  title: function() {
    if ((P.album() || !v.json.init) && !P.photo())
      switch (v.getID()) {
        case Me.STARRED:
          n.setMetaData(n.locale.STARRED);
          break;
        case Me.PUBLIC:
          n.setMetaData(n.locale.PUBLIC);
          break;
        case Me.RECENT:
          n.setMetaData(n.locale.RECENT);
          break;
        case Me.UNSORTED:
          n.setMetaData(n.locale.UNSORTED);
          break;
        case Me.ON_THIS_DAY:
          n.setMetaData(n.locale.ON_THIS_DAY);
          break;
        default:
          v.json.init && Q.changeAttr("title", v.json.title), n.setMetaData(v.json.title, !0, v.json.description);
          break;
      }
  },
  nsfw_warning: {
    /** @returns {void} */
    init: function() {
      if (!n.nsfw_warning) {
        p("#sensitive_warning").removeClass("active");
        return;
      }
      v.json.policy.is_nsfw && !n.nsfw_unlocked_albums.includes(v.json.id) ? p("#sensitive_warning").addClass("active") : p("#sensitive_warning").removeClass("active");
    },
    /** @returns {void} */
    next: function() {
      n.nsfw_unlocked_albums.push(v.json.id), p("#sensitive_warning").removeClass("active");
    }
  },
  content: {
    /** @returns {void} */
    init: function() {
      let e = "", i = "", s = "";
      v.json.albums && v.json.albums.forEach(function(u) {
        q.parse(u), i += x.album(u, !v.json.rights.can_edit);
      }), v.json.photos && v.json.photos.forEach(function(u) {
        e += x.photo(u, !v.json.rights.can_edit);
      }), e !== "" && (n.layout === 1 ? e = '<div class="justified-layout">' + e + "</div>" : n.layout === 2 && (e = '<div class="unjustified-layout">' + e + "</div>")), i !== "" && e !== "" && (s = x.divider(n.locale.ALBUMS)), s += i, i !== "" && e !== "" && (s += x.divider(n.locale.PHOTOS)), s += e, n.content.html(s), v.apply_nsfw_filter(), setTimeout(function() {
        M.album.content.justify();
      }, 0);
    },
    /** @returns {void} */
    restoreScroll: function() {
      const e = JSON.parse(localStorage.getItem("scroll")), i = window.location.href;
      p("#lychee_view_container").scrollTop(e != null && e[i] ? e[i] : 0);
    },
    /**
     * @param {string} photoID
     * @returns {void}
     */
    title: function(e) {
      const i = v.getByID(e), s = i.title ? i.title : n.locale.UNTITLED;
      p('.photo[data-id="' + e + '"] .overlay h1').text(s).attr("title", s);
    },
    /**
     * @param {string} albumID
     * @returns {void}
     */
    titleSub: function(e) {
      const i = v.getSubByID(e), s = i.title ? i.title : n.locale.UNTITLED;
      p('.album[data-id="' + e + '"] .overlay h1').text(s).attr("title", s);
    },
    /**
     * @param {string} photoID
     * @returns {void}
     */
    star: function(e) {
      const i = p('.photo[data-id="' + e + '"] .icn-star');
      v.getByID(e).is_starred ? i.addClass("badge--star") : i.removeClass("badge--star");
    },
    /**
     * @param {string} photoID
     * @returns {void}
     */
    public: function(e) {
      const i = p('.photo[data-id="' + e + '"] .icn-share');
      v.getByID(e).is_public === 1 ? i.addClass("badge--visible badge--hidden") : i.removeClass("badge--visible badge--hidden");
    },
    /**
     * @param {string} photoID
     * @returns {void}
     */
    cover: function(e) {
      if (p(".album .icn-cover").removeClass("badge--cover"), p(".photo .icn-cover").removeClass("badge--cover"), v.json.cover_id === e) {
        let i = p('.photo[data-id="' + e + '"] .icn-cover');
        i.length > 0 ? i.addClass("badge--cover") : p.each(v.json.albums, function() {
          if (this.thumb.id === e)
            return p('.album[data-id="' + this.id + '"] .icn-cover').addClass("badge--cover"), !1;
        });
      }
    },
    /**
     * @param {Photo} data
     * @returns {void}
     */
    updatePhoto: function(e) {
      let i, s = "";
      n.layout === 0 ? (i = e.size_variants.thumb.url, e.size_variants.thumb2x !== null && (s = `${e.size_variants.thumb2x.url} 2x`)) : e.size_variants.small !== null ? (i = e.size_variants.small.url, e.size_variants.small2x !== null && (s = `${e.size_variants.small.url} ${e.size_variants.small.width}w, ${e.size_variants.small2x.url} ${e.size_variants.small2x.width}w`)) : e.size_variants.medium !== null ? (i = e.size_variants.medium.url, e.size_variants.medium2x !== null && (s = `${e.size_variants.medium.url} ${e.size_variants.medium.width}w, ${e.size_variants.medium2x.url} ${e.size_variants.medium2x.width}w`)) : !e.type || e.type.indexOf("video") !== 0 ? i = e.size_variants.original.url : (i = e.size_variants.thumb.url, e.size_variants.thumb2x !== null && (s = `${e.size_variants.thumb.url} ${e.size_variants.thumb.width}w, ${e.size_variants.thumb2x.url} ${e.size_variants.thumb2x.width}w`)), p('.photo[data-id="' + e.id + '"] > span.thumbimg > img').attr("data-src", i).attr("data-srcset", s).addClass("lazyload"), setTimeout(() => M.album.content.justify(), 0);
    },
    /**
     * @param {string} photoID
     * @param {boolean} [justify=false]
     * @returns {void}
     */
    delete: function(e, i = !1) {
      p('.photo[data-id="' + e + '"]').css("opacity", 0).animate(
        {
          width: 0,
          marginLeft: 0
        },
        300,
        function() {
          if (p(this).remove(), v.json) {
            if (P.sidebar()) {
              let s = 0;
              p.each(v.json.photos, function() {
                this.type && this.type.indexOf("video") > -1 && s++;
              }), v.json.photos.length - s > 0 ? Q.changeAttr("images", (v.json.photos.length - s).toString()) : Q.hideAttr("images"), s > 0 ? Q.changeAttr("videos", s.toString()) : Q.hideAttr("videos");
            }
            v.json.photos.length <= 0 && n.content.find(".divider").remove(), i && setTimeout(() => M.album.content.justify(), 0);
          }
        }
      );
    },
    /**
     * @param {string} albumID
     * @returns {void}
     */
    deleteSub: function(e) {
      p('.album[data-id="' + e + '"]').css("opacity", 0).animate(
        {
          width: 0,
          marginLeft: 0
        },
        300,
        function() {
          p(this).remove(), v.json && (v.json.albums.length <= 0 && n.content.find(".divider").remove(), P.sidebar() && (v.json.albums.length > 0 ? Q.changeAttr("subalbums", v.json.albums.length.toString()) : Q.hideAttr("subalbums")));
        }
      );
    },
    /**
     * Lays out the photos inside an album or a search result.
     *
     * This method is a misnomer, because it does not necessarily
     * create a justified layout, but the configured layout as specified
     * by `lychee.layout` which can also be a non-justified layout.
     *
     * Also note that this method is bastardized by `search.find`.
     * Hence, this method would better not be part of `view.album.content`,
     * because it is not exclusively used for an album.
     *
     * TODO: Livewire front-end will make this a pure CSS solution.
     *
     * @returns {void}
     */
    justify: function() {
      if (v.json === null || v.json.photos.length === 0)
        return;
      const e = v.json.photos;
      if (n.layout === 1) {
        const i = p(".justified-layout");
        let s = parseFloat(i.width());
        s === 0 && (s = p(window).width() - 2 * parseFloat(i.css("margin")));
        const u = e.map(function(E) {
          const C = E.size_variants.original.height, m = E.size_variants.original.width, W = C > 0 ? m / C : 1;
          return E.type && E.type.indexOf("video") !== -1 && E.size_variants.small === null && E.size_variants.medium === null ? 1 : W;
        }), l = p(".justified-layout > div.photo"), d = parseFloat(l.css("--lychee-default-height")), h = Hs(u, {
          containerWidth: s,
          containerPadding: 0,
          targetRowHeight: d
        });
        p(".justified-layout").css("height", h.containerHeight + "px"), p(".justified-layout > div").each(function(E) {
          if (!h.boxes[E])
            return !1;
          const C = p(this).css({
            top: h.boxes[E].top + "px",
            width: h.boxes[E].width + "px",
            height: h.boxes[E].height + "px",
            left: h.boxes[E].left + "px"
          }).find(".thumbimg > img");
          C.length > 0 && C[0].getAttribute("data-srcset") && C[0].setAttribute("sizes", h.boxes[E].width + "px");
        }), i.removeClass("laying-out");
      } else if (n.layout === 2) {
        const i = p(".unjustified-layout");
        let s = parseFloat(i.width());
        s === 0 && (s = p(window).width() - 2 * parseFloat(i.css("margin")));
        const u = p(".unjustified-layout > div.photo"), l = parseFloat(u.css("max-height")), d = parseFloat(u.css("margin-right"));
        i.addClass("laying-out"), u.each(function(h) {
          if (!e[h])
            return !1;
          let E = e[h].size_variants.original.height > 0 ? e[h].size_variants.original.width / e[h].size_variants.original.height : 1;
          e[h].type && e[h].type.indexOf("video") > -1 && e[h].size_variants.small === null && e[h].size_variants.medium === null && (E = 1);
          let C = l, m = C * E;
          m > s - d && (m = s - d, C = m / E);
          const W = p(this).css({
            width: m + "px",
            height: C + "px"
          }).find(".thumbimg > img");
          W.length > 0 && W[0].getAttribute("data-srcset") && W[0].setAttribute("sizes", m + "px");
        }), i.removeClass("laying-out");
      }
      M.album.content.restoreScroll();
    }
  },
  /**
   * @returns {void}
   */
  description: function() {
    Q.changeAttr("description", v.json.description ? v.json.description : "");
  },
  /**
   * @returns {void}
   */
  show_tags: function() {
    Q.changeAttr("show_tags", v.json.show_tags.join(", "));
  },
  /**
   * @returns {void}
   */
  license: function() {
    let e;
    switch (v.json.license) {
      case "none":
        e = "";
        break;
      case "reserved":
        e = n.locale.ALBUM_RESERVED;
        break;
      default:
        e = v.json.license;
        break;
    }
    Q.changeAttr("license", e);
  },
  /**
   * @returns {void}
   */
  public: function() {
    p("#button_visibility_album, #button_sharing_album_users").removeClass("active--not-hidden active--hidden"), v.json.policy.is_public ? (v.json.policy.is_link_required ? p("#button_visibility_album, #button_sharing_album_users").addClass("active--hidden") : p("#button_visibility_album, #button_sharing_album_users").addClass("active--not-hidden"), p(".photo .iconic-share").remove(), v.json.init && Q.changeAttr("public", n.locale.ALBUM_SHR_YES)) : v.json.init && Q.changeAttr("public", n.locale.ALBUM_SHR_NO);
  },
  /**
   * @returns {void}
   */
  requiresLink: function() {
    v.json.policy.is_link_required ? Q.changeAttr("hidden", n.locale.ALBUM_SHR_YES) : Q.changeAttr("hidden", n.locale.ALBUM_SHR_NO);
  },
  /**
   * @returns {void}
   */
  nsfw: function() {
    v.json.policy.is_nsfw ? p("#button_nsfw_album").addClass("active").attr("title", n.locale.ALBUM_UNMARK_NSFW) : p("#button_nsfw_album").removeClass("active").attr("title", n.locale.ALBUM_MARK_NSFW);
  },
  /**
   * @returns {void}
   */
  downloadable: function() {
    v.json.policy.grants_download ? Q.changeAttr("downloadable", n.locale.ALBUM_SHR_YES) : Q.changeAttr("downloadable", n.locale.ALBUM_SHR_NO);
  },
  /**
   * @returns {void}
   */
  password: function() {
    v.json.policy.is_password_required ? Q.changeAttr("password", n.locale.ALBUM_SHR_YES) : Q.changeAttr("password", n.locale.ALBUM_SHR_NO);
  },
  /**
   * @returns {void}
   */
  sidebar: function() {
    if ((P.album() || v.json && !v.json.init) && !P.photo()) {
      const e = Q.createStructure.album(v.json), i = Q.render(e);
      Q.dom("#lychee_sidebar_content").html(i), Q.bind();
    }
  }
};
M.photo = {
  /**
   * @param {boolean} autoplay
   * @returns {void}
   */
  init: function(e) {
    H.clearSelection(), M.photo.sidebar(), M.photo.title(), M.photo.star(), M.photo.public(), M.photo.header(), M.photo.photo(e), S.json.init = !0;
  },
  /**
   * @returns {void}
   */
  show: function() {
    if (n.content.addClass("view"), F.setMode("photo"), !P.photo()) {
      let e = null;
      p(document).bind("mousemove", function() {
        clearTimeout(e), !S.isLivePhotoPlaying() && n.header_auto_hide && (F.show(), e = setTimeout(F.hideIfLivePhotoNotPlaying, 2500));
      }), n.header_auto_hide && setTimeout(F.hideIfLivePhotoNotPlaying, 2500), n.animate(n.imageview, "fadeIn"), n.imageview.addClass("active");
    }
  },
  /**
   * @returns {void}
   */
  hide: function() {
    F.show(), n.content.removeClass("view"), F.setMode("album"), p(document).unbind("mousemove"), p("video").length && p("video")[p("video").length - 1].pause(), n.animate(n.imageview, "fadeOut"), setTimeout(() => {
      n.imageview.removeClass("active"), M.album.sidebar();
    }, 300);
  },
  /**
   * @returns {void}
   */
  title: function() {
    S.json.init && Q.changeAttr("title", S.json.title ? S.json.title : "");
    const e = S.json.size_variants.medium ? S.json.size_variants.medium.url : S.json.size_variants.original.url;
    n.setMetaData(S.json.title ? S.json.title : n.locale.UNTITLED, !0, S.json.description, e);
  },
  /**
   * @returns {void}
   */
  description: function() {
    S.json.init && Q.changeAttr("description", S.json.description ? S.json.description : "");
  },
  /**
   * @returns {void}
   */
  uploaded: function() {
    S.json.init && Q.changeAttr("uploaded", S.json.created_at ? n.locale.printDateTime(S.json.created_at) : "");
  },
  /**
   * @returns {void}
   */
  license: function() {
    let e;
    switch (S.json.license) {
      case "none":
        e = "";
        break;
      case "reserved":
        e = n.locale.PHOTO_RESERVED;
        break;
      default:
        e = S.json.license;
        break;
    }
    S.json.init && Q.changeAttr("license", e);
  },
  /**
   * @returns {void}
   */
  star: function() {
    S.json.is_starred ? p("#button_star").addClass("active").attr("title", n.locale.UNSTAR_PHOTO) : p("#button_star").removeClass("active").attr("title", n.locale.STAR_PHOTO);
  },
  /**
   * @returns {void}
   */
  public: function() {
    p("#button_visibility").removeClass("active--hidden active--not-hidden"), S.json.is_public === !0 ? (p("#button_visibility").addClass("active--hidden"), S.json.init && Q.changeAttr("public", n.locale.PHOTO_SHR_YES)) : S.json.album_id !== null && v.json.policy.is_public === !0 ? (p("#button_visibility").addClass("active--not-hidden"), S.json.init && Q.changeAttr("public", n.locale.PHOTO_SHR_YES)) : S.json.init && Q.changeAttr("public", n.locale.PHOTO_SHR_NO);
  },
  /**
   * @returns {void}
   */
  tags: function() {
    Q.changeAttr("tags", x.tags(S.json.tags), !0), Q.bind();
  },
  /**
   * @param {boolean} autoplay
   * @returns {void}
   */
  photo: function(e) {
    let i = x.imageview(S.json, P.header(), e);
    n.imageview.html(i.html), V.makeFocusable(n.imageview), S.isLivePhoto() && (S.livePhotosObject = LivePhotosKit.Player(document.getElementById("livephoto"))), M.photo.onresize();
    const s = n.imageview.find("a#next"), u = n.imageview.find("a#previous"), l = S.getID(), d = v.json && v.json.photos ? v.getByID(l) : null, h = d && d.next_photo_id ? v.getByID(d.next_photo_id) : null, E = d && d.previous_photo_id ? v.getByID(d.previous_photo_id) : null, C = p("img#image");
    if (C.length > 0 && (!C[0].complete || C[0].currentSrc !== null && C[0].currentSrc === "" ? (i.thumb !== "" && C.css("background-image", n.html`url("${i.thumb}")`), C.on("load", function() {
      S.preloadNextPrev(S.getID());
    })) : S.preloadNextPrev(S.getID())), h === null || n.viewMode === !0)
      s.hide();
    else {
      let m = "img/placeholder.png";
      h.size_variants.thumb !== null ? m = h.size_variants.thumb.url : h.type.indexOf("video") > -1 && (m = "img/play-icon.png"), s.css("background-image", n.html`linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("${m}")`);
    }
    if (E === null || n.viewMode === !0)
      u.hide();
    else {
      let m = "img/placeholder.png";
      E.size_variants.thumb !== null ? m = E.size_variants.thumb.url : E.type.indexOf("video") > -1 && (m = "img/play-icon.png"), u.css("background-image", n.html`linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url("${m}")`);
    }
  },
  /**
   * @returns {void}
   */
  sidebar: function() {
    const e = Q.createStructure.photo(S.json), i = Q.render(e), s = !!(S.json.latitude && S.json.longitude);
    if (Q.dom("#lychee_sidebar_content").html(i), Q.bind(), s && n.map_display) {
      delete L.Icon.Default.prototype._getIconUrl, L.Icon.Default.mergeOptions({
        iconRetinaUrl: "img/marker-icon-2x.png",
        iconUrl: "img/marker-icon.png",
        shadowUrl: "img/marker-shadow.png"
      });
      const u = L.map("leaflet_map_single_photo").setView([S.json.latitude, S.json.longitude], 13);
      if (L.tileLayer(map_provider_layer_attribution[n.map_provider].layer, {
        attribution: map_provider_layer_attribution[n.map_provider].attribution
      }).addTo(u), !n.map_display_direction || !S.json.img_direction)
        L.marker([S.json.latitude, S.json.longitude]).addTo(u);
      else {
        const l = L.icon({
          iconUrl: "img/view-angle-icon.png",
          iconRetinaUrl: "img/view-angle-icon-2x.png",
          iconSize: [100, 58],
          // size of the icon
          iconAnchor: [50, 49]
          // point of the icon which will correspond to marker's location
        });
        L.marker([S.json.latitude, S.json.longitude], { icon: l }).addTo(u).setRotationAngle(S.json.img_direction);
      }
    }
  },
  /**
   * @returns {void}
   */
  header: function() {
    (S.json.type && (S.json.type.indexOf("video") === 0 || S.json.type === "raw") || S.json.live_photo_url !== "" && S.json.live_photo_url !== null) && p("#button_rotate_cwise, #button_rotate_ccwise").hide();
  },
  /**
   * @returns {void}
   */
  onresize: function() {
    if (!S.json || S.json.size_variants.medium === null || S.json.size_variants.medium2x === null)
      return;
    const e = S.json.size_variants.medium.width, i = S.json.size_variants.medium.height, s = p(window).outerWidth(), u = p(window).outerHeight();
    let l = e < s ? e : s;
    l * i / e > u && (l = u * e / i), p("img#image").attr("sizes", l + "px");
  }
};
M.settings = {
  /**
   * @returns {void}
   */
  init: function() {
    H.clearSelection(), P.photo() && M.photo.hide(), M.settings.title(), F.setMode("config"), M.settings.content.init();
  },
  /**
   * @returns {void}
   */
  title: function() {
    n.setMetaData(n.locale.SETTINGS);
  },
  /**
   * @returns {void}
   */
  clearContent: function() {
    n.content.html('<div class="settings_view"></div>');
  },
  content: {
    /**
     * @returns {void}
     */
    init: function() {
      M.settings.clearContent(), n.rights.user.can_edit && M.settings.content.setLogin(), n.rights.settings.can_edit && (M.settings.content.setSorting(), M.settings.content.setDropboxKey(), M.settings.content.setLang(), M.settings.content.setDefaultLicense(), M.settings.content.setLayout(), M.settings.content.setPublicSearch(), M.settings.content.setAlbumDecoration(), M.settings.content.setOverlayType(), M.settings.content.setMapDisplay(), M.settings.content.setNSFWVisible(), M.settings.content.setNotification(), M.settings.content.setCSS(), M.settings.content.setJS(), M.settings.content.moreButton());
    },
    /**
     * @returns {void}
     */
    setLogin: function() {
      let e = "hidden";
      n.allow_username_change && (e = "text");
      const i = n.html`
			<div class="setLogin">
			<form>
			  <p>$${n.locale.PASSWORD_TITLE}
				  <input name='oldPassword' class='text' type='password' placeholder='$${n.locale.PASSWORD_CURRENT}' value=''>
			  </p>
			  <p>$${n.locale.PASSWORD_TEXT}
				  <input name='username' class='text' type='$${e}' placeholder='$${n.locale.LOGIN_USERNAME}' value=''>
				  <input name='password' class='text' type='password' placeholder='$${n.locale.LOGIN_PASSWORD}' value=''>
				  <input name='confirm' class='text' type='password' placeholder='$${n.locale.LOGIN_PASSWORD_CONFIRM}' value=''>
			  </p>
			<div class="basicModal__buttons">
				<!--<a id="basicModal__cancel" class="basicModal__button ">Cancel</a>-->
				<a id="basicModal__action_password_change" class="basicModal__button ">$${n.locale.PASSWORD_CHANGE}</a>
				<a id="basicModal__action_token" class="basicModal__button ">$${n.locale.TOKEN_BUTTON}</a>
			</div>
			</form>
			</div>`;
      p(".settings_view").append(i), ie.bind("#basicModal__action_password_change", ".setLogin", ie.changeLogin), ie.bind("#basicModal__action_token", ".setLogin", ie.openTokenDialog);
    },
    /**
     * @returns {void}
     */
    clearLogin: function() {
      p("input[name=oldUsername], input[name=oldPassword], input[name=username], input[name=password], input[name=confirm]").val("");
    },
    /**
     * Renders the area of the settings related to sorting
     *
     * TODO: Note, the method is a misnomer.
     * It does not **set** any sorting, see {@link settings.changeSorting}
     * for that.
     * This method only creates the HTML GUI.
     *
     * @returns {void}
     */
    setSorting: function() {
      const e = n.html`
				<div class="setSorting">
					<p>
						${Qe.sprintf(
        n.locale.SORT_ALBUM_BY,
        `<span class="select">
							<select id="settings_albums_sorting_column" name="sorting_albums_column">
								<option value='created_at'>${n.locale.SORT_ALBUM_SELECT_1}</option>
								<option value='title'>${n.locale.SORT_ALBUM_SELECT_2}</option>
								<option value='description'>${n.locale.SORT_ALBUM_SELECT_3}</option>
								<option value='is_public'>${n.locale.SORT_ALBUM_SELECT_4}</option>
								<option value='max_taken_at'>${n.locale.SORT_ALBUM_SELECT_5}</option>
								<option value='min_taken_at'>${n.locale.SORT_ALBUM_SELECT_6}</option>
							</select>
						</span>`,
        `<span class="select">
							<select id="settings_albums_sorting_order" name="sorting_albums_order">
								<option value='ASC'>${n.locale.SORT_ASCENDING}</option>
								<option value='DESC'>${n.locale.SORT_DESCENDING}</option>
							</select>
						</span>`
      )}
					</p>
					<p>
						${Qe.sprintf(
        n.locale.SORT_PHOTO_BY,
        `<span class="select">
							<select id="settings_photos_sorting_column" name="sorting_photos_column">
								<option value='created_at'>${n.locale.SORT_PHOTO_SELECT_1}</option>
								<option value='taken_at'>${n.locale.SORT_PHOTO_SELECT_2}</option>
								<option value='title'>${n.locale.SORT_PHOTO_SELECT_3}</option>
								<option value='description'>${n.locale.SORT_PHOTO_SELECT_4}</option>
								<option value='is_public'>${n.locale.SORT_PHOTO_SELECT_5}</option>
								<option value='is_starred'>${n.locale.SORT_PHOTO_SELECT_6}</option>
								<option value='type'>${n.locale.SORT_PHOTO_SELECT_7}</option>
							</select>
				  		</span>`,
        `<span class="select">
							<select id="settings_photos_sorting_order" name="sorting_photos_order">
								<option value='ASC'>${n.locale.SORT_ASCENDING}</option>
								<option value='DESC'>${n.locale.SORT_DESCENDING}</option>
							</select>
						</span>`
      )}
					</p>
					<div class="basicModal__buttons">
						<!--<a id="basicModal__cancel" class="basicModal__button ">Cancel</a>-->
						<a id="basicModal__action_sorting_change" class="basicModal__button ">$${n.locale.SORT_CHANGE}</a>
					</div>
				</div>
			`;
      p(".settings_view").append(e), n.sorting_albums && (p(".setSorting select#settings_albums_sorting_column").val(n.sorting_albums.column), p(".setSorting select#settings_albums_sorting_order").val(n.sorting_albums.order)), n.sorting_photos && (p(".setSorting select#settings_photos_sorting_column").val(n.sorting_photos.column), p(".setSorting select#settings_photos_sorting_order").val(n.sorting_photos.order)), ie.bind("#basicModal__action_sorting_change", ".setSorting", ie.changeSorting);
    },
    /**
     * @returns {void}
     */
    setDropboxKey: function() {
      let e = `
			<div class="setDropBox">
			  <p>${n.locale.DROPBOX_TEXT}
			  <input class='text' name='key' type='text' placeholder='${n.locale.SETTINGS_DROPBOX_KEY}' value='${n.dropboxKey}'>
			  </p>
				<div class="basicModal__buttons">
					<a id="basicModal__action_dropbox_change" class="basicModal__button">${n.locale.DROPBOX_TITLE}</a>
				</div>
			  </div>
			  `;
      p(".settings_view").append(e), ie.bind("#basicModal__action_dropbox_change", ".setDropBox", ie.changeDropboxKey);
    },
    /**
     * @returns {void}
     */
    setLang: function() {
      let e = `
				<div class="setLang">
					<p>
						${n.locale.LANG_TEXT}
			  			<span class="select">
							<select id="settings_lang" name="lang">
								${n.lang_available.reduce(function(i, s) {
        return i + (n.lang === s ? "<option selected>" : "<option>") + s + "</option>";
      }, "")}
							</select>
			  			</span>
					</p>
					<div class="basicModal__buttons">
						<a id="basicModal__action_set_lang" class="basicModal__button">${n.locale.LANG_TITLE}</a>
					</div>
				</div>`;
      p(".settings_view").append(e), ie.bind("#basicModal__action_set_lang", ".setLang", ie.changeLang);
    },
    /**
     * @returns {void}
     */
    setDefaultLicense: function() {
      const e = `
			<div class="setDefaultLicense">
			<p>${n.locale.DEFAULT_LICENSE}
			<span class="select" style="width:270px">
				<select name="license" id="license">
					<option value="none">${n.locale.PHOTO_LICENSE_NONE}</option>
					<option value="reserved">${n.locale.PHOTO_RESERVED}</option>
					<option value="CC0">CC0 - Public Domain</option>
					<option value="CC-BY-1.0">CC Attribution 1.0</option>
					<option value="CC-BY-2.0">CC Attribution 2.0</option>
					<option value="CC-BY-2.5">CC Attribution 2.5</option>
					<option value="CC-BY-3.0">CC Attribution 3.0</option>
					<option value="CC-BY-4.0">CC Attribution 4.0</option>
					<option value="CC-BY-ND-1.0">CC Attribution-NoDerivatives 1.0</option>
					<option value="CC-BY-ND-2.0">CC Attribution-NoDerivatives 2.0</option>
					<option value="CC-BY-ND-2.5">CC Attribution-NoDerivatives 2.5</option>
					<option value="CC-BY-ND-3.0">CC Attribution-NoDerivatives 3.0</option>
					<option value="CC-BY-ND-4.0">CC Attribution-NoDerivatives 4.0</option>
					<option value="CC-BY-SA-1.0">CC Attribution-ShareAlike 1.0</option>
					<option value="CC-BY-SA-2.0">CC Attribution-ShareAlike 2.0</option>
					<option value="CC-BY-SA-2.5">CC Attribution-ShareAlike 2.5</option>
					<option value="CC-BY-SA-3.0">CC Attribution-ShareAlike 3.0</option>
					<option value="CC-BY-SA-4.0">CC Attribution-ShareAlike 4.0</option>
					<option value="CC-BY-NC-1.0">CC Attribution-NonCommercial 1.0</option>
					<option value="CC-BY-NC-2.0">CC Attribution-NonCommercial 2.0</option>
					<option value="CC-BY-NC-2.5">CC Attribution-NonCommercial 2.5</option>
					<option value="CC-BY-NC-3.0">CC Attribution-NonCommercial 3.0</option>
					<option value="CC-BY-NC-4.0">CC Attribution-NonCommercial 4.0</option>
					<option value="CC-BY-NC-ND-1.0">CC Attribution-NonCommercial-NoDerivatives 1.0</option>
					<option value="CC-BY-NC-ND-2.0">CC Attribution-NonCommercial-NoDerivatives 2.0</option>
					<option value="CC-BY-NC-ND-2.5">CC Attribution-NonCommercial-NoDerivatives 2.5</option>
					<option value="CC-BY-NC-ND-3.0">CC Attribution-NonCommercial-NoDerivatives 3.0</option>
					<option value="CC-BY-NC-ND-4.0">CC Attribution-NonCommercial-NoDerivatives 4.0</option>
					<option value="CC-BY-NC-SA-1.0">CC Attribution-NonCommercial-ShareAlike 1.0</option>
					<option value="CC-BY-NC-SA-2.0">CC Attribution-NonCommercial-ShareAlike 2.0</option>
					<option value="CC-BY-NC-SA-2.5">CC Attribution-NonCommercial-ShareAlike 2.5</option>
					<option value="CC-BY-NC-SA-3.0">CC Attribution-NonCommercial-ShareAlike 3.0</option>
					<option value="CC-BY-NC-SA-4.0">CC Attribution-NonCommercial-ShareAlike 4.0</option>
				</select>
			</span>
			<br />
			<a href="https://creativecommons.org/choose/" target="_blank">${n.locale.PHOTO_LICENSE_HELP}</a>
			</p>
			<div class="basicModal__buttons">
				<a id="basicModal__action_set_license" class="basicModal__button">${n.locale.SET_LICENSE}</a>
			</div>
			</div>
			`;
      p(".settings_view").append(e), p("select#license").val(n.default_license === "" ? "none" : n.default_license), ie.bind("#basicModal__action_set_license", ".setDefaultLicense", ie.setDefaultLicense);
    },
    /**
     * @returns {void}
     */
    setLayout: function() {
      const e = `
			<div class="setLayout">
			<p>${n.locale.LAYOUT_TYPE}
			<span class="select" style="width:270px">
				<select name="layout" id="layout">
					<option value="0">${n.locale.LAYOUT_SQUARES}</option>
					<option value="1">${n.locale.LAYOUT_JUSTIFIED}</option>
					<option value="2">${n.locale.LAYOUT_UNJUSTIFIED}</option>
				</select>
			</span>
			</p>
			<div class="basicModal__buttons">
				<a id="basicModal__action_set_layout" class="basicModal__button">${n.locale.SET_LAYOUT}</a>
			</div>
			</div>
			`;
      p(".settings_view").append(e), p("select#layout").val(n.layout), ie.bind("#basicModal__action_set_layout", ".setLayout", ie.setLayout);
    },
    /**
     * @returns {void}
     */
    setPublicSearch: function() {
      const e = `
			<div class="setPublicSearch">
			<p>${n.locale.PUBLIC_SEARCH_TEXT}
			<label class="switch">
			  <input id="PublicSearch" type="checkbox" name="public_search">
			  <span class="slider round"></span>
			</label>
			</p>
			</div>
			`;
      p(".settings_view").append(e), n.public_search && p("#PublicSearch").click(), ie.bind("#PublicSearch", ".setPublicSearch", ie.changePublicSearch);
    },
    /**
     * @returns {void}
     */
    setNSFWVisible: function() {
      let e = `
			<div class="setNSFWVisible">
			<p>${n.locale.NSFW_VISIBLE_TEXT_1}
			<label class="switch">
			  <input id="NSFWVisible" type="checkbox" name="nsfw_visible">
			  <span class="slider round"></span>
			</label></p>
			<p>${n.locale.NSFW_VISIBLE_TEXT_2}
			</p>
			</div>
			`;
      p(".settings_view").append(e), n.nsfw_visible_saved && p("#NSFWVisible").click(), ie.bind("#NSFWVisible", ".setNSFWVisible", ie.changeNSFWVisible);
    },
    // TODO: extend to the other settings.
    /**
     * @returns {void}
     */
    setAlbumDecoration: function() {
      let e = `
			<div class="setAlbumDecoration">
			<p>${n.locale.ALBUM_DECORATION}
			<span class="select" style="width:270px">
				<select name="album_decoration" id="AlbumDecorationType">
					<option value="none">${n.locale.ALBUM_DECORATION_NONE}</option>
					<option value="layers">${n.locale.ALBUM_DECORATION_ORIGINAL}</option>
					<option value="album">${n.locale.ALBUM_DECORATION_ALBUM}</option>
					<option value="photo">${n.locale.ALBUM_DECORATION_PHOTO}</option>
					<option value="all">${n.locale.ALBUM_DECORATION_ALL}</option>
				</select>
			</span>
			<p>${n.locale.ALBUM_DECORATION_ORIENTATION}
			<span class="select" style="width:270px">
				<select name="album_decoration_orientation" id="AlbumDecorationOrientation">
					<option value="row">${n.locale.ALBUM_DECORATION_ORIENTATION_ROW}</option>
					<option value="row-reverse">${n.locale.ALBUM_DECORATION_ORIENTATION_ROW_REVERSE}</option>
					<option value="column">${n.locale.ALBUM_DECORATION_ORIENTATION_COLUMN}</option>
					<option value="column-reverse">${n.locale.ALBUM_DECORATION_ORIENTATION_COLUMN_REVERSE}</option>
				</select>
			</span>
			<div class="basicModal__buttons">
				<a id="basicModal__action_set_album_decoration" class="basicModal__button">${n.locale.SET_ALBUM_DECORATION}</a>
			</div>
			</div>
			`;
      p(".settings_view").append(e), p("select#AlbumDecorationType").val(n.album_decoration ? n.album_decoration : "layers"), p("select#AlbumDecorationOrientation").val(n.album_decoration_orientation ? n.album_decoration_orientation : "row"), ie.bind("#basicModal__action_set_album_decoration", ".setAlbumDecoration", ie.setAlbumDecoration);
    },
    /**
     * @returns {void}
     */
    setOverlayType: function() {
      let e = `
			<div class="setOverlayType">
			<p>${n.locale.OVERLAY_TYPE}
			<span class="select" style="width:270px">
				<select name="image_overlay_type" id="ImgOverlayType">
					<option value="exif">${n.locale.OVERLAY_EXIF}</option>
					<option value="desc">${n.locale.OVERLAY_DESCRIPTION}</option>
					<option value="date">${n.locale.OVERLAY_DATE}</option>
					<option value="none">${n.locale.OVERLAY_NONE}</option>
				</select>
			</span>
			<div class="basicModal__buttons">
				<a id="basicModal__action_set_overlay_type" class="basicModal__button">${n.locale.SET_OVERLAY_TYPE}</a>
			</div>
			</div>
			`;
      p(".settings_view").append(e), p("select#ImgOverlayType").val(n.image_overlay_type_default ? n.image_overlay_type_default : "exif"), ie.bind("#basicModal__action_set_overlay_type", ".setOverlayType", ie.setOverlayType);
    },
    /**
     * @returns {void}
     */
    setMapDisplay: function() {
      let e = `
			<div class="setMapDisplay">
			<p>${n.locale.MAP_DISPLAY_TEXT}
			<label class="switch">
			  <input id="MapDisplay" type="checkbox" name="map_display">
			  <span class="slider round"></span>
			</label>
			</p>
			</div>
			`;
      p(".settings_view").append(e), n.map_display && p("#MapDisplay").click(), ie.bind("#MapDisplay", ".setMapDisplay", ie.changeMapDisplay), e = `
			<div class="setMapDisplayPublic">
			<p>${n.locale.MAP_DISPLAY_PUBLIC_TEXT}
			<label class="switch">
				<input id="MapDisplayPublic" type="checkbox" name="map_display_public">
				<span class="slider round"></span>
			</label>
			</p>
			</div>
			`, p(".settings_view").append(e), n.map_display_public && p("#MapDisplayPublic").click(), ie.bind("#MapDisplayPublic", ".setMapDisplayPublic", ie.changeMapDisplayPublic), e = `
			<div class="setMapProvider">
			<p>${n.locale.MAP_PROVIDER}
			<span class="select" style="width:270px">
				<select name="map_provider" id="MapProvider">
					<option value="Wikimedia">${n.locale.MAP_PROVIDER_WIKIMEDIA}</option>
					<option value="OpenStreetMap.org">${n.locale.MAP_PROVIDER_OSM_ORG}</option>
					<option value="OpenStreetMap.de">${n.locale.MAP_PROVIDER_OSM_DE}</option>
					<option value="OpenStreetMap.fr">${n.locale.MAP_PROVIDER_OSM_FR}</option>
					<option value="RRZE">${n.locale.MAP_PROVIDER_RRZE}</option>
				</select>
			</span>
			<div class="basicModal__buttons">
				<a id="basicModal__action_set_map_provider" class="basicModal__button">${n.locale.SET_MAP_PROVIDER}</a>
			</div>
			</div>
			`, p(".settings_view").append(e), p("select#MapProvider").val(n.map_provider ? n.map_provider : "Wikimedia"), ie.bind("#basicModal__action_set_map_provider", ".setMapProvider", ie.setMapProvider), e = `
			<div class="setMapIncludeSubAlbums">
			<p>${n.locale.MAP_INCLUDE_SUBALBUMS_TEXT}
			<label class="switch">
			  <input id="MapIncludeSubAlbums" type="checkbox" name="map_include_subalbums">
			  <span class="slider round"></span>
			</label>
			</p>
			</div>
			`, p(".settings_view").append(e), n.map_include_subalbums && p("#MapIncludeSubAlbums").click(), ie.bind("#MapIncludeSubAlbums", ".setMapIncludeSubAlbums", ie.changeMapIncludeSubAlbums), e = `
			<div class="setLocationDecoding">
			<p>${n.locale.LOCATION_DECODING}
			<label class="switch">
			  <input id="LocationDecoding" type="checkbox" name="location_decoding">
			  <span class="slider round"></span>
			</label>
			</p>
			</div>
			`, p(".settings_view").append(e), n.location_decoding && p("#LocationDecoding").click(), ie.bind("#LocationDecoding", ".setLocationDecoding", ie.changeLocationDecoding), e = `
			<div class="setLocationShow">
			<p>${n.locale.LOCATION_SHOW}
			<label class="switch">
			  <input id="LocationShow" type="checkbox" name="location_show">
			  <span class="slider round"></span>
			</label>
			</p>
			</div>
			`, p(".settings_view").append(e), n.location_show && p("#LocationShow").click(), ie.bind("#LocationShow", ".setLocationShow", ie.changeLocationShow), e = `
			<div class="setLocationShowPublic">
			<p>${n.locale.LOCATION_SHOW_PUBLIC}
			<label class="switch">
				<input id="LocationShowPublic" type="checkbox" name="location_show_public">
				<span class="slider round"></span>
			</label>
			</p>
			</div>
			`, p(".settings_view").append(e), n.location_show_public && p("#LocationShowPublic").click(), ie.bind("#LocationShowPublic", ".setLocationShowPublic", ie.changeLocationShowPublic);
    },
    /**
     * @returns {void}
     */
    setNotification: function() {
      const e = `
			<div class="setNewPhotosNotification">
			<p>${n.locale.NEW_PHOTOS_NOTIFICATION}
			<label class="switch">
				<input id="NewPhotosNotification" type="checkbox" name="new_photos_notification">
				<span class="slider round"></span>
			</label>
			</p>
			</div>
			`;
      p(".settings_view").append(e), n.new_photos_notification && p("#NewPhotosNotification").click(), ie.bind("#NewPhotosNotification", ".setNewPhotosNotification", ie.changeNewPhotosNotification);
    },
    /**
     * @returns {void}
     */
    setCSS: function() {
      const e = `
			<div class="setCSS">
			<p>${n.locale.CSS_TEXT}</p>
			<textarea id="css"></textarea>
			<div class="basicModal__buttons">
				<a id="basicModal__action_set_css" class="basicModal__button">${n.locale.CSS_TITLE}</a>
			</div>
			</div>`;
      p(".settings_view").append(e);
      let i = p(p("link")[1]).attr("href");
      K.getRawContent(i, function(s) {
        p("#css").html(s);
      }), ie.bind("#basicModal__action_set_css", ".setCSS", ie.changeCSS);
    },
    /**
     * @returns {void}
     */
    setJS: function() {
      const e = `
			<div class="setJS">
			<p>${n.locale.JS_TEXT}</p>
			<textarea id="js"></textarea>
			<div class="basicModal__buttons">
				<a id="basicModal__action_set_js" class="basicModal__button">${n.locale.JS_TITLE}</a>
			</div>
			</div>`;
      p(".settings_view").append(e);
      let i = p("script[src]:last").attr("src");
      K.getRawContent(i, function(s) {
        p("#js").html(s);
      }), ie.bind("#basicModal__action_set_js", ".setJS", ie.changeJS);
    },
    /**
     * @returns {void}
     */
    moreButton: function() {
      const e = n.html`
			<div class="setJS">
				<a id="basicModal__action_more" class="basicModal__button basicModal__button_MORE">${n.locale.MORE}</a>
			</div>
			`;
      p(".settings_view").append(e), p("#basicModal__action_more").on("click", M.full_settings.init);
    }
  }
};
M.full_settings = {
  /**
   * @returns {void}
   */
  init: function() {
    H.clearSelection(), M.full_settings.title(), M.full_settings.content.init();
  },
  /**
   * @returns {void}
   */
  title: function() {
    n.setMetaData(n.locale.FULL_SETTINGS);
  },
  /**
   * @returns {void}
   */
  clearContent: function() {
    n.content.html('<div class="settings_view"></div>');
  },
  content: {
    init: function() {
      M.full_settings.clearContent(), K.post(
        "Settings::getAll",
        {},
        /** @param {ConfigSetting[]} data */
        function(e) {
          let i = n.html`
						<div id="fullSettings">
						<div class="setting_line">
						<p class="warning">
						${n.locale.SETTINGS_ADVANCED_WARNING_EXPL}
						</p>
						</div>
						`, s = "";
          e.forEach(function(u) {
            u.cat && s !== u.cat && (i += n.html`
								<div class="setting_category">
									<p>$${u.cat}</p>
								</div>`, s = u.cat);
            const l = u.value ? u.value : "";
            i += n.html`
							<div class="setting_line">
								<p>
									<span class="text">$${u.key}</span>
									<input class="text" name="$${u.key}" type="text" value="$${l}" placeholder="" />
								</p>
							</div>`;
          }), i += n.html`
						<a id="FullSettingsSave_button"  class="basicModal__button basicModal__button_SAVE">${n.locale.SETTINGS_ADVANCED_SAVE}</a>
						</div>`, p(".settings_view").append(i), ie.bind("#FullSettingsSave_button", "#fullSettings", ie.save), p("#fullSettings").on("keypress", function(u) {
            ie.save_enter(u);
          });
        }
      );
    }
  }
};
M.notifications = {
  /** @returns {void} */
  init: function() {
    H.clearSelection(), P.photo() && M.photo.hide(), M.notifications.title(), F.setMode("config"), M.notifications.content.init();
  },
  /** @returns {void} */
  title: function() {
    n.setMetaData(n.locale.NOTIFICATIONS);
  },
  /** @returns {void} */
  clearContent: function() {
    n.content.html('<div class="settings_view"></div>');
  },
  content: {
    /** @returns {void} */
    init: function() {
      M.notifications.clearContent();
      const e = `
				<div class="setting_line">
					<p>${n.locale.USER_EMAIL_INSTRUCTION}</p>
				</div><div class="setLogin">
					<p id="UserUpdate">
						${n.locale.ENTER_EMAIL}
						<input
							name="email" class="text" type="text"
							placeholder="email@example.com"
							value="${notifications.json && notifications.json.email ? notifications.json.email : ""}"
						>
					</p>
					<div class="basicModal__buttons">
						<a id="UserUpdate_button" class="basicModal__button">${n.locale.SAVE}</a>
					</div>
				</div>`;
      p(".settings_view").append(e), ie.bind("#UserUpdate_button", "#UserUpdate", notifications.update);
    }
  }
};
M.users = {
  /** @returns {void} */
  init: function() {
    H.clearSelection(), P.photo() && M.photo.hide(), M.users.title(), F.setMode("config"), M.users.content.init();
  },
  /** @returns {void} */
  title: function() {
    n.setMetaData(n.locale.USERS);
  },
  /** @returns {void} */
  clearContent: function() {
    n.content.html('<div class="users_view"></div>');
  },
  content: {
    /** @returns {void} */
    init: function() {
      M.users.clearContent(), ut.json.length === 0 && p(".users_view").append(
        '<div class="users_view_line" style="margin-bottom: 50px;"><p style="text-align: center">User list is empty!</p></div>'
      );
      let e = `
				<div class="users_view_line"><p>
					<span class="text">${n.locale.USERNAME}</span>
					<span class="text">${n.locale.NEW_PASSWORD}</span>
					<span class="text_icon" title="${n.locale.ALLOW_UPLOADS}">
						${x.iconic("data-transfer-upload")}
					</span>
					<span class="text_icon" title="${n.locale.ALLOW_USER_SELF_EDIT}">
						${x.iconic("lock-unlocked")}
					</span>
				</p></div>`;
      p(".users_view").append(e), ut.json.forEach(function(i) {
        p(".users_view").append(x.user(i)), ie.bind("#UserUpdate" + i.id, "#UserData" + i.id, ut.update), ie.bind("#UserDelete" + i.id, "#UserData" + i.id, ut.delete), i.may_upload && p("#UserData" + i.id + ' .choice input[name="may_upload"]').click(), i.may_edit_own_settings && p("#UserData" + i.id + ' .choice input[name="may_edit_own_settings"]').click();
      }), e = `
				<div class="users_view_line" ${ut.json.length === 0 ? 'style="padding-top: 0px;"' : ""}>
					<p id="UserCreate">
						<input class="text" name="username" type="text" value="" placeholder="${n.locale.LOGIN_USERNAME}" />
						<input class="text" name="password" type="text" placeholder="${n.locale.LOGIN_PASSWORD}" />
						<span class="choice" title="${n.locale.ALLOW_UPLOADS}">
							<label>
								<input type="checkbox" name="may_upload" />
								<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>
							</label>
						</span>
						<span class="choice" title="${n.locale.ALLOW_USER_SELF_EDIT}">
							<label>
								<input type="checkbox" name="may_edit_own_settings" />
								<span class="checkbox"><svg class="iconic "><use xlink:href="#check"></use></svg></span>
							</label>
						</span>
					</p>
					<a id="UserCreate_button"  class="basicModal__button basicModal__button_CREATE">${n.locale.CREATE}</a>
				</div>`, p(".users_view").append(e), ie.bind("#UserCreate_button", "#UserCreate", ut.create);
    }
  }
};
M.sharing = {
  /** @returns {void} */
  init: function() {
    H.clearSelection(), P.photo() && M.photo.hide(), M.sharing.title(), F.setMode("config"), M.sharing.content.init();
  },
  /** @returns {void} */
  title: function() {
    n.setMetaData(n.locale.SHARING);
  },
  /** @returns {void} */
  clearContent: function() {
    n.content.html('<div class="sharing_view"></div>');
  },
  content: {
    /** @returns {void} */
    init: function() {
      M.sharing.clearContent(), ct.json.shared.length === 0 && p(".sharing_view").append(
        '<div class="sharing_view_line" style="margin-bottom: 50px;"><p style="text-align: center">Sharing list is empty!</p></div>'
      );
      const e = ct.json.albums.reduce(function(l, d) {
        return l + n.html`<option value="${d.id}">$${d.title}</option>`;
      }, ""), i = ct.json.users.reduce(function(l, d) {
        return l + n.html`<option value="${d.id}">$${d.username}</option>`;
      }, ""), s = ct.json.shared.reduce(function(l, d) {
        return l + n.html`
						<p>
							<span class="text">$${d.title}</span>
							<span class="text">$${d.username}</span>
							<span class="choice">
								<label>
									<input type="checkbox" name="remove_id" value="${d.id}"/>
									<span class="checkbox">
										<svg class="iconic "><use xlink:href="#check"></use></svg>
									</span>
								</label>
							</span>
						</p>`;
      }, "");
      let u = `
				<div class="sharing_view_line"><p>Share</p></div>
				<div class="sharing_view_line">
					<div class="col-xs-5">
						<select name="from" id="albums_list" class="form-control select" size="13" multiple="multiple">
							${e}
						</select>
					</div>
					<div class="col-xs-2">
						<!--<button type="button" id="albums_list_undo" class="btn btn-primary btn-block">undo</button>-->
						<button type="button" id="albums_list_rightAll" class="btn btn-default btn-block blue">
							${x.iconic("media-skip-forward")}
						</button>
						<button type="button" id="albums_list_rightSelected" class="btn btn-default btn-block blue">
							${x.iconic("chevron-right")}
						</button>
						<button type="button" id="albums_list_leftSelected" class="btn btn-default btn-block grey">
							${x.iconic("chevron-left")}
						</button>
						<button type="button" id="albums_list_leftAll" class="btn btn-default btn-block grey">
							${x.iconic("media-skip-backward")}
						</button>
						<!--<button type="button" id="albums_list_redo" class="btn btn-warning btn-block">redo</button>-->
					</div>
					<div class="col-xs-5">
						<select name="to" id="albums_list_to" class="form-control select" size="13" multiple="multiple"></select>
					</div>
				</div>
				<div class="sharing_view_line"><p class="with">with</p></div>
				<div class="sharing_view_line">
					<div class="col-xs-5">
						<select name="from" id="user_list" class="form-control select" size="13" multiple="multiple">
							${i}
						</select>
					</div>
					<div class="col-xs-2">
						<!--<button type="button" id="user_list_undo" class="btn btn-primary btn-block">undo</button>-->
						<button type="button" id="user_list_rightAll" class="btn btn-default btn-block blue">
							${x.iconic("media-skip-forward")}
						</button>
						<button type="button" id="user_list_rightSelected" class="btn btn-default btn-block blue">
							${x.iconic("chevron-right")}
						</button>
						<button type="button" id="user_list_leftSelected" class="btn btn-default btn-block grey">
							${x.iconic("chevron-left")}
						</button>
						<button type="button" id="user_list_leftAll" class="btn btn-default btn-block grey">
							${x.iconic("media-skip-backward")}
						</button>
						<!--<button type="button" id="user_list_redo" class="btn btn-warning btn-block">redo</button>-->
					</div>
					<div class="col-xs-5">
						<select name="to" id="user_list_to" class="form-control select" size="13" multiple="multiple"></select>
					</div>
				</div>
				<div class="sharing_view_line"><a id="Share_button" class="basicModal__button">${n.locale.SHARE}</a></div>
				<div class="sharing_view_line">
					${s}
				</div>`;
      ct.json.shared.length !== 0 && (u += `<div class="sharing_view_line"><a id="Remove_button"  class="basicModal__button">${n.locale.REMOVE}</a></div>`), p(".sharing_view").append(u), p("#albums_list").multiselect(), p("#user_list").multiselect(), p("#Share_button").on("click", ct.add).on("mouseenter", function() {
        p("#albums_list_to, #user_list_to").addClass("borderBlue");
      }).on("mouseleave", function() {
        p("#albums_list_to, #user_list_to").removeClass("borderBlue");
      }), p("#Remove_button").on("click", ct.delete);
    }
  }
};
M.logs = {
  /** @returns {void} */
  init: function() {
    H.clearSelection(), P.photo() && M.photo.hide(), M.logs.title(), F.setMode("config"), M.logs.content.init();
  },
  /** @returns {void} */
  title: function() {
    n.setMetaData(n.locale.LOGS);
  },
  /** @returns {void} */
  clearContent: function() {
    let e = "";
    n.rights.settings.can_clear_logs && (e += n.html`
			<div class="clear_logs_update">
				<a id="Clean_Noise" class="basicModal__button">
					${n.locale.CLEAN_LOGS}
				</a>
				<a id="Clear" class="basicModal__button">
					${n.locale.CLEAR}
				</a>
			</div>`), e += n.html`
			<pre class="logs_diagnostics_view"></pre>`, n.content.html(e), p("#Clean_Noise").on("click", function() {
      K.post("Logs::clearNoise", {}, M.logs.init);
    }), p("#Clear").on("click", function() {
      K.post("Logs::clear", {}, M.logs.init);
    });
  },
  content: {
    /** @returns {void} */
    init: function() {
      const e = function(i) {
        const s = function(d) {
          return "" + d.getUTCFullYear() + "-" + String(d.getUTCMonth() + 1).padStart(2, "0") + "-" + String(d.getUTCDate()).padStart(2, "0") + " " + String(d.getUTCHours()).padStart(2, "0") + ":" + String(d.getUTCMinutes()).padStart(2, "0") + ":" + String(d.getUTCSeconds()).padStart(2, "0") + " UTC";
        }, u = i.reduce(function(d, h) {
          return d + s(new Date(h.created_at)) + " -- " + h.type.padEnd(7) + " -- " + h.function + " -- " + h.line + " -- " + h.text + `
`;
        }, ""), l = document.querySelector(".logs_diagnostics_view");
        l.replaceChildren(), l.appendChild(document.createElement("pre")).textContent = u;
      };
      M.logs.clearContent(), K.post("Logs::list", {}, e);
    }
  }
};
M.diagnostics = {
  /** @returns {void} */
  init: function() {
    H.clearSelection(), P.photo() && M.photo.hide(), M.diagnostics.title(), F.setMode("config"), M.diagnostics.content.init();
  },
  /** @returns {void} */
  title: function() {
    n.setMetaData(n.locale.DIAGNOSTICS);
  },
  /**
   * @param {number} update - The update status: `0`: not on master branch;
   *                          `1`: up-to-date; `2`: not up-to-date;
   *                          `3`: requires migration
   * @returns {void}
   */
  clearContent: function(e) {
    let i = "";
    e === 2 ? i = M.diagnostics.button("", n.locale.UPDATE_AVAILABLE) : e === 3 ? i = M.diagnostics.button("", n.locale.MIGRATION_AVAILABLE) : e > 0 && (i = M.diagnostics.button("Check_", n.locale.CHECK_FOR_UPDATE)), i += '<pre class="logs_diagnostics_view"></pre>', n.content.html(i);
  },
  /**
   * @param {string} type
   * @param {string} locale
   * @returns {string} - HTML
   */
  button: function(e, i) {
    return `
			<div class="clear_logs_update">
				<a id="${e}Update_Lychee" class="basicModal__button">${i}</a>
			</div>`;
  },
  /** @returns {string} */
  bind: function() {
    p("#Update_Lychee").on("click", M.diagnostics.call_apply_update), p("#Check_Update_Lychee").on("click", M.diagnostics.call_check_update);
  },
  content: {
    /** @returns {void} */
    init: function() {
      M.diagnostics.clearContent(0), K.post("Diagnostics::get", {}, M.diagnostics.content.parseResponse);
    },
    /**
     * @param {DiagnosticInfo} data
     * @returns {void}
     */
    parseResponse: function(e) {
      M.diagnostics.clearContent(e.update);
      let i = "";
      i += M.diagnostics.content.block("error", "Diagnostics", e.errors), i += M.diagnostics.content.block("sys", "System Information", e.infos), i += '<a id="Get_Size_Lychee" class="basicModal__button button_left">', i += '<svg class="iconic"><use xlink:href="#reload"></use></svg>', i += n.html`${n.locale.DIAGNOSTICS_GET_SIZE}`, i += "</a>", i += M.diagnostics.content.block("conf", "Config Information", e.configs), p(".logs_diagnostics_view").html(i), M.diagnostics.bind(), p("#Get_Size_Lychee").on("click", M.diagnostics.call_get_size);
    },
    /**
     * @param {string} id
     * @param {string} title
     * @param {string[]} arr
     * @returns {string} - HTML
     */
    block: function(e, i, s) {
      let u = "";
      return u += '<pre id="content_diag_' + e + `">



`, u += "    " + i + `
`, u += "    ".padEnd(i.length, "-") + `
`, u += s.reduce((l, d) => l + "    " + d + `
`, ""), u += `</pre>
`, u;
    }
  },
  /** @returns {void} */
  call_check_update: function() {
    K.post(
      "Update::check",
      {},
      /** @param {{updateStatus: string}} data */
      function(e) {
        Z.show("success", e.updateStatus), p("#Check_Update_Lychee").remove();
      }
    );
  },
  /** @returns {void} */
  call_apply_update: function() {
    K.post(
      "Update::apply",
      {},
      /** @param {{updateMsgs: string[]}} data */
      function(e) {
        const i = M.preify(e.updateMsgs, "");
        p("#Update_Lychee").remove(), p(i).prependTo(".logs_diagnostics_view");
      }
    );
  },
  /** @returns {void} */
  call_get_size: function() {
    K.post(
      "Diagnostics::getSize",
      {},
      /** @param {string[]} data */
      function(e) {
        const i = M.preify(e, "");
        p("#Get_Size_Lychee").remove(), p(i).appendTo("#content_diag_sys");
      }
    );
  }
};
M.update = {
  /** @returns {void} */
  init: function() {
    H.clearSelection(), P.photo() && M.photo.hide(), M.update.title(), F.setMode("config"), M.update.content.init();
  },
  /** @returns {void} */
  title: function() {
    n.setMetaData(n.locale.UPDATE);
  },
  /** @returns {void} */
  clearContent: function() {
    const e = '<pre class="logs_diagnostics_view"></pre>';
    n.content.html(e);
  },
  content: {
    init: function() {
      M.update.clearContent(), K.post(
        "Update::apply",
        {},
        /** @param {{updateMsgs: string[]}} data */
        function(e) {
          const i = M.preify(e.updateMsgs, "");
          n.content.html(i);
        }
      );
    }
  }
};
M.preify = function(e, i) {
  return e.reduce((s, u) => s + "    " + u + `
`, '<pre class="' + i + '">') + "</pre>";
};
M.u2f = {
  /** @returns {void} */
  init: function() {
    H.clearSelection(), P.photo() && M.photo.hide(), M.u2f.title(), F.setMode("config"), M.u2f.content.init();
  },
  /** @returns {void} */
  title: function() {
    n.setMetaData(n.locale.U2F);
  },
  /** @returns {void} */
  clearContent: function() {
    n.content.html('<div class="u2f_view"></div>');
  },
  content: {
    /** @returns {void} */
    init: function() {
      if (M.u2f.clearContent(), tt.json.length === 0)
        p(".u2f_view").append('<div class="u2f_view_line"><p class="single">Credentials list is empty!</p></div>');
      else {
        const i = `
					<div class="u2f_view_line"><p><span class="text">
						${n.locale.U2F_CREDENTIALS}
					</span></p></div>`;
        p(".u2f_view").append(i), tt.json.forEach(function(s) {
          p(".u2f_view").append(x.u2f(s)), ie.bind("#CredentialDelete" + s.id, "#CredentialData" + s.id, tt.delete);
        });
      }
      const e = `
				<div class="u2f_view_line">
					<a id="RegisterU2FButton"  class="basicModal__button basicModal__button_CREATE">
						${n.locale.U2F_REGISTER_KEY}
					</a>
				</div>`;
      p(".u2f_view").append(e), p("#RegisterU2FButton").on("click", tt.register);
    }
  }
};
const S = {
  /** @type {?Photo} */
  json: null,
  cache: null,
  /** @type {?boolean} indicates whether the browser supports prefetching of images; `null` if support hasn't been determined yet */
  supportsPrefetch: null,
  /** @type {?LivePhotosKit.Player} */
  livePhotosObject: null
};
S.getID = function() {
  let e = S.json ? S.json.id : p(".photo:hover, .photo.active").attr("data-id");
  return e = typeof e == "string" && /^[-_0-9a-zA-Z]{24}$/.test(e) ? e : null, e;
};
S.load = function(e, i, s) {
  const u = function(l) {
    S.json = l, S.json.original_album_id = S.json.album_id, S.json.album_id = i, M.photo.show(), M.photo.init(s), n.hide_content_during_imgview || setTimeout(() => {
      n.content.show(), V.makeUnfocusable(n.content);
    }, 300);
  };
  K.post(
    "Photo::get",
    {
      photoID: e
    },
    u
  );
};
S.hasExif = function() {
  return !!S.json.make || !!S.json.model || !!S.json.shutter || !!S.json.aperture || !!S.json.focal || !!S.json.iso;
};
S.hasTakestamp = function() {
  return !!S.json.taken_at;
};
S.hasDesc = function() {
  return !!S.json.description;
};
S.isLivePhoto = function() {
  return !!S.json && // In case it's called, but not initialized
  !!S.json.live_photo_url;
};
S.isLivePhotoInitialized = function() {
  return !!S.livePhotosObject;
};
S.isLivePhotoPlaying = function() {
  return S.isLivePhotoInitialized() && S.livePhotosObject.isPlaying;
};
S.cycle_display_overlay = function() {
  const e = x.check_overlay_type(S.json, n.image_overlay_type), i = x.check_overlay_type(S.json, e, !0);
  if (e !== i) {
    n.image_overlay_type = i, p("#image_overlay").remove();
    const s = x.overlay_image(S.json);
    s !== "" && n.imageview.append(s);
  }
};
S.preloadNextPrev = function(e) {
  if (!v.json || !v.json.photos)
    return;
  const i = v.getByID(e);
  if (!i)
    return;
  const s = p("img#image"), u = s.length > 0 && s[0].currentSrc !== null && s[0].currentSrc.includes("@2x.");
  p("head [data-prefetch]").remove();
  const l = function(d) {
    const h = v.getByID(d);
    let E = "";
    if (h.size_variants.medium != null ? (E = h.size_variants.medium.url, h.size_variants.medium2x != null && u && (E = h.size_variants.medium2x.url)) : h.type && h.type.indexOf("video") === -1 && (E = h.size_variants.original.url), E !== "") {
      if (i.supportsPrefetch === null) {
        const C = function(m, W) {
          try {
            return !m || !m.supports ? !1 : m.supports(W);
          } catch (D) {
            return D instanceof TypeError ? console.log("The DOMTokenList doesn't have a supported tokens list") : console.error("That shouldn't have happened"), !1;
          }
        };
        i.supportsPrefetch = C(document.createElement("link").relList, "prefetch");
      }
      i.supportsPrefetch ? p("head").append(n.html`<link data-prefetch rel="prefetch" href="${E}">`) : new Image().src = E;
    }
  };
  i.next_photo_id && l(i.next_photo_id), i.previous_photo_id && l(i.previous_photo_id);
};
S.previous = function(e) {
  const i = S.getID() !== null && v.json ? v.getByID(S.getID()) : null;
  if (!i || !i.previous_photo_id)
    return;
  const s = e ? 200 : 0;
  e && p("#imageview #image").css({
    WebkitTransform: "translateX(100%)",
    MozTransform: "translateX(100%)",
    transform: "translateX(100%)",
    opacity: 0
  }), setTimeout(() => {
    S.livePhotosObject = null, n.goto(v.getID() + "/" + i.previous_photo_id, !1);
  }, s);
};
S.next = function(e) {
  const i = S.getID() !== null && v.json ? v.getByID(S.getID()) : null;
  if (!i || !i.next_photo_id)
    return;
  const s = e ? 200 : 0;
  e === !0 && p("#imageview #image").css({
    WebkitTransform: "translateX(-100%)",
    MozTransform: "translateX(-100%)",
    transform: "translateX(-100%)",
    opacity: 0
  }), setTimeout(() => {
    S.livePhotosObject = null, n.goto(v.getID() + "/" + i.next_photo_id, !1);
  }, s);
};
S.delete = function(e) {
  const i = function() {
    let u = null, l = null;
    j.close(), e.forEach(function(d, h) {
      let E = v.getByID(d);
      (E.next_photo_id !== null || E.previous_photo_id !== null) && (u = E.next_photo_id, l = E.previous_photo_id, l !== null && (v.getByID(l).next_photo_id = u), u !== null && (v.getByID(u).previous_photo_id = l)), v.deleteByID(d), M.album.content.delete(d, h === e.length - 1);
    }), q.refresh(), P.photo() ? u !== null && u !== S.getID() ? n.goto(v.getID() + "/" + u, !1) : l !== null && l !== S.getID() ? n.goto(v.getID() + "/" + l, !1) : n.goto(v.getID()) : P.albums() || n.goto(v.getID()), K.post("Photo::delete", { photoIDs: e });
  }, s = function(u, l) {
    if (e.length === 1) {
      const d = (P.photo() ? S.json.title : v.getByID(e[0]).title) || n.locale.UNTITLED;
      l.querySelector("p").textContent = Qe.sprintf(n.locale.PHOTO_DELETE_CONFIRMATION, d);
    } else
      l.querySelector("p").textContent = Qe.sprintf(n.locale.PHOTO_DELETE_ALL, e.length);
  };
  j.show({
    body: "<p></p>",
    readyCB: s,
    buttons: {
      action: {
        title: n.locale.PHOTO_DELETE,
        fn: i,
        classList: ["red"]
      },
      cancel: {
        title: n.locale.PHOTO_KEEP,
        fn: j.close
      }
    }
  });
};
S.setTitle = function(e) {
  const i = function(l) {
    if (!l.title.trim()) {
      j.focusError("title");
      return;
    }
    j.close();
    const d = l.title ? l.title : null;
    P.photo() && (S.json.title = d, M.photo.title()), e.forEach(function(h) {
      v.getByID(h).title = d, M.album.content.title(h);
    }), K.post("Photo::setTitle", {
      photoIDs: e,
      title: d
    });
  }, s = `
		<p></p>
		<form>
			<div class="input-group stacked"><input class='text' name='title' type='text' maxlength='100'></div>
		</form>`, u = function(l, d) {
    const h = e.length === 1 ? S.json ? S.json.title : v.getByID(e[0]).title : "";
    d.querySelector("p").textContent = e.length === 1 ? n.locale.PHOTO_NEW_TITLE : Qe.sprintf(n.locale.PHOTOS_NEW_TITLE, e.length), l.title.placeholder = "Title", l.title.value = h;
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.PHOTO_SET_TITLE,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
S.copyTo = function(e, i) {
  K.post(
    "Photo::duplicate",
    {
      photoIDs: e,
      albumID: i
    },
    () => v.reload()
  );
};
S.setAlbum = function(e, i) {
  let s = null, u = null;
  e.forEach(function(l, d) {
    let h = v.getByID(l);
    (h.next_photo_id !== null || h.previous_photo_id !== null) && (s = h.next_photo_id, u = h.previous_photo_id, u !== null && (v.getByID(u).next_photo_id = s), s !== null && (v.getByID(s).previous_photo_id = u)), v.deleteByID(l), M.album.content.delete(l, d === e.length - 1);
  }), q.refresh(), P.photo() && (s !== null && s !== S.getID() ? n.goto(v.getID() + "/" + s) : u !== null && u !== S.getID() ? n.goto(v.getID() + "/" + u) : n.goto(v.getID())), K.post(
    "Photo::setAlbum",
    {
      photoIDs: e,
      albumID: i
    },
    function() {
      P.album() && v.reload();
    }
  );
};
S.toggleStar = function() {
  S.json.is_starred = !S.json.is_starred, M.photo.star(), v.getByID(S.json.id).is_starred = S.json.is_starred, M.album.content.star(S.json.id), q.refresh(), K.post("Photo::setStar", {
    photoIDs: [S.json.id],
    is_starred: S.json.is_starred
  });
};
S.setStar = function(e, i) {
  e.forEach(function(s) {
    v.getByID(s).is_starred = i, M.album.content.star(s);
  }), q.refresh(), K.post("Photo::setStar", {
    photoIDs: e,
    is_starred: i
  });
};
S.setProtectionPolicy = function(e) {
  const i = function(l) {
    l.is_public !== S.json.is_public && (P.photo() && (S.json.is_public = l.is_public, M.photo.public()), v.getByID(e).is_public = l.is_public, M.album.content.public(e), q.refresh(), K.post("Photo::setPublic", {
      photoID: e,
      is_public: l.is_public
    })), j.close();
  }, s = `
		<p id="ppp_dialog_no_edit_expl"></p>
		<form>
			<div class='input-group compact-no-indent'>
				<label for="ppp_dialog_public_check"></label>
				<input type='checkbox' class="slider" id='ppp_dialog_public_check' name='is_public' />
				<p></p>
			</div>
			<p id="ppp_dialog_global_expl"></p>
			<div class='input-group compact-inverse disabled'>
				<label for="ppp_dialog_full_photo_check"></label>
				<input type='checkbox' id='ppp_dialog_full_photo_check' name='grants_full_photo_access' disabled="disabled" />
				<p></p>
			</div>
			<div class='input-group compact-inverse disabled'>
				<label for="ppp_dialog_link_check"></label>
				<input type='checkbox' id='ppp_dialog_link_check' name='is_link_required' disabled="disabled" />
				<p></p>
			</div>
			<div class='input-group compact-inverse disabled'>
				<label for="ppp_dialog_downloadable_check"></label>
				<input type='checkbox' id='ppp_dialog_downloadable_check' name='grants_download' disabled="disabled" />
				<p></p>
			</div>
			<div class='input-group compact-inverse disabled'>
				<label for="ppp_dialog_password_check"></label>
				<input type='checkbox' id='ppp_dialog_password_check' name='is_password_required' disabled="disabled">
				<p></p>
			</div>
		</form>`, u = function(l, d) {
    l.is_public.previousElementSibling.textContent = n.locale.PHOTO_PUBLIC, l.is_public.nextElementSibling.textContent = n.locale.PHOTO_PUBLIC_EXPL, l.grants_full_photo_access.previousElementSibling.textContent = n.locale.PHOTO_FULL, l.grants_full_photo_access.nextElementSibling.textContent = n.locale.PHOTO_FULL_EXPL, l.is_link_required.previousElementSibling.textContent = n.locale.PHOTO_HIDDEN, l.is_link_required.nextElementSibling.textContent = n.locale.PHOTO_HIDDEN_EXPL, l.grants_download.previousElementSibling.textContent = n.locale.PHOTO_DOWNLOADABLE, l.grants_download.nextElementSibling.textContent = n.locale.PHOTO_DOWNLOADABLE_EXPL, l.is_password_required.previousElementSibling.textContent = n.locale.PHOTO_PASSWORD_PROT, l.is_password_required.nextElementSibling.textContent = n.locale.PHOTO_PASSWORD_PROT_EXPL, S.json.album_id === null || v.json && v.json.policy.is_public === !1 ? (d.querySelector("p#ppp_dialog_no_edit_expl").remove(), d.querySelector("p#ppp_dialog_global_expl").textContent = n.locale.PHOTO_EDIT_GLOBAL_SHARING_TEXT, l.is_public.checked = S.json.is_public, l.grants_full_photo_access.checked = n.grants_full_photo_access, l.is_link_required.checked = n.public_photos_hidden, l.grants_download.checked = n.grants_download, l.is_password_required.checked = !1) : (d.querySelector("p#ppp_dialog_no_edit_expl").textContent = n.locale.PHOTO_NO_EDIT_SHARING_TEXT, d.querySelector("p#ppp_dialog_global_expl").remove(), l.is_public.disabled = !0, l.is_public.checked = v.json.policy.is_public, l.is_public.parentElement.classList.add("disabled"), l.grants_full_photo_access.checked = v.json.policy.grants_full_photo_access, l.is_link_required.checked = v.json.policy.is_link_required, l.grants_download.checked = v.json.policy.grants_download, l.is_password_required.checked = v.json.policy.is_password_required, j.hideActionButton());
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.SAVE,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
S.setDescription = function(e) {
  const i = function(l) {
    j.close();
    const d = l.description ? l.description : null;
    P.photo() && (S.json.description = d, M.photo.description()), K.post("Photo::setDescription", {
      photoID: e,
      description: d
    });
  }, s = `
		<p  id="ppp_dialog_description_expl"></p>
		<form>
			<div class="input-group stacked"><input class='text' name='description' type='text' maxlength='800'></div>
		</form>`, u = function(l, d) {
    d.querySelector("p#ppp_dialog_description_expl").textContent = n.locale.PHOTO_NEW_DESCRIPTION, l.description.placeholder = n.locale.PHOTO_DESCRIPTION, l.description.value = S.json.description ? S.json.description : "";
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.PHOTO_SET_DESCRIPTION,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
S.setCreatedAt = function(e) {
  const i = function(l) {
    j.close();
    const d = l.created_at ? l.created_at.concat(":", l.tz) : null;
    P.photo() && (S.json.created_at = d, M.photo.uploaded()), K.post("Photo::setUploadDate", {
      photoID: e,
      date: d
    });
  }, s = `
		<p id="ppp_dialog_uploaddate_expl"></p>
		<form>
			<div class="input-group stacked"><input class='text' name='created_at' type='datetime-local'
			pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}'
			>
			<input name='tz' type='hidden'>
			</div>
		</form>`, u = function(l, d) {
    d.querySelector("p#ppp_dialog_uploaddate_expl").textContent = n.locale.PHOTO_NEW_CREATED_AT, l.created_at.value = S.json.created_at ? S.json.created_at.slice(0, 16) : "", l.tz.value = S.json.created_at ? S.json.created_at.slice(17) : "";
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.PHOTO_SET_CREATED_AT,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
S.editTags = function(e) {
  let i = [];
  P.photo() ? i = S.json.tags.sort() : P.album() && e.length === 1 || P.search() && e.length === 1 ? i = v.getByID(e[0]).tags.sort() : P.album() && e.length > 1 && (i = v.getByID(e[0]).tags.sort(), e.every(function(h) {
    const E = v.getByID(h).tags.sort();
    if (i.length !== E.length)
      return !1;
    for (let C = 0; C !== i.length; C++)
      if (i[C] !== E[C])
        return !1;
    return !0;
  }) || (i = []));
  const s = function(d) {
    j.close();
    const h = d.tags.split(",").map((E) => E.trim()).filter((E) => E !== "" && E.indexOf(",") === -1).sort();
    S.setTags(e, h, d.override);
  }, u = `
		<p></p>
		<form>
			<div class="input-group stacked"><input class='text' name='tags' type='text' minlength='1'></div>
			<div class='input-group compact-inverse'>
				<label for="override"></label>
				<input type='checkbox' id='tag_dialog_override_input' name='override' />
				<p></p>
			</div>
		</form>`, l = function(d, h) {
    h.querySelector("p").textContent = e.length === 1 ? n.locale.PHOTO_NEW_TAGS : Qe.sprintf(n.locale.PHOTOS_NEW_TAGS, e.length), d.tags.placeholder = "Tags", d.tags.value = i.join(", "), d.override.previousElementSibling.textContent = n.locale.OVERRIDE, d.override.nextElementSibling.textContent = n.locale.TAGS_OVERRIDE_INFO;
  };
  j.show({
    body: u,
    readyCB: l,
    buttons: {
      action: {
        title: n.locale.PHOTO_SET_TAGS,
        fn: s
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
S.setTags = function(e, i, s) {
  P.photo() && (S.json.tags = s ? i : S.json.tags.concat(i.filter((u) => !S.json.tags.includes(u))), M.photo.tags()), e.forEach(function(u) {
    v.getByID(u).tags = i;
  }), K.post(
    "Photo::setTags",
    {
      photoIDs: e,
      tags: i,
      shall_override: s
    },
    function() {
      q.json && q.json.tag_albums.length !== 0 && q.refresh();
    }
  );
};
S.deleteTag = function(e, i) {
  S.json.tags.splice(i, 1), S.setTags([e], S.json.tags, !0);
};
S.share = function(e, i) {
  if (!n.share_button_visible)
    return;
  const s = S.getViewLink(e);
  switch (i) {
    case "twitter":
      window.open(`https://twitter.com/share?url=${encodeURI(s)}`);
      break;
    case "facebook":
      window.open(`https://www.facebook.com/sharer.php?u=${encodeURI(s)}&t=${encodeURI(S.json.title)}`);
      break;
    case "mail":
      location.href = `mailto:?subject=${encodeURI(S.json.title)}&body=${encodeURI(s)}`;
      break;
    case "dropbox":
      n.loadDropbox(function() {
        let u = S.json.title + "." + S.getDirectLink().split(".").pop();
        Dropbox.save(S.getDirectLink(), u);
      });
      break;
  }
};
S.setLicense = function(e) {
  const i = function(l) {
    j.close(), K.post(
      "Photo::setLicense",
      {
        photoID: e,
        license: l.license
      },
      function() {
        S.json.license = l.license, M.photo.license();
      }
    );
  }, s = `
		<form><div class="input-group compact">
			<label for="photo_license_dialog_license_select"></label>
			<div class="select"><select name="license" id="photo_license_dialog_license_select">
				<option value="none"></option>
				<option value="reserved"></option>
				<option value="CC0">CC0 - Public Domain</option>
				<option value="CC-BY-1.0">CC Attribution 1.0</option>
				<option value="CC-BY-2.0">CC Attribution 2.0</option>
				<option value="CC-BY-2.5">CC Attribution 2.5</option>
				<option value="CC-BY-3.0">CC Attribution 3.0</option>
				<option value="CC-BY-4.0">CC Attribution 4.0</option>
				<option value="CC-BY-ND-1.0">CC Attribution-NoDerivatives 1.0</option>
				<option value="CC-BY-ND-2.0">CC Attribution-NoDerivatives 2.0</option>
				<option value="CC-BY-ND-2.5">CC Attribution-NoDerivatives 2.5</option>
				<option value="CC-BY-ND-3.0">CC Attribution-NoDerivatives 3.0</option>
				<option value="CC-BY-ND-4.0">CC Attribution-NoDerivatives 4.0</option>
				<option value="CC-BY-SA-1.0">CC Attribution-ShareAlike 1.0</option>
				<option value="CC-BY-SA-2.0">CC Attribution-ShareAlike 2.0</option>
				<option value="CC-BY-SA-2.5">CC Attribution-ShareAlike 2.5</option>
				<option value="CC-BY-SA-3.0">CC Attribution-ShareAlike 3.0</option>
				<option value="CC-BY-SA-4.0">CC Attribution-ShareAlike 4.0</option>
				<option value="CC-BY-NC-1.0">CC Attribution-NonCommercial 1.0</option>
				<option value="CC-BY-NC-2.0">CC Attribution-NonCommercial 2.0</option>
				<option value="CC-BY-NC-2.5">CC Attribution-NonCommercial 2.5</option>
				<option value="CC-BY-NC-3.0">CC Attribution-NonCommercial 3.0</option>
				<option value="CC-BY-NC-4.0">CC Attribution-NonCommercial 4.0</option>
				<option value="CC-BY-NC-ND-1.0">CC Attribution-NonCommercial-NoDerivatives 1.0</option>
				<option value="CC-BY-NC-ND-2.0">CC Attribution-NonCommercial-NoDerivatives 2.0</option>
				<option value="CC-BY-NC-ND-2.5">CC Attribution-NonCommercial-NoDerivatives 2.5</option>
				<option value="CC-BY-NC-ND-3.0">CC Attribution-NonCommercial-NoDerivatives 3.0</option>
				<option value="CC-BY-NC-ND-4.0">CC Attribution-NonCommercial-NoDerivatives 4.0</option>
				<option value="CC-BY-NC-SA-1.0">CC Attribution-NonCommercial-ShareAlike 1.0</option>
				<option value="CC-BY-NC-SA-2.0">CC Attribution-NonCommercial-ShareAlike 2.0</option>
				<option value="CC-BY-NC-SA-2.5">CC Attribution-NonCommercial-ShareAlike 2.5</option>
				<option value="CC-BY-NC-SA-3.0">CC Attribution-NonCommercial-ShareAlike 3.0</option>
				<option value="CC-BY-NC-SA-4.0">CC Attribution-NonCommercial-ShareAlike 4.0</option>
			</select></div>
			<p><a href="https://creativecommons.org/choose/" target="_blank"></a></p>
		</div></form>`, u = function(l, d) {
    l.license.labels[0].textContent = n.locale.PHOTO_LICENSE, l.license.item(0).textContent = n.locale.PHOTO_LICENSE_NONE, l.license.item(1).textContent = n.locale.PHOTO_RESERVED, l.license.value = S.json.license === "" ? "none" : S.json.license, d.querySelector("p a").textContent = n.locale.PHOTO_LICENSE_HELP;
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.PHOTO_SET_LICENSE,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
S.getArchive = function(e, i = null) {
  if (e.length !== 1 || i !== null) {
    location.href = "api/Photo::getArchive?photoIDs=" + e.join() + "&kind=" + i;
    return;
  }
  const s = S.json && S.json.id === e[0] ? S.json : v.getByID(e[0]), u = {
    ORIGINAL: ["original", n.locale.PHOTO_ORIGINAL],
    MEDIUM2X: ["medium2x", n.locale.PHOTO_MEDIUM_HIDPI],
    MEDIUM: ["medium", n.locale.PHOTO_MEDIUM],
    SMALL2X: ["small2x", n.locale.PHOTO_SMALL_HIDPI],
    SMALL: ["small", n.locale.PHOTO_SMALL],
    THUMB2X: ["thumb2x", n.locale.PHOTO_THUMB_HIDPI],
    THUMB: ["thumb", n.locale.PHOTO_THUMB]
  }, l = function(C) {
    return `
				<a class='button' data-photo-kind="${C}">
					<svg class='iconic ionicons'><use xlink:href='#cloud-download' /></svg>
					<span></span>
				</a>
			`;
  }, d = Object.entries(u).reduce((C, [m]) => C + l(m), "") + l("LIVEPHOTOVIDEO"), h = function(C) {
    C.currentTarget instanceof HTMLAnchorElement && (j.close(), S.getArchive(e, C.currentTarget.dataset.photoKind), C.stopPropagation());
  }, E = function(C, m) {
    Object.entries(u).forEach(function([D, [he, we]]) {
      const ue = m.querySelector('a[data-photo-kind="' + D + '"]'), G = s.size_variants[he];
      G ? (ue.title = n.locale.DOWNLOAD, n.addClickOrTouchListener(ue, h), ue.lastElementChild.textContent = we + " (" + G.width + "×" + G.height + ", " + n.locale.printFilesizeLocalized(G.filesize) + ")") : ue.remove();
    });
    const W = m.querySelector('a[data-photo-kind="LIVEPHOTOVIDEO"]');
    s.live_photo_url !== null ? (W.title = n.locale.DOWNLOAD, n.addClickOrTouchListener(W, h), W.lastElementChild.textContent = n.locale.PHOTO_LIVE_VIDEO) : W.remove();
  };
  j.show({
    body: d,
    readyCB: E,
    classList: ["downloads"],
    buttons: {
      cancel: {
        title: n.locale.CLOSE,
        fn: j.close
      }
    }
  });
};
S.qrCode = function(e) {
  const i = S.json && S.json.id === e ? S.json : v.getByID(e);
  if (i == null) {
    n.error(Qe.sprintf(n.locale.ERROR_PHOTO_NOT_FOUND, e));
    return;
  }
  const s = function() {
    let u = 0;
    return new ResizeObserver(function(l, d) {
      const h = l[0].target;
      u !== h.clientWidth && (u = h.clientWidth, QrCreator.render(
        {
          text: S.getViewLink(i.id),
          radius: 0,
          ecLevel: "H",
          fill: "#000000",
          background: "#FFFFFF",
          size: u
        },
        h
      ));
    });
  }();
  j.show({
    body: "<canvas></canvas>",
    classList: ["qr-code"],
    readyCB: function(u, l) {
      const d = l.querySelector("canvas");
      s.observe(d);
    },
    buttons: {
      cancel: {
        title: n.locale.CLOSE,
        fn: function() {
          s.disconnect(), j.close();
        }
      }
    }
  });
};
S.getDirectLink = function() {
  return S.json && S.json.size_variants && S.json.size_variants.original && S.json.size_variants.original.url ? S.json.size_variants.original.url : "";
};
S.getViewLink = function(e) {
  return n.getBaseUrl() + "view?p=" + e;
};
S.showDirectLinks = function(e) {
  if (!S.json || S.json.id !== e)
    return;
  const i = function(d) {
    return `
			<div class="input-group stacked">
				<label for="${"dialog-direct-links-input-" + d}"></label>
				<input id="${"dialog-direct-links-input-" + d}" name="${d}" type='text' readonly />
				<a class='button'><svg class='iconic ionicons'><use xlink:href='#copy' /></svg></a>
			</div>`;
  }, s = {
    original: n.locale.PHOTO_FULL,
    medium2x: n.locale.PHOTO_MEDIUM_HIDPI,
    medium: n.locale.PHOTO_MEDIUM,
    small2x: n.locale.PHOTO_SMALL_HIDPI,
    small: n.locale.PHOTO_SMALL,
    thumb2x: n.locale.PHOTO_THUMB_HIDPI,
    thumb: n.locale.PHOTO_THUMB
  }, u = '<form class="photo-links">' + i("view") + '</form><p></p><form class="photo-links">' + Object.entries(s).reduce((d, [h]) => d + i(h), "") + i("live") + "</form>", l = function(d, h) {
    d.view.value = S.getViewLink(e), d.view.previousElementSibling.textContent = n.locale.PHOTO_VIEW, d.view.nextElementSibling.title = n.locale.URL_COPY_TO_CLIPBOARD, h.querySelector("p").textContent = n.locale.PHOTO_DIRECT_LINKS_TO_IMAGES;
    for (const C in s) {
      const m = S.json.size_variants[C];
      m !== null ? (d[C].value = n.getBaseUrl() + m.url, d[C].previousElementSibling.textContent = s[C] + " (" + m.width + "×" + m.height + ")", d[C].nextElementSibling.title = n.locale.URL_COPY_TO_CLIPBOARD) : d[C].parentElement.remove();
    }
    S.json.live_photo_url !== null ? (d.live.value = n.getBaseUrl() + S.json.live_photo_url, d.live.previousElementSibling.textContent = n.locale.PHOTO_LIVE_VIDEO, d.live.nextElementSibling.title = n.locale.URL_COPY_TO_CLIPBOARD) : d.live.parentElement.remove();
    const E = function(C) {
      navigator.clipboard.writeText(C.currentTarget.previousElementSibling.value).then(() => Z.show("success", n.locale.URL_COPIED_TO_CLIPBOARD)), C.stopPropagation();
    };
    h.querySelectorAll("a.button").forEach((C) => n.addClickOrTouchListener(C, E));
  };
  j.show({
    body: u,
    readyCB: l,
    buttons: {
      cancel: {
        title: n.locale.CLOSE,
        fn: j.close
      }
    }
  });
};
const ln = function(e) {
  return e.metaKey || e.ctrlKey;
}, H = {
  /** @type {string[]} */
  ids: [],
  albumsSelected: 0,
  photosSelected: 0,
  /** @type {?jQuery} */
  lastClicked: null
};
H.position = null;
H.bind = function() {
  return p("#lychee_view_content").on("mousedown", (e) => {
    e.which === 1 && H.show(e);
  }), !0;
};
H.unbind = function() {
  p("#lychee_view_content").off("mousedown");
};
H.isSelected = function(e) {
  const i = H.ids.indexOf(e);
  return {
    selected: i !== -1,
    position: i
  };
};
H.toggleItem = function(e, i) {
  if (v.isSmartID(i) || v.isSearchID(i))
    return;
  H.isSelected(i).selected === !1 ? H.addItem(e, i) : H.removeItem(e, i);
};
H.addItem = function(e, i) {
  if (v.isSmartID(i) || v.isSearchID(i) || !n.rights.settings.can_edit && q.isShared(i) || H.isSelected(i).selected === !0)
    return;
  let s = e.hasClass("album");
  if (s && H.photosSelected > 0 || !s && H.albumsSelected > 0) {
    Z.show("error", n.locale.ERROR_EITHER_ALBUMS_OR_PHOTOS);
    return;
  }
  H.ids.push(i), H.select(e), s ? H.albumsSelected++ : H.photosSelected++, H.lastClicked = e;
};
H.removeItem = function(e, i) {
  let { selected: s, position: u } = H.isSelected(i);
  if (s === !1)
    return;
  H.ids.splice(u, 1), H.deselect(e), e.hasClass("album") ? H.albumsSelected-- : H.photosSelected--, H.lastClicked = e;
};
H.albumClick = function(e, i) {
  const s = i.attr("data-id");
  if ((ln(e) || e.shiftKey) && v.isUploadable()) {
    if (i.hasClass("disabled"))
      return;
    ln(e) ? H.toggleItem(i, s) : (H.albumsSelected > 0 && (i.prevAll(".album").toArray().includes(H.lastClicked[0]) ? i.prevUntil(H.lastClicked, ".album").each(function() {
      H.addItem(p(this), p(this).attr("data-id"));
    }) : i.nextAll(".album").toArray().includes(H.lastClicked[0]) && i.nextUntil(H.lastClicked, ".album").each(function() {
      H.addItem(p(this), p(this).attr("data-id"));
    })), H.addItem(i, s));
  } else
    n.goto(s);
};
H.photoClick = function(e, i) {
  let s = i.attr("data-id");
  if ((ln(e) || e.shiftKey) && v.isUploadable()) {
    if (i.hasClass("disabled"))
      return;
    ln(e) ? H.toggleItem(i, s) : (H.photosSelected > 0 && (i.prevAll(".photo").toArray().includes(H.lastClicked[0]) ? i.prevUntil(H.lastClicked, ".photo").each(function() {
      H.addItem(p(this), p(this).attr("data-id"));
    }) : i.nextAll(".photo").toArray().includes(H.lastClicked[0]) && i.nextUntil(H.lastClicked, ".photo").each(function() {
      H.addItem(p(this), p(this).attr("data-id"));
    })), H.addItem(i, s));
  } else
    n.goto(v.getID() + "/" + s);
};
H.albumContextMenu = function(e, i) {
  let s = i.attr("data-id"), u = H.isSelected(s).selected;
  i.hasClass("disabled") || (u !== !1 && H.ids.length > 1 ? ce.albumMulti(H.ids, e) : ce.album(s, e));
};
H.photoContextMenu = function(e, i) {
  const s = i.attr("data-id"), u = H.isSelected(s).selected;
  i.hasClass("disabled") || (u !== !1 && H.ids.length > 1 ? ce.photoMulti(H.ids, e) : P.album() || P.search() ? ce.photo(s, e) : P.photo() ? ce.photo(S.getID(), e) : Z.show("error", n.locale.ERROR_COULD_NOT_FIND));
};
H.clearSelection = function() {
  H.deselect(p(".photo.active, .album.active")), H.ids = [], H.albumsSelected = 0, H.photosSelected = 0, H.lastClicked = null;
};
H.show = function(e) {
  if (!v.isUploadable() || !P.albums() && !P.album() || p(".album:hover, .photo:hover").length !== 0 || P.search())
    return !1;
  P.multiselect() && p("#multiselect").remove(), Q.setSelectable(!1), !ln(e) && !e.shiftKey && H.clearSelection(), H.position = {
    top: e.pageY,
    right: p(document).width() - e.pageX,
    bottom: p(document).height() - e.pageY,
    left: e.pageX
  }, p("body").append(x.multiselect(H.position.top, H.position.left)), p(document).on("mousemove", H.resize).on("mouseup", (i) => {
    i.which === 1 && H.getSelection(i);
  });
};
H.resize = function(e) {
  if (H.position === null)
    return !1;
  let i = {
    top: null,
    bottom: null,
    height: null,
    left: null,
    right: null,
    width: null
  };
  e.pageY >= H.position.top ? (i.top = H.position.top, i.bottom = "inherit", i.height = Math.min(e.pageY, p(document).height() - 3) - H.position.top) : (i.top = "inherit", i.bottom = H.position.bottom, i.height = H.position.top - Math.max(e.pageY, 2)), e.pageX >= H.position.left ? (i.right = "inherit", i.left = H.position.left, i.width = Math.min(e.pageX, p(document).width() - 3) - H.position.left) : (i.right = H.position.right, i.left = "inherit", i.width = H.position.left - Math.max(e.pageX, 2)), p("#multiselect").css(i);
};
H.stopResize = function() {
  H.position !== null && p(document).off("mousemove mouseup");
};
H.getSize = function() {
  if (!P.multiselect())
    return null;
  let e = p("#multiselect"), i = e.offset();
  return {
    top: i.top,
    left: i.left,
    width: parseFloat(e.css("width")),
    height: parseFloat(e.css("height"))
  };
};
H.getSelection = function(e) {
  const i = H.getSize();
  P.contextMenu() || P.multiselect() && (p(".photo, .album").each(function() {
    if (p(this).offset().left < i.left + i.width && p(this).offset().left + p(this).width() > i.left && p(this).offset().top < i.top + i.height && p(this).offset().top + p(this).height() > i.top) {
      let s = p(this).attr("data-id");
      ln(e) ? H.toggleItem(p(this), s) : H.addItem(p(this), s);
    }
  }), H.hide());
};
H.select = function(e) {
  e.addClass("selected"), e.addClass("active");
};
H.deselect = function(e) {
  e.removeClass("selected"), e.removeClass("active");
};
H.hide = function() {
  Q.setSelectable(!0), H.stopResize(), H.position = null, n.animate(p("#multiselect"), "fadeOut"), setTimeout(() => p("#multiselect").remove(), 300);
};
H.close = function() {
  Q.setSelectable(!0), H.stopResize(), H.position = null, n.animate(p("#multiselect"), "fadeOut"), setTimeout(() => p("#multiselect").remove(), 300);
};
H.selectAll = function() {
  v.isUploadable() && (P.search() || !P.albums() && !P.album || (P.multiselect() && p("#multiselect").remove(), Q.setSelectable(!1), H.clearSelection(), p(".photo").each(function() {
    H.addItem(p(this), p(this).attr("data-id"));
  }), H.photosSelected === 0 && p(".album").each(function() {
    H.addItem(p(this), p(this).attr("data-id"));
  })));
};
const Sn = {};
Sn.rotate = function(e, i) {
  K.post(
    "PhotoEditor::rotate",
    {
      photoID: e,
      direction: i
    },
    /** @param {Photo} data */
    function(s) {
      S.json = s, S.json.original_album_id = S.json.album_id, v.json && (S.json.album_id = v.json.id);
      const u = p("img#image");
      S.json.size_variants.medium2x !== null ? u.prop(
        "srcset",
        `${S.json.size_variants.medium.url} ${S.json.size_variants.medium.width}w, ${S.json.size_variants.medium2x.url} ${S.json.size_variants.medium2x.width}w`
      ) : u.prop("srcset", ""), u.prop("src", S.json.size_variants.medium !== null ? S.json.size_variants.medium.url : S.json.size_variants.original.url), M.photo.onresize(), M.photo.sidebar(), v.updatePhoto(s);
    }
  );
};
const le = {
  SCROLL_OPTIONS: {
    inline: "nearest",
    block: "nearest",
    behavior: "smooth"
  },
  _dom: {
    /**
     * Holds the ordered list (`<ol>`) with the individual reports
     * of a Progress Report dialog.
     *
     * @type {HTMLOListElement|null}
     */
    reportList: null,
    /**
     * Maps a path (as the unique identifier) to a tuple of UI elements
     * which visualize the report row for that path.
     *
     * Note, rows for event reports which are not associated to a
     * particular file or directory are not kept in this map, but
     * of course they are visualized inside the list of reports.
     *
     * This map allows fast access to the rows without running
     * (inefficient) CSS selector queries and/or relying on a specific
     * order (i.e. no need for `nth-child`-selector).
     *
     * @type {Map<string, ProgressReportDialogRow>|null}
     */
    progressRowsByPath: null
  }
};
le.showProgressReportCloseButton = function() {
  j.showActionButton(), j.hideCancelButton(), j.markActionButtonAsIdle();
};
le.closeProgressReportDialog = function() {
  j.close(), le._dom.reportList = null, le._dom.progressRowsByPath = null;
};
le.buildReportRow = function(e) {
  const i = document.createElement("li"), s = i.appendChild(document.createElement("h2"));
  s.textContent = e.length <= 40 ? e : e.substring(0, 19) + "…" + e.substring(e.length - 20, e.length);
  const u = i.appendChild(document.createElement("p"));
  u.classList.add("status");
  const l = i.appendChild(document.createElement("p"));
  return l.classList.add("notice"), { listEntry: i, header: s, status: u, notice: l };
};
le.buildReportList = function(e) {
  le._dom.reportList = document.createElement("ol"), le._dom.progressRowsByPath = /* @__PURE__ */ new Map();
  for (let i = 0; i !== e.length; i++) {
    const s = le.buildReportRow(e[i].name);
    le._dom.progressRowsByPath.set(e[i].name, s), le._dom.reportList.appendChild(s.listEntry);
  }
};
le.showProgressReportDialog = function(e, i, s, u = null) {
  const l = function(d, h) {
    j.hideActionButton();
    const E = h.querySelector("h1");
    E.textContent = e, le.buildReportList(i), h.appendChild(le._dom.reportList), setTimeout(() => s(d, h), 0);
  };
  j.show({
    body: "<h1></h1>",
    classList: ["import"],
    readyCB: l,
    buttons: {
      action: {
        title: n.locale.CLOSE,
        fn: () => le.closeProgressReportDialog()
      },
      cancel: {
        title: n.locale.CANCEL,
        classList: ["red"],
        fn: function(d) {
          j.isActionButtonVisible() ? le.closeProgressReportDialog() : u && u(d);
        }
      }
    }
  });
};
le.notify = function(e, i = "") {
  i === "" && (i = n.locale.UPLOAD_MANAGE_NEW_PHOTOS), window.webkitNotifications && (window.webkitNotifications.checkPermission() !== 0 && window.webkitNotifications.requestPermission(), window.webkitNotifications.checkPermission() === 0 && e && window.webkitNotifications.createNotification("", e, i).show());
};
le.start = {
  /**
   * @param {(FileList|File[])} files
   */
  local: function(e) {
    if (e.length <= 0)
      return;
    const i = v.getID();
    let s = !1, u = !1, l = 0, d = 0, h = !1, E = !1;
    const C = function() {
      if (window.onbeforeunload = null, p("#upload_files").val(""), !s && !u)
        le.closeProgressReportDialog(), le.notify(n.locale.UPLOAD_COMPLETE);
      else if (!s && u)
        le.showProgressReportCloseButton(), le.notify(n.locale.UPLOAD_COMPLETE);
      else {
        if (le.showProgressReportCloseButton(), E) {
          const W = le.buildReportRow(n.locale.UPLOAD_GENERAL);
          W.status.textContent = n.locale.UPLOAD_CANCELLED, W.status.classList.add("warning"), le._dom.reportList.appendChild(W.listEntry);
        }
        le.notify(n.locale.UPLOAD_COMPLETE, n.locale.UPLOAD_COMPLETE_FAILED);
      }
      v.reload();
    }, m = function(W) {
      let D = 0;
      const he = function(ne) {
        if (ne.lengthComputable !== !0)
          return;
        const Ne = ne.loaded / ne.total * 100 | 0;
        if (Ne > D) {
          D = Ne;
          const Be = le._dom.progressRowsByPath.get(e[W].name);
          Be.listEntry.scrollIntoView(le.SCROLL_OPTIONS), Be.status.textContent = "" + D + "%", Ne >= 100 && (Be.status.textContent = n.locale.UPLOAD_PROCESSING, h = !1, !h && !E && (l < n.upload_processing_limit || n.upload_processing_limit === 0) && d + 1 < e.length && (d++, m(d)));
        }
      }, we = function() {
        const ne = le._dom.progressRowsByPath.get(e[W].name), Ne = this.status >= 400 ? this.response : null;
        switch (this.status) {
          case 200:
          case 201:
          case 204:
            ne.status.textContent = n.locale.UPLOAD_FINISHED, ne.status.classList.add("success");
            break;
          case 409:
            ne.status.textContent = n.locale.UPLOAD_SKIPPED, ne.status.classList.add("warning"), ne.notice.textContent = Ne ? Ne.message : n.locale.UPLOAD_ERROR_UNKNOWN, u = !0;
            break;
          case 413:
            ne.status.textContent = n.locale.UPLOAD_FAILED, ne.status.classList.add("error"), ne.notice.textContent = n.locale.UPLOAD_ERROR_POSTSIZE, s = !0, K.onError(this, { albumID: i }, Ne);
            break;
          default:
            ne.status.textContent = n.locale.UPLOAD_FAILED, ne.status.classList.add("error"), ne.notice.textContent = Ne ? Ne.message : n.locale.UPLOAD_ERROR_UNKNOWN, s = !0, K.onError(this, { albumID: i }, Ne);
            break;
        }
      }, ue = function() {
        l--, !h && !E && (l < n.upload_processing_limit || n.upload_processing_limit === 0) && d + 1 < e.length && (d++, m(d)), (E || d + 1 === e.length) && !h && l === 0 && C();
      }, G = new FormData(), Ee = new XMLHttpRequest();
      G.append("albumID", i || ""), G.append("file", e[W]), Ee.upload.onprogress = he, Ee.onload = we, Ee.onloadend = ue, Ee.responseType = "json", Ee.open("POST", "api/Photo::add"), Ee.setRequestHeader("X-XSRF-TOKEN", wn.getCSRFCookieValue()), Ee.setRequestHeader("Accept", "application/json"), l++, h = !0, Ee.send(G);
    };
    window.onbeforeunload = function() {
      return n.locale.UPLOAD_IN_PROGRESS;
    }, le.showProgressReportDialog(
      n.locale.UPLOAD_UPLOADING,
      e,
      function() {
        j.showCancelButton(), m(0);
      },
      function() {
        E = !0, s = !0;
      }
    );
  },
  /**
   * @param {string} preselectedUrl
   */
  url: function(e = "") {
    const i = v.getID(), s = function(h) {
      const E = function() {
        const C = function() {
          le.closeProgressReportDialog(), le.notify(n.locale.UPLOAD_IMPORT_COMPLETE), v.reload();
        }, m = function(W, D, he) {
          const we = le._dom.progressRowsByPath.get(h.url);
          switch (W.status) {
            case 409:
              we.status.textContent = n.locale.UPLOAD_SKIPPED, we.status.classList.add("warning"), we.notice.textContent = he ? he.message : n.locale.UPLOAD_IMPORT_WARN_ERR;
              break;
            default:
              we.status.textContent = n.locale.UPLOAD_FAILED, we.status.classList.add("error"), we.notice.textContent = he ? he.message : n.locale.UPLOAD_IMPORT_WARN_ERR;
              break;
          }
          return j.showActionButton(), le.notify(n.locale.UPLOAD_IMPORT_WARN_ERR), v.reload(), !0;
        };
        le._dom.progressRowsByPath.get(h.url).status.textContent = n.locale.UPLOAD_IMPORTING, K.post(
          "Import::url",
          {
            urls: [h.url],
            albumID: i
          },
          C,
          null,
          m
        );
      };
      le.showProgressReportDialog(n.locale.UPLOAD_IMPORTING_URL, [{ name: h.url }], E);
    }, u = function(h) {
      h.url && h.url.trim().length > 3 ? j.close(!1, () => s(h)) : j.focusError("url");
    }, l = `
			<p></p>
			<form>
				<div class="input-group stacked"><input class='text' name='url' type='text'></div>
			</form>`, d = function(h, E) {
      E.querySelector("p").textContent = n.locale.UPLOAD_IMPORT_INSTR, h.url.placeholder = "https://", h.url.value = e;
    };
    j.show({
      body: l,
      readyCB: d,
      buttons: {
        action: {
          title: n.locale.UPLOAD_IMPORT,
          fn: u
        },
        cancel: {
          title: n.locale.CANCEL,
          fn: j.close
        }
      }
    });
  },
  server: function() {
    const e = v.getID(), i = function(d, h) {
      h.querySelector("p").textContent = n.locale.UPLOAD_IMPORT_SERVER_INSTR, d.paths.placeholder = n.locale.UPLOAD_ABSOLUTE_PATH, d.paths.value = n.location + "uploads/import/", d.delete_imported.previousElementSibling.textContent = n.locale.UPLOAD_IMPORT_DELETE_ORIGINALS, d.delete_imported.nextElementSibling.textContent = n.locale.UPLOAD_IMPORT_DELETE_ORIGINALS_EXPL, d.import_via_symlink.previousElementSibling.textContent = n.locale.UPLOAD_IMPORT_VIA_SYMLINK, d.import_via_symlink.nextElementSibling.textContent = n.locale.UPLOAD_IMPORT_VIA_SYMLINK_EXPL, d.skip_duplicates.previousElementSibling.textContent = n.locale.UPLOAD_IMPORT_SKIP_DUPLICATES, d.skip_duplicates.nextElementSibling.textContent = n.locale.UPLOAD_IMPORT_SKIP_DUPLICATES_EXPL, d.resync_metadata.previousElementSibling.textContent = n.locale.UPLOAD_IMPORT_RESYNC_METADATA, d.resync_metadata.nextElementSibling.textContent = n.locale.UPLOAD_IMPORT_RESYNC_METADATA_EXPL, n.delete_imported ? (d.delete_imported.checked = !0, d.import_via_symlink.checked = !1, d.import_via_symlink.disabled = !0, d.import_via_symlink.parentElement.classList.add("disabled")) : n.import_via_symlink && (d.delete_imported.checked = !1, d.delete_imported.disabled = !0, d.delete_imported.parentElement.classList.add("disabled"), d.import_via_symlink.checked = !0), n.skip_duplicates ? (d.skip_duplicates.checked = !0, d.resync_metadata.checked = n.resync_metadata) : (d.skip_duplicates.checked = !1, d.resync_metadata.checked = !1, d.resync_metadata.disabled = !0, d.resync_metadata.parentElement.classList.add("disabled")), d.delete_imported.addEventListener("change", function() {
        d.delete_imported.checked ? (d.import_via_symlink.checked = !1, d.import_via_symlink.disabled = !0, d.import_via_symlink.parentElement.classList.add("disabled")) : (d.import_via_symlink.disabled = !1, d.import_via_symlink.parentElement.classList.remove("disabled"));
      }), d.import_via_symlink.addEventListener("change", function() {
        d.import_via_symlink.checked ? (d.delete_imported.checked = !1, d.delete_imported.disabled = !0, d.delete_imported.parentElement.classList.add("disabled")) : (d.delete_imported.disabled = !1, d.delete_imported.parentElement.classList.remove("disabled"));
      }), d.skip_duplicates.addEventListener("change", function() {
        d.skip_duplicates.checked ? (d.resync_metadata.disabled = !1, d.resync_metadata.parentElement.classList.remove("disabled")) : (d.resync_metadata.checked = !1, d.resync_metadata.disabled = !0, d.resync_metadata.parentElement.classList.add("disabled"));
      });
    }, s = function(d) {
      let h = !1;
      const E = function() {
        h || K.post("Import::serverCancel", {}, function() {
          h = !0;
        });
      }, C = function() {
        j.showCancelButton();
        let m = 0, W = !1;
        const D = function(G) {
          G.slice(m).forEach(function(Ee) {
            if (Ee.type === "progress") {
              const ne = le._dom.progressRowsByPath.get(Ee.path) || le.buildReportRow(Ee.path);
              le._dom.progressRowsByPath.set(Ee.path, ne), le._dom.reportList.appendChild(ne.listEntry), ne.listEntry.scrollIntoView(le.SCROLL_OPTIONS), Ee.progress !== 100 ? ne.status.textContent = "" + Ee.progress + "%" : (ne.status.textContent = n.locale.UPLOAD_FINISHED, ne.status.classList.add("success"));
            } else if (Ee.type === "event") {
              let ne;
              Ee.path ? (ne = le._dom.progressRowsByPath.get(Ee.path) || le.buildReportRow(Ee.path), le._dom.progressRowsByPath.set(Ee.path, ne), le._dom.reportList.appendChild(ne.listEntry)) : (ne = le.buildReportRow(n.locale.UPLOAD_GENERAL), le._dom.reportList.appendChild(ne.listEntry)), ne.listEntry.scrollIntoView(le.SCROLL_OPTIONS);
              let Ne = "", Be = "", Re = "";
              switch (Ee.severity) {
                case "debug":
                case "info":
                  break;
                case "notice":
                case "warning":
                  Ne = "warning";
                  break;
                case "error":
                case "critical":
                case "emergency":
                  Ne = "error";
                  break;
              }
              switch (Ee.subtype) {
                case "mem_limit":
                  Be = n.locale.UPLOAD_WARNING, Re = n.locale.UPLOAD_IMPORT_LOW_MEMORY_EXPL;
                  break;
                case "FileOperationException":
                case "MediaFileOperationException":
                  Be = n.locale.UPLOAD_SKIPPED, Re = n.locale.UPLOAD_IMPORT_FAILED;
                  break;
                case "MediaFileUnsupportedException":
                  Be = n.locale.UPLOAD_SKIPPED, Re = n.locale.UPLOAD_IMPORT_UNSUPPORTED;
                  break;
                case "InvalidDirectoryException":
                  Be = n.locale.UPLOAD_FAILED, Re = n.locale.UPLOAD_IMPORT_NOT_A_DIRECTORY;
                  break;
                case "ReservedDirectoryException":
                  Be = n.locale.UPLOAD_FAILED, Re = n.locale.UPLOAD_IMPORT_PATH_RESERVED;
                  break;
                case "PhotoSkippedException":
                  Be = n.locale.UPLOAD_SKIPPED, Re = n.locale.UPLOAD_IMPORT_SKIPPED_DUPLICATE;
                  break;
                case "PhotoResyncedException":
                  Be = n.locale.UPLOAD_UPDATED, Re = n.locale.UPLOAD_IMPORT_RESYNCED_DUPLICATE;
                  break;
                case "ImportCancelledException":
                  Be = n.locale.UPLOAD_CANCELLED, Re = n.locale.UPLOAD_IMPORT_CANCELLED;
                  break;
                default:
                  Be = n.locale.UPLOAD_SKIPPED, Re = Ee.message;
                  break;
              }
              ne.notice.textContent = Re, ne.status.textContent = Be, ne.status.classList.add(Ne), W = !0;
            }
          }), m = G.length;
        }, he = function(G) {
          D(G), le.notify(n.locale.UPLOAD_IMPORT_COMPLETE, W ? n.locale.UPLOAD_COMPLETE_FAILED : null), v.reload(), W ? le.showProgressReportCloseButton() : le.closeProgressReportDialog();
        }, we = function() {
          let G = this.response, Ee = [];
          for (; G.length > 2 && Ee.length === 0; ) {
            const ne = G.substring(0, G.lastIndexOf("}") + 1) + "]";
            try {
              Ee = JSON.parse(ne);
            } catch (Ne) {
              if (Ne instanceof SyntaxError) {
                const Be = Ne.columnNumber, Re = G.lastIndexOf("}"), Rt = Be < Re ? Be : Re;
                G = G.substring(0, Rt);
              } else {
                le.notify(n.locale.UPLOAD_COMPLETE, n.locale.UPLOAD_COMPLETE_FAILED), v.reload(), le.showProgressReportCloseButton();
                return;
              }
            }
          }
          D(Ee);
        }, ue = {
          albumID: e,
          paths: d.paths,
          delete_imported: d.delete_imported,
          import_via_symlink: d.import_via_symlink,
          skip_duplicates: d.skip_duplicates,
          resync_metadata: d.resync_metadata
        };
        K.post("Import::server", ue, he, we);
      };
      le.showProgressReportDialog(n.locale.UPLOAD_IMPORT_SERVER, [], C, E);
    }, u = function(d) {
      if (!d.paths.trim()) {
        j.focusError("paths");
        return;
      }
      d.paths = d.paths.match(/(?:\\ |\S)+/g).map((h) => h.replace(/\\ /g, " ")), j.close(!1, () => s(d));
    }, l = `
			<p></p>
			<form>
				<div class="input-group stacked">
					<input class='text' id="server_import_dialog_path_input" name='paths' type='text' />
				</div>
				<div class='input-group compact-inverse'>
					<label for="server_import_dialog_delete_imported_check"></label>
					<input type='checkbox' id="server_import_dialog_delete_imported_check" name='delete_imported' />
					<p></p>
				</div>
				<div class='input-group compact-inverse'>
					<label for="server_import_dialog_symlink_check"></label>
					<input type='checkbox' id="server_import_dialog_symlink_check" name='import_via_symlink' />
					<p></p>
				</div>
				<div class='input-group compact-inverse'>
					<label for="server_import_dialog_skip_check"></label>
					<input type='checkbox' id="server_import_dialog_skip_check" name='skip_duplicates' />
					<p></p>
				</div>
				<div class='input-group compact-inverse'>
					<label for="server_import_dialog_resync_check"></label>
					<input type='checkbox' id="server_import_dialog_resync_check" name='resync_metadata' />
					<p></p>
				</div>
			</form>`;
    j.show({
      body: l,
      readyCB: i,
      buttons: {
        action: {
          title: n.locale.UPLOAD_IMPORT,
          fn: u
        },
        cancel: {
          title: n.locale.CANCEL,
          fn: j.close
        }
      }
    });
  },
  dropbox: function() {
    const e = v.getID(), i = function(s) {
      const u = function() {
        const l = function() {
          le.closeProgressReportDialog(), le.notify(n.locale.UPLOAD_IMPORT_COMPLETE), v.reload();
        }, d = function(h, E, C) {
          const m = le._dom.progressRowsByPath.get(s[0].link);
          switch (h.status) {
            case 409:
              m.status.textContent = n.locale.UPLOAD_SKIPPED, m.status.classList.add("warning"), m.notice.textContent = C ? C.message : n.locale.UPLOAD_IMPORT_WARN_ERR;
              break;
            default:
              m.status.textContent = n.locale.UPLOAD_FAILED, m.status.classList.add("error"), m.notice.textContent = C ? C.message : n.locale.UPLOAD_IMPORT_WARN_ERR;
              break;
          }
          return j.showActionButton(), le.notify(n.locale.UPLOAD_IMPORT_WARN_ERR), v.reload(), !0;
        };
        le._dom.progressRowsByPath.get(s[0].link).status.textContent = n.locale.UPLOAD_IMPORTING, K.post(
          "Import::url",
          {
            urls: s.map((h) => h.link),
            albumID: e
          },
          l,
          null,
          d
        );
      };
      s.forEach((l) => l.name = l.link), le.showProgressReportDialog("Importing from Dropbox", s, u);
    };
    n.loadDropbox(function() {
      Dropbox.choose({
        linkType: "direct",
        multiselect: !0,
        success: i
      });
    });
  }
};
le.uploadTrack = function(e) {
  const i = v.getID();
  if (e.length <= 0 || i === null)
    return;
  const s = function() {
    const u = le._dom.progressRowsByPath.get(e[0].name), l = function() {
      const E = this.status >= 400 ? this.response : null;
      let C = "", m;
      switch (p("#upload_track_file").val(""), this.status) {
        case 200:
        case 201:
        case 204:
          m = n.locale.UPLOAD_FINISHED;
          break;
        case 413:
          m = n.locale.UPLOAD_FAILED, C = n.locale.UPLOAD_ERROR_POSTSIZE;
          break;
        default:
          m = n.locale.UPLOAD_FAILED, C = E ? E.message : n.locale.UPLOAD_ERROR_UNKNOWN;
          break;
      }
      u.status.textContent = m, C !== "" ? (u.notice.textContent = C, K.onError(this, { albumID: i }, E), le.showProgressReportCloseButton(), le.notify(n.locale.UPLOAD_COMPLETE, n.locale.UPLOAD_COMPLETE_FAILED)) : (le.closeProgressReportDialog(), le.notify(n.locale.UPLOAD_COMPLETE)), v.reload();
    };
    u.status.textContent = n.locale.UPLOAD_UPLOADING;
    const d = new FormData(), h = new XMLHttpRequest();
    d.append("albumID", i), d.append("file", e[0]), h.onload = l, h.responseType = "json", h.open("POST", "api/Album::setTrack"), h.setRequestHeader("X-XSRF-TOKEN", wn.getCSRFCookieValue()), h.setRequestHeader("Accept", "application/json"), h.send(d);
  };
  le.showProgressReportDialog(n.locale.UPLOAD_UPLOADING, e, s);
};
const ce = {};
ce.add = function(e) {
  let i = [
    { title: x.iconic("image") + n.locale.UPLOAD_PHOTO, fn: () => p("#upload_files").click() },
    {},
    { title: x.iconic("link-intact") + n.locale.IMPORT_LINK, fn: () => le.start.url() },
    { title: x.iconic("dropbox", "ionicons") + n.locale.IMPORT_DROPBOX, fn: () => le.start.dropbox() },
    { title: x.iconic("terminal") + n.locale.IMPORT_SERVER, fn: () => le.start.server() },
    {},
    { title: x.iconic("folder") + n.locale.NEW_ALBUM, fn: () => v.add() }
  ];
  if (P.albums() ? i.push({ title: x.iconic("tags") + n.locale.NEW_TAG_ALBUM, fn: () => v.addByTags() }) : (v.isSmartID(v.getID()) || v.isSearchID(v.getID())) && i.splice(1), n.rights.settings.can_edit ? (!n.dropboxKey || n.dropboxKey === "") && i.splice(3, 1) : i.splice(3, 2), P.album() && v.isUploadable()) {
    let s = v.getID();
    if (v.isTagAlbum() && (i = []), s.length === 24 || s === Me.UNSORTED) {
      if (s !== Me.UNSORTED) {
        let l = p("#button_visibility_album");
        l && l.css("display") === "none" && i.unshift({
          title: x.iconic("eye") + n.locale.VISIBILITY_ALBUM,
          visible: n.enable_button_visibility,
          fn: () => v.setProtectionPolicy(s)
        });
      }
      let u = p("#button_trash_album");
      if (u && u.css("display") === "none" && i.unshift({
        title: x.iconic("trash") + n.locale.DELETE_ALBUM,
        visible: n.enable_button_trash,
        fn: () => v.delete([s])
      }), s !== Me.UNSORTED) {
        if (!v.isTagAlbum()) {
          let d = p("#button_move_album");
          d && d.css("display") === "none" && i.unshift({
            title: x.iconic("folder") + n.locale.MOVE_ALBUM,
            visible: n.enable_button_move,
            fn: (h) => ce.move([s], h, v.setAlbum, "ROOT", v.getParentID() !== null)
          });
        }
        let l = p("#button_nsfw_album");
        l && l.css("display") === "none" && i.unshift({
          title: x.iconic("warning") + n.locale.ALBUM_MARK_NSFW,
          visible: !0,
          fn: () => v.toggleNSFW()
        });
      }
      !v.isSmartID(s) && n.map_display && (i.push({}, { title: x.iconic("location") + n.locale.UPLOAD_TRACK, fn: () => p("#upload_track_file").click() }), v.json.track_url && i.push({ title: x.iconic("trash") + n.locale.DELETE_TRACK, fn: v.deleteTrack }));
    }
  }
  gt(i, e.originalEvent, null, () => {
    document.querySelector(".basicContext").setAttribute("id", "addMenu");
  }), le.notify();
};
ce.album = function(e, i) {
  if (v.isSmartID(e) || v.isSearchID(e))
    return;
  const s = !q.isTagAlbum(e), u = [
    { title: x.iconic("pencil") + n.locale.RENAME, fn: () => v.setTitle([e]) },
    {
      title: x.iconic("collapse-left") + n.locale.MERGE,
      visible: s,
      fn: () => {
        It(), ce.move([e], i, v.merge, "ROOT", !1);
      }
    },
    {
      title: x.iconic("folder") + n.locale.MOVE,
      visible: s,
      fn: () => {
        It(), ce.move([e], i, v.setAlbum, "ROOT");
      }
    },
    { title: x.iconic("trash") + n.locale.DELETE, fn: () => v.delete([e]) },
    { title: x.iconic("cloud-download") + n.locale.DOWNLOAD, fn: () => v.getArchive([e]) }
  ];
  if (P.album()) {
    const l = v.getSubByID(e);
    if (l.thumb.id) {
      let d = l.thumb.id === v.json.cover_id;
      u.unshift({
        title: x.iconic("folder-cover", d ? "active" : "") + n.locale[d ? "REMOVE_COVER" : "SET_COVER"],
        fn: () => v.toggleCover(l.thumb.id)
      });
    }
  }
  p('.album[data-id="' + e + '"]').addClass("active"), gt(u, i.originalEvent, ce.close);
};
ce.albumDrop = function(e, i, s) {
  const u = [
    {
      title: x.iconic("collapse-left") + n.locale.MERGE,
      fn: () => {
        v.merge([e], i);
      }
    },
    {
      title: x.iconic("folder") + n.locale.MOVE,
      visible: !0,
      fn: () => {
        It(), v.setAlbum([e], i);
      }
    }
  ];
  gt(u, s, ce.close);
};
ce.albumMulti = function(e, i) {
  H.stopResize();
  const s = e.length > 1, u = e.every((d) => !q.isTagAlbum(d));
  let l = [
    { title: x.iconic("pencil") + n.locale.RENAME_ALL, fn: () => v.setTitle(e) },
    {
      title: x.iconic("collapse-left") + n.locale.MERGE_ALL,
      visible: u && s,
      fn: () => {
        let d = e.shift();
        v.merge(e, d);
      }
    },
    {
      title: x.iconic("collapse-left") + n.locale.MERGE,
      visible: u && !s,
      fn: () => {
        It(), ce.move(e, i, v.merge, "ROOT", !1);
      }
    },
    {
      title: x.iconic("folder") + n.locale.MOVE_ALL,
      visible: u,
      fn: () => {
        It(), ce.move(e, i, v.setAlbum, "ROOT");
      }
    },
    { title: x.iconic("trash") + n.locale.DELETE_ALL, fn: () => v.delete(e) },
    { title: x.iconic("cloud-download") + n.locale.DOWNLOAD_ALL, fn: () => v.getArchive(e) }
  ];
  gt(l, i.originalEvent, ce.close);
};
ce.buildList = function(e, i, s, u = null, l = 0) {
  let d = [];
  return e.forEach(function(h) {
    if ((l !== 0 || h.parent_id) && h.parent_id !== u)
      return;
    let E = "img/no_cover.svg";
    h.thumb && h.thumb.thumb ? h.thumb.thumb === "uploads/thumb/" ? h.thumb.type && h.thumb.type.indexOf("video") > -1 && (E = "img/play-icon.png") : E = h.thumb.thumb : h.size_variants && (h.size_variants.thumb === null ? h.type && h.type.indexOf("video") > -1 && (E = "img/play-icon.png") : E = h.size_variants.thumb.url), h.title || (h.title = n.locale.UNTITLED);
    let C = l > 0 ? "&nbsp;&nbsp;".repeat(l - 1) + "└ " : "", m = n.html`
			           ${C}
			           <img class='cover' width='16' height='16' src='${E}' alt="thumbnail">
			           <div class='title'>$${h.title}</div>
			           `;
    d.push({
      title: m,
      disabled: i.findIndex((W) => W === h.id) !== -1,
      fn: () => s(h)
    }), h.albums && h.albums.length > 0 ? d = d.concat(ce.buildList(h.albums, i, s, h.id, l + 1)) : d = d.concat(ce.buildList(e, i, s, h.id, l + 1));
  }), d;
};
ce.albumTitle = function(e, i) {
  K.post("Albums::tree", {}, function(s) {
    let u = [];
    u = u.concat({ title: n.locale.ROOT, disabled: e === null, fn: () => n.goto() }), s.albums && s.albums.length > 0 && (u = u.concat({}), u = u.concat(ce.buildList(s.albums, e !== null ? [e] : [], (l) => n.goto(l.id)))), s.shared_albums && s.shared_albums.length > 0 && (u = u.concat({}), u = u.concat(ce.buildList(s.shared_albums, e !== null ? [e] : [], (l) => n.goto(l.id)))), e !== null && !v.isSmartID(e) && !v.isSearchID(e) && v.isUploadable() && (u.length > 0 && u.unshift({}), u.unshift({ title: x.iconic("pencil") + n.locale.RENAME, fn: () => v.setTitle([e]) })), gt(u, i.originalEvent, ce.close);
  });
};
ce.photo = function(e, i) {
  const s = e === v.json.cover_id, u = v.getByID(e).is_starred, l = [
    {
      title: x.iconic("star") + (u ? n.locale.UNSTAR : n.locale.STAR),
      fn: () => S.setStar([e], !u)
    },
    { title: x.iconic("tag") + n.locale.TAG, fn: () => S.editTags([e]) },
    // for future work, use a list of all the ancestors.
    {
      title: x.iconic("folder-cover", s ? "active" : "") + n.locale[s ? "REMOVE_COVER" : "SET_COVER"],
      fn: () => v.toggleCover(e)
    },
    {},
    { title: x.iconic("pencil") + n.locale.RENAME, fn: () => S.setTitle([e]) },
    {
      title: x.iconic("layers") + n.locale.COPY_TO,
      fn: () => {
        It(), ce.move([e], i, S.copyTo);
      }
    },
    // Notice for 'Move':
    // fn must call basicContext.close() first,
    // in order to keep the selection
    {
      title: x.iconic("folder") + n.locale.MOVE,
      fn: () => {
        It(), ce.move([e], i, S.setAlbum);
      }
    },
    { title: x.iconic("trash") + n.locale.DELETE, fn: () => S.delete([e]) },
    { title: x.iconic("cloud-download") + n.locale.DOWNLOAD, fn: () => S.getArchive([e]) }
  ];
  (v.isSmartID(v.getID()) || v.isSearchID(v.getID()) || v.isTagAlbum()) && l.splice(2, 1), p('.photo[data-id="' + e + '"]').addClass("active"), gt(l, i.originalEvent, ce.close);
};
ce.photoDrop = function(e, i, s) {
  const u = [
    {
      title: x.iconic("folder") + n.locale.MOVE,
      fn: () => {
        S.setAlbum([e], i);
      }
    }
  ];
  p('.photo[data-id="' + e + '"]').addClass("active"), gt(u, s, ce.close);
};
ce.photoMulti = function(e, i) {
  H.stopResize();
  let s = !1, u = !1;
  e.forEach(function(d) {
    v.getByID(d).is_starred ? s = !0 : u = !0;
  });
  let l = [
    // Only show the star/unstar menu item when the selected photos are
    // consistently either all starred or all not starred.
    {
      title: x.iconic("star") + (u ? n.locale.STAR_ALL : n.locale.UNSTAR_ALL),
      visible: !(s && u),
      fn: () => S.setStar(e, u)
    },
    { title: x.iconic("tag") + n.locale.TAG_ALL, fn: () => S.editTags(e) },
    {},
    { title: x.iconic("pencil") + n.locale.RENAME_ALL, fn: () => S.setTitle(e) },
    {
      title: x.iconic("layers") + n.locale.COPY_ALL_TO,
      fn: () => {
        It(), ce.move(e, i, S.copyTo);
      }
    },
    {
      title: x.iconic("folder") + n.locale.MOVE_ALL,
      fn: () => {
        It(), ce.move(e, i, S.setAlbum);
      }
    },
    { title: x.iconic("trash") + n.locale.DELETE_ALL, fn: () => S.delete(e) },
    { title: x.iconic("cloud-download") + n.locale.DOWNLOAD_ALL, fn: () => S.getArchive(e, "ORIGINAL") }
  ];
  gt(l, i.originalEvent, ce.close);
};
ce.photoTitle = function(e, i, s) {
  let u = [{ title: x.iconic("pencil") + n.locale.RENAME, fn: () => S.setTitle([i]) }];
  const l = v.json ? v.json.photos : [];
  l.length > 0 && (u.push({}), u = u.concat(ce.buildList(l, [i], (d) => n.goto(e + "/" + d.id)))), v.isUploadable() || u.splice(0, 2), gt(u, s.originalEvent, ce.close);
};
ce.photoMore = function(e, i) {
  const s = v.isUploadable() || S.json.grant_download, u = !!(S.json.size_variants.original.url && S.json.size_variants.original.url !== ""), l = [
    { title: x.iconic("fullscreen-enter") + n.locale.FULL_PHOTO, visible: u, fn: () => window.open(S.getDirectLink()) },
    { title: x.iconic("cloud-download") + n.locale.DOWNLOAD, visible: s, fn: () => S.getArchive([e]) }
  ];
  if (v.isUploadable()) {
    const d = p("#button_visibility");
    d && d.css("display") === "none" && l.unshift({
      title: x.iconic("eye") + n.locale.VISIBILITY_PHOTO,
      visible: n.enable_button_visibility,
      fn: () => S.setProtectionPolicy(S.getID())
    });
    const h = p("#button_trash");
    h && h.css("display") === "none" && l.unshift({
      title: x.iconic("trash") + n.locale.DELETE,
      visible: n.enable_button_trash,
      fn: () => S.delete([S.getID()])
    });
    const E = p("#button_move");
    if (E && E.css("display") === "none" && l.unshift({
      title: x.iconic("folder") + n.locale.MOVE,
      visible: n.enable_button_move,
      fn: (C) => ce.move([S.getID()], C, S.setAlbum)
    }), !(S.json.type && (S.json.type.indexOf("video") === 0 || S.json.type === "raw") || S.json.live_photo_url !== "" && S.json.live_photo_url !== null)) {
      const C = p("#button_rotate_cwise");
      C && C.css("display") === "none" && l.unshift({
        title: x.iconic("clockwise") + n.locale.PHOTO_EDIT_ROTATECWISE,
        visible: n.enable_button_move,
        fn: () => Sn.rotate(S.getID(), 1)
      });
      const m = p("#button_rotate_ccwise");
      m && m.css("display") === "none" && l.unshift({
        title: x.iconic("counterclockwise") + n.locale.PHOTO_EDIT_ROTATECCWISE,
        visible: n.enable_button_move,
        fn: () => Sn.rotate(S.getID(), -1)
      });
    }
  }
  gt(l, i.originalEvent);
};
ce.getSubIDs = function(e, i) {
  let s = [i];
  return e.forEach(function(u) {
    u.parent_id === i && (s = s.concat(ce.getSubIDs(e, u.id))), u.albums && u.albums.length > 0 && (s = s.concat(ce.getSubIDs(u.albums, i)));
  }), s;
};
ce.move = function(e, i, s, u = "UNSORTED", l = !0) {
  let d = [];
  K.post("Albums::tree", {}, function(h) {
    const E = function(C) {
      let m, W, D = [];
      for (m = 0; m < e.length; m++) {
        let he = ce.getSubIDs(C, e[m]);
        for (W = 0; W < he.length; W++)
          D.push(he[W]);
      }
      P.album() ? (s !== v.merge && s !== S.copyTo && D.push(v.getID()), e.length === 1 && e[0] === v.getID() && v.getParentID() && s === v.setAlbum && D.push(v.getParentID())) : P.photo() && D.push(S.json.album_id), d = d.concat(ce.buildList(C, D.concat(e), (he) => s(e, he.id)));
    };
    h.albums && h.albums.length > 0 && E(h.albums), h.shared_albums && h.shared_albums.length > 0 && n.rights.settings.can_edit && (d = d.concat({}), E(h.shared_albums)), l && v.getID() !== "unsorted" && !P.albums() && (d.unshift({}), d.unshift({ title: n.locale[u], fn: () => s(e, null) })), (e.length !== 1 || e[0] !== (v.json ? v.json.id : null) || s !== v.setAlbum) && (d.unshift({}), d.unshift({ title: n.locale.NEW_ALBUM, fn: () => v.add(e, s) })), gt(d, i.originalEvent, ce.close);
  });
};
ce.sharePhoto = function(e, i) {
  if (!n.share_button_visible)
    return;
  const s = "ionicons", u = [
    { title: x.iconic("twitter", s) + "Twitter", fn: () => S.share(e, "twitter") },
    { title: x.iconic("facebook", s) + "Facebook", fn: () => S.share(e, "facebook") },
    { title: x.iconic("envelope-closed") + "Mail", fn: () => S.share(e, "mail") },
    {
      title: x.iconic("dropbox", s) + "Dropbox",
      visible: n.rights.settings.can_edit === !0,
      fn: () => S.share(e, "dropbox")
    },
    { title: x.iconic("link-intact") + n.locale.DIRECT_LINKS, fn: () => S.showDirectLinks(e) },
    { title: x.iconic("grid-two-up") + n.locale.QR_CODE, fn: () => S.qrCode(e) }
  ];
  gt(u, i.originalEvent);
};
ce.shareAlbum = function(e, i) {
  if (!n.share_button_visible)
    return;
  const s = "ionicons", u = [
    { title: x.iconic("twitter", s) + "Twitter", fn: () => v.share("twitter") },
    { title: x.iconic("facebook", s) + "Facebook", fn: () => v.share("facebook") },
    { title: x.iconic("envelope-closed") + "Mail", fn: () => v.share("mail") },
    {
      title: x.iconic("link-intact") + n.locale.DIRECT_LINK,
      fn: () => {
        let l = n.getBaseUrl() + "r/" + e;
        v.json.policy.is_password_required && (l += "?password="), navigator.clipboard.writeText(l).then(() => Z.show("success", n.locale.URL_COPIED_TO_CLIPBOARD));
      }
    },
    { title: x.iconic("grid-two-up") + n.locale.QR_CODE, fn: () => v.qrCode() }
  ];
  gt(u, i.originalEvent);
};
ce.close = function() {
  P.contextMenu() && (It(), H.clearSelection(), P.multiselect() && H.close());
};
const Wn = {
  /** @type {?EMailData} */
  json: null
};
Wn.update = function(e) {
  if (e.email && e.email.length > 1 && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e.email).toLowerCase())) {
    Z.show("error", n.locale.ERROR_INVALID_EMAIL);
    return;
  }
  K.post("User::setEmail", e, function() {
    Z.show("success", n.locale.EMAIL_SUCCESS);
  });
};
Wn.load = function() {
  K.post(
    "User::getAuthenticatedUser",
    {},
    /** @param {EMailData} data */
    function(e) {
      Wn.json = e.email, M.notifications.init();
    }
  );
};
const _e = {
  _dom: p("#lychee_left_menu_container")
};
_e.dom = function(e) {
  return e == null || e === "" ? _e._dom : _e._dom.find(e);
};
_e.build = function() {
  let e = n.html`
		<a class="linkMenu" id="button_settings_close" data-tabindex="-1">${x.iconic("chevron-left")}${n.locale.CLOSE}</a>
	`;
  (n.rights.settings.can_edit || n.rights.user.can_edit) && (e += n.html`
		<a class="linkMenu" id="button_settings_open" data-tabindex="-1"><svg class="iconic"><use xlink:href="#cog"></use></svg>${n.locale.SETTINGS}</a>
		`), n.new_photos_notification && (e += n.html`
		<a class="linkMenu" id="button_notifications" data-tabindex="-1">${x.iconic("bell")}${n.locale.NOTIFICATIONS} </a>
		`), n.rights.user_management.can_edit && (e += n.html`
		<a class="linkMenu" id="button_users" data-tabindex="-1">${x.iconic("person")}${n.locale.USERS} </a>
		`), n.rights.user.can_use_2fa && (e += n.html`
		<a class="linkMenu" id="button_u2f" data-tabindex="-1">${x.iconic("key")}${n.locale.U2F} </a>
		`), n.rights.root_album.can_upload && (e += n.html`
		<a class="linkMenu" id="button_sharing" data-tabindex="-1">${x.iconic("cloud")}${n.locale.SHARING}</a>
		`), n.rights.settings.can_see_logs && (e += n.html`
		<a class="linkMenu" id="button_logs" data-tabindex="-1">${x.iconic("align-left")}${n.locale.LOGS}</a>
		`), n.rights.settings.can_see_diagnostics && (e += n.html`
		<a class="linkMenu" id="button_diagnostics" data-tabindex="-1">${x.iconic("wrench")}${n.locale.DIAGNOSTICS}</a>
		`), e += n.html`
		<a class="linkMenu" id="button_about" data-tabindex="-1">${x.iconic("info")}${n.locale.ABOUT_LYCHEE}</a>
		<a class="linkMenu" id="button_signout" data-tabindex="21">${x.iconic("account-logout")}${n.locale.SIGN_OUT}</a>`, n.rights.settings.can_update && n.update_available && (e += n.html`
		<a class="linkMenu" id="button_update"  data-tabindex="-1">${x.iconic("timer")}${n.locale.UPDATE_AVAILABLE}</a>
		`), _e.dom("#lychee_left_menu").html(e);
};
_e.open = function() {
  _e.dom().addClass("visible"), V.makeUnfocusable(F.dom()), V.makeUnfocusable(n.content), V.makeFocusable(_e.dom()), p("#button_signout").focus(), H.unbind();
};
_e.close = function() {
  _e.dom().removeClass("visible"), V.makeFocusable(F.dom()), V.makeFocusable(n.content), V.makeUnfocusable(_e.dom()), H.bind(), n.load();
};
_e.closeIfResponsive = function() {
  window.matchMedia("only screen and (max-width: 567px), only screen and (max-width: 640px) and (orientation: portrait)").matches && (_e.dom().removeClass("visible"), V.makeFocusable(F.dom()), V.makeFocusable(n.content), V.makeUnfocusable(_e.dom()));
};
_e.bind = function() {
  const e = "click";
  _e.dom("#button_settings_close").on(e, _e.close), _e.dom("#button_settings_open").on(e, () => {
    _e.closeIfResponsive(), ie.open();
  }), _e.dom("#button_signout").on(e, n.logout), _e.dom("#button_logs").on(e, _e.Logs), _e.dom("#button_diagnostics").on(e, _e.Diagnostics), _e.dom("#button_about").on(e, n.aboutDialog), _e.dom("#button_notifications").on(e, _e.Notifications), _e.dom("#button_users").on(e, _e.Users), _e.dom("#button_u2f").on(e, _e.u2f), _e.dom("#button_sharing").on(e, _e.Sharing), _e.dom("#button_update").on(e, _e.Update);
};
_e.Logs = function() {
  _e.closeIfResponsive(), M.logs.init();
};
_e.Diagnostics = function() {
  _e.closeIfResponsive(), M.diagnostics.init();
};
_e.Update = function() {
  _e.closeIfResponsive(), M.update.init();
};
_e.Notifications = function() {
  _e.closeIfResponsive(), Wn.load();
};
_e.Users = function() {
  _e.closeIfResponsive(), users.list();
};
_e.u2f = function() {
  _e.closeIfResponsive(), tt.list();
};
_e.Sharing = function() {
  _e.closeIfResponsive(), ct.list();
};
const F = {
  _dom: p("#lychee_toolbar_container")
};
F.dom = function(e) {
  return e == null || e === "" ? F._dom : F._dom.find(e);
};
F.bind = function() {
  const e = "click";
  F.dom(".header__title").on(e, function(i) {
    if (p(this).hasClass("header__title--editable") === !1 || n.enable_contextmenu_header === !1)
      return !1;
    P.photo() ? ce.photoTitle(v.getID(), S.getID(), i) : ce.albumTitle(v.getID(), i);
  }), F.dom("#button_visibility").on(e, function() {
    S.setProtectionPolicy(S.getID());
  }), F.dom("#button_share").on(e, function(i) {
    ce.sharePhoto(S.getID(), i);
  }), F.dom("#button_visibility_album").on(e, function() {
    v.setProtectionPolicy(v.getID());
  }), F.dom("#button_sharing_album_users").on(e, function() {
    v.shareUsers(v.getID());
  }), F.dom("#button_share_album").on(e, function(i) {
    ce.shareAlbum(v.getID(), i);
  }), F.dom("#button_signin").on(e, n.loginDialog), F.dom("#button_settings").on(e, function(i) {
    _e.open();
  }), F.dom("#button_close_config").on(e, function() {
    V.makeFocusable(F.dom()), V.makeFocusable(n.content), V.makeUnfocusable(_e._dom), H.bind(), n.load();
  }), F.dom("#button_info_album").on(e, function() {
    Q.toggle(!0);
  }), F.dom("#button_info").on(e, function() {
    Q.toggle(!0);
  }), F.dom(".button--map-albums").on(e, function() {
    n.gotoMap();
  }), F.dom("#button_map_album").on(e, function() {
    n.gotoMap(v.getID());
  }), F.dom("#button_map").on(e, function() {
    n.gotoMap(v.getID());
  }), F.dom(".button_add").on(e, ce.add), F.dom("#button_more").on(e, function(i) {
    ce.photoMore(S.getID(), i);
  }), F.dom("#button_move_album").on(e, function(i) {
    ce.move([v.getID()], i, v.setAlbum, "ROOT", v.getParentID() != null);
  }), F.dom("#button_nsfw_album").on(e, function() {
    v.toggleNSFW();
  }), F.dom("#button_move").on(e, function(i) {
    ce.move([S.getID()], i, S.setAlbum);
  }), F.dom(".header__hostedwith").on(e, function() {
    window.open(n.website);
  }), F.dom("#button_trash_album").on(e, function() {
    v.delete([v.getID()]);
  }), F.dom("#button_trash").on(e, function() {
    S.delete([S.getID()]);
  }), F.dom("#button_archive").on(e, function() {
    v.getArchive([v.getID()]);
  }), F.dom("#button_star").on(e, function() {
    S.toggleStar();
  }), F.dom("#button_rotate_ccwise").on(e, function() {
    Sn.rotate(S.getID(), -1);
  }), F.dom("#button_rotate_cwise").on(e, function() {
    Sn.rotate(S.getID(), 1);
  }), F.dom("#button_back_home").on(e, function() {
    v.json.parent_id ? n.goto(v.getParentID()) : n.goto();
  }), F.dom("#button_back").on(e, function() {
    n.goto(v.getID());
  }), F.dom("#button_back_map").on(e, function() {
    n.goto(v.getID());
  }), F.dom("#button_fs_album_enter,#button_fs_enter").on(e, n.fullscreenEnter), F.dom("#button_fs_album_exit,#button_fs_exit").on(e, n.fullscreenExit).hide(), F.dom(".header__search").on("keyup click", function() {
    p(this).val().length > 0 ? n.goto(Qt + "/" + encodeURIComponent(p(this).val())) : qe.json !== null && qe.reset();
  }), F.dom(".header__clear").on(e, function() {
    qe.reset();
  }), F.bind_back();
};
F.bind_back = function() {
  F.dom(".header__title").on("click touchend", function() {
    if (n.landing_page_enable && P.albums())
      window.location.href = ".";
    else
      return !1;
  });
};
F.show = function() {
  n.imageview.removeClass("full"), F.dom().removeClass("hidden"), V.restoreSettings(F.dom());
};
F.hideIfLivePhotoNotPlaying = function() {
  S.isLivePhotoPlaying() || F.hide();
};
F.hide = function() {
  P.photo() && !P.sidebar() && !P.contextMenu() && j.isVisible() === !1 && (V.saveSettings(F.dom()), V.makeUnfocusable(F.dom()), n.imageview.addClass("full"), F.dom().addClass("hidden"));
};
F.setTitle = function(e) {
  let i = F.dom(".header__title"), s = n.html`$${e}${x.iconic("caret-bottom")}`;
  i.html(s);
};
F.setMode = function(e) {
  switch (e === "albums" && n.publicMode === !0 && (e = "public"), e) {
    case "public":
      if (F.dom(".toolbar").removeClass("visible"), F.dom("#lychee_toolbar_public").addClass("visible"), V.makeUnfocusable(F.dom(".toolbar")), V.makeFocusable(F.dom("#lychee_toolbar_public")), n.public_search) {
        const s = p(".header__search, .header__clear", "#lychee_toolbar_public");
        s.show(), V.makeFocusable(s);
      } else {
        const s = p(".header__search, .header__clear", "#lychee_toolbar_public");
        s.hide(), V.makeUnfocusable(s);
      }
      if (n.map_display_public) {
        const s = p(".button--map-albums", "#lychee_toolbar_public");
        s.show(), V.makeFocusable(s);
      } else {
        const s = p(".button--map-albums", "#lychee_toolbar_public");
        s.hide(), V.makeUnfocusable(s);
      }
      n.active_focus_on_page_load && p("#button_signin").focus();
      return;
    case "albums":
      if (F.dom(".toolbar").removeClass("visible"), F.dom("#lychee_toolbar_albums").addClass("visible"), V.makeUnfocusable(F.dom(".toolbar")), V.makeFocusable(F.dom("#lychee_toolbar_albums")), n.map_display) {
        const s = p(".button--map-albums", "#lychee_toolbar_albums");
        s.show(), V.makeFocusable(s);
      } else {
        const s = p(".button--map-albums", "#lychee_toolbar_albums");
        s.hide(), V.makeUnfocusable(s);
      }
      if (n.enable_button_add && n.rights.root_album.can_upload) {
        const s = p(".button_add", "#lychee_toolbar_albums");
        s.show(), V.makeFocusable(s);
      } else
        p(".button_add", "#lychee_toolbar_albums").remove();
      return;
    case "album":
      const i = v.getID();
      if (F.dom(".toolbar").removeClass("visible"), F.dom("#lychee_toolbar_album").addClass("visible"), V.makeUnfocusable(F.dom(".toolbar")), V.makeFocusable(F.dom("#lychee_toolbar_album")), !v.json || v.json.photos.length === 0 && v.json.albums && v.json.albums.length === 0 || !v.json.rights.can_download) {
        const s = p("#button_archive");
        s.hide(), V.makeUnfocusable(s);
      } else {
        const s = p("#button_archive");
        s.show(), V.makeFocusable(s);
      }
      if (n.share_button_visible) {
        const s = p("#button_share_album");
        s.show(), V.makeFocusable(s);
      } else {
        const s = p("#button_share_album");
        s.hide(), V.makeUnfocusable(s);
      }
      if (n.publicMode === !0 ? n.map_display_public : n.map_display) {
        const s = p("#button_map_album");
        s.show(), V.makeFocusable(s);
      } else {
        const s = p("#button_map_album");
        s.hide(), V.makeUnfocusable(s);
      }
      i === Me.STARRED || i === Me.PUBLIC || i === Me.RECENT || i === Me.ON_THIS_DAY ? (p(
        "#button_nsfw_album, #button_info_album, #button_trash_album, #button_visibility_album, #button_sharing_album_users, #button_move_album"
      ).hide(), v.isUploadable() ? (p(".button_add, .header__divider", "#lychee_toolbar_album").show(), V.makeFocusable(p(".button_add, .header__divider", "#lychee_toolbar_album"))) : (p(".button_add, .header__divider", "#lychee_toolbar_album").hide(), V.makeUnfocusable(p(".button_add, .header__divider", "#lychee_toolbar_album"))), V.makeUnfocusable(
        p(
          "#button_nsfw_album, #button_info_album, #button_trash_album, #button_visibility_album, #button_sharing_album_users, #button_move_album"
        )
      )) : i === Me.UNSORTED ? (p("#button_nsfw_album, #button_info_album, #button_visibility_album, #button_sharing_album_users, #button_move_album").hide(), p("#button_trash_album, .button_add, .header__divider", "#lychee_toolbar_album").show(), V.makeFocusable(p("#button_trash_album, .button_add, .header__divider", "#lychee_toolbar_album")), V.makeUnfocusable(
        p("#button_nsfw_album, #button_info_album, #button_visibility_album, #button_sharing_album_users, #button_move_album")
      )) : v.isTagAlbum() ? (p("#button_info_album").show(), Q.keepSidebarVisible() && !P.sidebar() && Q.toggle(!1), p("#button_move_album").hide(), p(".button_add, .header__divider", "#lychee_toolbar_album").hide(), V.makeFocusable(p("#button_info_album")), V.makeUnfocusable(p("#button_move_album")), V.makeUnfocusable(p(".button_add, .header__divider", "#lychee_toolbar_album")), v.isUploadable() ? (p("#button_nsfw_album, #button_visibility_album, #button_sharing_album_users, #button_trash_album").show(), V.makeFocusable(p("#button_nsfw_album, #button_visibility_album, #button_sharing_album_users, #button_trash_album")), p("#button_visibility_album").is(":hidden") && (p(".button_add, .header__divider", "#lychee_toolbar_album").show(), V.makeFocusable(p(".button_add, .header__divider", "#lychee_toolbar_album")))) : (p("#button_nsfw_album, #button_visibility_album, #button_sharing_album_users, #button_trash_album").hide(), V.makeUnfocusable(p("#button_nsfw_album, #button_visibility_album, #button_sharing_album_users, #button_trash_album")))) : (p("#button_info_album").show(), Q.keepSidebarVisible() && !P.sidebar() && Q.toggle(!1), V.makeFocusable(p("#button_info_album")), v.isUploadable() ? (p(
        "#button_nsfw_album, #button_trash_album, #button_move_album, #button_visibility_album, #button_sharing_album_users, .button_add, .header__divider",
        "#lychee_toolbar_album"
      ).show(), V.makeFocusable(
        p(
          "#button_nsfw_album, #button_trash_album, #button_move_album, #button_visibility_album, #button_sharing_album_users, .button_add, .header__divider",
          "#lychee_toolbar_album"
        )
      )) : (p(
        "#button_nsfw_album, #button_trash_album, #button_move_album, #button_visibility_album, #button_sharing_album_users, .button_add, .header__divider",
        "#lychee_toolbar_album"
      ).hide(), V.makeUnfocusable(
        p(
          "#button_nsfw_album, #button_trash_album, #button_move_album, #button_visibility_album, #button_sharing_album_users, .button_add, .header__divider",
          "#lychee_toolbar_album"
        )
      ))), n.enable_button_visibility || p("#button_visibility_album", "#button_sharing_album_users", "#lychee_toolbar_album").remove(), (!n.enable_button_share || !n.share_button_visible) && p("#button_share_album", "#lychee_toolbar_album").remove(), n.enable_button_archive || p("#button_archive", "#lychee_toolbar_album").remove(), n.enable_button_move || p("#button_move_album", "#lychee_toolbar_album").remove(), n.enable_button_trash || p("#button_trash_album", "#lychee_toolbar_album").remove(), (!n.enable_button_fullscreen || !n.fullscreenAvailable()) && p("#button_fs_album_enter", "#lychee_toolbar_album").remove(), n.enable_button_add || p(".button_add", "#lychee_toolbar_album").remove();
      return;
    case "photo":
      if (F.dom(".toolbar").removeClass("visible"), F.dom("#lychee_toolbar_photo").addClass("visible"), V.makeUnfocusable(F.dom(".toolbar")), V.makeFocusable(F.dom("#lychee_toolbar_photo")), n.publicMode === !0 ? n.map_display_public : n.map_display) {
        const s = p("#button_map");
        s.show(), V.makeFocusable(s);
      } else {
        const s = p("#button_map");
        s.hide(), V.makeUnfocusable(s);
      }
      if (n.enable_button_move && v.isUploadable()) {
        const s = p("#button_move");
        s.show(), V.makeFocusable(s);
      } else {
        const s = p("#button_move");
        s.hide(), V.makeUnfocusable(s);
      }
      if (n.share_button_visible) {
        const s = p("#button_share");
        s.show(), V.makeFocusable(s);
      } else {
        const s = p("#button_share");
        s.hide(), V.makeUnfocusable(s);
      }
      if (n.enable_button_trash && v.isUploadable()) {
        const s = p("#button_trash");
        s.show(), V.makeFocusable(s);
      } else {
        const s = p("#button_trash");
        s.hide(), V.makeUnfocusable(s);
      }
      if (n.enable_button_fullscreen && n.fullscreenAvailable() ? p("#button_fs_enter").show() : p("#button_fs_enter").hide(), !n.enable_button_more || !//
      (v.isUploadable() || S.json && (S.json.rights.can_download || S.json.rights.can_access_full_photo && S.json.size_variants.original.url))) {
        const s = p("#button_more");
        s.hide(), V.makeUnfocusable(s);
      } else {
        const s = p("#button_more");
        s.show(), V.makeFocusable(s);
      }
      if (n.publicMode) {
        const s = p("#button_star", "#lychee_toolbar_photo");
        s.hide(), V.makeUnfocusable(s);
      } else
        p("#button_star", "#lychee_toolbar_photo").show();
      if (!n.enable_button_visibility || n.publicMode ? p("#button_visibility", "#lychee_toolbar_photo").hide() : p("#button_visibility", "#lychee_toolbar_photo").show(), !n.enable_button_share || !n.share_button_visible ? p("#button_share", "#lychee_toolbar_photo").hide() : p("#button_share", "#lychee_toolbar_photo").show(), !n.enable_button_move || n.publicMode ? p("#button_move", "#lychee_toolbar_photo").hide() : p("#button_move", "#lychee_toolbar_photo").show(), !n.enable_button_trash || n.publicMode ? p("#button_trash", "#lychee_toolbar_photo").hide() : p("#button_trash", "#lychee_toolbar_photo").show(), !n.enable_button_fullscreen || !n.fullscreenAvailable() || n.publicMode ? p("#button_fs_enter", "#lychee_toolbar_photo").hide() : p("#button_fs_enter", "#lychee_toolbar_photo").show(), !n.enable_button_rotate || n.publicMode) {
        let s = p("#button_rotate_cwise", "#lychee_toolbar_photo");
        s.hide(), s = p("#button_rotate_ccwise", "#lychee_toolbar_photo"), s.hide();
      } else {
        let s = p("#button_rotate_cwise", "#lychee_toolbar_photo");
        s.show(), s = p("#button_rotate_ccwise", "#lychee_toolbar_photo"), s.show(), V.makeFocusable(s);
      }
      return;
    case "map":
      F.dom(".toolbar").removeClass("visible"), F.dom("#lychee_toolbar_map").addClass("visible"), V.makeUnfocusable(F.dom(".toolbar")), V.makeFocusable(F.dom("#lychee_toolbar_map"));
      return;
    case "config":
      F.dom(".toolbar").removeClass("visible"), F.dom("#lychee_toolbar_config").addClass("visible");
      return;
  }
};
F.setEditable = function(e) {
  const i = F.dom(".header__title");
  e && !n.publicMode ? i.addClass("header__title--editable") : i.removeClass("header__title--editable");
};
let Q = {
  /** @type {jQuery} */
  _dom: p("#lychee_sidebar_container"),
  types: {
    DEFAULT: 0,
    TAGS: 1
  },
  createStructure: {}
};
Q.dom = function(e) {
  return e == null || e === "" ? Q._dom : Q._dom.find(e);
};
Q.bind = function() {
  const e = "click";
  Q.dom("#edit_title").off(e).on(e, function() {
    P.photo() ? S.setTitle([S.getID()]) : P.album() && v.setTitle([v.getID()]);
  }), Q.dom("#edit_description").off(e).on(e, function() {
    P.photo() ? S.setDescription(S.getID()) : P.album() && v.setDescription(v.getID());
  }), Q.dom("#edit_uploaded").off(e).on(e, function() {
    P.photo() && S.setCreatedAt(S.getID());
  }), Q.dom("#edit_showtags").off(e).on(e, function() {
    v.setShowTags(v.getID());
  }), Q.dom("#edit_tags").off(e).on(e, function() {
    S.editTags([S.getID()]);
  }), Q.dom("#tags .tag").off(e).on(e, function() {
    Q.triggerSearch(p(this).text());
  }), Q.dom("#tags .tag span").off(e).on(e, function() {
    S.deleteTag(S.getID(), p(this).data("index"));
  }), Q.dom("#edit_license").off(e).on(e, function() {
    P.photo() ? S.setLicense(S.getID()) : P.album() && v.setLicense(v.getID());
  }), Q.dom("#edit_sorting").off(e).on(e, function() {
    v.setSorting(v.getID());
  }), Q.dom(".attr_location").off(e).on(e, function() {
    Q.triggerSearch(p(this).text());
  });
};
Q.triggerSearch = function(e) {
  n.publicMode && !n.public_search || (qe.json = null, n.goto(Qt + "/" + encodeURIComponent(e)));
};
Q.keepSidebarVisible = function() {
  const e = sessionStorage.getItem("keepSidebarVisible");
  return e !== null ? e === "true" : !1;
};
Q.toggle = function(e) {
  (P.sidebar() || P.sidebarbutton()) && (F.dom(".button--info").toggleClass("active"), Q.dom().toggleClass("active"), e && sessionStorage.setItem("keepSidebarVisible", P.sidebar() ? "true" : "false"));
};
Q.setSelectable = function(e = !0) {
  e ? Q.dom().removeClass("notSelectable") : Q.dom().addClass("notSelectable");
};
Q.changeAttr = function(e, i = "", s = !1) {
  e && (i || (i = ""), s || (i = n.escapeHTML(i)), Q.dom(".attr_" + e).html(i));
};
Q.hideAttr = function(e) {
  Q.dom(".attr_" + e).closest("tr").hide();
};
Q.secondsToHMS = function(e) {
  e = Number(e);
  const i = Math.floor(e / 3600), s = Math.floor(e % 3600 / 60), u = Math.floor(e % 60);
  return (i > 0 ? i.toString() + "h" : "") + (s > 0 ? s.toString() + "m" : "") + (u > 0 || i === 0 && s === 0 ? u.toString() + "s" : "");
};
Q.createStructure.photo = function(e) {
  if (!e)
    return [];
  let i = e.rights.can_edit, s = !!e.taken_at || !!e.make || !!e.model || !!e.shutter || !!e.aperture || !!e.focal || !!e.iso, u = e.longitude !== null || e.latitude !== null || e.altitude !== null, l = {}, d = "", h = e.type && e.type.indexOf("video") > -1, E;
  switch (e.license) {
    case "none":
      E = "";
      break;
    case "reserved":
      E = n.locale.PHOTO_RESERVED;
      break;
    default:
      E = e.license;
      break;
  }
  switch (e.is_public) {
    case 0:
      d = n.locale.PHOTO_SHR_NO;
      break;
    case 1:
      d = n.locale.PHOTO_SHR_PHT;
      break;
    case 2:
      d = n.locale.PHOTO_SHR_ALB;
      break;
    default:
      d = "-";
      break;
  }
  l.basics = {
    title: n.locale.PHOTO_BASICS,
    type: Q.types.DEFAULT,
    rows: [
      { title: n.locale.PHOTO_TITLE, kind: "title", value: e.title, editable: i },
      { title: n.locale.PHOTO_UPLOADED, kind: "uploaded", value: n.locale.printDateTime(e.created_at), editable: i },
      { title: n.locale.PHOTO_DESCRIPTION, kind: "description", value: e.description ? e.description : "", editable: i }
    ]
  }, l.image = {
    title: n.locale[h ? "PHOTO_VIDEO" : "PHOTO_IMAGE"],
    type: Q.types.DEFAULT,
    rows: [
      { title: n.locale.PHOTO_SIZE, kind: "size", value: n.locale.printFilesizeLocalized(e.size_variants.original.filesize) },
      { title: n.locale.PHOTO_FORMAT, kind: "type", value: e.type },
      {
        title: n.locale.PHOTO_RESOLUTION,
        kind: "resolution",
        value: e.size_variants.original.width + " x " + e.size_variants.original.height
      }
    ]
  }, h && ((e.size_variants.original.width === 0 || e.size_variants.original.height === 0) && l.image.rows.splice(-1, 1), e.aperture && l.image.rows.push({ title: n.locale.PHOTO_DURATION, kind: "duration", value: Q.secondsToHMS(e.aperture) }), e.focal && l.image.rows.push({ title: n.locale.PHOTO_FPS, kind: "fps", value: e.focal + " fps" })), l.tags = {
    title: n.locale.PHOTO_TAGS,
    type: Q.types.TAGS,
    value: x.tags(e.tags),
    editable: i
  }, s ? l.exif = {
    title: n.locale.PHOTO_CAMERA,
    type: Q.types.DEFAULT,
    rows: h ? [
      { title: n.locale.PHOTO_CAPTURED, kind: "takedate", value: n.locale.printDateTime(e.taken_at) },
      { title: n.locale.PHOTO_MAKE, kind: "make", value: e.make },
      { title: n.locale.PHOTO_TYPE, kind: "model", value: e.model }
    ] : [
      { title: n.locale.PHOTO_CAPTURED, kind: "takedate", value: n.locale.printDateTime(e.taken_at) },
      { title: n.locale.PHOTO_MAKE, kind: "make", value: e.make },
      { title: n.locale.PHOTO_TYPE, kind: "model", value: e.model },
      { title: n.locale.PHOTO_LENS, kind: "lens", value: e.lens },
      { title: n.locale.PHOTO_SHUTTER, kind: "shutter", value: e.shutter },
      { title: n.locale.PHOTO_APERTURE, kind: "aperture", value: e.aperture },
      { title: n.locale.PHOTO_FOCAL, kind: "focal", value: e.focal },
      { title: Qe.sprintf(n.locale.PHOTO_ISO, ""), kind: "iso", value: e.iso }
    ]
  } : l.exif = {}, l.sharing = {
    title: n.locale.PHOTO_SHARING,
    type: Q.types.DEFAULT,
    rows: [{ title: n.locale.PHOTO_SHR_PUBLIC, kind: "public", value: d }]
  }, l.license = {
    title: n.locale.PHOTO_REUSE,
    type: Q.types.DEFAULT,
    rows: [{ title: n.locale.PHOTO_LICENSE, kind: "license", value: E, editable: i }]
  }, u ? (l.location = {
    title: n.locale.PHOTO_LOCATION,
    type: Q.types.DEFAULT,
    rows: [
      {
        title: n.locale.PHOTO_LATITUDE,
        kind: "latitude",
        value: e.latitude ? mo(e.latitude, !0) : ""
      },
      {
        title: n.locale.PHOTO_LONGITUDE,
        kind: "longitude",
        value: e.longitude ? mo(e.longitude, !1) : ""
      },
      // No point in displaying sub-mm precision; 10cm is more than enough.
      {
        title: n.locale.PHOTO_ALTITUDE,
        kind: "altitude",
        value: e.altitude ? (Math.round(e.altitude * 10) / 10).toString() + "m" : ""
      },
      {
        title: n.locale.PHOTO_LOCATION,
        kind: "location",
        // Explode location string into an array to keep street, city etc. separate
        // TODO: We should consider to keep the components apart on the server-side and send an structured object to the front-end.
        value: e.location ? e.location.split(",").map((m) => m.trim()) : ""
      }
    ]
  }, e.img_direction !== null && l.location.rows.push({
    title: n.locale.PHOTO_IMGDIRECTION,
    kind: "imgDirection",
    value: Math.round(e.img_direction).toString() + "°"
  })) : l.location = {};
  const C = [l.basics, l.image, l.tags, l.exif, l.location];
  return E && C.push(l.license), n.publicMode || C.push(l.sharing), C;
};
Q.createStructure.album = function(e) {
  if (!e)
    return [];
  let i = e.rights.can_edit, s = {}, u = e.policy && e.policy.is_public ? n.locale.ALBUM_SHR_YES : n.locale.ALBUM_SHR_NO, l = e.policy && e.policy.is_link_required ? n.locale.ALBUM_SHR_YES : n.locale.ALBUM_SHR_NO, d = e.policy && e.policy.grant_download ? n.locale.ALBUM_SHR_YES : n.locale.ALBUM_SHR_NO, h = e.policy && e.policy.is_password_required ? n.locale.ALBUM_SHR_YES : n.locale.ALBUM_SHR_NO, E = "", C = "";
  switch (e.license) {
    case "none":
      E = "";
      break;
    case "reserved":
      E = n.locale.ALBUM_RESERVED;
      break;
    default:
      E = e.license;
      break;
  }
  n.publicMode || (e.sorting ? C = e.sorting.column + " " + e.sorting.order : C = n.locale.DEFAULT), s.basics = {
    title: n.locale.ALBUM_BASICS,
    type: Q.types.DEFAULT,
    rows: [
      { title: n.locale.ALBUM_TITLE, kind: "title", value: e.title, editable: i },
      { title: n.locale.ALBUM_DESCRIPTION, kind: "description", value: e.description ? e.description : "", editable: i }
    ]
  }, v.isTagAlbum() && s.basics.rows.push({ title: n.locale.ALBUM_SHOW_TAGS, kind: "showtags", value: e.show_tags, editable: i });
  const m = e.photos.reduce((D, he) => D + (he.type.indexOf("video") > -1 ? 1 : 0), 0);
  s.album = {
    title: n.locale.ALBUM_ALBUM,
    type: Q.types.DEFAULT,
    rows: [{ title: n.locale.ALBUM_CREATED, kind: "created", value: n.locale.printDateTime(e.created_at) }]
  }, e.albums && e.albums.length > 0 && s.album.rows.push({ title: n.locale.ALBUM_SUBALBUMS, kind: "subalbums", value: e.albums.length }), e.photos && e.photos.length - m > 0 && s.album.rows.push({ title: n.locale.ALBUM_IMAGES, kind: "images", value: e.photos.length - m }), m > 0 && s.album.rows.push({ title: n.locale.ALBUM_VIDEOS, kind: "videos", value: m }), e.photos && C !== "" && s.album.rows.push({ title: n.locale.ALBUM_ORDERING, kind: "sorting", value: C, editable: i }), s.share = {
    title: n.locale.ALBUM_SHARING,
    type: Q.types.DEFAULT,
    rows: [
      { title: n.locale.ALBUM_PUBLIC, kind: "public", value: u },
      { title: n.locale.ALBUM_HIDDEN, kind: "hidden", value: l },
      { title: n.locale.ALBUM_DOWNLOADABLE, kind: "downloadable", value: d },
      { title: n.locale.ALBUM_PASSWORD, kind: "password", value: h }
    ]
  }, e.owner_name && s.share.rows.push({ title: n.locale.ALBUM_OWNER, kind: "owner", value: e.owner_name }), s.license = {
    title: n.locale.ALBUM_REUSE,
    type: Q.types.DEFAULT,
    rows: [{ title: n.locale.ALBUM_LICENSE, kind: "license", value: E, editable: i }]
  };
  let W = [s.basics, s.album];
  return E && W.push(s.license), n.publicMode || W.push(s.share), W;
};
Q.has_location = function(e) {
  let i = !1;
  return e.forEach(function(s) {
    s.title === n.locale.PHOTO_LOCATION && (i = !0);
  }), i;
};
Q.render = function(e) {
  const i = function(l) {
    let d = n.html`
				 <div class='sidebar__divider'>
					 <h1>$${l.title}</h1>
				 </div>
				 <table>
				 `;
    if (l.title === n.locale.PHOTO_LOCATION) {
      const h = l.rows.findIndex((m) => m.kind === "latitude" && m.value) !== -1, E = l.rows.findIndex((m) => m.kind === "longitude" && m.value) !== -1, C = l.rows.findIndex((m) => m.kind === "location");
      C !== -1 && (n.publicMode === !0 && !n.location_show_public || !n.location_show) && l.rows.splice(C, 1), h && E && n.map_display && (d += `
						 <div id="leaflet_map_single_photo"></div>
						 `);
    }
    return l.rows.forEach(function(h) {
      const E = h.value;
      if ((E === "" || E == null) && h.editable !== !0)
        return;
      let C;
      Array.isArray(E) ? C = E.reduce(
        /**
         * @param {string} prev
         * @param {string} cur
         */
        function(m, W) {
          return m !== "" && (m += n.html`<span class='attr_${h.kind}_separator'>, </span>`), m + n.html`<span class='attr_${h.kind} search'>$${W}</span>`;
        },
        ""
      ) : C = n.html`<span class='attr_${h.kind}'>$${E}</span>`, h.editable === !0 && (C += " " + x.editIcon("edit_" + h.kind)), d += n.html`<tr><td>$${h.title}</td><td>${C}</td></tr>`;
    }), d += "</table>", d;
  }, s = function(l) {
    const d = l.editable === !0 ? x.editIcon("edit_tags") : "";
    return n.html`
				 <div class='sidebar__divider'>
					 <h1>$${l.title}</h1>
				 </div>
				 <div id='tags'>
					 <div class='attr_${l.title.toLowerCase()}'>${l.value}</div>
					 ${d}
				 </div>
				 `;
  };
  let u = "";
  return e.forEach(function(l) {
    l.type === Q.types.DEFAULT ? u += i(l) : l.type === Q.types.TAGS && (u += s(l));
  }), u;
};
function mo(e, i) {
  const s = Math.abs(e);
  let u = 0, l = 0, d = 0, h;
  return s > 180 ? "" : (i && e < 0 ? h = "S" : !i && e < 0 ? h = "W" : i ? h = "N" : h = "E", u = Math.floor(s), d = (s - u) * 3600, l = Math.floor(d / 60), d = Math.floor(d - l * 60), u + "° " + l + "' " + d + '" ' + h);
}
const P = {};
P.albums = function() {
  return !!F.dom("#lychee_toolbar_public").hasClass("visible") || !!F.dom("#lychee_toolbar_albums").hasClass("visible");
};
P.album = function() {
  return !!F.dom("#lychee_toolbar_album").hasClass("visible");
};
P.photo = function() {
  return p("#imageview.fadeIn").length > 0;
};
P.mapview = function() {
  return p("#lychee_map_container.fadeIn").length > 0;
};
P.config = function() {
  return !!F.dom("#lychee_toolbar_config").hasClass("visible");
};
P.search = function() {
  return P.albums() && v.json !== null && v.isSearchID(v.json.id);
};
P.sidebar = function() {
  return !!Q.dom().hasClass("active");
};
P.sidebarbutton = function() {
  return P.photo() || P.album() && p("#button_info_album:visible").length > 0;
};
P.header = function() {
  return !F.dom().hasClass("hidden");
};
P.contextMenu = function() {
  return yo();
};
P.multiselect = function() {
  return p("#multiselect").length > 0;
};
P.leftMenu = function() {
  return !!_e.dom().hasClass("visible");
};
const q = {
  /** @type {?Albums} */
  json: null
};
q.load = function() {
  const e = function() {
    if (F.setMode("albums"), M.albums.init(), n.animate(n.content, "contentZoomIn"), V.makeFocusable(n.content), n.active_focus_on_page_load) {
      let u = p(".album:first");
      if (u.length !== 0)
        u.focus();
      else {
        let l = p(".photo:first");
        l.length !== 0 && l.focus();
      }
    }
    setTimeout(() => {
      n.footer_show();
    }, 300), n.publicMode === !0 && n.viewMode === !1 && q.isEmpty() && n.loginDialog();
  };
  let i = new Date().getTime();
  n.animate(n.content, "contentZoomOut");
  const s = function(u) {
    q.json = u;
    const l = !P.albums() && !P.photo() && !P.album() || P.album() && n.content.html() === "", d = new Date().getTime() - i, h = d > 300 || l ? 0 : 300 - d;
    setTimeout(() => {
      e();
    }, h);
  };
  q.json === null ? K.post("Albums::get", {}, s) : setTimeout(() => {
    e();
  }, 300);
};
q.parse = function(e) {
  e.thumb || (e.thumb = {
    id: "",
    thumb: e.policy.is_password_required ? "img/password.svg" : "img/no_images.svg",
    type: "image/svg+xml",
    thumb2x: null
  });
};
q.isShared = function(e) {
  if (e == null || !q.json || !q.json.albums)
    return !1;
  let i = !1;
  const s = function() {
    if (this.id === e)
      return i = !0, !1;
    this.albums && p.each(this.albums, s);
  };
  return q.json.shared_albums !== null && p.each(q.json.shared_albums, s), i;
};
q.getByID = function(e) {
  if (e == null || !q.json || !q.json.albums)
    return null;
  if (q.json.smart_albums.hasOwnProperty(e))
    return q.json.smart_albums[e];
  let i = q.json.tag_albums.find((s) => s.id === e);
  return i || (i = q.json.albums.find((s) => s.id === e), i) || (i = q.json.shared_albums.find((s) => s.id === e), i) ? i : null;
};
q.deleteByID = function(e) {
  if (e == null || !q.json || !q.json.albums)
    return;
  let i = q.json.albums.findIndex((s) => s.id === e);
  q.json.albums.splice(i, 1), i === -1 && (i = q.json.shared_albums.findIndex((s) => s.id === e), q.json.shared_albums.splice(i, 1), i === -1 && (i = q.json.tag_albums.findIndex((s) => s.id === e), q.json.tag_albums.splice(i, 1)));
};
q.refresh = function() {
  q.json = null;
};
q.isTagAlbum = function(e) {
  return q.json && q.json.tag_albums.find((i) => i.id === e);
};
q.isEmpty = function() {
  return q.json === null || q.isSmartAlbumEmpty(q.json.smart_albums.public) && q.isSmartAlbumEmpty(q.json.smart_albums.recent) && q.isSmartAlbumEmpty(q.json.smart_albums.starred) && q.isSmartAlbumEmpty(q.json.smart_albums.unsorted) && q.isSmartAlbumEmpty(q.json.smart_albums.on_this_day) && q.json.albums.length === 0 && q.json.shared_albums.length === 0 && q.json.tag_albums.length === 0;
};
q.isSmartAlbumEmpty = function(e) {
  return !e || !e.photos || e.photos.length === 0;
};
const $n = {
  /**
   * @type {MapProvider}
   */
  Wikimedia: {
    layer: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
  },
  /**
   * @type {MapProvider}
   */
  "OpenStreetMap.org": {
    layer: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution: `&copy; <a href="https://osm.org/copyright">${n.locale.OSM_CONTRIBUTORS}</a>`
  },
  /**
   * @type {MapProvider}
   */
  "OpenStreetMap.de": {
    layer: "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png ",
    attribution: `&copy; <a href="https://osm.org/copyright">${n.locale.OSM_CONTRIBUTORS}</a>`
  },
  /**
   * @type {MapProvider}
   */
  "OpenStreetMap.fr": {
    layer: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png ",
    attribution: `&copy; <a href="https://osm.org/copyright">${n.locale.OSM_CONTRIBUTORS}</a>`
  },
  /**
   * @type {MapProvider}
   */
  RRZE: {
    layer: "https://{s}.osm.rrze.fau.de/osmhd/{z}/{x}/{y}.png",
    attribution: `&copy; <a href="https://osm.org/copyright">${n.locale.OSM_CONTRIBUTORS}</a>`
  }
}, Ae = {
  /** @type {?L.Map} */
  map: null,
  photoLayer: null,
  trackLayer: null,
  /** @type {(?LatLngBounds|?number[][])} */
  bounds: null,
  /** @type {?string} */
  albumID: null,
  /** @type {?string} */
  map_provider: null
};
Ae.isInitialized = function() {
  return !(Ae.map === null || Ae.photoLayer === null);
};
Ae.title = function(e, i) {
  switch (e) {
    case Me.STARRED:
      n.setMetaData(n.locale.STARRED);
      break;
    case Me.PUBLIC:
      n.setMetaData(n.locale.PUBLIC);
      break;
    case Me.RECENT:
      n.setMetaData(n.locale.RECENT);
      break;
    case Me.UNSORTED:
      n.setMetaData(n.locale.UNSORTED);
      break;
    case Me.ON_THIS_DAY:
      n.setMetaData(n.locale.ON_THIS_DAY);
      break;
    case null:
      n.setMetaData(n.locale.ALBUMS);
      break;
    default:
      n.setMetaData(i || n.locale.UNTITLED);
      break;
  }
};
Ae.open = function(e = null) {
  if (!n.map_display || n.publicMode === !0 && !n.map_display_public) {
    Z.show("error", n.locale.ERROR_MAP_DEACTIVATED);
    return;
  }
  const i = p("#lychee_map_container");
  n.animate(i, "fadeIn"), i.addClass("active"), F.setMode("map"), Ae.albumID = e, Ae.isInitialized() ? (Ae.map_provider !== n.map_provider ? (Ae.map.eachLayer(function(d) {
    Ae.map.removeLayer(d);
  }), L.tileLayer($n[n.map_provider].layer, {
    attribution: $n[n.map_provider].attribution
  }).addTo(Ae.map), Ae.map_provider = n.map_provider) : (Ae.photoLayer.clear(), Ae.trackLayer !== null && Ae.map.removeLayer(Ae.trackLayer)), Ae.bounds = null) : (delete L.Icon.Default.prototype._getIconUrl, L.Icon.Default.mergeOptions({
    iconRetinaUrl: "img/marker-icon-2x.png",
    iconUrl: "img/marker-icon.png",
    shadowUrl: "img/marker-shadow.png"
  }), Ae.map = L.map("lychee_map_container").setView([0, 0], 13), L.tileLayer($n[n.map_provider].layer, {
    attribution: $n[n.map_provider].attribution
  }).addTo(Ae.map), Ae.map_provider = n.map_provider), Ae.photoLayer = L.photo.cluster().on("click", function(d) {
    const h = {
      photoID: d.layer.photo.photoID,
      albumID: d.layer.photo.albumID,
      name: d.layer.photo.name,
      url: d.layer.photo.url,
      url2x: d.layer.photo.url2x,
      taken_at: n.locale.printDateTime(d.layer.photo.taken_at)
    };
    let E = "";
    h.url2x !== "" ? E = E.concat(
      '<img class="image-leaflet-popup" src="{url}" ',
      'srcset="{url} 1x, {url2x} 2x" ',
      'data-album-id="{albumID}" data-id="{photoID}"/><div><h1>{name}</h1><span title="' + n.locale.CAMERA_DATE + '">',
      x.iconic("camera-slr"),
      "</span><p>{taken_at}</p></div>"
    ) : E = E.concat(
      '<img class="image-leaflet-popup" src="{url}" ',
      'data-album-id="{albumID}" data-id="{photoID}"/><div><h1>{name}</h1><span title="' + n.locale.CAMERA_DATE + '">',
      x.iconic("camera-slr"),
      "</span><p>{taken_at}</p></div>"
    ), d.layer.bindPopup(L.Util.template(E, h), {
      minWidth: 400
    }).openPopup();
  });
  const s = function() {
    Ae.bounds ? Ae.map.fitBounds(Ae.bounds) : Ae.map.fitWorld();
  }, u = function(d) {
    if (!d.photos)
      return;
    let h = [], E = null, C = null, m = null, W = null;
    if (d.photos.forEach(
      /** @param {Photo} element */
      function(D) {
        (D.latitude || D.longitude) && (h.push({
          lat: D.latitude,
          lng: D.longitude,
          thumbnail: D.size_variants.thumb !== null ? D.size_variants.thumb.url : "img/placeholder.png",
          thumbnail2x: D.size_variants.thumb2x !== null ? D.size_variants.thumb2x.url : null,
          url: D.size_variants.small !== null ? D.size_variants.small.url : D.url,
          url2x: D.size_variants.small2x !== null ? D.size_variants.small2x.url : null,
          name: D.title,
          taken_at: D.taken_at,
          albumID: D.album_id,
          photoID: D.id
        }), (E === null || E > D.latitude) && (E = D.latitude), (C === null || C > D.longitude) && (C = D.longitude), (m === null || m < D.latitude) && (m = D.latitude), (W === null || W < D.longitude) && (W = D.longitude));
      }
    ), Ae.photoLayer.add(h).addTo(Ae.map), h.length > 0) {
      const D = m - E, he = W - C;
      Ae.bounds = [
        [E - 0.1 * D, C - 0.1 * he],
        [m + 0.1 * D, W + 0.1 * he]
      ];
    }
    d.track_url && (Ae.trackLayer = new L.GPX(d.track_url, {
      async: !0,
      marker_options: {
        startIconUrl: null,
        endIconUrl: null,
        shadowUrl: null
      }
    }).on("error", function(D) {
      n.error(lycche.locale.ERROR_GPX + D.err);
    }).on("loaded", function(D) {
      h.length === 0 && (Ae.bounds = D.target.getBounds(), s());
    }), Ae.trackLayer.addTo(Ae.map)), s();
  }, l = function(d, h = !0) {
    const E = function(C) {
      u(C), Ae.title(d, C.title);
    };
    if (d !== "" && d !== null) {
      const C = {
        albumID: d,
        includeSubAlbums: h
      };
      K.post("Album::getPositionData", C, E);
    } else
      K.post("Albums::getPositionData", {}, E);
  };
  n.map_include_subalbums === !1 && v.json !== null && v.json.photos !== null ? u(v.json) : l(e, n.map_include_subalbums), s();
};
Ae.close = function() {
  if (!n.map_display)
    return;
  const e = p("#lychee_map_container");
  n.animate(e, "fadeOut"), e.removeClass("active"), F.setMode(Ae.albumID ? "album" : "albums"), V.makeFocusable(n.content);
};
Ae.goto = function(e) {
  if (!n.map_display)
    return;
  const i = e.attr("data-id");
  let s = e.attr("data-album-id");
  s === "null" && (s = "unsorted"), n.goto(s + "/" + i);
};
const Qt = "search", qe = {
  /** @type {?SearchResult} */
  json: null
};
qe.find = function(e) {
  if (e.trim() === "")
    return;
  const i = function(u) {
    if (qe.json && qe.json.checksum === u.checksum) {
      v.json.id = Qt + "/" + e;
      return;
    }
    qe.json = u, v.json = {
      id: Qt + "/" + e,
      title: n.locale.SEARCH_RESULTS,
      photos: qe.json.photos,
      albums: qe.json.albums,
      tag_albums: qe.json.tag_albums,
      thumb: null,
      rights: { can_download: !1 },
      policy: { is_public: !1 }
    };
    let l = "", d = "";
    qe.json.tag_albums.forEach(function(m) {
      q.parse(m), l += x.album(m);
    }), qe.json.albums.forEach(function(m) {
      q.parse(m), l += x.album(m);
    }), qe.json.photos.forEach(function(m) {
      d += x.photo(m);
    });
    let h = n.locale.ALBUMS, E = n.locale.PHOTOS;
    l !== "" && (h += " (" + (qe.json.tag_albums.length + qe.json.albums.length) + ")"), d !== "" && (E += " (" + qe.json.photos.length + ")", n.layout === 1 ? d = '<div class="justified-layout">' + d + "</div>" : n.layout === 2 && (d = '<div class="unjustified-layout">' + d + "</div>"));
    const C = l === "" && d === "" ? "" : l === "" ? x.divider(E) + d : d === "" ? x.divider(h) + l : x.divider(h) + l + x.divider(E) + d;
    p(".no_content").remove(), n.animate(n.content, "contentZoomOut"), setTimeout(() => {
      P.photo() && M.photo.hide(), P.sidebar() && Q.toggle(!1), P.mapview() && Ae.close(), F.setMode("albums"), C === "" ? (n.content.html(""), n.content.append(x.no_content("magnifying-glass"))) : (n.content.html(C), setTimeout(function() {
        M.album.content.justify(), n.animate(n.content, "contentZoomIn"), p("#lychee_view_container").scrollTop(0);
      }, 0)), n.setMetaData(n.locale.SEARCH_RESULTS);
    }, 300);
  }, s = function() {
    F.dom(".header__search").val().length !== 0 ? K.post("Search::run", { term: e }, i) : qe.reset();
  };
  clearTimeout(p(window).data("timeout")), p(window).data("timeout", setTimeout(s, 250));
};
qe.reset = function() {
  F.dom(".header__search").val(""), p(".no_content").remove(), qe.json !== null && (v.json = null, S.json = null, qe.json = null, n.animate(p(".divider"), "fadeOut"), n.goto());
};
const Ao = {};
Ao.getDialog = function(e, i) {
  const s = (h) => {
    const E = {
      albumID: e,
      password: h.password
    };
    K.post(
      "Album::unlock",
      E,
      function() {
        j.close(!1, i);
      },
      null,
      function(C, m, W) {
        return (C.status === 401 || C.status === 403) && W.message.includes("Password is invalid") ? (j.focusError("password"), !0) : (j.close(), !1);
      }
    );
  }, u = function() {
    j.close(!1, function() {
      !P.albums() && !P.album() && n.goto();
    });
  }, l = `
		  <p></p>
		  <form>
		  	<div class="input-group stacked"><input name='password' class='text' type='password'></div>
		  </form>`, d = function(h, E) {
    E.querySelector("p").textContent = n.locale.ALBUM_PASSWORD_REQUIRED, h.password.placeholder = n.locale.PASSWORD;
  };
  j.show({
    body: l,
    readyCB: d,
    buttons: {
      action: {
        title: n.locale.ENTER,
        fn: s
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: u
      }
    }
  });
};
const N = {
  /** @type {(?Album|?TagAlbum|?SearchAlbum)} */
  json: null
};
N.isSmartID = function(e) {
  return e === Me.UNSORTED || e === Me.STARRED || e === Me.PUBLIC || e === Me.RECENT || e === Me.ON_THIS_DAY;
};
N.isSearchID = function(e) {
  return e !== null && (e === Qt || e.startsWith(Qt + "/"));
};
N.isModelID = function(e) {
  return typeof e == "string" && /^[-_0-9a-zA-Z]{24}$/.test(e);
};
N.getParentID = function() {
  return N.json === null || N.isSmartID(N.json.id) || N.isSearchID(N.json.id) || !N.json.parent_id ? null : N.json.parent_id;
};
N.getID = function() {
  let e = null;
  const i = (s) => N.isSmartID(s) || N.isSearchID(s) || N.isModelID(s);
  if (S.json ? e = S.json.album_id : N.json ? e = N.json.id : Ae.albumID && (e = Ae.albumID), i(e) === !1) {
    const s = p(".album:hover, .album.active");
    s.length === 1 && (e = s.attr("data-id") || null);
  }
  if (i(e) === !1) {
    const s = p(".photo:hover, .photo.active");
    s.length === 1 && (e = s.attr("data-album-id") || null);
  }
  return i(e) === !0 ? e : null;
};
N.isTagAlbum = function() {
  return N.json && N.json.is_tag_album && N.json.is_tag_album === !0;
};
N.getByID = function(e) {
  if (e == null || !N.json || !N.json.photos)
    return Z.show("error", "Error: Album json not found !"), null;
  let i = 0;
  for (; i < N.json.photos.length; ) {
    if (N.json.photos[i].id === e)
      return N.json.photos[i];
    i++;
  }
  return Z.show("error", "Error: photo " + e + " not found !"), null;
};
N.getSubByID = function(e) {
  if (e == null || !N.json || !N.json.albums && !N.json.tag_albums)
    return Z.show("error", n.locale.ERROR_ALBUM_JSON_NOT_FOUND), null;
  const i = N.json.albums ? N.json.albums.find((u) => u.id === e) : null;
  if (i)
    return i;
  const s = N.json.tag_albums ? N.json.tag_albums.find((u) => u.id === e) : null;
  return s || (Z.show("error", Qe.sprintf(n.locale.ERROR_ALBUM_NOT_FOUND, e)), null);
};
N.deleteByID = function(e) {
  if (e == null || !N.json || !N.json.photos) {
    Z.show("error", n.locale.ERROR_ALBUM_JSON_NOT_FOUND);
    return;
  }
  p.each(N.json.photos, function(i) {
    if (N.json.photos[i].id === e)
      return N.json.photos.splice(i, 1), !1;
  });
};
N.deleteSubByID = function(e) {
  if (e == null || !N.json || !N.json.albums)
    return Z.show("error", n.locale.ERROR_ALBUM_JSON_NOT_FOUND), !1;
  let i = !1;
  return p.each(N.json.albums, function(s) {
    if (N.json.albums[s].id === e)
      return N.json.albums.splice(s, 1), i = !0, !1;
  }), i;
};
N.load = function(e, i = null, s = null) {
  const u = function(h) {
    N.json = h, s !== null && (N.json.original_parent_id = N.json.parent_id, N.json.parent_id = s), i === null && n.animate(n.content, "contentZoomOut");
    let E = 300;
    i && (E = 0), !P.albums() && !P.photo() && !P.album() && (E = 0), setTimeout(() => {
      if (M.album.init(), i === null && (n.animate(n.content, "contentZoomIn"), F.setMode("album")), V.makeFocusable(n.content), n.active_focus_on_page_load) {
        let C = p(".album:first");
        if (C.length !== 0)
          C.focus();
        else {
          const m = p(".photo:first");
          m.length !== 0 && m.focus();
        }
      }
    }, E);
  }, l = function(h) {
    if (u(h), V.makeFocusable(n.content), n.active_focus_on_page_load) {
      const E = p(".album:first");
      if (E.length !== 0)
        E.focus();
      else {
        const C = p(".photo:first");
        C.length !== 0 && C.focus();
      }
    }
    i && i(!0);
  }, d = function(h, E, C) {
    return h.status !== 401 && h.status !== 403 ? !1 : C.exception.endsWith("PasswordRequiredException") ? (Ao.getDialog(e, function() {
      q.refresh(), N.load(e, i);
    }), !0) : C.exception.endsWith("UnauthenticatedException") && !i ? (n.loginDialog(), !0) : i ? (N.json = null, i(!1), !0) : !1;
  };
  K.post("Album::get", { albumID: e }, l, null, d);
};
N.add = function(e = null, i = null) {
  const s = function(d) {
    if (!d.title.trim()) {
      j.focusError("title");
      return;
    }
    j.close();
    const h = {
      title: d.title,
      parent_id: null
    };
    P.albums() || N.isSmartID(N.json.id) || N.isSearchID(N.json.id) ? h.parent_id = null : P.album() ? h.parent_id = N.json.id : P.photo() && (h.parent_id = S.json.album_id), K.post(
      "Album::add",
      h,
      /** @param {Album} _data */
      function(E) {
        e != null && i != null ? i(e, E.id, !1) : (q.refresh(), n.goto(E.id));
      }
    );
  }, u = function(d, h) {
    h.querySelector("p").textContent = n.locale.TITLE_NEW_ALBUM, d.title.placeholder = "Title", d.title.value = n.locale.UNTITLED;
  }, l = `
		<p></p>
		<form>
			<div class="input-group stacked"><input class='text' name='title' type='text' maxlength='100'/></div>
		</form>
	`;
  j.show({
    body: l,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.CREATE_ALBUM,
        fn: s
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
N.addByTags = function() {
  const e = function(u) {
    if (!u.title.trim()) {
      j.focusError("title");
      return;
    }
    if (!u.tags.trim()) {
      j.focusError("tags");
      return;
    }
    j.close(), K.post(
      "Album::addByTags",
      {
        title: u.title,
        tags: u.tags.split(",")
      },
      /** @param {TagAlbum} _data */
      function(l) {
        q.refresh(), n.goto(l.id);
      }
    );
  }, i = `
		<p></p>
		<form>
			<div class="input-group stacked"><input class='text' name='title' type='text' maxlength='100'></div>
			<div class="input-group stacked"><input class='text' name='tags' type='text' minlength='1'></div>
		</form>`, s = function(u, l) {
    l.querySelector("p").textContent = n.locale.TITLE_NEW_ALBUM, u.title.placeholder = "Title", u.title.value = n.locale.UNTITLED, u.tags.placeholder = "Tags";
  };
  j.show({
    body: i,
    readyCB: s,
    buttons: {
      action: {
        title: n.locale.CREATE_TAG_ALBUM,
        fn: e
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
N.setShowTags = function(e) {
  const i = function(l) {
    if (!l.show_tags.trim()) {
      j.focusError("show_tags");
      return;
    }
    const d = l.show_tags.split(",").map((h) => h.trim()).filter((h) => h !== "" && h.indexOf(",") === -1).sort();
    j.close(), P.album() && (N.json.show_tags = d, M.album.show_tags()), K.post(
      "Album::setShowTags",
      {
        albumID: e,
        show_tags: d
      },
      () => N.reload()
    );
  }, s = `
		<p></p>
		<form>
			<div class="input-group stacked"><input class='text' name='show_tags' type='text' minlength='1'></div>
		</form>`, u = function(l, d) {
    d.querySelector("p").textContent = n.locale.ALBUM_NEW_SHOWTAGS, l.show_tags.placeholder = "Tags", l.show_tags.value = N.json.show_tags.sort().join(", ");
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.ALBUM_SET_SHOWTAGS,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
N.setTitle = function(e) {
  let i = "";
  if (e.length === 1 && (N.json && (N.getID() === e[0] ? i = N.json.title : i = N.getSubByID(e[0]).title), !i)) {
    const d = q.getByID(e[0]);
    d && (i = d.title);
  }
  const s = function(d) {
    if (!d.title.trim()) {
      j.focusError("title");
      return;
    }
    j.close();
    const h = d.title;
    if (P.album())
      if (e.length === 1 && N.getID() === e[0]) {
        N.json.title = h, M.album.title();
        const E = q.getByID(e[0]);
        E && (E.title = h);
      } else
        e.forEach(function(E) {
          N.getSubByID(E).title = h, M.album.content.titleSub(E);
          let C = q.getByID(E);
          C && (C.title = h);
        });
    else
      P.albums() && e.forEach(function(E) {
        const C = q.getByID(E);
        C && (C.title = h), M.albums.content.title(E);
      });
    K.post("Album::setTitle", {
      albumIDs: e,
      title: h
    });
  }, u = `
		<p></p>
		<form>
			<div class="input-group stacked"><input class='text' name='title' type='text' maxlength='100'></div>
		</form>`, l = function(d, h) {
    h.querySelector("p").textContent = e.length === 1 ? n.locale.ALBUM_NEW_TITLE : Qe.sprintf(n.locale.ALBUMS_NEW_TITLE, e.length), d.title.placeholder = n.locale.ALBUM_TITLE, d.title.value = i;
  };
  j.show({
    body: u,
    readyCB: l,
    buttons: {
      action: {
        title: n.locale.ALBUM_SET_TITLE,
        fn: s
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
N.setDescription = function(e) {
  const i = function(l) {
    const d = l.description ? l.description : null;
    j.close(), P.album() && (N.json.description = d, M.album.description()), K.post("Album::setDescription", {
      albumID: e,
      description: d
    });
  }, s = `
		<p></p>
		<form>
			<div class="input-group stacked"><input class='text' name='description' type='text' maxlength='800'></div>
		</form>`, u = function(l, d) {
    d.querySelector("p").textContent = n.locale.ALBUM_NEW_DESCRIPTION, l.description.placeholder = n.locale.ALBUM_DESCRIPTION, l.description.value = N.json.description ? N.json.description : "";
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.ALBUM_SET_DESCRIPTION,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
N.toggleCover = function(e) {
  N.json.cover_id = N.json.cover_id === e ? null : e;
  const i = {
    albumID: N.json.id,
    photoID: N.json.cover_id
  };
  K.post("Album::setCover", i, function() {
    M.album.content.cover(e), N.getParentID() || q.refresh();
  });
};
N.setLicense = function(e) {
  const i = function(l) {
    j.close(), K.post(
      "Album::setLicense",
      {
        albumID: e,
        license: l.license
      },
      function() {
        P.album() && (N.json.license = l.license, M.album.license());
      }
    );
  }, s = `
		<form>
			<div class="input-group compact">
				<label for="license_dialog_license_select"></label>
				<div class="select"><select name="license" id="license_dialog_license_select">
					<option value="none"></option>
					<option value="reserved"></option>
					<option value="CC0">CC0 - Public Domain</option>
					<option value="CC-BY-1.0">CC Attribution 1.0</option>
					<option value="CC-BY-2.0">CC Attribution 2.0</option>
					<option value="CC-BY-2.5">CC Attribution 2.5</option>
					<option value="CC-BY-3.0">CC Attribution 3.0</option>
					<option value="CC-BY-4.0">CC Attribution 4.0</option>
					<option value="CC-BY-ND-1.0">CC Attribution-NoDerivatives 1.0</option>
					<option value="CC-BY-ND-2.0">CC Attribution-NoDerivatives 2.0</option>
					<option value="CC-BY-ND-2.5">CC Attribution-NoDerivatives 2.5</option>
					<option value="CC-BY-ND-3.0">CC Attribution-NoDerivatives 3.0</option>
					<option value="CC-BY-ND-4.0">CC Attribution-NoDerivatives 4.0</option>
					<option value="CC-BY-SA-1.0">CC Attribution-ShareAlike 1.0</option>
					<option value="CC-BY-SA-2.0">CC Attribution-ShareAlike 2.0</option>
					<option value="CC-BY-SA-2.5">CC Attribution-ShareAlike 2.5</option>
					<option value="CC-BY-SA-3.0">CC Attribution-ShareAlike 3.0</option>
					<option value="CC-BY-SA-4.0">CC Attribution-ShareAlike 4.0</option>
					<option value="CC-BY-NC-1.0">CC Attribution-NonCommercial 1.0</option>
					<option value="CC-BY-NC-2.0">CC Attribution-NonCommercial 2.0</option>
					<option value="CC-BY-NC-2.5">CC Attribution-NonCommercial 2.5</option>
					<option value="CC-BY-NC-3.0">CC Attribution-NonCommercial 3.0</option>
					<option value="CC-BY-NC-4.0">CC Attribution-NonCommercial 4.0</option>
					<option value="CC-BY-NC-ND-1.0">CC Attribution-NonCommercial-NoDerivatives 1.0</option>
					<option value="CC-BY-NC-ND-2.0">CC Attribution-NonCommercial-NoDerivatives 2.0</option>
					<option value="CC-BY-NC-ND-2.5">CC Attribution-NonCommercial-NoDerivatives 2.5</option>
					<option value="CC-BY-NC-ND-3.0">CC Attribution-NonCommercial-NoDerivatives 3.0</option>
					<option value="CC-BY-NC-ND-4.0">CC Attribution-NonCommercial-NoDerivatives 4.0</option>
					<option value="CC-BY-NC-SA-1.0">CC Attribution-NonCommercial-ShareAlike 1.0</option>
					<option value="CC-BY-NC-SA-2.0">CC Attribution-NonCommercial-ShareAlike 2.0</option>
					<option value="CC-BY-NC-SA-2.5">CC Attribution-NonCommercial-ShareAlike 2.5</option>
					<option value="CC-BY-NC-SA-3.0">CC Attribution-NonCommercial-ShareAlike 3.0</option>
					<option value="CC-BY-NC-SA-4.0">CC Attribution-NonCommercial-ShareAlike 4.0</option>
				</select></div>
				<p><a href="https://creativecommons.org/choose/" target="_blank"></a></p>
			</div>
		</form>`, u = function(l, d) {
    l.license.labels[0].textContent = n.locale.ALBUM_LICENSE, l.license.item(0).textContent = n.locale.ALBUM_LICENSE_NONE, l.license.item(1).textContent = n.locale.ALBUM_RESERVED, l.license.value = N.json.license === "" ? "none" : N.json.license, d.querySelector("p a").textContent = n.locale.ALBUM_LICENSE_HELP;
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.ALBUM_SET_LICENSE,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
N.setSorting = function(e) {
  const i = function(l) {
    j.close(), K.post(
      "Album::setSorting",
      {
        albumID: e,
        sorting_column: l.sorting_col,
        sorting_order: l.sorting_order
      },
      function() {
        P.album() && N.reload();
      }
    );
  }, s = `
		<form>
			<div class="input-group compact">
				<label for="sorting_dialog_column_select"></label>
				<div class="select"><select name="sorting_col" id="sorting_dialog_column_select">
					<option value=''>&mdash;</option>
					<option value='created_at'/>
					<option value='taken_at'/>
					<option value='title'/>
					<option value='description'/>
					<option value='is_public'/>
					<option value='is_starred'/>
					<option value='type'/>
				</select></div>
			</div>
			<div class="input-group compact">
				<label for="sorting_dialog_order_select"></label>
				<div class="select"><select name="sorting_order" id="sorting_dialog_order_select">
					<option value=''>&mdash;</option>
					<option value='ASC'/>
					<option value='DESC'/>
				</select></div>
			</div>
		</form>`, u = function(l, d) {
    l.sorting_col.parentElement.previousElementSibling.textContent = n.locale.SORT_DIALOG_ATTRIBUTE_LABEL, l.sorting_col.item(1).textContent = n.locale.SORT_PHOTO_SELECT_1, l.sorting_col.item(2).textContent = n.locale.SORT_PHOTO_SELECT_2, l.sorting_col.item(3).textContent = n.locale.SORT_PHOTO_SELECT_3, l.sorting_col.item(4).textContent = n.locale.SORT_PHOTO_SELECT_4, l.sorting_col.item(5).textContent = n.locale.SORT_PHOTO_SELECT_5, l.sorting_col.item(6).textContent = n.locale.SORT_PHOTO_SELECT_6, l.sorting_col.item(7).textContent = n.locale.SORT_PHOTO_SELECT_7, l.sorting_order.parentElement.previousElementSibling.textContent = n.locale.SORT_DIALOG_ORDER_LABEL, l.sorting_order.item(1).textContent = n.locale.SORT_ASCENDING, l.sorting_order.item(2).textContent = n.locale.SORT_DESCENDING, N.json.sorting ? (l.sorting_col.value = N.json.sorting.column, l.sorting_order.value = N.json.sorting.order) : (l.sorting_col.value = "", l.sorting_order.value = "");
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.ALBUM_SET_ORDER,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
N.setProtectionPolicy = function(e) {
  const i = function(l) {
    j.close(), q.refresh(), N.json.policy.is_nsfw = l.is_nsfw, N.json.policy.is_public = l.is_public, N.json.policy.grants_full_photo_access = l.grants_full_photo_access, N.json.policy.is_link_required = l.is_link_required, N.json.policy.grants_download = l.grants_download, N.json.policy.is_password_required = l.is_password_required, P.album() && (M.album.nsfw(), M.album.public(), M.album.requiresLink(), M.album.downloadable(), M.album.password());
    const d = {
      albumID: e,
      grants_full_photo_access: N.json.policy.grants_full_photo_access,
      is_public: N.json.policy.is_public,
      is_nsfw: N.json.policy.is_nsfw,
      is_link_required: N.json.policy.is_link_required,
      grants_download: N.json.policy.grants_download
    };
    N.json.policy.is_password_required ? l.password && (d.password = l.password) : d.password = null, K.post("Album::setProtectionPolicy", d);
  }, s = `
		<form>
			<div class='input-group compact-no-indent'>
				<label for="pp_dialog_public_check"></label>
				<input type='checkbox' class="slider" id='pp_dialog_public_check' name='is_public' />
				<p></p>
			</div>
			<div class='input-group compact-inverse'>
				<label for="pp_dialog_full_photo_check"></label>
				<input type='checkbox' id='pp_dialog_full_photo_check' name='grants_full_photo_access' />
				<p></p>
			</div>
			<div class='input-group compact-inverse'>
				<label for="pp_dialog_link_check"></label>
				<input type='checkbox' id='pp_dialog_link_check' name='is_link_required' />
				<p></p>
			</div>
			<div class='input-group compact-inverse'>
				<label for="pp_dialog_downloadable_check"></label>
				<input type='checkbox' id='pp_dialog_downloadable_check' name='grants_download' />
				<p></p>
			</div>
			<div class='input-group compact-inverse'>
				<label for="pp_dialog_password_check"></label>
				<input type='checkbox' id='pp_dialog_password_check' name='is_password_required'>
				<p></p>
				<div class="input-group stacked">
					<input class='text' id='pp_dialog_password_input' name='password' type='text'>
				</div>
			</div>
		</form>
		<hr/>
		<form>
			<div class='input-group compact-no-indent'>
				<label for='pp_dialog_nsfw_check'></label>
				<input type='checkbox' class="slider" id='pp_dialog_nsfw_check' name='is_nsfw'>
				<p></p>
			</div>
		</form>`, u = function(l, d) {
    l.is_public.previousElementSibling.textContent = n.locale.ALBUM_PUBLIC, l.is_public.nextElementSibling.textContent = n.locale.ALBUM_PUBLIC_EXPL, l.grants_full_photo_access.previousElementSibling.textContent = n.locale.ALBUM_FULL, l.grants_full_photo_access.nextElementSibling.textContent = n.locale.ALBUM_FULL_EXPL, l.is_link_required.previousElementSibling.textContent = n.locale.ALBUM_HIDDEN, l.is_link_required.nextElementSibling.textContent = n.locale.ALBUM_HIDDEN_EXPL, l.grants_download.previousElementSibling.textContent = n.locale.ALBUM_DOWNLOADABLE, l.grants_download.nextElementSibling.textContent = n.locale.ALBUM_DOWNLOADABLE_EXPL, l.is_password_required.previousElementSibling.textContent = n.locale.ALBUM_PASSWORD_PROT, l.is_password_required.nextElementSibling.textContent = n.locale.ALBUM_PASSWORD_PROT_EXPL, l.password.placeholder = n.locale.PASSWORD, l.is_nsfw.previousElementSibling.textContent = n.locale.ALBUM_NSFW, l.is_nsfw.nextElementSibling.textContent = n.locale.ALBUM_NSFW_EXPL, l.is_public.checked = N.json.is_public, l.is_nsfw.checked = N.json.is_nsfw;
    const h = [
      l.grants_full_photo_access,
      l.is_link_required,
      l.grants_download,
      l.is_password_required
    ];
    l.is_public.checked = N.json.policy.is_public, N.json.policy.is_public ? (h.forEach(function(E) {
      E.parentElement.classList.remove("disabled"), E.disabled = !1;
    }), l.grants_full_photo_access.checked = N.json.policy.grants_full_photo_access, l.is_link_required.checked = N.json.policy.is_link_required, l.grants_download.checked = N.json.policy.grants_download, l.is_password_required.checked = N.json.policy.is_password_required, N.json.policy.is_password_required ? l.password.parentElement.classList.remove("hidden") : l.password.parentElement.classList.add("hidden")) : (h.forEach(function(E) {
      E.parentElement.classList.add("disabled"), E.disabled = !0;
    }), l.grants_full_photo_access.checked = n.grants_full_photo_access, l.is_link_required.checked = !1, l.grants_download.checked = n.grants_download, l.is_password_required.checked = !1, l.password.parentElement.classList.add("hidden")), l.is_public.addEventListener("change", function() {
      h.forEach(function(E) {
        E.parentElement.classList.toggle("disabled"), E.disabled = !l.is_public.checked;
      });
    }), l.is_password_required.addEventListener("change", function() {
      l.is_password_required.checked ? (l.password.parentElement.classList.remove("hidden"), l.password.focus()) : l.password.parentElement.classList.add("hidden");
    });
  };
  j.show({
    body: s,
    readyCB: u,
    buttons: {
      action: {
        title: n.locale.SAVE,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
N.shareUsers = function(e) {
  const i = function(u) {
    j.close();
    const l = Object.entries(u).filter(([d, h]) => h).map(([d, h]) => parseInt(d, 10));
    K.post("Sharing::setByAlbum", {
      albumID: e,
      userIDs: l
    });
  }, s = function(u, l) {
    const d = l.querySelector("p");
    d.textContent = n.locale.WAIT_FETCH_DATA;
    const h = function(E) {
      if (E.users.length === 0) {
        d.textContent = n.locale.SHARING_ALBUM_USERS_NO_USERS;
        return;
      }
      d.textContent = n.locale.SHARING_ALBUM_USERS_LONG_MESSAGE;
      const C = document.createElement("form"), m = new Set(E.shared.map((W) => W.user_id));
      E.users.forEach((W) => {
        const D = C.appendChild(document.createElement("div"));
        D.classList.add("input-group", "compact-inverse");
        const he = D.appendChild(document.createElement("label"));
        he.htmlFor = "share_dialog_user_" + W.id, he.textContent = W.username;
        const we = D.appendChild(document.createElement("input"));
        we.type = "checkbox", we.id = he.htmlFor, we.name = W.id.toString(), we.checked = m.has(W.id);
      }), l.appendChild(C), j.cacheFormElements();
    };
    K.post("Sharing::list", { albumID: e }, h);
  };
  j.show({
    body: "<p></p>",
    readyCB: s,
    buttons: {
      action: {
        title: n.locale.SAVE,
        fn: i
      },
      cancel: {
        title: n.locale.CANCEL,
        fn: j.close
      }
    }
  });
};
N.toggleNSFW = function() {
  N.json.policy.is_nsfw = !N.json.policy.is_nsfw, M.album.nsfw(), K.post(
    "Album::setNSFW",
    {
      albumID: N.json.id,
      is_nsfw: N.json.policy.is_nsfw
    },
    () => q.refresh()
  );
};
N.share = function(e) {
  if (!n.share_button_visible)
    return;
  const i = location.href;
  switch (e) {
    case "twitter":
      window.open(`https://twitter.com/share?url=${encodeURI(i)}`);
      break;
    case "facebook":
      window.open(`https://www.facebook.com/sharer.php?u=${encodeURI(i)}&t=${encodeURI(N.json.title)}`);
      break;
    case "mail":
      location.href = `mailto:?subject=${encodeURI(N.json.title)}&body=${encodeURI(i)}`;
      break;
  }
};
N.qrCode = function() {
  if (!n.share_button_visible)
    return;
  const e = function() {
    let i = 0;
    return new ResizeObserver(function(s, u) {
      const l = s[0].target;
      i !== l.clientWidth && (i = l.clientWidth, QrCreator.render(
        {
          text: location.href,
          radius: 0,
          ecLevel: "H",
          fill: "#000000",
          background: "#FFFFFF",
          size: i
        },
        l
      ));
    });
  }();
  j.show({
    body: "<canvas></canvas>",
    classList: ["qr-code"],
    readyCB: function(i, s) {
      const u = s.querySelector("canvas");
      e.observe(u);
    },
    buttons: {
      cancel: {
        title: n.locale.CLOSE,
        fn: j.close
      }
    }
  });
};
N.getArchive = function(e) {
  location.href = "api/Album::getArchive?albumIDs=" + e.join();
};
N.buildMessage = function(e, i, s, u) {
  let l = n.locale.UNTITLED, d = n.locale.UNTITLED, h = "";
  if (i === null)
    l = n.locale.ROOT;
  else {
    const E = q.getByID(i) || N.getSubByID(i);
    E && (l = E.title);
  }
  if (e.length === 1) {
    const E = q.getByID(e[0]) || N.getSubByID(e[0]);
    E && (d = E.title), h = Qe.sprintf(n.locale[s], d, l);
  } else
    h = Qe.sprintf(n.locale[u], l);
  return h;
};
N.delete = function(e) {
  const i = e.length === 1 && q.isTagAlbum(e[0]), s = function() {
    P.albums() ? e.forEach(function(E) {
      M.albums.content.delete(E), q.deleteByID(E);
    }) : P.album() && (q.refresh(), e.length === 1 && N.getID() === e[0] ? n.goto(N.getParentID()) : e.forEach(function(E) {
      N.deleteSubByID(E), M.album.content.deleteSub(E);
    }));
  }, u = function() {
    j.close(), K.post("Album::delete", { albumIDs: e }, s);
  }, l = function(E, C) {
    const m = C.querySelector("p");
    if (e.length === 1 && e[0] === Me.UNSORTED)
      m.textContent = n.locale.DELETE_UNSORTED_CONFIRM;
    else if (e.length === 1) {
      let W = "";
      if (N.json && (N.getID() === e[0] ? W = N.json.title : W = N.getSubByID(e[0]).title), !W) {
        let D = q.getByID(e[0]);
        D && (W = D.title);
      }
      W || (W = n.locale.UNTITLED), m.textContent = i ? Qe.sprintf(n.locale.DELETE_TAG_ALBUM_CONFIRMATION, W) : Qe.sprintf(n.locale.DELETE_ALBUM_CONFIRMATION, W);
    } else
      m.textContent = Qe.sprintf(n.locale.DELETE_ALBUMS_CONFIRMATION, e.length);
  }, d = e.length === 1 ? e[0] === Me.UNSORTED ? n.locale.CLEAR_UNSORTED : i ? n.locale.DELETE_TAG_ALBUM_QUESTION : n.locale.DELETE_ALBUM_QUESTION : n.locale.DELETE_ALBUMS_QUESTION, h = e.length === 1 ? e[0] === Me.UNSORTED ? n.locale.KEEP_UNSORTED : n.locale.KEEP_ALBUM : n.locale.KEEP_ALBUMS;
  j.show({
    body: "<p></p>",
    readyCB: l,
    buttons: {
      action: {
        title: d,
        fn: u,
        classList: ["red"]
      },
      cancel: {
        title: h,
        fn: j.close
      }
    }
  });
};
N.merge = function(e, i, s = !0) {
  const u = function() {
    j.close(), K.post(
      "Album::merge",
      {
        albumID: i,
        albumIDs: e
      },
      () => N.reload()
    );
  };
  s ? j.show({
    body: "<p></p>",
    readyCB: (l, d) => d.querySelector("p").textContent = N.buildMessage(e, i, "ALBUM_MERGE", "ALBUMS_MERGE"),
    buttons: {
      action: {
        title: n.locale.MERGE_ALBUM,
        fn: u,
        classList: ["red"]
      },
      cancel: {
        title: n.locale.DONT_MERGE,
        fn: j.close
      }
    }
  }) : u();
};
N.setAlbum = function(e, i, s = !0) {
  const u = function() {
    j.close(), K.post(
      "Album::move",
      {
        albumID: i,
        albumIDs: e
      },
      () => N.reload()
    );
  };
  s ? j.show({
    body: "<p></p>",
    readyCB: (l, d) => d.querySelector("p").textContent = N.buildMessage(e, i, "ALBUM_MOVE", "ALBUMS_MOVE"),
    buttons: {
      action: {
        title: n.locale.MOVE_ALBUMS,
        fn: u,
        classList: ["red"]
      },
      cancel: {
        title: n.locale.NOT_MOVE_ALBUMS,
        fn: j.close
      }
    }
  }) : u();
};
N.apply_nsfw_filter = function() {
  n.nsfw_visible ? p('.album[data-nsfw="1"]').show() : p('.album[data-nsfw="1"]').hide();
};
N.isUploadable = function() {
  return !!(N.json !== null && N.json.rights.can_upload || N.json === null && n.rights.root_album.can_upload);
};
N.updatePhoto = function(e) {
  let i = function(s) {
    return s == null ? null : {
      type: s.type,
      url: s.url,
      width: s.width,
      height: s.height,
      filesize: s.filesize
    };
  };
  if (N.json && N.json.photos) {
    const s = N.json.photos.find((u) => u.id === e.id);
    s.size_variants = {
      thumb: i(e.size_variants.thumb),
      thumb2x: i(e.size_variants.thumb2x),
      small: i(e.size_variants.small),
      small2x: i(e.size_variants.small2x),
      medium: i(e.size_variants.medium),
      medium2x: i(e.size_variants.medium2x),
      original: i(e.size_variants.original)
    }, M.album.content.updatePhoto(s), q.refresh();
  }
};
N.reload = function() {
  const e = N.getID();
  N.refresh(), q.refresh(), P.album() ? n.goto(e) : n.goto();
};
N.refresh = function() {
  N.json = null;
};
N.deleteTrack = function() {
  N.json.track_url = null, K.post("Album::deleteTrack", {
    albumID: N.json.id
  });
};
const v = N;
var Li = {}, $s = {
  get exports() {
    return Li;
  },
  set exports(e) {
    Li = e;
  }
};
(function(e) {
  (function(i, s, u) {
    if (!i)
      return;
    for (var l = {
      8: "backspace",
      9: "tab",
      13: "enter",
      16: "shift",
      17: "ctrl",
      18: "alt",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "ins",
      46: "del",
      91: "meta",
      93: "meta",
      224: "meta"
    }, d = {
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    }, h = {
      "~": "`",
      "!": "1",
      "@": "2",
      "#": "3",
      $: "4",
      "%": "5",
      "^": "6",
      "&": "7",
      "*": "8",
      "(": "9",
      ")": "0",
      _: "-",
      "+": "=",
      ":": ";",
      '"': "'",
      "<": ",",
      ">": ".",
      "?": "/",
      "|": "\\"
    }, E = {
      option: "alt",
      command: "meta",
      return: "enter",
      escape: "esc",
      plus: "+",
      mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    }, C, m = 1; m < 20; ++m)
      l[111 + m] = "f" + m;
    for (m = 0; m <= 9; ++m)
      l[m + 96] = m.toString();
    function W(J, se, Ce) {
      if (J.addEventListener) {
        J.addEventListener(se, Ce, !1);
        return;
      }
      J.attachEvent("on" + se, Ce);
    }
    function D(J) {
      if (J.type == "keypress") {
        var se = String.fromCharCode(J.which);
        return J.shiftKey || (se = se.toLowerCase()), se;
      }
      return l[J.which] ? l[J.which] : d[J.which] ? d[J.which] : String.fromCharCode(J.which).toLowerCase();
    }
    function he(J, se) {
      return J.sort().join(",") === se.sort().join(",");
    }
    function we(J) {
      var se = [];
      return J.shiftKey && se.push("shift"), J.altKey && se.push("alt"), J.ctrlKey && se.push("ctrl"), J.metaKey && se.push("meta"), se;
    }
    function ue(J) {
      if (J.preventDefault) {
        J.preventDefault();
        return;
      }
      J.returnValue = !1;
    }
    function G(J) {
      if (J.stopPropagation) {
        J.stopPropagation();
        return;
      }
      J.cancelBubble = !0;
    }
    function Ee(J) {
      return J == "shift" || J == "ctrl" || J == "alt" || J == "meta";
    }
    function ne() {
      if (!C) {
        C = {};
        for (var J in l)
          J > 95 && J < 112 || l.hasOwnProperty(J) && (C[l[J]] = J);
      }
      return C;
    }
    function Ne(J, se, Ce) {
      return Ce || (Ce = ne()[J] ? "keydown" : "keypress"), Ce == "keypress" && se.length && (Ce = "keydown"), Ce;
    }
    function Be(J) {
      return J === "+" ? ["+"] : (J = J.replace(/\+{2}/g, "+plus"), J.split("+"));
    }
    function Re(J, se) {
      var Ce, He, ee, oe = [];
      for (Ce = Be(J), ee = 0; ee < Ce.length; ++ee)
        He = Ce[ee], E[He] && (He = E[He]), se && se != "keypress" && h[He] && (He = h[He], oe.push("shift")), Ee(He) && oe.push(He);
      return se = Ne(He, oe, se), {
        key: He,
        modifiers: oe,
        action: se
      };
    }
    function Rt(J, se) {
      return J === null || J === s ? !1 : J === se ? !0 : Rt(J.parentNode, se);
    }
    function c(J) {
      var se = this;
      if (J = J || s, !(se instanceof c))
        return new c(J);
      se.target = J, se._callbacks = {}, se._directMap = {};
      var Ce = {}, He, ee = !1, oe = !1, re = !1;
      function Ye(pe) {
        pe = pe || {};
        var Pe = !1, De;
        for (De in Ce) {
          if (pe[De]) {
            Pe = !0;
            continue;
          }
          Ce[De] = 0;
        }
        Pe || (re = !1);
      }
      function Ze(pe, Pe, De, Ie, We, Ct) {
        var ke, Ve, nt = [], Pt = De.type;
        if (!se._callbacks[pe])
          return [];
        for (Pt == "keyup" && Ee(pe) && (Pe = [pe]), ke = 0; ke < se._callbacks[pe].length; ++ke)
          if (Ve = se._callbacks[pe][ke], !(!Ie && Ve.seq && Ce[Ve.seq] != Ve.level) && Pt == Ve.action && (Pt == "keypress" && !De.metaKey && !De.ctrlKey || he(Pe, Ve.modifiers))) {
            var Yn = !Ie && Ve.combo == We, Xn = Ie && Ve.seq == Ie && Ve.level == Ct;
            (Yn || Xn) && se._callbacks[pe].splice(ke, 1), nt.push(Ve);
          }
        return nt;
      }
      function mt(pe, Pe, De, Ie) {
        se.stopCallback(Pe, Pe.target || Pe.srcElement, De, Ie) || pe(Pe, De) === !1 && (ue(Pe), G(Pe));
      }
      se._handleKey = function(pe, Pe, De) {
        var Ie = Ze(pe, Pe, De), We, Ct = {}, ke = 0, Ve = !1;
        for (We = 0; We < Ie.length; ++We)
          Ie[We].seq && (ke = Math.max(ke, Ie[We].level));
        for (We = 0; We < Ie.length; ++We) {
          if (Ie[We].seq) {
            if (Ie[We].level != ke)
              continue;
            Ve = !0, Ct[Ie[We].seq] = 1, mt(Ie[We].callback, De, Ie[We].combo, Ie[We].seq);
            continue;
          }
          Ve || mt(Ie[We].callback, De, Ie[We].combo);
        }
        var nt = De.type == "keypress" && oe;
        De.type == re && !Ee(pe) && !nt && Ye(Ct), oe = Ve && De.type == "keydown";
      };
      function Ot(pe) {
        typeof pe.which != "number" && (pe.which = pe.keyCode);
        var Pe = D(pe);
        if (Pe) {
          if (pe.type == "keyup" && ee === Pe) {
            ee = !1;
            return;
          }
          se.handleKey(Pe, we(pe), pe);
        }
      }
      function Mt() {
        clearTimeout(He), He = setTimeout(Ye, 1e3);
      }
      function vt(pe, Pe, De, Ie) {
        Ce[pe] = 0;
        function We(Pt) {
          return function() {
            re = Pt, ++Ce[pe], Mt();
          };
        }
        function Ct(Pt) {
          mt(De, Pt, pe), Ie !== "keyup" && (ee = D(Pt)), setTimeout(Ye, 10);
        }
        for (var ke = 0; ke < Pe.length; ++ke) {
          var Ve = ke + 1 === Pe.length, nt = Ve ? Ct : We(Ie || Re(Pe[ke + 1]).action);
          yt(Pe[ke], nt, Ie, pe, ke);
        }
      }
      function yt(pe, Pe, De, Ie, We) {
        se._directMap[pe + ":" + De] = Pe, pe = pe.replace(/\s+/g, " ");
        var Ct = pe.split(" "), ke;
        if (Ct.length > 1) {
          vt(pe, Ct, Pe, De);
          return;
        }
        ke = Re(pe, De), se._callbacks[ke.key] = se._callbacks[ke.key] || [], Ze(ke.key, ke.modifiers, { type: ke.action }, Ie, pe, We), se._callbacks[ke.key][Ie ? "unshift" : "push"]({
          callback: Pe,
          modifiers: ke.modifiers,
          action: ke.action,
          seq: Ie,
          level: We,
          combo: pe
        });
      }
      se._bindMultiple = function(pe, Pe, De) {
        for (var Ie = 0; Ie < pe.length; ++Ie)
          yt(pe[Ie], Pe, De);
      }, W(J, "keypress", Ot), W(J, "keydown", Ot), W(J, "keyup", Ot);
    }
    c.prototype.bind = function(J, se, Ce) {
      var He = this;
      return J = J instanceof Array ? J : [J], He._bindMultiple.call(He, J, se, Ce), He;
    }, c.prototype.unbind = function(J, se) {
      var Ce = this;
      return Ce.bind.call(Ce, J, function() {
      }, se);
    }, c.prototype.trigger = function(J, se) {
      var Ce = this;
      return Ce._directMap[J + ":" + se] && Ce._directMap[J + ":" + se]({}, J), Ce;
    }, c.prototype.reset = function() {
      var J = this;
      return J._callbacks = {}, J._directMap = {}, J;
    }, c.prototype.stopCallback = function(J, se) {
      var Ce = this;
      if ((" " + se.className + " ").indexOf(" mousetrap ") > -1 || Rt(se, Ce.target))
        return !1;
      if ("composedPath" in J && typeof J.composedPath == "function") {
        var He = J.composedPath()[0];
        He !== J.target && (se = He);
      }
      return se.tagName == "INPUT" || se.tagName == "SELECT" || se.tagName == "TEXTAREA" || se.isContentEditable;
    }, c.prototype.handleKey = function() {
      var J = this;
      return J._handleKey.apply(J, arguments);
    }, c.addKeycodes = function(J) {
      for (var se in J)
        J.hasOwnProperty(se) && (l[se] = J[se]);
      C = null;
    }, c.init = function() {
      var J = c(s);
      for (var se in J)
        se.charAt(0) !== "_" && (c[se] = function(Ce) {
          return function() {
            return J[Ce].apply(J, arguments);
          };
        }(se));
    }, c.init(), i.Mousetrap = c, e.exports && (e.exports = c), typeof u == "function" && u.amd && u(function() {
      return c;
    });
  })(typeof window < "u" ? window : null, typeof window < "u" ? document : null);
})($s);
const Nt = Li, y = {
  /**
   * The version of the backend in human-readable
   * @type {Version}
   */
  version: null,
  updateGit: "https://github.com/LycheeOrg/Lychee",
  updateURL: "https://github.com/LycheeOrg/Lychee/releases",
  website: "https://LycheeOrg.github.io",
  publicMode: !1,
  viewMode: !1,
  grants_full_photo_access: !0,
  grants_download: !1,
  public_photos_hidden: !0,
  share_button_visible: !1,
  /**
   * The authenticated user or `null` if unauthenticated
   * @type {?User}
   */
  user: null,
  /**
   * The rights granted by the backend
   * @type {?GlobalRightsDTO}
   */
  rights: null,
  /**
   * Values:
   *
   *  - `0`: Use default, "square" layout.
   *  - `1`: Use Flickr-like "justified" layout.
   *  - `2`: Use Google-like "unjustified" layout
   *
   * @type {number}
   */
  layout: 1,
  /**
   * Display search in public mode.
   * @type {boolean}
   */
  public_search: !1,
  /**
   * Overlay display type
   * @type {string}
   */
  image_overlay_type: "exif",
  /**
   * Image overlay type default type
   * @type {string}
   */
  image_overlay_type_default: "exif",
  /**
   * Display photo coordinates on map
   * @type {boolean}
   */
  map_display: !1,
  /**
   * Display photos of public album on map (user not logged in)
   * @type {boolean}
   */
  map_display_public: !1,
  /**
   * Use the GPS direction data on displayed maps
   * @type {boolean}
   */
  map_display_direction: !0,
  /**
   * Provider of OSM Tiles
   * @type {string}
   */
  map_provider: "Wikimedia",
  /**
   * Include photos of subalbums on map
   * @type {boolean}
   */
  map_include_subalbums: !1,
  /**
   * Retrieve location name from GPS data
   * @type {boolean}
   */
  location_decoding: !1,
  /**
   * Caching mode for GPS data decoding
   * @type {string}
   */
  location_decoding_caching_type: "Harddisk",
  /**
   * Show location name
   * @type {boolean}
   */
  location_show: !1,
  /**
   * Show location name for public albums
   * @type {boolean}
   */
  location_show_public: !1,
  /**
   * Tolerance for navigating when swiping images to the left and right on mobile
   * @type {number}
   */
  swipe_tolerance_x: 150,
  /**
   * Tolerance for navigating when swiping images up and down
   * @type {number}
   */
  swipe_tolerance_y: 250,
  /**
   * Is landing page enabled?
   * @type {boolean}
   */
  landing_page_enabled: !1,
  delete_imported: !1,
  import_via_symlink: !1,
  skip_duplicates: !1,
  nsfw_visible: !0,
  nsfw_visible_saved: !0,
  nsfw_blur: !1,
  nsfw_warning: !1,
  /** @type {string} */
  nsfw_banner_override: "",
  album_subtitle_type: "oldstyle",
  album_decoration: "layers",
  album_decoration_orientation: "row",
  upload_processing_limit: 4,
  /**
   * Allow users to change their username
   * @type {boolean}
   */
  allow_username_change: !0,
  /**
   * The URL to the Facebook page related to this site
   * @type {string}
   */
  sm_facebook_url: "",
  /**
   * The URL to the Flickr page related to this site
   * @type {string}
   */
  sm_flickr_url: "",
  /**
   * The URL to the Instagram page related to this site
   * @type {string}
   */
  sm_instagram_url: "",
  /**
   * The URL to the Twitter page related to this site
   * @type {string}
   */
  sm_twitter_url: "",
  /**
   * The URL to the YouTube channel related to this site
   * @type {string}
   */
  sm_youtube_url: "",
  /**
   * Indicates whether RSS feeds are enabled or not
   * @type {boolean}
   */
  rss_enable: !1,
  /**
   * An array of RSS feeds provided by the site
   * @type {Feed[]}
   */
  rss_feeds: [],
  /**
   * The site title.
   * @type {string}
   */
  site_title: "",
  /**
   * The name of the site owner.
   * @type {string}
   */
  site_owner: "",
  /**
   * Begin of copyright.
   * @type {string}
   */
  site_copyright_begin: "",
  /**
   * End of copyright.
   * @type {string}
   */
  site_copyright_end: "",
  /**
   * Determines if social media links are shown in footer.
   * @type {boolean}
   */
  footer_show_social_media: !1,
  /**
   * Determines if copyright notice is shown in footer.
   * @type {boolean}
   */
  footer_show_copyright: !1,
  /**
   * An optional line of text to be shown in the footer.
   * @type {string}
   */
  footer_additional_text: "",
  /**
   * Determines whether frame mode is enabled or not
   * @type {boolean}
   */
  mod_frame_enabled: !1,
  /**
   * Refresh rate in seconds for the frame mode.
   * @type {number}
   */
  mod_frame_refresh: 30,
  // this is device specific config, in this case default is Desktop.
  header_auto_hide: !0,
  active_focus_on_page_load: !1,
  enable_button_visibility: !0,
  enable_button_share: !0,
  enable_button_archive: !0,
  enable_button_move: !0,
  enable_button_trash: !0,
  enable_button_fullscreen: !0,
  enable_button_download: !0,
  enable_button_add: !0,
  enable_button_more: !0,
  enable_button_rotate: !0,
  enable_close_tab_on_esc: !1,
  enable_tabindex: !1,
  enable_contextmenu_header: !0,
  hide_content_during_imgview: !1,
  checkForUpdates: !0,
  update_json: !1,
  update_available: !1,
  new_photos_notification: !1,
  /** @type {?SortingCriterion} */
  sorting_photos: null,
  /** @type {?SortingCriterion} */
  sorting_albums: null,
  /**
   * The absolute path of the server-side installation directory of Lychee, e.g. `/var/www/lychee`
   * @type {string}
   */
  location: "",
  lang: "",
  /** @type {string[]} */
  lang_available: [],
  dropbox: !1,
  dropboxKey: "",
  content: p("#lychee_view_content"),
  imageview: p("#imageview"),
  footer: p("#lychee_footer"),
  /** @type {Locale} */
  locale: {},
  nsfw_unlocked_albums: []
};
y.diagnostics = function() {
  return "/Diagnostics";
};
y.logs = function() {
  return "/Logs";
};
y.aboutDialog = function() {
  const e = `
		<h1>Lychee <span class="version-number"></span></h1>
		<p class="update-status up-to-date-release"><a target='_blank' href='${y.updateURL}'></a></p>
		<p class="update-status up-to-date-git"><a target='_blank' href='${y.updateGit}'></a></p>
		<h2></h2>
		<p class="about-desc"></p>`, i = function(s, u) {
    u.querySelector("span.version-number").textContent = y.version.major + "." + y.version.minor + "." + y.version.patch, y.update_available ? (u.querySelector("p.up-to-date-release a").textContent = y.locale.UPDATE_AVAILABLE, u.querySelector("p.up-to-date-release").classList.remove("up-to-date-release")) : y.update_json && (u.querySelector("p.up-to-date-git a").textContent = y.locale.UPDATE_AVAILABLE, u.querySelector("p.up-to-date-git").classList.remove("up-to-date-git")), u.querySelector("h2").textContent = y.locale.ABOUT_SUBTITLE, u.querySelector("p.about-desc").innerHTML = Qe.sprintf(y.locale.ABOUT_DESCRIPTION, y.website);
  };
  j.show({
    body: e,
    readyCB: i,
    classList: ["about-dialog"],
    buttons: {
      cancel: {
        title: y.locale.CLOSE,
        fn: j.close
      }
    }
  });
};
y.init = function(e = !0) {
  K.post(
    "Session::init",
    {},
    /** @param {InitializationData} data */
    function(i) {
      y.parseInitializationData(i), i.user !== null || i.rights.settings.can_edit ? (_e.build(), _e.bind(), y.setMode("logged_in")) : y.setMode("public"), e && (p(window).on("popstate", function() {
        const s = history.state && history.state.hasOwnProperty("autoplay") ? history.state.autoplay : !0;
        y.load(s);
      }), y.load());
    }
  );
};
y.parseInitializationData = function(e) {
  y.user = e.user, y.rights = e.rights, y.update_json = e.update_json, y.update_available = e.update_available, y.version = e.config.version;
  for (let i in e.locale)
    y.locale[i] = e.locale[i];
  y.parsePublicInitializationData(e), (y.user !== null || y.rights.settings.can_edit) && y.parseProtectedInitializationData(e), y.initHtmlHeader(), y.localizeStaticGuiElements();
};
y.initHtmlHeader = function() {
  if (document.querySelector('meta[name="author"]').content = y.site_owner, document.querySelector('meta[name="publisher"]').content = y.site_owner, y.rss_enable) {
    const e = document.querySelector("head");
    y.rss_feeds.forEach(function(i) {
      const s = document.createElement("link");
      s.rel = "alternate", s.type = i.mimetype, s.href = i.url, s.title = i.title, e.appendChild(s);
    });
  }
};
y.localizeStaticGuiElements = function() {
  const e = document.querySelector("div#lychee_toolbar_public");
  e.querySelector("a#button_signin").title = y.locale.SIGN_IN;
  const i = e.querySelector("input.header__search");
  i instanceof HTMLInputElement && (i.placeholder = y.locale.SEARCH), e.querySelector("a.button--map-albums").title = y.locale.DISPLAY_FULL_MAP;
  const s = document.querySelector("div#lychee_toolbar_albums");
  s.querySelector("a#button_settings").title = y.locale.SETTINGS;
  const u = s.querySelector("input.header__search");
  u instanceof HTMLInputElement && (u.placeholder = y.locale.SEARCH), s.querySelector("a.button--map-albums").title = y.locale.DISPLAY_FULL_MAP, s.querySelector("a.button_add").title = y.locale.ADD;
  const l = document.querySelector("div#lychee_toolbar_album");
  l.querySelector("a#button_back_home").title = y.locale.CLOSE_ALBUM, l.querySelector("a#button_visibility_album").title = y.locale.VISIBILITY_ALBUM, l.querySelector("a#button_sharing_album_users").title = y.locale.SHARING_ALBUM_USERS, l.querySelector("a#button_nsfw_album").title = y.locale.ALBUM_MARK_NSFW, l.querySelector("a#button_share_album").title = y.locale.SHARE_ALBUM, l.querySelector("a#button_archive").title = y.locale.DOWNLOAD_ALBUM, l.querySelector("a#button_info_album").title = y.locale.ABOUT_ALBUM, l.querySelector("a#button_map_album").title = y.locale.DISPLAY_FULL_MAP, l.querySelector("a#button_move_album").title = y.locale.MOVE_ALBUM, l.querySelector("a#button_trash_album").title = y.locale.DELETE_ALBUM, l.querySelector("a#button_fs_album_enter").title = y.locale.FULLSCREEN_ENTER, l.querySelector("a#button_fs_album_exit").title = y.locale.FULLSCREEN_EXIT, l.querySelector("a.button_add").title = y.locale.ADD;
  const d = document.querySelector("div#lychee_toolbar_photo");
  d.querySelector("a#button_back").title = y.locale.CLOSE_PHOTO, d.querySelector("a#button_star").title = y.locale.STAR_PHOTO, d.querySelector("a#button_visibility").title = y.locale.VISIBILITY_PHOTO, d.querySelector("a#button_rotate_ccwise").title = y.locale.PHOTO_EDIT_ROTATECCWISE, d.querySelector("a#button_rotate_cwise").title = y.locale.PHOTO_EDIT_ROTATECWISE, d.querySelector("a#button_share").title = y.locale.SHARE_PHOTO, d.querySelector("a#button_info").title = y.locale.ABOUT_PHOTO, d.querySelector("a#button_map").title = y.locale.DISPLAY_FULL_MAP, d.querySelector("a#button_move").title = y.locale.MOVE, d.querySelector("a#button_trash").title = y.locale.DELETE, d.querySelector("a#button_fs_enter").title = y.locale.FULLSCREEN_ENTER, d.querySelector("a#button_fs_exit").title = y.locale.FULLSCREEN_EXIT, d.querySelector("a#button_more").title = y.locale.MORE;
  const h = document.querySelector("div#lychee_toolbar_map");
  h.querySelector("a#button_back_map").title = y.locale.CLOSE_MAP;
  const E = document.querySelector("div#lychee_toolbar_config");
  E.querySelector("a#button_close_config").title = y.locale.CLOSE, document.querySelector("#lychee_sidebar_header h1").textContent = y.locale.PHOTO_ABOUT;
  const C = document.querySelector("#sensitive_warning");
  C.innerHTML = y.nsfw_banner_override ? y.nsfw_banner_override : y.locale.NSFW_BANNER;
  const m = document.querySelector("#lychee_footer");
  m.querySelector("p.home_copyright").textContent = y.footer_show_copyright ? Qe.sprintf(
    y.locale.FOOTER_COPYRIGHT,
    y.site_owner,
    y.site_copyright_begin === y.site_copyright_end ? y.site_copyright_begin : y.site_copyright_begin + "–" + y.site_copyright_end
  ) : "", m.querySelector("p.personal_text").textContent = y.footer_additional_text, m.querySelector("p.hosted_by a").textContent = y.locale.HOSTED_WITH_LYCHEE;
  const W = m.querySelector("div#home_socials");
  y.footer_show_social_media ? (W.style.display = null, W.querySelector("a#facebook").href = y.sm_facebook_url, W.querySelector("a#flickr").href = y.sm_flickr_url, W.querySelector("a#instagram").href = y.sm_instagram_url, W.querySelector("a#twitter").href = y.sm_twitter_url, W.querySelector("a#youtube").href = y.sm_youtube_url) : W.style.display = "none";
};
y.parsePublicInitializationData = function(e) {
  y.allow_username_change = e.config.allow_username_change === "1", y.sorting_photos = e.config.sorting_photos, y.sorting_albums = e.config.sorting_albums, y.share_button_visible = e.config.share_button_visible === "1", y.album_subtitle_type = e.config.album_subtitle_type || "oldstyle", y.album_decoration = e.config.album_decoration || "layers", y.album_decoration_orientation = e.config.album_decoration_orientation || "row", y.checkForUpdates = e.config.check_for_updates, y.layout = Number.parseInt(e.config.layout, 10), Number.isNaN(y.layout) && (y.layout = 1), y.landing_page_enable = e.config.landing_page_enable === "1", y.public_search = e.config.public_search === "1", y.image_overlay_type = e.config.image_overlay_type || "exif", y.image_overlay_type_default = y.image_overlay_type, y.map_display = e.config.map_display === "1", y.map_display_public = e.config.map_display_public === "1", y.map_display_direction = e.config.map_display_direction === "1", y.map_provider = e.config.map_provider || "Wikimedia", y.map_include_subalbums = e.config.map_include_subalbums === "1", y.location_show = e.config.location_show === "1", y.location_show_public = e.config.location_show_public === "1", y.swipe_tolerance_x = Number.parseInt(e.config.swipe_tolerance_x, 10) || 150, y.swipe_tolerance_y = Number.parseInt(e.config.swipe_tolerance_y, 10) || 250, y.nsfw_visible = e.config.nsfw_visible === "1", y.nsfw_visible_saved = y.nsfw_visible, y.nsfw_blur = e.config.nsfw_blur === "1", y.nsfw_warning = e.config.nsfw_warning === "1", y.nsfw_banner_override = e.config.nsfw_banner_override || "", y.sm_facebook_url = e.config.sm_facebook_url, y.sm_flickr_url = e.config.sm_flickr_url, y.sm_instagram_url = e.config.sm_instagram_url, y.sm_twitter_url = e.config.sm_twitter_url, y.sm_youtube_url = e.config.sm_youtube_url, y.rss_enable = e.config.rss_enable === "1", y.rss_feeds = e.config.rss_feeds, y.site_title = e.config.site_title, y.site_owner = e.config.site_owner, y.site_copyright_begin = e.config.site_copyright_begin, y.site_copyright_end = e.config.site_copyright_end, y.footer_show_social_media = e.config.footer_show_social_media === "1", y.footer_show_copyright = e.config.footer_show_copyright === "1", y.footer_additional_text = e.config.footer_additional_text, y.mod_frame_enabled = e.config.mod_frame_enabled === "1", y.mod_frame_refresh = Number.parseInt(e.config.mod_frame_refresh, 10) || 30;
  const i = window.matchMedia("tv").matches;
  y.header_auto_hide = !i, y.active_focus_on_page_load = i, y.enable_button_visibility = !i, y.enable_button_share = !i, y.enable_button_archive = !i, y.enable_button_move = !i, y.enable_button_trash = !i, y.enable_button_fullscreen = !i, y.enable_button_download = !i, y.enable_button_add = !i, y.enable_button_more = !i, y.enable_button_rotate = !i, y.enable_close_tab_on_esc = i, y.enable_tabindex = i, y.enable_contextmenu_header = !i, y.hide_content_during_imgview = i;
};
y.parseProtectedInitializationData = function(e) {
  y.dropboxKey = e.config.dropbox_key || "", y.location = e.config.location || "", y.checkForUpdates = e.config.check_for_updates === "1", y.lang = e.config.lang || "", y.lang_available = e.config.lang_available || [], y.location_decoding = e.config.location_decoding === "1", y.default_license = e.config.default_license || "none", y.css = e.config.css || "", y.grants_full_photo_access = e.config.grants_full_photo_access === "1", y.grants_download = e.config.grants_download === "1", y.public_photos_hidden = e.config.public_photos_hidden === "1", y.delete_imported = e.config.delete_imported === "1", y.import_via_symlink = e.config.import_via_symlink === "1", y.skip_duplicates = e.config.skip_duplicates === "1", y.editor_enabled = e.config.editor_enabled === "1", y.new_photos_notification = e.config.new_photos_notification === "1", y.upload_processing_limit = Number.parseInt(e.config.upload_processing_limit, 10) || 4;
};
y.login = function(e) {
  if (!e.username.trim()) {
    j.focusError("username");
    return;
  }
  if (!e.password.trim()) {
    j.focusError("password");
    return;
  }
  K.post(
    "Session::login",
    e,
    () => window.location.reload(),
    null,
    function(i) {
      return i.status === 401 ? (j.focusError("password"), !0) : !1;
    }
  );
};
y.loginDialog = function() {
  const e = `
		<a id='signInKeyLess' class="button"><svg class='iconic'><use xlink:href='#key'/></svg></a>
		<form class="force-first-child">
			<div class="input-group stacked">
				<input class='text' name='username' autocomplete='username' type='text' autocapitalize='off' data-tabindex='${V.get_next_tab_index()}'>
			</div>
			<div class="input-group stacked">
				<input class='text' name='password' autocomplete='current-password' type='password' data-tabindex='${V.get_next_tab_index()}'>
			</div>
		</form>
		<p class='version'>Lychee <span class='version-number'></span>
			<span class="update-status up-to-date-release"> &#8211; <a target='_blank' href='${y.updateURL}' data-tabindex='-1'></a></span>
			<span class="update-status up-to-date-git"> &#8211; <a target='_blank' href='${y.updateGit}' data-tabindex='-1'></a></span>
		</p>
		`, i = function(s, u) {
    V.makeUnfocusable(F.dom()), V.makeUnfocusable(y.content), V.makeUnfocusable(y.imageview), V.makeFocusable(p(u)), s.username.placeholder = y.locale.USERNAME, s.password.placeholder = y.locale.PASSWORD, y.version ? u.querySelector("span.version-number").textContent = y.version.major + "." + y.version.minor + "." + y.version.patch : u.querySelector("span.version-number").textContent = "", y.update_available ? (u.querySelector("span.up-to-date-release a").textContent = y.locale.UPDATE_AVAILABLE, u.querySelector("span.up-to-date-release").classList.remove("up-to-date-release")) : y.update_json && (u.querySelector("span.up-to-date-git a").textContent = y.locale.UPDATE_AVAILABLE, u.querySelector("span.up-to-date-git").classList.remove("up-to-date-git")), u.querySelector("#signInKeyLess").addEventListener("click", tt.login);
  };
  j.show({
    body: e,
    readyCB: i,
    classList: ["login"],
    buttons: {
      action: {
        title: y.locale.SIGN_IN,
        fn: y.login,
        attributes: { "data-tabindex": V.get_next_tab_index() }
      },
      cancel: {
        title: y.locale.CANCEL,
        fn: j.close,
        attributes: { "data-tabindex": V.get_next_tab_index() }
      }
    }
  });
};
y.logout = function() {
  K.post("Session::logout", {}, () => window.location.reload());
};
y.goto = function(e = null, i = !0) {
  e = "gallery#" + (e !== null ? e : ""), history.pushState({ autoplay: i }, null, e), y.load(i);
};
y.gotoMap = function(e = null, i = !0) {
  if (!y.map_display) {
    Z.show("error", y.locale.ERROR_MAP_DEACTIVATED);
    return;
  }
  y.goto("map/" + (e !== null ? e : ""), i);
};
y.reloadIfLegacyIDs = function(e, i, s) {
  const u = function(h) {
    return h && h.length !== 24 && parseInt(h, 10).toString() === h;
  };
  if (!u(e) && !u(i))
    return !1;
  const l = function(h, E) {
    let C = "";
    h && (C += h, C += E ? "/" + E : ""), y.goto(C, s);
  };
  let d = {};
  return u(e) && (d.albumID = parseInt(e, 10)), u(i) && (d.photoID = parseInt(i, 10)), K.post("Legacy::translateLegacyModelIDs", d, function(h) {
    l(h.hasOwnProperty("albumID") ? h.albumID : e, h.hasOwnProperty("photoID") ? h.photoID : i);
  }), !0;
};
y.load = function(e = !0) {
  let i = "", s = "";
  const u = document.location.href.match(/\/view(?:\/|(\?p=))(?<photoID>[-_0-9A-Za-z]+)$/), l = document.location.hash.replace("#", "").split("/");
  /\/frame\/?$/.test(document.location.href) ? (i = "frame", s = "") : u !== null && u.groups.photoID ? (i = "view", s = u.groups.photoID) : (i = l[0], i === Qt && l.length > 1 && (i += "/" + l[1]), s = l[v.isSearchID(i) ? 2 : 1]), ce.close(), H.close(), V.reset();
  const d = document.querySelector("body").classList;
  if (d.contains("mode-frame") || d.contains("mode-view")) {
    y.init(!1);
    return;
  }
  if (i && s)
    if (i === "map") {
      if (!y.map_display) {
        Z.show("error", y.locale.ERROR_MAP_DEACTIVATED);
        return;
      }
      p(".no_content").remove(), i = s, s = null, S.json = null, P.photo() && M.photo.hide(), P.sidebar() && Q.toggle(!1), v.json && i === v.json.id && M.album.title(), Ae.open(i), y.footer_hide();
    } else {
      if (y.reloadIfLegacyIDs(i, s, e))
        return;
      p(".no_content").remove(), S.json = null;
      const h = function(E) {
        E || y.setMode("view"), S.load(s, i, e), V.makeFocusable(y.imageview), V.makeUnfocusable(y.content, !0), y.hide_content_during_imgview && y.content.hide(), y.footer_hide();
      };
      i === "view" ? (i = null, v.refresh(), y.content.empty(), h(!1)) : y.content.html() === "" || v.json === null || v.json.id !== i ? (y.content.hide(), v.load(i, h)) : h(!0);
    }
  else if (i)
    if (i === "map") {
      if (p(".no_content").remove(), !y.map_display) {
        Z.show("error", y.locale.ERROR_MAP_DEACTIVATED);
        return;
      }
      S.json = null, P.photo() && M.photo.hide(), P.sidebar() && Q.toggle(!1), Ae.open(), y.footer_hide();
    } else if (i === "frame")
      y.mod_frame_enabled ? frame.initAndStart() : Z.show("error", "Frame mode disabled");
    else {
      if (y.reloadIfLegacyIDs(i, s, e))
        return;
      if (p(".no_content").remove(), S.json = null, P.photo() && (M.photo.hide(), V.makeUnfocusable(y.imageview)), P.mapview() && Ae.close(), P.sidebar() && (v.isSmartID(i) || v.isSearchID(i)) && Q.toggle(!1), p("#sensitive_warning").removeClass("active"), v.json && i === v.json.id)
        v.isSearchID(i) ? p(".settings_view, .users_view, .sharing_view, .logs_diagnostics_view, .u2f_view").length > 0 ? (qe.reset(), history.back()) : (F.setMode("albums"), y.setMetaData(y.locale.SEARCH_RESULTS)) : p(".settings_view, .users_view, .sharing_view, .logs_diagnostics_view, .u2f_view").length > 0 ? v.load(i) : M.album.title(), y.content.show(), V.makeFocusable(y.content, !0), M.album.content.restoreScroll();
      else if (v.isSearchID(i)) {
        let h = decodeURIComponent(l[1]).trim();
        if (h === "")
          return;
        if (y.publicMode === !0 && !y.public_search) {
          Z.show("error", y.locale.ERROR_SEARCH_DEACTIVATED);
          return;
        }
        F.dom(".header__search").val(h), qe.find(h);
      } else
        P.search() ? (qe.json = null, v.load(i, null, v.getID())) : v.load(i);
      y.footer_show();
    }
  else
    p(".no_content").remove(), qe.json = null, v.json = null, S.json = null, P.sidebar() && Q.toggle(!1), P.photo() && (M.photo.hide(), V.makeUnfocusable(y.imageview)), P.mapview() && Ae.close(), p("#sensitive_warning").removeClass("active"), y.content.show(), y.footer_show(), q.load();
};
y.setMetaData = function(e = "", i = !1, s = "", u = "") {
  const l = y.site_title + (y.site_title && e ? " – " : "") + e, d = s ? s + " – via Lychee" : "";
  document.title = l, document.querySelector('meta[name="description"]').content = d, document.querySelector('meta[name="twitter:title"]').content = l, document.querySelector('meta[name="twitter:description"]').content = d, document.querySelector('meta[name="twitter:image"]').content = u, document.querySelector('meta[property="og:title"]').content = l, document.querySelector('meta[property="og:description"]').content = d, document.querySelector('meta[property="og:image"]').content = u, document.querySelector('meta[property="og:url"]').content = window.location.href, F.setEditable(i), F.setTitle(e);
};
y.setMode = function(e) {
  (!y.rights.settings.can_edit && !y.rights.user.can_edit || e === "view" || e === "frame") && p("#button_settings_open").hide(), (!y.rights.root_album.can_upload || e === "view" || e === "frame") && (p("#button_sharing").hide(), p(document).off("click", ".header__title--editable").off("touchend", ".header__title--editable").off("contextmenu", ".photo").off("contextmenu", ".album").off("drop"), Nt.unbind(["u"]).unbind(["s"]).unbind(["n"]).unbind(["r"]).unbind(["d"]).unbind(["t"]).unbind(["command+backspace", "ctrl+backspace"]).unbind(["command+a", "ctrl+a"])), (!y.rights.user_management.can_list || e === "view" || e === "frame") && p("#button_users").hide(), (!y.rights.settings.can_see_diagnostics || e === "view" || e === "frame") && p("#button_diagnostics").hide(), (!y.rights.settings.can_see_logs || e === "view" || e === "frame") && p("#button_logs").hide();
  const i = document.querySelector("body").classList;
  if (e === "logged_in") {
    i.contains("mode-gallery") || (i.replace("mode-none", "mode-gallery"), i.replace("mode-frame", "mode-gallery"), i.replace("mode-view", "mode-gallery")), Nt.unbind(["l"]).unbind(["k"]), p(".header__search, .header__clear", "#lychee_toolbar_public").hide(), y.editor_enabled || (p("#button_rotate_cwise").hide(), p("#button_rotate_ccwise").hide());
    return;
  }
  p(".header__search, .header__clear", "#lychee_toolbar_albums").hide(), p("#button_rotate_cwise").hide(), p("#button_rotate_ccwise").hide(), p("#button_settings, .header__divider, #lychee_left_menu_container").hide(), e === "public" ? (i.contains("mode-gallery") || (i.replace("mode-none", "mode-gallery"), i.replace("mode-frame", "mode-gallery"), i.replace("mode-view", "mode-gallery")), y.publicMode = !0) : e === "view" ? (i.contains("mode-view") || (i.replace("mode-none", "mode-view"), i.replace("mode-frame", "mode-view"), i.replace("mode-gallery", "mode-view")), Nt.unbind(["esc", "command+up"]), p("#button_back, a#next, a#previous").hide(), p(".no_content").hide(), y.publicMode = !0, y.viewMode = !0) : e === "frame" && (i.contains("mode-frame") || (i.replace("mode-none", "mode-frame"), i.replace("mode-view", "mode-frame"), i.replace("mode-gallery", "mode-frame")), Nt.unbind(["esc", "command+up"]), p("#button_back, a#next, a#previous").hide(), p(".no_content").hide(), y.publicMode = !0, y.viewMode = !0), F.bind_back();
};
y.animate = function(e, i) {
  const s = [
    ["fadeIn", "fadeOut"],
    ["contentZoomIn", "contentZoomOut"]
  ];
  for (let u = 0; u < s.length; u++)
    for (let l = 0; l < s[u].length; l++)
      if (s[u][l] === i) {
        e.removeClass(s[u][0] + " " + s[u][1]).addClass(i);
        return;
      }
};
y.loadDropbox = function(e) {
  if (!y.dropboxKey) {
    Z.show("error", y.locale.ERROR_DROPBOX_KEY);
    return;
  }
  if (y.dropbox)
    e();
  else {
    Z.show();
    let i = document.createElement("script"), s = document.getElementsByTagName("script")[0];
    i.src = "https://www.dropbox.com/static/api/1/dropins.js", i.id = "dropboxjs", i.type = "text/javascript", i.async = !0, i.setAttribute("data-app-key", y.dropboxKey), i.onload = i.onreadystatechange = function() {
      let u = this.readyState;
      u && u !== "complete" && u !== "loaded" || (y.dropbox = !0, Z.hide(), e());
    }, s.parentNode.insertBefore(i, s);
  }
};
y.escapeHTML = function(e = "") {
  return e += "", e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`/g, "&#96;"), e;
};
y.html = function(e, ...i) {
  let s = e.raw, u = "";
  return i.forEach((l, d) => {
    let h = s[d];
    h.slice(-1) === "$" && (l = y.escapeHTML(l), h = h.slice(0, -1)), u += h, u += l;
  }), u += s[s.length - 1], u;
};
y.handleAPIError = function(e, i, s) {
  if (K.hasSessionExpired(e, s))
    Z.show("error", y.locale.ERROR_SESSION), setTimeout(() => {
      y.goto(), window.location.reload();
    }, 3e3);
  else {
    const u = e.statusText + (s ? " - " + s.message : "");
    Z.show("error", u), console.error("The server returned an error response", {
      description: u,
      params: i,
      response: s
    });
  }
  return !0;
};
y.fullscreenEnter = function() {
  let e = document.documentElement;
  e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
};
y.fullscreenExit = function() {
  document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
};
y.fullscreenToggle = function() {
  y.fullscreenStatus() ? y.fullscreenExit() : y.fullscreenEnter();
};
y.fullscreenStatus = function() {
  return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
};
y.fullscreenAvailable = function() {
  return document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled;
};
y.fullscreenUpdate = function() {
  y.fullscreenStatus() ? (p("#button_fs_album_enter,#button_fs_enter").hide(), p("#button_fs_album_exit,#button_fs_exit").show()) : (p("#button_fs_album_enter,#button_fs_enter").show(), p("#button_fs_album_exit,#button_fs_exit").hide());
};
y.footer_show = function() {
  setTimeout(function() {
    y.footer.removeClass("hide_footer");
  }, 200);
};
y.footer_hide = function() {
  y.footer.addClass("hide_footer");
};
y.getBaseUrl = function() {
  return location.href.includes("index.html") ? location.href.replace("index.html" + location.hash, "") : location.href.includes("gallery#") ? location.href.replace("gallery" + location.hash, "") : location.href.replace(location.hash, "");
};
y.startDrag = function(e) {
  const i = e.target.closest("div.album,div.photo");
  if (!i)
    return;
  const s = i.classList.contains("album") ? "album" : "photo";
  e.dataTransfer.setData("text/plain", `${s}-${i.dataset.id}`);
};
y.finishDrag = function(e) {
  e.preventDefault();
  const i = e.dataTransfer.getData("text/plain");
  let s = e.target.closest("div.album").dataset.id;
  !s || i.substring(6) === s || (i.startsWith("photo-") ? ce.photoDrop(i.substring(6), s, e) : ce.albumDrop(i.substring(6), s, e));
};
y.overDrag = function(e) {
  e.preventDefault();
  let i = e.target.closest("div.album");
  i && i.classList.add("album__dragover");
};
y.leaveDrag = function(e) {
  const i = e.target.closest("div.album");
  i && i.classList.remove("album__dragover");
};
y.endDrag = function(e) {
  p("div.album").removeClass("album__dragover");
};
y.addClickOrTouchListener = function(e, i, s) {
  e.addEventListener("click", i, s), e.addEventListener("touchend", i, s);
};
const n = y;
n.locale = {
  USERNAME: "Username",
  PASSWORD: "Password",
  ENTER: "Enter",
  CANCEL: "Cancel",
  SIGN_IN: "Sign In",
  CLOSE: "Close",
  SETTINGS: "Settings",
  SEARCH: "Search …",
  MORE: "More",
  DEFAULT: "Default",
  GALLERY: "Gallery",
  USERS: "Users",
  CREATE: "Create",
  REMOVE: "Remove",
  SHARE: "Share",
  U2F: "U2F",
  NOTIFICATIONS: "Notifications",
  SHARING: "Sharing",
  CHANGE_LOGIN: "Change Login",
  CHANGE_SORTING: "Change Sorting",
  SET_DROPBOX: "Set Dropbox",
  ABOUT_LYCHEE: "About Lychee",
  DIAGNOSTICS: "Diagnostics",
  DIAGNOSTICS_GET_SIZE: "Request space usage",
  LOGS: "Show Logs",
  CLEAN_LOGS: "Clean Noise",
  CLEAR: "Clear",
  SIGN_OUT: "Sign Out",
  UPDATE_AVAILABLE: "Update available!",
  MIGRATION_AVAILABLE: "Migration available!",
  CHECK_FOR_UPDATE: "Check for updates",
  DEFAULT_LICENSE: "Default license for new uploads:",
  SET_LICENSE: "Set License",
  SET_OVERLAY_TYPE: "Set Overlay",
  SET_ALBUM_DECORATION: "Set album decorations",
  SET_MAP_PROVIDER: "Set OpenStreetMap tiles provider",
  FULL_SETTINGS: "Full Settings",
  UPDATE: "Update",
  RESET: "Reset",
  DISABLE_TOKEN_TOOLTIP: "Disable",
  ENABLE_TOKEN: "Enable API token",
  DISABLED_TOKEN_STATUS_MSG: "Disabled",
  TOKEN_BUTTON: "API Token ...",
  TOKEN_NOT_AVAILABLE: "You have already viewed this token.",
  TOKEN_WAIT: "Wait ...",
  SMART_ALBUMS: "Smart albums",
  SHARED_ALBUMS: "Shared albums",
  ALBUMS: "Albums",
  PHOTOS: "Pictures",
  SEARCH_RESULTS: "Search results",
  RENAME: "Rename",
  RENAME_ALL: "Rename Selected",
  MERGE: "Merge",
  MERGE_ALL: "Merge Selected",
  MAKE_PUBLIC: "Make Public",
  SHARE_ALBUM: "Share Album",
  SHARE_PHOTO: "Share Photo",
  VISIBILITY_ALBUM: "Album Visibility",
  VISIBILITY_PHOTO: "Photo Visibility",
  DOWNLOAD_ALBUM: "Download Album",
  ABOUT_ALBUM: "About Album",
  DELETE_ALBUM: "Delete Album",
  MOVE_ALBUM: "Move Album",
  FULLSCREEN_ENTER: "Enter Fullscreen",
  FULLSCREEN_EXIT: "Exit Fullscreen",
  SHARING_ALBUM_USERS: "Share this album with users",
  WAIT_FETCH_DATA: "Please wait while we get the data …",
  SHARING_ALBUM_USERS_NO_USERS: "There are no users to share the album with",
  SHARING_ALBUM_USERS_LONG_MESSAGE: "Select the users to share this album with",
  DELETE_ALBUM_QUESTION: "Delete Album and Photos",
  KEEP_ALBUM: "Keep Album",
  DELETE_ALBUM_CONFIRMATION: "Are you sure you want to delete the album “%s” and all of the photos it contains? This action can’t be undone!",
  DELETE_TAG_ALBUM_QUESTION: "Delete Album",
  DELETE_TAG_ALBUM_CONFIRMATION: "Are you sure you want to delete the album “%s” (any photos inside will not be deleted)? This action can’t be undone!",
  DELETE_ALBUMS_QUESTION: "Delete Albums and Photos",
  KEEP_ALBUMS: "Keep Albums",
  DELETE_ALBUMS_CONFIRMATION: "Are you sure you want to delete all %d selected albums and all of the photos they contain? This action can’t be undone!",
  DELETE_UNSORTED_CONFIRM: "Are you sure you want to delete all photos from “Unsorted”? This action can’t be undone!",
  CLEAR_UNSORTED: "Clear Unsorted",
  KEEP_UNSORTED: "Keep Unsorted",
  EDIT_SHARING: "Edit Sharing",
  MAKE_PRIVATE: "Make Private",
  CLOSE_ALBUM: "Close Album",
  CLOSE_PHOTO: "Close Photo",
  CLOSE_MAP: "Close Map",
  ADD: "Add",
  MOVE: "Move",
  MOVE_ALL: "Move Selected",
  DUPLICATE: "Duplicate",
  DUPLICATE_ALL: "Duplicate Selected",
  COPY_TO: "Copy to …",
  COPY_ALL_TO: "Copy Selected to …",
  DELETE: "Delete",
  SAVE: "Save",
  DELETE_ALL: "Delete Selected",
  DOWNLOAD: "Download",
  DOWNLOAD_ALL: "Download Selected",
  UPLOAD_PHOTO: "Upload Photo",
  IMPORT_LINK: "Import from Link",
  IMPORT_DROPBOX: "Import from Dropbox",
  IMPORT_SERVER: "Import from Server",
  NEW_ALBUM: "New Album",
  NEW_TAG_ALBUM: "New Tag Album",
  UPLOAD_TRACK: "Upload track",
  DELETE_TRACK: "Delete track",
  TITLE_NEW_ALBUM: "Enter a title for the new album:",
  UNTITLED: "Untitled",
  UNSORTED: "Unsorted",
  STARRED: "Starred",
  RECENT: "Recent",
  PUBLIC: "Public",
  ON_THIS_DAY: "On This Day",
  NUM_PHOTOS: "Photos",
  CREATE_ALBUM: "Create Album",
  CREATE_TAG_ALBUM: "Create Tag Album",
  STAR_PHOTO: "Star Photo",
  STAR: "Star",
  UNSTAR: "Unstar",
  STAR_ALL: "Star Selected",
  UNSTAR_ALL: "Unstar Selected",
  TAG: "Tag",
  TAG_ALL: "Tag Selected",
  UNSTAR_PHOTO: "Unstar Photo",
  SET_COVER: "Set Album Cover",
  REMOVE_COVER: "Remove Album Cover",
  FULL_PHOTO: "Open Original",
  ABOUT_PHOTO: "About Photo",
  DISPLAY_FULL_MAP: "Map",
  DIRECT_LINK: "Direct Link",
  DIRECT_LINKS: "Direct Links",
  QR_CODE: "QR Code",
  ALBUM_ABOUT: "About",
  ALBUM_BASICS: "Basics",
  ALBUM_TITLE: "Title",
  ALBUM_NEW_TITLE: "Enter a new title for this album:",
  ALBUMS_NEW_TITLE: "Enter a title for all %d selected albums:",
  ALBUM_SET_TITLE: "Set Title",
  ALBUM_DESCRIPTION: "Description",
  ALBUM_SHOW_TAGS: "Tags to show",
  ALBUM_NEW_DESCRIPTION: "Enter a new description for this album:",
  ALBUM_SET_DESCRIPTION: "Set Description",
  ALBUM_NEW_SHOWTAGS: "Enter tags of photos that will be visible in this album:",
  ALBUM_SET_SHOWTAGS: "Set tags to show",
  ALBUM_ALBUM: "Album",
  ALBUM_CREATED: "Created",
  ALBUM_IMAGES: "Images",
  ALBUM_VIDEOS: "Videos",
  ALBUM_SUBALBUMS: "Subalbums",
  ALBUM_SHARING: "Share",
  ALBUM_SHR_YES: "YES",
  ALBUM_SHR_NO: "No",
  ALBUM_PUBLIC: "Public",
  ALBUM_PUBLIC_EXPL: "Anonymous users can access this album, subject to the restrictions below.",
  ALBUM_FULL: "Original",
  ALBUM_FULL_EXPL: "Anonymous users can behold full-resolution photos.",
  ALBUM_HIDDEN: "Hidden",
  ALBUM_HIDDEN_EXPL: "Anonymous users need a direct link to access this album.",
  ALBUM_MARK_NSFW: "Mark album as sensitive",
  ALBUM_UNMARK_NSFW: "Unmark album as sensitive",
  ALBUM_NSFW: "Sensitive",
  ALBUM_NSFW_EXPL: "Album contains sensitive content.",
  ALBUM_DOWNLOADABLE: "Downloadable",
  ALBUM_DOWNLOADABLE_EXPL: "Anonymous users can download this album.",
  ALBUM_SHARE_BUTTON_VISIBLE: "Share button is visible",
  ALBUM_SHARE_BUTTON_VISIBLE_EXPL: "Anonymous users can see social media sharing links.",
  ALBUM_PASSWORD: "Password",
  ALBUM_PASSWORD_PROT: "Password protected",
  ALBUM_PASSWORD_PROT_EXPL: "Anonymous users need a shared password to access this album.",
  ALBUM_PASSWORD_REQUIRED: "This album is protected by a password. Enter the password below to view the photos of this album:",
  ALBUM_MERGE: "Are you sure you want to merge the album “%1$s” into the album “%2$s”?",
  ALBUMS_MERGE: "Are you sure you want to merge all selected albums into the album “%s”?",
  MERGE_ALBUM: "Merge Albums",
  DONT_MERGE: "Don’t Merge",
  ALBUM_MOVE: "Are you sure you want to move the album “%1$s” into the album “%2$s”?",
  ALBUMS_MOVE: "Are you sure you want to move all selected albums into the album “%s”?",
  MOVE_ALBUMS: "Move Albums",
  NOT_MOVE_ALBUMS: "Don’t Move",
  ROOT: "Albums",
  ALBUM_REUSE: "Reuse",
  ALBUM_LICENSE: "License",
  ALBUM_SET_LICENSE: "Set License",
  ALBUM_LICENSE_HELP: "Need help choosing?",
  ALBUM_LICENSE_NONE: "None",
  ALBUM_RESERVED: "All Rights Reserved",
  ALBUM_SET_ORDER: "Set Order",
  ALBUM_ORDERING: "Order by",
  ALBUM_OWNER: "Owner",
  PHOTO_ABOUT: "About",
  PHOTO_BASICS: "Basics",
  PHOTO_TITLE: "Title",
  PHOTO_NEW_TITLE: "Enter a new title for this photo:",
  PHOTO_SET_TITLE: "Set Title",
  PHOTO_UPLOADED: "Uploaded",
  PHOTO_DESCRIPTION: "Description",
  PHOTO_NEW_DESCRIPTION: "Enter a new description for this photo:",
  PHOTO_SET_DESCRIPTION: "Set Description",
  PHOTO_NEW_LICENSE: "Add a License",
  PHOTO_SET_LICENSE: "Set License",
  PHOTO_LICENSE: "License",
  PHOTO_LICENSE_HELP: "Need help choosing?",
  PHOTO_REUSE: "Reuse",
  PHOTO_LICENSE_NONE: "None",
  PHOTO_RESERVED: "All Rights Reserved",
  PHOTO_LATITUDE: "Latitude",
  PHOTO_LONGITUDE: "Longitude",
  PHOTO_ALTITUDE: "Altitude",
  PHOTO_IMGDIRECTION: "Direction",
  PHOTO_LOCATION: "Location",
  PHOTO_IMAGE: "Image",
  PHOTO_VIDEO: "Video",
  PHOTO_SIZE: "Size",
  PHOTO_FORMAT: "Format",
  PHOTO_RESOLUTION: "Resolution",
  PHOTO_DURATION: "Duration",
  PHOTO_FPS: "Frame rate",
  PHOTO_TAGS: "Tags",
  PHOTO_NOTAGS: "No Tags",
  PHOTO_NEW_TAGS: "Enter your tags for this photo. You can add multiple tags by separating them with a comma:",
  PHOTOS_NEW_TAGS: "Enter your tags for all %d selected photos. Existing tags will be overwritten. You can add multiple tags by separating them with a comma:",
  PHOTO_SET_TAGS: "Set Tags",
  TAGS_OVERRIDE_INFO: "If this is unchecked, the tags will be added to the existing tags of the photo.",
  PHOTO_CAMERA: "Camera",
  PHOTO_CAPTURED: "Captured",
  PHOTO_MAKE: "Make",
  PHOTO_TYPE: "Type/Model",
  PHOTO_LENS: "Lens",
  PHOTO_SHUTTER: "Shutter Speed",
  PHOTO_APERTURE: "Aperture",
  PHOTO_FOCAL: "Focal Length",
  PHOTO_ISO: "ISO %s",
  PHOTO_SHARING: "Sharing",
  PHOTO_SHR_PUBLIC: "Public",
  PHOTO_SHR_ALB: "Yes (Album)",
  PHOTO_SHR_PHT: "Yes (Photo)",
  PHOTO_SHR_NO: "No",
  PHOTO_DELETE: "Delete Photo",
  PHOTO_KEEP: "Keep Photo",
  PHOTO_DELETE_CONFIRMATION: "Are you sure you want to delete the photo “%s”? This action can’t be undone!",
  PHOTO_DELETE_ALL: "Are you sure you want to delete all %d selected photo? This action can’t be undone!",
  PHOTOS_NEW_TITLE: "Enter a title for all %d selected photos:",
  PHOTO_MAKE_PRIVATE_ALBUM: "This photo is located in a public album. To make this photo private or public, edit the visibility of the associated album.",
  PHOTO_SHOW_ALBUM: "Show Album",
  PHOTO_PUBLIC: "Public",
  PHOTO_PUBLIC_EXPL: "Anonymous users can view this photo, subject to the restrictions below.",
  PHOTO_FULL: "Original",
  PHOTO_FULL_EXPL: "Anonymous users can behold full-resolution photo.",
  PHOTO_HIDDEN: "Hidden",
  PHOTO_HIDDEN_EXPL: "Anonymous users need a direct link to view this photo.",
  PHOTO_DOWNLOADABLE: "Downloadable",
  PHOTO_DOWNLOADABLE_EXPL: "Anonymous users may download this photo.",
  PHOTO_SHARE_BUTTON_VISIBLE: "Share button is visible",
  PHOTO_SHARE_BUTTON_VISIBLE_EXPL: "Anonymous users can see social media sharing links.",
  PHOTO_PASSWORD_PROT: "Password protected",
  PHOTO_PASSWORD_PROT_EXPL: "Anonymous users need a shared password to view this photo.",
  PHOTO_EDIT_SHARING_TEXT: "The sharing properties of this photo will be changed to the following:",
  PHOTO_NO_EDIT_SHARING_TEXT: "Because this photo is located in a public album, it inherits that album’s visibility settings.  Its current visibility is shown below for informational purposes only.",
  PHOTO_EDIT_GLOBAL_SHARING_TEXT: "The visibility of this photo can be fine-tuned using global Lychee settings. Its current visibility is shown below for informational purposes only.",
  PHOTO_NEW_CREATED_AT: "Enter the upload date for this photo. mm/dd/yyyy, hh:mm [am/pm]",
  PHOTO_SET_CREATED_AT: "Set upload date",
  LOADING: "Loading",
  ERROR: "Error",
  ERROR_TEXT: "Whoops, it looks like something went wrong. Please reload the site and try again!",
  ERROR_UNKNOWN: "Something unexpected happened. Please try again and check your installation and server. Take a look at the readme for more information.",
  ERROR_MAP_DEACTIVATED: "Map functionality has been deactivated under settings.",
  ERROR_SEARCH_DEACTIVATED: "Search functionality has been deactivated under settings.",
  SUCCESS: "OK",
  RETRY: "Retry",
  OVERRIDE: "Override",
  SETTINGS_SUCCESS_LOGIN: "Login Info updated.",
  SETTINGS_SUCCESS_SORT: "Sorting order updated.",
  SETTINGS_SUCCESS_DROPBOX: "Dropbox Key updated.",
  SETTINGS_SUCCESS_LANG: "Language updated",
  SETTINGS_SUCCESS_LAYOUT: "Layout updated",
  SETTINGS_SUCCESS_IMAGE_OVERLAY: "Image overlay setting updated",
  SETTINGS_SUCCESS_ALBUM_DECORATION: "Album decorations updated",
  SETTINGS_SUCCESS_PUBLIC_SEARCH: "Public search updated",
  SETTINGS_SUCCESS_LICENSE: "Default license updated",
  SETTINGS_SUCCESS_MAP_DISPLAY: "Map display settings updated",
  SETTINGS_SUCCESS_MAP_DISPLAY_PUBLIC: "Map display settings for public albums updated",
  SETTINGS_SUCCESS_MAP_PROVIDER: "Map provider settings updated",
  SETTINGS_SUCCESS_CSS: "CSS updated",
  SETTINGS_SUCCESS_JS: "JS updated",
  SETTINGS_SUCCESS_UPDATE: "Settings updated successfully",
  SETTINGS_DROPBOX_KEY: "Dropbox API Key",
  SETTINGS_ADVANCED_WARNING_EXPL: "Changing these advanced settings can be harmful to the stability, security and performance of this application. You should only modify them if you are sure of what you are doing.",
  SETTINGS_ADVANCED_SAVE: "Save my modifications, I accept the risk!",
  U2F_NOT_SUPPORTED: "U2F not supported. Sorry.",
  U2F_NOT_SECURE: "Environment not secured. U2F not available.",
  U2F_REGISTER_KEY: "Register new device.",
  U2F_REGISTRATION_SUCCESS: "Registration successful!",
  U2F_AUTHENTIFICATION_SUCCESS: "Authentication successful!",
  U2F_CREDENTIALS: "Credentials",
  U2F_CREDENTIALS_DELETED: "Credentials deleted!",
  NEW_PHOTOS_NOTIFICATION: "Send new photos notification emails.",
  SETTINGS_SUCCESS_NEW_PHOTOS_NOTIFICATION: "New photos notification updated",
  USER_EMAIL_INSTRUCTION: "Add your email below to enable receiving email notifications. To stop receiving emails, simply remove your email below.",
  LOGIN_USERNAME: "New Username",
  LOGIN_PASSWORD: "New Password",
  LOGIN_PASSWORD_CONFIRM: "Confirm Password",
  PASSWORD_TITLE: "Enter your current password:",
  PASSWORD_CURRENT: "Current Password",
  PASSWORD_TEXT: "Your credentials will be changed to the following:",
  PASSWORD_CHANGE: "Change Login",
  EDIT_SHARING_TITLE: "Edit Sharing",
  EDIT_SHARING_TEXT: "The sharing properties of this album will be changed to the following:",
  SHARE_ALBUM_TEXT: "This album will be shared with the following properties:",
  SORT_DIALOG_ATTRIBUTE_LABEL: "Attribute",
  SORT_DIALOG_ORDER_LABEL: "Order",
  SORT_ALBUM_BY: "Sort albums by %1$s in an %2$s order.",
  SORT_ALBUM_SELECT_1: "Creation Time",
  SORT_ALBUM_SELECT_2: "Title",
  SORT_ALBUM_SELECT_3: "Description",
  SORT_ALBUM_SELECT_4: "Public",
  SORT_ALBUM_SELECT_5: "Latest Take Date",
  SORT_ALBUM_SELECT_6: "Oldest Take Date",
  SORT_PHOTO_BY: "Sort photos by %1$s in an %2$s order.",
  SORT_PHOTO_SELECT_1: "Upload Time",
  SORT_PHOTO_SELECT_2: "Take Date",
  SORT_PHOTO_SELECT_3: "Title",
  SORT_PHOTO_SELECT_4: "Description",
  SORT_PHOTO_SELECT_5: "Public",
  SORT_PHOTO_SELECT_6: "Star",
  SORT_PHOTO_SELECT_7: "Photo Format",
  SORT_ASCENDING: "Ascending",
  SORT_DESCENDING: "Descending",
  SORT_CHANGE: "Change Sorting",
  DROPBOX_TITLE: "Set Dropbox Key",
  DROPBOX_TEXT: "In order to import photos from your Dropbox, you need a valid drop-ins app key from <a href='https://www.dropbox.com/developers/apps/create'>their website</a>. Generate yourself a personal key and enter it below:",
  LANG_TEXT: "Change Lychee language for:",
  LANG_TITLE: "Change Language",
  CSS_TEXT: "Personalize CSS:",
  CSS_TITLE: "Change CSS",
  JS_TEXT: "Custom JS:",
  JS_TITLE: "Change JS",
  PUBLIC_SEARCH_TEXT: "Public search allowed:",
  OVERLAY_TYPE: "Photo overlay:",
  OVERLAY_NONE: "None",
  OVERLAY_EXIF: "EXIF data",
  OVERLAY_DESCRIPTION: "Description",
  OVERLAY_DATE: "Date taken",
  ALBUM_DECORATION: "Album decorations:",
  ALBUM_DECORATION_NONE: "No badges",
  ALBUM_DECORATION_ORIGINAL: "Sub-album badge, no count",
  ALBUM_DECORATION_ALBUM: "Sub-album badge with count",
  ALBUM_DECORATION_PHOTO: "Photo badge with count",
  ALBUM_DECORATION_ALL: "Sub-album and photo badges with counts",
  ALBUM_DECORATION_ORIENTATION: "Orientation of album decorations:",
  ALBUM_DECORATION_ORIENTATION_ROW: "Horizontal decorations (photos, albums)",
  ALBUM_DECORATION_ORIENTATION_ROW_REVERSE: "Horizontal decorations (albums, photos)",
  ALBUM_DECORATION_ORIENTATION_COLUMN: "Vertical decorations (top photos, albums)",
  ALBUM_DECORATION_ORIENTATION_COLUMN_REVERSE: "Vertical decorations (top albums, photos)",
  MAP_DISPLAY_TEXT: "Enable maps (provided by OpenStreetMap):",
  MAP_DISPLAY_PUBLIC_TEXT: "Enable maps for public albums (provided by OpenStreetMap):",
  MAP_PROVIDER: "Provider of OpenStreetMap tiles:",
  MAP_PROVIDER_WIKIMEDIA: "Wikimedia",
  MAP_PROVIDER_OSM_ORG: "OpenStreetMap.org (no HiDPI)",
  MAP_PROVIDER_OSM_DE: "OpenStreetMap.de (no HiDPI)",
  MAP_PROVIDER_OSM_FR: "OpenStreetMap.fr (no HiDPI)",
  MAP_PROVIDER_RRZE: "University of Erlangen, Germany (only HiDPI)",
  MAP_INCLUDE_SUBALBUMS_TEXT: "Include photos of subalbums on map:",
  LOCATION_DECODING: "Decode GPS data into location name",
  LOCATION_SHOW: "Show location name",
  LOCATION_SHOW_PUBLIC: "Show location name for public mode",
  LAYOUT_TYPE: "Layout of photos:",
  LAYOUT_SQUARES: "Square thumbnails",
  LAYOUT_JUSTIFIED: "With aspect, justified",
  LAYOUT_UNJUSTIFIED: "With aspect, unjustified",
  SET_LAYOUT: "Change layout",
  NSFW_VISIBLE_TEXT_1: "Make Sensitive albums visible by default.",
  NSFW_VISIBLE_TEXT_2: "If the album is public, it is still accessible, just hidden from the view and <b>can be revealed by pressing <kbd>H</kbd></b>.",
  SETTINGS_SUCCESS_NSFW_VISIBLE: "Default sensitive album visibility updated with success.",
  NSFW_BANNER: "<h1>Sensitive content</h1><p>This album contains sensitive content which some people may find offensive or disturbing.</p><p>Tap to consent.</p>",
  VIEW_NO_RESULT: "No results",
  VIEW_NO_PUBLIC_ALBUMS: "No public albums",
  VIEW_NO_CONFIGURATION: "No configuration",
  VIEW_PHOTO_NOT_FOUND: "Photo not found",
  NO_TAGS: "No Tags",
  UPLOAD_MANAGE_NEW_PHOTOS: "You can now manage your new photo(s).",
  UPLOAD_COMPLETE: "Upload complete",
  UPLOAD_COMPLETE_FAILED: "Failed to upload one or more photos.",
  UPLOAD_IMPORTING: "Importing",
  UPLOAD_IMPORTING_URL: "Importing URL",
  UPLOAD_UPLOADING: "Uploading",
  UPLOAD_FINISHED: "Finished",
  UPLOAD_PROCESSING: "Processing",
  UPLOAD_FAILED: "Failed",
  UPLOAD_FAILED_ERROR: "Upload failed. The server returned an error!",
  UPLOAD_FAILED_WARNING: "Upload failed. The server returned a warning!",
  UPLOAD_CANCELLED: "Cancelled",
  UPLOAD_SKIPPED: "Skipped",
  UPLOAD_UPDATED: "Updated",
  UPLOAD_GENERAL: "General",
  UPLOAD_IMPORT_SKIPPED_DUPLICATE: "This photo has been skipped because it’s already in your library.",
  UPLOAD_IMPORT_RESYNCED_DUPLICATE: "This photo has been skipped because it’s already in your library, but its metadata has been updated.",
  UPLOAD_ERROR_CONSOLE: "Please take a look at the console of your browser for further details.",
  UPLOAD_UNKNOWN: "Server returned an unknown response. Please take a look at the console of your browser for further details.",
  UPLOAD_ERROR_UNKNOWN: "Upload failed. The server returned an unknown error!",
  UPLOAD_ERROR_POSTSIZE: "Upload failed. The PHP post_max_size may be too small! Otherwise check the FAQ.",
  UPLOAD_ERROR_FILESIZE: "Upload failed. The PHP upload_max_filesize may be too small! Otherwise check the FAQ.",
  UPLOAD_IN_PROGRESS: "Lychee is currently uploading!",
  UPLOAD_IMPORT_WARN_ERR: "The import has been finished, but returned warnings or errors. Please take a look at the log (Settings -> Show Log) for further details.",
  UPLOAD_IMPORT_COMPLETE: "Import complete",
  UPLOAD_IMPORT_INSTR: "Please enter the direct link to a photo to import it:",
  UPLOAD_IMPORT: "Import",
  UPLOAD_IMPORT_SERVER: "Importing from server",
  UPLOAD_IMPORT_SERVER_FOLD: "Folder empty or no readable files to process. Please take a look at the log (Settings -> Show Log) for further details.",
  UPLOAD_IMPORT_SERVER_INSTR: "Import all photos, folders, and sub-folders located in the folders with the following absolute paths (on the server). Paths are space-separated, use \\ to escape a space in a path.",
  UPLOAD_ABSOLUTE_PATH: "Absolute path to directories, space separated",
  UPLOAD_IMPORT_SERVER_EMPT: "Could not start import because the folder was empty!",
  UPLOAD_IMPORT_DELETE_ORIGINALS: "Delete originals",
  UPLOAD_IMPORT_DELETE_ORIGINALS_EXPL: "Original files will be deleted after the import when possible.",
  UPLOAD_IMPORT_VIA_SYMLINK: "Symbolic links",
  UPLOAD_IMPORT_VIA_SYMLINK_EXPL: "Import files using symbolic links to originals.",
  UPLOAD_IMPORT_SKIP_DUPLICATES: "Skip duplicates",
  UPLOAD_IMPORT_SKIP_DUPLICATES_EXPL: "Existing media files are skipped.",
  UPLOAD_IMPORT_RESYNC_METADATA: "Re-sync metadata",
  UPLOAD_IMPORT_RESYNC_METADATA_EXPL: "Update metadata of existing media files.",
  UPLOAD_IMPORT_LOW_MEMORY_EXPL: "The import process on the server is approaching the memory limit and may end up being terminated prematurely.",
  UPLOAD_WARNING: "Warning",
  UPLOAD_IMPORT_NOT_A_DIRECTORY: "The given path is not a readable directory!",
  UPLOAD_IMPORT_PATH_RESERVED: "The given path is a reserved path of Lychee!",
  UPLOAD_IMPORT_FAILED: "Could not import the file!",
  UPLOAD_IMPORT_UNSUPPORTED: "Unsupported file type!",
  UPLOAD_IMPORT_CANCELLED: "Import cancelled",
  ABOUT_SUBTITLE: "Self-hosted photo-management done right",
  ABOUT_DESCRIPTION: "<a target='_blank' href='%s'>Lychee</a> is a free photo-management tool, which runs on your server or web-space. Installing is a matter of seconds. Upload, manage and share photos like from a native application. Lychee comes with everything you need and all your photos are stored securely.",
  FOOTER_COPYRIGHT: "All images on this website are subject to copyright by %1$s © %2$s",
  HOSTED_WITH_LYCHEE: "Hosted with Lychee",
  URL_COPY_TO_CLIPBOARD: "Copy to clipboard",
  URL_COPIED_TO_CLIPBOARD: "Copied URL to clipboard!",
  PHOTO_DIRECT_LINKS_TO_IMAGES: "Direct links to image files:",
  PHOTO_ORIGINAL: "Original",
  PHOTO_MEDIUM: "Medium",
  PHOTO_MEDIUM_HIDPI: "Medium HiDPI",
  PHOTO_SMALL: "Thumb",
  PHOTO_SMALL_HIDPI: "Thumb HiDPI",
  PHOTO_THUMB: "Square thumb",
  PHOTO_THUMB_HIDPI: "Square thumb HiDPI",
  PHOTO_THUMBNAIL: "Photo thumbnail",
  PHOTO_LIVE_VIDEO: "Video part of live-photo",
  PHOTO_VIEW: "Lychee Photo View:",
  PHOTO_EDIT_ROTATECWISE: "Rotate clockwise",
  PHOTO_EDIT_ROTATECCWISE: "Rotate counter-clockwise",
  ERROR_GPX: "Error loading GPX file: ",
  ERROR_EITHER_ALBUMS_OR_PHOTOS: "Please select either albums or photos!",
  ERROR_COULD_NOT_FIND: "Could not find what you want.",
  ERROR_INVALID_EMAIL: "Not a valid email address.",
  EMAIL_SUCCESS: "Email updated!",
  ERROR_PHOTO_NOT_FOUND: "Error: photo %s not found!",
  ERROR_EMPTY_USERNAME: "new username cannot be empty.",
  ERROR_PASSWORD_DOES_NOT_MATCH: "new password does not match.",
  ERROR_EMPTY_PASSWORD: "new password cannot be empty.",
  ERROR_SELECT_ALBUM: "Select an album to share!",
  ERROR_SELECT_USER: "Select a user to share with!",
  ERROR_SELECT_SHARING: "Select a sharing to remove!",
  SHARING_SUCCESS: "Sharing updated!",
  SHARING_REMOVED: "Sharing removed!",
  USER_CREATED: "User created!",
  USER_DELETED: "User deleted!",
  USER_UPDATED: "User updated!",
  ENTER_EMAIL: "Enter your email address:",
  ERROR_ALBUM_JSON_NOT_FOUND: "Error: Album JSON not found!",
  ERROR_ALBUM_NOT_FOUND: "Error: album %s not found",
  ERROR_DROPBOX_KEY: "Error: Dropbox key not set",
  ERROR_SESSION: "Session expired.",
  CAMERA_DATE: "Camera date",
  NEW_PASSWORD: "new password",
  ALLOW_UPLOADS: "Allow uploads",
  ALLOW_USER_SELF_EDIT: "Allow self-management of user account",
  OSM_CONTRIBUTORS: "OpenStreetMap contributors",
  dateTimeFormatter: new Intl.DateTimeFormat("default", { dateStyle: "medium", timeStyle: "medium" }),
  /**
   * Formats a number representing a filesize in bytes as a localized string
   * @param {!number} filesize
   * @returns {string} A formatted and localized string
   */
  printFilesizeLocalized: function(e) {
    const i = [" B", " kB", " MB", " GB"];
    let s = 0;
    for (; e >= 1e3 && s < i.length; )
      e = e / 1024, s++;
    return e >= 100 ? e = Math.round(e) : e >= 10 ? e = Math.round(e * 10) / 10 : e = Math.round(e * 100) / 100, Number(e).toLocaleString() + i[s];
  },
  /**
   * Converts a JSON encoded date/time into a localized string relative to
   * the original timezone
   *
   * The localized string uses the JS "medium" verbosity.
   * The precise definition of "medium verbosity" depends on the current locale, but for Western languages this
   * means that the date portion is fully printed with digits (e.g. something like 03/30/2021 for English,
   * 30/03/2021 for French and 30.03.2021 for German), and that the time portion is printed with a resolution of
   * seconds with two digits for all parts either in 24h or 12h scheme (e.g. something like 02:24:13pm for English
   * and 14:24:13 for French/German).
   *
   * @param {?string} jsonDateTime
   * @returns {string} A formatted and localized time
   */
  printDateTime: function(e) {
    if (typeof e != "string" || e === "")
      return "";
    const i = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}([,.]\d{1,6})?)([-Z+])(\d{2}:\d{2})?$/.exec(e);
    console.assert(i.length === 5, "'jsonDateTime' is not formatted acc. to ISO 8601; passed string was: " + e);
    let s = n.locale.dateTimeFormatter.format(new Date(i[1]));
    return i[3] === "Z" || i[4] === "00:00" ? s += " UTC" : s += " UTC" + i[3] + i[4], s;
  },
  /**
   * Converts a JSON encoded date/time into a localized string which only displays month and year.
   *
   * The month is printed as a shortened word with 3/4 letters, the year is printed with 4 digits (e.g. something like
   * "Aug 2020" in English or "Août 2020" in French).
   *
   * @param {?string} jsonDateTime
   * @returns {string} A formatted and localized month and year
   */
  printMonthYear: function(e) {
    if (typeof e != "string" || e === "")
      return "";
    const i = "default", s = { month: "short", year: "numeric" };
    return new Date(e).toLocaleDateString(i, s);
  }
};
(function(e) {
  if (e) {
    var i = {}, s = e.prototype.stopCallback;
    e.prototype.stopCallback = function(u, l, d, h) {
      var E = this;
      return E.paused ? !0 : i[d] || i[h] ? !1 : s.call(E, u, l, d);
    }, e.prototype.bindGlobal = function(u, l, d) {
      var h = this;
      if (h.bind(u, l, d), u instanceof Array) {
        for (var E = 0; E < u.length; E++)
          i[u[E]] = !0;
        return;
      }
      i[u] = !0;
    }, e.init();
  }
})(typeof Mousetrap < "u" ? Mousetrap : void 0);
const Se = {
  /** @type {?Photo} */
  photo: null,
  /** @type {Number} */
  nextTimeOutId: 0,
  _dom: {
    /**
     * Hidden image element with thumb variant of current image used
     * as a source for blurring.
     * @type {?HTMLImageElement}
     */
    bgImage: null,
    /**
     * Canvas element which shows the blurry variant of `bgImage`.
     * @type {?HTMLCanvasElement}
     */
    canvas: null,
    /**
     * Image element which displays the full-size image
     * @type {?HTMLImageElement}
     */
    image: null,
    /**
     * Div element which works as a shutter to blend over between
     * subsequent photos
     * @type {?HTMLDivElement}
     */
    shutter: null
  }
};
Se.isRunning = function() {
  return Se.nextTimeOutId !== 0;
};
Se.stop = function() {
  Se.nextTimeOutId !== 0 && clearTimeout(Se.nextTimeOutId), Se.photo = null, Se.nextTimeOutId = 0;
};
Se.initAndStart = function() {
  n.setMode("frame"), Se._dom.bgImage === null && (Se._dom.bgImage = document.getElementById("lychee_frame_bg_image"), Se._dom.bgImage.addEventListener("load", function() {
    StackBlur.image(Se._dom.bgImage, Se._dom.canvas, 20), Se._dom.canvas.style.width = null, Se._dom.canvas.style.height = null;
  })), Se._dom.canvas === null && (Se._dom.canvas = document.getElementById("lychee_frame_bg_canvas")), Se._dom.image === null && (Se._dom.image = document.getElementById("lychee_frame_image"), Se._dom.image.addEventListener("load", function() {
    Se._dom.shutter.classList.add("opened");
  })), Se._dom.shutter === null && (Se._dom.shutter = document.getElementById("lychee_frame_shutter")), Se.nextTimeOutId = setTimeout(() => Se.runPhotoLoop(), 0);
};
Se.runPhotoLoop = function() {
  const e = function(i) {
    Se.onRandomPhotoLoaded(i), Se.nextTimeOutId !== 0 && (Se.nextTimeOutId = setTimeout(() => Se.runPhotoLoop(), 1e3 * n.mod_frame_refresh));
  };
  Se._dom.shutter.classList.remove("opened"), Se.nextTimeOutId !== 0 && (Se.nextTimeOutId = setTimeout(() => K.post("Photo::getRandom", {}, e), 1e3));
};
Se.loadRandomPhoto = function(e, i) {
  K.post(
    "Photo::getRandom",
    {},
    /** @param {Photo} data */
    function(s) {
      Se.onRandomPhotoLoaded(s), e(s);
    },
    null,
    i
  );
};
Se.onRandomPhotoLoaded = function(e) {
  e.size_variants.thumb ? Se._dom.bgImage.src = e.size_variants.thumb.url : (Se._dom.bgImage.src = "", console.log("Thumb not found")), Se.photo = e, Se._dom.image.src = e.size_variants.medium !== null ? e.size_variants.medium.url : e.size_variants.original.url, Se._dom.image.srcset = e.size_variants.medium !== null && e.size_variants.medium2x !== null ? `${e.size_variants.medium.url} ${e.size_variants.medium.width}w, ${e.size_variants.medium2x.url} ${e.size_variants.medium2x.width}w` : "", Se.resize();
};
Se.resize = function() {
  if (Se.photo && Se._dom.image) {
    const e = Se.photo.size_variants.original.height > 0 ? Se.photo.size_variants.original.width / Se.photo.size_variants.original.height : 1, i = window.innerWidth / e > window.innerHeight ? window.innerHeight * e : window.innerWidth;
    Se._dom.image.sizes = "" + i + "px";
  }
};
p(document).ready(function() {
  const e = "click touchend";
  K.onError = n.handleAPIError, document.querySelector("body").style.display = null, H.bind(), F.bind(), n.imageview.on(e, ".arrow_wrapper--previous", () => S.previous(!1)).on(e, ".arrow_wrapper--next", () => S.next(!1)).on(e, "img, #livephoto", () => S.cycle_display_overlay()), Nt.addKeycodes({
    18: "ContextMenu",
    179: "play_pause",
    227: "rewind",
    228: "forward"
  }), Nt.bind(["l"], function() {
    return n.loginDialog(), !1;
  }).bind(["k"], function() {
    return tt.login(), !1;
  }).bind(["left"], function() {
    return P.photo() && (!P.header() || p("img#image").is(":focus") || p("img#livephoto").is(":focus") || p(":focus").length === 0) ? (p("#imageview a#previous").click(), !1) : !0;
  }).bind(["right"], function() {
    return P.photo() && (!P.header() || p("img#image").is(":focus") || p("img#livephoto").is(":focus") || p(":focus").length === 0) ? (p("#imageview a#next").click(), !1) : !0;
  }).bind(["u"], function() {
    if (!P.photo() && v.isUploadable() && !v.isTagAlbum())
      return p("#upload_files").click(), !1;
  }).bind(["n"], function() {
    if (!P.photo() && v.isUploadable())
      return v.add(), !1;
  }).bind(["s"], function() {
    if (P.photo() && v.isUploadable())
      return F.dom("#button_star").click(), !1;
    if (P.albums())
      return F.dom(".header__search").focus(), !1;
  }).bind(["r"], function() {
    if (v.isUploadable()) {
      if (P.album())
        return v.setTitle([v.getID()]), !1;
      if (P.photo())
        return S.setTitle([S.getID()]), !1;
    }
  }).bind(["h"], function() {
    return n.nsfw_visible = !n.nsfw_visible, v.apply_nsfw_filter(), !1;
  }).bind(["d"], function() {
    if (v.isUploadable()) {
      if (P.photo())
        return S.setDescription(S.getID()), !1;
      if (P.album())
        return v.setDescription(v.getID()), !1;
    }
  }).bind(["t"], function() {
    if (P.photo() && v.isUploadable())
      return S.editTags([S.getID()]), !1;
  }).bind(["i", "ContextMenu"], function() {
    if (!P.multiselect())
      return Q.toggle(!0), !1;
  }).bind(["command+backspace", "ctrl+backspace"], function() {
    if (v.isUploadable()) {
      if (P.photo() && j.isVisible() === !1)
        return S.delete([S.getID()]), !1;
      if (P.album() && j.isVisible() === !1)
        return v.delete([v.getID()]), !1;
    }
  }).bind(["command+a", "ctrl+a"], function() {
    if (P.album() && j.isVisible() === !1)
      return H.selectAll(), !1;
    if (P.albums() && j.isVisible() === !1)
      return H.selectAll(), !1;
  }).bind(["o"], function() {
    if (P.photo())
      return S.cycle_display_overlay(), !1;
  }).bind(["f"], function() {
    if (P.album() || P.photo())
      return n.fullscreenToggle(), !1;
  }), Nt.bind(["play_pause"], function() {
    let s = p("video");
    s.length !== 0 && (s[0].paused ? s[0].play() : s[0].pause());
  }), Nt.bindGlobal("enter", function() {
    if (j.isVisible() === !0) {
      if (p(".basicModal__content input").is(":focus"))
        return j.action(), !1;
    } else if (P.photo() && !n.header_auto_hide && (p("img#image").is(":focus") || p("img#livephoto").is(":focus") || p(":focus").length === 0))
      return P.header() ? F.hide() : F.show(), !1;
    let s = !1;
    if (p(":focus").each(function() {
      !p(this).is("input") && !p(this).is("textarea") && (p(this).click(), s = !0);
    }), s)
      return !1;
  }), Nt.bindGlobal(
    ["esc", "ContextMenu"],
    function() {
      return !1;
    },
    "keyup"
  ), Nt.bindGlobal(["esc", "command+up"], function() {
    return j.isVisible() === !0 ? j.cancel() : P.config() || P.leftMenu() ? _e.close() : P.contextMenu() ? ce.close() : P.photo() ? n.goto(v.getID()) : P.album() && !v.json.parent_id ? n.goto() : P.album() ? n.goto(v.getParentID()) : P.albums() && qe.json !== null ? qe.reset() : P.mapview() ? Ae.close() : P.albums() && n.enable_close_tab_on_esc && window.open("", "_self").close(), !1;
  }), p(document).on("touchend", "#imageview #image", function() {
    (typeof swipe.obj === null || Math.abs(swipe.offsetX) <= 5 && Math.abs(swipe.offsetY) <= 5) && (swipe.preventNextHeaderToggle || (P.header() ? F.hide() : F.show()), swipe.preventNextHeaderToggle = !1);
  }), p("#imageview").swipe().on("swipeStart", function() {
    P.photo() && swipe.start(p("#imageview #image, #imageview #livephoto"));
  }).swipe().on(
    "swipeMove",
    /** @param {jQuery.Event} e */
    function(s) {
      P.photo() && swipe.move(s.swipe);
    }
  ).swipe().on(
    "swipeEnd",
    /** @param {jQuery.Event} e */
    function(s) {
      P.photo() && swipe.stop(s.swipe, S.previous, S.next);
    }
  ), p(document).on(
    "click",
    ".album",
    /** @param {jQuery.Event} e */
    function(s) {
      H.albumClick(s, p(this));
    }
  ).on(
    "click",
    ".photo",
    /** @param {jQuery.Event} e */
    function(s) {
      H.photoClick(s, p(this));
    }
  ).on(
    "contextmenu",
    ".photo",
    /** @param {jQuery.Event} e */
    function(s) {
      H.photoContextMenu(s, p(this));
    }
  ).on(
    "contextmenu",
    ".album",
    /** @param {jQuery.Event} e */
    function(s) {
      H.albumContextMenu(s, p(this));
    }
  ).on("change", "#upload_files", function() {
    j.close(!1, () => upload.start.local(this.files));
  }).on("change", "#upload_track_file", function() {
    j.close(!1, () => upload.uploadTrack(this.files));
  }).on(
    "dragover",
    function() {
      return !1;
    },
    !1
  ).on(
    "drop",
    /** @param {jQuery.Event} e */
    function(s) {
      return v.isUploadable() && !P.contextMenu() && !j.isVisible() && !P.leftMenu() && !P.config() && (P.album() || P.albums()) && (s.originalEvent.dataTransfer.files.length > 0 ? upload.start.local(s.originalEvent.dataTransfer.files) : s.originalEvent.dataTransfer.getData("Text").length > 3 && !s.originalEvent.dataTransfer.getData("Text").startsWith("photo-") && // block drag and drop from albums/photos in web UI
      !s.originalEvent.dataTransfer.getData("Text").startsWith("album-") && upload.start.url(s.originalEvent.dataTransfer.getData("Text"))), !1;
    }
  ).on("click", ".image-leaflet-popup", function() {
    Ae.goto(p(this));
  }).on(
    "paste",
    /** @param {jQuery.Event} e */
    function(s) {
      if (s.originalEvent.clipboardData.items) {
        const u = s.originalEvent.clipboardData.items;
        let l = [];
        for (let d = 0; d < u.length; d++)
          (u[d].type.indexOf("image") !== -1 || u[d].type.indexOf("video") !== -1) && l.push(u[d].getAsFile());
        return l.length > 0 && v.isUploadable() && !P.contextMenu() && !j.isVisible() && !P.leftMenu() && !P.config() && (P.album() || P.albums()) ? (upload.start.local(l), !1) : !0;
      }
    }
  ), n.fullscreenAvailable() && p(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange", n.fullscreenUpdate), p("#sensitive_warning").on("click", M.album.nsfw_warning.next);
  const i = function() {
    if (P.albums() && !P.search() || P.album()) {
      let s = JSON.parse(localStorage.getItem("scroll"));
      (s == null || s.length < 1) && (s = {});
      const u = window.location.href, l = p("#lychee_view_container").scrollTop();
      s[u] = l, l < 1 && delete s[u], localStorage.setItem("scroll", JSON.stringify(s));
    }
  };
  p(window).on("resize", function() {
    P.photo() && M.photo.onresize(), Se.resize();
  }), p("#lychee_view_container").on("scroll", function() {
    i();
  }), n.init();
});
(function(e) {
  const i = function(s) {
    const u = this;
    this.el = e(s), this.pos = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, this.startTime = null, s.on("touchstart", function(l) {
      u.touchStart(l);
    }), s.on("touchmove", function(l) {
      u.touchMove(l);
    }), s.on("touchend", function() {
      u.swipeEnd();
    }), s.on("mousedown", function(l) {
      u.mouseDown(l);
    });
  };
  i.prototype = {
    touchStart: function(s) {
      const u = s.originalEvent.touches[0];
      this.swipeStart(s, u.pageX, u.pageY);
    },
    touchMove: function(s) {
      const u = s.originalEvent.touches[0];
      this.swipeMove(s, u.pageX, u.pageY);
    },
    mouseDown: function(s) {
      const u = this;
      this.swipeStart(s, s.pageX, s.pageY), this.el.on("mousemove", function(l) {
        u.mouseMove(l);
      }), this.el.on("mouseup", function() {
        u.mouseUp();
      });
    },
    mouseMove: function(s) {
      this.swipeMove(s, s.pageX, s.pageY);
    },
    mouseUp: function(s) {
      this.swipeEnd(s), this.el.off("mousemove"), this.el.off("mouseup");
    },
    swipeStart: function(s, u, l) {
      this.pos.start.x = u, this.pos.start.y = l, this.pos.end.x = u, this.pos.end.y = l, this.startTime = new Date().getTime(), this.trigger("swipeStart", s);
    },
    swipeMove: function(s, u, l) {
      this.pos.end.x = u, this.pos.end.y = l, this.trigger("swipeMove", s);
    },
    swipeEnd: function(s) {
      this.trigger("swipeEnd", s);
    },
    trigger: function(s, u) {
      let l = this, d = e.Event(s), h = l.pos.start.x - l.pos.end.x, E = l.pos.end.y - l.pos.start.y, C = Math.atan2(E, h), m = "up", W = Math.round(Math.sqrt(Math.pow(h, 2) + Math.pow(E, 2))), D = Math.round(C * 180 / Math.PI), he = Math.round(W / (new Date().getTime() - l.startTime) * 1e3);
      D < 0 && (D = 360 - Math.abs(D)), D <= 45 && D >= 0 || D <= 360 && D >= 315 ? m = "left" : D >= 135 && D <= 225 ? m = "right" : D > 45 && D < 135 && (m = "down"), d.originalEvent = u, d.swipe = {
        x: h,
        y: E,
        direction: m,
        distance: W,
        angle: D,
        speed: he
      }, e(l.el).trigger(d);
    }
  }, e.fn.swipe = function() {
    return new i(this), this;
  };
})(p);
window.lychee = n;
