var FullCalendar = (function (e) {
    "use strict";
    var A = function (e, t) {
        return (A =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
    };
    function t(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e;
        }
        A(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    }
    var I = function () {
        return (I =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
    };
    function h(e, t, n) {
        if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) (!r && o in t) || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return e.concat(r || t);
    }
    var b,
        L,
        U = {},
        W = [],
        V = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function F(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function B(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function z(e, t, n) {
        var r,
            o,
            i,
            a = arguments,
            s = {};
        for (i in t) "key" == i ? (r = t[i]) : "ref" == i ? (o = t[i]) : (s[i] = t[i]);
        if (3 < arguments.length) for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
        if ((null != n && (s.children = n), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return j(e, s, r, o, null);
    }
    function j(e, t, n, r, o) {
        e = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o ? ++b.__v : o };
        return null != b.vnode && b.vnode(e), e;
    }
    function G(e) {
        return e.children;
    }
    function D(e, t) {
        (this.props = e), (this.context = t);
    }
    function q(e, t) {
        if (null == t) return e.__ ? q(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? q(e) : null;
    }
    function Y(e) {
        ((!e.__d && (e.__d = !0) && le.push(e) && !Z.__r++) || L !== b.debounceRendering) && ((L = b.debounceRendering) || ue)(Z);
    }
    function Z() {
        for (var e; (Z.__r = le.length); )
            (e = le.sort(function (e, t) {
                return e.__v.__b - t.__v.__b;
            })),
                (le = []),
                e.some(function (e) {
                    var t, n, r, o, i;
                    e.__d &&
                        ((o = (r = (e = e).__v).__e),
                        (i = e.__P) &&
                            ((t = []),
                            ((n = F({}, r)).__v = r.__v + 1),
                            ne(i, r, n, e.__n, void 0 !== i.ownerSVGElement, null != r.__h ? [o] : null, t, null == o ? q(r) : o, r.__h),
                            re(t, r),
                            r.__e != o &&
                                (function e(t) {
                                    var n, r;
                                    if (null != (t = t.__) && null != t.__c) {
                                        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                                            if (null != (r = t.__k[n]) && null != r.__e) {
                                                t.__e = t.__c.base = r.__e;
                                                break;
                                            }
                                        return e(t);
                                    }
                                })(r)));
                });
    }
    function X(e, t, n, r, o, i, a, s, l, u) {
        var c,
            d,
            p,
            f,
            h,
            g,
            v,
            m = (r && r.__k) || W,
            y = m.length;
        for (n.__k = [], c = 0; c < t.length; c++)
            if (
                null !=
                (f = n.__k[c] =
                    null == (f = t[c]) || "boolean" == typeof f
                        ? null
                        : "string" == typeof f || "number" == typeof f || "bigint" == typeof f
                        ? j(null, f, null, null, f)
                        : Array.isArray(f)
                        ? j(G, { children: f }, null, null, null)
                        : 0 < f.__b
                        ? j(f.type, f.props, f.key, null, f.__v)
                        : f)
            ) {
                if (((f.__ = n), (f.__b = n.__b + 1), null === (p = m[c]) || (p && f.key == p.key && f.type === p.type))) m[c] = void 0;
                else
                    for (d = 0; d < y; d++) {
                        if ((p = m[d]) && f.key == p.key && f.type === p.type) {
                            m[d] = void 0;
                            break;
                        }
                        p = null;
                    }
                ne(e, f, (p = p || U), o, i, a, s, l, u),
                    (h = f.__e),
                    (d = f.ref) && p.ref != d && ((v = v || []), p.ref && v.push(p.ref, null, f), v.push(d, f.__c || h, f)),
                    null != h
                        ? (null == g && (g = h),
                          "function" == typeof f.type && null != f.__k && f.__k === p.__k
                              ? (f.__d = l = (function e(t, n, r) {
                                    var o, i;
                                    for (o = 0; o < t.__k.length; o++) (i = t.__k[o]) && ((i.__ = t), (n = "function" == typeof i.type ? e(i, n, r) : $(r, i, i, t.__k, i.__e, n)));
                                    return n;
                                })(f, l, e))
                              : (l = $(e, f, p, m, h, l)),
                          u || "option" !== n.type ? "function" == typeof n.type && (n.__d = l) : (e.value = ""))
                        : l && p.__e == l && l.parentNode != e && (l = q(p));
            }
        for (n.__e = g, c = y; c--; )
            null != m[c] &&
                ("function" == typeof n.type && null != m[c].__e && m[c].__e == n.__d && (n.__d = q(r, c + 1)),
                (function e(t, n, r) {
                    var o, i, a;
                    if ((b.unmount && b.unmount(t), !(o = t.ref) || (o.current && o.current !== t.__e) || oe(o, null, n), r || "function" == typeof t.type || (r = null != (i = t.__e)), (t.__e = t.__d = void 0), null != (o = t.__c))) {
                        if (o.componentWillUnmount)
                            try {
                                o.componentWillUnmount();
                            } catch (t) {
                                b.__e(t, n);
                            }
                        o.base = o.__P = null;
                    }
                    if ((o = t.__k)) for (a = 0; a < o.length; a++) o[a] && e(o[a], n, r);
                    null != i && B(i);
                })(m[c], m[c]));
        if (v) for (c = 0; c < v.length; c++) oe(v[c], v[++c], v[++c]);
    }
    function K(e, t) {
        return (
            (t = t || []),
            null != e &&
                "boolean" != typeof e &&
                (Array.isArray(e)
                    ? e.some(function (e) {
                          K(e, t);
                      })
                    : t.push(e)),
            t
        );
    }
    function $(e, t, n, r, o, i) {
        var a, s, l;
        if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
        else if (null == n || o != i || null == o.parentNode)
            e: if (null == i || i.parentNode !== e) e.appendChild(o), (a = null);
            else {
                for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 2) if (s == o) break e;
                e.insertBefore(o, i), (a = i);
            }
        return void 0 !== a ? a : o.nextSibling;
    }
    function J(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : (e[t] = null == n ? "" : "number" != typeof n || V.test(t) ? n : n + "px");
    }
    function Q(e, t, n, r, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if (("string" == typeof r && (e.style.cssText = r = ""), r)) for (t in r) (n && t in n) || J(e.style, t, "");
                if (n) for (t in n) (r && n[t] === r[t]) || J(e.style, t, n[t]);
            }
        else if ("o" === t[0] && "n" === t[1])
            (i = t !== (t = t.replace(/Capture$/, ""))),
                (t = (t.toLowerCase() in e ? t.toLowerCase() : t).slice(2)),
                e.l || (e.l = {}),
                (e.l[t + i] = n),
                n ? r || e.addEventListener(t, i ? te : ee, i) : e.removeEventListener(t, i ? te : ee, i);
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
                try {
                    e[t] = null == n ? "" : n;
                    break e;
                } catch (e) {}
            "function" != typeof n && (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1])) ? e.setAttribute(t, n) : e.removeAttribute(t));
        }
    }
    function ee(e) {
        this.l[e.type + !1](b.event ? b.event(e) : e);
    }
    function te(e) {
        this.l[e.type + !0](b.event ? b.event(e) : e);
    }
    function ne(e, t, n, r, o, i, a, s, l) {
        var u,
            c,
            d,
            p,
            f,
            h,
            g,
            v,
            m,
            y,
            E,
            S = t.type;
        if (void 0 === t.constructor) {
            null != n.__h && ((l = n.__h), (s = t.__e = n.__e), (t.__h = null), (i = [s])), (u = b.__b) && u(t);
            try {
                e: if ("function" == typeof S) {
                    if (
                        ((v = t.props),
                        (m = (u = S.contextType) && r[u.__c]),
                        (y = u ? (m ? m.props.value : u.__) : r),
                        n.__c
                            ? (g = (c = t.__c = n.__c).__ = c.__E)
                            : ("prototype" in S && S.prototype.render ? (t.__c = c = new S(v, y)) : ((t.__c = c = new D(v, y)), (c.constructor = S), (c.render = ie)),
                              m && m.sub(c),
                              (c.props = v),
                              c.state || (c.state = {}),
                              (c.context = y),
                              (c.__n = r),
                              (d = c.__d = !0),
                              (c.__h = [])),
                        null == c.__s && (c.__s = c.state),
                        null != S.getDerivedStateFromProps && (c.__s == c.state && (c.__s = F({}, c.__s)), F(c.__s, S.getDerivedStateFromProps(v, c.__s))),
                        (p = c.props),
                        (f = c.state),
                        d)
                    )
                        null == S.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(), null != c.componentDidMount && c.__h.push(c.componentDidMount);
                    else {
                        if (
                            (null == S.getDerivedStateFromProps && v !== p && null != c.componentWillReceiveProps && c.componentWillReceiveProps(v, y),
                            (!c.__e && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(v, c.__s, y)) || t.__v === n.__v)
                        ) {
                            (c.props = v),
                                (c.state = c.__s),
                                t.__v !== n.__v && (c.__d = !1),
                                ((c.__v = t).__e = n.__e),
                                (t.__k = n.__k),
                                t.__k.forEach(function (e) {
                                    e && (e.__ = t);
                                }),
                                c.__h.length && a.push(c);
                            break e;
                        }
                        null != c.componentWillUpdate && c.componentWillUpdate(v, c.__s, y),
                            null != c.componentDidUpdate &&
                                c.__h.push(function () {
                                    c.componentDidUpdate(p, f, h);
                                });
                    }
                    (c.context = y),
                        (c.props = v),
                        (c.state = c.__s),
                        (u = b.__r) && u(t),
                        (c.__d = !1),
                        (c.__v = t),
                        (c.__P = e),
                        (u = c.render(c.props, c.state, c.context)),
                        (c.state = c.__s),
                        null != c.getChildContext && (r = F(F({}, r), c.getChildContext())),
                        d || null == c.getSnapshotBeforeUpdate || (h = c.getSnapshotBeforeUpdate(p, f)),
                        (E = null != u && u.type === G && null == u.key ? u.props.children : u),
                        X(e, Array.isArray(E) ? E : [E], t, n, r, o, i, a, s, l),
                        (c.base = t.__e),
                        (t.__h = null),
                        c.__h.length && a.push(c),
                        g && (c.__E = c.__ = null),
                        (c.__e = !1);
                } else
                    null == i && t.__v === n.__v
                        ? ((t.__k = n.__k), (t.__e = n.__e))
                        : (t.__e = (function (e, t, n, r, o, i, a, s) {
                              var l,
                                  u,
                                  c,
                                  d,
                                  p = n.props,
                                  f = t.props,
                                  h = t.type,
                                  g = 0;
                              if (("svg" === h && (o = !0), null != i))
                                  for (; g < i.length; g++)
                                      if ((l = i[g]) && (l === e || (h ? l.localName == h : 3 == l.nodeType))) {
                                          (e = l), (i[g] = null);
                                          break;
                                      }
                              if (null == e) {
                                  if (null === h) return document.createTextNode(f);
                                  (e = o ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, f.is && f)), (i = null), (s = !1);
                              }
                              if (null === h) p === f || (s && e.data === f) || (e.data = f);
                              else {
                                  if (((i = i && W.slice.call(e.childNodes)), (u = (p = n.props || U).dangerouslySetInnerHTML), (c = f.dangerouslySetInnerHTML), !s)) {
                                      if (null != i) for (p = {}, d = 0; d < e.attributes.length; d++) p[e.attributes[d].name] = e.attributes[d].value;
                                      (!c && !u) || (c && ((u && c.__html == u.__html) || c.__html === e.innerHTML)) || (e.innerHTML = (c && c.__html) || "");
                                  }
                                  if (
                                      ((function (e, t, n, r, o) {
                                          for (var i in n) "children" === i || "key" === i || i in t || Q(e, i, null, n[i], r);
                                          for (i in t) (o && "function" != typeof t[i]) || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || Q(e, i, t[i], n[i], r);
                                      })(e, f, p, o, s),
                                      c)
                                  )
                                      t.__k = [];
                                  else if (((g = t.props.children), X(e, Array.isArray(g) ? g : [g], t, n, r, o && "foreignObject" !== h, i, a, e.firstChild, s), null != i)) for (g = i.length; g--; ) null != i[g] && B(i[g]);
                                  s ||
                                      ("value" in f && void 0 !== (g = f.value) && (g !== e.value || ("progress" === h && !g)) && Q(e, "value", g, p.value, !1),
                                      "checked" in f && void 0 !== (g = f.checked) && g !== e.checked && Q(e, "checked", g, p.checked, !1));
                              }
                              return e;
                          })(n.__e, t, n, r, o, i, a, l));
                (u = b.diffed) && u(t);
            } catch (e) {
                (t.__v = null), (!l && null == i) || ((t.__e = s), (t.__h = !!l), (i[i.indexOf(s)] = null)), b.__e(e, t, n);
            }
        }
    }
    function re(e, t) {
        b.__c && b.__c(t, e),
            e.some(function (t) {
                try {
                    (e = t.__h),
                        (t.__h = []),
                        e.some(function (e) {
                            e.call(t);
                        });
                } catch (e) {
                    b.__e(e, t.__v);
                }
            });
    }
    function oe(e, t, n) {
        try {
            "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
            b.__e(e, n);
        }
    }
    function ie(e, t, n) {
        return this.constructor(e, n);
    }
    function ae(e, t, n) {
        var r, o, i;
        b.__ && b.__(e, t),
            (o = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
            (i = []),
            ne(t, (e = ((!r && n) || t).__k = z(G, null, [e])), o || U, U, void 0 !== t.ownerSVGElement, !r && n ? [n] : !o && t.firstChild ? W.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r),
            re(i, e);
    }
    (b = {
        __e: function (e, t) {
            for (var n, r, o; (t = t.__); )
                if ((n = t.__c) && !n.__)
                    try {
                        if (((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)), null != n.componentDidCatch && (n.componentDidCatch(e), (o = n.__d)), o))
                            return (n.__E = n);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
        __v: 0,
    }),
        (D.prototype.setState = function (e, t) {
            var n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = F({}, this.state));
            (e = "function" == typeof e ? e(F({}, n), this.props) : e) && F(n, e), null != e && this.__v && (t && this.__h.push(t), Y(this));
        }),
        (D.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), Y(this));
        }),
        (D.prototype.render = G);
    var se,
        le = [],
        ue = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        ce = (Z.__r = 0),
        de = [],
        pe = b.__b,
        fe = b.__r,
        he = b.diffed,
        ge = b.__c,
        ve = b.unmount;
    function me() {
        de.forEach(function (t) {
            if (t.__P)
                try {
                    t.__H.__h.forEach(Ee), t.__H.__h.forEach(Se), (t.__H.__h = []);
                } catch (e) {
                    (t.__H.__h = []), b.__e(e, t.__v);
                }
        }),
            (de = []);
    }
    (b.__b = function (e) {
        pe && pe(e);
    }),
        (b.__r = function (e) {
            fe && fe(e);
            e = e.__c.__H;
            e && (e.__h.forEach(Ee), e.__h.forEach(Se), (e.__h = []));
        }),
        (b.diffed = function (e) {
            he && he(e);
            e = e.__c;
            e &&
                e.__H &&
                e.__H.__h.length &&
                ((1 !== de.push(e) && se === b.requestAnimationFrame) ||
                    (
                        (se = b.requestAnimationFrame) ||
                        function (e) {
                            function t() {
                                clearTimeout(r), ye && cancelAnimationFrame(n), setTimeout(e);
                            }
                            var n,
                                r = setTimeout(t, 100);
                            ye && (n = requestAnimationFrame(t));
                        }
                    )(me));
        }),
        (b.__c = function (e, n) {
            n.some(function (t) {
                try {
                    t.__h.forEach(Ee),
                        (t.__h = t.__h.filter(function (e) {
                            return !e.__ || Se(e);
                        }));
                } catch (e) {
                    n.some(function (e) {
                        e.__h && (e.__h = []);
                    }),
                        (n = []),
                        b.__e(e, t.__v);
                }
            }),
                ge && ge(e, n);
        }),
        (b.unmount = function (e) {
            ve && ve(e);
            var t = e.__c;
            if (t && t.__H)
                try {
                    t.__H.__.forEach(Ee);
                } catch (e) {
                    b.__e(e, t.__v);
                }
        });
    var ye = "function" == typeof requestAnimationFrame;
    function Ee(e) {
        "function" == typeof e.__c && e.__c();
    }
    function Se(e) {
        e.__c = e.__();
    }
    new D().isPureReactComponent = !0;
    var be = b.__b,
        De =
            ((b.__b = function (e) {
                e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), be && be(e);
            }),
            b.__e),
        Ce =
            ((b.__e = function (e, t, n) {
                if (e.then) for (var r, o = t; (o = o.__); ) if ((r = o.__c) && r.__c) return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
                De(e, t, n);
            }),
            b.unmount);
    function we(e) {
        var t = e.__.__c;
        return t && t.__e && t.__e(e);
    }
    (b.unmount = function (e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Ce && Ce(e);
    }),
        (new D().__c = function (e, t) {
            function n() {
                a || ((a = !0), (r.__R = null), i ? i(s) : s());
            }
            var r = t.__c,
                o = this,
                i = (null == o.t && (o.t = []), o.t.push(r), we(o.__v)),
                a = !1,
                s =
                    ((r.__R = n),
                    function () {
                        var e, t;
                        if (!--o.__u)
                            for (
                                o.state.__e &&
                                    ((e = o.state.__e),
                                    (o.__v.__k[0] = (function t(e, n, r) {
                                        return (
                                            e &&
                                                ((e.__v = null),
                                                (e.__k =
                                                    e.__k &&
                                                    e.__k.map(function (e) {
                                                        return t(e, n, r);
                                                    })),
                                                e.__c && e.__c.__P === n && (e.__e && r.insertBefore(e.__e, e.__d), (e.__c.__e = !0), (e.__c.__P = r))),
                                            e
                                        );
                                    })(e, e.__c.__P, e.__c.__O))),
                                    o.setState({ __e: (o.__b = null) });
                                (t = o.t.pop());

                            )
                                t.forceUpdate();
                    }),
                t = !0 === t.__h;
            o.__u++ || t || o.setState({ __e: (o.__b = o.__v.__k[0]) }), e.then(n, n);
        });
    function Re(e, t, n) {
        if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)))
            for (n = e.u; n; ) {
                for (; 3 < n.length; ) n.pop()();
                if (n[1] < n[0]) break;
                e.u = n = n[2];
            }
    }
    function Te(e) {
        return (
            (this.getChildContext = function () {
                return e.context;
            }),
            e.children
        );
    }
    function _e(e) {
        var n = this,
            t = e.i;
        (n.componentWillUnmount = function () {
            ae(null, n.l), (n.l = null), (n.i = null);
        }),
            n.i && n.i !== t && n.componentWillUnmount(),
            e.__v
                ? (n.l ||
                      ((n.i = t),
                      (n.l = {
                          nodeType: 1,
                          parentNode: t,
                          childNodes: [],
                          appendChild: function (e) {
                              this.childNodes.push(e), n.i.appendChild(e);
                          },
                          insertBefore: function (e, t) {
                              this.childNodes.push(e), n.i.appendChild(e);
                          },
                          removeChild: function (e) {
                              this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), n.i.removeChild(e);
                          },
                      })),
                  ae(z(Te, { context: n.context }, e.__v), n.l))
                : n.l && n.componentWillUnmount();
    }
    new D().__e = function (n) {
        var r = this,
            o = we(r.__v),
            i = r.o.get(n);
        return (
            i[0]++,
            function (e) {
                function t() {
                    r.props.revealOrder ? (i.push(e), Re(r, n, i)) : e();
                }
                o ? o(t) : t();
            }
        );
    };
    var ke = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
        xe = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        Me =
            ((D.prototype.isReactComponent = {}),
            ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
                Object.defineProperty(D.prototype, t, {
                    configurable: !0,
                    get: function () {
                        return this["UNSAFE_" + t];
                    },
                    set: function (e) {
                        Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
                    },
                });
            }),
            b.event);
    function Ie() {}
    function Pe() {
        return this.cancelBubble;
    }
    function Ne() {
        return this.defaultPrevented;
    }
    b.event = function (e) {
        return ((e = Me ? Me(e) : e).persist = Ie), (e.isPropagationStopped = Pe), (e.isDefaultPrevented = Ne), (e.nativeEvent = e);
    };
    var He,
        Oe = {
            configurable: !0,
            get: function () {
                return this.class;
            },
        },
        Ae = b.vnode,
        Le =
            ((b.vnode = function (e) {
                var t,
                    n = e.type,
                    r = e.props,
                    o = r;
                if ("string" == typeof n) {
                    for (var i in ((o = {}), r)) {
                        var a = r[i];
                        ("value" === i && "defaultValue" in r && null == a) ||
                            ("defaultValue" === i && "value" in r && null == r.value
                                ? (i = "value")
                                : "download" === i && !0 === a
                                ? (a = "")
                                : /ondoubleclick/i.test(i)
                                ? (i = "ondblclick")
                                : /^onchange(textarea|input)/i.test(i + n) && ((t = r.type), !("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(t))
                                ? (i = "oninput")
                                : /^on(Ani|Tra|Tou|BeforeInp)/.test(i)
                                ? (i = i.toLowerCase())
                                : xe.test(i)
                                ? (i = i.replace(/[A-Z0-9]/, "-$&").toLowerCase())
                                : null === a && (a = void 0),
                            (o[i] = a));
                    }
                    "select" == n &&
                        o.multiple &&
                        Array.isArray(o.value) &&
                        (o.value = K(r.children).forEach(function (e) {
                            e.props.selected = -1 != o.value.indexOf(e.props.value);
                        })),
                        "select" == n &&
                            null != o.defaultValue &&
                            (o.value = K(r.children).forEach(function (e) {
                                e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value;
                            })),
                        (e.props = o);
                }
                n && r.class != r.className && ((Oe.enumerable = "className" in r), null != r.className && (o.class = r.className), Object.defineProperty(o, "className", Oe)), (e.$$typeof = ke), Ae && Ae(e);
            }),
            b.__r),
        Ue =
            ((b.__r = function (e) {
                Le && Le(e);
            }),
            "object" == typeof performance && "function" == typeof performance.now && performance.now.bind(performance),
            "undefined" != typeof globalThis ? globalThis : window),
        We =
            (Ue.FullCalendarVDom
                ? console.warn("FullCalendar VDOM already loaded")
                : (Ue.FullCalendarVDom = {
                      Component: D,
                      createElement: z,
                      render: ae,
                      createRef: function () {
                          return { current: null };
                      },
                      Fragment: G,
                      createContext: function (e) {
                          var r,
                              e = ((e = {
                                  __c: (r = "__cC" + ce++),
                                  __: e,
                                  Consumer: function (e, t) {
                                      return e.children(t);
                                  },
                                  Provider: function (e) {
                                      var n, t;
                                      return (
                                          this.getChildContext ||
                                              ((n = []),
                                              (((t = {})[r] = this).getChildContext = function () {
                                                  return t;
                                              }),
                                              (this.shouldComponentUpdate = function (e) {
                                                  this.props.value !== e.value && n.some(Y);
                                              }),
                                              (this.sub = function (e) {
                                                  n.push(e);
                                                  var t = e.componentWillUnmount;
                                                  e.componentWillUnmount = function () {
                                                      n.splice(n.indexOf(e), 1), t && t.call(e);
                                                  };
                                              })),
                                          e.children
                                      );
                                  },
                              }).Provider.__ = e.Consumer.contextType = e),
                              o = e.Provider;
                          return (
                              (e.Provider = function () {
                                  var n,
                                      e = this,
                                      t = !this.getChildContext,
                                      r = o.apply(this, arguments);
                                  return (
                                      t &&
                                          ((n = []),
                                          (this.shouldComponentUpdate = function (t) {
                                              e.props.value !== t.value &&
                                                  n.forEach(function (e) {
                                                      (e.context = t.value), e.forceUpdate();
                                                  });
                                          }),
                                          (this.sub = function (e) {
                                              n.push(e);
                                              var t = e.componentWillUnmount;
                                              e.componentWillUnmount = function () {
                                                  n.splice(n.indexOf(e), 1), t && t.call(e);
                                              };
                                          })),
                                      r
                                  );
                              }),
                              e
                          );
                      },
                      createPortal: function (e, t) {
                          return z(_e, { __v: e, i: t });
                      },
                      flushToDom: function () {
                          var e = b.debounceRendering,
                              t = [];
                          for (
                              b.debounceRendering = function (e) {
                                  t.push(e);
                              },
                                  ae(z(We, {}), document.createElement("div"));
                              t.length;

                          )
                              t.shift()();
                          b.debounceRendering = e;
                      },
                      unmountComponentAtNode: function (e) {
                          ae(null, e);
                      },
                  }),
            t(Ve, (He = D)),
            (Ve.prototype.render = function () {
                return z("div", {});
            }),
            (Ve.prototype.componentDidMount = function () {
                this.setState({});
            }),
            Ve);
    function Ve() {
        return (null !== He && He.apply(this, arguments)) || this;
    }
    (Be.prototype.remove = function () {
        this.context.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: this.internalEventSource.sourceId });
    }),
        (Be.prototype.refetch = function () {
            this.context.dispatch({ type: "FETCH_EVENT_SOURCES", sourceIds: [this.internalEventSource.sourceId], isRefetch: !0 });
        }),
        Object.defineProperty(Be.prototype, "id", {
            get: function () {
                return this.internalEventSource.publicId;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(Be.prototype, "url", {
            get: function () {
                return this.internalEventSource.meta.url;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(Be.prototype, "format", {
            get: function () {
                return this.internalEventSource.meta.format;
            },
            enumerable: !1,
            configurable: !0,
        });
    var Fe = Be;
    function Be(e, t) {
        (this.context = e), (this.internalEventSource = t);
    }
    function ze(e) {
        e.parentNode && e.parentNode.removeChild(e);
    }
    function l(e, t) {
        if (e.closest) return e.closest(t);
        if (!document.documentElement.contains(e)) return null;
        do {
            if (je(e, t)) return e;
        } while (null !== (e = e.parentElement || e.parentNode) && 1 === e.nodeType);
        return null;
    }
    function je(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
    }
    function Ge(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1) for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1) r.push(i[a]);
        return r;
    }
    var qe = /(top|left|right|bottom|width|height)$/i;
    function Ye(e, t) {
        for (var n in t) Ze(e, n, t[n]);
    }
    function Ze(e, t, n) {
        null == n ? (e.style[t] = "") : "number" == typeof n && qe.test(t) ? (e.style[t] = n + "px") : (e.style[t] = n);
    }
    function Xe(e) {
        var t;
        return null != (t = null == (t = e.composedPath) ? void 0 : t.call(e)[0]) ? t : e.target;
    }
    function Ke(e) {
        return e.getRootNode ? e.getRootNode() : document;
    }
    var $e = 0;
    function Je() {
        return "fc-dom-" + ($e += 1);
    }
    function Qe(e) {
        e.preventDefault();
    }
    function et(e, t, n, r) {
        function o(e) {
            var t = l(e.target, i);
            t && a.call(t, e, t);
        }
        var i, a;
        (i = n), (a = r);
        return (
            e.addEventListener(t, o),
            function () {
                e.removeEventListener(t, o);
            }
        );
    }
    var tt = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
    function nt(t, n) {
        function r(e) {
            n(e),
                tt.forEach(function (e) {
                    t.removeEventListener(e, r);
                });
        }
        tt.forEach(function (e) {
            t.addEventListener(e, r);
        });
    }
    function rt(e) {
        return I({ onClick: e }, ot(e));
    }
    function ot(t) {
        return {
            tabIndex: 0,
            onKeyDown: function (e) {
                ("Enter" !== e.key && " " !== e.key) || (t(e), e.preventDefault());
            },
        };
    }
    var it = 0;
    function at() {
        return String((it += 1));
    }
    function st() {
        document.body.classList.add("fc-not-allowed");
    }
    function lt() {
        document.body.classList.remove("fc-not-allowed");
    }
    function ut(e) {
        e.classList.add("fc-unselectable"), e.addEventListener("selectstart", Qe);
    }
    function ct(e) {
        e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", Qe);
    }
    function dt(e) {
        e.addEventListener("contextmenu", Qe);
    }
    function pt(e) {
        e.removeEventListener("contextmenu", Qe);
    }
    function ft(e) {
        var t,
            n,
            r = [],
            o = [];
        for ("string" == typeof e ? (o = e.split(/\s*,\s*/)) : "function" == typeof e ? (o = [e]) : Array.isArray(e) && (o = e), t = 0; t < o.length; t += 1)
            "string" == typeof (n = o[t]) ? r.push("-" === n.charAt(0) ? { field: n.substring(1), order: -1 } : { field: n, order: 1 }) : "function" == typeof n && r.push({ func: n });
        return r;
    }
    function ht(e, t, n) {
        for (var r, o = 0; o < n.length; o += 1) if ((r = gt(e, t, n[o]))) return r;
        return 0;
    }
    function gt(e, t, n) {
        return n.func ? n.func(e, t) : vt(e[n.field], t[n.field]) * (n.order || 1);
    }
    function vt(e, t) {
        return e || t ? (null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t) : 0;
    }
    function mt(e, t) {
        e = String(e);
        return "000".substr(0, t - e.length) + e;
    }
    function yt(e, t, n) {
        return "function" == typeof e
            ? e.apply(void 0, t)
            : "string" == typeof e
            ? t.reduce(function (e, t, n) {
                  return e.replace("$" + n, t || "");
              }, e)
            : n;
    }
    function Et(e, t) {
        return e - t;
    }
    function St(e) {
        return e % 1 == 0;
    }
    function bt(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
            n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (n) return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width;
        throw new Error("needs fc-scrollgrid-shrink-cushion className");
    }
    var Dt = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    function Ct(e, t) {
        e = Nt(e);
        return (e[2] += 7 * t), o(e);
    }
    function d(e, t) {
        e = Nt(e);
        return (e[2] += t), o(e);
    }
    function wt(e, t) {
        e = Nt(e);
        return (e[6] += t), o(e);
    }
    function Rt(e, t) {
        return Tt(e, t) / 7;
    }
    function Tt(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5;
    }
    function _t(e, t) {
        var n = m(e),
            r = m(t);
        return { years: 0, months: 0, days: Math.round(Tt(n, r)), milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()) };
    }
    function kt(e, t) {
        e = xt(e, t);
        return null !== e && e % 7 == 0 ? e / 7 : null;
    }
    function xt(e, t) {
        return Ot(e) === Ot(t) ? Math.round(Tt(e, t)) : null;
    }
    function m(e) {
        return o([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
    }
    function Mt(e, t, n, r) {
        (t = o([
            t,
            0,
            1 +
                (function (e, t, n) {
                    n = 7 + t - n;
                    return (-(7 + o([e, 0, n]).getUTCDay() - t) % 7) + n - 1;
                })(t, n, r),
        ])),
            (n = m(e)),
            (r = Math.round(Tt(t, n)));
        return Math.floor(r / 7) + 1;
    }
    function It(e) {
        return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()];
    }
    function Pt(e) {
        return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0);
    }
    function Nt(e) {
        return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()];
    }
    function o(e) {
        return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e));
    }
    function Ht(e) {
        return !isNaN(e.valueOf());
    }
    function Ot(e) {
        return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds();
    }
    function At(e, t, n, r) {
        return { instanceId: at(), defId: e, range: t, forcedStartTzo: null == n ? null : n, forcedEndTzo: null == r ? null : r };
    }
    var Lt = Object.prototype.hasOwnProperty;
    function Ut(e, t) {
        var n = {};
        if (t)
            for (var r in t) {
                for (var o = [], i = e.length - 1; 0 <= i; --i) {
                    var a = e[i][r];
                    if ("object" == typeof a && a) o.unshift(a);
                    else if (void 0 !== a) {
                        n[r] = a;
                        break;
                    }
                }
                o.length && (n[r] = Ut(o));
            }
        for (i = e.length - 1; 0 <= i; --i) {
            var s,
                l = e[i];
            for (s in l) s in n || (n[s] = l[s]);
        }
        return n;
    }
    function Wt(e, t) {
        var n,
            r = {};
        for (n in e) t(e[n], n) && (r[n] = e[n]);
        return r;
    }
    function P(e, t) {
        var n,
            r = {};
        for (n in e) r[n] = t(e[n], n);
        return r;
    }
    function Vt(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) t[r[n]] = !0;
        return t;
    }
    function Ft(e) {
        var t,
            n = [];
        for (t in e) n.push(e[t]);
        return n;
    }
    function y(e, t) {
        if (e === t) return !0;
        for (var n in e) if (Lt.call(e, n) && !(n in t)) return !1;
        for (var n in t) if (Lt.call(t, n) && e[n] !== t[n]) return !1;
        return !0;
    }
    function Bt(e, t) {
        var n,
            r = [];
        for (n in e) !Lt.call(e, n) || n in t || r.push(n);
        for (n in t) Lt.call(t, n) && e[n] !== t[n] && r.push(n);
        return r;
    }
    function zt(e, t, n) {
        if ((void 0 === n && (n = {}), e === t)) return !0;
        for (var r in t) if (!(r in e && ((o = e[r]), (i = t[r]), (a = n[r]), o === i || !0 === a || (a && a(o, i))))) return !1;
        var o, i, a;
        for (r in e) if (!(r in t)) return !1;
        return !0;
    }
    function jt(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a);
        }
        return o;
    }
    function Gt(e, t, n) {
        var r,
            o = n.dateEnv,
            i = n.pluginHooks,
            a = n.options,
            s = e.defs,
            l = Wt((l = e.instances), function (e) {
                return !s[e.defId].recurringDef;
            });
        for (r in s) {
            var u = s[r];
            if (u.recurringDef)
                for (
                    var c = u.recurringDef.duration,
                        d = 0,
                        p = (function (e, t, n, r, o) {
                            o = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, { start: r.subtract(n.start, t), end: n.end }, r);
                            return (o = e.allDay ? o.map(m) : o);
                        })(u, (c = c || (u.allDay ? a.defaultAllDayEventDuration : a.defaultTimedEventDuration)), t, o, i.recurringTypes);
                    d < p.length;
                    d++
                ) {
                    var f = p[d],
                        f = At(r, { start: f, end: o.add(f, c) });
                    l[f.instanceId] = f;
                }
        }
        return { defs: s, instances: l };
    }
    var qt = ["years", "months", "days", "milliseconds"],
        Yt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    function E(e, t) {
        var n, r;
        return "string" == typeof e
            ? (r = Yt.exec(e))
                ? {
                      years: 0,
                      months: 0,
                      days: (n = r[1] ? -1 : 1) * (r[2] ? parseInt(r[2], 10) : 0),
                      milliseconds: n * (60 * (r[3] ? parseInt(r[3], 10) : 0) * 60 * 1e3 + 60 * (r[4] ? parseInt(r[4], 10) : 0) * 1e3 + 1e3 * (r[5] ? parseInt(r[5], 10) : 0) + (r[6] ? parseInt(r[6], 10) : 0)),
                  }
                : null
            : "object" == typeof e && e
            ? Zt(e)
            : "number" == typeof e
            ? Zt((((n = {})[t || "milliseconds"] = e), n))
            : null;
    }
    function Zt(e) {
        var t = {
                years: e.years || e.year || 0,
                months: e.months || e.month || 0,
                days: e.days || e.day || 0,
                milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0),
            },
            e = e.weeks || e.week;
        return e && ((t.days += 7 * e), (t.specifiedWeeks = !0)), t;
    }
    function Xt(e, t) {
        return { years: e.years + t.years, months: e.months + t.months, days: e.days + t.days, milliseconds: e.milliseconds + t.milliseconds };
    }
    function Kt(e, t) {
        return { years: e.years * t, months: e.months * t, days: e.days * t, milliseconds: e.milliseconds * t };
    }
    function $t(e) {
        return p(e) / 864e5;
    }
    function p(e) {
        return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds;
    }
    function Jt(e, t) {
        for (var n = null, r = 0; r < qt.length; r += 1) {
            var o = qt[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!St(i) || (null !== n && n !== i)) return null;
                n = i;
            } else if (e[o]) return null;
        }
        return n;
    }
    function Qt(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) return { unit: "millisecond", value: t };
            if (t % 6e4 != 0) return { unit: "second", value: t / 1e3 };
            if (t % 36e5 != 0) return { unit: "minute", value: t / 6e4 };
            if (t) return { unit: "hour", value: t / 36e5 };
        }
        return e.days
            ? e.specifiedWeeks && e.days % 7 == 0
                ? { unit: "week", value: e.days / 7 }
                : { unit: "day", value: e.days }
            : e.months
            ? { unit: "month", value: e.months }
            : e.years
            ? { unit: "year", value: e.years }
            : { unit: "millisecond", value: 0 };
    }
    function en(e, t, n) {
        void 0 === n && (n = !1);
        e = (e = e.toISOString()).replace(".000", "");
        return 10 < (e = n ? e.replace("T00:00:00Z", "") : e).length && (null == t ? (e = e.replace("Z", "")) : 0 !== t && (e = e.replace("Z", rn(t, !0)))), e;
    }
    function tn(e) {
        return e.toISOString().replace(/T.*$/, "");
    }
    function nn(e) {
        return mt(e.getUTCHours(), 2) + ":" + mt(e.getUTCMinutes(), 2) + ":" + mt(e.getUTCSeconds(), 2);
    }
    function rn(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
            e = Math.abs(e),
            r = Math.floor(e / 60),
            e = Math.round(e % 60);
        return t ? n + mt(r, 2) + ":" + mt(e, 2) : "GMT" + n + r + (e ? ":" + mt(e, 2) : "");
    }
    function on(e, t, n) {
        if (e === t) return !0;
        var r,
            o = e.length;
        if (o !== t.length) return !1;
        for (r = 0; r < o; r += 1) if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
        return !0;
    }
    function S(r, o, i) {
        var a, s;
        return function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return a ? on(a, t) || (i && i(s), (e = r.apply(this, t)), (o && o(e, s)) || (s = e)) : (s = r.apply(this, t)), (a = t), s;
        };
    }
    function an(n, r, o) {
        var i,
            a,
            s = this;
        return function (e) {
            var t;
            return i ? y(i, e) || (o && o(a), (t = n.call(s, e)), (r && r(t, a)) || (a = t)) : (a = n.call(s, e)), (i = e), a;
        };
    }
    var sn = { week: 3, separator: 0, omitZeroMinute: 0, meridiem: 0, omitCommas: 0 },
        ln = { timeZoneName: 7, era: 6, year: 5, month: 4, day: 2, weekday: 2, hour: 1, minute: 1, second: 1 },
        un = /\s*([ap])\.?m\.?/i,
        cn = /,/g,
        dn = /\s+/g,
        pn = /\u200e/g,
        fn = /UTC|GMT/,
        hn =
            ((gn.prototype.format = function (e, t) {
                return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e);
            }),
            (gn.prototype.formatRange = function (e, t, n, r) {
                var o = this.standardDateProps,
                    i = this.extendedSettings,
                    a =
                        ((s = e.marker),
                        (l = t.marker),
                        (a = n.calendarSystem).getMarkerYear(s) !== a.getMarkerYear(l) ? 5 : a.getMarkerMonth(s) !== a.getMarkerMonth(l) ? 4 : a.getMarkerDay(s) !== a.getMarkerDay(l) ? 2 : Ot(s) !== Ot(l) ? 1 : 0);
                if (!a) return this.format(e, n);
                var s = a,
                    l = (!(1 < s) || ("numeric" !== o.year && "2-digit" !== o.year) || ("numeric" !== o.month && "2-digit" !== o.month) || ("numeric" !== o.day && "2-digit" !== o.day) || (s = 1), this.format(e, n)),
                    a = this.format(t, n);
                if (l === a) return l;
                (o = vn(
                    (function (e, t) {
                        var n,
                            r = {};
                        for (n in e) (n in ln && !(ln[n] <= t)) || (r[n] = e[n]);
                        return r;
                    })(o, s),
                    i,
                    n
                )),
                    (s = o(e)),
                    (e = o(t)),
                    (o = (function (e, t, n, r) {
                        for (var o = 0; o < e.length; ) {
                            var i = e.indexOf(t, o);
                            if (-1 === i) break;
                            for (var a = e.substr(0, i), o = i + t.length, s = e.substr(o), l = 0; l < n.length; ) {
                                var u = n.indexOf(r, l);
                                if (-1 === u) break;
                                var c = n.substr(0, u),
                                    l = u + r.length,
                                    u = n.substr(l);
                                if (a === c && s === u) return { before: a, after: s };
                            }
                        }
                        return null;
                    })(l, s, a, e)),
                    (t = i.separator || r || n.defaultSeparator || "");
                return o ? o.before + s + t + e + o.after : l + t + a;
            }),
            (gn.prototype.getLargestUnit = function () {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return "year";
                    case 4:
                        return "month";
                    case 3:
                        return "week";
                    case 2:
                        return "day";
                    default:
                        return "time";
                }
            }),
            gn);
    function gn(e) {
        var t,
            n = {},
            r = {},
            o = 0;
        for (t in e) t in sn ? ((r[t] = e[t]), (o = Math.max(sn[t], o))) : ((n[t] = e[t]), t in ln && (o = Math.max(ln[t], o)));
        (this.standardDateProps = n), (this.extendedSettings = r), (this.severity = o), (this.buildFormattingFunc = S(vn));
    }
    function vn(e, a, s) {
        var l,
            u,
            c,
            d,
            p,
            t = Object.keys(e).length;
        return 1 === t && "short" === e.timeZoneName
            ? function (e) {
                  return rn(e.timeZoneOffset);
              }
            : 0 === t && a.week
            ? function (e) {
                  return (
                      (e = s.computeWeekNumber(e.marker)),
                      (t = s.weekText),
                      (n = s.weekTextLong),
                      (r = s.locale),
                      (o = a.week),
                      (i = []),
                      "long" === o ? i.push(n) : ("short" !== o && "narrow" !== o) || i.push(t),
                      ("long" !== o && "short" !== o) || i.push(" "),
                      i.push(r.simpleNumberFormat.format(e)),
                      "rtl" === r.options.direction && i.reverse(),
                      i.join("")
                  );
                  var t, n, r, o, i;
              }
            : ((u = a),
              (c = s),
              (l = I({}, (l = e))),
              (u = I({}, u)),
              (t = u),
              (e = l).timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit")),
              "long" === e.timeZoneName && (e.timeZoneName = "short"),
              t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute,
              (l.timeZone = "UTC"),
              (p = new Intl.DateTimeFormat(c.locale.codes, l)),
              u.omitZeroMinute && (delete (e = I({}, l)).minute, (d = new Intl.DateTimeFormat(c.locale.codes, e))),
              function (e) {
                  var t,
                      n,
                      r,
                      o,
                      i,
                      a = e.marker;
                  return (
                      (a = (d && !a.getUTCMinutes() ? d : p).format(a)),
                      (e = e),
                      (t = l),
                      (n = u),
                      (r = c),
                      (a = a.replace(pn, "")),
                      "short" === t.timeZoneName &&
                          ((t = a),
                          (o = "UTC" === r.timeZone || null == e.timeZoneOffset ? "UTC" : rn(e.timeZoneOffset)),
                          (i = !1),
                          (t = t.replace(fn, function () {
                              return (i = !0), o;
                          })),
                          i || (t += " " + o),
                          (a = t)),
                      n.omitCommas && (a = a.replace(cn, "").trim()),
                      n.omitZeroMinute && (a = a.replace(":00", "")),
                      !1 === n.meridiem
                          ? (a = a.replace(un, "").trim())
                          : "narrow" === n.meridiem
                          ? (a = a.replace(un, function (e, t) {
                                return t.toLocaleLowerCase();
                            }))
                          : "short" === n.meridiem
                          ? (a = a.replace(un, function (e, t) {
                                return t.toLocaleLowerCase() + "m";
                            }))
                          : "lowercase" === n.meridiem &&
                            (a = a.replace(un, function (e) {
                                return e.toLocaleLowerCase();
                            })),
                      (a = a.replace(dn, " ")).trim()
                  );
              });
    }
    function mn(e, t) {
        t = t.markerToArray(e.marker);
        return { marker: e.marker, timeZoneOffset: e.timeZoneOffset, array: t, year: t[0], month: t[1], day: t[2], hour: t[3], minute: t[4], second: t[5], millisecond: t[6] };
    }
    function yn(e, t, n, r) {
        e = mn(e, n.calendarSystem);
        return { date: e, start: e, end: t ? mn(t, n.calendarSystem) : null, timeZone: n.timeZone, localeCodes: n.locale.codes, defaultSeparator: r || n.defaultSeparator };
    }
    (Dn.prototype.format = function (e, t, n) {
        return t.cmdFormatter(this.cmdStr, yn(e, null, t, n));
    }),
        (Dn.prototype.formatRange = function (e, t, n, r) {
            return n.cmdFormatter(this.cmdStr, yn(e, t, n, r));
        });
    var En = Dn,
        Sn =
            ((bn.prototype.format = function (e, t, n) {
                return this.func(yn(e, null, t, n));
            }),
            (bn.prototype.formatRange = function (e, t, n, r) {
                return this.func(yn(e, t, n, r));
            }),
            bn);
    function bn(e) {
        this.func = e;
    }
    function Dn(e) {
        this.cmdStr = e;
    }
    function a(e) {
        return "object" == typeof e && e ? new hn(e) : "string" == typeof e ? new En(e) : "function" == typeof e ? new Sn(e) : null;
    }
    var Cn = {
            navLinkDayClick: n,
            navLinkWeekClick: n,
            duration: E,
            bootstrapFontAwesome: n,
            buttonIcons: n,
            customButtons: n,
            defaultAllDayEventDuration: E,
            defaultTimedEventDuration: E,
            nextDayThreshold: E,
            scrollTime: E,
            scrollTimeReset: Boolean,
            slotMinTime: E,
            slotMaxTime: E,
            dayPopoverFormat: a,
            slotDuration: E,
            snapDuration: E,
            headerToolbar: n,
            footerToolbar: n,
            defaultRangeSeparator: String,
            titleRangeSeparator: String,
            forceEventDuration: Boolean,
            dayHeaders: Boolean,
            dayHeaderFormat: a,
            dayHeaderClassNames: n,
            dayHeaderContent: n,
            dayHeaderDidMount: n,
            dayHeaderWillUnmount: n,
            dayCellClassNames: n,
            dayCellContent: n,
            dayCellDidMount: n,
            dayCellWillUnmount: n,
            initialView: String,
            aspectRatio: Number,
            weekends: Boolean,
            weekNumberCalculation: n,
            weekNumbers: Boolean,
            weekNumberClassNames: n,
            weekNumberContent: n,
            weekNumberDidMount: n,
            weekNumberWillUnmount: n,
            editable: Boolean,
            viewClassNames: n,
            viewDidMount: n,
            viewWillUnmount: n,
            nowIndicator: Boolean,
            nowIndicatorClassNames: n,
            nowIndicatorContent: n,
            nowIndicatorDidMount: n,
            nowIndicatorWillUnmount: n,
            showNonCurrentDates: Boolean,
            lazyFetching: Boolean,
            startParam: String,
            endParam: String,
            timeZoneParam: String,
            timeZone: String,
            locales: n,
            locale: n,
            themeSystem: String,
            dragRevertDuration: Number,
            dragScroll: Boolean,
            allDayMaintainDuration: Boolean,
            unselectAuto: Boolean,
            dropAccept: n,
            eventOrder: ft,
            eventOrderStrict: Boolean,
            handleWindowResize: Boolean,
            windowResizeDelay: Number,
            longPressDelay: Number,
            eventDragMinDistance: Number,
            expandRows: Boolean,
            height: n,
            contentHeight: n,
            direction: String,
            weekNumberFormat: a,
            eventResizableFromStart: Boolean,
            displayEventTime: Boolean,
            displayEventEnd: Boolean,
            weekText: String,
            weekTextLong: String,
            progressiveEventRendering: Boolean,
            businessHours: n,
            initialDate: n,
            now: n,
            eventDataTransform: n,
            stickyHeaderDates: n,
            stickyFooterScrollbar: n,
            viewHeight: n,
            defaultAllDay: Boolean,
            eventSourceFailure: n,
            eventSourceSuccess: n,
            eventDisplay: String,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventOverlap: n,
            eventConstraint: n,
            eventAllow: n,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String,
            eventClassNames: n,
            eventContent: n,
            eventDidMount: n,
            eventWillUnmount: n,
            selectConstraint: n,
            selectOverlap: n,
            selectAllow: n,
            droppable: Boolean,
            unselectCancel: String,
            slotLabelFormat: n,
            slotLaneClassNames: n,
            slotLaneContent: n,
            slotLaneDidMount: n,
            slotLaneWillUnmount: n,
            slotLabelClassNames: n,
            slotLabelContent: n,
            slotLabelDidMount: n,
            slotLabelWillUnmount: n,
            dayMaxEvents: n,
            dayMaxEventRows: n,
            dayMinWidth: Number,
            slotLabelInterval: E,
            allDayText: String,
            allDayClassNames: n,
            allDayContent: n,
            allDayDidMount: n,
            allDayWillUnmount: n,
            slotMinWidth: Number,
            navLinks: Boolean,
            eventTimeFormat: a,
            rerenderDelay: Number,
            moreLinkText: n,
            moreLinkHint: n,
            selectMinDistance: Number,
            selectable: Boolean,
            selectLongPressDelay: Number,
            eventLongPressDelay: Number,
            selectMirror: Boolean,
            eventMaxStack: Number,
            eventMinHeight: Number,
            eventMinWidth: Number,
            eventShortHeight: Number,
            slotEventOverlap: Boolean,
            plugins: n,
            firstDay: Number,
            dayCount: Number,
            dateAlignment: String,
            dateIncrement: E,
            hiddenDays: n,
            monthMode: Boolean,
            fixedWeekCount: Boolean,
            validRange: n,
            visibleRange: n,
            titleFormat: n,
            eventInteractive: Boolean,
            noEventsText: String,
            viewHint: n,
            navLinkHint: n,
            closeHint: String,
            timeHint: String,
            eventHint: String,
            moreLinkClick: n,
            moreLinkClassNames: n,
            moreLinkContent: n,
            moreLinkDidMount: n,
            moreLinkWillUnmount: n,
        },
        wn = {
            eventDisplay: "auto",
            defaultRangeSeparator: " - ",
            titleRangeSeparator: " – ",
            defaultTimedEventDuration: "01:00:00",
            defaultAllDayEventDuration: { day: 1 },
            forceEventDuration: !1,
            nextDayThreshold: "00:00:00",
            dayHeaders: !0,
            initialView: "",
            aspectRatio: 1.35,
            headerToolbar: { start: "title", center: "", end: "today prev,next" },
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "local",
            editable: !1,
            nowIndicator: !1,
            scrollTime: "06:00:00",
            scrollTimeReset: !0,
            slotMinTime: "00:00:00",
            slotMaxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timeZoneParam: "timeZone",
            timeZone: "local",
            locales: [],
            locale: "",
            themeSystem: "standard",
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "start,-duration,allDay,title",
            dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5,
            expandRows: !1,
            navLinks: !1,
            selectable: !1,
            eventMinHeight: 15,
            eventMinWidth: 30,
            eventShortHeight: 30,
        },
        Rn = {
            datesSet: n,
            eventsSet: n,
            eventAdd: n,
            eventChange: n,
            eventRemove: n,
            windowResize: n,
            eventClick: n,
            eventMouseEnter: n,
            eventMouseLeave: n,
            select: n,
            unselect: n,
            loading: n,
            _unmount: n,
            _beforeprint: n,
            _afterprint: n,
            _noEventDrop: n,
            _noEventResize: n,
            _resize: n,
            _scrollRequest: n,
        },
        Tn = { buttonText: n, buttonHints: n, views: n, plugins: n, initialEvents: n, events: n, eventSources: n },
        _n = { headerToolbar: kn, footerToolbar: kn, buttonText: kn, buttonHints: kn, buttonIcons: kn };
    function kn(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t ? y(e, t) : e === t;
    }
    var xn = { type: String, component: n, buttonText: String, buttonTextKey: String, dateProfileGeneratorClass: n, usesMinMaxTime: Boolean, classNames: n, content: n, didMount: n, willUnmount: n };
    function Mn(e) {
        return Ut(e, _n);
    }
    function In(e, t) {
        var n,
            r = {},
            o = {};
        for (n in t) n in e && (r[n] = t[n](e[n]));
        for (n in e) n in t || (o[n] = e[n]);
        return { refined: r, extra: o };
    }
    function n(e) {
        return e;
    }
    function Pn(e, t, n, r) {
        for (var o = { defs: {}, instances: {} }, i = Zn(n), a = 0, s = e; a < s.length; a++) {
            var l = qn(s[a], t, n, r, i);
            l && Nn(l, o);
        }
        return o;
    }
    function Nn(e, t) {
        return ((t = void 0 === t ? { defs: {}, instances: {} } : t).defs[e.def.defId] = e.def), e.instance && (t.instances[e.instance.instanceId] = e.instance), t;
    }
    function Hn(e, t) {
        var n,
            t = e.instances[t];
        return t
            ? ((n = e.defs[t.defId]),
              ((e = An(e, function (e) {
                  return Boolean(n.groupId && n.groupId === e.groupId);
              })).defs[n.defId] = n),
              (e.instances[t.instanceId] = t),
              e)
            : { defs: {}, instances: {} };
    }
    function On(e, t) {
        return { defs: I(I({}, e.defs), t.defs), instances: I(I({}, e.instances), t.instances) };
    }
    function An(e, t) {
        var n = Wt(e.defs, t),
            t = Wt(e.instances, function (e) {
                return n[e.defId];
            });
        return { defs: n, instances: t };
    }
    function Ln(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [];
    }
    var Un = {
            display: String,
            editable: Boolean,
            startEditable: Boolean,
            durationEditable: Boolean,
            constraint: n,
            overlap: n,
            allow: n,
            className: Ln,
            classNames: Ln,
            color: String,
            backgroundColor: String,
            borderColor: String,
            textColor: String,
        },
        Wn = { display: null, startEditable: null, durationEditable: null, constraints: [], overlap: null, allows: [], backgroundColor: "", borderColor: "", textColor: "", classNames: [] };
    function Vn(e, t) {
        (n = e.constraint), (t = t);
        var n,
            t = Array.isArray(n) ? Pn(n, null, t, !0) : "object" == typeof n && n ? Pn([n], null, t, !0) : null != n ? String(n) : null;
        return {
            display: e.display || null,
            startEditable: null != e.startEditable ? e.startEditable : e.editable,
            durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
            constraints: null != t ? [t] : [],
            overlap: null != e.overlap ? e.overlap : null,
            allows: null != e.allow ? [e.allow] : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || []),
        };
    }
    function Fn(e) {
        return e.reduce(Bn, Wn);
    }
    function Bn(e, t) {
        return {
            display: (null != t.display ? t : e).display,
            startEditable: (null != t.startEditable ? t : e).startEditable,
            durationEditable: (null != t.durationEditable ? t : e).durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: ("boolean" == typeof t.overlap ? t : e).overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames),
        };
    }
    var zn = { id: String, groupId: String, title: String, url: String, interactive: Boolean },
        jn = { start: n, end: n, date: n, allDay: Boolean },
        Gn = I(I(I({}, zn), jn), { extendedProps: n });
    function qn(e, t, n, r, o) {
        void 0 === o && (o = Zn(n));
        var e = Yn(e, n, o),
            o = e.refined,
            e = e.extra,
            i = (i = (i = null) == (i = t ? t.defaultAllDay : i) ? n.options.defaultAllDay : i),
            a = (function (e, t, n, r) {
                for (var o = 0; o < r.length; o += 1) {
                    var i,
                        a = r[o].parse(e, n);
                    if (a) return { allDay: (i = null == (i = e.allDay) && null == (i = t) && null == (i = a.allDayGuess) ? !1 : i), duration: a.duration, typeData: a.typeData, typeId: o };
                }
                return null;
            })(o, i, n.dateEnv, n.pluginHooks.recurringTypes);
        if (a) return ((s = Xn(o, e, t ? t.sourceId : "", a.allDay, Boolean(a.duration), n)).recurringDef = { typeId: a.typeId, typeData: a.typeData, duration: a.duration }), { def: s, instance: null };
        var s,
            a = (function (e, t, n, r) {
                var o,
                    i = e.allDay,
                    a = null,
                    s = !1,
                    l = null,
                    u = null != e.start ? e.start : e.date;
                if ((u = n.dateEnv.createMarkerMeta(u))) a = u.marker;
                else if (!r) return null;
                return (
                    null != e.end && (o = n.dateEnv.createMarkerMeta(e.end)),
                    (i = null == i ? (null != t ? t : (!u || u.isTimeUnspecified) && (!o || o.isTimeUnspecified)) : i) && a && (a = m(a)),
                    o && ((l = o.marker), i && (l = m(l)), a && l <= a && (l = null)),
                    l ? (s = !0) : r || ((s = n.options.forceEventDuration || !1), (l = n.dateEnv.add(a, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration))),
                    { allDay: i, hasEnd: s, range: { start: a, end: l }, forcedStartTzo: u ? u.forcedTzo : null, forcedEndTzo: o ? o.forcedTzo : null }
                );
            })(o, i, n, r);
        return a ? { def: (s = Xn(o, e, t ? t.sourceId : "", a.allDay, a.hasEnd, n)), instance: At(s.defId, a.range, a.forcedStartTzo, a.forcedEndTzo) } : null;
    }
    function Yn(e, t, n) {
        return In(e, (n = void 0 === n ? Zn(t) : n));
    }
    function Zn(e) {
        return I(I(I({}, Un), Gn), e.pluginHooks.eventRefiners);
    }
    function Xn(e, t, n, r, o, i) {
        for (
            var a = {
                    title: e.title || "",
                    groupId: e.groupId || "",
                    publicId: e.id || "",
                    url: e.url || "",
                    recurringDef: null,
                    defId: at(),
                    sourceId: n,
                    allDay: r,
                    hasEnd: o,
                    interactive: e.interactive,
                    ui: Vn(e, i),
                    extendedProps: I(I({}, e.extendedProps || {}), t),
                },
                s = 0,
                l = i.pluginHooks.eventDefMemberAdders;
            s < l.length;
            s++
        ) {
            var u = l[s];
            I(a, u(e));
        }
        return Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a;
    }
    function Kn(e) {
        var t = Math.floor(Tt(e.start, e.end)) || 1,
            e = m(e.start);
        return { start: e, end: d(e, t) };
    }
    function $n(e, t) {
        void 0 === t && (t = E(0));
        var n,
            r = null,
            o = null;
        return e.end && ((o = m(e.end)), (n = e.end.valueOf() - o.valueOf()) && n >= p(t) && (o = d(o, 1))), e.start && ((r = m(e.start)), o && o <= r && (o = d(r, 1))), { start: r, end: o };
    }
    function Jn(e) {
        e = $n(e);
        return 1 < Tt(e.start, e.end);
    }
    function Qn(e, t, n, r) {
        return "year" === r ? E(n.diffWholeYears(e, t), "year") : "month" === r ? E(n.diffWholeMonths(e, t), "month") : _t(e, t);
    }
    function er(e, t) {
        var n,
            r,
            o = [],
            i = t.start;
        for (e.sort(tr), n = 0; n < e.length; n += 1) (r = e[n]).start > i && o.push({ start: i, end: r.start }), r.end > i && (i = r.end);
        return i < t.end && o.push({ start: i, end: t.end }), o;
    }
    function tr(e, t) {
        return e.start.valueOf() - t.start.valueOf();
    }
    function nr(e, t) {
        var n = e.start,
            e = e.end,
            r = null;
        return (
            null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
            null != t.end && (e = null === e ? t.end : new Date(Math.min(e.valueOf(), t.end.valueOf()))),
            (r = null === n || null === e || n < e ? { start: n, end: e } : r)
        );
    }
    function rr(e, t) {
        return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf());
    }
    function or(e, t) {
        return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end);
    }
    function ir(e, t) {
        return (null === e.start || (null !== t.start && t.start >= e.start)) && (null === e.end || (null !== t.end && t.end <= e.end));
    }
    function ar(e, t) {
        return (null === e.start || t >= e.start) && (null === e.end || t < e.end);
    }
    function sr(e, t, n, r) {
        var o,
            i,
            a,
            s = {},
            l = {},
            u = {},
            c = [],
            d = [],
            p = dr(e.defs, t);
        for (a in e.defs) "inverse-background" === (h = p[(E = e.defs[a]).defId]).display && (E.groupId ? ((s[E.groupId] = []), u[E.groupId] || (u[E.groupId] = E)) : (l[a] = []));
        for (o in e.instances) {
            var f = e.instances[o],
                h = p[(E = e.defs[f.defId]).defId],
                g = f.range,
                g = !E.allDay && r ? $n(g, r) : g,
                v = nr(g, n);
            v &&
                ("inverse-background" === h.display
                    ? (E.groupId ? s[E.groupId] : l[f.defId]).push(v)
                    : "none" !== h.display &&
                      ("background" === h.display ? c : d).push({ def: E, ui: h, instance: f, range: v, isStart: g.start && g.start.valueOf() === v.start.valueOf(), isEnd: g.end && g.end.valueOf() === v.end.valueOf() }));
        }
        for (i in s)
            for (var m = 0, y = er(s[i], n); m < y.length; m++) {
                var E,
                    S = y[m],
                    h = p[(E = u[i]).defId];
                c.push({ def: E, ui: h, instance: null, range: S, isStart: !1, isEnd: !1 });
            }
        for (a in l) for (var b = 0, D = er(l[a], n); b < D.length; b++) (S = D[b]), c.push({ def: e.defs[a], ui: p[a], instance: null, range: S, isStart: !1, isEnd: !1 });
        return { bg: c, fg: d };
    }
    function lr(e) {
        return "background" === e.ui.display || "inverse-background" === e.ui.display;
    }
    function ur(e, t) {
        e.fcSeg = t;
    }
    function cr(e) {
        return e.fcSeg || e.parentNode.fcSeg || null;
    }
    function dr(e, t) {
        return P(e, function (e) {
            return pr(e, t);
        });
    }
    function pr(e, t) {
        var n = [];
        return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Fn(n);
    }
    function fr(e, n) {
        e = e.map(hr);
        return (
            e.sort(function (e, t) {
                return ht(e, t, n);
            }),
            e.map(function (e) {
                return e._seg;
            })
        );
    }
    function hr(e) {
        var t = e.eventRange,
            n = t.def,
            t = (t.instance || t).range,
            r = t.start ? t.start.valueOf() : 0,
            t = t.end ? t.end.valueOf() : 0;
        return I(I(I({}, n.extendedProps), n), { id: n.publicId, start: r, end: t, duration: t - r, allDay: Number(n.allDay), _seg: e });
    }
    function gr(e, t) {
        for (var n = t.pluginHooks.isDraggableTransformers, e = e.eventRange, r = e.def, o = e.ui, i = o.startEditable, a = 0, s = n; a < s.length; a++) i = (0, s[a])(i, r, o, t);
        return i;
    }
    function vr(e, t) {
        return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart;
    }
    function mr(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable;
    }
    function yr(e, t, n, r, o, i, a) {
        var s = n.dateEnv,
            n = n.options,
            l = n.displayEventTime,
            n = n.displayEventEnd,
            u = e.eventRange.def,
            c = e.eventRange.instance,
            r = (null == l && (l = !1 !== r), null == n && (n = !1 !== o), c.range.start),
            o = c.range.end,
            d = i || e.start || e.eventRange.range.start,
            e = a || e.end || e.eventRange.range.end,
            p = m(r).valueOf() === m(d).valueOf(),
            f = m(wt(o, -1)).valueOf() === m(wt(e, -1)).valueOf();
        return l && !u.allDay && (p || f)
            ? ((d = p ? r : d), (e = f ? o : e), n && u.hasEnd ? s.formatRange(d, e, t, { forcedStartTzo: i ? null : c.forcedStartTzo, forcedEndTzo: a ? null : c.forcedEndTzo }) : s.format(d, t, { forcedTzo: i ? null : c.forcedStartTzo }))
            : "";
    }
    function Er(e, t, n) {
        e = e.eventRange.range;
        return { isPast: e.end < (n || t.start), isFuture: e.start >= (n || t.end), isToday: t && ar(t, e.start) };
    }
    function Sr(e) {
        var t = ["fc-event"];
        return (
            e.isMirror && t.push("fc-event-mirror"),
            e.isDraggable && t.push("fc-event-draggable"),
            (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"),
            e.isDragging && t.push("fc-event-dragging"),
            e.isResizing && t.push("fc-event-resizing"),
            e.isSelected && t.push("fc-event-selected"),
            e.isStart && t.push("fc-event-start"),
            e.isEnd && t.push("fc-event-end"),
            e.isPast && t.push("fc-event-past"),
            e.isToday && t.push("fc-event-today"),
            e.isFuture && t.push("fc-event-future"),
            t
        );
    }
    function br(e) {
        return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString();
    }
    function Dr(e, t) {
        var e = e.eventRange,
            n = e.def,
            r = e.instance,
            e = n.url;
        if (e) return { href: e };
        var o = t.emitter,
            e = t.options.eventInteractive;
        return (e = null == e && null == (e = n.interactive) ? Boolean(o.hasHandlers("eventClick")) : e)
            ? ot(function (e) {
                  o.trigger("eventClick", { el: e.target, event: new N(t, n, r), jsEvent: e, view: t.viewApi });
              })
            : {};
    }
    var Cr = { start: n, end: n, allDay: Boolean };
    function wr(e, t) {
        return (
            rr(e.range, t.range) &&
            e.allDay === t.allDay &&
            (function (e, t) {
                for (var n in t) if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
                for (var n in e) if (!(n in t)) return !1;
                return !0;
            })(e, t)
        );
    }
    function Rr(e, t, n) {
        return I(I({}, Tr(e, t, n)), { timeZone: t.timeZone });
    }
    function Tr(e, t, n) {
        return { start: t.toDate(e.start), end: t.toDate(e.end), startStr: t.formatIso(e.start, { omitTime: n }), endStr: t.formatIso(e.end, { omitTime: n }) };
    }
    function _r(e, t, n) {
        n.emitter.trigger("select", I(I({}, kr(e, n)), { jsEvent: t ? t.origEvent : null, view: n.viewApi || n.calendarApi.view }));
    }
    function kr(e, t) {
        for (var n, r, o = {}, i = 0, a = t.pluginHooks.dateSpanTransforms; i < a.length; i++) {
            var s = a[i];
            I(o, s(e, t));
        }
        return I(o, ((r = t.dateEnv), I(I({}, Tr((n = e).range, r, n.allDay)), { allDay: n.allDay }))), o;
    }
    function xr(e, t, n) {
        var r = n.dateEnv,
            n = n.options;
        return (t = e ? ((t = m(t)), r.add(t, n.defaultAllDayEventDuration)) : r.add(t, n.defaultTimedEventDuration));
    }
    function Mr(e, t, n, r) {
        var o,
            i,
            a,
            s,
            l,
            u,
            c,
            d,
            p,
            f = dr(e.defs, t),
            h = { defs: {}, instances: {} };
        for (o in e.defs) {
            var g = e.defs[o];
            h.defs[o] = (function (e, t, n, r) {
                var o = n.standardProps || {},
                    i = (null == o.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (o.hasEnd = !0), I(I(I({}, e), o), { ui: I(I({}, e.ui), o.ui) }));
                n.extendedProps && (i.extendedProps = I(I({}, i.extendedProps), n.extendedProps));
                for (var a = 0, s = r.pluginHooks.eventDefMutationAppliers; a < s.length; a++) (0, s[a])(i, n, r);
                return !i.hasEnd && r.options.forceEventDuration && (i.hasEnd = !0), i;
            })(g, f[o], n, r);
        }
        for (i in e.instances) {
            var v = e.instances[i],
                g = h.defs[v.defId];
            h.instances[i] =
                ((a = g),
                (s = f[(v = v).defId]),
                (l = n),
                (p = d = c = void 0),
                (c = (u = r).dateEnv),
                (d = l.standardProps && !0 === l.standardProps.allDay),
                (p = l.standardProps && !1 === l.standardProps.hasEnd),
                (v = I({}, v)),
                d && (v.range = Kn(v.range)),
                l.datesDelta && s.startEditable && (v.range = { start: c.add(v.range.start, l.datesDelta), end: c.add(v.range.end, l.datesDelta) }),
                l.startDelta && s.durationEditable && (v.range = { start: c.add(v.range.start, l.startDelta), end: v.range.end }),
                l.endDelta && s.durationEditable && (v.range = { start: v.range.start, end: c.add(v.range.end, l.endDelta) }),
                p && (v.range = { start: v.range.start, end: xr(a.allDay, v.range.start, u) }),
                a.allDay && (v.range = { start: m(v.range.start), end: m(v.range.end) }),
                v.range.end < v.range.start && (v.range.end = xr(a.allDay, v.range.start, u)),
                v);
        }
        return h;
    }
    Object.defineProperty(Nr.prototype, "calendar", {
        get: function () {
            return this.getCurrentData().calendarApi;
        },
        enumerable: !1,
        configurable: !0,
    }),
        Object.defineProperty(Nr.prototype, "title", {
            get: function () {
                return this.getCurrentData().viewTitle;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(Nr.prototype, "activeStart", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(Nr.prototype, "activeEnd", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(Nr.prototype, "currentStart", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(Nr.prototype, "currentEnd", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
            },
            enumerable: !1,
            configurable: !0,
        }),
        (Nr.prototype.getOption = function (e) {
            return this.getCurrentData().options[e];
        });
    var Ir = Nr,
        Pr = { id: String, defaultAllDay: Boolean, url: String, format: String, events: n, eventDataTransform: n, success: n, failure: n };
    function Nr(e, t, n) {
        (this.type = e), (this.getCurrentData = t), (this.dateEnv = n);
    }
    function Hr(e, o, t) {
        if ((void 0 === t && (t = Or(o)), "string" == typeof e ? (n = { url: e }) : "function" == typeof e || Array.isArray(e) ? (n = { events: e }) : "object" == typeof e && e && (n = e), n)) {
            var n = In(n, t),
                t = n.refined,
                n = n.extra,
                r = (function (e) {
                    for (var t = o.pluginHooks.eventSourceDefs, n = t.length - 1; 0 <= n; --n) {
                        var r = t[n].parseMeta(e);
                        if (r) return { sourceDefId: n, meta: r };
                    }
                    return null;
                })(t);
            if (r)
                return {
                    _raw: e,
                    isFetching: !1,
                    latestFetchId: "",
                    fetchRange: null,
                    defaultAllDay: t.defaultAllDay,
                    eventDataTransform: t.eventDataTransform,
                    success: t.success,
                    failure: t.failure,
                    publicId: t.id || "",
                    sourceId: at(),
                    sourceDefId: r.sourceDefId,
                    meta: r.meta,
                    ui: Vn(t, o),
                    extendedProps: n,
                };
        }
        return null;
    }
    function Or(e) {
        return I(I(I({}, Un), Pr), e.pluginHooks.eventSourceRefiners);
    }
    function Ar(e, t) {
        return null == (e = "function" == typeof e ? e() : e) ? t.createNowMarker() : t.createMarker(e);
    }
    (r.prototype.getCurrentData = function () {
        return this.currentDataManager.getCurrentData();
    }),
        (r.prototype.dispatch = function (e) {
            return this.currentDataManager.dispatch(e);
        }),
        Object.defineProperty(r.prototype, "view", {
            get: function () {
                return this.getCurrentData().viewApi;
            },
            enumerable: !1,
            configurable: !0,
        }),
        (r.prototype.batchRendering = function (e) {
            e();
        }),
        (r.prototype.updateSize = function () {
            this.trigger("_resize", !0);
        }),
        (r.prototype.setOption = function (e, t) {
            this.dispatch({ type: "SET_OPTION", optionName: e, rawOptionValue: t });
        }),
        (r.prototype.getOption = function (e) {
            return this.currentDataManager.currentCalendarOptionsInput[e];
        }),
        (r.prototype.getAvailableLocaleCodes = function () {
            return Object.keys(this.getCurrentData().availableRawLocales);
        }),
        (r.prototype.on = function (e, t) {
            var n = this.currentDataManager;
            n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '" + e + "'");
        }),
        (r.prototype.off = function (e, t) {
            this.currentDataManager.emitter.off(e, t);
        }),
        (r.prototype.trigger = function (e) {
            for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            (t = this.currentDataManager.emitter).trigger.apply(t, h([e], n));
        }),
        (r.prototype.changeView = function (t, n) {
            var r = this;
            this.batchRendering(function () {
                var e;
                r.unselect(),
                    n
                        ? n.start && n.end
                            ? (r.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: t }), r.dispatch({ type: "SET_OPTION", optionName: "visibleRange", rawOptionValue: n }))
                            : ((e = r.getCurrentData().dateEnv), r.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: t, dateMarker: e.createMarker(n) }))
                        : r.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: t });
            });
        }),
        (r.prototype.zoomTo = function (e, t) {
            (t = t || "day"),
                (t = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t)),
                this.unselect(),
                t ? this.dispatch({ type: "CHANGE_VIEW_TYPE", viewType: t.type, dateMarker: e }) : this.dispatch({ type: "CHANGE_DATE", dateMarker: e });
        }),
        (r.prototype.getUnitViewSpec = function (e) {
            var t,
                n,
                r,
                o = this.getCurrentData(),
                i = o.viewSpecs,
                o = o.toolbarConfig,
                a = [].concat(o.header ? o.header.viewsWithButtons : [], o.footer ? o.footer.viewsWithButtons : []);
            for (r in i) a.push(r);
            for (t = 0; t < a.length; t += 1) if ((n = i[a[t]]) && n.singleUnit === e) return n;
            return null;
        }),
        (r.prototype.prev = function () {
            this.unselect(), this.dispatch({ type: "PREV" });
        }),
        (r.prototype.next = function () {
            this.unselect(), this.dispatch({ type: "NEXT" });
        }),
        (r.prototype.prevYear = function () {
            var e = this.getCurrentData();
            this.unselect(), this.dispatch({ type: "CHANGE_DATE", dateMarker: e.dateEnv.addYears(e.currentDate, -1) });
        }),
        (r.prototype.nextYear = function () {
            var e = this.getCurrentData();
            this.unselect(), this.dispatch({ type: "CHANGE_DATE", dateMarker: e.dateEnv.addYears(e.currentDate, 1) });
        }),
        (r.prototype.today = function () {
            var e = this.getCurrentData();
            this.unselect(), this.dispatch({ type: "CHANGE_DATE", dateMarker: Ar(e.calendarOptions.now, e.dateEnv) });
        }),
        (r.prototype.gotoDate = function (e) {
            var t = this.getCurrentData();
            this.unselect(), this.dispatch({ type: "CHANGE_DATE", dateMarker: t.dateEnv.createMarker(e) });
        }),
        (r.prototype.incrementDate = function (e) {
            var t = this.getCurrentData(),
                e = E(e);
            e && (this.unselect(), this.dispatch({ type: "CHANGE_DATE", dateMarker: t.dateEnv.add(t.currentDate, e) }));
        }),
        (r.prototype.getDate = function () {
            var e = this.getCurrentData();
            return e.dateEnv.toDate(e.currentDate);
        }),
        (r.prototype.formatDate = function (e, t) {
            var n = this.getCurrentData().dateEnv;
            return n.format(n.createMarker(e), a(t));
        }),
        (r.prototype.formatRange = function (e, t, n) {
            var r = this.getCurrentData().dateEnv;
            return r.formatRange(r.createMarker(e), r.createMarker(t), a(n), n);
        }),
        (r.prototype.formatIso = function (e, t) {
            var n = this.getCurrentData().dateEnv;
            return n.formatIso(n.createMarker(e), { omitTime: t });
        }),
        (r.prototype.select = function (e, t) {
            (e = null == t ? (null != e.start ? e : { start: e, end: null }) : { start: e, end: t }),
                (t = this.getCurrentData()),
                (e = (function (e, t, n) {
                    (o = t),
                        (e = In(e, Cr)),
                        (r = e.refined),
                        (e = e.extra),
                        (i = r.start ? o.createMarkerMeta(r.start) : null),
                        (o = r.end ? o.createMarkerMeta(r.end) : null),
                        null == (r = r.allDay) && (r = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified));
                    var r,
                        o,
                        i = I({ range: { start: i ? i.marker : null, end: o ? o.marker : null }, allDay: r }, e);
                    if (!(o = i.range).start) return null;
                    if (!o.end) {
                        if (null == n) return null;
                        o.end = t.add(o.start, n);
                    }
                    return i;
                })(e, t.dateEnv, E({ days: 1 })));
            e && (this.dispatch({ type: "SELECT_DATES", selection: e }), _r(e, null, t));
        }),
        (r.prototype.unselect = function (e) {
            var t = this.getCurrentData();
            t.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), (t = t).emitter.trigger("unselect", { jsEvent: e ? e.origEvent : null, view: t.viewApi || t.calendarApi.view }));
        }),
        (r.prototype.addEvent = function (e, t) {
            if (e instanceof N) return (r = e._def), (o = e._instance), this.getCurrentData().eventStore.defs[r.defId] || (this.dispatch({ type: "ADD_EVENTS", eventStore: Nn({ def: r, instance: o }) }), this.triggerEventAdd(e)), e;
            var n,
                r = this.getCurrentData();
            if (t instanceof Fe) n = t.internalEventSource;
            else if ("boolean" == typeof t) t && (n = Ft(r.eventSources)[0]);
            else if (null != t) {
                var o = this.getEventSourceById(t);
                if (!o) return console.warn('Could not find an event source with ID "' + t + '"'), null;
                n = o.internalEventSource;
            }
            t = qn(e, n, r, !1);
            return t ? ((o = new N(r, t.def, t.def.recurringDef ? null : t.instance)), this.dispatch({ type: "ADD_EVENTS", eventStore: Nn(t) }), this.triggerEventAdd(o), o) : null;
        }),
        (r.prototype.triggerEventAdd = function (e) {
            var t = this;
            this.getCurrentData().emitter.trigger("eventAdd", {
                event: e,
                relatedEvents: [],
                revert: function () {
                    t.dispatch({ type: "REMOVE_EVENTS", eventStore: Lr(e) });
                },
            });
        }),
        (r.prototype.getEventById = function (e) {
            var t,
                n = this.getCurrentData(),
                r = n.eventStore,
                o = r.defs,
                i = r.instances;
            for (t in ((e = String(e)), o)) {
                var a = o[t];
                if (a.publicId === e) {
                    if (a.recurringDef) return new N(n, a, null);
                    for (var s in i) {
                        s = i[s];
                        if (s.defId === a.defId) return new N(n, a, s);
                    }
                }
            }
            return null;
        }),
        (r.prototype.getEvents = function () {
            var e = this.getCurrentData();
            return Ur(e.eventStore, e);
        }),
        (r.prototype.removeAllEvents = function () {
            this.dispatch({ type: "REMOVE_ALL_EVENTS" });
        }),
        (r.prototype.getEventSources = function () {
            var e,
                t = this.getCurrentData(),
                n = t.eventSources,
                r = [];
            for (e in n) r.push(new Fe(t, n[e]));
            return r;
        }),
        (r.prototype.getEventSourceById = function (e) {
            var t,
                n = this.getCurrentData(),
                r = n.eventSources;
            for (t in ((e = String(e)), r)) if (r[t].publicId === e) return new Fe(n, r[t]);
            return null;
        }),
        (r.prototype.addEventSource = function (e) {
            var t = this.getCurrentData();
            if (e instanceof Fe) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [e.internalEventSource] }), e;
            e = Hr(e, t);
            return e ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [e] }), new Fe(t, e)) : null;
        }),
        (r.prototype.removeAllEventSources = function () {
            this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
        }),
        (r.prototype.refetchEvents = function () {
            this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
        }),
        (r.prototype.scrollToTime = function (e) {
            e = E(e);
            e && this.trigger("_scrollRequest", { time: e });
        });
    var Ue = r,
        N =
            ((s.prototype.setProp = function (e, t) {
                var n, r;
                e in jn
                    ? console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.")
                    : "id" === e
                    ? ((t = zn[e](t)), this.mutate({ standardProps: { publicId: t } }))
                    : e in zn
                    ? ((t = zn[e](t)), this.mutate({ standardProps: (((r = {})[e] = t), r) }))
                    : e in Un
                    ? ((r = Un[e](t)), (r = "color" === e ? { backgroundColor: t, borderColor: t } : "editable" === e ? { startEditable: t, durationEditable: t } : (((n = {})[e] = t), n)), this.mutate({ standardProps: { ui: r } }))
                    : console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.");
            }),
            (s.prototype.setExtendedProp = function (e, t) {
                var n;
                this.mutate({ extendedProps: (((n = {})[e] = t), n) });
            }),
            (s.prototype.setStart = function (e, t) {
                void 0 === t && (t = {});
                var n = this._context.dateEnv,
                    e = n.createMarker(e);
                e && this._instance && ((e = Qn(this._instance.range.start, e, n, t.granularity)), t.maintainDuration ? this.mutate({ datesDelta: e }) : this.mutate({ startDelta: e }));
            }),
            (s.prototype.setEnd = function (e, t) {
                void 0 === t && (t = {});
                var n,
                    r = this._context.dateEnv;
                (null == e || (n = r.createMarker(e))) && this._instance && (n ? ((e = Qn(this._instance.range.end, n, r, t.granularity)), this.mutate({ endDelta: e })) : this.mutate({ standardProps: { hasEnd: !1 } }));
            }),
            (s.prototype.setDates = function (e, t, n) {
                var r,
                    o = this._context.dateEnv,
                    i = { allDay: (n = void 0 === n ? {} : n).allDay },
                    e = o.createMarker(e);
                e &&
                    (null == t || (r = o.createMarker(t))) &&
                    this._instance &&
                    ((t = this._instance.range),
                    (e = Qn((t = !0 === n.allDay ? Kn(t) : t).start, e, o, n.granularity)),
                    r
                        ? ((t = Qn(t.end, r, o, n.granularity)),
                          e.years === t.years && e.months === t.months && e.days === t.days && e.milliseconds === t.milliseconds
                              ? this.mutate({ datesDelta: e, standardProps: i })
                              : this.mutate({ startDelta: e, endDelta: t, standardProps: i }))
                        : ((i.hasEnd = !1), this.mutate({ datesDelta: e, standardProps: i })));
            }),
            (s.prototype.moveStart = function (e) {
                e = E(e);
                e && this.mutate({ startDelta: e });
            }),
            (s.prototype.moveEnd = function (e) {
                e = E(e);
                e && this.mutate({ endDelta: e });
            }),
            (s.prototype.moveDates = function (e) {
                e = E(e);
                e && this.mutate({ datesDelta: e });
            }),
            (s.prototype.setAllDay = function (e, t) {
                var n = { allDay: e },
                    t = (t = void 0 === t ? {} : t).maintainDuration;
                null == t && (t = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = t), this.mutate({ standardProps: n });
            }),
            (s.prototype.formatRange = function (e) {
                var t = this._context.dateEnv,
                    n = this._instance,
                    e = a(e);
                return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, e, { forcedStartTzo: n.forcedStartTzo, forcedEndTzo: n.forcedEndTzo }) : t.format(n.range.start, e, { forcedTzo: n.forcedStartTzo });
            }),
            (s.prototype.mutate = function (e) {
                var t,
                    n,
                    r,
                    o,
                    i = this._instance;
                i &&
                    ((t = this._def),
                    (n = this._context),
                    (o = Mr(
                        (o = Hn((r = n.getCurrentData().eventStore), i.instanceId)),
                        { "": { display: "", startEditable: !0, durationEditable: !0, constraints: [], overlap: null, allows: [], backgroundColor: "", borderColor: "", textColor: "", classNames: [] } },
                        e,
                        n
                    )),
                    (e = new s(n, t, i)),
                    (this._def = o.defs[t.defId]),
                    (this._instance = o.instances[i.instanceId]),
                    n.dispatch({ type: "MERGE_EVENTS", eventStore: o }),
                    n.emitter.trigger("eventChange", {
                        oldEvent: e,
                        event: this,
                        relatedEvents: Ur(o, n, i),
                        revert: function () {
                            n.dispatch({ type: "RESET_EVENTS", eventStore: r });
                        },
                    }));
            }),
            (s.prototype.remove = function () {
                var e = this._context,
                    t = Lr(this);
                e.dispatch({ type: "REMOVE_EVENTS", eventStore: t }),
                    e.emitter.trigger("eventRemove", {
                        event: this,
                        relatedEvents: [],
                        revert: function () {
                            e.dispatch({ type: "MERGE_EVENTS", eventStore: t });
                        },
                    });
            }),
            Object.defineProperty(s.prototype, "source", {
                get: function () {
                    var e = this._def.sourceId;
                    return e ? new Fe(this._context, this._context.getCurrentData().eventSources[e]) : null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "start", {
                get: function () {
                    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "end", {
                get: function () {
                    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "startStr", {
                get: function () {
                    var e = this._instance;
                    return e ? this._context.dateEnv.formatIso(e.range.start, { omitTime: this._def.allDay, forcedTzo: e.forcedStartTzo }) : "";
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "endStr", {
                get: function () {
                    var e = this._instance;
                    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, { omitTime: this._def.allDay, forcedTzo: e.forcedEndTzo }) : "";
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "id", {
                get: function () {
                    return this._def.publicId;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "groupId", {
                get: function () {
                    return this._def.groupId;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "allDay", {
                get: function () {
                    return this._def.allDay;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "title", {
                get: function () {
                    return this._def.title;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "url", {
                get: function () {
                    return this._def.url;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "display", {
                get: function () {
                    return this._def.ui.display || "auto";
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "startEditable", {
                get: function () {
                    return this._def.ui.startEditable;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "durationEditable", {
                get: function () {
                    return this._def.ui.durationEditable;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "constraint", {
                get: function () {
                    return this._def.ui.constraints[0] || null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "overlap", {
                get: function () {
                    return this._def.ui.overlap;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "allow", {
                get: function () {
                    return this._def.ui.allows[0] || null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "backgroundColor", {
                get: function () {
                    return this._def.ui.backgroundColor;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "borderColor", {
                get: function () {
                    return this._def.ui.borderColor;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "textColor", {
                get: function () {
                    return this._def.ui.textColor;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "classNames", {
                get: function () {
                    return this._def.ui.classNames;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(s.prototype, "extendedProps", {
                get: function () {
                    return this._def.extendedProps;
                },
                enumerable: !1,
                configurable: !0,
            }),
            (s.prototype.toPlainObject = function (e) {
                void 0 === e && (e = {});
                var t = this._def,
                    n = t.ui,
                    r = this.startStr,
                    o = this.endStr,
                    i = {};
                return (
                    t.title && (i.title = t.title),
                    r && (i.start = r),
                    o && (i.end = o),
                    t.publicId && (i.id = t.publicId),
                    t.groupId && (i.groupId = t.groupId),
                    t.url && (i.url = t.url),
                    n.display && "auto" !== n.display && (i.display = n.display),
                    e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor
                        ? (i.color = n.backgroundColor)
                        : (n.backgroundColor && (i.backgroundColor = n.backgroundColor), n.borderColor && (i.borderColor = n.borderColor)),
                    n.textColor && (i.textColor = n.textColor),
                    n.classNames.length && (i.classNames = n.classNames),
                    Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? I(i, t.extendedProps) : (i.extendedProps = t.extendedProps)),
                    i
                );
            }),
            (s.prototype.toJSON = function () {
                return this.toPlainObject();
            }),
            s);
    function s(e, t, n) {
        (this._context = e), (this._def = t), (this._instance = n || null);
    }
    function r() {}
    function Lr(e) {
        var t,
            n = e._def,
            e = e._instance;
        return { defs: (((t = {})[n.defId] = n), t), instances: e ? (((n = {})[e.instanceId] = e), n) : {} };
    }
    function Ur(e, t, n) {
        var r,
            o = e.defs,
            i = e.instances,
            a = [],
            s = n ? n.instanceId : "";
        for (r in i) {
            var l = i[r],
                u = o[l.defId];
            l.instanceId !== s && a.push(new N(t, u, l));
        }
        return a;
    }
    var Wr = {};
    function Vr() {}
    (Vr.prototype.getMarkerYear = function (e) {
        return e.getUTCFullYear();
    }),
        (Vr.prototype.getMarkerMonth = function (e) {
            return e.getUTCMonth();
        }),
        (Vr.prototype.getMarkerDay = function (e) {
            return e.getUTCDate();
        }),
        (Vr.prototype.arrayToMarker = o),
        (Vr.prototype.markerToArray = Nt),
        (Wr.gregory = Vr);
    var Fr = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    function Br(e) {
        e = Fr.exec(e);
        if (e) {
            var t,
                n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? 1e3 * Number("0." + e[12]) : 0));
            if (Ht(n)) return (t = null), e[13] && (t = ("-" === e[15] ? -1 : 1) * (60 * Number(e[16] || 0) + Number(e[18] || 0))), { marker: n, isTimeUnspecified: !e[6], timeZoneOffset: t };
        }
        return null;
    }
    (i.prototype.createMarker = function (e) {
        e = this.createMarkerMeta(e);
        return null === e ? null : e.marker;
    }),
        (i.prototype.createNowMarker = function () {
            return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : o(It(new Date()));
        }),
        (i.prototype.createMarkerMeta = function (e) {
            if ("string" == typeof e) return this.parse(e);
            var t = null;
            return (
                "number" == typeof e ? (t = this.timestampToMarker(e)) : e instanceof Date ? ((e = e.valueOf()), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = o(e)),
                null !== t && Ht(t) ? { marker: t, isTimeUnspecified: !1, forcedTzo: null } : null
            );
        }),
        (i.prototype.parse = function (e) {
            e = Br(e);
            if (null === e) return null;
            var t = e.marker,
                n = null;
            return null !== e.timeZoneOffset && (this.canComputeOffset ? (t = this.timestampToMarker(t.valueOf() - 60 * e.timeZoneOffset * 1e3)) : (n = e.timeZoneOffset)), { marker: t, isTimeUnspecified: e.isTimeUnspecified, forcedTzo: n };
        }),
        (i.prototype.getYear = function (e) {
            return this.calendarSystem.getMarkerYear(e);
        }),
        (i.prototype.getMonth = function (e) {
            return this.calendarSystem.getMarkerMonth(e);
        }),
        (i.prototype.add = function (e, t) {
            e = this.calendarSystem.markerToArray(e);
            return (e[0] += t.years), (e[1] += t.months), (e[2] += t.days), (e[6] += t.milliseconds), this.calendarSystem.arrayToMarker(e);
        }),
        (i.prototype.subtract = function (e, t) {
            e = this.calendarSystem.markerToArray(e);
            return (e[0] -= t.years), (e[1] -= t.months), (e[2] -= t.days), (e[6] -= t.milliseconds), this.calendarSystem.arrayToMarker(e);
        }),
        (i.prototype.addYears = function (e, t) {
            e = this.calendarSystem.markerToArray(e);
            return (e[0] += t), this.calendarSystem.arrayToMarker(e);
        }),
        (i.prototype.addMonths = function (e, t) {
            e = this.calendarSystem.markerToArray(e);
            return (e[1] += t), this.calendarSystem.arrayToMarker(e);
        }),
        (i.prototype.diffWholeYears = function (e, t) {
            var n = this.calendarSystem;
            return Ot(e) === Ot(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null;
        }),
        (i.prototype.diffWholeMonths = function (e, t) {
            var n = this.calendarSystem;
            return Ot(e) === Ot(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null;
        }),
        (i.prototype.greatestWholeUnit = function (e, t) {
            var n,
                r = this.diffWholeYears(e, t);
            return null !== r
                ? { unit: "year", value: r }
                : null !== (r = this.diffWholeMonths(e, t))
                ? { unit: "month", value: r }
                : null !== (r = kt(e, t))
                ? { unit: "week", value: r }
                : null !== (r = xt(e, t))
                ? { unit: "day", value: r }
                : St(((n = e), (r = (t.valueOf() - n.valueOf()) / 36e5)))
                ? { unit: "hour", value: r }
                : St(((n = e), (r = (t.valueOf() - n.valueOf()) / 6e4)))
                ? { unit: "minute", value: r }
                : St(((n = e), (r = (t.valueOf() - n.valueOf()) / 1e3)))
                ? { unit: "second", value: r }
                : { unit: "millisecond", value: t.valueOf() - e.valueOf() };
        }),
        (i.prototype.countDurationsBetween = function (e, t, n) {
            var r;
            return n.years && null !== (r = this.diffWholeYears(e, t))
                ? r / ($t(n) / 365)
                : n.months && null !== (r = this.diffWholeMonths(e, t))
                ? r / ($t(n) / 30)
                : n.days && null !== (r = xt(e, t))
                ? r / $t(n)
                : (t.valueOf() - e.valueOf()) / p(n);
        }),
        (i.prototype.startOf = function (e, t) {
            return "year" === t
                ? this.startOfYear(e)
                : "month" === t
                ? this.startOfMonth(e)
                : "week" === t
                ? this.startOfWeek(e)
                : "day" === t
                ? m(e)
                : "hour" === t
                ? o([(n = e).getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours()])
                : "minute" === t
                ? o([(n = e).getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes()])
                : "second" === t
                ? o([(t = e).getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds()])
                : null;
            var n;
        }),
        (i.prototype.startOfYear = function (e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)]);
        }),
        (i.prototype.startOfMonth = function (e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)]);
        }),
        (i.prototype.startOfWeek = function (e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7)]);
        }),
        (i.prototype.computeWeekNumber = function (e) {
            var t, n, r, o;
            return this.weekNumberFunc
                ? this.weekNumberFunc(this.toDate(e))
                : ((t = this.weekDow), (n = this.weekDoy), (r = e.getUTCFullYear()), (o = Mt(e, r, t, n)), o < 1 ? Mt(e, r - 1, t, n) : 1 <= (e = Mt(e, r + 1, t, n)) ? Math.min(o, e) : o);
        }),
        (i.prototype.format = function (e, t, n) {
            return t.format({ marker: e, timeZoneOffset: null != (n = void 0 === n ? {} : n).forcedTzo ? n.forcedTzo : this.offsetForMarker(e) }, this);
        }),
        (i.prototype.formatRange = function (e, t, n, r) {
            return (
                (r = void 0 === r ? {} : r).isEndExclusive && (t = wt(t, -1)),
                n.formatRange(
                    { marker: e, timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e) },
                    { marker: t, timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t) },
                    this,
                    r.defaultSeparator
                )
            );
        }),
        (i.prototype.formatIso = function (e, t) {
            var n = null;
            return en(e, (n = (t = void 0 === t ? {} : t).omitTimeZoneOffset ? n : null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), t.omitTime);
        }),
        (i.prototype.timestampToMarker = function (e) {
            return "local" === this.timeZone ? o(It(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? o(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e);
        }),
        (i.prototype.offsetForMarker = function (e) {
            return "local" === this.timeZone ? -Pt(Nt(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Nt(e)) : null;
        }),
        (i.prototype.toDate = function (e, t) {
            return "local" === this.timeZone
                ? Pt(Nt(e))
                : "UTC" === this.timeZone
                ? new Date(e.valueOf())
                : this.namedTimeZoneImpl
                ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(Nt(e)) * 60)
                : new Date(e.valueOf() - (t || 0));
        });
    var zr = i,
        jr = [],
        Gr = {
            code: "en",
            week: { dow: 0, doy: 4 },
            direction: "ltr",
            buttonText: { prev: "prev", next: "next", prevYear: "prev year", nextYear: "next year", year: "year", today: "today", month: "month", week: "week", day: "day", list: "list" },
            weekText: "W",
            weekTextLong: "Week",
            closeHint: "Close",
            timeHint: "Time",
            eventHint: "Event",
            allDayText: "all-day",
            moreLinkText: "more",
            noEventsText: "No events to display",
        },
        qr = I(I({}, Gr), {
            buttonHints: {
                prev: "Previous $0",
                next: "Next $0",
                today: function (e, t) {
                    return "day" === t ? "Today" : "This " + e;
                },
            },
            viewHint: "$0 view",
            navLinkHint: "Go to $0",
            moreLinkHint: function (e) {
                return "Show " + e + " more event" + (1 === e ? "" : "s");
            },
        });
    function i(e) {
        var t = (this.timeZone = e.timeZone),
            n = "local" !== t && "UTC" !== t;
        e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
            (this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl)),
            (this.calendarSystem = ((t = e.calendarSystem), new Wr[t]())),
            (this.locale = e.locale),
            (this.weekDow = e.locale.week.dow),
            (this.weekDoy = e.locale.week.doy),
            "ISO" === e.weekNumberCalculation && ((this.weekDow = 1), (this.weekDoy = 4)),
            "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
            "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation),
            (this.weekText = (null != e.weekText ? e : e.locale.options).weekText),
            (this.weekTextLong = (null != e.weekTextLong ? e : e.locale.options).weekTextLong || this.weekText),
            (this.cmdFormatter = e.cmdFormatter),
            (this.defaultSeparator = e.defaultSeparator);
    }
    function Yr(e) {
        for (var t = 0 < e.length ? e[0].code : "en", e = jr.concat(e), n = { en: qr }, r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            n[i.code] = i;
        }
        return { map: n, defaultCode: t };
    }
    function Zr(e, t) {
        return "object" != typeof e || Array.isArray(e)
            ? ((t = t),
              (r = [].concat((n = e) || [])),
              Xr(
                  n,
                  r,
                  (function (e, t) {
                      for (var n = 0; n < e.length; n += 1)
                          for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; 0 < o; --o) {
                              var i = r.slice(0, o).join("-");
                              if (t[i]) return t[i];
                          }
                      return null;
                  })(r, t) || qr
              ))
            : Xr(e.code, [e.code], e);
        var n, r;
    }
    function Xr(e, t, n) {
        var n = Ut([Gr, n], ["buttonText"]),
            r = (delete n.code, n.week);
        return delete n.week, { codeArg: e, codes: t, week: r, simpleNumberFormat: new Intl.NumberFormat(e), options: n };
    }
    function Kr(e) {
        var t = Zr(e.locale || "en", Yr([]).map);
        return new zr(I(I({ timeZone: wn.timeZone, calendarSystem: "gregory" }, e), { locale: t }));
    }
    var $r,
        Jr = { startTime: "09:00", endTime: "17:00", daysOfWeek: [1, 2, 3, 4, 5], display: "inverse-background", classNames: "fc-non-business", groupId: "_businessHours" };
    function Qr(e, t) {
        return Pn(
            (function (e) {
                e =
                    !0 === e
                        ? [{}]
                        : Array.isArray(e)
                        ? e.filter(function (e) {
                              return e.daysOfWeek;
                          })
                        : "object" == typeof e && e
                        ? [e]
                        : [];
                return e.map(function (e) {
                    return I(I({}, Jr), e);
                });
            })(e),
            null,
            t
        );
    }
    function eo(e, t) {
        return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom;
    }
    function to(e, t) {
        e = { left: Math.max(e.left, t.left), right: Math.min(e.right, t.right), top: Math.max(e.top, t.top), bottom: Math.min(e.bottom, t.bottom) };
        return e.left < e.right && e.top < e.bottom && e;
    }
    function no(e, t) {
        return { left: Math.min(Math.max(e.left, t.left), t.right), top: Math.min(Math.max(e.top, t.top), t.bottom) };
    }
    function ro(e) {
        return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 };
    }
    function oo(e, t) {
        return { left: e.left - t.left, top: e.top - t.top };
    }
    function io() {
        return ($r =
            null == $r
                ? (function () {
                      if ("undefined" == typeof document) return !0;
                      var e = document.createElement("div"),
                          t =
                              ((e.style.position = "absolute"),
                              (e.style.top = "0px"),
                              (e.style.left = "0px"),
                              (e.innerHTML = "<table><tr><td><div></div></td></tr></table>"),
                              (e.querySelector("table").style.height = "100px"),
                              (e.querySelector("div").style.height = "100%"),
                              document.body.appendChild(e),
                              0 < e.querySelector("div").offsetHeight);
                      return document.body.removeChild(e), t;
                  })()
                : $r);
    }
    var ao = { defs: {}, instances: {} },
        so =
            ((lo.prototype.splitProps = function (e) {
                var t,
                    n = this,
                    r = this.getKeyInfo(e),
                    o = this.getKeysForEventDefs(e.eventStore),
                    i = this.splitDateSelection(e.dateSelection),
                    a = this.splitIndividualUi(e.eventUiBases, o),
                    s = this.splitEventStore(e.eventStore, o),
                    l = this.splitEventDrag(e.eventDrag),
                    u = this.splitEventResize(e.eventResize),
                    c = {};
                for (t in ((this.eventUiBuilders = P(r, function (e, t) {
                    return n.eventUiBuilders[t] || S(uo);
                })),
                r)) {
                    var d = r[t],
                        p = s[t] || ao,
                        f = this.eventUiBuilders[t];
                    c[t] = {
                        businessHours: d.businessHours || e.businessHours,
                        dateSelection: i[t] || null,
                        eventStore: p,
                        eventUiBases: f(e.eventUiBases[""], d.ui, a[t]),
                        eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
                        eventDrag: l[t] || null,
                        eventResize: u[t] || null,
                    };
                }
                return c;
            }),
            (lo.prototype._splitDateSpan = function (e) {
                var t = {};
                if (e) for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) t[r[n]] = e;
                return t;
            }),
            (lo.prototype._getKeysForEventDefs = function (e) {
                var t = this;
                return P(e.defs, function (e) {
                    return t.getKeysForEventDef(e);
                });
            }),
            (lo.prototype._splitEventStore = function (e, t) {
                var n,
                    r,
                    o,
                    i = e.defs,
                    a = e.instances,
                    s = {};
                for (n in i) for (var l = 0, u = t[n]; l < u.length; l++) s[(o = u[l])] || (s[o] = { defs: {}, instances: {} }), (s[o].defs[n] = i[n]);
                for (r in a) for (var c = a[r], d = 0, p = t[c.defId]; d < p.length; d++) s[(o = p[d])] && (s[o].instances[r] = c);
                return s;
            }),
            (lo.prototype._splitIndividualUi = function (e, t) {
                var n,
                    r = {};
                for (n in e)
                    if (n)
                        for (var o = 0, i = t[n]; o < i.length; o++) {
                            var a = i[o];
                            r[a] || (r[a] = {}), (r[a][n] = e[n]);
                        }
                return r;
            }),
            (lo.prototype._splitInteraction = function (t) {
                var n = {};
                if (t) {
                    var e,
                        r = this._splitEventStore(t.affectedEvents, this._getKeysForEventDefs(t.affectedEvents)),
                        o = this._getKeysForEventDefs(t.mutatedEvents),
                        i = this._splitEventStore(t.mutatedEvents, o),
                        a = function (e) {
                            n[e] || (n[e] = { affectedEvents: r[e] || ao, mutatedEvents: i[e] || ao, isEvent: t.isEvent });
                        };
                    for (e in r) a(e);
                    for (e in i) a(e);
                }
                return n;
            }),
            lo);
    function lo() {
        (this.getKeysForEventDefs = S(this._getKeysForEventDefs)),
            (this.splitDateSelection = S(this._splitDateSpan)),
            (this.splitEventStore = S(this._splitEventStore)),
            (this.splitIndividualUi = S(this._splitIndividualUi)),
            (this.splitEventDrag = S(this._splitInteraction)),
            (this.splitEventResize = S(this._splitInteraction)),
            (this.eventUiBuilders = {});
    }
    function uo(e, t, n) {
        var r = [],
            e = (e && r.push(e), t && r.push(t), { "": Fn(r) });
        return n && I(e, n), e;
    }
    function co(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !ar(r.activeRange, e)),
            isOther: Boolean(r && !ar(r.currentRange, e)),
            isToday: Boolean(t && ar(t, e)),
            isPast: Boolean(n ? e < n : !!t && e < t.start),
            isFuture: Boolean(n ? n < e : !!t && e >= t.end),
        };
    }
    function po(e, t) {
        var n = ["fc-day", "fc-day-" + Dt[e.dow]];
        return (
            e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n
        );
    }
    var fo = a({ year: "numeric", month: "long", day: "numeric" }),
        ho = a({ week: "long" });
    function go(e, n, r, t) {
        void 0 === r && (r = "day"), void 0 === t && (t = !0);
        var o,
            i,
            a = e.dateEnv,
            s = e.options,
            l = e.calendarApi,
            e = a.format(n, "week" === r ? ho : fo);
        return s.navLinks
            ? ((o = a.toDate(n)),
              (i = function (e) {
                  var t = "day" === r ? s.navLinkDayClick : "week" === r ? s.navLinkWeekClick : null;
                  "function" == typeof t ? t.call(l, a.toDate(n), e) : ("string" == typeof t && (r = t), l.zoomTo(n, r));
              }),
              I({ title: yt(s.navLinkHint, [e, o], e), "data-navlink": "" }, t ? rt(i) : { onClick: i }))
            : { "aria-label": e };
    }
    var vo,
        mo = null;
    function yo() {
        return (
            null === mo &&
                (Ye((e = document.createElement("div")), { position: "absolute", top: -1e3, left: 0, border: 0, padding: 0, overflow: "scroll", direction: "rtl" }),
                (e.innerHTML = "<div></div>"),
                document.body.appendChild(e),
                (t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left),
                ze(e),
                (mo = t)),
            mo
        );
        var e, t;
    }
    function Eo() {
        return (
            vo ||
                (((e = document.createElement("div")).style.overflow = "scroll"),
                (e.style.position = "absolute"),
                (e.style.top = "-9999px"),
                (e.style.left = "-9999px"),
                document.body.appendChild(e),
                (t = So(e)),
                document.body.removeChild(e),
                (vo = t)),
            vo
        );
        var e, t;
    }
    function So(e) {
        return { x: e.offsetHeight - e.clientHeight, y: e.offsetWidth - e.clientWidth };
    }
    function bo(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            o = parseInt(n.borderRightWidth, 10) || 0,
            i = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0,
            e = So(e),
            s = e.y - r - o,
            r = { borderLeft: r, borderRight: o, borderTop: i, borderBottom: a, scrollbarBottom: e.x - i - a, scrollbarLeft: 0, scrollbarRight: 0 };
        return (
            yo() && "rtl" === n.direction ? (r.scrollbarLeft = s) : (r.scrollbarRight = s),
            t && ((r.paddingLeft = parseInt(n.paddingLeft, 10) || 0), (r.paddingRight = parseInt(n.paddingRight, 10) || 0), (r.paddingTop = parseInt(n.paddingTop, 10) || 0), (r.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
            r
        );
    }
    function Do(e, t, n) {
        void 0 === t && (t = !1);
        (n = n ? e.getBoundingClientRect() : Co(e)),
            (e = bo(e, t)),
            (n = { left: n.left + e.borderLeft + e.scrollbarLeft, right: n.right - e.borderRight - e.scrollbarRight, top: n.top + e.borderTop, bottom: n.bottom - e.borderBottom - e.scrollbarBottom });
        return t && ((n.left += e.paddingLeft), (n.right -= e.paddingRight), (n.top += e.paddingTop), (n.bottom -= e.paddingBottom)), n;
    }
    function Co(e) {
        e = e.getBoundingClientRect();
        return { left: e.left + window.pageXOffset, top: e.top + window.pageYOffset, right: e.right + window.pageXOffset, bottom: e.bottom + window.pageYOffset };
    }
    function wo(e) {
        for (var t = []; e instanceof HTMLElement; ) {
            var n = window.getComputedStyle(e);
            if ("fixed" === n.position) break;
            /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), (e = e.parentNode);
        }
        return t;
    }
    function Ro(e, t, n) {
        function r() {
            i || ((i = !0), t.apply(this, arguments));
        }
        function o() {
            i || ((i = !0), n && n.apply(this, arguments));
        }
        var i = !1,
            e = e(r, o);
        e && "function" == typeof e.then && e.then(r, o);
    }
    (_o.prototype.setThisContext = function (e) {
        this.thisContext = e;
    }),
        (_o.prototype.setOptions = function (e) {
            this.options = e;
        }),
        (_o.prototype.on = function (e, t) {
            var n;
            (n = this.handlers), (t = t), (n[e] || (n[e] = [])).push(t);
        }),
        (_o.prototype.off = function (e, t) {
            var n, r;
            (n = this.handlers),
                (e = e),
                (r = t)
                    ? n[e] &&
                      (n[e] = n[e].filter(function (e) {
                          return e !== r;
                      }))
                    : delete n[e];
        }),
        (_o.prototype.trigger = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            for (var r = this.handlers[e] || [], e = this.options && this.options[e], o = 0, i = [].concat(e || [], r); o < i.length; o++) i[o].apply(this.thisContext, t);
        }),
        (_o.prototype.hasHandlers = function (e) {
            return Boolean((this.handlers[e] && this.handlers[e].length) || (this.options && this.options[e]));
        });
    var To = _o;
    function _o() {
        (this.handlers = {}), (this.thisContext = null);
    }
    (Wo.prototype.buildElHorizontals = function (e) {
        for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
            var i = o[r].getBoundingClientRect();
            t.push(i.left - e), n.push(i.right - e);
        }
        (this.lefts = t), (this.rights = n);
    }),
        (Wo.prototype.buildElVerticals = function (e) {
            for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                var i = o[r].getBoundingClientRect();
                t.push(i.top - e), n.push(i.bottom - e);
            }
            (this.tops = t), (this.bottoms = n);
        }),
        (Wo.prototype.leftToIndex = function (e) {
            for (var t = this.lefts, n = this.rights, r = t.length, o = 0; o < r; o += 1) if (e >= t[o] && e < n[o]) return o;
        }),
        (Wo.prototype.topToIndex = function (e) {
            for (var t = this.tops, n = this.bottoms, r = t.length, o = 0; o < r; o += 1) if (e >= t[o] && e < n[o]) return o;
        }),
        (Wo.prototype.getWidth = function (e) {
            return this.rights[e] - this.lefts[e];
        }),
        (Wo.prototype.getHeight = function (e) {
            return this.bottoms[e] - this.tops[e];
        });
    var ko,
        xo,
        Mo = Wo,
        Io =
            ((Uo.prototype.getMaxScrollTop = function () {
                return this.getScrollHeight() - this.getClientHeight();
            }),
            (Uo.prototype.getMaxScrollLeft = function () {
                return this.getScrollWidth() - this.getClientWidth();
            }),
            (Uo.prototype.canScrollVertically = function () {
                return 0 < this.getMaxScrollTop();
            }),
            (Uo.prototype.canScrollHorizontally = function () {
                return 0 < this.getMaxScrollLeft();
            }),
            (Uo.prototype.canScrollUp = function () {
                return 0 < this.getScrollTop();
            }),
            (Uo.prototype.canScrollDown = function () {
                return this.getScrollTop() < this.getMaxScrollTop();
            }),
            (Uo.prototype.canScrollLeft = function () {
                return 0 < this.getScrollLeft();
            }),
            (Uo.prototype.canScrollRight = function () {
                return this.getScrollLeft() < this.getMaxScrollLeft();
            }),
            Uo),
        Po =
            (t(Lo, (xo = Io)),
            (Lo.prototype.getScrollTop = function () {
                return this.el.scrollTop;
            }),
            (Lo.prototype.getScrollLeft = function () {
                return this.el.scrollLeft;
            }),
            (Lo.prototype.setScrollTop = function (e) {
                this.el.scrollTop = e;
            }),
            (Lo.prototype.setScrollLeft = function (e) {
                this.el.scrollLeft = e;
            }),
            (Lo.prototype.getScrollWidth = function () {
                return this.el.scrollWidth;
            }),
            (Lo.prototype.getScrollHeight = function () {
                return this.el.scrollHeight;
            }),
            (Lo.prototype.getClientHeight = function () {
                return this.el.clientHeight;
            }),
            (Lo.prototype.getClientWidth = function () {
                return this.el.clientWidth;
            }),
            Lo),
        No =
            (t(Ao, (ko = Io)),
            (Ao.prototype.getScrollTop = function () {
                return window.pageYOffset;
            }),
            (Ao.prototype.getScrollLeft = function () {
                return window.pageXOffset;
            }),
            (Ao.prototype.setScrollTop = function (e) {
                window.scroll(window.pageXOffset, e);
            }),
            (Ao.prototype.setScrollLeft = function (e) {
                window.scroll(e, window.pageYOffset);
            }),
            (Ao.prototype.getScrollWidth = function () {
                return document.documentElement.scrollWidth;
            }),
            (Ao.prototype.getScrollHeight = function () {
                return document.documentElement.scrollHeight;
            }),
            (Ao.prototype.getClientHeight = function () {
                return document.documentElement.clientHeight;
            }),
            (Ao.prototype.getClientWidth = function () {
                return document.documentElement.clientWidth;
            }),
            Ao),
        Ho =
            ((Oo.prototype.setIconOverride = function (e) {
                var t, n;
                if ("object" == typeof e && e) {
                    for (n in ((t = I({}, this.iconClasses)), e)) t[n] = this.applyIconOverridePrefix(e[n]);
                    this.iconClasses = t;
                } else !1 === e && (this.iconClasses = {});
            }),
            (Oo.prototype.applyIconOverridePrefix = function (e) {
                var t = this.iconOverridePrefix;
                return (e = t && 0 !== e.indexOf(t) ? t + e : e);
            }),
            (Oo.prototype.getClass = function (e) {
                return this.classes[e] || "";
            }),
            (Oo.prototype.getIconClass = function (e, t) {
                return (t = (t && this.rtlIconClasses && this.rtlIconClasses[e]) || this.iconClasses[e]) ? this.baseIconClass + " " + t : "";
            }),
            (Oo.prototype.getCustomButtonIconClass = function (e) {
                return this.iconOverrideCustomButtonOption && (e = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(e) : "";
            }),
            Oo);
    function Oo(e) {
        this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
    }
    function Ao() {
        return (null !== ko && ko.apply(this, arguments)) || this;
    }
    function Lo(e) {
        var t = xo.call(this) || this;
        return (t.el = e), t;
    }
    function Uo() {}
    function Wo(e, t, n, r) {
        this.els = t;
        t = this.originClientRect = e.getBoundingClientRect();
        n && this.buildElHorizontals(t.left), r && this.buildElVerticals(t.top);
    }
    if (((Ho.prototype.classes = {}), (Ho.prototype.iconClasses = {}), (Ho.prototype.baseIconClass = ""), (Ho.prototype.iconOverridePrefix = ""), "undefined" == typeof FullCalendarVDom))
        throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
    var Vo = FullCalendarVDom.Component,
        C = FullCalendarVDom.createElement,
        Fo = FullCalendarVDom.render,
        u = FullCalendarVDom.createRef,
        w = FullCalendarVDom.Fragment,
        Bo = FullCalendarVDom.createContext,
        zo = FullCalendarVDom.createPortal,
        jo = FullCalendarVDom.flushToDom,
        Go = FullCalendarVDom.unmountComponentAtNode,
        qo =
            ((Zo.prototype.detach = function () {
                this.emitter.off("_scrollRequest", this.handleScrollRequest);
            }),
            (Zo.prototype.update = function (e) {
                e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
            }),
            (Zo.prototype.fireInitialScroll = function () {
                this.handleScrollRequest({ time: this.scrollTime });
            }),
            (Zo.prototype.drain = function () {
                this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
            }),
            Zo),
        Yo = Bo({});
    function Zo(e, t, n, r) {
        var o = this;
        (this.execFunc = e),
            (this.emitter = t),
            (this.scrollTime = n),
            (this.scrollTimeReset = r),
            (this.handleScrollRequest = function (e) {
                (o.queuedRequest = I({}, o.queuedRequest || {}, e)), o.drain();
            }),
            t.on("_scrollRequest", this.handleScrollRequest),
            this.fireInitialScroll();
    }
    function Xo(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function (e) {
                u.on("_resize", e);
            },
            removeResizeHandler: function (e) {
                u.off("_resize", e);
            },
            createScrollResponder: function (e) {
                return new qo(e, u, E(n.scrollTime), n.scrollTimeReset);
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p,
        };
    }
    t(Jo, (Ko = Vo)),
        (Jo.prototype.shouldComponentUpdate = function (e, t) {
            return this.debug && console.log(Bt(e, this.props), Bt(t, this.state)), !zt(this.props, e, this.propEquality) || !zt(this.state, t, this.stateEquality);
        }),
        (Jo.addPropsEquality = ti),
        (Jo.addStateEquality = ni),
        (Jo.contextType = Yo);
    var Ko,
        $o = Jo;
    function Jo() {
        return (null !== Ko && Ko.apply(this, arguments)) || this;
    }
    ($o.prototype.propEquality = {}), ($o.prototype.stateEquality = {});
    t(ei, (Qo = $o)), (ei.contextType = Yo);
    var Qo,
        c = ei;
    function ei() {
        return (null !== Qo && Qo.apply(this, arguments)) || this;
    }
    function ti(e) {
        var t = Object.create(this.prototype.propEquality);
        I(t, e), (this.prototype.propEquality = t);
    }
    function ni(e) {
        var t = Object.create(this.prototype.stateEquality);
        I(t, e), (this.prototype.stateEquality = t);
    }
    function f(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t);
    }
    t(oi, (ri = c)),
        (oi.prototype.prepareHits = function () {}),
        (oi.prototype.queryHit = function (e, t, n, r) {
            return null;
        }),
        (oi.prototype.isValidSegDownEl = function (e) {
            return !this.props.eventDrag && !this.props.eventResize && !l(e, ".fc-event-mirror");
        }),
        (oi.prototype.isValidDateDownEl = function (e) {
            return !(l(e, ".fc-event:not(.fc-bg-event)") || l(e, ".fc-more-link") || l(e, "a[data-navlink]") || l(e, ".fc-popover"));
        });
    var ri,
        g = oi;
    function oi() {
        var e = (null !== ri && ri.apply(this, arguments)) || this;
        return (e.uid = at()), e;
    }
    function v(e) {
        return {
            id: at(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            isLoadingFuncs: e.isLoadingFuncs || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {},
        };
    }
    function ii() {
        var r,
            o = [],
            l = [];
        return function (e, t) {
            return (
                (r && on(e, o) && on(t, l)) ||
                    ((n = t),
                    (a = {}),
                    (s = {
                        reducers: [],
                        isLoadingFuncs: [],
                        contextInit: [],
                        eventRefiners: {},
                        eventDefMemberAdders: [],
                        eventSourceRefiners: {},
                        isDraggableTransformers: [],
                        eventDragMutationMassagers: [],
                        eventDefMutationAppliers: [],
                        dateSelectionTransformers: [],
                        datePointTransforms: [],
                        dateSpanTransforms: [],
                        views: {},
                        viewPropsTransformers: [],
                        isPropsValid: null,
                        externalDefTransforms: [],
                        viewContainerAppends: [],
                        eventDropTransformers: [],
                        componentInteractions: [],
                        calendarInteractions: [],
                        themeClasses: {},
                        eventSourceDefs: [],
                        cmdFormatter: null,
                        recurringTypes: [],
                        namedTimeZonedImpl: null,
                        initialView: "",
                        elementDraggingImpl: null,
                        optionChangeHandlers: {},
                        scrollGridImpl: null,
                        contentTypeHandlers: {},
                        listenerRefiners: {},
                        optionRefiners: {},
                        propSetHandlers: {},
                    }),
                    e && i(e),
                    i(n),
                    (r = s)),
                (o = e),
                (l = t),
                r
            );
            function i(e) {
                for (var t, n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    a[o.id] ||
                        ((a[o.id] = !0),
                        i(o.deps),
                        (s = {
                            reducers: (t = s).reducers.concat((o = o).reducers),
                            isLoadingFuncs: t.isLoadingFuncs.concat(o.isLoadingFuncs),
                            contextInit: t.contextInit.concat(o.contextInit),
                            eventRefiners: I(I({}, t.eventRefiners), o.eventRefiners),
                            eventDefMemberAdders: t.eventDefMemberAdders.concat(o.eventDefMemberAdders),
                            eventSourceRefiners: I(I({}, t.eventSourceRefiners), o.eventSourceRefiners),
                            isDraggableTransformers: t.isDraggableTransformers.concat(o.isDraggableTransformers),
                            eventDragMutationMassagers: t.eventDragMutationMassagers.concat(o.eventDragMutationMassagers),
                            eventDefMutationAppliers: t.eventDefMutationAppliers.concat(o.eventDefMutationAppliers),
                            dateSelectionTransformers: t.dateSelectionTransformers.concat(o.dateSelectionTransformers),
                            datePointTransforms: t.datePointTransforms.concat(o.datePointTransforms),
                            dateSpanTransforms: t.dateSpanTransforms.concat(o.dateSpanTransforms),
                            views: I(I({}, t.views), o.views),
                            viewPropsTransformers: t.viewPropsTransformers.concat(o.viewPropsTransformers),
                            isPropsValid: o.isPropsValid || t.isPropsValid,
                            externalDefTransforms: t.externalDefTransforms.concat(o.externalDefTransforms),
                            viewContainerAppends: t.viewContainerAppends.concat(o.viewContainerAppends),
                            eventDropTransformers: t.eventDropTransformers.concat(o.eventDropTransformers),
                            calendarInteractions: t.calendarInteractions.concat(o.calendarInteractions),
                            componentInteractions: t.componentInteractions.concat(o.componentInteractions),
                            themeClasses: I(I({}, t.themeClasses), o.themeClasses),
                            eventSourceDefs: t.eventSourceDefs.concat(o.eventSourceDefs),
                            cmdFormatter: o.cmdFormatter || t.cmdFormatter,
                            recurringTypes: t.recurringTypes.concat(o.recurringTypes),
                            namedTimeZonedImpl: o.namedTimeZonedImpl || t.namedTimeZonedImpl,
                            initialView: t.initialView || o.initialView,
                            elementDraggingImpl: t.elementDraggingImpl || o.elementDraggingImpl,
                            optionChangeHandlers: I(I({}, t.optionChangeHandlers), o.optionChangeHandlers),
                            scrollGridImpl: o.scrollGridImpl || t.scrollGridImpl,
                            contentTypeHandlers: I(I({}, t.contentTypeHandlers), o.contentTypeHandlers),
                            listenerRefiners: I(I({}, t.listenerRefiners), o.listenerRefiners),
                            optionRefiners: I(I({}, t.optionRefiners), o.optionRefiners),
                            propSetHandlers: I(I({}, t.propSetHandlers), o.propSetHandlers),
                        }));
                }
            }
            var n, a, s;
        };
    }
    t(li, (ai = Ho));
    var ai,
        si = li;
    function li() {
        return (null !== ai && ai.apply(this, arguments)) || this;
    }
    function ui(e, t, n, r) {
        if (t[e]) return t[e];
        n = (function (e, t, n, r) {
            function o(e) {
                return i && null !== i[e] ? i[e] : a && null !== a[e] ? a[e] : null;
            }
            var i = n[e],
                a = r[e],
                s = o("component"),
                l = o("superType"),
                u = null;
            if (l) {
                if (l === e) throw new Error("Can't have a custom view type that references itself");
                u = ui(l, t, n, r);
            }
            return (s = !s && u ? u.component : s) ? { type: e, component: s, defaults: I(I({}, u ? u.defaults : {}), i ? i.rawOptions : {}), overrides: I(I({}, u ? u.overrides : {}), a ? a.rawOptions : {}) } : null;
        })(e, t, n, r);
        return n && (t[e] = n), n;
    }
    (si.prototype.classes = { root: "fc-theme-standard", tableCellShaded: "fc-cell-shaded", buttonGroup: "fc-button-group", button: "fc-button fc-button-primary", buttonActive: "fc-button-active" }),
        (si.prototype.baseIconClass = "fc-icon"),
        (si.prototype.iconClasses = { close: "fc-icon-x", prev: "fc-icon-chevron-left", next: "fc-icon-chevron-right", prevYear: "fc-icon-chevrons-left", nextYear: "fc-icon-chevrons-right" }),
        (si.prototype.rtlIconClasses = { prev: "fc-icon-chevron-right", next: "fc-icon-chevron-left", prevYear: "fc-icon-chevrons-right", nextYear: "fc-icon-chevrons-left" }),
        (si.prototype.iconOverrideOption = "buttonIcons"),
        (si.prototype.iconOverrideCustomButtonOption = "icon"),
        (si.prototype.iconOverridePrefix = "fc-icon-");
    t(pi, (ci = c)),
        (pi.prototype.render = function () {
            var e = this,
                r = this.props,
                o = r.hookProps;
            return C(mi, { hookProps: o, didMount: r.didMount, willUnmount: r.willUnmount, elRef: this.handleRootEl }, function (n) {
                return C(fi, { hookProps: o, content: r.content, defaultContent: r.defaultContent, backupElRef: e.rootElRef }, function (e, t) {
                    return r.children(n, bi(r.classNames, o), e, t);
                });
            });
        });
    var ci,
        R = pi,
        di = Bo(0);
    function pi() {
        var t = (null !== ci && ci.apply(this, arguments)) || this;
        return (
            (t.rootElRef = u()),
            (t.handleRootEl = function (e) {
                f(t.rootElRef, e), t.props.elRef && f(t.props.elRef, e);
            }),
            t
        );
    }
    function fi(t) {
        return C(di.Consumer, null, function (e) {
            return C(vi, I({ renderId: e }, t));
        });
    }
    t(Ei, (gi = c)),
        (Ei.prototype.render = function () {
            return this.props.children(this.innerElRef, this.renderInnerContent());
        }),
        (Ei.prototype.componentDidMount = function () {
            this.updateCustomContent();
        }),
        (Ei.prototype.componentDidUpdate = function () {
            this.updateCustomContent();
        }),
        (Ei.prototype.componentWillUnmount = function () {
            this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy();
        }),
        (Ei.prototype.renderInnerContent = function () {
            var e = this.customContentInfo,
                t = this.getInnerContent(),
                n = this.getContentMeta(t);
            return (
                e && e.contentKey === n.contentKey
                    ? e && (e.contentVal = t[n.contentKey])
                    : (e && (e.destroy && e.destroy(), (e = this.customContentInfo = null)), n.contentKey && (e = this.customContentInfo = I({ contentKey: n.contentKey, contentVal: t[n.contentKey] }, n.buildLifecycleFuncs()))),
                e ? [] : t
            );
        }),
        (Ei.prototype.getInnerContent = function () {
            var e = this.props,
                t = Di(e.content, e.hookProps);
            return null == (t = void 0 === t ? Di(e.defaultContent, e.hookProps) : t) ? null : t;
        }),
        (Ei.prototype.getContentMeta = function (e) {
            var t = this.context.pluginHooks.contentTypeHandlers,
                n = "",
                r = null;
            if (e)
                for (var o in t)
                    if (void 0 !== e[o]) {
                        r = t[(n = o)];
                        break;
                    }
            return { contentKey: n, buildLifecycleFuncs: r };
        }),
        (Ei.prototype.updateCustomContent = function () {
            this.customContentInfo && this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal);
        });
    var hi,
        gi,
        vi = Ei,
        mi =
            (t(yi, (hi = c)),
            (yi.prototype.render = function () {
                return this.props.children(this.handleRootEl);
            }),
            (yi.prototype.componentDidMount = function () {
                var e = this.props.didMount;
                e && e(I(I({}, this.props.hookProps), { el: this.rootEl }));
            }),
            (yi.prototype.componentWillUnmount = function () {
                var e = this.props.willUnmount;
                e && e(I(I({}, this.props.hookProps), { el: this.rootEl }));
            }),
            yi);
    function yi() {
        var t = (null !== hi && hi.apply(this, arguments)) || this;
        return (
            (t.handleRootEl = function (e) {
                (t.rootEl = e), t.props.elRef && f(t.props.elRef, e);
            }),
            t
        );
    }
    function Ei() {
        var e = (null !== gi && gi.apply(this, arguments)) || this;
        return (e.innerElRef = u()), e;
    }
    function Si() {
        var n,
            r,
            o = [];
        return function (e, t) {
            return (o = r && y(r, t) && e === n ? o : bi((n = e), (r = t)));
        };
    }
    function bi(e, t) {
        return Ln((e = "function" == typeof e ? e(t) : e));
    }
    function Di(e, t) {
        return "function" == typeof e ? e(t, C) : e;
    }
    t(Ri, (Ci = c)),
        (Ri.prototype.render = function () {
            var t = this.props,
                e = this.context,
                n = e.options,
                e = { view: e.viewApi },
                r = this.normalizeClassNames(n.viewClassNames, e);
            return C(mi, { hookProps: e, didMount: n.viewDidMount, willUnmount: n.viewWillUnmount, elRef: t.elRef }, function (e) {
                return t.children(e, ["fc-" + t.viewSpec.type + "-view", "fc-view"].concat(r));
            });
        });
    var Ci,
        wi = Ri;
    function Ri() {
        var e = (null !== Ci && Ci.apply(this, arguments)) || this;
        return (e.normalizeClassNames = Si()), e;
    }
    function Ti(e) {
        return P(e, _i);
    }
    function _i(e) {
        var i,
            e = "function" == typeof e ? { component: e } : e,
            t = e.component;
        return (
            e.content &&
                ((i = e),
                (t = function (r) {
                    return C(Yo.Consumer, null, function (n) {
                        return C(wi, { viewSpec: n.viewSpec }, function (e, o) {
                            var t = I(I({}, r), { nextDayThreshold: n.options.nextDayThreshold });
                            return C(R, { hookProps: t, classNames: i.classNames, content: i.content, didMount: i.didMount, willUnmount: i.willUnmount, elRef: e }, function (e, t, n, r) {
                                return C("div", { className: o.concat(t).join(" "), ref: e }, r);
                            });
                        });
                    });
                })),
            { superType: e.type, component: t, rawOptions: e }
        );
    }
    function ki(e, h, g, v) {
        var e = Ti(e),
            m = Ti(h.views);
        return P(
            (function (e, t) {
                var n,
                    r = {};
                for (n in e) ui(n, r, e, t);
                for (n in t) ui(n, r, e, t);
                return r;
            })(e, m),
            function (e) {
                var n = e,
                    e = m,
                    t = h,
                    r = g,
                    o = v;
                function i(e) {
                    var e = e.buttonText || {},
                        t = n.defaults.buttonTextKey;
                    return null != t && null != e[t] ? e[t] : null != e[n.type] ? e[n.type] : null != e[p] ? e[p] : null;
                }
                function a(e) {
                    var e = e.buttonHints || {},
                        t = n.defaults.buttonTextKey;
                    return null != t && null != e[t] ? e[t] : null != e[n.type] ? e[n.type] : null != e[p] ? e[p] : null;
                }
                var s,
                    l,
                    u = n.overrides.duration || n.defaults.duration || r.duration || t.duration,
                    c = null,
                    d = "",
                    p = "",
                    f = {};
                return (
                    u && ((u = u), (s = JSON.stringify(u)), void 0 === (l = xi[s]) && ((l = E(u)), (xi[s] = l)), (c = l)) && ((d = (u = Qt(c)).unit), 1 === u.value && (f = e[(p = d)] ? e[d].rawOptions : {})),
                    {
                        type: n.type,
                        component: n.component,
                        duration: c,
                        durationUnit: d,
                        singleUnit: p,
                        optionDefaults: n.defaults,
                        optionOverrides: I(I({}, f), n.overrides),
                        buttonTextOverride: i(r) || i(t) || n.overrides.buttonText,
                        buttonTextDefault: i(o) || n.defaults.buttonText || i(wn) || n.type,
                        buttonTitleOverride: a(r) || a(t) || n.overrides.buttonHint,
                        buttonTitleDefault: a(o) || n.defaults.buttonHint || a(wn),
                    }
                );
            }
        );
    }
    var xi = {},
        Mi =
            ((T.prototype.buildPrev = function (e, t, n) {
                var r = this.props.dateEnv,
                    r = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
                return this.build(r, -1, n);
            }),
            (T.prototype.buildNext = function (e, t, n) {
                var r = this.props.dateEnv,
                    r = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
                return this.build(r, 1, n);
            }),
            (T.prototype.build = function (e, t, n) {
                void 0 === n && (n = !0);
                var r,
                    o,
                    i = this.props,
                    a = this.buildValidRange();
                return (
                    (a = this.trimHiddenDays(a)),
                    n && ((n = e), (e = null != a.start && n < a.start ? a.start : null != a.end && n >= a.end ? new Date(a.end.valueOf() - 1) : n)),
                    (n = this.buildCurrentRangeInfo(e, t)),
                    (e = /^(year|month|week|day)$/.test(n.unit)),
                    (t = this.buildRenderRange(this.trimHiddenDays(n.range), n.unit, e)),
                    (r = t = this.trimHiddenDays(t)),
                    i.showNonCurrentDates || (r = nr(r, n.range)),
                    (r = nr((r = this.adjustActiveRange(r)), a)),
                    (o = or(n.range, a)),
                    {
                        validRange: a,
                        currentRange: n.range,
                        currentRangeUnit: n.unit,
                        isRangeAllDay: e,
                        activeRange: r,
                        renderRange: t,
                        slotMinTime: i.slotMinTime,
                        slotMaxTime: i.slotMaxTime,
                        isValid: o,
                        dateIncrement: this.buildDateIncrement(n.duration),
                    }
                );
            }),
            (T.prototype.buildValidRange = function () {
                var e = this.props.validRangeInput,
                    e = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
                return this.refineRange(e) || { start: null, end: null };
            }),
            (T.prototype.buildCurrentRangeInfo = function (e, t) {
                var n,
                    r = this.props,
                    o = null,
                    i = null,
                    a = null;
                return (
                    r.duration
                        ? ((o = r.duration), (i = r.durationUnit), (a = this.buildRangeFromDuration(e, t, o, i)))
                        : (n = this.props.dayCount)
                        ? ((i = "day"), (a = this.buildRangeFromDayCount(e, t, n)))
                        : (a = this.buildCustomVisibleRange(e))
                        ? (i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit)
                        : ((i = Qt((o = this.getFallbackDuration())).unit), (a = this.buildRangeFromDuration(e, t, o, i))),
                    { duration: o, unit: i, range: a }
                );
            }),
            (T.prototype.getFallbackDuration = function () {
                return E({ day: 1 });
            }),
            (T.prototype.adjustActiveRange = function (e) {
                var t = this.props,
                    n = t.dateEnv,
                    r = t.usesMinMaxTime,
                    o = t.slotMinTime,
                    t = t.slotMaxTime,
                    i = e.start,
                    e = e.end;
                return r && ($t(o) < 0 && ((i = m(i)), (i = n.add(i, o))), 1 < $t(t) && ((e = d((e = m(e)), -1)), (e = n.add(e, t)))), { start: i, end: e };
            }),
            (T.prototype.buildRangeFromDuration = function (e, t, n, r) {
                var o,
                    i,
                    a,
                    s = this.props,
                    l = s.dateEnv,
                    u = s.dateAlignment;
                function c() {
                    (o = l.startOf(e, u)), (i = l.add(o, n)), (a = { start: o, end: i });
                }
                return (
                    u || ((s = this.props.dateIncrement), (u = s && p(s) < p(n) ? Qt(s).unit : r)),
                    $t(n) <= 1 && this.isHiddenDay(o) && (o = m((o = this.skipHiddenDays(o, t)))),
                    c(),
                    this.trimHiddenDays(a) || ((e = this.skipHiddenDays(e, t)), c()),
                    a
                );
            }),
            (T.prototype.buildRangeFromDayCount = function (e, t, n) {
                for (var r = this.props, o = r.dateEnv, r = r.dateAlignment, i = 0, e = m((e = r ? o.startOf(e, r) : e)), a = (e = this.skipHiddenDays(e, t)); (a = d(a, 1)), this.isHiddenDay(a) || (i += 1), i < n; );
                return { start: e, end: a };
            }),
            (T.prototype.buildCustomVisibleRange = function (e) {
                var t = this.props,
                    n = t.visibleRangeInput,
                    t = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
                    e = this.refineRange(t);
                return !e || (null != e.start && null != e.end) ? e : null;
            }),
            (T.prototype.buildRenderRange = function (e, t, n) {
                return e;
            }),
            (T.prototype.buildDateIncrement = function (e) {
                var t;
                return this.props.dateIncrement || ((t = this.props.dateAlignment) ? E(1, t) : e || E({ days: 1 }));
            }),
            (T.prototype.refineRange = function (e) {
                var t, n, r;
                return e
                    ? ((t = this.props.dateEnv), (r = n = null), (e = e).start && (n = t.createMarker(e.start)), e.end && (r = t.createMarker(e.end)), (t = (!n && !r) || (n && r && r < n) ? null : { start: n, end: r }) && $n(t))
                    : null;
            }),
            (T.prototype.initHiddenDays = function () {
                var e,
                    t = this.props.hiddenDays || [],
                    n = [],
                    r = 0;
                for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1) (n[e] = -1 !== t.indexOf(e)) || (r += 1);
                if (!r) throw new Error("invalid hiddenDays");
                this.isHiddenDayHash = n;
            }),
            (T.prototype.trimHiddenDays = function (e) {
                var t = e.start,
                    e = e.end,
                    t = t && this.skipHiddenDays(t),
                    e = e && this.skipHiddenDays(e, -1, !0);
                return null == t || null == e || t < e ? { start: t, end: e } : null;
            }),
            (T.prototype.isHiddenDay = function (e) {
                return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
            }),
            (T.prototype.skipHiddenDays = function (e, t, n) {
                for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7]; ) e = d(e, t);
                return e;
            }),
            T);
    function T(e) {
        (this.props = e), (this.nowDate = Ar(e.nowInput, e.dateEnv)), this.initHiddenDays();
    }
    function Ii(e) {
        for (var t in e) if (e[t].isFetching) return !0;
        return !1;
    }
    function Pi(e, t, n, r) {
        for (var o = {}, i = 0, a = t; i < a.length; i++) {
            var s = a[i];
            o[s.sourceId] = s;
        }
        return n && (o = Ni(o, n, r)), I(I({}, e), o);
    }
    function Ni(e, t, n) {
        return Hi(
            e,
            Wt(e, function (e) {
                return Ai(e, n) ? !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId;
            }),
            t,
            !1,
            n
        );
    }
    function Hi(e, t, n, r, o) {
        var i,
            a = {};
        for (i in e) {
            var s = e[i];
            t[i]
                ? (a[i] = (function (n, r, e, o) {
                      var i = o.options,
                          a = o.calendarApi,
                          t = o.pluginHooks.eventSourceDefs[n.sourceDefId],
                          s = at();
                      return (
                          t.fetch(
                              { eventSource: n, range: r, isRefetch: e, context: o },
                              function (e) {
                                  var t = e.rawEvents;
                                  i.eventSourceSuccess && (t = i.eventSourceSuccess.call(a, t, e.xhr) || t),
                                      n.success && (t = n.success.call(a, t, e.xhr) || t),
                                      o.dispatch({ type: "RECEIVE_EVENTS", sourceId: n.sourceId, fetchId: s, fetchRange: r, rawEvents: t });
                              },
                              function (e) {
                                  console.warn(e.message, e),
                                      i.eventSourceFailure && i.eventSourceFailure.call(a, e),
                                      n.failure && n.failure(e),
                                      o.dispatch({ type: "RECEIVE_EVENT_ERROR", sourceId: n.sourceId, fetchId: s, fetchRange: r, error: e });
                              }
                          ),
                          I(I({}, n), { isFetching: !0, latestFetchId: s })
                      );
                  })(s, n, r, o))
                : (a[i] = s);
        }
        return a;
    }
    function Oi(e, t) {
        return Wt(e, function (e) {
            return Ai(e, t);
        });
    }
    function Ai(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
    }
    function Li(e, t) {
        if (t)
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r],
                    a = t(i);
                a ? n.push(a) : null == a && n.push(i);
            }
        else n = e;
        return n;
    }
    function Ui(e, t) {
        return An(e, function (e) {
            return e.sourceId !== t;
        });
    }
    function Wi(e, t, n, r, o) {
        return { header: e.headerToolbar ? Vi(e.headerToolbar, e, t, n, r, o) : null, footer: e.footerToolbar ? Vi(e.footerToolbar, e, t, n, r, o) : null };
    }
    function Vi(e, t, n, r, o, i) {
        var a,
            s = {},
            l = [],
            u = !1;
        for (a in e) {
            var c = (function (e, l, t, u, c, d) {
                var p = "rtl" === l.direction,
                    f = l.customButtons || {},
                    h = t.buttonText || {},
                    g = l.buttonText || {},
                    v = t.buttonHints || {},
                    m = l.buttonHints || {},
                    t = e ? e.split(" ") : [],
                    y = [],
                    E = !1;
                return {
                    widgets: t.map(function (e) {
                        return e.split(",").map(function (t) {
                            return "title" === t
                                ? ((E = !0), { buttonName: t })
                                : ((n = f[t])
                                      ? ((e = function (e) {
                                            n.click && n.click.call(e.target, e, e.target);
                                        }),
                                        (r = u.getCustomButtonIconClass(n)) || (r = u.getIconClass(t, p)) || (o = n.text),
                                        (a = n.hint || n.text))
                                      : (s = c[t])
                                      ? (y.push(t),
                                        (e = function () {
                                            d.changeView(t);
                                        }),
                                        (o = s.buttonTextOverride) || (r = u.getIconClass(t, p)) || (o = s.buttonTextDefault),
                                        (i = s.buttonTextOverride || s.buttonTextDefault),
                                        (a = yt(s.buttonTitleOverride || s.buttonTitleDefault || l.viewHint, [i, t], i)))
                                      : d[t] &&
                                        ((e = function () {
                                            d[t]();
                                        }),
                                        (o = h[t]) || (r = u.getIconClass(t, p)) || (o = g[t]),
                                        (a =
                                            "prevYear" === t || "nextYear" === t
                                                ? yt(v[(s = "prevYear" === t ? "prev" : "next")] || m[s], [g.year || "year", "year"], g[t])
                                                : function (e) {
                                                      return yt(v[t] || m[t], [g[e] || e, e], g[t]);
                                                  })),
                                  { buttonName: t, buttonClick: e, buttonIcon: r, buttonText: o, buttonHint: a });
                            var n, e, r, o, i, a, s;
                        });
                    }),
                    viewsWithButtons: y,
                    hasTitle: E,
                };
            })(e[a], t, n, r, o, i);
            (s[a] = c.widgets), l.push.apply(l, c.viewsWithButtons), (u = u || c.hasTitle);
        }
        return { sectionWidgets: s, viewsWithButtons: l, hasTitle: u };
    }
    function Fi(e, t, n, r, o) {
        var i,
            a = null,
            s = ("GET" === (e = e.toUpperCase()) ? ((i = n), (t = t + (-1 === t.indexOf("?") ? "?" : "&") + Bi(i))) : (a = Bi(n)), new XMLHttpRequest());
        s.open(e, t, !0),
            "GET" !== e && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            (s.onload = function () {
                if (200 <= s.status && s.status < 400) {
                    var e = !1,
                        t = void 0;
                    try {
                        (t = JSON.parse(s.responseText)), (e = !0);
                    } catch (e) {}
                    e ? r(t, s) : o("Failure parsing JSON", s);
                } else o("Request failed", s);
            }),
            (s.onerror = function () {
                o("Request failed", s);
            }),
            s.send(a);
    }
    function Bi(e) {
        var t,
            n = [];
        for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
        return n.join("&");
    }
    function zi(e, t) {
        for (var n = Ft(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
                if (n[l]._raw === a) {
                    n.splice(l, 1), (s = !0);
                    break;
                }
            s || r.push(a);
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId });
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h);
        }
    }
    var ji = [
            v({
                eventSourceDefs: [
                    {
                        ignoreRange: !0,
                        parseMeta: function (e) {
                            return Array.isArray(e.events) ? e.events : null;
                        },
                        fetch: function (e, t) {
                            t({ rawEvents: e.eventSource.meta });
                        },
                    },
                ],
            }),
            v({
                eventSourceDefs: [
                    {
                        parseMeta: function (e) {
                            return "function" == typeof e.events ? e.events : null;
                        },
                        fetch: function (e, t, n) {
                            var r = e.context.dateEnv;
                            Ro(
                                e.eventSource.meta.bind(null, Rr(e.range, r)),
                                function (e) {
                                    t({ rawEvents: e });
                                },
                                n
                            );
                        },
                    },
                ],
            }),
            v({
                eventSourceRefiners: { method: String, extraParams: n, startParam: String, endParam: String, timeZoneParam: String },
                eventSourceDefs: [
                    {
                        parseMeta: function (e) {
                            return !e.url || ("json" !== e.format && e.format)
                                ? null
                                : { url: e.url, format: "json", method: (e.method || "GET").toUpperCase(), extraParams: e.extraParams, startParam: e.startParam, endParam: e.endParam, timeZoneParam: e.timeZoneParam };
                        },
                        fetch: function (e, n, r) {
                            var t,
                                o,
                                i,
                                a,
                                s,
                                l,
                                u = e.eventSource.meta,
                                c =
                                    ((c = u),
                                    (t = e.range),
                                    (e = e.context),
                                    (s = e.dateEnv),
                                    (e = e.options),
                                    (l = {}),
                                    null == (o = c.startParam) && (o = e.startParam),
                                    null == (i = c.endParam) && (i = e.endParam),
                                    null == (a = c.timeZoneParam) && (a = e.timeZoneParam),
                                    (e = "function" == typeof c.extraParams ? c.extraParams() : c.extraParams || {}),
                                    I(l, e),
                                    (l[o] = s.formatIso(t.start)),
                                    (l[i] = s.formatIso(t.end)),
                                    "local" !== s.timeZone && (l[a] = s.timeZone),
                                    l);
                            Fi(
                                u.method,
                                u.url,
                                c,
                                function (e, t) {
                                    n({ rawEvents: e, xhr: t });
                                },
                                function (e, t) {
                                    r({ message: e, xhr: t });
                                }
                            );
                        },
                    },
                ],
            }),
            v({
                recurringTypes: [
                    {
                        parse: function (e, t) {
                            var n, r, o;
                            return e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur
                                ? ((t = {
                                      daysOfWeek: e.daysOfWeek || null,
                                      startTime: e.startTime || null,
                                      endTime: e.endTime || null,
                                      startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                                      endRecur: e.endRecur ? t.createMarker(e.endRecur) : null,
                                  }),
                                  (n = void 0),
                                  !(n = e.duration ? e.duration : n) &&
                                      e.startTime &&
                                      e.endTime &&
                                      ((r = e.endTime), (o = e.startTime), (n = { years: r.years - o.years, months: r.months - o.months, days: r.days - o.days, milliseconds: r.milliseconds - o.milliseconds })),
                                  { allDayGuess: Boolean(!e.startTime && !e.endTime), duration: n, typeData: t })
                                : null;
                        },
                        expand: function (e, t, n) {
                            var r,
                                t = nr(t, { start: e.startRecur, end: e.endRecur });
                            if (t) {
                                for (var o = e.daysOfWeek, i = e.startTime, e = t, a = n, s = o ? Vt(o) : null, l = m(e.start), u = e.end, c = []; l < u; ) (s && !s[l.getUTCDay()]) || ((r = i ? a.add(l, i) : l), c.push(r)), (l = d(l, 1));
                                return c;
                            }
                            return [];
                        },
                    },
                ],
                eventRefiners: { daysOfWeek: n, startTime: E, endTime: E, duration: E, startRecur: n, endRecur: n },
            }),
            v({
                optionChangeHandlers: {
                    events: function (e, t) {
                        zi([e], t);
                    },
                    eventSources: zi,
                },
            }),
            v({
                isLoadingFuncs: [
                    function (e) {
                        return Ii(e.eventSources);
                    },
                ],
                contentTypeHandlers: {
                    html: function () {
                        var n = null,
                            r = "";
                        return {
                            render: function (e, t) {
                                (e === n && t === r) || (e.innerHTML = t), (n = e), (r = t);
                            },
                            destroy: function () {
                                (n.innerHTML = ""), (n = null), (r = "");
                            },
                        };
                    },
                    domNodes: function () {
                        var i = null,
                            a = [];
                        function s() {
                            a.forEach(ze), (a = []), (i = null);
                        }
                        return {
                            render: function (e, t) {
                                t = Array.prototype.slice.call(t);
                                if (e !== i || !on(a, t)) {
                                    for (var n = 0, r = t; n < r.length; n++) {
                                        var o = r[n];
                                        e.appendChild(o);
                                    }
                                    s();
                                }
                                (i = e), (a = t);
                            },
                            destroy: s,
                        };
                    },
                },
                propSetHandlers: {
                    dateProfile: function (e, t) {
                        t.emitter.trigger("datesSet", I(I({}, Rr(e.activeRange, t.dateEnv)), { view: t.viewApi }));
                    },
                    eventStore: function (e, t) {
                        var n = t.emitter;
                        n.hasHandlers("eventsSet") && n.trigger("eventsSet", Ur(e, t));
                    },
                },
            }),
        ],
        Gi =
            ((Zi.prototype.request = function (e) {
                (this.isDirty = !0), this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : (this.timeoutId = setTimeout(this.tryDrain.bind(this), e)));
            }),
            (Zi.prototype.pause = function (e) {
                var t = this.pauseDepths;
                (t[(e = void 0 === e ? "" : e)] = (t[e] || 0) + 1), this.clearTimeout();
            }),
            (Zi.prototype.resume = function (e, t) {
                var n = this.pauseDepths;
                (e = void 0 === e ? "" : e) in n && (t ? delete n[e] : (--n[e], n[e] <= 0 && delete n[e]), this.tryDrain());
            }),
            (Zi.prototype.isPaused = function () {
                return Object.keys(this.pauseDepths).length;
            }),
            (Zi.prototype.tryDrain = function () {
                if (!this.isRunning && !this.isPaused()) {
                    for (this.isRunning = !0; this.isDirty; ) (this.isDirty = !1), this.drained();
                    this.isRunning = !1;
                }
            }),
            (Zi.prototype.clear = function () {
                this.clearTimeout(), (this.isDirty = !1), (this.pauseDepths = {});
            }),
            (Zi.prototype.clearTimeout = function () {
                this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = 0));
            }),
            (Zi.prototype.drained = function () {
                this.drainedOption && this.drainedOption();
            }),
            Zi),
        qi =
            ((Yi.prototype.request = function (e, t) {
                this.queue.push(e), this.delayedRunner.request(t);
            }),
            (Yi.prototype.pause = function (e) {
                this.delayedRunner.pause(e);
            }),
            (Yi.prototype.resume = function (e, t) {
                this.delayedRunner.resume(e, t);
            }),
            (Yi.prototype.drain = function () {
                for (var e = this.queue; e.length; ) {
                    for (var t, n = []; (t = e.shift()); ) this.runTask(t), n.push(t);
                    this.drained(n);
                }
            }),
            (Yi.prototype.runTask = function (e) {
                this.runTaskOption && this.runTaskOption(e);
            }),
            (Yi.prototype.drained = function (e) {
                this.drainedOption && this.drainedOption(e);
            }),
            Yi);
    function Yi(e, t) {
        (this.runTaskOption = e), (this.drainedOption = t), (this.queue = []), (this.delayedRunner = new Gi(this.drain.bind(this)));
    }
    function Zi(e) {
        (this.drainedOption = e), (this.isRunning = !1), (this.isDirty = !1), (this.pauseDepths = {}), (this.timeoutId = 0);
    }
    function Xi(t, e, n) {
        var r = /^(year|month)$/.test(t.currentRangeUnit) ? t.currentRange : t.activeRange;
        return n.formatRange(
            r.start,
            r.end,
            a(
                e.titleFormat ||
                    (function () {
                        var e = t.currentRangeUnit;
                        if ("year" === e) return { year: "numeric" };
                        if ("month" === e) return { year: "numeric", month: "long" };
                        e = xt(t.currentRange.start, t.currentRange.end);
                        return null !== e && 1 < e ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
                    })()
            ),
            { isEndExclusive: t.isRangeAllDay, defaultSeparator: e.titleRangeSeparator }
        );
    }
    ($i.prototype.resetOptions = function (e, t) {
        var n = this.props;
        (n.optionOverrides = t ? I(I({}, n.optionOverrides), e) : e), this.actionRunner.request({ type: "NOTHING" });
    }),
        ($i.prototype._handleAction = function (e) {
            var t = this.props,
                n = this.state,
                r = this.emitter,
                o = ((i = n.dynamicOptionOverrides), "SET_OPTION" !== (o = e).type ? i : I(I({}, i), (((i = {})[o.optionName] = o.rawOptionValue), i))),
                i = this.computeOptionsData(t.optionOverrides, o, t.calendarApi),
                a = ((a = n.currentViewType), (a = "CHANGE_VIEW_TYPE" === e.type ? e.viewType : a)),
                s = this.computeCurrentViewData(a, i, t.optionOverrides, o),
                l =
                    ((t.calendarApi.currentDataManager = this),
                    r.setThisContext(t.calendarApi),
                    r.setOptions(s.options),
                    { dateEnv: i.dateEnv, options: i.calendarOptions, pluginHooks: i.pluginHooks, calendarApi: t.calendarApi, dispatch: this.dispatch, emitter: r, getCurrentData: this.getCurrentData }),
                u = n.currentDate,
                c = n.dateProfile,
                c = (function (e, t, n, r) {
                    var o;
                    switch (t.type) {
                        case "CHANGE_VIEW_TYPE":
                            return r.build(t.dateMarker || n);
                        case "CHANGE_DATE":
                            return r.build(t.dateMarker);
                        case "PREV":
                            if ((o = r.buildPrev(e, n)).isValid) return o;
                            break;
                        case "NEXT":
                            if ((o = r.buildNext(e, n)).isValid) return o;
                    }
                    return e;
                })((c = this.data && this.data.dateProfileGenerator !== s.dateProfileGenerator ? s.dateProfileGenerator.build(u) : c), e, ((d = u), (u = "CHANGE_DATE" !== e.type ? d : e.dateMarker)), s.dateProfileGenerator);
            ("PREV" !== e.type && "NEXT" !== e.type && ar(c.currentRange, u)) || (u = c.currentRange.start);
            for (
                var d = (function (e, t, n, r) {
                        var o,
                            i,
                            a,
                            s,
                            l,
                            u,
                            c = n ? n.activeRange : null;
                        switch (t.type) {
                            case "ADD_EVENT_SOURCES":
                                return Pi(e, t.sources, c, r);
                            case "REMOVE_EVENT_SOURCE":
                                return (
                                    (o = t.sourceId),
                                    Wt(e, function (e) {
                                        return e.sourceId !== o;
                                    })
                                );
                            case "PREV":
                            case "NEXT":
                            case "CHANGE_DATE":
                            case "CHANGE_VIEW_TYPE":
                                return n ? Ni(e, c, r) : e;
                            case "FETCH_EVENT_SOURCES":
                                return Hi(e, t.sourceIds ? Vt(t.sourceIds) : Oi(e, r), c, t.isRefetch || !1, r);
                            case "RECEIVE_EVENTS":
                            case "RECEIVE_EVENT_ERROR":
                                return (i = e), (a = t.sourceId), (s = t.fetchId), (l = t.fetchRange), (u = i[a]) && s === u.latestFetchId ? I(I({}, i), (((s = {})[a] = I(I({}, u), { isFetching: !1, fetchRange: l })), s)) : i;
                            case "REMOVE_ALL_EVENT_SOURCES":
                                return {};
                            default:
                                return e;
                        }
                    })(n.eventSources, e, c, l),
                    p = (function (e, t, n, r, o) {
                        switch (t.type) {
                            case "RECEIVE_EVENTS":
                                return (
                                    (p = e),
                                    (f = n[t.sourceId]),
                                    (h = t.fetchId),
                                    (g = t.fetchRange),
                                    (v = t.rawEvents),
                                    (m = o),
                                    f && h === f.latestFetchId
                                        ? ((y = Pn(((h = v), (v = m.options.eventDataTransform), (y = f ? f.eventDataTransform : null) && (h = Li(h, y)), (h = v ? Li(h, v) : h)), f, m)), g && (y = Gt(y, g, m)), On(Ui(p, f.sourceId), y))
                                        : p
                                );
                            case "ADD_EVENTS":
                                return (v = t.eventStore), (h = r ? r.activeRange : null), On(e, (v = h ? Gt(v, h, o) : v));
                            case "RESET_EVENTS":
                                return t.eventStore;
                            case "MERGE_EVENTS":
                                return On(e, t.eventStore);
                            case "PREV":
                            case "NEXT":
                            case "CHANGE_DATE":
                            case "CHANGE_VIEW_TYPE":
                                return r ? Gt(e, r.activeRange, o) : e;
                            case "REMOVE_EVENTS":
                                var i,
                                    a,
                                    s = t.eventStore,
                                    l = e.defs,
                                    u = e.instances,
                                    c = {},
                                    d = {};
                                for (i in l) s.defs[i] || (c[i] = l[i]);
                                for (a in u) !s.instances[a] && c[u[a].defId] && (d[a] = u[a]);
                                return { defs: c, instances: d };
                            case "REMOVE_EVENT_SOURCE":
                                return Ui(e, t.sourceId);
                            case "REMOVE_ALL_EVENT_SOURCES":
                                return An(e, function (e) {
                                    return !e.sourceId;
                                });
                            case "REMOVE_ALL_EVENTS":
                                return { defs: {}, instances: {} };
                            default:
                                return e;
                        }
                        var p, f, h, g, v, m, y;
                    })(n.eventStore, e, d, c, l),
                    s = (Ii(d) && !s.options.progressiveEventRendering && n.renderableEventStore) || p,
                    f = this.buildViewUiProps(l),
                    h = f.eventUiSingleBase,
                    f = f.selectionConfig,
                    g = this.buildEventUiBySource(d),
                    v = {
                        dynamicOptionOverrides: o,
                        currentViewType: a,
                        currentDate: u,
                        dateProfile: c,
                        eventSources: d,
                        eventStore: p,
                        renderableEventStore: s,
                        selectionConfig: f,
                        eventUiBases: this.buildEventUiBases(s.defs, h, g),
                        businessHours: this.parseContextBusinessHours(l),
                        dateSelection: (function (e, t) {
                            switch (t.type) {
                                case "UNSELECT_DATES":
                                    return null;
                                case "SELECT_DATES":
                                    return t.selection;
                                default:
                                    return e;
                            }
                        })(n.dateSelection, e),
                        eventSelection: (function (e, t) {
                            switch (t.type) {
                                case "UNSELECT_EVENT":
                                    return "";
                                case "SELECT_EVENT":
                                    return t.eventInstanceId;
                                default:
                                    return e;
                            }
                        })(n.eventSelection, e),
                        eventDrag: (function (e, t) {
                            var n;
                            switch (t.type) {
                                case "UNSET_EVENT_DRAG":
                                    return null;
                                case "SET_EVENT_DRAG":
                                    return { affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent };
                                default:
                                    return e;
                            }
                        })(n.eventDrag, e),
                        eventResize: (function (e, t) {
                            var n;
                            switch (t.type) {
                                case "UNSET_EVENT_RESIZE":
                                    return null;
                                case "SET_EVENT_RESIZE":
                                    return { affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent };
                                default:
                                    return e;
                            }
                        })(n.eventResize, e),
                    },
                    m = I(I({}, l), v),
                    y = 0,
                    E = i.pluginHooks.reducers;
                y < E.length;
                y++
            ) {
                var S = E[y];
                I(v, S(n, e, m));
            }
            (o = ia(n, l)), (a = ia(v, l));
            !o && a ? r.trigger("loading", !0) : o && !a && r.trigger("loading", !1), (this.state = v), t.onAction && t.onAction(e);
        }),
        ($i.prototype.updateData = function () {
            var n,
                r,
                o,
                e = this.props,
                t = this.state,
                i = this.data,
                a = this.computeOptionsData(e.optionOverrides, t.dynamicOptionOverrides, e.calendarApi),
                s = this.computeCurrentViewData(t.currentViewType, a, e.optionOverrides, t.dynamicOptionOverrides),
                l = (this.data = I(I(I({ viewTitle: this.buildTitle(t.dateProfile, s.options, a.dateEnv), calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, a), s), t)),
                u = a.pluginHooks.optionChangeHandlers,
                c = i && i.calendarOptions,
                d = a.calendarOptions;
            if (c && c !== d)
                for (var p in (c.timeZone !== d.timeZone &&
                    ((t.eventSources = l.eventSources = ((s = l.eventSources), (a = (a = t.dateProfile) ? a.activeRange : null), Hi(s, Oi(s, (s = l)), a, !0, s))),
                    (t.eventStore = l.eventStore =
                        ((a = l.eventStore),
                        (n = i.dateEnv),
                        (r = l.dateEnv),
                        (o = a.defs),
                        (s = P(a.instances, function (e) {
                            var t = o[e.defId];
                            return t.allDay || t.recurringDef
                                ? e
                                : I(I({}, e), {
                                      range: { start: r.createMarker(n.toDate(e.range.start, e.forcedStartTzo)), end: r.createMarker(n.toDate(e.range.end, e.forcedEndTzo)) },
                                      forcedStartTzo: r.canComputeOffset ? null : e.forcedStartTzo,
                                      forcedEndTzo: r.canComputeOffset ? null : e.forcedEndTzo,
                                  });
                        })),
                        { defs: o, instances: s }))),
                u))
                    c[p] !== d[p] && u[p](d[p], l);
            e.onData && e.onData(l);
        }),
        ($i.prototype._computeOptionsData = function (e, t, n) {
            var r = this.processRawCalendarOptions(e, t),
                o = r.refinedOptions,
                i = r.pluginHooks,
                a = r.localeDefaults,
                s = r.availableLocaleData,
                r = (sa(r.extra), this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator)),
                t = this.buildViewSpecs(i.views, e, t, a),
                l = this.buildTheme(o, i);
            return { calendarOptions: o, pluginHooks: i, dateEnv: r, viewSpecs: t, theme: l, toolbarConfig: this.parseToolbars(o, e, l, t, n), localeDefaults: a, availableRawLocales: s.map };
        }),
        ($i.prototype.processRawCalendarOptions = function (e, t) {
            var n,
                r = Mn([wn, e, t]),
                o = r.locales,
                r = r.locale,
                o = this.organizeRawLocales(o),
                i = o.map,
                r = this.buildLocale(r || o.defaultCode, i).options,
                i = this.buildPluginHooks(e.plugins || [], ji),
                a = (this.currentCalendarOptionsRefiners = I(I(I(I(I({}, Cn), Rn), Tn), i.listenerRefiners), i.optionRefiners)),
                s = {},
                l = Mn([wn, r, e, t]),
                u = {},
                c = this.currentCalendarOptionsInput,
                d = this.currentCalendarOptionsRefined,
                p = !1;
            for (n in l) "plugins" !== n && (l[n] === c[n] || (_n[n] && n in c && _n[n](c[n], l[n])) ? (u[n] = d[n]) : a[n] ? ((u[n] = a[n](l[n])), (p = !0)) : (s[n] = c[n]));
            return (
                p && ((this.currentCalendarOptionsInput = l), (this.currentCalendarOptionsRefined = u)),
                { rawOptions: this.currentCalendarOptionsInput, refinedOptions: this.currentCalendarOptionsRefined, pluginHooks: i, availableLocaleData: o, localeDefaults: r, extra: s }
            );
        }),
        ($i.prototype._computeCurrentViewData = function (e, t, n, r) {
            var o = t.viewSpecs[e];
            if (!o) throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
            (n = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r)), (r = n.refinedOptions);
            return (
                sa(n.extra),
                {
                    viewSpec: o,
                    options: r,
                    dateProfileGenerator: this.buildDateProfileGenerator({
                        dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
                        duration: o.duration,
                        durationUnit: o.durationUnit,
                        usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                        dateEnv: t.dateEnv,
                        calendarApi: this.props.calendarApi,
                        slotMinTime: r.slotMinTime,
                        slotMaxTime: r.slotMaxTime,
                        showNonCurrentDates: r.showNonCurrentDates,
                        dayCount: r.dayCount,
                        dateAlignment: r.dateAlignment,
                        dateIncrement: r.dateIncrement,
                        hiddenDays: r.hiddenDays,
                        weekends: r.weekends,
                        nowInput: r.now,
                        validRangeInput: r.validRange,
                        visibleRangeInput: r.visibleRange,
                        monthMode: r.monthMode,
                        fixedWeekCount: r.fixedWeekCount,
                    }),
                    viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv),
                }
            );
        }),
        ($i.prototype.processRawViewOptions = function (e, t, n, r, o) {
            var i,
                a = Mn([wn, e.optionDefaults, n, r, e.optionOverrides, o]),
                s = I(I(I(I(I(I({}, Cn), Rn), Tn), xn), t.listenerRefiners), t.optionRefiners),
                l = {},
                u = this.currentViewOptionsInput,
                c = this.currentViewOptionsRefined,
                d = !1,
                p = {};
            for (i in a)
                a[i] === u[i]
                    ? (l[i] = c[i])
                    : (a[i] === this.currentCalendarOptionsInput[i] ? i in this.currentCalendarOptionsRefined && (l[i] = this.currentCalendarOptionsRefined[i]) : s[i] ? (l[i] = s[i](a[i])) : (p[i] = a[i]), (d = !0));
            return d && ((this.currentViewOptionsInput = a), (this.currentViewOptionsRefined = l)), { rawOptions: this.currentViewOptionsInput, refinedOptions: this.currentViewOptionsRefined, extra: p };
        });
    var Ki = $i;
    function $i(e) {
        var t = this,
            n =
                ((this.computeOptionsData = S(this._computeOptionsData)),
                (this.computeCurrentViewData = S(this._computeCurrentViewData)),
                (this.organizeRawLocales = S(Yr)),
                (this.buildLocale = S(Zr)),
                (this.buildPluginHooks = ii()),
                (this.buildDateEnv = S(Ji)),
                (this.buildTheme = S(Qi)),
                (this.parseToolbars = S(Wi)),
                (this.buildViewSpecs = S(ki)),
                (this.buildDateProfileGenerator = an(ea)),
                (this.buildViewApi = S(ta)),
                (this.buildViewUiProps = an(oa)),
                (this.buildEventUiBySource = S(na, y)),
                (this.buildEventUiBases = S(ra)),
                (this.parseContextBusinessHours = an(aa)),
                (this.buildTitle = S(Xi)),
                (this.emitter = new To()),
                (this.actionRunner = new qi(this._handleAction.bind(this), this.updateData.bind(this))),
                (this.currentCalendarOptionsInput = {}),
                (this.currentCalendarOptionsRefined = {}),
                (this.currentViewOptionsInput = {}),
                (this.currentViewOptionsRefined = {}),
                (this.currentCalendarOptionsRefiners = {}),
                (this.getCurrentData = function () {
                    return t.data;
                }),
                (this.dispatch = function (e) {
                    t.actionRunner.request(e);
                }),
                (this.props = e),
                this.actionRunner.pause(),
                {}),
            r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi),
            o = r.calendarOptions.initialView || r.pluginHooks.initialView,
            i = this.computeCurrentViewData(o, r, e.optionOverrides, n);
        (e.calendarApi.currentDataManager = this).emitter.setThisContext(e.calendarApi), this.emitter.setOptions(i.options);
        (s = r.calendarOptions), (d = r.dateEnv);
        var a = null != (a = s.initialDate) ? d.createMarker(a) : Ar(s.now, d),
            s = i.dateProfileGenerator.build(a);
        ar(s.activeRange, a) || (a = s.currentRange.start);
        for (
            var l = { dateEnv: r.dateEnv, options: r.calendarOptions, pluginHooks: r.pluginHooks, calendarApi: e.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData },
                u = 0,
                c = r.pluginHooks.contextInit;
            u < c.length;
            u++
        )
            (0, c[u])(l);
        (d = r.calendarOptions), (i = l), (e = (e = s) ? e.activeRange : null);
        for (
            var d = Pi(
                    {},
                    (function (e, t) {
                        var n = Or(t),
                            r = [].concat(e.eventSources || []),
                            o = [];
                        e.initialEvents && r.unshift(e.initialEvents), e.events && r.unshift(e.events);
                        for (var i = 0, a = r; i < a.length; i++) {
                            var s = Hr(a[i], t, n);
                            s && o.push(s);
                        }
                        return o;
                    })(d, i),
                    e,
                    i
                ),
                p = {
                    dynamicOptionOverrides: n,
                    currentViewType: o,
                    currentDate: a,
                    dateProfile: s,
                    businessHours: this.parseContextBusinessHours(l),
                    eventSources: d,
                    eventUiBases: {},
                    eventStore: { defs: {}, instances: {} },
                    renderableEventStore: { defs: {}, instances: {} },
                    dateSelection: null,
                    eventSelection: "",
                    eventDrag: null,
                    eventResize: null,
                    selectionConfig: this.buildViewUiProps(l).selectionConfig,
                },
                f = I(I({}, l), p),
                h = 0,
                g = r.pluginHooks.reducers;
            h < g.length;
            h++
        ) {
            var v = g[h];
            I(p, v(null, null, f));
        }
        ia(p, l) && this.emitter.trigger("loading", !0), (this.state = p), this.updateData(), this.actionRunner.resume();
    }
    function Ji(e, t, n, r, o, i, a, s) {
        t = Zr(t || a.defaultCode, a.map);
        return new zr({ calendarSystem: "gregory", timeZone: e, namedTimeZoneImpl: i.namedTimeZonedImpl, locale: t, weekNumberCalculation: n, firstDay: r, weekText: o, cmdFormatter: i.cmdFormatter, defaultSeparator: s });
    }
    function Qi(e, t) {
        return new (t.themeClasses[e.themeSystem] || si)(e);
    }
    function ea(e) {
        return new (e.dateProfileGeneratorClass || Mi)(e);
    }
    function ta(e, t, n) {
        return new Ir(e, t, n);
    }
    function na(e) {
        return P(e, function (e) {
            return e.ui;
        });
    }
    function ra(e, t, n) {
        var r,
            o = { "": t };
        for (r in e) {
            var i = e[r];
            i.sourceId && n[i.sourceId] && (o[r] = n[i.sourceId]);
        }
        return o;
    }
    function oa(e) {
        var t = e.options;
        return {
            eventUiSingleBase: Vn(
                {
                    display: t.eventDisplay,
                    editable: t.editable,
                    startEditable: t.eventStartEditable,
                    durationEditable: t.eventDurationEditable,
                    constraint: t.eventConstraint,
                    overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                    allow: t.eventAllow,
                    backgroundColor: t.eventBackgroundColor,
                    borderColor: t.eventBorderColor,
                    textColor: t.eventTextColor,
                    color: t.eventColor,
                },
                e
            ),
            selectionConfig: Vn({ constraint: t.selectConstraint, overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0, allow: t.selectAllow }, e),
        };
    }
    function ia(e, t) {
        for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++) if ((0, r[n])(e)) return !0;
        return !1;
    }
    function aa(e) {
        return Qr(e.options.businessHours, e);
    }
    function sa(e, t) {
        for (var n in e) console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""));
    }
    t(ca, (la = Vo)),
        (ca.prototype.render = function () {
            return this.props.children(this.state);
        }),
        (ca.prototype.componentDidUpdate = function (e) {
            var t = this.props.optionOverrides;
            t !== e.optionOverrides && this.dataManager.resetOptions(t);
        });
    var la,
        ua = ca;
    function ca(e) {
        var t = la.call(this, e) || this;
        return (
            (t.handleData = function (e) {
                t.dataManager ? t.setState(e) : (t.state = e);
            }),
            (t.dataManager = new Ki({ optionOverrides: e.optionOverrides, calendarApi: e.calendarApi, onData: t.handleData })),
            t
        );
    }
    (pa.prototype.addSegs = function (e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            var o = r[n];
            this.insertEntry(o, t);
        }
        return t;
    }),
        (pa.prototype.insertEntry = function (e, t) {
            var n = this.findInsertion(e);
            return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, t);
        }),
        (pa.prototype.isInsertionValid = function (e, t) {
            return (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt);
        }),
        (pa.prototype.handleInvalidInsertion = function (e, t, n) {
            return this.allowReslicing && e.touchingEntry ? this.splitEntry(t, e.touchingEntry, n) : (n.push(t), 0);
        }),
        (pa.prototype.splitEntry = function (e, t, n) {
            var r = 0,
                o = [],
                i = e.span,
                t = t.span;
            return (
                i.start < t.start && (r += this.insertEntry({ index: e.index, thickness: e.thickness, span: { start: i.start, end: t.start } }, o)),
                i.end > t.end && (r += this.insertEntry({ index: e.index, thickness: e.thickness, span: { start: t.end, end: i.end } }, o)),
                r ? (n.push.apply(n, h([{ index: e.index, thickness: e.thickness, span: ma(t, i) }], o)), r) : (n.push(e), 0)
            );
        }),
        (pa.prototype.insertEntryAt = function (e, t) {
            var n = this.entriesByLevel,
                r = this.levelCoords;
            -1 === t.lateral ? (ya(r, t.level, t.levelCoord), ya(n, t.level, [e])) : ya(n[t.level], t.lateral, e), (this.stackCnts[ha(e)] = t.stackCnt);
        }),
        (pa.prototype.findInsertion = function (e) {
            for (var t = this.levelCoords, n = this.entriesByLevel, r = this.strictOrder, o = this.stackCnts, i = t.length, a = 0, s = -1, l = -1, u = null, c = 0, d = 0; d < i; d += 1) {
                var p = t[d];
                if (!r && p >= a + e.thickness) break;
                for (var f, h = n[d], g = Ea(h, e.span.start, fa), v = g[0] + g[1]; (f = h[v]) && f.span.start < e.span.end; ) {
                    var m = p + f.thickness;
                    a < m && ((a = m), (u = f), (s = d), (l = v)), m === a && (c = Math.max(c, o[ha(f)] + 1)), (v += 1);
                }
            }
            var y = 0;
            if (u) for (y = s + 1; y < i && t[y] < a; ) y += 1;
            var E = -1;
            return { touchingLevel: s, touchingLateral: l, touchingEntry: u, stackCnt: c, levelCoord: a, level: y, lateral: (E = y < i && t[y] === a ? Ea(n[y], e.span.end, fa)[0] : E) };
        }),
        (pa.prototype.toRects = function () {
            for (var e = this.entriesByLevel, t = this.levelCoords, n = e.length, r = [], o = 0; o < n; o += 1)
                for (var i = e[o], a = t[o], s = 0, l = i; s < l.length; s++) {
                    var u = l[s];
                    r.push(I(I({}, u), { levelCoord: a }));
                }
            return r;
        });
    var da = pa;
    function pa() {
        (this.strictOrder = !1), (this.allowReslicing = !1), (this.maxCoord = -1), (this.maxStackCnt = -1), (this.levelCoords = []), (this.entriesByLevel = []), (this.stackCnts = {});
    }
    function fa(e) {
        return e.span.end;
    }
    function ha(e) {
        return e.index + ":" + e.span.start;
    }
    function ga(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            for (var o = r[n], i = [], a = { span: o.span, entries: [o] }, s = 0, l = t; s < l.length; s++) {
                var u = l[s];
                ma(u.span, a.span) ? (a = { entries: u.entries.concat(a.entries), span: va(u.span, a.span) }) : i.push(u);
            }
            i.push(a), (t = i);
        }
        return t;
    }
    function va(e, t) {
        return { start: Math.min(e.start, t.start), end: Math.max(e.end, t.end) };
    }
    function ma(e, t) {
        var n = Math.max(e.start, t.start),
            e = Math.min(e.end, t.end);
        return n < e ? { start: n, end: e } : null;
    }
    function ya(e, t, n) {
        e.splice(t, 0, n);
    }
    function Ea(e, t, n) {
        var r = 0,
            o = e.length;
        if (!o || t < n(e[r])) return [0, 0];
        if (t > n(e[o - 1])) return [o, 0];
        for (; r < o; ) {
            var i = Math.floor(r + (o - r) / 2),
                a = n(e[i]);
            if (t < a) o = i;
            else {
                if (!(a < t)) return [i, 1];
                r = i + 1;
            }
        }
        return [r, 0];
    }
    ba.prototype.destroy = function () {};
    var Sa = ba;
    function ba(e) {
        (this.component = e.component), (this.isHitComboAllowed = e.isHitComboAllowed || null);
    }
    function Da(e) {
        var t;
        return ((t = {})[e.component.uid] = e), t;
    }
    var Ca = {},
        wa = ((_a.prototype.destroy = function () {}), (_a.prototype.setMirrorIsVisible = function (e) {}), (_a.prototype.setMirrorNeedsRevert = function (e) {}), (_a.prototype.setAutoScrollEnabled = function (e) {}), _a),
        Ra = {},
        Ta = { startTime: E, duration: E, create: Boolean, sourceId: String };
    function _a(e, t) {
        this.emitter = new To();
    }
    function ka(e) {
        var e = In(e, Ta),
            t = e.refined,
            e = e.extra;
        return { startTime: t.startTime || null, duration: t.duration || null, create: null == t.create || t.create, sourceId: t.sourceId, leftoverProps: e };
    }
    t(qa, (Ha = c)),
        (qa.prototype.render = function () {
            var t = this,
                e = this.props.widgetGroups.map(function (e) {
                    return t.renderWidgetGroup(e);
                });
            return C.apply(void 0, h(["div", { className: "fc-toolbar-chunk" }], e));
        }),
        (qa.prototype.renderWidgetGroup = function (e) {
            for (var t = this.props, n = this.context.theme, r = [], o = !0, i = 0, a = e; i < a.length; i++) {
                var s,
                    l,
                    u = a[i],
                    c = u.buttonName,
                    d = u.buttonClick,
                    p = u.buttonText,
                    f = u.buttonIcon,
                    u = u.buttonHint;
                "title" === c
                    ? ((o = !1), r.push(C("h2", { className: "fc-toolbar-title", id: t.titleId }, t.title)))
                    : ((s = c === t.activeButton),
                      (l = (!t.isTodayEnabled && "today" === c) || (!t.isPrevEnabled && "prev" === c) || (!t.isNextEnabled && "next" === c)),
                      (c = ["fc-" + c + "-button", n.getClass("button")]),
                      s && c.push(n.getClass("buttonActive")),
                      r.push(C("button", { type: "button", title: "function" == typeof u ? u(t.navUnit) : u, disabled: l, "aria-pressed": s, className: c.join(" "), onClick: d }, p || (f ? C("span", { className: f }) : ""))));
            }
            return 1 < r.length ? ((e = (o && n.getClass("buttonGroup")) || ""), C.apply(void 0, h(["div", { className: e }], r))) : r[0];
        });
    var xa,
        Ma,
        Ia,
        Pa,
        Na,
        Ha,
        Oa = qa,
        Aa =
            (t(Ga, (Na = c)),
            (Ga.prototype.render = function () {
                var e = this.props,
                    t = e.model,
                    e = e.extraClassName,
                    n = !1,
                    t = t.sectionWidgets,
                    r = t.center,
                    o = t.left ? ((n = !0), t.left) : t.start,
                    t = t.right ? ((n = !0), t.right) : t.end;
                return C("div", { className: [e || "", "fc-toolbar", n ? "fc-toolbar-ltr" : ""].join(" ") }, this.renderSection("start", o || []), this.renderSection("center", r || []), this.renderSection("end", t || []));
            }),
            (Ga.prototype.renderSection = function (e, t) {
                var n = this.props;
                return C(Oa, {
                    key: e,
                    widgetGroups: t,
                    title: n.title,
                    navUnit: n.navUnit,
                    activeButton: n.activeButton,
                    isTodayEnabled: n.isTodayEnabled,
                    isPrevEnabled: n.isPrevEnabled,
                    isNextEnabled: n.isNextEnabled,
                    titleId: n.titleId,
                });
            }),
            Ga),
        La =
            (t(ja, (Pa = c)),
            (ja.prototype.render = function () {
                var e = this.props,
                    t = this.state,
                    n = e.aspectRatio,
                    r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
                    o = "",
                    i = "";
                return (
                    n ? (null !== t.availableWidth ? (o = t.availableWidth / n) : (i = (1 / n) * 100 + "%")) : (o = e.height || ""),
                    C("div", { "aria-labelledby": e.labeledById, ref: this.handleEl, className: r.join(" "), style: { height: o, paddingBottom: i } }, e.children)
                );
            }),
            (ja.prototype.componentDidMount = function () {
                this.context.addResizeHandler(this.handleResize);
            }),
            (ja.prototype.componentWillUnmount = function () {
                this.context.removeResizeHandler(this.handleResize);
            }),
            (ja.prototype.updateAvailableWidth = function () {
                this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
            }),
            ja),
        Ua = (t(za, (Ia = Sa)), za),
        Wa =
            (t(Ba, (Ma = Sa)),
            (Ba.prototype.destroy = function () {
                this.removeHoverListeners();
            }),
            (Ba.prototype.triggerEvent = function (e, t, n) {
                var r = this.component,
                    o = r.context,
                    i = cr(n);
                (t && !r.isValidSegDownEl(t.target)) || o.emitter.trigger(e, { el: n, event: new N(o, i.eventRange.def, i.eventRange.instance), jsEvent: t, view: o.viewApi });
            }),
            Ba),
        Va =
            (t(Fa, (xa = $o)),
            (Fa.prototype.render = function () {
                var e,
                    t = this.props,
                    n = t.toolbarConfig,
                    r = t.options,
                    o = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, Ar(t.options.now, t.dateEnv), t.viewTitle),
                    i = !1,
                    a = "",
                    r =
                        (t.isHeightAuto || t.forPrint ? (a = "") : null != r.height ? (i = !0) : null != r.contentHeight ? (a = r.contentHeight) : (e = Math.max(r.aspectRatio, 0.5)),
                        this.buildViewContext(
                            t.viewSpec,
                            t.viewApi,
                            t.options,
                            t.dateProfileGenerator,
                            t.dateEnv,
                            t.theme,
                            t.pluginHooks,
                            t.dispatch,
                            t.getCurrentData,
                            t.emitter,
                            t.calendarApi,
                            this.registerInteractiveComponent,
                            this.unregisterInteractiveComponent
                        )),
                    s = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
                return C(
                    Yo.Provider,
                    { value: r },
                    n.header && C(Aa, I({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: s }, o)),
                    C(La, { liquid: i, height: a, aspectRatio: e, labeledById: s }, this.renderView(t), this.buildAppendContent()),
                    n.footer && C(Aa, I({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, o))
                );
            }),
            (Fa.prototype.componentDidMount = function () {
                var e,
                    t = this.props,
                    n =
                        ((this.calendarInteractions = t.pluginHooks.calendarInteractions.map(function (e) {
                            return new e(t);
                        })),
                        window.addEventListener("resize", this.handleWindowResize),
                        t.pluginHooks.propSetHandlers);
                for (e in n) n[e](t[e], t);
            }),
            (Fa.prototype.componentDidUpdate = function (e) {
                var t,
                    n = this.props,
                    r = n.pluginHooks.propSetHandlers;
                for (t in r) n[t] !== e[t] && r[t](n[t], n);
            }),
            (Fa.prototype.componentWillUnmount = function () {
                window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
                for (var e = 0, t = this.calendarInteractions; e < t.length; e++) t[e].destroy();
                this.props.emitter.trigger("_unmount");
            }),
            (Fa.prototype.buildAppendContent = function () {
                var t = this.props,
                    e = t.pluginHooks.viewContainerAppends.map(function (e) {
                        return e(t);
                    });
                return C.apply(void 0, h([w, {}], e));
            }),
            (Fa.prototype.renderView = function (e) {
                for (
                    var t = e.pluginHooks,
                        n = e.viewSpec,
                        r = {
                            dateProfile: e.dateProfile,
                            businessHours: e.businessHours,
                            eventStore: e.renderableEventStore,
                            eventUiBases: e.eventUiBases,
                            dateSelection: e.dateSelection,
                            eventSelection: e.eventSelection,
                            eventDrag: e.eventDrag,
                            eventResize: e.eventResize,
                            isHeightAuto: e.isHeightAuto,
                            forPrint: e.forPrint,
                        },
                        o = 0,
                        i = this.buildViewPropTransformers(t.viewPropsTransformers);
                    o < i.length;
                    o++
                ) {
                    var a = i[o];
                    I(r, a.transform(r, e));
                }
                t = n.component;
                return C(t, I({}, r));
            }),
            Fa);
    function Fa() {
        var r = (null !== xa && xa.apply(this, arguments)) || this;
        return (
            (r.buildViewContext = S(Xo)),
            (r.buildViewPropTransformers = S(Za)),
            (r.buildToolbarProps = S(Ya)),
            (r.headerRef = u()),
            (r.footerRef = u()),
            (r.interactionsStore = {}),
            (r.state = { viewLabelId: Je() }),
            (r.registerInteractiveComponent = function (e, t) {
                var n = { component: e, el: (t = t).el, useEventCenter: null == t.useEventCenter || t.useEventCenter, isHitComboAllowed: t.isHitComboAllowed || null },
                    t = [Ua, Wa].concat(r.props.pluginHooks.componentInteractions).map(function (e) {
                        return new e(n);
                    });
                (r.interactionsStore[e.uid] = t), (Ca[e.uid] = n);
            }),
            (r.unregisterInteractiveComponent = function (e) {
                for (var t = 0, n = r.interactionsStore[e.uid]; t < n.length; t++) n[t].destroy();
                delete r.interactionsStore[e.uid], delete Ca[e.uid];
            }),
            (r.resizeRunner = new Gi(function () {
                r.props.emitter.trigger("_resize", !0), r.props.emitter.trigger("windowResize", { view: r.props.viewApi });
            })),
            (r.handleWindowResize = function (e) {
                var t = r.props.options;
                t.handleWindowResize && e.target === window && r.resizeRunner.request(t.windowResizeDelay);
            }),
            r
        );
    }
    function Ba(e) {
        var r,
            o,
            i,
            n = Ma.call(this, e) || this;
        return (
            (n.handleEventElRemove = function (e) {
                e === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl);
            }),
            (n.handleSegEnter = function (e, t) {
                cr(t) && ((n.currentSegEl = t), n.triggerEvent("eventMouseEnter", e, t));
            }),
            (n.handleSegLeave = function (e, t) {
                n.currentSegEl && ((n.currentSegEl = null), n.triggerEvent("eventMouseLeave", e, t));
            }),
            (n.removeHoverListeners =
                ((e = e.el),
                (r = n.handleSegEnter),
                (o = n.handleSegLeave),
                et(e, "mouseover", ".fc-event", function (e, t) {
                    var n;
                    t !== i &&
                        (r(e, (i = t)),
                        (n = function (e) {
                            (i = null), o(e, t), t.removeEventListener("mouseleave", n);
                        }),
                        t.addEventListener("mouseleave", n));
                }))),
            n
        );
    }
    function za(e) {
        var a = Ia.call(this, e) || this;
        return (
            (a.handleSegClick = function (e, t) {
                var n,
                    r = a.component,
                    o = r.context,
                    i = cr(t);
                i &&
                    r.isValidSegDownEl(e.target) &&
                    ((n = (n = l(e.target, ".fc-event-forced-url")) ? n.querySelector("a[href]").href : ""),
                    o.emitter.trigger("eventClick", { el: t, event: new N(r.context, i.eventRange.def, i.eventRange.instance), jsEvent: e, view: o.viewApi }),
                    n && !e.defaultPrevented && (window.location.href = n));
            }),
            (a.destroy = et(e.el, "click", ".fc-event", a.handleSegClick)),
            a
        );
    }
    function ja() {
        var t = (null !== Pa && Pa.apply(this, arguments)) || this;
        return (
            (t.state = { availableWidth: null }),
            (t.handleEl = function (e) {
                (t.el = e), f(t.props.elRef, e), t.updateAvailableWidth();
            }),
            (t.handleResize = function () {
                t.updateAvailableWidth();
            }),
            t
        );
    }
    function Ga() {
        return (null !== Na && Na.apply(this, arguments)) || this;
    }
    function qa() {
        return (null !== Ha && Ha.apply(this, arguments)) || this;
    }
    function Ya(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1),
            s = n.buildPrev(t, r, !1),
            n = n.buildNext(t, r, !1);
        return { title: i, activeButton: e.type, navUnit: e.singleUnit, isTodayEnabled: a.isValid && !ar(t.currentRange, o), isPrevEnabled: s.isValid, isNextEnabled: n.isValid };
    }
    function Za(e) {
        return e.map(function (e) {
            return new e();
        });
    }
    t($a, (Xa = c)),
        ($a.prototype.render = function () {
            var e = this.props,
                t = e.options,
                n = this.state.forPrint,
                r = n || "auto" === t.height || "auto" === t.contentHeight,
                o = r || null == t.height ? "" : t.height,
                t = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
            return io() || t.push("fc-liquid-hack"), e.children(t, o, r, n);
        }),
        ($a.prototype.componentDidMount = function () {
            var e = this.props.emitter;
            e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
        }),
        ($a.prototype.componentWillUnmount = function () {
            var e = this.props.emitter;
            e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
        });
    var Xa,
        Ka = $a;
    function $a() {
        var e = (null !== Xa && Xa.apply(this, arguments)) || this;
        return (
            (e.state = { forPrint: !1 }),
            (e.handleBeforePrint = function () {
                e.setState({ forPrint: !0 });
            }),
            (e.handleAfterPrint = function () {
                e.setState({ forPrint: !1 });
            }),
            e
        );
    }
    function Ja(e, t) {
        return a(!e || 10 < t ? { weekday: "short" } : 1 < t ? { weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 } : { weekday: "long" });
    }
    var Qa = "fc-col-header-cell";
    function es(e) {
        return e.text;
    }
    t(cs, (rs = c)),
        (cs.prototype.render = function () {
            var e = this.context,
                t = e.dateEnv,
                n = e.options,
                r = e.theme,
                e = e.viewApi,
                o = this.props,
                i = o.date,
                a = o.dateProfile,
                s = co(i, o.todayRange, null, a),
                l = [Qa].concat(po(s, r)),
                a = t.format(i, o.dayHeaderFormat),
                u = !s.isDisabled && 1 < o.colCnt ? go(this.context, i) : {},
                r = I(I(I({ date: t.toDate(i), view: e }, o.extraHookProps), { text: a }), s);
            return C(R, { hookProps: r, classNames: n.dayHeaderClassNames, content: n.dayHeaderContent, defaultContent: es, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, function (e, t, n, r) {
                return C(
                    "th",
                    I({ ref: e, role: "columnheader", className: l.concat(t).join(" "), "data-date": s.isDisabled ? void 0 : tn(i), colSpan: o.colSpan }, o.extraDataAttrs),
                    C("div", { className: "fc-scrollgrid-sync-inner" }, !s.isDisabled && C("a", I({ ref: n, className: ["fc-col-header-cell-cushion", o.isSticky ? "fc-sticky" : ""].join(" ") }, u), r))
                );
            });
        });
    var ts,
        ns,
        rs,
        os = cs,
        is = a({ weekday: "long" }),
        as =
            (t(us, (ns = c)),
            (us.prototype.render = function () {
                var o = this.props,
                    e = this.context,
                    i = e.dateEnv,
                    t = e.theme,
                    n = e.viewApi,
                    e = e.options,
                    a = d(new Date(2592e5), o.dow),
                    r = { dow: o.dow, isDisabled: !1, isFuture: !1, isPast: !1, isToday: !1, isOther: !1 },
                    s = [Qa].concat(po(r, t), o.extraClassNames || []),
                    t = i.format(a, o.dayHeaderFormat),
                    r = I(I(I(I({ date: a }, r), { view: n }), o.extraHookProps), { text: t });
                return C(R, { hookProps: r, classNames: e.dayHeaderClassNames, content: e.dayHeaderContent, defaultContent: es, didMount: e.dayHeaderDidMount, willUnmount: e.dayHeaderWillUnmount }, function (e, t, n, r) {
                    return C(
                        "th",
                        I({ ref: e, role: "columnheader", className: s.concat(t).join(" "), colSpan: o.colSpan }, o.extraDataAttrs),
                        C("div", { className: "fc-scrollgrid-sync-inner" }, C("a", { "aria-label": i.format(a, is), className: ["fc-col-header-cell-cushion", o.isSticky ? "fc-sticky" : ""].join(" "), ref: n }, r))
                    );
                });
            }),
            us),
        ss =
            (t(ls, (ts = Vo)),
            (ls.prototype.render = function () {
                var e = this.props,
                    t = this.state;
                return e.children(t.nowDate, t.todayRange);
            }),
            (ls.prototype.componentDidMount = function () {
                this.setTimeout();
            }),
            (ls.prototype.componentDidUpdate = function (e) {
                e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
            }),
            (ls.prototype.componentWillUnmount = function () {
                this.clearTimeout();
            }),
            (ls.prototype.computeTiming = function () {
                var e = this.props,
                    t = this.context,
                    n = wt(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs),
                    r = t.dateEnv.startOf(n, e.unit),
                    t = t.dateEnv.add(r, E(1, e.unit)),
                    e = t.valueOf() - n.valueOf(),
                    e = Math.min(864e5, e);
                return { currentState: { nowDate: r, todayRange: ds(r) }, nextState: { nowDate: t, todayRange: ds(t) }, waitMs: e };
            }),
            (ls.prototype.setTimeout = function () {
                var e = this,
                    t = this.computeTiming(),
                    n = t.nextState,
                    t = t.waitMs;
                this.timeoutId = setTimeout(function () {
                    e.setState(n, function () {
                        e.setTimeout();
                    });
                }, t);
            }),
            (ls.prototype.clearTimeout = function () {
                this.timeoutId && clearTimeout(this.timeoutId);
            }),
            (ls.contextType = Yo),
            ls);
    function ls(e, t) {
        e = ts.call(this, e, t) || this;
        return (e.initialNowDate = Ar(t.options.now, t.dateEnv)), (e.initialNowQueriedMs = new Date().valueOf()), (e.state = e.computeTiming().currentState), e;
    }
    function us() {
        return (null !== ns && ns.apply(this, arguments)) || this;
    }
    function cs() {
        return (null !== rs && rs.apply(this, arguments)) || this;
    }
    function ds(e) {
        e = m(e);
        return { start: e, end: d(e, 1) };
    }
    t(hs, (ps = c)),
        (hs.prototype.render = function () {
            var e = this.context,
                t = this.props,
                n = t.dates,
                r = t.dateProfile,
                o = t.datesRepDistinctDays,
                i = t.renderIntro,
                a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
            return C(ss, { unit: "day" }, function (e, t) {
                return C(
                    "tr",
                    { role: "row" },
                    i && i("day"),
                    n.map(function (e) {
                        return o ? C(os, { key: e.toISOString(), date: e, dateProfile: r, todayRange: t, colCnt: n.length, dayHeaderFormat: a }) : C(as, { key: e.getUTCDay(), dow: e.getUTCDay(), dayHeaderFormat: a });
                    })
                );
            });
        });
    var ps,
        fs = hs;
    function hs() {
        var e = (null !== ps && ps.apply(this, arguments)) || this;
        return (e.createDayHeaderFormatter = S(gs)), e;
    }
    function gs(e, t, n) {
        return e || Ja(t, n);
    }
    (Ss.prototype.sliceRange = function (e) {
        var t = this.getDateDayIndex(e.start),
            e = this.getDateDayIndex(d(e.end, -1)),
            n = Math.max(0, t),
            r = Math.min(this.cnt - 1, e);
        return (n = Math.ceil(n)) <= (r = Math.floor(r)) ? { firstIndex: n, lastIndex: r, isStart: t === n, isEnd: e === r } : null;
    }),
        (Ss.prototype.getDateDayIndex = function (e) {
            var t = this.indices,
                e = Math.floor(Tt(this.dates[0], e));
            return e < 0 ? t[0] - 1 : e >= t.length ? t[t.length - 1] + 1 : t[e];
        });
    var vs = Ss,
        ms =
            ((Es.prototype.buildCells = function () {
                for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                    for (var n = [], r = 0; r < this.colCnt; r += 1) n.push(this.buildCell(t, r));
                    e.push(n);
                }
                return e;
            }),
            (Es.prototype.buildCell = function (e, t) {
                e = this.daySeries.dates[e * this.colCnt + t];
                return { key: e.toISOString(), date: e };
            }),
            (Es.prototype.buildHeaderDates = function () {
                for (var e = [], t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
                return e;
            }),
            (Es.prototype.sliceRange = function (e) {
                var t = this.colCnt,
                    n = this.daySeries.sliceRange(e),
                    r = [];
                if (n)
                    for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i; ) {
                        var s = Math.floor(a / t),
                            l = Math.min((s + 1) * t, i + 1);
                        r.push({ row: s, firstCol: a % t, lastCol: (l - 1) % t, isStart: n.isStart && a === o, isEnd: n.isEnd && l - 1 === i }), (a = l);
                    }
                return r;
            }),
            Es),
        $o =
            ((ys.prototype.sliceProps = function (e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                var a = e.eventUiBases,
                    s = this.sliceEventStore.apply(this, h([e.eventStore, a, t, n], o));
                return {
                    dateSelectionSegs: this.sliceDateSelection.apply(this, h([e.dateSelection, a, r], o)),
                    businessHourSegs: this.sliceBusinessHours.apply(this, h([e.businessHours, t, n, r], o)),
                    fgEventSegs: s.fg,
                    bgEventSegs: s.bg,
                    eventDrag: this.sliceEventDrag.apply(this, h([e.eventDrag, a, t, n], o)),
                    eventResize: this.sliceEventResize.apply(this, h([e.eventResize, a, t, n], o)),
                    eventSelection: e.eventSelection,
                };
            }),
            (ys.prototype.sliceNowDate = function (e, t) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                return this._sliceDateSpan.apply(this, h([{ range: { start: e, end: wt(e, 1) }, allDay: !1 }, {}, t], n));
            }),
            (ys.prototype._sliceBusinessHours = function (e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                return e ? this._sliceEventStore.apply(this, h([Gt(e, bs(t, Boolean(n)), r), {}, t, n], o)).bg : [];
            }),
            (ys.prototype._sliceEventStore = function (e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                return e ? ((e = sr(e, t, bs(n, Boolean(r)), r)), { bg: this.sliceEventRanges(e.bg, o), fg: this.sliceEventRanges(e.fg, o) }) : { bg: [], fg: [] };
            }),
            (ys.prototype._sliceInteraction = function (e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                if (!e) return null;
                t = sr(e.mutatedEvents, t, bs(n, Boolean(r)), r);
                return { segs: this.sliceEventRanges(t.fg, o), affectedInstances: e.affectedEvents.instances, isEvent: e.isEvent };
            }),
            (ys.prototype._sliceDateSpan = function (e, t, n) {
                for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
                if (!e) return [];
                (i = e), (t = t);
                for (
                    var i,
                        a,
                        s = { def: (a = Xn((a = Yn({ editable: !1 }, (n = n))).refined, a.extra, "", i.allDay, !0, n)), ui: pr(a, t), instance: At(a.defId, i.range), range: i.range, isStart: !0, isEnd: !0 },
                        n = this.sliceRange.apply(this, h([e.range], r)),
                        l = 0,
                        u = n;
                    l < u.length;
                    l++
                )
                    u[l].eventRange = s;
                return n;
            }),
            (ys.prototype.sliceEventRanges = function (e, t) {
                for (var n = [], r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    n.push.apply(n, this.sliceEventRange(i, t));
                }
                return n;
            }),
            (ys.prototype.sliceEventRange = function (e, t) {
                var n = e.range;
                this.forceDayIfListItem && "list-item" === e.ui.display && (n = { start: n.start, end: d(n.start, 1) });
                for (var n = this.sliceRange.apply(this, h([n], t)), r = 0, o = n; r < o.length; r++) {
                    var i = o[r];
                    (i.eventRange = e), (i.isStart = e.isStart && i.isStart), (i.isEnd = e.isEnd && i.isEnd);
                }
                return n;
            }),
            ys);
    function ys() {
        (this.sliceBusinessHours = S(this._sliceBusinessHours)),
            (this.sliceDateSelection = S(this._sliceDateSpan)),
            (this.sliceEventStore = S(this._sliceEventStore)),
            (this.sliceEventDrag = S(this._sliceInteraction)),
            (this.sliceEventResize = S(this._sliceInteraction)),
            (this.forceDayIfListItem = !1);
    }
    function Es(e, t) {
        var n,
            r,
            o,
            i = e.dates;
        if (t) {
            for (r = i[0].getUTCDay(), n = 1; n < i.length && i[n].getUTCDay() !== r; n += 1);
            o = Math.ceil(i.length / n);
        } else (o = 1), (n = i.length);
        (this.rowCnt = o), (this.colCnt = n), (this.daySeries = e), (this.cells = this.buildCells()), (this.headerDates = this.buildHeaderDates());
    }
    function Ss(e, t) {
        for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r; ) t.isHiddenDay(n) ? o.push(a + 0.5) : (o.push((a += 1)), i.push(n)), (n = d(n, 1));
        (this.dates = i), (this.indices = o), (this.cnt = i.length);
    }
    function bs(e, t) {
        var n = e.activeRange;
        return t ? n : { start: wt(n.start, e.slotMinTime.milliseconds), end: wt(n.end, e.slotMaxTime.milliseconds - 864e5) };
    }
    function Ds(e, t, n) {
        var r,
            o = e.mutatedEvents.instances;
        for (r in o) if (!ir(t.validRange, o[r].range)) return !1;
        return ws({ eventDrag: e }, n);
    }
    function Cs(e, t, n) {
        return !!ir(t.validRange, e.range) && ws({ dateSelection: e }, n);
    }
    function ws(e, t) {
        var n = t.getCurrentData(),
            n = I({ businessHours: n.businessHours, dateSelection: "", eventStore: n.eventStore, eventUiBases: n.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, e);
        return (t.pluginHooks.isPropsValid || Rs)(n, t);
    }
    function Rs(e, t, n, r) {
        return (
            void 0 === n && (n = {}),
            !(
                (e.eventDrag &&
                    !(function (e, t, n, r) {
                        var o,
                            i,
                            a = t.getCurrentData(),
                            s = e.eventDrag,
                            l = s.mutatedEvents,
                            u = l.defs,
                            c = l.instances,
                            d = dr(u, s.isEvent ? e.eventUiBases : { "": a.selectionConfig }),
                            p =
                                (r && (d = P(d, r)),
                                (l = e.eventStore),
                                (o = s.affectedEvents.instances),
                                {
                                    defs: l.defs,
                                    instances: Wt(l.instances, function (e) {
                                        return !o[e.instanceId];
                                    }),
                                }),
                            f = p.defs,
                            h = p.instances,
                            g = dr(f, e.eventUiBases);
                        for (i in c) {
                            var v = c[i],
                                m = v.range,
                                y = d[v.defId],
                                E = u[v.defId];
                            if (!Ts(y.constraints, m, p, e.businessHours, t)) return;
                            var S,
                                b = t.options.eventOverlap,
                                D = "function" == typeof b ? b : null;
                            for (S in h) {
                                var C = h[S];
                                if (or(m, C.range)) {
                                    if (!1 === g[C.defId].overlap && s.isEvent) return;
                                    if (!1 === y.overlap) return;
                                    if (D && !D(new N(t, f[C.defId], C), new N(t, E, v))) return;
                                }
                            }
                            for (var w = a.eventStore, R = 0, T = y.allows; R < T.length; R++) {
                                var _ = T[R],
                                    k = I(I({}, n), { range: v.range, allDay: E.allDay }),
                                    x = w.defs[E.defId],
                                    M = w.instances[i],
                                    x = x ? new N(t, x, M) : new N(t, E);
                                if (!_(kr(k, t), x)) return;
                            }
                        }
                        return 1;
                    })(e, t, n, r)) ||
                (e.dateSelection &&
                    !(function (e, t, n, r) {
                        var o = e.eventStore,
                            i = o.defs,
                            a = o.instances,
                            s = e.dateSelection,
                            l = s.range,
                            u = t.getCurrentData().selectionConfig;
                        if (Ts((u = r ? r(u) : u).constraints, l, o, e.businessHours, t)) {
                            var c,
                                r = t.options.selectOverlap,
                                d = "function" == typeof r ? r : null;
                            for (c in a) {
                                var p = a[c];
                                if (or(l, p.range)) {
                                    if (!1 === u.overlap) return;
                                    if (d && !d(new N(t, i[p.defId], p), null)) return;
                                }
                            }
                            for (var f = 0, h = u.allows; f < h.length; f++) if (!(0, h[f])(kr(I(I({}, n), s), t), null)) return;
                            return 1;
                        }
                    })(e, t, n, r))
            )
        );
    }
    function Ts(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++)
            if (
                !(function (e, t) {
                    for (var n = 0, r = e; n < r.length; n++) if (ir(r[n], t)) return 1;
                    return;
                })(
                    (function (t, e, n, r, o) {
                        return "businessHours" === t
                            ? _s(Gt(r, e, o))
                            : "string" == typeof t
                            ? _s(
                                  An(n, function (e) {
                                      return e.groupId === t;
                                  })
                              )
                            : "object" == typeof t && t
                            ? _s(Gt(t, e, o))
                            : [];
                    })(a[i], t, n, r, o),
                    t
                )
            )
                return;
        return 1;
    }
    function _s(e) {
        var t,
            n = e.instances,
            r = [];
        for (t in n) r.push(n[t].range);
        return r;
    }
    var ks,
        xs = /^(visible|hidden)$/,
        Ms =
            (t(Ns, (ks = c)),
            (Ns.prototype.render = function () {
                var e = this.props,
                    t = e.liquid,
                    n = e.liquidIsAbsolute,
                    r = t && n,
                    o = ["fc-scroller"];
                return (
                    t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")),
                    C(
                        "div",
                        {
                            ref: this.handleEl,
                            className: o.join(" "),
                            style: {
                                overflowX: e.overflowX,
                                overflowY: e.overflowY,
                                left: (r && -(e.overcomeLeft || 0)) || "",
                                right: (r && -(e.overcomeRight || 0)) || "",
                                bottom: (r && -(e.overcomeBottom || 0)) || "",
                                marginLeft: (!r && -(e.overcomeLeft || 0)) || "",
                                marginRight: (!r && -(e.overcomeRight || 0)) || "",
                                marginBottom: (!r && -(e.overcomeBottom || 0)) || "",
                                maxHeight: e.maxHeight || "",
                            },
                        },
                        e.children
                    )
                );
            }),
            (Ns.prototype.needsXScrolling = function () {
                if (xs.test(this.props.overflowX)) return !1;
                for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) if (n[r].getBoundingClientRect().width > t) return !0;
                return !1;
            }),
            (Ns.prototype.needsYScrolling = function () {
                if (xs.test(this.props.overflowY)) return !1;
                for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) if (n[r].getBoundingClientRect().height > t) return !0;
                return !1;
            }),
            (Ns.prototype.getXScrollbarWidth = function () {
                return xs.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
            }),
            (Ns.prototype.getYScrollbarWidth = function () {
                return xs.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
            }),
            Ns),
        Is =
            ((Ps.prototype.createRef = function (t) {
                var n = this;
                return (
                    this.callbackMap[t] ||
                    (this.callbackMap[t] = function (e) {
                        n.handleValue(e, String(t));
                    })
                );
            }),
            (Ps.prototype.collect = function (e, t, n) {
                return jt(this.currentMap, e, t, n);
            }),
            (Ps.prototype.getAll = function () {
                return Ft(this.currentMap);
            }),
            Ps);
    function Ps(e) {
        var a = this;
        (this.masterCallback = e),
            (this.currentMap = {}),
            (this.depths = {}),
            (this.callbackMap = {}),
            (this.handleValue = function (e, t) {
                var n = a.depths,
                    r = a.currentMap,
                    o = !1,
                    i = !1;
                null !== e ? ((o = t in r), (r[t] = e), (n[t] = (n[t] || 0) + 1), (i = !0)) : (--n[t], n[t] || (delete r[t], delete a.callbackMap[t], (o = !0))),
                    a.masterCallback && (o && a.masterCallback(null, String(t)), i && a.masterCallback(e, String(t)));
            });
    }
    function Ns() {
        var t = (null !== ks && ks.apply(this, arguments)) || this;
        return (
            (t.handleEl = function (e) {
                (t.el = e), f(t.props.elRef, e);
            }),
            t
        );
    }
    function Hs(e) {
        for (var t = 0, n = 0, r = Ge(e, ".fc-scrollgrid-shrink"); n < r.length; n++) var o = r[n], t = Math.max(t, bt(o));
        return Math.ceil(t);
    }
    function Os(e, t) {
        return e.liquid && t.liquid;
    }
    function As(e, t) {
        return null != t.maxHeight || Os(e, t);
    }
    function Ls(e, t, n, r) {
        var o = n.expandRows;
        return "function" == typeof t.content
            ? t.content(n)
            : C(
                  "table",
                  { role: "presentation", className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "), style: { minWidth: n.tableMinWidth, width: n.clientWidth, height: o ? n.clientHeight : "" } },
                  n.tableColGroupNode,
                  C(r ? "thead" : "tbody", { role: "presentation" }, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent)
              );
    }
    function Us(e, t) {
        return on(e, t, y);
    }
    function Ws(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++) for (var i = o[r], a = i.span || 1, s = 0; s < a; s += 1) n.push(C("col", { style: { width: "shrink" === i.width ? Vs(t) : i.width || "", minWidth: i.minWidth || "" } }));
        return C.apply(void 0, h(["colgroup", {}], n));
    }
    function Vs(e) {
        return null == e ? 4 : e;
    }
    function Fs(e) {
        for (var t = 0, n = e; t < n.length; t++) if ("shrink" === n[t].width) return !0;
        return !1;
    }
    function Bs(e, t) {
        t = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && t.push("fc-scrollgrid-liquid"), t;
    }
    function zs(e, t) {
        var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
        return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
    }
    function js(e) {
        return C("div", { className: "fc-scrollgrid-sticky-shim", style: { width: e.clientWidth, minWidth: e.tableMinWidth } });
    }
    function Gs(e) {
        var t = e.stickyHeaderDates;
        return (t = null != t && "auto" !== t ? t : "auto" === e.height || "auto" === e.viewHeight);
    }
    function qs(e) {
        var t = e.stickyFooterScrollbar;
        return (t = null != t && "auto" !== t ? t : "auto" === e.height || "auto" === e.viewHeight);
    }
    t(_, (Ys = c)),
        (_.prototype.render = function () {
            var e = this.props,
                t = this.state,
                n = this.context,
                r = e.sections || [],
                o = this.processCols(e.cols),
                i = this.renderMicroColGroup(o, t.shrinkWidth),
                o = Bs(e.liquid, n);
            e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
            for (var a, s = r.length, l = 0, u = [], c = [], d = []; l < s && "header" === (a = r[l]).type; ) u.push(this.renderSection(a, i, !0)), (l += 1);
            for (; l < s && "body" === (a = r[l]).type; ) c.push(this.renderSection(a, i, !1)), (l += 1);
            for (; l < s && "footer" === (a = r[l]).type; ) d.push(this.renderSection(a, i, !0)), (l += 1);
            (t = !io()), (n = { role: "rowgroup" });
            return C(
                "table",
                { role: "grid", className: o.join(" "), style: { height: e.height } },
                Boolean(!t && u.length) && C.apply(void 0, h(["thead", n], u)),
                Boolean(!t && c.length) && C.apply(void 0, h(["tbody", n], c)),
                Boolean(!t && d.length) && C.apply(void 0, h(["tfoot", n], d)),
                t && C.apply(void 0, h(h(h(["tbody", n], u), c), d))
            );
        }),
        (_.prototype.renderSection = function (e, t, n) {
            return "outerContent" in e ? C(w, { key: e.key }, e.outerContent) : C("tr", { key: e.key, role: "presentation", className: zs(e, this.props.liquid).join(" ") }, this.renderChunkTd(e, t, e.chunk, n));
        }),
        (_.prototype.renderChunkTd = function (e, t, n, r) {
            if ("outerContent" in n) return n.outerContent;
            var o = this.props,
                i = this.state,
                a = i.forceYScrollbars,
                s = i.scrollerClientWidths,
                i = i.scrollerClientHeights,
                l = As(o, e),
                u = Os(o, e),
                a = o.liquid ? (a ? "scroll" : l ? "auto" : "hidden") : "visible",
                l = e.key,
                t = Ls(
                    e,
                    n,
                    {
                        tableColGroupNode: t,
                        tableMinWidth: "",
                        clientWidth: o.collapsibleWidth || void 0 === s[l] ? null : s[l],
                        clientHeight: void 0 !== i[l] ? i[l] : null,
                        expandRows: e.expandRows,
                        syncRowHeights: !1,
                        rowSyncHeights: [],
                        reportRowHeightChange: function () {},
                    },
                    r
                );
            return C(
                r ? "th" : "td",
                { ref: n.elRef, role: "presentation" },
                C(
                    "div",
                    { className: "fc-scroller-harness" + (u ? " fc-scroller-harness-liquid" : "") },
                    C(Ms, { ref: this.scrollerRefs.createRef(l), elRef: this.scrollerElRefs.createRef(l), overflowY: a, overflowX: o.liquid ? "hidden" : "visible", maxHeight: e.maxHeight, liquid: u, liquidIsAbsolute: !0 }, t)
                )
            );
        }),
        (_.prototype._handleScrollerEl = function (e, t) {
            t = (function (e, t) {
                for (var n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    if (o.key === t) return o;
                }
                return null;
            })(this.props.sections, t);
            t && f(t.chunk.scrollerElRef, e);
        }),
        (_.prototype.componentDidMount = function () {
            this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
        }),
        (_.prototype.componentDidUpdate = function () {
            this.handleSizing();
        }),
        (_.prototype.componentWillUnmount = function () {
            this.context.removeResizeHandler(this.handleSizing);
        }),
        (_.prototype.computeShrinkWidth = function () {
            return Fs(this.props.cols) ? Hs(this.scrollerElRefs.getAll()) : 0;
        }),
        (_.prototype.computeScrollerDims = function () {
            var e = Eo(),
                t = this.scrollerRefs,
                n = this.scrollerElRefs,
                r = !1,
                o = {},
                i = {};
            for (u in t.currentMap) {
                var a = t.currentMap[u];
                if (a && a.needsYScrolling()) {
                    r = !0;
                    break;
                }
            }
            for (var s = 0, l = this.props.sections; s < l.length; s++) {
                var u = l[s].key,
                    c = n.currentMap[u];
                c && ((c = c.parentNode), (o[u] = Math.floor(c.getBoundingClientRect().width - (r ? e.y : 0))), (i[u] = Math.floor(c.getBoundingClientRect().height)));
            }
            return { forceYScrollbars: r, scrollerClientWidths: o, scrollerClientHeights: i };
        });
    var Ys,
        Zs = _;
    function _() {
        var e = (null !== Ys && Ys.apply(this, arguments)) || this;
        return (
            (e.processCols = S(function (e) {
                return e;
            }, Us)),
            (e.renderMicroColGroup = S(Ws)),
            (e.scrollerRefs = new Is()),
            (e.scrollerElRefs = new Is(e._handleScrollerEl.bind(e))),
            (e.state = { shrinkWidth: null, forceYScrollbars: !1, scrollerClientWidths: {}, scrollerClientHeights: {} }),
            (e.handleSizing = function () {
                e.setState(I({ shrinkWidth: e.computeShrinkWidth() }, e.computeScrollerDims()));
            }),
            e
        );
    }
    Zs.addStateEquality({ scrollerClientWidths: y, scrollerClientHeights: y });
    t(el, (Ks = c)),
        (el.prototype.render = function () {
            var o = this.props,
                e = this.context,
                t = e.options,
                n = o.seg,
                r = n.eventRange,
                i = r.ui,
                a = {
                    event: new N(e, r.def, r.instance),
                    view: e.viewApi,
                    timeText: o.timeText,
                    textColor: i.textColor,
                    backgroundColor: i.backgroundColor,
                    borderColor: i.borderColor,
                    isDraggable: !o.disableDragging && gr(n, e),
                    isStartResizable: !o.disableResizing && vr(n, e),
                    isEndResizable: !o.disableResizing && mr(n),
                    isMirror: Boolean(o.isDragging || o.isResizing || o.isDateSelecting),
                    isStart: Boolean(n.isStart),
                    isEnd: Boolean(n.isEnd),
                    isPast: Boolean(o.isPast),
                    isFuture: Boolean(o.isFuture),
                    isToday: Boolean(o.isToday),
                    isSelected: Boolean(o.isSelected),
                    isDragging: Boolean(o.isDragging),
                    isResizing: Boolean(o.isResizing),
                },
                s = Sr(a).concat(i.classNames);
            return C(R, { hookProps: a, classNames: t.eventClassNames, content: t.eventContent, defaultContent: o.defaultContent, didMount: t.eventDidMount, willUnmount: t.eventWillUnmount, elRef: this.elRef }, function (e, t, n, r) {
                return o.children(e, s.concat(t), n, r, a);
            });
        }),
        (el.prototype.componentDidMount = function () {
            ur(this.elRef.current, this.props.seg);
        }),
        (el.prototype.componentDidUpdate = function (e) {
            var t = this.props.seg;
            t !== e.seg && ur(this.elRef.current, t);
        });
    var Xs,
        Ks,
        $s = el,
        Js =
            (t(Qs, (Xs = c)),
            (Qs.prototype.render = function () {
                var i = this.props,
                    a = this.context,
                    s = i.seg,
                    e = a.options.eventTimeFormat || i.defaultTimeFormat,
                    e = yr(s, e, a, i.defaultDisplayEventTime, i.defaultDisplayEventEnd);
                return C(
                    $s,
                    {
                        seg: s,
                        timeText: e,
                        disableDragging: i.disableDragging,
                        disableResizing: i.disableResizing,
                        defaultContent: i.defaultContent || tl,
                        isDragging: i.isDragging,
                        isResizing: i.isResizing,
                        isDateSelecting: i.isDateSelecting,
                        isSelected: i.isSelected,
                        isPast: i.isPast,
                        isFuture: i.isFuture,
                        isToday: i.isToday,
                    },
                    function (e, t, n, r, o) {
                        return C(
                            "a",
                            I({ className: i.extraClassNames.concat(t).join(" "), style: { borderColor: o.borderColor, backgroundColor: o.backgroundColor }, ref: e }, Dr(s, a)),
                            C("div", { className: "fc-event-main", ref: n, style: { color: o.textColor } }, r),
                            o.isStartResizable && C("div", { className: "fc-event-resizer fc-event-resizer-start" }),
                            o.isEndResizable && C("div", { className: "fc-event-resizer fc-event-resizer-end" })
                        );
                    }
                );
            }),
            Qs);
    function Qs() {
        return (null !== Xs && Xs.apply(this, arguments)) || this;
    }
    function el() {
        var e = (null !== Ks && Ks.apply(this, arguments)) || this;
        return (e.elRef = u()), e;
    }
    function tl(e) {
        return C(
            "div",
            { className: "fc-event-main-frame" },
            e.timeText && C("div", { className: "fc-event-time" }, e.timeText),
            C("div", { className: "fc-event-title-container" }, C("div", { className: "fc-event-title fc-sticky" }, e.event.title || C(w, null, " ")))
        );
    }
    function nl(n) {
        return C(Yo.Consumer, null, function (e) {
            var t = e.options,
                e = { isAxis: n.isAxis, date: e.dateEnv.toDate(n.date), view: e.viewApi };
            return C(R, { hookProps: e, classNames: t.nowIndicatorClassNames, content: t.nowIndicatorContent, didMount: t.nowIndicatorDidMount, willUnmount: t.nowIndicatorWillUnmount }, n.children);
        });
    }
    var rl,
        ol = a({ day: "numeric" }),
        il =
            (t(al, (rl = c)),
            (al.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    t = sl({ date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, showDayNumber: e.showDayNumber, extraProps: e.extraHookProps, viewApi: t.viewApi, dateEnv: t.dateEnv });
                return C(fi, { hookProps: t, content: n.dayCellContent, defaultContent: e.defaultContent }, e.children);
            }),
            al);
    function al() {
        return (null !== rl && rl.apply(this, arguments)) || this;
    }
    function sl(e) {
        var t = e.date,
            n = e.dateEnv,
            r = co(t, e.todayRange, null, e.dateProfile);
        return I(I(I({ date: n.toDate(t), view: e.viewApi }, r), { dayNumberText: e.showDayNumber ? n.format(t, ol) : "" }), e.extraProps);
    }
    t(cl, (ll = c)),
        (cl.prototype.render = function () {
            var t = this.props,
                e = this.context,
                n = e.options,
                r = this.refineHookProps({ date: t.date, dateProfile: t.dateProfile, todayRange: t.todayRange, showDayNumber: t.showDayNumber, extraProps: t.extraHookProps, viewApi: e.viewApi, dateEnv: e.dateEnv }),
                o = po(r, e.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)),
                i = r.isDisabled ? {} : { "data-date": tn(t.date) };
            return C(mi, { hookProps: r, didMount: n.dayCellDidMount, willUnmount: n.dayCellWillUnmount, elRef: t.elRef }, function (e) {
                return t.children(e, o, i, r.isDisabled);
            });
        });
    var ll,
        ul = cl;
    function cl() {
        var e = (null !== ll && ll.apply(this, arguments)) || this;
        return (e.refineHookProps = an(sl)), (e.normalizeClassNames = Si()), e;
    }
    function dl(e) {
        return C("div", { className: "fc-" + e });
    }
    function pl(e) {
        return C(
            $s,
            { defaultContent: fl, seg: e.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday },
            function (e, t, n, r, o) {
                return C("div", { ref: e, className: ["fc-bg-event"].concat(t).join(" "), style: { backgroundColor: o.backgroundColor } }, r);
            }
        );
    }
    function fl(e) {
        return e.event.title && C("div", { className: "fc-event-title" }, e.event.title);
    }
    function hl(i) {
        return C(Yo.Consumer, null, function (e) {
            var t = e.dateEnv,
                e = e.options,
                n = i.date,
                r = e.weekNumberFormat || i.defaultFormat,
                o = t.computeWeekNumber(n),
                t = t.format(n, r);
            return C(R, { hookProps: { num: o, text: t, date: n }, classNames: e.weekNumberClassNames, content: e.weekNumberContent, defaultContent: gl, didMount: e.weekNumberDidMount, willUnmount: e.weekNumberWillUnmount }, i.children);
        });
    }
    function gl(e) {
        return e.text;
    }
    t(wl, (yl = c)),
        (wl.prototype.render = function () {
            var e = this.context,
                t = e.theme,
                e = e.options,
                n = this.props,
                r = this.state,
                o = ["fc-popover", t.getClass("popover")].concat(n.extraClassNames || []);
            return zo(
                C(
                    "div",
                    I({ id: n.id, className: o.join(" "), "aria-labelledby": r.titleId }, n.extraAttrs, { ref: this.handleRootEl }),
                    C(
                        "div",
                        { className: "fc-popover-header " + t.getClass("popoverHeader") },
                        C("span", { className: "fc-popover-title", id: r.titleId }, n.title),
                        C("span", { className: "fc-popover-close " + t.getIconClass("close"), title: e.closeHint, onClick: this.handleCloseClick })
                    ),
                    C("div", { className: "fc-popover-body " + t.getClass("popoverContent") }, n.children)
                ),
                n.parentEl
            );
        }),
        (wl.prototype.componentDidMount = function () {
            document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
        }),
        (wl.prototype.componentWillUnmount = function () {
            document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
        }),
        (wl.prototype.updateSize = function () {
            var e,
                t = this.context.isRtl,
                n = this.props,
                r = n.alignmentEl,
                n = n.alignGridTop,
                o = this.rootEl,
                i = (function (e) {
                    for (var t = wo(e), n = e.getBoundingClientRect(), r = 0, o = t; r < o.length; r++) {
                        var i = to(n, o[r].getBoundingClientRect());
                        if (!i) return null;
                        n = i;
                    }
                    return n;
                })(r);
            i &&
                ((e = o.getBoundingClientRect()),
                (n = (n ? l(r, ".fc-scrollgrid").getBoundingClientRect() : i).top),
                (r = t ? i.right - e.width : i.left),
                (n = Math.max(n, 10)),
                (r = Math.min(r, document.documentElement.clientWidth - 10 - e.width)),
                (r = Math.max(r, 10)),
                (t = o.offsetParent.getBoundingClientRect()),
                Ye(o, { top: n - t.top, left: r - t.left }));
        });
    var vl,
        ml,
        yl,
        El = wl,
        Sl =
            (t(Cl, (ml = g)),
            (Cl.prototype.render = function () {
                var e = this.context,
                    t = e.options,
                    e = e.dateEnv,
                    r = this.props,
                    o = r.startDate,
                    i = r.todayRange,
                    a = r.dateProfile,
                    s = e.format(o, t.dayPopoverFormat);
                return C(ul, { date: o, dateProfile: a, todayRange: i, elRef: this.handleRootEl }, function (e, t, n) {
                    return C(
                        El,
                        { elRef: e, id: r.id, title: s, extraClassNames: ["fc-more-popover"].concat(t), extraAttrs: n, parentEl: r.parentEl, alignmentEl: r.alignmentEl, alignGridTop: r.alignGridTop, onClose: r.onClose },
                        C(il, { date: o, dateProfile: a, todayRange: i }, function (e, t) {
                            return t && C("div", { className: "fc-more-popover-misc", ref: e }, t);
                        }),
                        r.children
                    );
                });
            }),
            (Cl.prototype.queryHit = function (e, t, n, r) {
                var o = this.rootEl,
                    i = this.props;
                return 0 <= e && e < n && 0 <= t && t < r
                    ? { dateProfile: i.dateProfile, dateSpan: I({ allDay: !0, range: { start: i.startDate, end: i.endDate } }, i.extraDateSpan), dayEl: o, rect: { left: 0, top: 0, right: n, bottom: r }, layer: 1 }
                    : null;
            }),
            Cl),
        bl =
            (t(Dl, (vl = c)),
            (Dl.prototype.render = function () {
                var s = this,
                    l = this.props,
                    u = this.state;
                return C(Yo.Consumer, null, function (e) {
                    var t = e.viewApi,
                        n = e.options,
                        e = e.calendarApi,
                        r = n.moreLinkText,
                        o = l.moreCnt,
                        i = Tl(l),
                        e = "function" == typeof r ? r.call(e, o) : "+" + o + " " + r,
                        a = yt(n.moreLinkHint, [o], e),
                        r = { num: o, shortText: "+" + o, text: e, view: t };
                    return C(
                        w,
                        null,
                        Boolean(l.moreCnt) &&
                            C(
                                R,
                                { elRef: s.linkElRef, hookProps: r, classNames: n.moreLinkClassNames, content: n.moreLinkContent, defaultContent: l.defaultContent || Rl, didMount: n.moreLinkDidMount, willUnmount: n.moreLinkWillUnmount },
                                function (e, t, n, r) {
                                    return l.children(e, ["fc-more-link"].concat(t), n, r, s.handleClick, a, u.isPopoverOpen, u.isPopoverOpen ? u.popoverId : "");
                                }
                            ),
                        u.isPopoverOpen &&
                            C(
                                Sl,
                                {
                                    id: u.popoverId,
                                    startDate: i.start,
                                    endDate: i.end,
                                    dateProfile: l.dateProfile,
                                    todayRange: l.todayRange,
                                    extraDateSpan: l.extraDateSpan,
                                    parentEl: s.parentEl,
                                    alignmentEl: l.alignmentElRef.current,
                                    alignGridTop: l.alignGridTop,
                                    onClose: s.handlePopoverClose,
                                },
                                l.popoverContent()
                            )
                    );
                });
            }),
            (Dl.prototype.componentDidMount = function () {
                this.updateParentEl();
            }),
            (Dl.prototype.componentDidUpdate = function () {
                this.updateParentEl();
            }),
            (Dl.prototype.updateParentEl = function () {
                this.linkElRef.current && (this.parentEl = l(this.linkElRef.current, ".fc-view-harness"));
            }),
            Dl);
    function Dl() {
        var a = (null !== vl && vl.apply(this, arguments)) || this;
        return (
            (a.linkElRef = u()),
            (a.state = { isPopoverOpen: !1, popoverId: Je() }),
            (a.handleClick = function (e) {
                var t = a.props,
                    o = a.context,
                    n = o.options.moreLinkClick,
                    r = Tl(t).start;
                function i(e) {
                    var t = e.eventRange,
                        n = t.def,
                        r = t.instance,
                        t = t.range;
                    return { event: new N(o, n, r), start: o.dateEnv.toDate(t.start), end: o.dateEnv.toDate(t.end), isStart: e.isStart, isEnd: e.isEnd };
                }
                (n = "function" == typeof n ? n({ date: r, allDay: Boolean(t.allDayDate), allSegs: t.allSegs.map(i), hiddenSegs: t.hiddenSegs.map(i), jsEvent: e, view: o.viewApi }) : n) && "popover" !== n
                    ? "string" == typeof n && o.calendarApi.zoomTo(r, n)
                    : a.setState({ isPopoverOpen: !0 });
            }),
            (a.handlePopoverClose = function () {
                a.setState({ isPopoverOpen: !1 });
            }),
            a
        );
    }
    function Cl() {
        var t = (null !== ml && ml.apply(this, arguments)) || this;
        return (
            (t.handleRootEl = function (e) {
                (t.rootEl = e) ? t.context.registerInteractiveComponent(t, { el: e, useEventCenter: !1 }) : t.context.unregisterInteractiveComponent(t);
            }),
            t
        );
    }
    function wl() {
        var t = (null !== yl && yl.apply(this, arguments)) || this;
        return (
            (t.state = { titleId: Je() }),
            (t.handleRootEl = function (e) {
                (t.rootEl = e), t.props.elRef && f(t.props.elRef, e);
            }),
            (t.handleDocumentMouseDown = function (e) {
                e = Xe(e);
                t.rootEl.contains(e) || t.handleCloseClick();
            }),
            (t.handleDocumentKeyDown = function (e) {
                "Escape" === e.key && t.handleCloseClick();
            }),
            (t.handleCloseClick = function () {
                var e = t.props.onClose;
                e && e();
            }),
            t
        );
    }
    function Rl(e) {
        return e.text;
    }
    function Tl(e) {
        if (e.allDayDate) return { start: e.allDayDate, end: d(e.allDayDate, 1) };
        e = e.hiddenSegs;
        return { start: _l(e), end: e.reduce(xl).eventRange.range.end };
    }
    function _l(e) {
        return e.reduce(kl).eventRange.range.start;
    }
    function kl(e, t) {
        return e.eventRange.range.start < t.eventRange.range.start ? e : t;
    }
    function xl(e, t) {
        return e.eventRange.range.end > t.eventRange.range.end ? e : t;
    }
    t(k, (Ml = Ue)),
        Object.defineProperty(k.prototype, "view", {
            get: function () {
                return this.currentData.viewApi;
            },
            enumerable: !1,
            configurable: !0,
        }),
        (k.prototype.render = function () {
            var e = this.isRendering;
            e ? (this.customContentRenderId += 1) : (this.isRendering = !0), this.renderRunner.request(), e && this.updateSize();
        }),
        (k.prototype.destroy = function () {
            this.isRendering && ((this.isRendering = !1), this.renderRunner.request());
        }),
        (k.prototype.updateSize = function () {
            Ml.prototype.updateSize.call(this), jo();
        }),
        (k.prototype.batchRendering = function (e) {
            this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
        }),
        (k.prototype.pauseRendering = function () {
            this.renderRunner.pause("pauseRendering");
        }),
        (k.prototype.resumeRendering = function () {
            this.renderRunner.resume("pauseRendering", !0);
        }),
        (k.prototype.resetOptions = function (e, t) {
            this.currentDataManager.resetOptions(e, t);
        }),
        (k.prototype.setClassNames = function (e) {
            if (!on(e, this.currentClassNames)) {
                for (var t = this.el.classList, n = 0, r = this.currentClassNames; n < r.length; n++) {
                    var o = r[n];
                    t.remove(o);
                }
                for (var i = 0, a = e; i < a.length; i++) (o = a[i]), t.add(o);
                this.currentClassNames = e;
            }
        }),
        (k.prototype.setHeight = function (e) {
            Ze(this.el, "height", e);
        });
    var Ml,
        Il = k;
    function k(e, t) {
        void 0 === t && (t = {});
        var i = Ml.call(this) || this;
        return (
            (i.isRendering = !1),
            (i.isRendered = !1),
            (i.currentClassNames = []),
            (i.customContentRenderId = 0),
            (i.handleAction = function (e) {
                switch (e.type) {
                    case "SET_EVENT_DRAG":
                    case "SET_EVENT_RESIZE":
                        i.renderRunner.tryDrain();
                }
            }),
            (i.handleData = function (e) {
                (i.currentData = e), i.renderRunner.request(e.calendarOptions.rerenderDelay);
            }),
            (i.handleRenderRequest = function () {
                var o;
                i.isRendering
                    ? ((i.isRendered = !0),
                      (o = i.currentData),
                      Fo(
                          C(Ka, { options: o.calendarOptions, theme: o.theme, emitter: o.emitter }, function (e, t, n, r) {
                              return i.setClassNames(e), i.setHeight(t), C(di.Provider, { value: i.customContentRenderId }, C(Va, I({ isHeightAuto: n, forPrint: r }, o)));
                          }),
                          i.el
                      ))
                    : i.isRendered && ((i.isRendered = !1), Go(i.el), i.setClassNames([]), i.setHeight("")),
                    jo();
            }),
            (i.el = e),
            (i.renderRunner = new Gi(i.handleRenderRequest)),
            new Ki({ optionOverrides: t, calendarApi: i, onAction: i.handleAction, onData: i.handleData }),
            i
        );
    }
    Ra.touchMouseIgnoreWait = 500;
    var Pl = 0,
        Nl = 0,
        Hl = !1,
        Ol =
            ((x.prototype.destroy = function () {
                this.containerEl.removeEventListener("mousedown", this.handleMouseDown),
                    this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }),
                    --Nl || window.removeEventListener("touchmove", Al, { passive: !1 });
            }),
            (x.prototype.tryStart = function (e) {
                var t = this.querySubjectEl(e),
                    e = e.target;
                return !(!t || (this.handleSelector && !l(e, this.handleSelector)) || ((this.subjectEl = t), (this.isDragging = !0), (this.wasTouchScroll = !1)));
            }),
            (x.prototype.cleanup = function () {
                (Hl = !1), (this.isDragging = !1), (this.subjectEl = null), this.destroyScrollWatch();
            }),
            (x.prototype.querySubjectEl = function (e) {
                return this.selector ? l(e.target, this.selector) : this.containerEl;
            }),
            (x.prototype.shouldIgnoreMouse = function () {
                return Pl || this.isTouchDragging;
            }),
            (x.prototype.cancelTouchScroll = function () {
                this.isDragging && (Hl = !0);
            }),
            (x.prototype.initScrollWatch = function (e) {
                this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
            }),
            (x.prototype.recordCoords = function (e) {
                this.shouldWatchScroll && ((this.prevPageX = e.pageX), (this.prevPageY = e.pageY), (this.prevScrollX = window.pageXOffset), (this.prevScrollY = window.pageYOffset));
            }),
            (x.prototype.destroyScrollWatch = function () {
                this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
            }),
            (x.prototype.createEventFromMouse = function (e, t) {
                var n = 0,
                    r = 0;
                return (
                    t ? ((this.origPageX = e.pageX), (this.origPageY = e.pageY)) : ((n = e.pageX - this.origPageX), (r = e.pageY - this.origPageY)),
                    { origEvent: e, isTouch: !1, subjectEl: this.subjectEl, pageX: e.pageX, pageY: e.pageY, deltaX: n, deltaY: r }
                );
            }),
            (x.prototype.createEventFromTouch = function (e, t) {
                var n,
                    r = e.touches,
                    o = 0,
                    i = 0,
                    r = r && r.length ? ((n = r[0].pageX), r[0].pageY) : ((n = e.pageX), e.pageY);
                return t ? ((this.origPageX = n), (this.origPageY = r)) : ((o = n - this.origPageX), (i = r - this.origPageY)), { origEvent: e, isTouch: !0, subjectEl: this.subjectEl, pageX: n, pageY: r, deltaX: o, deltaY: i };
            }),
            x);
    function x(e) {
        var r = this;
        (this.subjectEl = null),
            (this.selector = ""),
            (this.handleSelector = ""),
            (this.shouldIgnoreMove = !1),
            (this.shouldWatchScroll = !0),
            (this.isDragging = !1),
            (this.isTouchDragging = !1),
            (this.wasTouchScroll = !1),
            (this.handleMouseDown = function (e) {
                r.shouldIgnoreMouse() ||
                    0 !== e.button ||
                    e.ctrlKey ||
                    !r.tryStart(e) ||
                    ((e = r.createEventFromMouse(e, !0)),
                    r.emitter.trigger("pointerdown", e),
                    r.initScrollWatch(e),
                    r.shouldIgnoreMove || document.addEventListener("mousemove", r.handleMouseMove),
                    document.addEventListener("mouseup", r.handleMouseUp));
            }),
            (this.handleMouseMove = function (e) {
                e = r.createEventFromMouse(e);
                r.recordCoords(e), r.emitter.trigger("pointermove", e);
            }),
            (this.handleMouseUp = function (e) {
                document.removeEventListener("mousemove", r.handleMouseMove), document.removeEventListener("mouseup", r.handleMouseUp), r.emitter.trigger("pointerup", r.createEventFromMouse(e)), r.cleanup();
            }),
            (this.handleTouchStart = function (e) {
                var t;
                r.tryStart(e) &&
                    ((r.isTouchDragging = !0),
                    (t = r.createEventFromTouch(e, !0)),
                    r.emitter.trigger("pointerdown", t),
                    r.initScrollWatch(t),
                    (t = e.target),
                    r.shouldIgnoreMove || t.addEventListener("touchmove", r.handleTouchMove),
                    t.addEventListener("touchend", r.handleTouchEnd),
                    t.addEventListener("touchcancel", r.handleTouchEnd),
                    window.addEventListener("scroll", r.handleTouchScroll, !0));
            }),
            (this.handleTouchMove = function (e) {
                e = r.createEventFromTouch(e);
                r.recordCoords(e), r.emitter.trigger("pointermove", e);
            }),
            (this.handleTouchEnd = function (e) {
                var t;
                r.isDragging &&
                    ((t = e.target).removeEventListener("touchmove", r.handleTouchMove),
                    t.removeEventListener("touchend", r.handleTouchEnd),
                    t.removeEventListener("touchcancel", r.handleTouchEnd),
                    window.removeEventListener("scroll", r.handleTouchScroll, !0),
                    r.emitter.trigger("pointerup", r.createEventFromTouch(e)),
                    r.cleanup(),
                    (r.isTouchDragging = !1),
                    (Pl += 1),
                    setTimeout(function () {
                        --Pl;
                    }, Ra.touchMouseIgnoreWait));
            }),
            (this.handleTouchScroll = function () {
                r.wasTouchScroll = !0;
            }),
            (this.handleScroll = function (e) {
                var t, n;
                r.shouldIgnoreMove ||
                    ((t = window.pageXOffset - r.prevScrollX + r.prevPageX),
                    (n = window.pageYOffset - r.prevScrollY + r.prevPageY),
                    r.emitter.trigger("pointermove", { origEvent: e, isTouch: r.isTouchDragging, subjectEl: r.subjectEl, pageX: t, pageY: n, deltaX: t - r.origPageX, deltaY: n - r.origPageY }));
            }),
            (this.containerEl = e),
            (this.emitter = new To()),
            e.addEventListener("mousedown", this.handleMouseDown),
            e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }),
            1 === (Nl += 1) && window.addEventListener("touchmove", Al, { passive: !1 });
    }
    function Al(e) {
        Hl && e.preventDefault();
    }
    (Ql.prototype.start = function (e, t, n) {
        (this.sourceEl = e),
            (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
            (this.origScreenX = t - window.pageXOffset),
            (this.origScreenY = n - window.pageYOffset),
            (this.deltaX = 0),
            (this.deltaY = 0),
            this.updateElPosition();
    }),
        (Ql.prototype.handleMove = function (e, t) {
            (this.deltaX = e - window.pageXOffset - this.origScreenX), (this.deltaY = t - window.pageYOffset - this.origScreenY), this.updateElPosition();
        }),
        (Ql.prototype.setIsVisible = function (e) {
            e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), (this.isVisible = e), this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), (this.isVisible = e));
        }),
        (Ql.prototype.stop = function (e, t) {
            function n() {
                r.cleanup(), t();
            }
            var r = this;
            e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(n, this.revertDuration) : setTimeout(n, 0);
        }),
        (Ql.prototype.doRevertAnimation = function (e, t) {
            var n = this.mirrorEl,
                r = this.sourceEl.getBoundingClientRect();
            (n.style.transition = "top " + t + "ms,left " + t + "ms"),
                Ye(n, { left: r.left, top: r.top }),
                nt(n, function () {
                    (n.style.transition = ""), e();
                });
        }),
        (Ql.prototype.cleanup = function () {
            this.mirrorEl && (ze(this.mirrorEl), (this.mirrorEl = null)), (this.sourceEl = null);
        }),
        (Ql.prototype.updateElPosition = function () {
            this.sourceEl && this.isVisible && Ye(this.getMirrorEl(), { left: this.sourceElRect.left + this.deltaX, top: this.sourceElRect.top + this.deltaY });
        }),
        (Ql.prototype.getMirrorEl = function () {
            var e = this.sourceElRect,
                t = this.mirrorEl;
            return (
                t ||
                    ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),
                    t.classList.add("fc-event-dragging"),
                    Ye(t, { position: "fixed", zIndex: this.zIndex, visibility: "", boxSizing: "border-box", width: e.right - e.left, height: e.bottom - e.top, right: "auto", bottom: "auto", margin: 0 }),
                    this.parentNode.appendChild(t)),
                t
            );
        });
    var Ll,
        Ul,
        Wl,
        Vl,
        Fl = Ql,
        Bl =
            (t(H, (Vl = Io)),
            (H.prototype.destroy = function () {
                this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
            }),
            (H.prototype.getScrollTop = function () {
                return this.scrollTop;
            }),
            (H.prototype.getScrollLeft = function () {
                return this.scrollLeft;
            }),
            (H.prototype.setScrollTop = function (e) {
                this.scrollController.setScrollTop(e), this.doesListening || ((this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0)), this.handleScrollChange());
            }),
            (H.prototype.setScrollLeft = function (e) {
                this.scrollController.setScrollLeft(e), this.doesListening || ((this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0)), this.handleScrollChange());
            }),
            (H.prototype.getClientWidth = function () {
                return this.clientWidth;
            }),
            (H.prototype.getClientHeight = function () {
                return this.clientHeight;
            }),
            (H.prototype.getScrollWidth = function () {
                return this.scrollWidth;
            }),
            (H.prototype.getScrollHeight = function () {
                return this.scrollHeight;
            }),
            (H.prototype.handleScrollChange = function () {}),
            H),
        zl =
            (t(Jl, (Wl = Bl)),
            (Jl.prototype.getEventTarget = function () {
                return this.scrollController.el;
            }),
            (Jl.prototype.computeClientRect = function () {
                return Do(this.scrollController.el);
            }),
            Jl),
        jl =
            (t($l, (Ul = Bl)),
            ($l.prototype.getEventTarget = function () {
                return window;
            }),
            ($l.prototype.computeClientRect = function () {
                return { left: this.scrollLeft, right: this.scrollLeft + this.clientWidth, top: this.scrollTop, bottom: this.scrollTop + this.clientHeight };
            }),
            ($l.prototype.handleScrollChange = function () {
                this.clientRect = this.computeClientRect();
            }),
            $l),
        Gl = ("function" == typeof performance ? performance : Date).now,
        ql =
            ((Kl.prototype.start = function (e, t, n) {
                this.isEnabled &&
                    ((this.scrollCaches = this.buildCaches(n)),
                    (this.pointerScreenX = null),
                    (this.pointerScreenY = null),
                    (this.everMovedUp = !1),
                    (this.everMovedDown = !1),
                    (this.everMovedLeft = !1),
                    (this.everMovedRight = !1),
                    this.handleMove(e, t));
            }),
            (Kl.prototype.handleMove = function (e, t) {
                var n, r;
                this.isEnabled &&
                    ((e = e - window.pageXOffset),
                    (t = t - window.pageYOffset),
                    (n = null === this.pointerScreenY ? 0 : t - this.pointerScreenY),
                    (r = null === this.pointerScreenX ? 0 : e - this.pointerScreenX),
                    n < 0 ? (this.everMovedUp = !0) : 0 < n && (this.everMovedDown = !0),
                    r < 0 ? (this.everMovedLeft = !0) : 0 < r && (this.everMovedRight = !0),
                    (this.pointerScreenX = e),
                    (this.pointerScreenY = t),
                    this.isAnimating || ((this.isAnimating = !0), this.requestAnimation(Gl())));
            }),
            (Kl.prototype.stop = function () {
                if (this.isEnabled) {
                    this.isAnimating = !1;
                    for (var e = 0, t = this.scrollCaches; e < t.length; e++) t[e].destroy();
                    this.scrollCaches = null;
                }
            }),
            (Kl.prototype.requestAnimation = function (e) {
                (this.msSinceRequest = e), requestAnimationFrame(this.animate);
            }),
            (Kl.prototype.handleSide = function (e, t) {
                var n = e.scrollCache,
                    r = this.edgeThreshold,
                    o = r - e.distance,
                    i = ((o * o) / (r * r)) * this.maxVelocity * t,
                    a = 1;
                switch (e.name) {
                    case "left":
                        a = -1;
                    case "right":
                        n.setScrollLeft(n.getScrollLeft() + i * a);
                        break;
                    case "top":
                        a = -1;
                    case "bottom":
                        n.setScrollTop(n.getScrollTop() + i * a);
                }
            }),
            (Kl.prototype.computeBestEdge = function (e, t) {
                for (var n = this.edgeThreshold, r = null, o = 0, i = this.scrollCaches; o < i.length; o++) {
                    var a = i[o],
                        s = a.clientRect,
                        l = e - s.left,
                        u = s.right - e,
                        c = t - s.top,
                        s = s.bottom - t;
                    0 <= l &&
                        0 <= u &&
                        0 <= c &&
                        0 <= s &&
                        (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = { scrollCache: a, name: "top", distance: c }),
                        s <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > s) && (r = { scrollCache: a, name: "bottom", distance: s }),
                        l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = { scrollCache: a, name: "left", distance: l }),
                        u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = { scrollCache: a, name: "right", distance: u }));
                }
                return r;
            }),
            (Kl.prototype.buildCaches = function (e) {
                return this.queryScrollEls(e).map(function (e) {
                    return e === window ? new jl(!1) : new zl(e, !1);
                });
            }),
            (Kl.prototype.queryScrollEls = function (e) {
                for (var t = [], n = 0, r = this.scrollQuery; n < r.length; n++) {
                    var o = r[n];
                    "object" == typeof o ? t.push(o) : t.push.apply(t, Array.prototype.slice.call(Ke(e).querySelectorAll(o)));
                }
                return t;
            }),
            Kl),
        Yl =
            (t(M, (Ll = wa)),
            (M.prototype.destroy = function () {
                this.pointer.destroy(), this.onPointerUp({});
            }),
            (M.prototype.startDelay = function (e) {
                var t = this;
                "number" == typeof this.delay
                    ? (this.delayTimeoutId = setTimeout(function () {
                          (t.delayTimeoutId = null), t.handleDelayEnd(e);
                      }, this.delay))
                    : this.handleDelayEnd(e);
            }),
            (M.prototype.handleDelayEnd = function (e) {
                (this.isDelayEnded = !0), this.tryStartDrag(e);
            }),
            (M.prototype.handleDistanceSurpassed = function (e) {
                (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
            }),
            (M.prototype.tryStartDrag = function (e) {
                this.isDelayEnded &&
                    this.isDistanceSurpassed &&
                    ((this.pointer.wasTouchScroll && !this.touchScrollAllowed) ||
                        ((this.isDragging = !0),
                        (this.mirrorNeedsRevert = !1),
                        this.autoScroller.start(e.pageX, e.pageY, this.containerEl),
                        this.emitter.trigger("dragstart", e),
                        !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()));
            }),
            (M.prototype.tryStopDrag = function (e) {
                this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
            }),
            (M.prototype.stopDrag = function (e) {
                (this.isDragging = !1), this.emitter.trigger("dragend", e);
            }),
            (M.prototype.setIgnoreMove = function (e) {
                this.pointer.shouldIgnoreMove = e;
            }),
            (M.prototype.setMirrorIsVisible = function (e) {
                this.mirror.setIsVisible(e);
            }),
            (M.prototype.setMirrorNeedsRevert = function (e) {
                this.mirrorNeedsRevert = e;
            }),
            (M.prototype.setAutoScrollEnabled = function (e) {
                this.autoScroller.isEnabled = e;
            }),
            M),
        Zl =
            ((Xl.prototype.destroy = function () {
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) t[e].destroy();
            }),
            (Xl.prototype.computeLeft = function () {
                for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollLeft - r.getScrollLeft();
                }
                return e;
            }),
            (Xl.prototype.computeTop = function () {
                for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollTop - r.getScrollTop();
                }
                return e;
            }),
            (Xl.prototype.isWithinClipping = function (e, t) {
                for (var n = { left: e, top: t }, r = 0, o = this.scrollCaches; r < o.length; r++) {
                    var i,
                        a = o[r];
                    if ("HTML" !== (i = a.getEventTarget().tagName) && "BODY" !== i && !eo(n, a.clientRect)) return !1;
                }
                return !0;
            }),
            Xl);
    function Xl(e) {
        (this.origRect = Co(e)),
            (this.scrollCaches = wo(e).map(function (e) {
                return new zl(e, !0);
            }));
    }
    function M(e, t) {
        var n = Ll.call(this, e) || this,
            e =
                ((n.containerEl = e),
                (n.delay = null),
                (n.minDistance = 0),
                (n.touchScrollAllowed = !0),
                (n.mirrorNeedsRevert = !1),
                (n.isInteracting = !1),
                (n.isDragging = !1),
                (n.isDelayEnded = !1),
                (n.isDistanceSurpassed = !1),
                (n.delayTimeoutId = null),
                (n.onPointerDown = function (e) {
                    n.isDragging ||
                        ((n.isInteracting = !0),
                        (n.isDelayEnded = !1),
                        (n.isDistanceSurpassed = !1),
                        ut(document.body),
                        dt(document.body),
                        e.isTouch || e.origEvent.preventDefault(),
                        n.emitter.trigger("pointerdown", e),
                        n.isInteracting && !n.pointer.shouldIgnoreMove && (n.mirror.setIsVisible(!1), n.mirror.start(e.subjectEl, e.pageX, e.pageY), n.startDelay(e), n.minDistance || n.handleDistanceSurpassed(e)));
                }),
                (n.onPointerMove = function (e) {
                    var t;
                    n.isInteracting &&
                        (n.emitter.trigger("pointermove", e),
                        n.isDistanceSurpassed || ((t = n.minDistance) * t <= (t = e.deltaX) * t + (t = e.deltaY) * t && n.handleDistanceSurpassed(e)),
                        n.isDragging && ("scroll" !== e.origEvent.type && (n.mirror.handleMove(e.pageX, e.pageY), n.autoScroller.handleMove(e.pageX, e.pageY)), n.emitter.trigger("dragmove", e)));
                }),
                (n.onPointerUp = function (e) {
                    n.isInteracting &&
                        ((n.isInteracting = !1),
                        ct(document.body),
                        pt(document.body),
                        n.emitter.trigger("pointerup", e),
                        n.isDragging && (n.autoScroller.stop(), n.tryStopDrag(e)),
                        n.delayTimeoutId && (clearTimeout(n.delayTimeoutId), (n.delayTimeoutId = null)));
                }),
                (n.pointer = new Ol(e)));
        return e.emitter.on("pointerdown", n.onPointerDown), e.emitter.on("pointermove", n.onPointerMove), e.emitter.on("pointerup", n.onPointerUp), t && (e.selector = t), (n.mirror = new Fl()), (n.autoScroller = new ql()), n;
    }
    function Kl() {
        var n = this;
        (this.isEnabled = !0),
            (this.scrollQuery = [window, ".fc-scroller"]),
            (this.edgeThreshold = 50),
            (this.maxVelocity = 300),
            (this.pointerScreenX = null),
            (this.pointerScreenY = null),
            (this.isAnimating = !1),
            (this.scrollCaches = null),
            (this.everMovedUp = !1),
            (this.everMovedDown = !1),
            (this.everMovedLeft = !1),
            (this.everMovedRight = !1),
            (this.animate = function () {
                var e, t;
                n.isAnimating &&
                    ((e = n.computeBestEdge(n.pointerScreenX + window.pageXOffset, n.pointerScreenY + window.pageYOffset)) ? ((t = Gl()), n.handleSide(e, (t - n.msSinceRequest) / 1e3), n.requestAnimation(t)) : (n.isAnimating = !1));
            });
    }
    function $l(e) {
        return Ul.call(this, new No(), e) || this;
    }
    function Jl(e, t) {
        return Wl.call(this, new Po(e), t) || this;
    }
    function H(e, t) {
        var n = Vl.call(this) || this;
        return (
            (n.handleScroll = function () {
                (n.scrollTop = n.scrollController.getScrollTop()), (n.scrollLeft = n.scrollController.getScrollLeft()), n.handleScrollChange();
            }),
            (n.scrollController = e),
            (n.doesListening = t),
            (n.scrollTop = n.origScrollTop = e.getScrollTop()),
            (n.scrollLeft = n.origScrollLeft = e.getScrollLeft()),
            (n.scrollWidth = e.getScrollWidth()),
            (n.scrollHeight = e.getScrollHeight()),
            (n.clientWidth = e.getClientWidth()),
            (n.clientHeight = e.getClientHeight()),
            (n.clientRect = n.computeClientRect()),
            n.doesListening && n.getEventTarget().addEventListener("scroll", n.handleScroll),
            n
        );
    }
    function Ql() {
        (this.isVisible = !1), (this.sourceEl = null), (this.mirrorEl = null), (this.sourceElRect = null), (this.parentNode = document.body), (this.zIndex = 9999), (this.revertDuration = 0);
    }
    (tu.prototype.processFirstCoord = function (e) {
        var t,
            n = { left: e.pageX, top: e.pageY },
            r = n,
            e = e.subjectEl,
            e = (e instanceof HTMLElement && (r = no(r, (t = Co(e)))), (this.initialHit = this.queryHitForOffset(r.left, r.top)));
        e ? (this.useSubjectCenter && t && (t = to(t, e.rect)) && (r = ro(t)), (this.coordAdjust = oo(r, n))) : (this.coordAdjust = { left: 0, top: 0 });
    }),
        (tu.prototype.handleMove = function (e, t) {
            var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
            (!t && nu(this.movingHit, n)) || ((this.movingHit = n), this.emitter.trigger("hitupdate", n, !1, e));
        }),
        (tu.prototype.prepareHits = function () {
            this.offsetTrackers = P(this.droppableStore, function (e) {
                return e.component.prepareHits(), new Zl(e.el);
            });
        }),
        (tu.prototype.releaseHits = function () {
            var e,
                t = this.offsetTrackers;
            for (e in t) t[e].destroy();
            this.offsetTrackers = {};
        }),
        (tu.prototype.queryHitForOffset = function (e, t) {
            var n,
                r = this.droppableStore,
                o = this.offsetTrackers,
                i = null;
            for (n in r) {
                var a,
                    s,
                    l,
                    u,
                    c,
                    d = r[n].component,
                    p = o[n];
                p &&
                    p.isWithinClipping(e, t) &&
                    ((a = p.computeLeft()),
                    (l = t - (s = p.computeTop())),
                    (u = (p = p.origRect).right - p.left),
                    (p = p.bottom - p.top),
                    0 <= (c = e - a) &&
                        c < u &&
                        0 <= l &&
                        l < p &&
                        (c = d.queryHit(c, l, u, p)) &&
                        ir(c.dateProfile.activeRange, c.dateSpan.range) &&
                        (!i || c.layer > i.layer) &&
                        ((c.componentId = n), (c.context = d.context), (c.rect.left += a), (c.rect.right += a), (c.rect.top += s), (c.rect.bottom += s), (i = c)));
            }
            return i;
        });
    var eu = tu;
    function tu(e, t) {
        var n = this;
        (this.useSubjectCenter = !1),
            (this.requireInitial = !0),
            (this.initialHit = null),
            (this.movingHit = null),
            (this.finalHit = null),
            (this.handlePointerDown = function (e) {
                var t = n.dragging;
                (n.initialHit = null), (n.movingHit = null), (n.finalHit = null), n.prepareHits(), n.processFirstCoord(e), n.initialHit || !n.requireInitial ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0);
            }),
            (this.handleDragStart = function (e) {
                n.emitter.trigger("dragstart", e), n.handleMove(e, !0);
            }),
            (this.handleDragMove = function (e) {
                n.emitter.trigger("dragmove", e), n.handleMove(e);
            }),
            (this.handlePointerUp = function (e) {
                n.releaseHits(), n.emitter.trigger("pointerup", e);
            }),
            (this.handleDragEnd = function (e) {
                n.movingHit && n.emitter.trigger("hitupdate", null, !0, e), (n.finalHit = n.movingHit), (n.movingHit = null), n.emitter.trigger("dragend", e);
            }),
            (this.droppableStore = t),
            e.emitter.on("pointerdown", this.handlePointerDown),
            e.emitter.on("dragstart", this.handleDragStart),
            e.emitter.on("dragmove", this.handleDragMove),
            e.emitter.on("pointerup", this.handlePointerUp),
            e.emitter.on("dragend", this.handleDragEnd),
            (this.dragging = e),
            (this.emitter = new To());
    }
    function nu(e, t) {
        return (!e && !t) || (Boolean(e) === Boolean(t) && wr(e.dateSpan, t.dateSpan));
    }
    function ru(e, t) {
        for (var n, r, o = {}, i = 0, a = t.pluginHooks.datePointTransforms; i < a.length; i++) {
            var s = a[i];
            I(o, s(e, t));
        }
        return I(o, { date: (r = t.dateEnv).toDate((n = e).range.start), dateStr: r.formatIso(n.range.start, { omitTime: n.allDay }), allDay: n.allDay }), o;
    }
    t(lu, (iu = Sa)),
        (lu.prototype.destroy = function () {
            this.dragging.destroy();
        });
    var ou,
        iu,
        Bl = lu,
        au =
            (t(su, (ou = Sa)),
            (su.prototype.destroy = function () {
                this.dragging.destroy();
            }),
            su);
    function su(e) {
        var a = ou.call(this, e) || this,
            t =
                ((a.dragSelection = null),
                (a.handlePointerDown = function (e) {
                    var t = a.component,
                        n = a.dragging,
                        r = t.context.options.selectable && t.isValidDateDownEl(e.origEvent.target);
                    n.setIgnoreMove(!r), (n.delay = e.isTouch ? ((r = t.context.options), (n = null == (n = r.selectLongPressDelay) ? r.longPressDelay : n)) : null);
                }),
                (a.handleDragStart = function (e) {
                    a.component.context.calendarApi.unselect(e);
                }),
                (a.handleHitUpdate = function (e, t) {
                    var n,
                        r = a.component.context,
                        o = null,
                        i = !1;
                    e &&
                        ((n = a.hitDragging.initialHit),
                        ((o =
                            e.componentId === n.componentId && a.isHitComboAllowed && !a.isHitComboAllowed(n, e)
                                ? o
                                : (function (e, t, n) {
                                      var r = e.dateSpan,
                                          o = t.dateSpan,
                                          o = [r.range.start, r.range.end, o.range.start, o.range.end];
                                      o.sort(Et);
                                      for (var i = {}, a = 0, s = n; a < s.length; a++) {
                                          var l = (0, s[a])(e, t);
                                          if (!1 === l) return null;
                                          l && I(i, l);
                                      }
                                      return (i.range = { start: o[0], end: o[3] }), (i.allDay = r.allDay), i;
                                  })(n, e, r.pluginHooks.dateSelectionTransformers)) &&
                            Cs(o, e.dateProfile, r)) ||
                            ((i = !0), (o = null))),
                        o ? r.dispatch({ type: "SELECT_DATES", selection: o }) : t || r.dispatch({ type: "UNSELECT_DATES" }),
                        (i ? st : lt)(),
                        t || (a.dragSelection = o);
                }),
                (a.handlePointerUp = function (e) {
                    a.dragSelection && (_r(a.dragSelection, e, a.component.context), (a.dragSelection = null));
                }),
                e.component.context.options),
            n = (a.dragging = new Yl(e.el)),
            n = ((n.touchScrollAllowed = !1), (n.minDistance = t.selectMinDistance || 0), (n.autoScroller.isEnabled = t.dragScroll), (a.hitDragging = new eu(a.dragging, Da(e))));
        return n.emitter.on("pointerdown", a.handlePointerDown), n.emitter.on("dragstart", a.handleDragStart), n.emitter.on("hitupdate", a.handleHitUpdate), n.emitter.on("pointerup", a.handlePointerUp), a;
    }
    function lu(e) {
        var o = iu.call(this, e) || this,
            e =
                ((o.handlePointerDown = function (e) {
                    var t = o.dragging,
                        e = e.origEvent.target;
                    t.setIgnoreMove(!o.component.isValidDateDownEl(e));
                }),
                (o.handleDragEnd = function (e) {
                    var t,
                        n,
                        r = o.component;
                    o.dragging.pointer.wasTouchScroll ||
                        ((t = (n = o.hitDragging).initialHit),
                        (n = n.finalHit),
                        t && n && nu(t, n) && ((n = r.context), (r = I(I({}, ru(t.dateSpan, n)), { dayEl: t.dayEl, jsEvent: e.origEvent, view: n.viewApi || n.calendarApi.view })), n.emitter.trigger("dateClick", r)));
                }),
                (o.dragging = new Yl(e.el)),
                (o.dragging.autoScroller.isEnabled = !1),
                (o.hitDragging = new eu(o.dragging, Da(e))));
        return e.emitter.on("pointerdown", o.handlePointerDown), e.emitter.on("dragend", o.handleDragEnd), o;
    }
    t(du, (uu = Sa)),
        (du.prototype.destroy = function () {
            this.dragging.destroy();
        }),
        (du.prototype.displayDrag = function (e, t) {
            var n = this.component.context,
                r = this.receivingContext;
            r && r !== e && (r === n ? r.dispatch({ type: "SET_EVENT_DRAG", state: { affectedEvents: t.affectedEvents, mutatedEvents: { defs: {}, instances: {} }, isEvent: !0 } }) : r.dispatch({ type: "UNSET_EVENT_DRAG" })),
                e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
        }),
        (du.prototype.clearDrag = function () {
            var e = this.component.context,
                t = this.receivingContext;
            t && t.dispatch({ type: "UNSET_EVENT_DRAG" }), e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" });
        }),
        (du.prototype.cleanup = function () {
            (this.subjectSeg = null), (this.isDragging = !1), (this.eventRange = null), (this.relevantEvents = null), (this.receivingContext = null), (this.validMutation = null), (this.mutatedRelevantEvents = null);
        }),
        (du.SELECTOR = ".fc-event-draggable, .fc-event-resizable");
    var uu,
        cu = du;
    function du(e) {
        var v = uu.call(this, e) || this,
            t =
                ((v.subjectEl = null),
                (v.subjectSeg = null),
                (v.isDragging = !1),
                (v.eventRange = null),
                (v.relevantEvents = null),
                (v.receivingContext = null),
                (v.validMutation = null),
                (v.mutatedRelevantEvents = null),
                (v.handlePointerDown = function (e) {
                    var t = e.origEvent.target,
                        n = v.component,
                        r = v.dragging,
                        o = r.mirror,
                        i = n.context.options,
                        a = n.context,
                        s = ((v.subjectEl = e.subjectEl), (v.subjectSeg = cr(e.subjectEl))),
                        s = (v.eventRange = s.eventRange).instance.instanceId,
                        a =
                            ((v.relevantEvents = Hn(a.getCurrentData().eventStore, s)),
                            (r.minDistance = e.isTouch ? 0 : i.eventDragMinDistance),
                            (r.delay = e.isTouch && s !== n.props.eventSelection ? ((a = n.context.options), (s = null == (s = a.eventLongPressDelay) ? a.longPressDelay : s)) : null),
                            i.fixedMirrorParent ? (o.parentNode = i.fixedMirrorParent) : (o.parentNode = l(t, ".fc")),
                            (o.revertDuration = i.dragRevertDuration),
                            n.isValidSegDownEl(t) && !l(t, ".fc-event-resizer"));
                    r.setIgnoreMove(!a), (v.isDragging = a && e.subjectEl.classList.contains("fc-event-draggable"));
                }),
                (v.handleDragStart = function (e) {
                    var t = v.component.context,
                        n = v.eventRange,
                        r = n.instance.instanceId;
                    e.isTouch ? r !== v.component.props.eventSelection && t.dispatch({ type: "SELECT_EVENT", eventInstanceId: r }) : t.dispatch({ type: "UNSELECT_EVENT" }),
                        v.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", { el: v.subjectEl, event: new N(t, n.def, n.instance), jsEvent: e.origEvent, view: t.viewApi }));
                }),
                (v.handleHitUpdate = function (e, t) {
                    var n, r, o, i, a, s, l, u, c;
                    v.isDragging &&
                        ((n = v.relevantEvents),
                        (r = v.hitDragging.initialHit),
                        (o = v.component.context),
                        (s = a = i = null),
                        (u = { affectedEvents: n, mutatedEvents: { defs: {}, instances: {} }, isEvent: !(l = !1) }),
                        e &&
                            ((c = (i = e.context).options),
                            o === i || (c.editable && c.droppable)
                                ? (a = (function (e, t, n) {
                                      var r = e.dateSpan,
                                          o = t.dateSpan,
                                          i = r.range.start,
                                          a = o.range.start,
                                          s = {},
                                          r =
                                              (r.allDay !== o.allDay && ((s.allDay = o.allDay), (s.hasEnd = t.context.options.allDayMaintainDuration), o.allDay && (i = m(i))),
                                              Qn(i, a, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null));
                                      r.milliseconds && (s.allDay = !1);
                                      for (var l = { datesDelta: r, standardProps: s }, u = 0, c = n; u < c.length; u++) (0, c[u])(l, e, t);
                                      return l;
                                  })(r, e, i.getCurrentData().pluginHooks.eventDragMutationMassagers)) &&
                                  ((s = Mr(n, i.getCurrentData().eventUiBases, a, i)), (u.mutatedEvents = s), Ds(u, e.dateProfile, i) || ((l = !0), (s = a = null), (u.mutatedEvents = { defs: {}, instances: {} })))
                                : (i = null)),
                        v.displayDrag(i, u),
                        (l ? st : lt)(),
                        t ||
                            (o === i && nu(r, e) && (a = null),
                            v.dragging.setMirrorNeedsRevert(!a),
                            v.dragging.setMirrorIsVisible(!e || !Ke(v.subjectEl).querySelector(".fc-event-mirror")),
                            (v.receivingContext = i),
                            (v.validMutation = a),
                            (v.mutatedRelevantEvents = s)));
                }),
                (v.handlePointerUp = function () {
                    v.isDragging || v.cleanup();
                }),
                (v.handleDragEnd = function (e) {
                    if (v.isDragging) {
                        var t = v.component.context,
                            n = t.viewApi,
                            r = v.receivingContext,
                            o = v.validMutation,
                            i = v.eventRange.def,
                            a = v.eventRange.instance,
                            s = new N(t, i, a),
                            l = v.relevantEvents,
                            u = v.mutatedRelevantEvents,
                            c = v.hitDragging.finalHit;
                        if ((v.clearDrag(), t.emitter.trigger("eventDragStop", { el: v.subjectEl, event: s, jsEvent: e.origEvent, view: n }), o))
                            if (r === t) {
                                var d = new N(t, u.defs[i.defId], a ? u.instances[a.instanceId] : null);
                                t.dispatch({ type: "MERGE_EVENTS", eventStore: u });
                                for (
                                    var d = {
                                            oldEvent: s,
                                            event: d,
                                            relatedEvents: Ur(u, t, a),
                                            revert: function () {
                                                t.dispatch({ type: "MERGE_EVENTS", eventStore: l });
                                            },
                                        },
                                        p = {},
                                        f = 0,
                                        h = t.getCurrentData().pluginHooks.eventDropTransformers;
                                    f < h.length;
                                    f++
                                ) {
                                    var g = h[f];
                                    I(p, g(o, t));
                                }
                                t.emitter.trigger("eventDrop", I(I(I({}, d), p), { el: e.subjectEl, delta: o.datesDelta, jsEvent: e.origEvent, view: n })), t.emitter.trigger("eventChange", d);
                            } else
                                r &&
                                    ((d = {
                                        event: s,
                                        relatedEvents: Ur(l, t, a),
                                        revert: function () {
                                            t.dispatch({ type: "MERGE_EVENTS", eventStore: l });
                                        },
                                    }),
                                    t.emitter.trigger("eventLeave", I(I({}, d), { draggedEl: e.subjectEl, view: n })),
                                    t.dispatch({ type: "REMOVE_EVENTS", eventStore: l }),
                                    t.emitter.trigger("eventRemove", d),
                                    (s = u.defs[i.defId]),
                                    (n = u.instances[a.instanceId]),
                                    (d = new N(r, s, n)),
                                    r.dispatch({ type: "MERGE_EVENTS", eventStore: u }),
                                    (i = {
                                        event: d,
                                        relatedEvents: Ur(u, r, n),
                                        revert: function () {
                                            r.dispatch({ type: "REMOVE_EVENTS", eventStore: u });
                                        },
                                    }),
                                    r.emitter.trigger("eventAdd", i),
                                    e.isTouch && r.dispatch({ type: "SELECT_EVENT", eventInstanceId: a.instanceId }),
                                    r.emitter.trigger("drop", I(I({}, ru(c.dateSpan, r)), { draggedEl: e.subjectEl, jsEvent: e.origEvent, view: c.context.viewApi })),
                                    r.emitter.trigger("eventReceive", I(I({}, i), { draggedEl: e.subjectEl, view: c.context.viewApi })));
                        else t.emitter.trigger("_noEventDrop");
                    }
                    v.cleanup();
                }),
                v.component.context.options),
            n = (v.dragging = new Yl(e.el)),
            n = ((n.pointer.selector = du.SELECTOR), (n.touchScrollAllowed = !1), (n.autoScroller.isEnabled = t.dragScroll), (v.hitDragging = new eu(v.dragging, Ca)));
        return (
            (n.useSubjectCenter = e.useEventCenter),
            n.emitter.on("pointerdown", v.handlePointerDown),
            n.emitter.on("dragstart", v.handleDragStart),
            n.emitter.on("hitupdate", v.handleHitUpdate),
            n.emitter.on("pointerup", v.handlePointerUp),
            n.emitter.on("dragend", v.handleDragEnd),
            v
        );
    }
    t(hu, (pu = Sa)),
        (hu.prototype.destroy = function () {
            this.dragging.destroy();
        }),
        (hu.prototype.querySegEl = function (e) {
            return l(e.subjectEl, ".fc-event");
        });
    var pu,
        fu = hu;
    function hu(e) {
        var d = pu.call(this, e) || this,
            t =
                ((d.draggingSegEl = null),
                (d.draggingSeg = null),
                (d.eventRange = null),
                (d.relevantEvents = null),
                (d.validMutation = null),
                (d.mutatedRelevantEvents = null),
                (d.handlePointerDown = function (e) {
                    var t = d.component,
                        n = cr(d.querySegEl(e)),
                        n = (d.eventRange = n.eventRange);
                    (d.dragging.minDistance = t.context.options.eventDragMinDistance), d.dragging.setIgnoreMove(!d.component.isValidSegDownEl(e.origEvent.target) || (e.isTouch && d.component.props.eventSelection !== n.instance.instanceId));
                }),
                (d.handleDragStart = function (e) {
                    var t = d.component.context,
                        n = d.eventRange,
                        r = ((d.relevantEvents = Hn(t.getCurrentData().eventStore, d.eventRange.instance.instanceId)), d.querySegEl(e));
                    (d.draggingSegEl = r), (d.draggingSeg = cr(r)), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", { el: r, event: new N(t, n.def, n.instance), jsEvent: e.origEvent, view: t.viewApi });
                }),
                (d.handleHitUpdate = function (e, t, n) {
                    var r = d.component.context,
                        o = d.relevantEvents,
                        i = d.hitDragging.initialHit,
                        a = d.eventRange.instance,
                        s = null,
                        l = null,
                        u = !1,
                        c = { affectedEvents: o, mutatedEvents: { defs: {}, instances: {} }, isEvent: !0 };
                    (s =
                        !e || (e.componentId === i.componentId && d.isHitComboAllowed && !d.isHitComboAllowed(i, e))
                            ? s
                            : (function (e, t, n, r) {
                                  var o = e.context.dateEnv,
                                      t = Qn(e.dateSpan.range.start, t.dateSpan.range.start, o, e.largeUnit);
                                  if (n) {
                                      if (o.add(r.start, t) < r.end) return { startDelta: t };
                                  } else if (o.add(r.end, t) > r.start) return { endDelta: t };
                                  return null;
                              })(i, e, n.subjectEl.classList.contains("fc-event-resizer-start"), a.range)) &&
                        ((l = Mr(o, r.getCurrentData().eventUiBases, s, r)), (c.mutatedEvents = l), Ds(c, e.dateProfile, r) || ((u = !0), (c.mutatedEvents = l = s = null))),
                        l ? r.dispatch({ type: "SET_EVENT_RESIZE", state: c }) : r.dispatch({ type: "UNSET_EVENT_RESIZE" }),
                        (u ? st : lt)(),
                        t || (s && nu(i, e) && (s = null), (d.validMutation = s), (d.mutatedRelevantEvents = l));
                }),
                (d.handleDragEnd = function (e) {
                    var t = d.component.context,
                        n = d.eventRange.def,
                        r = d.eventRange.instance,
                        o = new N(t, n, r),
                        i = d.relevantEvents,
                        a = d.mutatedRelevantEvents;
                    t.emitter.trigger("eventResizeStop", { el: d.draggingSegEl, event: o, jsEvent: e.origEvent, view: t.viewApi }),
                        d.validMutation
                            ? ((n = new N(t, a.defs[n.defId], r ? a.instances[r.instanceId] : null)),
                              t.dispatch({ type: "MERGE_EVENTS", eventStore: a }),
                              (o = {
                                  oldEvent: o,
                                  event: n,
                                  relatedEvents: Ur(a, t, r),
                                  revert: function () {
                                      t.dispatch({ type: "MERGE_EVENTS", eventStore: i });
                                  },
                              }),
                              t.emitter.trigger("eventResize", I(I({}, o), { el: d.draggingSegEl, startDelta: d.validMutation.startDelta || E(0), endDelta: d.validMutation.endDelta || E(0), jsEvent: e.origEvent, view: t.viewApi })),
                              t.emitter.trigger("eventChange", o))
                            : t.emitter.trigger("_noEventResize"),
                        (d.draggingSeg = null),
                        (d.relevantEvents = null),
                        (d.validMutation = null);
                }),
                e.component),
            n = (d.dragging = new Yl(e.el)),
            n = ((n.pointer.selector = ".fc-event-resizer"), (n.touchScrollAllowed = !1), (n.autoScroller.isEnabled = t.context.options.dragScroll), (d.hitDragging = new eu(d.dragging, Da(e))));
        return n.emitter.on("pointerdown", d.handlePointerDown), n.emitter.on("dragstart", d.handleDragStart), n.emitter.on("hitupdate", d.handleHitUpdate), n.emitter.on("dragend", d.handleDragEnd), d;
    }
    Su.prototype.destroy = function () {
        this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
    };
    var gu = Su,
        vu = { fixedMirrorParent: n },
        mu = { dateClick: n, eventDragStart: n, eventDragStop: n, eventDrop: n, eventResizeStart: n, eventResizeStop: n, eventResize: n, drop: n, eventReceive: n, eventLeave: n },
        yu =
            ((Eu.prototype.buildDragMeta = function (e) {
                return "object" == typeof this.suppliedDragMeta
                    ? ka(this.suppliedDragMeta)
                    : "function" == typeof this.suppliedDragMeta
                    ? ka(this.suppliedDragMeta(e))
                    : ka(((t = Ra.dataAttrPrefix), (e = e.getAttribute("data-" + ((t ? t + "-" : "") + "event")) || "") ? JSON.parse(e) : { create: !1 }));
                var t;
            }),
            (Eu.prototype.displayDrag = function (e, t) {
                var n = this.receivingContext;
                n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }), e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
            }),
            (Eu.prototype.clearDrag = function () {
                this.receivingContext && this.receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
            }),
            (Eu.prototype.canDropElOnCalendar = function (e, t) {
                var n = t.options.dropAccept;
                return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(je(e, n));
            }),
            Eu);
    function Eu(e, t) {
        var l = this,
            e =
                ((this.receivingContext = null),
                (this.droppableEvent = null),
                (this.suppliedDragMeta = null),
                (this.dragMeta = null),
                (this.handleDragStart = function (e) {
                    l.dragMeta = l.buildDragMeta(e.subjectEl);
                }),
                (this.handleHitUpdate = function (e, t, n) {
                    var r = l.hitDragging.dragging,
                        o = null,
                        i = null,
                        a = !1,
                        s = { affectedEvents: { defs: {}, instances: {} }, mutatedEvents: { defs: {}, instances: {} }, isEvent: l.dragMeta.create };
                    e &&
                        ((o = e.context),
                        l.canDropElOnCalendar(n.subjectEl, o) &&
                            ((i = (function (e, t, n) {
                                for (var r = I({}, t.leftoverProps), o = 0, i = n.pluginHooks.externalDefTransforms; o < i.length; o++) {
                                    var a = i[o];
                                    I(r, a(e, t));
                                }
                                var s = Yn(r, n),
                                    s = Xn(s.refined, s.extra, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
                                    l = e.range.start,
                                    n = (e.allDay && t.startTime && (l = n.dateEnv.add(l, t.startTime)), t.duration ? n.dateEnv.add(l, t.duration) : xr(e.allDay, l, n));
                                return { def: s, instance: At(s.defId, { start: l, end: n }) };
                            })(e.dateSpan, l.dragMeta, o)),
                            (s.mutatedEvents = Nn(i)),
                            (a = !Ds(s, e.dateProfile, o)) && ((s.mutatedEvents = { defs: {}, instances: {} }), (i = null)))),
                        l.displayDrag(o, s),
                        r.setMirrorIsVisible(t || !i || !document.querySelector(".fc-event-mirror")),
                        (a ? st : lt)(),
                        t || (r.setMirrorNeedsRevert(!i), (l.receivingContext = o), (l.droppableEvent = i));
                }),
                (this.handleDragEnd = function (e) {
                    var t,
                        n,
                        r,
                        o,
                        i = l.receivingContext,
                        a = l.droppableEvent;
                    l.clearDrag(),
                        i &&
                            a &&
                            ((n = (t = l.hitDragging.finalHit).context.viewApi),
                            (r = l.dragMeta),
                            i.emitter.trigger("drop", I(I({}, ru(t.dateSpan, i)), { draggedEl: e.subjectEl, jsEvent: e.origEvent, view: n })),
                            r.create &&
                                ((o = Nn(a)),
                                i.dispatch({ type: "MERGE_EVENTS", eventStore: o }),
                                e.isTouch && i.dispatch({ type: "SELECT_EVENT", eventInstanceId: a.instance.instanceId }),
                                i.emitter.trigger("eventReceive", {
                                    event: new N(i, a.def, a.instance),
                                    relatedEvents: [],
                                    revert: function () {
                                        i.dispatch({ type: "REMOVE_EVENTS", eventStore: o });
                                    },
                                    draggedEl: e.subjectEl,
                                    view: n,
                                }))),
                        (l.receivingContext = null),
                        (l.droppableEvent = null);
                }),
                (this.hitDragging = new eu(e, Ca)));
        (e.requireInitial = !1), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("hitupdate", this.handleHitUpdate), e.emitter.on("dragend", this.handleDragEnd), (this.suppliedDragMeta = t);
    }
    function Su(e) {
        var o = this,
            t =
                ((this.context = e),
                (this.isRecentPointerDateSelect = !1),
                (this.matchesCancel = !1),
                (this.matchesEvent = !1),
                (this.onSelect = function (e) {
                    e.jsEvent && (o.isRecentPointerDateSelect = !0);
                }),
                (this.onDocumentPointerDown = function (e) {
                    var t = o.context.options.unselectCancel,
                        e = Xe(e.origEvent);
                    (o.matchesCancel = !!l(e, t)), (o.matchesEvent = !!l(e, cu.SELECTOR));
                }),
                (this.onDocumentPointerUp = function (e) {
                    var t = o.context,
                        n = o.documentPointer,
                        r = t.getCurrentData();
                    n.wasTouchScroll ||
                        (r.dateSelection && !o.isRecentPointerDateSelect && t.options.unselectAuto && !o.matchesCancel && t.calendarApi.unselect(e), r.eventSelection && !o.matchesEvent && t.dispatch({ type: "UNSELECT_EVENT" })),
                        (o.isRecentPointerDateSelect = !1);
                }),
                (this.documentPointer = new Ol(document)));
        (t.shouldIgnoreMove = !0), (t.shouldWatchScroll = !1), t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
    }
    Ra.dataAttrPrefix = "";
    xu.prototype.destroy = function () {
        this.dragging.destroy();
    };
    var bu,
        Du,
        Cu = xu,
        wu =
            (t(ku, (Du = wa)),
            (ku.prototype.destroy = function () {
                this.pointer.destroy();
            }),
            (ku.prototype.setIgnoreMove = function (e) {
                this.shouldIgnoreMove = e;
            }),
            (ku.prototype.setMirrorIsVisible = function (e) {
                e
                    ? this.currentMirrorEl && ((this.currentMirrorEl.style.visibility = ""), (this.currentMirrorEl = null))
                    : (e = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null) && ((this.currentMirrorEl = e).style.visibility = "hidden");
            }),
            ku),
        Ru =
            ((_u.prototype.destroy = function () {
                this.dragging.destroy();
            }),
            _u),
        Bl = v({ componentInteractions: [Bl, au, cu, fu], calendarInteractions: [gu], elementDraggingImpl: Yl, optionRefiners: vu, listenerRefiners: mu }),
        au =
            (t(Tu, (bu = g)),
            (Tu.prototype.renderSimpleLayout = function (e, t) {
                var n = this.props,
                    r = this.context,
                    o = [],
                    i = Gs(r.options);
                return (
                    e && o.push({ type: "header", key: "header", isSticky: i, chunk: { elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e } }),
                    o.push({ type: "body", key: "body", liquid: !0, chunk: { content: t } }),
                    C(wi, { viewSpec: r.viewSpec }, function (e, t) {
                        return C("div", { ref: e, className: ["fc-daygrid"].concat(t).join(" ") }, C(Zs, { liquid: !n.isHeightAuto && !n.forPrint, collapsibleWidth: n.forPrint, cols: [], sections: o }));
                    })
                );
            }),
            (Tu.prototype.renderHScrollLayout = function (e, t, n, r) {
                var o = this.context.pluginHooks.scrollGridImpl;
                if (!o) throw new Error("No ScrollGrid implementation");
                var i = this.props,
                    a = this.context,
                    s = !i.forPrint && Gs(a.options),
                    l = !i.forPrint && qs(a.options),
                    u = [];
                return (
                    e && u.push({ type: "header", key: "header", isSticky: s, chunks: [{ key: "main", elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e }] }),
                    u.push({ type: "body", key: "body", liquid: !0, chunks: [{ key: "main", content: t }] }),
                    l && u.push({ type: "footer", key: "footer", isSticky: !0, chunks: [{ key: "main", content: js }] }),
                    C(wi, { viewSpec: a.viewSpec }, function (e, t) {
                        return C(
                            "div",
                            { ref: e, className: ["fc-daygrid"].concat(t).join(" ") },
                            C(o, { liquid: !i.isHeightAuto && !i.forPrint, collapsibleWidth: i.forPrint, colGroups: [{ cols: [{ span: n, minWidth: r }] }], sections: u })
                        );
                    })
                );
            }),
            Tu);
    function Tu() {
        var e = (null !== bu && bu.apply(this, arguments)) || this;
        return (e.headerElRef = u()), e;
    }
    function _u(e, t) {
        var n = document,
            e = ((t = e === document || e instanceof Element ? ((n = e), t || {}) : e || {}), (this.dragging = new wu(n)));
        "string" == typeof t.itemSelector ? (e.pointer.selector = t.itemSelector) : n === document && (e.pointer.selector = "[data-event]"),
            "string" == typeof t.mirrorSelector && (e.mirrorSelector = t.mirrorSelector),
            new yu(e, t.eventData);
    }
    function ku(e) {
        var t = Du.call(this, e) || this,
            e =
                ((t.shouldIgnoreMove = !1),
                (t.mirrorSelector = ""),
                (t.currentMirrorEl = null),
                (t.handlePointerDown = function (e) {
                    t.emitter.trigger("pointerdown", e), t.shouldIgnoreMove || t.emitter.trigger("dragstart", e);
                }),
                (t.handlePointerMove = function (e) {
                    t.shouldIgnoreMove || t.emitter.trigger("dragmove", e);
                }),
                (t.handlePointerUp = function (e) {
                    t.emitter.trigger("pointerup", e), t.shouldIgnoreMove || t.emitter.trigger("dragend", e);
                }),
                (t.pointer = new Ol(e)));
        return e.emitter.on("pointerdown", t.handlePointerDown), e.emitter.on("pointermove", t.handlePointerMove), e.emitter.on("pointerup", t.handlePointerUp), t;
    }
    function xu(e, t) {
        var o = this,
            e =
                (void 0 === t && (t = {}),
                (this.handlePointerDown = function (e) {
                    var t = o.dragging,
                        n = o.settings,
                        r = n.minDistance,
                        n = n.longPressDelay;
                    (t.minDistance = null != r ? r : e.isTouch ? 0 : wn.eventDragMinDistance), (t.delay = e.isTouch ? (null != n ? n : wn.longPressDelay) : 0);
                }),
                (this.handleDragStart = function (e) {
                    e.isTouch && o.dragging.delay && e.subjectEl.classList.contains("fc-event") && o.dragging.mirror.getMirrorEl().classList.add("fc-event-selected");
                }),
                (this.settings = t),
                (this.dragging = new Yl(e)));
        (e.touchScrollAllowed = !1),
            null != t.itemSelector && (e.pointer.selector = t.itemSelector),
            null != t.appendTo && (e.mirror.parentNode = t.appendTo),
            e.emitter.on("pointerdown", this.handlePointerDown),
            e.emitter.on("dragstart", this.handleDragStart),
            new yu(e, t.eventData);
    }
    function Mu(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a);
        }
        return n;
    }
    function Iu(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a);
        }
        return n;
    }
    function Pu(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = { affectedInstances: e.affectedInstances, isEvent: e.isEvent, segs: [] };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row].segs.push(i);
            }
        } else for (var a = 0; a < t; a += 1) n[a] = null;
        return n;
    }
    t(Ou, (Nu = c)),
        (Ou.prototype.render = function () {
            var n = this.props,
                r = go(this.context, n.date);
            return C(il, { date: n.date, dateProfile: n.dateProfile, todayRange: n.todayRange, showDayNumber: n.showDayNumber, extraHookProps: n.extraHookProps, defaultContent: Au }, function (e, t) {
                return (t || n.forceDayTop) && C("div", { className: "fc-daygrid-day-top", ref: e }, C("a", I({ id: n.dayNumberId, className: "fc-daygrid-day-number" }, r), t || C(w, null, " ")));
            });
        });
    var Nu,
        Hu = Ou;
    function Ou() {
        return (null !== Nu && Nu.apply(this, arguments)) || this;
    }
    function Au(e) {
        return e.dayNumberText;
    }
    var Lu = a({ hour: "numeric", minute: "2-digit", omitZeroMinute: !0, meridiem: "narrow" });
    function Uu(e) {
        var t = e.eventRange.ui.display;
        return "list-item" === t || ("auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd);
    }
    t(ju, (Vu = c)),
        (ju.prototype.render = function () {
            var e = this.props;
            return C(Js, I({}, e, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Lu, defaultDisplayEventEnd: e.defaultDisplayEventEnd, disableResizing: !e.seg.eventRange.def.allDay }));
        });
    var Wu,
        Vu,
        Fu = ju,
        Bu =
            (t(zu, (Wu = c)),
            (zu.prototype.render = function () {
                var o = this.props,
                    i = this.context,
                    e = i.options.eventTimeFormat || Lu,
                    e = yr(o.seg, e, i, !0, o.defaultDisplayEventEnd);
                return C($s, { seg: o.seg, timeText: e, defaultContent: Gu, isDragging: o.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: o.isSelected, isPast: o.isPast, isFuture: o.isFuture, isToday: o.isToday }, function (
                    e,
                    t,
                    n,
                    r
                ) {
                    return C("a", I({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(t).join(" "), ref: e }, Dr(o.seg, i)), r);
                });
            }),
            zu);
    function zu() {
        return (null !== Wu && Wu.apply(this, arguments)) || this;
    }
    function ju() {
        return (null !== Vu && Vu.apply(this, arguments)) || this;
    }
    function Gu(e) {
        return C(
            w,
            null,
            C("div", { className: "fc-daygrid-event-dot", style: { borderColor: e.borderColor || e.backgroundColor } }),
            e.timeText && C("div", { className: "fc-event-time" }, e.timeText),
            C("div", { className: "fc-event-title" }, e.event.title || C(w, null, " "))
        );
    }
    t(Zu, (qu = c)),
        (Zu.prototype.render = function () {
            var r = this.props,
                e = this.compileSegs(r.singlePlacements),
                t = e.allSegs,
                e = e.invisibleSegs;
            return C(
                bl,
                {
                    dateProfile: r.dateProfile,
                    todayRange: r.todayRange,
                    allDayDate: r.allDayDate,
                    moreCnt: r.moreCnt,
                    allSegs: t,
                    hiddenSegs: e,
                    alignmentElRef: r.alignmentElRef,
                    alignGridTop: r.alignGridTop,
                    extraDateSpan: r.extraDateSpan,
                    popoverContent: function () {
                        var n = (r.eventDrag ? r.eventDrag.affectedInstances : null) || (r.eventResize ? r.eventResize.affectedInstances : null) || {};
                        return C(
                            w,
                            null,
                            t.map(function (e) {
                                var t = e.eventRange.instance.instanceId;
                                return C(
                                    "div",
                                    { className: "fc-daygrid-event-harness", key: t, style: { visibility: n[t] ? "hidden" : "" } },
                                    Uu(e)
                                        ? C(Bu, I({ seg: e, isDragging: !1, isSelected: t === r.eventSelection, defaultDisplayEventEnd: !1 }, Er(e, r.todayRange)))
                                        : C(Fu, I({ seg: e, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: t === r.eventSelection, defaultDisplayEventEnd: !1 }, Er(e, r.todayRange)))
                                );
                            })
                        );
                    },
                },
                function (e, t, n, r, o, i, a, s) {
                    return C("a", I({ ref: e, className: ["fc-daygrid-more-link"].concat(t).join(" "), title: i, "aria-expanded": a, "aria-controls": s }, rt(o)), r);
                }
            );
        });
    var qu,
        Yu = Zu;
    function Zu() {
        var e = (null !== qu && qu.apply(this, arguments)) || this;
        return (e.compileSegs = S(Xu)), e;
    }
    function Xu(e) {
        for (var t = [], n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            t.push(i.seg), i.isVisible || n.push(i.seg);
        }
        return { allSegs: t, invisibleSegs: n };
    }
    var Ku,
        $u = a({ week: "narrow" }),
        Ju =
            (t(Qu, (Ku = g)),
            (Qu.prototype.render = function () {
                var e = this.context,
                    o = this.props,
                    i = this.state,
                    a = this.rootElRef,
                    s = o.date,
                    l = o.dateProfile,
                    u = go(e, s, "week");
                return C(ul, { date: s, dateProfile: l, todayRange: o.todayRange, showDayNumber: o.showDayNumber, extraHookProps: o.extraHookProps, elRef: this.handleRootEl }, function (e, t, n, r) {
                    return C(
                        "td",
                        I({ ref: e, role: "gridcell", className: ["fc-daygrid-day"].concat(t, o.extraClassNames || []).join(" ") }, n, o.extraDataAttrs, o.showDayNumber ? { "aria-labelledby": i.dayNumberId } : {}),
                        C(
                            "div",
                            { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: o.innerElRef },
                            o.showWeekNumber &&
                                C(hl, { date: s, defaultFormat: $u }, function (e, t, n, r) {
                                    return C("a", I({ ref: e, className: ["fc-daygrid-week-number"].concat(t).join(" ") }, u), r);
                                }),
                            !r && C(Hu, { date: s, dateProfile: l, showDayNumber: o.showDayNumber, dayNumberId: i.dayNumberId, forceDayTop: o.forceDayTop, todayRange: o.todayRange, extraHookProps: o.extraHookProps }),
                            C(
                                "div",
                                { className: "fc-daygrid-day-events", ref: o.fgContentElRef },
                                o.fgContent,
                                C(
                                    "div",
                                    { className: "fc-daygrid-day-bottom", style: { marginTop: o.moreMarginTop } },
                                    C(Yu, {
                                        allDayDate: s,
                                        singlePlacements: o.singlePlacements,
                                        moreCnt: o.moreCnt,
                                        alignmentElRef: a,
                                        alignGridTop: !o.showDayNumber,
                                        extraDateSpan: o.extraDateSpan,
                                        dateProfile: o.dateProfile,
                                        eventSelection: o.eventSelection,
                                        eventDrag: o.eventDrag,
                                        eventResize: o.eventResize,
                                        todayRange: o.todayRange,
                                    })
                                )
                            ),
                            C("div", { className: "fc-daygrid-day-bg" }, o.bgContent)
                        )
                    );
                });
            }),
            Qu);
    function Qu() {
        var t = (null !== Ku && Ku.apply(this, arguments)) || this;
        return (
            (t.rootElRef = u()),
            (t.state = { dayNumberId: Je() }),
            (t.handleRootEl = function (e) {
                f(t.rootElRef, e), f(t.props.elRef, e);
            }),
            t
        );
    }
    function ec(e, t, n, r) {
        if (e.firstCol === t && e.lastCol === n - 1) return e;
        var o = e.eventRange,
            i = o.range,
            r = nr(i, { start: r[t].date, end: d(r[n - 1].date, 1) });
        return I(I({}, e), {
            firstCol: t,
            lastCol: n - 1,
            eventRange: { def: o.def, ui: I(I({}, o.ui), { durationEditable: !1 }), instance: o.instance, range: r },
            isStart: e.isStart && r.start.valueOf() === i.start.valueOf(),
            isEnd: e.isEnd && r.end.valueOf() === i.end.valueOf(),
        });
    }
    t(ic, (nc = da)),
        (ic.prototype.addSegs = function (e) {
            for (
                var t = this,
                    e = nc.prototype.addSegs.call(this, e),
                    n = this.entriesByLevel,
                    r = function (e) {
                        return !t.forceHidden[ha(e)];
                    },
                    o = 0;
                o < n.length;
                o += 1
            )
                n[o] = n[o].filter(r);
            return e;
        }),
        (ic.prototype.handleInvalidInsertion = function (e, t, n) {
            var r,
                o,
                i = this.entriesByLevel,
                a = this.forceHidden,
                s = e.touchingEntry,
                l = e.touchingLevel,
                u = e.touchingLateral;
            return (
                this.hiddenConsumes && s && (a[(r = ha(s))] || (this.allowReslicing ? ((a[ha((o = I(I({}, s), { span: ma(s.span, t.span) })))] = !0), (i[l][u] = o), this.splitEntry(s, t, n)) : ((a[r] = !0), n.push(s)))),
                nc.prototype.handleInvalidInsertion.call(this, e, t, n)
            );
        });
    var tc,
        nc,
        rc = ic,
        oc =
            (t(O, (tc = g)),
            (O.prototype.render = function () {
                var o = this,
                    i = this.props,
                    e = this.state,
                    t = this.context.options,
                    n = i.cells.length,
                    a = Iu(i.businessHourSegs, n),
                    s = Iu(i.bgEventSegs, n),
                    l = Iu(this.getHighlightSegs(), n),
                    u = Iu(this.getMirrorSegs(), n),
                    n = (function (e, t, n, r, o, i, a) {
                        var s = new rc();
                        (s.allowReslicing = !0),
                            (s.strictOrder = r),
                            !0 === t || !0 === n ? ((s.maxCoord = i), (s.hiddenConsumes = !0)) : "number" == typeof t ? (s.maxStackCnt = t) : "number" == typeof n && ((s.maxStackCnt = n), (s.hiddenConsumes = !0));
                        for (var l = [], u = [], c = 0; c < e.length; c += 1) {
                            var d = o[(C = e[c]).eventRange.instance.instanceId];
                            null != d ? l.push({ index: c, thickness: d, span: { start: C.firstCol, end: C.lastCol + 1 } }) : u.push(C);
                        }
                        for (
                            var r = s.addSegs(l),
                                p = (i = (function (e, t, n) {
                                    for (
                                        var r = (function (e, t) {
                                                for (var n = [], r = 0; r < t; r += 1) n.push([]);
                                                for (var o = 0, i = e; o < i.length; o++) for (var a = i[o], r = a.span.start; r < a.span.end; r += 1) n[r].push(a);
                                                return n;
                                            })(e, n.length),
                                            o = [],
                                            i = [],
                                            a = [],
                                            s = 0;
                                        s < n.length;
                                        s += 1
                                    ) {
                                        for (var l = r[s], u = [], c = 0, d = 0, p = 0, f = l; p < f.length; p++) {
                                            var h = t[(y = f[p]).index];
                                            u.push({ seg: ec(h, s, s + 1, n), isVisible: !0, isAbsolute: !1, absoluteTop: y.levelCoord, marginTop: y.levelCoord - c }), (c = y.levelCoord + y.thickness);
                                        }
                                        for (var g = [], c = 0, d = 0, v = 0, m = l; v < m.length; v++) {
                                            var y,
                                                h = t[(y = m[v]).index],
                                                E = 1 < y.span.end - y.span.start,
                                                S = y.span.start === s;
                                            (d += y.levelCoord - c),
                                                (c = y.levelCoord + y.thickness),
                                                E
                                                    ? ((d += y.thickness), S && g.push({ seg: ec(h, y.span.start, y.span.end, n), isVisible: !0, isAbsolute: !0, absoluteTop: y.levelCoord, marginTop: 0 }))
                                                    : S && (g.push({ seg: ec(h, y.span.start, y.span.end, n), isVisible: !0, isAbsolute: !1, absoluteTop: y.levelCoord, marginTop: d }), (d = 0));
                                        }
                                        o.push(u), i.push(g), a.push(d);
                                    }
                                    return { singleColPlacements: o, multiColPlacements: i, leftoverMargins: a };
                                })(s.toRects(), e, a)).singleColPlacements,
                                f = i.multiColPlacements,
                                h = i.leftoverMargins,
                                g = [],
                                v = [],
                                m = 0,
                                y = u;
                            m < y.length;
                            m++
                        ) {
                            f[(C = y[m]).firstCol].push({ seg: C, isVisible: !1, isAbsolute: !0, absoluteTop: 0, marginTop: 0 });
                            for (var E = C.firstCol; E <= C.lastCol; E += 1) p[E].push({ seg: ec(C, E, E + 1, a), isVisible: !1, isAbsolute: !1, absoluteTop: 0, marginTop: 0 });
                        }
                        for (E = 0; E < a.length; E += 1) g.push(0);
                        for (var S = 0, b = r; S < b.length; S++) {
                            var D = b[S],
                                C = e[D.index],
                                w = D.span;
                            for (f[w.start].push({ seg: ec(C, w.start, w.end, a), isVisible: !1, isAbsolute: !0, absoluteTop: 0, marginTop: 0 }), E = w.start; E < w.end; E += 1)
                                (g[E] += 1), p[E].push({ seg: ec(C, E, E + 1, a), isVisible: !1, isAbsolute: !1, absoluteTop: 0, marginTop: 0 });
                        }
                        for (E = 0; E < a.length; E += 1) v.push(h[E]);
                        return { singleColPlacements: p, multiColPlacements: f, moreCnts: g, moreMarginTops: v };
                    })(fr(i.fgEventSegs, t.eventOrder), i.dayMaxEvents, i.dayMaxEventRows, t.eventOrderStrict, e.eventInstanceHeights, e.maxContentHeight, i.cells),
                    c = n.singleColPlacements,
                    d = n.multiColPlacements,
                    p = n.moreCnts,
                    f = n.moreMarginTops,
                    h = (i.eventDrag && i.eventDrag.affectedInstances) || (i.eventResize && i.eventResize.affectedInstances) || {};
                return C(
                    "tr",
                    { ref: this.rootElRef, role: "row" },
                    i.renderIntro && i.renderIntro(),
                    i.cells.map(function (e, t) {
                        var n = o.renderFgSegs(t, (i.forPrint ? c : d)[t], i.todayRange, h),
                            r = o.renderFgSegs(
                                t,
                                (function (e, a) {
                                    if (!e.length) return [];
                                    var t = (function () {
                                        for (var e = {}, t = 0, n = a; t < n.length; t++)
                                            for (var r = 0, o = n[t]; r < o.length; r++) {
                                                var i = o[r];
                                                e[i.seg.eventRange.instance.instanceId] = i.absoluteTop;
                                            }
                                        return e;
                                    })();
                                    return e.map(function (e) {
                                        return { seg: e, isVisible: !0, isAbsolute: !0, absoluteTop: t[e.eventRange.instance.instanceId], marginTop: 0 };
                                    });
                                })(u[t], d),
                                i.todayRange,
                                {},
                                Boolean(i.eventDrag),
                                Boolean(i.eventResize),
                                !1
                            );
                        return C(Ju, {
                            key: e.key,
                            elRef: o.cellElRefs.createRef(e.key),
                            innerElRef: o.frameElRefs.createRef(e.key),
                            dateProfile: i.dateProfile,
                            date: e.date,
                            showDayNumber: i.showDayNumbers,
                            showWeekNumber: i.showWeekNumbers && 0 === t,
                            forceDayTop: i.showWeekNumbers,
                            todayRange: i.todayRange,
                            eventSelection: i.eventSelection,
                            eventDrag: i.eventDrag,
                            eventResize: i.eventResize,
                            extraHookProps: e.extraHookProps,
                            extraDataAttrs: e.extraDataAttrs,
                            extraClassNames: e.extraClassNames,
                            extraDateSpan: e.extraDateSpan,
                            moreCnt: p[t],
                            moreMarginTop: f[t],
                            singlePlacements: c[t],
                            fgContentElRef: o.fgElRefs.createRef(e.key),
                            fgContent: C(w, null, C(w, null, n), C(w, null, r)),
                            bgContent: C(w, null, o.renderFillSegs(l[t], "highlight"), o.renderFillSegs(a[t], "non-business"), o.renderFillSegs(s[t], "bg-event")),
                        });
                    })
                );
            }),
            (O.prototype.componentDidMount = function () {
                this.updateSizing(!0);
            }),
            (O.prototype.componentDidUpdate = function (e, t) {
                var n = this.props;
                this.updateSizing(!y(e, n));
            }),
            (O.prototype.getHighlightSegs = function () {
                var e = this.props;
                return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
            }),
            (O.prototype.getMirrorSegs = function () {
                var e = this.props;
                return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
            }),
            (O.prototype.renderFgSegs = function (e, t, n, r, o, i, a) {
                var s = this.context,
                    l = this.props.eventSelection,
                    u = this.state.framePositions,
                    c = 1 === this.props.cells.length,
                    d = o || i || a,
                    p = [];
                if (u)
                    for (var f = 0, h = t; f < h.length; f++) {
                        var g = h[f],
                            v = g.seg,
                            m = v.eventRange.instance.instanceId,
                            y = m + ":" + e,
                            E = g.isVisible && !r[m],
                            S = g.isAbsolute,
                            b = "",
                            D = "";
                        S && (s.isRtl ? ((D = 0), (b = u.lefts[v.lastCol] - u.lefts[v.firstCol])) : ((b = 0), (D = u.rights[v.firstCol] - u.rights[v.lastCol]))),
                            p.push(
                                C(
                                    "div",
                                    {
                                        className: "fc-daygrid-event-harness" + (S ? " fc-daygrid-event-harness-abs" : ""),
                                        key: y,
                                        ref: d ? null : this.segHarnessRefs.createRef(y),
                                        style: { visibility: E ? "" : "hidden", marginTop: S ? "" : g.marginTop, top: S ? g.absoluteTop : "", left: b, right: D },
                                    },
                                    Uu(v)
                                        ? C(Bu, I({ seg: v, isDragging: o, isSelected: m === l, defaultDisplayEventEnd: c }, Er(v, n)))
                                        : C(Fu, I({ seg: v, isDragging: o, isResizing: i, isDateSelecting: a, isSelected: m === l, defaultDisplayEventEnd: c }, Er(v, n)))
                                )
                            );
                    }
                return p;
            }),
            (O.prototype.renderFillSegs = function (e, t) {
                var n = this.context.isRtl,
                    r = this.props.todayRange,
                    o = this.state.framePositions,
                    i = [];
                if (o)
                    for (var a = 0, s = e; a < s.length; a++) {
                        var l = s[a],
                            u = n ? { right: 0, left: o.lefts[l.lastCol] - o.lefts[l.firstCol] } : { left: 0, right: o.rights[l.firstCol] - o.rights[l.lastCol] };
                        i.push(C("div", { key: br(l.eventRange), className: "fc-daygrid-bg-harness", style: u }, "bg-event" === t ? C(pl, I({ seg: l }, Er(l, r))) : dl(t)));
                    }
                return C.apply(void 0, h([w, {}], i));
            }),
            (O.prototype.updateSizing = function (e) {
                var t,
                    n = this.props,
                    r = this.frameElRefs;
                n.forPrint ||
                    null === n.clientWidth ||
                    (e &&
                        (e = n.cells.map(function (e) {
                            return r.currentMap[e.key];
                        })).length &&
                        ((t = this.rootElRef.current), this.setState({ framePositions: new Mo(t, e, !0, !1) })),
                    (t = this.state.eventInstanceHeights),
                    (e = this.queryEventInstanceHeights()),
                    (n = !0 === n.dayMaxEvents || !0 === n.dayMaxEventRows),
                    this.setState({ eventInstanceHeights: I(I({}, t), e), maxContentHeight: n ? this.computeMaxContentHeight() : null }));
            }),
            (O.prototype.queryEventInstanceHeights = function () {
                var e,
                    t = this.segHarnessRefs.currentMap,
                    n = {};
                for (e in t) {
                    var r = Math.round(t[e].getBoundingClientRect().height),
                        o = e.split(":")[0];
                    n[o] = Math.max(n[o] || 0, r);
                }
                return n;
            }),
            (O.prototype.computeMaxContentHeight = function () {
                var e = this.props.cells[0].key,
                    t = this.cellElRefs.currentMap[e],
                    e = this.fgElRefs.currentMap[e];
                return t.getBoundingClientRect().bottom - e.getBoundingClientRect().top;
            }),
            (O.prototype.getCellEls = function () {
                var t = this.cellElRefs.currentMap;
                return this.props.cells.map(function (e) {
                    return t[e.key];
                });
            }),
            O);
    function O() {
        var e = (null !== tc && tc.apply(this, arguments)) || this;
        return (e.cellElRefs = new Is()), (e.frameElRefs = new Is()), (e.fgElRefs = new Is()), (e.segHarnessRefs = new Is()), (e.rootElRef = u()), (e.state = { framePositions: null, maxContentHeight: null, eventInstanceHeights: {} }), e;
    }
    function ic() {
        var e = (null !== nc && nc.apply(this, arguments)) || this;
        return (e.hiddenConsumes = !1), (e.forceHidden = {}), e;
    }
    oc.addStateEquality({ eventInstanceHeights: y });
    t(lc, (ac = g)),
        (lc.prototype.render = function () {
            var r = this,
                o = this.props,
                i = o.dateProfile,
                a = o.dayMaxEventRows,
                s = o.dayMaxEvents,
                t = o.expandRows,
                l = o.cells.length,
                u = this.splitBusinessHourSegs(o.businessHourSegs, l),
                c = this.splitBgEventSegs(o.bgEventSegs, l),
                d = this.splitFgEventSegs(o.fgEventSegs, l),
                p = this.splitDateSelectionSegs(o.dateSelectionSegs, l),
                f = this.splitEventDrag(o.eventDrag, l),
                h = this.splitEventResize(o.eventResize, l),
                e = !0 === s || !0 === a;
            return (
                e && !t && ((e = !1), (s = a = null)),
                C(
                    "div",
                    {
                        className: ["fc-daygrid-body", e ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", t ? "" : "fc-daygrid-body-natural"].join(" "),
                        ref: this.handleRootEl,
                        style: { width: o.clientWidth, minWidth: o.tableMinWidth },
                    },
                    C(ss, { unit: "day" }, function (e, n) {
                        return C(
                            w,
                            null,
                            C(
                                "table",
                                { role: "presentation", className: "fc-scrollgrid-sync-table", style: { width: o.clientWidth, minWidth: o.tableMinWidth, height: t ? o.clientHeight : "" } },
                                o.colGroupNode,
                                C(
                                    "tbody",
                                    { role: "presentation" },
                                    o.cells.map(function (e, t) {
                                        return C(oc, {
                                            ref: r.rowRefs.createRef(t),
                                            key: e.length ? e[0].date.toISOString() : t,
                                            showDayNumbers: 1 < l,
                                            showWeekNumbers: o.showWeekNumbers,
                                            todayRange: n,
                                            dateProfile: i,
                                            cells: e,
                                            renderIntro: o.renderRowIntro,
                                            businessHourSegs: u[t],
                                            eventSelection: o.eventSelection,
                                            bgEventSegs: c[t].filter(uc),
                                            fgEventSegs: d[t],
                                            dateSelectionSegs: p[t],
                                            eventDrag: f[t],
                                            eventResize: h[t],
                                            dayMaxEvents: s,
                                            dayMaxEventRows: a,
                                            clientWidth: o.clientWidth,
                                            clientHeight: o.clientHeight,
                                            forPrint: o.forPrint,
                                        });
                                    })
                                )
                            )
                        );
                    })
                )
            );
        }),
        (lc.prototype.prepareHits = function () {
            (this.rowPositions = new Mo(
                this.rootEl,
                this.rowRefs.collect().map(function (e) {
                    return e.getCellEls()[0];
                }),
                !1,
                !0
            )),
                (this.colPositions = new Mo(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1));
        }),
        (lc.prototype.queryHit = function (e, t) {
            var n,
                r = this.colPositions,
                o = this.rowPositions,
                e = r.leftToIndex(e),
                t = o.topToIndex(t);
            return null != t && null != e
                ? ((n = this.props.cells[t][e]),
                  {
                      dateProfile: this.props.dateProfile,
                      dateSpan: I({ range: this.getCellRange(t, e), allDay: !0 }, n.extraDateSpan),
                      dayEl: this.getCellEl(t, e),
                      rect: { left: r.lefts[e], right: r.rights[e], top: o.tops[t], bottom: o.bottoms[t] },
                      layer: 0,
                  })
                : null;
        }),
        (lc.prototype.getCellEl = function (e, t) {
            return this.rowRefs.currentMap[e].getCellEls()[t];
        }),
        (lc.prototype.getCellRange = function (e, t) {
            e = this.props.cells[e][t].date;
            return { start: e, end: d(e, 1) };
        });
    var ac,
        sc = lc;
    function lc() {
        var t = (null !== ac && ac.apply(this, arguments)) || this;
        return (
            (t.splitBusinessHourSegs = S(Mu)),
            (t.splitBgEventSegs = S(Mu)),
            (t.splitFgEventSegs = S(Mu)),
            (t.splitDateSelectionSegs = S(Mu)),
            (t.splitEventDrag = S(Pu)),
            (t.splitEventResize = S(Pu)),
            (t.rowRefs = new Is()),
            (t.handleRootEl = function (e) {
                (t.rootEl = e) ? t.context.registerInteractiveComponent(t, { el: e, isHitComboAllowed: t.props.isHitComboAllowed }) : t.context.unregisterInteractiveComponent(t);
            }),
            t
        );
    }
    function uc(e) {
        return e.eventRange.def.allDay;
    }
    t(mc, (pc = $o)),
        (mc.prototype.sliceRange = function (e, t) {
            return t.sliceRange(e);
        });
    var cc,
        dc,
        pc,
        fc = mc,
        hc =
            (t(vc, (dc = g)),
            (vc.prototype.render = function () {
                var e = this.props,
                    t = this.context;
                return C(
                    sc,
                    I({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
                        dateProfile: e.dateProfile,
                        cells: e.dayTableModel.cells,
                        colGroupNode: e.colGroupNode,
                        tableMinWidth: e.tableMinWidth,
                        renderRowIntro: e.renderRowIntro,
                        dayMaxEvents: e.dayMaxEvents,
                        dayMaxEventRows: e.dayMaxEventRows,
                        showWeekNumbers: e.showWeekNumbers,
                        expandRows: e.expandRows,
                        headerAlignElRef: e.headerAlignElRef,
                        clientWidth: e.clientWidth,
                        clientHeight: e.clientHeight,
                        forPrint: e.forPrint,
                    })
                );
            }),
            vc),
        fu =
            (t(gc, (cc = au)),
            (gc.prototype.render = function () {
                function e(e) {
                    return C(hc, {
                        ref: t.tableRef,
                        dateProfile: o.dateProfile,
                        dayTableModel: i,
                        businessHours: o.businessHours,
                        dateSelection: o.dateSelection,
                        eventStore: o.eventStore,
                        eventUiBases: o.eventUiBases,
                        eventSelection: o.eventSelection,
                        eventDrag: o.eventDrag,
                        eventResize: o.eventResize,
                        nextDayThreshold: r.nextDayThreshold,
                        colGroupNode: e.tableColGroupNode,
                        tableMinWidth: e.tableMinWidth,
                        dayMaxEvents: r.dayMaxEvents,
                        dayMaxEventRows: r.dayMaxEventRows,
                        showWeekNumbers: r.weekNumbers,
                        expandRows: !o.isHeightAuto,
                        headerAlignElRef: t.headerElRef,
                        clientWidth: e.clientWidth,
                        clientHeight: e.clientHeight,
                        forPrint: o.forPrint,
                    });
                }
                var t = this,
                    n = this.context,
                    r = n.options,
                    n = n.dateProfileGenerator,
                    o = this.props,
                    i = this.buildDayTableModel(o.dateProfile, n),
                    n = r.dayHeaders && C(fs, { ref: this.headerRef, dateProfile: o.dateProfile, dates: i.headerDates, datesRepDistinctDays: 1 === i.rowCnt });
                return r.dayMinWidth ? this.renderHScrollLayout(n, e, i.colCnt, r.dayMinWidth) : this.renderSimpleLayout(n, e);
            }),
            gc);
    function gc() {
        var e = (null !== cc && cc.apply(this, arguments)) || this;
        return (e.buildDayTableModel = S(yc)), (e.headerRef = u()), (e.tableRef = u()), e;
    }
    function vc() {
        var e = (null !== dc && dc.apply(this, arguments)) || this;
        return (e.slicer = new fc()), (e.tableRef = u()), e;
    }
    function mc() {
        var e = (null !== pc && pc.apply(this, arguments)) || this;
        return (e.forceDayIfListItem = !0), e;
    }
    function yc(e, t) {
        t = new vs(e.renderRange, t);
        return new ms(t, /year|month|week/.test(e.currentRangeUnit));
    }
    var Ec,
        Sc,
        gu = v({
            initialView: "dayGridMonth",
            views: {
                dayGrid: {
                    component: fu,
                    dateProfileGeneratorClass:
                        (t(wc, (Sc = Mi)),
                        (wc.prototype.buildRenderRange = function (e, t, n) {
                            var r = this.props.dateEnv,
                                e = Sc.prototype.buildRenderRange.call(this, e, t, n),
                                n = e.start,
                                e = e.end;
                            return (
                                /^(year|month)$/.test(t) && ((n = r.startOfWeek(n)), (t = r.startOfWeek(e)).valueOf() !== e.valueOf() && (e = Ct(t, 1))),
                                { start: n, end: (e = this.props.monthMode && this.props.fixedWeekCount ? Ct(e, 6 - Math.ceil(Rt(n, e))) : e) }
                            );
                        }),
                        wc),
                },
                dayGridDay: { type: "dayGrid", duration: { days: 1 } },
                dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } },
                dayGridMonth: { type: "dayGrid", duration: { months: 1 }, monthMode: !0, fixedWeekCount: !0 },
            },
        }),
        bc =
            (t(Cc, (Ec = so)),
            (Cc.prototype.getKeyInfo = function () {
                return { allDay: {}, timed: {} };
            }),
            (Cc.prototype.getKeysForDateSpan = function (e) {
                return e.allDay ? ["allDay"] : ["timed"];
            }),
            (Cc.prototype.getKeysForEventDef = function (e) {
                return e.allDay ? (lr(e) ? ["timed", "allDay"] : ["allDay"]) : ["timed"];
            }),
            Cc),
        Dc = a({ hour: "numeric", minute: "2-digit", omitZeroMinute: !0, meridiem: "short" });
    function Cc() {
        return (null !== Ec && Ec.apply(this, arguments)) || this;
    }
    function wc() {
        return (null !== Sc && Sc.apply(this, arguments)) || this;
    }
    function Rc(o) {
        var i = ["fc-timegrid-slot", "fc-timegrid-slot-label", o.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
        return C(Yo.Consumer, null, function (e) {
            if (!o.isLabeled) return C("td", { className: i.join(" "), "data-time": o.isoTimeStr });
            var t = e.dateEnv,
                n = e.options,
                e = e.viewApi,
                r = null == n.slotLabelFormat ? Dc : Array.isArray(n.slotLabelFormat) ? a(n.slotLabelFormat[0]) : a(n.slotLabelFormat),
                e = { level: 0, time: o.time, date: t.toDate(o.date), view: e, text: t.format(o.date, r) };
            return C(R, { hookProps: e, classNames: n.slotLabelClassNames, content: n.slotLabelContent, defaultContent: Tc, didMount: n.slotLabelDidMount, willUnmount: n.slotLabelWillUnmount }, function (e, t, n, r) {
                return C(
                    "td",
                    { ref: e, className: i.concat(t).join(" "), "data-time": o.isoTimeStr },
                    C("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" }, C("div", { className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion", ref: n }, r))
                );
            });
        });
    }
    function Tc(e) {
        return e.text;
    }
    t(Pc, (kc = c)),
        (Pc.prototype.render = function () {
            return this.props.slatMetas.map(function (e) {
                return C("tr", { key: e.key }, C(Rc, I({}, e)));
            });
        });
    var _c,
        kc,
        xc = Pc,
        Mc = a({ week: "short" }),
        vu =
            (t(Ic, (_c = g)),
            (Ic.prototype.renderSimpleLayout = function (e, t, n) {
                var r = this.context,
                    o = this.props,
                    i = [],
                    a = Gs(r.options);
                return (
                    e && i.push({ type: "header", key: "header", isSticky: a, chunk: { elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e } }),
                    t &&
                        (i.push({ type: "body", key: "all-day", chunk: { content: t } }),
                        i.push({
                            type: "body",
                            key: "all-day-divider",
                            outerContent: C("tr", { role: "presentation", className: "fc-scrollgrid-section" }, C("td", { className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded") })),
                        })),
                    i.push({ type: "body", key: "body", liquid: !0, expandRows: Boolean(r.options.expandRows), chunk: { scrollerElRef: this.scrollerElRef, content: n } }),
                    C(wi, { viewSpec: r.viewSpec, elRef: this.rootElRef }, function (e, t) {
                        return C("div", { className: ["fc-timegrid"].concat(t).join(" "), ref: e }, C(Zs, { liquid: !o.isHeightAuto && !o.forPrint, collapsibleWidth: o.forPrint, cols: [{ width: "shrink" }], sections: i }));
                    })
                );
            }),
            (Ic.prototype.renderHScrollLayout = function (e, t, n, r, o, i, a) {
                var s = this,
                    l = this.context.pluginHooks.scrollGridImpl;
                if (!l) throw new Error("No ScrollGrid implementation");
                var u = this.context,
                    c = this.props,
                    d = !c.forPrint && Gs(u.options),
                    p = !c.forPrint && qs(u.options),
                    f = [],
                    h =
                        (e &&
                            f.push({
                                type: "header",
                                key: "header",
                                isSticky: d,
                                syncRowHeights: !0,
                                chunks: [
                                    {
                                        key: "axis",
                                        rowContent: function (e) {
                                            return C("tr", { role: "presentation" }, s.renderHeadAxis("day", e.rowSyncHeights[0]));
                                        },
                                    },
                                    { key: "cols", elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e },
                                ],
                            }),
                        t &&
                            (f.push({
                                type: "body",
                                key: "all-day",
                                syncRowHeights: !0,
                                chunks: [
                                    {
                                        key: "axis",
                                        rowContent: function (e) {
                                            return C("tr", { role: "presentation" }, s.renderTableRowAxis(e.rowSyncHeights[0]));
                                        },
                                    },
                                    { key: "cols", content: t },
                                ],
                            }),
                            f.push({
                                key: "all-day-divider",
                                type: "body",
                                outerContent: C("tr", { role: "presentation", className: "fc-scrollgrid-section" }, C("td", { colSpan: 2, className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded") })),
                            })),
                        u.options.nowIndicator);
                return (
                    f.push({
                        type: "body",
                        key: "body",
                        liquid: !0,
                        expandRows: Boolean(u.options.expandRows),
                        chunks: [
                            {
                                key: "axis",
                                content: function (e) {
                                    return C(
                                        "div",
                                        { className: "fc-timegrid-axis-chunk" },
                                        C("table", { "aria-hidden": !0, style: { height: e.expandRows ? e.clientHeight : "" } }, e.tableColGroupNode, C("tbody", null, C(xc, { slatMetas: i }))),
                                        C(
                                            "div",
                                            { className: "fc-timegrid-now-indicator-container" },
                                            C(ss, { unit: h ? "minute" : "day" }, function (e) {
                                                var o = h && a && a.safeComputeTop(e);
                                                return "number" == typeof o
                                                    ? C(nl, { isAxis: !0, date: e }, function (e, t, n, r) {
                                                          return C("div", { ref: e, className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "), style: { top: o } }, r);
                                                      })
                                                    : null;
                                            })
                                        )
                                    );
                                },
                            },
                            { key: "cols", scrollerElRef: this.scrollerElRef, content: n },
                        ],
                    }),
                    p &&
                        f.push({
                            key: "footer",
                            type: "footer",
                            isSticky: !0,
                            chunks: [
                                { key: "axis", content: js },
                                { key: "cols", content: js },
                            ],
                        }),
                    C(wi, { viewSpec: u.viewSpec, elRef: this.rootElRef }, function (e, t) {
                        return C(
                            "div",
                            { className: ["fc-timegrid"].concat(t).join(" "), ref: e },
                            C(l, { liquid: !c.isHeightAuto && !c.forPrint, collapsibleWidth: !1, colGroups: [{ width: "shrink", cols: [{ width: "shrink" }] }, { cols: [{ span: r, minWidth: o }] }], sections: f })
                        );
                    })
                );
            }),
            (Ic.prototype.getAllDayMaxEventProps = function () {
                var e = this.context.options,
                    t = e.dayMaxEvents,
                    e = e.dayMaxEventRows;
                return (!0 !== t && !0 !== e) || ((t = void 0), (e = 5)), { dayMaxEvents: t, dayMaxEventRows: e };
            }),
            Ic);
    function Ic() {
        var r = (null !== _c && _c.apply(this, arguments)) || this;
        return (
            (r.allDaySplitter = new bc()),
            (r.headerElRef = u()),
            (r.rootElRef = u()),
            (r.scrollerElRef = u()),
            (r.state = { slatCoords: null }),
            (r.handleScrollTopRequest = function (e) {
                var t = r.scrollerElRef.current;
                t && (t.scrollTop = e);
            }),
            (r.renderHeadAxis = function (e, o) {
                void 0 === o && (o = "");
                var t = r.context.options,
                    n = r.props.dateProfile.renderRange,
                    i = 1 === Tt(n.start, n.end) ? go(r.context, n.start, "week") : {};
                return t.weekNumbers && "day" === e
                    ? C(hl, { date: n.start, defaultFormat: Mc }, function (e, t, n, r) {
                          return C(
                              "th",
                              { ref: e, "aria-hidden": !0, className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ") },
                              C(
                                  "div",
                                  { className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid", style: { height: o } },
                                  C("a", I({ ref: n, className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner" }, i), r)
                              )
                          );
                      })
                    : C("th", { "aria-hidden": !0, className: "fc-timegrid-axis" }, C("div", { className: "fc-timegrid-axis-frame", style: { height: o } }));
            }),
            (r.renderTableRowAxis = function (o) {
                var e = r.context,
                    t = e.options,
                    e = e.viewApi,
                    e = { text: t.allDayText, view: e };
                return C(R, { hookProps: e, classNames: t.allDayClassNames, content: t.allDayContent, defaultContent: Nc, didMount: t.allDayDidMount, willUnmount: t.allDayWillUnmount }, function (e, t, n, r) {
                    return C(
                        "td",
                        { ref: e, "aria-hidden": !0, className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ") },
                        C(
                            "div",
                            { className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (null == o ? " fc-timegrid-axis-frame-liquid" : ""), style: { height: o } },
                            C("span", { className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner", ref: n }, r)
                        )
                    );
                });
            }),
            (r.handleSlatCoords = function (e) {
                r.setState({ slatCoords: e });
            }),
            r
        );
    }
    function Pc() {
        return (null !== kc && kc.apply(this, arguments)) || this;
    }
    function Nc(e) {
        return e.text;
    }
    (Fc.prototype.safeComputeTop = function (e) {
        var t = this.dateProfile;
        if (ar(t.currentRange, e)) {
            var n = m(e),
                e = e.valueOf() - n.valueOf();
            if (e >= p(t.slotMinTime) && e < p(t.slotMaxTime)) return this.computeTimeTop(E(e));
        }
        return null;
    }),
        (Fc.prototype.computeDateTop = function (e, t) {
            return (t = t || m(e)), this.computeTimeTop(E(e.valueOf() - t.valueOf()));
        }),
        (Fc.prototype.computeTimeTop = function (e) {
            var t = this.positions,
                n = this.dateProfile,
                r = t.els.length,
                e = (e.milliseconds - p(n.slotMinTime)) / p(this.slotDuration),
                e = Math.max(0, e);
            return (e = Math.min(r, e)), (n = Math.floor(e)), (e = e - (n = Math.min(n, r - 1))), t.tops[n] + t.getHeight(n) * e;
        });
    var Hc,
        Oc,
        Ac = Fc,
        Lc =
            (t(Vc, (Oc = c)),
            (Vc.prototype.render = function () {
                var n = this.props,
                    r = this.context,
                    a = r.options,
                    s = n.slatElRefs;
                return C(
                    "tbody",
                    null,
                    n.slatMetas.map(function (o, e) {
                        var t = { time: o.time, date: r.dateEnv.toDate(o.date), view: r.viewApi },
                            i = ["fc-timegrid-slot", "fc-timegrid-slot-lane", o.isLabeled ? "" : "fc-timegrid-slot-minor"];
                        return C(
                            "tr",
                            { key: o.key, ref: s.createRef(o.key) },
                            n.axis && C(Rc, I({}, o)),
                            C(R, { hookProps: t, classNames: a.slotLaneClassNames, content: a.slotLaneContent, didMount: a.slotLaneDidMount, willUnmount: a.slotLaneWillUnmount }, function (e, t, n, r) {
                                return C("td", { ref: e, className: i.concat(t).join(" "), "data-time": o.isoTimeStr }, r);
                            })
                        );
                    })
                );
            }),
            Vc),
        Uc =
            (t(Wc, (Hc = c)),
            (Wc.prototype.render = function () {
                var e = this.props,
                    t = this.context;
                return C(
                    "div",
                    { ref: this.rootElRef, className: "fc-timegrid-slots" },
                    C(
                        "table",
                        { "aria-hidden": !0, className: t.theme.getClass("table"), style: { minWidth: e.tableMinWidth, width: e.clientWidth, height: e.minHeight } },
                        e.tableColGroupNode,
                        C(Lc, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas })
                    )
                );
            }),
            (Wc.prototype.componentDidMount = function () {
                this.updateSizing();
            }),
            (Wc.prototype.componentDidUpdate = function () {
                this.updateSizing();
            }),
            (Wc.prototype.componentWillUnmount = function () {
                this.props.onCoords && this.props.onCoords(null);
            }),
            (Wc.prototype.updateSizing = function () {
                var t,
                    e = this.context,
                    n = this.props;
                n.onCoords &&
                    null !== n.clientWidth &&
                    this.rootElRef.current.offsetHeight &&
                    n.onCoords(
                        new Ac(
                            new Mo(
                                this.rootElRef.current,
                                ((t = this.slatElRefs.currentMap),
                                n.slatMetas.map(function (e) {
                                    return t[e.key];
                                })),
                                !1,
                                !0
                            ),
                            this.props.dateProfile,
                            e.options.slotDuration
                        )
                    );
            }),
            Wc);
    function Wc() {
        var e = (null !== Hc && Hc.apply(this, arguments)) || this;
        return (e.rootElRef = u()), (e.slatElRefs = new Is()), e;
    }
    function Vc() {
        return (null !== Oc && Oc.apply(this, arguments)) || this;
    }
    function Fc(e, t, n) {
        (this.positions = e), (this.dateProfile = t), (this.slotDuration = n);
    }
    function Bc(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n.push([]);
        if (e) for (r = 0; r < e.length; r += 1) n[e[r].col].push(e[r]);
        return n;
    }
    function zc(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = { affectedInstances: e.affectedInstances, isEvent: e.isEvent, segs: [] };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col].segs.push(i);
            }
        } else for (var a = 0; a < t; a += 1) n[a] = null;
        return n;
    }
    t(qc, (jc = c)),
        (qc.prototype.render = function () {
            var l = this,
                u = this.props;
            return C(
                bl,
                {
                    allDayDate: null,
                    moreCnt: u.hiddenSegs.length,
                    allSegs: u.hiddenSegs,
                    hiddenSegs: u.hiddenSegs,
                    alignmentElRef: this.rootElRef,
                    defaultContent: Yc,
                    extraDateSpan: u.extraDateSpan,
                    dateProfile: u.dateProfile,
                    todayRange: u.todayRange,
                    popoverContent: function () {
                        return ud(u.hiddenSegs, u);
                    },
                },
                function (t, e, n, r, o, i, a, s) {
                    return C(
                        "a",
                        {
                            ref: function (e) {
                                f(t, e), f(l.rootElRef, e);
                            },
                            className: ["fc-timegrid-more-link"].concat(e).join(" "),
                            style: { top: u.top, bottom: u.bottom },
                            onClick: o,
                            title: i,
                            "aria-expanded": a,
                            "aria-controls": s,
                        },
                        C("div", { ref: n, className: "fc-timegrid-more-link-inner fc-sticky" }, r)
                    );
                }
            );
        });
    var jc,
        Gc = qc;
    function qc() {
        var e = (null !== jc && jc.apply(this, arguments)) || this;
        return (e.rootElRef = u()), e;
    }
    function Yc(e) {
        return e.shortText;
    }
    function Zc(e, t) {
        if (!e) return [[], 0];
        for (var n = e.level, r = e.lateralStart, o = e.lateralEnd, i = r, a = []; i < o; ) a.push(t(n, i)), (i += 1);
        return a.sort(Xc), [a.map(Kc), a[0][1]];
    }
    function Xc(e, t) {
        return t[1] - e[1];
    }
    function Kc(e) {
        return e[0];
    }
    function $c(r, o) {
        var i = {};
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = r.apply(void 0, e);
            return n in i ? i[n] : (i[n] = o.apply(void 0, e));
        };
    }
    function Jc(e, t, n, r) {
        void 0 === r && (r = 0);
        var o = [];
        if ((n = void 0 === n ? null : n))
            for (var i = 0; i < e.length; i += 1) {
                var a = e[i],
                    s = n.computeDateTop(a.start, t),
                    a = Math.max(s + (r || 0), n.computeDateTop(a.end, t));
                o.push({ start: Math.round(s), end: Math.round(a) });
            }
        return o;
    }
    var Qc,
        ed,
        td,
        nd = a({ hour: "numeric", minute: "2-digit", meridiem: !1 }),
        rd =
            (t(ld, (td = c)),
            (ld.prototype.render = function () {
                var e = ["fc-timegrid-event", "fc-v-event"];
                return this.props.isShort && e.push("fc-timegrid-event-short"), C(Js, I({}, this.props, { defaultTimeFormat: nd, extraClassNames: e }));
            }),
            ld),
        od =
            (t(sd, (ed = c)),
            (sd.prototype.render = function () {
                var e = this.props;
                return C(il, { date: e.date, dateProfile: e.dateProfile, todayRange: e.todayRange, extraHookProps: e.extraHookProps }, function (e, t) {
                    return t && C("div", { className: "fc-timegrid-col-misc", ref: e }, t);
                });
            }),
            sd),
        id =
            (t(ad, (Qc = c)),
            (ad.prototype.render = function () {
                var r = this,
                    o = this.props,
                    e = this.context,
                    i = e.options.selectMirror,
                    a = (o.eventDrag && o.eventDrag.segs) || (o.eventResize && o.eventResize.segs) || (i && o.dateSelectionSegs) || [],
                    s = (o.eventDrag && o.eventDrag.affectedInstances) || (o.eventResize && o.eventResize.affectedInstances) || {},
                    l = this.sortEventSegs(o.fgEventSegs, e.options.eventOrder);
                return C(ul, { elRef: o.elRef, date: o.date, dateProfile: o.dateProfile, todayRange: o.todayRange, extraHookProps: o.extraHookProps }, function (e, t, n) {
                    return C(
                        "td",
                        I({ ref: e, role: "gridcell", className: ["fc-timegrid-col"].concat(t, o.extraClassNames || []).join(" ") }, n, o.extraDataAttrs),
                        C(
                            "div",
                            { className: "fc-timegrid-col-frame" },
                            C("div", { className: "fc-timegrid-col-bg" }, r.renderFillSegs(o.businessHourSegs, "non-business"), r.renderFillSegs(o.bgEventSegs, "bg-event"), r.renderFillSegs(o.dateSelectionSegs, "highlight")),
                            C("div", { className: "fc-timegrid-col-events" }, r.renderFgSegs(l, s, !1, !1, !1)),
                            C("div", { className: "fc-timegrid-col-events" }, r.renderFgSegs(a, {}, Boolean(o.eventDrag), Boolean(o.eventResize), Boolean(i))),
                            C("div", { className: "fc-timegrid-now-indicator-container" }, r.renderNowIndicator(o.nowIndicatorSegs)),
                            C(od, { date: o.date, dateProfile: o.dateProfile, todayRange: o.todayRange, extraHookProps: o.extraHookProps })
                        )
                    );
                });
            }),
            (ad.prototype.renderFgSegs = function (e, t, n, r, o) {
                var i = this.props;
                return i.forPrint ? ud(e, i) : this.renderPositionedFgSegs(e, t, n, r, o);
            }),
            (ad.prototype.renderPositionedFgSegs = function (e, s, l, u, c) {
                var d = this,
                    t = this.context.options,
                    n = t.eventMaxStack,
                    p = t.eventShortHeight,
                    r = t.eventOrderStrict,
                    t = t.eventMinHeight,
                    o = this.props,
                    i = o.date,
                    a = o.slatCoords,
                    f = o.eventSelection,
                    h = o.todayRange,
                    g = o.nowDate,
                    v = l || u || c,
                    o = (function (e, t, n, r) {
                        for (var o = [], i = [], a = 0; a < e.length; a += 1) {
                            var s = t[a];
                            s ? o.push({ index: a, thickness: 1, span: s }) : i.push(e[a]);
                        }
                        (h = o),
                            (n = n),
                            (r = r),
                            (g = new da()),
                            null != n && (g.strictOrder = n),
                            null != r && (g.maxStackCnt = r),
                            (n = ga(g.addSegs(h))),
                            (l = (p = g).entriesByLevel),
                            (u = $c(
                                function (e, t) {
                                    return e + ":" + t;
                                },
                                function (c, d) {
                                    var e = Zc(
                                            (function () {
                                                for (var e = p.levelCoords, t = p.entriesByLevel, n = t[c][d], r = e[c] + n.thickness, o = e.length, i = c; i < o && e[i] < r; i += 1);
                                                for (; i < o; i += 1) {
                                                    for (var a, s = t[i], l = Ea(s, n.span.start, fa), l = l[0] + l[1], u = l; (a = s[u]) && a.span.start < n.span.end; ) u += 1;
                                                    if (l < u) return { level: i, lateralStart: l, lateralEnd: u };
                                                }
                                                return null;
                                            })(),
                                            u
                                        ),
                                        t = l[c][d];
                                    return [I(I({}, t), { nextLevelNodes: e[0] }), t.thickness + e[1]];
                                }
                            )),
                            (r = Zc(l.length ? { level: 0, lateralStart: 0, lateralEnd: l[0].length } : null, u)[0]),
                            (f = $c(
                                function (e, t, n) {
                                    return ha(e);
                                },
                                function (e, t, n) {
                                    var r,
                                        o = e.nextLevelNodes,
                                        i = e.thickness,
                                        a = i + n,
                                        n = i / a,
                                        s = [];
                                    if (o.length)
                                        for (var l = 0, u = o; l < u.length; l++) {
                                            var c,
                                                d = u[l];
                                            void 0 === r ? (r = (c = f(d, t, a))[0]) : (c = f(d, r, 0)), s.push(c[1]);
                                        }
                                    else r = 1;
                                    i = (r - t) * n;
                                    return [r - i, I(I({}, e), { thickness: i, nextLevelNodes: s })];
                                }
                            ));
                        for (
                            var p,
                                l,
                                u,
                                c,
                                d,
                                f,
                                h = {
                                    segRects:
                                        ((r = r.map(function (e) {
                                            return f(e, 0, 0)[1];
                                        })),
                                        (c = []),
                                        (d = $c(
                                            function (e, t, n) {
                                                return ha(e);
                                            },
                                            function (e, t, n) {
                                                var r = I(I({}, e), { levelCoord: t, stackDepth: n, stackForward: 0 });
                                                return c.push(r), (r.stackForward = S(e.nextLevelNodes, t + e.thickness, n + 1) + 1);
                                            }
                                        )),
                                        S(r, 0, 0),
                                        c),
                                    hiddenGroups: n,
                                },
                                g = h.hiddenGroups,
                                v = [],
                                m = 0,
                                y = h.segRects;
                            m < y.length;
                            m++
                        ) {
                            var E = y[m];
                            v.push({ seg: e[E.index], rect: E });
                        }
                        function S(e, t, n) {
                            for (var r = 0, o = 0, i = e; o < i.length; o++) var a = i[o], r = Math.max(d(a, t, n), r);
                            return r;
                        }
                        for (var b = 0, D = i; b < D.length; b++) {
                            var C = D[b];
                            v.push({ seg: C, rect: null });
                        }
                        return { segPlacements: v, hiddenGroups: g };
                    })(e, Jc(e, i, a, t), r, n),
                    i = o.segPlacements,
                    a = o.hiddenGroups;
                return C(
                    w,
                    null,
                    this.renderHiddenGroups(a, e),
                    i.map(function (e) {
                        var t = e.seg,
                            e = e.rect,
                            n = t.eventRange.instance.instanceId,
                            r = v || Boolean(!s[n] && e),
                            o = cd(e && e.span),
                            i = !v && e ? d.computeSegHStyle(e) : { left: 0, right: 0 },
                            a = Boolean(e) && 0 < e.stackForward,
                            e = Boolean(e) && e.span.end - e.span.start < p;
                        return C(
                            "div",
                            { className: "fc-timegrid-event-harness" + (a ? " fc-timegrid-event-harness-inset" : ""), key: n, style: I(I({ visibility: r ? "" : "hidden" }, o), i) },
                            C(rd, I({ seg: t, isDragging: l, isResizing: u, isDateSelecting: c, isSelected: n === f, isShort: e }, Er(t, h, g)))
                        );
                    })
                );
            }),
            (ad.prototype.renderHiddenGroups = function (e, r) {
                var t = this.props,
                    o = t.extraDateSpan,
                    i = t.dateProfile,
                    a = t.todayRange,
                    s = t.nowDate,
                    l = t.eventSelection,
                    u = t.eventDrag,
                    c = t.eventResize;
                return C(
                    w,
                    null,
                    e.map(function (e) {
                        var t,
                            n = cd(e.span),
                            e =
                                ((e = e.entries),
                                (t = r),
                                e.map(function (e) {
                                    return t[e.index];
                                }));
                        return C(Gc, { key: en(_l(e)), hiddenSegs: e, top: n.top, bottom: n.bottom, extraDateSpan: o, dateProfile: i, todayRange: a, nowDate: s, eventSelection: l, eventDrag: u, eventResize: c });
                    })
                );
            }),
            (ad.prototype.renderFillSegs = function (n, r) {
                var o = this.props,
                    e = this.context,
                    e = Jc(n, o.date, o.slatCoords, e.options.eventMinHeight).map(function (e, t) {
                        t = n[t];
                        return C("div", { key: br(t.eventRange), className: "fc-timegrid-bg-harness", style: cd(e) }, "bg-event" === r ? C(pl, I({ seg: t }, Er(t, o.todayRange, o.nowDate))) : dl(r));
                    });
                return C(w, null, e);
            }),
            (ad.prototype.renderNowIndicator = function (e) {
                var t = this.props,
                    i = t.slatCoords,
                    a = t.date;
                return i
                    ? e.map(function (o, e) {
                          return C(nl, { isAxis: !1, date: a, key: e }, function (e, t, n, r) {
                              return C("div", { ref: e, className: ["fc-timegrid-now-indicator-line"].concat(t).join(" "), style: { top: i.computeDateTop(o.start, a) } }, r);
                          });
                      })
                    : null;
            }),
            (ad.prototype.computeSegHStyle = function (e) {
                var t,
                    n = this.context,
                    r = n.isRtl,
                    n = n.options.slotEventOverlap,
                    o = e.levelCoord,
                    i = e.levelCoord + e.thickness,
                    i = (n && (i = Math.min(1, o + 2 * (i - o))), (o = r ? ((t = 1 - i), o) : ((t = o), 1 - i)), { zIndex: e.stackDepth + 1, left: 100 * t + "%", right: 100 * o + "%" });
                return n && !e.stackForward && (i[r ? "marginLeft" : "marginRight"] = 20), i;
            }),
            ad);
    function ad() {
        var e = (null !== Qc && Qc.apply(this, arguments)) || this;
        return (e.sortEventSegs = S(fr)), e;
    }
    function sd() {
        return (null !== ed && ed.apply(this, arguments)) || this;
    }
    function ld() {
        return (null !== td && td.apply(this, arguments)) || this;
    }
    function ud(e, t) {
        var n = t.todayRange,
            r = t.nowDate,
            o = t.eventSelection,
            i = t.eventDrag,
            t = t.eventResize,
            a = (i ? i.affectedInstances : null) || (t ? t.affectedInstances : null) || {};
        return C(
            w,
            null,
            e.map(function (e) {
                var t = e.eventRange.instance.instanceId;
                return C("div", { key: t, style: { visibility: a[t] ? "hidden" : "" } }, C(rd, I({ seg: e, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: t === o, isShort: !1 }, Er(e, n, r))));
            })
        );
    }
    function cd(e) {
        return e ? { top: e.start, bottom: -e.end } : { top: "", bottom: "" };
    }
    t(fd, (dd = c)),
        (fd.prototype.render = function () {
            var n = this,
                r = this.props,
                o = this.context.options.nowIndicator && r.slatCoords && r.slatCoords.safeComputeTop(r.nowDate),
                e = r.cells.length,
                i = this.splitFgEventSegs(r.fgEventSegs, e),
                a = this.splitBgEventSegs(r.bgEventSegs, e),
                s = this.splitBusinessHourSegs(r.businessHourSegs, e),
                l = this.splitNowIndicatorSegs(r.nowIndicatorSegs, e),
                u = this.splitDateSelectionSegs(r.dateSelectionSegs, e),
                c = this.splitEventDrag(r.eventDrag, e),
                d = this.splitEventResize(r.eventResize, e);
            return C(
                "div",
                { className: "fc-timegrid-cols", ref: this.rootElRef },
                C(
                    "table",
                    { role: "presentation", style: { minWidth: r.tableMinWidth, width: r.clientWidth } },
                    r.tableColGroupNode,
                    C(
                        "tbody",
                        { role: "presentation" },
                        C(
                            "tr",
                            { role: "row" },
                            r.axis &&
                                C(
                                    "td",
                                    { "aria-hidden": !0, className: "fc-timegrid-col fc-timegrid-axis" },
                                    C(
                                        "div",
                                        { className: "fc-timegrid-col-frame" },
                                        C(
                                            "div",
                                            { className: "fc-timegrid-now-indicator-container" },
                                            "number" == typeof o &&
                                                C(nl, { isAxis: !0, date: r.nowDate }, function (e, t, n, r) {
                                                    return C("div", { ref: e, className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "), style: { top: o } }, r);
                                                })
                                        )
                                    )
                                ),
                            r.cells.map(function (e, t) {
                                return C(id, {
                                    key: e.key,
                                    elRef: n.cellElRefs.createRef(e.key),
                                    dateProfile: r.dateProfile,
                                    date: e.date,
                                    nowDate: r.nowDate,
                                    todayRange: r.todayRange,
                                    extraHookProps: e.extraHookProps,
                                    extraDataAttrs: e.extraDataAttrs,
                                    extraClassNames: e.extraClassNames,
                                    extraDateSpan: e.extraDateSpan,
                                    fgEventSegs: i[t],
                                    bgEventSegs: a[t],
                                    businessHourSegs: s[t],
                                    nowIndicatorSegs: l[t],
                                    dateSelectionSegs: u[t],
                                    eventDrag: c[t],
                                    eventResize: d[t],
                                    slatCoords: r.slatCoords,
                                    eventSelection: r.eventSelection,
                                    forPrint: r.forPrint,
                                });
                            })
                        )
                    )
                )
            );
        }),
        (fd.prototype.componentDidMount = function () {
            this.updateCoords();
        }),
        (fd.prototype.componentDidUpdate = function () {
            this.updateCoords();
        }),
        (fd.prototype.updateCoords = function () {
            var t,
                e = this.props;
            e.onColCoords &&
                null !== e.clientWidth &&
                e.onColCoords(
                    new Mo(
                        this.rootElRef.current,
                        ((t = this.cellElRefs.currentMap),
                        e.cells.map(function (e) {
                            return t[e.key];
                        })),
                        !0,
                        !1
                    )
                );
        });
    var dd,
        pd = fd;
    function fd() {
        var e = (null !== dd && dd.apply(this, arguments)) || this;
        return (
            (e.splitFgEventSegs = S(Bc)),
            (e.splitBgEventSegs = S(Bc)),
            (e.splitBusinessHourSegs = S(Bc)),
            (e.splitNowIndicatorSegs = S(Bc)),
            (e.splitDateSelectionSegs = S(Bc)),
            (e.splitEventDrag = S(zc)),
            (e.splitEventResize = S(zc)),
            (e.rootElRef = u()),
            (e.cellElRefs = new Is()),
            e
        );
    }
    t(vd, (hd = g)),
        (vd.prototype.render = function () {
            var e = this.props,
                t = this.state;
            return C(
                "div",
                { className: "fc-timegrid-body", ref: this.handleRootEl, style: { width: e.clientWidth, minWidth: e.tableMinWidth } },
                C(Uc, {
                    axis: e.axis,
                    dateProfile: e.dateProfile,
                    slatMetas: e.slatMetas,
                    clientWidth: e.clientWidth,
                    minHeight: e.expandRows ? e.clientHeight : "",
                    tableMinWidth: e.tableMinWidth,
                    tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                    onCoords: this.handleSlatCoords,
                }),
                C(pd, {
                    cells: e.cells,
                    axis: e.axis,
                    dateProfile: e.dateProfile,
                    businessHourSegs: e.businessHourSegs,
                    bgEventSegs: e.bgEventSegs,
                    fgEventSegs: e.fgEventSegs,
                    dateSelectionSegs: e.dateSelectionSegs,
                    eventSelection: e.eventSelection,
                    eventDrag: e.eventDrag,
                    eventResize: e.eventResize,
                    todayRange: e.todayRange,
                    nowDate: e.nowDate,
                    nowIndicatorSegs: e.nowIndicatorSegs,
                    clientWidth: e.clientWidth,
                    tableMinWidth: e.tableMinWidth,
                    tableColGroupNode: e.tableColGroupNode,
                    slatCoords: t.slatCoords,
                    onColCoords: this.handleColCoords,
                    forPrint: e.forPrint,
                })
            );
        }),
        (vd.prototype.componentDidMount = function () {
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
        }),
        (vd.prototype.componentDidUpdate = function (e) {
            this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
        }),
        (vd.prototype.componentWillUnmount = function () {
            this.scrollResponder.detach();
        }),
        (vd.prototype.queryHit = function (e, t) {
            var n,
                r,
                o = this.context,
                i = o.dateEnv,
                o = o.options,
                a = this.colCoords,
                s = this.props.dateProfile,
                l = this.state.slatCoords,
                o = this.processSlotOptions(this.props.slotDuration, o.snapDuration),
                u = o.snapDuration,
                o = o.snapsPerSlot,
                e = a.leftToIndex(e),
                c = l.positions.topToIndex(t);
            return null != e && null != c
                ? ((n = this.props.cells[e]),
                  (r = l.positions.tops[c]),
                  (l = l.positions.getHeight(c)),
                  (c = c * o + Math.floor(((t - r) / l) * o)),
                  (t = this.props.cells[e].date),
                  (o = Xt(s.slotMinTime, Kt(u, c))),
                  (c = i.add(t, o)),
                  (t = i.add(c, u)),
                  { dateProfile: s, dateSpan: I({ range: { start: c, end: t }, allDay: !1 }, n.extraDateSpan), dayEl: a.els[e], rect: { left: a.lefts[e], right: a.rights[e], top: r, bottom: r + l }, layer: 0 })
                : null;
        });
    var hd,
        gd = vd;
    function vd() {
        var r = (null !== hd && hd.apply(this, arguments)) || this;
        return (
            (r.processSlotOptions = S(md)),
            (r.state = { slatCoords: null }),
            (r.handleRootEl = function (e) {
                e ? r.context.registerInteractiveComponent(r, { el: e, isHitComboAllowed: r.props.isHitComboAllowed }) : r.context.unregisterInteractiveComponent(r);
            }),
            (r.handleScrollRequest = function (e) {
                var t = r.props.onScrollTopRequest,
                    n = r.state.slatCoords;
                return !(!t || !n) && (e.time && ((n = n.computeTimeTop(e.time)), (n = Math.ceil(n)) && (n += 1), t(n)), !0);
            }),
            (r.handleColCoords = function (e) {
                r.colCoords = e;
            }),
            (r.handleSlatCoords = function (e) {
                r.setState({ slatCoords: e }), r.props.onSlatCoords && r.props.onSlatCoords(e);
            }),
            r
        );
    }
    function md(e, t) {
        var t = t || e,
            n = Jt(e, t);
        return null === n && ((t = e), (n = 1)), { snapDuration: t, snapsPerSlot: n };
    }
    t(Cd, (Ed = $o)),
        (Cd.prototype.sliceRange = function (e, t) {
            for (var n = [], r = 0; r < t.length; r += 1) {
                var o = nr(e, t[r]);
                o && n.push({ start: o.start, end: o.end, isStart: o.start.valueOf() === e.start.valueOf(), isEnd: o.end.valueOf() === e.end.valueOf(), col: r });
            }
            return n;
        });
    var yd,
        Ed,
        Sd = Cd,
        bd =
            (t(Dd, (yd = g)),
            (Dd.prototype.render = function () {
                var n = this,
                    r = this.props,
                    o = this.context,
                    i = r.dateProfile,
                    a = r.dayTableModel,
                    s = o.options.nowIndicator,
                    l = this.buildDayRanges(a, i, o.dateEnv);
                return C(ss, { unit: s ? "minute" : "day" }, function (e, t) {
                    return C(
                        gd,
                        I({ ref: n.timeColsRef }, n.slicer.sliceProps(r, i, null, o, l), {
                            forPrint: r.forPrint,
                            axis: r.axis,
                            dateProfile: i,
                            slatMetas: r.slatMetas,
                            slotDuration: r.slotDuration,
                            cells: a.cells[0],
                            tableColGroupNode: r.tableColGroupNode,
                            tableMinWidth: r.tableMinWidth,
                            clientWidth: r.clientWidth,
                            clientHeight: r.clientHeight,
                            expandRows: r.expandRows,
                            nowDate: e,
                            nowIndicatorSegs: s && n.slicer.sliceNowDate(e, o, l),
                            todayRange: t,
                            onScrollTopRequest: r.onScrollTopRequest,
                            onSlatCoords: r.onSlatCoords,
                        })
                    );
                });
            }),
            Dd);
    function Dd() {
        var e = (null !== yd && yd.apply(this, arguments)) || this;
        return (e.buildDayRanges = S(wd)), (e.slicer = new Sd()), (e.timeColsRef = u()), e;
    }
    function Cd() {
        return (null !== Ed && Ed.apply(this, arguments)) || this;
    }
    function wd(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({ start: n.add(a, t.slotMinTime), end: n.add(a, t.slotMaxTime) });
        }
        return r;
    }
    var Rd = [{ hours: 1 }, { minutes: 30 }, { minutes: 15 }, { seconds: 30 }, { seconds: 15 }];
    function Td(e, t, n, r, o) {
        for (
            var i = new Date(0),
                a = e,
                s = E(0),
                l =
                    n ||
                    (function (e) {
                        for (var t, n, r = Rd.length - 1; 0 <= r; --r) if (null !== (n = Jt((t = E(Rd[r])), e)) && 1 < n) return t;
                        return e;
                    })(r),
                u = [];
            p(a) < p(t);

        ) {
            var c = o.add(i, a),
                d = null !== Jt(s, l);
            u.push({ date: c, time: a, key: c.toISOString(), isoTimeStr: nn(c), isLabeled: d }), (a = Xt(a, r)), (s = Xt(s, r));
        }
        return u;
    }
    t(kd, (_d = vu)),
        (kd.prototype.render = function () {
            function e(e) {
                return C(
                    bd,
                    I({}, l.timed, {
                        dayTableModel: s,
                        dateProfile: a,
                        axis: c,
                        slotDuration: r.slotDuration,
                        slatMetas: u,
                        forPrint: i.forPrint,
                        tableColGroupNode: e.tableColGroupNode,
                        tableMinWidth: e.tableMinWidth,
                        clientWidth: e.clientWidth,
                        clientHeight: e.clientHeight,
                        onSlatCoords: t.handleSlatCoords,
                        expandRows: e.expandRows,
                        onScrollTopRequest: t.handleScrollTopRequest,
                    })
                );
            }
            var t = this,
                n = this.context,
                r = n.options,
                o = n.dateEnv,
                n = n.dateProfileGenerator,
                i = this.props,
                a = i.dateProfile,
                s = this.buildTimeColsModel(a, n),
                l = this.allDaySplitter.splitProps(i),
                u = this.buildSlatMetas(a.slotMinTime, a.slotMaxTime, r.slotLabelInterval, r.slotDuration, o),
                n = r.dayMinWidth,
                c = !n,
                o = n,
                d = r.dayHeaders && C(fs, { dates: s.headerDates, dateProfile: a, datesRepDistinctDays: !0, renderIntro: c ? this.renderHeadAxis : null }),
                p =
                    !1 !== r.allDaySlot &&
                    function (e) {
                        return C(
                            hc,
                            I(
                                {},
                                l.allDay,
                                {
                                    dateProfile: a,
                                    dayTableModel: s,
                                    nextDayThreshold: r.nextDayThreshold,
                                    tableMinWidth: e.tableMinWidth,
                                    colGroupNode: e.tableColGroupNode,
                                    renderRowIntro: c ? t.renderTableRowAxis : null,
                                    showWeekNumbers: !1,
                                    expandRows: !1,
                                    headerAlignElRef: t.headerElRef,
                                    clientWidth: e.clientWidth,
                                    clientHeight: e.clientHeight,
                                    forPrint: i.forPrint,
                                },
                                t.getAllDayMaxEventProps()
                            )
                        );
                    };
            return o ? this.renderHScrollLayout(d, p, e, s.colCnt, n, u, this.state.slatCoords) : this.renderSimpleLayout(d, p, e);
        });
    var _d,
        mu = kd;
    function kd() {
        var e = (null !== _d && _d.apply(this, arguments)) || this;
        return (e.buildTimeColsModel = S(xd)), (e.buildSlatMetas = S(Td)), e;
    }
    function xd(e, t) {
        e = new vs(e.renderRange, t);
        return new ms(e, !1);
    }
    var Md,
        Id = v({
            initialView: "timeGridWeek",
            optionRefiners: { allDaySlot: Boolean },
            views: {
                timeGrid: { component: mu, usesMinMaxTime: !0, allDaySlot: !0, slotDuration: "00:30:00", slotEventOverlap: !0 },
                timeGridDay: { type: "timeGrid", duration: { days: 1 } },
                timeGridWeek: { type: "timeGrid", duration: { weeks: 1 } },
            },
        }),
        Pd =
            (t(Nd, (Md = c)),
            (Nd.prototype.render = function () {
                var e = this.context,
                    o = e.theme,
                    t = e.dateEnv,
                    n = e.options,
                    e = e.viewApi,
                    r = this.props,
                    i = r.cellId,
                    a = r.dayDate,
                    r = r.todayRange,
                    s = this.state.textId,
                    r = co(a, r),
                    l = n.listDayFormat ? t.format(a, n.listDayFormat) : "",
                    u = n.listDaySideFormat ? t.format(a, n.listDaySideFormat) : "",
                    t = I({ date: t.toDate(a), view: e, textId: s, text: l, sideText: u, navLinkAttrs: go(this.context, a), sideNavLinkAttrs: go(this.context, a, "day", !1) }, r),
                    c = ["fc-list-day"].concat(po(r, o));
                return C(R, { hookProps: t, classNames: n.dayHeaderClassNames, content: n.dayHeaderContent, defaultContent: Hd, didMount: n.dayHeaderDidMount, willUnmount: n.dayHeaderWillUnmount }, function (e, t, n, r) {
                    return C(
                        "tr",
                        { ref: e, className: c.concat(t).join(" "), "data-date": tn(a) },
                        C("th", { scope: "colgroup", colSpan: 3, id: i, "aria-labelledby": s }, C("div", { className: "fc-list-day-cushion " + o.getClass("tableCellShaded"), ref: n }, r))
                    );
                });
            }),
            Nd);
    function Nd() {
        var e = (null !== Md && Md.apply(this, arguments)) || this;
        return (e.state = { textId: Je() }), e;
    }
    function Hd(e) {
        return C(w, null, e.text && C("a", I({ id: e.textId, className: "fc-list-day-text" }, e.navLinkAttrs), e.text), e.sideText && C("a", I({ "aria-hidden": !0, className: "fc-list-day-side-text" }, e.sideNavLinkAttrs), e.sideText));
    }
    var Od,
        Ad = a({ hour: "numeric", minute: "2-digit", meridiem: "short" }),
        Ld =
            (t(Ud, (Od = c)),
            (Ud.prototype.render = function () {
                var e = this.props,
                    f = this.context,
                    h = e.seg,
                    g = e.timeHeaderId,
                    v = e.eventHeaderId,
                    m = e.dateHeaderId,
                    y = f.options.eventTimeFormat || Ad;
                return C(
                    $s,
                    {
                        seg: h,
                        timeText: "",
                        disableDragging: !0,
                        disableResizing: !0,
                        defaultContent: function () {
                            return (t = Dr((e = h), f)), C("a", I({}, t), e.eventRange.def.title);
                            var e, t;
                        },
                        isPast: e.isPast,
                        isFuture: e.isFuture,
                        isToday: e.isToday,
                        isSelected: e.isSelected,
                        isDragging: e.isDragging,
                        isResizing: e.isResizing,
                        isDateSelecting: e.isDateSelecting,
                    },
                    function (e, t, n, r, o) {
                        return C(
                            "tr",
                            { className: ["fc-list-event", o.event.url ? "fc-event-forced-url" : ""].concat(t).join(" "), ref: e },
                            ((t = h),
                            (e = y),
                            (a = g),
                            (s = m),
                            !1 !== (p = (i = f).options).displayEventTime
                                ? ((d = t.eventRange.def),
                                  (l = t.eventRange.instance),
                                  (u = !1),
                                  (c = void 0),
                                  d.allDay
                                      ? (u = !0)
                                      : Jn(t.eventRange.range)
                                      ? t.isStart
                                          ? (c = yr(t, e, i, null, null, l.range.start, t.end))
                                          : t.isEnd
                                          ? (c = yr(t, e, i, null, null, t.start, l.range.end))
                                          : (u = !0)
                                      : (c = yr(t, e, i)),
                                  u
                                      ? ((d = { text: i.options.allDayText, view: i.viewApi }),
                                        C(R, { hookProps: d, classNames: p.allDayClassNames, content: p.allDayContent, defaultContent: Wd, didMount: p.allDayDidMount, willUnmount: p.allDayWillUnmount }, function (e, t, n, r) {
                                            return C("td", { ref: e, headers: a + " " + s, className: ["fc-list-event-time"].concat(t).join(" ") }, r);
                                        }))
                                      : C("td", { className: "fc-list-event-time" }, c))
                                : null),
                            C("td", { "aria-hidden": !0, className: "fc-list-event-graphic" }, C("span", { className: "fc-list-event-dot", style: { borderColor: o.borderColor || o.backgroundColor } })),
                            C("td", { ref: n, headers: v + " " + m, className: "fc-list-event-title" }, r)
                        );
                        var i, a, s, l, u, c, d, p;
                    }
                );
            }),
            Ud);
    function Ud() {
        return (null !== Od && Od.apply(this, arguments)) || this;
    }
    function Wd(e) {
        return e.text;
    }
    t(Bd, (Vd = g)),
        (Bd.prototype.render = function () {
            var n = this,
                r = this.props,
                e = this.context,
                o = ["fc-list", e.theme.getClass("table"), !1 !== e.options.stickyHeaderDates ? "fc-list-sticky" : ""],
                t = this.computeDateVars(r.dateProfile),
                i = t.dayDates,
                t = t.dayRanges,
                a = this.eventStoreToSegs(r.eventStore, r.eventUiBases, t);
            return C(wi, { viewSpec: e.viewSpec, elRef: this.setRootEl }, function (e, t) {
                return C(
                    "div",
                    { ref: e, className: o.concat(t).join(" ") },
                    C(Ms, { liquid: !r.isHeightAuto, overflowX: r.isHeightAuto ? "visible" : "hidden", overflowY: r.isHeightAuto ? "visible" : "auto" }, 0 < a.length ? n.renderSegList(a, i) : n.renderEmptyMessage())
                );
            });
        }),
        (Bd.prototype.renderEmptyMessage = function () {
            var e = this.context,
                t = e.options,
                e = e.viewApi,
                e = { text: t.noEventsText, view: e };
            return C(R, { hookProps: e, classNames: t.noEventsClassNames, content: t.noEventsContent, defaultContent: zd, didMount: t.noEventsDidMount, willUnmount: t.noEventsWillUnmount }, function (e, t, n, r) {
                return C("div", { className: ["fc-list-empty"].concat(t).join(" "), ref: e }, C("div", { className: "fc-list-empty-cushion", ref: n }, r));
            });
        }),
        (Bd.prototype.renderSegList = function (e, c) {
            var t = this.context,
                d = t.theme,
                p = t.options,
                t = this.state,
                f = t.timeHeaderId,
                h = t.eventHeaderId,
                g = t.dateHeaderIdRoot,
                v = (function (e) {
                    for (var t, n = [], r = 0; r < e.length; r += 1) (n[(t = e[r]).dayIndex] || (n[t.dayIndex] = [])).push(t);
                    return n;
                })(e);
            return C(ss, { unit: "day" }, function (e, t) {
                for (var n = [], r = 0; r < v.length; r += 1) {
                    var o = v[r];
                    if (o) {
                        var i = tn(c[r]),
                            a = g + "-" + i;
                        n.push(C(Pd, { key: i, cellId: a, dayDate: c[r], todayRange: t }));
                        for (var s = 0, l = fr(o, p.eventOrder); s < l.length; s++) {
                            var u = l[s];
                            n.push(C(Ld, I({ key: i + ":" + u.eventRange.instance.instanceId, seg: u, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, timeHeaderId: f, eventHeaderId: h, dateHeaderId: a }, Er(u, t, e))));
                        }
                    }
                }
                return C(
                    "table",
                    { className: "fc-list-table " + d.getClass("table") },
                    C("thead", null, C("tr", null, C("th", { scope: "col", id: f }, p.timeHint), C("th", { scope: "col", "aria-hidden": !0 }), C("th", { scope: "col", id: h }, p.eventHint))),
                    C("tbody", null, n)
                );
            });
        }),
        (Bd.prototype._eventStoreToSegs = function (e, t, n) {
            return this.eventRangesToSegs(sr(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n);
        }),
        (Bd.prototype.eventRangesToSegs = function (e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n.push.apply(n, this.eventRangeToSegs(i, t));
            }
            return n;
        }),
        (Bd.prototype.eventRangeToSegs = function (e, t) {
            for (var n, r = this.context.dateEnv, o = this.context.options.nextDayThreshold, i = e.range, a = e.def.allDay, s = [], l = 0; l < t.length; l += 1)
                if (
                    (n = nr(i, t[l])) &&
                    ((n = { component: this, eventRange: e, start: n.start, end: n.end, isStart: e.isStart && n.start.valueOf() === i.start.valueOf(), isEnd: e.isEnd && n.end.valueOf() === i.end.valueOf(), dayIndex: l }),
                    s.push(n),
                    !n.isEnd && !a && l + 1 < t.length && i.end < r.add(t[l + 1].start, o))
                ) {
                    (n.end = i.end), (n.isEnd = !0);
                    break;
                }
            return s;
        });
    var Vd,
        Fd = Bd;
    function Bd() {
        var t = (null !== Vd && Vd.apply(this, arguments)) || this;
        return (
            (t.computeDateVars = S(jd)),
            (t.eventStoreToSegs = S(t._eventStoreToSegs)),
            (t.state = { timeHeaderId: Je(), eventHeaderId: Je(), dateHeaderIdRoot: Je() }),
            (t.setRootEl = function (e) {
                e ? t.context.registerInteractiveComponent(t, { el: e }) : t.context.unregisterInteractiveComponent(t);
            }),
            t
        );
    }
    function zd(e) {
        return e.text;
    }
    function jd(e) {
        for (var t = m(e.renderRange.start), n = e.renderRange.end, r = [], o = []; t < n; ) r.push(t), o.push({ start: t, end: d(t, 1) }), (t = d(t, 1));
        return { dayDates: r, dayRanges: o };
    }
    function Gd(e) {
        return !1 === e ? null : a(e);
    }
    var qd,
        Yd = v({
            optionRefiners: { listDayFormat: Gd, listDaySideFormat: Gd, noEventsClassNames: n, noEventsContent: n, noEventsDidMount: n, noEventsWillUnmount: n },
            views: {
                list: { component: Fd, buttonTextKey: "list", listDayFormat: { month: "long", day: "numeric", year: "numeric" } },
                listDay: { type: "list", duration: { days: 1 }, listDayFormat: { weekday: "long" } },
                listWeek: { type: "list", duration: { weeks: 1 }, listDayFormat: { weekday: "long" }, listDaySideFormat: { month: "long", day: "numeric", year: "numeric" } },
                listMonth: { type: "list", duration: { month: 1 }, listDaySideFormat: { weekday: "long" } },
                listYear: { type: "list", duration: { year: 1 }, listDaySideFormat: { weekday: "long" } },
            },
        }),
        Zd = (t(Xd, (qd = Ho)), Xd);
    function Xd() {
        return (null !== qd && qd.apply(this, arguments)) || this;
    }
    (Zd.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body",
    }),
        (Zd.prototype.baseIconClass = "fa"),
        (Zd.prototype.iconClasses = { close: "fa-times", prev: "fa-chevron-left", next: "fa-chevron-right", prevYear: "fa-angle-double-left", nextYear: "fa-angle-double-right" }),
        (Zd.prototype.rtlIconClasses = { prev: "fa-chevron-right", next: "fa-chevron-left", prevYear: "fa-angle-double-right", nextYear: "fa-angle-double-left" }),
        (Zd.prototype.iconOverrideOption = "bootstrapFontAwesome"),
        (Zd.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome"),
        (Zd.prototype.iconOverridePrefix = "fa-");
    var Kd,
        $d = v({ themeClasses: { bootstrap: Zd } }),
        Jd = (t(Qd, (Kd = Ho)), Qd);
    function Qd() {
        return (null !== Kd && Kd.apply(this, arguments)) || this;
    }
    (Jd.prototype.classes = {
        root: "fc-theme-bootstrap5",
        tableCellShaded: "fc-theme-bootstrap5-shaded",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body",
    }),
        (Jd.prototype.baseIconClass = "bi"),
        (Jd.prototype.iconClasses = { close: "bi-x-lg", prev: "bi-chevron-left", next: "bi-chevron-right", prevYear: "bi-chevron-double-left", nextYear: "bi-chevron-double-right" }),
        (Jd.prototype.rtlIconClasses = { prev: "bi-chevron-right", next: "bi-chevron-left", prevYear: "bi-chevron-double-right", nextYear: "bi-chevron-double-left" }),
        (Jd.prototype.iconOverrideOption = "buttonIcons"),
        (Jd.prototype.iconOverrideCustomButtonOption = "icon"),
        (Jd.prototype.iconOverridePrefix = "bi-");
    var Jd = v({ themeClasses: { bootstrap5: Jd } }),
        ep = v({
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        var t,
                            n,
                            r = e.googleCalendarId;
                        return (
                            !r &&
                                e.url &&
                                ((t = e.url),
                                (r = /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(t)
                                    ? t
                                    : (n = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(t)) || (n = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(t))
                                    ? decodeURIComponent(n[1])
                                    : null)),
                            r ? { googleCalendarId: r, googleCalendarApiKey: e.googleCalendarApiKey, googleCalendarApiBase: e.googleCalendarApiBase, extraParams: e.extraParams } : null
                        );
                    },
                    fetch: function (e, r, o) {
                        var t,
                            i,
                            n,
                            a = e.context,
                            s = a.dateEnv,
                            a = a.options,
                            l = e.eventSource.meta,
                            a = l.googleCalendarApiKey || a.googleCalendarApiKey;
                        a
                            ? ((t = (l.googleCalendarApiBase || "https://www.googleapis.com/calendar/v3/calendars") + "/" + encodeURIComponent(l.googleCalendarId) + "/events"),
                              (l = "function" == typeof (l = l.extraParams) ? l() : l),
                              (e = e.range),
                              (a = a),
                              (l = l),
                              (e = (s = s).canComputeOffset ? ((n = s.formatIso(e.start)), s.formatIso(e.end)) : ((n = d(e.start, -1).toISOString()), d(e.end, 1).toISOString())),
                              (l = I(I({}, l || {}), { key: a, timeMin: n, timeMax: e, singleEvents: !0, maxResults: 9999 })),
                              "local" !== s.timeZone && (l.timeZone = s.timeZone),
                              Fi(
                                  "GET",
                                  t,
                                  (i = l),
                                  function (e, t) {
                                      var n;
                                      e.error
                                          ? o({ message: "Google Calendar API: " + e.error.message, errors: e.error.errors, xhr: t })
                                          : r({
                                                rawEvents:
                                                    ((e = e.items),
                                                    (n = i.timeZone),
                                                    e.map(function (e) {
                                                        return (
                                                            (t = (e = e).htmlLink || null) &&
                                                                n &&
                                                                ((r = "ctz=" + n),
                                                                (t = t.replace(/(\?.*?)?(#|$)/, function (e, t, n) {
                                                                    return (t ? t + "&" : "?") + r + n;
                                                                }))),
                                                            {
                                                                id: e.id,
                                                                title: e.summary,
                                                                start: e.start.dateTime || e.start.date,
                                                                end: e.end.dateTime || e.end.date,
                                                                url: t,
                                                                location: e.location,
                                                                description: e.description,
                                                                attachments: e.attachments || [],
                                                                extendedProps: (e.extendedProperties || {}).shared || {},
                                                            }
                                                        );
                                                        var r, t;
                                                    })),
                                                xhr: t,
                                            });
                                  },
                                  function (e, t) {
                                      o({ message: e, xhr: t });
                                  }
                              ))
                            : o({ message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/" });
                    },
                },
            ],
            optionRefiners: { googleCalendarApiKey: String },
            eventSourceRefiners: { googleCalendarApiKey: String, googleCalendarId: String, googleCalendarApiBase: String, extraParams: n },
        });
    return (
        ji.push(Bl, gu, Id, Yd, $d, Jd, ep),
        (e.BASE_OPTION_DEFAULTS = wn),
        (e.BASE_OPTION_REFINERS = Cn),
        (e.BaseComponent = c),
        (e.BgEvent = pl),
        (e.BootstrapTheme = Zd),
        (e.Calendar = Il),
        (e.CalendarApi = Ue),
        (e.CalendarContent = Va),
        (e.CalendarDataManager = Ki),
        (e.CalendarDataProvider = ua),
        (e.CalendarRoot = Ka),
        (e.Component = Vo),
        (e.ContentHook = fi),
        (e.CustomContentRenderContext = di),
        (e.DateComponent = g),
        (e.DateEnv = zr),
        (e.DateProfileGenerator = Mi),
        (e.DayCellContent = il),
        (e.DayCellRoot = ul),
        (e.DayGridView = fu),
        (e.DayHeader = fs),
        (e.DaySeriesModel = vs),
        (e.DayTable = hc),
        (e.DayTableModel = ms),
        (e.DayTableSlicer = fc),
        (e.DayTimeCols = bd),
        (e.DayTimeColsSlicer = Sd),
        (e.DayTimeColsView = mu),
        (e.DelayedRunner = Gi),
        (e.Draggable = Cu),
        (e.ElementDragging = wa),
        (e.ElementScrollController = Po),
        (e.Emitter = To),
        (e.EventApi = N),
        (e.EventRoot = $s),
        (e.EventSourceApi = Fe),
        (e.FeaturefulElementDragging = Yl),
        (e.Fragment = w),
        (e.Interaction = Sa),
        (e.ListView = Fd),
        (e.MoreLinkRoot = bl),
        (e.MountHook = mi),
        (e.NamedTimeZoneImpl = function (e) {
            this.timeZoneName = e;
        }),
        (e.NowIndicatorRoot = nl),
        (e.NowTimer = ss),
        (e.PointerDragging = Ol),
        (e.PositionCache = Mo),
        (e.RefMap = Is),
        (e.RenderHook = R),
        (e.ScrollController = Io),
        (e.ScrollResponder = qo),
        (e.Scroller = Ms),
        (e.SegHierarchy = da),
        (e.SimpleScrollGrid = Zs),
        (e.Slicer = $o),
        (e.Splitter = so),
        (e.StandardEvent = Js),
        (e.Table = sc),
        (e.TableDateCell = os),
        (e.TableDowCell = as),
        (e.TableView = au),
        (e.Theme = Ho),
        (e.ThirdPartyDraggable = Ru),
        (e.TimeCols = gd),
        (e.TimeColsSlatsCoords = Ac),
        (e.TimeColsView = vu),
        (e.ViewApi = Ir),
        (e.ViewContextType = Yo),
        (e.ViewRoot = wi),
        (e.WeekNumberRoot = hl),
        (e.WindowScrollController = No),
        (e.addDays = d),
        (e.addDurations = Xt),
        (e.addMs = wt),
        (e.addWeeks = Ct),
        (e.allowContextMenu = pt),
        (e.allowSelection = ct),
        (e.applyMutationToEventStore = Mr),
        (e.applyStyle = Ye),
        (e.applyStyleProp = Ze),
        (e.asCleanDays = function (e) {
            return e.years || e.months || e.milliseconds ? 0 : e.days;
        }),
        (e.asRoughMinutes = function (e) {
            return p(e) / 6e4;
        }),
        (e.asRoughMs = p),
        (e.asRoughSeconds = function (e) {
            return p(e) / 1e3;
        }),
        (e.binarySearch = Ea),
        (e.buildClassNameNormalizer = Si),
        (e.buildDayRanges = wd),
        (e.buildDayTableModel = yc),
        (e.buildEntryKey = ha),
        (e.buildEventApis = Ur),
        (e.buildEventRangeKey = br),
        (e.buildHashFromArray = function (e, t) {
            for (var n = {}, r = 0; r < e.length; r += 1) {
                var o = t(e[r], r);
                n[o[0]] = o[1];
            }
            return n;
        }),
        (e.buildIsoString = en),
        (e.buildNavLinkAttrs = go),
        (e.buildSegCompareObj = hr),
        (e.buildSegTimeText = yr),
        (e.buildSlatMetas = Td),
        (e.buildTimeColsModel = xd),
        (e.collectFromHash = jt),
        (e.combineEventUis = Fn),
        (e.compareByFieldSpec = gt),
        (e.compareByFieldSpecs = ht),
        (e.compareNumbers = Et),
        (e.compareObjs = zt),
        (e.computeEarliestSegStart = _l),
        (e.computeEdges = bo),
        (e.computeFallbackHeaderFormat = Ja),
        (e.computeHeightAndMargins = function (e) {
            return e.getBoundingClientRect().height + ((e = window.getComputedStyle(e)), parseInt(e.marginTop, 10) + parseInt(e.marginBottom, 10));
        }),
        (e.computeInnerRect = Do),
        (e.computeRect = Co),
        (e.computeSegDraggable = gr),
        (e.computeSegEndResizable = mr),
        (e.computeSegStartResizable = vr),
        (e.computeShrinkWidth = Hs),
        (e.computeSmallestCellWidth = bt),
        (e.computeVisibleDayRange = $n),
        (e.config = Ra),
        (e.constrainPoint = no),
        (e.createAriaClickAttrs = rt),
        (e.createContext = Bo),
        (e.createDuration = E),
        (e.createElement = C),
        (e.createEmptyEventStore = function () {
            return { defs: {}, instances: {} };
        }),
        (e.createEventInstance = At),
        (e.createEventUi = Vn),
        (e.createFormatter = a),
        (e.createPlugin = v),
        (e.createPortal = zo),
        (e.createRef = u),
        (e.diffDates = Qn),
        (e.diffDayAndTime = _t),
        (e.diffDays = Tt),
        (e.diffPoints = oo),
        (e.diffWeeks = Rt),
        (e.diffWholeDays = xt),
        (e.diffWholeWeeks = kt),
        (e.disableCursor = st),
        (e.elementClosest = l),
        (e.elementMatches = je),
        (e.enableCursor = lt),
        (e.eventTupleToStore = Nn),
        (e.filterEventStoreDefs = An),
        (e.filterHash = Wt),
        (e.findDirectChildren = function (e, t) {
            for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
                for (var i = n[o].children, a = 0; a < i.length; a += 1) {
                    var s = i[a];
                    (t && !je(s, t)) || r.push(s);
                }
            return r;
        }),
        (e.findElements = Ge),
        (e.flexibleCompare = vt),
        (e.flushToDom = jo),
        (e.formatDate = function (e, t) {
            var n = Kr((t = void 0 === t ? {} : t)),
                t = a(t),
                e = n.createMarkerMeta(e);
            return e ? n.format(e.marker, t, { forcedTzo: e.forcedTzo }) : "";
        }),
        (e.formatDayString = tn),
        (e.formatIsoTimeString = nn),
        (e.formatRange = function (e, t, n) {
            var r = Kr("object" == typeof n && n ? n : {}),
                o = a(n),
                e = r.createMarkerMeta(e),
                t = r.createMarkerMeta(t);
            return e && t ? r.formatRange(e.marker, t.marker, o, { forcedStartTzo: e.forcedTzo, forcedEndTzo: t.forcedTzo, isEndExclusive: n.isEndExclusive, defaultSeparator: wn.defaultRangeSeparator }) : "";
        }),
        (e.getAllowYScrolling = As),
        (e.getCanVGrowWithinCell = io),
        (e.getClippingParents = wo),
        (e.getDateMeta = co),
        (e.getDayClassNames = po),
        (e.getDefaultEventEnd = xr),
        (e.getElRoot = Ke),
        (e.getElSeg = cr),
        (e.getEntrySpanEnd = fa),
        (e.getEventClassNames = Sr),
        (e.getEventTargetViaRoot = Xe),
        (e.getIsRtlScrollbarOnLeft = yo),
        (e.getRectCenter = ro),
        (e.getRelevantEvents = Hn),
        (e.getScrollGridClassNames = Bs),
        (e.getScrollbarWidths = Eo),
        (e.getSectionClassNames = zs),
        (e.getSectionHasLiquidHeight = Os),
        (e.getSegAnchorAttrs = Dr),
        (e.getSegMeta = Er),
        (e.getSlotClassNames = function (e, t) {
            var n = ["fc-slot", "fc-slot-" + Dt[e.dow]];
            return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n;
        }),
        (e.getStickyFooterScrollbar = qs),
        (e.getStickyHeaderDates = Gs),
        (e.getUnequalProps = Bt),
        (e.getUniqueDomId = Je),
        (e.globalLocales = jr),
        (e.globalPlugins = ji),
        (e.greatestDurationDenominator = Qt),
        (e.groupIntersectingEntries = ga),
        (e.guid = at),
        (e.hasBgRendering = lr),
        (e.hasShrinkWidth = Fs),
        (e.identity = n),
        (e.interactionSettingsStore = Ca),
        (e.interactionSettingsToStore = Da),
        (e.intersectRanges = nr),
        (e.intersectRects = to),
        (e.intersectSpans = ma),
        (e.isArraysEqual = on),
        (e.isColPropsEqual = Us),
        (e.isDateSelectionValid = Cs),
        (e.isDateSpansEqual = wr),
        (e.isInt = St),
        (e.isInteractionValid = Ds),
        (e.isMultiDayRange = Jn),
        (e.isPropsEqual = y),
        (e.isPropsValid = Rs),
        (e.isValidDate = Ht),
        (e.joinSpans = va),
        (e.listenBySelector = et),
        (e.mapHash = P),
        (e.memoize = S),
        (e.memoizeArraylike = function (i, a, s) {
            var l = this,
                u = [],
                c = [];
            return function (e) {
                for (var t, n = u.length, r = e.length, o = 0; o < n; o += 1) e[o] ? on(u[o], e[o]) || (s && s(c[o]), (t = i.apply(l, e[o])), (a && a(t, c[o])) || (c[o] = t)) : s && s(c[o]);
                for (; o < r; o += 1) c[o] = i.apply(l, e[o]);
                return (u = e), c.splice(r), c;
            };
        }),
        (e.memoizeHashlike = function (o, i, a) {
            var s = this,
                l = {},
                u = {};
            return function (e) {
                var t,
                    n,
                    r = {};
                for (t in e) u[t] ? (on(l[t], e[t]) ? (r[t] = u[t]) : (a && a(u[t]), (n = o.apply(s, e[t])), (r[t] = i && i(n, u[t]) ? u[t] : n))) : (r[t] = o.apply(s, e[t]));
                return (l = e), (u = r);
            };
        }),
        (e.memoizeObjArg = an),
        (e.mergeEventStores = On),
        (e.multiplyDuration = Kt),
        (e.padStart = mt),
        (e.parseBusinessHours = Qr),
        (e.parseClassNames = Ln),
        (e.parseDragMeta = ka),
        (e.parseEventDef = Xn),
        (e.parseFieldSpecs = ft),
        (e.parseMarker = Br),
        (e.pointInsideRect = eo),
        (e.preventContextMenu = dt),
        (e.preventDefault = Qe),
        (e.preventSelection = ut),
        (e.rangeContainsMarker = ar),
        (e.rangeContainsRange = ir),
        (e.rangesEqual = rr),
        (e.rangesIntersect = or),
        (e.refineEventDef = Yn),
        (e.refineProps = In),
        (e.removeElement = ze),
        (e.removeExact = function (e, t) {
            for (var n = 0, r = 0; r < e.length; ) e[r] === t ? (e.splice(r, 1), (n += 1)) : (r += 1);
            return n;
        }),
        (e.render = Fo),
        (e.renderChunkContent = Ls),
        (e.renderFill = dl),
        (e.renderMicroColGroup = Ws),
        (e.renderScrollShim = js),
        (e.requestJson = Fi),
        (e.sanitizeShrinkWidth = Vs),
        (e.setElSeg = ur),
        (e.setRef = f),
        (e.sliceEventStore = sr),
        (e.sliceEvents = function (e, t) {
            return sr(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg;
        }),
        (e.sortEventSegs = fr),
        (e.startOfDay = m),
        (e.translateRect = function (e, t, n) {
            return { left: e.left + t, right: e.right + t, top: e.top + n, bottom: e.bottom + n };
        }),
        (e.triggerDateSelect = _r),
        (e.unmountComponentAtNode = Go),
        (e.unpromisify = Ro),
        (e.version = "5.10.1"),
        (e.whenTransitionDone = nt),
        (e.wholeDivideDurations = Jt),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        e
    );
})({});
