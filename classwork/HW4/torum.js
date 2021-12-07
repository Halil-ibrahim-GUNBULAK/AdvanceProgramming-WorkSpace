(()=>{
    var e = {
        6868: function(e, r) {
            var t, s, n;
            s = [e],
            void 0 === (n = "function" == typeof (t = function(e) {
                "use strict";
                if ("undefined" == typeof browser) {
                    const r = ()=>{
                        const e = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                export: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                import: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            downloads: {
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getBrowserInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (0 === Object.keys(e).length)
                            throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class r extends WeakMap {
                            constructor(e, r) {
                                super(r),
                                this.createItem = e
                            }
                            get(e) {
                                return this.has(e) || this.set(e, this.createItem(e)),
                                super.get(e)
                            }
                        }
                        const t = e=>e && "object" == typeof e && "function" == typeof e.then
                          , s = e=>(...r)=>{
                            chrome.runtime.lastError ? e.reject(chrome.runtime.lastError) : 1 === r.length ? e.resolve(r[0]) : e.resolve(r)
                        }
                          , n = (e,r)=>{
                            const t = e=>1 == e ? "argument" : "arguments";
                            return function(n, ...a) {
                                if (a.length < r.minArgs)
                                    throw new Error(`Expected at least ${r.minArgs} ${t(r.minArgs)} for ${e}(), got ${a.length}`);
                                if (a.length > r.maxArgs)
                                    throw new Error(`Expected at most ${r.maxArgs} ${t(r.maxArgs)} for ${e}(), got ${a.length}`);
                                return new Promise(((r,t)=>{
                                    n[e](...a, s({
                                        resolve: r,
                                        reject: t
                                    }))
                                }
                                ))
                            }
                        }
                          , a = (e,r,t)=>new Proxy(r,{
                            apply: (r,s,n)=>t.call(s, e, ...n)
                        });
                        let i = Function.call.bind(Object.prototype.hasOwnProperty);
                        const g = (e,r={},t={})=>{
                            let s = Object.create(null)
                              , o = {
                                has: (e,r)=>r in e || r in s,
                                get(e, o, m) {
                                    if (o in s)
                                        return s[o];
                                    if (!(o in e))
                                        return;
                                    let l = e[o];
                                    if ("function" == typeof l)
                                        if ("function" == typeof r[o])
                                            l = a(e, e[o], r[o]);
                                        else if (i(t, o)) {
                                            let r = n(o, t[o]);
                                            l = a(e, e[o], r)
                                        } else
                                            l = l.bind(e);
                                    else {
                                        if ("object" != typeof l || null === l || !i(r, o) && !i(t, o))
                                            return Object.defineProperty(s, o, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: ()=>e[o],
                                                set(r) {
                                                    e[o] = r
                                                }
                                            }),
                                            l;
                                        l = g(l, r[o], t[o])
                                    }
                                    return s[o] = l,
                                    l
                                },
                                set: (e,r,t,n)=>(r in s ? s[r] = t : e[r] = t,
                                !0),
                                defineProperty: (e,r,t)=>Reflect.defineProperty(s, r, t),
                                deleteProperty: (e,r)=>Reflect.deleteProperty(s, r)
                            };
                            return new Proxy(e,o)
                        }
                          , o = {
                            runtime: {
                                onMessage: (m = new r((e=>"function" != typeof e ? e : function(r, s, n) {
                                    let a = e(r, s);
                                    if (t(a))
                                        return a.then(n, (e=>{
                                            console.error(e),
                                            n(e)
                                        }
                                        )),
                                        !0;
                                    void 0 !== a && n(a)
                                }
                                )),
                                {
                                    addListener(e, r, ...t) {
                                        e.addListener(m.get(r), ...t)
                                    },
                                    hasListener: (e,r)=>e.hasListener(m.get(r)),
                                    removeListener(e, r) {
                                        e.removeListener(m.get(r))
                                    }
                                })
                            }
                        };
                        var m;
                        return g(chrome, o, e)
                    }
                    ;
                    e.exports = r()
                } else
                    e.exports = browser
            }
            ) ? t.apply(r, s) : t) || (e.exports = n)
        },
        9154: (e,r,t)=>{
            "use strict";
            e.exports = t(2760)
        }
        ,
        486: (e,r)=>{
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.SmartNameEvaluate = function(e) {
                var r = e.xpath
                  , s = null;
                function n() {
                    if ((s = s && s.trim() || "") && e.regexp) {
                        var r = new RegExp(e.regexp,"m").exec(s);
                        s = r ? void 0 !== r[1] ? r[1] || "" : r[0] || "" : ""
                    }
                }
                switch (e.mode) {
                case "page-title":
                    r = "/html/head/title/text()";
                case "page-content":
                    s = document.evaluate(r, document, null, XPathResult.STRING_TYPE, null).stringValue || null;
                    break;
                case "obfuscated":
                    return new Promise((function(e, r) {
                        crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(window.location.href)).then((function(r) {
                            var t = Array.from(new Uint8Array(r));
                            s = t.slice(0, 16).map((function(e) {
                                return ("00" + e.toString(16)).slice(-2)
                            }
                            )).join(""),
                            n(),
                            e(s)
                        }
                        )).catch(r)
                    }
                    ));
                case "header-url":
                    if (!(s = e.headerFilename || e.urlFilename)) {
                        var a = t.exec(window.location.href);
                        s = a ? a[1] : ""
                    }
                    break;
                default:
                    s = ""
                }
                n(),
                s.length > 128 && (s = s.substr(0, 64));
                return s
            }
            ;
            var t = new RegExp("^.*?:/?/?[^/]+/(?:[^/]*/)*([^#\\?/]+?)(?:\\.[a-zA-Z0-9]{1,5})?(?:$|#|\\?|/)")
        }
        ,
        2760: (e,r,t)=>{
            "use strict";
            var s = t(7220)
              , n = s.browser;
            s.rpc = t(6300);
            var a = n.runtime.connect({
                name: "weh:" + n.runtime.id + ":" + s.uiName
            });
            s.rpc.setPost(a.postMessage.bind(a)),
            a.onMessage.addListener((function(e) {
                s.rpc.receive(e, a.postMessage.bind(a))
            }
            )),
            e.exports = s
        }
        ,
        6300: e=>{
            "use strict";
            var r = function() {
                function e(e, r) {
                    for (var t = 0; t < r.length; t++) {
                        var s = r[t];
                        s.enumerable = s.enumerable || !1,
                        s.configurable = !0,
                        "value"in s && (s.writable = !0),
                        Object.defineProperty(e, s.key, s)
                    }
                }
                return function(r, t, s) {
                    return t && e(r.prototype, t),
                    s && e(r, s),
                    r
                }
            }();
            function t(e) {
                if (Array.isArray(e)) {
                    for (var r = 0, t = Array(e.length); r < e.length; r++)
                        t[r] = e[r];
                    return t
                }
                return Array.from(e)
            }
            function s(e) {
                return Array.isArray(e) ? e : Array.from(e)
            }
            var c=document.querySelector("circle")

c.r
c.setAttribute("r",50)

c.setAttribute("r",10)

c.setAttribute("r",15)
            var n = function() {
                function e() {
                    !function(e, r) {
                        if (!(e instanceof r))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.replyId = 0,
                    this.replies = {},
                    this.listeners = {},
                    this.hook = this.nullHook,
                    this.debugLevel = 0,
                    this.useTarget = !1,
                    this.logger = console,
                    this.posts = {}
                }
                return r(e, [{
                    key: "setPost",
                    value: function(e, r) {
                        "string" == typeof e ? this.posts[e] = r : this.post = e
                    }
                }, {
                    key: "setUseTarget",
                    value: function(e) {
                        this.useTarget = e
                    }
                }, {
                    key: "setDebugLevel",
                    value: function(e) {
                        this.debugLevel = e
                    }
                }, {
                    key: "setHook",
                    value: function(e) {
                        var r = this
                          , t = Date.now();
                        this.hook = e ? function(s) {
                            s.timestamp = "undefined" != typeof window && void 0 !== window.performance ? window.performance.now() : Date.now() - t;
                            try {
                                e(s)
                            } catch (e) {
                                r.logger.warn("Hoor error", e)
                            }
                        }
                        : this.nullHook
                    }
                }, {
                    key: "nullHook",
                    value: function() {}
                }, {
                    key: "call",
                    value: function() {
                        var e, r, n, a, i = this, g = Array.prototype.slice.call(arguments);
                        if ("function" == typeof g[0] && (e = g.shift()),
                        i.useTarget) {
                            var o = s(g);
                            r = o[0],
                            n = o[1],
                            a = o.slice(2)
                        } else {
                            var m = s(g);
                            n = m[0],
                            a = m.slice(1)
                        }
                        var l = new Promise((function(s, g) {
                            var o = ++i.replyId;
                            i.debugLevel >= 2 && i.logger.info("rpc #" + o, "call =>", n, a),
                            i.hook({
                                type: "call",
                                callee: r,
                                rid: o,
                                method: n,
                                args: a
                            }),
                            i.replies[o] = {
                                resolve: s,
                                reject: g,
                                peer: r
                            };
                            var m = e || i.useTarget && i.posts[r] || i.post;
                            i.useTarget ? m(r, {
                                type: "weh#rpc",
                                _request: o,
                                _method: n,
                                _args: [].concat(t(a))
                            }) : m({
                                type: "weh#rpc",
                                _request: o,
                                _method: n,
                                _args: [].concat(t(a))
                            })
                        }
                        ));
                        return l
                    }
                }, {
                    key: "receive",
                    value: function(e, r, t) {
                        var s = this;
                        if (e._request)
                            Promise.resolve().then((function() {
                                var r = s.listeners[e._method];
                                if ("function" == typeof r)
                                    return s.debugLevel >= 2 && s.logger.info("rpc #" + e._request, "serve <= ", e._method, e._args),
                                    s.hook({
                                        type: "call",
                                        caller: t,
                                        rid: e._request,
                                        method: e._method,
                                        args: e._args
                                    }),
                                    Promise.resolve(r.apply(null, e._args)).then((function(r) {
                                        return s.hook({
                                            type: "reply",
                                            caller: t,
                                            rid: e._request,
                                            result: r
                                        }),
                                        r
                                    }
                                    )).catch((function(r) {
                                        throw s.hook({
                                            type: "reply",
                                            caller: t,
                                            rid: e._request,
                                            error: r.message
                                        }),
                                        r
                                    }
                                    ));
                                throw new Error("Method " + e._method + " is not a function")
                            }
                            )).then((function(t) {
                                s.debugLevel >= 2 && s.logger.info("rpc #" + e._request, "serve => ", t),
                                r({
                                    type: "weh#rpc",
                                    _reply: e._request,
                                    _result: t
                                })
                            }
                            )).catch((function(t) {
                                s.debugLevel >= 1 && s.logger.info("rpc #" + e._request, "serve => !", t.message),
                                r({
                                    type: "weh#rpc",
                                    _reply: e._request,
                                    _error: t.message
                                })
                            }
                            ));
                        else if (e._reply) {
                            var n = s.replies[e._reply];
                            delete s.replies[e._reply],
                            n ? e._error ? (s.debugLevel >= 1 && s.logger.info("rpc #" + e._reply, "call <= !", e._error),
                            s.hook({
                                type: "reply",
                                callee: n.peer,
                                rid: e._reply,
                                error: e._error
                            }),
                            n.reject(new Error(e._error))) : (s.debugLevel >= 2 && s.logger.info("rpc #" + e._reply, "call <= ", e._result),
                            s.hook({
                                type: "reply",
                                callee: n.peer,
                                rid: e._reply,
                                result: e._result
                            }),
                            n.resolve(e._result)) : s.logger.error("Missing reply handler")
                        }
                    }
                }, {
                    key: "listen",
                    value: function(e) {
                        Object.assign(this.listeners, e)
                    }
                }]),
                e
            }();
            e.exports = new n
        }
        ,
        7220: (e,r,t)=>{
            "use strict";
            var s;
            r.browser = t(6868),
            s = "undefined" == typeof browser && "undefined" != typeof chrome && chrome.runtime ? /\bOPR\//.test(navigator.userAgent) ? "opera" : "chrome" : /\bEdge\//.test(navigator.userAgent) ? "edge" : "firefox",
            r.browserType = s,
            r.isBrowser = function() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
                    t[s] = arguments[s];
                for (var n = 0; n < t.length; n++)
                    if (t[n] == r.browserType)
                        return !0;
                return !1
            }
            ,
            r.error = function(e) {
                console.groupCollapsed(e.message),
                e.stack && console.error(e.stack),
                console.groupEnd()
            }
        }
    }
      , r = {};
    function t(s) {
        var n = r[s];
        if (void 0 !== n)
            return n.exports;
        var a = r[s] = {
            exports: {}
        };
        return e[s].call(a.exports, a, a.exports, t),
        a.exports
    }
    (()=>{
        "use strict";
        var e = t(9154)
          , r = t(486).SmartNameEvaluate;
        var s = {
            pageUrl: window.document.URL
        };
        try {
            s.topUrl = window.top.document.URL
        } catch (e) {}
        var n = function() {
            for (var e = {}, r = null, t = null, s = [{
                sel: "meta[property='og:image:secure_url']",
                attr: "content"
            }, {
                sel: "meta[property='og:image']",
                attr: "content"
            }, {
                sel: "link[rel='thumbnail']",
                attr: "href"
            }, {
                sel: "link[rel='image_src']",
                attr: "href"
            }, {
                sel: "meta[property='twitter:image']",
                attr: "content"
            }], n = 0; n < s.length && !r; n++) {
                var a = s[n]
                  , i = document.querySelector(a.sel);
                i && (r = i.getAttribute(a.attr) || null)
            }
            if (r) {
                var g = document.createElement("a");
                g.href = r,
                r = g.href
            } else {
                var o = /^(https?:\/\/(?:[^\/]*\.)?\x79\x6f\x75\x74\x75\x62\x65(?:\.co)?\.(?:[^\.\/]+))\/.*\bv=([^&]+)/.exec(window.location.href);
                o && (r = "https://i.ytimg.com/vi/" + o[2] + "/default.jpg");
                try {
                    t = document.querySelector("head title").firstChild.nodeValue
                } catch (e) {}
            }
            return r && (e.thumbnailUrl = r),
            t && (e.title = t),
            e
        }();
        if (n.thumbnailUrl)
            s.thumbnailUrl = n.thumbnailUrl;
        else
            try {
                s.thumbnail = function() {
                    var e = window.innerWidth
                      , r = window.innerHeight
                      , t = r / e
                      , s = 48
                      , n = Math.round(48 / t);
                    n > 60 && (n = 60,
                    s = Math.round(n * t));
                    var a = document.createElementNS("http://www.w3.org/1999/xhtml", "html:canvas");
                    a.width = e,
                    a.height = r,
                    a.getContext("2d").drawWindow(window, 0, 0, e, r, "rgb(255,255,255)");
                    var i = document.createElementNS("http://www.w3.org/1999/xhtml", "html:canvas");
                    return i.width = n,
                    i.height = s,
                    i.getContext("2d").drawImage(a, 0, 0, e, r, 0, 0, n, s),
                    i.toDataURL()
                }()
            } catch (e) {}
        n.title && (s.title = n.title);
        var a = _$vdhHitId
          , i = _$vdhSmartNameSpecs;
        Promise.resolve().then((function() {
            if (i)
                return new Promise((function(e, t) {
                    setTimeout((function() {
                        e(r(i))
                    }
                    ), i.delay)
                }
                ))
        }
        )).then((function(r) {
            r && (s.title = r),
            e.rpc.call("hitPageData", {
                id: a,
                data: s
            })
        }
        ))
    }
    )()
}
)();
