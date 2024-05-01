(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4021], {
    4021: function (e, s, a) {
        "use strict";
        a.r(s),
            a.d(s, {
                __N_SSG: function () {
                    return eP
                },
                default: function () {
                    return eF
                }
            });
        var r = a(1527)
            , n = a(5341)
            , t = a(7111)
            , l = a(6206)
            , i = a(2911)
            , c = a(7736)
            , o = a(7941)
            , d = a(423)
            , m = a(959)
            , u = a(6687);
        let _ = e => {
            let [s, a] = (0,
                d.o)(e => {
                    let { currentSection: s, setCurrentSection: a } = e;
                    return [s, a]
                }
                )
                , [r, { isIntersecting: n }] = (0,
                    o.S1)({
                        threshold: .5
                    });
            (0,
                m.useEffect)(() => {
                    n ? a(e) : s === e && a(null)
                }
                    , [n]);
            let { events: t } = (0,
                u.useRouter)();
            return null == t || t.on("routeChangeStart", () => a(null)),
                r
        }
            ;
        var p = a(3720)
            , h = a(8522)
            , x = a.n(h)
            , b = a(7478)
            , j = a(1067)
            , f = a.n(j)
            , v = a(8754)
            , N = a(5093)
            , g = a(2264)
            , y = a(5303)
            , k = a.n(y);
        function w(e) {
            let { cards: s, hovered: a, top: t, height: l } = e
                , c = (0,
                    m.useRef)();
            return s && (0,
                r.jsx)("div", {
                    className: (0,
                        n.Z)(k().homeCasesIcon, "desktop-only"),
                    children: (0,
                        r.jsx)(i.R, {
                            className: (0,
                                n.Z)(k().hoverLogo, "desktop-only"),
                            stack: !1,
                            plus: !1,
                            style: {
                                transform: "translateY(".concat(t, "px)"),
                                height: l,
                                opacity: "number" != typeof a ? 0 : 1
                            },
                            children: null !== a && s[a] && (0,
                                r.jsx)(N.Z, {
                                    children: (0,
                                        r.jsx)(g.Z, {
                                            classNames: "icon",
                                            addEndListener: e => {
                                                var s;
                                                null == c || null === (s = c.current) || void 0 === s || s.addEventListener("transitionend", e, !1),
                                                    setTimeout(e, 1e3)
                                            }
                                            ,
                                            nodeRef: c,
                                            children: (0,
                                                r.jsx)("div", {
                                                    className: k().hoverBg,
                                                    ref: c,
                                                    children: (0,
                                                        r.jsx)(v.z, {
                                                            className: k().mask,
                                                            src: s[a].logoSvg,
                                                            sizes: "20vw"
                                                        })
                                                })
                                        }, a)
                                })
                        })
                })
        }
        let R = x()(() => a.e(9080).then(a.bind(a, 9080)), {
            loadableGenerated: {
                webpack: () => [9080]
            },
            ssr: !1
        });
        function Z(e) {
            let { casesHeader: s, body: a, card: t } = e
                , o = _("cases")
                , d = e => e.split("\n")
                , u = (0,
                    m.useRef)()
                , [h, x] = (0,
                    m.useState)(null)
                , j = (0,
                    m.useCallback)(e => {
                        if (u.current) {
                            let s = u.current.getBoundingClientRect()
                                , a = Array.from(u.current.children).filter(e => e.classList.contains(f().case)).find((s, a) => a === e);
                            a && x({
                                index: e,
                                topPosition: a.getBoundingClientRect().top - s.top,
                                height: a.offsetHeight
                            })
                        }
                    }
                        , []);
            return (0,
                r.jsxs)("section", {
                    className: f().cases,
                    id: "cases",
                    ref: o,
                    children: [(0,
                        r.jsx)(p.Y, {
                            className: f().stain,
                            radial: !0
                        }), (0,
                            r.jsx)(c.M, {
                                header: s,
                                body: a,
                                tinaFieldHeader: (0,
                                    b.Ry)(e, "casesHeader"),
                                tinaFieldBody: (0,
                                    b.Ry)(e, "body")
                            }), (0,
                                r.jsxs)("div", {
                                    ref: u,
                                    className: (0,
                                        n.Z)(f().casesWrap, "layout-grid"),
                                    children: [(0,
                                        r.jsx)(w, {
                                            cards: t,
                                            hovered: null == h ? void 0 : h.index,
                                            top: null == h ? void 0 : h.topPosition,
                                            height: null == h ? void 0 : h.height
                                        }), null == t ? void 0 : t.map((e, s) => e.caseReference && (0,
                                            r.jsxs)(l.rU, {
                                                onMouseOver: () => j(s),
                                                onMouseLeave: () => x(null),
                                                className: (0,
                                                    n.Z)(f().case, (null == h ? void 0 : h.index) === s && f().hovered),
                                                href: "/case/".concat(e.caseReference.title),
                                                children: [(0,
                                                    r.jsx)("p", {
                                                        className: (0,
                                                            n.Z)(f().index, "desktop-only", "p"),
                                                        children: String(s + 1).padStart(2, "0")
                                                    }), (0,
                                                        r.jsxs)(i.R, {
                                                            id: "card-".concat(s),
                                                            className: f().caseInfo,
                                                            children: [(0,
                                                                r.jsx)("h2", {
                                                                    className: (0,
                                                                        n.Z)("h2", f().companyTitle),
                                                                    "data-tina-field": (0,
                                                                        b.Ry)(e, "companyTitle"),
                                                                    children: e.companyTitle
                                                                }), (0,
                                                                    r.jsxs)("div", {
                                                                        className: f().content,
                                                                        children: [(0,
                                                                            r.jsxs)("div", {
                                                                                className: f().attribute,
                                                                                children: [(0,
                                                                                    r.jsx)("p", {
                                                                                        className: "p",
                                                                                        children: "Overview:"
                                                                                    }), (0,
                                                                                        r.jsx)("p", {
                                                                                            className: "p",
                                                                                            "data-tina-field": (0,
                                                                                                b.Ry)(e, "overview"),
                                                                                            children: e.overview
                                                                                        })]
                                                                            }), (0,
                                                                                r.jsxs)("div", {
                                                                                    className: f().attribute,
                                                                                    children: [(0,
                                                                                        r.jsx)("p", {
                                                                                            className: "p",
                                                                                            children: "Services:"
                                                                                        }), (0,
                                                                                            r.jsx)("p", {
                                                                                                className: "p",
                                                                                                "data-tina-field": (0,
                                                                                                    b.Ry)(e, "services"),
                                                                                                children: d(e.services).map(e => (0,
                                                                                                    r.jsx)("span", {
                                                                                                        children: e
                                                                                                    }, e))
                                                                                            })]
                                                                                }), (0,
                                                                                    r.jsxs)("p", {
                                                                                        className: (0,
                                                                                            n.Z)(f().cta, "p"),
                                                                                        "data-tina-field": (0,
                                                                                            b.Ry)(e, "caseReference"),
                                                                                        children: [(0,
                                                                                            r.jsx)("span", {
                                                                                                children: "View Case"
                                                                                            }), (0,
                                                                                                r.jsx)(R, {})]
                                                                                    })]
                                                                    })]
                                                        })]
                                            }, s))]
                                })]
                })
        }
        var I = a(397)
            , L = a(1296)
            , S = a(7115)
            , q = a(8764)
            , G = a.n(q)
            , C = a(1297)
            , W = a.n(C)
            , E = a(3722);
        function T(e) {
            let { start: s = "top bottom", end: a = "bottom top", position: n, speed: t = .1, children: l, className: i } = e
                , c = (0,
                    m.useRef)()
                , d = (0,
                    m.useRef)()
                , u = (0,
                    m.useRef)()
                , { width: _ } = (0,
                    o.iP)();
            return (0,
                m.useEffect)(() => {
                    let e = W().create({
                        trigger: "top" === n ? document.body : c.current,
                        start: "top" === n ? "top top" : "top bottom",
                        end: "top" === n ? "+=100%" : "bottom top",
                        scrub: !0,
                        onUpdate: e => {
                            let { progress: s } = e
                                , a = -(s * _ * t);
                            u.current.setTranslate(0, a, 0),
                                d.current.style.transform = "translate3d(0, ".concat(a, "px, 0)")
                        }
                    });
                    return () => {
                        e.revert()
                    }
                }
                    , [s, a, n, _, t]),
                (0,
                    r.jsx)(E.c8, {
                        ref: u,
                        children: (0,
                            r.jsx)("div", {
                                ref: c,
                                className: i,
                                children: (0,
                                    r.jsx)("div", {
                                        ref: d,
                                        children: l
                                    })
                            })
                    })
        }
        var M = a(518);
        let H = x()(() => Promise.all([a.e(7455), a.e(5460), a.e(1420), a.e(8098)]).then(a.bind(a, 8098)).then(e => {
            let { WebGLQuill: s } = e;
            return s
        }
        ), {
            loadableGenerated: {
                webpack: () => [8098]
            },
            ssr: !1
        })
            , B = (0,
                m.forwardRef)(function (e, s) {
                    let { className: a } = e
                        , [n, t] = (0,
                            o.EL)();
                    return (0,
                        r.jsx)("div", {
                            ref: n,
                            className: a,
                            children: (0,
                                r.jsx)(T, {
                                    position: "top",
                                    children: (0,
                                        r.jsx)(M.S, {
                                            children: (0,
                                                r.jsx)(H, {
                                                    rect: t
                                                })
                                        })
                                })
                        })
                });
        I.ZP.registerPlugin(L.SplitText);
        let P = (0,
            m.forwardRef)(function (e, s) {
                let { header: a, subHeader: t, body: l } = e
                    , i = (0,
                        d.o)(e => {
                            let { contrastColor: s } = e;
                            return s
                        }
                        )
                    , o = (0,
                        m.useRef)(null)
                    , u = (0,
                        m.useRef)(null)
                    , _ = (0,
                        m.useRef)(null)
                    , h = (0,
                        m.useRef)(null)
                    , x = (0,
                        m.useCallback)(() => {
                            var e, s;
                            let { borderRef: a, subheaderRef: r, bodyRef: n, arrowRef: t } = o.current;
                            null === (e = _.current) || void 0 === e || e.revert(),
                                _.current = new L.SplitText(r.current, {
                                    type: "lines,words"
                                }),
                                null === (s = h.current) || void 0 === s || s.revert(),
                                h.current = new L.SplitText(n.current, {
                                    type: "lines,words"
                                });
                            let l = I.ZP.timeline();
                            l.fromTo(a.current, {
                                scaleX: 0
                            }, {
                                scaleX: 1,
                                duration: 1,
                                ease: "expo.out"
                            });
                            let i = I.ZP.timeline();
                            _.current.lines.forEach(e => {
                                i.fromTo(e.children, {
                                    y: "100%"
                                }, {
                                    y: 0,
                                    duration: 1,
                                    ease: "expo.out"
                                }, "<0.1")
                            }
                            ),
                                l.add(i, "<0.4");
                            let c = I.ZP.timeline();
                            return h.current.lines.forEach(e => {
                                i.fromTo(e.children, {
                                    y: "100%"
                                }, {
                                    y: 0,
                                    duration: 1,
                                    ease: "expo.out"
                                }, "<0.1")
                            }
                            ),
                                l.add(c, "<0.4"),
                                l.fromTo(t.current, {
                                    y: "120%"
                                }, {
                                    y: 0,
                                    duration: 1,
                                    ease: "expo.out"
                                }, "<0.4"),
                                l
                        }
                            , []);
                return (0,
                    m.useImperativeHandle)(s, () => ({
                        animateIn: x
                    }), [x]),
                    (0,
                        r.jsx)("section", {
                            className: G().hero,
                            children: (0,
                                r.jsxs)("div", {
                                    className: (0,
                                        n.Z)(G().content),
                                    children: [(0,
                                        r.jsx)(p.Y, {
                                            className: G().stain,
                                            radial: !0
                                        }), (0,
                                            r.jsx)(c.M, {
                                                header: t,
                                                body: l,
                                                ref: o,
                                                tinaFieldHeader: (0,
                                                    b.Ry)(e, "subHeader"),
                                                tinaFieldBody: (0,
                                                    b.Ry)(e, "body")
                                            }), (0,
                                                r.jsx)("h1", {
                                                    className: (0,
                                                        n.Z)(G().title, "h1"),
                                                    "data-tina-field": (0,
                                                        b.Ry)(e, "header"),
                                                    children: null == a ? void 0 : a.children.map(e => {
                                                        let { children: s } = e;
                                                        return s.map((e, s) => {
                                                            let { text: a, type: t, bold: l } = e;
                                                            return (0,
                                                                r.jsx)(m.Fragment, {
                                                                    children: "break" === t ? (0,
                                                                        r.jsx)("br", {}) : (0,
                                                                            r.jsx)(S.x, {
                                                                                className: (0,
                                                                                    n.Z)(G().word, l && G().bold),
                                                                                value: a.toUpperCase(),
                                                                                fontFamily: "Pack",
                                                                                fontSize: 156,
                                                                                color: i,
                                                                                stroke: l,
                                                                                verticalAlign: .065
                                                                            })
                                                                }, s)
                                                        }
                                                        )
                                                    }
                                                    )
                                                }), (0,
                                                    r.jsx)(B, {
                                                        className: G().quill,
                                                        ref: u
                                                    })]
                                })
                        })
            });
        var F = a(5690)
            , A = a.n(F);
        let U = x()(() => a.e(8865).then(a.bind(a, 8865)), {
            loadableGenerated: {
                webpack: () => [8865]
            },
            ssr: !1
        });
        function O(e) {
            let { pressHeader: s, body: a, entry: t } = e
                , i = _("press");
            return (0,
                r.jsxs)("section", {
                    className: A().press,
                    id: "press",
                    ref: i,
                    children: [(0,
                        r.jsx)(c.M, {
                            header: s,
                            body: a,
                            tinaFieldHeader: (0,
                                b.Ry)(e, "pressHeader"),
                            tinaFieldBody: (0,
                                b.Ry)(e, "body")
                        }), (0,
                            r.jsx)("div", {
                                className: A().articleWrap,
                                children: null == t ? void 0 : t.map((e, s) => {
                                    var a;
                                    return (null === (a = e.articleLink) || void 0 === a ? void 0 : a.url) && (0,
                                        r.jsxs)(l.rU, {
                                            className: A().article,
                                            href: e.articleLink.url,
                                            children: [(0,
                                                r.jsx)("h2", {
                                                    className: "h2",
                                                    "data-tina-field": (0,
                                                        b.Ry)(e, "companyTitle"),
                                                    children: (0,
                                                        r.jsx)("span", {
                                                            children: e.companyTitle
                                                        })
                                                }), (0,
                                                    r.jsxs)("div", {
                                                        className: (0,
                                                            n.Z)(A().articleInfo, "desktop-only"),
                                                        children: [(0,
                                                            r.jsx)("p", {
                                                                className: "p",
                                                                "data-tina-field": (0,
                                                                    b.Ry)(e, "articleTitle"),
                                                                children: (0,
                                                                    r.jsx)("span", {
                                                                        children: e.articleTitle
                                                                    })
                                                            }), (0,
                                                                r.jsx)("p", {
                                                                    className: "p",
                                                                    "data-tina-field": (0,
                                                                        b.Ry)(e, "articleLink"),
                                                                    children: (0,
                                                                        r.jsx)("span", {
                                                                            children: e.articleLink.text
                                                                        })
                                                                })]
                                                    }), (0,
                                                        r.jsxs)("div", {
                                                            className: A().arrowWrap,
                                                            children: [(0,
                                                                r.jsx)(U, {}), (0,
                                                                    r.jsx)(U, {
                                                                        className: "desktop-only"
                                                                    })]
                                                        })]
                                        }, s)
                                }
                                )
                            })]
                })
        }
        var z = a(564)
            , X = a(3022)
            , J = a(7899)
            , Q = a(8196);
        function Y(e) {
            return encodeURI(e).replace(/[!'()*]/g, e => "%" + e.charCodeAt(0).toString(16))
        }
        var D = a(3368)
            , K = a(5389)
            , V = a.n(K);
        let $ = x()(() => Promise.all([a.e(7455), a.e(5460), a.e(542)]).then(a.bind(a, 542)).then(e => {
            let { WebGLTotem: s } = e;
            return s
        }
        ), {
            loadableGenerated: {
                webpack: () => [542]
            },
            ssr: !1
        })
            , ee = x()(() => a.e(9061).then(a.bind(a, 9061)), {
                loadableGenerated: {
                    webpack: () => [9061]
                },
                ssr: !1
            });
        function es(e) {
            let { textMarquee: s, card: a, image: l } = e
                , [i, c] = (0,
                    m.useState)(0)
                , d = _("services")
                , u = e => String(e).padStart(2, "0")
                , [h, x] = (0,
                    o.EL)()
                , [j, f] = (0,
                    o.S1)({
                        threshold: .5,
                        once: !0
                    })
                , v = (0,
                    m.useRef)();
            (0,
                m.useEffect)(() => {
                    if (f.isIntersecting) {
                        var e;
                        null === (e = v.current) || void 0 === e || e.animateIn()
                    }
                }
                    , [f]),
                l = function (e) {
                    if (!e)
                        return;
                    let s = window.parent.location.pathname.includes("/admin")
                        , a = window.parent.location.origin.includes("localhost:");
                    return s && !a ? Y(e) : Y("/cms/".concat(e.split("/").pop()))
                }(l);
            let y = (0,
                z.LZ)()
                , { height: k } = (0,
                    o.iP)()
                , { isMobile: w } = (0,
                    t.N)();
            return (0,
                m.useEffect)(() => {
                    y && !w && y.scrollTo("#cardAnchor".concat(i), {
                        offset: -(k / 2 * 1)
                    })
                }
                    , [i, y, k, w]),
                (0,
                    r.jsxs)("section", {
                        className: (0,
                            n.Z)(V().services, "layout-block"),
                        id: "services",
                        ref: e => {
                            d(e),
                                j(e)
                        }
                        ,
                        children: [(0,
                            r.jsx)(Q.E, {
                                ...s,
                                className: V().marquee
                            }), (0,
                                r.jsxs)("div", {
                                    className: (0,
                                        n.Z)(V().scene, "desktop-only"),
                                    ref: h,
                                    children: [(0,
                                        r.jsx)(p.Y, {
                                            className: V().stain
                                        }), (0,
                                            r.jsx)(M.S, {
                                                children: (0,
                                                    r.jsx)($, {
                                                        rect: x,
                                                        index: i,
                                                        titles: null == a ? void 0 : a.map(e => {
                                                            let { title: s } = e;
                                                            return s
                                                        }
                                                        ),
                                                        image: l,
                                                        dynamicRef: v
                                                    })
                                            })]
                                }), (0,
                                    r.jsx)("div", {
                                        className: (0,
                                            n.Z)(V().mobileTotem, "mobile-only"),
                                        children: (0,
                                            r.jsx)(T, {
                                                position: "bottom",
                                                speed: .38,
                                                children: (0,
                                                    r.jsx)(ee, {})
                                            })
                                    }), (0,
                                        r.jsxs)("div", {
                                            className: V().cardWrapper,
                                            children: [a && a[i] && (0,
                                                r.jsx)(N.Z, {
                                                    children: (0,
                                                        r.jsx)(g.Z, {
                                                            classNames: "card",
                                                            addEndListener: (e, s) => setTimeout(s, 300),
                                                            children: (0,
                                                                r.jsx)(J.Z, {
                                                                    className: V().card,
                                                                    index: i + 1,
                                                                    title: a[i].title,
                                                                    tinaData: {
                                                                        object: a[i],
                                                                        property: "title"
                                                                    },
                                                                    children: (0,
                                                                        r.jsxs)("div", {
                                                                            className: V().cardInner,
                                                                            children: [(0,
                                                                                r.jsx)("p", {
                                                                                    className: (0,
                                                                                        n.Z)(V().description, "p"),
                                                                                    "data-tina-field": (0,
                                                                                        b.Ry)(a[i], "description"),
                                                                                    children: a[i].description.split(" ").map((e, s) => (0,
                                                                                        r.jsxs)(m.Fragment, {
                                                                                            children: [s > 0 && " ", (0,
                                                                                                r.jsx)("span", {
                                                                                                    className: V().wordWrap,
                                                                                                    children: (0,
                                                                                                        r.jsx)("span", {
                                                                                                            children: e
                                                                                                        })
                                                                                                }), (0,
                                                                                                    r.jsx)("wbr", {})]
                                                                                        }, s))
                                                                                }), (0,
                                                                                    r.jsxs)("div", {
                                                                                        className: V().controls,
                                                                                        children: [(0,
                                                                                            r.jsx)(X.b, {
                                                                                                onClick: () => {
                                                                                                    c((0,
                                                                                                        D.uZ)(0, i - 1, a.length - 1))
                                                                                                }
                                                                                                ,
                                                                                                left: !0
                                                                                            }), (0,
                                                                                                r.jsxs)("p", {
                                                                                                    className: "p",
                                                                                                    children: [u(i + 1), "/", u(a.length)]
                                                                                                }), (0,
                                                                                                    r.jsx)(X.b, {
                                                                                                        onClick: () => {
                                                                                                            c((0,
                                                                                                                D.uZ)(0, i + 1, a.length - 1))
                                                                                                        }
                                                                                                    })]
                                                                                    })]
                                                                        })
                                                                })
                                                        }, i)
                                                }), null == a ? void 0 : a.map((e, s) => (0,
                                                    r.jsx)("div", {
                                                        id: "cardAnchor".concat(s),
                                                        className: V().anchor,
                                                        style: {
                                                            top: 1 / a.length * s * 100 + "%",
                                                            height: 1 / a.length * 100 + "%"
                                                        }
                                                    }, s))]
                                        })]
                    })
        }
        var ea = a(6924)
            , er = a(8989)
            , en = a(42)
            , et = a.n(en);
        let el = x()(() => a.e(8069).then(a.bind(a, 8069)), {
            loadableGenerated: {
                webpack: () => [8069]
            },
            ssr: !1
        })
            , ei = x()(() => a.e(8283).then(a.bind(a, 8283)), {
                loadableGenerated: {
                    webpack: () => [8283]
                },
                ssr: !1
            })
            , ec = x()(() => a.e(3501).then(a.bind(a, 3501)), {
                loadableGenerated: {
                    webpack: () => [3501]
                },
                ssr: !1
            })
            , eo = x()(() => a.e(5018).then(a.bind(a, 5018)), {
                loadableGenerated: {
                    webpack: () => [5018]
                },
                ssr: !1
            })
            , ed = x()(() => a.e(1131).then(a.bind(a, 1131)), {
                loadableGenerated: {
                    webpack: () => [1131]
                },
                ssr: !1
            })
            , em = x()(() => a.e(9433).then(a.bind(a, 9433)), {
                loadableGenerated: {
                    webpack: () => [9433]
                },
                ssr: !1
            })
            , eu = x()(() => a.e(3961).then(a.bind(a, 3961)), {
                loadableGenerated: {
                    webpack: () => [3961]
                },
                ssr: !1
            })
            , e_ = x()(() => a.e(7002).then(a.bind(a, 7002)), {
                loadableGenerated: {
                    webpack: () => [7002]
                },
                ssr: !1
            })
            , ep = x()(() => a.e(4671).then(a.bind(a, 4671)), {
                loadableGenerated: {
                    webpack: () => [4671]
                },
                ssr: !1
            })
            , eh = x()(() => a.e(5084).then(a.bind(a, 9641)), {
                loadableGenerated: {
                    webpack: () => [9641]
                },
                ssr: !1
            })
            , ex = x()(() => a.e(3667).then(a.bind(a, 3667)), {
                loadableGenerated: {
                    webpack: () => [3667]
                },
                ssr: !1
            })
            , eb = x()(() => a.e(2033).then(a.bind(a, 2033)), {
                loadableGenerated: {
                    webpack: () => [2033]
                },
                ssr: !1
            });
        function ej(e) {
            let { links: s } = e
                , a = null == s ? void 0 : s.map(e => {
                    let s = eb;
                    return e.includes("discord") ? s = ei : e.includes("facebook") ? s = ec : e.includes("instagram") ? s = eo : e.includes("linkedin") ? s = ed : e.includes("reddit") ? s = em : e.includes("spotify") ? s = eu : e.includes("tiktok") ? s = e_ : e.includes("twitter") || e.includes("x.com") ? s = ep : e.includes("youtube") ? s = eh : (e.includes("telegram") || e.includes("t.me")) && (s = ex),
                    {
                        link: e,
                        Icon: s
                    }
                }
                );
            return (0,
                r.jsx)("div", {
                    className: et().teamSocialLinks,
                    children: null == a ? void 0 : a.map(e => {
                        let { link: s, Icon: a } = e;
                        return (0,
                            r.jsxs)(l.rU, {
                                href: s,
                                children: [(0,
                                    r.jsxs)("div", {
                                        className: et().frame,
                                        children: [(0,
                                            r.jsx)(el, {}), (0,
                                                r.jsx)(el, {}), (0,
                                                    r.jsx)(el, {}), (0,
                                                        r.jsx)(el, {})]
                                    }), (0,
                                        r.jsx)(a, {})]
                            }, s)
                    }
                    )
                })
        }
        var ef = a(9858)
            , ev = a.n(ef);
        let eN = x()(() => a.e(1465).then(a.bind(a, 1465)), {
            loadableGenerated: {
                webpack: () => [1465]
            },
            ssr: !1
        });
        function eg(e) {
            let { teamHeader: s, body: a, textMarquee: t, leadershipBio: l, teamMember: i } = e
                , o = _("team");
            return (0,
                r.jsxs)("section", {
                    className: ev().team,
                    id: "team",
                    ref: o,
                    children: [(0,
                        r.jsx)(c.M, {
                            header: s,
                            body: a,
                            tinaFieldHeader: (0,
                                b.Ry)(e, "teamHeader"),
                            tinaFieldBody: (0,
                                b.Ry)(e, "body")
                        }), (0,
                            r.jsx)(Q.E, {
                                className: ev().textMarquee,
                                ...t
                            }), (0,
                                r.jsx)("div", {
                                    className: (0,
                                        n.Z)(ev().bioWrap, "layout-grid"),
                                    children: null == l ? void 0 : l.map((e, s) => (0,
                                        r.jsxs)("div", {
                                            className: ev().bio,
                                            children: [e.image && (0,
                                                r.jsx)("div", {
                                                    "data-tina-field": (0,
                                                        b.Ry)(e, "image"),
                                                    children: (0,
                                                        r.jsx)(er.C, {
                                                            className: (0,
                                                                n.Z)(ev().bioImage, "multiply"),
                                                            src: e.image,
                                                            sizes: "(max-width: 800px) 100vw, 25vw",
                                                            borderRadius: 16
                                                        })
                                                }), (0,
                                                    r.jsxs)("div", {
                                                        className: ev().name,
                                                        children: [(0,
                                                            r.jsx)(eN, {}), (0,
                                                                r.jsx)("h6", {
                                                                    className: "p-l",
                                                                    "data-tina-field": (0,
                                                                        b.Ry)(e, "name"),
                                                                    children: e.name
                                                                })]
                                                    }), (0,
                                                        r.jsxs)("div", {
                                                            className: ev().content,
                                                            children: [(0,
                                                                r.jsx)("p", {
                                                                    className: "p",
                                                                    "data-tina-field": (0,
                                                                        b.Ry)(e, "bio"),
                                                                    children: e.bio
                                                                }), (0,
                                                                    r.jsx)(ej, {
                                                                        links: e.socialLinks
                                                                    })]
                                                        })]
                                        }, s))
                                }), (0,
                                    r.jsx)("div", {
                                        className: ev().memberWrap,
                                        children: (0,
                                            r.jsx)(ea.R, {
                                                speed: .1,
                                                children: null == i ? void 0 : i.map((e, s) => (0,
                                                    r.jsxs)("div", {
                                                        className: ev().member,
                                                        "data-tina-field": (0,
                                                            b.Ry)(e, "role"),
                                                        children: [(0,
                                                            r.jsx)(er.C, {
                                                                className: (0,
                                                                    n.Z)(ev().memberImage, "multiply"),
                                                                src: e.image,
                                                                sizes: "(max-width: 800px) 80vw, 16vw",
                                                                borderRadius: 10,
                                                                padding: 32
                                                            }), (0,
                                                                r.jsx)("p", {
                                                                    className: "p",
                                                                    children: e.role
                                                                })]
                                                    }, s))
                                            })
                                    })]
                })
        }
        var ey = a(1768)
            , ek = a(5525)
            , ew = a.n(ek)
            , eR = a(3302)
            , eZ = a.n(eR);
        function eI(e) {
            let { sectionLabel: s, logo: a, reverse: t } = e;
            return (0,
                r.jsxs)("section", {
                    className: eZ().logoMarquee,
                    children: [(0,
                        r.jsx)("p", {
                            className: (0,
                                n.Z)(eZ().sectionLabel, "p"),
                            "data-tina-field": (0,
                                b.Ry)(e, "sectionLabel"),
                            children: s
                        }), (null == a ? void 0 : a.length) && (0,
                            r.jsx)(ea.R, {
                                speed: .1,
                                reversed: t,
                                children: a.map((s, a) => (0,
                                    r.jsxs)(i.R, {
                                        className: eZ().frame,
                                        children: [(0,
                                            r.jsxs)("p", {
                                                className: (0,
                                                    n.Z)(eZ().title, "p"),
                                                children: ["( ", String(a + 1).padStart(2, "0"), " )"]
                                            }), (0,
                                                r.jsx)("div", {
                                                    className: eZ().icon,
                                                    "data-tina-field": (0,
                                                        b.Ry)(e, "logo"),
                                                    children: (0,
                                                        r.jsx)(ew(), {
                                                            src: s,
                                                            fill: !0,
                                                            alt: "",
                                                            unoptimized: s.includes(".svg"),
                                                            sizes: "15vw"
                                                        })
                                                })]
                                    }, a))
                            })]
                })
        }
        var eL = a(2521)
            , eS = a(1225)
            , eq = a(4876)
            , eG = a(3784)
            , eC = a.n(eG);
        let eW = x()(() => a.e(1064).then(a.bind(a, 1064)), {
            loadableGenerated: {
                webpack: () => [1064]
            },
            ssr: !1
        })
            , eE = x()(() => Promise.all([a.e(7455), a.e(5460), a.e(1420), a.e(7584)]).then(a.bind(a, 7584)).then(e => {
                let { WebGLLetters: s } = e;
                return s
            }
            ), {
                loadableGenerated: {
                    webpack: () => [7584]
                },
                ssr: !1
            });
        function eT() {
            let [e, s] = (0,
                o.EL)();
            return (0,
                r.jsxs)("section", {
                    className: (0,
                        n.Z)(eC().letters, "layout-block"),
                    ref: e,
                    children: [(0,
                        r.jsx)(M.S, {
                            children: (0,
                                r.jsx)(eE, {
                                    rect: s
                                })
                        }), (0,
                            r.jsx)(p.Y, {
                                className: eC().stain
                            }), (0,
                                r.jsx)(eW, {
                                    className: (0,
                                        n.Z)(eC().svg, "mobile-only")
                                }), (0,
                                    r.jsx)(l.Ee, {
                                        src: "/images/background.png",
                                        alt: "",
                                        sizes: "(max-width: 800px) 100vw, 0vw",
                                        fill: !0,
                                        className: "mobile-only"
                                    })]
                })
        }
        var eM = a(5485)
            , eH = a.n(eM);
        let eB = x()(() => a.e(3921).then(a.bind(a, 3921)), {
            loadableGenerated: {
                webpack: () => [3921]
            },
            ssr: !1
        });
        var eP = !0;
        function eF(e) {
            let { home: s } = e
                , { sections: a, global: l } = (0,
                    eL.F)(s, eA)
                , { navigation: i, metadata: c } = l
                , { isDesktop: o } = (0,
                    t.N)()
                , d = (0,
                    m.useRef)(null)
                , u = (0,
                    m.useCallback)(() => d.current.animateIn(), []);
            return (0,
                r.jsx)(eq.X, {
                    children: (0,
                        r.jsxs)(eS.A, {
                            className: eH().page,
                            ...i,
                            seo: c,
                            onBeforeLoad: () => {
                                u().progress(0).pause()
                            }
                            ,
                            onLoad: () => {
                                u()
                            }
                            ,
                            children: [a.hero && (0,
                                r.jsx)(P, {
                                    ...a.hero,
                                    ref: d
                                }), a.logoMarquee && (0,
                                    r.jsx)(eI, {
                                        ...a.logoMarquee
                                    }), a.services && (0,
                                        r.jsx)(es, {
                                            ...a.services
                                        }), a.press && (0,
                                            r.jsx)(O, {
                                                ...a.press
                                            }), a.largeImage && (0,
                                                r.jsx)(ey.k, {
                                                    ...a.largeImage
                                                }), a.cases && (0,
                                                    r.jsx)(Z, {
                                                        ...a.cases
                                                    }), a.team && (0,
                                                        r.jsx)(eg, {
                                                            ...a.team
                                                        }), (0,
                                                            r.jsx)("div", {
                                                                className: (0,
                                                                    n.Z)(eH().mobileLetters, "mobile-only"),
                                                                children: (0,
                                                                    r.jsx)(eB, {})
                                                            }), o && (0,
                                                                r.jsx)(eT, {}), a.textMarquee && (0,
                                                                    r.jsx)(Q.E, {
                                                                        ...a.textMarquee,
                                                                        className: eH().marquee
                                                                    })]
                        })
                })
        }
        let eA = "home"
    },
    1067: function (e) {
        e.exports = {
            cases: "cases_cases__DiE7a",
            stain: "cases_stain__kawnX",
            casesWrap: "cases_casesWrap__Q75SV",
            case: "cases_case__89iQR",
            index: "cases_index__f6gvX",
            caseInfo: "cases_caseInfo___BOPv",
            companyTitle: "cases_companyTitle__c01f8",
            content: "cases_content__1Fnuy",
            attribute: "cases_attribute__7x6FB",
            cta: "cases_cta__OXp1q",
            "bounce-out": "cases_bounce-out__ImxfH",
            "bounce-in": "cases_bounce-in__0jq3H",
            hovered: "cases_hovered__93QOl",
            hoverLogo: "cases_hoverLogo__z8UZN",
            hoverBg: "cases_hoverBg__qmRX_"
        }
    },
    5303: function (e) {
        e.exports = {
            homeCasesIcon: "home-cases-icon_homeCasesIcon__0_OGn",
            hoverLogo: "home-cases-icon_hoverLogo__n4jSd",
            hoverBg: "home-cases-icon_hoverBg__Qebwa",
            mask: "home-cases-icon_mask__WWGZK"
        }
    },
    8764: function (e) {
        e.exports = {
            hero: "hero_hero__3Sta7",
            content: "hero_content__0soYI",
            quill: "hero_quill__rl7sd",
            stain: "hero_stain__kiy3J",
            title: "hero_title__W_eGO",
            bold: "hero_bold__nnlyf"
        }
    },
    5690: function (e) {
        e.exports = {
            press: "press_press__pxgSG",
            articleWrap: "press_articleWrap__EwMxa",
            article: "press_article__H_4Hy",
            arrowWrap: "press_arrowWrap__0O6bf",
            "bounce-out": "press_bounce-out__IuJ2_",
            "bounce-in": "press_bounce-in__1ib8_",
            articleInfo: "press_articleInfo__XAdZC"
        }
    },
    5389: function (e) {
        e.exports = {
            services: "services_services__mNlg_",
            scene: "services_scene__PhDIC",
            marquee: "services_marquee__88anl",
            stain: "services_stain__BGrhN",
            mobileTotem: "services_mobileTotem__2Aj3U",
            cardInner: "services_cardInner__JMaeh",
            description: "services_description__spxp_",
            controls: "services_controls__OCsxK",
            cardWrapper: "services_cardWrapper__hZdmE",
            card: "services_card__eIBXH",
            wordWrap: "services_wordWrap__haMlJ",
            anchor: "services_anchor__8bKCu"
        }
    },
    42: function (e) {
        e.exports = {
            teamSocialLinks: "team-social-links_teamSocialLinks__m4429",
            frame: "team-social-links_frame__qPEwC"
        }
    },
    9858: function (e) {
        e.exports = {
            team: "team_team__isWiR",
            textMarquee: "team_textMarquee__1Nkqq",
            bioWrap: "team_bioWrap__M2Ktu",
            bio: "team_bio__SSdb_",
            bioImage: "team_bioImage__I1UiJ",
            name: "team_name__tZo8f",
            content: "team_content__5EFcA",
            memberWrap: "team_memberWrap__c5hkn",
            member: "team_member__Ojn8Z",
            memberImage: "team_memberImage__HN3yN"
        }
    },
    3302: function (e) {
        e.exports = {
            logoMarquee: "logo-marquee_logoMarquee__jhZ12",
            sectionLabel: "logo-marquee_sectionLabel__fuNCA",
            frame: "logo-marquee_frame__oemuv",
            title: "logo-marquee_title__rG_tl",
            icon: "logo-marquee_icon__eJUQp"
        }
    },
    3784: function (e) {
        e.exports = {
            letters: "letters_letters__E3eID",
            stain: "letters_stain__AtgMI",
            svg: "letters_svg__R6VND"
        }
    },
    5485: function (e) {
        e.exports = {
            page: "home_page___kTjr",
            marquee: "home_marquee__UxnLQ",
            mobileLetters: "home_mobileLetters__C_s9R"
        }
    }
}]);
