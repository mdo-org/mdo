!(function(d) {
  var u = {};
  function e(n) {
    if (u[n]) return u[n].exports;
    var t = (u[n] = { i: n, l: !1, exports: {} });
    return d[n].call(t.exports, t, t.exports, e), (t.l = !0), t.exports;
  }
  (e.m = d),
    (e.c = u),
    (e.d = function(d, u, n) {
      e.o(d, u) || Object.defineProperty(d, u, { enumerable: !0, get: n });
    }),
    (e.r = function(d) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(d, "__esModule", { value: !0 });
    }),
    (e.t = function(d, u) {
      if ((1 & u && (d = e(d)), 8 & u)) return d;
      if (4 & u && "object" == typeof d && d && d.__esModule) return d;
      var n = Object.create(null);
      if (
        (e.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: d }),
        2 & u && "string" != typeof d)
      )
        for (var t in d)
          e.d(
            n,
            t,
            function(u) {
              return d[u];
            }.bind(null, t)
          );
      return n;
    }),
    (e.n = function(d) {
      var u =
        d && d.__esModule
          ? function() {
              return d.default;
            }
          : function() {
              return d;
            };
      return e.d(u, "a", u), u;
    }),
    (e.o = function(d, u) {
      return Object.prototype.hasOwnProperty.call(d, u);
    }),
    (e.p = ""),
    e((e.s = 164));
})([
  function(d, u) {
    var e,
      n,
      t = (d.exports = {});
    function a() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    function f(d) {
      if (e === setTimeout) return setTimeout(d, 0);
      if ((e === a || !e) && setTimeout)
        return (e = setTimeout), setTimeout(d, 0);
      try {
        return e(d, 0);
      } catch (u) {
        try {
          return e.call(null, d, 0);
        } catch (u) {
          return e.call(this, d, 0);
        }
      }
    }
    !(function() {
      try {
        e = "function" == typeof setTimeout ? setTimeout : a;
      } catch (d) {
        e = a;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : r;
      } catch (d) {
        n = r;
      }
    })();
    var c,
      i = [],
      o = !1,
      s = -1;
    function l() {
      o &&
        c &&
        ((o = !1), c.length ? (i = c.concat(i)) : (s = -1), i.length && m());
    }
    function m() {
      if (!o) {
        var d = f(l);
        o = !0;
        for (var u = i.length; u; ) {
          for (c = i, i = []; ++s < u; ) c && c[s].run();
          (s = -1), (u = i.length);
        }
        (c = null),
          (o = !1),
          (function(d) {
            if (n === clearTimeout) return clearTimeout(d);
            if ((n === r || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(d);
            try {
              n(d);
            } catch (u) {
              try {
                return n.call(null, d);
              } catch (u) {
                return n.call(this, d);
              }
            }
          })(d);
      }
    }
    function p(d, u) {
      (this.fun = d), (this.array = u);
    }
    function h() {}
    (t.nextTick = function(d) {
      var u = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var e = 1; e < arguments.length; e++) u[e - 1] = arguments[e];
      i.push(new p(d, u)), 1 !== i.length || o || f(m);
    }),
      (p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (t.title = "browser"),
      (t.browser = !0),
      (t.env = {}),
      (t.argv = []),
      (t.version = ""),
      (t.versions = {}),
      (t.on = h),
      (t.addListener = h),
      (t.once = h),
      (t.off = h),
      (t.removeListener = h),
      (t.removeAllListeners = h),
      (t.emit = h),
      (t.prependListener = h),
      (t.prependOnceListener = h),
      (t.listeners = function(d) {
        return [];
      }),
      (t.binding = function(d) {
        throw new Error("process.binding is not supported");
      }),
      (t.cwd = function() {
        return "/";
      }),
      (t.chdir = function(d) {
        throw new Error("process.chdir is not supported");
      }),
      (t.umask = function() {
        return 0;
      });
  },
  function(d, u) {
    var e;
    e = (function() {
      return this;
    })();
    try {
      e = e || new Function("return this")();
    } catch (d) {
      "object" == typeof window && (e = window);
    }
    d.exports = e;
  },
  function(d, u, e) {
    d.exports = t;
    var n = e(4).EventEmitter;
    function t() {
      n.call(this);
    }
    e(20)(t, n),
      (t.Readable = e(65)),
      (t.Writable = e(173)),
      (t.Duplex = e(174)),
      (t.Transform = e(175)),
      (t.PassThrough = e(176)),
      (t.Stream = t),
      (t.prototype.pipe = function(d, u) {
        var e = this;
        function t(u) {
          d.writable && !1 === d.write(u) && e.pause && e.pause();
        }
        function a() {
          e.readable && e.resume && e.resume();
        }
        e.on("data", t),
          d.on("drain", a),
          d._isStdio ||
            (u && !1 === u.end) ||
            (e.on("end", f), e.on("close", c));
        var r = !1;
        function f() {
          r || ((r = !0), d.end());
        }
        function c() {
          r || ((r = !0), "function" == typeof d.destroy && d.destroy());
        }
        function i(d) {
          if ((o(), 0 === n.listenerCount(this, "error"))) throw d;
        }
        function o() {
          e.removeListener("data", t),
            d.removeListener("drain", a),
            e.removeListener("end", f),
            e.removeListener("close", c),
            e.removeListener("error", i),
            d.removeListener("error", i),
            e.removeListener("end", o),
            e.removeListener("close", o),
            d.removeListener("close", o);
        }
        return (
          e.on("error", i),
          d.on("error", i),
          e.on("end", o),
          e.on("close", o),
          d.on("close", o),
          d.emit("pipe", e),
          d
        );
      });
  },
  function(d, u, e) {
    "use strict";
    (function(d) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      var n = e(165),
        t = e(166),
        a = e(103);
      function r() {
        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function f(d, u) {
        if (r() < u) throw new RangeError("Invalid typed array length");
        return (
          c.TYPED_ARRAY_SUPPORT
            ? ((d = new Uint8Array(u)).__proto__ = c.prototype)
            : (null === d && (d = new c(u)), (d.length = u)),
          d
        );
      }
      function c(d, u, e) {
        if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
          return new c(d, u, e);
        if ("number" == typeof d) {
          if ("string" == typeof u)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return s(this, d);
        }
        return i(this, d, u, e);
      }
      function i(d, u, e, n) {
        if ("number" == typeof u)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && u instanceof ArrayBuffer
          ? (function(d, u, e, n) {
              if ((u.byteLength, e < 0 || u.byteLength < e))
                throw new RangeError("'offset' is out of bounds");
              if (u.byteLength < e + (n || 0))
                throw new RangeError("'length' is out of bounds");
              u =
                void 0 === e && void 0 === n
                  ? new Uint8Array(u)
                  : void 0 === n
                  ? new Uint8Array(u, e)
                  : new Uint8Array(u, e, n);
              c.TYPED_ARRAY_SUPPORT
                ? ((d = u).__proto__ = c.prototype)
                : (d = l(d, u));
              return d;
            })(d, u, e, n)
          : "string" == typeof u
          ? (function(d, u, e) {
              ("string" == typeof e && "" !== e) || (e = "utf8");
              if (!c.isEncoding(e))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var n = 0 | p(u, e),
                t = (d = f(d, n)).write(u, e);
              t !== n && (d = d.slice(0, t));
              return d;
            })(d, u, e)
          : (function(d, u) {
              if (c.isBuffer(u)) {
                var e = 0 | m(u.length);
                return 0 === (d = f(d, e)).length ? d : (u.copy(d, 0, 0, e), d);
              }
              if (u) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    u.buffer instanceof ArrayBuffer) ||
                  "length" in u
                )
                  return "number" != typeof u.length || (n = u.length) != n
                    ? f(d, 0)
                    : l(d, u);
                if ("Buffer" === u.type && a(u.data)) return l(d, u.data);
              }
              var n;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(d, u);
      }
      function o(d) {
        if ("number" != typeof d)
          throw new TypeError('"size" argument must be a number');
        if (d < 0) throw new RangeError('"size" argument must not be negative');
      }
      function s(d, u) {
        if ((o(u), (d = f(d, u < 0 ? 0 : 0 | m(u))), !c.TYPED_ARRAY_SUPPORT))
          for (var e = 0; e < u; ++e) d[e] = 0;
        return d;
      }
      function l(d, u) {
        var e = u.length < 0 ? 0 : 0 | m(u.length);
        d = f(d, e);
        for (var n = 0; n < e; n += 1) d[n] = 255 & u[n];
        return d;
      }
      function m(d) {
        if (d >= r())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              r().toString(16) +
              " bytes"
          );
        return 0 | d;
      }
      function p(d, u) {
        if (c.isBuffer(d)) return d.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(d) || d instanceof ArrayBuffer)
        )
          return d.byteLength;
        "string" != typeof d && (d = "" + d);
        var e = d.length;
        if (0 === e) return 0;
        for (var n = !1; ; )
          switch (u) {
            case "ascii":
            case "latin1":
            case "binary":
              return e;
            case "utf8":
            case "utf-8":
            case void 0:
              return U(d).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * e;
            case "hex":
              return e >>> 1;
            case "base64":
              return H(d).length;
            default:
              if (n) return U(d).length;
              (u = ("" + u).toLowerCase()), (n = !0);
          }
      }
      function h(d, u, e) {
        var n = d[u];
        (d[u] = d[e]), (d[e] = n);
      }
      function b(d, u, e, n, t) {
        if (0 === d.length) return -1;
        if (
          ("string" == typeof e
            ? ((n = e), (e = 0))
            : e > 2147483647
            ? (e = 2147483647)
            : e < -2147483648 && (e = -2147483648),
          (e = +e),
          isNaN(e) && (e = t ? 0 : d.length - 1),
          e < 0 && (e = d.length + e),
          e >= d.length)
        ) {
          if (t) return -1;
          e = d.length - 1;
        } else if (e < 0) {
          if (!t) return -1;
          e = 0;
        }
        if (("string" == typeof u && (u = c.from(u, n)), c.isBuffer(u)))
          return 0 === u.length ? -1 : y(d, u, e, n, t);
        if ("number" == typeof u)
          return (
            (u &= 255),
            c.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? t
                ? Uint8Array.prototype.indexOf.call(d, u, e)
                : Uint8Array.prototype.lastIndexOf.call(d, u, e)
              : y(d, [u], e, n, t)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function y(d, u, e, n, t) {
        var a,
          r = 1,
          f = d.length,
          c = u.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (d.length < 2 || u.length < 2) return -1;
          (r = 2), (f /= 2), (c /= 2), (e /= 2);
        }
        function i(d, u) {
          return 1 === r ? d[u] : d.readUInt16BE(u * r);
        }
        if (t) {
          var o = -1;
          for (a = e; a < f; a++)
            if (i(d, a) === i(u, -1 === o ? 0 : a - o)) {
              if ((-1 === o && (o = a), a - o + 1 === c)) return o * r;
            } else -1 !== o && (a -= a - o), (o = -1);
        } else
          for (e + c > f && (e = f - c), a = e; a >= 0; a--) {
            for (var s = !0, l = 0; l < c; l++)
              if (i(d, a + l) !== i(u, l)) {
                s = !1;
                break;
              }
            if (s) return a;
          }
        return -1;
      }
      function g(d, u, e, n) {
        e = Number(e) || 0;
        var t = d.length - e;
        n ? (n = Number(n)) > t && (n = t) : (n = t);
        var a = u.length;
        if (a % 2 != 0) throw new TypeError("Invalid hex string");
        n > a / 2 && (n = a / 2);
        for (var r = 0; r < n; ++r) {
          var f = parseInt(u.substr(2 * r, 2), 16);
          if (isNaN(f)) return r;
          d[e + r] = f;
        }
        return r;
      }
      function _(d, u, e, n) {
        return G(U(u, d.length - e), d, e, n);
      }
      function v(d, u, e, n) {
        return G(
          (function(d) {
            for (var u = [], e = 0; e < d.length; ++e)
              u.push(255 & d.charCodeAt(e));
            return u;
          })(u),
          d,
          e,
          n
        );
      }
      function w(d, u, e, n) {
        return v(d, u, e, n);
      }
      function I(d, u, e, n) {
        return G(H(u), d, e, n);
      }
      function S(d, u, e, n) {
        return G(
          (function(d, u) {
            for (
              var e, n, t, a = [], r = 0;
              r < d.length && !((u -= 2) < 0);
              ++r
            )
              (e = d.charCodeAt(r)),
                (n = e >> 8),
                (t = e % 256),
                a.push(t),
                a.push(n);
            return a;
          })(u, d.length - e),
          d,
          e,
          n
        );
      }
      function x(d, u, e) {
        return 0 === u && e === d.length
          ? n.fromByteArray(d)
          : n.fromByteArray(d.slice(u, e));
      }
      function k(d, u, e) {
        e = Math.min(d.length, e);
        for (var n = [], t = u; t < e; ) {
          var a,
            r,
            f,
            c,
            i = d[t],
            o = null,
            s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
          if (t + s <= e)
            switch (s) {
              case 1:
                i < 128 && (o = i);
                break;
              case 2:
                128 == (192 & (a = d[t + 1])) &&
                  (c = ((31 & i) << 6) | (63 & a)) > 127 &&
                  (o = c);
                break;
              case 3:
                (a = d[t + 1]),
                  (r = d[t + 2]),
                  128 == (192 & a) &&
                    128 == (192 & r) &&
                    (c = ((15 & i) << 12) | ((63 & a) << 6) | (63 & r)) >
                      2047 &&
                    (c < 55296 || c > 57343) &&
                    (o = c);
                break;
              case 4:
                (a = d[t + 1]),
                  (r = d[t + 2]),
                  (f = d[t + 3]),
                  128 == (192 & a) &&
                    128 == (192 & r) &&
                    128 == (192 & f) &&
                    (c =
                      ((15 & i) << 18) |
                      ((63 & a) << 12) |
                      ((63 & r) << 6) |
                      (63 & f)) > 65535 &&
                    c < 1114112 &&
                    (o = c);
            }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (t += s);
        }
        return (function(d) {
          var u = d.length;
          if (u <= E) return String.fromCharCode.apply(String, d);
          var e = "",
            n = 0;
          for (; n < u; )
            e += String.fromCharCode.apply(String, d.slice(n, (n += E)));
          return e;
        })(n);
      }
      (u.Buffer = c),
        (u.SlowBuffer = function(d) {
          +d != d && (d = 0);
          return c.alloc(+d);
        }),
        (u.INSPECT_MAX_BYTES = 50),
        (c.TYPED_ARRAY_SUPPORT =
          void 0 !== d.TYPED_ARRAY_SUPPORT
            ? d.TYPED_ARRAY_SUPPORT
            : (function() {
                try {
                  var d = new Uint8Array(1);
                  return (
                    (d.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function() {
                        return 42;
                      }
                    }),
                    42 === d.foo() &&
                      "function" == typeof d.subarray &&
                      0 === d.subarray(1, 1).byteLength
                  );
                } catch (d) {
                  return !1;
                }
              })()),
        (u.kMaxLength = r()),
        (c.poolSize = 8192),
        (c._augment = function(d) {
          return (d.__proto__ = c.prototype), d;
        }),
        (c.from = function(d, u, e) {
          return i(null, d, u, e);
        }),
        c.TYPED_ARRAY_SUPPORT &&
          ((c.prototype.__proto__ = Uint8Array.prototype),
          (c.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            c[Symbol.species] === c &&
            Object.defineProperty(c, Symbol.species, {
              value: null,
              configurable: !0
            })),
        (c.alloc = function(d, u, e) {
          return (function(d, u, e, n) {
            return (
              o(u),
              u <= 0
                ? f(d, u)
                : void 0 !== e
                ? "string" == typeof n
                  ? f(d, u).fill(e, n)
                  : f(d, u).fill(e)
                : f(d, u)
            );
          })(null, d, u, e);
        }),
        (c.allocUnsafe = function(d) {
          return s(null, d);
        }),
        (c.allocUnsafeSlow = function(d) {
          return s(null, d);
        }),
        (c.isBuffer = function(d) {
          return !(null == d || !d._isBuffer);
        }),
        (c.compare = function(d, u) {
          if (!c.isBuffer(d) || !c.isBuffer(u))
            throw new TypeError("Arguments must be Buffers");
          if (d === u) return 0;
          for (
            var e = d.length, n = u.length, t = 0, a = Math.min(e, n);
            t < a;
            ++t
          )
            if (d[t] !== u[t]) {
              (e = d[t]), (n = u[t]);
              break;
            }
          return e < n ? -1 : n < e ? 1 : 0;
        }),
        (c.isEncoding = function(d) {
          switch (String(d).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (c.concat = function(d, u) {
          if (!a(d))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === d.length) return c.alloc(0);
          var e;
          if (void 0 === u)
            for (u = 0, e = 0; e < d.length; ++e) u += d[e].length;
          var n = c.allocUnsafe(u),
            t = 0;
          for (e = 0; e < d.length; ++e) {
            var r = d[e];
            if (!c.isBuffer(r))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            r.copy(n, t), (t += r.length);
          }
          return n;
        }),
        (c.byteLength = p),
        (c.prototype._isBuffer = !0),
        (c.prototype.swap16 = function() {
          var d = this.length;
          if (d % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var u = 0; u < d; u += 2) h(this, u, u + 1);
          return this;
        }),
        (c.prototype.swap32 = function() {
          var d = this.length;
          if (d % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var u = 0; u < d; u += 4)
            h(this, u, u + 3), h(this, u + 1, u + 2);
          return this;
        }),
        (c.prototype.swap64 = function() {
          var d = this.length;
          if (d % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var u = 0; u < d; u += 8)
            h(this, u, u + 7),
              h(this, u + 1, u + 6),
              h(this, u + 2, u + 5),
              h(this, u + 3, u + 4);
          return this;
        }),
        (c.prototype.toString = function() {
          var d = 0 | this.length;
          return 0 === d
            ? ""
            : 0 === arguments.length
            ? k(this, 0, d)
            : function(d, u, e) {
                var n = !1;
                if (((void 0 === u || u < 0) && (u = 0), u > this.length))
                  return "";
                if (
                  ((void 0 === e || e > this.length) && (e = this.length),
                  e <= 0)
                )
                  return "";
                if ((e >>>= 0) <= (u >>>= 0)) return "";
                for (d || (d = "utf8"); ; )
                  switch (d) {
                    case "hex":
                      return O(this, u, e);
                    case "utf8":
                    case "utf-8":
                      return k(this, u, e);
                    case "ascii":
                      return M(this, u, e);
                    case "latin1":
                    case "binary":
                      return T(this, u, e);
                    case "base64":
                      return x(this, u, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return C(this, u, e);
                    default:
                      if (n) throw new TypeError("Unknown encoding: " + d);
                      (d = (d + "").toLowerCase()), (n = !0);
                  }
              }.apply(this, arguments);
        }),
        (c.prototype.equals = function(d) {
          if (!c.isBuffer(d)) throw new TypeError("Argument must be a Buffer");
          return this === d || 0 === c.compare(this, d);
        }),
        (c.prototype.inspect = function() {
          var d = "",
            e = u.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((d = this.toString("hex", 0, e)
                .match(/.{2}/g)
                .join(" ")),
              this.length > e && (d += " ... ")),
            "<Buffer " + d + ">"
          );
        }),
        (c.prototype.compare = function(d, u, e, n, t) {
          if (!c.isBuffer(d)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === u && (u = 0),
            void 0 === e && (e = d ? d.length : 0),
            void 0 === n && (n = 0),
            void 0 === t && (t = this.length),
            u < 0 || e > d.length || n < 0 || t > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= t && u >= e) return 0;
          if (n >= t) return -1;
          if (u >= e) return 1;
          if (this === d) return 0;
          for (
            var a = (t >>>= 0) - (n >>>= 0),
              r = (e >>>= 0) - (u >>>= 0),
              f = Math.min(a, r),
              i = this.slice(n, t),
              o = d.slice(u, e),
              s = 0;
            s < f;
            ++s
          )
            if (i[s] !== o[s]) {
              (a = i[s]), (r = o[s]);
              break;
            }
          return a < r ? -1 : r < a ? 1 : 0;
        }),
        (c.prototype.includes = function(d, u, e) {
          return -1 !== this.indexOf(d, u, e);
        }),
        (c.prototype.indexOf = function(d, u, e) {
          return b(this, d, u, e, !0);
        }),
        (c.prototype.lastIndexOf = function(d, u, e) {
          return b(this, d, u, e, !1);
        }),
        (c.prototype.write = function(d, u, e, n) {
          if (void 0 === u) (n = "utf8"), (e = this.length), (u = 0);
          else if (void 0 === e && "string" == typeof u)
            (n = u), (e = this.length), (u = 0);
          else {
            if (!isFinite(u))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (u |= 0),
              isFinite(e)
                ? ((e |= 0), void 0 === n && (n = "utf8"))
                : ((n = e), (e = void 0));
          }
          var t = this.length - u;
          if (
            ((void 0 === e || e > t) && (e = t),
            (d.length > 0 && (e < 0 || u < 0)) || u > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var a = !1; ; )
            switch (n) {
              case "hex":
                return g(this, d, u, e);
              case "utf8":
              case "utf-8":
                return _(this, d, u, e);
              case "ascii":
                return v(this, d, u, e);
              case "latin1":
              case "binary":
                return w(this, d, u, e);
              case "base64":
                return I(this, d, u, e);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return S(this, d, u, e);
              default:
                if (a) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (a = !0);
            }
        }),
        (c.prototype.toJSON = function() {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        });
      var E = 4096;
      function M(d, u, e) {
        var n = "";
        e = Math.min(d.length, e);
        for (var t = u; t < e; ++t) n += String.fromCharCode(127 & d[t]);
        return n;
      }
      function T(d, u, e) {
        var n = "";
        e = Math.min(d.length, e);
        for (var t = u; t < e; ++t) n += String.fromCharCode(d[t]);
        return n;
      }
      function O(d, u, e) {
        var n = d.length;
        (!u || u < 0) && (u = 0), (!e || e < 0 || e > n) && (e = n);
        for (var t = "", a = u; a < e; ++a) t += F(d[a]);
        return t;
      }
      function C(d, u, e) {
        for (var n = d.slice(u, e), t = "", a = 0; a < n.length; a += 2)
          t += String.fromCharCode(n[a] + 256 * n[a + 1]);
        return t;
      }
      function A(d, u, e) {
        if (d % 1 != 0 || d < 0) throw new RangeError("offset is not uint");
        if (d + u > e)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function L(d, u, e, n, t, a) {
        if (!c.isBuffer(d))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (u > t || u < a)
          throw new RangeError('"value" argument is out of bounds');
        if (e + n > d.length) throw new RangeError("Index out of range");
      }
      function P(d, u, e, n) {
        u < 0 && (u = 65535 + u + 1);
        for (var t = 0, a = Math.min(d.length - e, 2); t < a; ++t)
          d[e + t] =
            (u & (255 << (8 * (n ? t : 1 - t)))) >>> (8 * (n ? t : 1 - t));
      }
      function N(d, u, e, n) {
        u < 0 && (u = 4294967295 + u + 1);
        for (var t = 0, a = Math.min(d.length - e, 4); t < a; ++t)
          d[e + t] = (u >>> (8 * (n ? t : 3 - t))) & 255;
      }
      function R(d, u, e, n, t, a) {
        if (e + n > d.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range");
      }
      function j(d, u, e, n, a) {
        return a || R(d, 0, e, 4), t.write(d, u, e, n, 23, 4), e + 4;
      }
      function D(d, u, e, n, a) {
        return a || R(d, 0, e, 8), t.write(d, u, e, n, 52, 8), e + 8;
      }
      (c.prototype.slice = function(d, u) {
        var e,
          n = this.length;
        if (
          ((d = ~~d) < 0 ? (d += n) < 0 && (d = 0) : d > n && (d = n),
          (u = void 0 === u ? n : ~~u) < 0
            ? (u += n) < 0 && (u = 0)
            : u > n && (u = n),
          u < d && (u = d),
          c.TYPED_ARRAY_SUPPORT)
        )
          (e = this.subarray(d, u)).__proto__ = c.prototype;
        else {
          var t = u - d;
          e = new c(t, void 0);
          for (var a = 0; a < t; ++a) e[a] = this[a + d];
        }
        return e;
      }),
        (c.prototype.readUIntLE = function(d, u, e) {
          (d |= 0), (u |= 0), e || A(d, u, this.length);
          for (var n = this[d], t = 1, a = 0; ++a < u && (t *= 256); )
            n += this[d + a] * t;
          return n;
        }),
        (c.prototype.readUIntBE = function(d, u, e) {
          (d |= 0), (u |= 0), e || A(d, u, this.length);
          for (var n = this[d + --u], t = 1; u > 0 && (t *= 256); )
            n += this[d + --u] * t;
          return n;
        }),
        (c.prototype.readUInt8 = function(d, u) {
          return u || A(d, 1, this.length), this[d];
        }),
        (c.prototype.readUInt16LE = function(d, u) {
          return u || A(d, 2, this.length), this[d] | (this[d + 1] << 8);
        }),
        (c.prototype.readUInt16BE = function(d, u) {
          return u || A(d, 2, this.length), (this[d] << 8) | this[d + 1];
        }),
        (c.prototype.readUInt32LE = function(d, u) {
          return (
            u || A(d, 4, this.length),
            (this[d] | (this[d + 1] << 8) | (this[d + 2] << 16)) +
              16777216 * this[d + 3]
          );
        }),
        (c.prototype.readUInt32BE = function(d, u) {
          return (
            u || A(d, 4, this.length),
            16777216 * this[d] +
              ((this[d + 1] << 16) | (this[d + 2] << 8) | this[d + 3])
          );
        }),
        (c.prototype.readIntLE = function(d, u, e) {
          (d |= 0), (u |= 0), e || A(d, u, this.length);
          for (var n = this[d], t = 1, a = 0; ++a < u && (t *= 256); )
            n += this[d + a] * t;
          return n >= (t *= 128) && (n -= Math.pow(2, 8 * u)), n;
        }),
        (c.prototype.readIntBE = function(d, u, e) {
          (d |= 0), (u |= 0), e || A(d, u, this.length);
          for (var n = u, t = 1, a = this[d + --n]; n > 0 && (t *= 256); )
            a += this[d + --n] * t;
          return a >= (t *= 128) && (a -= Math.pow(2, 8 * u)), a;
        }),
        (c.prototype.readInt8 = function(d, u) {
          return (
            u || A(d, 1, this.length),
            128 & this[d] ? -1 * (255 - this[d] + 1) : this[d]
          );
        }),
        (c.prototype.readInt16LE = function(d, u) {
          u || A(d, 2, this.length);
          var e = this[d] | (this[d + 1] << 8);
          return 32768 & e ? 4294901760 | e : e;
        }),
        (c.prototype.readInt16BE = function(d, u) {
          u || A(d, 2, this.length);
          var e = this[d + 1] | (this[d] << 8);
          return 32768 & e ? 4294901760 | e : e;
        }),
        (c.prototype.readInt32LE = function(d, u) {
          return (
            u || A(d, 4, this.length),
            this[d] |
              (this[d + 1] << 8) |
              (this[d + 2] << 16) |
              (this[d + 3] << 24)
          );
        }),
        (c.prototype.readInt32BE = function(d, u) {
          return (
            u || A(d, 4, this.length),
            (this[d] << 24) |
              (this[d + 1] << 16) |
              (this[d + 2] << 8) |
              this[d + 3]
          );
        }),
        (c.prototype.readFloatLE = function(d, u) {
          return u || A(d, 4, this.length), t.read(this, d, !0, 23, 4);
        }),
        (c.prototype.readFloatBE = function(d, u) {
          return u || A(d, 4, this.length), t.read(this, d, !1, 23, 4);
        }),
        (c.prototype.readDoubleLE = function(d, u) {
          return u || A(d, 8, this.length), t.read(this, d, !0, 52, 8);
        }),
        (c.prototype.readDoubleBE = function(d, u) {
          return u || A(d, 8, this.length), t.read(this, d, !1, 52, 8);
        }),
        (c.prototype.writeUIntLE = function(d, u, e, n) {
          ((d = +d), (u |= 0), (e |= 0), n) ||
            L(this, d, u, e, Math.pow(2, 8 * e) - 1, 0);
          var t = 1,
            a = 0;
          for (this[u] = 255 & d; ++a < e && (t *= 256); )
            this[u + a] = (d / t) & 255;
          return u + e;
        }),
        (c.prototype.writeUIntBE = function(d, u, e, n) {
          ((d = +d), (u |= 0), (e |= 0), n) ||
            L(this, d, u, e, Math.pow(2, 8 * e) - 1, 0);
          var t = e - 1,
            a = 1;
          for (this[u + t] = 255 & d; --t >= 0 && (a *= 256); )
            this[u + t] = (d / a) & 255;
          return u + e;
        }),
        (c.prototype.writeUInt8 = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 1, 255, 0),
            c.TYPED_ARRAY_SUPPORT || (d = Math.floor(d)),
            (this[u] = 255 & d),
            u + 1
          );
        }),
        (c.prototype.writeUInt16LE = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[u] = 255 & d), (this[u + 1] = d >>> 8))
              : P(this, d, u, !0),
            u + 2
          );
        }),
        (c.prototype.writeUInt16BE = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[u] = d >>> 8), (this[u + 1] = 255 & d))
              : P(this, d, u, !1),
            u + 2
          );
        }),
        (c.prototype.writeUInt32LE = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[u + 3] = d >>> 24),
                (this[u + 2] = d >>> 16),
                (this[u + 1] = d >>> 8),
                (this[u] = 255 & d))
              : N(this, d, u, !0),
            u + 4
          );
        }),
        (c.prototype.writeUInt32BE = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[u] = d >>> 24),
                (this[u + 1] = d >>> 16),
                (this[u + 2] = d >>> 8),
                (this[u + 3] = 255 & d))
              : N(this, d, u, !1),
            u + 4
          );
        }),
        (c.prototype.writeIntLE = function(d, u, e, n) {
          if (((d = +d), (u |= 0), !n)) {
            var t = Math.pow(2, 8 * e - 1);
            L(this, d, u, e, t - 1, -t);
          }
          var a = 0,
            r = 1,
            f = 0;
          for (this[u] = 255 & d; ++a < e && (r *= 256); )
            d < 0 && 0 === f && 0 !== this[u + a - 1] && (f = 1),
              (this[u + a] = (((d / r) >> 0) - f) & 255);
          return u + e;
        }),
        (c.prototype.writeIntBE = function(d, u, e, n) {
          if (((d = +d), (u |= 0), !n)) {
            var t = Math.pow(2, 8 * e - 1);
            L(this, d, u, e, t - 1, -t);
          }
          var a = e - 1,
            r = 1,
            f = 0;
          for (this[u + a] = 255 & d; --a >= 0 && (r *= 256); )
            d < 0 && 0 === f && 0 !== this[u + a + 1] && (f = 1),
              (this[u + a] = (((d / r) >> 0) - f) & 255);
          return u + e;
        }),
        (c.prototype.writeInt8 = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 1, 127, -128),
            c.TYPED_ARRAY_SUPPORT || (d = Math.floor(d)),
            d < 0 && (d = 255 + d + 1),
            (this[u] = 255 & d),
            u + 1
          );
        }),
        (c.prototype.writeInt16LE = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[u] = 255 & d), (this[u + 1] = d >>> 8))
              : P(this, d, u, !0),
            u + 2
          );
        }),
        (c.prototype.writeInt16BE = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[u] = d >>> 8), (this[u + 1] = 255 & d))
              : P(this, d, u, !1),
            u + 2
          );
        }),
        (c.prototype.writeInt32LE = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 4, 2147483647, -2147483648),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[u] = 255 & d),
                (this[u + 1] = d >>> 8),
                (this[u + 2] = d >>> 16),
                (this[u + 3] = d >>> 24))
              : N(this, d, u, !0),
            u + 4
          );
        }),
        (c.prototype.writeInt32BE = function(d, u, e) {
          return (
            (d = +d),
            (u |= 0),
            e || L(this, d, u, 4, 2147483647, -2147483648),
            d < 0 && (d = 4294967295 + d + 1),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[u] = d >>> 24),
                (this[u + 1] = d >>> 16),
                (this[u + 2] = d >>> 8),
                (this[u + 3] = 255 & d))
              : N(this, d, u, !1),
            u + 4
          );
        }),
        (c.prototype.writeFloatLE = function(d, u, e) {
          return j(this, d, u, !0, e);
        }),
        (c.prototype.writeFloatBE = function(d, u, e) {
          return j(this, d, u, !1, e);
        }),
        (c.prototype.writeDoubleLE = function(d, u, e) {
          return D(this, d, u, !0, e);
        }),
        (c.prototype.writeDoubleBE = function(d, u, e) {
          return D(this, d, u, !1, e);
        }),
        (c.prototype.copy = function(d, u, e, n) {
          if (
            (e || (e = 0),
            n || 0 === n || (n = this.length),
            u >= d.length && (u = d.length),
            u || (u = 0),
            n > 0 && n < e && (n = e),
            n === e)
          )
            return 0;
          if (0 === d.length || 0 === this.length) return 0;
          if (u < 0) throw new RangeError("targetStart out of bounds");
          if (e < 0 || e >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            d.length - u < n - e && (n = d.length - u + e);
          var t,
            a = n - e;
          if (this === d && e < u && u < n)
            for (t = a - 1; t >= 0; --t) d[t + u] = this[t + e];
          else if (a < 1e3 || !c.TYPED_ARRAY_SUPPORT)
            for (t = 0; t < a; ++t) d[t + u] = this[t + e];
          else Uint8Array.prototype.set.call(d, this.subarray(e, e + a), u);
          return a;
        }),
        (c.prototype.fill = function(d, u, e, n) {
          if ("string" == typeof d) {
            if (
              ("string" == typeof u
                ? ((n = u), (u = 0), (e = this.length))
                : "string" == typeof e && ((n = e), (e = this.length)),
              1 === d.length)
            ) {
              var t = d.charCodeAt(0);
              t < 256 && (d = t);
            }
            if (void 0 !== n && "string" != typeof n)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !c.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof d && (d &= 255);
          if (u < 0 || this.length < u || this.length < e)
            throw new RangeError("Out of range index");
          if (e <= u) return this;
          var a;
          if (
            ((u >>>= 0),
            (e = void 0 === e ? this.length : e >>> 0),
            d || (d = 0),
            "number" == typeof d)
          )
            for (a = u; a < e; ++a) this[a] = d;
          else {
            var r = c.isBuffer(d) ? d : U(new c(d, n).toString()),
              f = r.length;
            for (a = 0; a < e - u; ++a) this[a + u] = r[a % f];
          }
          return this;
        });
      var B = /[^+\/0-9A-Za-z-_]/g;
      function F(d) {
        return d < 16 ? "0" + d.toString(16) : d.toString(16);
      }
      function U(d, u) {
        var e;
        u = u || 1 / 0;
        for (var n = d.length, t = null, a = [], r = 0; r < n; ++r) {
          if ((e = d.charCodeAt(r)) > 55295 && e < 57344) {
            if (!t) {
              if (e > 56319) {
                (u -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }
              if (r + 1 === n) {
                (u -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }
              t = e;
              continue;
            }
            if (e < 56320) {
              (u -= 3) > -1 && a.push(239, 191, 189), (t = e);
              continue;
            }
            e = 65536 + (((t - 55296) << 10) | (e - 56320));
          } else t && (u -= 3) > -1 && a.push(239, 191, 189);
          if (((t = null), e < 128)) {
            if ((u -= 1) < 0) break;
            a.push(e);
          } else if (e < 2048) {
            if ((u -= 2) < 0) break;
            a.push((e >> 6) | 192, (63 & e) | 128);
          } else if (e < 65536) {
            if ((u -= 3) < 0) break;
            a.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (63 & e) | 128);
          } else {
            if (!(e < 1114112)) throw new Error("Invalid code point");
            if ((u -= 4) < 0) break;
            a.push(
              (e >> 18) | 240,
              ((e >> 12) & 63) | 128,
              ((e >> 6) & 63) | 128,
              (63 & e) | 128
            );
          }
        }
        return a;
      }
      function H(d) {
        return n.toByteArray(
          (function(d) {
            if (
              (d = (function(d) {
                return d.trim ? d.trim() : d.replace(/^\s+|\s+$/g, "");
              })(d).replace(B, "")).length < 2
            )
              return "";
            for (; d.length % 4 != 0; ) d += "=";
            return d;
          })(d)
        );
      }
      function G(d, u, e, n) {
        for (var t = 0; t < n && !(t + e >= u.length || t >= d.length); ++t)
          u[t + e] = d[t];
        return t;
      }
    }.call(this, e(1)));
  },
  function(d, u, e) {
    "use strict";
    var n,
      t = "object" == typeof Reflect ? Reflect : null,
      a =
        t && "function" == typeof t.apply
          ? t.apply
          : function(d, u, e) {
              return Function.prototype.apply.call(d, u, e);
            };
    n =
      t && "function" == typeof t.ownKeys
        ? t.ownKeys
        : Object.getOwnPropertySymbols
        ? function(d) {
            return Object.getOwnPropertyNames(d).concat(
              Object.getOwnPropertySymbols(d)
            );
          }
        : function(d) {
            return Object.getOwnPropertyNames(d);
          };
    var r =
      Number.isNaN ||
      function(d) {
        return d != d;
      };
    function f() {
      f.init.call(this);
    }
    (d.exports = f),
      (f.EventEmitter = f),
      (f.prototype._events = void 0),
      (f.prototype._eventsCount = 0),
      (f.prototype._maxListeners = void 0);
    var c = 10;
    function i(d) {
      return void 0 === d._maxListeners
        ? f.defaultMaxListeners
        : d._maxListeners;
    }
    function o(d, u, e, n) {
      var t, a, r, f;
      if ("function" != typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        );
      if (
        (void 0 === (a = d._events)
          ? ((a = d._events = Object.create(null)), (d._eventsCount = 0))
          : (void 0 !== a.newListener &&
              (d.emit("newListener", u, e.listener ? e.listener : e),
              (a = d._events)),
            (r = a[u])),
        void 0 === r)
      )
        (r = a[u] = e), ++d._eventsCount;
      else if (
        ("function" == typeof r
          ? (r = a[u] = n ? [e, r] : [r, e])
          : n
          ? r.unshift(e)
          : r.push(e),
        (t = i(d)) > 0 && r.length > t && !r.warned)
      ) {
        r.warned = !0;
        var c = new Error(
          "Possible EventEmitter memory leak detected. " +
            r.length +
            " " +
            String(u) +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (c.name = "MaxListenersExceededWarning"),
          (c.emitter = d),
          (c.type = u),
          (c.count = r.length),
          (f = c),
          console && console.warn && console.warn(f);
      }
      return d;
    }
    function s(d, u, e) {
      var n = { fired: !1, wrapFn: void 0, target: d, type: u, listener: e },
        t = function() {
          for (var d = [], u = 0; u < arguments.length; u++)
            d.push(arguments[u]);
          this.fired ||
            (this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            a(this.listener, this.target, d));
        }.bind(n);
      return (t.listener = e), (n.wrapFn = t), t;
    }
    function l(d, u, e) {
      var n = d._events;
      if (void 0 === n) return [];
      var t = n[u];
      return void 0 === t
        ? []
        : "function" == typeof t
        ? e
          ? [t.listener || t]
          : [t]
        : e
        ? (function(d) {
            for (var u = new Array(d.length), e = 0; e < u.length; ++e)
              u[e] = d[e].listener || d[e];
            return u;
          })(t)
        : p(t, t.length);
    }
    function m(d) {
      var u = this._events;
      if (void 0 !== u) {
        var e = u[d];
        if ("function" == typeof e) return 1;
        if (void 0 !== e) return e.length;
      }
      return 0;
    }
    function p(d, u) {
      for (var e = new Array(u), n = 0; n < u; ++n) e[n] = d[n];
      return e;
    }
    Object.defineProperty(f, "defaultMaxListeners", {
      enumerable: !0,
      get: function() {
        return c;
      },
      set: function(d) {
        if ("number" != typeof d || d < 0 || r(d))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              d +
              "."
          );
        c = d;
      }
    }),
      (f.init = function() {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (f.prototype.setMaxListeners = function(d) {
        if ("number" != typeof d || d < 0 || r(d))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              d +
              "."
          );
        return (this._maxListeners = d), this;
      }),
      (f.prototype.getMaxListeners = function() {
        return i(this);
      }),
      (f.prototype.emit = function(d) {
        for (var u = [], e = 1; e < arguments.length; e++) u.push(arguments[e]);
        var n = "error" === d,
          t = this._events;
        if (void 0 !== t) n = n && void 0 === t.error;
        else if (!n) return !1;
        if (n) {
          var r;
          if ((u.length > 0 && (r = u[0]), r instanceof Error)) throw r;
          var f = new Error(
            "Unhandled error." + (r ? " (" + r.message + ")" : "")
          );
          throw ((f.context = r), f);
        }
        var c = t[d];
        if (void 0 === c) return !1;
        if ("function" == typeof c) a(c, this, u);
        else {
          var i = c.length,
            o = p(c, i);
          for (e = 0; e < i; ++e) a(o[e], this, u);
        }
        return !0;
      }),
      (f.prototype.addListener = function(d, u) {
        return o(this, d, u, !1);
      }),
      (f.prototype.on = f.prototype.addListener),
      (f.prototype.prependListener = function(d, u) {
        return o(this, d, u, !0);
      }),
      (f.prototype.once = function(d, u) {
        if ("function" != typeof u)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof u
          );
        return this.on(d, s(this, d, u)), this;
      }),
      (f.prototype.prependOnceListener = function(d, u) {
        if ("function" != typeof u)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof u
          );
        return this.prependListener(d, s(this, d, u)), this;
      }),
      (f.prototype.removeListener = function(d, u) {
        var e, n, t, a, r;
        if ("function" != typeof u)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof u
          );
        if (void 0 === (n = this._events)) return this;
        if (void 0 === (e = n[d])) return this;
        if (e === u || e.listener === u)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete n[d],
              n.removeListener &&
                this.emit("removeListener", d, e.listener || u));
        else if ("function" != typeof e) {
          for (t = -1, a = e.length - 1; a >= 0; a--)
            if (e[a] === u || e[a].listener === u) {
              (r = e[a].listener), (t = a);
              break;
            }
          if (t < 0) return this;
          0 === t
            ? e.shift()
            : (function(d, u) {
                for (; u + 1 < d.length; u++) d[u] = d[u + 1];
                d.pop();
              })(e, t),
            1 === e.length && (n[d] = e[0]),
            void 0 !== n.removeListener &&
              this.emit("removeListener", d, r || u);
        }
        return this;
      }),
      (f.prototype.off = f.prototype.removeListener),
      (f.prototype.removeAllListeners = function(d) {
        var u, e, n;
        if (void 0 === (e = this._events)) return this;
        if (void 0 === e.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== e[d] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete e[d]),
            this
          );
        if (0 === arguments.length) {
          var t,
            a = Object.keys(e);
          for (n = 0; n < a.length; ++n)
            "removeListener" !== (t = a[n]) && this.removeAllListeners(t);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" == typeof (u = e[d])) this.removeListener(d, u);
        else if (void 0 !== u)
          for (n = u.length - 1; n >= 0; n--) this.removeListener(d, u[n]);
        return this;
      }),
      (f.prototype.listeners = function(d) {
        return l(this, d, !0);
      }),
      (f.prototype.rawListeners = function(d) {
        return l(this, d, !1);
      }),
      (f.listenerCount = function(d, u) {
        return "function" == typeof d.listenerCount
          ? d.listenerCount(u)
          : m.call(d, u);
      }),
      (f.prototype.listenerCount = m),
      (f.prototype.eventNames = function() {
        return this._eventsCount > 0 ? n(this._events) : [];
      });
  },
  function(d, u, e) {
    "use strict";
    var n = e(41),
      t =
        Object.keys ||
        function(d) {
          var u = [];
          for (var e in d) u.push(e);
          return u;
        };
    d.exports = s;
    var a = e(29);
    a.inherits = e(20);
    var r = e(102),
      f = e(66);
    a.inherits(s, r);
    for (var c = t(f.prototype), i = 0; i < c.length; i++) {
      var o = c[i];
      s.prototype[o] || (s.prototype[o] = f.prototype[o]);
    }
    function s(d) {
      if (!(this instanceof s)) return new s(d);
      r.call(this, d),
        f.call(this, d),
        d && !1 === d.readable && (this.readable = !1),
        d && !1 === d.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        d && !1 === d.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", l);
    }
    function l() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(m, this);
    }
    function m(d) {
      d.end();
    }
    Object.defineProperty(s.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function() {
        return this._writableState.highWaterMark;
      }
    }),
      Object.defineProperty(s.prototype, "destroyed", {
        get: function() {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            (this._readableState.destroyed && this._writableState.destroyed)
          );
        },
        set: function(d) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = d),
            (this._writableState.destroyed = d));
        }
      }),
      (s.prototype._destroy = function(d, u) {
        this.push(null), this.end(), n.nextTick(u, d);
      });
  },
  function(d, u) {
    "function" == typeof Object.create
      ? (d.exports = function(d, u) {
          (d.super_ = u),
            (d.prototype = Object.create(u.prototype, {
              constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }));
        })
      : (d.exports = function(d, u) {
          d.super_ = u;
          var e = function() {};
          (e.prototype = u.prototype),
            (d.prototype = new e()),
            (d.prototype.constructor = d);
        });
  },
  function(d, u) {
    "function" == typeof Object.create
      ? (d.exports = function(d, u) {
          (d.super_ = u),
            (d.prototype = Object.create(u.prototype, {
              constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }));
        })
      : (d.exports = function(d, u) {
          d.super_ = u;
          var e = function() {};
          (e.prototype = u.prototype),
            (d.prototype = new e()),
            (d.prototype.constructor = d);
        });
  },
  function(d, u) {
    d.exports = function(d) {
      return d && d.__esModule ? d : { default: d };
    };
  },
  function(d, u) {
    var e = (d.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = e);
  },
  function(d, u) {
    var e = (d.exports = { version: "2.6.5" });
    "number" == typeof __e && (__e = e);
  },
  function(d, u) {
    d.exports = function(d) {
      return d && d.__esModule ? d : { default: d };
    };
  },
  function(d, u) {
    var e = (d.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = e);
  },
  function(d, u) {
    var e = (d.exports = { version: "2.6.5" });
    "number" == typeof __e && (__e = e);
  },
  function(d, u) {
    d.exports = function(d) {
      return d && d.__esModule ? d : { default: d };
    };
  },
  function(d, u) {
    var e = (d.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = e);
  },
  function(d, u) {
    var e = (d.exports = { version: "2.6.5" });
    "number" == typeof __e && (__e = e);
  },
  function(d, u) {
    d.exports = function(d) {
      return d && d.__esModule ? d : { default: d };
    };
  },
  function(d, u) {
    var e = (d.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = e);
  },
  function(d, u) {
    var e = (d.exports = { version: "2.6.5" });
    "number" == typeof __e && (__e = e);
  },
  function(d, u) {
    "function" == typeof Object.create
      ? (d.exports = function(d, u) {
          (d.super_ = u),
            (d.prototype = Object.create(u.prototype, {
              constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }));
        })
      : (d.exports = function(d, u) {
          d.super_ = u;
          var e = function() {};
          (e.prototype = u.prototype),
            (d.prototype = new e()),
            (d.prototype.constructor = d);
        });
  },
  function(d, u, e) {
    "use strict";
    var n = e(42).Buffer,
      t =
        n.isEncoding ||
        function(d) {
          switch ((d = "" + d) && d.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function a(d) {
      var u;
      switch (
        ((this.encoding = (function(d) {
          var u = (function(d) {
            if (!d) return "utf8";
            for (var u; ; )
              switch (d) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return d;
                default:
                  if (u) return;
                  (d = ("" + d).toLowerCase()), (u = !0);
              }
          })(d);
          if ("string" != typeof u && (n.isEncoding === t || !t(d)))
            throw new Error("Unknown encoding: " + d);
          return u || d;
        })(d)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = c), (this.end = i), (u = 4);
          break;
        case "utf8":
          (this.fillLast = f), (u = 4);
          break;
        case "base64":
          (this.text = o), (this.end = s), (u = 3);
          break;
        default:
          return (this.write = l), void (this.end = m);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = n.allocUnsafe(u));
    }
    function r(d) {
      return d <= 127
        ? 0
        : d >> 5 == 6
        ? 2
        : d >> 4 == 14
        ? 3
        : d >> 3 == 30
        ? 4
        : d >> 6 == 2
        ? -1
        : -2;
    }
    function f(d) {
      var u = this.lastTotal - this.lastNeed,
        e = (function(d, u, e) {
          if (128 != (192 & u[0])) return (d.lastNeed = 0), "�";
          if (d.lastNeed > 1 && u.length > 1) {
            if (128 != (192 & u[1])) return (d.lastNeed = 1), "�";
            if (d.lastNeed > 2 && u.length > 2 && 128 != (192 & u[2]))
              return (d.lastNeed = 2), "�";
          }
        })(this, d);
      return void 0 !== e
        ? e
        : this.lastNeed <= d.length
        ? (d.copy(this.lastChar, u, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (d.copy(this.lastChar, u, 0, d.length),
          void (this.lastNeed -= d.length));
    }
    function c(d, u) {
      if ((d.length - u) % 2 == 0) {
        var e = d.toString("utf16le", u);
        if (e) {
          var n = e.charCodeAt(e.length - 1);
          if (n >= 55296 && n <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = d[d.length - 2]),
              (this.lastChar[1] = d[d.length - 1]),
              e.slice(0, -1)
            );
        }
        return e;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = d[d.length - 1]),
        d.toString("utf16le", u, d.length - 1)
      );
    }
    function i(d) {
      var u = d && d.length ? this.write(d) : "";
      if (this.lastNeed) {
        var e = this.lastTotal - this.lastNeed;
        return u + this.lastChar.toString("utf16le", 0, e);
      }
      return u;
    }
    function o(d, u) {
      var e = (d.length - u) % 3;
      return 0 === e
        ? d.toString("base64", u)
        : ((this.lastNeed = 3 - e),
          (this.lastTotal = 3),
          1 === e
            ? (this.lastChar[0] = d[d.length - 1])
            : ((this.lastChar[0] = d[d.length - 2]),
              (this.lastChar[1] = d[d.length - 1])),
          d.toString("base64", u, d.length - e));
    }
    function s(d) {
      var u = d && d.length ? this.write(d) : "";
      return this.lastNeed
        ? u + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : u;
    }
    function l(d) {
      return d.toString(this.encoding);
    }
    function m(d) {
      return d && d.length ? this.write(d) : "";
    }
    (u.StringDecoder = a),
      (a.prototype.write = function(d) {
        if (0 === d.length) return "";
        var u, e;
        if (this.lastNeed) {
          if (void 0 === (u = this.fillLast(d))) return "";
          (e = this.lastNeed), (this.lastNeed = 0);
        } else e = 0;
        return e < d.length
          ? u
            ? u + this.text(d, e)
            : this.text(d, e)
          : u || "";
      }),
      (a.prototype.end = function(d) {
        var u = d && d.length ? this.write(d) : "";
        return this.lastNeed ? u + "�" : u;
      }),
      (a.prototype.text = function(d, u) {
        var e = (function(d, u, e) {
          var n = u.length - 1;
          if (n < e) return 0;
          var t = r(u[n]);
          if (t >= 0) return t > 0 && (d.lastNeed = t - 1), t;
          if (--n < e || -2 === t) return 0;
          if ((t = r(u[n])) >= 0) return t > 0 && (d.lastNeed = t - 2), t;
          if (--n < e || -2 === t) return 0;
          if ((t = r(u[n])) >= 0)
            return t > 0 && (2 === t ? (t = 0) : (d.lastNeed = t - 3)), t;
          return 0;
        })(this, d, u);
        if (!this.lastNeed) return d.toString("utf8", u);
        this.lastTotal = e;
        var n = d.length - (e - this.lastNeed);
        return d.copy(this.lastChar, 0, n), d.toString("utf8", u, n);
      }),
      (a.prototype.fillLast = function(d) {
        if (this.lastNeed <= d.length)
          return (
            d.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        d.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, d.length),
          (this.lastNeed -= d.length);
      });
  },
  function(d, u, e) {
    "use strict";
    var n = e(43),
      t =
        Object.keys ||
        function(d) {
          var u = [];
          for (var e in d) u.push(e);
          return u;
        };
    d.exports = s;
    var a = e(30);
    a.inherits = e(6);
    var r = e(109),
      f = e(112);
    a.inherits(s, r);
    for (var c = t(f.prototype), i = 0; i < c.length; i++) {
      var o = c[i];
      s.prototype[o] || (s.prototype[o] = f.prototype[o]);
    }
    function s(d) {
      if (!(this instanceof s)) return new s(d);
      r.call(this, d),
        f.call(this, d),
        d && !1 === d.readable && (this.readable = !1),
        d && !1 === d.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        d && !1 === d.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", l);
    }
    function l() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(m, this);
    }
    function m(d) {
      d.end();
    }
    Object.defineProperty(s.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function() {
        return this._writableState.highWaterMark;
      }
    }),
      Object.defineProperty(s.prototype, "destroyed", {
        get: function() {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            (this._readableState.destroyed && this._writableState.destroyed)
          );
        },
        set: function(d) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = d),
            (this._writableState.destroyed = d));
        }
      }),
      (s.prototype._destroy = function(d, u) {
        this.push(null), this.end(), n.nextTick(u, d);
      });
  },
  function(d, u, e) {
    "use strict";
    var n = e(44),
      t =
        Object.keys ||
        function(d) {
          var u = [];
          for (var e in d) u.push(e);
          return u;
        };
    d.exports = s;
    var a = e(31);
    a.inherits = e(7);
    var r = e(116),
      f = e(119);
    a.inherits(s, r);
    for (var c = t(f.prototype), i = 0; i < c.length; i++) {
      var o = c[i];
      s.prototype[o] || (s.prototype[o] = f.prototype[o]);
    }
    function s(d) {
      if (!(this instanceof s)) return new s(d);
      r.call(this, d),
        f.call(this, d),
        d && !1 === d.readable && (this.readable = !1),
        d && !1 === d.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        d && !1 === d.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", l);
    }
    function l() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(m, this);
    }
    function m(d) {
      d.end();
    }
    Object.defineProperty(s.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function() {
        return this._writableState.highWaterMark;
      }
    }),
      Object.defineProperty(s.prototype, "destroyed", {
        get: function() {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            (this._readableState.destroyed && this._writableState.destroyed)
          );
        },
        set: function(d) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = d),
            (this._writableState.destroyed = d));
        }
      }),
      (s.prototype._destroy = function(d, u) {
        this.push(null), this.end(), n.nextTick(u, d);
      });
  },
  function(d, u, e) {
    var n = e(125)("wks"),
      t = e(127),
      a = e(9).Symbol,
      r = "function" == typeof a;
    (d.exports = function(d) {
      return n[d] || (n[d] = (r && a[d]) || (r ? a : t)("Symbol." + d));
    }).store = n;
  },
  function(d, u, e) {
    const { DateTime: n } = e(263);
    d.exports = (d, u) => ({
      local: () => {
        const e = d ? n.fromISO(d) : n.local();
        return u ? e.setZone(u) : e;
      },
      fromISO: (d, e) => {
        const t = n.fromISO(d, e);
        return u ? t.setZone(u) : t;
      }
    });
  },
  function(d, u, e) {
    var n = e(136)("wks"),
      t = e(138),
      a = e(12).Symbol,
      r = "function" == typeof a;
    (d.exports = function(d) {
      return n[d] || (n[d] = (r && a[d]) || (r ? a : t)("Symbol." + d));
    }).store = n;
  },
  function(d, u, e) {
    var n = e(146)("wks"),
      t = e(148),
      a = e(15).Symbol,
      r = "function" == typeof a;
    (d.exports = function(d) {
      return n[d] || (n[d] = (r && a[d]) || (r ? a : t)("Symbol." + d));
    }).store = n;
  },
  function(d, u, e) {
    var n = e(157)("wks"),
      t = e(159),
      a = e(18).Symbol,
      r = "function" == typeof a;
    (d.exports = function(d) {
      return n[d] || (n[d] = (r && a[d]) || (r ? a : t)("Symbol." + d));
    }).store = n;
  },
  function(d, u, e) {
    (function(d) {
      function e(d) {
        return Object.prototype.toString.call(d);
      }
      (u.isArray = function(d) {
        return Array.isArray ? Array.isArray(d) : "[object Array]" === e(d);
      }),
        (u.isBoolean = function(d) {
          return "boolean" == typeof d;
        }),
        (u.isNull = function(d) {
          return null === d;
        }),
        (u.isNullOrUndefined = function(d) {
          return null == d;
        }),
        (u.isNumber = function(d) {
          return "number" == typeof d;
        }),
        (u.isString = function(d) {
          return "string" == typeof d;
        }),
        (u.isSymbol = function(d) {
          return "symbol" == typeof d;
        }),
        (u.isUndefined = function(d) {
          return void 0 === d;
        }),
        (u.isRegExp = function(d) {
          return "[object RegExp]" === e(d);
        }),
        (u.isObject = function(d) {
          return "object" == typeof d && null !== d;
        }),
        (u.isDate = function(d) {
          return "[object Date]" === e(d);
        }),
        (u.isError = function(d) {
          return "[object Error]" === e(d) || d instanceof Error;
        }),
        (u.isFunction = function(d) {
          return "function" == typeof d;
        }),
        (u.isPrimitive = function(d) {
          return (
            null === d ||
            "boolean" == typeof d ||
            "number" == typeof d ||
            "string" == typeof d ||
            "symbol" == typeof d ||
            void 0 === d
          );
        }),
        (u.isBuffer = d.isBuffer);
    }.call(this, e(3).Buffer));
  },
  function(d, u, e) {
    (function(d) {
      function e(d) {
        return Object.prototype.toString.call(d);
      }
      (u.isArray = function(d) {
        return Array.isArray ? Array.isArray(d) : "[object Array]" === e(d);
      }),
        (u.isBoolean = function(d) {
          return "boolean" == typeof d;
        }),
        (u.isNull = function(d) {
          return null === d;
        }),
        (u.isNullOrUndefined = function(d) {
          return null == d;
        }),
        (u.isNumber = function(d) {
          return "number" == typeof d;
        }),
        (u.isString = function(d) {
          return "string" == typeof d;
        }),
        (u.isSymbol = function(d) {
          return "symbol" == typeof d;
        }),
        (u.isUndefined = function(d) {
          return void 0 === d;
        }),
        (u.isRegExp = function(d) {
          return "[object RegExp]" === e(d);
        }),
        (u.isObject = function(d) {
          return "object" == typeof d && null !== d;
        }),
        (u.isDate = function(d) {
          return "[object Date]" === e(d);
        }),
        (u.isError = function(d) {
          return "[object Error]" === e(d) || d instanceof Error;
        }),
        (u.isFunction = function(d) {
          return "function" == typeof d;
        }),
        (u.isPrimitive = function(d) {
          return (
            null === d ||
            "boolean" == typeof d ||
            "number" == typeof d ||
            "string" == typeof d ||
            "symbol" == typeof d ||
            void 0 === d
          );
        }),
        (u.isBuffer = d.isBuffer);
    }.call(this, e(3).Buffer));
  },
  function(d, u, e) {
    (function(d) {
      function e(d) {
        return Object.prototype.toString.call(d);
      }
      (u.isArray = function(d) {
        return Array.isArray ? Array.isArray(d) : "[object Array]" === e(d);
      }),
        (u.isBoolean = function(d) {
          return "boolean" == typeof d;
        }),
        (u.isNull = function(d) {
          return null === d;
        }),
        (u.isNullOrUndefined = function(d) {
          return null == d;
        }),
        (u.isNumber = function(d) {
          return "number" == typeof d;
        }),
        (u.isString = function(d) {
          return "string" == typeof d;
        }),
        (u.isSymbol = function(d) {
          return "symbol" == typeof d;
        }),
        (u.isUndefined = function(d) {
          return void 0 === d;
        }),
        (u.isRegExp = function(d) {
          return "[object RegExp]" === e(d);
        }),
        (u.isObject = function(d) {
          return "object" == typeof d && null !== d;
        }),
        (u.isDate = function(d) {
          return "[object Date]" === e(d);
        }),
        (u.isError = function(d) {
          return "[object Error]" === e(d) || d instanceof Error;
        }),
        (u.isFunction = function(d) {
          return "function" == typeof d;
        }),
        (u.isPrimitive = function(d) {
          return (
            null === d ||
            "boolean" == typeof d ||
            "number" == typeof d ||
            "string" == typeof d ||
            "symbol" == typeof d ||
            void 0 === d
          );
        }),
        (u.isBuffer = d.isBuffer);
    }.call(this, e(3).Buffer));
  },
  function(d, u, e) {
    const n = e(121).TYPES,
      t = {
        COMPLETE_TASK: "COMPLETE_TASK",
        INCOMPLETE_TASK: "INCOMPLETE_TASK",
        COMMENT: "COMMENT",
        PADDING: "PADDING"
      },
      a = new Map([
        [n.TITLE_COMPLETE, t.COMPLETE_TASK],
        [n.TITLE_INCOMPLETE, t.INCOMPLETE_TASK],
        [n.COMMENT, t.COMMENT]
      ]),
      r = new Map([
        [t.COMPLETE_TASK, "- [X]"],
        [t.INCOMPLETE_TASK, "- [ ]"],
        [t.COMMENT, "#"],
        [t.PADDING, ""]
      ]),
      f = {
        TYPES: t,
        isComplete: d => d.type === t.COMPLETE_TASK,
        isPadding: d => d.type === t.PADDING,
        appendLine: (d, u) => {
          const e = d.text ? "\n" : "";
          d.text = `${d.text}${e}${u.text}`;
        },
        splitByPadding: d => {
          if ("" === d.text) return [d];
          const u = d.text && d.text.match(/(\s+)?$/);
          if (!u) throw new Error(`Cannot splitByPadding the value: ${d.text}`);
          const [, e] = u,
            n = { type: d.type, text: d.text.trim() },
            a = e ? { type: t.PADDING, text: e.replace(/ /g, "") } : null;
          return a ? [n, a] : [n];
        },
        toString: d => {
          const u = r.get(d.type) || "",
            e = d.text.replace("{{type}}", u);
          return Object.entries(d)
            .reduce((d, [u, e]) => {
              if (["type", "text"].includes(u)) return d;
              const n = `{{${u}}}`,
                t = e ? `@${u} ${e}` : "";
              return d.includes(n)
                ? d.replace(n, t)
                : d.includes("{{")
                ? `${d.trim()} ${t}`
                : `${d.trim()}\n    ${t}`;
            }, e)
            .trim();
        },
        fromLine: (d, { isFirstLine: u } = {}) => {
          if (a.has(d.type)) return { type: a.get(d.type) || "", text: d.text };
          if (u) {
            return { type: d.text ? t.COMMENT : t.PADDING, text: d.text };
          }
          return null;
        }
      };
    d.exports = f;
  },
  function(d, u, e) {
    var n = e(9),
      t = e(10),
      a = e(211),
      r = e(34),
      f = e(47),
      c = function(d, u, e) {
        var i,
          o,
          s,
          l = d & c.F,
          m = d & c.G,
          p = d & c.S,
          h = d & c.P,
          b = d & c.B,
          y = d & c.W,
          g = m ? t : t[u] || (t[u] = {}),
          _ = g.prototype,
          v = m ? n : p ? n[u] : (n[u] || {}).prototype;
        for (i in (m && (e = u), e))
          ((o = !l && v && void 0 !== v[i]) && f(g, i)) ||
            ((s = o ? v[i] : e[i]),
            (g[i] =
              m && "function" != typeof v[i]
                ? e[i]
                : b && o
                ? a(s, n)
                : y && v[i] == s
                ? (function(d) {
                    var u = function(u, e, n) {
                      if (this instanceof d) {
                        switch (arguments.length) {
                          case 0:
                            return new d();
                          case 1:
                            return new d(u);
                          case 2:
                            return new d(u, e);
                        }
                        return new d(u, e, n);
                      }
                      return d.apply(this, arguments);
                    };
                    return (u.prototype = d.prototype), u;
                  })(s)
                : h && "function" == typeof s
                ? a(Function.call, s)
                : s),
            h &&
              (((g.virtual || (g.virtual = {}))[i] = s),
              d & c.R && _ && !_[i] && r(_, i, s)));
      };
    (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (d.exports = c);
  },
  function(d, u, e) {
    var n = e(70),
      t = e(123);
    d.exports = e(46)
      ? function(d, u, e) {
          return n.f(d, u, t(1, e));
        }
      : function(d, u, e) {
          return (d[u] = e), d;
        };
  },
  function(d, u, e) {
    var n = e(12),
      t = e(13),
      a = e(270),
      r = e(36),
      f = e(52),
      c = function(d, u, e) {
        var i,
          o,
          s,
          l = d & c.F,
          m = d & c.G,
          p = d & c.S,
          h = d & c.P,
          b = d & c.B,
          y = d & c.W,
          g = m ? t : t[u] || (t[u] = {}),
          _ = g.prototype,
          v = m ? n : p ? n[u] : (n[u] || {}).prototype;
        for (i in (m && (e = u), e))
          ((o = !l && v && void 0 !== v[i]) && f(g, i)) ||
            ((s = o ? v[i] : e[i]),
            (g[i] =
              m && "function" != typeof v[i]
                ? e[i]
                : b && o
                ? a(s, n)
                : y && v[i] == s
                ? (function(d) {
                    var u = function(u, e, n) {
                      if (this instanceof d) {
                        switch (arguments.length) {
                          case 0:
                            return new d();
                          case 1:
                            return new d(u);
                          case 2:
                            return new d(u, e);
                        }
                        return new d(u, e, n);
                      }
                      return d.apply(this, arguments);
                    };
                    return (u.prototype = d.prototype), u;
                  })(s)
                : h && "function" == typeof s
                ? a(Function.call, s)
                : s),
            h &&
              (((g.virtual || (g.virtual = {}))[i] = s),
              d & c.R && _ && !_[i] && r(_, i, s)));
      };
    (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (d.exports = c);
  },
  function(d, u, e) {
    var n = e(78),
      t = e(134);
    d.exports = e(51)
      ? function(d, u, e) {
          return n.f(d, u, t(1, e));
        }
      : function(d, u, e) {
          return (d[u] = e), d;
        };
  },
  function(d, u, e) {
    var n = e(15),
      t = e(16),
      a = e(327),
      r = e(38),
      f = e(57),
      c = function(d, u, e) {
        var i,
          o,
          s,
          l = d & c.F,
          m = d & c.G,
          p = d & c.S,
          h = d & c.P,
          b = d & c.B,
          y = d & c.W,
          g = m ? t : t[u] || (t[u] = {}),
          _ = g.prototype,
          v = m ? n : p ? n[u] : (n[u] || {}).prototype;
        for (i in (m && (e = u), e))
          ((o = !l && v && void 0 !== v[i]) && f(g, i)) ||
            ((s = o ? v[i] : e[i]),
            (g[i] =
              m && "function" != typeof v[i]
                ? e[i]
                : b && o
                ? a(s, n)
                : y && v[i] == s
                ? (function(d) {
                    var u = function(u, e, n) {
                      if (this instanceof d) {
                        switch (arguments.length) {
                          case 0:
                            return new d();
                          case 1:
                            return new d(u);
                          case 2:
                            return new d(u, e);
                        }
                        return new d(u, e, n);
                      }
                      return d.apply(this, arguments);
                    };
                    return (u.prototype = d.prototype), u;
                  })(s)
                : h && "function" == typeof s
                ? a(Function.call, s)
                : s),
            h &&
              (((g.virtual || (g.virtual = {}))[i] = s),
              d & c.R && _ && !_[i] && r(_, i, s)));
      };
    (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (d.exports = c);
  },
  function(d, u, e) {
    var n = e(86),
      t = e(144);
    d.exports = e(56)
      ? function(d, u, e) {
          return n.f(d, u, t(1, e));
        }
      : function(d, u, e) {
          return (d[u] = e), d;
        };
  },
  function(d, u, e) {
    var n = e(18),
      t = e(19),
      a = e(384),
      r = e(40),
      f = e(62),
      c = function(d, u, e) {
        var i,
          o,
          s,
          l = d & c.F,
          m = d & c.G,
          p = d & c.S,
          h = d & c.P,
          b = d & c.B,
          y = d & c.W,
          g = m ? t : t[u] || (t[u] = {}),
          _ = g.prototype,
          v = m ? n : p ? n[u] : (n[u] || {}).prototype;
        for (i in (m && (e = u), e))
          ((o = !l && v && void 0 !== v[i]) && f(g, i)) ||
            ((s = o ? v[i] : e[i]),
            (g[i] =
              m && "function" != typeof v[i]
                ? e[i]
                : b && o
                ? a(s, n)
                : y && v[i] == s
                ? (function(d) {
                    var u = function(u, e, n) {
                      if (this instanceof d) {
                        switch (arguments.length) {
                          case 0:
                            return new d();
                          case 1:
                            return new d(u);
                          case 2:
                            return new d(u, e);
                        }
                        return new d(u, e, n);
                      }
                      return d.apply(this, arguments);
                    };
                    return (u.prototype = d.prototype), u;
                  })(s)
                : h && "function" == typeof s
                ? a(Function.call, s)
                : s),
            h &&
              (((g.virtual || (g.virtual = {}))[i] = s),
              d & c.R && _ && !_[i] && r(_, i, s)));
      };
    (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (d.exports = c);
  },
  function(d, u, e) {
    var n = e(94),
      t = e(155);
    d.exports = e(61)
      ? function(d, u, e) {
          return n.f(d, u, t(1, e));
        }
      : function(d, u, e) {
          return (d[u] = e), d;
        };
  },
  function(d, u, e) {
    "use strict";
    (function(u) {
      !u.version ||
      0 === u.version.indexOf("v0.") ||
      (0 === u.version.indexOf("v1.") && 0 !== u.version.indexOf("v1.8."))
        ? (d.exports = {
            nextTick: function(d, e, n, t) {
              if ("function" != typeof d)
                throw new TypeError('"callback" argument must be a function');
              var a,
                r,
                f = arguments.length;
              switch (f) {
                case 0:
                case 1:
                  return u.nextTick(d);
                case 2:
                  return u.nextTick(function() {
                    d.call(null, e);
                  });
                case 3:
                  return u.nextTick(function() {
                    d.call(null, e, n);
                  });
                case 4:
                  return u.nextTick(function() {
                    d.call(null, e, n, t);
                  });
                default:
                  for (a = new Array(f - 1), r = 0; r < a.length; )
                    a[r++] = arguments[r];
                  return u.nextTick(function() {
                    d.apply(null, a);
                  });
              }
            }
          })
        : (d.exports = u);
    }.call(this, e(0)));
  },
  function(d, u, e) {
    var n = e(3),
      t = n.Buffer;
    function a(d, u) {
      for (var e in d) u[e] = d[e];
    }
    function r(d, u, e) {
      return t(d, u, e);
    }
    t.from && t.alloc && t.allocUnsafe && t.allocUnsafeSlow
      ? (d.exports = n)
      : (a(n, u), (u.Buffer = r)),
      a(t, r),
      (r.from = function(d, u, e) {
        if ("number" == typeof d)
          throw new TypeError("Argument must not be a number");
        return t(d, u, e);
      }),
      (r.alloc = function(d, u, e) {
        if ("number" != typeof d)
          throw new TypeError("Argument must be a number");
        var n = t(d);
        return (
          void 0 !== u
            ? "string" == typeof e
              ? n.fill(u, e)
              : n.fill(u)
            : n.fill(0),
          n
        );
      }),
      (r.allocUnsafe = function(d) {
        if ("number" != typeof d)
          throw new TypeError("Argument must be a number");
        return t(d);
      }),
      (r.allocUnsafeSlow = function(d) {
        if ("number" != typeof d)
          throw new TypeError("Argument must be a number");
        return n.SlowBuffer(d);
      });
  },
  function(d, u, e) {
    "use strict";
    (function(u) {
      !u.version ||
      0 === u.version.indexOf("v0.") ||
      (0 === u.version.indexOf("v1.") && 0 !== u.version.indexOf("v1.8."))
        ? (d.exports = {
            nextTick: function(d, e, n, t) {
              if ("function" != typeof d)
                throw new TypeError('"callback" argument must be a function');
              var a,
                r,
                f = arguments.length;
              switch (f) {
                case 0:
                case 1:
                  return u.nextTick(d);
                case 2:
                  return u.nextTick(function() {
                    d.call(null, e);
                  });
                case 3:
                  return u.nextTick(function() {
                    d.call(null, e, n);
                  });
                case 4:
                  return u.nextTick(function() {
                    d.call(null, e, n, t);
                  });
                default:
                  for (a = new Array(f - 1), r = 0; r < a.length; )
                    a[r++] = arguments[r];
                  return u.nextTick(function() {
                    d.apply(null, a);
                  });
              }
            }
          })
        : (d.exports = u);
    }.call(this, e(0)));
  },
  function(d, u, e) {
    "use strict";
    (function(u) {
      !u.version ||
      0 === u.version.indexOf("v0.") ||
      (0 === u.version.indexOf("v1.") && 0 !== u.version.indexOf("v1.8."))
        ? (d.exports = {
            nextTick: function(d, e, n, t) {
              if ("function" != typeof d)
                throw new TypeError('"callback" argument must be a function');
              var a,
                r,
                f = arguments.length;
              switch (f) {
                case 0:
                case 1:
                  return u.nextTick(d);
                case 2:
                  return u.nextTick(function() {
                    d.call(null, e);
                  });
                case 3:
                  return u.nextTick(function() {
                    d.call(null, e, n);
                  });
                case 4:
                  return u.nextTick(function() {
                    d.call(null, e, n, t);
                  });
                default:
                  for (a = new Array(f - 1), r = 0; r < a.length; )
                    a[r++] = arguments[r];
                  return u.nextTick(function() {
                    d.apply(null, a);
                  });
              }
            }
          })
        : (d.exports = u);
    }.call(this, e(0)));
  },
  function(d, u, e) {
    var n = e(71);
    d.exports = function(d) {
      if (!n(d)) throw TypeError(d + " is not an object!");
      return d;
    };
  },
  function(d, u, e) {
    d.exports = !e(72)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  },
  function(d, u) {
    var e = {}.hasOwnProperty;
    d.exports = function(d, u) {
      return e.call(d, u);
    };
  },
  function(d, u) {
    d.exports = function(d) {
      if (null == d) throw TypeError("Can't call method on  " + d);
      return d;
    };
  },
  function(d, u) {
    d.exports = {};
  },
  function(d, u, e) {
    var n = e(79);
    d.exports = function(d) {
      if (!n(d)) throw TypeError(d + " is not an object!");
      return d;
    };
  },
  function(d, u, e) {
    d.exports = !e(80)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  },
  function(d, u) {
    var e = {}.hasOwnProperty;
    d.exports = function(d, u) {
      return e.call(d, u);
    };
  },
  function(d, u) {
    d.exports = function(d) {
      if (null == d) throw TypeError("Can't call method on  " + d);
      return d;
    };
  },
  function(d, u) {
    d.exports = {};
  },
  function(d, u, e) {
    var n = e(87);
    d.exports = function(d) {
      if (!n(d)) throw TypeError(d + " is not an object!");
      return d;
    };
  },
  function(d, u, e) {
    d.exports = !e(88)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  },
  function(d, u) {
    var e = {}.hasOwnProperty;
    d.exports = function(d, u) {
      return e.call(d, u);
    };
  },
  function(d, u) {
    d.exports = function(d) {
      if (null == d) throw TypeError("Can't call method on  " + d);
      return d;
    };
  },
  function(d, u) {
    d.exports = {};
  },
  function(d, u, e) {
    var n = e(95);
    d.exports = function(d) {
      if (!n(d)) throw TypeError(d + " is not an object!");
      return d;
    };
  },
  function(d, u, e) {
    d.exports = !e(96)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  },
  function(d, u) {
    var e = {}.hasOwnProperty;
    d.exports = function(d, u) {
      return e.call(d, u);
    };
  },
  function(d, u) {
    d.exports = function(d) {
      if (null == d) throw TypeError("Can't call method on  " + d);
      return d;
    };
  },
  function(d, u) {
    d.exports = {};
  },
  function(d, u, e) {
    ((u = d.exports = e(102)).Stream = u),
      (u.Readable = u),
      (u.Writable = e(66)),
      (u.Duplex = e(5)),
      (u.Transform = e(106)),
      (u.PassThrough = e(172));
  },
  function(d, u, e) {
    "use strict";
    (function(u, n, t) {
      var a = e(41);
      function r(d) {
        var u = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function() {
            !(function(d, u, e) {
              var n = d.entry;
              d.entry = null;
              for (; n; ) {
                var t = n.callback;
                u.pendingcb--, t(e), (n = n.next);
              }
              u.corkedRequestsFree
                ? (u.corkedRequestsFree.next = d)
                : (u.corkedRequestsFree = d);
            })(u, d);
          });
      }
      d.exports = g;
      var f,
        c =
          !u.browser && ["v0.10", "v0.9."].indexOf(u.version.slice(0, 5)) > -1
            ? n
            : a.nextTick;
      g.WritableState = y;
      var i = e(29);
      i.inherits = e(20);
      var o = { deprecate: e(171) },
        s = e(104),
        l = e(42).Buffer,
        m = t.Uint8Array || function() {};
      var p,
        h = e(105);
      function b() {}
      function y(d, u) {
        (f = f || e(5)), (d = d || {});
        var n = u instanceof f;
        (this.objectMode = !!d.objectMode),
          n && (this.objectMode = this.objectMode || !!d.writableObjectMode);
        var t = d.highWaterMark,
          i = d.writableHighWaterMark,
          o = this.objectMode ? 16 : 16384;
        (this.highWaterMark = t || 0 === t ? t : n && (i || 0 === i) ? i : o),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === d.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = d.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function(d) {
            !(function(d, u) {
              var e = d._writableState,
                n = e.sync,
                t = e.writecb;
              if (
                ((function(d) {
                  (d.writing = !1),
                    (d.writecb = null),
                    (d.length -= d.writelen),
                    (d.writelen = 0);
                })(e),
                u)
              )
                !(function(d, u, e, n, t) {
                  --u.pendingcb,
                    e
                      ? (a.nextTick(t, n),
                        a.nextTick(x, d, u),
                        (d._writableState.errorEmitted = !0),
                        d.emit("error", n))
                      : (t(n),
                        (d._writableState.errorEmitted = !0),
                        d.emit("error", n),
                        x(d, u));
                })(d, e, n, u, t);
              else {
                var r = I(e);
                r ||
                  e.corked ||
                  e.bufferProcessing ||
                  !e.bufferedRequest ||
                  w(d, e),
                  n ? c(v, d, e, r, t) : v(d, e, r, t);
              }
            })(u, d);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new r(this));
      }
      function g(d) {
        if (((f = f || e(5)), !(p.call(g, this) || this instanceof f)))
          return new g(d);
        (this._writableState = new y(d, this)),
          (this.writable = !0),
          d &&
            ("function" == typeof d.write && (this._write = d.write),
            "function" == typeof d.writev && (this._writev = d.writev),
            "function" == typeof d.destroy && (this._destroy = d.destroy),
            "function" == typeof d.final && (this._final = d.final)),
          s.call(this);
      }
      function _(d, u, e, n, t, a, r) {
        (u.writelen = n),
          (u.writecb = r),
          (u.writing = !0),
          (u.sync = !0),
          e ? d._writev(t, u.onwrite) : d._write(t, a, u.onwrite),
          (u.sync = !1);
      }
      function v(d, u, e, n) {
        e ||
          (function(d, u) {
            0 === u.length &&
              u.needDrain &&
              ((u.needDrain = !1), d.emit("drain"));
          })(d, u),
          u.pendingcb--,
          n(),
          x(d, u);
      }
      function w(d, u) {
        u.bufferProcessing = !0;
        var e = u.bufferedRequest;
        if (d._writev && e && e.next) {
          var n = u.bufferedRequestCount,
            t = new Array(n),
            a = u.corkedRequestsFree;
          a.entry = e;
          for (var f = 0, c = !0; e; )
            (t[f] = e), e.isBuf || (c = !1), (e = e.next), (f += 1);
          (t.allBuffers = c),
            _(d, u, !0, u.length, t, "", a.finish),
            u.pendingcb++,
            (u.lastBufferedRequest = null),
            a.next
              ? ((u.corkedRequestsFree = a.next), (a.next = null))
              : (u.corkedRequestsFree = new r(u)),
            (u.bufferedRequestCount = 0);
        } else {
          for (; e; ) {
            var i = e.chunk,
              o = e.encoding,
              s = e.callback;
            if (
              (_(d, u, !1, u.objectMode ? 1 : i.length, i, o, s),
              (e = e.next),
              u.bufferedRequestCount--,
              u.writing)
            )
              break;
          }
          null === e && (u.lastBufferedRequest = null);
        }
        (u.bufferedRequest = e), (u.bufferProcessing = !1);
      }
      function I(d) {
        return (
          d.ending &&
          0 === d.length &&
          null === d.bufferedRequest &&
          !d.finished &&
          !d.writing
        );
      }
      function S(d, u) {
        d._final(function(e) {
          u.pendingcb--,
            e && d.emit("error", e),
            (u.prefinished = !0),
            d.emit("prefinish"),
            x(d, u);
        });
      }
      function x(d, u) {
        var e = I(u);
        return (
          e &&
            (!(function(d, u) {
              u.prefinished ||
                u.finalCalled ||
                ("function" == typeof d._final
                  ? (u.pendingcb++, (u.finalCalled = !0), a.nextTick(S, d, u))
                  : ((u.prefinished = !0), d.emit("prefinish")));
            })(d, u),
            0 === u.pendingcb && ((u.finished = !0), d.emit("finish"))),
          e
        );
      }
      i.inherits(g, s),
        (y.prototype.getBuffer = function() {
          for (var d = this.bufferedRequest, u = []; d; )
            u.push(d), (d = d.next);
          return u;
        }),
        (function() {
          try {
            Object.defineProperty(y.prototype, "buffer", {
              get: o.deprecate(
                function() {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              )
            });
          } catch (d) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((p = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(g, Symbol.hasInstance, {
              value: function(d) {
                return (
                  !!p.call(this, d) ||
                  (this === g && (d && d._writableState instanceof y))
                );
              }
            }))
          : (p = function(d) {
              return d instanceof this;
            }),
        (g.prototype.pipe = function() {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (g.prototype.write = function(d, u, e) {
          var n,
            t = this._writableState,
            r = !1,
            f = !t.objectMode && ((n = d), l.isBuffer(n) || n instanceof m);
          return (
            f &&
              !l.isBuffer(d) &&
              (d = (function(d) {
                return l.from(d);
              })(d)),
            "function" == typeof u && ((e = u), (u = null)),
            f ? (u = "buffer") : u || (u = t.defaultEncoding),
            "function" != typeof e && (e = b),
            t.ended
              ? (function(d, u) {
                  var e = new Error("write after end");
                  d.emit("error", e), a.nextTick(u, e);
                })(this, e)
              : (f ||
                  (function(d, u, e, n) {
                    var t = !0,
                      r = !1;
                    return (
                      null === e
                        ? (r = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof e ||
                          void 0 === e ||
                          u.objectMode ||
                          (r = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      r && (d.emit("error", r), a.nextTick(n, r), (t = !1)),
                      t
                    );
                  })(this, t, d, e)) &&
                (t.pendingcb++,
                (r = (function(d, u, e, n, t, a) {
                  if (!e) {
                    var r = (function(d, u, e) {
                      d.objectMode ||
                        !1 === d.decodeStrings ||
                        "string" != typeof u ||
                        (u = l.from(u, e));
                      return u;
                    })(u, n, t);
                    n !== r && ((e = !0), (t = "buffer"), (n = r));
                  }
                  var f = u.objectMode ? 1 : n.length;
                  u.length += f;
                  var c = u.length < u.highWaterMark;
                  c || (u.needDrain = !0);
                  if (u.writing || u.corked) {
                    var i = u.lastBufferedRequest;
                    (u.lastBufferedRequest = {
                      chunk: n,
                      encoding: t,
                      isBuf: e,
                      callback: a,
                      next: null
                    }),
                      i
                        ? (i.next = u.lastBufferedRequest)
                        : (u.bufferedRequest = u.lastBufferedRequest),
                      (u.bufferedRequestCount += 1);
                  } else _(d, u, !1, f, n, t, a);
                  return c;
                })(this, t, f, d, u, e))),
            r
          );
        }),
        (g.prototype.cork = function() {
          this._writableState.corked++;
        }),
        (g.prototype.uncork = function() {
          var d = this._writableState;
          d.corked &&
            (d.corked--,
            d.writing ||
              d.corked ||
              d.finished ||
              d.bufferProcessing ||
              !d.bufferedRequest ||
              w(this, d));
        }),
        (g.prototype.setDefaultEncoding = function(d) {
          if (
            ("string" == typeof d && (d = d.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw"
              ].indexOf((d + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + d);
          return (this._writableState.defaultEncoding = d), this;
        }),
        Object.defineProperty(g.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function() {
            return this._writableState.highWaterMark;
          }
        }),
        (g.prototype._write = function(d, u, e) {
          e(new Error("_write() is not implemented"));
        }),
        (g.prototype._writev = null),
        (g.prototype.end = function(d, u, e) {
          var n = this._writableState;
          "function" == typeof d
            ? ((e = d), (d = null), (u = null))
            : "function" == typeof u && ((e = u), (u = null)),
            null != d && this.write(d, u),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              n.finished ||
              (function(d, u, e) {
                (u.ending = !0),
                  x(d, u),
                  e && (u.finished ? a.nextTick(e) : d.once("finish", e));
                (u.ended = !0), (d.writable = !1);
              })(this, n, e);
        }),
        Object.defineProperty(g.prototype, "destroyed", {
          get: function() {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function(d) {
            this._writableState && (this._writableState.destroyed = d);
          }
        }),
        (g.prototype.destroy = h.destroy),
        (g.prototype._undestroy = h.undestroy),
        (g.prototype._destroy = function(d, u) {
          this.end(), u(d);
        });
    }.call(this, e(0), e(67).setImmediate, e(1)));
  },
  function(d, u, e) {
    (function(d) {
      var n =
          (void 0 !== d && d) || ("undefined" != typeof self && self) || window,
        t = Function.prototype.apply;
      function a(d, u) {
        (this._id = d), (this._clearFn = u);
      }
      (u.setTimeout = function() {
        return new a(t.call(setTimeout, n, arguments), clearTimeout);
      }),
        (u.setInterval = function() {
          return new a(t.call(setInterval, n, arguments), clearInterval);
        }),
        (u.clearTimeout = u.clearInterval = function(d) {
          d && d.close();
        }),
        (a.prototype.unref = a.prototype.ref = function() {}),
        (a.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }),
        (u.enroll = function(d, u) {
          clearTimeout(d._idleTimeoutId), (d._idleTimeout = u);
        }),
        (u.unenroll = function(d) {
          clearTimeout(d._idleTimeoutId), (d._idleTimeout = -1);
        }),
        (u._unrefActive = u.active = function(d) {
          clearTimeout(d._idleTimeoutId);
          var u = d._idleTimeout;
          u >= 0 &&
            (d._idleTimeoutId = setTimeout(function() {
              d._onTimeout && d._onTimeout();
            }, u));
        }),
        e(170),
        (u.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== d && d.setImmediate) ||
          (this && this.setImmediate)),
        (u.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== d && d.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, e(1)));
  },
  function(d, u, e) {
    var n = e(3),
      t = n.Buffer;
    function a(d, u) {
      for (var e in d) u[e] = d[e];
    }
    function r(d, u, e) {
      return t(d, u, e);
    }
    t.from && t.alloc && t.allocUnsafe && t.allocUnsafeSlow
      ? (d.exports = n)
      : (a(n, u), (u.Buffer = r)),
      a(t, r),
      (r.from = function(d, u, e) {
        if ("number" == typeof d)
          throw new TypeError("Argument must not be a number");
        return t(d, u, e);
      }),
      (r.alloc = function(d, u, e) {
        if ("number" != typeof d)
          throw new TypeError("Argument must be a number");
        var n = t(d);
        return (
          void 0 !== u
            ? "string" == typeof e
              ? n.fill(u, e)
              : n.fill(u)
            : n.fill(0),
          n
        );
      }),
      (r.allocUnsafe = function(d) {
        if ("number" != typeof d)
          throw new TypeError("Argument must be a number");
        return t(d);
      }),
      (r.allocUnsafeSlow = function(d) {
        if ("number" != typeof d)
          throw new TypeError("Argument must be a number");
        return n.SlowBuffer(d);
      });
  },
  function(d, u, e) {
    var n = e(3),
      t = n.Buffer;
    function a(d, u) {
      for (var e in d) u[e] = d[e];
    }
    function r(d, u, e) {
      return t(d, u, e);
    }
    t.from && t.alloc && t.allocUnsafe && t.allocUnsafeSlow
      ? (d.exports = n)
      : (a(n, u), (u.Buffer = r)),
      a(t, r),
      (r.from = function(d, u, e) {
        if ("number" == typeof d)
          throw new TypeError("Argument must not be a number");
        return t(d, u, e);
      }),
      (r.alloc = function(d, u, e) {
        if ("number" != typeof d)
          throw new TypeError("Argument must be a number");
        var n = t(d);
        return (
          void 0 !== u
            ? "string" == typeof e
              ? n.fill(u, e)
              : n.fill(u)
            : n.fill(0),
          n
        );
      }),
      (r.allocUnsafe = function(d) {
        if ("number" != typeof d)
          throw new TypeError("Argument must be a number");
        return t(d);
      }),
      (r.allocUnsafeSlow = function(d) {
        if ("number" != typeof d)
          throw new TypeError("Argument must be a number");
        return n.SlowBuffer(d);
      });
  },
  function(d, u, e) {
    var n = e(45),
      t = e(213),
      a = e(214),
      r = Object.defineProperty;
    u.f = e(46)
      ? Object.defineProperty
      : function(d, u, e) {
          if ((n(d), (u = a(u, !0)), n(e), t))
            try {
              return r(d, u, e);
            } catch (d) {}
          if ("get" in e || "set" in e)
            throw TypeError("Accessors not supported!");
          return "value" in e && (d[u] = e.value), d;
        };
  },
  function(d, u) {
    d.exports = function(d) {
      return "object" == typeof d ? null !== d : "function" == typeof d;
    };
  },
  function(d, u) {
    d.exports = function(d) {
      try {
        return !!d();
      } catch (d) {
        return !0;
      }
    };
  },
  function(d, u, e) {
    var n = e(218),
      t = e(48);
    d.exports = function(d) {
      return n(t(d));
    };
  },
  function(d, u) {
    var e = {}.toString;
    d.exports = function(d) {
      return e.call(d).slice(8, -1);
    };
  },
  function(d, u) {
    var e = Math.ceil,
      n = Math.floor;
    d.exports = function(d) {
      return isNaN((d = +d)) ? 0 : (d > 0 ? n : e)(d);
    };
  },
  function(d, u, e) {
    var n = e(125)("keys"),
      t = e(127);
    d.exports = function(d) {
      return n[d] || (n[d] = t(d));
    };
  },
  function(d, u, e) {
    d.exports = e(230);
  },
  function(d, u, e) {
    var n = e(50),
      t = e(272),
      a = e(273),
      r = Object.defineProperty;
    u.f = e(51)
      ? Object.defineProperty
      : function(d, u, e) {
          if ((n(d), (u = a(u, !0)), n(e), t))
            try {
              return r(d, u, e);
            } catch (d) {}
          if ("get" in e || "set" in e)
            throw TypeError("Accessors not supported!");
          return "value" in e && (d[u] = e.value), d;
        };
  },
  function(d, u) {
    d.exports = function(d) {
      return "object" == typeof d ? null !== d : "function" == typeof d;
    };
  },
  function(d, u) {
    d.exports = function(d) {
      try {
        return !!d();
      } catch (d) {
        return !0;
      }
    };
  },
  function(d, u, e) {
    var n = e(277),
      t = e(53);
    d.exports = function(d) {
      return n(t(d));
    };
  },
  function(d, u) {
    var e = {}.toString;
    d.exports = function(d) {
      return e.call(d).slice(8, -1);
    };
  },
  function(d, u) {
    var e = Math.ceil,
      n = Math.floor;
    d.exports = function(d) {
      return isNaN((d = +d)) ? 0 : (d > 0 ? n : e)(d);
    };
  },
  function(d, u, e) {
    var n = e(136)("keys"),
      t = e(138);
    d.exports = function(d) {
      return n[d] || (n[d] = t(d));
    };
  },
  function(d, u, e) {
    d.exports = e(289);
  },
  function(d, u, e) {
    var n = e(55),
      t = e(329),
      a = e(330),
      r = Object.defineProperty;
    u.f = e(56)
      ? Object.defineProperty
      : function(d, u, e) {
          if ((n(d), (u = a(u, !0)), n(e), t))
            try {
              return r(d, u, e);
            } catch (d) {}
          if ("get" in e || "set" in e)
            throw TypeError("Accessors not supported!");
          return "value" in e && (d[u] = e.value), d;
        };
  },
  function(d, u) {
    d.exports = function(d) {
      return "object" == typeof d ? null !== d : "function" == typeof d;
    };
  },
  function(d, u) {
    d.exports = function(d) {
      try {
        return !!d();
      } catch (d) {
        return !0;
      }
    };
  },
  function(d, u, e) {
    var n = e(334),
      t = e(58);
    d.exports = function(d) {
      return n(t(d));
    };
  },
  function(d, u) {
    var e = {}.toString;
    d.exports = function(d) {
      return e.call(d).slice(8, -1);
    };
  },
  function(d, u) {
    var e = Math.ceil,
      n = Math.floor;
    d.exports = function(d) {
      return isNaN((d = +d)) ? 0 : (d > 0 ? n : e)(d);
    };
  },
  function(d, u, e) {
    var n = e(146)("keys"),
      t = e(148);
    d.exports = function(d) {
      return n[d] || (n[d] = t(d));
    };
  },
  function(d, u, e) {
    d.exports = e(346);
  },
  function(d, u, e) {
    var n = e(60),
      t = e(386),
      a = e(387),
      r = Object.defineProperty;
    u.f = e(61)
      ? Object.defineProperty
      : function(d, u, e) {
          if ((n(d), (u = a(u, !0)), n(e), t))
            try {
              return r(d, u, e);
            } catch (d) {}
          if ("get" in e || "set" in e)
            throw TypeError("Accessors not supported!");
          return "value" in e && (d[u] = e.value), d;
        };
  },
  function(d, u) {
    d.exports = function(d) {
      return "object" == typeof d ? null !== d : "function" == typeof d;
    };
  },
  function(d, u) {
    d.exports = function(d) {
      try {
        return !!d();
      } catch (d) {
        return !0;
      }
    };
  },
  function(d, u, e) {
    var n = e(391),
      t = e(63);
    d.exports = function(d) {
      return n(t(d));
    };
  },
  function(d, u) {
    var e = {}.toString;
    d.exports = function(d) {
      return e.call(d).slice(8, -1);
    };
  },
  function(d, u) {
    var e = Math.ceil,
      n = Math.floor;
    d.exports = function(d) {
      return isNaN((d = +d)) ? 0 : (d > 0 ? n : e)(d);
    };
  },
  function(d, u, e) {
    var n = e(157)("keys"),
      t = e(159);
    d.exports = function(d) {
      return n[d] || (n[d] = t(d));
    };
  },
  function(d, u, e) {
    d.exports = e(403);
  },
  function(d, u, e) {
    "use strict";
    (function(u, n) {
      var t = e(41);
      d.exports = _;
      var a,
        r = e(103);
      _.ReadableState = g;
      e(4).EventEmitter;
      var f = function(d, u) {
          return d.listeners(u).length;
        },
        c = e(104),
        i = e(42).Buffer,
        o = u.Uint8Array || function() {};
      var s = e(29);
      s.inherits = e(20);
      var l = e(167),
        m = void 0;
      m = l && l.debuglog ? l.debuglog("stream") : function() {};
      var p,
        h = e(168),
        b = e(105);
      s.inherits(_, c);
      var y = ["error", "close", "destroy", "pause", "resume"];
      function g(d, u) {
        d = d || {};
        var n = u instanceof (a = a || e(5));
        (this.objectMode = !!d.objectMode),
          n && (this.objectMode = this.objectMode || !!d.readableObjectMode);
        var t = d.highWaterMark,
          r = d.readableHighWaterMark,
          f = this.objectMode ? 16 : 16384;
        (this.highWaterMark = t || 0 === t ? t : n && (r || 0 === r) ? r : f),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new h()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = d.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          d.encoding &&
            (p || (p = e(21).StringDecoder),
            (this.decoder = new p(d.encoding)),
            (this.encoding = d.encoding));
      }
      function _(d) {
        if (((a = a || e(5)), !(this instanceof _))) return new _(d);
        (this._readableState = new g(d, this)),
          (this.readable = !0),
          d &&
            ("function" == typeof d.read && (this._read = d.read),
            "function" == typeof d.destroy && (this._destroy = d.destroy)),
          c.call(this);
      }
      function v(d, u, e, n, t) {
        var a,
          r = d._readableState;
        null === u
          ? ((r.reading = !1),
            (function(d, u) {
              if (u.ended) return;
              if (u.decoder) {
                var e = u.decoder.end();
                e &&
                  e.length &&
                  (u.buffer.push(e), (u.length += u.objectMode ? 1 : e.length));
              }
              (u.ended = !0), x(d);
            })(d, r))
          : (t ||
              (a = (function(d, u) {
                var e;
                (n = u),
                  i.isBuffer(n) ||
                    n instanceof o ||
                    "string" == typeof u ||
                    void 0 === u ||
                    d.objectMode ||
                    (e = new TypeError("Invalid non-string/buffer chunk"));
                var n;
                return e;
              })(r, u)),
            a
              ? d.emit("error", a)
              : r.objectMode || (u && u.length > 0)
              ? ("string" == typeof u ||
                  r.objectMode ||
                  Object.getPrototypeOf(u) === i.prototype ||
                  (u = (function(d) {
                    return i.from(d);
                  })(u)),
                n
                  ? r.endEmitted
                    ? d.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : w(d, r, u, !0)
                  : r.ended
                  ? d.emit("error", new Error("stream.push() after EOF"))
                  : ((r.reading = !1),
                    r.decoder && !e
                      ? ((u = r.decoder.write(u)),
                        r.objectMode || 0 !== u.length
                          ? w(d, r, u, !1)
                          : E(d, r))
                      : w(d, r, u, !1)))
              : n || (r.reading = !1));
        return (function(d) {
          return (
            !d.ended &&
            (d.needReadable || d.length < d.highWaterMark || 0 === d.length)
          );
        })(r);
      }
      function w(d, u, e, n) {
        u.flowing && 0 === u.length && !u.sync
          ? (d.emit("data", e), d.read(0))
          : ((u.length += u.objectMode ? 1 : e.length),
            n ? u.buffer.unshift(e) : u.buffer.push(e),
            u.needReadable && x(d)),
          E(d, u);
      }
      Object.defineProperty(_.prototype, "destroyed", {
        get: function() {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function(d) {
          this._readableState && (this._readableState.destroyed = d);
        }
      }),
        (_.prototype.destroy = b.destroy),
        (_.prototype._undestroy = b.undestroy),
        (_.prototype._destroy = function(d, u) {
          this.push(null), u(d);
        }),
        (_.prototype.push = function(d, u) {
          var e,
            n = this._readableState;
          return (
            n.objectMode
              ? (e = !0)
              : "string" == typeof d &&
                ((u = u || n.defaultEncoding) !== n.encoding &&
                  ((d = i.from(d, u)), (u = "")),
                (e = !0)),
            v(this, d, u, !1, e)
          );
        }),
        (_.prototype.unshift = function(d) {
          return v(this, d, null, !0, !1);
        }),
        (_.prototype.isPaused = function() {
          return !1 === this._readableState.flowing;
        }),
        (_.prototype.setEncoding = function(d) {
          return (
            p || (p = e(21).StringDecoder),
            (this._readableState.decoder = new p(d)),
            (this._readableState.encoding = d),
            this
          );
        });
      var I = 8388608;
      function S(d, u) {
        return d <= 0 || (0 === u.length && u.ended)
          ? 0
          : u.objectMode
          ? 1
          : d != d
          ? u.flowing && u.length
            ? u.buffer.head.data.length
            : u.length
          : (d > u.highWaterMark &&
              (u.highWaterMark = (function(d) {
                return (
                  d >= I
                    ? (d = I)
                    : (d--,
                      (d |= d >>> 1),
                      (d |= d >>> 2),
                      (d |= d >>> 4),
                      (d |= d >>> 8),
                      (d |= d >>> 16),
                      d++),
                  d
                );
              })(d)),
            d <= u.length
              ? d
              : u.ended
              ? u.length
              : ((u.needReadable = !0), 0));
      }
      function x(d) {
        var u = d._readableState;
        (u.needReadable = !1),
          u.emittedReadable ||
            (m("emitReadable", u.flowing),
            (u.emittedReadable = !0),
            u.sync ? t.nextTick(k, d) : k(d));
      }
      function k(d) {
        m("emit readable"), d.emit("readable"), C(d);
      }
      function E(d, u) {
        u.readingMore || ((u.readingMore = !0), t.nextTick(M, d, u));
      }
      function M(d, u) {
        for (
          var e = u.length;
          !u.reading &&
          !u.flowing &&
          !u.ended &&
          u.length < u.highWaterMark &&
          (m("maybeReadMore read 0"), d.read(0), e !== u.length);

        )
          e = u.length;
        u.readingMore = !1;
      }
      function T(d) {
        m("readable nexttick read 0"), d.read(0);
      }
      function O(d, u) {
        u.reading || (m("resume read 0"), d.read(0)),
          (u.resumeScheduled = !1),
          (u.awaitDrain = 0),
          d.emit("resume"),
          C(d),
          u.flowing && !u.reading && d.read(0);
      }
      function C(d) {
        var u = d._readableState;
        for (m("flow", u.flowing); u.flowing && null !== d.read(); );
      }
      function A(d, u) {
        return 0 === u.length
          ? null
          : (u.objectMode
              ? (e = u.buffer.shift())
              : !d || d >= u.length
              ? ((e = u.decoder
                  ? u.buffer.join("")
                  : 1 === u.buffer.length
                  ? u.buffer.head.data
                  : u.buffer.concat(u.length)),
                u.buffer.clear())
              : (e = (function(d, u, e) {
                  var n;
                  d < u.head.data.length
                    ? ((n = u.head.data.slice(0, d)),
                      (u.head.data = u.head.data.slice(d)))
                    : (n =
                        d === u.head.data.length
                          ? u.shift()
                          : e
                          ? (function(d, u) {
                              var e = u.head,
                                n = 1,
                                t = e.data;
                              d -= t.length;
                              for (; (e = e.next); ) {
                                var a = e.data,
                                  r = d > a.length ? a.length : d;
                                if (
                                  (r === a.length
                                    ? (t += a)
                                    : (t += a.slice(0, d)),
                                  0 === (d -= r))
                                ) {
                                  r === a.length
                                    ? (++n,
                                      e.next
                                        ? (u.head = e.next)
                                        : (u.head = u.tail = null))
                                    : ((u.head = e), (e.data = a.slice(r)));
                                  break;
                                }
                                ++n;
                              }
                              return (u.length -= n), t;
                            })(d, u)
                          : (function(d, u) {
                              var e = i.allocUnsafe(d),
                                n = u.head,
                                t = 1;
                              n.data.copy(e), (d -= n.data.length);
                              for (; (n = n.next); ) {
                                var a = n.data,
                                  r = d > a.length ? a.length : d;
                                if (
                                  (a.copy(e, e.length - d, 0, r),
                                  0 === (d -= r))
                                ) {
                                  r === a.length
                                    ? (++t,
                                      n.next
                                        ? (u.head = n.next)
                                        : (u.head = u.tail = null))
                                    : ((u.head = n), (n.data = a.slice(r)));
                                  break;
                                }
                                ++t;
                              }
                              return (u.length -= t), e;
                            })(d, u));
                  return n;
                })(d, u.buffer, u.decoder)),
            e);
        var e;
      }
      function L(d) {
        var u = d._readableState;
        if (u.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        u.endEmitted || ((u.ended = !0), t.nextTick(P, u, d));
      }
      function P(d, u) {
        d.endEmitted ||
          0 !== d.length ||
          ((d.endEmitted = !0), (u.readable = !1), u.emit("end"));
      }
      function N(d, u) {
        for (var e = 0, n = d.length; e < n; e++) if (d[e] === u) return e;
        return -1;
      }
      (_.prototype.read = function(d) {
        m("read", d), (d = parseInt(d, 10));
        var u = this._readableState,
          e = d;
        if (
          (0 !== d && (u.emittedReadable = !1),
          0 === d && u.needReadable && (u.length >= u.highWaterMark || u.ended))
        )
          return (
            m("read: emitReadable", u.length, u.ended),
            0 === u.length && u.ended ? L(this) : x(this),
            null
          );
        if (0 === (d = S(d, u)) && u.ended)
          return 0 === u.length && L(this), null;
        var n,
          t = u.needReadable;
        return (
          m("need readable", t),
          (0 === u.length || u.length - d < u.highWaterMark) &&
            m("length less than watermark", (t = !0)),
          u.ended || u.reading
            ? m("reading or ended", (t = !1))
            : t &&
              (m("do read"),
              (u.reading = !0),
              (u.sync = !0),
              0 === u.length && (u.needReadable = !0),
              this._read(u.highWaterMark),
              (u.sync = !1),
              u.reading || (d = S(e, u))),
          null === (n = d > 0 ? A(d, u) : null)
            ? ((u.needReadable = !0), (d = 0))
            : (u.length -= d),
          0 === u.length &&
            (u.ended || (u.needReadable = !0), e !== d && u.ended && L(this)),
          null !== n && this.emit("data", n),
          n
        );
      }),
        (_.prototype._read = function(d) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (_.prototype.pipe = function(d, u) {
          var e = this,
            a = this._readableState;
          switch (a.pipesCount) {
            case 0:
              a.pipes = d;
              break;
            case 1:
              a.pipes = [a.pipes, d];
              break;
            default:
              a.pipes.push(d);
          }
          (a.pipesCount += 1), m("pipe count=%d opts=%j", a.pipesCount, u);
          var c =
            (!u || !1 !== u.end) && d !== n.stdout && d !== n.stderr ? o : _;
          function i(u, n) {
            m("onunpipe"),
              u === e &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                m("cleanup"),
                d.removeListener("close", y),
                d.removeListener("finish", g),
                d.removeListener("drain", s),
                d.removeListener("error", b),
                d.removeListener("unpipe", i),
                e.removeListener("end", o),
                e.removeListener("end", _),
                e.removeListener("data", h),
                (l = !0),
                !a.awaitDrain ||
                  (d._writableState && !d._writableState.needDrain) ||
                  s());
          }
          function o() {
            m("onend"), d.end();
          }
          a.endEmitted ? t.nextTick(c) : e.once("end", c), d.on("unpipe", i);
          var s = (function(d) {
            return function() {
              var u = d._readableState;
              m("pipeOnDrain", u.awaitDrain),
                u.awaitDrain && u.awaitDrain--,
                0 === u.awaitDrain && f(d, "data") && ((u.flowing = !0), C(d));
            };
          })(e);
          d.on("drain", s);
          var l = !1;
          var p = !1;
          function h(u) {
            m("ondata"),
              (p = !1),
              !1 !== d.write(u) ||
                p ||
                (((1 === a.pipesCount && a.pipes === d) ||
                  (a.pipesCount > 1 && -1 !== N(a.pipes, d))) &&
                  !l &&
                  (m(
                    "false write response, pause",
                    e._readableState.awaitDrain
                  ),
                  e._readableState.awaitDrain++,
                  (p = !0)),
                e.pause());
          }
          function b(u) {
            m("onerror", u),
              _(),
              d.removeListener("error", b),
              0 === f(d, "error") && d.emit("error", u);
          }
          function y() {
            d.removeListener("finish", g), _();
          }
          function g() {
            m("onfinish"), d.removeListener("close", y), _();
          }
          function _() {
            m("unpipe"), e.unpipe(d);
          }
          return (
            e.on("data", h),
            (function(d, u, e) {
              if ("function" == typeof d.prependListener)
                return d.prependListener(u, e);
              d._events && d._events[u]
                ? r(d._events[u])
                  ? d._events[u].unshift(e)
                  : (d._events[u] = [e, d._events[u]])
                : d.on(u, e);
            })(d, "error", b),
            d.once("close", y),
            d.once("finish", g),
            d.emit("pipe", e),
            a.flowing || (m("pipe resume"), e.resume()),
            d
          );
        }),
        (_.prototype.unpipe = function(d) {
          var u = this._readableState,
            e = { hasUnpiped: !1 };
          if (0 === u.pipesCount) return this;
          if (1 === u.pipesCount)
            return d && d !== u.pipes
              ? this
              : (d || (d = u.pipes),
                (u.pipes = null),
                (u.pipesCount = 0),
                (u.flowing = !1),
                d && d.emit("unpipe", this, e),
                this);
          if (!d) {
            var n = u.pipes,
              t = u.pipesCount;
            (u.pipes = null), (u.pipesCount = 0), (u.flowing = !1);
            for (var a = 0; a < t; a++) n[a].emit("unpipe", this, e);
            return this;
          }
          var r = N(u.pipes, d);
          return -1 === r
            ? this
            : (u.pipes.splice(r, 1),
              (u.pipesCount -= 1),
              1 === u.pipesCount && (u.pipes = u.pipes[0]),
              d.emit("unpipe", this, e),
              this);
        }),
        (_.prototype.on = function(d, u) {
          var e = c.prototype.on.call(this, d, u);
          if ("data" === d) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === d) {
            var n = this._readableState;
            n.endEmitted ||
              n.readableListening ||
              ((n.readableListening = n.needReadable = !0),
              (n.emittedReadable = !1),
              n.reading ? n.length && x(this) : t.nextTick(T, this));
          }
          return e;
        }),
        (_.prototype.addListener = _.prototype.on),
        (_.prototype.resume = function() {
          var d = this._readableState;
          return (
            d.flowing ||
              (m("resume"),
              (d.flowing = !0),
              (function(d, u) {
                u.resumeScheduled ||
                  ((u.resumeScheduled = !0), t.nextTick(O, d, u));
              })(this, d)),
            this
          );
        }),
        (_.prototype.pause = function() {
          return (
            m("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (m("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (_.prototype.wrap = function(d) {
          var u = this,
            e = this._readableState,
            n = !1;
          for (var t in (d.on("end", function() {
            if ((m("wrapped end"), e.decoder && !e.ended)) {
              var d = e.decoder.end();
              d && d.length && u.push(d);
            }
            u.push(null);
          }),
          d.on("data", function(t) {
            (m("wrapped data"),
            e.decoder && (t = e.decoder.write(t)),
            e.objectMode && null == t) ||
              ((e.objectMode || (t && t.length)) &&
                (u.push(t) || ((n = !0), d.pause())));
          }),
          d))
            void 0 === this[t] &&
              "function" == typeof d[t] &&
              (this[t] = (function(u) {
                return function() {
                  return d[u].apply(d, arguments);
                };
              })(t));
          for (var a = 0; a < y.length; a++)
            d.on(y[a], this.emit.bind(this, y[a]));
          return (
            (this._read = function(u) {
              m("wrapped _read", u), n && ((n = !1), d.resume());
            }),
            this
          );
        }),
        Object.defineProperty(_.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function() {
            return this._readableState.highWaterMark;
          }
        }),
        (_._fromList = A);
    }.call(this, e(1), e(0)));
  },
  function(d, u) {
    var e = {}.toString;
    d.exports =
      Array.isArray ||
      function(d) {
        return "[object Array]" == e.call(d);
      };
  },
  function(d, u, e) {
    d.exports = e(4).EventEmitter;
  },
  function(d, u, e) {
    "use strict";
    var n = e(41);
    function t(d, u) {
      d.emit("error", u);
    }
    d.exports = {
      destroy: function(d, u) {
        var e = this,
          a = this._readableState && this._readableState.destroyed,
          r = this._writableState && this._writableState.destroyed;
        return a || r
          ? (u
              ? u(d)
              : !d ||
                (this._writableState && this._writableState.errorEmitted) ||
                n.nextTick(t, this, d),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(d || null, function(d) {
              !u && d
                ? (n.nextTick(t, e, d),
                  e._writableState && (e._writableState.errorEmitted = !0))
                : u && u(d);
            }),
            this);
      },
      undestroy: function() {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      }
    };
  },
  function(d, u, e) {
    "use strict";
    d.exports = r;
    var n = e(5),
      t = e(29);
    function a(d, u) {
      var e = this._transformState;
      e.transforming = !1;
      var n = e.writecb;
      if (!n)
        return this.emit(
          "error",
          new Error("write callback called multiple times")
        );
      (e.writechunk = null),
        (e.writecb = null),
        null != u && this.push(u),
        n(d);
      var t = this._readableState;
      (t.reading = !1),
        (t.needReadable || t.length < t.highWaterMark) &&
          this._read(t.highWaterMark);
    }
    function r(d) {
      if (!(this instanceof r)) return new r(d);
      n.call(this, d),
        (this._transformState = {
          afterTransform: a.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        d &&
          ("function" == typeof d.transform && (this._transform = d.transform),
          "function" == typeof d.flush && (this._flush = d.flush)),
        this.on("prefinish", f);
    }
    function f() {
      var d = this;
      "function" == typeof this._flush
        ? this._flush(function(u, e) {
            c(d, u, e);
          })
        : c(this, null, null);
    }
    function c(d, u, e) {
      if (u) return d.emit("error", u);
      if ((null != e && d.push(e), d._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (d._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return d.push(null);
    }
    (t.inherits = e(20)),
      t.inherits(r, n),
      (r.prototype.push = function(d, u) {
        return (
          (this._transformState.needTransform = !1),
          n.prototype.push.call(this, d, u)
        );
      }),
      (r.prototype._transform = function(d, u, e) {
        throw new Error("_transform() is not implemented");
      }),
      (r.prototype._write = function(d, u, e) {
        var n = this._transformState;
        if (
          ((n.writecb = e),
          (n.writechunk = d),
          (n.writeencoding = u),
          !n.transforming)
        ) {
          var t = this._readableState;
          (n.needTransform || t.needReadable || t.length < t.highWaterMark) &&
            this._read(t.highWaterMark);
        }
      }),
      (r.prototype._read = function(d) {
        var u = this._transformState;
        null !== u.writechunk && u.writecb && !u.transforming
          ? ((u.transforming = !0),
            this._transform(u.writechunk, u.writeencoding, u.afterTransform))
          : (u.needTransform = !0);
      }),
      (r.prototype._destroy = function(d, u) {
        var e = this;
        n.prototype._destroy.call(this, d, function(d) {
          u(d), e.emit("close");
        });
      });
  },
  function(d, u, e) {
    var n = e(180);
    function t(d) {
      var u = function() {
        return u.called
          ? u.value
          : ((u.called = !0), (u.value = d.apply(this, arguments)));
      };
      return (u.called = !1), u;
    }
    function a(d) {
      var u = function() {
          if (u.called) throw new Error(u.onceError);
          return (u.called = !0), (u.value = d.apply(this, arguments));
        },
        e = d.name || "Function wrapped with `once`";
      return (
        (u.onceError = e + " shouldn't be called more than once"),
        (u.called = !1),
        u
      );
    }
    (d.exports = n(t)),
      (d.exports.strict = n(a)),
      (t.proto = t(function() {
        Object.defineProperty(Function.prototype, "once", {
          value: function() {
            return t(this);
          },
          configurable: !0
        }),
          Object.defineProperty(Function.prototype, "onceStrict", {
            value: function() {
              return a(this);
            },
            configurable: !0
          });
      }));
  },
  function(d, u, e) {
    var n = e(107),
      t = function() {},
      a = function(d, u, e) {
        if ("function" == typeof u) return a(d, null, u);
        u || (u = {}), (e = n(e || t));
        var r = d._writableState,
          f = d._readableState,
          c = u.readable || (!1 !== u.readable && d.readable),
          i = u.writable || (!1 !== u.writable && d.writable),
          o = function() {
            d.writable || s();
          },
          s = function() {
            (i = !1), c || e.call(d);
          },
          l = function() {
            (c = !1), i || e.call(d);
          },
          m = function(u) {
            e.call(d, u ? new Error("exited with error code: " + u) : null);
          },
          p = function(u) {
            e.call(d, u);
          },
          h = function() {
            return (!c || (f && f.ended)) && (!i || (r && r.ended))
              ? void 0
              : e.call(d, new Error("premature close"));
          },
          b = function() {
            d.req.on("finish", s);
          };
        return (
          !(function(d) {
            return d.setHeader && "function" == typeof d.abort;
          })(d)
            ? i && !r && (d.on("end", o), d.on("close", o))
            : (d.on("complete", s),
              d.on("abort", h),
              d.req ? b() : d.on("request", b)),
          (function(d) {
            return d.stdio && Array.isArray(d.stdio) && 3 === d.stdio.length;
          })(d) && d.on("exit", m),
          d.on("end", l),
          d.on("finish", s),
          !1 !== u.error && d.on("error", p),
          d.on("close", h),
          function() {
            d.removeListener("complete", s),
              d.removeListener("abort", h),
              d.removeListener("request", b),
              d.req && d.req.removeListener("finish", s),
              d.removeListener("end", o),
              d.removeListener("close", o),
              d.removeListener("finish", s),
              d.removeListener("exit", m),
              d.removeListener("end", l),
              d.removeListener("error", p),
              d.removeListener("close", h);
          }
        );
      };
    d.exports = a;
  },
  function(d, u, e) {
    "use strict";
    (function(u, n) {
      var t = e(43);
      d.exports = _;
      var a,
        r = e(184);
      _.ReadableState = g;
      e(4).EventEmitter;
      var f = function(d, u) {
          return d.listeners(u).length;
        },
        c = e(110),
        i = e(68).Buffer,
        o = u.Uint8Array || function() {};
      var s = e(30);
      s.inherits = e(6);
      var l = e(185),
        m = void 0;
      m = l && l.debuglog ? l.debuglog("stream") : function() {};
      var p,
        h = e(186),
        b = e(111);
      s.inherits(_, c);
      var y = ["error", "close", "destroy", "pause", "resume"];
      function g(d, u) {
        d = d || {};
        var n = u instanceof (a = a || e(22));
        (this.objectMode = !!d.objectMode),
          n && (this.objectMode = this.objectMode || !!d.readableObjectMode);
        var t = d.highWaterMark,
          r = d.readableHighWaterMark,
          f = this.objectMode ? 16 : 16384;
        (this.highWaterMark = t || 0 === t ? t : n && (r || 0 === r) ? r : f),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new h()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = d.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          d.encoding &&
            (p || (p = e(21).StringDecoder),
            (this.decoder = new p(d.encoding)),
            (this.encoding = d.encoding));
      }
      function _(d) {
        if (((a = a || e(22)), !(this instanceof _))) return new _(d);
        (this._readableState = new g(d, this)),
          (this.readable = !0),
          d &&
            ("function" == typeof d.read && (this._read = d.read),
            "function" == typeof d.destroy && (this._destroy = d.destroy)),
          c.call(this);
      }
      function v(d, u, e, n, t) {
        var a,
          r = d._readableState;
        null === u
          ? ((r.reading = !1),
            (function(d, u) {
              if (u.ended) return;
              if (u.decoder) {
                var e = u.decoder.end();
                e &&
                  e.length &&
                  (u.buffer.push(e), (u.length += u.objectMode ? 1 : e.length));
              }
              (u.ended = !0), x(d);
            })(d, r))
          : (t ||
              (a = (function(d, u) {
                var e;
                (n = u),
                  i.isBuffer(n) ||
                    n instanceof o ||
                    "string" == typeof u ||
                    void 0 === u ||
                    d.objectMode ||
                    (e = new TypeError("Invalid non-string/buffer chunk"));
                var n;
                return e;
              })(r, u)),
            a
              ? d.emit("error", a)
              : r.objectMode || (u && u.length > 0)
              ? ("string" == typeof u ||
                  r.objectMode ||
                  Object.getPrototypeOf(u) === i.prototype ||
                  (u = (function(d) {
                    return i.from(d);
                  })(u)),
                n
                  ? r.endEmitted
                    ? d.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : w(d, r, u, !0)
                  : r.ended
                  ? d.emit("error", new Error("stream.push() after EOF"))
                  : ((r.reading = !1),
                    r.decoder && !e
                      ? ((u = r.decoder.write(u)),
                        r.objectMode || 0 !== u.length
                          ? w(d, r, u, !1)
                          : E(d, r))
                      : w(d, r, u, !1)))
              : n || (r.reading = !1));
        return (function(d) {
          return (
            !d.ended &&
            (d.needReadable || d.length < d.highWaterMark || 0 === d.length)
          );
        })(r);
      }
      function w(d, u, e, n) {
        u.flowing && 0 === u.length && !u.sync
          ? (d.emit("data", e), d.read(0))
          : ((u.length += u.objectMode ? 1 : e.length),
            n ? u.buffer.unshift(e) : u.buffer.push(e),
            u.needReadable && x(d)),
          E(d, u);
      }
      Object.defineProperty(_.prototype, "destroyed", {
        get: function() {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function(d) {
          this._readableState && (this._readableState.destroyed = d);
        }
      }),
        (_.prototype.destroy = b.destroy),
        (_.prototype._undestroy = b.undestroy),
        (_.prototype._destroy = function(d, u) {
          this.push(null), u(d);
        }),
        (_.prototype.push = function(d, u) {
          var e,
            n = this._readableState;
          return (
            n.objectMode
              ? (e = !0)
              : "string" == typeof d &&
                ((u = u || n.defaultEncoding) !== n.encoding &&
                  ((d = i.from(d, u)), (u = "")),
                (e = !0)),
            v(this, d, u, !1, e)
          );
        }),
        (_.prototype.unshift = function(d) {
          return v(this, d, null, !0, !1);
        }),
        (_.prototype.isPaused = function() {
          return !1 === this._readableState.flowing;
        }),
        (_.prototype.setEncoding = function(d) {
          return (
            p || (p = e(21).StringDecoder),
            (this._readableState.decoder = new p(d)),
            (this._readableState.encoding = d),
            this
          );
        });
      var I = 8388608;
      function S(d, u) {
        return d <= 0 || (0 === u.length && u.ended)
          ? 0
          : u.objectMode
          ? 1
          : d != d
          ? u.flowing && u.length
            ? u.buffer.head.data.length
            : u.length
          : (d > u.highWaterMark &&
              (u.highWaterMark = (function(d) {
                return (
                  d >= I
                    ? (d = I)
                    : (d--,
                      (d |= d >>> 1),
                      (d |= d >>> 2),
                      (d |= d >>> 4),
                      (d |= d >>> 8),
                      (d |= d >>> 16),
                      d++),
                  d
                );
              })(d)),
            d <= u.length
              ? d
              : u.ended
              ? u.length
              : ((u.needReadable = !0), 0));
      }
      function x(d) {
        var u = d._readableState;
        (u.needReadable = !1),
          u.emittedReadable ||
            (m("emitReadable", u.flowing),
            (u.emittedReadable = !0),
            u.sync ? t.nextTick(k, d) : k(d));
      }
      function k(d) {
        m("emit readable"), d.emit("readable"), C(d);
      }
      function E(d, u) {
        u.readingMore || ((u.readingMore = !0), t.nextTick(M, d, u));
      }
      function M(d, u) {
        for (
          var e = u.length;
          !u.reading &&
          !u.flowing &&
          !u.ended &&
          u.length < u.highWaterMark &&
          (m("maybeReadMore read 0"), d.read(0), e !== u.length);

        )
          e = u.length;
        u.readingMore = !1;
      }
      function T(d) {
        m("readable nexttick read 0"), d.read(0);
      }
      function O(d, u) {
        u.reading || (m("resume read 0"), d.read(0)),
          (u.resumeScheduled = !1),
          (u.awaitDrain = 0),
          d.emit("resume"),
          C(d),
          u.flowing && !u.reading && d.read(0);
      }
      function C(d) {
        var u = d._readableState;
        for (m("flow", u.flowing); u.flowing && null !== d.read(); );
      }
      function A(d, u) {
        return 0 === u.length
          ? null
          : (u.objectMode
              ? (e = u.buffer.shift())
              : !d || d >= u.length
              ? ((e = u.decoder
                  ? u.buffer.join("")
                  : 1 === u.buffer.length
                  ? u.buffer.head.data
                  : u.buffer.concat(u.length)),
                u.buffer.clear())
              : (e = (function(d, u, e) {
                  var n;
                  d < u.head.data.length
                    ? ((n = u.head.data.slice(0, d)),
                      (u.head.data = u.head.data.slice(d)))
                    : (n =
                        d === u.head.data.length
                          ? u.shift()
                          : e
                          ? (function(d, u) {
                              var e = u.head,
                                n = 1,
                                t = e.data;
                              d -= t.length;
                              for (; (e = e.next); ) {
                                var a = e.data,
                                  r = d > a.length ? a.length : d;
                                if (
                                  (r === a.length
                                    ? (t += a)
                                    : (t += a.slice(0, d)),
                                  0 === (d -= r))
                                ) {
                                  r === a.length
                                    ? (++n,
                                      e.next
                                        ? (u.head = e.next)
                                        : (u.head = u.tail = null))
                                    : ((u.head = e), (e.data = a.slice(r)));
                                  break;
                                }
                                ++n;
                              }
                              return (u.length -= n), t;
                            })(d, u)
                          : (function(d, u) {
                              var e = i.allocUnsafe(d),
                                n = u.head,
                                t = 1;
                              n.data.copy(e), (d -= n.data.length);
                              for (; (n = n.next); ) {
                                var a = n.data,
                                  r = d > a.length ? a.length : d;
                                if (
                                  (a.copy(e, e.length - d, 0, r),
                                  0 === (d -= r))
                                ) {
                                  r === a.length
                                    ? (++t,
                                      n.next
                                        ? (u.head = n.next)
                                        : (u.head = u.tail = null))
                                    : ((u.head = n), (n.data = a.slice(r)));
                                  break;
                                }
                                ++t;
                              }
                              return (u.length -= t), e;
                            })(d, u));
                  return n;
                })(d, u.buffer, u.decoder)),
            e);
        var e;
      }
      function L(d) {
        var u = d._readableState;
        if (u.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        u.endEmitted || ((u.ended = !0), t.nextTick(P, u, d));
      }
      function P(d, u) {
        d.endEmitted ||
          0 !== d.length ||
          ((d.endEmitted = !0), (u.readable = !1), u.emit("end"));
      }
      function N(d, u) {
        for (var e = 0, n = d.length; e < n; e++) if (d[e] === u) return e;
        return -1;
      }
      (_.prototype.read = function(d) {
        m("read", d), (d = parseInt(d, 10));
        var u = this._readableState,
          e = d;
        if (
          (0 !== d && (u.emittedReadable = !1),
          0 === d && u.needReadable && (u.length >= u.highWaterMark || u.ended))
        )
          return (
            m("read: emitReadable", u.length, u.ended),
            0 === u.length && u.ended ? L(this) : x(this),
            null
          );
        if (0 === (d = S(d, u)) && u.ended)
          return 0 === u.length && L(this), null;
        var n,
          t = u.needReadable;
        return (
          m("need readable", t),
          (0 === u.length || u.length - d < u.highWaterMark) &&
            m("length less than watermark", (t = !0)),
          u.ended || u.reading
            ? m("reading or ended", (t = !1))
            : t &&
              (m("do read"),
              (u.reading = !0),
              (u.sync = !0),
              0 === u.length && (u.needReadable = !0),
              this._read(u.highWaterMark),
              (u.sync = !1),
              u.reading || (d = S(e, u))),
          null === (n = d > 0 ? A(d, u) : null)
            ? ((u.needReadable = !0), (d = 0))
            : (u.length -= d),
          0 === u.length &&
            (u.ended || (u.needReadable = !0), e !== d && u.ended && L(this)),
          null !== n && this.emit("data", n),
          n
        );
      }),
        (_.prototype._read = function(d) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (_.prototype.pipe = function(d, u) {
          var e = this,
            a = this._readableState;
          switch (a.pipesCount) {
            case 0:
              a.pipes = d;
              break;
            case 1:
              a.pipes = [a.pipes, d];
              break;
            default:
              a.pipes.push(d);
          }
          (a.pipesCount += 1), m("pipe count=%d opts=%j", a.pipesCount, u);
          var c =
            (!u || !1 !== u.end) && d !== n.stdout && d !== n.stderr ? o : _;
          function i(u, n) {
            m("onunpipe"),
              u === e &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                m("cleanup"),
                d.removeListener("close", y),
                d.removeListener("finish", g),
                d.removeListener("drain", s),
                d.removeListener("error", b),
                d.removeListener("unpipe", i),
                e.removeListener("end", o),
                e.removeListener("end", _),
                e.removeListener("data", h),
                (l = !0),
                !a.awaitDrain ||
                  (d._writableState && !d._writableState.needDrain) ||
                  s());
          }
          function o() {
            m("onend"), d.end();
          }
          a.endEmitted ? t.nextTick(c) : e.once("end", c), d.on("unpipe", i);
          var s = (function(d) {
            return function() {
              var u = d._readableState;
              m("pipeOnDrain", u.awaitDrain),
                u.awaitDrain && u.awaitDrain--,
                0 === u.awaitDrain && f(d, "data") && ((u.flowing = !0), C(d));
            };
          })(e);
          d.on("drain", s);
          var l = !1;
          var p = !1;
          function h(u) {
            m("ondata"),
              (p = !1),
              !1 !== d.write(u) ||
                p ||
                (((1 === a.pipesCount && a.pipes === d) ||
                  (a.pipesCount > 1 && -1 !== N(a.pipes, d))) &&
                  !l &&
                  (m(
                    "false write response, pause",
                    e._readableState.awaitDrain
                  ),
                  e._readableState.awaitDrain++,
                  (p = !0)),
                e.pause());
          }
          function b(u) {
            m("onerror", u),
              _(),
              d.removeListener("error", b),
              0 === f(d, "error") && d.emit("error", u);
          }
          function y() {
            d.removeListener("finish", g), _();
          }
          function g() {
            m("onfinish"), d.removeListener("close", y), _();
          }
          function _() {
            m("unpipe"), e.unpipe(d);
          }
          return (
            e.on("data", h),
            (function(d, u, e) {
              if ("function" == typeof d.prependListener)
                return d.prependListener(u, e);
              d._events && d._events[u]
                ? r(d._events[u])
                  ? d._events[u].unshift(e)
                  : (d._events[u] = [e, d._events[u]])
                : d.on(u, e);
            })(d, "error", b),
            d.once("close", y),
            d.once("finish", g),
            d.emit("pipe", e),
            a.flowing || (m("pipe resume"), e.resume()),
            d
          );
        }),
        (_.prototype.unpipe = function(d) {
          var u = this._readableState,
            e = { hasUnpiped: !1 };
          if (0 === u.pipesCount) return this;
          if (1 === u.pipesCount)
            return d && d !== u.pipes
              ? this
              : (d || (d = u.pipes),
                (u.pipes = null),
                (u.pipesCount = 0),
                (u.flowing = !1),
                d && d.emit("unpipe", this, e),
                this);
          if (!d) {
            var n = u.pipes,
              t = u.pipesCount;
            (u.pipes = null), (u.pipesCount = 0), (u.flowing = !1);
            for (var a = 0; a < t; a++) n[a].emit("unpipe", this, e);
            return this;
          }
          var r = N(u.pipes, d);
          return -1 === r
            ? this
            : (u.pipes.splice(r, 1),
              (u.pipesCount -= 1),
              1 === u.pipesCount && (u.pipes = u.pipes[0]),
              d.emit("unpipe", this, e),
              this);
        }),
        (_.prototype.on = function(d, u) {
          var e = c.prototype.on.call(this, d, u);
          if ("data" === d) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === d) {
            var n = this._readableState;
            n.endEmitted ||
              n.readableListening ||
              ((n.readableListening = n.needReadable = !0),
              (n.emittedReadable = !1),
              n.reading ? n.length && x(this) : t.nextTick(T, this));
          }
          return e;
        }),
        (_.prototype.addListener = _.prototype.on),
        (_.prototype.resume = function() {
          var d = this._readableState;
          return (
            d.flowing ||
              (m("resume"),
              (d.flowing = !0),
              (function(d, u) {
                u.resumeScheduled ||
                  ((u.resumeScheduled = !0), t.nextTick(O, d, u));
              })(this, d)),
            this
          );
        }),
        (_.prototype.pause = function() {
          return (
            m("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (m("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (_.prototype.wrap = function(d) {
          var u = this,
            e = this._readableState,
            n = !1;
          for (var t in (d.on("end", function() {
            if ((m("wrapped end"), e.decoder && !e.ended)) {
              var d = e.decoder.end();
              d && d.length && u.push(d);
            }
            u.push(null);
          }),
          d.on("data", function(t) {
            (m("wrapped data"),
            e.decoder && (t = e.decoder.write(t)),
            e.objectMode && null == t) ||
              ((e.objectMode || (t && t.length)) &&
                (u.push(t) || ((n = !0), d.pause())));
          }),
          d))
            void 0 === this[t] &&
              "function" == typeof d[t] &&
              (this[t] = (function(u) {
                return function() {
                  return d[u].apply(d, arguments);
                };
              })(t));
          for (var a = 0; a < y.length; a++)
            d.on(y[a], this.emit.bind(this, y[a]));
          return (
            (this._read = function(u) {
              m("wrapped _read", u), n && ((n = !1), d.resume());
            }),
            this
          );
        }),
        Object.defineProperty(_.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function() {
            return this._readableState.highWaterMark;
          }
        }),
        (_._fromList = A);
    }.call(this, e(1), e(0)));
  },
  function(d, u, e) {
    d.exports = e(4).EventEmitter;
  },
  function(d, u, e) {
    "use strict";
    var n = e(43);
    function t(d, u) {
      d.emit("error", u);
    }
    d.exports = {
      destroy: function(d, u) {
        var e = this,
          a = this._readableState && this._readableState.destroyed,
          r = this._writableState && this._writableState.destroyed;
        return a || r
          ? (u
              ? u(d)
              : !d ||
                (this._writableState && this._writableState.errorEmitted) ||
                n.nextTick(t, this, d),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(d || null, function(d) {
              !u && d
                ? (n.nextTick(t, e, d),
                  e._writableState && (e._writableState.errorEmitted = !0))
                : u && u(d);
            }),
            this);
      },
      undestroy: function() {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      }
    };
  },
  function(d, u, e) {
    "use strict";
    (function(u, n, t) {
      var a = e(43);
      function r(d) {
        var u = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function() {
            !(function(d, u, e) {
              var n = d.entry;
              d.entry = null;
              for (; n; ) {
                var t = n.callback;
                u.pendingcb--, t(e), (n = n.next);
              }
              u.corkedRequestsFree
                ? (u.corkedRequestsFree.next = d)
                : (u.corkedRequestsFree = d);
            })(u, d);
          });
      }
      d.exports = g;
      var f,
        c =
          !u.browser && ["v0.10", "v0.9."].indexOf(u.version.slice(0, 5)) > -1
            ? n
            : a.nextTick;
      g.WritableState = y;
      var i = e(30);
      i.inherits = e(6);
      var o = { deprecate: e(188) },
        s = e(110),
        l = e(68).Buffer,
        m = t.Uint8Array || function() {};
      var p,
        h = e(111);
      function b() {}
      function y(d, u) {
        (f = f || e(22)), (d = d || {});
        var n = u instanceof f;
        (this.objectMode = !!d.objectMode),
          n && (this.objectMode = this.objectMode || !!d.writableObjectMode);
        var t = d.highWaterMark,
          i = d.writableHighWaterMark,
          o = this.objectMode ? 16 : 16384;
        (this.highWaterMark = t || 0 === t ? t : n && (i || 0 === i) ? i : o),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === d.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = d.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function(d) {
            !(function(d, u) {
              var e = d._writableState,
                n = e.sync,
                t = e.writecb;
              if (
                ((function(d) {
                  (d.writing = !1),
                    (d.writecb = null),
                    (d.length -= d.writelen),
                    (d.writelen = 0);
                })(e),
                u)
              )
                !(function(d, u, e, n, t) {
                  --u.pendingcb,
                    e
                      ? (a.nextTick(t, n),
                        a.nextTick(x, d, u),
                        (d._writableState.errorEmitted = !0),
                        d.emit("error", n))
                      : (t(n),
                        (d._writableState.errorEmitted = !0),
                        d.emit("error", n),
                        x(d, u));
                })(d, e, n, u, t);
              else {
                var r = I(e);
                r ||
                  e.corked ||
                  e.bufferProcessing ||
                  !e.bufferedRequest ||
                  w(d, e),
                  n ? c(v, d, e, r, t) : v(d, e, r, t);
              }
            })(u, d);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new r(this));
      }
      function g(d) {
        if (((f = f || e(22)), !(p.call(g, this) || this instanceof f)))
          return new g(d);
        (this._writableState = new y(d, this)),
          (this.writable = !0),
          d &&
            ("function" == typeof d.write && (this._write = d.write),
            "function" == typeof d.writev && (this._writev = d.writev),
            "function" == typeof d.destroy && (this._destroy = d.destroy),
            "function" == typeof d.final && (this._final = d.final)),
          s.call(this);
      }
      function _(d, u, e, n, t, a, r) {
        (u.writelen = n),
          (u.writecb = r),
          (u.writing = !0),
          (u.sync = !0),
          e ? d._writev(t, u.onwrite) : d._write(t, a, u.onwrite),
          (u.sync = !1);
      }
      function v(d, u, e, n) {
        e ||
          (function(d, u) {
            0 === u.length &&
              u.needDrain &&
              ((u.needDrain = !1), d.emit("drain"));
          })(d, u),
          u.pendingcb--,
          n(),
          x(d, u);
      }
      function w(d, u) {
        u.bufferProcessing = !0;
        var e = u.bufferedRequest;
        if (d._writev && e && e.next) {
          var n = u.bufferedRequestCount,
            t = new Array(n),
            a = u.corkedRequestsFree;
          a.entry = e;
          for (var f = 0, c = !0; e; )
            (t[f] = e), e.isBuf || (c = !1), (e = e.next), (f += 1);
          (t.allBuffers = c),
            _(d, u, !0, u.length, t, "", a.finish),
            u.pendingcb++,
            (u.lastBufferedRequest = null),
            a.next
              ? ((u.corkedRequestsFree = a.next), (a.next = null))
              : (u.corkedRequestsFree = new r(u)),
            (u.bufferedRequestCount = 0);
        } else {
          for (; e; ) {
            var i = e.chunk,
              o = e.encoding,
              s = e.callback;
            if (
              (_(d, u, !1, u.objectMode ? 1 : i.length, i, o, s),
              (e = e.next),
              u.bufferedRequestCount--,
              u.writing)
            )
              break;
          }
          null === e && (u.lastBufferedRequest = null);
        }
        (u.bufferedRequest = e), (u.bufferProcessing = !1);
      }
      function I(d) {
        return (
          d.ending &&
          0 === d.length &&
          null === d.bufferedRequest &&
          !d.finished &&
          !d.writing
        );
      }
      function S(d, u) {
        d._final(function(e) {
          u.pendingcb--,
            e && d.emit("error", e),
            (u.prefinished = !0),
            d.emit("prefinish"),
            x(d, u);
        });
      }
      function x(d, u) {
        var e = I(u);
        return (
          e &&
            (!(function(d, u) {
              u.prefinished ||
                u.finalCalled ||
                ("function" == typeof d._final
                  ? (u.pendingcb++, (u.finalCalled = !0), a.nextTick(S, d, u))
                  : ((u.prefinished = !0), d.emit("prefinish")));
            })(d, u),
            0 === u.pendingcb && ((u.finished = !0), d.emit("finish"))),
          e
        );
      }
      i.inherits(g, s),
        (y.prototype.getBuffer = function() {
          for (var d = this.bufferedRequest, u = []; d; )
            u.push(d), (d = d.next);
          return u;
        }),
        (function() {
          try {
            Object.defineProperty(y.prototype, "buffer", {
              get: o.deprecate(
                function() {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              )
            });
          } catch (d) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((p = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(g, Symbol.hasInstance, {
              value: function(d) {
                return (
                  !!p.call(this, d) ||
                  (this === g && (d && d._writableState instanceof y))
                );
              }
            }))
          : (p = function(d) {
              return d instanceof this;
            }),
        (g.prototype.pipe = function() {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (g.prototype.write = function(d, u, e) {
          var n,
            t = this._writableState,
            r = !1,
            f = !t.objectMode && ((n = d), l.isBuffer(n) || n instanceof m);
          return (
            f &&
              !l.isBuffer(d) &&
              (d = (function(d) {
                return l.from(d);
              })(d)),
            "function" == typeof u && ((e = u), (u = null)),
            f ? (u = "buffer") : u || (u = t.defaultEncoding),
            "function" != typeof e && (e = b),
            t.ended
              ? (function(d, u) {
                  var e = new Error("write after end");
                  d.emit("error", e), a.nextTick(u, e);
                })(this, e)
              : (f ||
                  (function(d, u, e, n) {
                    var t = !0,
                      r = !1;
                    return (
                      null === e
                        ? (r = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof e ||
                          void 0 === e ||
                          u.objectMode ||
                          (r = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      r && (d.emit("error", r), a.nextTick(n, r), (t = !1)),
                      t
                    );
                  })(this, t, d, e)) &&
                (t.pendingcb++,
                (r = (function(d, u, e, n, t, a) {
                  if (!e) {
                    var r = (function(d, u, e) {
                      d.objectMode ||
                        !1 === d.decodeStrings ||
                        "string" != typeof u ||
                        (u = l.from(u, e));
                      return u;
                    })(u, n, t);
                    n !== r && ((e = !0), (t = "buffer"), (n = r));
                  }
                  var f = u.objectMode ? 1 : n.length;
                  u.length += f;
                  var c = u.length < u.highWaterMark;
                  c || (u.needDrain = !0);
                  if (u.writing || u.corked) {
                    var i = u.lastBufferedRequest;
                    (u.lastBufferedRequest = {
                      chunk: n,
                      encoding: t,
                      isBuf: e,
                      callback: a,
                      next: null
                    }),
                      i
                        ? (i.next = u.lastBufferedRequest)
                        : (u.bufferedRequest = u.lastBufferedRequest),
                      (u.bufferedRequestCount += 1);
                  } else _(d, u, !1, f, n, t, a);
                  return c;
                })(this, t, f, d, u, e))),
            r
          );
        }),
        (g.prototype.cork = function() {
          this._writableState.corked++;
        }),
        (g.prototype.uncork = function() {
          var d = this._writableState;
          d.corked &&
            (d.corked--,
            d.writing ||
              d.corked ||
              d.finished ||
              d.bufferProcessing ||
              !d.bufferedRequest ||
              w(this, d));
        }),
        (g.prototype.setDefaultEncoding = function(d) {
          if (
            ("string" == typeof d && (d = d.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw"
              ].indexOf((d + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + d);
          return (this._writableState.defaultEncoding = d), this;
        }),
        Object.defineProperty(g.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function() {
            return this._writableState.highWaterMark;
          }
        }),
        (g.prototype._write = function(d, u, e) {
          e(new Error("_write() is not implemented"));
        }),
        (g.prototype._writev = null),
        (g.prototype.end = function(d, u, e) {
          var n = this._writableState;
          "function" == typeof d
            ? ((e = d), (d = null), (u = null))
            : "function" == typeof u && ((e = u), (u = null)),
            null != d && this.write(d, u),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              n.finished ||
              (function(d, u, e) {
                (u.ending = !0),
                  x(d, u),
                  e && (u.finished ? a.nextTick(e) : d.once("finish", e));
                (u.ended = !0), (d.writable = !1);
              })(this, n, e);
        }),
        Object.defineProperty(g.prototype, "destroyed", {
          get: function() {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function(d) {
            this._writableState && (this._writableState.destroyed = d);
          }
        }),
        (g.prototype.destroy = h.destroy),
        (g.prototype._undestroy = h.undestroy),
        (g.prototype._destroy = function(d, u) {
          this.end(), u(d);
        });
    }.call(this, e(0), e(67).setImmediate, e(1)));
  },
  function(d, u, e) {
    "use strict";
    d.exports = r;
    var n = e(22),
      t = e(30);
    function a(d, u) {
      var e = this._transformState;
      e.transforming = !1;
      var n = e.writecb;
      if (!n)
        return this.emit(
          "error",
          new Error("write callback called multiple times")
        );
      (e.writechunk = null),
        (e.writecb = null),
        null != u && this.push(u),
        n(d);
      var t = this._readableState;
      (t.reading = !1),
        (t.needReadable || t.length < t.highWaterMark) &&
          this._read(t.highWaterMark);
    }
    function r(d) {
      if (!(this instanceof r)) return new r(d);
      n.call(this, d),
        (this._transformState = {
          afterTransform: a.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        d &&
          ("function" == typeof d.transform && (this._transform = d.transform),
          "function" == typeof d.flush && (this._flush = d.flush)),
        this.on("prefinish", f);
    }
    function f() {
      var d = this;
      "function" == typeof this._flush
        ? this._flush(function(u, e) {
            c(d, u, e);
          })
        : c(this, null, null);
    }
    function c(d, u, e) {
      if (u) return d.emit("error", u);
      if ((null != e && d.push(e), d._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (d._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return d.push(null);
    }
    (t.inherits = e(6)),
      t.inherits(r, n),
      (r.prototype.push = function(d, u) {
        return (
          (this._transformState.needTransform = !1),
          n.prototype.push.call(this, d, u)
        );
      }),
      (r.prototype._transform = function(d, u, e) {
        throw new Error("_transform() is not implemented");
      }),
      (r.prototype._write = function(d, u, e) {
        var n = this._transformState;
        if (
          ((n.writecb = e),
          (n.writechunk = d),
          (n.writeencoding = u),
          !n.transforming)
        ) {
          var t = this._readableState;
          (n.needTransform || t.needReadable || t.length < t.highWaterMark) &&
            this._read(t.highWaterMark);
        }
      }),
      (r.prototype._read = function(d) {
        var u = this._transformState;
        null !== u.writechunk && u.writecb && !u.transforming
          ? ((u.transforming = !0),
            this._transform(u.writechunk, u.writeencoding, u.afterTransform))
          : (u.needTransform = !0);
      }),
      (r.prototype._destroy = function(d, u) {
        var e = this;
        n.prototype._destroy.call(this, d, function(d) {
          u(d), e.emit("close");
        });
      });
  },
  function(d, u, e) {
    var n = e(195);
    function t(d) {
      var u = function() {
        return u.called
          ? u.value
          : ((u.called = !0), (u.value = d.apply(this, arguments)));
      };
      return (u.called = !1), u;
    }
    function a(d) {
      var u = function() {
          if (u.called) throw new Error(u.onceError);
          return (u.called = !0), (u.value = d.apply(this, arguments));
        },
        e = d.name || "Function wrapped with `once`";
      return (
        (u.onceError = e + " shouldn't be called more than once"),
        (u.called = !1),
        u
      );
    }
    (d.exports = n(t)),
      (d.exports.strict = n(a)),
      (t.proto = t(function() {
        Object.defineProperty(Function.prototype, "once", {
          value: function() {
            return t(this);
          },
          configurable: !0
        }),
          Object.defineProperty(Function.prototype, "onceStrict", {
            value: function() {
              return a(this);
            },
            configurable: !0
          });
      }));
  },
  function(d, u, e) {
    var n = e(114),
      t = function() {},
      a = function(d, u, e) {
        if ("function" == typeof u) return a(d, null, u);
        u || (u = {}), (e = n(e || t));
        var r = d._writableState,
          f = d._readableState,
          c = u.readable || (!1 !== u.readable && d.readable),
          i = u.writable || (!1 !== u.writable && d.writable),
          o = function() {
            d.writable || s();
          },
          s = function() {
            (i = !1), c || e.call(d);
          },
          l = function() {
            (c = !1), i || e.call(d);
          },
          m = function(u) {
            e.call(d, u ? new Error("exited with error code: " + u) : null);
          },
          p = function(u) {
            e.call(d, u);
          },
          h = function() {
            return (!c || (f && f.ended)) && (!i || (r && r.ended))
              ? void 0
              : e.call(d, new Error("premature close"));
          },
          b = function() {
            d.req.on("finish", s);
          };
        return (
          !(function(d) {
            return d.setHeader && "function" == typeof d.abort;
          })(d)
            ? i && !r && (d.on("end", o), d.on("close", o))
            : (d.on("complete", s),
              d.on("abort", h),
              d.req ? b() : d.on("request", b)),
          (function(d) {
            return d.stdio && Array.isArray(d.stdio) && 3 === d.stdio.length;
          })(d) && d.on("exit", m),
          d.on("end", l),
          d.on("finish", s),
          !1 !== u.error && d.on("error", p),
          d.on("close", h),
          function() {
            d.removeListener("complete", s),
              d.removeListener("abort", h),
              d.removeListener("request", b),
              d.req && d.req.removeListener("finish", s),
              d.removeListener("end", o),
              d.removeListener("close", o),
              d.removeListener("finish", s),
              d.removeListener("exit", m),
              d.removeListener("end", l),
              d.removeListener("error", p),
              d.removeListener("close", h);
          }
        );
      };
    d.exports = a;
  },
  function(d, u, e) {
    "use strict";
    (function(u, n) {
      var t = e(44);
      d.exports = _;
      var a,
        r = e(199);
      _.ReadableState = g;
      e(4).EventEmitter;
      var f = function(d, u) {
          return d.listeners(u).length;
        },
        c = e(117),
        i = e(69).Buffer,
        o = u.Uint8Array || function() {};
      var s = e(31);
      s.inherits = e(7);
      var l = e(200),
        m = void 0;
      m = l && l.debuglog ? l.debuglog("stream") : function() {};
      var p,
        h = e(201),
        b = e(118);
      s.inherits(_, c);
      var y = ["error", "close", "destroy", "pause", "resume"];
      function g(d, u) {
        d = d || {};
        var n = u instanceof (a = a || e(23));
        (this.objectMode = !!d.objectMode),
          n && (this.objectMode = this.objectMode || !!d.readableObjectMode);
        var t = d.highWaterMark,
          r = d.readableHighWaterMark,
          f = this.objectMode ? 16 : 16384;
        (this.highWaterMark = t || 0 === t ? t : n && (r || 0 === r) ? r : f),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new h()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = d.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          d.encoding &&
            (p || (p = e(21).StringDecoder),
            (this.decoder = new p(d.encoding)),
            (this.encoding = d.encoding));
      }
      function _(d) {
        if (((a = a || e(23)), !(this instanceof _))) return new _(d);
        (this._readableState = new g(d, this)),
          (this.readable = !0),
          d &&
            ("function" == typeof d.read && (this._read = d.read),
            "function" == typeof d.destroy && (this._destroy = d.destroy)),
          c.call(this);
      }
      function v(d, u, e, n, t) {
        var a,
          r = d._readableState;
        null === u
          ? ((r.reading = !1),
            (function(d, u) {
              if (u.ended) return;
              if (u.decoder) {
                var e = u.decoder.end();
                e &&
                  e.length &&
                  (u.buffer.push(e), (u.length += u.objectMode ? 1 : e.length));
              }
              (u.ended = !0), x(d);
            })(d, r))
          : (t ||
              (a = (function(d, u) {
                var e;
                (n = u),
                  i.isBuffer(n) ||
                    n instanceof o ||
                    "string" == typeof u ||
                    void 0 === u ||
                    d.objectMode ||
                    (e = new TypeError("Invalid non-string/buffer chunk"));
                var n;
                return e;
              })(r, u)),
            a
              ? d.emit("error", a)
              : r.objectMode || (u && u.length > 0)
              ? ("string" == typeof u ||
                  r.objectMode ||
                  Object.getPrototypeOf(u) === i.prototype ||
                  (u = (function(d) {
                    return i.from(d);
                  })(u)),
                n
                  ? r.endEmitted
                    ? d.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : w(d, r, u, !0)
                  : r.ended
                  ? d.emit("error", new Error("stream.push() after EOF"))
                  : ((r.reading = !1),
                    r.decoder && !e
                      ? ((u = r.decoder.write(u)),
                        r.objectMode || 0 !== u.length
                          ? w(d, r, u, !1)
                          : E(d, r))
                      : w(d, r, u, !1)))
              : n || (r.reading = !1));
        return (function(d) {
          return (
            !d.ended &&
            (d.needReadable || d.length < d.highWaterMark || 0 === d.length)
          );
        })(r);
      }
      function w(d, u, e, n) {
        u.flowing && 0 === u.length && !u.sync
          ? (d.emit("data", e), d.read(0))
          : ((u.length += u.objectMode ? 1 : e.length),
            n ? u.buffer.unshift(e) : u.buffer.push(e),
            u.needReadable && x(d)),
          E(d, u);
      }
      Object.defineProperty(_.prototype, "destroyed", {
        get: function() {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function(d) {
          this._readableState && (this._readableState.destroyed = d);
        }
      }),
        (_.prototype.destroy = b.destroy),
        (_.prototype._undestroy = b.undestroy),
        (_.prototype._destroy = function(d, u) {
          this.push(null), u(d);
        }),
        (_.prototype.push = function(d, u) {
          var e,
            n = this._readableState;
          return (
            n.objectMode
              ? (e = !0)
              : "string" == typeof d &&
                ((u = u || n.defaultEncoding) !== n.encoding &&
                  ((d = i.from(d, u)), (u = "")),
                (e = !0)),
            v(this, d, u, !1, e)
          );
        }),
        (_.prototype.unshift = function(d) {
          return v(this, d, null, !0, !1);
        }),
        (_.prototype.isPaused = function() {
          return !1 === this._readableState.flowing;
        }),
        (_.prototype.setEncoding = function(d) {
          return (
            p || (p = e(21).StringDecoder),
            (this._readableState.decoder = new p(d)),
            (this._readableState.encoding = d),
            this
          );
        });
      var I = 8388608;
      function S(d, u) {
        return d <= 0 || (0 === u.length && u.ended)
          ? 0
          : u.objectMode
          ? 1
          : d != d
          ? u.flowing && u.length
            ? u.buffer.head.data.length
            : u.length
          : (d > u.highWaterMark &&
              (u.highWaterMark = (function(d) {
                return (
                  d >= I
                    ? (d = I)
                    : (d--,
                      (d |= d >>> 1),
                      (d |= d >>> 2),
                      (d |= d >>> 4),
                      (d |= d >>> 8),
                      (d |= d >>> 16),
                      d++),
                  d
                );
              })(d)),
            d <= u.length
              ? d
              : u.ended
              ? u.length
              : ((u.needReadable = !0), 0));
      }
      function x(d) {
        var u = d._readableState;
        (u.needReadable = !1),
          u.emittedReadable ||
            (m("emitReadable", u.flowing),
            (u.emittedReadable = !0),
            u.sync ? t.nextTick(k, d) : k(d));
      }
      function k(d) {
        m("emit readable"), d.emit("readable"), C(d);
      }
      function E(d, u) {
        u.readingMore || ((u.readingMore = !0), t.nextTick(M, d, u));
      }
      function M(d, u) {
        for (
          var e = u.length;
          !u.reading &&
          !u.flowing &&
          !u.ended &&
          u.length < u.highWaterMark &&
          (m("maybeReadMore read 0"), d.read(0), e !== u.length);

        )
          e = u.length;
        u.readingMore = !1;
      }
      function T(d) {
        m("readable nexttick read 0"), d.read(0);
      }
      function O(d, u) {
        u.reading || (m("resume read 0"), d.read(0)),
          (u.resumeScheduled = !1),
          (u.awaitDrain = 0),
          d.emit("resume"),
          C(d),
          u.flowing && !u.reading && d.read(0);
      }
      function C(d) {
        var u = d._readableState;
        for (m("flow", u.flowing); u.flowing && null !== d.read(); );
      }
      function A(d, u) {
        return 0 === u.length
          ? null
          : (u.objectMode
              ? (e = u.buffer.shift())
              : !d || d >= u.length
              ? ((e = u.decoder
                  ? u.buffer.join("")
                  : 1 === u.buffer.length
                  ? u.buffer.head.data
                  : u.buffer.concat(u.length)),
                u.buffer.clear())
              : (e = (function(d, u, e) {
                  var n;
                  d < u.head.data.length
                    ? ((n = u.head.data.slice(0, d)),
                      (u.head.data = u.head.data.slice(d)))
                    : (n =
                        d === u.head.data.length
                          ? u.shift()
                          : e
                          ? (function(d, u) {
                              var e = u.head,
                                n = 1,
                                t = e.data;
                              d -= t.length;
                              for (; (e = e.next); ) {
                                var a = e.data,
                                  r = d > a.length ? a.length : d;
                                if (
                                  (r === a.length
                                    ? (t += a)
                                    : (t += a.slice(0, d)),
                                  0 === (d -= r))
                                ) {
                                  r === a.length
                                    ? (++n,
                                      e.next
                                        ? (u.head = e.next)
                                        : (u.head = u.tail = null))
                                    : ((u.head = e), (e.data = a.slice(r)));
                                  break;
                                }
                                ++n;
                              }
                              return (u.length -= n), t;
                            })(d, u)
                          : (function(d, u) {
                              var e = i.allocUnsafe(d),
                                n = u.head,
                                t = 1;
                              n.data.copy(e), (d -= n.data.length);
                              for (; (n = n.next); ) {
                                var a = n.data,
                                  r = d > a.length ? a.length : d;
                                if (
                                  (a.copy(e, e.length - d, 0, r),
                                  0 === (d -= r))
                                ) {
                                  r === a.length
                                    ? (++t,
                                      n.next
                                        ? (u.head = n.next)
                                        : (u.head = u.tail = null))
                                    : ((u.head = n), (n.data = a.slice(r)));
                                  break;
                                }
                                ++t;
                              }
                              return (u.length -= t), e;
                            })(d, u));
                  return n;
                })(d, u.buffer, u.decoder)),
            e);
        var e;
      }
      function L(d) {
        var u = d._readableState;
        if (u.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        u.endEmitted || ((u.ended = !0), t.nextTick(P, u, d));
      }
      function P(d, u) {
        d.endEmitted ||
          0 !== d.length ||
          ((d.endEmitted = !0), (u.readable = !1), u.emit("end"));
      }
      function N(d, u) {
        for (var e = 0, n = d.length; e < n; e++) if (d[e] === u) return e;
        return -1;
      }
      (_.prototype.read = function(d) {
        m("read", d), (d = parseInt(d, 10));
        var u = this._readableState,
          e = d;
        if (
          (0 !== d && (u.emittedReadable = !1),
          0 === d && u.needReadable && (u.length >= u.highWaterMark || u.ended))
        )
          return (
            m("read: emitReadable", u.length, u.ended),
            0 === u.length && u.ended ? L(this) : x(this),
            null
          );
        if (0 === (d = S(d, u)) && u.ended)
          return 0 === u.length && L(this), null;
        var n,
          t = u.needReadable;
        return (
          m("need readable", t),
          (0 === u.length || u.length - d < u.highWaterMark) &&
            m("length less than watermark", (t = !0)),
          u.ended || u.reading
            ? m("reading or ended", (t = !1))
            : t &&
              (m("do read"),
              (u.reading = !0),
              (u.sync = !0),
              0 === u.length && (u.needReadable = !0),
              this._read(u.highWaterMark),
              (u.sync = !1),
              u.reading || (d = S(e, u))),
          null === (n = d > 0 ? A(d, u) : null)
            ? ((u.needReadable = !0), (d = 0))
            : (u.length -= d),
          0 === u.length &&
            (u.ended || (u.needReadable = !0), e !== d && u.ended && L(this)),
          null !== n && this.emit("data", n),
          n
        );
      }),
        (_.prototype._read = function(d) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (_.prototype.pipe = function(d, u) {
          var e = this,
            a = this._readableState;
          switch (a.pipesCount) {
            case 0:
              a.pipes = d;
              break;
            case 1:
              a.pipes = [a.pipes, d];
              break;
            default:
              a.pipes.push(d);
          }
          (a.pipesCount += 1), m("pipe count=%d opts=%j", a.pipesCount, u);
          var c =
            (!u || !1 !== u.end) && d !== n.stdout && d !== n.stderr ? o : _;
          function i(u, n) {
            m("onunpipe"),
              u === e &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                m("cleanup"),
                d.removeListener("close", y),
                d.removeListener("finish", g),
                d.removeListener("drain", s),
                d.removeListener("error", b),
                d.removeListener("unpipe", i),
                e.removeListener("end", o),
                e.removeListener("end", _),
                e.removeListener("data", h),
                (l = !0),
                !a.awaitDrain ||
                  (d._writableState && !d._writableState.needDrain) ||
                  s());
          }
          function o() {
            m("onend"), d.end();
          }
          a.endEmitted ? t.nextTick(c) : e.once("end", c), d.on("unpipe", i);
          var s = (function(d) {
            return function() {
              var u = d._readableState;
              m("pipeOnDrain", u.awaitDrain),
                u.awaitDrain && u.awaitDrain--,
                0 === u.awaitDrain && f(d, "data") && ((u.flowing = !0), C(d));
            };
          })(e);
          d.on("drain", s);
          var l = !1;
          var p = !1;
          function h(u) {
            m("ondata"),
              (p = !1),
              !1 !== d.write(u) ||
                p ||
                (((1 === a.pipesCount && a.pipes === d) ||
                  (a.pipesCount > 1 && -1 !== N(a.pipes, d))) &&
                  !l &&
                  (m(
                    "false write response, pause",
                    e._readableState.awaitDrain
                  ),
                  e._readableState.awaitDrain++,
                  (p = !0)),
                e.pause());
          }
          function b(u) {
            m("onerror", u),
              _(),
              d.removeListener("error", b),
              0 === f(d, "error") && d.emit("error", u);
          }
          function y() {
            d.removeListener("finish", g), _();
          }
          function g() {
            m("onfinish"), d.removeListener("close", y), _();
          }
          function _() {
            m("unpipe"), e.unpipe(d);
          }
          return (
            e.on("data", h),
            (function(d, u, e) {
              if ("function" == typeof d.prependListener)
                return d.prependListener(u, e);
              d._events && d._events[u]
                ? r(d._events[u])
                  ? d._events[u].unshift(e)
                  : (d._events[u] = [e, d._events[u]])
                : d.on(u, e);
            })(d, "error", b),
            d.once("close", y),
            d.once("finish", g),
            d.emit("pipe", e),
            a.flowing || (m("pipe resume"), e.resume()),
            d
          );
        }),
        (_.prototype.unpipe = function(d) {
          var u = this._readableState,
            e = { hasUnpiped: !1 };
          if (0 === u.pipesCount) return this;
          if (1 === u.pipesCount)
            return d && d !== u.pipes
              ? this
              : (d || (d = u.pipes),
                (u.pipes = null),
                (u.pipesCount = 0),
                (u.flowing = !1),
                d && d.emit("unpipe", this, e),
                this);
          if (!d) {
            var n = u.pipes,
              t = u.pipesCount;
            (u.pipes = null), (u.pipesCount = 0), (u.flowing = !1);
            for (var a = 0; a < t; a++) n[a].emit("unpipe", this, e);
            return this;
          }
          var r = N(u.pipes, d);
          return -1 === r
            ? this
            : (u.pipes.splice(r, 1),
              (u.pipesCount -= 1),
              1 === u.pipesCount && (u.pipes = u.pipes[0]),
              d.emit("unpipe", this, e),
              this);
        }),
        (_.prototype.on = function(d, u) {
          var e = c.prototype.on.call(this, d, u);
          if ("data" === d) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === d) {
            var n = this._readableState;
            n.endEmitted ||
              n.readableListening ||
              ((n.readableListening = n.needReadable = !0),
              (n.emittedReadable = !1),
              n.reading ? n.length && x(this) : t.nextTick(T, this));
          }
          return e;
        }),
        (_.prototype.addListener = _.prototype.on),
        (_.prototype.resume = function() {
          var d = this._readableState;
          return (
            d.flowing ||
              (m("resume"),
              (d.flowing = !0),
              (function(d, u) {
                u.resumeScheduled ||
                  ((u.resumeScheduled = !0), t.nextTick(O, d, u));
              })(this, d)),
            this
          );
        }),
        (_.prototype.pause = function() {
          return (
            m("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (m("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (_.prototype.wrap = function(d) {
          var u = this,
            e = this._readableState,
            n = !1;
          for (var t in (d.on("end", function() {
            if ((m("wrapped end"), e.decoder && !e.ended)) {
              var d = e.decoder.end();
              d && d.length && u.push(d);
            }
            u.push(null);
          }),
          d.on("data", function(t) {
            (m("wrapped data"),
            e.decoder && (t = e.decoder.write(t)),
            e.objectMode && null == t) ||
              ((e.objectMode || (t && t.length)) &&
                (u.push(t) || ((n = !0), d.pause())));
          }),
          d))
            void 0 === this[t] &&
              "function" == typeof d[t] &&
              (this[t] = (function(u) {
                return function() {
                  return d[u].apply(d, arguments);
                };
              })(t));
          for (var a = 0; a < y.length; a++)
            d.on(y[a], this.emit.bind(this, y[a]));
          return (
            (this._read = function(u) {
              m("wrapped _read", u), n && ((n = !1), d.resume());
            }),
            this
          );
        }),
        Object.defineProperty(_.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function() {
            return this._readableState.highWaterMark;
          }
        }),
        (_._fromList = A);
    }.call(this, e(1), e(0)));
  },
  function(d, u, e) {
    d.exports = e(4).EventEmitter;
  },
  function(d, u, e) {
    "use strict";
    var n = e(44);
    function t(d, u) {
      d.emit("error", u);
    }
    d.exports = {
      destroy: function(d, u) {
        var e = this,
          a = this._readableState && this._readableState.destroyed,
          r = this._writableState && this._writableState.destroyed;
        return a || r
          ? (u
              ? u(d)
              : !d ||
                (this._writableState && this._writableState.errorEmitted) ||
                n.nextTick(t, this, d),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(d || null, function(d) {
              !u && d
                ? (n.nextTick(t, e, d),
                  e._writableState && (e._writableState.errorEmitted = !0))
                : u && u(d);
            }),
            this);
      },
      undestroy: function() {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      }
    };
  },
  function(d, u, e) {
    "use strict";
    (function(u, n, t) {
      var a = e(44);
      function r(d) {
        var u = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function() {
            !(function(d, u, e) {
              var n = d.entry;
              d.entry = null;
              for (; n; ) {
                var t = n.callback;
                u.pendingcb--, t(e), (n = n.next);
              }
              u.corkedRequestsFree
                ? (u.corkedRequestsFree.next = d)
                : (u.corkedRequestsFree = d);
            })(u, d);
          });
      }
      d.exports = g;
      var f,
        c =
          !u.browser && ["v0.10", "v0.9."].indexOf(u.version.slice(0, 5)) > -1
            ? n
            : a.nextTick;
      g.WritableState = y;
      var i = e(31);
      i.inherits = e(7);
      var o = { deprecate: e(203) },
        s = e(117),
        l = e(69).Buffer,
        m = t.Uint8Array || function() {};
      var p,
        h = e(118);
      function b() {}
      function y(d, u) {
        (f = f || e(23)), (d = d || {});
        var n = u instanceof f;
        (this.objectMode = !!d.objectMode),
          n && (this.objectMode = this.objectMode || !!d.writableObjectMode);
        var t = d.highWaterMark,
          i = d.writableHighWaterMark,
          o = this.objectMode ? 16 : 16384;
        (this.highWaterMark = t || 0 === t ? t : n && (i || 0 === i) ? i : o),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === d.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = d.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function(d) {
            !(function(d, u) {
              var e = d._writableState,
                n = e.sync,
                t = e.writecb;
              if (
                ((function(d) {
                  (d.writing = !1),
                    (d.writecb = null),
                    (d.length -= d.writelen),
                    (d.writelen = 0);
                })(e),
                u)
              )
                !(function(d, u, e, n, t) {
                  --u.pendingcb,
                    e
                      ? (a.nextTick(t, n),
                        a.nextTick(x, d, u),
                        (d._writableState.errorEmitted = !0),
                        d.emit("error", n))
                      : (t(n),
                        (d._writableState.errorEmitted = !0),
                        d.emit("error", n),
                        x(d, u));
                })(d, e, n, u, t);
              else {
                var r = I(e);
                r ||
                  e.corked ||
                  e.bufferProcessing ||
                  !e.bufferedRequest ||
                  w(d, e),
                  n ? c(v, d, e, r, t) : v(d, e, r, t);
              }
            })(u, d);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new r(this));
      }
      function g(d) {
        if (((f = f || e(23)), !(p.call(g, this) || this instanceof f)))
          return new g(d);
        (this._writableState = new y(d, this)),
          (this.writable = !0),
          d &&
            ("function" == typeof d.write && (this._write = d.write),
            "function" == typeof d.writev && (this._writev = d.writev),
            "function" == typeof d.destroy && (this._destroy = d.destroy),
            "function" == typeof d.final && (this._final = d.final)),
          s.call(this);
      }
      function _(d, u, e, n, t, a, r) {
        (u.writelen = n),
          (u.writecb = r),
          (u.writing = !0),
          (u.sync = !0),
          e ? d._writev(t, u.onwrite) : d._write(t, a, u.onwrite),
          (u.sync = !1);
      }
      function v(d, u, e, n) {
        e ||
          (function(d, u) {
            0 === u.length &&
              u.needDrain &&
              ((u.needDrain = !1), d.emit("drain"));
          })(d, u),
          u.pendingcb--,
          n(),
          x(d, u);
      }
      function w(d, u) {
        u.bufferProcessing = !0;
        var e = u.bufferedRequest;
        if (d._writev && e && e.next) {
          var n = u.bufferedRequestCount,
            t = new Array(n),
            a = u.corkedRequestsFree;
          a.entry = e;
          for (var f = 0, c = !0; e; )
            (t[f] = e), e.isBuf || (c = !1), (e = e.next), (f += 1);
          (t.allBuffers = c),
            _(d, u, !0, u.length, t, "", a.finish),
            u.pendingcb++,
            (u.lastBufferedRequest = null),
            a.next
              ? ((u.corkedRequestsFree = a.next), (a.next = null))
              : (u.corkedRequestsFree = new r(u)),
            (u.bufferedRequestCount = 0);
        } else {
          for (; e; ) {
            var i = e.chunk,
              o = e.encoding,
              s = e.callback;
            if (
              (_(d, u, !1, u.objectMode ? 1 : i.length, i, o, s),
              (e = e.next),
              u.bufferedRequestCount--,
              u.writing)
            )
              break;
          }
          null === e && (u.lastBufferedRequest = null);
        }
        (u.bufferedRequest = e), (u.bufferProcessing = !1);
      }
      function I(d) {
        return (
          d.ending &&
          0 === d.length &&
          null === d.bufferedRequest &&
          !d.finished &&
          !d.writing
        );
      }
      function S(d, u) {
        d._final(function(e) {
          u.pendingcb--,
            e && d.emit("error", e),
            (u.prefinished = !0),
            d.emit("prefinish"),
            x(d, u);
        });
      }
      function x(d, u) {
        var e = I(u);
        return (
          e &&
            (!(function(d, u) {
              u.prefinished ||
                u.finalCalled ||
                ("function" == typeof d._final
                  ? (u.pendingcb++, (u.finalCalled = !0), a.nextTick(S, d, u))
                  : ((u.prefinished = !0), d.emit("prefinish")));
            })(d, u),
            0 === u.pendingcb && ((u.finished = !0), d.emit("finish"))),
          e
        );
      }
      i.inherits(g, s),
        (y.prototype.getBuffer = function() {
          for (var d = this.bufferedRequest, u = []; d; )
            u.push(d), (d = d.next);
          return u;
        }),
        (function() {
          try {
            Object.defineProperty(y.prototype, "buffer", {
              get: o.deprecate(
                function() {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              )
            });
          } catch (d) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((p = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(g, Symbol.hasInstance, {
              value: function(d) {
                return (
                  !!p.call(this, d) ||
                  (this === g && (d && d._writableState instanceof y))
                );
              }
            }))
          : (p = function(d) {
              return d instanceof this;
            }),
        (g.prototype.pipe = function() {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (g.prototype.write = function(d, u, e) {
          var n,
            t = this._writableState,
            r = !1,
            f = !t.objectMode && ((n = d), l.isBuffer(n) || n instanceof m);
          return (
            f &&
              !l.isBuffer(d) &&
              (d = (function(d) {
                return l.from(d);
              })(d)),
            "function" == typeof u && ((e = u), (u = null)),
            f ? (u = "buffer") : u || (u = t.defaultEncoding),
            "function" != typeof e && (e = b),
            t.ended
              ? (function(d, u) {
                  var e = new Error("write after end");
                  d.emit("error", e), a.nextTick(u, e);
                })(this, e)
              : (f ||
                  (function(d, u, e, n) {
                    var t = !0,
                      r = !1;
                    return (
                      null === e
                        ? (r = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof e ||
                          void 0 === e ||
                          u.objectMode ||
                          (r = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      r && (d.emit("error", r), a.nextTick(n, r), (t = !1)),
                      t
                    );
                  })(this, t, d, e)) &&
                (t.pendingcb++,
                (r = (function(d, u, e, n, t, a) {
                  if (!e) {
                    var r = (function(d, u, e) {
                      d.objectMode ||
                        !1 === d.decodeStrings ||
                        "string" != typeof u ||
                        (u = l.from(u, e));
                      return u;
                    })(u, n, t);
                    n !== r && ((e = !0), (t = "buffer"), (n = r));
                  }
                  var f = u.objectMode ? 1 : n.length;
                  u.length += f;
                  var c = u.length < u.highWaterMark;
                  c || (u.needDrain = !0);
                  if (u.writing || u.corked) {
                    var i = u.lastBufferedRequest;
                    (u.lastBufferedRequest = {
                      chunk: n,
                      encoding: t,
                      isBuf: e,
                      callback: a,
                      next: null
                    }),
                      i
                        ? (i.next = u.lastBufferedRequest)
                        : (u.bufferedRequest = u.lastBufferedRequest),
                      (u.bufferedRequestCount += 1);
                  } else _(d, u, !1, f, n, t, a);
                  return c;
                })(this, t, f, d, u, e))),
            r
          );
        }),
        (g.prototype.cork = function() {
          this._writableState.corked++;
        }),
        (g.prototype.uncork = function() {
          var d = this._writableState;
          d.corked &&
            (d.corked--,
            d.writing ||
              d.corked ||
              d.finished ||
              d.bufferProcessing ||
              !d.bufferedRequest ||
              w(this, d));
        }),
        (g.prototype.setDefaultEncoding = function(d) {
          if (
            ("string" == typeof d && (d = d.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw"
              ].indexOf((d + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + d);
          return (this._writableState.defaultEncoding = d), this;
        }),
        Object.defineProperty(g.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function() {
            return this._writableState.highWaterMark;
          }
        }),
        (g.prototype._write = function(d, u, e) {
          e(new Error("_write() is not implemented"));
        }),
        (g.prototype._writev = null),
        (g.prototype.end = function(d, u, e) {
          var n = this._writableState;
          "function" == typeof d
            ? ((e = d), (d = null), (u = null))
            : "function" == typeof u && ((e = u), (u = null)),
            null != d && this.write(d, u),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              n.finished ||
              (function(d, u, e) {
                (u.ending = !0),
                  x(d, u),
                  e && (u.finished ? a.nextTick(e) : d.once("finish", e));
                (u.ended = !0), (d.writable = !1);
              })(this, n, e);
        }),
        Object.defineProperty(g.prototype, "destroyed", {
          get: function() {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function(d) {
            this._writableState && (this._writableState.destroyed = d);
          }
        }),
        (g.prototype.destroy = h.destroy),
        (g.prototype._undestroy = h.undestroy),
        (g.prototype._destroy = function(d, u) {
          this.end(), u(d);
        });
    }.call(this, e(0), e(67).setImmediate, e(1)));
  },
  function(d, u, e) {
    "use strict";
    d.exports = r;
    var n = e(23),
      t = e(31);
    function a(d, u) {
      var e = this._transformState;
      e.transforming = !1;
      var n = e.writecb;
      if (!n)
        return this.emit(
          "error",
          new Error("write callback called multiple times")
        );
      (e.writechunk = null),
        (e.writecb = null),
        null != u && this.push(u),
        n(d);
      var t = this._readableState;
      (t.reading = !1),
        (t.needReadable || t.length < t.highWaterMark) &&
          this._read(t.highWaterMark);
    }
    function r(d) {
      if (!(this instanceof r)) return new r(d);
      n.call(this, d),
        (this._transformState = {
          afterTransform: a.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        d &&
          ("function" == typeof d.transform && (this._transform = d.transform),
          "function" == typeof d.flush && (this._flush = d.flush)),
        this.on("prefinish", f);
    }
    function f() {
      var d = this;
      "function" == typeof this._flush
        ? this._flush(function(u, e) {
            c(d, u, e);
          })
        : c(this, null, null);
    }
    function c(d, u, e) {
      if (u) return d.emit("error", u);
      if ((null != e && d.push(e), d._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (d._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return d.push(null);
    }
    (t.inherits = e(7)),
      t.inherits(r, n),
      (r.prototype.push = function(d, u) {
        return (
          (this._transformState.needTransform = !1),
          n.prototype.push.call(this, d, u)
        );
      }),
      (r.prototype._transform = function(d, u, e) {
        throw new Error("_transform() is not implemented");
      }),
      (r.prototype._write = function(d, u, e) {
        var n = this._transformState;
        if (
          ((n.writecb = e),
          (n.writechunk = d),
          (n.writeencoding = u),
          !n.transforming)
        ) {
          var t = this._readableState;
          (n.needTransform || t.needReadable || t.length < t.highWaterMark) &&
            this._read(t.highWaterMark);
        }
      }),
      (r.prototype._read = function(d) {
        var u = this._transformState;
        null !== u.writechunk && u.writecb && !u.transforming
          ? ((u.transforming = !0),
            this._transform(u.writechunk, u.writeencoding, u.afterTransform))
          : (u.needTransform = !0);
      }),
      (r.prototype._destroy = function(d, u) {
        var e = this;
        n.prototype._destroy.call(this, d, function(d) {
          u(d), e.emit("close");
        });
      });
  },
  function(d, u, e) {
    const n = e(206),
      t = {
        TITLE_COMPLETE: "TITLE_COMPLETE",
        TITLE_INCOMPLETE: "TITLE_INCOMPLETE",
        COMMENT: "COMMENT",
        BODY: "BODY"
      },
      a = new Map([
        [n("^(?<type>- \\[[xX]\\])(?<body>.+)$"), t.TITLE_COMPLETE],
        [n("^(?<type>- \\[ ?\\])(?<body>.+)$"), t.TITLE_INCOMPLETE],
        [n("^(?<type>#)(?<body>.+)$"), t.COMMENT]
      ]),
      r = {
        TYPES: t,
        fromString(d) {
          const u = (d => Array.from(a.keys()).find(u => !!d.match(u)))(d);
          return u
            ? {
                type: a.get(u) || t.BODY,
                text: n.replace(d, u, "{{type}}${body}")
              }
            : { type: t.BODY, text: d };
        }
      };
    d.exports = r;
  },
  function(d, u, e) {
    var n = e(71),
      t = e(9).document,
      a = n(t) && n(t.createElement);
    d.exports = function(d) {
      return a ? t.createElement(d) : {};
    };
  },
  function(d, u) {
    d.exports = function(d, u) {
      return {
        enumerable: !(1 & d),
        configurable: !(2 & d),
        writable: !(4 & d),
        value: u
      };
    };
  },
  function(d, u, e) {
    var n = e(45),
      t = e(215),
      a = e(128),
      r = e(76)("IE_PROTO"),
      f = function() {},
      c = function() {
        var d,
          u = e(122)("iframe"),
          n = a.length;
        for (
          u.style.display = "none",
            e(222).appendChild(u),
            u.src = "javascript:",
            (d = u.contentWindow.document).open(),
            d.write("<script>document.F=Object</script>"),
            d.close(),
            c = d.F;
          n--;

        )
          delete c.prototype[a[n]];
        return c();
      };
    d.exports =
      Object.create ||
      function(d, u) {
        var e;
        return (
          null !== d
            ? ((f.prototype = n(d)),
              (e = new f()),
              (f.prototype = null),
              (e[r] = d))
            : (e = c()),
          void 0 === u ? e : t(e, u)
        );
      };
  },
  function(d, u, e) {
    var n = e(10),
      t = e(9),
      a = t["__core-js_shared__"] || (t["__core-js_shared__"] = {});
    (d.exports = function(d, u) {
      return a[d] || (a[d] = void 0 !== u ? u : {});
    })("versions", []).push({
      version: n.version,
      mode: e(126) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(d, u) {
    d.exports = !0;
  },
  function(d, u) {
    var e = 0,
      n = Math.random();
    d.exports = function(d) {
      return "Symbol(".concat(
        void 0 === d ? "" : d,
        ")_",
        (++e + n).toString(36)
      );
    };
  },
  function(d, u) {
    d.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  function(d, u, e) {
    "use strict";
    var n = e(126),
      t = e(33),
      a = e(235),
      r = e(34),
      f = e(49),
      c = e(236),
      i = e(130),
      o = e(237),
      s = e(24)("iterator"),
      l = !([].keys && "next" in [].keys()),
      m = function() {
        return this;
      };
    d.exports = function(d, u, e, p, h, b, y) {
      c(e, u, p);
      var g,
        _,
        v,
        w = function(d) {
          if (!l && d in k) return k[d];
          switch (d) {
            case "keys":
            case "values":
              return function() {
                return new e(this, d);
              };
          }
          return function() {
            return new e(this, d);
          };
        },
        I = u + " Iterator",
        S = "values" == h,
        x = !1,
        k = d.prototype,
        E = k[s] || k["@@iterator"] || (h && k[h]),
        M = E || w(h),
        T = h ? (S ? w("entries") : M) : void 0,
        O = ("Array" == u && k.entries) || E;
      if (
        (O &&
          (v = o(O.call(new d()))) !== Object.prototype &&
          v.next &&
          (i(v, I, !0), n || "function" == typeof v[s] || r(v, s, m)),
        S &&
          E &&
          "values" !== E.name &&
          ((x = !0),
          (M = function() {
            return E.call(this);
          })),
        (n && !y) || (!l && !x && k[s]) || r(k, s, M),
        (f[u] = M),
        (f[I] = m),
        h)
      )
        if (
          ((g = {
            values: S ? M : w("values"),
            keys: b ? M : w("keys"),
            entries: T
          }),
          y)
        )
          for (_ in g) _ in k || a(k, _, g[_]);
        else t(t.P + t.F * (l || x), u, g);
      return g;
    };
  },
  function(d, u, e) {
    var n = e(70).f,
      t = e(47),
      a = e(24)("toStringTag");
    d.exports = function(d, u, e) {
      d &&
        !t((d = e ? d : d.prototype), a) &&
        n(d, a, { configurable: !0, value: u });
    };
  },
  function(d, u) {
    d.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function(d, u, e) {
    const n = e(25);
    d.exports = function(d, { time: u, timezone: e }) {
      const t = n(u, e).fromISO(d);
      let a = t.toFormat("yyyy-LL-dd");
      return 0 === t.hour && 0 === t.minute
        ? a
        : ((a = `${a} at ${t.toFormat("h")}`),
          0 !== t.minute && (a = `${a}:${t.toFormat("mm")}`),
          (a = `${a}${t.toFormat("a").toLowerCase()}`));
    };
  },
  function(d, u, e) {
    var n = e(79),
      t = e(12).document,
      a = n(t) && n(t.createElement);
    d.exports = function(d) {
      return a ? t.createElement(d) : {};
    };
  },
  function(d, u) {
    d.exports = function(d, u) {
      return {
        enumerable: !(1 & d),
        configurable: !(2 & d),
        writable: !(4 & d),
        value: u
      };
    };
  },
  function(d, u, e) {
    var n = e(50),
      t = e(274),
      a = e(139),
      r = e(84)("IE_PROTO"),
      f = function() {},
      c = function() {
        var d,
          u = e(133)("iframe"),
          n = a.length;
        for (
          u.style.display = "none",
            e(281).appendChild(u),
            u.src = "javascript:",
            (d = u.contentWindow.document).open(),
            d.write("<script>document.F=Object</script>"),
            d.close(),
            c = d.F;
          n--;

        )
          delete c.prototype[a[n]];
        return c();
      };
    d.exports =
      Object.create ||
      function(d, u) {
        var e;
        return (
          null !== d
            ? ((f.prototype = n(d)),
              (e = new f()),
              (f.prototype = null),
              (e[r] = d))
            : (e = c()),
          void 0 === u ? e : t(e, u)
        );
      };
  },
  function(d, u, e) {
    var n = e(13),
      t = e(12),
      a = t["__core-js_shared__"] || (t["__core-js_shared__"] = {});
    (d.exports = function(d, u) {
      return a[d] || (a[d] = void 0 !== u ? u : {});
    })("versions", []).push({
      version: n.version,
      mode: e(137) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(d, u) {
    d.exports = !0;
  },
  function(d, u) {
    var e = 0,
      n = Math.random();
    d.exports = function(d) {
      return "Symbol(".concat(
        void 0 === d ? "" : d,
        ")_",
        (++e + n).toString(36)
      );
    };
  },
  function(d, u) {
    d.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  function(d, u, e) {
    "use strict";
    var n = e(137),
      t = e(35),
      a = e(294),
      r = e(36),
      f = e(54),
      c = e(295),
      i = e(141),
      o = e(296),
      s = e(26)("iterator"),
      l = !([].keys && "next" in [].keys()),
      m = function() {
        return this;
      };
    d.exports = function(d, u, e, p, h, b, y) {
      c(e, u, p);
      var g,
        _,
        v,
        w = function(d) {
          if (!l && d in k) return k[d];
          switch (d) {
            case "keys":
            case "values":
              return function() {
                return new e(this, d);
              };
          }
          return function() {
            return new e(this, d);
          };
        },
        I = u + " Iterator",
        S = "values" == h,
        x = !1,
        k = d.prototype,
        E = k[s] || k["@@iterator"] || (h && k[h]),
        M = E || w(h),
        T = h ? (S ? w("entries") : M) : void 0,
        O = ("Array" == u && k.entries) || E;
      if (
        (O &&
          (v = o(O.call(new d()))) !== Object.prototype &&
          v.next &&
          (i(v, I, !0), n || "function" == typeof v[s] || r(v, s, m)),
        S &&
          E &&
          "values" !== E.name &&
          ((x = !0),
          (M = function() {
            return E.call(this);
          })),
        (n && !y) || (!l && !x && k[s]) || r(k, s, M),
        (f[u] = M),
        (f[I] = m),
        h)
      )
        if (
          ((g = {
            values: S ? M : w("values"),
            keys: b ? M : w("keys"),
            entries: T
          }),
          y)
        )
          for (_ in g) _ in k || a(k, _, g[_]);
        else t(t.P + t.F * (l || x), u, g);
      return g;
    };
  },
  function(d, u, e) {
    var n = e(78).f,
      t = e(52),
      a = e(26)("toStringTag");
    d.exports = function(d, u, e) {
      d &&
        !t((d = e ? d : d.prototype), a) &&
        n(d, a, { configurable: !0, value: u });
    };
  },
  function(d, u) {
    d.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function(d, u, e) {
    var n = e(87),
      t = e(15).document,
      a = n(t) && n(t.createElement);
    d.exports = function(d) {
      return a ? t.createElement(d) : {};
    };
  },
  function(d, u) {
    d.exports = function(d, u) {
      return {
        enumerable: !(1 & d),
        configurable: !(2 & d),
        writable: !(4 & d),
        value: u
      };
    };
  },
  function(d, u, e) {
    var n = e(55),
      t = e(331),
      a = e(149),
      r = e(92)("IE_PROTO"),
      f = function() {},
      c = function() {
        var d,
          u = e(143)("iframe"),
          n = a.length;
        for (
          u.style.display = "none",
            e(338).appendChild(u),
            u.src = "javascript:",
            (d = u.contentWindow.document).open(),
            d.write("<script>document.F=Object</script>"),
            d.close(),
            c = d.F;
          n--;

        )
          delete c.prototype[a[n]];
        return c();
      };
    d.exports =
      Object.create ||
      function(d, u) {
        var e;
        return (
          null !== d
            ? ((f.prototype = n(d)),
              (e = new f()),
              (f.prototype = null),
              (e[r] = d))
            : (e = c()),
          void 0 === u ? e : t(e, u)
        );
      };
  },
  function(d, u, e) {
    var n = e(16),
      t = e(15),
      a = t["__core-js_shared__"] || (t["__core-js_shared__"] = {});
    (d.exports = function(d, u) {
      return a[d] || (a[d] = void 0 !== u ? u : {});
    })("versions", []).push({
      version: n.version,
      mode: e(147) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(d, u) {
    d.exports = !0;
  },
  function(d, u) {
    var e = 0,
      n = Math.random();
    d.exports = function(d) {
      return "Symbol(".concat(
        void 0 === d ? "" : d,
        ")_",
        (++e + n).toString(36)
      );
    };
  },
  function(d, u) {
    d.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  function(d, u, e) {
    "use strict";
    var n = e(147),
      t = e(37),
      a = e(351),
      r = e(38),
      f = e(59),
      c = e(352),
      i = e(151),
      o = e(353),
      s = e(27)("iterator"),
      l = !([].keys && "next" in [].keys()),
      m = function() {
        return this;
      };
    d.exports = function(d, u, e, p, h, b, y) {
      c(e, u, p);
      var g,
        _,
        v,
        w = function(d) {
          if (!l && d in k) return k[d];
          switch (d) {
            case "keys":
            case "values":
              return function() {
                return new e(this, d);
              };
          }
          return function() {
            return new e(this, d);
          };
        },
        I = u + " Iterator",
        S = "values" == h,
        x = !1,
        k = d.prototype,
        E = k[s] || k["@@iterator"] || (h && k[h]),
        M = E || w(h),
        T = h ? (S ? w("entries") : M) : void 0,
        O = ("Array" == u && k.entries) || E;
      if (
        (O &&
          (v = o(O.call(new d()))) !== Object.prototype &&
          v.next &&
          (i(v, I, !0), n || "function" == typeof v[s] || r(v, s, m)),
        S &&
          E &&
          "values" !== E.name &&
          ((x = !0),
          (M = function() {
            return E.call(this);
          })),
        (n && !y) || (!l && !x && k[s]) || r(k, s, M),
        (f[u] = M),
        (f[I] = m),
        h)
      )
        if (
          ((g = {
            values: S ? M : w("values"),
            keys: b ? M : w("keys"),
            entries: T
          }),
          y)
        )
          for (_ in g) _ in k || a(k, _, g[_]);
        else t(t.P + t.F * (l || x), u, g);
      return g;
    };
  },
  function(d, u, e) {
    var n = e(86).f,
      t = e(57),
      a = e(27)("toStringTag");
    d.exports = function(d, u, e) {
      d &&
        !t((d = e ? d : d.prototype), a) &&
        n(d, a, { configurable: !0, value: u });
    };
  },
  function(d, u) {
    d.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function(d, u) {
    d.exports = {
      VALID_REPEAT_TYPES: { start: "START", complete: "COMPLETE" }
    };
  },
  function(d, u, e) {
    var n = e(95),
      t = e(18).document,
      a = n(t) && n(t.createElement);
    d.exports = function(d) {
      return a ? t.createElement(d) : {};
    };
  },
  function(d, u) {
    d.exports = function(d, u) {
      return {
        enumerable: !(1 & d),
        configurable: !(2 & d),
        writable: !(4 & d),
        value: u
      };
    };
  },
  function(d, u, e) {
    var n = e(60),
      t = e(388),
      a = e(160),
      r = e(100)("IE_PROTO"),
      f = function() {},
      c = function() {
        var d,
          u = e(154)("iframe"),
          n = a.length;
        for (
          u.style.display = "none",
            e(395).appendChild(u),
            u.src = "javascript:",
            (d = u.contentWindow.document).open(),
            d.write("<script>document.F=Object</script>"),
            d.close(),
            c = d.F;
          n--;

        )
          delete c.prototype[a[n]];
        return c();
      };
    d.exports =
      Object.create ||
      function(d, u) {
        var e;
        return (
          null !== d
            ? ((f.prototype = n(d)),
              (e = new f()),
              (f.prototype = null),
              (e[r] = d))
            : (e = c()),
          void 0 === u ? e : t(e, u)
        );
      };
  },
  function(d, u, e) {
    var n = e(19),
      t = e(18),
      a = t["__core-js_shared__"] || (t["__core-js_shared__"] = {});
    (d.exports = function(d, u) {
      return a[d] || (a[d] = void 0 !== u ? u : {});
    })("versions", []).push({
      version: n.version,
      mode: e(158) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(d, u) {
    d.exports = !0;
  },
  function(d, u) {
    var e = 0,
      n = Math.random();
    d.exports = function(d) {
      return "Symbol(".concat(
        void 0 === d ? "" : d,
        ")_",
        (++e + n).toString(36)
      );
    };
  },
  function(d, u) {
    d.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  function(d, u, e) {
    "use strict";
    var n = e(158),
      t = e(39),
      a = e(408),
      r = e(40),
      f = e(64),
      c = e(409),
      i = e(162),
      o = e(410),
      s = e(28)("iterator"),
      l = !([].keys && "next" in [].keys()),
      m = function() {
        return this;
      };
    d.exports = function(d, u, e, p, h, b, y) {
      c(e, u, p);
      var g,
        _,
        v,
        w = function(d) {
          if (!l && d in k) return k[d];
          switch (d) {
            case "keys":
            case "values":
              return function() {
                return new e(this, d);
              };
          }
          return function() {
            return new e(this, d);
          };
        },
        I = u + " Iterator",
        S = "values" == h,
        x = !1,
        k = d.prototype,
        E = k[s] || k["@@iterator"] || (h && k[h]),
        M = E || w(h),
        T = h ? (S ? w("entries") : M) : void 0,
        O = ("Array" == u && k.entries) || E;
      if (
        (O &&
          (v = o(O.call(new d()))) !== Object.prototype &&
          v.next &&
          (i(v, I, !0), n || "function" == typeof v[s] || r(v, s, m)),
        S &&
          E &&
          "values" !== E.name &&
          ((x = !0),
          (M = function() {
            return E.call(this);
          })),
        (n && !y) || (!l && !x && k[s]) || r(k, s, M),
        (f[u] = M),
        (f[I] = m),
        h)
      )
        if (
          ((g = {
            values: S ? M : w("values"),
            keys: b ? M : w("keys"),
            entries: T
          }),
          y)
        )
          for (_ in g) _ in k || a(k, _, g[_]);
        else t(t.P + t.F * (l || x), u, g);
      return g;
    };
  },
  function(d, u, e) {
    var n = e(94).f,
      t = e(62),
      a = e(28)("toStringTag");
    d.exports = function(d, u, e) {
      d &&
        !t((d = e ? d : d.prototype), a) &&
        n(d, a, { configurable: !0, value: u });
    };
  },
  function(d, u) {
    d.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function(d, u, e) {
    const { Readable: n } = e(2),
      t = e(177);
    let a;
    const r = () => {
        if (a) return a;
        try {
          return (a = Intl.DateTimeFormat().resolvedOptions().timeZone);
        } catch (d) {
          return "";
        }
      },
      f = "\n- [X] Learn to use MDo\n- [ ] Pick up milk\n- [ ] Take out trash\n    @start tomorrow at 8pm\n    @repeat every day from complete\n".trim(),
      c = d =>
        new n({
          read() {
            return d.length && this.push(d), this.push(null);
          }
        });
    window.MDo = {
      demo: ({ container: d } = {}) => {
        if (!d) return;
        const u = document.createElement("textarea");
        (u.className = "origin"), (u.innerHTML = f), d.appendChild(u);
        const e = document.createElement("textarea");
        (e.className = "destination"), (e.readOnly = !0), d.appendChild(e);
        const n = document.createElement("button");
        (n.innerHTML = "Run"),
          d.appendChild(n),
          (n.onclick = () => {
            let d = "";
            c(u.value)
              .pipe(t({ time: new Date().toISOString(), timezone: r() }))
              .on("data", u => {
                d = `${d}${u}`;
              })
              .on("error", u => {
                d = u.message;
              })
              .on("end", () => {
                e.textContent = d;
              });
          });
      }
    };
  },
  function(d, u, e) {
    "use strict";
    (u.byteLength = function(d) {
      var u = i(d),
        e = u[0],
        n = u[1];
      return (3 * (e + n)) / 4 - n;
    }),
      (u.toByteArray = function(d) {
        for (
          var u,
            e = i(d),
            n = e[0],
            r = e[1],
            f = new a(
              (function(d, u, e) {
                return (3 * (u + e)) / 4 - e;
              })(0, n, r)
            ),
            c = 0,
            o = r > 0 ? n - 4 : n,
            s = 0;
          s < o;
          s += 4
        )
          (u =
            (t[d.charCodeAt(s)] << 18) |
            (t[d.charCodeAt(s + 1)] << 12) |
            (t[d.charCodeAt(s + 2)] << 6) |
            t[d.charCodeAt(s + 3)]),
            (f[c++] = (u >> 16) & 255),
            (f[c++] = (u >> 8) & 255),
            (f[c++] = 255 & u);
        2 === r &&
          ((u = (t[d.charCodeAt(s)] << 2) | (t[d.charCodeAt(s + 1)] >> 4)),
          (f[c++] = 255 & u));
        1 === r &&
          ((u =
            (t[d.charCodeAt(s)] << 10) |
            (t[d.charCodeAt(s + 1)] << 4) |
            (t[d.charCodeAt(s + 2)] >> 2)),
          (f[c++] = (u >> 8) & 255),
          (f[c++] = 255 & u));
        return f;
      }),
      (u.fromByteArray = function(d) {
        for (
          var u, e = d.length, t = e % 3, a = [], r = 0, f = e - t;
          r < f;
          r += 16383
        )
          a.push(o(d, r, r + 16383 > f ? f : r + 16383));
        1 === t
          ? ((u = d[e - 1]), a.push(n[u >> 2] + n[(u << 4) & 63] + "=="))
          : 2 === t &&
            ((u = (d[e - 2] << 8) + d[e - 1]),
            a.push(n[u >> 10] + n[(u >> 4) & 63] + n[(u << 2) & 63] + "="));
        return a.join("");
      });
    for (
      var n = [],
        t = [],
        a = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        f = 0,
        c = r.length;
      f < c;
      ++f
    )
      (n[f] = r[f]), (t[r.charCodeAt(f)] = f);
    function i(d) {
      var u = d.length;
      if (u % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var e = d.indexOf("=");
      return -1 === e && (e = u), [e, e === u ? 0 : 4 - (e % 4)];
    }
    function o(d, u, e) {
      for (var t, a, r = [], f = u; f < e; f += 3)
        (t =
          ((d[f] << 16) & 16711680) +
          ((d[f + 1] << 8) & 65280) +
          (255 & d[f + 2])),
          r.push(
            n[((a = t) >> 18) & 63] +
              n[(a >> 12) & 63] +
              n[(a >> 6) & 63] +
              n[63 & a]
          );
      return r.join("");
    }
    (t["-".charCodeAt(0)] = 62), (t["_".charCodeAt(0)] = 63);
  },
  function(d, u) {
    (u.read = function(d, u, e, n, t) {
      var a,
        r,
        f = 8 * t - n - 1,
        c = (1 << f) - 1,
        i = c >> 1,
        o = -7,
        s = e ? t - 1 : 0,
        l = e ? -1 : 1,
        m = d[u + s];
      for (
        s += l, a = m & ((1 << -o) - 1), m >>= -o, o += f;
        o > 0;
        a = 256 * a + d[u + s], s += l, o -= 8
      );
      for (
        r = a & ((1 << -o) - 1), a >>= -o, o += n;
        o > 0;
        r = 256 * r + d[u + s], s += l, o -= 8
      );
      if (0 === a) a = 1 - i;
      else {
        if (a === c) return r ? NaN : (1 / 0) * (m ? -1 : 1);
        (r += Math.pow(2, n)), (a -= i);
      }
      return (m ? -1 : 1) * r * Math.pow(2, a - n);
    }),
      (u.write = function(d, u, e, n, t, a) {
        var r,
          f,
          c,
          i = 8 * a - t - 1,
          o = (1 << i) - 1,
          s = o >> 1,
          l = 23 === t ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          m = n ? 0 : a - 1,
          p = n ? 1 : -1,
          h = u < 0 || (0 === u && 1 / u < 0) ? 1 : 0;
        for (
          u = Math.abs(u),
            isNaN(u) || u === 1 / 0
              ? ((f = isNaN(u) ? 1 : 0), (r = o))
              : ((r = Math.floor(Math.log(u) / Math.LN2)),
                u * (c = Math.pow(2, -r)) < 1 && (r--, (c *= 2)),
                (u += r + s >= 1 ? l / c : l * Math.pow(2, 1 - s)) * c >= 2 &&
                  (r++, (c /= 2)),
                r + s >= o
                  ? ((f = 0), (r = o))
                  : r + s >= 1
                  ? ((f = (u * c - 1) * Math.pow(2, t)), (r += s))
                  : ((f = u * Math.pow(2, s - 1) * Math.pow(2, t)), (r = 0)));
          t >= 8;
          d[e + m] = 255 & f, m += p, f /= 256, t -= 8
        );
        for (
          r = (r << t) | f, i += t;
          i > 0;
          d[e + m] = 255 & r, m += p, r /= 256, i -= 8
        );
        d[e + m - p] |= 128 * h;
      });
  },
  function(d, u) {},
  function(d, u, e) {
    "use strict";
    var n = e(42).Buffer,
      t = e(169);
    (d.exports = (function() {
      function d() {
        !(function(d, u) {
          if (!(d instanceof u))
            throw new TypeError("Cannot call a class as a function");
        })(this, d),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (d.prototype.push = function(d) {
          var u = { data: d, next: null };
          this.length > 0 ? (this.tail.next = u) : (this.head = u),
            (this.tail = u),
            ++this.length;
        }),
        (d.prototype.unshift = function(d) {
          var u = { data: d, next: this.head };
          0 === this.length && (this.tail = u), (this.head = u), ++this.length;
        }),
        (d.prototype.shift = function() {
          if (0 !== this.length) {
            var d = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              d
            );
          }
        }),
        (d.prototype.clear = function() {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (d.prototype.join = function(d) {
          if (0 === this.length) return "";
          for (var u = this.head, e = "" + u.data; (u = u.next); )
            e += d + u.data;
          return e;
        }),
        (d.prototype.concat = function(d) {
          if (0 === this.length) return n.alloc(0);
          if (1 === this.length) return this.head.data;
          for (
            var u, e, t, a = n.allocUnsafe(d >>> 0), r = this.head, f = 0;
            r;

          )
            (u = r.data),
              (e = a),
              (t = f),
              u.copy(e, t),
              (f += r.data.length),
              (r = r.next);
          return a;
        }),
        d
      );
    })()),
      t &&
        t.inspect &&
        t.inspect.custom &&
        (d.exports.prototype[t.inspect.custom] = function() {
          var d = t.inspect({ length: this.length });
          return this.constructor.name + " " + d;
        });
  },
  function(d, u) {},
  function(d, u, e) {
    (function(d, u) {
      !(function(d, e) {
        "use strict";
        if (!d.setImmediate) {
          var n,
            t,
            a,
            r,
            f,
            c = 1,
            i = {},
            o = !1,
            s = d.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(d);
          (l = l && l.setTimeout ? l : d),
            "[object process]" === {}.toString.call(d.process)
              ? (n = function(d) {
                  u.nextTick(function() {
                    p(d);
                  });
                })
              : !(function() {
                  if (d.postMessage && !d.importScripts) {
                    var u = !0,
                      e = d.onmessage;
                    return (
                      (d.onmessage = function() {
                        u = !1;
                      }),
                      d.postMessage("", "*"),
                      (d.onmessage = e),
                      u
                    );
                  }
                })()
              ? d.MessageChannel
                ? (((a = new MessageChannel()).port1.onmessage = function(d) {
                    p(d.data);
                  }),
                  (n = function(d) {
                    a.port2.postMessage(d);
                  }))
                : s && "onreadystatechange" in s.createElement("script")
                ? ((t = s.documentElement),
                  (n = function(d) {
                    var u = s.createElement("script");
                    (u.onreadystatechange = function() {
                      p(d),
                        (u.onreadystatechange = null),
                        t.removeChild(u),
                        (u = null);
                    }),
                      t.appendChild(u);
                  }))
                : (n = function(d) {
                    setTimeout(p, 0, d);
                  })
              : ((r = "setImmediate$" + Math.random() + "$"),
                (f = function(u) {
                  u.source === d &&
                    "string" == typeof u.data &&
                    0 === u.data.indexOf(r) &&
                    p(+u.data.slice(r.length));
                }),
                d.addEventListener
                  ? d.addEventListener("message", f, !1)
                  : d.attachEvent("onmessage", f),
                (n = function(u) {
                  d.postMessage(r + u, "*");
                })),
            (l.setImmediate = function(d) {
              "function" != typeof d && (d = new Function("" + d));
              for (
                var u = new Array(arguments.length - 1), e = 0;
                e < u.length;
                e++
              )
                u[e] = arguments[e + 1];
              var t = { callback: d, args: u };
              return (i[c] = t), n(c), c++;
            }),
            (l.clearImmediate = m);
        }
        function m(d) {
          delete i[d];
        }
        function p(d) {
          if (o) setTimeout(p, 0, d);
          else {
            var u = i[d];
            if (u) {
              o = !0;
              try {
                !(function(d) {
                  var u = d.callback,
                    n = d.args;
                  switch (n.length) {
                    case 0:
                      u();
                      break;
                    case 1:
                      u(n[0]);
                      break;
                    case 2:
                      u(n[0], n[1]);
                      break;
                    case 3:
                      u(n[0], n[1], n[2]);
                      break;
                    default:
                      u.apply(e, n);
                  }
                })(u);
              } finally {
                m(d), (o = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === d ? this : d) : self);
    }.call(this, e(1), e(0)));
  },
  function(d, u, e) {
    (function(u) {
      function e(d) {
        try {
          if (!u.localStorage) return !1;
        } catch (d) {
          return !1;
        }
        var e = u.localStorage[d];
        return null != e && "true" === String(e).toLowerCase();
      }
      d.exports = function(d, u) {
        if (e("noDeprecation")) return d;
        var n = !1;
        return function() {
          if (!n) {
            if (e("throwDeprecation")) throw new Error(u);
            e("traceDeprecation") ? console.trace(u) : console.warn(u),
              (n = !0);
          }
          return d.apply(this, arguments);
        };
      };
    }.call(this, e(1)));
  },
  function(d, u, e) {
    "use strict";
    d.exports = a;
    var n = e(106),
      t = e(29);
    function a(d) {
      if (!(this instanceof a)) return new a(d);
      n.call(this, d);
    }
    (t.inherits = e(20)),
      t.inherits(a, n),
      (a.prototype._transform = function(d, u, e) {
        e(null, d);
      });
  },
  function(d, u, e) {
    d.exports = e(66);
  },
  function(d, u, e) {
    d.exports = e(5);
  },
  function(d, u, e) {
    d.exports = e(65).Transform;
  },
  function(d, u, e) {
    d.exports = e(65).PassThrough;
  },
  function(d, u, e) {
    const n = e(178),
      t = e(191),
      a = e(262),
      r = e(320),
      f = e(377),
      c = e(434),
      i = e(435),
      o = e(436);
    d.exports = ({ time: d, timezone: u }) =>
      n(
        [
          t.parse,
          a.parse,
          r.parse,
          f.parse,
          o.parse,
          f.process,
          c,
          i,
          o.process,
          o.sort,
          f.stringify,
          r.stringify,
          a.stringify,
          o.stringify,
          t.stringify
        ].map(e => e({ time: d, timezone: u }))
      );
  },
  function(d, u, e) {
    var n = e(179),
      t = e(6),
      a = e(182),
      r = function(d) {
        return d.length
          ? Array.isArray(d[0])
            ? d[0]
            : Array.prototype.slice.call(d)
          : [];
      },
      f = function(d) {
        var u = function() {
          var e = r(arguments);
          if (!(this instanceof u)) return new u(e);
          a.call(this, null, null, d), e.length && this.setPipeline(e);
        };
        return (
          t(u, a),
          (u.prototype.setPipeline = function() {
            var d = r(arguments),
              u = this,
              e = !1,
              t = d[0],
              a = d[d.length - 1];
            (a = a.readable ? a : null), (t = t.writable ? t : null);
            var f = function() {
              d[0].emit("error", new Error("stream was destroyed"));
            };
            if (
              (this.on("close", f),
              this.on("prefinish", function() {
                e || u.cork();
              }),
              n(d, function(d) {
                if ((u.removeListener("close", f), d))
                  return u.destroy("premature close" === d.message ? null : d);
                (e = !0),
                  !1 === u._autoDestroy && (u._autoDestroy = !0),
                  u.uncork();
              }),
              this.destroyed)
            )
              return f();
            this.setWritable(t), this.setReadable(a);
          }),
          u
        );
      };
    (d.exports = f({ autoDestroy: !1, destroy: !1 })),
      (d.exports.obj = f({
        autoDestroy: !1,
        destroy: !1,
        objectMode: !0,
        highWaterMark: 16
      })),
      (d.exports.ctor = f);
  },
  function(d, u, e) {
    (function(u) {
      var n = e(107),
        t = e(108),
        a = e(181),
        r = function() {},
        f = /^v?\.0/.test(u.version),
        c = function(d) {
          return "function" == typeof d;
        },
        i = function(d, u, e, i) {
          i = n(i);
          var o = !1;
          d.on("close", function() {
            o = !0;
          }),
            t(d, { readable: u, writable: e }, function(d) {
              if (d) return i(d);
              (o = !0), i();
            });
          var s = !1;
          return function(u) {
            if (!o && !s)
              return (
                (s = !0),
                (function(d) {
                  return (
                    !!f &&
                    !!a &&
                    (d instanceof (a.ReadStream || r) ||
                      d instanceof (a.WriteStream || r)) &&
                    c(d.close)
                  );
                })(d)
                  ? d.close(r)
                  : (function(d) {
                      return d.setHeader && c(d.abort);
                    })(d)
                  ? d.abort()
                  : c(d.destroy)
                  ? d.destroy()
                  : void i(u || new Error("stream was destroyed"))
              );
          };
        },
        o = function(d) {
          d();
        },
        s = function(d, u) {
          return d.pipe(u);
        };
      d.exports = function() {
        var d,
          u = Array.prototype.slice.call(arguments),
          e = (c(u[u.length - 1] || r) && u.pop()) || r;
        if ((Array.isArray(u[0]) && (u = u[0]), u.length < 2))
          throw new Error("pump requires two streams per minimum");
        var n = u.map(function(t, a) {
          var r = a < u.length - 1;
          return i(t, r, a > 0, function(u) {
            d || (d = u), u && n.forEach(o), r || (n.forEach(o), e(d));
          });
        });
        u.reduce(s);
      };
    }.call(this, e(0)));
  },
  function(d, u) {
    d.exports = function d(u, e) {
      if (u && e) return d(u)(e);
      if ("function" != typeof u) throw new TypeError("need wrapper function");
      Object.keys(u).forEach(function(d) {
        n[d] = u[d];
      });
      return n;
      function n() {
        for (var d = new Array(arguments.length), e = 0; e < d.length; e++)
          d[e] = arguments[e];
        var n = u.apply(this, d),
          t = d[d.length - 1];
        return (
          "function" == typeof n &&
            n !== t &&
            Object.keys(t).forEach(function(d) {
              n[d] = t[d];
            }),
          n
        );
      }
    };
  },
  function(d, u) {},
  function(d, u, e) {
    (function(u, n) {
      var t = e(183),
        a = e(108),
        r = e(6),
        f = e(190),
        c = u.from && u.from !== Uint8Array.from ? u.from([0]) : new u([0]),
        i = function(d, u) {
          d._corked ? d.once("uncork", u) : u();
        },
        o = function(d, u) {
          return function(e) {
            e
              ? (function(d, u) {
                  d._autoDestroy && d.destroy(u);
                })(d, "premature close" === e.message ? null : e)
              : u && !d._ended && d.end();
          };
        },
        s = function(d, u, e) {
          if (!(this instanceof s)) return new s(d, u, e);
          t.Duplex.call(this, e),
            (this._writable = null),
            (this._readable = null),
            (this._readable2 = null),
            (this._autoDestroy = !e || !1 !== e.autoDestroy),
            (this._forwardDestroy = !e || !1 !== e.destroy),
            (this._forwardEnd = !e || !1 !== e.end),
            (this._corked = 1),
            (this._ondrain = null),
            (this._drained = !1),
            (this._forwarding = !1),
            (this._unwrite = null),
            (this._unread = null),
            (this._ended = !1),
            (this.destroyed = !1),
            d && this.setWritable(d),
            u && this.setReadable(u);
        };
      r(s, t.Duplex),
        (s.obj = function(d, u, e) {
          return (
            e || (e = {}),
            (e.objectMode = !0),
            (e.highWaterMark = 16),
            new s(d, u, e)
          );
        }),
        (s.prototype.cork = function() {
          1 == ++this._corked && this.emit("cork");
        }),
        (s.prototype.uncork = function() {
          this._corked && 0 == --this._corked && this.emit("uncork");
        }),
        (s.prototype.setWritable = function(d) {
          if ((this._unwrite && this._unwrite(), this.destroyed))
            d && d.destroy && d.destroy();
          else if (null !== d && !1 !== d) {
            var u = this,
              e = a(
                d,
                { writable: !0, readable: !1 },
                o(this, this._forwardEnd)
              ),
              t = function() {
                var d = u._ondrain;
                (u._ondrain = null), d && d();
              };
            this._unwrite && n.nextTick(t),
              (this._writable = d),
              this._writable.on("drain", t),
              (this._unwrite = function() {
                u._writable.removeListener("drain", t), e();
              }),
              this.uncork();
          } else this.end();
        }),
        (s.prototype.setReadable = function(d) {
          if ((this._unread && this._unread(), this.destroyed))
            d && d.destroy && d.destroy();
          else {
            if (null === d || !1 === d)
              return this.push(null), void this.resume();
            var u,
              e = this,
              n = a(d, { writable: !1, readable: !0 }, o(this)),
              r = function() {
                e._forward();
              },
              f = function() {
                e.push(null);
              };
            (this._drained = !0),
              (this._readable = d),
              (this._readable2 = d._readableState
                ? d
                : ((u = d),
                  new t.Readable({ objectMode: !0, highWaterMark: 16 }).wrap(
                    u
                  ))),
              this._readable2.on("readable", r),
              this._readable2.on("end", f),
              (this._unread = function() {
                e._readable2.removeListener("readable", r),
                  e._readable2.removeListener("end", f),
                  n();
              }),
              this._forward();
          }
        }),
        (s.prototype._read = function() {
          (this._drained = !0), this._forward();
        }),
        (s.prototype._forward = function() {
          if (!this._forwarding && this._readable2 && this._drained) {
            var d;
            for (
              this._forwarding = !0;
              this._drained && null !== (d = f(this._readable2));

            )
              this.destroyed || (this._drained = this.push(d));
            this._forwarding = !1;
          }
        }),
        (s.prototype.destroy = function(d) {
          if (!this.destroyed) {
            this.destroyed = !0;
            var u = this;
            n.nextTick(function() {
              u._destroy(d);
            });
          }
        }),
        (s.prototype._destroy = function(d) {
          if (d) {
            var u = this._ondrain;
            (this._ondrain = null), u ? u(d) : this.emit("error", d);
          }
          this._forwardDestroy &&
            (this._readable &&
              this._readable.destroy &&
              this._readable.destroy(),
            this._writable &&
              this._writable.destroy &&
              this._writable.destroy()),
            this.emit("close");
        }),
        (s.prototype._write = function(d, u, e) {
          return this.destroyed
            ? e()
            : this._corked
            ? i(this, this._write.bind(this, d, u, e))
            : d === c
            ? this._finish(e)
            : this._writable
            ? void (!1 === this._writable.write(d) ? (this._ondrain = e) : e())
            : e();
        }),
        (s.prototype._finish = function(d) {
          var u = this;
          this.emit("preend"),
            i(this, function() {
              var e, n;
              (e = u._forwardEnd && u._writable),
                (n = function() {
                  !1 === u._writableState.prefinished &&
                    (u._writableState.prefinished = !0),
                    u.emit("prefinish"),
                    i(u, d);
                }),
                e
                  ? e._writableState && e._writableState.finished
                    ? n()
                    : e._writableState
                    ? e.end(n)
                    : (e.end(), n())
                  : n();
            });
        }),
        (s.prototype.end = function(d, u, e) {
          return "function" == typeof d
            ? this.end(null, null, d)
            : "function" == typeof u
            ? this.end(d, null, u)
            : ((this._ended = !0),
              d && this.write(d),
              this._writableState.ending || this.write(c),
              t.Writable.prototype.end.call(this, e));
        }),
        (d.exports = s);
    }.call(this, e(3).Buffer, e(0)));
  },
  function(d, u, e) {
    ((u = d.exports = e(109)).Stream = u),
      (u.Readable = u),
      (u.Writable = e(112)),
      (u.Duplex = e(22)),
      (u.Transform = e(113)),
      (u.PassThrough = e(189));
  },
  function(d, u) {
    var e = {}.toString;
    d.exports =
      Array.isArray ||
      function(d) {
        return "[object Array]" == e.call(d);
      };
  },
  function(d, u) {},
  function(d, u, e) {
    "use strict";
    var n = e(68).Buffer,
      t = e(187);
    (d.exports = (function() {
      function d() {
        !(function(d, u) {
          if (!(d instanceof u))
            throw new TypeError("Cannot call a class as a function");
        })(this, d),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (d.prototype.push = function(d) {
          var u = { data: d, next: null };
          this.length > 0 ? (this.tail.next = u) : (this.head = u),
            (this.tail = u),
            ++this.length;
        }),
        (d.prototype.unshift = function(d) {
          var u = { data: d, next: this.head };
          0 === this.length && (this.tail = u), (this.head = u), ++this.length;
        }),
        (d.prototype.shift = function() {
          if (0 !== this.length) {
            var d = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              d
            );
          }
        }),
        (d.prototype.clear = function() {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (d.prototype.join = function(d) {
          if (0 === this.length) return "";
          for (var u = this.head, e = "" + u.data; (u = u.next); )
            e += d + u.data;
          return e;
        }),
        (d.prototype.concat = function(d) {
          if (0 === this.length) return n.alloc(0);
          if (1 === this.length) return this.head.data;
          for (
            var u, e, t, a = n.allocUnsafe(d >>> 0), r = this.head, f = 0;
            r;

          )
            (u = r.data),
              (e = a),
              (t = f),
              u.copy(e, t),
              (f += r.data.length),
              (r = r.next);
          return a;
        }),
        d
      );
    })()),
      t &&
        t.inspect &&
        t.inspect.custom &&
        (d.exports.prototype[t.inspect.custom] = function() {
          var d = t.inspect({ length: this.length });
          return this.constructor.name + " " + d;
        });
  },
  function(d, u) {},
  function(d, u, e) {
    (function(u) {
      function e(d) {
        try {
          if (!u.localStorage) return !1;
        } catch (d) {
          return !1;
        }
        var e = u.localStorage[d];
        return null != e && "true" === String(e).toLowerCase();
      }
      d.exports = function(d, u) {
        if (e("noDeprecation")) return d;
        var n = !1;
        return function() {
          if (!n) {
            if (e("throwDeprecation")) throw new Error(u);
            e("traceDeprecation") ? console.trace(u) : console.warn(u),
              (n = !0);
          }
          return d.apply(this, arguments);
        };
      };
    }.call(this, e(1)));
  },
  function(d, u, e) {
    "use strict";
    d.exports = a;
    var n = e(113),
      t = e(30);
    function a(d) {
      if (!(this instanceof a)) return new a(d);
      n.call(this, d);
    }
    (t.inherits = e(6)),
      t.inherits(a, n),
      (a.prototype._transform = function(d, u, e) {
        e(null, d);
      });
  },
  function(d, u) {
    d.exports = function(d) {
      var u = d._readableState;
      return u
        ? u.objectMode
          ? d.read()
          : d.read(
              ((e = u),
              e.buffer.length
                ? e.buffer.head
                  ? e.buffer.head.data.length
                  : e.buffer[0].length
                : e.length)
            )
        : null;
      var e;
    };
  },
  function(d, u, e) {
    const n = e(192),
      t = e(261);
    d.exports = { parse: n, stringify: t };
  },
  function(d, u, e) {
    const n = e(193),
      { Transform: t } = e(2),
      a = e(32),
      r = e(121),
      f = () => {
        let d = "";
        return new t({
          objectMode: !0,
          transform(u, e, n) {
            const t = (d = `${d}${u.toString()}`).split("\n"),
              a = t.pop();
            "string" == typeof a &&
              ((d = a), t.forEach(d => this.push(r.fromString(d)))),
              n();
          },
          flush(u) {
            this.push(r.fromString(d)), u();
          }
        });
      },
      c = () => {
        let d;
        return new t({
          objectMode: !0,
          transform(u, e, n) {
            const t = a.fromLine(u, { isFirstLine: !d });
            return t
              ? (d && a.splitByPadding(d).forEach(d => this.push(d)),
                (d = t),
                n())
              : (d && a.appendLine(d, u), n());
          },
          flush(u) {
            this.push(d), u();
          }
        });
      },
      i = () =>
        new t({
          objectMode: !0,
          transform(d, u, e) {
            try {
              let u;
              for (; (u = d.text.match(/@(\w+) ([^@\n]+)/)); ) {
                const [e, n, t] = u,
                  a = t.match(/\s*$/);
                if (d[n]) {
                  const u = `Duplicate @${n} tag for block:\n${d.text}`;
                  throw new Error(u);
                }
                (d[n] = t.trimRight()),
                  (d.text = d.text.replace(e, `{{${n}}}${a}`));
              }
            } catch (d) {
              return e(d);
            }
            return this.push(d), e();
          }
        });
    d.exports = function() {
      return n.obj(f(), c(), i());
    };
  },
  function(d, u, e) {
    var n = e(194),
      t = e(7),
      a = e(197),
      r = function(d) {
        return d.length
          ? Array.isArray(d[0])
            ? d[0]
            : Array.prototype.slice.call(d)
          : [];
      },
      f = function(d) {
        var u = function() {
          var e = r(arguments);
          if (!(this instanceof u)) return new u(e);
          a.call(this, null, null, d), e.length && this.setPipeline(e);
        };
        return (
          t(u, a),
          (u.prototype.setPipeline = function() {
            var d = r(arguments),
              u = this,
              e = !1,
              t = d[0],
              a = d[d.length - 1];
            (a = a.readable ? a : null), (t = t.writable ? t : null);
            var f = function() {
              d[0].emit("error", new Error("stream was destroyed"));
            };
            if (
              (this.on("close", f),
              this.on("prefinish", function() {
                e || u.cork();
              }),
              n(d, function(d) {
                if ((u.removeListener("close", f), d))
                  return u.destroy("premature close" === d.message ? null : d);
                (e = !0),
                  !1 === u._autoDestroy && (u._autoDestroy = !0),
                  u.uncork();
              }),
              this.destroyed)
            )
              return f();
            this.setWritable(t), this.setReadable(a);
          }),
          u
        );
      };
    (d.exports = f({ autoDestroy: !1, destroy: !1 })),
      (d.exports.obj = f({
        autoDestroy: !1,
        destroy: !1,
        objectMode: !0,
        highWaterMark: 16
      })),
      (d.exports.ctor = f);
  },
  function(d, u, e) {
    (function(u) {
      var n = e(114),
        t = e(115),
        a = e(196),
        r = function() {},
        f = /^v?\.0/.test(u.version),
        c = function(d) {
          return "function" == typeof d;
        },
        i = function(d, u, e, i) {
          i = n(i);
          var o = !1;
          d.on("close", function() {
            o = !0;
          }),
            t(d, { readable: u, writable: e }, function(d) {
              if (d) return i(d);
              (o = !0), i();
            });
          var s = !1;
          return function(u) {
            if (!o && !s)
              return (
                (s = !0),
                (function(d) {
                  return (
                    !!f &&
                    !!a &&
                    (d instanceof (a.ReadStream || r) ||
                      d instanceof (a.WriteStream || r)) &&
                    c(d.close)
                  );
                })(d)
                  ? d.close(r)
                  : (function(d) {
                      return d.setHeader && c(d.abort);
                    })(d)
                  ? d.abort()
                  : c(d.destroy)
                  ? d.destroy()
                  : void i(u || new Error("stream was destroyed"))
              );
          };
        },
        o = function(d) {
          d();
        },
        s = function(d, u) {
          return d.pipe(u);
        };
      d.exports = function() {
        var d,
          u = Array.prototype.slice.call(arguments),
          e = (c(u[u.length - 1] || r) && u.pop()) || r;
        if ((Array.isArray(u[0]) && (u = u[0]), u.length < 2))
          throw new Error("pump requires two streams per minimum");
        var n = u.map(function(t, a) {
          var r = a < u.length - 1;
          return i(t, r, a > 0, function(u) {
            d || (d = u), u && n.forEach(o), r || (n.forEach(o), e(d));
          });
        });
        u.reduce(s);
      };
    }.call(this, e(0)));
  },
  function(d, u) {
    d.exports = function d(u, e) {
      if (u && e) return d(u)(e);
      if ("function" != typeof u) throw new TypeError("need wrapper function");
      Object.keys(u).forEach(function(d) {
        n[d] = u[d];
      });
      return n;
      function n() {
        for (var d = new Array(arguments.length), e = 0; e < d.length; e++)
          d[e] = arguments[e];
        var n = u.apply(this, d),
          t = d[d.length - 1];
        return (
          "function" == typeof n &&
            n !== t &&
            Object.keys(t).forEach(function(d) {
              n[d] = t[d];
            }),
          n
        );
      }
    };
  },
  function(d, u) {},
  function(d, u, e) {
    (function(u, n) {
      var t = e(198),
        a = e(115),
        r = e(7),
        f = e(205),
        c = u.from && u.from !== Uint8Array.from ? u.from([0]) : new u([0]),
        i = function(d, u) {
          d._corked ? d.once("uncork", u) : u();
        },
        o = function(d, u) {
          return function(e) {
            e
              ? (function(d, u) {
                  d._autoDestroy && d.destroy(u);
                })(d, "premature close" === e.message ? null : e)
              : u && !d._ended && d.end();
          };
        },
        s = function(d, u, e) {
          if (!(this instanceof s)) return new s(d, u, e);
          t.Duplex.call(this, e),
            (this._writable = null),
            (this._readable = null),
            (this._readable2 = null),
            (this._autoDestroy = !e || !1 !== e.autoDestroy),
            (this._forwardDestroy = !e || !1 !== e.destroy),
            (this._forwardEnd = !e || !1 !== e.end),
            (this._corked = 1),
            (this._ondrain = null),
            (this._drained = !1),
            (this._forwarding = !1),
            (this._unwrite = null),
            (this._unread = null),
            (this._ended = !1),
            (this.destroyed = !1),
            d && this.setWritable(d),
            u && this.setReadable(u);
        };
      r(s, t.Duplex),
        (s.obj = function(d, u, e) {
          return (
            e || (e = {}),
            (e.objectMode = !0),
            (e.highWaterMark = 16),
            new s(d, u, e)
          );
        }),
        (s.prototype.cork = function() {
          1 == ++this._corked && this.emit("cork");
        }),
        (s.prototype.uncork = function() {
          this._corked && 0 == --this._corked && this.emit("uncork");
        }),
        (s.prototype.setWritable = function(d) {
          if ((this._unwrite && this._unwrite(), this.destroyed))
            d && d.destroy && d.destroy();
          else if (null !== d && !1 !== d) {
            var u = this,
              e = a(
                d,
                { writable: !0, readable: !1 },
                o(this, this._forwardEnd)
              ),
              t = function() {
                var d = u._ondrain;
                (u._ondrain = null), d && d();
              };
            this._unwrite && n.nextTick(t),
              (this._writable = d),
              this._writable.on("drain", t),
              (this._unwrite = function() {
                u._writable.removeListener("drain", t), e();
              }),
              this.uncork();
          } else this.end();
        }),
        (s.prototype.setReadable = function(d) {
          if ((this._unread && this._unread(), this.destroyed))
            d && d.destroy && d.destroy();
          else {
            if (null === d || !1 === d)
              return this.push(null), void this.resume();
            var u,
              e = this,
              n = a(d, { writable: !1, readable: !0 }, o(this)),
              r = function() {
                e._forward();
              },
              f = function() {
                e.push(null);
              };
            (this._drained = !0),
              (this._readable = d),
              (this._readable2 = d._readableState
                ? d
                : ((u = d),
                  new t.Readable({ objectMode: !0, highWaterMark: 16 }).wrap(
                    u
                  ))),
              this._readable2.on("readable", r),
              this._readable2.on("end", f),
              (this._unread = function() {
                e._readable2.removeListener("readable", r),
                  e._readable2.removeListener("end", f),
                  n();
              }),
              this._forward();
          }
        }),
        (s.prototype._read = function() {
          (this._drained = !0), this._forward();
        }),
        (s.prototype._forward = function() {
          if (!this._forwarding && this._readable2 && this._drained) {
            var d;
            for (
              this._forwarding = !0;
              this._drained && null !== (d = f(this._readable2));

            )
              this.destroyed || (this._drained = this.push(d));
            this._forwarding = !1;
          }
        }),
        (s.prototype.destroy = function(d) {
          if (!this.destroyed) {
            this.destroyed = !0;
            var u = this;
            n.nextTick(function() {
              u._destroy(d);
            });
          }
        }),
        (s.prototype._destroy = function(d) {
          if (d) {
            var u = this._ondrain;
            (this._ondrain = null), u ? u(d) : this.emit("error", d);
          }
          this._forwardDestroy &&
            (this._readable &&
              this._readable.destroy &&
              this._readable.destroy(),
            this._writable &&
              this._writable.destroy &&
              this._writable.destroy()),
            this.emit("close");
        }),
        (s.prototype._write = function(d, u, e) {
          return this.destroyed
            ? e()
            : this._corked
            ? i(this, this._write.bind(this, d, u, e))
            : d === c
            ? this._finish(e)
            : this._writable
            ? void (!1 === this._writable.write(d) ? (this._ondrain = e) : e())
            : e();
        }),
        (s.prototype._finish = function(d) {
          var u = this;
          this.emit("preend"),
            i(this, function() {
              var e, n;
              (e = u._forwardEnd && u._writable),
                (n = function() {
                  !1 === u._writableState.prefinished &&
                    (u._writableState.prefinished = !0),
                    u.emit("prefinish"),
                    i(u, d);
                }),
                e
                  ? e._writableState && e._writableState.finished
                    ? n()
                    : e._writableState
                    ? e.end(n)
                    : (e.end(), n())
                  : n();
            });
        }),
        (s.prototype.end = function(d, u, e) {
          return "function" == typeof d
            ? this.end(null, null, d)
            : "function" == typeof u
            ? this.end(d, null, u)
            : ((this._ended = !0),
              d && this.write(d),
              this._writableState.ending || this.write(c),
              t.Writable.prototype.end.call(this, e));
        }),
        (d.exports = s);
    }.call(this, e(3).Buffer, e(0)));
  },
  function(d, u, e) {
    ((u = d.exports = e(116)).Stream = u),
      (u.Readable = u),
      (u.Writable = e(119)),
      (u.Duplex = e(23)),
      (u.Transform = e(120)),
      (u.PassThrough = e(204));
  },
  function(d, u) {
    var e = {}.toString;
    d.exports =
      Array.isArray ||
      function(d) {
        return "[object Array]" == e.call(d);
      };
  },
  function(d, u) {},
  function(d, u, e) {
    "use strict";
    var n = e(69).Buffer,
      t = e(202);
    (d.exports = (function() {
      function d() {
        !(function(d, u) {
          if (!(d instanceof u))
            throw new TypeError("Cannot call a class as a function");
        })(this, d),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (d.prototype.push = function(d) {
          var u = { data: d, next: null };
          this.length > 0 ? (this.tail.next = u) : (this.head = u),
            (this.tail = u),
            ++this.length;
        }),
        (d.prototype.unshift = function(d) {
          var u = { data: d, next: this.head };
          0 === this.length && (this.tail = u), (this.head = u), ++this.length;
        }),
        (d.prototype.shift = function() {
          if (0 !== this.length) {
            var d = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              d
            );
          }
        }),
        (d.prototype.clear = function() {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (d.prototype.join = function(d) {
          if (0 === this.length) return "";
          for (var u = this.head, e = "" + u.data; (u = u.next); )
            e += d + u.data;
          return e;
        }),
        (d.prototype.concat = function(d) {
          if (0 === this.length) return n.alloc(0);
          if (1 === this.length) return this.head.data;
          for (
            var u, e, t, a = n.allocUnsafe(d >>> 0), r = this.head, f = 0;
            r;

          )
            (u = r.data),
              (e = a),
              (t = f),
              u.copy(e, t),
              (f += r.data.length),
              (r = r.next);
          return a;
        }),
        d
      );
    })()),
      t &&
        t.inspect &&
        t.inspect.custom &&
        (d.exports.prototype[t.inspect.custom] = function() {
          var d = t.inspect({ length: this.length });
          return this.constructor.name + " " + d;
        });
  },
  function(d, u) {},
  function(d, u, e) {
    (function(u) {
      function e(d) {
        try {
          if (!u.localStorage) return !1;
        } catch (d) {
          return !1;
        }
        var e = u.localStorage[d];
        return null != e && "true" === String(e).toLowerCase();
      }
      d.exports = function(d, u) {
        if (e("noDeprecation")) return d;
        var n = !1;
        return function() {
          if (!n) {
            if (e("throwDeprecation")) throw new Error(u);
            e("traceDeprecation") ? console.trace(u) : console.warn(u),
              (n = !0);
          }
          return d.apply(this, arguments);
        };
      };
    }.call(this, e(1)));
  },
  function(d, u, e) {
    "use strict";
    d.exports = a;
    var n = e(120),
      t = e(31);
    function a(d) {
      if (!(this instanceof a)) return new a(d);
      n.call(this, d);
    }
    (t.inherits = e(7)),
      t.inherits(a, n),
      (a.prototype._transform = function(d, u, e) {
        e(null, d);
      });
  },
  function(d, u) {
    d.exports = function(d) {
      var u = d._readableState;
      return u
        ? u.objectMode
          ? d.read()
          : d.read(
              ((e = u),
              e.buffer.length
                ? e.buffer.head
                  ? e.buffer.head.data.length
                  : e.buffer[0].length
                : e.length)
            )
        : null;
      var e;
    };
  },
  function(d, u, e) {
    "use strict";
    var n = e(8);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(207)),
      a = n(e(250)),
      r = n(e(251)),
      f = n(e(252)),
      c = n(e(253)),
      i = n(e(255)),
      o = n(e(257)),
      s = n(e(259));
    (0, a.default)(t.default),
      (0, r.default)(t.default),
      (0, f.default)(t.default),
      (0, c.default)(t.default),
      (0, i.default)(t.default),
      (0, o.default)(t.default),
      (0, s.default)(t.default);
    var l = t.default;
    (u.default = l), (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(8);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(208)),
      a = n(e(223)),
      r = n(e(77)),
      f = n(e(245)),
      c = "xregexp",
      i = { astral: !1, namespacing: !1 },
      o = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
      },
      s = {},
      l = {},
      m = {},
      p = [],
      h = "default",
      b = "class",
      y = {
        default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
        class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
      },
      g = /\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g,
      _ = void 0 === o.exec.call(/()??/, "")[1],
      v = void 0 !== /x/.flags,
      w = {}.toString;
    function I(d) {
      var u = !0;
      try {
        new RegExp("", d);
      } catch (d) {
        u = !1;
      }
      return u;
    }
    var S = I("u"),
      x = I("y"),
      k = { g: !0, i: !0, m: !0, u: S, y: x };
    function E(d, u, e, n, t) {
      if (((d[c] = { captureNames: u }), t)) return d;
      if (d.__proto__) d.__proto__ = U.prototype;
      else for (var a in U.prototype) d[a] = U.prototype[a];
      return (
        (d[c].source = e),
        (d[c].flags = n
          ? n
              .split("")
              .sort()
              .join("")
          : n),
        d
      );
    }
    function M(d) {
      return o.replace.call(d, /([\s\S])(?=[\s\S]*\1)/g, "");
    }
    function T(d, u) {
      if (!U.isRegExp(d)) throw new TypeError("Type RegExp expected");
      var e = d[c] || {},
        n = (function(d) {
          return v
            ? d.flags
            : o.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(d))[1];
        })(d),
        t = "",
        a = "",
        r = null,
        f = null;
      return (
        (u = u || {}).removeG && (a += "g"),
        u.removeY && (a += "y"),
        a && (n = o.replace.call(n, new RegExp("[".concat(a, "]+"), "g"), "")),
        u.addG && (t += "g"),
        u.addY && (t += "y"),
        t && (n = M(n + t)),
        u.isInternalOnly ||
          (void 0 !== e.source && (r = e.source),
          null != e.flags && (f = t ? M(e.flags + t) : e.flags)),
        (d = E(
          new RegExp(u.source || d.source, n),
          (function(d) {
            return !(!d[c] || !d[c].captureNames);
          })(d)
            ? e.captureNames.slice(0)
            : null,
          r,
          f,
          u.isInternalOnly
        ))
      );
    }
    function O(d) {
      return (0, f.default)(d, 16);
    }
    function C(d, u, e) {
      return "(" === d.input[d.index - 1] ||
        ")" === d.input[d.index + d[0].length] ||
        "|" === d.input[d.index - 1] ||
        "|" === d.input[d.index + d[0].length] ||
        d.index < 1 ||
        d.index + d[0].length >= d.input.length ||
        o.test.call(/^\(\?[:=!]/, d.input.substr(d.index - 3, 3)) ||
        (function(d, u, e) {
          return o.test.call(
            -1 !== e.indexOf("x")
              ? /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
              : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,
            d.slice(u)
          );
        })(d.input, d.index + d[0].length, e)
        ? ""
        : "(?:)";
    }
    function A(d) {
      return (0, f.default)(d, 10).toString(16);
    }
    function L(d, u) {
      return w.call(d) === "[object ".concat(u, "]");
    }
    function P(d) {
      for (; d.length < 4; ) d = "0".concat(d);
      return d;
    }
    function N(d) {
      var u = {};
      return L(d, "String")
        ? (U.forEach(d, /[^\s,]+/, function(d) {
            u[d] = !0;
          }),
          u)
        : d;
    }
    function R(d) {
      if (!/^[\w$]$/.test(d))
        throw new Error("Flag must be a single character A-Za-z0-9_$");
      k[d] = !0;
    }
    function j(d, u, e, n, t) {
      for (var a, r, f = p.length, c = d[e], i = null; f--; )
        if (
          !(
            ((r = p[f]).leadChar && r.leadChar !== c) ||
            (r.scope !== n && "all" !== r.scope) ||
            (r.flag && -1 === u.indexOf(r.flag))
          ) &&
          (a = U.exec(d, r.regex, e, "sticky"))
        ) {
          i = {
            matchLength: a[0].length,
            output: r.handler.call(t, a, n, u),
            reparse: r.reparse
          };
          break;
        }
      return i;
    }
    function D(d) {
      i.astral = d;
    }
    function B(d) {
      i.namespacing = d;
    }
    function F(d) {
      if (null == d)
        throw new TypeError("Cannot convert null or undefined to object");
      return d;
    }
    function U(d, u) {
      if (U.isRegExp(d)) {
        if (void 0 !== u)
          throw new TypeError("Cannot supply flags when copying a RegExp");
        return T(d);
      }
      if (
        ((d = void 0 === d ? "" : String(d)),
        (u = void 0 === u ? "" : String(u)),
        U.isInstalled("astral") && -1 === u.indexOf("A") && (u += "A"),
        m[d] || (m[d] = {}),
        !m[d][u])
      ) {
        for (
          var e,
            n = { hasNamedCapture: !1, captureNames: [] },
            t = h,
            f = "",
            c = 0,
            i = (function(d, u) {
              if (M(u) !== u)
                throw new SyntaxError(
                  "Invalid duplicate regex flag ".concat(u)
                );
              d = o.replace.call(d, /^\(\?([\w$]+)\)/, function(d, e) {
                if (o.test.call(/[gy]/, e))
                  throw new SyntaxError(
                    "Cannot use flag g or y in mode modifier ".concat(d)
                  );
                return (u = M(u + e)), "";
              });
              var e = !0,
                n = !1,
                t = void 0;
              try {
                for (
                  var a, f = (0, r.default)(u);
                  !(e = (a = f.next()).done);
                  e = !0
                ) {
                  var c = a.value;
                  if (!k[c])
                    throw new SyntaxError("Unknown regex flag ".concat(c));
                }
              } catch (d) {
                (n = !0), (t = d);
              } finally {
                try {
                  e || null == f.return || f.return();
                } finally {
                  if (n) throw t;
                }
              }
              return { pattern: d, flags: u };
            })(d, u),
            s = i.pattern,
            l = i.flags;
          c < s.length;

        ) {
          do {
            (e = j(s, l, c, t, n)) &&
              e.reparse &&
              (s = s.slice(0, c) + e.output + s.slice(c + e.matchLength));
          } while (e && e.reparse);
          if (e) (f += e.output), (c += e.matchLength || 1);
          else {
            var p = U.exec(s, y[t], c, "sticky"),
              g = (0, a.default)(p, 1)[0];
            (f += g),
              (c += g.length),
              "[" === g && t === h ? (t = b) : "]" === g && t === b && (t = h);
          }
        }
        m[d][u] = {
          pattern: o.replace.call(f, /(?:\(\?:\))+/g, "(?:)"),
          flags: o.replace.call(l, /[^gimuy]+/g, ""),
          captures: n.hasNamedCapture ? n.captureNames : null
        };
      }
      var _ = m[d][u];
      return E(new RegExp(_.pattern, _.flags), _.captures, d, u);
    }
    (U.prototype = /(?:)/),
      (U.version = "4.2.4"),
      (U._clipDuplicates = M),
      (U._hasNativeFlag = I),
      (U._dec = O),
      (U._hex = A),
      (U._pad4 = P),
      (U.addToken = function(d, u, e) {
        var n = (e = e || {}).optionalFlags;
        if ((e.flag && R(e.flag), n)) {
          n = o.split.call(n, "");
          var t = !0,
            a = !1,
            f = void 0;
          try {
            for (
              var c, i = (0, r.default)(n);
              !(t = (c = i.next()).done);
              t = !0
            ) {
              R(c.value);
            }
          } catch (d) {
            (a = !0), (f = d);
          } finally {
            try {
              t || null == i.return || i.return();
            } finally {
              if (a) throw f;
            }
          }
        }
        p.push({
          regex: T(d, { addG: !0, addY: x, isInternalOnly: !0 }),
          handler: u,
          scope: e.scope || h,
          flag: e.flag,
          reparse: e.reparse,
          leadChar: e.leadChar
        }),
          U.cache.flush("patterns");
      }),
      (U.cache = function(d, u) {
        return l[d] || (l[d] = {}), l[d][u] || (l[d][u] = U(d, u));
      }),
      (U.cache.flush = function(d) {
        "patterns" === d ? (m = {}) : (l = {});
      }),
      (U.escape = function(d) {
        return o.replace.call(F(d), /[-\[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }),
      (U.exec = function(d, u, e, n) {
        var t,
          a,
          r = "g",
          f = !1;
        (t = x && !!(n || (u.sticky && !1 !== n)))
          ? (r += "y")
          : n && ((f = !0), (r += "FakeY")),
          (u[c] = u[c] || {});
        var i =
          u[c][r] ||
          (u[c][r] = T(u, {
            addG: !0,
            addY: t,
            source: f ? "".concat(u.source, "|()") : void 0,
            removeY: !1 === n,
            isInternalOnly: !0
          }));
        return (
          (e = e || 0),
          (i.lastIndex = e),
          (a = s.exec.call(i, d)),
          f && a && "" === a.pop() && (a = null),
          u.global && (u.lastIndex = a ? i.lastIndex : 0),
          a
        );
      }),
      (U.forEach = function(d, u, e) {
        for (var n, t = 0, a = -1; (n = U.exec(d, u, t)); )
          e(n, ++a, d, u), (t = n.index + (n[0].length || 1));
      }),
      (U.globalize = function(d) {
        return T(d, { addG: !0 });
      }),
      (U.install = function(d) {
        (d = N(d)),
          !i.astral && d.astral && D(!0),
          !i.namespacing && d.namespacing && B(!0);
      }),
      (U.isInstalled = function(d) {
        return !!i[d];
      }),
      (U.isRegExp = function(d) {
        return "[object RegExp]" === w.call(d);
      }),
      (U.match = function(d, u, e) {
        var n = (u.global && "one" !== e) || "all" === e,
          t = (n ? "g" : "") + (u.sticky ? "y" : "") || "noGY";
        u[c] = u[c] || {};
        var a =
            u[c][t] ||
            (u[c][t] = T(u, {
              addG: !!n,
              removeG: "one" === e,
              isInternalOnly: !0
            })),
          r = o.match.call(F(d), a);
        return (
          u.global &&
            (u.lastIndex = "one" === e && r ? r.index + r[0].length : 0),
          n ? r || [] : r && r[0]
        );
      }),
      (U.matchChain = function(d, u) {
        return (function d(e, n) {
          var t = u[n].regex ? u[n] : { regex: u[n] },
            a = [];
          function f(d) {
            if (t.backref) {
              var u = "Backreference to undefined group: ".concat(t.backref),
                e = isNaN(t.backref);
              if (e && U.isInstalled("namespacing")) {
                if (!(t.backref in d.groups)) throw new ReferenceError(u);
              } else if (!d.hasOwnProperty(t.backref))
                throw new ReferenceError(u);
              var n =
                e && U.isInstalled("namespacing")
                  ? d.groups[t.backref]
                  : d[t.backref];
              a.push(n || "");
            } else a.push(d[0]);
          }
          var c = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var s, l = (0, r.default)(e);
              !(c = (s = l.next()).done);
              c = !0
            ) {
              var m = s.value;
              U.forEach(m, t.regex, f);
            }
          } catch (d) {
            (i = !0), (o = d);
          } finally {
            try {
              c || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return n !== u.length - 1 && a.length ? d(a, n + 1) : a;
        })([d], 0);
      }),
      (U.replace = function(d, u, e, n) {
        var t = U.isRegExp(u),
          a = (u.global && "one" !== n) || "all" === n,
          r = (a ? "g" : "") + (u.sticky ? "y" : "") || "noGY",
          f = u;
        t
          ? ((u[c] = u[c] || {}),
            (f =
              u[c][r] ||
              (u[c][r] = T(u, {
                addG: !!a,
                removeG: "one" === n,
                isInternalOnly: !0
              }))))
          : a && (f = new RegExp(U.escape(String(u)), "g"));
        var i = s.replace.call(F(d), f, e);
        return t && u.global && (u.lastIndex = 0), i;
      }),
      (U.replaceEach = function(d, u) {
        var e = !0,
          n = !1,
          t = void 0;
        try {
          for (
            var a, f = (0, r.default)(u);
            !(e = (a = f.next()).done);
            e = !0
          ) {
            var c = a.value;
            d = U.replace(d, c[0], c[1], c[2]);
          }
        } catch (d) {
          (n = !0), (t = d);
        } finally {
          try {
            e || null == f.return || f.return();
          } finally {
            if (n) throw t;
          }
        }
        return d;
      }),
      (U.split = function(d, u, e) {
        return s.split.call(F(d), u, e);
      }),
      (U.test = function(d, u, e, n) {
        return !!U.exec(d, u, e, n);
      }),
      (U.uninstall = function(d) {
        (d = N(d)),
          i.astral && d.astral && D(!1),
          i.namespacing && d.namespacing && B(!1);
      }),
      (U.union = function(d, u, e) {
        var n,
          t,
          a = (e = e || {}).conjunction || "or",
          f = 0;
        function i(d, u, e) {
          var a = t[f - n];
          if (u) {
            if ((++f, a)) return "(?<".concat(a, ">");
          } else if (e) return "\\".concat(+e + n);
          return d;
        }
        if (!L(d, "Array") || !d.length)
          throw new TypeError(
            "Must provide a nonempty array of patterns to merge"
          );
        var s = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
          l = [],
          m = !0,
          p = !1,
          h = void 0;
        try {
          for (
            var b, y = (0, r.default)(d);
            !(m = (b = y.next()).done);
            m = !0
          ) {
            var g = b.value;
            U.isRegExp(g)
              ? ((n = f),
                (t = (g[c] && g[c].captureNames) || []),
                l.push(o.replace.call(U(g.source).source, s, i)))
              : l.push(U.escape(g));
          }
        } catch (d) {
          (p = !0), (h = d);
        } finally {
          try {
            m || null == y.return || y.return();
          } finally {
            if (p) throw h;
          }
        }
        var _ = "none" === a ? "" : "|";
        return U(l.join(_), u);
      }),
      (s.exec = function(d) {
        var u = this.lastIndex,
          e = o.exec.apply(this, arguments);
        if (e) {
          if (!_ && e.length > 1 && -1 !== e.indexOf("")) {
            var n = T(this, { removeG: !0, isInternalOnly: !0 });
            o.replace.call(String(d).slice(e.index), n, function() {
              for (var d = arguments.length, u = 1; u < d - 2; ++u)
                void 0 ===
                  (u < 0 || arguments.length <= u ? void 0 : arguments[u]) &&
                  (e[u] = void 0);
            });
          }
          var a = e;
          if (
            (U.isInstalled("namespacing") &&
              ((e.groups = (0, t.default)(null)), (a = e.groups)),
            this[c] && this[c].captureNames)
          )
            for (var r = 1; r < e.length; ++r) {
              var f = this[c].captureNames[r - 1];
              f && (a[f] = e[r]);
            }
          this.global &&
            !e[0].length &&
            this.lastIndex > e.index &&
            (this.lastIndex = e.index);
        }
        return this.global || (this.lastIndex = u), e;
      }),
      (s.test = function(d) {
        return !!s.exec.call(this, d);
      }),
      (s.match = function(d) {
        if (U.isRegExp(d)) {
          if (d.global) {
            var u = o.match.apply(this, arguments);
            return (d.lastIndex = 0), u;
          }
        } else d = new RegExp(d);
        return s.exec.call(d, F(this));
      }),
      (s.replace = function(d, u) {
        var e,
          n,
          a,
          r = U.isRegExp(d);
        return (
          r ? (d[c] && (n = d[c].captureNames), (e = d.lastIndex)) : (d += ""),
          (a = L(u, "Function")
            ? o.replace.call(String(this), d, function() {
                for (
                  var e = arguments.length, a = new Array(e), f = 0;
                  f < e;
                  f++
                )
                  a[f] = arguments[f];
                if (n) {
                  var c;
                  U.isInstalled("namespacing")
                    ? ((c = (0, t.default)(null)), a.push(c))
                    : ((a[0] = new String(a[0])), (c = a[0]));
                  for (var i = 0; i < n.length; ++i)
                    n[i] && (c[n[i]] = a[i + 1]);
                }
                return (
                  r &&
                    d.global &&
                    (d.lastIndex = a[a.length - 2] + a[0].length),
                  u.apply(void 0, a)
                );
              })
            : o.replace.call(null == this ? this : String(this), d, function() {
                for (
                  var d = arguments.length, e = new Array(d), t = 0;
                  t < d;
                  t++
                )
                  e[t] = arguments[t];
                return o.replace.call(String(u), g, function(d, u, t, a) {
                  if ((u = u || t)) {
                    var r = +u;
                    if (r <= e.length - 3) return e[r] || "";
                    if ((r = n ? n.indexOf(u) : -1) < 0)
                      throw new SyntaxError(
                        "Backreference to undefined group ".concat(d)
                      );
                    return e[r + 1] || "";
                  }
                  if ("$" === a) return "$";
                  if ("&" === a || 0 == +a) return e[0];
                  if ("`" === a)
                    return e[e.length - 1].slice(0, e[e.length - 2]);
                  if ("'" === a)
                    return e[e.length - 1].slice(e[e.length - 2] + e[0].length);
                  if (((a = +a), !isNaN(a))) {
                    if (a > e.length - 3)
                      throw new SyntaxError(
                        "Backreference to undefined group ".concat(d)
                      );
                    return e[a] || "";
                  }
                  throw new SyntaxError("Invalid token ".concat(d));
                });
              })),
          r && (d.global ? (d.lastIndex = 0) : (d.lastIndex = e)),
          a
        );
      }),
      (s.split = function(d, u) {
        if (!U.isRegExp(d)) return o.split.apply(this, arguments);
        var e,
          n = String(this),
          t = [],
          a = d.lastIndex,
          r = 0;
        return (
          (u = (void 0 === u ? -1 : u) >>> 0),
          U.forEach(n, d, function(d) {
            d.index + d[0].length > r &&
              (t.push(n.slice(r, d.index)),
              d.length > 1 &&
                d.index < n.length &&
                Array.prototype.push.apply(t, d.slice(1)),
              (e = d[0].length),
              (r = d.index + e));
          }),
          r === n.length
            ? (o.test.call(d, "") && !e) || t.push("")
            : t.push(n.slice(r)),
          (d.lastIndex = a),
          t.length > u ? t.slice(0, u) : t
        );
      }),
      U.addToken(
        /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
        function(d, u) {
          if ("B" === d[1] && u === h) return d[0];
          throw new SyntaxError("Invalid escape ".concat(d[0]));
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\\u{([\dA-Fa-f]+)}/,
        function(d, u, e) {
          var n = O(d[1]);
          if (n > 1114111)
            throw new SyntaxError("Invalid Unicode code point ".concat(d[0]));
          if (n <= 65535) return "\\u".concat(P(A(n)));
          if (S && -1 !== e.indexOf("u")) return d[0];
          throw new SyntaxError(
            "Cannot use Unicode code point above \\u{FFFF} without flag u"
          );
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\[(\^?)\]/,
        function(d) {
          return d[1] ? "[\\s\\S]" : "\\b\\B";
        },
        { leadChar: "[" }
      ),
      U.addToken(/\(\?#[^)]*\)/, C, { leadChar: "(" }),
      U.addToken(/\s+|#[^\n]*\n?/, C, { flag: "x" }),
      U.addToken(
        /\./,
        function() {
          return "[\\s\\S]";
        },
        { flag: "s", leadChar: "." }
      ),
      U.addToken(
        /\\k<([\w$]+)>/,
        function(d) {
          var u = isNaN(d[1]) ? this.captureNames.indexOf(d[1]) + 1 : +d[1],
            e = d.index + d[0].length;
          if (!u || u > this.captureNames.length)
            throw new SyntaxError(
              "Backreference to undefined group ".concat(d[0])
            );
          return "\\"
            .concat(u)
            .concat(e === d.input.length || isNaN(d.input[e]) ? "" : "(?:)");
        },
        { leadChar: "\\" }
      ),
      U.addToken(
        /\\(\d+)/,
        function(d, u) {
          if (
            !(
              u === h &&
              /^[1-9]/.test(d[1]) &&
              +d[1] <= this.captureNames.length
            ) &&
            "0" !== d[1]
          )
            throw new SyntaxError(
              "Cannot use octal escape or backreference to undefined group ".concat(
                d[0]
              )
            );
          return d[0];
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\(\?P?<([\w$]+)>/,
        function(d) {
          if (!isNaN(d[1]))
            throw new SyntaxError(
              "Cannot use integer as capture name ".concat(d[0])
            );
          if (
            !U.isInstalled("namespacing") &&
            ("length" === d[1] || "__proto__" === d[1])
          )
            throw new SyntaxError(
              "Cannot use reserved word as capture name ".concat(d[0])
            );
          if (-1 !== this.captureNames.indexOf(d[1]))
            throw new SyntaxError(
              "Cannot use same name for multiple groups ".concat(d[0])
            );
          return this.captureNames.push(d[1]), (this.hasNamedCapture = !0), "(";
        },
        { leadChar: "(" }
      ),
      U.addToken(
        /\((?!\?)/,
        function(d, u, e) {
          return -1 !== e.indexOf("n")
            ? "(?:"
            : (this.captureNames.push(null), "(");
        },
        { optionalFlags: "n", leadChar: "(" }
      );
    var H = U;
    (u.default = H), (d.exports = u.default);
  },
  function(d, u, e) {
    d.exports = e(209);
  },
  function(d, u, e) {
    e(210);
    var n = e(10).Object;
    d.exports = function(d, u) {
      return n.create(d, u);
    };
  },
  function(d, u, e) {
    var n = e(33);
    n(n.S, "Object", { create: e(124) });
  },
  function(d, u, e) {
    var n = e(212);
    d.exports = function(d, u, e) {
      if ((n(d), void 0 === u)) return d;
      switch (e) {
        case 1:
          return function(e) {
            return d.call(u, e);
          };
        case 2:
          return function(e, n) {
            return d.call(u, e, n);
          };
        case 3:
          return function(e, n, t) {
            return d.call(u, e, n, t);
          };
      }
      return function() {
        return d.apply(u, arguments);
      };
    };
  },
  function(d, u) {
    d.exports = function(d) {
      if ("function" != typeof d) throw TypeError(d + " is not a function!");
      return d;
    };
  },
  function(d, u, e) {
    d.exports =
      !e(46) &&
      !e(72)(function() {
        return (
          7 !=
          Object.defineProperty(e(122)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(d, u, e) {
    var n = e(71);
    d.exports = function(d, u) {
      if (!n(d)) return d;
      var e, t;
      if (u && "function" == typeof (e = d.toString) && !n((t = e.call(d))))
        return t;
      if ("function" == typeof (e = d.valueOf) && !n((t = e.call(d)))) return t;
      if (!u && "function" == typeof (e = d.toString) && !n((t = e.call(d))))
        return t;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(d, u, e) {
    var n = e(70),
      t = e(45),
      a = e(216);
    d.exports = e(46)
      ? Object.defineProperties
      : function(d, u) {
          t(d);
          for (var e, r = a(u), f = r.length, c = 0; f > c; )
            n.f(d, (e = r[c++]), u[e]);
          return d;
        };
  },
  function(d, u, e) {
    var n = e(217),
      t = e(128);
    d.exports =
      Object.keys ||
      function(d) {
        return n(d, t);
      };
  },
  function(d, u, e) {
    var n = e(47),
      t = e(73),
      a = e(219)(!1),
      r = e(76)("IE_PROTO");
    d.exports = function(d, u) {
      var e,
        f = t(d),
        c = 0,
        i = [];
      for (e in f) e != r && n(f, e) && i.push(e);
      for (; u.length > c; ) n(f, (e = u[c++])) && (~a(i, e) || i.push(e));
      return i;
    };
  },
  function(d, u, e) {
    var n = e(74);
    d.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(d) {
          return "String" == n(d) ? d.split("") : Object(d);
        };
  },
  function(d, u, e) {
    var n = e(73),
      t = e(220),
      a = e(221);
    d.exports = function(d) {
      return function(u, e, r) {
        var f,
          c = n(u),
          i = t(c.length),
          o = a(r, i);
        if (d && e != e) {
          for (; i > o; ) if ((f = c[o++]) != f) return !0;
        } else
          for (; i > o; o++)
            if ((d || o in c) && c[o] === e) return d || o || 0;
        return !d && -1;
      };
    };
  },
  function(d, u, e) {
    var n = e(75),
      t = Math.min;
    d.exports = function(d) {
      return d > 0 ? t(n(d), 9007199254740991) : 0;
    };
  },
  function(d, u, e) {
    var n = e(75),
      t = Math.max,
      a = Math.min;
    d.exports = function(d, u) {
      return (d = n(d)) < 0 ? t(d + u, 0) : a(d, u);
    };
  },
  function(d, u, e) {
    var n = e(9).document;
    d.exports = n && n.documentElement;
  },
  function(d, u, e) {
    var n = e(224),
      t = e(229),
      a = e(244);
    d.exports = function(d, u) {
      return n(d) || t(d, u) || a();
    };
  },
  function(d, u, e) {
    var n = e(225);
    d.exports = function(d) {
      if (n(d)) return d;
    };
  },
  function(d, u, e) {
    d.exports = e(226);
  },
  function(d, u, e) {
    e(227), (d.exports = e(10).Array.isArray);
  },
  function(d, u, e) {
    var n = e(33);
    n(n.S, "Array", { isArray: e(228) });
  },
  function(d, u, e) {
    var n = e(74);
    d.exports =
      Array.isArray ||
      function(d) {
        return "Array" == n(d);
      };
  },
  function(d, u, e) {
    var n = e(77);
    d.exports = function(d, u) {
      var e = [],
        t = !0,
        a = !1,
        r = void 0;
      try {
        for (
          var f, c = n(d);
          !(t = (f = c.next()).done) && (e.push(f.value), !u || e.length !== u);
          t = !0
        );
      } catch (d) {
        (a = !0), (r = d);
      } finally {
        try {
          t || null == c.return || c.return();
        } finally {
          if (a) throw r;
        }
      }
      return e;
    };
  },
  function(d, u, e) {
    e(231), e(239), (d.exports = e(241));
  },
  function(d, u, e) {
    e(232);
    for (
      var n = e(9),
        t = e(34),
        a = e(49),
        r = e(24)("toStringTag"),
        f = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
          ","
        ),
        c = 0;
      c < f.length;
      c++
    ) {
      var i = f[c],
        o = n[i],
        s = o && o.prototype;
      s && !s[r] && t(s, r, i), (a[i] = a.Array);
    }
  },
  function(d, u, e) {
    "use strict";
    var n = e(233),
      t = e(234),
      a = e(49),
      r = e(73);
    (d.exports = e(129)(
      Array,
      "Array",
      function(d, u) {
        (this._t = r(d)), (this._i = 0), (this._k = u);
      },
      function() {
        var d = this._t,
          u = this._k,
          e = this._i++;
        return !d || e >= d.length
          ? ((this._t = void 0), t(1))
          : t(0, "keys" == u ? e : "values" == u ? d[e] : [e, d[e]]);
      },
      "values"
    )),
      (a.Arguments = a.Array),
      n("keys"),
      n("values"),
      n("entries");
  },
  function(d, u) {
    d.exports = function() {};
  },
  function(d, u) {
    d.exports = function(d, u) {
      return { value: u, done: !!d };
    };
  },
  function(d, u, e) {
    d.exports = e(34);
  },
  function(d, u, e) {
    "use strict";
    var n = e(124),
      t = e(123),
      a = e(130),
      r = {};
    e(34)(r, e(24)("iterator"), function() {
      return this;
    }),
      (d.exports = function(d, u, e) {
        (d.prototype = n(r, { next: t(1, e) })), a(d, u + " Iterator");
      });
  },
  function(d, u, e) {
    var n = e(47),
      t = e(238),
      a = e(76)("IE_PROTO"),
      r = Object.prototype;
    d.exports =
      Object.getPrototypeOf ||
      function(d) {
        return (
          (d = t(d)),
          n(d, a)
            ? d[a]
            : "function" == typeof d.constructor && d instanceof d.constructor
            ? d.constructor.prototype
            : d instanceof Object
            ? r
            : null
        );
      };
  },
  function(d, u, e) {
    var n = e(48);
    d.exports = function(d) {
      return Object(n(d));
    };
  },
  function(d, u, e) {
    "use strict";
    var n = e(240)(!0);
    e(129)(
      String,
      "String",
      function(d) {
        (this._t = String(d)), (this._i = 0);
      },
      function() {
        var d,
          u = this._t,
          e = this._i;
        return e >= u.length
          ? { value: void 0, done: !0 }
          : ((d = n(u, e)), (this._i += d.length), { value: d, done: !1 });
      }
    );
  },
  function(d, u, e) {
    var n = e(75),
      t = e(48);
    d.exports = function(d) {
      return function(u, e) {
        var a,
          r,
          f = String(t(u)),
          c = n(e),
          i = f.length;
        return c < 0 || c >= i
          ? d
            ? ""
            : void 0
          : (a = f.charCodeAt(c)) < 55296 ||
            a > 56319 ||
            c + 1 === i ||
            (r = f.charCodeAt(c + 1)) < 56320 ||
            r > 57343
          ? d
            ? f.charAt(c)
            : a
          : d
          ? f.slice(c, c + 2)
          : r - 56320 + ((a - 55296) << 10) + 65536;
      };
    };
  },
  function(d, u, e) {
    var n = e(45),
      t = e(242);
    d.exports = e(10).getIterator = function(d) {
      var u = t(d);
      if ("function" != typeof u) throw TypeError(d + " is not iterable!");
      return n(u.call(d));
    };
  },
  function(d, u, e) {
    var n = e(243),
      t = e(24)("iterator"),
      a = e(49);
    d.exports = e(10).getIteratorMethod = function(d) {
      if (null != d) return d[t] || d["@@iterator"] || a[n(d)];
    };
  },
  function(d, u, e) {
    var n = e(74),
      t = e(24)("toStringTag"),
      a =
        "Arguments" ==
        n(
          (function() {
            return arguments;
          })()
        );
    d.exports = function(d) {
      var u, e, r;
      return void 0 === d
        ? "Undefined"
        : null === d
        ? "Null"
        : "string" ==
          typeof (e = (function(d, u) {
            try {
              return d[u];
            } catch (d) {}
          })((u = Object(d)), t))
        ? e
        : a
        ? n(u)
        : "Object" == (r = n(u)) && "function" == typeof u.callee
        ? "Arguments"
        : r;
    };
  },
  function(d, u) {
    d.exports = function() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
  function(d, u, e) {
    d.exports = e(246);
  },
  function(d, u, e) {
    e(247), (d.exports = e(10).parseInt);
  },
  function(d, u, e) {
    var n = e(33),
      t = e(248);
    n(n.G + n.F * (parseInt != t), { parseInt: t });
  },
  function(d, u, e) {
    var n = e(9).parseInt,
      t = e(249).trim,
      a = e(131),
      r = /^[-+]?0[xX]/;
    d.exports =
      8 !== n(a + "08") || 22 !== n(a + "0x16")
        ? function(d, u) {
            var e = t(String(d), 3);
            return n(e, u >>> 0 || (r.test(e) ? 16 : 10));
          }
        : n;
  },
  function(d, u, e) {
    var n = e(33),
      t = e(48),
      a = e(72),
      r = e(131),
      f = "[" + r + "]",
      c = RegExp("^" + f + f + "*"),
      i = RegExp(f + f + "*$"),
      o = function(d, u, e) {
        var t = {},
          f = a(function() {
            return !!r[d]() || "​" != "​"[d]();
          }),
          c = (t[d] = f ? u(s) : r[d]);
        e && (t[e] = c), n(n.P + n.F * f, "String", t);
      },
      s = (o.trim = function(d, u) {
        return (
          (d = String(t(d))),
          1 & u && (d = d.replace(c, "")),
          2 & u && (d = d.replace(i, "")),
          d
        );
      });
    d.exports = o;
  },
  function(d, u, e) {
    "use strict";
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    (u.default = function(d) {
      var u = "xregexp",
        e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
        n = d.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", {
          conjunction: "or"
        });
      function t(d) {
        var u = /^(?:\(\?:\))*\^/,
          e = /\$(?:\(\?:\))*$/;
        return u.test(d) && e.test(d) && e.test(d.replace(/\\[\s\S]/g, ""))
          ? d.replace(u, "").replace(e, "")
          : d;
      }
      function a(e, n) {
        var t = n ? "x" : "";
        return d.isRegExp(e)
          ? e[u] && e[u].captureNames
            ? e
            : d(e.source, t)
          : d(e, t);
      }
      function r(u) {
        return u instanceof RegExp ? u : d.escape(u);
      }
      function f(d, u, e) {
        return (d["subpattern".concat(e)] = u), d;
      }
      function c(d, u, e) {
        return d + (u < e.length - 1 ? "{{subpattern".concat(u, "}}") : "");
      }
      (d.tag = function(u) {
        return function(e) {
          for (
            var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            t[a - 1] = arguments[a];
          var i = t.map(r).reduce(f, {}),
            o = e.raw.map(c).join("");
          return d.build(o, i, u);
        };
      }),
        (d.build = function(r, f, c) {
          var i = -1 !== (c = c || "").indexOf("x"),
            o = /^\(\?([\w$]+)\)/.exec(r);
          o && (c = d._clipDuplicates(c + o[1]));
          var s = {};
          for (var l in f)
            if (f.hasOwnProperty(l)) {
              var m = a(f[l], i);
              s[l] = { pattern: t(m.source), names: m[u].captureNames || [] };
            }
          var p,
            h = a(r, i),
            b = 0,
            y = 0,
            g = [0],
            _ = h[u].captureNames || [],
            v = h.source.replace(n, function(d, u, n, t, a) {
              var r,
                f,
                c,
                i = u || n;
              if (i) {
                if (!s.hasOwnProperty(i))
                  throw new ReferenceError("Undefined property ".concat(d));
                u
                  ? ((r = _[y]),
                    (g[++y] = ++b),
                    (f = "(?<".concat(r || i, ">")))
                  : (f = "(?:"),
                  (p = b);
                var o = s[i].pattern.replace(e, function(d, u, e) {
                  if (u) {
                    if (((r = s[i].names[b - p]), ++b, r))
                      return "(?<".concat(r, ">");
                  } else if (e) return (c = +e - 1), s[i].names[c] ? "\\k<".concat(s[i].names[c], ">") : "\\".concat(+e + p);
                  return d;
                });
                return "".concat(f).concat(o, ")");
              }
              if (t) {
                if (((r = _[y]), (g[++y] = ++b), r))
                  return "(?<".concat(r, ">");
              } else if (a) return _[(c = +a - 1)] ? "\\k<".concat(_[c], ">") : "\\".concat(g[+a]);
              return d;
            });
          return d(v, c);
        });
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    (u.default = function(d) {
      function u(d, u, e, n) {
        return { name: d, value: u, start: e, end: n };
      }
      d.matchRecursive = function(e, n, t, a, r) {
        r = r || {};
        var f,
          c,
          i,
          o,
          s,
          l = -1 !== (a = a || "").indexOf("g"),
          m = -1 !== a.indexOf("y"),
          p = a.replace(/y/g, ""),
          h = r.escapeChar,
          b = r.valueNames,
          y = [],
          g = 0,
          _ = 0,
          v = 0,
          w = 0;
        if (((n = d(n, p)), (t = d(t, p)), h)) {
          if (h.length > 1)
            throw new Error("Cannot use more than one escape character");
          (h = d.escape(h)),
            (s = new RegExp(
              "(?:"
                .concat(h, "[\\S\\s]|(?:(?!")
                .concat(
                  d.union([n, t], "", { conjunction: "or" }).source,
                  ")[^"
                )
                .concat(h, "])+)+"),
              a.replace(/[^imu]+/g, "")
            ));
        }
        for (;;) {
          if (
            (h && (v += (d.exec(e, s, v, "sticky") || [""])[0].length),
            (i = d.exec(e, n, v)),
            (o = d.exec(e, t, v)),
            i && o && (i.index <= o.index ? (o = null) : (i = null)),
            i || o)
          )
            v = (_ = (i || o).index) + (i || o)[0].length;
          else if (!g) break;
          if (m && !g && _ > w) break;
          if (i) g || ((f = _), (c = v)), ++g;
          else {
            if (!o || !g)
              throw new Error("Unbalanced delimiter found in string");
            if (
              !--g &&
              (b
                ? (b[0] && f > w && y.push(u(b[0], e.slice(w, f), w, f)),
                  b[1] && y.push(u(b[1], e.slice(f, c), f, c)),
                  b[2] && y.push(u(b[2], e.slice(c, _), c, _)),
                  b[3] && y.push(u(b[3], e.slice(_, v), _, v)))
                : y.push(e.slice(c, _)),
              (w = v),
              !l)
            )
              break;
          }
          _ === v && ++v;
        }
        return (
          l &&
            !m &&
            b &&
            b[0] &&
            e.length > w &&
            y.push(u(b[0], e.slice(w), w, e.length)),
          y
        );
      };
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(8);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(77));
    /*!
     * XRegExp Unicode Base 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2008-present MIT License
     */ (u.default = function(d) {
      var u = {},
        e = d._dec,
        n = d._hex,
        a = d._pad4;
      function r(d) {
        return d.replace(/[- _]+/g, "").toLowerCase();
      }
      function f(d) {
        var u = /^\\[xu](.+)/.exec(d);
        return u ? e(u[1]) : d.charCodeAt("\\" === d[0] ? 1 : 0);
      }
      function c(e) {
        var t, r, c;
        return (
          u[e]["b!"] ||
          (u[e]["b!"] = ((t = u[e].bmp),
          (r = ""),
          (c = -1),
          d.forEach(
            t,
            /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
            function(d) {
              var u = f(d[1]);
              u > c + 1 &&
                ((r += "\\u".concat(a(n(c + 1)))),
                u > c + 2 && (r += "-\\u".concat(a(n(u - 1))))),
                (c = f(d[2] || d[1]));
            }
          ),
          c < 65535 &&
            ((r += "\\u".concat(a(n(c + 1)))), c < 65534 && (r += "-\\uFFFF")),
          r))
        );
      }
      function i(d, e) {
        var n = e ? "a!" : "a=";
        return (
          u[d][n] ||
          (u[d][n] = (function(d, e) {
            var n = u[d],
              t = "";
            return (
              n.bmp &&
                !n.isBmpLast &&
                (t = "[".concat(n.bmp, "]").concat(n.astral ? "|" : "")),
              n.astral && (t += n.astral),
              n.isBmpLast &&
                n.bmp &&
                (t += "".concat(n.astral ? "|" : "", "[").concat(n.bmp, "]")),
              e
                ? "(?:(?!".concat(
                    t,
                    ")(?:[\ud800-\udbff][\udc00-\udfff]|[\0-￿]))"
                  )
                : "(?:".concat(t, ")")
            );
          })(d, e))
        );
      }
      d.addToken(
        /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
        function(d, e, n) {
          var t = "P" === d[1] || !!d[2],
            a = -1 !== n.indexOf("A"),
            f = r(d[4] || d[3]),
            o = u[f];
          if ("P" === d[1] && d[2])
            throw new SyntaxError("Invalid double negation " + d[0]);
          if (!u.hasOwnProperty(f))
            throw new SyntaxError("Unknown Unicode token " + d[0]);
          if (o.inverseOf) {
            if (((f = r(o.inverseOf)), !u.hasOwnProperty(f)))
              throw new ReferenceError(
                ""
                  .concat("Unicode token missing data " + d[0], " -> ")
                  .concat(o.inverseOf)
              );
            (o = u[f]), (t = !t);
          }
          if (!o.bmp && !a)
            throw new SyntaxError(
              "Astral mode required for Unicode token " + d[0]
            );
          if (a) {
            if ("class" === e)
              throw new SyntaxError(
                "Astral mode does not support Unicode tokens within character classes"
              );
            return i(f, t);
          }
          return "class" === e
            ? t
              ? c(f)
              : o.bmp
            : "".concat((t ? "[^" : "[") + o.bmp, "]");
        },
        { scope: "all", optionalFlags: "A", leadChar: "\\" }
      ),
        (d.addUnicodeData = function(e) {
          var n = !0,
            a = !1,
            f = void 0;
          try {
            for (
              var c, i = (0, t.default)(e);
              !(n = (c = i.next()).done);
              n = !0
            ) {
              var o = c.value;
              if (!o.name) throw new Error("Unicode token requires name");
              if (!(o.inverseOf || o.bmp || o.astral))
                throw new Error(
                  "Unicode token has no character data " + o.name
                );
              (u[r(o.name)] = o), o.alias && (u[r(o.alias)] = o);
            }
          } catch (d) {
            (a = !0), (f = d);
          } finally {
            try {
              n || null == i.return || i.return();
            } finally {
              if (a) throw f;
            }
          }
          d.cache.flush("patterns");
        }),
        (d._getUnicodeProperty = function(d) {
          var e = r(d);
          return u[e];
        });
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(8);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(254));
    /*!
     * XRegExp Unicode Blocks 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Blocks"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      { name: "InAdlam", astral: "\ud83a[\udd00-\udd5f]" },
      { name: "InAegean_Numbers", astral: "\ud800[\udd00-\udd3f]" },
      { name: "InAhom", astral: "\ud805[\udf00-\udf3f]" },
      { name: "InAlchemical_Symbols", astral: "\ud83d[\udf00-\udf7f]" },
      { name: "InAlphabetic_Presentation_Forms", bmp: "ﬀ-ﭏ" },
      { name: "InAnatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude7f]" },
      {
        name: "InAncient_Greek_Musical_Notation",
        astral: "\ud834[\ude00-\ude4f]"
      },
      { name: "InAncient_Greek_Numbers", astral: "\ud800[\udd40-\udd8f]" },
      { name: "InAncient_Symbols", astral: "\ud800[\udd90-\uddcf]" },
      { name: "InArabic", bmp: "؀-ۿ" },
      { name: "InArabic_Extended_A", bmp: "ࢠ-ࣿ" },
      {
        name: "InArabic_Mathematical_Alphabetic_Symbols",
        astral: "\ud83b[\ude00-\udeff]"
      },
      { name: "InArabic_Presentation_Forms_A", bmp: "ﭐ-﷿" },
      { name: "InArabic_Presentation_Forms_B", bmp: "ﹰ-\ufeff" },
      { name: "InArabic_Supplement", bmp: "ݐ-ݿ" },
      { name: "InArmenian", bmp: "԰-֏" },
      { name: "InArrows", bmp: "←-⇿" },
      { name: "InAvestan", astral: "\ud802[\udf00-\udf3f]" },
      { name: "InBalinese", bmp: "ᬀ-᭿" },
      { name: "InBamum", bmp: "ꚠ-꛿" },
      { name: "InBamum_Supplement", astral: "\ud81a[\udc00-\ude3f]" },
      { name: "InBasic_Latin", bmp: "\0-" },
      { name: "InBassa_Vah", astral: "\ud81a[\uded0-\udeff]" },
      { name: "InBatak", bmp: "ᯀ-᯿" },
      { name: "InBengali", bmp: "ঀ-৿" },
      { name: "InBhaiksuki", astral: "\ud807[\udc00-\udc6f]" },
      { name: "InBlock_Elements", bmp: "▀-▟" },
      { name: "InBopomofo", bmp: "㄀-ㄯ" },
      { name: "InBopomofo_Extended", bmp: "ㆠ-ㆿ" },
      { name: "InBox_Drawing", bmp: "─-╿" },
      { name: "InBrahmi", astral: "\ud804[\udc00-\udc7f]" },
      { name: "InBraille_Patterns", bmp: "⠀-⣿" },
      { name: "InBuginese", bmp: "ᨀ-᨟" },
      { name: "InBuhid", bmp: "ᝀ-᝟" },
      { name: "InByzantine_Musical_Symbols", astral: "\ud834[\udc00-\udcff]" },
      { name: "InCJK_Compatibility", bmp: "㌀-㏿" },
      { name: "InCJK_Compatibility_Forms", bmp: "︰-﹏" },
      { name: "InCJK_Compatibility_Ideographs", bmp: "豈-﫿" },
      {
        name: "InCJK_Compatibility_Ideographs_Supplement",
        astral: "\ud87e[\udc00-\ude1f]"
      },
      { name: "InCJK_Radicals_Supplement", bmp: "⺀-⻿" },
      { name: "InCJK_Strokes", bmp: "㇀-㇯" },
      { name: "InCJK_Symbols_And_Punctuation", bmp: "　-〿" },
      { name: "InCJK_Unified_Ideographs", bmp: "一-鿿" },
      { name: "InCJK_Unified_Ideographs_Extension_A", bmp: "㐀-䶿" },
      {
        name: "InCJK_Unified_Ideographs_Extension_B",
        astral: "[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_C",
        astral:
          "\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf3f]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_D",
        astral: "\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_E",
        astral:
          "\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udeaf]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_F",
        astral:
          "\ud873[\udeb0-\udfff]|[\ud874-\ud879][\udc00-\udfff]|\ud87a[\udc00-\udfef]"
      },
      { name: "InCarian", astral: "\ud800[\udea0-\udedf]" },
      { name: "InCaucasian_Albanian", astral: "\ud801[\udd30-\udd6f]" },
      { name: "InChakma", astral: "\ud804[\udd00-\udd4f]" },
      { name: "InCham", bmp: "ꨀ-꩟" },
      { name: "InCherokee", bmp: "Ꭰ-᏿" },
      { name: "InCherokee_Supplement", bmp: "ꭰ-ꮿ" },
      { name: "InChess_Symbols", astral: "\ud83e[\ude00-\ude6f]" },
      { name: "InCombining_Diacritical_Marks", bmp: "̀-ͯ" },
      { name: "InCombining_Diacritical_Marks_Extended", bmp: "᪰-᫿" },
      { name: "InCombining_Diacritical_Marks_For_Symbols", bmp: "⃐-⃿" },
      { name: "InCombining_Diacritical_Marks_Supplement", bmp: "᷀-᷿" },
      { name: "InCombining_Half_Marks", bmp: "︠-︯" },
      { name: "InCommon_Indic_Number_Forms", bmp: "꠰-꠿" },
      { name: "InControl_Pictures", bmp: "␀-␿" },
      { name: "InCoptic", bmp: "Ⲁ-⳿" },
      { name: "InCoptic_Epact_Numbers", astral: "\ud800[\udee0-\udeff]" },
      { name: "InCounting_Rod_Numerals", astral: "\ud834[\udf60-\udf7f]" },
      { name: "InCuneiform", astral: "\ud808[\udc00-\udfff]" },
      {
        name: "InCuneiform_Numbers_And_Punctuation",
        astral: "\ud809[\udc00-\udc7f]"
      },
      { name: "InCurrency_Symbols", bmp: "₠-⃏" },
      { name: "InCypriot_Syllabary", astral: "\ud802[\udc00-\udc3f]" },
      { name: "InCyrillic", bmp: "Ѐ-ӿ" },
      { name: "InCyrillic_Extended_A", bmp: "ⷠ-ⷿ" },
      { name: "InCyrillic_Extended_B", bmp: "Ꙁ-ꚟ" },
      { name: "InCyrillic_Extended_C", bmp: "ᲀ-᲏" },
      { name: "InCyrillic_Supplement", bmp: "Ԁ-ԯ" },
      { name: "InDeseret", astral: "\ud801[\udc00-\udc4f]" },
      { name: "InDevanagari", bmp: "ऀ-ॿ" },
      { name: "InDevanagari_Extended", bmp: "꣠-ꣿ" },
      { name: "InDingbats", bmp: "✀-➿" },
      { name: "InDogra", astral: "\ud806[\udc00-\udc4f]" },
      { name: "InDomino_Tiles", astral: "\ud83c[\udc30-\udc9f]" },
      { name: "InDuployan", astral: "\ud82f[\udc00-\udc9f]" },
      { name: "InEarly_Dynastic_Cuneiform", astral: "\ud809[\udc80-\udd4f]" },
      {
        name: "InEgyptian_Hieroglyphs",
        astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2f]"
      },
      { name: "InElbasan", astral: "\ud801[\udd00-\udd2f]" },
      { name: "InEmoticons", astral: "\ud83d[\ude00-\ude4f]" },
      {
        name: "InEnclosed_Alphanumeric_Supplement",
        astral: "\ud83c[\udd00-\uddff]"
      },
      { name: "InEnclosed_Alphanumerics", bmp: "①-⓿" },
      { name: "InEnclosed_CJK_Letters_And_Months", bmp: "㈀-㋿" },
      {
        name: "InEnclosed_Ideographic_Supplement",
        astral: "\ud83c[\ude00-\udeff]"
      },
      { name: "InEthiopic", bmp: "ሀ-፿" },
      { name: "InEthiopic_Extended", bmp: "ⶀ-⷟" },
      { name: "InEthiopic_Extended_A", bmp: "꬀-꬯" },
      { name: "InEthiopic_Supplement", bmp: "ᎀ-᎟" },
      { name: "InGeneral_Punctuation", bmp: " -⁯" },
      { name: "InGeometric_Shapes", bmp: "■-◿" },
      { name: "InGeometric_Shapes_Extended", astral: "\ud83d[\udf80-\udfff]" },
      { name: "InGeorgian", bmp: "Ⴀ-ჿ" },
      { name: "InGeorgian_Extended", bmp: "Ა-Ჿ" },
      { name: "InGeorgian_Supplement", bmp: "ⴀ-⴯" },
      { name: "InGlagolitic", bmp: "Ⰰ-ⱟ" },
      { name: "InGlagolitic_Supplement", astral: "\ud838[\udc00-\udc2f]" },
      { name: "InGothic", astral: "\ud800[\udf30-\udf4f]" },
      { name: "InGrantha", astral: "\ud804[\udf00-\udf7f]" },
      { name: "InGreek_And_Coptic", bmp: "Ͱ-Ͽ" },
      { name: "InGreek_Extended", bmp: "ἀ-῿" },
      { name: "InGujarati", bmp: "઀-૿" },
      { name: "InGunjala_Gondi", astral: "\ud807[\udd60-\uddaf]" },
      { name: "InGurmukhi", bmp: "਀-੿" },
      { name: "InHalfwidth_And_Fullwidth_Forms", bmp: "＀-￯" },
      { name: "InHangul_Compatibility_Jamo", bmp: "㄰-㆏" },
      { name: "InHangul_Jamo", bmp: "ᄀ-ᇿ" },
      { name: "InHangul_Jamo_Extended_A", bmp: "ꥠ-꥿" },
      { name: "InHangul_Jamo_Extended_B", bmp: "ힰ-퟿" },
      { name: "InHangul_Syllables", bmp: "가-힯" },
      { name: "InHanifi_Rohingya", astral: "\ud803[\udd00-\udd3f]" },
      { name: "InHanunoo", bmp: "ᜠ-᜿" },
      { name: "InHatran", astral: "\ud802[\udce0-\udcff]" },
      { name: "InHebrew", bmp: "֐-׿" },
      { name: "InHigh_Private_Use_Surrogates", bmp: "\udb80-\udbff" },
      { name: "InHigh_Surrogates", bmp: "\ud800-\udb7f" },
      { name: "InHiragana", bmp: "぀-ゟ" },
      { name: "InIPA_Extensions", bmp: "ɐ-ʯ" },
      { name: "InIdeographic_Description_Characters", bmp: "⿰-⿿" },
      {
        name: "InIdeographic_Symbols_And_Punctuation",
        astral: "\ud81b[\udfe0-\udfff]"
      },
      { name: "InImperial_Aramaic", astral: "\ud802[\udc40-\udc5f]" },
      { name: "InIndic_Siyaq_Numbers", astral: "\ud83b[\udc70-\udcbf]" },
      { name: "InInscriptional_Pahlavi", astral: "\ud802[\udf60-\udf7f]" },
      { name: "InInscriptional_Parthian", astral: "\ud802[\udf40-\udf5f]" },
      { name: "InJavanese", bmp: "ꦀ-꧟" },
      { name: "InKaithi", astral: "\ud804[\udc80-\udccf]" },
      { name: "InKana_Extended_A", astral: "\ud82c[\udd00-\udd2f]" },
      { name: "InKana_Supplement", astral: "\ud82c[\udc00-\udcff]" },
      { name: "InKanbun", bmp: "㆐-㆟" },
      { name: "InKangxi_Radicals", bmp: "⼀-⿟" },
      { name: "InKannada", bmp: "ಀ-೿" },
      { name: "InKatakana", bmp: "゠-ヿ" },
      { name: "InKatakana_Phonetic_Extensions", bmp: "ㇰ-ㇿ" },
      { name: "InKayah_Li", bmp: "꤀-꤯" },
      { name: "InKharoshthi", astral: "\ud802[\ude00-\ude5f]" },
      { name: "InKhmer", bmp: "ក-៿" },
      { name: "InKhmer_Symbols", bmp: "᧠-᧿" },
      { name: "InKhojki", astral: "\ud804[\ude00-\ude4f]" },
      { name: "InKhudawadi", astral: "\ud804[\udeb0-\udeff]" },
      { name: "InLao", bmp: "຀-໿" },
      { name: "InLatin_1_Supplement", bmp: "-ÿ" },
      { name: "InLatin_Extended_A", bmp: "Ā-ſ" },
      { name: "InLatin_Extended_Additional", bmp: "Ḁ-ỿ" },
      { name: "InLatin_Extended_B", bmp: "ƀ-ɏ" },
      { name: "InLatin_Extended_C", bmp: "Ⱡ-Ɀ" },
      { name: "InLatin_Extended_D", bmp: "꜠-ꟿ" },
      { name: "InLatin_Extended_E", bmp: "ꬰ-꭯" },
      { name: "InLepcha", bmp: "ᰀ-ᱏ" },
      { name: "InLetterlike_Symbols", bmp: "℀-⅏" },
      { name: "InLimbu", bmp: "ᤀ-᥏" },
      { name: "InLinear_A", astral: "\ud801[\ude00-\udf7f]" },
      { name: "InLinear_B_Ideograms", astral: "\ud800[\udc80-\udcff]" },
      { name: "InLinear_B_Syllabary", astral: "\ud800[\udc00-\udc7f]" },
      { name: "InLisu", bmp: "ꓐ-꓿" },
      { name: "InLow_Surrogates", bmp: "\udc00-\udfff" },
      { name: "InLycian", astral: "\ud800[\ude80-\ude9f]" },
      { name: "InLydian", astral: "\ud802[\udd20-\udd3f]" },
      { name: "InMahajani", astral: "\ud804[\udd50-\udd7f]" },
      { name: "InMahjong_Tiles", astral: "\ud83c[\udc00-\udc2f]" },
      { name: "InMakasar", astral: "\ud807[\udee0-\udeff]" },
      { name: "InMalayalam", bmp: "ഀ-ൿ" },
      { name: "InMandaic", bmp: "ࡀ-࡟" },
      { name: "InManichaean", astral: "\ud802[\udec0-\udeff]" },
      { name: "InMarchen", astral: "\ud807[\udc70-\udcbf]" },
      { name: "InMasaram_Gondi", astral: "\ud807[\udd00-\udd5f]" },
      {
        name: "InMathematical_Alphanumeric_Symbols",
        astral: "\ud835[\udc00-\udfff]"
      },
      { name: "InMathematical_Operators", bmp: "∀-⋿" },
      { name: "InMayan_Numerals", astral: "\ud834[\udee0-\udeff]" },
      { name: "InMedefaidrin", astral: "\ud81b[\ude40-\ude9f]" },
      { name: "InMeetei_Mayek", bmp: "ꯀ-꯿" },
      { name: "InMeetei_Mayek_Extensions", bmp: "ꫠ-꫿" },
      { name: "InMende_Kikakui", astral: "\ud83a[\udc00-\udcdf]" },
      { name: "InMeroitic_Cursive", astral: "\ud802[\udda0-\uddff]" },
      { name: "InMeroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
      { name: "InMiao", astral: "\ud81b[\udf00-\udf9f]" },
      { name: "InMiscellaneous_Mathematical_Symbols_A", bmp: "⟀-⟯" },
      { name: "InMiscellaneous_Mathematical_Symbols_B", bmp: "⦀-⧿" },
      { name: "InMiscellaneous_Symbols", bmp: "☀-⛿" },
      { name: "InMiscellaneous_Symbols_And_Arrows", bmp: "⬀-⯿" },
      {
        name: "InMiscellaneous_Symbols_And_Pictographs",
        astral: "\ud83c[\udf00-\udfff]|\ud83d[\udc00-\uddff]"
      },
      { name: "InMiscellaneous_Technical", bmp: "⌀-⏿" },
      { name: "InModi", astral: "\ud805[\ude00-\ude5f]" },
      { name: "InModifier_Tone_Letters", bmp: "꜀-ꜟ" },
      { name: "InMongolian", bmp: "᠀-᢯" },
      { name: "InMongolian_Supplement", astral: "\ud805[\ude60-\ude7f]" },
      { name: "InMro", astral: "\ud81a[\ude40-\ude6f]" },
      { name: "InMultani", astral: "\ud804[\ude80-\udeaf]" },
      { name: "InMusical_Symbols", astral: "\ud834[\udd00-\uddff]" },
      { name: "InMyanmar", bmp: "က-႟" },
      { name: "InMyanmar_Extended_A", bmp: "ꩠ-ꩿ" },
      { name: "InMyanmar_Extended_B", bmp: "ꧠ-꧿" },
      { name: "InNKo", bmp: "߀-߿" },
      { name: "InNabataean", astral: "\ud802[\udc80-\udcaf]" },
      { name: "InNew_Tai_Lue", bmp: "ᦀ-᧟" },
      { name: "InNewa", astral: "\ud805[\udc00-\udc7f]" },
      { name: "InNumber_Forms", bmp: "⅐-↏" },
      { name: "InNushu", astral: "\ud82c[\udd70-\udeff]" },
      { name: "InOgham", bmp: " -᚟" },
      { name: "InOl_Chiki", bmp: "᱐-᱿" },
      { name: "InOld_Hungarian", astral: "\ud803[\udc80-\udcff]" },
      { name: "InOld_Italic", astral: "\ud800[\udf00-\udf2f]" },
      { name: "InOld_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
      { name: "InOld_Permic", astral: "\ud800[\udf50-\udf7f]" },
      { name: "InOld_Persian", astral: "\ud800[\udfa0-\udfdf]" },
      { name: "InOld_Sogdian", astral: "\ud803[\udf00-\udf2f]" },
      { name: "InOld_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
      { name: "InOld_Turkic", astral: "\ud803[\udc00-\udc4f]" },
      { name: "InOptical_Character_Recognition", bmp: "⑀-⑟" },
      { name: "InOriya", bmp: "଀-୿" },
      { name: "InOrnamental_Dingbats", astral: "\ud83d[\ude50-\ude7f]" },
      { name: "InOsage", astral: "\ud801[\udcb0-\udcff]" },
      { name: "InOsmanya", astral: "\ud801[\udc80-\udcaf]" },
      { name: "InPahawh_Hmong", astral: "\ud81a[\udf00-\udf8f]" },
      { name: "InPalmyrene", astral: "\ud802[\udc60-\udc7f]" },
      { name: "InPau_Cin_Hau", astral: "\ud806[\udec0-\udeff]" },
      { name: "InPhags_Pa", bmp: "ꡀ-꡿" },
      { name: "InPhaistos_Disc", astral: "\ud800[\uddd0-\uddff]" },
      { name: "InPhoenician", astral: "\ud802[\udd00-\udd1f]" },
      { name: "InPhonetic_Extensions", bmp: "ᴀ-ᵿ" },
      { name: "InPhonetic_Extensions_Supplement", bmp: "ᶀ-ᶿ" },
      { name: "InPlaying_Cards", astral: "\ud83c[\udca0-\udcff]" },
      { name: "InPrivate_Use_Area", bmp: "-" },
      { name: "InPsalter_Pahlavi", astral: "\ud802[\udf80-\udfaf]" },
      { name: "InRejang", bmp: "ꤰ-꥟" },
      { name: "InRumi_Numeral_Symbols", astral: "\ud803[\ude60-\ude7f]" },
      { name: "InRunic", bmp: "ᚠ-᛿" },
      { name: "InSamaritan", bmp: "ࠀ-࠿" },
      { name: "InSaurashtra", bmp: "ꢀ-꣟" },
      { name: "InSharada", astral: "\ud804[\udd80-\udddf]" },
      { name: "InShavian", astral: "\ud801[\udc50-\udc7f]" },
      { name: "InShorthand_Format_Controls", astral: "\ud82f[\udca0-\udcaf]" },
      { name: "InSiddham", astral: "\ud805[\udd80-\uddff]" },
      { name: "InSinhala", bmp: "඀-෿" },
      { name: "InSinhala_Archaic_Numbers", astral: "\ud804[\udde0-\uddff]" },
      { name: "InSmall_Form_Variants", bmp: "﹐-﹯" },
      { name: "InSogdian", astral: "\ud803[\udf30-\udf6f]" },
      { name: "InSora_Sompeng", astral: "\ud804[\udcd0-\udcff]" },
      { name: "InSoyombo", astral: "\ud806[\ude50-\udeaf]" },
      { name: "InSpacing_Modifier_Letters", bmp: "ʰ-˿" },
      { name: "InSpecials", bmp: "￰-￿" },
      { name: "InSundanese", bmp: "ᮀ-ᮿ" },
      { name: "InSundanese_Supplement", bmp: "᳀-᳏" },
      { name: "InSuperscripts_And_Subscripts", bmp: "⁰-₟" },
      { name: "InSupplemental_Arrows_A", bmp: "⟰-⟿" },
      { name: "InSupplemental_Arrows_B", bmp: "⤀-⥿" },
      { name: "InSupplemental_Arrows_C", astral: "\ud83e[\udc00-\udcff]" },
      { name: "InSupplemental_Mathematical_Operators", bmp: "⨀-⫿" },
      { name: "InSupplemental_Punctuation", bmp: "⸀-⹿" },
      {
        name: "InSupplemental_Symbols_And_Pictographs",
        astral: "\ud83e[\udd00-\uddff]"
      },
      {
        name: "InSupplementary_Private_Use_Area_A",
        astral: "[\udb80-\udbbf][\udc00-\udfff]"
      },
      {
        name: "InSupplementary_Private_Use_Area_B",
        astral: "[\udbc0-\udbff][\udc00-\udfff]"
      },
      { name: "InSutton_SignWriting", astral: "\ud836[\udc00-\udeaf]" },
      { name: "InSyloti_Nagri", bmp: "ꠀ-꠯" },
      { name: "InSyriac", bmp: "܀-ݏ" },
      { name: "InSyriac_Supplement", bmp: "ࡠ-࡯" },
      { name: "InTagalog", bmp: "ᜀ-ᜟ" },
      { name: "InTagbanwa", bmp: "ᝠ-᝿" },
      { name: "InTags", astral: "\udb40[\udc00-\udc7f]" },
      { name: "InTai_Le", bmp: "ᥐ-᥿" },
      { name: "InTai_Tham", bmp: "ᨠ-᪯" },
      { name: "InTai_Viet", bmp: "ꪀ-꫟" },
      { name: "InTai_Xuan_Jing_Symbols", astral: "\ud834[\udf00-\udf5f]" },
      { name: "InTakri", astral: "\ud805[\ude80-\udecf]" },
      { name: "InTamil", bmp: "஀-௿" },
      { name: "InTangut", astral: "[\ud81c-\ud821][\udc00-\udfff]" },
      { name: "InTangut_Components", astral: "\ud822[\udc00-\udeff]" },
      { name: "InTelugu", bmp: "ఀ-౿" },
      { name: "InThaana", bmp: "ހ-޿" },
      { name: "InThai", bmp: "฀-๿" },
      { name: "InTibetan", bmp: "ༀ-࿿" },
      { name: "InTifinagh", bmp: "ⴰ-⵿" },
      { name: "InTirhuta", astral: "\ud805[\udc80-\udcdf]" },
      { name: "InTransport_And_Map_Symbols", astral: "\ud83d[\ude80-\udeff]" },
      { name: "InUgaritic", astral: "\ud800[\udf80-\udf9f]" },
      { name: "InUnified_Canadian_Aboriginal_Syllabics", bmp: "᐀-ᙿ" },
      { name: "InUnified_Canadian_Aboriginal_Syllabics_Extended", bmp: "ᢰ-᣿" },
      { name: "InVai", bmp: "ꔀ-꘿" },
      { name: "InVariation_Selectors", bmp: "︀-️" },
      {
        name: "InVariation_Selectors_Supplement",
        astral: "\udb40[\udd00-\uddef]"
      },
      { name: "InVedic_Extensions", bmp: "᳐-᳿" },
      { name: "InVertical_Forms", bmp: "︐-︟" },
      { name: "InWarang_Citi", astral: "\ud806[\udca0-\udcff]" },
      { name: "InYi_Radicals", bmp: "꒐-꓏" },
      { name: "InYi_Syllables", bmp: "ꀀ-꒏" },
      { name: "InYijing_Hexagram_Symbols", bmp: "䷀-䷿" },
      { name: "InZanabazar_Square", astral: "\ud806[\ude00-\ude4f]" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(8);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(256));
    /*!
     * XRegExp Unicode Categories 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Categories"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      {
        name: "C",
        alias: "Other",
        isBmpLast: !0,
        bmp:
          "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜؝۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",
        astral:
          "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcbd\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca0-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]"
      },
      { name: "Cc", alias: "Control", bmp: "\0--" },
      {
        name: "Cf",
        alias: "Format",
        bmp: "­؀-؅؜۝܏࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\ufeff￹-￻",
        astral:
          "\ud804[\udcbd\udccd]|\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|\udb40[\udc01\udc20-\udc7f]"
      },
      {
        name: "Cn",
        alias: "Unassigned",
        bmp:
          "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿؝܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",
        astral:
          "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcc2-\udccc\udcce\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca4-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|[\udbbf\udbff][\udffe\udfff]"
      },
      {
        name: "Co",
        alias: "Private_Use",
        bmp: "-",
        astral:
          "[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]"
      },
      { name: "Cs", alias: "Surrogate", bmp: "\ud800-\udfff" },
      {
        name: "L",
        alias: "Letter",
        bmp:
          "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udd00-\udd43]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "LC",
        alias: "Cased_Letter",
        bmp:
          "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ",
        astral:
          "\ud801[\udc00-\udc4f\udcb0-\udcd3\udcd8-\udcfb]|\ud803[\udc80-\udcb2\udcc0-\udcf2]|\ud806[\udca0-\udcdf]|\ud81b[\ude40-\ude7f]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udd00-\udd43]"
      },
      {
        name: "Ll",
        alias: "Lowercase_Letter",
        bmp:
          "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
        astral:
          "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"
      },
      {
        name: "Lm",
        alias: "Modifier_Letter",
        bmp:
          "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟｰﾞﾟ",
        astral: "\ud81a[\udf40-\udf43]|\ud81b[\udf93-\udf9f\udfe0\udfe1]"
      },
      {
        name: "Lo",
        alias: "Other_Letter",
        bmp:
          "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳱᳵᳶℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc50-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud83a[\udc00-\udcc4]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" },
      {
        name: "Lu",
        alias: "Uppercase_Letter",
        bmp:
          "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
        astral:
          "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]"
      },
      {
        name: "M",
        alias: "Mark",
        bmp:
          "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",
        astral:
          "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc00-\udc02\udc38-\udc46\udc7f-\udc82\udcb0-\udcba\udd00-\udd02\udd27-\udd34\udd45\udd46\udd73\udd80-\udd82\uddb3-\uddc0\uddc9-\uddcc\ude2c-\ude37\ude3e\udedf-\udeea\udf00-\udf03\udf3b\udf3c\udf3e-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc35-\udc46\udc5e\udcb0-\udcc3\uddaf-\uddb5\uddb8-\uddc0\udddc\udddd\ude30-\ude40\udeab-\udeb7\udf1d-\udf2b]|\ud806[\udc2c-\udc3a\ude01-\ude0a\ude33-\ude39\ude3b-\ude3e\ude47\ude51-\ude5b\ude8a-\ude99]|\ud807[\udc2f-\udc36\udc38-\udc3f\udc92-\udca7\udca9-\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd8a-\udd8e\udd90\udd91\udd93-\udd97\udef3-\udef6]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf51-\udf7e\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"
      },
      {
        name: "Mc",
        alias: "Spacing_Mark",
        bmp:
          "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡ᳲᳳ᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦽ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",
        astral:
          "\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd45\udd46\udd82\uddb3-\uddb5\uddbf\uddc0\ude2c-\ude2e\ude32\ude33\ude35\udee0-\udee2\udf02\udf03\udf3e\udf3f\udf41-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63]|\ud805[\udc35-\udc37\udc40\udc41\udc45\udcb0-\udcb2\udcb9\udcbb-\udcbe\udcc1\uddaf-\uddb1\uddb8-\uddbb\uddbe\ude30-\ude32\ude3b\ude3c\ude3e\udeac\udeae\udeaf\udeb6\udf20\udf21\udf26]|\ud806[\udc2c-\udc2e\udc38\ude39\ude57\ude58\ude97]|\ud807[\udc2f\udc3e\udca9\udcb1\udcb4\udd8a-\udd8e\udd93\udd94\udd96\udef5\udef6]|\ud81b[\udf51-\udf7e]|\ud834[\udd65\udd66\udd6d-\udd72]"
      },
      { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" },
      {
        name: "Mn",
        alias: "Nonspacing_Mark",
        bmp:
          "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ఀఄా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",
        astral:
          "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc01\udc38-\udc46\udc7f-\udc81\udcb3-\udcb6\udcb9\udcba\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd73\udd80\udd81\uddb6-\uddbe\uddc9-\uddcc\ude2f-\ude31\ude34\ude36\ude37\ude3e\udedf\udee3-\udeea\udf00\udf01\udf3b\udf3c\udf40\udf66-\udf6c\udf70-\udf74]|\ud805[\udc38-\udc3f\udc42-\udc44\udc46\udc5e\udcb3-\udcb8\udcba\udcbf\udcc0\udcc2\udcc3\uddb2-\uddb5\uddbc\uddbd\uddbf\uddc0\udddc\udddd\ude33-\ude3a\ude3d\ude3f\ude40\udeab\udead\udeb0-\udeb5\udeb7\udf1d-\udf1f\udf22-\udf25\udf27-\udf2b]|\ud806[\udc2f-\udc37\udc39\udc3a\ude01-\ude0a\ude33-\ude38\ude3b-\ude3e\ude47\ude51-\ude56\ude59-\ude5b\ude8a-\ude96\ude98\ude99]|\ud807[\udc30-\udc36\udc38-\udc3d\udc3f\udc92-\udca7\udcaa-\udcb0\udcb2\udcb3\udcb5\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd90\udd91\udd95\udd97\udef3\udef4]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"
      },
      {
        name: "N",
        alias: "Number",
        bmp:
          "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
        astral:
          "\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud801[\udca0-\udca9]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\udd30-\udd39\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b]|\ud806[\udce0-\udcf2]|\ud807[\udc50-\udc6c\udd50-\udd59\udda0-\udda9]|\ud809[\udc00-\udc6e]|\ud81a[\ude60-\ude69\udf50-\udf59\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud835[\udfce-\udfff]|\ud83a[\udcc7-\udccf\udd50-\udd59]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]"
      },
      {
        name: "Nd",
        alias: "Decimal_Number",
        bmp:
          "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
        astral:
          "\ud801[\udca0-\udca9]|\ud803[\udd30-\udd39]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf39]|\ud806[\udce0-\udce9]|\ud807[\udc50-\udc59\udd50-\udd59\udda0-\udda9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]|\ud83a[\udd50-\udd59]"
      },
      {
        name: "Nl",
        alias: "Letter_Number",
        bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",
        astral:
          "\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]|\ud809[\udc00-\udc6e]"
      },
      {
        name: "No",
        alias: "Other_Number",
        bmp:
          "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",
        astral:
          "\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc65\udde1-\uddf4]|\ud805[\udf3a\udf3b]|\ud806[\udcea-\udcf2]|\ud807[\udc5a-\udc6c]|\ud81a[\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud83a[\udcc7-\udccf]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]"
      },
      {
        name: "P",
        alias: "Punctuation",
        bmp:
          "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹎、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",
        astral:
          "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"
      },
      { name: "Pc", alias: "Connector_Punctuation", bmp: "_‿⁀⁔︳︴﹍-﹏＿" },
      {
        name: "Pd",
        alias: "Dash_Punctuation",
        bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－"
      },
      {
        name: "Pe",
        alias: "Close_Punctuation",
        bmp:
          "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣"
      },
      { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" },
      { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" },
      {
        name: "Po",
        alias: "Other_Punctuation",
        bmp:
          "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙭᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹎、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",
        astral:
          "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"
      },
      {
        name: "Ps",
        alias: "Open_Punctuation",
        bmp:
          "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢"
      },
      {
        name: "S",
        alias: "Symbol",
        bmp:
          "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₿℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",
        astral:
          "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud83b[\udcac\udcb0\udef0\udef1]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]"
      },
      {
        name: "Sc",
        alias: "Currency_Symbol",
        bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-₿꠸﷼﹩＄￠￡￥￦",
        astral: "𞲰"
      },
      {
        name: "Sk",
        alias: "Modifier_Symbol",
        bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛﮲-﯁＾｀￣",
        astral: "\ud83c[\udffb-\udfff]"
      },
      {
        name: "Sm",
        alias: "Math_Symbol",
        bmp:
          "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",
        astral:
          "\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83b[\udef0\udef1]"
      },
      {
        name: "So",
        alias: "Other_Symbol",
        bmp:
          "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﷽￤￨￭￮￼�",
        astral:
          "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|𞲬|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udffa]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]"
      },
      { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" },
      { name: "Zl", alias: "Line_Separator", bmp: "\u2028" },
      { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" },
      { name: "Zs", alias: "Space_Separator", bmp: "    -   　" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(8);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(258));
    /*!
     * XRegExp Unicode Properties 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2012-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Properties"
        );
      var u = t.default;
      u.push({ name: "Assigned", inverseOf: "Cn" }), d.addUnicodeData(u);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      { name: "ASCII", bmp: "\0-" },
      {
        name: "Alphabetic",
        bmp:
          "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഀ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽꣾꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc00-\udc45\udc82-\udcb8\udcd0-\udce8\udd00-\udd32\udd44-\udd46\udd50-\udd72\udd76\udd80-\uddbf\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude34\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udee8\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d-\udf44\udf47\udf48\udf4b\udf4c\udf50\udf57\udf5d-\udf63]|\ud805[\udc00-\udc41\udc43-\udc45\udc47-\udc4a\udc80-\udcc1\udcc4\udcc5\udcc7\udd80-\uddb5\uddb8-\uddbe\uddd8-\udddd\ude00-\ude3e\ude40\ude44\ude80-\udeb5\udf00-\udf1a\udf1d-\udf2a]|\ud806[\udc00-\udc38\udca0-\udcdf\udcff\ude00-\ude32\ude35-\ude3e\ude50-\ude83\ude86-\ude97\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc3e\udc40\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd41\udd43\udd46\udd47\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd96\udd98\udee0-\udef6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50-\udf7e\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9e]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd47]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "Any",
        isBmpLast: !0,
        bmp: "\0-￿",
        astral: "[\ud800-\udbff][\udc00-\udfff]"
      },
      {
        name: "Default_Ignorable_Code_Point",
        bmp: "­͏؜ᅟᅠ឴឵᠋-᠎​-‏‪-‮⁠-⁯ㅤ︀-️\ufeffﾠ￰-￸",
        astral:
          "\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|[\udb40-\udb43][\udc00-\udfff]"
      },
      {
        name: "Lowercase",
        bmp:
          "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟸ-ꟺꬰ-ꭚꭜ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
        astral:
          "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"
      },
      {
        name: "Noncharacter_Code_Point",
        bmp: "﷐-﷯￾￿",
        astral:
          "[\ud83f\ud87f\ud8bf\ud8ff\ud93f\ud97f\ud9bf\ud9ff\uda3f\uda7f\udabf\udaff\udb3f\udb7f\udbbf\udbff][\udffe\udfff]"
      },
      {
        name: "Uppercase",
        bmp:
          "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
        astral:
          "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]"
      },
      { name: "White_Space", bmp: "\t-\r    - \u2028\u2029  　" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(8);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(260));
    /*!
     * XRegExp Unicode Scripts 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Scripts"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      {
        name: "Adlam",
        astral: "\ud83a[\udd00-\udd4a\udd50-\udd59\udd5e\udd5f]"
      },
      {
        name: "Ahom",
        astral: "\ud805[\udf00-\udf1a\udf1d-\udf2b\udf30-\udf3f]"
      },
      { name: "Anatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude46]" },
      {
        name: "Arabic",
        bmp: "؀-؄؆-؋؍-ؚ؜؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࢠ-ࢴࢶ-ࢽ࣓-ࣣ࣡-ࣿﭐ-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷽ﹰ-ﹴﹶ-ﻼ",
        astral:
          "\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]"
      },
      { name: "Armenian", bmp: "Ա-Ֆՙ-ֈ֊֍-֏ﬓ-ﬗ" },
      { name: "Avestan", astral: "\ud802[\udf00-\udf35\udf39-\udf3f]" },
      { name: "Balinese", bmp: "ᬀ-ᭋ᭐-᭼" },
      { name: "Bamum", bmp: "ꚠ-꛷", astral: "\ud81a[\udc00-\ude38]" },
      { name: "Bassa_Vah", astral: "\ud81a[\uded0-\udeed\udef0-\udef5]" },
      { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" },
      { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" },
      {
        name: "Bhaiksuki",
        astral: "\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc45\udc50-\udc6c]"
      },
      { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆺ" },
      { name: "Brahmi", astral: "\ud804[\udc00-\udc4d\udc52-\udc6f\udc7f]" },
      { name: "Braille", bmp: "⠀-⣿" },
      { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" },
      { name: "Buhid", bmp: "ᝀ-ᝓ" },
      { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ" },
      { name: "Carian", astral: "\ud800[\udea0-\uded0]" },
      { name: "Caucasian_Albanian", astral: "\ud801[\udd30-\udd63\udd6f]" },
      { name: "Chakma", astral: "\ud804[\udd00-\udd34\udd36-\udd46]" },
      { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" },
      { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" },
      {
        name: "Common",
        bmp:
          "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·։؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-₿℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮘-⯈⯊-⯾⸀-⹎⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\ufeff！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",
        astral:
          "\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9b\uddd0-\uddfc\udee1-\udefb]|\ud82f[\udca0-\udca3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\udde8\udee0-\udef3\udf00-\udf56\udf60-\udf78]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\ud83b[\udc71-\udcb4]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd00-\udd0c\udd10-\udd6b\udd70-\uddac\udde6-\uddff\ude01\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]|\udb40[\udc01\udc20-\udc7f]"
      },
      { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" },
      {
        name: "Cuneiform",
        astral:
          "\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc70-\udc74\udc80-\udd43]"
      },
      {
        name: "Cypriot",
        astral:
          "\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]"
      },
      { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" },
      { name: "Deseret", astral: "\ud801[\udc00-\udc4f]" },
      { name: "Devanagari", bmp: "ऀ-ॐ॓-ॣ०-ॿ꣠-ꣿ" },
      { name: "Dogra", astral: "\ud806[\udc00-\udc3b]" },
      {
        name: "Duployan",
        astral:
          "\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9c-\udc9f]"
      },
      {
        name: "Egyptian_Hieroglyphs",
        astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]"
      },
      { name: "Elbasan", astral: "\ud801[\udd00-\udd27]" },
      {
        name: "Ethiopic",
        bmp:
          "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ"
      },
      { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" },
      {
        name: "Glagolitic",
        bmp: "Ⰰ-Ⱞⰰ-ⱞ",
        astral:
          "\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]"
      },
      { name: "Gothic", astral: "\ud800[\udf30-\udf4a]" },
      {
        name: "Grantha",
        astral:
          "\ud804[\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]"
      },
      {
        name: "Greek",
        bmp:
          "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",
        astral: "\ud800[\udd40-\udd8e\udda0]|\ud834[\ude00-\ude45]"
      },
      { name: "Gujarati", bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿" },
      {
        name: "Gunjala_Gondi",
        astral:
          "\ud807[\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd98\udda0-\udda9]"
      },
      { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" },
      {
        name: "Han",
        bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶵一-鿯豈-舘並-龎",
        astral:
          "[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "Hangul",
        bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
      },
      { name: "Hanifi_Rohingya", astral: "\ud803[\udd00-\udd27\udd30-\udd39]" },
      { name: "Hanunoo", bmp: "ᜠ-᜴" },
      {
        name: "Hatran",
        astral: "\ud802[\udce0-\udcf2\udcf4\udcf5\udcfb-\udcff]"
      },
      { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" },
      {
        name: "Hiragana",
        bmp: "ぁ-ゖゝ-ゟ",
        astral: "\ud82c[\udc01-\udd1e]|🈀"
      },
      {
        name: "Imperial_Aramaic",
        astral: "\ud802[\udc40-\udc55\udc57-\udc5f]"
      },
      {
        name: "Inherited",
        bmp: "̀-ًͯ҅҆-ٰٕ॒॑᪰-᪾᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",
        astral:
          "\ud800[\uddfd\udee0]|𑌻|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\udb40[\udd00-\uddef]"
      },
      {
        name: "Inscriptional_Pahlavi",
        astral: "\ud802[\udf60-\udf72\udf78-\udf7f]"
      },
      {
        name: "Inscriptional_Parthian",
        astral: "\ud802[\udf40-\udf55\udf58-\udf5f]"
      },
      { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" },
      { name: "Kaithi", astral: "\ud804[\udc80-\udcc1\udccd]" },
      { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲ" },
      {
        name: "Katakana",
        bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",
        astral: "𛀀"
      },
      { name: "Kayah_Li", bmp: "꤀-꤭꤯" },
      {
        name: "Kharoshthi",
        astral:
          "\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f-\ude48\ude50-\ude58]"
      },
      { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" },
      { name: "Khojki", astral: "\ud804[\ude00-\ude11\ude13-\ude3e]" },
      { name: "Khudawadi", astral: "\ud804[\udeb0-\udeea\udef0-\udef9]" },
      { name: "Lao", bmp: "ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" },
      {
        name: "Latin",
        bmp:
          "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞹꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ"
      },
      { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" },
      { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" },
      {
        name: "Linear_A",
        astral: "\ud801[\ude00-\udf36\udf40-\udf55\udf60-\udf67]"
      },
      {
        name: "Linear_B",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]"
      },
      { name: "Lisu", bmp: "ꓐ-꓿" },
      { name: "Lycian", astral: "\ud800[\ude80-\ude9c]" },
      { name: "Lydian", astral: "\ud802[\udd20-\udd39\udd3f]" },
      { name: "Mahajani", astral: "\ud804[\udd50-\udd76]" },
      { name: "Makasar", astral: "\ud807[\udee0-\udef8]" },
      { name: "Malayalam", bmp: "ഀ-ഃഅ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" },
      { name: "Mandaic", bmp: "ࡀ-࡛࡞" },
      { name: "Manichaean", astral: "\ud802[\udec0-\udee6\udeeb-\udef6]" },
      {
        name: "Marchen",
        astral: "\ud807[\udc70-\udc8f\udc92-\udca7\udca9-\udcb6]"
      },
      {
        name: "Masaram_Gondi",
        astral:
          "\ud807[\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd47\udd50-\udd59]"
      },
      { name: "Medefaidrin", astral: "\ud81b[\ude40-\ude9a]" },
      { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" },
      { name: "Mende_Kikakui", astral: "\ud83a[\udc00-\udcc4\udcc7-\udcd6]" },
      {
        name: "Meroitic_Cursive",
        astral: "\ud802[\udda0-\uddb7\uddbc-\uddcf\uddd2-\uddff]"
      },
      { name: "Meroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
      {
        name: "Miao",
        astral: "\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]"
      },
      { name: "Modi", astral: "\ud805[\ude00-\ude44\ude50-\ude59]" },
      {
        name: "Mongolian",
        bmp: "᠀᠁᠄᠆-᠎᠐-᠙ᠠ-ᡸᢀ-ᢪ",
        astral: "\ud805[\ude60-\ude6c]"
      },
      { name: "Mro", astral: "\ud81a[\ude40-\ude5e\ude60-\ude69\ude6e\ude6f]" },
      {
        name: "Multani",
        astral:
          "\ud804[\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea9]"
      },
      { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" },
      { name: "Nabataean", astral: "\ud802[\udc80-\udc9e\udca7-\udcaf]" },
      { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" },
      { name: "Newa", astral: "\ud805[\udc00-\udc59\udc5b\udc5d\udc5e]" },
      { name: "Nko", bmp: "߀-ߺ߽-߿" },
      { name: "Nushu", astral: "𖿡|\ud82c[\udd70-\udefb]" },
      { name: "Ogham", bmp: " -᚜" },
      { name: "Ol_Chiki", bmp: "᱐-᱿" },
      {
        name: "Old_Hungarian",
        astral: "\ud803[\udc80-\udcb2\udcc0-\udcf2\udcfa-\udcff]"
      },
      { name: "Old_Italic", astral: "\ud800[\udf00-\udf23\udf2d-\udf2f]" },
      { name: "Old_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
      { name: "Old_Permic", astral: "\ud800[\udf50-\udf7a]" },
      { name: "Old_Persian", astral: "\ud800[\udfa0-\udfc3\udfc8-\udfd5]" },
      { name: "Old_Sogdian", astral: "\ud803[\udf00-\udf27]" },
      { name: "Old_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
      { name: "Old_Turkic", astral: "\ud803[\udc00-\udc48]" },
      { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୷" },
      { name: "Osage", astral: "\ud801[\udcb0-\udcd3\udcd8-\udcfb]" },
      { name: "Osmanya", astral: "\ud801[\udc80-\udc9d\udca0-\udca9]" },
      {
        name: "Pahawh_Hmong",
        astral:
          "\ud81a[\udf00-\udf45\udf50-\udf59\udf5b-\udf61\udf63-\udf77\udf7d-\udf8f]"
      },
      { name: "Palmyrene", astral: "\ud802[\udc60-\udc7f]" },
      { name: "Pau_Cin_Hau", astral: "\ud806[\udec0-\udef8]" },
      { name: "Phags_Pa", bmp: "ꡀ-꡷" },
      { name: "Phoenician", astral: "\ud802[\udd00-\udd1b\udd1f]" },
      {
        name: "Psalter_Pahlavi",
        astral: "\ud802[\udf80-\udf91\udf99-\udf9c\udfa9-\udfaf]"
      },
      { name: "Rejang", bmp: "ꤰ-꥓꥟" },
      { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" },
      { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" },
      { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" },
      { name: "Sharada", astral: "\ud804[\udd80-\uddcd\uddd0-\udddf]" },
      { name: "Shavian", astral: "\ud801[\udc50-\udc7f]" },
      { name: "Siddham", astral: "\ud805[\udd80-\uddb5\uddb8-\udddd]" },
      {
        name: "SignWriting",
        astral: "\ud836[\udc00-\ude8b\ude9b-\ude9f\udea1-\udeaf]"
      },
      {
        name: "Sinhala",
        bmp: "ංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",
        astral: "\ud804[\udde1-\uddf4]"
      },
      { name: "Sogdian", astral: "\ud803[\udf30-\udf59]" },
      { name: "Sora_Sompeng", astral: "\ud804[\udcd0-\udce8\udcf0-\udcf9]" },
      { name: "Soyombo", astral: "\ud806[\ude50-\ude83\ude86-\udea2]" },
      { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" },
      { name: "Syloti_Nagri", bmp: "ꠀ-꠫" },
      { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" },
      { name: "Tagalog", bmp: "ᜀ-ᜌᜎ-᜔" },
      { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" },
      { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" },
      { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" },
      { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" },
      { name: "Takri", astral: "\ud805[\ude80-\udeb7\udec0-\udec9]" },
      { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺" },
      {
        name: "Tangut",
        astral:
          "𖿠|[\ud81c-\ud820][\udc00-\udfff]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]"
      },
      { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘ-ౚౠ-ౣ౦-౯౸-౿" },
      { name: "Thaana", bmp: "ހ-ޱ" },
      { name: "Thai", bmp: "ก-ฺเ-๛" },
      { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" },
      { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" },
      { name: "Tirhuta", astral: "\ud805[\udc80-\udcc7\udcd0-\udcd9]" },
      { name: "Ugaritic", astral: "\ud800[\udf80-\udf9d\udf9f]" },
      { name: "Vai", bmp: "ꔀ-ꘫ" },
      { name: "Warang_Citi", astral: "\ud806[\udca0-\udcf2\udcff]" },
      { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" },
      { name: "Zanabazar_Square", astral: "\ud806[\ude00-\ude47]" }
    ];
  },
  function(d, u, e) {
    const { Transform: n } = e(2),
      t = e(32);
    d.exports = function() {
      let d = !0;
      return new n({
        objectMode: !0,
        transform(u, e, n) {
          let a = "\n";
          d && ((a = ""), (d = !1)), this.push(`${a}${t.toString(u)}`), n();
        }
      });
    };
  },
  function(d, u, e) {
    const { Transform: n } = e(2),
      t = e(25),
      a = e(132),
      r = e(264);
    d.exports = {
      parse: ({ time: d, timezone: u }) => {
        const e = t(d, u);
        return new n({
          objectMode: !0,
          transform(d, u, n) {
            try {
              return d.start
                ? (this.push({ ...d, start: r(d.start.toLowerCase(), e) }), n())
                : (this.push(d), n());
            } catch (d) {
              return n(d);
            }
          }
        });
      },
      stringify: d =>
        new n({
          objectMode: !0,
          transform(u, e, n) {
            try {
              return u.start
                ? (this.push({ ...u, start: a(u.start, d) }), n())
                : (this.push(u), n());
            } catch (d) {
              return n(d);
            }
          }
        })
    };
  },
  function(d, u, e) {
    "use strict";
    function n(d, u) {
      for (var e = 0; e < u.length; e++) {
        var n = u[e];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(d, n.key, n);
      }
    }
    function t(d, u, e) {
      return u && n(d.prototype, u), e && n(d, e), d;
    }
    function a(d, u) {
      (d.prototype = Object.create(u.prototype)),
        (d.prototype.constructor = d),
        (d.__proto__ = u);
    }
    function r(d) {
      return (r = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(d) {
            return d.__proto__ || Object.getPrototypeOf(d);
          })(d);
    }
    function f(d, u) {
      return (f =
        Object.setPrototypeOf ||
        function(d, u) {
          return (d.__proto__ = u), d;
        })(d, u);
    }
    function c(d, u, e) {
      return (c = (function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (d) {
          return !1;
        }
      })()
        ? Reflect.construct
        : function(d, u, e) {
            var n = [null];
            n.push.apply(n, u);
            var t = new (Function.bind.apply(d, n))();
            return e && f(t, e.prototype), t;
          }).apply(null, arguments);
    }
    function i(d) {
      var u = "function" == typeof Map ? new Map() : void 0;
      return (i = function(d) {
        if (
          null === d ||
          ((e = d), -1 === Function.toString.call(e).indexOf("[native code]"))
        )
          return d;
        var e;
        if ("function" != typeof d)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== u) {
          if (u.has(d)) return u.get(d);
          u.set(d, n);
        }
        function n() {
          return c(d, arguments, r(this).constructor);
        }
        return (
          (n.prototype = Object.create(d.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
          f(n, d)
        );
      })(d);
    }
    function o(d) {
      return void 0 === d;
    }
    function s(d) {
      return "number" == typeof d;
    }
    function l() {
      return "undefined" != typeof Intl && Intl.DateTimeFormat;
    }
    function m() {
      return !o(Intl.DateTimeFormat.prototype.formatToParts);
    }
    function p() {
      return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
    }
    function h(d, u, e) {
      if (0 !== d.length)
        return d.reduce(function(d, n) {
          var t = [u(n), n];
          return d && e(d[0], t[0]) === d[0] ? d : t;
        }, null)[1];
    }
    function b(d, u) {
      return u.reduce(function(u, e) {
        return (u[e] = d[e]), u;
      }, {});
    }
    function y(d, u, e) {
      return s(d) && d >= u && d <= e;
    }
    function g(d, u) {
      return (
        void 0 === u && (u = 2),
        d.toString().length < u ? ("0".repeat(u) + d).slice(-u) : d.toString()
      );
    }
    function _(d) {
      if (o(d)) return NaN;
      var u = 1e3 * parseFloat("0." + d);
      return Math.floor(u);
    }
    function v(d, u, e) {
      void 0 === e && (e = !1);
      var n = Math.pow(10, u);
      return (e ? Math.trunc : Math.round)(d * n) / n;
    }
    function w(d) {
      return d % 4 == 0 && (d % 100 != 0 || d % 400 == 0);
    }
    function I(d) {
      return w(d) ? 366 : 365;
    }
    function S(d, u) {
      var e,
        n,
        t = (e = u - 1) - (n = 12) * Math.floor(e / n) + 1;
      return 2 === t
        ? w(d + (u - t) / 12)
          ? 29
          : 28
        : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
    }
    function x(d) {
      var u = Date.UTC(
        d.year,
        d.month - 1,
        d.day,
        d.hour,
        d.minute,
        d.second,
        d.millisecond
      );
      return (
        d.year < 100 &&
          d.year >= 0 &&
          (u = new Date(u)).setUTCFullYear(u.getUTCFullYear() - 1900),
        +u
      );
    }
    function k(d) {
      var u =
          (d + Math.floor(d / 4) - Math.floor(d / 100) + Math.floor(d / 400)) %
          7,
        e = d - 1,
        n =
          (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) %
          7;
      return 4 === u || 3 === n ? 53 : 52;
    }
    function E(d) {
      return d > 99 ? d : d > 60 ? 1900 + d : 2e3 + d;
    }
    function M(d, u, e, n) {
      void 0 === n && (n = null);
      var t = new Date(d),
        a = {
          hour12: !1,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        };
      n && (a.timeZone = n);
      var r = Object.assign({ timeZoneName: u }, a),
        f = l();
      if (f && m()) {
        var c = new Intl.DateTimeFormat(e, r)
          .formatToParts(t)
          .find(function(d) {
            return "timezonename" === d.type.toLowerCase();
          });
        return c ? c.value : null;
      }
      if (f) {
        var i = new Intl.DateTimeFormat(e, a).format(t);
        return new Intl.DateTimeFormat(e, r)
          .format(t)
          .substring(i.length)
          .replace(/^[, \u200e]+/, "");
      }
      return null;
    }
    function T(d, u) {
      var e = parseInt(d, 10) || 0,
        n = parseInt(u, 10) || 0;
      return 60 * e + (e < 0 ? -n : n);
    }
    function O(d, u, e) {
      void 0 === e && (e = !1);
      var n = {};
      for (var t in d)
        if (d.hasOwnProperty(t)) {
          var a = d[t],
            r = Number(a);
          if (null !== a && !Number.isNaN(r)) {
            var f = u(t, e);
            f && (n[f] = r);
          }
        }
      return n;
    }
    function C(d) {
      return b(d, ["hour", "minute", "second", "millisecond"]);
    }
    Object.defineProperty(u, "__esModule", { value: !0 });
    var A = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/,
      L = "numeric",
      P = "short",
      N = "long",
      R = "2-digit",
      j = { year: L, month: L, day: L },
      D = { year: L, month: P, day: L },
      B = { year: L, month: N, day: L },
      F = { year: L, month: N, day: L, weekday: N },
      U = { hour: L, minute: R },
      H = { hour: L, minute: R, second: R },
      G = { hour: L, minute: R, second: R, timeZoneName: P },
      V = { hour: L, minute: R, second: R, timeZoneName: N },
      $ = { hour: L, minute: R, hour12: !1 },
      W = { hour: L, minute: R, second: R, hour12: !1 },
      K = { hour: L, minute: R, second: R, hour12: !1, timeZoneName: P },
      Z = { hour: L, minute: R, second: R, hour12: !1, timeZoneName: N },
      z = { year: L, month: L, day: L, hour: L, minute: R },
      q = { year: L, month: L, day: L, hour: L, minute: R, second: R },
      Y = { year: L, month: P, day: L, hour: L, minute: R },
      J = { year: L, month: P, day: L, hour: L, minute: R, second: R },
      X = { year: L, month: N, day: L, hour: L, minute: R, timeZoneName: P },
      Q = {
        year: L,
        month: N,
        day: L,
        hour: L,
        minute: R,
        second: R,
        timeZoneName: P
      },
      dd = {
        year: L,
        month: N,
        day: L,
        weekday: N,
        hour: L,
        minute: R,
        timeZoneName: N
      },
      ud = {
        year: L,
        month: N,
        day: L,
        weekday: N,
        hour: L,
        minute: R,
        second: R,
        timeZoneName: N
      };
    function ed(d) {
      return JSON.stringify(d, Object.keys(d).sort());
    }
    var nd = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      td = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      ad = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    function rd(d) {
      switch (d) {
        case "narrow":
          return ad;
        case "short":
          return td;
        case "long":
          return nd;
        case "numeric":
          return [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ];
        case "2-digit":
          return [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"
          ];
        default:
          return null;
      }
    }
    var fd = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      cd = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      id = ["M", "T", "W", "T", "F", "S", "S"];
    function od(d) {
      switch (d) {
        case "narrow":
          return id;
        case "short":
          return cd;
        case "long":
          return fd;
        case "numeric":
          return ["1", "2", "3", "4", "5", "6", "7"];
        default:
          return null;
      }
    }
    var sd = ["AM", "PM"],
      ld = ["Before Christ", "Anno Domini"],
      md = ["BC", "AD"],
      pd = ["B", "A"];
    function hd(d) {
      switch (d) {
        case "narrow":
          return pd;
        case "short":
          return md;
        case "long":
          return ld;
        default:
          return null;
      }
    }
    var bd = (function(d) {
        function u() {
          return d.apply(this, arguments) || this;
        }
        return a(u, d), u;
      })(i(Error)),
      yd = (function(d) {
        function u(u) {
          return d.call(this, "Invalid DateTime: " + u.toMessage()) || this;
        }
        return a(u, d), u;
      })(bd),
      gd = (function(d) {
        function u(u) {
          return d.call(this, "Invalid Interval: " + u.toMessage()) || this;
        }
        return a(u, d), u;
      })(bd),
      _d = (function(d) {
        function u(u) {
          return d.call(this, "Invalid Duration: " + u.toMessage()) || this;
        }
        return a(u, d), u;
      })(bd),
      vd = (function(d) {
        function u() {
          return d.apply(this, arguments) || this;
        }
        return a(u, d), u;
      })(bd),
      wd = (function(d) {
        function u(u) {
          return d.call(this, "Invalid unit " + u) || this;
        }
        return a(u, d), u;
      })(bd),
      Id = (function(d) {
        function u() {
          return d.apply(this, arguments) || this;
        }
        return a(u, d), u;
      })(bd),
      Sd = (function(d) {
        function u() {
          return d.call(this, "Zone is an abstract class") || this;
        }
        return a(u, d), u;
      })(bd),
      xd = (function() {
        function d() {}
        var u = d.prototype;
        return (
          (u.offsetName = function(d, u) {
            throw new Sd();
          }),
          (u.offset = function(d) {
            throw new Sd();
          }),
          (u.equals = function(d) {
            throw new Sd();
          }),
          t(d, [
            {
              key: "type",
              get: function() {
                throw new Sd();
              }
            },
            {
              key: "name",
              get: function() {
                throw new Sd();
              }
            },
            {
              key: "universal",
              get: function() {
                throw new Sd();
              }
            },
            {
              key: "isValid",
              get: function() {
                throw new Sd();
              }
            }
          ]),
          d
        );
      })(),
      kd = null,
      Ed = (function(d) {
        function u() {
          return d.apply(this, arguments) || this;
        }
        a(u, d);
        var e = u.prototype;
        return (
          (e.offsetName = function(d, u) {
            return M(d, u.format, u.locale);
          }),
          (e.offset = function(d) {
            return -new Date(d).getTimezoneOffset();
          }),
          (e.equals = function(d) {
            return "local" === d.type;
          }),
          t(
            u,
            [
              {
                key: "type",
                get: function() {
                  return "local";
                }
              },
              {
                key: "name",
                get: function() {
                  return l()
                    ? new Intl.DateTimeFormat().resolvedOptions().timeZone
                    : "local";
                }
              },
              {
                key: "universal",
                get: function() {
                  return !1;
                }
              },
              {
                key: "isValid",
                get: function() {
                  return !0;
                }
              }
            ],
            [
              {
                key: "instance",
                get: function() {
                  return null === kd && (kd = new u()), kd;
                }
              }
            ]
          ),
          u
        );
      })(xd),
      Md = RegExp("^" + A.source + "$"),
      Td = {};
    var Od = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
    var Cd = (function(d) {
        function u(e) {
          var n;
          return (
            ((n = d.call(this) || this).zoneName = e),
            (n.valid = u.isValidZone(e)),
            n
          );
        }
        a(u, d),
          (u.isValidSpecifier = function(d) {
            return d && d.match(Md);
          }),
          (u.isValidZone = function(d) {
            try {
              return (
                new Intl.DateTimeFormat("en-US", { timeZone: d }).format(), !0
              );
            } catch (d) {
              return !1;
            }
          }),
          (u.parseGMTOffset = function(d) {
            if (d) {
              var u = d.match(/^Etc\/GMT([+-]\d{1,2})$/i);
              if (u) return -60 * parseInt(u[1]);
            }
            return null;
          });
        var e = u.prototype;
        return (
          (e.offsetName = function(d, u) {
            return M(d, u.format, u.locale, this.name);
          }),
          (e.offset = function(d) {
            var u,
              e = new Date(d),
              n = ((u = this.name),
              Td[u] ||
                (Td[u] = new Intl.DateTimeFormat("en-US", {
                  hour12: !1,
                  timeZone: u,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit"
                })),
              Td[u]),
              t = n.formatToParts
                ? (function(d, u) {
                    for (
                      var e = d.formatToParts(u), n = [], t = 0;
                      t < e.length;
                      t++
                    ) {
                      var a = e[t],
                        r = a.type,
                        f = a.value,
                        c = Od[r];
                      o(c) || (n[c] = parseInt(f, 10));
                    }
                    return n;
                  })(n, e)
                : (function(d, u) {
                    var e = d.format(u).replace(/\u200E/g, ""),
                      n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(e),
                      t = n[1],
                      a = n[2];
                    return [n[3], t, a, n[4], n[5], n[6]];
                  })(n, e),
              a = x({
                year: t[0],
                month: t[1],
                day: t[2],
                hour: t[3],
                minute: t[4],
                second: t[5],
                millisecond: 0
              }),
              r = e.valueOf();
            return (a - (r -= r % 1e3)) / 6e4;
          }),
          (e.equals = function(d) {
            return "iana" === d.type && d.name === this.name;
          }),
          t(u, [
            {
              key: "type",
              get: function() {
                return "iana";
              }
            },
            {
              key: "name",
              get: function() {
                return this.zoneName;
              }
            },
            {
              key: "universal",
              get: function() {
                return !1;
              }
            },
            {
              key: "isValid",
              get: function() {
                return this.valid;
              }
            }
          ]),
          u
        );
      })(xd),
      Ad = null;
    var Ld = (function(d) {
        function u(u) {
          var e;
          return ((e = d.call(this) || this).fixed = u), e;
        }
        a(u, d),
          (u.instance = function(d) {
            return 0 === d ? u.utcInstance : new u(d);
          }),
          (u.parseSpecifier = function(d) {
            if (d) {
              var e = d.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
              if (e) return new u(T(e[1], e[2]));
            }
            return null;
          }),
          t(u, null, [
            {
              key: "utcInstance",
              get: function() {
                return null === Ad && (Ad = new u(0)), Ad;
              }
            }
          ]);
        var e = u.prototype;
        return (
          (e.offsetName = function() {
            return this.name;
          }),
          (e.offset = function() {
            return this.fixed;
          }),
          (e.equals = function(d) {
            return "fixed" === d.type && d.fixed === this.fixed;
          }),
          t(u, [
            {
              key: "type",
              get: function() {
                return "fixed";
              }
            },
            {
              key: "name",
              get: function() {
                return 0 === this.fixed
                  ? "UTC"
                  : "UTC" +
                      ((d = this),
                      (u = Math.trunc(d.fixed / 60)),
                      (e = Math.abs(d.fixed % 60)),
                      (n = (u > 0 ? "+" : "-") + Math.abs(u)),
                      e > 0 ? n + ":" + g(e, 2) : n);
                var d, u, e, n;
              }
            },
            {
              key: "universal",
              get: function() {
                return !0;
              }
            },
            {
              key: "isValid",
              get: function() {
                return !0;
              }
            }
          ]),
          u
        );
      })(xd),
      Pd = (function(d) {
        function u(u) {
          var e;
          return ((e = d.call(this) || this).zoneName = u), e;
        }
        a(u, d);
        var e = u.prototype;
        return (
          (e.offsetName = function() {
            return null;
          }),
          (e.offset = function() {
            return NaN;
          }),
          (e.equals = function() {
            return !1;
          }),
          t(u, [
            {
              key: "type",
              get: function() {
                return "invalid";
              }
            },
            {
              key: "name",
              get: function() {
                return this.zoneName;
              }
            },
            {
              key: "universal",
              get: function() {
                return !1;
              }
            },
            {
              key: "isValid",
              get: function() {
                return !1;
              }
            }
          ]),
          u
        );
      })(xd);
    function Nd(d, u) {
      var e;
      if (o(d) || null === d) return u;
      if (d instanceof xd) return d;
      if ("string" == typeof d) {
        var n = d.toLowerCase();
        return "local" === n
          ? u
          : "utc" === n || "gmt" === n
          ? Ld.utcInstance
          : null != (e = Cd.parseGMTOffset(d))
          ? Ld.instance(e)
          : Cd.isValidSpecifier(n)
          ? new Cd(d)
          : Ld.parseSpecifier(n) || new Pd(d);
      }
      return s(d)
        ? Ld.instance(d)
        : "object" == typeof d && d.offset && "number" == typeof d.offset
        ? d
        : new Pd(d);
    }
    var Rd = function() {
        return Date.now();
      },
      jd = null,
      Dd = null,
      Bd = null,
      Fd = null,
      Ud = !1,
      Hd = (function() {
        function d() {}
        return (
          (d.resetCaches = function() {
            du.resetCache();
          }),
          t(d, null, [
            {
              key: "now",
              get: function() {
                return Rd;
              },
              set: function(d) {
                Rd = d;
              }
            },
            {
              key: "defaultZoneName",
              get: function() {
                return (jd || Ed.instance).name;
              },
              set: function(d) {
                jd = d ? Nd(d) : null;
              }
            },
            {
              key: "defaultZone",
              get: function() {
                return jd || Ed.instance;
              }
            },
            {
              key: "defaultLocale",
              get: function() {
                return Dd;
              },
              set: function(d) {
                Dd = d;
              }
            },
            {
              key: "defaultNumberingSystem",
              get: function() {
                return Bd;
              },
              set: function(d) {
                Bd = d;
              }
            },
            {
              key: "defaultOutputCalendar",
              get: function() {
                return Fd;
              },
              set: function(d) {
                Fd = d;
              }
            },
            {
              key: "throwOnInvalid",
              get: function() {
                return Ud;
              },
              set: function(d) {
                Ud = d;
              }
            }
          ]),
          d
        );
      })();
    function Gd(d, u) {
      var e = "",
        n = d,
        t = Array.isArray(n),
        a = 0;
      for (n = t ? n : n[Symbol.iterator](); ; ) {
        var r;
        if (t) {
          if (a >= n.length) break;
          r = n[a++];
        } else {
          if ((a = n.next()).done) break;
          r = a.value;
        }
        var f = r;
        f.literal ? (e += f.val) : (e += u(f.val));
      }
      return e;
    }
    var Vd = {
        D: j,
        DD: D,
        DDD: B,
        DDDD: F,
        t: U,
        tt: H,
        ttt: G,
        tttt: V,
        T: $,
        TT: W,
        TTT: K,
        TTTT: Z,
        f: z,
        ff: Y,
        fff: X,
        ffff: dd,
        F: q,
        FF: J,
        FFF: Q,
        FFFF: ud
      },
      $d = (function() {
        function d(d, u) {
          (this.opts = u), (this.loc = d), (this.systemLoc = null);
        }
        (d.create = function(u, e) {
          return void 0 === e && (e = {}), new d(u, e);
        }),
          (d.parseFormat = function(d) {
            for (
              var u = null, e = "", n = !1, t = [], a = 0;
              a < d.length;
              a++
            ) {
              var r = d.charAt(a);
              "'" === r
                ? (e.length > 0 && t.push({ literal: n, val: e }),
                  (u = null),
                  (e = ""),
                  (n = !n))
                : n
                ? (e += r)
                : r === u
                ? (e += r)
                : (e.length > 0 && t.push({ literal: !1, val: e }),
                  (e = r),
                  (u = r));
            }
            return e.length > 0 && t.push({ literal: n, val: e }), t;
          });
        var u = d.prototype;
        return (
          (u.formatWithSystemDefault = function(d, u) {
            return (
              null === this.systemLoc &&
                (this.systemLoc = this.loc.redefaultToSystem()),
              this.systemLoc
                .dtFormatter(d, Object.assign({}, this.opts, u))
                .format()
            );
          }),
          (u.formatDateTime = function(d, u) {
            return (
              void 0 === u && (u = {}),
              this.loc.dtFormatter(d, Object.assign({}, this.opts, u)).format()
            );
          }),
          (u.formatDateTimeParts = function(d, u) {
            return (
              void 0 === u && (u = {}),
              this.loc
                .dtFormatter(d, Object.assign({}, this.opts, u))
                .formatToParts()
            );
          }),
          (u.resolvedOptions = function(d, u) {
            return (
              void 0 === u && (u = {}),
              this.loc
                .dtFormatter(d, Object.assign({}, this.opts, u))
                .resolvedOptions()
            );
          }),
          (u.num = function(d, u) {
            if ((void 0 === u && (u = 0), this.opts.forceSimple))
              return g(d, u);
            var e = Object.assign({}, this.opts);
            return (
              u > 0 && (e.padTo = u), this.loc.numberFormatter(e).format(d)
            );
          }),
          (u.formatDateTimeFromString = function(u, e) {
            var n = this,
              t = "en" === this.loc.listingMode(),
              a = function(d, e) {
                return n.loc.extract(u, d, e);
              },
              r = function(d) {
                if (u.isOffsetFixed && 0 === u.offset && d.allowZ) return "Z";
                var e = Math.trunc(u.offset / 60),
                  t = Math.abs(u.offset % 60),
                  a = e >= 0 ? "+" : "-",
                  r = "" + a + Math.abs(e);
                switch (d.format) {
                  case "short":
                    return "" + a + n.num(Math.abs(e), 2) + ":" + n.num(t, 2);
                  case "narrow":
                    return t > 0 ? r + ":" + t : r;
                  case "techie":
                    return "" + a + n.num(Math.abs(e), 2) + n.num(t, 2);
                  default:
                    throw new RangeError(
                      "Value format " +
                        d.format +
                        " is out of range for property format"
                    );
                }
              },
              f = function() {
                return t
                  ? (function(d) {
                      return sd[d.hour < 12 ? 0 : 1];
                    })(u)
                  : a({ hour: "numeric", hour12: !0 }, "dayperiod");
              },
              c = function(d, e) {
                return t
                  ? (function(d, u) {
                      return rd(u)[d.month - 1];
                    })(u, d)
                  : a(e ? { month: d } : { month: d, day: "numeric" }, "month");
              },
              i = function(d, e) {
                return t
                  ? (function(d, u) {
                      return od(u)[d.weekday - 1];
                    })(u, d)
                  : a(
                      e
                        ? { weekday: d }
                        : { weekday: d, month: "long", day: "numeric" },
                      "weekday"
                    );
              },
              o = function(d) {
                return t
                  ? (function(d, u) {
                      return hd(u)[d.year < 0 ? 0 : 1];
                    })(u, d)
                  : a({ era: d }, "era");
              };
            return Gd(d.parseFormat(e), function(d) {
              var e = n.loc.outputCalendar;
              switch (d) {
                case "S":
                  return n.num(u.millisecond);
                case "u":
                case "SSS":
                  return n.num(u.millisecond, 3);
                case "s":
                  return n.num(u.second);
                case "ss":
                  return n.num(u.second, 2);
                case "m":
                  return n.num(u.minute);
                case "mm":
                  return n.num(u.minute, 2);
                case "h":
                  return n.num(u.hour % 12 == 0 ? 12 : u.hour % 12);
                case "hh":
                  return n.num(u.hour % 12 == 0 ? 12 : u.hour % 12, 2);
                case "H":
                  return n.num(u.hour);
                case "HH":
                  return n.num(u.hour, 2);
                case "Z":
                  return r({ format: "narrow", allowZ: n.opts.allowZ });
                case "ZZ":
                  return r({ format: "short", allowZ: n.opts.allowZ });
                case "ZZZ":
                  return r({ format: "techie", allowZ: !1 });
                case "ZZZZ":
                  return u.offsetNameShort;
                case "ZZZZZ":
                  return u.offsetNameLong;
                case "z":
                  return u.zoneName;
                case "a":
                  return f();
                case "d":
                  return e ? a({ day: "numeric" }, "day") : n.num(u.day);
                case "dd":
                  return e ? a({ day: "2-digit" }, "day") : n.num(u.day, 2);
                case "c":
                  return n.num(u.weekday);
                case "ccc":
                  return i("short", !0);
                case "cccc":
                  return i("long", !0);
                case "ccccc":
                  return i("narrow", !0);
                case "E":
                  return n.num(u.weekday);
                case "EEE":
                  return i("short", !1);
                case "EEEE":
                  return i("long", !1);
                case "EEEEE":
                  return i("narrow", !1);
                case "L":
                  return e
                    ? a({ month: "numeric", day: "numeric" }, "month")
                    : n.num(u.month);
                case "LL":
                  return e
                    ? a({ month: "2-digit", day: "numeric" }, "month")
                    : n.num(u.month, 2);
                case "LLL":
                  return c("short", !0);
                case "LLLL":
                  return c("long", !0);
                case "LLLLL":
                  return c("narrow", !0);
                case "M":
                  return e ? a({ month: "numeric" }, "month") : n.num(u.month);
                case "MM":
                  return e
                    ? a({ month: "2-digit" }, "month")
                    : n.num(u.month, 2);
                case "MMM":
                  return c("short", !1);
                case "MMMM":
                  return c("long", !1);
                case "MMMMM":
                  return c("narrow", !1);
                case "y":
                  return e ? a({ year: "numeric" }, "year") : n.num(u.year);
                case "yy":
                  return e
                    ? a({ year: "2-digit" }, "year")
                    : n.num(u.year.toString().slice(-2), 2);
                case "yyyy":
                  return e ? a({ year: "numeric" }, "year") : n.num(u.year, 4);
                case "yyyyyy":
                  return e ? a({ year: "numeric" }, "year") : n.num(u.year, 6);
                case "G":
                  return o("short");
                case "GG":
                  return o("long");
                case "GGGGG":
                  return o("narrow");
                case "kk":
                  return n.num(u.weekYear.toString().slice(-2), 2);
                case "kkkk":
                  return n.num(u.weekYear, 4);
                case "W":
                  return n.num(u.weekNumber);
                case "WW":
                  return n.num(u.weekNumber, 2);
                case "o":
                  return n.num(u.ordinal);
                case "ooo":
                  return n.num(u.ordinal, 3);
                case "q":
                  return n.num(u.quarter);
                case "qq":
                  return n.num(u.quarter, 2);
                case "X":
                  return n.num(Math.floor(u.ts / 1e3));
                case "x":
                  return n.num(u.ts);
                default:
                  return (function(d) {
                    var e = Vd[d];
                    return e ? n.formatWithSystemDefault(u, e) : d;
                  })(d);
              }
            });
          }),
          (u.formatDurationFromString = function(u, e) {
            var n,
              t = this,
              a = function(d) {
                switch (d[0]) {
                  case "S":
                    return "millisecond";
                  case "s":
                    return "second";
                  case "m":
                    return "minute";
                  case "h":
                    return "hour";
                  case "d":
                    return "day";
                  case "M":
                    return "month";
                  case "y":
                    return "year";
                  default:
                    return null;
                }
              },
              r = d.parseFormat(e),
              f = r.reduce(function(d, u) {
                var e = u.literal,
                  n = u.val;
                return e ? d : d.concat(n);
              }, []),
              c = u.shiftTo.apply(
                u,
                f.map(a).filter(function(d) {
                  return d;
                })
              );
            return Gd(
              r,
              ((n = c),
              function(d) {
                var u = a(d);
                return u ? t.num(n.get(u), d.length) : d;
              })
            );
          }),
          d
        );
      })(),
      Wd = {};
    function Kd(d, u) {
      void 0 === u && (u = {});
      var e = JSON.stringify([d, u]),
        n = Wd[e];
      return n || ((n = new Intl.DateTimeFormat(d, u)), (Wd[e] = n)), n;
    }
    var Zd = {};
    var zd = {};
    var qd = null;
    function Yd(d, u, e, n, t) {
      var a = d.listingMode(e);
      return "error" === a ? null : "en" === a ? n(u) : t(u);
    }
    var Jd = (function() {
        function d(d, u, e) {
          if (
            ((this.padTo = e.padTo || 0),
            (this.floor = e.floor || !1),
            !u && l())
          ) {
            var n = { useGrouping: !1 };
            e.padTo > 0 && (n.minimumIntegerDigits = e.padTo),
              (this.inf = (function(d, u) {
                void 0 === u && (u = {});
                var e = JSON.stringify([d, u]),
                  n = Zd[e];
                return n || ((n = new Intl.NumberFormat(d, u)), (Zd[e] = n)), n;
              })(d, n));
          }
        }
        return (
          (d.prototype.format = function(d) {
            if (this.inf) {
              var u = this.floor ? Math.floor(d) : d;
              return this.inf.format(u);
            }
            return g(this.floor ? Math.floor(d) : v(d, 3), this.padTo);
          }),
          d
        );
      })(),
      Xd = (function() {
        function d(d, u, e) {
          var n;
          if (
            ((this.opts = e),
            (this.hasIntl = l()),
            d.zone.universal && this.hasIntl
              ? ((n = "UTC"),
                e.timeZoneName
                  ? (this.dt = d)
                  : (this.dt =
                      0 === d.offset
                        ? d
                        : Pe.fromMillis(d.ts + 60 * d.offset * 1e3)))
              : "local" === d.zone.type
              ? (this.dt = d)
              : ((this.dt = d), (n = d.zone.name)),
            this.hasIntl)
          ) {
            var t = Object.assign({}, this.opts);
            n && (t.timeZone = n), (this.dtf = Kd(u, t));
          }
        }
        var u = d.prototype;
        return (
          (u.format = function() {
            if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
            var d = (function(d) {
                switch (
                  ed(
                    b(d, [
                      "weekday",
                      "era",
                      "year",
                      "month",
                      "day",
                      "hour",
                      "minute",
                      "second",
                      "timeZoneName",
                      "hour12"
                    ])
                  )
                ) {
                  case ed(j):
                    return "M/d/yyyy";
                  case ed(D):
                    return "LLL d, yyyy";
                  case ed(B):
                    return "LLLL d, yyyy";
                  case ed(F):
                    return "EEEE, LLLL d, yyyy";
                  case ed(U):
                    return "h:mm a";
                  case ed(H):
                    return "h:mm:ss a";
                  case ed(G):
                  case ed(V):
                    return "h:mm a";
                  case ed($):
                    return "HH:mm";
                  case ed(W):
                    return "HH:mm:ss";
                  case ed(K):
                  case ed(Z):
                    return "HH:mm";
                  case ed(z):
                    return "M/d/yyyy, h:mm a";
                  case ed(Y):
                    return "LLL d, yyyy, h:mm a";
                  case ed(X):
                    return "LLLL d, yyyy, h:mm a";
                  case ed(dd):
                    return "EEEE, LLLL d, yyyy, h:mm a";
                  case ed(q):
                    return "M/d/yyyy, h:mm:ss a";
                  case ed(J):
                    return "LLL d, yyyy, h:mm:ss a";
                  case ed(Q):
                    return "LLLL d, yyyy, h:mm:ss a";
                  case ed(ud):
                    return "EEEE, LLLL d, yyyy, h:mm:ss a";
                  default:
                    return "EEEE, LLLL d, yyyy, h:mm a";
                }
              })(this.opts),
              u = du.create("en-US");
            return $d.create(u).formatDateTimeFromString(this.dt, d);
          }),
          (u.formatToParts = function() {
            return this.hasIntl && m()
              ? this.dtf.formatToParts(this.dt.toJSDate())
              : [];
          }),
          (u.resolvedOptions = function() {
            return this.hasIntl
              ? this.dtf.resolvedOptions()
              : {
                  locale: "en-US",
                  numberingSystem: "latn",
                  outputCalendar: "gregory"
                };
          }),
          d
        );
      })(),
      Qd = (function() {
        function d(d, u, e) {
          (this.opts = Object.assign({ style: "long" }, e)),
            !u &&
              p() &&
              (this.rtf = (function(d, u) {
                void 0 === u && (u = {});
                var e = JSON.stringify([d, u]),
                  n = zd[e];
                return (
                  n || ((n = new Intl.RelativeTimeFormat(d, u)), (zd[e] = n)), n
                );
              })(d, e));
        }
        var u = d.prototype;
        return (
          (u.format = function(d, u) {
            return this.rtf
              ? this.rtf.format(d, u)
              : (function(d, u, e, n) {
                  void 0 === e && (e = "always"), void 0 === n && (n = !1);
                  var t = {
                      years: ["year", "yr."],
                      quarters: ["quarer", "qtr."],
                      months: ["month", "mo."],
                      weeks: ["week", "wk."],
                      days: ["day", "day"],
                      hours: ["hour", "hr."],
                      minutes: ["minute", "min."],
                      seconds: ["second", "sec."]
                    },
                    a = -1 === ["hours", "minutes", "seconds"].indexOf(d);
                  if ("auto" === e && a) {
                    var r = "days" === d;
                    switch (u) {
                      case 1:
                        return r ? "tomorrow" : "next " + t[d][0];
                      case -1:
                        return r ? "yesterday" : "last " + t[d][0];
                      case 0:
                        return r ? "today" : "this " + t[d][0];
                    }
                  }
                  var f = Object.is(u, -0) || u < 0,
                    c = Math.abs(u),
                    i = n ? t[d][1] : 1 === c ? t[d][0] : d;
                  return f ? c + " " + i + " ago" : "in " + c + " " + i;
                })(u, d, this.opts.numeric, "long" !== this.opts.style);
          }),
          (u.formatToParts = function(d, u) {
            return this.rtf ? this.rtf.formatToParts(d, u) : [];
          }),
          d
        );
      })(),
      du = (function() {
        function d(d, u, e, n) {
          var t = (function(d) {
              var u = d.indexOf("-u-");
              if (-1 === u) return [d];
              var e,
                n = d.substring(0, u);
              try {
                e = Kd(d).resolvedOptions();
              } catch (d) {
                e = Kd(n).resolvedOptions();
              }
              var t = e;
              return [n, t.numberingSystem, t.calendar];
            })(d),
            a = t[0],
            r = t[1],
            f = t[2];
          (this.locale = a),
            (this.numberingSystem = u || r || null),
            (this.outputCalendar = e || f || null),
            (this.intl = (function(d, u, e) {
              return l()
                ? e || u
                  ? ((d += "-u"),
                    e && (d += "-ca-" + e),
                    u && (d += "-nu-" + u),
                    d)
                  : d
                : [];
            })(this.locale, this.numberingSystem, this.outputCalendar)),
            (this.weekdaysCache = { format: {}, standalone: {} }),
            (this.monthsCache = { format: {}, standalone: {} }),
            (this.meridiemCache = null),
            (this.eraCache = {}),
            (this.specifiedLocale = n),
            (this.fastNumbersCached = null);
        }
        (d.fromOpts = function(u) {
          return d.create(
            u.locale,
            u.numberingSystem,
            u.outputCalendar,
            u.defaultToEN
          );
        }),
          (d.create = function(u, e, n, t) {
            void 0 === t && (t = !1);
            var a = u || Hd.defaultLocale;
            return new d(
              a ||
                (t
                  ? "en-US"
                  : (function() {
                      if (qd) return qd;
                      if (l()) {
                        var d = new Intl.DateTimeFormat().resolvedOptions()
                          .locale;
                        return (qd = "und" === d ? "en-US" : d);
                      }
                      return (qd = "en-US");
                    })()),
              e || Hd.defaultNumberingSystem,
              n || Hd.defaultOutputCalendar,
              a
            );
          }),
          (d.resetCache = function() {
            (qd = null), (Wd = {}), (Zd = {});
          }),
          (d.fromObject = function(u) {
            var e = void 0 === u ? {} : u,
              n = e.locale,
              t = e.numberingSystem,
              a = e.outputCalendar;
            return d.create(n, t, a);
          });
        var u = d.prototype;
        return (
          (u.listingMode = function(d) {
            void 0 === d && (d = !0);
            var u = l() && m(),
              e = this.isEnglish(),
              n = !(
                (null !== this.numberingSystem &&
                  "latn" !== this.numberingSystem) ||
                (null !== this.outputCalendar &&
                  "gregory" !== this.outputCalendar)
              );
            return u || (e && n) || d
              ? !u || (e && n)
                ? "en"
                : "intl"
              : "error";
          }),
          (u.clone = function(u) {
            return u && 0 !== Object.getOwnPropertyNames(u).length
              ? d.create(
                  u.locale || this.specifiedLocale,
                  u.numberingSystem || this.numberingSystem,
                  u.outputCalendar || this.outputCalendar,
                  u.defaultToEN || !1
                )
              : this;
          }),
          (u.redefaultToEN = function(d) {
            return (
              void 0 === d && (d = {}),
              this.clone(Object.assign({}, d, { defaultToEN: !0 }))
            );
          }),
          (u.redefaultToSystem = function(d) {
            return (
              void 0 === d && (d = {}),
              this.clone(Object.assign({}, d, { defaultToEN: !1 }))
            );
          }),
          (u.months = function(d, u, e) {
            var n = this;
            return (
              void 0 === u && (u = !1),
              void 0 === e && (e = !0),
              Yd(this, d, e, rd, function() {
                var e = u ? { month: d, day: "numeric" } : { month: d },
                  t = u ? "format" : "standalone";
                return (
                  n.monthsCache[t][d] ||
                    (n.monthsCache[t][d] = (function(d) {
                      for (var u = [], e = 1; e <= 12; e++) {
                        var n = Pe.utc(2016, e, 1);
                        u.push(d(n));
                      }
                      return u;
                    })(function(d) {
                      return n.extract(d, e, "month");
                    })),
                  n.monthsCache[t][d]
                );
              })
            );
          }),
          (u.weekdays = function(d, u, e) {
            var n = this;
            return (
              void 0 === u && (u = !1),
              void 0 === e && (e = !0),
              Yd(this, d, e, od, function() {
                var e = u
                    ? {
                        weekday: d,
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      }
                    : { weekday: d },
                  t = u ? "format" : "standalone";
                return (
                  n.weekdaysCache[t][d] ||
                    (n.weekdaysCache[t][d] = (function(d) {
                      for (var u = [], e = 1; e <= 7; e++) {
                        var n = Pe.utc(2016, 11, 13 + e);
                        u.push(d(n));
                      }
                      return u;
                    })(function(d) {
                      return n.extract(d, e, "weekday");
                    })),
                  n.weekdaysCache[t][d]
                );
              })
            );
          }),
          (u.meridiems = function(d) {
            var u = this;
            return (
              void 0 === d && (d = !0),
              Yd(
                this,
                void 0,
                d,
                function() {
                  return sd;
                },
                function() {
                  if (!u.meridiemCache) {
                    var d = { hour: "numeric", hour12: !0 };
                    u.meridiemCache = [
                      Pe.utc(2016, 11, 13, 9),
                      Pe.utc(2016, 11, 13, 19)
                    ].map(function(e) {
                      return u.extract(e, d, "dayperiod");
                    });
                  }
                  return u.meridiemCache;
                }
              )
            );
          }),
          (u.eras = function(d, u) {
            var e = this;
            return (
              void 0 === u && (u = !0),
              Yd(this, d, u, hd, function() {
                var u = { era: d };
                return (
                  e.eraCache[d] ||
                    (e.eraCache[d] = [
                      Pe.utc(-40, 1, 1),
                      Pe.utc(2017, 1, 1)
                    ].map(function(d) {
                      return e.extract(d, u, "era");
                    })),
                  e.eraCache[d]
                );
              })
            );
          }),
          (u.extract = function(d, u, e) {
            var n = this.dtFormatter(d, u)
              .formatToParts()
              .find(function(d) {
                return d.type.toLowerCase() === e;
              });
            return n ? n.value : null;
          }),
          (u.numberFormatter = function(d) {
            return (
              void 0 === d && (d = {}),
              new Jd(this.intl, d.forceSimple || this.fastNumbers, d)
            );
          }),
          (u.dtFormatter = function(d, u) {
            return void 0 === u && (u = {}), new Xd(d, this.intl, u);
          }),
          (u.relFormatter = function(d) {
            return (
              void 0 === d && (d = {}), new Qd(this.intl, this.isEnglish(), d)
            );
          }),
          (u.isEnglish = function() {
            return (
              "en" === this.locale ||
              "en-us" === this.locale.toLowerCase() ||
              (l() &&
                Intl.DateTimeFormat(this.intl)
                  .resolvedOptions()
                  .locale.startsWith("en-us"))
            );
          }),
          (u.equals = function(d) {
            return (
              this.locale === d.locale &&
              this.numberingSystem === d.numberingSystem &&
              this.outputCalendar === d.outputCalendar
            );
          }),
          t(d, [
            {
              key: "fastNumbers",
              get: function() {
                var d;
                return (
                  null == this.fastNumbersCached &&
                    (this.fastNumbersCached =
                      (!(d = this).numberingSystem ||
                        "latn" === d.numberingSystem) &&
                      ("latn" === d.numberingSystem ||
                        !d.locale ||
                        d.locale.startsWith("en") ||
                        (l() &&
                          "latn" ===
                            Intl.DateTimeFormat(d.intl).resolvedOptions()
                              .numberingSystem))),
                  this.fastNumbersCached
                );
              }
            }
          ]),
          d
        );
      })();
    function uu() {
      for (var d = arguments.length, u = new Array(d), e = 0; e < d; e++)
        u[e] = arguments[e];
      var n = u.reduce(function(d, u) {
        return d + u.source;
      }, "");
      return RegExp("^" + n + "$");
    }
    function eu() {
      for (var d = arguments.length, u = new Array(d), e = 0; e < d; e++)
        u[e] = arguments[e];
      return function(d) {
        return u
          .reduce(
            function(u, e) {
              var n = u[0],
                t = u[1],
                a = u[2],
                r = e(d, a),
                f = r[0],
                c = r[1],
                i = r[2];
              return [Object.assign(n, f), t || c, i];
            },
            [{}, null, 1]
          )
          .slice(0, 2);
      };
    }
    function nu(d) {
      if (null == d) return [null, null];
      for (
        var u = arguments.length, e = new Array(u > 1 ? u - 1 : 0), n = 1;
        n < u;
        n++
      )
        e[n - 1] = arguments[n];
      for (var t = 0; t < e.length; t++) {
        var a = e[t],
          r = a[0],
          f = a[1],
          c = r.exec(d);
        if (c) return f(c);
      }
      return [null, null];
    }
    function tu() {
      for (var d = arguments.length, u = new Array(d), e = 0; e < d; e++)
        u[e] = arguments[e];
      return function(d, e) {
        var n,
          t = {};
        for (n = 0; n < u.length; n++) t[u[n]] = parseInt(d[e + n]);
        return [t, null, e + n];
      };
    }
    var au = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
      ru = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
      fu = RegExp("" + ru.source + au.source + "?"),
      cu = RegExp("(?:T" + fu.source + ")?"),
      iu = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
      ou = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
      su = /(\d{4})-?(\d{3})/,
      lu = tu("weekYear", "weekNumber", "weekDay"),
      mu = tu("year", "ordinal"),
      pu = /(\d{4})-(\d\d)-(\d\d)/,
      hu = RegExp(ru.source + " ?(?:" + au.source + "|(" + A.source + "))?"),
      bu = RegExp("(?: " + hu.source + ")?");
    function yu(d, u) {
      return [
        {
          year: parseInt(d[u]),
          month: parseInt(d[u + 1]) || 1,
          day: parseInt(d[u + 2]) || 1
        },
        null,
        u + 3
      ];
    }
    function gu(d, u) {
      return [
        {
          hour: parseInt(d[u]) || 0,
          minute: parseInt(d[u + 1]) || 0,
          second: parseInt(d[u + 2]) || 0,
          millisecond: _(d[u + 3])
        },
        null,
        u + 4
      ];
    }
    function _u(d, u) {
      var e = !d[u] && !d[u + 1],
        n = T(d[u + 1], d[u + 2]);
      return [{}, e ? null : Ld.instance(n), u + 3];
    }
    function vu(d, u) {
      return [{}, d[u] ? new Cd(d[u]) : null, u + 1];
    }
    var wu = /^P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?|(-?\d{1,9})W)$/;
    function Iu(d) {
      var u = d[1],
        e = d[2],
        n = d[3],
        t = d[4],
        a = d[5],
        r = d[6],
        f = d[7],
        c = d[8];
      return [
        {
          years: parseInt(u),
          months: parseInt(e),
          weeks: parseInt(c),
          days: parseInt(n),
          hours: parseInt(t),
          minutes: parseInt(a),
          seconds: parseInt(r),
          milliseconds: _(f)
        }
      ];
    }
    var Su = {
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480
    };
    function xu(d, u, e, n, t, a, r) {
      var f = {
        year: 2 === u.length ? E(parseInt(u)) : parseInt(u),
        month: 2 === e.length ? parseInt(e, 10) : td.indexOf(e) + 1,
        day: parseInt(n),
        hour: parseInt(t),
        minute: parseInt(a)
      };
      return (
        r && (f.second = parseInt(r)),
        d && (f.weekday = d.length > 3 ? fd.indexOf(d) + 1 : cd.indexOf(d) + 1),
        f
      );
    }
    var ku = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
    function Eu(d) {
      var u,
        e = d[1],
        n = d[2],
        t = d[3],
        a = d[4],
        r = d[5],
        f = d[6],
        c = d[7],
        i = d[8],
        o = d[9],
        s = d[10],
        l = d[11],
        m = xu(e, a, t, n, r, f, c);
      return (u = i ? Su[i] : o ? 0 : T(s, l)), [m, new Ld(u)];
    }
    var Mu = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
      Tu = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
      Ou = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
    function Cu(d) {
      var u = d[1],
        e = d[2],
        n = d[3];
      return [xu(u, d[4], n, e, d[5], d[6], d[7]), Ld.utcInstance];
    }
    function Au(d) {
      var u = d[1],
        e = d[2],
        n = d[3],
        t = d[4],
        a = d[5],
        r = d[6];
      return [xu(u, d[7], e, n, t, a, r), Ld.utcInstance];
    }
    var Lu = (function() {
        function d(d, u) {
          (this.reason = d), (this.explanation = u);
        }
        return (
          (d.prototype.toMessage = function() {
            return this.explanation
              ? this.reason + ": " + this.explanation
              : this.reason;
          }),
          d
        );
      })(),
      Pu = {
        weeks: {
          days: 7,
          hours: 168,
          minutes: 10080,
          seconds: 604800,
          milliseconds: 6048e5
        },
        days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 },
        hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
        minutes: { seconds: 60, milliseconds: 6e4 },
        seconds: { milliseconds: 1e3 }
      },
      Nu = Object.assign(
        {
          years: {
            months: 12,
            weeks: 52,
            days: 365,
            hours: 8760,
            minutes: 525600,
            seconds: 31536e3,
            milliseconds: 31536e6
          },
          quarters: {
            months: 3,
            weeks: 13,
            days: 91,
            hours: 2184,
            minutes: 131040,
            milliseconds: 78624e5
          },
          months: {
            weeks: 4,
            days: 30,
            hours: 720,
            minutes: 43200,
            seconds: 2592e3,
            milliseconds: 2592e6
          }
        },
        Pu
      ),
      Ru = Object.assign(
        {
          years: {
            months: 12,
            weeks: 52.1775,
            days: 365.2425,
            hours: 8765.82,
            minutes: 525949.2,
            seconds: 525949.2 * 60,
            milliseconds: 525949.2 * 60 * 1e3
          },
          quarters: {
            months: 3,
            weeks: 13.044375,
            days: 91.310625,
            hours: 2191.455,
            minutes: 131487.3,
            seconds: (525949.2 * 60) / 4,
            milliseconds: 7889237999.999999
          },
          months: {
            weeks: 30.436875 / 7,
            days: 30.436875,
            hours: 730.485,
            minutes: 43829.1,
            seconds: 2629746,
            milliseconds: 2629746e3
          }
        },
        Pu
      ),
      ju = [
        "years",
        "quarters",
        "months",
        "weeks",
        "days",
        "hours",
        "minutes",
        "seconds",
        "milliseconds"
      ],
      Du = ju.slice(0).reverse();
    function Bu(d, u, e) {
      void 0 === e && (e = !1);
      var n = {
        values: e ? u.values : Object.assign({}, d.values, u.values || {}),
        loc: d.loc.clone(u.loc),
        conversionAccuracy: u.conversionAccuracy || d.conversionAccuracy
      };
      return new Hu(n);
    }
    function Fu(d, u, e, n, t) {
      var a,
        r = d[t][e],
        f = u[e] / r,
        c =
          !(Math.sign(f) === Math.sign(n[t])) && 0 !== n[t] && Math.abs(f) <= 1
            ? (a = f) < 0
              ? Math.floor(a)
              : Math.ceil(a)
            : Math.trunc(f);
      (n[t] += c), (u[e] -= c * r);
    }
    function Uu(d, u) {
      Du.reduce(function(e, n) {
        return o(u[n]) ? e : (e && Fu(d, u, e, u, n), n);
      }, null);
    }
    var Hu = (function() {
      function d(d) {
        var u = "longterm" === d.conversionAccuracy || !1;
        (this.values = d.values),
          (this.loc = d.loc || du.create()),
          (this.conversionAccuracy = u ? "longterm" : "casual"),
          (this.invalid = d.invalid || null),
          (this.matrix = u ? Ru : Nu),
          (this.isLuxonDuration = !0);
      }
      (d.fromMillis = function(u, e) {
        return d.fromObject(Object.assign({ milliseconds: u }, e));
      }),
        (d.fromObject = function(u) {
          if (null == u || "object" != typeof u)
            throw new Id(
              "Duration.fromObject: argument expected to be an object, got " +
                typeof u
            );
          return new d({
            values: O(u, d.normalizeUnit, !0),
            loc: du.fromObject(u),
            conversionAccuracy: u.conversionAccuracy
          });
        }),
        (d.fromISO = function(u, e) {
          var n = nu(u, [wu, Iu])[0];
          if (n) {
            var t = Object.assign(n, e);
            return d.fromObject(t);
          }
          return d.invalid(
            "unparsable",
            'the input "' + u + "\" can't be parsed as ISO 8601"
          );
        }),
        (d.invalid = function(u, e) {
          if ((void 0 === e && (e = null), !u))
            throw new Id("need to specify a reason the Duration is invalid");
          var n = u instanceof Lu ? u : new Lu(u, e);
          if (Hd.throwOnInvalid) throw new _d(n);
          return new d({ invalid: n });
        }),
        (d.normalizeUnit = function(d, u) {
          void 0 === u && (u = !1);
          var e = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
          }[d ? d.toLowerCase() : d];
          if (!u && !e) throw new wd(d);
          return e;
        }),
        (d.isDuration = function(d) {
          return (d && d.isLuxonDuration) || !1;
        });
      var u = d.prototype;
      return (
        (u.toFormat = function(d, u) {
          void 0 === u && (u = {});
          var e = Object.assign({}, u, {
            floor: !1 !== u.round && !1 !== u.floor
          });
          return this.isValid
            ? $d.create(this.loc, e).formatDurationFromString(this, d)
            : "Invalid Duration";
        }),
        (u.toObject = function(d) {
          if ((void 0 === d && (d = {}), !this.isValid)) return {};
          var u = Object.assign({}, this.values);
          return (
            d.includeConfig &&
              ((u.conversionAccuracy = this.conversionAccuracy),
              (u.numberingSystem = this.loc.numberingSystem),
              (u.locale = this.loc.locale)),
            u
          );
        }),
        (u.toISO = function() {
          if (!this.isValid) return null;
          var d = "P";
          return (
            0 !== this.years && (d += this.years + "Y"),
            (0 === this.months && 0 === this.quarters) ||
              (d += this.months + 3 * this.quarters + "M"),
            (0 === this.days && 0 === this.weeks) ||
              (d += this.days + 7 * this.weeks + "D"),
            (0 === this.hours &&
              0 === this.minutes &&
              0 === this.seconds &&
              0 === this.milliseconds) ||
              (d += "T"),
            0 !== this.hours && (d += this.hours + "H"),
            0 !== this.minutes && (d += this.minutes + "M"),
            (0 === this.seconds && 0 === this.milliseconds) ||
              (d += this.seconds + this.milliseconds / 1e3 + "S"),
            "P" === d && (d += "T0S"),
            d
          );
        }),
        (u.toJSON = function() {
          return this.toISO();
        }),
        (u.toString = function() {
          return this.toISO();
        }),
        (u.valueOf = function() {
          return this.as("milliseconds");
        }),
        (u.plus = function(d) {
          if (!this.isValid) return this;
          for (var u = Gu(d), e = {}, n = 0; n < ju.length; n++) {
            var t = ju[n];
            (u.values.hasOwnProperty(t) || this.values.hasOwnProperty(t)) &&
              (e[t] = u.get(t) + this.get(t));
          }
          return Bu(this, { values: e }, !0);
        }),
        (u.minus = function(d) {
          if (!this.isValid) return this;
          var u = Gu(d);
          return this.plus(u.negate());
        }),
        (u.get = function(u) {
          return this[d.normalizeUnit(u)];
        }),
        (u.set = function(u) {
          return Bu(this, {
            values: Object.assign(this.values, O(u, d.normalizeUnit))
          });
        }),
        (u.reconfigure = function(d) {
          var u = void 0 === d ? {} : d,
            e = u.locale,
            n = u.numberingSystem,
            t = u.conversionAccuracy,
            a = { loc: this.loc.clone({ locale: e, numberingSystem: n }) };
          return t && (a.conversionAccuracy = t), Bu(this, a);
        }),
        (u.as = function(d) {
          return this.isValid ? this.shiftTo(d).get(d) : NaN;
        }),
        (u.normalize = function() {
          if (!this.isValid) return this;
          var u = this.toObject();
          return Uu(this.matrix, u), d.fromObject(u);
        }),
        (u.shiftTo = function() {
          for (var u = arguments.length, e = new Array(u), n = 0; n < u; n++)
            e[n] = arguments[n];
          if (!this.isValid) return this;
          if (0 === e.length) return this;
          e = e.map(function(u) {
            return d.normalizeUnit(u);
          });
          var t,
            a = {},
            r = {},
            f = this.toObject();
          Uu(this.matrix, f);
          for (var c = 0; c < ju.length; c++) {
            var i = ju[c];
            if (e.indexOf(i) >= 0) {
              t = i;
              var o = 0;
              for (var l in r)
                r.hasOwnProperty(l) &&
                  ((o += this.matrix[l][i] * r[l]), (r[l] = 0));
              s(f[i]) && (o += f[i]);
              var m = Math.trunc(o);
              for (var p in ((a[i] = m), (r[i] = o - m), f))
                ju.indexOf(p) > ju.indexOf(i) && Fu(this.matrix, f, p, a, i);
            } else s(f[i]) && (r[i] = f[i]);
          }
          if (t)
            for (var h in r)
              r.hasOwnProperty(h) &&
                0 !== r[h] &&
                (a[t] += h === t ? r[h] : r[h] / this.matrix[t][h]);
          return Bu(this, { values: a }, !0);
        }),
        (u.negate = function() {
          if (!this.isValid) return this;
          for (
            var d = {}, u = Object.keys(this.values), e = 0;
            e < u.length;
            e++
          ) {
            var n = u[e];
            d[n] = -this.values[n];
          }
          return Bu(this, { values: d }, !0);
        }),
        (u.equals = function(d) {
          if (!this.isValid || !d.isValid) return !1;
          if (!this.loc.equals(d.loc)) return !1;
          for (var u = 0; u < ju.length; u++) {
            var e = ju[u];
            if (this.values[e] !== d.values[e]) return !1;
          }
          return !0;
        }),
        t(d, [
          {
            key: "locale",
            get: function() {
              return this.isValid ? this.loc.locale : null;
            }
          },
          {
            key: "numberingSystem",
            get: function() {
              return this.isValid ? this.loc.numberingSystem : null;
            }
          },
          {
            key: "years",
            get: function() {
              return this.isValid ? this.values.years || 0 : NaN;
            }
          },
          {
            key: "quarters",
            get: function() {
              return this.isValid ? this.values.quarters || 0 : NaN;
            }
          },
          {
            key: "months",
            get: function() {
              return this.isValid ? this.values.months || 0 : NaN;
            }
          },
          {
            key: "weeks",
            get: function() {
              return this.isValid ? this.values.weeks || 0 : NaN;
            }
          },
          {
            key: "days",
            get: function() {
              return this.isValid ? this.values.days || 0 : NaN;
            }
          },
          {
            key: "hours",
            get: function() {
              return this.isValid ? this.values.hours || 0 : NaN;
            }
          },
          {
            key: "minutes",
            get: function() {
              return this.isValid ? this.values.minutes || 0 : NaN;
            }
          },
          {
            key: "seconds",
            get: function() {
              return this.isValid ? this.values.seconds || 0 : NaN;
            }
          },
          {
            key: "milliseconds",
            get: function() {
              return this.isValid ? this.values.milliseconds || 0 : NaN;
            }
          },
          {
            key: "isValid",
            get: function() {
              return null === this.invalid;
            }
          },
          {
            key: "invalidReason",
            get: function() {
              return this.invalid ? this.invalid.reason : null;
            }
          },
          {
            key: "invalidExplanation",
            get: function() {
              return this.invalid ? this.invalid.explanation : null;
            }
          }
        ]),
        d
      );
    })();
    function Gu(d) {
      if (s(d)) return Hu.fromMillis(d);
      if (Hu.isDuration(d)) return d;
      if ("object" == typeof d) return Hu.fromObject(d);
      throw new Id("Unknown duration argument " + d + " of type " + typeof d);
    }
    function Vu(d, u) {
      return d && d.isValid
        ? u && u.isValid
          ? u < d
            ? new Lu(
                "end before start",
                "The end of an interval must be after its start, but you had start=" +
                  d.toISO() +
                  " and end=" +
                  u.toISO()
              )
            : null
          : new Lu("missing or invalid end")
        : new Lu("missing or invalid start");
    }
    var $u = (function() {
        function d(d) {
          (this.s = d.start),
            (this.e = d.end),
            (this.invalid = d.invalid || null),
            (this.isLuxonInterval = !0);
        }
        (d.invalid = function(u, e) {
          if ((void 0 === e && (e = null), !u))
            throw new Id("need to specify a reason the Interval is invalid");
          var n = u instanceof Lu ? u : new Lu(u, e);
          if (Hd.throwOnInvalid) throw new gd(n);
          return new d({ invalid: n });
        }),
          (d.fromDateTimes = function(u, e) {
            var n = Ne(u),
              t = Ne(e);
            return new d({ start: n, end: t, invalid: Vu(n, t) });
          }),
          (d.after = function(u, e) {
            var n = Gu(e),
              t = Ne(u);
            return d.fromDateTimes(t, t.plus(n));
          }),
          (d.before = function(u, e) {
            var n = Gu(e),
              t = Ne(u);
            return d.fromDateTimes(t.minus(n), t);
          }),
          (d.fromISO = function(u, e) {
            var n = (u || "").split("/", 2),
              t = n[0],
              a = n[1];
            if (t && a) {
              var r = Pe.fromISO(t, e),
                f = Pe.fromISO(a, e);
              if (r.isValid && f.isValid) return d.fromDateTimes(r, f);
              if (r.isValid) {
                var c = Hu.fromISO(a, e);
                if (c.isValid) return d.after(r, c);
              } else if (f.isValid) {
                var i = Hu.fromISO(t, e);
                if (i.isValid) return d.before(f, i);
              }
            }
            return d.invalid(
              "unparsable",
              'the input "' + u + "\" can't be parsed asISO 8601"
            );
          }),
          (d.isInterval = function(d) {
            return (d && d.isLuxonInterval) || !1;
          });
        var u = d.prototype;
        return (
          (u.length = function(d) {
            return (
              void 0 === d && (d = "milliseconds"),
              this.isValid ? this.toDuration.apply(this, [d]).get(d) : NaN
            );
          }),
          (u.count = function(d) {
            if ((void 0 === d && (d = "milliseconds"), !this.isValid))
              return NaN;
            var u = this.start.startOf(d),
              e = this.end.startOf(d);
            return Math.floor(e.diff(u, d).get(d)) + 1;
          }),
          (u.hasSame = function(d) {
            return !!this.isValid && this.e.minus(1).hasSame(this.s, d);
          }),
          (u.isEmpty = function() {
            return this.s.valueOf() === this.e.valueOf();
          }),
          (u.isAfter = function(d) {
            return !!this.isValid && this.s > d;
          }),
          (u.isBefore = function(d) {
            return !!this.isValid && this.e <= d;
          }),
          (u.contains = function(d) {
            return !!this.isValid && (this.s <= d && this.e > d);
          }),
          (u.set = function(u) {
            var e = void 0 === u ? {} : u,
              n = e.start,
              t = e.end;
            return this.isValid
              ? d.fromDateTimes(n || this.s, t || this.e)
              : this;
          }),
          (u.splitAt = function() {
            if (!this.isValid) return [];
            for (var u = arguments.length, e = new Array(u), n = 0; n < u; n++)
              e[n] = arguments[n];
            for (
              var t = e.map(Ne).sort(), a = [], r = this.s, f = 0;
              r < this.e;

            ) {
              var c = t[f] || this.e,
                i = +c > +this.e ? this.e : c;
              a.push(d.fromDateTimes(r, i)), (r = i), (f += 1);
            }
            return a;
          }),
          (u.splitBy = function(u) {
            var e = Gu(u);
            if (!this.isValid || !e.isValid || 0 === e.as("milliseconds"))
              return [];
            for (var n, t, a = this.s, r = []; a < this.e; )
              (t = +(n = a.plus(e)) > +this.e ? this.e : n),
                r.push(d.fromDateTimes(a, t)),
                (a = t);
            return r;
          }),
          (u.divideEqually = function(d) {
            return this.isValid
              ? this.splitBy(this.length() / d).slice(0, d)
              : [];
          }),
          (u.overlaps = function(d) {
            return this.e > d.s && this.s < d.e;
          }),
          (u.abutsStart = function(d) {
            return !!this.isValid && +this.e == +d.s;
          }),
          (u.abutsEnd = function(d) {
            return !!this.isValid && +d.e == +this.s;
          }),
          (u.engulfs = function(d) {
            return !!this.isValid && (this.s <= d.s && this.e >= d.e);
          }),
          (u.equals = function(d) {
            return (
              !(!this.isValid || !d.isValid) &&
              (this.s.equals(d.s) && this.e.equals(d.e))
            );
          }),
          (u.intersection = function(u) {
            if (!this.isValid) return this;
            var e = this.s > u.s ? this.s : u.s,
              n = this.e < u.e ? this.e : u.e;
            return e > n ? null : d.fromDateTimes(e, n);
          }),
          (u.union = function(u) {
            if (!this.isValid) return this;
            var e = this.s < u.s ? this.s : u.s,
              n = this.e > u.e ? this.e : u.e;
            return d.fromDateTimes(e, n);
          }),
          (d.merge = function(d) {
            var u = d
                .sort(function(d, u) {
                  return d.s - u.s;
                })
                .reduce(
                  function(d, u) {
                    var e = d[0],
                      n = d[1];
                    return n
                      ? n.overlaps(u) || n.abutsStart(u)
                        ? [e, n.union(u)]
                        : [e.concat([n]), u]
                      : [e, u];
                  },
                  [[], null]
                ),
              e = u[0],
              n = u[1];
            return n && e.push(n), e;
          }),
          (d.xor = function(u) {
            var e,
              n = null,
              t = 0,
              a = [],
              r = u.map(function(d) {
                return [{ time: d.s, type: "s" }, { time: d.e, type: "e" }];
              }),
              f = (e = Array.prototype).concat.apply(e, r).sort(function(d, u) {
                return d.time - u.time;
              }),
              c = Array.isArray(f),
              i = 0;
            for (f = c ? f : f[Symbol.iterator](); ; ) {
              var o;
              if (c) {
                if (i >= f.length) break;
                o = f[i++];
              } else {
                if ((i = f.next()).done) break;
                o = i.value;
              }
              var s = o;
              1 === (t += "s" === s.type ? 1 : -1)
                ? (n = s.time)
                : (n && +n != +s.time && a.push(d.fromDateTimes(n, s.time)),
                  (n = null));
            }
            return d.merge(a);
          }),
          (u.difference = function() {
            for (
              var u = this, e = arguments.length, n = new Array(e), t = 0;
              t < e;
              t++
            )
              n[t] = arguments[t];
            return d
              .xor([this].concat(n))
              .map(function(d) {
                return u.intersection(d);
              })
              .filter(function(d) {
                return d && !d.isEmpty();
              });
          }),
          (u.toString = function() {
            return this.isValid
              ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")"
              : "Invalid Interval";
          }),
          (u.toISO = function(d) {
            return this.isValid
              ? this.s.toISO(d) + "/" + this.e.toISO(d)
              : "Invalid Interval";
          }),
          (u.toFormat = function(d, u) {
            var e = (void 0 === u ? {} : u).separator,
              n = void 0 === e ? " – " : e;
            return this.isValid
              ? "" + this.s.toFormat(d) + n + this.e.toFormat(d)
              : "Invalid Interval";
          }),
          (u.toDuration = function(d, u) {
            return this.isValid
              ? this.e.diff(this.s, d, u)
              : Hu.invalid(this.invalidReason);
          }),
          (u.mapEndpoints = function(u) {
            return d.fromDateTimes(u(this.s), u(this.e));
          }),
          t(d, [
            {
              key: "start",
              get: function() {
                return this.isValid ? this.s : null;
              }
            },
            {
              key: "end",
              get: function() {
                return this.isValid ? this.e : null;
              }
            },
            {
              key: "isValid",
              get: function() {
                return null === this.invalidReason;
              }
            },
            {
              key: "invalidReason",
              get: function() {
                return this.invalid ? this.invalid.reason : null;
              }
            },
            {
              key: "invalidExplanation",
              get: function() {
                return this.invalid ? this.invalid.explanation : null;
              }
            }
          ]),
          d
        );
      })(),
      Wu = (function() {
        function d() {}
        return (
          (d.hasDST = function(d) {
            void 0 === d && (d = Hd.defaultZone);
            var u = Pe.local()
              .setZone(d)
              .set({ month: 12 });
            return !d.universal && u.offset !== u.set({ month: 6 }).offset;
          }),
          (d.isValidIANAZone = function(d) {
            return !!Cd.isValidSpecifier(d) && Cd.isValidZone(d);
          }),
          (d.normalizeZone = function(d) {
            return Nd(d, Hd.defaultZone);
          }),
          (d.months = function(d, u) {
            void 0 === d && (d = "long");
            var e = void 0 === u ? {} : u,
              n = e.locale,
              t = void 0 === n ? null : n,
              a = e.numberingSystem,
              r = void 0 === a ? null : a,
              f = e.outputCalendar,
              c = void 0 === f ? "gregory" : f;
            return du.create(t, r, c).months(d);
          }),
          (d.monthsFormat = function(d, u) {
            void 0 === d && (d = "long");
            var e = void 0 === u ? {} : u,
              n = e.locale,
              t = void 0 === n ? null : n,
              a = e.numberingSystem,
              r = void 0 === a ? null : a,
              f = e.outputCalendar,
              c = void 0 === f ? "gregory" : f;
            return du.create(t, r, c).months(d, !0);
          }),
          (d.weekdays = function(d, u) {
            void 0 === d && (d = "long");
            var e = void 0 === u ? {} : u,
              n = e.locale,
              t = void 0 === n ? null : n,
              a = e.numberingSystem,
              r = void 0 === a ? null : a;
            return du.create(t, r, null).weekdays(d);
          }),
          (d.weekdaysFormat = function(d, u) {
            void 0 === d && (d = "long");
            var e = void 0 === u ? {} : u,
              n = e.locale,
              t = void 0 === n ? null : n,
              a = e.numberingSystem,
              r = void 0 === a ? null : a;
            return du.create(t, r, null).weekdays(d, !0);
          }),
          (d.meridiems = function(d) {
            var u = (void 0 === d ? {} : d).locale,
              e = void 0 === u ? null : u;
            return du.create(e).meridiems();
          }),
          (d.eras = function(d, u) {
            void 0 === d && (d = "short");
            var e = (void 0 === u ? {} : u).locale,
              n = void 0 === e ? null : e;
            return du.create(n, null, "gregory").eras(d);
          }),
          (d.features = function() {
            var d = !1,
              u = !1,
              e = !1,
              n = p();
            if (l()) {
              (d = !0), (u = m());
              try {
                e =
                  "America/New_York" ===
                  new Intl.DateTimeFormat("en", {
                    timeZone: "America/New_York"
                  }).resolvedOptions().timeZone;
              } catch (d) {
                e = !1;
              }
            }
            return { intl: d, intlTokens: u, zones: e, relative: n };
          }),
          d
        );
      })();
    function Ku(d, u) {
      var e = function(d) {
          return d
            .toUTC(0, { keepLocalTime: !0 })
            .startOf("day")
            .valueOf();
        },
        n = e(u) - e(d);
      return Math.floor(Hu.fromMillis(n).as("days"));
    }
    function Zu(d, u, e, n) {
      var t = (function(d, u, e) {
          for (
            var n,
              t,
              a = [
                [
                  "years",
                  function(d, u) {
                    return u.year - d.year;
                  }
                ],
                [
                  "months",
                  function(d, u) {
                    return u.month - d.month + 12 * (u.year - d.year);
                  }
                ],
                [
                  "weeks",
                  function(d, u) {
                    var e = Ku(d, u);
                    return (e - (e % 7)) / 7;
                  }
                ],
                ["days", Ku]
              ],
              r = {},
              f = 0;
            f < a.length;
            f++
          ) {
            var c = a[f],
              i = c[0],
              o = c[1];
            if (e.indexOf(i) >= 0) {
              var s;
              n = i;
              var l,
                m = o(d, u);
              (t = d.plus((((s = {})[i] = m), s))) > u
                ? ((d = t.minus((((l = {})[i] = 1), l))), (m -= 1))
                : (d = t),
                (r[i] = m);
            }
          }
          return [d, r, t, n];
        })(d, u, e),
        a = t[0],
        r = t[1],
        f = t[2],
        c = t[3],
        i = u - a,
        o = e.filter(function(d) {
          return (
            ["hours", "minutes", "seconds", "milliseconds"].indexOf(d) >= 0
          );
        });
      if (0 === o.length) {
        var s;
        if (f < u) f = a.plus((((s = {})[c] = 1), s));
        f !== a && (r[c] = (r[c] || 0) + i / (f - a));
      }
      var l,
        m = Hu.fromObject(Object.assign(r, n));
      return o.length > 0
        ? (l = Hu.fromMillis(i, n)).shiftTo.apply(l, o).plus(m)
        : m;
    }
    var zu = "missing Intl.DateTimeFormat.formatToParts support";
    function qu(d, u) {
      return (
        void 0 === u &&
          (u = function(d) {
            return d;
          }),
        {
          regex: d,
          deser: function(d) {
            var e = d[0];
            return u(parseInt(e));
          }
        }
      );
    }
    function Yu(d) {
      return d.replace(/\./, "\\.?");
    }
    function Ju(d) {
      return d.replace(/\./, "").toLowerCase();
    }
    function Xu(d, u) {
      return null === d
        ? null
        : {
            regex: RegExp(d.map(Yu).join("|")),
            deser: function(e) {
              var n = e[0];
              return (
                d.findIndex(function(d) {
                  return Ju(n) === Ju(d);
                }) + u
              );
            }
          };
    }
    function Qu(d, u) {
      return {
        regex: d,
        deser: function(d) {
          return T(d[1], d[2]);
        },
        groups: u
      };
    }
    function de(d) {
      return {
        regex: d,
        deser: function(d) {
          return d[0];
        }
      };
    }
    function ue(d, u, e) {
      var n = $d.parseFormat(e),
        t = n.map(function(u) {
          return (
            (n = d),
            (t = /\d/),
            (a = /\d{2}/),
            (r = /\d{3}/),
            (f = /\d{4}/),
            (c = /\d{1,2}/),
            (i = /\d{1,3}/),
            (o = /\d{2,4}/),
            (s = function(d) {
              return {
                regex: RegExp(
                  ((u = d.val),
                  u.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))
                ),
                deser: function(d) {
                  return d[0];
                },
                literal: !0
              };
              var u;
            }),
            ((l = (function(d) {
              if (e.literal) return s(d);
              switch (d.val) {
                case "G":
                  return Xu(n.eras("short", !1), 0);
                case "GG":
                  return Xu(n.eras("long", !1), 0);
                case "y":
                  return qu(/\d{1,6}/);
                case "yy":
                  return qu(o, E);
                case "yyyy":
                  return qu(f);
                case "yyyyy":
                  return qu(/\d{4,6}/);
                case "yyyyyy":
                  return qu(/\d{6}/);
                case "M":
                  return qu(c);
                case "MM":
                  return qu(a);
                case "MMM":
                  return Xu(n.months("short", !1, !1), 1);
                case "MMMM":
                  return Xu(n.months("long", !1, !1), 1);
                case "L":
                  return qu(c);
                case "LL":
                  return qu(a);
                case "LLL":
                  return Xu(n.months("short", !0, !1), 1);
                case "LLLL":
                  return Xu(n.months("long", !0, !1), 1);
                case "d":
                  return qu(c);
                case "dd":
                  return qu(a);
                case "o":
                  return qu(i);
                case "ooo":
                  return qu(r);
                case "HH":
                  return qu(a);
                case "H":
                  return qu(c);
                case "hh":
                  return qu(a);
                case "h":
                  return qu(c);
                case "mm":
                  return qu(a);
                case "m":
                case "s":
                  return qu(c);
                case "ss":
                  return qu(a);
                case "S":
                  return qu(i);
                case "SSS":
                  return qu(r);
                case "u":
                  return de(/\d{1,9}/);
                case "a":
                  return Xu(n.meridiems(), 0);
                case "kkkk":
                  return qu(f);
                case "kk":
                  return qu(o, E);
                case "W":
                  return qu(c);
                case "WW":
                  return qu(a);
                case "E":
                case "c":
                  return qu(t);
                case "EEE":
                  return Xu(n.weekdays("short", !1, !1), 1);
                case "EEEE":
                  return Xu(n.weekdays("long", !1, !1), 1);
                case "ccc":
                  return Xu(n.weekdays("short", !0, !1), 1);
                case "cccc":
                  return Xu(n.weekdays("long", !0, !1), 1);
                case "Z":
                case "ZZ":
                  return Qu(/([+-]\d{1,2})(?::(\d{2}))?/, 2);
                case "ZZZ":
                  return Qu(/([+-]\d{1,2})(\d{2})?/, 2);
                case "z":
                  return de(
                    /[a-z_+-]{1,256}(\/[a-z_+-]{1,256}(\/[a-z_+-]{1,256})?)?/i
                  );
                default:
                  return s(d);
              }
            })((e = u)) || { invalidReason: zu }).token = e),
            l
          );
          var e, n, t, a, r, f, c, i, o, s, l;
        }),
        a = t.find(function(d) {
          return d.invalidReason;
        });
      if (a) return { input: u, tokens: n, invalidReason: a.invalidReason };
      var r = (function(d) {
          return [
            "^" +
              d
                .map(function(d) {
                  return d.regex;
                })
                .reduce(function(d, u) {
                  return d + "(" + u.source + ")";
                }, "") +
              "$",
            d
          ];
        })(t),
        f = r[0],
        c = r[1],
        i = RegExp(f, "i"),
        s = (function(d, u, e) {
          var n = d.match(u);
          if (n) {
            var t = {},
              a = 1;
            for (var r in e)
              if (e.hasOwnProperty(r)) {
                var f = e[r],
                  c = f.groups ? f.groups + 1 : 1;
                !f.literal &&
                  f.token &&
                  (t[f.token.val[0]] = f.deser(n.slice(a, a + c))),
                  (a += c);
              }
            return [n, t];
          }
          return [n, {}];
        })(u, i, c),
        l = s[0],
        m = s[1],
        p = m
          ? (function(d) {
              var u;
              return (
                (u = o(d.Z) ? (o(d.z) ? null : new Cd(d.z)) : new Ld(d.Z)),
                o(d.h) ||
                  (d.h < 12 && 1 === d.a
                    ? (d.h += 12)
                    : 12 === d.h && 0 === d.a && (d.h = 0)),
                0 === d.G && d.y && (d.y = -d.y),
                o(d.u) || (d.S = _(d.u)),
                [
                  Object.keys(d).reduce(function(u, e) {
                    var n = (function(d) {
                      switch (d) {
                        case "S":
                          return "millisecond";
                        case "s":
                          return "second";
                        case "m":
                          return "minute";
                        case "h":
                        case "H":
                          return "hour";
                        case "d":
                          return "day";
                        case "o":
                          return "ordinal";
                        case "L":
                        case "M":
                          return "month";
                        case "y":
                          return "year";
                        case "E":
                        case "c":
                          return "weekday";
                        case "W":
                          return "weekNumber";
                        case "k":
                          return "weekYear";
                        default:
                          return null;
                      }
                    })(e);
                    return n && (u[n] = d[e]), u;
                  }, {}),
                  u
                ]
              );
            })(m)
          : [null, null];
      return {
        input: u,
        tokens: n,
        regex: i,
        rawMatches: l,
        matches: m,
        result: p[0],
        zone: p[1]
      };
    }
    var ee = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
      ne = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    function te(d, u) {
      return new Lu(
        "unit out of range",
        "you specified " +
          u +
          " (of type " +
          typeof u +
          ") as a " +
          d +
          ", which is invalid"
      );
    }
    function ae(d, u, e) {
      var n = new Date(Date.UTC(d, u - 1, e)).getUTCDay();
      return 0 === n ? 7 : n;
    }
    function re(d, u, e) {
      return e + (w(d) ? ne : ee)[u - 1];
    }
    function fe(d, u) {
      var e = w(d) ? ne : ee,
        n = e.findIndex(function(d) {
          return d < u;
        });
      return { month: n + 1, day: u - e[n] };
    }
    function ce(d) {
      var u,
        e = d.year,
        n = d.month,
        t = d.day,
        a = re(e, n, t),
        r = ae(e, n, t),
        f = Math.floor((a - r + 10) / 7);
      return (
        f < 1
          ? (f = k((u = e - 1)))
          : f > k(e)
          ? ((u = e + 1), (f = 1))
          : (u = e),
        Object.assign({ weekYear: u, weekNumber: f, weekday: r }, C(d))
      );
    }
    function ie(d) {
      var u,
        e = d.weekYear,
        n = d.weekNumber,
        t = d.weekday,
        a = ae(e, 1, 4),
        r = I(e),
        f = 7 * n + t - a - 3;
      f < 1
        ? (f += I((u = e - 1)))
        : f > r
        ? ((u = e + 1), (f -= I(e)))
        : (u = e);
      var c = fe(u, f),
        i = c.month,
        o = c.day;
      return Object.assign({ year: u, month: i, day: o }, C(d));
    }
    function oe(d) {
      var u = d.year,
        e = re(u, d.month, d.day);
      return Object.assign({ year: u, ordinal: e }, C(d));
    }
    function se(d) {
      var u = d.year,
        e = fe(u, d.ordinal),
        n = e.month,
        t = e.day;
      return Object.assign({ year: u, month: n, day: t }, C(d));
    }
    function le(d) {
      var u = s(d.year),
        e = y(d.month, 1, 12),
        n = y(d.day, 1, S(d.year, d.month));
      return u
        ? e
          ? !n && te("day", d.day)
          : te("month", d.month)
        : te("year", d.year);
    }
    function me(d) {
      var u = d.hour,
        e = d.minute,
        n = d.second,
        t = d.millisecond,
        a = y(u, 0, 23) || (24 === u && 0 === e && 0 === n && 0 === t),
        r = y(e, 0, 59),
        f = y(n, 0, 59),
        c = y(t, 0, 999);
      return a
        ? r
          ? f
            ? !c && te("millisecond", t)
            : te("second", n)
          : te("minute", e)
        : te("hour", u);
    }
    function pe(d) {
      return new Lu(
        "unsupported zone",
        'the zone "' + d.name + '" is not supported'
      );
    }
    function he(d) {
      return null === d.weekData && (d.weekData = ce(d.c)), d.weekData;
    }
    function be(d, u) {
      var e = {
        ts: d.ts,
        zone: d.zone,
        c: d.c,
        o: d.o,
        loc: d.loc,
        invalid: d.invalid
      };
      return new Pe(Object.assign({}, e, u, { old: e }));
    }
    function ye(d, u, e) {
      var n = d - 60 * u * 1e3,
        t = e.offset(n);
      if (u === t) return [n, u];
      n -= 60 * (t - u) * 1e3;
      var a = e.offset(n);
      return t === a ? [n, t] : [d - 60 * Math.min(t, a) * 1e3, Math.max(t, a)];
    }
    function ge(d, u) {
      var e = new Date((d += 60 * u * 1e3));
      return {
        year: e.getUTCFullYear(),
        month: e.getUTCMonth() + 1,
        day: e.getUTCDate(),
        hour: e.getUTCHours(),
        minute: e.getUTCMinutes(),
        second: e.getUTCSeconds(),
        millisecond: e.getUTCMilliseconds()
      };
    }
    function _e(d, u, e) {
      return ye(x(d), u, e);
    }
    function ve(d, u) {
      var e = d.o,
        n = d.c.year + u.years,
        t = d.c.month + u.months + 3 * u.quarters,
        a = Object.assign({}, d.c, {
          year: n,
          month: t,
          day: Math.min(d.c.day, S(n, t)) + u.days + 7 * u.weeks
        }),
        r = Hu.fromObject({
          hours: u.hours,
          minutes: u.minutes,
          seconds: u.seconds,
          milliseconds: u.milliseconds
        }).as("milliseconds"),
        f = ye(x(a), e, d.zone),
        c = f[0],
        i = f[1];
      return 0 !== r && ((c += r), (i = d.zone.offset(c))), { ts: c, o: i };
    }
    function we(d, u, e, n, t) {
      var a = e.setZone,
        r = e.zone;
      if (d && 0 !== Object.keys(d).length) {
        var f = u || r,
          c = Pe.fromObject(Object.assign(d, e, { zone: f }));
        return a ? c : c.setZone(r);
      }
      return Pe.invalid(
        new Lu("unparsable", 'the input "' + t + "\" can't be parsed as " + n)
      );
    }
    function Ie(d, u) {
      return d.isValid
        ? $d
            .create(du.create("en-US"), { allowZ: !0, forceSimple: !0 })
            .formatDateTimeFromString(d, u)
        : null;
    }
    function Se(d, u) {
      var e = u.suppressSeconds,
        n = void 0 !== e && e,
        t = u.suppressMilliseconds,
        a = void 0 !== t && t,
        r = u.includeOffset,
        f = void 0 === r || r,
        c = u.includeZone,
        i = void 0 !== c && c,
        o = u.spaceZone,
        s = void 0 !== o && o,
        l = "HH:mm";
      return (
        (n && 0 === d.second && 0 === d.millisecond) ||
          ((l += ":ss"), (a && 0 === d.millisecond) || (l += ".SSS")),
        (i || f) && s && (l += " "),
        i ? (l += "z") : f && (l += "ZZ"),
        Ie(d, l)
      );
    }
    var xe = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      },
      ke = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      },
      Ee = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
      Me = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
      Te = [
        "weekYear",
        "weekNumber",
        "weekday",
        "hour",
        "minute",
        "second",
        "millisecond"
      ],
      Oe = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
    function Ce(d, u) {
      void 0 === u && (u = !1);
      var e = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
      }[d ? d.toLowerCase() : d];
      if (!u && !e) throw new wd(d);
      return e;
    }
    function Ae(d, u) {
      for (var e = 0; e < Me.length; e++) {
        var n = Me[e];
        o(d[n]) && (d[n] = xe[n]);
      }
      var t = le(d) || me(d);
      if (t) return Pe.invalid(t);
      var a = Hd.now(),
        r = _e(d, u.offset(a), u),
        f = r[0],
        c = r[1];
      return new Pe({ ts: f, zone: u, o: c });
    }
    function Le(d, u, e) {
      var n = !!o(e.round) || e.round,
        t = function(d, t) {
          return (
            (d = v(d, n || e.calendary ? 0 : 2, !0)),
            u.loc
              .clone(e)
              .relFormatter(e)
              .format(d, t)
          );
        },
        a = function(n) {
          return e.calendary
            ? u.hasSame(d, n)
              ? 0
              : u
                  .startOf(n)
                  .diff(d.startOf(n), n)
                  .get(n)
            : u.diff(d, n).get(n);
        };
      if (e.unit) return t(a(e.unit), e.unit);
      var r = e.units,
        f = Array.isArray(r),
        c = 0;
      for (r = f ? r : r[Symbol.iterator](); ; ) {
        var i;
        if (f) {
          if (c >= r.length) break;
          i = r[c++];
        } else {
          if ((c = r.next()).done) break;
          i = c.value;
        }
        var s = i,
          l = a(s);
        if (Math.abs(l) >= 1) return t(l, s);
      }
      return t(0, e.units[e.units.length - 1]);
    }
    var Pe = (function() {
      function d(d) {
        var u = d.zone || Hd.defaultZone,
          e =
            d.invalid ||
            (Number.isNaN(d.ts) ? new Lu("invalid input") : null) ||
            (u.isValid ? null : pe(u));
        this.ts = o(d.ts) ? Hd.now() : d.ts;
        var n = null,
          t = null;
        if (!e) {
          var a = d.old && d.old.ts === this.ts && d.old.zone.equals(u);
          (n = a ? d.old.c : ge(this.ts, u.offset(this.ts))),
            (t = a ? d.old.o : u.offset(this.ts));
        }
        (this._zone = u),
          (this.loc = d.loc || du.create()),
          (this.invalid = e),
          (this.weekData = null),
          (this.c = n),
          (this.o = t),
          (this.isLuxonDateTime = !0);
      }
      (d.local = function(u, e, n, t, a, r, f) {
        return o(u)
          ? new d({ ts: Hd.now() })
          : Ae(
              {
                year: u,
                month: e,
                day: n,
                hour: t,
                minute: a,
                second: r,
                millisecond: f
              },
              Hd.defaultZone
            );
      }),
        (d.utc = function(u, e, n, t, a, r, f) {
          return o(u)
            ? new d({ ts: Hd.now(), zone: Ld.utcInstance })
            : Ae(
                {
                  year: u,
                  month: e,
                  day: n,
                  hour: t,
                  minute: a,
                  second: r,
                  millisecond: f
                },
                Ld.utcInstance
              );
        }),
        (d.fromJSDate = function(u, e) {
          return (
            void 0 === e && (e = {}),
            new d({
              ts: ((n = u),
              "[object Date]" === Object.prototype.toString.call(n)
                ? u.valueOf()
                : NaN),
              zone: Nd(e.zone, Hd.defaultZone),
              loc: du.fromObject(e)
            })
          );
          var n;
        }),
        (d.fromMillis = function(u, e) {
          if ((void 0 === e && (e = {}), s(u)))
            return new d({
              ts: u,
              zone: Nd(e.zone, Hd.defaultZone),
              loc: du.fromObject(e)
            });
          throw new Id("fromMillis requires a numerical input");
        }),
        (d.fromSeconds = function(u, e) {
          if ((void 0 === e && (e = {}), s(u)))
            return new d({
              ts: 1e3 * u,
              zone: Nd(e.zone, Hd.defaultZone),
              loc: du.fromObject(e)
            });
          throw new Id("fromSeconds requires a numerical input");
        }),
        (d.fromObject = function(u) {
          var e = Nd(u.zone, Hd.defaultZone);
          if (!e.isValid) return d.invalid(pe(e));
          var n = Hd.now(),
            t = e.offset(n),
            a = O(u, Ce, !0),
            r = !o(a.ordinal),
            f = !o(a.year),
            c = !o(a.month) || !o(a.day),
            i = f || c,
            l = a.weekYear || a.weekNumber,
            m = du.fromObject(u);
          if ((i || r) && l)
            throw new vd(
              "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
            );
          if (c && r) throw new vd("Can't mix ordinal dates with month/day");
          var p,
            h,
            b = l || (a.weekday && !i),
            g = ge(n, t);
          b
            ? ((p = Te), (h = ke), (g = ce(g)))
            : r
            ? ((p = Oe), (h = Ee), (g = oe(g)))
            : ((p = Me), (h = xe));
          var _ = !1,
            v = p,
            w = Array.isArray(v),
            S = 0;
          for (v = w ? v : v[Symbol.iterator](); ; ) {
            var x;
            if (w) {
              if (S >= v.length) break;
              x = v[S++];
            } else {
              if ((S = v.next()).done) break;
              x = S.value;
            }
            var E = x;
            o(a[E]) ? (a[E] = _ ? h[E] : g[E]) : (_ = !0);
          }
          var M =
            (b
              ? (function(d) {
                  var u = s(d.weekYear),
                    e = y(d.weekNumber, 1, k(d.weekYear)),
                    n = y(d.weekday, 1, 7);
                  return u
                    ? e
                      ? !n && te("weekday", d.weekday)
                      : te("week", d.week)
                    : te("weekYear", d.weekYear);
                })(a)
              : r
              ? (function(d) {
                  var u = s(d.year),
                    e = y(d.ordinal, 1, I(d.year));
                  return u
                    ? !e && te("ordinal", d.ordinal)
                    : te("year", d.year);
                })(a)
              : le(a)) || me(a);
          if (M) return d.invalid(M);
          var T = _e(b ? ie(a) : r ? se(a) : a, t, e),
            C = new d({ ts: T[0], zone: e, o: T[1], loc: m });
          return a.weekday && i && u.weekday !== C.weekday
            ? d.invalid(
                "mismatched weekday",
                "you can't specify both a weekday of " +
                  a.weekday +
                  " and a date of " +
                  C.toISO()
              )
            : C;
        }),
        (d.fromISO = function(d, u) {
          void 0 === u && (u = {});
          var e = nu(
            d,
            [uu(iu, cu), eu(yu, gu, _u)],
            [uu(ou, cu), eu(lu, gu, _u)],
            [uu(su, cu), eu(mu, gu)],
            [uu(fu), eu(gu, _u)]
          );
          return we(e[0], e[1], u, "ISO 8601", d);
        }),
        (d.fromRFC2822 = function(d, u) {
          void 0 === u && (u = {});
          var e = nu(
            (function(d) {
              return d
                .replace(/\([^)]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .trim();
            })(d),
            [ku, Eu]
          );
          return we(e[0], e[1], u, "RFC 2822", d);
        }),
        (d.fromHTTP = function(d, u) {
          void 0 === u && (u = {});
          var e = nu(d, [Mu, Cu], [Tu, Cu], [Ou, Au]);
          return we(e[0], e[1], u, "HTTP", u);
        }),
        (d.fromFormat = function(u, e, n) {
          if ((void 0 === n && (n = {}), o(u) || o(e)))
            throw new Id("fromFormat requires an input string and a format");
          var t = n,
            a = t.locale,
            r = void 0 === a ? null : a,
            f = t.numberingSystem,
            c = void 0 === f ? null : f,
            i = (function(d, u, e) {
              var n = ue(d, u, e);
              return [n.result, n.zone, n.invalidReason];
            })(
              du.fromOpts({ locale: r, numberingSystem: c, defaultToEN: !0 }),
              u,
              e
            ),
            s = i[0],
            l = i[1],
            m = i[2];
          return m ? d.invalid(m) : we(s, l, n, "format " + e, u);
        }),
        (d.fromString = function(u, e, n) {
          return void 0 === n && (n = {}), d.fromFormat(u, e, n);
        }),
        (d.fromSQL = function(d, u) {
          void 0 === u && (u = {});
          var e = nu(
            d,
            [uu(pu, bu), eu(yu, gu, _u, vu)],
            [uu(hu), eu(gu, _u, vu)]
          );
          return we(e[0], e[1], u, "SQL", d);
        }),
        (d.invalid = function(u, e) {
          if ((void 0 === e && (e = null), !u))
            throw new Id("need to specify a reason the DateTime is invalid");
          var n = u instanceof Lu ? u : new Lu(u, e);
          if (Hd.throwOnInvalid) throw new yd(n);
          return new d({ invalid: n });
        }),
        (d.isDateTime = function(d) {
          return (d && d.isLuxonDateTime) || !1;
        });
      var u = d.prototype;
      return (
        (u.get = function(d) {
          return this[d];
        }),
        (u.resolvedLocaleOpts = function(d) {
          void 0 === d && (d = {});
          var u = $d.create(this.loc.clone(d), d).resolvedOptions(this);
          return {
            locale: u.locale,
            numberingSystem: u.numberingSystem,
            outputCalendar: u.calendar
          };
        }),
        (u.toUTC = function(d, u) {
          return (
            void 0 === d && (d = 0),
            void 0 === u && (u = {}),
            this.setZone(Ld.instance(d), u)
          );
        }),
        (u.toLocal = function() {
          return this.setZone(Hd.defaultZone || new Ed());
        }),
        (u.setZone = function(u, e) {
          var n = void 0 === e ? {} : e,
            t = n.keepLocalTime,
            a = void 0 !== t && t,
            r = n.keepCalendarTime,
            f = void 0 !== r && r;
          return (u = Nd(u, Hd.defaultZone)).equals(this.zone)
            ? this
            : u.isValid
            ? be(this, {
                ts:
                  a || f
                    ? this.ts + 60 * (this.o - u.offset(this.ts)) * 1e3
                    : this.ts,
                zone: u
              })
            : d.invalid(pe(u));
        }),
        (u.reconfigure = function(d) {
          var u = void 0 === d ? {} : d,
            e = u.locale,
            n = u.numberingSystem,
            t = u.outputCalendar;
          return be(this, {
            loc: this.loc.clone({
              locale: e,
              numberingSystem: n,
              outputCalendar: t
            })
          });
        }),
        (u.setLocale = function(d) {
          return this.reconfigure({ locale: d });
        }),
        (u.set = function(d) {
          if (!this.isValid) return this;
          var u,
            e = O(d, Ce);
          !o(e.weekYear) || !o(e.weekNumber) || !o(e.weekday)
            ? (u = ie(Object.assign(ce(this.c), e)))
            : o(e.ordinal)
            ? ((u = Object.assign(this.toObject(), e)),
              o(e.day) && (u.day = Math.min(S(u.year, u.month), u.day)))
            : (u = se(Object.assign(oe(this.c), e)));
          var n = _e(u, this.o, this.zone);
          return be(this, { ts: n[0], o: n[1] });
        }),
        (u.plus = function(d) {
          return this.isValid ? be(this, ve(this, Gu(d))) : this;
        }),
        (u.minus = function(d) {
          return this.isValid ? be(this, ve(this, Gu(d).negate())) : this;
        }),
        (u.startOf = function(d) {
          if (!this.isValid) return this;
          var u = {},
            e = Hu.normalizeUnit(d);
          switch (e) {
            case "years":
              u.month = 1;
            case "quarters":
            case "months":
              u.day = 1;
            case "weeks":
            case "days":
              u.hour = 0;
            case "hours":
              u.minute = 0;
            case "minutes":
              u.second = 0;
            case "seconds":
              u.millisecond = 0;
              break;
            case "milliseconds":
              break;
            default:
              throw new wd(d);
          }
          if (("weeks" === e && (u.weekday = 1), "quarters" === e)) {
            var n = Math.ceil(this.month / 3);
            u.month = 3 * (n - 1) + 1;
          }
          return this.set(u);
        }),
        (u.endOf = function(d) {
          var u;
          return this.isValid
            ? this.plus(((u = {}), (u[d] = 1), u))
                .startOf(d)
                .minus(1)
            : this;
        }),
        (u.toFormat = function(d, u) {
          return (
            void 0 === u && (u = {}),
            this.isValid
              ? $d
                  .create(this.loc.redefaultToEN(u))
                  .formatDateTimeFromString(this, d)
              : "Invalid DateTime"
          );
        }),
        (u.toLocaleString = function(d) {
          return (
            void 0 === d && (d = j),
            this.isValid
              ? $d.create(this.loc.clone(d), d).formatDateTime(this)
              : "Invalid DateTime"
          );
        }),
        (u.toLocaleParts = function(d) {
          return (
            void 0 === d && (d = {}),
            this.isValid
              ? $d.create(this.loc.clone(d), d).formatDateTimeParts(this)
              : []
          );
        }),
        (u.toISO = function(d) {
          return (
            void 0 === d && (d = {}),
            this.isValid ? this.toISODate() + "T" + this.toISOTime(d) : null
          );
        }),
        (u.toISODate = function() {
          return Ie(this, "yyyy-MM-dd");
        }),
        (u.toISOWeekDate = function() {
          return Ie(this, "kkkk-'W'WW-c");
        }),
        (u.toISOTime = function(d) {
          var u = void 0 === d ? {} : d,
            e = u.suppressMilliseconds,
            n = void 0 !== e && e,
            t = u.suppressSeconds,
            a = void 0 !== t && t,
            r = u.includeOffset;
          return Se(this, {
            suppressSeconds: a,
            suppressMilliseconds: n,
            includeOffset: void 0 === r || r
          });
        }),
        (u.toRFC2822 = function() {
          return Ie(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ");
        }),
        (u.toHTTP = function() {
          return Ie(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }),
        (u.toSQLDate = function() {
          return Ie(this, "yyyy-MM-dd");
        }),
        (u.toSQLTime = function(d) {
          var u = void 0 === d ? {} : d,
            e = u.includeOffset,
            n = void 0 === e || e,
            t = u.includeZone;
          return Se(this, {
            includeOffset: n,
            includeZone: void 0 !== t && t,
            spaceZone: !0
          });
        }),
        (u.toSQL = function(d) {
          return (
            void 0 === d && (d = {}),
            this.isValid ? this.toSQLDate() + " " + this.toSQLTime(d) : null
          );
        }),
        (u.toString = function() {
          return this.isValid ? this.toISO() : "Invalid DateTime";
        }),
        (u.valueOf = function() {
          return this.toMillis();
        }),
        (u.toMillis = function() {
          return this.isValid ? this.ts : NaN;
        }),
        (u.toSeconds = function() {
          return this.isValid ? this.ts / 1e3 : NaN;
        }),
        (u.toJSON = function() {
          return this.toISO();
        }),
        (u.toBSON = function() {
          return this.toJSDate();
        }),
        (u.toObject = function(d) {
          if ((void 0 === d && (d = {}), !this.isValid)) return {};
          var u = Object.assign({}, this.c);
          return (
            d.includeConfig &&
              ((u.outputCalendar = this.outputCalendar),
              (u.numberingSystem = this.loc.numberingSystem),
              (u.locale = this.loc.locale)),
            u
          );
        }),
        (u.toJSDate = function() {
          return new Date(this.isValid ? this.ts : NaN);
        }),
        (u.diff = function(d, u, e) {
          if (
            (void 0 === u && (u = "milliseconds"),
            void 0 === e && (e = {}),
            !this.isValid || !d.isValid)
          )
            return Hu.invalid(
              this.invalid || d.invalid,
              "created by diffing an invalid DateTime"
            );
          var n,
            t = Object.assign(
              { locale: this.locale, numberingSystem: this.numberingSystem },
              e
            ),
            a = ((n = u), Array.isArray(n) ? n : [n]).map(Hu.normalizeUnit),
            r = d.valueOf() > this.valueOf(),
            f = Zu(r ? this : d, r ? d : this, a, t);
          return r ? f.negate() : f;
        }),
        (u.diffNow = function(u, e) {
          return (
            void 0 === u && (u = "milliseconds"),
            void 0 === e && (e = {}),
            this.diff(d.local(), u, e)
          );
        }),
        (u.until = function(d) {
          return this.isValid ? $u.fromDateTimes(this, d) : this;
        }),
        (u.hasSame = function(d, u) {
          if (!this.isValid) return !1;
          if ("millisecond" === u) return this.valueOf() === d.valueOf();
          var e = d.valueOf();
          return this.startOf(u) <= e && e <= this.endOf(u);
        }),
        (u.equals = function(d) {
          return (
            this.isValid &&
            d.isValid &&
            this.valueOf() === d.valueOf() &&
            this.zone.equals(d.zone) &&
            this.loc.equals(d.loc)
          );
        }),
        (u.toRelative = function(u) {
          if ((void 0 === u && (u = {}), !this.isValid)) return null;
          var e = u.base || d.fromObject({ zone: this.zone }),
            n = u.padding ? (this < e ? -u.padding : u.padding) : 0;
          return Le(
            e,
            this.plus(n),
            Object.assign(u, {
              numeric: "always",
              units: ["years", "months", "days", "hours", "minutes", "seconds"]
            })
          );
        }),
        (u.toRelativeCalendar = function(u) {
          return (
            void 0 === u && (u = {}),
            this.isValid
              ? Le(
                  u.base || d.fromObject({ zone: this.zone }),
                  this,
                  Object.assign(u, {
                    numeric: "auto",
                    units: ["years", "months", "days"],
                    calendary: !0
                  })
                )
              : null
          );
        }),
        (d.min = function() {
          for (var d = arguments.length, u = new Array(d), e = 0; e < d; e++)
            u[e] = arguments[e];
          return h(
            u,
            function(d) {
              return d.valueOf();
            },
            Math.min
          );
        }),
        (d.max = function() {
          for (var d = arguments.length, u = new Array(d), e = 0; e < d; e++)
            u[e] = arguments[e];
          return h(
            u,
            function(d) {
              return d.valueOf();
            },
            Math.max
          );
        }),
        (d.fromFormatExplain = function(d, u, e) {
          void 0 === e && (e = {});
          var n = e,
            t = n.locale,
            a = void 0 === t ? null : t,
            r = n.numberingSystem,
            f = void 0 === r ? null : r;
          return ue(
            du.fromOpts({ locale: a, numberingSystem: f, defaultToEN: !0 }),
            d,
            u
          );
        }),
        (d.fromStringExplain = function(u, e, n) {
          return void 0 === n && (n = {}), d.fromFormatExplain(u, e, n);
        }),
        t(
          d,
          [
            {
              key: "isValid",
              get: function() {
                return null === this.invalid;
              }
            },
            {
              key: "invalidReason",
              get: function() {
                return this.invalid ? this.invalid.reason : null;
              }
            },
            {
              key: "invalidExplanation",
              get: function() {
                return this.invalid ? this.invalid.explanation : null;
              }
            },
            {
              key: "locale",
              get: function() {
                return this.isValid ? this.loc.locale : null;
              }
            },
            {
              key: "numberingSystem",
              get: function() {
                return this.isValid ? this.loc.numberingSystem : null;
              }
            },
            {
              key: "outputCalendar",
              get: function() {
                return this.isValid ? this.loc.outputCalendar : null;
              }
            },
            {
              key: "zone",
              get: function() {
                return this._zone;
              }
            },
            {
              key: "zoneName",
              get: function() {
                return this.isValid ? this.zone.name : null;
              }
            },
            {
              key: "year",
              get: function() {
                return this.isValid ? this.c.year : NaN;
              }
            },
            {
              key: "quarter",
              get: function() {
                return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
              }
            },
            {
              key: "month",
              get: function() {
                return this.isValid ? this.c.month : NaN;
              }
            },
            {
              key: "day",
              get: function() {
                return this.isValid ? this.c.day : NaN;
              }
            },
            {
              key: "hour",
              get: function() {
                return this.isValid ? this.c.hour : NaN;
              }
            },
            {
              key: "minute",
              get: function() {
                return this.isValid ? this.c.minute : NaN;
              }
            },
            {
              key: "second",
              get: function() {
                return this.isValid ? this.c.second : NaN;
              }
            },
            {
              key: "millisecond",
              get: function() {
                return this.isValid ? this.c.millisecond : NaN;
              }
            },
            {
              key: "weekYear",
              get: function() {
                return this.isValid ? he(this).weekYear : NaN;
              }
            },
            {
              key: "weekNumber",
              get: function() {
                return this.isValid ? he(this).weekNumber : NaN;
              }
            },
            {
              key: "weekday",
              get: function() {
                return this.isValid ? he(this).weekday : NaN;
              }
            },
            {
              key: "ordinal",
              get: function() {
                return this.isValid ? oe(this.c).ordinal : NaN;
              }
            },
            {
              key: "monthShort",
              get: function() {
                return this.isValid
                  ? Wu.months("short", { locale: this.locale })[this.month - 1]
                  : null;
              }
            },
            {
              key: "monthLong",
              get: function() {
                return this.isValid
                  ? Wu.months("long", { locale: this.locale })[this.month - 1]
                  : null;
              }
            },
            {
              key: "weekdayShort",
              get: function() {
                return this.isValid
                  ? Wu.weekdays("short", { locale: this.locale })[
                      this.weekday - 1
                    ]
                  : null;
              }
            },
            {
              key: "weekdayLong",
              get: function() {
                return this.isValid
                  ? Wu.weekdays("long", { locale: this.locale })[
                      this.weekday - 1
                    ]
                  : null;
              }
            },
            {
              key: "offset",
              get: function() {
                return this.isValid ? this.zone.offset(this.ts) : NaN;
              }
            },
            {
              key: "offsetNameShort",
              get: function() {
                return this.isValid
                  ? this.zone.offsetName(this.ts, {
                      format: "short",
                      locale: this.locale
                    })
                  : null;
              }
            },
            {
              key: "offsetNameLong",
              get: function() {
                return this.isValid
                  ? this.zone.offsetName(this.ts, {
                      format: "long",
                      locale: this.locale
                    })
                  : null;
              }
            },
            {
              key: "isOffsetFixed",
              get: function() {
                return this.isValid ? this.zone.universal : null;
              }
            },
            {
              key: "isInDST",
              get: function() {
                return (
                  !this.isOffsetFixed &&
                  (this.offset > this.set({ month: 1 }).offset ||
                    this.offset > this.set({ month: 5 }).offset)
                );
              }
            },
            {
              key: "isInLeapYear",
              get: function() {
                return w(this.year);
              }
            },
            {
              key: "daysInMonth",
              get: function() {
                return S(this.year, this.month);
              }
            },
            {
              key: "daysInYear",
              get: function() {
                return this.isValid ? I(this.year) : NaN;
              }
            },
            {
              key: "weeksInWeekYear",
              get: function() {
                return this.isValid ? k(this.weekYear) : NaN;
              }
            }
          ],
          [
            {
              key: "DATE_SHORT",
              get: function() {
                return j;
              }
            },
            {
              key: "DATE_MED",
              get: function() {
                return D;
              }
            },
            {
              key: "DATE_FULL",
              get: function() {
                return B;
              }
            },
            {
              key: "DATE_HUGE",
              get: function() {
                return F;
              }
            },
            {
              key: "TIME_SIMPLE",
              get: function() {
                return U;
              }
            },
            {
              key: "TIME_WITH_SECONDS",
              get: function() {
                return H;
              }
            },
            {
              key: "TIME_WITH_SHORT_OFFSET",
              get: function() {
                return G;
              }
            },
            {
              key: "TIME_WITH_LONG_OFFSET",
              get: function() {
                return V;
              }
            },
            {
              key: "TIME_24_SIMPLE",
              get: function() {
                return $;
              }
            },
            {
              key: "TIME_24_WITH_SECONDS",
              get: function() {
                return W;
              }
            },
            {
              key: "TIME_24_WITH_SHORT_OFFSET",
              get: function() {
                return K;
              }
            },
            {
              key: "TIME_24_WITH_LONG_OFFSET",
              get: function() {
                return Z;
              }
            },
            {
              key: "DATETIME_SHORT",
              get: function() {
                return z;
              }
            },
            {
              key: "DATETIME_SHORT_WITH_SECONDS",
              get: function() {
                return q;
              }
            },
            {
              key: "DATETIME_MED",
              get: function() {
                return Y;
              }
            },
            {
              key: "DATETIME_MED_WITH_SECONDS",
              get: function() {
                return J;
              }
            },
            {
              key: "DATETIME_FULL",
              get: function() {
                return X;
              }
            },
            {
              key: "DATETIME_FULL_WITH_SECONDS",
              get: function() {
                return Q;
              }
            },
            {
              key: "DATETIME_HUGE",
              get: function() {
                return dd;
              }
            },
            {
              key: "DATETIME_HUGE_WITH_SECONDS",
              get: function() {
                return ud;
              }
            }
          ]
        ),
        d
      );
    })();
    function Ne(d) {
      if (Pe.isDateTime(d)) return d;
      if (d && d.valueOf && s(d.valueOf())) return Pe.fromJSDate(d);
      if (d && "object" == typeof d) return Pe.fromObject(d);
      throw new Id("Unknown datetime argument: " + d + ", of type " + typeof d);
    }
    (u.DateTime = Pe),
      (u.Duration = Hu),
      (u.Interval = $u),
      (u.Info = Wu),
      (u.Zone = xd),
      (u.FixedOffsetZone = Ld),
      (u.IANAZone = Cd),
      (u.InvalidZone = Pd),
      (u.LocalZone = Ed),
      (u.Settings = Hd);
  },
  function(d, u, e) {
    const n = e(265),
      t = "at (?<hour>\\d{1,2})(:(?<minute>\\d{2}))?( ?(?<meridiem>am|pm))?",
      a = [
        n(`^(${t})$`),
        n(`^(?<day>today|tomorrow)( ${t})?$`),
        n(`^(?<day>\\d{4}-\\d{2}-\\d{2})( ${t})?$`),
        n(
          `^(next )?(?<nextWeekday>monday|tuesday|wednesday|thursday|friday|saturday|sunday)( ${t})?$`
        ),
        n(`^next (?<nextPeriod>\\w+)( ${t})?$`),
        n(`^in (?<inAmount>\\d+) ?(?<inPeriod>\\w+)( ${t})?$`)
      ],
      r = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7
      },
      f = d => d.local().startOf("day"),
      c = (d, u) => {
        const e = parseInt(d, 10);
        if (12 === e && "pm" === u) return 12;
        if (12 === e && "am" === u)
          throw new Error(
            "\n\nInstead of 12am, either:\n- use 12pm if you mean noon (12:00), or\n- use the next day's date without time if you mean midnight (00:00)\n"
          );
        const n = "pm" === u ? e + 12 : e;
        if (n < 0 || n > 23) throw new Error("Invalid hour");
        return n;
      },
      i = (d, u, e, n) => {
        let t = d;
        return (t = ((d, u) => (u ? d.set({ minute: u }) : d))(
          (t = ((d, u, e) => (u ? d.set({ hour: c(u, e) }) : d))(t, u, n)),
          e
        ));
      },
      o = (
        {
          day: d,
          nextPeriod: u,
          nextWeekday: e,
          inAmount: n,
          inPeriod: t,
          hour: a
        },
        c
      ) =>
        d
          ? ((d, u) => {
              const e = f(u);
              return "today" === d
                ? e
                : "tomorrow" === d
                ? e.plus({ days: 1 })
                : u.fromISO(d);
            })(d, c)
          : e
          ? ((d, u) => {
              const e = f(u),
                n = r[d];
              return n
                ? e.weekday < n
                  ? e.plus({ days: n - e.weekday })
                  : e.plus({ days: 7 - e.weekday + n })
                : e;
            })(e, c)
          : u
          ? ((d, u) => {
              const e = f(u);
              return (
                {
                  week: e.plus({ days: 7 }),
                  month: e.plus({ months: 1 }),
                  year: e.plus({ years: 1 })
                }[d] || e
              );
            })(u, c)
          : n && t
          ? ((d, u, e, n) => {
              const t = parseInt(d, 10);
              if (Number.isNaN(t))
                throw new Error('Invalid amount for "start in" clause');
              if (["minute", "minutes", "hour", "hours"].includes(u)) {
                if (e)
                  throw new Error(
                    `Cannot specify a time with "start in <n> ${u}"`
                  );
                return n.local().plus({ [u]: t });
              }
              if (["day", "days", "week", "weeks", "year", "years"].includes(u))
                return n
                  .local()
                  .startOf("day")
                  .plus({ [u]: t });
              throw new Error('Unknown <period> for "start in"');
            })(n, t, !!a, c)
          : f(c);
    d.exports = (d, u) => {
      const e = a.find(u => n.exec(d, u));
      if (!e) throw new Error(`Invalid @start tag: ${d}`);
      try {
        return ((d, u, e) => {
          const t = n.exec(d, u),
            { hour: a, minute: r, meridiem: f } = t,
            c = i(o(t, e), a, r, f);
          if (!c.isValid)
            throw new Error(`Invalid date: ${d} - ${c.invalidReason}`);
          return c.toISO();
        })(d, e, u);
      } catch (u) {
        throw new Error(`Invalid @start tag: ${d} - ${u.message}`);
      }
    };
  },
  function(d, u, e) {
    "use strict";
    var n = e(11);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(266)),
      a = n(e(309)),
      r = n(e(310)),
      f = n(e(311)),
      c = n(e(312)),
      i = n(e(314)),
      o = n(e(316)),
      s = n(e(318));
    (0, a.default)(t.default),
      (0, r.default)(t.default),
      (0, f.default)(t.default),
      (0, c.default)(t.default),
      (0, i.default)(t.default),
      (0, o.default)(t.default),
      (0, s.default)(t.default);
    var l = t.default;
    (u.default = l), (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(11);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(267)),
      a = n(e(282)),
      r = n(e(85)),
      f = n(e(304)),
      c = "xregexp",
      i = { astral: !1, namespacing: !1 },
      o = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
      },
      s = {},
      l = {},
      m = {},
      p = [],
      h = "default",
      b = "class",
      y = {
        default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
        class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
      },
      g = /\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g,
      _ = void 0 === o.exec.call(/()??/, "")[1],
      v = void 0 !== /x/.flags,
      w = {}.toString;
    function I(d) {
      var u = !0;
      try {
        new RegExp("", d);
      } catch (d) {
        u = !1;
      }
      return u;
    }
    var S = I("u"),
      x = I("y"),
      k = { g: !0, i: !0, m: !0, u: S, y: x };
    function E(d, u, e, n, t) {
      if (((d[c] = { captureNames: u }), t)) return d;
      if (d.__proto__) d.__proto__ = U.prototype;
      else for (var a in U.prototype) d[a] = U.prototype[a];
      return (
        (d[c].source = e),
        (d[c].flags = n
          ? n
              .split("")
              .sort()
              .join("")
          : n),
        d
      );
    }
    function M(d) {
      return o.replace.call(d, /([\s\S])(?=[\s\S]*\1)/g, "");
    }
    function T(d, u) {
      if (!U.isRegExp(d)) throw new TypeError("Type RegExp expected");
      var e = d[c] || {},
        n = (function(d) {
          return v
            ? d.flags
            : o.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(d))[1];
        })(d),
        t = "",
        a = "",
        r = null,
        f = null;
      return (
        (u = u || {}).removeG && (a += "g"),
        u.removeY && (a += "y"),
        a && (n = o.replace.call(n, new RegExp("[".concat(a, "]+"), "g"), "")),
        u.addG && (t += "g"),
        u.addY && (t += "y"),
        t && (n = M(n + t)),
        u.isInternalOnly ||
          (void 0 !== e.source && (r = e.source),
          null != e.flags && (f = t ? M(e.flags + t) : e.flags)),
        (d = E(
          new RegExp(u.source || d.source, n),
          (function(d) {
            return !(!d[c] || !d[c].captureNames);
          })(d)
            ? e.captureNames.slice(0)
            : null,
          r,
          f,
          u.isInternalOnly
        ))
      );
    }
    function O(d) {
      return (0, f.default)(d, 16);
    }
    function C(d, u, e) {
      return "(" === d.input[d.index - 1] ||
        ")" === d.input[d.index + d[0].length] ||
        "|" === d.input[d.index - 1] ||
        "|" === d.input[d.index + d[0].length] ||
        d.index < 1 ||
        d.index + d[0].length >= d.input.length ||
        o.test.call(/^\(\?[:=!]/, d.input.substr(d.index - 3, 3)) ||
        (function(d, u, e) {
          return o.test.call(
            -1 !== e.indexOf("x")
              ? /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
              : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,
            d.slice(u)
          );
        })(d.input, d.index + d[0].length, e)
        ? ""
        : "(?:)";
    }
    function A(d) {
      return (0, f.default)(d, 10).toString(16);
    }
    function L(d, u) {
      return w.call(d) === "[object ".concat(u, "]");
    }
    function P(d) {
      for (; d.length < 4; ) d = "0".concat(d);
      return d;
    }
    function N(d) {
      var u = {};
      return L(d, "String")
        ? (U.forEach(d, /[^\s,]+/, function(d) {
            u[d] = !0;
          }),
          u)
        : d;
    }
    function R(d) {
      if (!/^[\w$]$/.test(d))
        throw new Error("Flag must be a single character A-Za-z0-9_$");
      k[d] = !0;
    }
    function j(d, u, e, n, t) {
      for (var a, r, f = p.length, c = d[e], i = null; f--; )
        if (
          !(
            ((r = p[f]).leadChar && r.leadChar !== c) ||
            (r.scope !== n && "all" !== r.scope) ||
            (r.flag && -1 === u.indexOf(r.flag))
          ) &&
          (a = U.exec(d, r.regex, e, "sticky"))
        ) {
          i = {
            matchLength: a[0].length,
            output: r.handler.call(t, a, n, u),
            reparse: r.reparse
          };
          break;
        }
      return i;
    }
    function D(d) {
      i.astral = d;
    }
    function B(d) {
      i.namespacing = d;
    }
    function F(d) {
      if (null == d)
        throw new TypeError("Cannot convert null or undefined to object");
      return d;
    }
    function U(d, u) {
      if (U.isRegExp(d)) {
        if (void 0 !== u)
          throw new TypeError("Cannot supply flags when copying a RegExp");
        return T(d);
      }
      if (
        ((d = void 0 === d ? "" : String(d)),
        (u = void 0 === u ? "" : String(u)),
        U.isInstalled("astral") && -1 === u.indexOf("A") && (u += "A"),
        m[d] || (m[d] = {}),
        !m[d][u])
      ) {
        for (
          var e,
            n = { hasNamedCapture: !1, captureNames: [] },
            t = h,
            f = "",
            c = 0,
            i = (function(d, u) {
              if (M(u) !== u)
                throw new SyntaxError(
                  "Invalid duplicate regex flag ".concat(u)
                );
              d = o.replace.call(d, /^\(\?([\w$]+)\)/, function(d, e) {
                if (o.test.call(/[gy]/, e))
                  throw new SyntaxError(
                    "Cannot use flag g or y in mode modifier ".concat(d)
                  );
                return (u = M(u + e)), "";
              });
              var e = !0,
                n = !1,
                t = void 0;
              try {
                for (
                  var a, f = (0, r.default)(u);
                  !(e = (a = f.next()).done);
                  e = !0
                ) {
                  var c = a.value;
                  if (!k[c])
                    throw new SyntaxError("Unknown regex flag ".concat(c));
                }
              } catch (d) {
                (n = !0), (t = d);
              } finally {
                try {
                  e || null == f.return || f.return();
                } finally {
                  if (n) throw t;
                }
              }
              return { pattern: d, flags: u };
            })(d, u),
            s = i.pattern,
            l = i.flags;
          c < s.length;

        ) {
          do {
            (e = j(s, l, c, t, n)) &&
              e.reparse &&
              (s = s.slice(0, c) + e.output + s.slice(c + e.matchLength));
          } while (e && e.reparse);
          if (e) (f += e.output), (c += e.matchLength || 1);
          else {
            var p = U.exec(s, y[t], c, "sticky"),
              g = (0, a.default)(p, 1)[0];
            (f += g),
              (c += g.length),
              "[" === g && t === h ? (t = b) : "]" === g && t === b && (t = h);
          }
        }
        m[d][u] = {
          pattern: o.replace.call(f, /(?:\(\?:\))+/g, "(?:)"),
          flags: o.replace.call(l, /[^gimuy]+/g, ""),
          captures: n.hasNamedCapture ? n.captureNames : null
        };
      }
      var _ = m[d][u];
      return E(new RegExp(_.pattern, _.flags), _.captures, d, u);
    }
    (U.prototype = /(?:)/),
      (U.version = "4.2.4"),
      (U._clipDuplicates = M),
      (U._hasNativeFlag = I),
      (U._dec = O),
      (U._hex = A),
      (U._pad4 = P),
      (U.addToken = function(d, u, e) {
        var n = (e = e || {}).optionalFlags;
        if ((e.flag && R(e.flag), n)) {
          n = o.split.call(n, "");
          var t = !0,
            a = !1,
            f = void 0;
          try {
            for (
              var c, i = (0, r.default)(n);
              !(t = (c = i.next()).done);
              t = !0
            ) {
              R(c.value);
            }
          } catch (d) {
            (a = !0), (f = d);
          } finally {
            try {
              t || null == i.return || i.return();
            } finally {
              if (a) throw f;
            }
          }
        }
        p.push({
          regex: T(d, { addG: !0, addY: x, isInternalOnly: !0 }),
          handler: u,
          scope: e.scope || h,
          flag: e.flag,
          reparse: e.reparse,
          leadChar: e.leadChar
        }),
          U.cache.flush("patterns");
      }),
      (U.cache = function(d, u) {
        return l[d] || (l[d] = {}), l[d][u] || (l[d][u] = U(d, u));
      }),
      (U.cache.flush = function(d) {
        "patterns" === d ? (m = {}) : (l = {});
      }),
      (U.escape = function(d) {
        return o.replace.call(F(d), /[-\[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }),
      (U.exec = function(d, u, e, n) {
        var t,
          a,
          r = "g",
          f = !1;
        (t = x && !!(n || (u.sticky && !1 !== n)))
          ? (r += "y")
          : n && ((f = !0), (r += "FakeY")),
          (u[c] = u[c] || {});
        var i =
          u[c][r] ||
          (u[c][r] = T(u, {
            addG: !0,
            addY: t,
            source: f ? "".concat(u.source, "|()") : void 0,
            removeY: !1 === n,
            isInternalOnly: !0
          }));
        return (
          (e = e || 0),
          (i.lastIndex = e),
          (a = s.exec.call(i, d)),
          f && a && "" === a.pop() && (a = null),
          u.global && (u.lastIndex = a ? i.lastIndex : 0),
          a
        );
      }),
      (U.forEach = function(d, u, e) {
        for (var n, t = 0, a = -1; (n = U.exec(d, u, t)); )
          e(n, ++a, d, u), (t = n.index + (n[0].length || 1));
      }),
      (U.globalize = function(d) {
        return T(d, { addG: !0 });
      }),
      (U.install = function(d) {
        (d = N(d)),
          !i.astral && d.astral && D(!0),
          !i.namespacing && d.namespacing && B(!0);
      }),
      (U.isInstalled = function(d) {
        return !!i[d];
      }),
      (U.isRegExp = function(d) {
        return "[object RegExp]" === w.call(d);
      }),
      (U.match = function(d, u, e) {
        var n = (u.global && "one" !== e) || "all" === e,
          t = (n ? "g" : "") + (u.sticky ? "y" : "") || "noGY";
        u[c] = u[c] || {};
        var a =
            u[c][t] ||
            (u[c][t] = T(u, {
              addG: !!n,
              removeG: "one" === e,
              isInternalOnly: !0
            })),
          r = o.match.call(F(d), a);
        return (
          u.global &&
            (u.lastIndex = "one" === e && r ? r.index + r[0].length : 0),
          n ? r || [] : r && r[0]
        );
      }),
      (U.matchChain = function(d, u) {
        return (function d(e, n) {
          var t = u[n].regex ? u[n] : { regex: u[n] },
            a = [];
          function f(d) {
            if (t.backref) {
              var u = "Backreference to undefined group: ".concat(t.backref),
                e = isNaN(t.backref);
              if (e && U.isInstalled("namespacing")) {
                if (!(t.backref in d.groups)) throw new ReferenceError(u);
              } else if (!d.hasOwnProperty(t.backref))
                throw new ReferenceError(u);
              var n =
                e && U.isInstalled("namespacing")
                  ? d.groups[t.backref]
                  : d[t.backref];
              a.push(n || "");
            } else a.push(d[0]);
          }
          var c = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var s, l = (0, r.default)(e);
              !(c = (s = l.next()).done);
              c = !0
            ) {
              var m = s.value;
              U.forEach(m, t.regex, f);
            }
          } catch (d) {
            (i = !0), (o = d);
          } finally {
            try {
              c || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return n !== u.length - 1 && a.length ? d(a, n + 1) : a;
        })([d], 0);
      }),
      (U.replace = function(d, u, e, n) {
        var t = U.isRegExp(u),
          a = (u.global && "one" !== n) || "all" === n,
          r = (a ? "g" : "") + (u.sticky ? "y" : "") || "noGY",
          f = u;
        t
          ? ((u[c] = u[c] || {}),
            (f =
              u[c][r] ||
              (u[c][r] = T(u, {
                addG: !!a,
                removeG: "one" === n,
                isInternalOnly: !0
              }))))
          : a && (f = new RegExp(U.escape(String(u)), "g"));
        var i = s.replace.call(F(d), f, e);
        return t && u.global && (u.lastIndex = 0), i;
      }),
      (U.replaceEach = function(d, u) {
        var e = !0,
          n = !1,
          t = void 0;
        try {
          for (
            var a, f = (0, r.default)(u);
            !(e = (a = f.next()).done);
            e = !0
          ) {
            var c = a.value;
            d = U.replace(d, c[0], c[1], c[2]);
          }
        } catch (d) {
          (n = !0), (t = d);
        } finally {
          try {
            e || null == f.return || f.return();
          } finally {
            if (n) throw t;
          }
        }
        return d;
      }),
      (U.split = function(d, u, e) {
        return s.split.call(F(d), u, e);
      }),
      (U.test = function(d, u, e, n) {
        return !!U.exec(d, u, e, n);
      }),
      (U.uninstall = function(d) {
        (d = N(d)),
          i.astral && d.astral && D(!1),
          i.namespacing && d.namespacing && B(!1);
      }),
      (U.union = function(d, u, e) {
        var n,
          t,
          a = (e = e || {}).conjunction || "or",
          f = 0;
        function i(d, u, e) {
          var a = t[f - n];
          if (u) {
            if ((++f, a)) return "(?<".concat(a, ">");
          } else if (e) return "\\".concat(+e + n);
          return d;
        }
        if (!L(d, "Array") || !d.length)
          throw new TypeError(
            "Must provide a nonempty array of patterns to merge"
          );
        var s = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
          l = [],
          m = !0,
          p = !1,
          h = void 0;
        try {
          for (
            var b, y = (0, r.default)(d);
            !(m = (b = y.next()).done);
            m = !0
          ) {
            var g = b.value;
            U.isRegExp(g)
              ? ((n = f),
                (t = (g[c] && g[c].captureNames) || []),
                l.push(o.replace.call(U(g.source).source, s, i)))
              : l.push(U.escape(g));
          }
        } catch (d) {
          (p = !0), (h = d);
        } finally {
          try {
            m || null == y.return || y.return();
          } finally {
            if (p) throw h;
          }
        }
        var _ = "none" === a ? "" : "|";
        return U(l.join(_), u);
      }),
      (s.exec = function(d) {
        var u = this.lastIndex,
          e = o.exec.apply(this, arguments);
        if (e) {
          if (!_ && e.length > 1 && -1 !== e.indexOf("")) {
            var n = T(this, { removeG: !0, isInternalOnly: !0 });
            o.replace.call(String(d).slice(e.index), n, function() {
              for (var d = arguments.length, u = 1; u < d - 2; ++u)
                void 0 ===
                  (u < 0 || arguments.length <= u ? void 0 : arguments[u]) &&
                  (e[u] = void 0);
            });
          }
          var a = e;
          if (
            (U.isInstalled("namespacing") &&
              ((e.groups = (0, t.default)(null)), (a = e.groups)),
            this[c] && this[c].captureNames)
          )
            for (var r = 1; r < e.length; ++r) {
              var f = this[c].captureNames[r - 1];
              f && (a[f] = e[r]);
            }
          this.global &&
            !e[0].length &&
            this.lastIndex > e.index &&
            (this.lastIndex = e.index);
        }
        return this.global || (this.lastIndex = u), e;
      }),
      (s.test = function(d) {
        return !!s.exec.call(this, d);
      }),
      (s.match = function(d) {
        if (U.isRegExp(d)) {
          if (d.global) {
            var u = o.match.apply(this, arguments);
            return (d.lastIndex = 0), u;
          }
        } else d = new RegExp(d);
        return s.exec.call(d, F(this));
      }),
      (s.replace = function(d, u) {
        var e,
          n,
          a,
          r = U.isRegExp(d);
        return (
          r ? (d[c] && (n = d[c].captureNames), (e = d.lastIndex)) : (d += ""),
          (a = L(u, "Function")
            ? o.replace.call(String(this), d, function() {
                for (
                  var e = arguments.length, a = new Array(e), f = 0;
                  f < e;
                  f++
                )
                  a[f] = arguments[f];
                if (n) {
                  var c;
                  U.isInstalled("namespacing")
                    ? ((c = (0, t.default)(null)), a.push(c))
                    : ((a[0] = new String(a[0])), (c = a[0]));
                  for (var i = 0; i < n.length; ++i)
                    n[i] && (c[n[i]] = a[i + 1]);
                }
                return (
                  r &&
                    d.global &&
                    (d.lastIndex = a[a.length - 2] + a[0].length),
                  u.apply(void 0, a)
                );
              })
            : o.replace.call(null == this ? this : String(this), d, function() {
                for (
                  var d = arguments.length, e = new Array(d), t = 0;
                  t < d;
                  t++
                )
                  e[t] = arguments[t];
                return o.replace.call(String(u), g, function(d, u, t, a) {
                  if ((u = u || t)) {
                    var r = +u;
                    if (r <= e.length - 3) return e[r] || "";
                    if ((r = n ? n.indexOf(u) : -1) < 0)
                      throw new SyntaxError(
                        "Backreference to undefined group ".concat(d)
                      );
                    return e[r + 1] || "";
                  }
                  if ("$" === a) return "$";
                  if ("&" === a || 0 == +a) return e[0];
                  if ("`" === a)
                    return e[e.length - 1].slice(0, e[e.length - 2]);
                  if ("'" === a)
                    return e[e.length - 1].slice(e[e.length - 2] + e[0].length);
                  if (((a = +a), !isNaN(a))) {
                    if (a > e.length - 3)
                      throw new SyntaxError(
                        "Backreference to undefined group ".concat(d)
                      );
                    return e[a] || "";
                  }
                  throw new SyntaxError("Invalid token ".concat(d));
                });
              })),
          r && (d.global ? (d.lastIndex = 0) : (d.lastIndex = e)),
          a
        );
      }),
      (s.split = function(d, u) {
        if (!U.isRegExp(d)) return o.split.apply(this, arguments);
        var e,
          n = String(this),
          t = [],
          a = d.lastIndex,
          r = 0;
        return (
          (u = (void 0 === u ? -1 : u) >>> 0),
          U.forEach(n, d, function(d) {
            d.index + d[0].length > r &&
              (t.push(n.slice(r, d.index)),
              d.length > 1 &&
                d.index < n.length &&
                Array.prototype.push.apply(t, d.slice(1)),
              (e = d[0].length),
              (r = d.index + e));
          }),
          r === n.length
            ? (o.test.call(d, "") && !e) || t.push("")
            : t.push(n.slice(r)),
          (d.lastIndex = a),
          t.length > u ? t.slice(0, u) : t
        );
      }),
      U.addToken(
        /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
        function(d, u) {
          if ("B" === d[1] && u === h) return d[0];
          throw new SyntaxError("Invalid escape ".concat(d[0]));
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\\u{([\dA-Fa-f]+)}/,
        function(d, u, e) {
          var n = O(d[1]);
          if (n > 1114111)
            throw new SyntaxError("Invalid Unicode code point ".concat(d[0]));
          if (n <= 65535) return "\\u".concat(P(A(n)));
          if (S && -1 !== e.indexOf("u")) return d[0];
          throw new SyntaxError(
            "Cannot use Unicode code point above \\u{FFFF} without flag u"
          );
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\[(\^?)\]/,
        function(d) {
          return d[1] ? "[\\s\\S]" : "\\b\\B";
        },
        { leadChar: "[" }
      ),
      U.addToken(/\(\?#[^)]*\)/, C, { leadChar: "(" }),
      U.addToken(/\s+|#[^\n]*\n?/, C, { flag: "x" }),
      U.addToken(
        /\./,
        function() {
          return "[\\s\\S]";
        },
        { flag: "s", leadChar: "." }
      ),
      U.addToken(
        /\\k<([\w$]+)>/,
        function(d) {
          var u = isNaN(d[1]) ? this.captureNames.indexOf(d[1]) + 1 : +d[1],
            e = d.index + d[0].length;
          if (!u || u > this.captureNames.length)
            throw new SyntaxError(
              "Backreference to undefined group ".concat(d[0])
            );
          return "\\"
            .concat(u)
            .concat(e === d.input.length || isNaN(d.input[e]) ? "" : "(?:)");
        },
        { leadChar: "\\" }
      ),
      U.addToken(
        /\\(\d+)/,
        function(d, u) {
          if (
            !(
              u === h &&
              /^[1-9]/.test(d[1]) &&
              +d[1] <= this.captureNames.length
            ) &&
            "0" !== d[1]
          )
            throw new SyntaxError(
              "Cannot use octal escape or backreference to undefined group ".concat(
                d[0]
              )
            );
          return d[0];
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\(\?P?<([\w$]+)>/,
        function(d) {
          if (!isNaN(d[1]))
            throw new SyntaxError(
              "Cannot use integer as capture name ".concat(d[0])
            );
          if (
            !U.isInstalled("namespacing") &&
            ("length" === d[1] || "__proto__" === d[1])
          )
            throw new SyntaxError(
              "Cannot use reserved word as capture name ".concat(d[0])
            );
          if (-1 !== this.captureNames.indexOf(d[1]))
            throw new SyntaxError(
              "Cannot use same name for multiple groups ".concat(d[0])
            );
          return this.captureNames.push(d[1]), (this.hasNamedCapture = !0), "(";
        },
        { leadChar: "(" }
      ),
      U.addToken(
        /\((?!\?)/,
        function(d, u, e) {
          return -1 !== e.indexOf("n")
            ? "(?:"
            : (this.captureNames.push(null), "(");
        },
        { optionalFlags: "n", leadChar: "(" }
      );
    var H = U;
    (u.default = H), (d.exports = u.default);
  },
  function(d, u, e) {
    d.exports = e(268);
  },
  function(d, u, e) {
    e(269);
    var n = e(13).Object;
    d.exports = function(d, u) {
      return n.create(d, u);
    };
  },
  function(d, u, e) {
    var n = e(35);
    n(n.S, "Object", { create: e(135) });
  },
  function(d, u, e) {
    var n = e(271);
    d.exports = function(d, u, e) {
      if ((n(d), void 0 === u)) return d;
      switch (e) {
        case 1:
          return function(e) {
            return d.call(u, e);
          };
        case 2:
          return function(e, n) {
            return d.call(u, e, n);
          };
        case 3:
          return function(e, n, t) {
            return d.call(u, e, n, t);
          };
      }
      return function() {
        return d.apply(u, arguments);
      };
    };
  },
  function(d, u) {
    d.exports = function(d) {
      if ("function" != typeof d) throw TypeError(d + " is not a function!");
      return d;
    };
  },
  function(d, u, e) {
    d.exports =
      !e(51) &&
      !e(80)(function() {
        return (
          7 !=
          Object.defineProperty(e(133)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(d, u, e) {
    var n = e(79);
    d.exports = function(d, u) {
      if (!n(d)) return d;
      var e, t;
      if (u && "function" == typeof (e = d.toString) && !n((t = e.call(d))))
        return t;
      if ("function" == typeof (e = d.valueOf) && !n((t = e.call(d)))) return t;
      if (!u && "function" == typeof (e = d.toString) && !n((t = e.call(d))))
        return t;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(d, u, e) {
    var n = e(78),
      t = e(50),
      a = e(275);
    d.exports = e(51)
      ? Object.defineProperties
      : function(d, u) {
          t(d);
          for (var e, r = a(u), f = r.length, c = 0; f > c; )
            n.f(d, (e = r[c++]), u[e]);
          return d;
        };
  },
  function(d, u, e) {
    var n = e(276),
      t = e(139);
    d.exports =
      Object.keys ||
      function(d) {
        return n(d, t);
      };
  },
  function(d, u, e) {
    var n = e(52),
      t = e(81),
      a = e(278)(!1),
      r = e(84)("IE_PROTO");
    d.exports = function(d, u) {
      var e,
        f = t(d),
        c = 0,
        i = [];
      for (e in f) e != r && n(f, e) && i.push(e);
      for (; u.length > c; ) n(f, (e = u[c++])) && (~a(i, e) || i.push(e));
      return i;
    };
  },
  function(d, u, e) {
    var n = e(82);
    d.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(d) {
          return "String" == n(d) ? d.split("") : Object(d);
        };
  },
  function(d, u, e) {
    var n = e(81),
      t = e(279),
      a = e(280);
    d.exports = function(d) {
      return function(u, e, r) {
        var f,
          c = n(u),
          i = t(c.length),
          o = a(r, i);
        if (d && e != e) {
          for (; i > o; ) if ((f = c[o++]) != f) return !0;
        } else
          for (; i > o; o++)
            if ((d || o in c) && c[o] === e) return d || o || 0;
        return !d && -1;
      };
    };
  },
  function(d, u, e) {
    var n = e(83),
      t = Math.min;
    d.exports = function(d) {
      return d > 0 ? t(n(d), 9007199254740991) : 0;
    };
  },
  function(d, u, e) {
    var n = e(83),
      t = Math.max,
      a = Math.min;
    d.exports = function(d, u) {
      return (d = n(d)) < 0 ? t(d + u, 0) : a(d, u);
    };
  },
  function(d, u, e) {
    var n = e(12).document;
    d.exports = n && n.documentElement;
  },
  function(d, u, e) {
    var n = e(283),
      t = e(288),
      a = e(303);
    d.exports = function(d, u) {
      return n(d) || t(d, u) || a();
    };
  },
  function(d, u, e) {
    var n = e(284);
    d.exports = function(d) {
      if (n(d)) return d;
    };
  },
  function(d, u, e) {
    d.exports = e(285);
  },
  function(d, u, e) {
    e(286), (d.exports = e(13).Array.isArray);
  },
  function(d, u, e) {
    var n = e(35);
    n(n.S, "Array", { isArray: e(287) });
  },
  function(d, u, e) {
    var n = e(82);
    d.exports =
      Array.isArray ||
      function(d) {
        return "Array" == n(d);
      };
  },
  function(d, u, e) {
    var n = e(85);
    d.exports = function(d, u) {
      var e = [],
        t = !0,
        a = !1,
        r = void 0;
      try {
        for (
          var f, c = n(d);
          !(t = (f = c.next()).done) && (e.push(f.value), !u || e.length !== u);
          t = !0
        );
      } catch (d) {
        (a = !0), (r = d);
      } finally {
        try {
          t || null == c.return || c.return();
        } finally {
          if (a) throw r;
        }
      }
      return e;
    };
  },
  function(d, u, e) {
    e(290), e(298), (d.exports = e(300));
  },
  function(d, u, e) {
    e(291);
    for (
      var n = e(12),
        t = e(36),
        a = e(54),
        r = e(26)("toStringTag"),
        f = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
          ","
        ),
        c = 0;
      c < f.length;
      c++
    ) {
      var i = f[c],
        o = n[i],
        s = o && o.prototype;
      s && !s[r] && t(s, r, i), (a[i] = a.Array);
    }
  },
  function(d, u, e) {
    "use strict";
    var n = e(292),
      t = e(293),
      a = e(54),
      r = e(81);
    (d.exports = e(140)(
      Array,
      "Array",
      function(d, u) {
        (this._t = r(d)), (this._i = 0), (this._k = u);
      },
      function() {
        var d = this._t,
          u = this._k,
          e = this._i++;
        return !d || e >= d.length
          ? ((this._t = void 0), t(1))
          : t(0, "keys" == u ? e : "values" == u ? d[e] : [e, d[e]]);
      },
      "values"
    )),
      (a.Arguments = a.Array),
      n("keys"),
      n("values"),
      n("entries");
  },
  function(d, u) {
    d.exports = function() {};
  },
  function(d, u) {
    d.exports = function(d, u) {
      return { value: u, done: !!d };
    };
  },
  function(d, u, e) {
    d.exports = e(36);
  },
  function(d, u, e) {
    "use strict";
    var n = e(135),
      t = e(134),
      a = e(141),
      r = {};
    e(36)(r, e(26)("iterator"), function() {
      return this;
    }),
      (d.exports = function(d, u, e) {
        (d.prototype = n(r, { next: t(1, e) })), a(d, u + " Iterator");
      });
  },
  function(d, u, e) {
    var n = e(52),
      t = e(297),
      a = e(84)("IE_PROTO"),
      r = Object.prototype;
    d.exports =
      Object.getPrototypeOf ||
      function(d) {
        return (
          (d = t(d)),
          n(d, a)
            ? d[a]
            : "function" == typeof d.constructor && d instanceof d.constructor
            ? d.constructor.prototype
            : d instanceof Object
            ? r
            : null
        );
      };
  },
  function(d, u, e) {
    var n = e(53);
    d.exports = function(d) {
      return Object(n(d));
    };
  },
  function(d, u, e) {
    "use strict";
    var n = e(299)(!0);
    e(140)(
      String,
      "String",
      function(d) {
        (this._t = String(d)), (this._i = 0);
      },
      function() {
        var d,
          u = this._t,
          e = this._i;
        return e >= u.length
          ? { value: void 0, done: !0 }
          : ((d = n(u, e)), (this._i += d.length), { value: d, done: !1 });
      }
    );
  },
  function(d, u, e) {
    var n = e(83),
      t = e(53);
    d.exports = function(d) {
      return function(u, e) {
        var a,
          r,
          f = String(t(u)),
          c = n(e),
          i = f.length;
        return c < 0 || c >= i
          ? d
            ? ""
            : void 0
          : (a = f.charCodeAt(c)) < 55296 ||
            a > 56319 ||
            c + 1 === i ||
            (r = f.charCodeAt(c + 1)) < 56320 ||
            r > 57343
          ? d
            ? f.charAt(c)
            : a
          : d
          ? f.slice(c, c + 2)
          : r - 56320 + ((a - 55296) << 10) + 65536;
      };
    };
  },
  function(d, u, e) {
    var n = e(50),
      t = e(301);
    d.exports = e(13).getIterator = function(d) {
      var u = t(d);
      if ("function" != typeof u) throw TypeError(d + " is not iterable!");
      return n(u.call(d));
    };
  },
  function(d, u, e) {
    var n = e(302),
      t = e(26)("iterator"),
      a = e(54);
    d.exports = e(13).getIteratorMethod = function(d) {
      if (null != d) return d[t] || d["@@iterator"] || a[n(d)];
    };
  },
  function(d, u, e) {
    var n = e(82),
      t = e(26)("toStringTag"),
      a =
        "Arguments" ==
        n(
          (function() {
            return arguments;
          })()
        );
    d.exports = function(d) {
      var u, e, r;
      return void 0 === d
        ? "Undefined"
        : null === d
        ? "Null"
        : "string" ==
          typeof (e = (function(d, u) {
            try {
              return d[u];
            } catch (d) {}
          })((u = Object(d)), t))
        ? e
        : a
        ? n(u)
        : "Object" == (r = n(u)) && "function" == typeof u.callee
        ? "Arguments"
        : r;
    };
  },
  function(d, u) {
    d.exports = function() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
  function(d, u, e) {
    d.exports = e(305);
  },
  function(d, u, e) {
    e(306), (d.exports = e(13).parseInt);
  },
  function(d, u, e) {
    var n = e(35),
      t = e(307);
    n(n.G + n.F * (parseInt != t), { parseInt: t });
  },
  function(d, u, e) {
    var n = e(12).parseInt,
      t = e(308).trim,
      a = e(142),
      r = /^[-+]?0[xX]/;
    d.exports =
      8 !== n(a + "08") || 22 !== n(a + "0x16")
        ? function(d, u) {
            var e = t(String(d), 3);
            return n(e, u >>> 0 || (r.test(e) ? 16 : 10));
          }
        : n;
  },
  function(d, u, e) {
    var n = e(35),
      t = e(53),
      a = e(80),
      r = e(142),
      f = "[" + r + "]",
      c = RegExp("^" + f + f + "*"),
      i = RegExp(f + f + "*$"),
      o = function(d, u, e) {
        var t = {},
          f = a(function() {
            return !!r[d]() || "​" != "​"[d]();
          }),
          c = (t[d] = f ? u(s) : r[d]);
        e && (t[e] = c), n(n.P + n.F * f, "String", t);
      },
      s = (o.trim = function(d, u) {
        return (
          (d = String(t(d))),
          1 & u && (d = d.replace(c, "")),
          2 & u && (d = d.replace(i, "")),
          d
        );
      });
    d.exports = o;
  },
  function(d, u, e) {
    "use strict";
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    (u.default = function(d) {
      var u = "xregexp",
        e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
        n = d.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", {
          conjunction: "or"
        });
      function t(d) {
        var u = /^(?:\(\?:\))*\^/,
          e = /\$(?:\(\?:\))*$/;
        return u.test(d) && e.test(d) && e.test(d.replace(/\\[\s\S]/g, ""))
          ? d.replace(u, "").replace(e, "")
          : d;
      }
      function a(e, n) {
        var t = n ? "x" : "";
        return d.isRegExp(e)
          ? e[u] && e[u].captureNames
            ? e
            : d(e.source, t)
          : d(e, t);
      }
      function r(u) {
        return u instanceof RegExp ? u : d.escape(u);
      }
      function f(d, u, e) {
        return (d["subpattern".concat(e)] = u), d;
      }
      function c(d, u, e) {
        return d + (u < e.length - 1 ? "{{subpattern".concat(u, "}}") : "");
      }
      (d.tag = function(u) {
        return function(e) {
          for (
            var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            t[a - 1] = arguments[a];
          var i = t.map(r).reduce(f, {}),
            o = e.raw.map(c).join("");
          return d.build(o, i, u);
        };
      }),
        (d.build = function(r, f, c) {
          var i = -1 !== (c = c || "").indexOf("x"),
            o = /^\(\?([\w$]+)\)/.exec(r);
          o && (c = d._clipDuplicates(c + o[1]));
          var s = {};
          for (var l in f)
            if (f.hasOwnProperty(l)) {
              var m = a(f[l], i);
              s[l] = { pattern: t(m.source), names: m[u].captureNames || [] };
            }
          var p,
            h = a(r, i),
            b = 0,
            y = 0,
            g = [0],
            _ = h[u].captureNames || [],
            v = h.source.replace(n, function(d, u, n, t, a) {
              var r,
                f,
                c,
                i = u || n;
              if (i) {
                if (!s.hasOwnProperty(i))
                  throw new ReferenceError("Undefined property ".concat(d));
                u
                  ? ((r = _[y]),
                    (g[++y] = ++b),
                    (f = "(?<".concat(r || i, ">")))
                  : (f = "(?:"),
                  (p = b);
                var o = s[i].pattern.replace(e, function(d, u, e) {
                  if (u) {
                    if (((r = s[i].names[b - p]), ++b, r))
                      return "(?<".concat(r, ">");
                  } else if (e) return (c = +e - 1), s[i].names[c] ? "\\k<".concat(s[i].names[c], ">") : "\\".concat(+e + p);
                  return d;
                });
                return "".concat(f).concat(o, ")");
              }
              if (t) {
                if (((r = _[y]), (g[++y] = ++b), r))
                  return "(?<".concat(r, ">");
              } else if (a) return _[(c = +a - 1)] ? "\\k<".concat(_[c], ">") : "\\".concat(g[+a]);
              return d;
            });
          return d(v, c);
        });
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    (u.default = function(d) {
      function u(d, u, e, n) {
        return { name: d, value: u, start: e, end: n };
      }
      d.matchRecursive = function(e, n, t, a, r) {
        r = r || {};
        var f,
          c,
          i,
          o,
          s,
          l = -1 !== (a = a || "").indexOf("g"),
          m = -1 !== a.indexOf("y"),
          p = a.replace(/y/g, ""),
          h = r.escapeChar,
          b = r.valueNames,
          y = [],
          g = 0,
          _ = 0,
          v = 0,
          w = 0;
        if (((n = d(n, p)), (t = d(t, p)), h)) {
          if (h.length > 1)
            throw new Error("Cannot use more than one escape character");
          (h = d.escape(h)),
            (s = new RegExp(
              "(?:"
                .concat(h, "[\\S\\s]|(?:(?!")
                .concat(
                  d.union([n, t], "", { conjunction: "or" }).source,
                  ")[^"
                )
                .concat(h, "])+)+"),
              a.replace(/[^imu]+/g, "")
            ));
        }
        for (;;) {
          if (
            (h && (v += (d.exec(e, s, v, "sticky") || [""])[0].length),
            (i = d.exec(e, n, v)),
            (o = d.exec(e, t, v)),
            i && o && (i.index <= o.index ? (o = null) : (i = null)),
            i || o)
          )
            v = (_ = (i || o).index) + (i || o)[0].length;
          else if (!g) break;
          if (m && !g && _ > w) break;
          if (i) g || ((f = _), (c = v)), ++g;
          else {
            if (!o || !g)
              throw new Error("Unbalanced delimiter found in string");
            if (
              !--g &&
              (b
                ? (b[0] && f > w && y.push(u(b[0], e.slice(w, f), w, f)),
                  b[1] && y.push(u(b[1], e.slice(f, c), f, c)),
                  b[2] && y.push(u(b[2], e.slice(c, _), c, _)),
                  b[3] && y.push(u(b[3], e.slice(_, v), _, v)))
                : y.push(e.slice(c, _)),
              (w = v),
              !l)
            )
              break;
          }
          _ === v && ++v;
        }
        return (
          l &&
            !m &&
            b &&
            b[0] &&
            e.length > w &&
            y.push(u(b[0], e.slice(w), w, e.length)),
          y
        );
      };
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(11);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(85));
    /*!
     * XRegExp Unicode Base 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2008-present MIT License
     */ (u.default = function(d) {
      var u = {},
        e = d._dec,
        n = d._hex,
        a = d._pad4;
      function r(d) {
        return d.replace(/[- _]+/g, "").toLowerCase();
      }
      function f(d) {
        var u = /^\\[xu](.+)/.exec(d);
        return u ? e(u[1]) : d.charCodeAt("\\" === d[0] ? 1 : 0);
      }
      function c(e) {
        var t, r, c;
        return (
          u[e]["b!"] ||
          (u[e]["b!"] = ((t = u[e].bmp),
          (r = ""),
          (c = -1),
          d.forEach(
            t,
            /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
            function(d) {
              var u = f(d[1]);
              u > c + 1 &&
                ((r += "\\u".concat(a(n(c + 1)))),
                u > c + 2 && (r += "-\\u".concat(a(n(u - 1))))),
                (c = f(d[2] || d[1]));
            }
          ),
          c < 65535 &&
            ((r += "\\u".concat(a(n(c + 1)))), c < 65534 && (r += "-\\uFFFF")),
          r))
        );
      }
      function i(d, e) {
        var n = e ? "a!" : "a=";
        return (
          u[d][n] ||
          (u[d][n] = (function(d, e) {
            var n = u[d],
              t = "";
            return (
              n.bmp &&
                !n.isBmpLast &&
                (t = "[".concat(n.bmp, "]").concat(n.astral ? "|" : "")),
              n.astral && (t += n.astral),
              n.isBmpLast &&
                n.bmp &&
                (t += "".concat(n.astral ? "|" : "", "[").concat(n.bmp, "]")),
              e
                ? "(?:(?!".concat(
                    t,
                    ")(?:[\ud800-\udbff][\udc00-\udfff]|[\0-￿]))"
                  )
                : "(?:".concat(t, ")")
            );
          })(d, e))
        );
      }
      d.addToken(
        /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
        function(d, e, n) {
          var t = "P" === d[1] || !!d[2],
            a = -1 !== n.indexOf("A"),
            f = r(d[4] || d[3]),
            o = u[f];
          if ("P" === d[1] && d[2])
            throw new SyntaxError("Invalid double negation " + d[0]);
          if (!u.hasOwnProperty(f))
            throw new SyntaxError("Unknown Unicode token " + d[0]);
          if (o.inverseOf) {
            if (((f = r(o.inverseOf)), !u.hasOwnProperty(f)))
              throw new ReferenceError(
                ""
                  .concat("Unicode token missing data " + d[0], " -> ")
                  .concat(o.inverseOf)
              );
            (o = u[f]), (t = !t);
          }
          if (!o.bmp && !a)
            throw new SyntaxError(
              "Astral mode required for Unicode token " + d[0]
            );
          if (a) {
            if ("class" === e)
              throw new SyntaxError(
                "Astral mode does not support Unicode tokens within character classes"
              );
            return i(f, t);
          }
          return "class" === e
            ? t
              ? c(f)
              : o.bmp
            : "".concat((t ? "[^" : "[") + o.bmp, "]");
        },
        { scope: "all", optionalFlags: "A", leadChar: "\\" }
      ),
        (d.addUnicodeData = function(e) {
          var n = !0,
            a = !1,
            f = void 0;
          try {
            for (
              var c, i = (0, t.default)(e);
              !(n = (c = i.next()).done);
              n = !0
            ) {
              var o = c.value;
              if (!o.name) throw new Error("Unicode token requires name");
              if (!(o.inverseOf || o.bmp || o.astral))
                throw new Error(
                  "Unicode token has no character data " + o.name
                );
              (u[r(o.name)] = o), o.alias && (u[r(o.alias)] = o);
            }
          } catch (d) {
            (a = !0), (f = d);
          } finally {
            try {
              n || null == i.return || i.return();
            } finally {
              if (a) throw f;
            }
          }
          d.cache.flush("patterns");
        }),
        (d._getUnicodeProperty = function(d) {
          var e = r(d);
          return u[e];
        });
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(11);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(313));
    /*!
     * XRegExp Unicode Blocks 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Blocks"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      { name: "InAdlam", astral: "\ud83a[\udd00-\udd5f]" },
      { name: "InAegean_Numbers", astral: "\ud800[\udd00-\udd3f]" },
      { name: "InAhom", astral: "\ud805[\udf00-\udf3f]" },
      { name: "InAlchemical_Symbols", astral: "\ud83d[\udf00-\udf7f]" },
      { name: "InAlphabetic_Presentation_Forms", bmp: "ﬀ-ﭏ" },
      { name: "InAnatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude7f]" },
      {
        name: "InAncient_Greek_Musical_Notation",
        astral: "\ud834[\ude00-\ude4f]"
      },
      { name: "InAncient_Greek_Numbers", astral: "\ud800[\udd40-\udd8f]" },
      { name: "InAncient_Symbols", astral: "\ud800[\udd90-\uddcf]" },
      { name: "InArabic", bmp: "؀-ۿ" },
      { name: "InArabic_Extended_A", bmp: "ࢠ-ࣿ" },
      {
        name: "InArabic_Mathematical_Alphabetic_Symbols",
        astral: "\ud83b[\ude00-\udeff]"
      },
      { name: "InArabic_Presentation_Forms_A", bmp: "ﭐ-﷿" },
      { name: "InArabic_Presentation_Forms_B", bmp: "ﹰ-\ufeff" },
      { name: "InArabic_Supplement", bmp: "ݐ-ݿ" },
      { name: "InArmenian", bmp: "԰-֏" },
      { name: "InArrows", bmp: "←-⇿" },
      { name: "InAvestan", astral: "\ud802[\udf00-\udf3f]" },
      { name: "InBalinese", bmp: "ᬀ-᭿" },
      { name: "InBamum", bmp: "ꚠ-꛿" },
      { name: "InBamum_Supplement", astral: "\ud81a[\udc00-\ude3f]" },
      { name: "InBasic_Latin", bmp: "\0-" },
      { name: "InBassa_Vah", astral: "\ud81a[\uded0-\udeff]" },
      { name: "InBatak", bmp: "ᯀ-᯿" },
      { name: "InBengali", bmp: "ঀ-৿" },
      { name: "InBhaiksuki", astral: "\ud807[\udc00-\udc6f]" },
      { name: "InBlock_Elements", bmp: "▀-▟" },
      { name: "InBopomofo", bmp: "㄀-ㄯ" },
      { name: "InBopomofo_Extended", bmp: "ㆠ-ㆿ" },
      { name: "InBox_Drawing", bmp: "─-╿" },
      { name: "InBrahmi", astral: "\ud804[\udc00-\udc7f]" },
      { name: "InBraille_Patterns", bmp: "⠀-⣿" },
      { name: "InBuginese", bmp: "ᨀ-᨟" },
      { name: "InBuhid", bmp: "ᝀ-᝟" },
      { name: "InByzantine_Musical_Symbols", astral: "\ud834[\udc00-\udcff]" },
      { name: "InCJK_Compatibility", bmp: "㌀-㏿" },
      { name: "InCJK_Compatibility_Forms", bmp: "︰-﹏" },
      { name: "InCJK_Compatibility_Ideographs", bmp: "豈-﫿" },
      {
        name: "InCJK_Compatibility_Ideographs_Supplement",
        astral: "\ud87e[\udc00-\ude1f]"
      },
      { name: "InCJK_Radicals_Supplement", bmp: "⺀-⻿" },
      { name: "InCJK_Strokes", bmp: "㇀-㇯" },
      { name: "InCJK_Symbols_And_Punctuation", bmp: "　-〿" },
      { name: "InCJK_Unified_Ideographs", bmp: "一-鿿" },
      { name: "InCJK_Unified_Ideographs_Extension_A", bmp: "㐀-䶿" },
      {
        name: "InCJK_Unified_Ideographs_Extension_B",
        astral: "[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_C",
        astral:
          "\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf3f]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_D",
        astral: "\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_E",
        astral:
          "\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udeaf]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_F",
        astral:
          "\ud873[\udeb0-\udfff]|[\ud874-\ud879][\udc00-\udfff]|\ud87a[\udc00-\udfef]"
      },
      { name: "InCarian", astral: "\ud800[\udea0-\udedf]" },
      { name: "InCaucasian_Albanian", astral: "\ud801[\udd30-\udd6f]" },
      { name: "InChakma", astral: "\ud804[\udd00-\udd4f]" },
      { name: "InCham", bmp: "ꨀ-꩟" },
      { name: "InCherokee", bmp: "Ꭰ-᏿" },
      { name: "InCherokee_Supplement", bmp: "ꭰ-ꮿ" },
      { name: "InChess_Symbols", astral: "\ud83e[\ude00-\ude6f]" },
      { name: "InCombining_Diacritical_Marks", bmp: "̀-ͯ" },
      { name: "InCombining_Diacritical_Marks_Extended", bmp: "᪰-᫿" },
      { name: "InCombining_Diacritical_Marks_For_Symbols", bmp: "⃐-⃿" },
      { name: "InCombining_Diacritical_Marks_Supplement", bmp: "᷀-᷿" },
      { name: "InCombining_Half_Marks", bmp: "︠-︯" },
      { name: "InCommon_Indic_Number_Forms", bmp: "꠰-꠿" },
      { name: "InControl_Pictures", bmp: "␀-␿" },
      { name: "InCoptic", bmp: "Ⲁ-⳿" },
      { name: "InCoptic_Epact_Numbers", astral: "\ud800[\udee0-\udeff]" },
      { name: "InCounting_Rod_Numerals", astral: "\ud834[\udf60-\udf7f]" },
      { name: "InCuneiform", astral: "\ud808[\udc00-\udfff]" },
      {
        name: "InCuneiform_Numbers_And_Punctuation",
        astral: "\ud809[\udc00-\udc7f]"
      },
      { name: "InCurrency_Symbols", bmp: "₠-⃏" },
      { name: "InCypriot_Syllabary", astral: "\ud802[\udc00-\udc3f]" },
      { name: "InCyrillic", bmp: "Ѐ-ӿ" },
      { name: "InCyrillic_Extended_A", bmp: "ⷠ-ⷿ" },
      { name: "InCyrillic_Extended_B", bmp: "Ꙁ-ꚟ" },
      { name: "InCyrillic_Extended_C", bmp: "ᲀ-᲏" },
      { name: "InCyrillic_Supplement", bmp: "Ԁ-ԯ" },
      { name: "InDeseret", astral: "\ud801[\udc00-\udc4f]" },
      { name: "InDevanagari", bmp: "ऀ-ॿ" },
      { name: "InDevanagari_Extended", bmp: "꣠-ꣿ" },
      { name: "InDingbats", bmp: "✀-➿" },
      { name: "InDogra", astral: "\ud806[\udc00-\udc4f]" },
      { name: "InDomino_Tiles", astral: "\ud83c[\udc30-\udc9f]" },
      { name: "InDuployan", astral: "\ud82f[\udc00-\udc9f]" },
      { name: "InEarly_Dynastic_Cuneiform", astral: "\ud809[\udc80-\udd4f]" },
      {
        name: "InEgyptian_Hieroglyphs",
        astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2f]"
      },
      { name: "InElbasan", astral: "\ud801[\udd00-\udd2f]" },
      { name: "InEmoticons", astral: "\ud83d[\ude00-\ude4f]" },
      {
        name: "InEnclosed_Alphanumeric_Supplement",
        astral: "\ud83c[\udd00-\uddff]"
      },
      { name: "InEnclosed_Alphanumerics", bmp: "①-⓿" },
      { name: "InEnclosed_CJK_Letters_And_Months", bmp: "㈀-㋿" },
      {
        name: "InEnclosed_Ideographic_Supplement",
        astral: "\ud83c[\ude00-\udeff]"
      },
      { name: "InEthiopic", bmp: "ሀ-፿" },
      { name: "InEthiopic_Extended", bmp: "ⶀ-⷟" },
      { name: "InEthiopic_Extended_A", bmp: "꬀-꬯" },
      { name: "InEthiopic_Supplement", bmp: "ᎀ-᎟" },
      { name: "InGeneral_Punctuation", bmp: " -⁯" },
      { name: "InGeometric_Shapes", bmp: "■-◿" },
      { name: "InGeometric_Shapes_Extended", astral: "\ud83d[\udf80-\udfff]" },
      { name: "InGeorgian", bmp: "Ⴀ-ჿ" },
      { name: "InGeorgian_Extended", bmp: "Ა-Ჿ" },
      { name: "InGeorgian_Supplement", bmp: "ⴀ-⴯" },
      { name: "InGlagolitic", bmp: "Ⰰ-ⱟ" },
      { name: "InGlagolitic_Supplement", astral: "\ud838[\udc00-\udc2f]" },
      { name: "InGothic", astral: "\ud800[\udf30-\udf4f]" },
      { name: "InGrantha", astral: "\ud804[\udf00-\udf7f]" },
      { name: "InGreek_And_Coptic", bmp: "Ͱ-Ͽ" },
      { name: "InGreek_Extended", bmp: "ἀ-῿" },
      { name: "InGujarati", bmp: "઀-૿" },
      { name: "InGunjala_Gondi", astral: "\ud807[\udd60-\uddaf]" },
      { name: "InGurmukhi", bmp: "਀-੿" },
      { name: "InHalfwidth_And_Fullwidth_Forms", bmp: "＀-￯" },
      { name: "InHangul_Compatibility_Jamo", bmp: "㄰-㆏" },
      { name: "InHangul_Jamo", bmp: "ᄀ-ᇿ" },
      { name: "InHangul_Jamo_Extended_A", bmp: "ꥠ-꥿" },
      { name: "InHangul_Jamo_Extended_B", bmp: "ힰ-퟿" },
      { name: "InHangul_Syllables", bmp: "가-힯" },
      { name: "InHanifi_Rohingya", astral: "\ud803[\udd00-\udd3f]" },
      { name: "InHanunoo", bmp: "ᜠ-᜿" },
      { name: "InHatran", astral: "\ud802[\udce0-\udcff]" },
      { name: "InHebrew", bmp: "֐-׿" },
      { name: "InHigh_Private_Use_Surrogates", bmp: "\udb80-\udbff" },
      { name: "InHigh_Surrogates", bmp: "\ud800-\udb7f" },
      { name: "InHiragana", bmp: "぀-ゟ" },
      { name: "InIPA_Extensions", bmp: "ɐ-ʯ" },
      { name: "InIdeographic_Description_Characters", bmp: "⿰-⿿" },
      {
        name: "InIdeographic_Symbols_And_Punctuation",
        astral: "\ud81b[\udfe0-\udfff]"
      },
      { name: "InImperial_Aramaic", astral: "\ud802[\udc40-\udc5f]" },
      { name: "InIndic_Siyaq_Numbers", astral: "\ud83b[\udc70-\udcbf]" },
      { name: "InInscriptional_Pahlavi", astral: "\ud802[\udf60-\udf7f]" },
      { name: "InInscriptional_Parthian", astral: "\ud802[\udf40-\udf5f]" },
      { name: "InJavanese", bmp: "ꦀ-꧟" },
      { name: "InKaithi", astral: "\ud804[\udc80-\udccf]" },
      { name: "InKana_Extended_A", astral: "\ud82c[\udd00-\udd2f]" },
      { name: "InKana_Supplement", astral: "\ud82c[\udc00-\udcff]" },
      { name: "InKanbun", bmp: "㆐-㆟" },
      { name: "InKangxi_Radicals", bmp: "⼀-⿟" },
      { name: "InKannada", bmp: "ಀ-೿" },
      { name: "InKatakana", bmp: "゠-ヿ" },
      { name: "InKatakana_Phonetic_Extensions", bmp: "ㇰ-ㇿ" },
      { name: "InKayah_Li", bmp: "꤀-꤯" },
      { name: "InKharoshthi", astral: "\ud802[\ude00-\ude5f]" },
      { name: "InKhmer", bmp: "ក-៿" },
      { name: "InKhmer_Symbols", bmp: "᧠-᧿" },
      { name: "InKhojki", astral: "\ud804[\ude00-\ude4f]" },
      { name: "InKhudawadi", astral: "\ud804[\udeb0-\udeff]" },
      { name: "InLao", bmp: "຀-໿" },
      { name: "InLatin_1_Supplement", bmp: "-ÿ" },
      { name: "InLatin_Extended_A", bmp: "Ā-ſ" },
      { name: "InLatin_Extended_Additional", bmp: "Ḁ-ỿ" },
      { name: "InLatin_Extended_B", bmp: "ƀ-ɏ" },
      { name: "InLatin_Extended_C", bmp: "Ⱡ-Ɀ" },
      { name: "InLatin_Extended_D", bmp: "꜠-ꟿ" },
      { name: "InLatin_Extended_E", bmp: "ꬰ-꭯" },
      { name: "InLepcha", bmp: "ᰀ-ᱏ" },
      { name: "InLetterlike_Symbols", bmp: "℀-⅏" },
      { name: "InLimbu", bmp: "ᤀ-᥏" },
      { name: "InLinear_A", astral: "\ud801[\ude00-\udf7f]" },
      { name: "InLinear_B_Ideograms", astral: "\ud800[\udc80-\udcff]" },
      { name: "InLinear_B_Syllabary", astral: "\ud800[\udc00-\udc7f]" },
      { name: "InLisu", bmp: "ꓐ-꓿" },
      { name: "InLow_Surrogates", bmp: "\udc00-\udfff" },
      { name: "InLycian", astral: "\ud800[\ude80-\ude9f]" },
      { name: "InLydian", astral: "\ud802[\udd20-\udd3f]" },
      { name: "InMahajani", astral: "\ud804[\udd50-\udd7f]" },
      { name: "InMahjong_Tiles", astral: "\ud83c[\udc00-\udc2f]" },
      { name: "InMakasar", astral: "\ud807[\udee0-\udeff]" },
      { name: "InMalayalam", bmp: "ഀ-ൿ" },
      { name: "InMandaic", bmp: "ࡀ-࡟" },
      { name: "InManichaean", astral: "\ud802[\udec0-\udeff]" },
      { name: "InMarchen", astral: "\ud807[\udc70-\udcbf]" },
      { name: "InMasaram_Gondi", astral: "\ud807[\udd00-\udd5f]" },
      {
        name: "InMathematical_Alphanumeric_Symbols",
        astral: "\ud835[\udc00-\udfff]"
      },
      { name: "InMathematical_Operators", bmp: "∀-⋿" },
      { name: "InMayan_Numerals", astral: "\ud834[\udee0-\udeff]" },
      { name: "InMedefaidrin", astral: "\ud81b[\ude40-\ude9f]" },
      { name: "InMeetei_Mayek", bmp: "ꯀ-꯿" },
      { name: "InMeetei_Mayek_Extensions", bmp: "ꫠ-꫿" },
      { name: "InMende_Kikakui", astral: "\ud83a[\udc00-\udcdf]" },
      { name: "InMeroitic_Cursive", astral: "\ud802[\udda0-\uddff]" },
      { name: "InMeroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
      { name: "InMiao", astral: "\ud81b[\udf00-\udf9f]" },
      { name: "InMiscellaneous_Mathematical_Symbols_A", bmp: "⟀-⟯" },
      { name: "InMiscellaneous_Mathematical_Symbols_B", bmp: "⦀-⧿" },
      { name: "InMiscellaneous_Symbols", bmp: "☀-⛿" },
      { name: "InMiscellaneous_Symbols_And_Arrows", bmp: "⬀-⯿" },
      {
        name: "InMiscellaneous_Symbols_And_Pictographs",
        astral: "\ud83c[\udf00-\udfff]|\ud83d[\udc00-\uddff]"
      },
      { name: "InMiscellaneous_Technical", bmp: "⌀-⏿" },
      { name: "InModi", astral: "\ud805[\ude00-\ude5f]" },
      { name: "InModifier_Tone_Letters", bmp: "꜀-ꜟ" },
      { name: "InMongolian", bmp: "᠀-᢯" },
      { name: "InMongolian_Supplement", astral: "\ud805[\ude60-\ude7f]" },
      { name: "InMro", astral: "\ud81a[\ude40-\ude6f]" },
      { name: "InMultani", astral: "\ud804[\ude80-\udeaf]" },
      { name: "InMusical_Symbols", astral: "\ud834[\udd00-\uddff]" },
      { name: "InMyanmar", bmp: "က-႟" },
      { name: "InMyanmar_Extended_A", bmp: "ꩠ-ꩿ" },
      { name: "InMyanmar_Extended_B", bmp: "ꧠ-꧿" },
      { name: "InNKo", bmp: "߀-߿" },
      { name: "InNabataean", astral: "\ud802[\udc80-\udcaf]" },
      { name: "InNew_Tai_Lue", bmp: "ᦀ-᧟" },
      { name: "InNewa", astral: "\ud805[\udc00-\udc7f]" },
      { name: "InNumber_Forms", bmp: "⅐-↏" },
      { name: "InNushu", astral: "\ud82c[\udd70-\udeff]" },
      { name: "InOgham", bmp: " -᚟" },
      { name: "InOl_Chiki", bmp: "᱐-᱿" },
      { name: "InOld_Hungarian", astral: "\ud803[\udc80-\udcff]" },
      { name: "InOld_Italic", astral: "\ud800[\udf00-\udf2f]" },
      { name: "InOld_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
      { name: "InOld_Permic", astral: "\ud800[\udf50-\udf7f]" },
      { name: "InOld_Persian", astral: "\ud800[\udfa0-\udfdf]" },
      { name: "InOld_Sogdian", astral: "\ud803[\udf00-\udf2f]" },
      { name: "InOld_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
      { name: "InOld_Turkic", astral: "\ud803[\udc00-\udc4f]" },
      { name: "InOptical_Character_Recognition", bmp: "⑀-⑟" },
      { name: "InOriya", bmp: "଀-୿" },
      { name: "InOrnamental_Dingbats", astral: "\ud83d[\ude50-\ude7f]" },
      { name: "InOsage", astral: "\ud801[\udcb0-\udcff]" },
      { name: "InOsmanya", astral: "\ud801[\udc80-\udcaf]" },
      { name: "InPahawh_Hmong", astral: "\ud81a[\udf00-\udf8f]" },
      { name: "InPalmyrene", astral: "\ud802[\udc60-\udc7f]" },
      { name: "InPau_Cin_Hau", astral: "\ud806[\udec0-\udeff]" },
      { name: "InPhags_Pa", bmp: "ꡀ-꡿" },
      { name: "InPhaistos_Disc", astral: "\ud800[\uddd0-\uddff]" },
      { name: "InPhoenician", astral: "\ud802[\udd00-\udd1f]" },
      { name: "InPhonetic_Extensions", bmp: "ᴀ-ᵿ" },
      { name: "InPhonetic_Extensions_Supplement", bmp: "ᶀ-ᶿ" },
      { name: "InPlaying_Cards", astral: "\ud83c[\udca0-\udcff]" },
      { name: "InPrivate_Use_Area", bmp: "-" },
      { name: "InPsalter_Pahlavi", astral: "\ud802[\udf80-\udfaf]" },
      { name: "InRejang", bmp: "ꤰ-꥟" },
      { name: "InRumi_Numeral_Symbols", astral: "\ud803[\ude60-\ude7f]" },
      { name: "InRunic", bmp: "ᚠ-᛿" },
      { name: "InSamaritan", bmp: "ࠀ-࠿" },
      { name: "InSaurashtra", bmp: "ꢀ-꣟" },
      { name: "InSharada", astral: "\ud804[\udd80-\udddf]" },
      { name: "InShavian", astral: "\ud801[\udc50-\udc7f]" },
      { name: "InShorthand_Format_Controls", astral: "\ud82f[\udca0-\udcaf]" },
      { name: "InSiddham", astral: "\ud805[\udd80-\uddff]" },
      { name: "InSinhala", bmp: "඀-෿" },
      { name: "InSinhala_Archaic_Numbers", astral: "\ud804[\udde0-\uddff]" },
      { name: "InSmall_Form_Variants", bmp: "﹐-﹯" },
      { name: "InSogdian", astral: "\ud803[\udf30-\udf6f]" },
      { name: "InSora_Sompeng", astral: "\ud804[\udcd0-\udcff]" },
      { name: "InSoyombo", astral: "\ud806[\ude50-\udeaf]" },
      { name: "InSpacing_Modifier_Letters", bmp: "ʰ-˿" },
      { name: "InSpecials", bmp: "￰-￿" },
      { name: "InSundanese", bmp: "ᮀ-ᮿ" },
      { name: "InSundanese_Supplement", bmp: "᳀-᳏" },
      { name: "InSuperscripts_And_Subscripts", bmp: "⁰-₟" },
      { name: "InSupplemental_Arrows_A", bmp: "⟰-⟿" },
      { name: "InSupplemental_Arrows_B", bmp: "⤀-⥿" },
      { name: "InSupplemental_Arrows_C", astral: "\ud83e[\udc00-\udcff]" },
      { name: "InSupplemental_Mathematical_Operators", bmp: "⨀-⫿" },
      { name: "InSupplemental_Punctuation", bmp: "⸀-⹿" },
      {
        name: "InSupplemental_Symbols_And_Pictographs",
        astral: "\ud83e[\udd00-\uddff]"
      },
      {
        name: "InSupplementary_Private_Use_Area_A",
        astral: "[\udb80-\udbbf][\udc00-\udfff]"
      },
      {
        name: "InSupplementary_Private_Use_Area_B",
        astral: "[\udbc0-\udbff][\udc00-\udfff]"
      },
      { name: "InSutton_SignWriting", astral: "\ud836[\udc00-\udeaf]" },
      { name: "InSyloti_Nagri", bmp: "ꠀ-꠯" },
      { name: "InSyriac", bmp: "܀-ݏ" },
      { name: "InSyriac_Supplement", bmp: "ࡠ-࡯" },
      { name: "InTagalog", bmp: "ᜀ-ᜟ" },
      { name: "InTagbanwa", bmp: "ᝠ-᝿" },
      { name: "InTags", astral: "\udb40[\udc00-\udc7f]" },
      { name: "InTai_Le", bmp: "ᥐ-᥿" },
      { name: "InTai_Tham", bmp: "ᨠ-᪯" },
      { name: "InTai_Viet", bmp: "ꪀ-꫟" },
      { name: "InTai_Xuan_Jing_Symbols", astral: "\ud834[\udf00-\udf5f]" },
      { name: "InTakri", astral: "\ud805[\ude80-\udecf]" },
      { name: "InTamil", bmp: "஀-௿" },
      { name: "InTangut", astral: "[\ud81c-\ud821][\udc00-\udfff]" },
      { name: "InTangut_Components", astral: "\ud822[\udc00-\udeff]" },
      { name: "InTelugu", bmp: "ఀ-౿" },
      { name: "InThaana", bmp: "ހ-޿" },
      { name: "InThai", bmp: "฀-๿" },
      { name: "InTibetan", bmp: "ༀ-࿿" },
      { name: "InTifinagh", bmp: "ⴰ-⵿" },
      { name: "InTirhuta", astral: "\ud805[\udc80-\udcdf]" },
      { name: "InTransport_And_Map_Symbols", astral: "\ud83d[\ude80-\udeff]" },
      { name: "InUgaritic", astral: "\ud800[\udf80-\udf9f]" },
      { name: "InUnified_Canadian_Aboriginal_Syllabics", bmp: "᐀-ᙿ" },
      { name: "InUnified_Canadian_Aboriginal_Syllabics_Extended", bmp: "ᢰ-᣿" },
      { name: "InVai", bmp: "ꔀ-꘿" },
      { name: "InVariation_Selectors", bmp: "︀-️" },
      {
        name: "InVariation_Selectors_Supplement",
        astral: "\udb40[\udd00-\uddef]"
      },
      { name: "InVedic_Extensions", bmp: "᳐-᳿" },
      { name: "InVertical_Forms", bmp: "︐-︟" },
      { name: "InWarang_Citi", astral: "\ud806[\udca0-\udcff]" },
      { name: "InYi_Radicals", bmp: "꒐-꓏" },
      { name: "InYi_Syllables", bmp: "ꀀ-꒏" },
      { name: "InYijing_Hexagram_Symbols", bmp: "䷀-䷿" },
      { name: "InZanabazar_Square", astral: "\ud806[\ude00-\ude4f]" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(11);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(315));
    /*!
     * XRegExp Unicode Categories 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Categories"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      {
        name: "C",
        alias: "Other",
        isBmpLast: !0,
        bmp:
          "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜؝۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",
        astral:
          "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcbd\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca0-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]"
      },
      { name: "Cc", alias: "Control", bmp: "\0--" },
      {
        name: "Cf",
        alias: "Format",
        bmp: "­؀-؅؜۝܏࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\ufeff￹-￻",
        astral:
          "\ud804[\udcbd\udccd]|\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|\udb40[\udc01\udc20-\udc7f]"
      },
      {
        name: "Cn",
        alias: "Unassigned",
        bmp:
          "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿؝܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",
        astral:
          "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcc2-\udccc\udcce\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca4-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|[\udbbf\udbff][\udffe\udfff]"
      },
      {
        name: "Co",
        alias: "Private_Use",
        bmp: "-",
        astral:
          "[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]"
      },
      { name: "Cs", alias: "Surrogate", bmp: "\ud800-\udfff" },
      {
        name: "L",
        alias: "Letter",
        bmp:
          "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udd00-\udd43]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "LC",
        alias: "Cased_Letter",
        bmp:
          "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ",
        astral:
          "\ud801[\udc00-\udc4f\udcb0-\udcd3\udcd8-\udcfb]|\ud803[\udc80-\udcb2\udcc0-\udcf2]|\ud806[\udca0-\udcdf]|\ud81b[\ude40-\ude7f]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udd00-\udd43]"
      },
      {
        name: "Ll",
        alias: "Lowercase_Letter",
        bmp:
          "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
        astral:
          "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"
      },
      {
        name: "Lm",
        alias: "Modifier_Letter",
        bmp:
          "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟｰﾞﾟ",
        astral: "\ud81a[\udf40-\udf43]|\ud81b[\udf93-\udf9f\udfe0\udfe1]"
      },
      {
        name: "Lo",
        alias: "Other_Letter",
        bmp:
          "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳱᳵᳶℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc50-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud83a[\udc00-\udcc4]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" },
      {
        name: "Lu",
        alias: "Uppercase_Letter",
        bmp:
          "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
        astral:
          "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]"
      },
      {
        name: "M",
        alias: "Mark",
        bmp:
          "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",
        astral:
          "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc00-\udc02\udc38-\udc46\udc7f-\udc82\udcb0-\udcba\udd00-\udd02\udd27-\udd34\udd45\udd46\udd73\udd80-\udd82\uddb3-\uddc0\uddc9-\uddcc\ude2c-\ude37\ude3e\udedf-\udeea\udf00-\udf03\udf3b\udf3c\udf3e-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc35-\udc46\udc5e\udcb0-\udcc3\uddaf-\uddb5\uddb8-\uddc0\udddc\udddd\ude30-\ude40\udeab-\udeb7\udf1d-\udf2b]|\ud806[\udc2c-\udc3a\ude01-\ude0a\ude33-\ude39\ude3b-\ude3e\ude47\ude51-\ude5b\ude8a-\ude99]|\ud807[\udc2f-\udc36\udc38-\udc3f\udc92-\udca7\udca9-\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd8a-\udd8e\udd90\udd91\udd93-\udd97\udef3-\udef6]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf51-\udf7e\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"
      },
      {
        name: "Mc",
        alias: "Spacing_Mark",
        bmp:
          "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡ᳲᳳ᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦽ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",
        astral:
          "\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd45\udd46\udd82\uddb3-\uddb5\uddbf\uddc0\ude2c-\ude2e\ude32\ude33\ude35\udee0-\udee2\udf02\udf03\udf3e\udf3f\udf41-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63]|\ud805[\udc35-\udc37\udc40\udc41\udc45\udcb0-\udcb2\udcb9\udcbb-\udcbe\udcc1\uddaf-\uddb1\uddb8-\uddbb\uddbe\ude30-\ude32\ude3b\ude3c\ude3e\udeac\udeae\udeaf\udeb6\udf20\udf21\udf26]|\ud806[\udc2c-\udc2e\udc38\ude39\ude57\ude58\ude97]|\ud807[\udc2f\udc3e\udca9\udcb1\udcb4\udd8a-\udd8e\udd93\udd94\udd96\udef5\udef6]|\ud81b[\udf51-\udf7e]|\ud834[\udd65\udd66\udd6d-\udd72]"
      },
      { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" },
      {
        name: "Mn",
        alias: "Nonspacing_Mark",
        bmp:
          "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ఀఄా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",
        astral:
          "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc01\udc38-\udc46\udc7f-\udc81\udcb3-\udcb6\udcb9\udcba\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd73\udd80\udd81\uddb6-\uddbe\uddc9-\uddcc\ude2f-\ude31\ude34\ude36\ude37\ude3e\udedf\udee3-\udeea\udf00\udf01\udf3b\udf3c\udf40\udf66-\udf6c\udf70-\udf74]|\ud805[\udc38-\udc3f\udc42-\udc44\udc46\udc5e\udcb3-\udcb8\udcba\udcbf\udcc0\udcc2\udcc3\uddb2-\uddb5\uddbc\uddbd\uddbf\uddc0\udddc\udddd\ude33-\ude3a\ude3d\ude3f\ude40\udeab\udead\udeb0-\udeb5\udeb7\udf1d-\udf1f\udf22-\udf25\udf27-\udf2b]|\ud806[\udc2f-\udc37\udc39\udc3a\ude01-\ude0a\ude33-\ude38\ude3b-\ude3e\ude47\ude51-\ude56\ude59-\ude5b\ude8a-\ude96\ude98\ude99]|\ud807[\udc30-\udc36\udc38-\udc3d\udc3f\udc92-\udca7\udcaa-\udcb0\udcb2\udcb3\udcb5\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd90\udd91\udd95\udd97\udef3\udef4]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"
      },
      {
        name: "N",
        alias: "Number",
        bmp:
          "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
        astral:
          "\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud801[\udca0-\udca9]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\udd30-\udd39\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b]|\ud806[\udce0-\udcf2]|\ud807[\udc50-\udc6c\udd50-\udd59\udda0-\udda9]|\ud809[\udc00-\udc6e]|\ud81a[\ude60-\ude69\udf50-\udf59\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud835[\udfce-\udfff]|\ud83a[\udcc7-\udccf\udd50-\udd59]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]"
      },
      {
        name: "Nd",
        alias: "Decimal_Number",
        bmp:
          "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
        astral:
          "\ud801[\udca0-\udca9]|\ud803[\udd30-\udd39]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf39]|\ud806[\udce0-\udce9]|\ud807[\udc50-\udc59\udd50-\udd59\udda0-\udda9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]|\ud83a[\udd50-\udd59]"
      },
      {
        name: "Nl",
        alias: "Letter_Number",
        bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",
        astral:
          "\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]|\ud809[\udc00-\udc6e]"
      },
      {
        name: "No",
        alias: "Other_Number",
        bmp:
          "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",
        astral:
          "\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc65\udde1-\uddf4]|\ud805[\udf3a\udf3b]|\ud806[\udcea-\udcf2]|\ud807[\udc5a-\udc6c]|\ud81a[\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud83a[\udcc7-\udccf]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]"
      },
      {
        name: "P",
        alias: "Punctuation",
        bmp:
          "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹎、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",
        astral:
          "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"
      },
      { name: "Pc", alias: "Connector_Punctuation", bmp: "_‿⁀⁔︳︴﹍-﹏＿" },
      {
        name: "Pd",
        alias: "Dash_Punctuation",
        bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－"
      },
      {
        name: "Pe",
        alias: "Close_Punctuation",
        bmp:
          "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣"
      },
      { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" },
      { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" },
      {
        name: "Po",
        alias: "Other_Punctuation",
        bmp:
          "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙭᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹎、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",
        astral:
          "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"
      },
      {
        name: "Ps",
        alias: "Open_Punctuation",
        bmp:
          "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢"
      },
      {
        name: "S",
        alias: "Symbol",
        bmp:
          "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₿℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",
        astral:
          "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud83b[\udcac\udcb0\udef0\udef1]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]"
      },
      {
        name: "Sc",
        alias: "Currency_Symbol",
        bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-₿꠸﷼﹩＄￠￡￥￦",
        astral: "𞲰"
      },
      {
        name: "Sk",
        alias: "Modifier_Symbol",
        bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛﮲-﯁＾｀￣",
        astral: "\ud83c[\udffb-\udfff]"
      },
      {
        name: "Sm",
        alias: "Math_Symbol",
        bmp:
          "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",
        astral:
          "\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83b[\udef0\udef1]"
      },
      {
        name: "So",
        alias: "Other_Symbol",
        bmp:
          "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﷽￤￨￭￮￼�",
        astral:
          "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|𞲬|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udffa]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]"
      },
      { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" },
      { name: "Zl", alias: "Line_Separator", bmp: "\u2028" },
      { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" },
      { name: "Zs", alias: "Space_Separator", bmp: "    -   　" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(11);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(317));
    /*!
     * XRegExp Unicode Properties 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2012-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Properties"
        );
      var u = t.default;
      u.push({ name: "Assigned", inverseOf: "Cn" }), d.addUnicodeData(u);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      { name: "ASCII", bmp: "\0-" },
      {
        name: "Alphabetic",
        bmp:
          "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഀ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽꣾꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc00-\udc45\udc82-\udcb8\udcd0-\udce8\udd00-\udd32\udd44-\udd46\udd50-\udd72\udd76\udd80-\uddbf\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude34\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udee8\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d-\udf44\udf47\udf48\udf4b\udf4c\udf50\udf57\udf5d-\udf63]|\ud805[\udc00-\udc41\udc43-\udc45\udc47-\udc4a\udc80-\udcc1\udcc4\udcc5\udcc7\udd80-\uddb5\uddb8-\uddbe\uddd8-\udddd\ude00-\ude3e\ude40\ude44\ude80-\udeb5\udf00-\udf1a\udf1d-\udf2a]|\ud806[\udc00-\udc38\udca0-\udcdf\udcff\ude00-\ude32\ude35-\ude3e\ude50-\ude83\ude86-\ude97\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc3e\udc40\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd41\udd43\udd46\udd47\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd96\udd98\udee0-\udef6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50-\udf7e\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9e]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd47]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "Any",
        isBmpLast: !0,
        bmp: "\0-￿",
        astral: "[\ud800-\udbff][\udc00-\udfff]"
      },
      {
        name: "Default_Ignorable_Code_Point",
        bmp: "­͏؜ᅟᅠ឴឵᠋-᠎​-‏‪-‮⁠-⁯ㅤ︀-️\ufeffﾠ￰-￸",
        astral:
          "\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|[\udb40-\udb43][\udc00-\udfff]"
      },
      {
        name: "Lowercase",
        bmp:
          "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟸ-ꟺꬰ-ꭚꭜ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
        astral:
          "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"
      },
      {
        name: "Noncharacter_Code_Point",
        bmp: "﷐-﷯￾￿",
        astral:
          "[\ud83f\ud87f\ud8bf\ud8ff\ud93f\ud97f\ud9bf\ud9ff\uda3f\uda7f\udabf\udaff\udb3f\udb7f\udbbf\udbff][\udffe\udfff]"
      },
      {
        name: "Uppercase",
        bmp:
          "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
        astral:
          "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]"
      },
      { name: "White_Space", bmp: "\t-\r    - \u2028\u2029  　" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(11);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(319));
    /*!
     * XRegExp Unicode Scripts 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Scripts"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      {
        name: "Adlam",
        astral: "\ud83a[\udd00-\udd4a\udd50-\udd59\udd5e\udd5f]"
      },
      {
        name: "Ahom",
        astral: "\ud805[\udf00-\udf1a\udf1d-\udf2b\udf30-\udf3f]"
      },
      { name: "Anatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude46]" },
      {
        name: "Arabic",
        bmp: "؀-؄؆-؋؍-ؚ؜؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࢠ-ࢴࢶ-ࢽ࣓-ࣣ࣡-ࣿﭐ-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷽ﹰ-ﹴﹶ-ﻼ",
        astral:
          "\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]"
      },
      { name: "Armenian", bmp: "Ա-Ֆՙ-ֈ֊֍-֏ﬓ-ﬗ" },
      { name: "Avestan", astral: "\ud802[\udf00-\udf35\udf39-\udf3f]" },
      { name: "Balinese", bmp: "ᬀ-ᭋ᭐-᭼" },
      { name: "Bamum", bmp: "ꚠ-꛷", astral: "\ud81a[\udc00-\ude38]" },
      { name: "Bassa_Vah", astral: "\ud81a[\uded0-\udeed\udef0-\udef5]" },
      { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" },
      { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" },
      {
        name: "Bhaiksuki",
        astral: "\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc45\udc50-\udc6c]"
      },
      { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆺ" },
      { name: "Brahmi", astral: "\ud804[\udc00-\udc4d\udc52-\udc6f\udc7f]" },
      { name: "Braille", bmp: "⠀-⣿" },
      { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" },
      { name: "Buhid", bmp: "ᝀ-ᝓ" },
      { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ" },
      { name: "Carian", astral: "\ud800[\udea0-\uded0]" },
      { name: "Caucasian_Albanian", astral: "\ud801[\udd30-\udd63\udd6f]" },
      { name: "Chakma", astral: "\ud804[\udd00-\udd34\udd36-\udd46]" },
      { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" },
      { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" },
      {
        name: "Common",
        bmp:
          "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·։؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-₿℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮘-⯈⯊-⯾⸀-⹎⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\ufeff！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",
        astral:
          "\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9b\uddd0-\uddfc\udee1-\udefb]|\ud82f[\udca0-\udca3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\udde8\udee0-\udef3\udf00-\udf56\udf60-\udf78]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\ud83b[\udc71-\udcb4]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd00-\udd0c\udd10-\udd6b\udd70-\uddac\udde6-\uddff\ude01\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]|\udb40[\udc01\udc20-\udc7f]"
      },
      { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" },
      {
        name: "Cuneiform",
        astral:
          "\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc70-\udc74\udc80-\udd43]"
      },
      {
        name: "Cypriot",
        astral:
          "\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]"
      },
      { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" },
      { name: "Deseret", astral: "\ud801[\udc00-\udc4f]" },
      { name: "Devanagari", bmp: "ऀ-ॐ॓-ॣ०-ॿ꣠-ꣿ" },
      { name: "Dogra", astral: "\ud806[\udc00-\udc3b]" },
      {
        name: "Duployan",
        astral:
          "\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9c-\udc9f]"
      },
      {
        name: "Egyptian_Hieroglyphs",
        astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]"
      },
      { name: "Elbasan", astral: "\ud801[\udd00-\udd27]" },
      {
        name: "Ethiopic",
        bmp:
          "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ"
      },
      { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" },
      {
        name: "Glagolitic",
        bmp: "Ⰰ-Ⱞⰰ-ⱞ",
        astral:
          "\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]"
      },
      { name: "Gothic", astral: "\ud800[\udf30-\udf4a]" },
      {
        name: "Grantha",
        astral:
          "\ud804[\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]"
      },
      {
        name: "Greek",
        bmp:
          "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",
        astral: "\ud800[\udd40-\udd8e\udda0]|\ud834[\ude00-\ude45]"
      },
      { name: "Gujarati", bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿" },
      {
        name: "Gunjala_Gondi",
        astral:
          "\ud807[\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd98\udda0-\udda9]"
      },
      { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" },
      {
        name: "Han",
        bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶵一-鿯豈-舘並-龎",
        astral:
          "[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "Hangul",
        bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
      },
      { name: "Hanifi_Rohingya", astral: "\ud803[\udd00-\udd27\udd30-\udd39]" },
      { name: "Hanunoo", bmp: "ᜠ-᜴" },
      {
        name: "Hatran",
        astral: "\ud802[\udce0-\udcf2\udcf4\udcf5\udcfb-\udcff]"
      },
      { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" },
      {
        name: "Hiragana",
        bmp: "ぁ-ゖゝ-ゟ",
        astral: "\ud82c[\udc01-\udd1e]|🈀"
      },
      {
        name: "Imperial_Aramaic",
        astral: "\ud802[\udc40-\udc55\udc57-\udc5f]"
      },
      {
        name: "Inherited",
        bmp: "̀-ًͯ҅҆-ٰٕ॒॑᪰-᪾᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",
        astral:
          "\ud800[\uddfd\udee0]|𑌻|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\udb40[\udd00-\uddef]"
      },
      {
        name: "Inscriptional_Pahlavi",
        astral: "\ud802[\udf60-\udf72\udf78-\udf7f]"
      },
      {
        name: "Inscriptional_Parthian",
        astral: "\ud802[\udf40-\udf55\udf58-\udf5f]"
      },
      { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" },
      { name: "Kaithi", astral: "\ud804[\udc80-\udcc1\udccd]" },
      { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲ" },
      {
        name: "Katakana",
        bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",
        astral: "𛀀"
      },
      { name: "Kayah_Li", bmp: "꤀-꤭꤯" },
      {
        name: "Kharoshthi",
        astral:
          "\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f-\ude48\ude50-\ude58]"
      },
      { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" },
      { name: "Khojki", astral: "\ud804[\ude00-\ude11\ude13-\ude3e]" },
      { name: "Khudawadi", astral: "\ud804[\udeb0-\udeea\udef0-\udef9]" },
      { name: "Lao", bmp: "ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" },
      {
        name: "Latin",
        bmp:
          "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞹꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ"
      },
      { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" },
      { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" },
      {
        name: "Linear_A",
        astral: "\ud801[\ude00-\udf36\udf40-\udf55\udf60-\udf67]"
      },
      {
        name: "Linear_B",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]"
      },
      { name: "Lisu", bmp: "ꓐ-꓿" },
      { name: "Lycian", astral: "\ud800[\ude80-\ude9c]" },
      { name: "Lydian", astral: "\ud802[\udd20-\udd39\udd3f]" },
      { name: "Mahajani", astral: "\ud804[\udd50-\udd76]" },
      { name: "Makasar", astral: "\ud807[\udee0-\udef8]" },
      { name: "Malayalam", bmp: "ഀ-ഃഅ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" },
      { name: "Mandaic", bmp: "ࡀ-࡛࡞" },
      { name: "Manichaean", astral: "\ud802[\udec0-\udee6\udeeb-\udef6]" },
      {
        name: "Marchen",
        astral: "\ud807[\udc70-\udc8f\udc92-\udca7\udca9-\udcb6]"
      },
      {
        name: "Masaram_Gondi",
        astral:
          "\ud807[\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd47\udd50-\udd59]"
      },
      { name: "Medefaidrin", astral: "\ud81b[\ude40-\ude9a]" },
      { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" },
      { name: "Mende_Kikakui", astral: "\ud83a[\udc00-\udcc4\udcc7-\udcd6]" },
      {
        name: "Meroitic_Cursive",
        astral: "\ud802[\udda0-\uddb7\uddbc-\uddcf\uddd2-\uddff]"
      },
      { name: "Meroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
      {
        name: "Miao",
        astral: "\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]"
      },
      { name: "Modi", astral: "\ud805[\ude00-\ude44\ude50-\ude59]" },
      {
        name: "Mongolian",
        bmp: "᠀᠁᠄᠆-᠎᠐-᠙ᠠ-ᡸᢀ-ᢪ",
        astral: "\ud805[\ude60-\ude6c]"
      },
      { name: "Mro", astral: "\ud81a[\ude40-\ude5e\ude60-\ude69\ude6e\ude6f]" },
      {
        name: "Multani",
        astral:
          "\ud804[\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea9]"
      },
      { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" },
      { name: "Nabataean", astral: "\ud802[\udc80-\udc9e\udca7-\udcaf]" },
      { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" },
      { name: "Newa", astral: "\ud805[\udc00-\udc59\udc5b\udc5d\udc5e]" },
      { name: "Nko", bmp: "߀-ߺ߽-߿" },
      { name: "Nushu", astral: "𖿡|\ud82c[\udd70-\udefb]" },
      { name: "Ogham", bmp: " -᚜" },
      { name: "Ol_Chiki", bmp: "᱐-᱿" },
      {
        name: "Old_Hungarian",
        astral: "\ud803[\udc80-\udcb2\udcc0-\udcf2\udcfa-\udcff]"
      },
      { name: "Old_Italic", astral: "\ud800[\udf00-\udf23\udf2d-\udf2f]" },
      { name: "Old_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
      { name: "Old_Permic", astral: "\ud800[\udf50-\udf7a]" },
      { name: "Old_Persian", astral: "\ud800[\udfa0-\udfc3\udfc8-\udfd5]" },
      { name: "Old_Sogdian", astral: "\ud803[\udf00-\udf27]" },
      { name: "Old_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
      { name: "Old_Turkic", astral: "\ud803[\udc00-\udc48]" },
      { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୷" },
      { name: "Osage", astral: "\ud801[\udcb0-\udcd3\udcd8-\udcfb]" },
      { name: "Osmanya", astral: "\ud801[\udc80-\udc9d\udca0-\udca9]" },
      {
        name: "Pahawh_Hmong",
        astral:
          "\ud81a[\udf00-\udf45\udf50-\udf59\udf5b-\udf61\udf63-\udf77\udf7d-\udf8f]"
      },
      { name: "Palmyrene", astral: "\ud802[\udc60-\udc7f]" },
      { name: "Pau_Cin_Hau", astral: "\ud806[\udec0-\udef8]" },
      { name: "Phags_Pa", bmp: "ꡀ-꡷" },
      { name: "Phoenician", astral: "\ud802[\udd00-\udd1b\udd1f]" },
      {
        name: "Psalter_Pahlavi",
        astral: "\ud802[\udf80-\udf91\udf99-\udf9c\udfa9-\udfaf]"
      },
      { name: "Rejang", bmp: "ꤰ-꥓꥟" },
      { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" },
      { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" },
      { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" },
      { name: "Sharada", astral: "\ud804[\udd80-\uddcd\uddd0-\udddf]" },
      { name: "Shavian", astral: "\ud801[\udc50-\udc7f]" },
      { name: "Siddham", astral: "\ud805[\udd80-\uddb5\uddb8-\udddd]" },
      {
        name: "SignWriting",
        astral: "\ud836[\udc00-\ude8b\ude9b-\ude9f\udea1-\udeaf]"
      },
      {
        name: "Sinhala",
        bmp: "ංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",
        astral: "\ud804[\udde1-\uddf4]"
      },
      { name: "Sogdian", astral: "\ud803[\udf30-\udf59]" },
      { name: "Sora_Sompeng", astral: "\ud804[\udcd0-\udce8\udcf0-\udcf9]" },
      { name: "Soyombo", astral: "\ud806[\ude50-\ude83\ude86-\udea2]" },
      { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" },
      { name: "Syloti_Nagri", bmp: "ꠀ-꠫" },
      { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" },
      { name: "Tagalog", bmp: "ᜀ-ᜌᜎ-᜔" },
      { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" },
      { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" },
      { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" },
      { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" },
      { name: "Takri", astral: "\ud805[\ude80-\udeb7\udec0-\udec9]" },
      { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺" },
      {
        name: "Tangut",
        astral:
          "𖿠|[\ud81c-\ud820][\udc00-\udfff]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]"
      },
      { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘ-ౚౠ-ౣ౦-౯౸-౿" },
      { name: "Thaana", bmp: "ހ-ޱ" },
      { name: "Thai", bmp: "ก-ฺเ-๛" },
      { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" },
      { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" },
      { name: "Tirhuta", astral: "\ud805[\udc80-\udcc7\udcd0-\udcd9]" },
      { name: "Ugaritic", astral: "\ud800[\udf80-\udf9d\udf9f]" },
      { name: "Vai", bmp: "ꔀ-ꘫ" },
      { name: "Warang_Citi", astral: "\ud806[\udca0-\udcf2\udcff]" },
      { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" },
      { name: "Zanabazar_Square", astral: "\ud806[\ude00-\ude47]" }
    ];
  },
  function(d, u, e) {
    const { Transform: n } = e(2),
      t = e(25),
      a = e(132),
      r = e(321);
    d.exports = {
      parse: ({ time: d, timezone: u }) => {
        const e = t(d, u);
        return new n({
          objectMode: !0,
          transform(d, u, n) {
            try {
              if (d.postpone)
                return (
                  this.push({ ...d, postpone: r(d.postpone.toLowerCase(), e) }),
                  n()
                );
            } catch (d) {
              return n(d);
            }
            return this.push(d), n();
          }
        });
      },
      stringify: ({ time: d, timezone: u }) =>
        new n({
          objectMode: !0,
          transform(e, n, t) {
            try {
              if (e.postpone) {
                const n = a(e.postpone, { time: d, timezone: u });
                return this.push({ ...e, postpone: `until ${n}` }), t();
              }
            } catch (d) {
              return t(d);
            }
            return this.push(e), t();
          }
        })
    };
  },
  function(d, u, e) {
    const n = e(322),
      t = "(?<hour>\\d{1,2})(:(?<minute>\\d{2}))?( ?(?<meridiem>am|pm))?",
      a = [
        n(`^until (${t})$`),
        n(`^until (?<day>today|tomorrow)( at ${t})?$`),
        n(`^until (?<day>\\d{4}-\\d{2}-\\d{2})( at ${t})?$`),
        n(
          `^until (next )?(?<nextWeekday>monday|tuesday|wednesday|thursday|friday|saturday|sunday)( at ${t})?$`
        ),
        n(`^until next (?<nextPeriod>\\w+)( at ${t})?$`),
        n(`^(?<inAmount>\\d+) ?(?<inPeriod>\\w+)( at ${t})?$`)
      ],
      r = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7
      },
      f = d => d.local().startOf("day"),
      c = (d, u) => {
        const e = "pm" === u ? parseInt(d, 10) + 12 : parseInt(d, 10);
        if (e < 0 || e > 23) throw new Error("Invalid hour");
        return e;
      },
      i = (d, u, e, n) => {
        let t = d;
        return (t = ((d, u) => (u ? d.set({ minute: u }) : d))(
          (t = ((d, u, e) => (u ? d.set({ hour: c(u, e) }) : d))(t, u, n)),
          e
        ));
      },
      o = (
        {
          day: d,
          nextPeriod: u,
          nextWeekday: e,
          inAmount: n,
          inPeriod: t,
          hour: a
        },
        c
      ) =>
        d
          ? ((d, u) => {
              const e = f(u);
              return "today" === d
                ? e
                : "tomorrow" === d
                ? e.plus({ days: 1 })
                : u.fromISO(d);
            })(d, c)
          : e
          ? ((d, u) => {
              const e = f(u),
                n = r[d];
              return n
                ? e.weekday < n
                  ? e.plus({ days: n - e.weekday })
                  : e.plus({ days: 7 - e.weekday + n })
                : e;
            })(e, c)
          : u
          ? ((d, u) => {
              const e = f(u);
              return (
                {
                  week: e.plus({ days: 7 }),
                  month: e.plus({ months: 1 }),
                  year: e.plus({ years: 1 })
                }[d] || e
              );
            })(u, c)
          : n && t
          ? ((d, u, e, n) => {
              const t = parseInt(d, 10);
              if (Number.isNaN(t))
                throw new Error('Invalid amount for "postpone" clause');
              if (["minute", "minutes", "hour", "hours"].includes(u)) {
                if (e)
                  throw new Error(
                    `Cannot specify a time with "postpone <n> ${u}"`
                  );
                return n.local().plus({ [u]: t });
              }
              if (["day", "days", "week", "weeks", "year", "years"].includes(u))
                return n
                  .local()
                  .startOf("day")
                  .plus({ [u]: t });
              throw new Error('Unknown <period> for "postpone"');
            })(n, t, !!a, c)
          : f(c);
    d.exports = (d, u) => {
      const e = a.find(u => n.exec(d, u));
      if (!e) throw new Error(`Invalid @postpone tag: ${d}`);
      try {
        return ((d, u, e) => {
          const t = n.exec(d, u),
            { hour: a, minute: r, meridiem: f } = t,
            c = i(o(t, e), a, r, f);
          if (!c.isValid)
            throw new Error(`Invalid date: ${d} - ${c.invalidReason}`);
          return c.toISO();
        })(d, e, u);
      } catch (u) {
        throw new Error(`Invalid @postpone tag: ${d} - ${u.message}`);
      }
    };
  },
  function(d, u, e) {
    "use strict";
    var n = e(14);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(323)),
      a = n(e(366)),
      r = n(e(367)),
      f = n(e(368)),
      c = n(e(369)),
      i = n(e(371)),
      o = n(e(373)),
      s = n(e(375));
    (0, a.default)(t.default),
      (0, r.default)(t.default),
      (0, f.default)(t.default),
      (0, c.default)(t.default),
      (0, i.default)(t.default),
      (0, o.default)(t.default),
      (0, s.default)(t.default);
    var l = t.default;
    (u.default = l), (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(14);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(324)),
      a = n(e(339)),
      r = n(e(93)),
      f = n(e(361)),
      c = "xregexp",
      i = { astral: !1, namespacing: !1 },
      o = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
      },
      s = {},
      l = {},
      m = {},
      p = [],
      h = "default",
      b = "class",
      y = {
        default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
        class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
      },
      g = /\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g,
      _ = void 0 === o.exec.call(/()??/, "")[1],
      v = void 0 !== /x/.flags,
      w = {}.toString;
    function I(d) {
      var u = !0;
      try {
        new RegExp("", d);
      } catch (d) {
        u = !1;
      }
      return u;
    }
    var S = I("u"),
      x = I("y"),
      k = { g: !0, i: !0, m: !0, u: S, y: x };
    function E(d, u, e, n, t) {
      if (((d[c] = { captureNames: u }), t)) return d;
      if (d.__proto__) d.__proto__ = U.prototype;
      else for (var a in U.prototype) d[a] = U.prototype[a];
      return (
        (d[c].source = e),
        (d[c].flags = n
          ? n
              .split("")
              .sort()
              .join("")
          : n),
        d
      );
    }
    function M(d) {
      return o.replace.call(d, /([\s\S])(?=[\s\S]*\1)/g, "");
    }
    function T(d, u) {
      if (!U.isRegExp(d)) throw new TypeError("Type RegExp expected");
      var e = d[c] || {},
        n = (function(d) {
          return v
            ? d.flags
            : o.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(d))[1];
        })(d),
        t = "",
        a = "",
        r = null,
        f = null;
      return (
        (u = u || {}).removeG && (a += "g"),
        u.removeY && (a += "y"),
        a && (n = o.replace.call(n, new RegExp("[".concat(a, "]+"), "g"), "")),
        u.addG && (t += "g"),
        u.addY && (t += "y"),
        t && (n = M(n + t)),
        u.isInternalOnly ||
          (void 0 !== e.source && (r = e.source),
          null != e.flags && (f = t ? M(e.flags + t) : e.flags)),
        (d = E(
          new RegExp(u.source || d.source, n),
          (function(d) {
            return !(!d[c] || !d[c].captureNames);
          })(d)
            ? e.captureNames.slice(0)
            : null,
          r,
          f,
          u.isInternalOnly
        ))
      );
    }
    function O(d) {
      return (0, f.default)(d, 16);
    }
    function C(d, u, e) {
      return "(" === d.input[d.index - 1] ||
        ")" === d.input[d.index + d[0].length] ||
        "|" === d.input[d.index - 1] ||
        "|" === d.input[d.index + d[0].length] ||
        d.index < 1 ||
        d.index + d[0].length >= d.input.length ||
        o.test.call(/^\(\?[:=!]/, d.input.substr(d.index - 3, 3)) ||
        (function(d, u, e) {
          return o.test.call(
            -1 !== e.indexOf("x")
              ? /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
              : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,
            d.slice(u)
          );
        })(d.input, d.index + d[0].length, e)
        ? ""
        : "(?:)";
    }
    function A(d) {
      return (0, f.default)(d, 10).toString(16);
    }
    function L(d, u) {
      return w.call(d) === "[object ".concat(u, "]");
    }
    function P(d) {
      for (; d.length < 4; ) d = "0".concat(d);
      return d;
    }
    function N(d) {
      var u = {};
      return L(d, "String")
        ? (U.forEach(d, /[^\s,]+/, function(d) {
            u[d] = !0;
          }),
          u)
        : d;
    }
    function R(d) {
      if (!/^[\w$]$/.test(d))
        throw new Error("Flag must be a single character A-Za-z0-9_$");
      k[d] = !0;
    }
    function j(d, u, e, n, t) {
      for (var a, r, f = p.length, c = d[e], i = null; f--; )
        if (
          !(
            ((r = p[f]).leadChar && r.leadChar !== c) ||
            (r.scope !== n && "all" !== r.scope) ||
            (r.flag && -1 === u.indexOf(r.flag))
          ) &&
          (a = U.exec(d, r.regex, e, "sticky"))
        ) {
          i = {
            matchLength: a[0].length,
            output: r.handler.call(t, a, n, u),
            reparse: r.reparse
          };
          break;
        }
      return i;
    }
    function D(d) {
      i.astral = d;
    }
    function B(d) {
      i.namespacing = d;
    }
    function F(d) {
      if (null == d)
        throw new TypeError("Cannot convert null or undefined to object");
      return d;
    }
    function U(d, u) {
      if (U.isRegExp(d)) {
        if (void 0 !== u)
          throw new TypeError("Cannot supply flags when copying a RegExp");
        return T(d);
      }
      if (
        ((d = void 0 === d ? "" : String(d)),
        (u = void 0 === u ? "" : String(u)),
        U.isInstalled("astral") && -1 === u.indexOf("A") && (u += "A"),
        m[d] || (m[d] = {}),
        !m[d][u])
      ) {
        for (
          var e,
            n = { hasNamedCapture: !1, captureNames: [] },
            t = h,
            f = "",
            c = 0,
            i = (function(d, u) {
              if (M(u) !== u)
                throw new SyntaxError(
                  "Invalid duplicate regex flag ".concat(u)
                );
              d = o.replace.call(d, /^\(\?([\w$]+)\)/, function(d, e) {
                if (o.test.call(/[gy]/, e))
                  throw new SyntaxError(
                    "Cannot use flag g or y in mode modifier ".concat(d)
                  );
                return (u = M(u + e)), "";
              });
              var e = !0,
                n = !1,
                t = void 0;
              try {
                for (
                  var a, f = (0, r.default)(u);
                  !(e = (a = f.next()).done);
                  e = !0
                ) {
                  var c = a.value;
                  if (!k[c])
                    throw new SyntaxError("Unknown regex flag ".concat(c));
                }
              } catch (d) {
                (n = !0), (t = d);
              } finally {
                try {
                  e || null == f.return || f.return();
                } finally {
                  if (n) throw t;
                }
              }
              return { pattern: d, flags: u };
            })(d, u),
            s = i.pattern,
            l = i.flags;
          c < s.length;

        ) {
          do {
            (e = j(s, l, c, t, n)) &&
              e.reparse &&
              (s = s.slice(0, c) + e.output + s.slice(c + e.matchLength));
          } while (e && e.reparse);
          if (e) (f += e.output), (c += e.matchLength || 1);
          else {
            var p = U.exec(s, y[t], c, "sticky"),
              g = (0, a.default)(p, 1)[0];
            (f += g),
              (c += g.length),
              "[" === g && t === h ? (t = b) : "]" === g && t === b && (t = h);
          }
        }
        m[d][u] = {
          pattern: o.replace.call(f, /(?:\(\?:\))+/g, "(?:)"),
          flags: o.replace.call(l, /[^gimuy]+/g, ""),
          captures: n.hasNamedCapture ? n.captureNames : null
        };
      }
      var _ = m[d][u];
      return E(new RegExp(_.pattern, _.flags), _.captures, d, u);
    }
    (U.prototype = /(?:)/),
      (U.version = "4.2.4"),
      (U._clipDuplicates = M),
      (U._hasNativeFlag = I),
      (U._dec = O),
      (U._hex = A),
      (U._pad4 = P),
      (U.addToken = function(d, u, e) {
        var n = (e = e || {}).optionalFlags;
        if ((e.flag && R(e.flag), n)) {
          n = o.split.call(n, "");
          var t = !0,
            a = !1,
            f = void 0;
          try {
            for (
              var c, i = (0, r.default)(n);
              !(t = (c = i.next()).done);
              t = !0
            ) {
              R(c.value);
            }
          } catch (d) {
            (a = !0), (f = d);
          } finally {
            try {
              t || null == i.return || i.return();
            } finally {
              if (a) throw f;
            }
          }
        }
        p.push({
          regex: T(d, { addG: !0, addY: x, isInternalOnly: !0 }),
          handler: u,
          scope: e.scope || h,
          flag: e.flag,
          reparse: e.reparse,
          leadChar: e.leadChar
        }),
          U.cache.flush("patterns");
      }),
      (U.cache = function(d, u) {
        return l[d] || (l[d] = {}), l[d][u] || (l[d][u] = U(d, u));
      }),
      (U.cache.flush = function(d) {
        "patterns" === d ? (m = {}) : (l = {});
      }),
      (U.escape = function(d) {
        return o.replace.call(F(d), /[-\[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }),
      (U.exec = function(d, u, e, n) {
        var t,
          a,
          r = "g",
          f = !1;
        (t = x && !!(n || (u.sticky && !1 !== n)))
          ? (r += "y")
          : n && ((f = !0), (r += "FakeY")),
          (u[c] = u[c] || {});
        var i =
          u[c][r] ||
          (u[c][r] = T(u, {
            addG: !0,
            addY: t,
            source: f ? "".concat(u.source, "|()") : void 0,
            removeY: !1 === n,
            isInternalOnly: !0
          }));
        return (
          (e = e || 0),
          (i.lastIndex = e),
          (a = s.exec.call(i, d)),
          f && a && "" === a.pop() && (a = null),
          u.global && (u.lastIndex = a ? i.lastIndex : 0),
          a
        );
      }),
      (U.forEach = function(d, u, e) {
        for (var n, t = 0, a = -1; (n = U.exec(d, u, t)); )
          e(n, ++a, d, u), (t = n.index + (n[0].length || 1));
      }),
      (U.globalize = function(d) {
        return T(d, { addG: !0 });
      }),
      (U.install = function(d) {
        (d = N(d)),
          !i.astral && d.astral && D(!0),
          !i.namespacing && d.namespacing && B(!0);
      }),
      (U.isInstalled = function(d) {
        return !!i[d];
      }),
      (U.isRegExp = function(d) {
        return "[object RegExp]" === w.call(d);
      }),
      (U.match = function(d, u, e) {
        var n = (u.global && "one" !== e) || "all" === e,
          t = (n ? "g" : "") + (u.sticky ? "y" : "") || "noGY";
        u[c] = u[c] || {};
        var a =
            u[c][t] ||
            (u[c][t] = T(u, {
              addG: !!n,
              removeG: "one" === e,
              isInternalOnly: !0
            })),
          r = o.match.call(F(d), a);
        return (
          u.global &&
            (u.lastIndex = "one" === e && r ? r.index + r[0].length : 0),
          n ? r || [] : r && r[0]
        );
      }),
      (U.matchChain = function(d, u) {
        return (function d(e, n) {
          var t = u[n].regex ? u[n] : { regex: u[n] },
            a = [];
          function f(d) {
            if (t.backref) {
              var u = "Backreference to undefined group: ".concat(t.backref),
                e = isNaN(t.backref);
              if (e && U.isInstalled("namespacing")) {
                if (!(t.backref in d.groups)) throw new ReferenceError(u);
              } else if (!d.hasOwnProperty(t.backref))
                throw new ReferenceError(u);
              var n =
                e && U.isInstalled("namespacing")
                  ? d.groups[t.backref]
                  : d[t.backref];
              a.push(n || "");
            } else a.push(d[0]);
          }
          var c = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var s, l = (0, r.default)(e);
              !(c = (s = l.next()).done);
              c = !0
            ) {
              var m = s.value;
              U.forEach(m, t.regex, f);
            }
          } catch (d) {
            (i = !0), (o = d);
          } finally {
            try {
              c || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return n !== u.length - 1 && a.length ? d(a, n + 1) : a;
        })([d], 0);
      }),
      (U.replace = function(d, u, e, n) {
        var t = U.isRegExp(u),
          a = (u.global && "one" !== n) || "all" === n,
          r = (a ? "g" : "") + (u.sticky ? "y" : "") || "noGY",
          f = u;
        t
          ? ((u[c] = u[c] || {}),
            (f =
              u[c][r] ||
              (u[c][r] = T(u, {
                addG: !!a,
                removeG: "one" === n,
                isInternalOnly: !0
              }))))
          : a && (f = new RegExp(U.escape(String(u)), "g"));
        var i = s.replace.call(F(d), f, e);
        return t && u.global && (u.lastIndex = 0), i;
      }),
      (U.replaceEach = function(d, u) {
        var e = !0,
          n = !1,
          t = void 0;
        try {
          for (
            var a, f = (0, r.default)(u);
            !(e = (a = f.next()).done);
            e = !0
          ) {
            var c = a.value;
            d = U.replace(d, c[0], c[1], c[2]);
          }
        } catch (d) {
          (n = !0), (t = d);
        } finally {
          try {
            e || null == f.return || f.return();
          } finally {
            if (n) throw t;
          }
        }
        return d;
      }),
      (U.split = function(d, u, e) {
        return s.split.call(F(d), u, e);
      }),
      (U.test = function(d, u, e, n) {
        return !!U.exec(d, u, e, n);
      }),
      (U.uninstall = function(d) {
        (d = N(d)),
          i.astral && d.astral && D(!1),
          i.namespacing && d.namespacing && B(!1);
      }),
      (U.union = function(d, u, e) {
        var n,
          t,
          a = (e = e || {}).conjunction || "or",
          f = 0;
        function i(d, u, e) {
          var a = t[f - n];
          if (u) {
            if ((++f, a)) return "(?<".concat(a, ">");
          } else if (e) return "\\".concat(+e + n);
          return d;
        }
        if (!L(d, "Array") || !d.length)
          throw new TypeError(
            "Must provide a nonempty array of patterns to merge"
          );
        var s = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
          l = [],
          m = !0,
          p = !1,
          h = void 0;
        try {
          for (
            var b, y = (0, r.default)(d);
            !(m = (b = y.next()).done);
            m = !0
          ) {
            var g = b.value;
            U.isRegExp(g)
              ? ((n = f),
                (t = (g[c] && g[c].captureNames) || []),
                l.push(o.replace.call(U(g.source).source, s, i)))
              : l.push(U.escape(g));
          }
        } catch (d) {
          (p = !0), (h = d);
        } finally {
          try {
            m || null == y.return || y.return();
          } finally {
            if (p) throw h;
          }
        }
        var _ = "none" === a ? "" : "|";
        return U(l.join(_), u);
      }),
      (s.exec = function(d) {
        var u = this.lastIndex,
          e = o.exec.apply(this, arguments);
        if (e) {
          if (!_ && e.length > 1 && -1 !== e.indexOf("")) {
            var n = T(this, { removeG: !0, isInternalOnly: !0 });
            o.replace.call(String(d).slice(e.index), n, function() {
              for (var d = arguments.length, u = 1; u < d - 2; ++u)
                void 0 ===
                  (u < 0 || arguments.length <= u ? void 0 : arguments[u]) &&
                  (e[u] = void 0);
            });
          }
          var a = e;
          if (
            (U.isInstalled("namespacing") &&
              ((e.groups = (0, t.default)(null)), (a = e.groups)),
            this[c] && this[c].captureNames)
          )
            for (var r = 1; r < e.length; ++r) {
              var f = this[c].captureNames[r - 1];
              f && (a[f] = e[r]);
            }
          this.global &&
            !e[0].length &&
            this.lastIndex > e.index &&
            (this.lastIndex = e.index);
        }
        return this.global || (this.lastIndex = u), e;
      }),
      (s.test = function(d) {
        return !!s.exec.call(this, d);
      }),
      (s.match = function(d) {
        if (U.isRegExp(d)) {
          if (d.global) {
            var u = o.match.apply(this, arguments);
            return (d.lastIndex = 0), u;
          }
        } else d = new RegExp(d);
        return s.exec.call(d, F(this));
      }),
      (s.replace = function(d, u) {
        var e,
          n,
          a,
          r = U.isRegExp(d);
        return (
          r ? (d[c] && (n = d[c].captureNames), (e = d.lastIndex)) : (d += ""),
          (a = L(u, "Function")
            ? o.replace.call(String(this), d, function() {
                for (
                  var e = arguments.length, a = new Array(e), f = 0;
                  f < e;
                  f++
                )
                  a[f] = arguments[f];
                if (n) {
                  var c;
                  U.isInstalled("namespacing")
                    ? ((c = (0, t.default)(null)), a.push(c))
                    : ((a[0] = new String(a[0])), (c = a[0]));
                  for (var i = 0; i < n.length; ++i)
                    n[i] && (c[n[i]] = a[i + 1]);
                }
                return (
                  r &&
                    d.global &&
                    (d.lastIndex = a[a.length - 2] + a[0].length),
                  u.apply(void 0, a)
                );
              })
            : o.replace.call(null == this ? this : String(this), d, function() {
                for (
                  var d = arguments.length, e = new Array(d), t = 0;
                  t < d;
                  t++
                )
                  e[t] = arguments[t];
                return o.replace.call(String(u), g, function(d, u, t, a) {
                  if ((u = u || t)) {
                    var r = +u;
                    if (r <= e.length - 3) return e[r] || "";
                    if ((r = n ? n.indexOf(u) : -1) < 0)
                      throw new SyntaxError(
                        "Backreference to undefined group ".concat(d)
                      );
                    return e[r + 1] || "";
                  }
                  if ("$" === a) return "$";
                  if ("&" === a || 0 == +a) return e[0];
                  if ("`" === a)
                    return e[e.length - 1].slice(0, e[e.length - 2]);
                  if ("'" === a)
                    return e[e.length - 1].slice(e[e.length - 2] + e[0].length);
                  if (((a = +a), !isNaN(a))) {
                    if (a > e.length - 3)
                      throw new SyntaxError(
                        "Backreference to undefined group ".concat(d)
                      );
                    return e[a] || "";
                  }
                  throw new SyntaxError("Invalid token ".concat(d));
                });
              })),
          r && (d.global ? (d.lastIndex = 0) : (d.lastIndex = e)),
          a
        );
      }),
      (s.split = function(d, u) {
        if (!U.isRegExp(d)) return o.split.apply(this, arguments);
        var e,
          n = String(this),
          t = [],
          a = d.lastIndex,
          r = 0;
        return (
          (u = (void 0 === u ? -1 : u) >>> 0),
          U.forEach(n, d, function(d) {
            d.index + d[0].length > r &&
              (t.push(n.slice(r, d.index)),
              d.length > 1 &&
                d.index < n.length &&
                Array.prototype.push.apply(t, d.slice(1)),
              (e = d[0].length),
              (r = d.index + e));
          }),
          r === n.length
            ? (o.test.call(d, "") && !e) || t.push("")
            : t.push(n.slice(r)),
          (d.lastIndex = a),
          t.length > u ? t.slice(0, u) : t
        );
      }),
      U.addToken(
        /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
        function(d, u) {
          if ("B" === d[1] && u === h) return d[0];
          throw new SyntaxError("Invalid escape ".concat(d[0]));
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\\u{([\dA-Fa-f]+)}/,
        function(d, u, e) {
          var n = O(d[1]);
          if (n > 1114111)
            throw new SyntaxError("Invalid Unicode code point ".concat(d[0]));
          if (n <= 65535) return "\\u".concat(P(A(n)));
          if (S && -1 !== e.indexOf("u")) return d[0];
          throw new SyntaxError(
            "Cannot use Unicode code point above \\u{FFFF} without flag u"
          );
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\[(\^?)\]/,
        function(d) {
          return d[1] ? "[\\s\\S]" : "\\b\\B";
        },
        { leadChar: "[" }
      ),
      U.addToken(/\(\?#[^)]*\)/, C, { leadChar: "(" }),
      U.addToken(/\s+|#[^\n]*\n?/, C, { flag: "x" }),
      U.addToken(
        /\./,
        function() {
          return "[\\s\\S]";
        },
        { flag: "s", leadChar: "." }
      ),
      U.addToken(
        /\\k<([\w$]+)>/,
        function(d) {
          var u = isNaN(d[1]) ? this.captureNames.indexOf(d[1]) + 1 : +d[1],
            e = d.index + d[0].length;
          if (!u || u > this.captureNames.length)
            throw new SyntaxError(
              "Backreference to undefined group ".concat(d[0])
            );
          return "\\"
            .concat(u)
            .concat(e === d.input.length || isNaN(d.input[e]) ? "" : "(?:)");
        },
        { leadChar: "\\" }
      ),
      U.addToken(
        /\\(\d+)/,
        function(d, u) {
          if (
            !(
              u === h &&
              /^[1-9]/.test(d[1]) &&
              +d[1] <= this.captureNames.length
            ) &&
            "0" !== d[1]
          )
            throw new SyntaxError(
              "Cannot use octal escape or backreference to undefined group ".concat(
                d[0]
              )
            );
          return d[0];
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\(\?P?<([\w$]+)>/,
        function(d) {
          if (!isNaN(d[1]))
            throw new SyntaxError(
              "Cannot use integer as capture name ".concat(d[0])
            );
          if (
            !U.isInstalled("namespacing") &&
            ("length" === d[1] || "__proto__" === d[1])
          )
            throw new SyntaxError(
              "Cannot use reserved word as capture name ".concat(d[0])
            );
          if (-1 !== this.captureNames.indexOf(d[1]))
            throw new SyntaxError(
              "Cannot use same name for multiple groups ".concat(d[0])
            );
          return this.captureNames.push(d[1]), (this.hasNamedCapture = !0), "(";
        },
        { leadChar: "(" }
      ),
      U.addToken(
        /\((?!\?)/,
        function(d, u, e) {
          return -1 !== e.indexOf("n")
            ? "(?:"
            : (this.captureNames.push(null), "(");
        },
        { optionalFlags: "n", leadChar: "(" }
      );
    var H = U;
    (u.default = H), (d.exports = u.default);
  },
  function(d, u, e) {
    d.exports = e(325);
  },
  function(d, u, e) {
    e(326);
    var n = e(16).Object;
    d.exports = function(d, u) {
      return n.create(d, u);
    };
  },
  function(d, u, e) {
    var n = e(37);
    n(n.S, "Object", { create: e(145) });
  },
  function(d, u, e) {
    var n = e(328);
    d.exports = function(d, u, e) {
      if ((n(d), void 0 === u)) return d;
      switch (e) {
        case 1:
          return function(e) {
            return d.call(u, e);
          };
        case 2:
          return function(e, n) {
            return d.call(u, e, n);
          };
        case 3:
          return function(e, n, t) {
            return d.call(u, e, n, t);
          };
      }
      return function() {
        return d.apply(u, arguments);
      };
    };
  },
  function(d, u) {
    d.exports = function(d) {
      if ("function" != typeof d) throw TypeError(d + " is not a function!");
      return d;
    };
  },
  function(d, u, e) {
    d.exports =
      !e(56) &&
      !e(88)(function() {
        return (
          7 !=
          Object.defineProperty(e(143)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(d, u, e) {
    var n = e(87);
    d.exports = function(d, u) {
      if (!n(d)) return d;
      var e, t;
      if (u && "function" == typeof (e = d.toString) && !n((t = e.call(d))))
        return t;
      if ("function" == typeof (e = d.valueOf) && !n((t = e.call(d)))) return t;
      if (!u && "function" == typeof (e = d.toString) && !n((t = e.call(d))))
        return t;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(d, u, e) {
    var n = e(86),
      t = e(55),
      a = e(332);
    d.exports = e(56)
      ? Object.defineProperties
      : function(d, u) {
          t(d);
          for (var e, r = a(u), f = r.length, c = 0; f > c; )
            n.f(d, (e = r[c++]), u[e]);
          return d;
        };
  },
  function(d, u, e) {
    var n = e(333),
      t = e(149);
    d.exports =
      Object.keys ||
      function(d) {
        return n(d, t);
      };
  },
  function(d, u, e) {
    var n = e(57),
      t = e(89),
      a = e(335)(!1),
      r = e(92)("IE_PROTO");
    d.exports = function(d, u) {
      var e,
        f = t(d),
        c = 0,
        i = [];
      for (e in f) e != r && n(f, e) && i.push(e);
      for (; u.length > c; ) n(f, (e = u[c++])) && (~a(i, e) || i.push(e));
      return i;
    };
  },
  function(d, u, e) {
    var n = e(90);
    d.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(d) {
          return "String" == n(d) ? d.split("") : Object(d);
        };
  },
  function(d, u, e) {
    var n = e(89),
      t = e(336),
      a = e(337);
    d.exports = function(d) {
      return function(u, e, r) {
        var f,
          c = n(u),
          i = t(c.length),
          o = a(r, i);
        if (d && e != e) {
          for (; i > o; ) if ((f = c[o++]) != f) return !0;
        } else
          for (; i > o; o++)
            if ((d || o in c) && c[o] === e) return d || o || 0;
        return !d && -1;
      };
    };
  },
  function(d, u, e) {
    var n = e(91),
      t = Math.min;
    d.exports = function(d) {
      return d > 0 ? t(n(d), 9007199254740991) : 0;
    };
  },
  function(d, u, e) {
    var n = e(91),
      t = Math.max,
      a = Math.min;
    d.exports = function(d, u) {
      return (d = n(d)) < 0 ? t(d + u, 0) : a(d, u);
    };
  },
  function(d, u, e) {
    var n = e(15).document;
    d.exports = n && n.documentElement;
  },
  function(d, u, e) {
    var n = e(340),
      t = e(345),
      a = e(360);
    d.exports = function(d, u) {
      return n(d) || t(d, u) || a();
    };
  },
  function(d, u, e) {
    var n = e(341);
    d.exports = function(d) {
      if (n(d)) return d;
    };
  },
  function(d, u, e) {
    d.exports = e(342);
  },
  function(d, u, e) {
    e(343), (d.exports = e(16).Array.isArray);
  },
  function(d, u, e) {
    var n = e(37);
    n(n.S, "Array", { isArray: e(344) });
  },
  function(d, u, e) {
    var n = e(90);
    d.exports =
      Array.isArray ||
      function(d) {
        return "Array" == n(d);
      };
  },
  function(d, u, e) {
    var n = e(93);
    d.exports = function(d, u) {
      var e = [],
        t = !0,
        a = !1,
        r = void 0;
      try {
        for (
          var f, c = n(d);
          !(t = (f = c.next()).done) && (e.push(f.value), !u || e.length !== u);
          t = !0
        );
      } catch (d) {
        (a = !0), (r = d);
      } finally {
        try {
          t || null == c.return || c.return();
        } finally {
          if (a) throw r;
        }
      }
      return e;
    };
  },
  function(d, u, e) {
    e(347), e(355), (d.exports = e(357));
  },
  function(d, u, e) {
    e(348);
    for (
      var n = e(15),
        t = e(38),
        a = e(59),
        r = e(27)("toStringTag"),
        f = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
          ","
        ),
        c = 0;
      c < f.length;
      c++
    ) {
      var i = f[c],
        o = n[i],
        s = o && o.prototype;
      s && !s[r] && t(s, r, i), (a[i] = a.Array);
    }
  },
  function(d, u, e) {
    "use strict";
    var n = e(349),
      t = e(350),
      a = e(59),
      r = e(89);
    (d.exports = e(150)(
      Array,
      "Array",
      function(d, u) {
        (this._t = r(d)), (this._i = 0), (this._k = u);
      },
      function() {
        var d = this._t,
          u = this._k,
          e = this._i++;
        return !d || e >= d.length
          ? ((this._t = void 0), t(1))
          : t(0, "keys" == u ? e : "values" == u ? d[e] : [e, d[e]]);
      },
      "values"
    )),
      (a.Arguments = a.Array),
      n("keys"),
      n("values"),
      n("entries");
  },
  function(d, u) {
    d.exports = function() {};
  },
  function(d, u) {
    d.exports = function(d, u) {
      return { value: u, done: !!d };
    };
  },
  function(d, u, e) {
    d.exports = e(38);
  },
  function(d, u, e) {
    "use strict";
    var n = e(145),
      t = e(144),
      a = e(151),
      r = {};
    e(38)(r, e(27)("iterator"), function() {
      return this;
    }),
      (d.exports = function(d, u, e) {
        (d.prototype = n(r, { next: t(1, e) })), a(d, u + " Iterator");
      });
  },
  function(d, u, e) {
    var n = e(57),
      t = e(354),
      a = e(92)("IE_PROTO"),
      r = Object.prototype;
    d.exports =
      Object.getPrototypeOf ||
      function(d) {
        return (
          (d = t(d)),
          n(d, a)
            ? d[a]
            : "function" == typeof d.constructor && d instanceof d.constructor
            ? d.constructor.prototype
            : d instanceof Object
            ? r
            : null
        );
      };
  },
  function(d, u, e) {
    var n = e(58);
    d.exports = function(d) {
      return Object(n(d));
    };
  },
  function(d, u, e) {
    "use strict";
    var n = e(356)(!0);
    e(150)(
      String,
      "String",
      function(d) {
        (this._t = String(d)), (this._i = 0);
      },
      function() {
        var d,
          u = this._t,
          e = this._i;
        return e >= u.length
          ? { value: void 0, done: !0 }
          : ((d = n(u, e)), (this._i += d.length), { value: d, done: !1 });
      }
    );
  },
  function(d, u, e) {
    var n = e(91),
      t = e(58);
    d.exports = function(d) {
      return function(u, e) {
        var a,
          r,
          f = String(t(u)),
          c = n(e),
          i = f.length;
        return c < 0 || c >= i
          ? d
            ? ""
            : void 0
          : (a = f.charCodeAt(c)) < 55296 ||
            a > 56319 ||
            c + 1 === i ||
            (r = f.charCodeAt(c + 1)) < 56320 ||
            r > 57343
          ? d
            ? f.charAt(c)
            : a
          : d
          ? f.slice(c, c + 2)
          : r - 56320 + ((a - 55296) << 10) + 65536;
      };
    };
  },
  function(d, u, e) {
    var n = e(55),
      t = e(358);
    d.exports = e(16).getIterator = function(d) {
      var u = t(d);
      if ("function" != typeof u) throw TypeError(d + " is not iterable!");
      return n(u.call(d));
    };
  },
  function(d, u, e) {
    var n = e(359),
      t = e(27)("iterator"),
      a = e(59);
    d.exports = e(16).getIteratorMethod = function(d) {
      if (null != d) return d[t] || d["@@iterator"] || a[n(d)];
    };
  },
  function(d, u, e) {
    var n = e(90),
      t = e(27)("toStringTag"),
      a =
        "Arguments" ==
        n(
          (function() {
            return arguments;
          })()
        );
    d.exports = function(d) {
      var u, e, r;
      return void 0 === d
        ? "Undefined"
        : null === d
        ? "Null"
        : "string" ==
          typeof (e = (function(d, u) {
            try {
              return d[u];
            } catch (d) {}
          })((u = Object(d)), t))
        ? e
        : a
        ? n(u)
        : "Object" == (r = n(u)) && "function" == typeof u.callee
        ? "Arguments"
        : r;
    };
  },
  function(d, u) {
    d.exports = function() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
  function(d, u, e) {
    d.exports = e(362);
  },
  function(d, u, e) {
    e(363), (d.exports = e(16).parseInt);
  },
  function(d, u, e) {
    var n = e(37),
      t = e(364);
    n(n.G + n.F * (parseInt != t), { parseInt: t });
  },
  function(d, u, e) {
    var n = e(15).parseInt,
      t = e(365).trim,
      a = e(152),
      r = /^[-+]?0[xX]/;
    d.exports =
      8 !== n(a + "08") || 22 !== n(a + "0x16")
        ? function(d, u) {
            var e = t(String(d), 3);
            return n(e, u >>> 0 || (r.test(e) ? 16 : 10));
          }
        : n;
  },
  function(d, u, e) {
    var n = e(37),
      t = e(58),
      a = e(88),
      r = e(152),
      f = "[" + r + "]",
      c = RegExp("^" + f + f + "*"),
      i = RegExp(f + f + "*$"),
      o = function(d, u, e) {
        var t = {},
          f = a(function() {
            return !!r[d]() || "​" != "​"[d]();
          }),
          c = (t[d] = f ? u(s) : r[d]);
        e && (t[e] = c), n(n.P + n.F * f, "String", t);
      },
      s = (o.trim = function(d, u) {
        return (
          (d = String(t(d))),
          1 & u && (d = d.replace(c, "")),
          2 & u && (d = d.replace(i, "")),
          d
        );
      });
    d.exports = o;
  },
  function(d, u, e) {
    "use strict";
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    (u.default = function(d) {
      var u = "xregexp",
        e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
        n = d.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", {
          conjunction: "or"
        });
      function t(d) {
        var u = /^(?:\(\?:\))*\^/,
          e = /\$(?:\(\?:\))*$/;
        return u.test(d) && e.test(d) && e.test(d.replace(/\\[\s\S]/g, ""))
          ? d.replace(u, "").replace(e, "")
          : d;
      }
      function a(e, n) {
        var t = n ? "x" : "";
        return d.isRegExp(e)
          ? e[u] && e[u].captureNames
            ? e
            : d(e.source, t)
          : d(e, t);
      }
      function r(u) {
        return u instanceof RegExp ? u : d.escape(u);
      }
      function f(d, u, e) {
        return (d["subpattern".concat(e)] = u), d;
      }
      function c(d, u, e) {
        return d + (u < e.length - 1 ? "{{subpattern".concat(u, "}}") : "");
      }
      (d.tag = function(u) {
        return function(e) {
          for (
            var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            t[a - 1] = arguments[a];
          var i = t.map(r).reduce(f, {}),
            o = e.raw.map(c).join("");
          return d.build(o, i, u);
        };
      }),
        (d.build = function(r, f, c) {
          var i = -1 !== (c = c || "").indexOf("x"),
            o = /^\(\?([\w$]+)\)/.exec(r);
          o && (c = d._clipDuplicates(c + o[1]));
          var s = {};
          for (var l in f)
            if (f.hasOwnProperty(l)) {
              var m = a(f[l], i);
              s[l] = { pattern: t(m.source), names: m[u].captureNames || [] };
            }
          var p,
            h = a(r, i),
            b = 0,
            y = 0,
            g = [0],
            _ = h[u].captureNames || [],
            v = h.source.replace(n, function(d, u, n, t, a) {
              var r,
                f,
                c,
                i = u || n;
              if (i) {
                if (!s.hasOwnProperty(i))
                  throw new ReferenceError("Undefined property ".concat(d));
                u
                  ? ((r = _[y]),
                    (g[++y] = ++b),
                    (f = "(?<".concat(r || i, ">")))
                  : (f = "(?:"),
                  (p = b);
                var o = s[i].pattern.replace(e, function(d, u, e) {
                  if (u) {
                    if (((r = s[i].names[b - p]), ++b, r))
                      return "(?<".concat(r, ">");
                  } else if (e) return (c = +e - 1), s[i].names[c] ? "\\k<".concat(s[i].names[c], ">") : "\\".concat(+e + p);
                  return d;
                });
                return "".concat(f).concat(o, ")");
              }
              if (t) {
                if (((r = _[y]), (g[++y] = ++b), r))
                  return "(?<".concat(r, ">");
              } else if (a) return _[(c = +a - 1)] ? "\\k<".concat(_[c], ">") : "\\".concat(g[+a]);
              return d;
            });
          return d(v, c);
        });
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    (u.default = function(d) {
      function u(d, u, e, n) {
        return { name: d, value: u, start: e, end: n };
      }
      d.matchRecursive = function(e, n, t, a, r) {
        r = r || {};
        var f,
          c,
          i,
          o,
          s,
          l = -1 !== (a = a || "").indexOf("g"),
          m = -1 !== a.indexOf("y"),
          p = a.replace(/y/g, ""),
          h = r.escapeChar,
          b = r.valueNames,
          y = [],
          g = 0,
          _ = 0,
          v = 0,
          w = 0;
        if (((n = d(n, p)), (t = d(t, p)), h)) {
          if (h.length > 1)
            throw new Error("Cannot use more than one escape character");
          (h = d.escape(h)),
            (s = new RegExp(
              "(?:"
                .concat(h, "[\\S\\s]|(?:(?!")
                .concat(
                  d.union([n, t], "", { conjunction: "or" }).source,
                  ")[^"
                )
                .concat(h, "])+)+"),
              a.replace(/[^imu]+/g, "")
            ));
        }
        for (;;) {
          if (
            (h && (v += (d.exec(e, s, v, "sticky") || [""])[0].length),
            (i = d.exec(e, n, v)),
            (o = d.exec(e, t, v)),
            i && o && (i.index <= o.index ? (o = null) : (i = null)),
            i || o)
          )
            v = (_ = (i || o).index) + (i || o)[0].length;
          else if (!g) break;
          if (m && !g && _ > w) break;
          if (i) g || ((f = _), (c = v)), ++g;
          else {
            if (!o || !g)
              throw new Error("Unbalanced delimiter found in string");
            if (
              !--g &&
              (b
                ? (b[0] && f > w && y.push(u(b[0], e.slice(w, f), w, f)),
                  b[1] && y.push(u(b[1], e.slice(f, c), f, c)),
                  b[2] && y.push(u(b[2], e.slice(c, _), c, _)),
                  b[3] && y.push(u(b[3], e.slice(_, v), _, v)))
                : y.push(e.slice(c, _)),
              (w = v),
              !l)
            )
              break;
          }
          _ === v && ++v;
        }
        return (
          l &&
            !m &&
            b &&
            b[0] &&
            e.length > w &&
            y.push(u(b[0], e.slice(w), w, e.length)),
          y
        );
      };
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(14);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(93));
    /*!
     * XRegExp Unicode Base 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2008-present MIT License
     */ (u.default = function(d) {
      var u = {},
        e = d._dec,
        n = d._hex,
        a = d._pad4;
      function r(d) {
        return d.replace(/[- _]+/g, "").toLowerCase();
      }
      function f(d) {
        var u = /^\\[xu](.+)/.exec(d);
        return u ? e(u[1]) : d.charCodeAt("\\" === d[0] ? 1 : 0);
      }
      function c(e) {
        var t, r, c;
        return (
          u[e]["b!"] ||
          (u[e]["b!"] = ((t = u[e].bmp),
          (r = ""),
          (c = -1),
          d.forEach(
            t,
            /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
            function(d) {
              var u = f(d[1]);
              u > c + 1 &&
                ((r += "\\u".concat(a(n(c + 1)))),
                u > c + 2 && (r += "-\\u".concat(a(n(u - 1))))),
                (c = f(d[2] || d[1]));
            }
          ),
          c < 65535 &&
            ((r += "\\u".concat(a(n(c + 1)))), c < 65534 && (r += "-\\uFFFF")),
          r))
        );
      }
      function i(d, e) {
        var n = e ? "a!" : "a=";
        return (
          u[d][n] ||
          (u[d][n] = (function(d, e) {
            var n = u[d],
              t = "";
            return (
              n.bmp &&
                !n.isBmpLast &&
                (t = "[".concat(n.bmp, "]").concat(n.astral ? "|" : "")),
              n.astral && (t += n.astral),
              n.isBmpLast &&
                n.bmp &&
                (t += "".concat(n.astral ? "|" : "", "[").concat(n.bmp, "]")),
              e
                ? "(?:(?!".concat(
                    t,
                    ")(?:[\ud800-\udbff][\udc00-\udfff]|[\0-￿]))"
                  )
                : "(?:".concat(t, ")")
            );
          })(d, e))
        );
      }
      d.addToken(
        /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
        function(d, e, n) {
          var t = "P" === d[1] || !!d[2],
            a = -1 !== n.indexOf("A"),
            f = r(d[4] || d[3]),
            o = u[f];
          if ("P" === d[1] && d[2])
            throw new SyntaxError("Invalid double negation " + d[0]);
          if (!u.hasOwnProperty(f))
            throw new SyntaxError("Unknown Unicode token " + d[0]);
          if (o.inverseOf) {
            if (((f = r(o.inverseOf)), !u.hasOwnProperty(f)))
              throw new ReferenceError(
                ""
                  .concat("Unicode token missing data " + d[0], " -> ")
                  .concat(o.inverseOf)
              );
            (o = u[f]), (t = !t);
          }
          if (!o.bmp && !a)
            throw new SyntaxError(
              "Astral mode required for Unicode token " + d[0]
            );
          if (a) {
            if ("class" === e)
              throw new SyntaxError(
                "Astral mode does not support Unicode tokens within character classes"
              );
            return i(f, t);
          }
          return "class" === e
            ? t
              ? c(f)
              : o.bmp
            : "".concat((t ? "[^" : "[") + o.bmp, "]");
        },
        { scope: "all", optionalFlags: "A", leadChar: "\\" }
      ),
        (d.addUnicodeData = function(e) {
          var n = !0,
            a = !1,
            f = void 0;
          try {
            for (
              var c, i = (0, t.default)(e);
              !(n = (c = i.next()).done);
              n = !0
            ) {
              var o = c.value;
              if (!o.name) throw new Error("Unicode token requires name");
              if (!(o.inverseOf || o.bmp || o.astral))
                throw new Error(
                  "Unicode token has no character data " + o.name
                );
              (u[r(o.name)] = o), o.alias && (u[r(o.alias)] = o);
            }
          } catch (d) {
            (a = !0), (f = d);
          } finally {
            try {
              n || null == i.return || i.return();
            } finally {
              if (a) throw f;
            }
          }
          d.cache.flush("patterns");
        }),
        (d._getUnicodeProperty = function(d) {
          var e = r(d);
          return u[e];
        });
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(14);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(370));
    /*!
     * XRegExp Unicode Blocks 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Blocks"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      { name: "InAdlam", astral: "\ud83a[\udd00-\udd5f]" },
      { name: "InAegean_Numbers", astral: "\ud800[\udd00-\udd3f]" },
      { name: "InAhom", astral: "\ud805[\udf00-\udf3f]" },
      { name: "InAlchemical_Symbols", astral: "\ud83d[\udf00-\udf7f]" },
      { name: "InAlphabetic_Presentation_Forms", bmp: "ﬀ-ﭏ" },
      { name: "InAnatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude7f]" },
      {
        name: "InAncient_Greek_Musical_Notation",
        astral: "\ud834[\ude00-\ude4f]"
      },
      { name: "InAncient_Greek_Numbers", astral: "\ud800[\udd40-\udd8f]" },
      { name: "InAncient_Symbols", astral: "\ud800[\udd90-\uddcf]" },
      { name: "InArabic", bmp: "؀-ۿ" },
      { name: "InArabic_Extended_A", bmp: "ࢠ-ࣿ" },
      {
        name: "InArabic_Mathematical_Alphabetic_Symbols",
        astral: "\ud83b[\ude00-\udeff]"
      },
      { name: "InArabic_Presentation_Forms_A", bmp: "ﭐ-﷿" },
      { name: "InArabic_Presentation_Forms_B", bmp: "ﹰ-\ufeff" },
      { name: "InArabic_Supplement", bmp: "ݐ-ݿ" },
      { name: "InArmenian", bmp: "԰-֏" },
      { name: "InArrows", bmp: "←-⇿" },
      { name: "InAvestan", astral: "\ud802[\udf00-\udf3f]" },
      { name: "InBalinese", bmp: "ᬀ-᭿" },
      { name: "InBamum", bmp: "ꚠ-꛿" },
      { name: "InBamum_Supplement", astral: "\ud81a[\udc00-\ude3f]" },
      { name: "InBasic_Latin", bmp: "\0-" },
      { name: "InBassa_Vah", astral: "\ud81a[\uded0-\udeff]" },
      { name: "InBatak", bmp: "ᯀ-᯿" },
      { name: "InBengali", bmp: "ঀ-৿" },
      { name: "InBhaiksuki", astral: "\ud807[\udc00-\udc6f]" },
      { name: "InBlock_Elements", bmp: "▀-▟" },
      { name: "InBopomofo", bmp: "㄀-ㄯ" },
      { name: "InBopomofo_Extended", bmp: "ㆠ-ㆿ" },
      { name: "InBox_Drawing", bmp: "─-╿" },
      { name: "InBrahmi", astral: "\ud804[\udc00-\udc7f]" },
      { name: "InBraille_Patterns", bmp: "⠀-⣿" },
      { name: "InBuginese", bmp: "ᨀ-᨟" },
      { name: "InBuhid", bmp: "ᝀ-᝟" },
      { name: "InByzantine_Musical_Symbols", astral: "\ud834[\udc00-\udcff]" },
      { name: "InCJK_Compatibility", bmp: "㌀-㏿" },
      { name: "InCJK_Compatibility_Forms", bmp: "︰-﹏" },
      { name: "InCJK_Compatibility_Ideographs", bmp: "豈-﫿" },
      {
        name: "InCJK_Compatibility_Ideographs_Supplement",
        astral: "\ud87e[\udc00-\ude1f]"
      },
      { name: "InCJK_Radicals_Supplement", bmp: "⺀-⻿" },
      { name: "InCJK_Strokes", bmp: "㇀-㇯" },
      { name: "InCJK_Symbols_And_Punctuation", bmp: "　-〿" },
      { name: "InCJK_Unified_Ideographs", bmp: "一-鿿" },
      { name: "InCJK_Unified_Ideographs_Extension_A", bmp: "㐀-䶿" },
      {
        name: "InCJK_Unified_Ideographs_Extension_B",
        astral: "[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_C",
        astral:
          "\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf3f]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_D",
        astral: "\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_E",
        astral:
          "\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udeaf]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_F",
        astral:
          "\ud873[\udeb0-\udfff]|[\ud874-\ud879][\udc00-\udfff]|\ud87a[\udc00-\udfef]"
      },
      { name: "InCarian", astral: "\ud800[\udea0-\udedf]" },
      { name: "InCaucasian_Albanian", astral: "\ud801[\udd30-\udd6f]" },
      { name: "InChakma", astral: "\ud804[\udd00-\udd4f]" },
      { name: "InCham", bmp: "ꨀ-꩟" },
      { name: "InCherokee", bmp: "Ꭰ-᏿" },
      { name: "InCherokee_Supplement", bmp: "ꭰ-ꮿ" },
      { name: "InChess_Symbols", astral: "\ud83e[\ude00-\ude6f]" },
      { name: "InCombining_Diacritical_Marks", bmp: "̀-ͯ" },
      { name: "InCombining_Diacritical_Marks_Extended", bmp: "᪰-᫿" },
      { name: "InCombining_Diacritical_Marks_For_Symbols", bmp: "⃐-⃿" },
      { name: "InCombining_Diacritical_Marks_Supplement", bmp: "᷀-᷿" },
      { name: "InCombining_Half_Marks", bmp: "︠-︯" },
      { name: "InCommon_Indic_Number_Forms", bmp: "꠰-꠿" },
      { name: "InControl_Pictures", bmp: "␀-␿" },
      { name: "InCoptic", bmp: "Ⲁ-⳿" },
      { name: "InCoptic_Epact_Numbers", astral: "\ud800[\udee0-\udeff]" },
      { name: "InCounting_Rod_Numerals", astral: "\ud834[\udf60-\udf7f]" },
      { name: "InCuneiform", astral: "\ud808[\udc00-\udfff]" },
      {
        name: "InCuneiform_Numbers_And_Punctuation",
        astral: "\ud809[\udc00-\udc7f]"
      },
      { name: "InCurrency_Symbols", bmp: "₠-⃏" },
      { name: "InCypriot_Syllabary", astral: "\ud802[\udc00-\udc3f]" },
      { name: "InCyrillic", bmp: "Ѐ-ӿ" },
      { name: "InCyrillic_Extended_A", bmp: "ⷠ-ⷿ" },
      { name: "InCyrillic_Extended_B", bmp: "Ꙁ-ꚟ" },
      { name: "InCyrillic_Extended_C", bmp: "ᲀ-᲏" },
      { name: "InCyrillic_Supplement", bmp: "Ԁ-ԯ" },
      { name: "InDeseret", astral: "\ud801[\udc00-\udc4f]" },
      { name: "InDevanagari", bmp: "ऀ-ॿ" },
      { name: "InDevanagari_Extended", bmp: "꣠-ꣿ" },
      { name: "InDingbats", bmp: "✀-➿" },
      { name: "InDogra", astral: "\ud806[\udc00-\udc4f]" },
      { name: "InDomino_Tiles", astral: "\ud83c[\udc30-\udc9f]" },
      { name: "InDuployan", astral: "\ud82f[\udc00-\udc9f]" },
      { name: "InEarly_Dynastic_Cuneiform", astral: "\ud809[\udc80-\udd4f]" },
      {
        name: "InEgyptian_Hieroglyphs",
        astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2f]"
      },
      { name: "InElbasan", astral: "\ud801[\udd00-\udd2f]" },
      { name: "InEmoticons", astral: "\ud83d[\ude00-\ude4f]" },
      {
        name: "InEnclosed_Alphanumeric_Supplement",
        astral: "\ud83c[\udd00-\uddff]"
      },
      { name: "InEnclosed_Alphanumerics", bmp: "①-⓿" },
      { name: "InEnclosed_CJK_Letters_And_Months", bmp: "㈀-㋿" },
      {
        name: "InEnclosed_Ideographic_Supplement",
        astral: "\ud83c[\ude00-\udeff]"
      },
      { name: "InEthiopic", bmp: "ሀ-፿" },
      { name: "InEthiopic_Extended", bmp: "ⶀ-⷟" },
      { name: "InEthiopic_Extended_A", bmp: "꬀-꬯" },
      { name: "InEthiopic_Supplement", bmp: "ᎀ-᎟" },
      { name: "InGeneral_Punctuation", bmp: " -⁯" },
      { name: "InGeometric_Shapes", bmp: "■-◿" },
      { name: "InGeometric_Shapes_Extended", astral: "\ud83d[\udf80-\udfff]" },
      { name: "InGeorgian", bmp: "Ⴀ-ჿ" },
      { name: "InGeorgian_Extended", bmp: "Ა-Ჿ" },
      { name: "InGeorgian_Supplement", bmp: "ⴀ-⴯" },
      { name: "InGlagolitic", bmp: "Ⰰ-ⱟ" },
      { name: "InGlagolitic_Supplement", astral: "\ud838[\udc00-\udc2f]" },
      { name: "InGothic", astral: "\ud800[\udf30-\udf4f]" },
      { name: "InGrantha", astral: "\ud804[\udf00-\udf7f]" },
      { name: "InGreek_And_Coptic", bmp: "Ͱ-Ͽ" },
      { name: "InGreek_Extended", bmp: "ἀ-῿" },
      { name: "InGujarati", bmp: "઀-૿" },
      { name: "InGunjala_Gondi", astral: "\ud807[\udd60-\uddaf]" },
      { name: "InGurmukhi", bmp: "਀-੿" },
      { name: "InHalfwidth_And_Fullwidth_Forms", bmp: "＀-￯" },
      { name: "InHangul_Compatibility_Jamo", bmp: "㄰-㆏" },
      { name: "InHangul_Jamo", bmp: "ᄀ-ᇿ" },
      { name: "InHangul_Jamo_Extended_A", bmp: "ꥠ-꥿" },
      { name: "InHangul_Jamo_Extended_B", bmp: "ힰ-퟿" },
      { name: "InHangul_Syllables", bmp: "가-힯" },
      { name: "InHanifi_Rohingya", astral: "\ud803[\udd00-\udd3f]" },
      { name: "InHanunoo", bmp: "ᜠ-᜿" },
      { name: "InHatran", astral: "\ud802[\udce0-\udcff]" },
      { name: "InHebrew", bmp: "֐-׿" },
      { name: "InHigh_Private_Use_Surrogates", bmp: "\udb80-\udbff" },
      { name: "InHigh_Surrogates", bmp: "\ud800-\udb7f" },
      { name: "InHiragana", bmp: "぀-ゟ" },
      { name: "InIPA_Extensions", bmp: "ɐ-ʯ" },
      { name: "InIdeographic_Description_Characters", bmp: "⿰-⿿" },
      {
        name: "InIdeographic_Symbols_And_Punctuation",
        astral: "\ud81b[\udfe0-\udfff]"
      },
      { name: "InImperial_Aramaic", astral: "\ud802[\udc40-\udc5f]" },
      { name: "InIndic_Siyaq_Numbers", astral: "\ud83b[\udc70-\udcbf]" },
      { name: "InInscriptional_Pahlavi", astral: "\ud802[\udf60-\udf7f]" },
      { name: "InInscriptional_Parthian", astral: "\ud802[\udf40-\udf5f]" },
      { name: "InJavanese", bmp: "ꦀ-꧟" },
      { name: "InKaithi", astral: "\ud804[\udc80-\udccf]" },
      { name: "InKana_Extended_A", astral: "\ud82c[\udd00-\udd2f]" },
      { name: "InKana_Supplement", astral: "\ud82c[\udc00-\udcff]" },
      { name: "InKanbun", bmp: "㆐-㆟" },
      { name: "InKangxi_Radicals", bmp: "⼀-⿟" },
      { name: "InKannada", bmp: "ಀ-೿" },
      { name: "InKatakana", bmp: "゠-ヿ" },
      { name: "InKatakana_Phonetic_Extensions", bmp: "ㇰ-ㇿ" },
      { name: "InKayah_Li", bmp: "꤀-꤯" },
      { name: "InKharoshthi", astral: "\ud802[\ude00-\ude5f]" },
      { name: "InKhmer", bmp: "ក-៿" },
      { name: "InKhmer_Symbols", bmp: "᧠-᧿" },
      { name: "InKhojki", astral: "\ud804[\ude00-\ude4f]" },
      { name: "InKhudawadi", astral: "\ud804[\udeb0-\udeff]" },
      { name: "InLao", bmp: "຀-໿" },
      { name: "InLatin_1_Supplement", bmp: "-ÿ" },
      { name: "InLatin_Extended_A", bmp: "Ā-ſ" },
      { name: "InLatin_Extended_Additional", bmp: "Ḁ-ỿ" },
      { name: "InLatin_Extended_B", bmp: "ƀ-ɏ" },
      { name: "InLatin_Extended_C", bmp: "Ⱡ-Ɀ" },
      { name: "InLatin_Extended_D", bmp: "꜠-ꟿ" },
      { name: "InLatin_Extended_E", bmp: "ꬰ-꭯" },
      { name: "InLepcha", bmp: "ᰀ-ᱏ" },
      { name: "InLetterlike_Symbols", bmp: "℀-⅏" },
      { name: "InLimbu", bmp: "ᤀ-᥏" },
      { name: "InLinear_A", astral: "\ud801[\ude00-\udf7f]" },
      { name: "InLinear_B_Ideograms", astral: "\ud800[\udc80-\udcff]" },
      { name: "InLinear_B_Syllabary", astral: "\ud800[\udc00-\udc7f]" },
      { name: "InLisu", bmp: "ꓐ-꓿" },
      { name: "InLow_Surrogates", bmp: "\udc00-\udfff" },
      { name: "InLycian", astral: "\ud800[\ude80-\ude9f]" },
      { name: "InLydian", astral: "\ud802[\udd20-\udd3f]" },
      { name: "InMahajani", astral: "\ud804[\udd50-\udd7f]" },
      { name: "InMahjong_Tiles", astral: "\ud83c[\udc00-\udc2f]" },
      { name: "InMakasar", astral: "\ud807[\udee0-\udeff]" },
      { name: "InMalayalam", bmp: "ഀ-ൿ" },
      { name: "InMandaic", bmp: "ࡀ-࡟" },
      { name: "InManichaean", astral: "\ud802[\udec0-\udeff]" },
      { name: "InMarchen", astral: "\ud807[\udc70-\udcbf]" },
      { name: "InMasaram_Gondi", astral: "\ud807[\udd00-\udd5f]" },
      {
        name: "InMathematical_Alphanumeric_Symbols",
        astral: "\ud835[\udc00-\udfff]"
      },
      { name: "InMathematical_Operators", bmp: "∀-⋿" },
      { name: "InMayan_Numerals", astral: "\ud834[\udee0-\udeff]" },
      { name: "InMedefaidrin", astral: "\ud81b[\ude40-\ude9f]" },
      { name: "InMeetei_Mayek", bmp: "ꯀ-꯿" },
      { name: "InMeetei_Mayek_Extensions", bmp: "ꫠ-꫿" },
      { name: "InMende_Kikakui", astral: "\ud83a[\udc00-\udcdf]" },
      { name: "InMeroitic_Cursive", astral: "\ud802[\udda0-\uddff]" },
      { name: "InMeroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
      { name: "InMiao", astral: "\ud81b[\udf00-\udf9f]" },
      { name: "InMiscellaneous_Mathematical_Symbols_A", bmp: "⟀-⟯" },
      { name: "InMiscellaneous_Mathematical_Symbols_B", bmp: "⦀-⧿" },
      { name: "InMiscellaneous_Symbols", bmp: "☀-⛿" },
      { name: "InMiscellaneous_Symbols_And_Arrows", bmp: "⬀-⯿" },
      {
        name: "InMiscellaneous_Symbols_And_Pictographs",
        astral: "\ud83c[\udf00-\udfff]|\ud83d[\udc00-\uddff]"
      },
      { name: "InMiscellaneous_Technical", bmp: "⌀-⏿" },
      { name: "InModi", astral: "\ud805[\ude00-\ude5f]" },
      { name: "InModifier_Tone_Letters", bmp: "꜀-ꜟ" },
      { name: "InMongolian", bmp: "᠀-᢯" },
      { name: "InMongolian_Supplement", astral: "\ud805[\ude60-\ude7f]" },
      { name: "InMro", astral: "\ud81a[\ude40-\ude6f]" },
      { name: "InMultani", astral: "\ud804[\ude80-\udeaf]" },
      { name: "InMusical_Symbols", astral: "\ud834[\udd00-\uddff]" },
      { name: "InMyanmar", bmp: "က-႟" },
      { name: "InMyanmar_Extended_A", bmp: "ꩠ-ꩿ" },
      { name: "InMyanmar_Extended_B", bmp: "ꧠ-꧿" },
      { name: "InNKo", bmp: "߀-߿" },
      { name: "InNabataean", astral: "\ud802[\udc80-\udcaf]" },
      { name: "InNew_Tai_Lue", bmp: "ᦀ-᧟" },
      { name: "InNewa", astral: "\ud805[\udc00-\udc7f]" },
      { name: "InNumber_Forms", bmp: "⅐-↏" },
      { name: "InNushu", astral: "\ud82c[\udd70-\udeff]" },
      { name: "InOgham", bmp: " -᚟" },
      { name: "InOl_Chiki", bmp: "᱐-᱿" },
      { name: "InOld_Hungarian", astral: "\ud803[\udc80-\udcff]" },
      { name: "InOld_Italic", astral: "\ud800[\udf00-\udf2f]" },
      { name: "InOld_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
      { name: "InOld_Permic", astral: "\ud800[\udf50-\udf7f]" },
      { name: "InOld_Persian", astral: "\ud800[\udfa0-\udfdf]" },
      { name: "InOld_Sogdian", astral: "\ud803[\udf00-\udf2f]" },
      { name: "InOld_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
      { name: "InOld_Turkic", astral: "\ud803[\udc00-\udc4f]" },
      { name: "InOptical_Character_Recognition", bmp: "⑀-⑟" },
      { name: "InOriya", bmp: "଀-୿" },
      { name: "InOrnamental_Dingbats", astral: "\ud83d[\ude50-\ude7f]" },
      { name: "InOsage", astral: "\ud801[\udcb0-\udcff]" },
      { name: "InOsmanya", astral: "\ud801[\udc80-\udcaf]" },
      { name: "InPahawh_Hmong", astral: "\ud81a[\udf00-\udf8f]" },
      { name: "InPalmyrene", astral: "\ud802[\udc60-\udc7f]" },
      { name: "InPau_Cin_Hau", astral: "\ud806[\udec0-\udeff]" },
      { name: "InPhags_Pa", bmp: "ꡀ-꡿" },
      { name: "InPhaistos_Disc", astral: "\ud800[\uddd0-\uddff]" },
      { name: "InPhoenician", astral: "\ud802[\udd00-\udd1f]" },
      { name: "InPhonetic_Extensions", bmp: "ᴀ-ᵿ" },
      { name: "InPhonetic_Extensions_Supplement", bmp: "ᶀ-ᶿ" },
      { name: "InPlaying_Cards", astral: "\ud83c[\udca0-\udcff]" },
      { name: "InPrivate_Use_Area", bmp: "-" },
      { name: "InPsalter_Pahlavi", astral: "\ud802[\udf80-\udfaf]" },
      { name: "InRejang", bmp: "ꤰ-꥟" },
      { name: "InRumi_Numeral_Symbols", astral: "\ud803[\ude60-\ude7f]" },
      { name: "InRunic", bmp: "ᚠ-᛿" },
      { name: "InSamaritan", bmp: "ࠀ-࠿" },
      { name: "InSaurashtra", bmp: "ꢀ-꣟" },
      { name: "InSharada", astral: "\ud804[\udd80-\udddf]" },
      { name: "InShavian", astral: "\ud801[\udc50-\udc7f]" },
      { name: "InShorthand_Format_Controls", astral: "\ud82f[\udca0-\udcaf]" },
      { name: "InSiddham", astral: "\ud805[\udd80-\uddff]" },
      { name: "InSinhala", bmp: "඀-෿" },
      { name: "InSinhala_Archaic_Numbers", astral: "\ud804[\udde0-\uddff]" },
      { name: "InSmall_Form_Variants", bmp: "﹐-﹯" },
      { name: "InSogdian", astral: "\ud803[\udf30-\udf6f]" },
      { name: "InSora_Sompeng", astral: "\ud804[\udcd0-\udcff]" },
      { name: "InSoyombo", astral: "\ud806[\ude50-\udeaf]" },
      { name: "InSpacing_Modifier_Letters", bmp: "ʰ-˿" },
      { name: "InSpecials", bmp: "￰-￿" },
      { name: "InSundanese", bmp: "ᮀ-ᮿ" },
      { name: "InSundanese_Supplement", bmp: "᳀-᳏" },
      { name: "InSuperscripts_And_Subscripts", bmp: "⁰-₟" },
      { name: "InSupplemental_Arrows_A", bmp: "⟰-⟿" },
      { name: "InSupplemental_Arrows_B", bmp: "⤀-⥿" },
      { name: "InSupplemental_Arrows_C", astral: "\ud83e[\udc00-\udcff]" },
      { name: "InSupplemental_Mathematical_Operators", bmp: "⨀-⫿" },
      { name: "InSupplemental_Punctuation", bmp: "⸀-⹿" },
      {
        name: "InSupplemental_Symbols_And_Pictographs",
        astral: "\ud83e[\udd00-\uddff]"
      },
      {
        name: "InSupplementary_Private_Use_Area_A",
        astral: "[\udb80-\udbbf][\udc00-\udfff]"
      },
      {
        name: "InSupplementary_Private_Use_Area_B",
        astral: "[\udbc0-\udbff][\udc00-\udfff]"
      },
      { name: "InSutton_SignWriting", astral: "\ud836[\udc00-\udeaf]" },
      { name: "InSyloti_Nagri", bmp: "ꠀ-꠯" },
      { name: "InSyriac", bmp: "܀-ݏ" },
      { name: "InSyriac_Supplement", bmp: "ࡠ-࡯" },
      { name: "InTagalog", bmp: "ᜀ-ᜟ" },
      { name: "InTagbanwa", bmp: "ᝠ-᝿" },
      { name: "InTags", astral: "\udb40[\udc00-\udc7f]" },
      { name: "InTai_Le", bmp: "ᥐ-᥿" },
      { name: "InTai_Tham", bmp: "ᨠ-᪯" },
      { name: "InTai_Viet", bmp: "ꪀ-꫟" },
      { name: "InTai_Xuan_Jing_Symbols", astral: "\ud834[\udf00-\udf5f]" },
      { name: "InTakri", astral: "\ud805[\ude80-\udecf]" },
      { name: "InTamil", bmp: "஀-௿" },
      { name: "InTangut", astral: "[\ud81c-\ud821][\udc00-\udfff]" },
      { name: "InTangut_Components", astral: "\ud822[\udc00-\udeff]" },
      { name: "InTelugu", bmp: "ఀ-౿" },
      { name: "InThaana", bmp: "ހ-޿" },
      { name: "InThai", bmp: "฀-๿" },
      { name: "InTibetan", bmp: "ༀ-࿿" },
      { name: "InTifinagh", bmp: "ⴰ-⵿" },
      { name: "InTirhuta", astral: "\ud805[\udc80-\udcdf]" },
      { name: "InTransport_And_Map_Symbols", astral: "\ud83d[\ude80-\udeff]" },
      { name: "InUgaritic", astral: "\ud800[\udf80-\udf9f]" },
      { name: "InUnified_Canadian_Aboriginal_Syllabics", bmp: "᐀-ᙿ" },
      { name: "InUnified_Canadian_Aboriginal_Syllabics_Extended", bmp: "ᢰ-᣿" },
      { name: "InVai", bmp: "ꔀ-꘿" },
      { name: "InVariation_Selectors", bmp: "︀-️" },
      {
        name: "InVariation_Selectors_Supplement",
        astral: "\udb40[\udd00-\uddef]"
      },
      { name: "InVedic_Extensions", bmp: "᳐-᳿" },
      { name: "InVertical_Forms", bmp: "︐-︟" },
      { name: "InWarang_Citi", astral: "\ud806[\udca0-\udcff]" },
      { name: "InYi_Radicals", bmp: "꒐-꓏" },
      { name: "InYi_Syllables", bmp: "ꀀ-꒏" },
      { name: "InYijing_Hexagram_Symbols", bmp: "䷀-䷿" },
      { name: "InZanabazar_Square", astral: "\ud806[\ude00-\ude4f]" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(14);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(372));
    /*!
     * XRegExp Unicode Categories 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Categories"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      {
        name: "C",
        alias: "Other",
        isBmpLast: !0,
        bmp:
          "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜؝۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",
        astral:
          "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcbd\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca0-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]"
      },
      { name: "Cc", alias: "Control", bmp: "\0--" },
      {
        name: "Cf",
        alias: "Format",
        bmp: "­؀-؅؜۝܏࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\ufeff￹-￻",
        astral:
          "\ud804[\udcbd\udccd]|\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|\udb40[\udc01\udc20-\udc7f]"
      },
      {
        name: "Cn",
        alias: "Unassigned",
        bmp:
          "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿؝܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",
        astral:
          "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcc2-\udccc\udcce\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca4-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|[\udbbf\udbff][\udffe\udfff]"
      },
      {
        name: "Co",
        alias: "Private_Use",
        bmp: "-",
        astral:
          "[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]"
      },
      { name: "Cs", alias: "Surrogate", bmp: "\ud800-\udfff" },
      {
        name: "L",
        alias: "Letter",
        bmp:
          "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udd00-\udd43]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "LC",
        alias: "Cased_Letter",
        bmp:
          "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ",
        astral:
          "\ud801[\udc00-\udc4f\udcb0-\udcd3\udcd8-\udcfb]|\ud803[\udc80-\udcb2\udcc0-\udcf2]|\ud806[\udca0-\udcdf]|\ud81b[\ude40-\ude7f]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udd00-\udd43]"
      },
      {
        name: "Ll",
        alias: "Lowercase_Letter",
        bmp:
          "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
        astral:
          "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"
      },
      {
        name: "Lm",
        alias: "Modifier_Letter",
        bmp:
          "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟｰﾞﾟ",
        astral: "\ud81a[\udf40-\udf43]|\ud81b[\udf93-\udf9f\udfe0\udfe1]"
      },
      {
        name: "Lo",
        alias: "Other_Letter",
        bmp:
          "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳱᳵᳶℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc50-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud83a[\udc00-\udcc4]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" },
      {
        name: "Lu",
        alias: "Uppercase_Letter",
        bmp:
          "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
        astral:
          "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]"
      },
      {
        name: "M",
        alias: "Mark",
        bmp:
          "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",
        astral:
          "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc00-\udc02\udc38-\udc46\udc7f-\udc82\udcb0-\udcba\udd00-\udd02\udd27-\udd34\udd45\udd46\udd73\udd80-\udd82\uddb3-\uddc0\uddc9-\uddcc\ude2c-\ude37\ude3e\udedf-\udeea\udf00-\udf03\udf3b\udf3c\udf3e-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc35-\udc46\udc5e\udcb0-\udcc3\uddaf-\uddb5\uddb8-\uddc0\udddc\udddd\ude30-\ude40\udeab-\udeb7\udf1d-\udf2b]|\ud806[\udc2c-\udc3a\ude01-\ude0a\ude33-\ude39\ude3b-\ude3e\ude47\ude51-\ude5b\ude8a-\ude99]|\ud807[\udc2f-\udc36\udc38-\udc3f\udc92-\udca7\udca9-\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd8a-\udd8e\udd90\udd91\udd93-\udd97\udef3-\udef6]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf51-\udf7e\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"
      },
      {
        name: "Mc",
        alias: "Spacing_Mark",
        bmp:
          "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡ᳲᳳ᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦽ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",
        astral:
          "\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd45\udd46\udd82\uddb3-\uddb5\uddbf\uddc0\ude2c-\ude2e\ude32\ude33\ude35\udee0-\udee2\udf02\udf03\udf3e\udf3f\udf41-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63]|\ud805[\udc35-\udc37\udc40\udc41\udc45\udcb0-\udcb2\udcb9\udcbb-\udcbe\udcc1\uddaf-\uddb1\uddb8-\uddbb\uddbe\ude30-\ude32\ude3b\ude3c\ude3e\udeac\udeae\udeaf\udeb6\udf20\udf21\udf26]|\ud806[\udc2c-\udc2e\udc38\ude39\ude57\ude58\ude97]|\ud807[\udc2f\udc3e\udca9\udcb1\udcb4\udd8a-\udd8e\udd93\udd94\udd96\udef5\udef6]|\ud81b[\udf51-\udf7e]|\ud834[\udd65\udd66\udd6d-\udd72]"
      },
      { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" },
      {
        name: "Mn",
        alias: "Nonspacing_Mark",
        bmp:
          "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ఀఄా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",
        astral:
          "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc01\udc38-\udc46\udc7f-\udc81\udcb3-\udcb6\udcb9\udcba\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd73\udd80\udd81\uddb6-\uddbe\uddc9-\uddcc\ude2f-\ude31\ude34\ude36\ude37\ude3e\udedf\udee3-\udeea\udf00\udf01\udf3b\udf3c\udf40\udf66-\udf6c\udf70-\udf74]|\ud805[\udc38-\udc3f\udc42-\udc44\udc46\udc5e\udcb3-\udcb8\udcba\udcbf\udcc0\udcc2\udcc3\uddb2-\uddb5\uddbc\uddbd\uddbf\uddc0\udddc\udddd\ude33-\ude3a\ude3d\ude3f\ude40\udeab\udead\udeb0-\udeb5\udeb7\udf1d-\udf1f\udf22-\udf25\udf27-\udf2b]|\ud806[\udc2f-\udc37\udc39\udc3a\ude01-\ude0a\ude33-\ude38\ude3b-\ude3e\ude47\ude51-\ude56\ude59-\ude5b\ude8a-\ude96\ude98\ude99]|\ud807[\udc30-\udc36\udc38-\udc3d\udc3f\udc92-\udca7\udcaa-\udcb0\udcb2\udcb3\udcb5\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd90\udd91\udd95\udd97\udef3\udef4]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"
      },
      {
        name: "N",
        alias: "Number",
        bmp:
          "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
        astral:
          "\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud801[\udca0-\udca9]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\udd30-\udd39\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b]|\ud806[\udce0-\udcf2]|\ud807[\udc50-\udc6c\udd50-\udd59\udda0-\udda9]|\ud809[\udc00-\udc6e]|\ud81a[\ude60-\ude69\udf50-\udf59\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud835[\udfce-\udfff]|\ud83a[\udcc7-\udccf\udd50-\udd59]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]"
      },
      {
        name: "Nd",
        alias: "Decimal_Number",
        bmp:
          "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
        astral:
          "\ud801[\udca0-\udca9]|\ud803[\udd30-\udd39]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf39]|\ud806[\udce0-\udce9]|\ud807[\udc50-\udc59\udd50-\udd59\udda0-\udda9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]|\ud83a[\udd50-\udd59]"
      },
      {
        name: "Nl",
        alias: "Letter_Number",
        bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",
        astral:
          "\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]|\ud809[\udc00-\udc6e]"
      },
      {
        name: "No",
        alias: "Other_Number",
        bmp:
          "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",
        astral:
          "\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc65\udde1-\uddf4]|\ud805[\udf3a\udf3b]|\ud806[\udcea-\udcf2]|\ud807[\udc5a-\udc6c]|\ud81a[\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud83a[\udcc7-\udccf]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]"
      },
      {
        name: "P",
        alias: "Punctuation",
        bmp:
          "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹎、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",
        astral:
          "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"
      },
      { name: "Pc", alias: "Connector_Punctuation", bmp: "_‿⁀⁔︳︴﹍-﹏＿" },
      {
        name: "Pd",
        alias: "Dash_Punctuation",
        bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－"
      },
      {
        name: "Pe",
        alias: "Close_Punctuation",
        bmp:
          "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣"
      },
      { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" },
      { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" },
      {
        name: "Po",
        alias: "Other_Punctuation",
        bmp:
          "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙭᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹎、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",
        astral:
          "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"
      },
      {
        name: "Ps",
        alias: "Open_Punctuation",
        bmp:
          "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢"
      },
      {
        name: "S",
        alias: "Symbol",
        bmp:
          "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₿℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",
        astral:
          "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud83b[\udcac\udcb0\udef0\udef1]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]"
      },
      {
        name: "Sc",
        alias: "Currency_Symbol",
        bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-₿꠸﷼﹩＄￠￡￥￦",
        astral: "𞲰"
      },
      {
        name: "Sk",
        alias: "Modifier_Symbol",
        bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛﮲-﯁＾｀￣",
        astral: "\ud83c[\udffb-\udfff]"
      },
      {
        name: "Sm",
        alias: "Math_Symbol",
        bmp:
          "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",
        astral:
          "\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83b[\udef0\udef1]"
      },
      {
        name: "So",
        alias: "Other_Symbol",
        bmp:
          "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﷽￤￨￭￮￼�",
        astral:
          "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|𞲬|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udffa]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]"
      },
      { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" },
      { name: "Zl", alias: "Line_Separator", bmp: "\u2028" },
      { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" },
      { name: "Zs", alias: "Space_Separator", bmp: "    -   　" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(14);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(374));
    /*!
     * XRegExp Unicode Properties 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2012-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Properties"
        );
      var u = t.default;
      u.push({ name: "Assigned", inverseOf: "Cn" }), d.addUnicodeData(u);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      { name: "ASCII", bmp: "\0-" },
      {
        name: "Alphabetic",
        bmp:
          "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഀ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽꣾꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc00-\udc45\udc82-\udcb8\udcd0-\udce8\udd00-\udd32\udd44-\udd46\udd50-\udd72\udd76\udd80-\uddbf\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude34\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udee8\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d-\udf44\udf47\udf48\udf4b\udf4c\udf50\udf57\udf5d-\udf63]|\ud805[\udc00-\udc41\udc43-\udc45\udc47-\udc4a\udc80-\udcc1\udcc4\udcc5\udcc7\udd80-\uddb5\uddb8-\uddbe\uddd8-\udddd\ude00-\ude3e\ude40\ude44\ude80-\udeb5\udf00-\udf1a\udf1d-\udf2a]|\ud806[\udc00-\udc38\udca0-\udcdf\udcff\ude00-\ude32\ude35-\ude3e\ude50-\ude83\ude86-\ude97\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc3e\udc40\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd41\udd43\udd46\udd47\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd96\udd98\udee0-\udef6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50-\udf7e\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9e]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd47]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "Any",
        isBmpLast: !0,
        bmp: "\0-￿",
        astral: "[\ud800-\udbff][\udc00-\udfff]"
      },
      {
        name: "Default_Ignorable_Code_Point",
        bmp: "­͏؜ᅟᅠ឴឵᠋-᠎​-‏‪-‮⁠-⁯ㅤ︀-️\ufeffﾠ￰-￸",
        astral:
          "\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|[\udb40-\udb43][\udc00-\udfff]"
      },
      {
        name: "Lowercase",
        bmp:
          "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟸ-ꟺꬰ-ꭚꭜ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
        astral:
          "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"
      },
      {
        name: "Noncharacter_Code_Point",
        bmp: "﷐-﷯￾￿",
        astral:
          "[\ud83f\ud87f\ud8bf\ud8ff\ud93f\ud97f\ud9bf\ud9ff\uda3f\uda7f\udabf\udaff\udb3f\udb7f\udbbf\udbff][\udffe\udfff]"
      },
      {
        name: "Uppercase",
        bmp:
          "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
        astral:
          "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]"
      },
      { name: "White_Space", bmp: "\t-\r    - \u2028\u2029  　" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(14);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(376));
    /*!
     * XRegExp Unicode Scripts 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Scripts"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      {
        name: "Adlam",
        astral: "\ud83a[\udd00-\udd4a\udd50-\udd59\udd5e\udd5f]"
      },
      {
        name: "Ahom",
        astral: "\ud805[\udf00-\udf1a\udf1d-\udf2b\udf30-\udf3f]"
      },
      { name: "Anatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude46]" },
      {
        name: "Arabic",
        bmp: "؀-؄؆-؋؍-ؚ؜؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࢠ-ࢴࢶ-ࢽ࣓-ࣣ࣡-ࣿﭐ-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷽ﹰ-ﹴﹶ-ﻼ",
        astral:
          "\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]"
      },
      { name: "Armenian", bmp: "Ա-Ֆՙ-ֈ֊֍-֏ﬓ-ﬗ" },
      { name: "Avestan", astral: "\ud802[\udf00-\udf35\udf39-\udf3f]" },
      { name: "Balinese", bmp: "ᬀ-ᭋ᭐-᭼" },
      { name: "Bamum", bmp: "ꚠ-꛷", astral: "\ud81a[\udc00-\ude38]" },
      { name: "Bassa_Vah", astral: "\ud81a[\uded0-\udeed\udef0-\udef5]" },
      { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" },
      { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" },
      {
        name: "Bhaiksuki",
        astral: "\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc45\udc50-\udc6c]"
      },
      { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆺ" },
      { name: "Brahmi", astral: "\ud804[\udc00-\udc4d\udc52-\udc6f\udc7f]" },
      { name: "Braille", bmp: "⠀-⣿" },
      { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" },
      { name: "Buhid", bmp: "ᝀ-ᝓ" },
      { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ" },
      { name: "Carian", astral: "\ud800[\udea0-\uded0]" },
      { name: "Caucasian_Albanian", astral: "\ud801[\udd30-\udd63\udd6f]" },
      { name: "Chakma", astral: "\ud804[\udd00-\udd34\udd36-\udd46]" },
      { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" },
      { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" },
      {
        name: "Common",
        bmp:
          "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·։؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-₿℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮘-⯈⯊-⯾⸀-⹎⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\ufeff！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",
        astral:
          "\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9b\uddd0-\uddfc\udee1-\udefb]|\ud82f[\udca0-\udca3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\udde8\udee0-\udef3\udf00-\udf56\udf60-\udf78]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\ud83b[\udc71-\udcb4]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd00-\udd0c\udd10-\udd6b\udd70-\uddac\udde6-\uddff\ude01\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]|\udb40[\udc01\udc20-\udc7f]"
      },
      { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" },
      {
        name: "Cuneiform",
        astral:
          "\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc70-\udc74\udc80-\udd43]"
      },
      {
        name: "Cypriot",
        astral:
          "\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]"
      },
      { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" },
      { name: "Deseret", astral: "\ud801[\udc00-\udc4f]" },
      { name: "Devanagari", bmp: "ऀ-ॐ॓-ॣ०-ॿ꣠-ꣿ" },
      { name: "Dogra", astral: "\ud806[\udc00-\udc3b]" },
      {
        name: "Duployan",
        astral:
          "\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9c-\udc9f]"
      },
      {
        name: "Egyptian_Hieroglyphs",
        astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]"
      },
      { name: "Elbasan", astral: "\ud801[\udd00-\udd27]" },
      {
        name: "Ethiopic",
        bmp:
          "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ"
      },
      { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" },
      {
        name: "Glagolitic",
        bmp: "Ⰰ-Ⱞⰰ-ⱞ",
        astral:
          "\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]"
      },
      { name: "Gothic", astral: "\ud800[\udf30-\udf4a]" },
      {
        name: "Grantha",
        astral:
          "\ud804[\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]"
      },
      {
        name: "Greek",
        bmp:
          "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",
        astral: "\ud800[\udd40-\udd8e\udda0]|\ud834[\ude00-\ude45]"
      },
      { name: "Gujarati", bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿" },
      {
        name: "Gunjala_Gondi",
        astral:
          "\ud807[\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd98\udda0-\udda9]"
      },
      { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" },
      {
        name: "Han",
        bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶵一-鿯豈-舘並-龎",
        astral:
          "[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "Hangul",
        bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
      },
      { name: "Hanifi_Rohingya", astral: "\ud803[\udd00-\udd27\udd30-\udd39]" },
      { name: "Hanunoo", bmp: "ᜠ-᜴" },
      {
        name: "Hatran",
        astral: "\ud802[\udce0-\udcf2\udcf4\udcf5\udcfb-\udcff]"
      },
      { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" },
      {
        name: "Hiragana",
        bmp: "ぁ-ゖゝ-ゟ",
        astral: "\ud82c[\udc01-\udd1e]|🈀"
      },
      {
        name: "Imperial_Aramaic",
        astral: "\ud802[\udc40-\udc55\udc57-\udc5f]"
      },
      {
        name: "Inherited",
        bmp: "̀-ًͯ҅҆-ٰٕ॒॑᪰-᪾᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",
        astral:
          "\ud800[\uddfd\udee0]|𑌻|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\udb40[\udd00-\uddef]"
      },
      {
        name: "Inscriptional_Pahlavi",
        astral: "\ud802[\udf60-\udf72\udf78-\udf7f]"
      },
      {
        name: "Inscriptional_Parthian",
        astral: "\ud802[\udf40-\udf55\udf58-\udf5f]"
      },
      { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" },
      { name: "Kaithi", astral: "\ud804[\udc80-\udcc1\udccd]" },
      { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲ" },
      {
        name: "Katakana",
        bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",
        astral: "𛀀"
      },
      { name: "Kayah_Li", bmp: "꤀-꤭꤯" },
      {
        name: "Kharoshthi",
        astral:
          "\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f-\ude48\ude50-\ude58]"
      },
      { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" },
      { name: "Khojki", astral: "\ud804[\ude00-\ude11\ude13-\ude3e]" },
      { name: "Khudawadi", astral: "\ud804[\udeb0-\udeea\udef0-\udef9]" },
      { name: "Lao", bmp: "ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" },
      {
        name: "Latin",
        bmp:
          "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞹꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ"
      },
      { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" },
      { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" },
      {
        name: "Linear_A",
        astral: "\ud801[\ude00-\udf36\udf40-\udf55\udf60-\udf67]"
      },
      {
        name: "Linear_B",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]"
      },
      { name: "Lisu", bmp: "ꓐ-꓿" },
      { name: "Lycian", astral: "\ud800[\ude80-\ude9c]" },
      { name: "Lydian", astral: "\ud802[\udd20-\udd39\udd3f]" },
      { name: "Mahajani", astral: "\ud804[\udd50-\udd76]" },
      { name: "Makasar", astral: "\ud807[\udee0-\udef8]" },
      { name: "Malayalam", bmp: "ഀ-ഃഅ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" },
      { name: "Mandaic", bmp: "ࡀ-࡛࡞" },
      { name: "Manichaean", astral: "\ud802[\udec0-\udee6\udeeb-\udef6]" },
      {
        name: "Marchen",
        astral: "\ud807[\udc70-\udc8f\udc92-\udca7\udca9-\udcb6]"
      },
      {
        name: "Masaram_Gondi",
        astral:
          "\ud807[\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd47\udd50-\udd59]"
      },
      { name: "Medefaidrin", astral: "\ud81b[\ude40-\ude9a]" },
      { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" },
      { name: "Mende_Kikakui", astral: "\ud83a[\udc00-\udcc4\udcc7-\udcd6]" },
      {
        name: "Meroitic_Cursive",
        astral: "\ud802[\udda0-\uddb7\uddbc-\uddcf\uddd2-\uddff]"
      },
      { name: "Meroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
      {
        name: "Miao",
        astral: "\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]"
      },
      { name: "Modi", astral: "\ud805[\ude00-\ude44\ude50-\ude59]" },
      {
        name: "Mongolian",
        bmp: "᠀᠁᠄᠆-᠎᠐-᠙ᠠ-ᡸᢀ-ᢪ",
        astral: "\ud805[\ude60-\ude6c]"
      },
      { name: "Mro", astral: "\ud81a[\ude40-\ude5e\ude60-\ude69\ude6e\ude6f]" },
      {
        name: "Multani",
        astral:
          "\ud804[\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea9]"
      },
      { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" },
      { name: "Nabataean", astral: "\ud802[\udc80-\udc9e\udca7-\udcaf]" },
      { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" },
      { name: "Newa", astral: "\ud805[\udc00-\udc59\udc5b\udc5d\udc5e]" },
      { name: "Nko", bmp: "߀-ߺ߽-߿" },
      { name: "Nushu", astral: "𖿡|\ud82c[\udd70-\udefb]" },
      { name: "Ogham", bmp: " -᚜" },
      { name: "Ol_Chiki", bmp: "᱐-᱿" },
      {
        name: "Old_Hungarian",
        astral: "\ud803[\udc80-\udcb2\udcc0-\udcf2\udcfa-\udcff]"
      },
      { name: "Old_Italic", astral: "\ud800[\udf00-\udf23\udf2d-\udf2f]" },
      { name: "Old_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
      { name: "Old_Permic", astral: "\ud800[\udf50-\udf7a]" },
      { name: "Old_Persian", astral: "\ud800[\udfa0-\udfc3\udfc8-\udfd5]" },
      { name: "Old_Sogdian", astral: "\ud803[\udf00-\udf27]" },
      { name: "Old_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
      { name: "Old_Turkic", astral: "\ud803[\udc00-\udc48]" },
      { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୷" },
      { name: "Osage", astral: "\ud801[\udcb0-\udcd3\udcd8-\udcfb]" },
      { name: "Osmanya", astral: "\ud801[\udc80-\udc9d\udca0-\udca9]" },
      {
        name: "Pahawh_Hmong",
        astral:
          "\ud81a[\udf00-\udf45\udf50-\udf59\udf5b-\udf61\udf63-\udf77\udf7d-\udf8f]"
      },
      { name: "Palmyrene", astral: "\ud802[\udc60-\udc7f]" },
      { name: "Pau_Cin_Hau", astral: "\ud806[\udec0-\udef8]" },
      { name: "Phags_Pa", bmp: "ꡀ-꡷" },
      { name: "Phoenician", astral: "\ud802[\udd00-\udd1b\udd1f]" },
      {
        name: "Psalter_Pahlavi",
        astral: "\ud802[\udf80-\udf91\udf99-\udf9c\udfa9-\udfaf]"
      },
      { name: "Rejang", bmp: "ꤰ-꥓꥟" },
      { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" },
      { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" },
      { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" },
      { name: "Sharada", astral: "\ud804[\udd80-\uddcd\uddd0-\udddf]" },
      { name: "Shavian", astral: "\ud801[\udc50-\udc7f]" },
      { name: "Siddham", astral: "\ud805[\udd80-\uddb5\uddb8-\udddd]" },
      {
        name: "SignWriting",
        astral: "\ud836[\udc00-\ude8b\ude9b-\ude9f\udea1-\udeaf]"
      },
      {
        name: "Sinhala",
        bmp: "ංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",
        astral: "\ud804[\udde1-\uddf4]"
      },
      { name: "Sogdian", astral: "\ud803[\udf30-\udf59]" },
      { name: "Sora_Sompeng", astral: "\ud804[\udcd0-\udce8\udcf0-\udcf9]" },
      { name: "Soyombo", astral: "\ud806[\ude50-\ude83\ude86-\udea2]" },
      { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" },
      { name: "Syloti_Nagri", bmp: "ꠀ-꠫" },
      { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" },
      { name: "Tagalog", bmp: "ᜀ-ᜌᜎ-᜔" },
      { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" },
      { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" },
      { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" },
      { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" },
      { name: "Takri", astral: "\ud805[\ude80-\udeb7\udec0-\udec9]" },
      { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺" },
      {
        name: "Tangut",
        astral:
          "𖿠|[\ud81c-\ud820][\udc00-\udfff]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]"
      },
      { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘ-ౚౠ-ౣ౦-౯౸-౿" },
      { name: "Thaana", bmp: "ހ-ޱ" },
      { name: "Thai", bmp: "ก-ฺเ-๛" },
      { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" },
      { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" },
      { name: "Tirhuta", astral: "\ud805[\udc80-\udcc7\udcd0-\udcd9]" },
      { name: "Ugaritic", astral: "\ud800[\udf80-\udf9d\udf9f]" },
      { name: "Vai", bmp: "ꔀ-ꘫ" },
      { name: "Warang_Citi", astral: "\ud806[\udca0-\udcf2\udcff]" },
      { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" },
      { name: "Zanabazar_Square", astral: "\ud806[\ude00-\ude47]" }
    ];
  },
  function(d, u, e) {
    const { Transform: n } = e(2),
      t = e(32),
      a = e(25),
      { VALID_REPEAT_TYPES: r } = e(153),
      f = e(378),
      c = d => ({ [d.period.toLowerCase()]: d.n }),
      i = (d, u) => {
        const { type: e } = d.repeat;
        if (e === r.start)
          return ((d, u) => {
            if (!d.start)
              throw new Error("@repeat from start without a @start date");
            const e = c(d.repeat);
            return u
              .fromISO(d.start)
              .plus(e)
              .toString();
          })(d, u);
        if (e === r.complete)
          return ((d, u) => {
            const { hour: e, minute: n } = d.start
              ? u.fromISO(d.start)
              : { hour: 0, minute: 0 };
            return u
              .local()
              .startOf("day")
              .plus(c(d.repeat))
              .set({ hour: e, minute: n })
              .toString();
          })(d, u);
        throw new Error(`Invalid repeat type: ${e}`);
      };
    d.exports = {
      parse: ({ time: d, timezone: u }) => {
        const e = a(d, u);
        return new n({
          objectMode: !0,
          transform(d, u, n) {
            try {
              if (d.repeat)
                return (
                  this.push({ ...d, repeat: f(d.repeat.toLowerCase(), e) }), n()
                );
            } catch (d) {
              return n(d);
            }
            return this.push(d), n();
          }
        });
      },
      process: ({ time: d, timezone: u }) => {
        const e = a(d, u);
        return new n({
          objectMode: !0,
          transform(d, u, n) {
            return t.isComplete(d) && d.repeat
              ? (this.push({
                  ...d,
                  start: i(d, e),
                  type: t.TYPES.INCOMPLETE_TASK
                }),
                n())
              : (this.push(d), n());
          }
        });
      },
      stringify: () =>
        new n({
          objectMode: !0,
          transform(d, u, e) {
            return d.repeat
              ? (this.push({ ...d, repeat: d.repeat.string }), e())
              : (this.push(d), e());
          }
        })
    };
  },
  function(d, u, e) {
    const n = e(379),
      { VALID_REPEAT_TYPES: t } = e(153),
      a = {
        hour: "HOURS",
        hours: "HOURS",
        day: "DAYS",
        days: "DAYS",
        daily: "DAYS",
        week: "WEEKS",
        weeks: "WEEKS",
        weekly: "WEEKS",
        month: "MONTHS",
        months: "MONTHS",
        monthly: "MONTHS",
        year: "YEARS",
        years: "YEARS",
        anually: "YEARS",
        semianually: "MONTHS"
      },
      r = [
        n("^every (?<n>\\d+ )?(?<period>\\w+) from (?<type>\\w+)$"),
        n("^(?<period>daily|monthly|semianually|anually) from (?<type>\\w+)$")
      ],
      f = (d, u) => ("semianually" === u ? 6 : parseInt(d, 10)),
      c = d => {
        const u = a[d];
        if (!u) throw new Error(`Invalid @repeat period: ${d}\n`);
        return u;
      },
      i = d => {
        const u = t[d];
        if (!u) throw new Error(`Invalid @repeat type: ${d}\n`);
        return u;
      };
    d.exports = d => {
      const u = r.find(u => n.exec(d, u));
      if (!u) throw new Error(`Invalid @repeat tag: @${d}\n`);
      const { n: e = 1, period: t, type: a } = n.exec(d, u);
      return { string: d, n: f(e, t), period: c(t), type: i(a) };
    };
  },
  function(d, u, e) {
    "use strict";
    var n = e(17);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(380)),
      a = n(e(423)),
      r = n(e(424)),
      f = n(e(425)),
      c = n(e(426)),
      i = n(e(428)),
      o = n(e(430)),
      s = n(e(432));
    (0, a.default)(t.default),
      (0, r.default)(t.default),
      (0, f.default)(t.default),
      (0, c.default)(t.default),
      (0, i.default)(t.default),
      (0, o.default)(t.default),
      (0, s.default)(t.default);
    var l = t.default;
    (u.default = l), (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(17);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(381)),
      a = n(e(396)),
      r = n(e(101)),
      f = n(e(418)),
      c = "xregexp",
      i = { astral: !1, namespacing: !1 },
      o = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
      },
      s = {},
      l = {},
      m = {},
      p = [],
      h = "default",
      b = "class",
      y = {
        default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
        class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
      },
      g = /\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g,
      _ = void 0 === o.exec.call(/()??/, "")[1],
      v = void 0 !== /x/.flags,
      w = {}.toString;
    function I(d) {
      var u = !0;
      try {
        new RegExp("", d);
      } catch (d) {
        u = !1;
      }
      return u;
    }
    var S = I("u"),
      x = I("y"),
      k = { g: !0, i: !0, m: !0, u: S, y: x };
    function E(d, u, e, n, t) {
      if (((d[c] = { captureNames: u }), t)) return d;
      if (d.__proto__) d.__proto__ = U.prototype;
      else for (var a in U.prototype) d[a] = U.prototype[a];
      return (
        (d[c].source = e),
        (d[c].flags = n
          ? n
              .split("")
              .sort()
              .join("")
          : n),
        d
      );
    }
    function M(d) {
      return o.replace.call(d, /([\s\S])(?=[\s\S]*\1)/g, "");
    }
    function T(d, u) {
      if (!U.isRegExp(d)) throw new TypeError("Type RegExp expected");
      var e = d[c] || {},
        n = (function(d) {
          return v
            ? d.flags
            : o.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(d))[1];
        })(d),
        t = "",
        a = "",
        r = null,
        f = null;
      return (
        (u = u || {}).removeG && (a += "g"),
        u.removeY && (a += "y"),
        a && (n = o.replace.call(n, new RegExp("[".concat(a, "]+"), "g"), "")),
        u.addG && (t += "g"),
        u.addY && (t += "y"),
        t && (n = M(n + t)),
        u.isInternalOnly ||
          (void 0 !== e.source && (r = e.source),
          null != e.flags && (f = t ? M(e.flags + t) : e.flags)),
        (d = E(
          new RegExp(u.source || d.source, n),
          (function(d) {
            return !(!d[c] || !d[c].captureNames);
          })(d)
            ? e.captureNames.slice(0)
            : null,
          r,
          f,
          u.isInternalOnly
        ))
      );
    }
    function O(d) {
      return (0, f.default)(d, 16);
    }
    function C(d, u, e) {
      return "(" === d.input[d.index - 1] ||
        ")" === d.input[d.index + d[0].length] ||
        "|" === d.input[d.index - 1] ||
        "|" === d.input[d.index + d[0].length] ||
        d.index < 1 ||
        d.index + d[0].length >= d.input.length ||
        o.test.call(/^\(\?[:=!]/, d.input.substr(d.index - 3, 3)) ||
        (function(d, u, e) {
          return o.test.call(
            -1 !== e.indexOf("x")
              ? /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
              : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,
            d.slice(u)
          );
        })(d.input, d.index + d[0].length, e)
        ? ""
        : "(?:)";
    }
    function A(d) {
      return (0, f.default)(d, 10).toString(16);
    }
    function L(d, u) {
      return w.call(d) === "[object ".concat(u, "]");
    }
    function P(d) {
      for (; d.length < 4; ) d = "0".concat(d);
      return d;
    }
    function N(d) {
      var u = {};
      return L(d, "String")
        ? (U.forEach(d, /[^\s,]+/, function(d) {
            u[d] = !0;
          }),
          u)
        : d;
    }
    function R(d) {
      if (!/^[\w$]$/.test(d))
        throw new Error("Flag must be a single character A-Za-z0-9_$");
      k[d] = !0;
    }
    function j(d, u, e, n, t) {
      for (var a, r, f = p.length, c = d[e], i = null; f--; )
        if (
          !(
            ((r = p[f]).leadChar && r.leadChar !== c) ||
            (r.scope !== n && "all" !== r.scope) ||
            (r.flag && -1 === u.indexOf(r.flag))
          ) &&
          (a = U.exec(d, r.regex, e, "sticky"))
        ) {
          i = {
            matchLength: a[0].length,
            output: r.handler.call(t, a, n, u),
            reparse: r.reparse
          };
          break;
        }
      return i;
    }
    function D(d) {
      i.astral = d;
    }
    function B(d) {
      i.namespacing = d;
    }
    function F(d) {
      if (null == d)
        throw new TypeError("Cannot convert null or undefined to object");
      return d;
    }
    function U(d, u) {
      if (U.isRegExp(d)) {
        if (void 0 !== u)
          throw new TypeError("Cannot supply flags when copying a RegExp");
        return T(d);
      }
      if (
        ((d = void 0 === d ? "" : String(d)),
        (u = void 0 === u ? "" : String(u)),
        U.isInstalled("astral") && -1 === u.indexOf("A") && (u += "A"),
        m[d] || (m[d] = {}),
        !m[d][u])
      ) {
        for (
          var e,
            n = { hasNamedCapture: !1, captureNames: [] },
            t = h,
            f = "",
            c = 0,
            i = (function(d, u) {
              if (M(u) !== u)
                throw new SyntaxError(
                  "Invalid duplicate regex flag ".concat(u)
                );
              d = o.replace.call(d, /^\(\?([\w$]+)\)/, function(d, e) {
                if (o.test.call(/[gy]/, e))
                  throw new SyntaxError(
                    "Cannot use flag g or y in mode modifier ".concat(d)
                  );
                return (u = M(u + e)), "";
              });
              var e = !0,
                n = !1,
                t = void 0;
              try {
                for (
                  var a, f = (0, r.default)(u);
                  !(e = (a = f.next()).done);
                  e = !0
                ) {
                  var c = a.value;
                  if (!k[c])
                    throw new SyntaxError("Unknown regex flag ".concat(c));
                }
              } catch (d) {
                (n = !0), (t = d);
              } finally {
                try {
                  e || null == f.return || f.return();
                } finally {
                  if (n) throw t;
                }
              }
              return { pattern: d, flags: u };
            })(d, u),
            s = i.pattern,
            l = i.flags;
          c < s.length;

        ) {
          do {
            (e = j(s, l, c, t, n)) &&
              e.reparse &&
              (s = s.slice(0, c) + e.output + s.slice(c + e.matchLength));
          } while (e && e.reparse);
          if (e) (f += e.output), (c += e.matchLength || 1);
          else {
            var p = U.exec(s, y[t], c, "sticky"),
              g = (0, a.default)(p, 1)[0];
            (f += g),
              (c += g.length),
              "[" === g && t === h ? (t = b) : "]" === g && t === b && (t = h);
          }
        }
        m[d][u] = {
          pattern: o.replace.call(f, /(?:\(\?:\))+/g, "(?:)"),
          flags: o.replace.call(l, /[^gimuy]+/g, ""),
          captures: n.hasNamedCapture ? n.captureNames : null
        };
      }
      var _ = m[d][u];
      return E(new RegExp(_.pattern, _.flags), _.captures, d, u);
    }
    (U.prototype = /(?:)/),
      (U.version = "4.2.4"),
      (U._clipDuplicates = M),
      (U._hasNativeFlag = I),
      (U._dec = O),
      (U._hex = A),
      (U._pad4 = P),
      (U.addToken = function(d, u, e) {
        var n = (e = e || {}).optionalFlags;
        if ((e.flag && R(e.flag), n)) {
          n = o.split.call(n, "");
          var t = !0,
            a = !1,
            f = void 0;
          try {
            for (
              var c, i = (0, r.default)(n);
              !(t = (c = i.next()).done);
              t = !0
            ) {
              R(c.value);
            }
          } catch (d) {
            (a = !0), (f = d);
          } finally {
            try {
              t || null == i.return || i.return();
            } finally {
              if (a) throw f;
            }
          }
        }
        p.push({
          regex: T(d, { addG: !0, addY: x, isInternalOnly: !0 }),
          handler: u,
          scope: e.scope || h,
          flag: e.flag,
          reparse: e.reparse,
          leadChar: e.leadChar
        }),
          U.cache.flush("patterns");
      }),
      (U.cache = function(d, u) {
        return l[d] || (l[d] = {}), l[d][u] || (l[d][u] = U(d, u));
      }),
      (U.cache.flush = function(d) {
        "patterns" === d ? (m = {}) : (l = {});
      }),
      (U.escape = function(d) {
        return o.replace.call(F(d), /[-\[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }),
      (U.exec = function(d, u, e, n) {
        var t,
          a,
          r = "g",
          f = !1;
        (t = x && !!(n || (u.sticky && !1 !== n)))
          ? (r += "y")
          : n && ((f = !0), (r += "FakeY")),
          (u[c] = u[c] || {});
        var i =
          u[c][r] ||
          (u[c][r] = T(u, {
            addG: !0,
            addY: t,
            source: f ? "".concat(u.source, "|()") : void 0,
            removeY: !1 === n,
            isInternalOnly: !0
          }));
        return (
          (e = e || 0),
          (i.lastIndex = e),
          (a = s.exec.call(i, d)),
          f && a && "" === a.pop() && (a = null),
          u.global && (u.lastIndex = a ? i.lastIndex : 0),
          a
        );
      }),
      (U.forEach = function(d, u, e) {
        for (var n, t = 0, a = -1; (n = U.exec(d, u, t)); )
          e(n, ++a, d, u), (t = n.index + (n[0].length || 1));
      }),
      (U.globalize = function(d) {
        return T(d, { addG: !0 });
      }),
      (U.install = function(d) {
        (d = N(d)),
          !i.astral && d.astral && D(!0),
          !i.namespacing && d.namespacing && B(!0);
      }),
      (U.isInstalled = function(d) {
        return !!i[d];
      }),
      (U.isRegExp = function(d) {
        return "[object RegExp]" === w.call(d);
      }),
      (U.match = function(d, u, e) {
        var n = (u.global && "one" !== e) || "all" === e,
          t = (n ? "g" : "") + (u.sticky ? "y" : "") || "noGY";
        u[c] = u[c] || {};
        var a =
            u[c][t] ||
            (u[c][t] = T(u, {
              addG: !!n,
              removeG: "one" === e,
              isInternalOnly: !0
            })),
          r = o.match.call(F(d), a);
        return (
          u.global &&
            (u.lastIndex = "one" === e && r ? r.index + r[0].length : 0),
          n ? r || [] : r && r[0]
        );
      }),
      (U.matchChain = function(d, u) {
        return (function d(e, n) {
          var t = u[n].regex ? u[n] : { regex: u[n] },
            a = [];
          function f(d) {
            if (t.backref) {
              var u = "Backreference to undefined group: ".concat(t.backref),
                e = isNaN(t.backref);
              if (e && U.isInstalled("namespacing")) {
                if (!(t.backref in d.groups)) throw new ReferenceError(u);
              } else if (!d.hasOwnProperty(t.backref))
                throw new ReferenceError(u);
              var n =
                e && U.isInstalled("namespacing")
                  ? d.groups[t.backref]
                  : d[t.backref];
              a.push(n || "");
            } else a.push(d[0]);
          }
          var c = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var s, l = (0, r.default)(e);
              !(c = (s = l.next()).done);
              c = !0
            ) {
              var m = s.value;
              U.forEach(m, t.regex, f);
            }
          } catch (d) {
            (i = !0), (o = d);
          } finally {
            try {
              c || null == l.return || l.return();
            } finally {
              if (i) throw o;
            }
          }
          return n !== u.length - 1 && a.length ? d(a, n + 1) : a;
        })([d], 0);
      }),
      (U.replace = function(d, u, e, n) {
        var t = U.isRegExp(u),
          a = (u.global && "one" !== n) || "all" === n,
          r = (a ? "g" : "") + (u.sticky ? "y" : "") || "noGY",
          f = u;
        t
          ? ((u[c] = u[c] || {}),
            (f =
              u[c][r] ||
              (u[c][r] = T(u, {
                addG: !!a,
                removeG: "one" === n,
                isInternalOnly: !0
              }))))
          : a && (f = new RegExp(U.escape(String(u)), "g"));
        var i = s.replace.call(F(d), f, e);
        return t && u.global && (u.lastIndex = 0), i;
      }),
      (U.replaceEach = function(d, u) {
        var e = !0,
          n = !1,
          t = void 0;
        try {
          for (
            var a, f = (0, r.default)(u);
            !(e = (a = f.next()).done);
            e = !0
          ) {
            var c = a.value;
            d = U.replace(d, c[0], c[1], c[2]);
          }
        } catch (d) {
          (n = !0), (t = d);
        } finally {
          try {
            e || null == f.return || f.return();
          } finally {
            if (n) throw t;
          }
        }
        return d;
      }),
      (U.split = function(d, u, e) {
        return s.split.call(F(d), u, e);
      }),
      (U.test = function(d, u, e, n) {
        return !!U.exec(d, u, e, n);
      }),
      (U.uninstall = function(d) {
        (d = N(d)),
          i.astral && d.astral && D(!1),
          i.namespacing && d.namespacing && B(!1);
      }),
      (U.union = function(d, u, e) {
        var n,
          t,
          a = (e = e || {}).conjunction || "or",
          f = 0;
        function i(d, u, e) {
          var a = t[f - n];
          if (u) {
            if ((++f, a)) return "(?<".concat(a, ">");
          } else if (e) return "\\".concat(+e + n);
          return d;
        }
        if (!L(d, "Array") || !d.length)
          throw new TypeError(
            "Must provide a nonempty array of patterns to merge"
          );
        var s = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
          l = [],
          m = !0,
          p = !1,
          h = void 0;
        try {
          for (
            var b, y = (0, r.default)(d);
            !(m = (b = y.next()).done);
            m = !0
          ) {
            var g = b.value;
            U.isRegExp(g)
              ? ((n = f),
                (t = (g[c] && g[c].captureNames) || []),
                l.push(o.replace.call(U(g.source).source, s, i)))
              : l.push(U.escape(g));
          }
        } catch (d) {
          (p = !0), (h = d);
        } finally {
          try {
            m || null == y.return || y.return();
          } finally {
            if (p) throw h;
          }
        }
        var _ = "none" === a ? "" : "|";
        return U(l.join(_), u);
      }),
      (s.exec = function(d) {
        var u = this.lastIndex,
          e = o.exec.apply(this, arguments);
        if (e) {
          if (!_ && e.length > 1 && -1 !== e.indexOf("")) {
            var n = T(this, { removeG: !0, isInternalOnly: !0 });
            o.replace.call(String(d).slice(e.index), n, function() {
              for (var d = arguments.length, u = 1; u < d - 2; ++u)
                void 0 ===
                  (u < 0 || arguments.length <= u ? void 0 : arguments[u]) &&
                  (e[u] = void 0);
            });
          }
          var a = e;
          if (
            (U.isInstalled("namespacing") &&
              ((e.groups = (0, t.default)(null)), (a = e.groups)),
            this[c] && this[c].captureNames)
          )
            for (var r = 1; r < e.length; ++r) {
              var f = this[c].captureNames[r - 1];
              f && (a[f] = e[r]);
            }
          this.global &&
            !e[0].length &&
            this.lastIndex > e.index &&
            (this.lastIndex = e.index);
        }
        return this.global || (this.lastIndex = u), e;
      }),
      (s.test = function(d) {
        return !!s.exec.call(this, d);
      }),
      (s.match = function(d) {
        if (U.isRegExp(d)) {
          if (d.global) {
            var u = o.match.apply(this, arguments);
            return (d.lastIndex = 0), u;
          }
        } else d = new RegExp(d);
        return s.exec.call(d, F(this));
      }),
      (s.replace = function(d, u) {
        var e,
          n,
          a,
          r = U.isRegExp(d);
        return (
          r ? (d[c] && (n = d[c].captureNames), (e = d.lastIndex)) : (d += ""),
          (a = L(u, "Function")
            ? o.replace.call(String(this), d, function() {
                for (
                  var e = arguments.length, a = new Array(e), f = 0;
                  f < e;
                  f++
                )
                  a[f] = arguments[f];
                if (n) {
                  var c;
                  U.isInstalled("namespacing")
                    ? ((c = (0, t.default)(null)), a.push(c))
                    : ((a[0] = new String(a[0])), (c = a[0]));
                  for (var i = 0; i < n.length; ++i)
                    n[i] && (c[n[i]] = a[i + 1]);
                }
                return (
                  r &&
                    d.global &&
                    (d.lastIndex = a[a.length - 2] + a[0].length),
                  u.apply(void 0, a)
                );
              })
            : o.replace.call(null == this ? this : String(this), d, function() {
                for (
                  var d = arguments.length, e = new Array(d), t = 0;
                  t < d;
                  t++
                )
                  e[t] = arguments[t];
                return o.replace.call(String(u), g, function(d, u, t, a) {
                  if ((u = u || t)) {
                    var r = +u;
                    if (r <= e.length - 3) return e[r] || "";
                    if ((r = n ? n.indexOf(u) : -1) < 0)
                      throw new SyntaxError(
                        "Backreference to undefined group ".concat(d)
                      );
                    return e[r + 1] || "";
                  }
                  if ("$" === a) return "$";
                  if ("&" === a || 0 == +a) return e[0];
                  if ("`" === a)
                    return e[e.length - 1].slice(0, e[e.length - 2]);
                  if ("'" === a)
                    return e[e.length - 1].slice(e[e.length - 2] + e[0].length);
                  if (((a = +a), !isNaN(a))) {
                    if (a > e.length - 3)
                      throw new SyntaxError(
                        "Backreference to undefined group ".concat(d)
                      );
                    return e[a] || "";
                  }
                  throw new SyntaxError("Invalid token ".concat(d));
                });
              })),
          r && (d.global ? (d.lastIndex = 0) : (d.lastIndex = e)),
          a
        );
      }),
      (s.split = function(d, u) {
        if (!U.isRegExp(d)) return o.split.apply(this, arguments);
        var e,
          n = String(this),
          t = [],
          a = d.lastIndex,
          r = 0;
        return (
          (u = (void 0 === u ? -1 : u) >>> 0),
          U.forEach(n, d, function(d) {
            d.index + d[0].length > r &&
              (t.push(n.slice(r, d.index)),
              d.length > 1 &&
                d.index < n.length &&
                Array.prototype.push.apply(t, d.slice(1)),
              (e = d[0].length),
              (r = d.index + e));
          }),
          r === n.length
            ? (o.test.call(d, "") && !e) || t.push("")
            : t.push(n.slice(r)),
          (d.lastIndex = a),
          t.length > u ? t.slice(0, u) : t
        );
      }),
      U.addToken(
        /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
        function(d, u) {
          if ("B" === d[1] && u === h) return d[0];
          throw new SyntaxError("Invalid escape ".concat(d[0]));
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\\u{([\dA-Fa-f]+)}/,
        function(d, u, e) {
          var n = O(d[1]);
          if (n > 1114111)
            throw new SyntaxError("Invalid Unicode code point ".concat(d[0]));
          if (n <= 65535) return "\\u".concat(P(A(n)));
          if (S && -1 !== e.indexOf("u")) return d[0];
          throw new SyntaxError(
            "Cannot use Unicode code point above \\u{FFFF} without flag u"
          );
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\[(\^?)\]/,
        function(d) {
          return d[1] ? "[\\s\\S]" : "\\b\\B";
        },
        { leadChar: "[" }
      ),
      U.addToken(/\(\?#[^)]*\)/, C, { leadChar: "(" }),
      U.addToken(/\s+|#[^\n]*\n?/, C, { flag: "x" }),
      U.addToken(
        /\./,
        function() {
          return "[\\s\\S]";
        },
        { flag: "s", leadChar: "." }
      ),
      U.addToken(
        /\\k<([\w$]+)>/,
        function(d) {
          var u = isNaN(d[1]) ? this.captureNames.indexOf(d[1]) + 1 : +d[1],
            e = d.index + d[0].length;
          if (!u || u > this.captureNames.length)
            throw new SyntaxError(
              "Backreference to undefined group ".concat(d[0])
            );
          return "\\"
            .concat(u)
            .concat(e === d.input.length || isNaN(d.input[e]) ? "" : "(?:)");
        },
        { leadChar: "\\" }
      ),
      U.addToken(
        /\\(\d+)/,
        function(d, u) {
          if (
            !(
              u === h &&
              /^[1-9]/.test(d[1]) &&
              +d[1] <= this.captureNames.length
            ) &&
            "0" !== d[1]
          )
            throw new SyntaxError(
              "Cannot use octal escape or backreference to undefined group ".concat(
                d[0]
              )
            );
          return d[0];
        },
        { scope: "all", leadChar: "\\" }
      ),
      U.addToken(
        /\(\?P?<([\w$]+)>/,
        function(d) {
          if (!isNaN(d[1]))
            throw new SyntaxError(
              "Cannot use integer as capture name ".concat(d[0])
            );
          if (
            !U.isInstalled("namespacing") &&
            ("length" === d[1] || "__proto__" === d[1])
          )
            throw new SyntaxError(
              "Cannot use reserved word as capture name ".concat(d[0])
            );
          if (-1 !== this.captureNames.indexOf(d[1]))
            throw new SyntaxError(
              "Cannot use same name for multiple groups ".concat(d[0])
            );
          return this.captureNames.push(d[1]), (this.hasNamedCapture = !0), "(";
        },
        { leadChar: "(" }
      ),
      U.addToken(
        /\((?!\?)/,
        function(d, u, e) {
          return -1 !== e.indexOf("n")
            ? "(?:"
            : (this.captureNames.push(null), "(");
        },
        { optionalFlags: "n", leadChar: "(" }
      );
    var H = U;
    (u.default = H), (d.exports = u.default);
  },
  function(d, u, e) {
    d.exports = e(382);
  },
  function(d, u, e) {
    e(383);
    var n = e(19).Object;
    d.exports = function(d, u) {
      return n.create(d, u);
    };
  },
  function(d, u, e) {
    var n = e(39);
    n(n.S, "Object", { create: e(156) });
  },
  function(d, u, e) {
    var n = e(385);
    d.exports = function(d, u, e) {
      if ((n(d), void 0 === u)) return d;
      switch (e) {
        case 1:
          return function(e) {
            return d.call(u, e);
          };
        case 2:
          return function(e, n) {
            return d.call(u, e, n);
          };
        case 3:
          return function(e, n, t) {
            return d.call(u, e, n, t);
          };
      }
      return function() {
        return d.apply(u, arguments);
      };
    };
  },
  function(d, u) {
    d.exports = function(d) {
      if ("function" != typeof d) throw TypeError(d + " is not a function!");
      return d;
    };
  },
  function(d, u, e) {
    d.exports =
      !e(61) &&
      !e(96)(function() {
        return (
          7 !=
          Object.defineProperty(e(154)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(d, u, e) {
    var n = e(95);
    d.exports = function(d, u) {
      if (!n(d)) return d;
      var e, t;
      if (u && "function" == typeof (e = d.toString) && !n((t = e.call(d))))
        return t;
      if ("function" == typeof (e = d.valueOf) && !n((t = e.call(d)))) return t;
      if (!u && "function" == typeof (e = d.toString) && !n((t = e.call(d))))
        return t;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(d, u, e) {
    var n = e(94),
      t = e(60),
      a = e(389);
    d.exports = e(61)
      ? Object.defineProperties
      : function(d, u) {
          t(d);
          for (var e, r = a(u), f = r.length, c = 0; f > c; )
            n.f(d, (e = r[c++]), u[e]);
          return d;
        };
  },
  function(d, u, e) {
    var n = e(390),
      t = e(160);
    d.exports =
      Object.keys ||
      function(d) {
        return n(d, t);
      };
  },
  function(d, u, e) {
    var n = e(62),
      t = e(97),
      a = e(392)(!1),
      r = e(100)("IE_PROTO");
    d.exports = function(d, u) {
      var e,
        f = t(d),
        c = 0,
        i = [];
      for (e in f) e != r && n(f, e) && i.push(e);
      for (; u.length > c; ) n(f, (e = u[c++])) && (~a(i, e) || i.push(e));
      return i;
    };
  },
  function(d, u, e) {
    var n = e(98);
    d.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(d) {
          return "String" == n(d) ? d.split("") : Object(d);
        };
  },
  function(d, u, e) {
    var n = e(97),
      t = e(393),
      a = e(394);
    d.exports = function(d) {
      return function(u, e, r) {
        var f,
          c = n(u),
          i = t(c.length),
          o = a(r, i);
        if (d && e != e) {
          for (; i > o; ) if ((f = c[o++]) != f) return !0;
        } else
          for (; i > o; o++)
            if ((d || o in c) && c[o] === e) return d || o || 0;
        return !d && -1;
      };
    };
  },
  function(d, u, e) {
    var n = e(99),
      t = Math.min;
    d.exports = function(d) {
      return d > 0 ? t(n(d), 9007199254740991) : 0;
    };
  },
  function(d, u, e) {
    var n = e(99),
      t = Math.max,
      a = Math.min;
    d.exports = function(d, u) {
      return (d = n(d)) < 0 ? t(d + u, 0) : a(d, u);
    };
  },
  function(d, u, e) {
    var n = e(18).document;
    d.exports = n && n.documentElement;
  },
  function(d, u, e) {
    var n = e(397),
      t = e(402),
      a = e(417);
    d.exports = function(d, u) {
      return n(d) || t(d, u) || a();
    };
  },
  function(d, u, e) {
    var n = e(398);
    d.exports = function(d) {
      if (n(d)) return d;
    };
  },
  function(d, u, e) {
    d.exports = e(399);
  },
  function(d, u, e) {
    e(400), (d.exports = e(19).Array.isArray);
  },
  function(d, u, e) {
    var n = e(39);
    n(n.S, "Array", { isArray: e(401) });
  },
  function(d, u, e) {
    var n = e(98);
    d.exports =
      Array.isArray ||
      function(d) {
        return "Array" == n(d);
      };
  },
  function(d, u, e) {
    var n = e(101);
    d.exports = function(d, u) {
      var e = [],
        t = !0,
        a = !1,
        r = void 0;
      try {
        for (
          var f, c = n(d);
          !(t = (f = c.next()).done) && (e.push(f.value), !u || e.length !== u);
          t = !0
        );
      } catch (d) {
        (a = !0), (r = d);
      } finally {
        try {
          t || null == c.return || c.return();
        } finally {
          if (a) throw r;
        }
      }
      return e;
    };
  },
  function(d, u, e) {
    e(404), e(412), (d.exports = e(414));
  },
  function(d, u, e) {
    e(405);
    for (
      var n = e(18),
        t = e(40),
        a = e(64),
        r = e(28)("toStringTag"),
        f = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
          ","
        ),
        c = 0;
      c < f.length;
      c++
    ) {
      var i = f[c],
        o = n[i],
        s = o && o.prototype;
      s && !s[r] && t(s, r, i), (a[i] = a.Array);
    }
  },
  function(d, u, e) {
    "use strict";
    var n = e(406),
      t = e(407),
      a = e(64),
      r = e(97);
    (d.exports = e(161)(
      Array,
      "Array",
      function(d, u) {
        (this._t = r(d)), (this._i = 0), (this._k = u);
      },
      function() {
        var d = this._t,
          u = this._k,
          e = this._i++;
        return !d || e >= d.length
          ? ((this._t = void 0), t(1))
          : t(0, "keys" == u ? e : "values" == u ? d[e] : [e, d[e]]);
      },
      "values"
    )),
      (a.Arguments = a.Array),
      n("keys"),
      n("values"),
      n("entries");
  },
  function(d, u) {
    d.exports = function() {};
  },
  function(d, u) {
    d.exports = function(d, u) {
      return { value: u, done: !!d };
    };
  },
  function(d, u, e) {
    d.exports = e(40);
  },
  function(d, u, e) {
    "use strict";
    var n = e(156),
      t = e(155),
      a = e(162),
      r = {};
    e(40)(r, e(28)("iterator"), function() {
      return this;
    }),
      (d.exports = function(d, u, e) {
        (d.prototype = n(r, { next: t(1, e) })), a(d, u + " Iterator");
      });
  },
  function(d, u, e) {
    var n = e(62),
      t = e(411),
      a = e(100)("IE_PROTO"),
      r = Object.prototype;
    d.exports =
      Object.getPrototypeOf ||
      function(d) {
        return (
          (d = t(d)),
          n(d, a)
            ? d[a]
            : "function" == typeof d.constructor && d instanceof d.constructor
            ? d.constructor.prototype
            : d instanceof Object
            ? r
            : null
        );
      };
  },
  function(d, u, e) {
    var n = e(63);
    d.exports = function(d) {
      return Object(n(d));
    };
  },
  function(d, u, e) {
    "use strict";
    var n = e(413)(!0);
    e(161)(
      String,
      "String",
      function(d) {
        (this._t = String(d)), (this._i = 0);
      },
      function() {
        var d,
          u = this._t,
          e = this._i;
        return e >= u.length
          ? { value: void 0, done: !0 }
          : ((d = n(u, e)), (this._i += d.length), { value: d, done: !1 });
      }
    );
  },
  function(d, u, e) {
    var n = e(99),
      t = e(63);
    d.exports = function(d) {
      return function(u, e) {
        var a,
          r,
          f = String(t(u)),
          c = n(e),
          i = f.length;
        return c < 0 || c >= i
          ? d
            ? ""
            : void 0
          : (a = f.charCodeAt(c)) < 55296 ||
            a > 56319 ||
            c + 1 === i ||
            (r = f.charCodeAt(c + 1)) < 56320 ||
            r > 57343
          ? d
            ? f.charAt(c)
            : a
          : d
          ? f.slice(c, c + 2)
          : r - 56320 + ((a - 55296) << 10) + 65536;
      };
    };
  },
  function(d, u, e) {
    var n = e(60),
      t = e(415);
    d.exports = e(19).getIterator = function(d) {
      var u = t(d);
      if ("function" != typeof u) throw TypeError(d + " is not iterable!");
      return n(u.call(d));
    };
  },
  function(d, u, e) {
    var n = e(416),
      t = e(28)("iterator"),
      a = e(64);
    d.exports = e(19).getIteratorMethod = function(d) {
      if (null != d) return d[t] || d["@@iterator"] || a[n(d)];
    };
  },
  function(d, u, e) {
    var n = e(98),
      t = e(28)("toStringTag"),
      a =
        "Arguments" ==
        n(
          (function() {
            return arguments;
          })()
        );
    d.exports = function(d) {
      var u, e, r;
      return void 0 === d
        ? "Undefined"
        : null === d
        ? "Null"
        : "string" ==
          typeof (e = (function(d, u) {
            try {
              return d[u];
            } catch (d) {}
          })((u = Object(d)), t))
        ? e
        : a
        ? n(u)
        : "Object" == (r = n(u)) && "function" == typeof u.callee
        ? "Arguments"
        : r;
    };
  },
  function(d, u) {
    d.exports = function() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
  function(d, u, e) {
    d.exports = e(419);
  },
  function(d, u, e) {
    e(420), (d.exports = e(19).parseInt);
  },
  function(d, u, e) {
    var n = e(39),
      t = e(421);
    n(n.G + n.F * (parseInt != t), { parseInt: t });
  },
  function(d, u, e) {
    var n = e(18).parseInt,
      t = e(422).trim,
      a = e(163),
      r = /^[-+]?0[xX]/;
    d.exports =
      8 !== n(a + "08") || 22 !== n(a + "0x16")
        ? function(d, u) {
            var e = t(String(d), 3);
            return n(e, u >>> 0 || (r.test(e) ? 16 : 10));
          }
        : n;
  },
  function(d, u, e) {
    var n = e(39),
      t = e(63),
      a = e(96),
      r = e(163),
      f = "[" + r + "]",
      c = RegExp("^" + f + f + "*"),
      i = RegExp(f + f + "*$"),
      o = function(d, u, e) {
        var t = {},
          f = a(function() {
            return !!r[d]() || "​" != "​"[d]();
          }),
          c = (t[d] = f ? u(s) : r[d]);
        e && (t[e] = c), n(n.P + n.F * f, "String", t);
      },
      s = (o.trim = function(d, u) {
        return (
          (d = String(t(d))),
          1 & u && (d = d.replace(c, "")),
          2 & u && (d = d.replace(i, "")),
          d
        );
      });
    d.exports = o;
  },
  function(d, u, e) {
    "use strict";
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    (u.default = function(d) {
      var u = "xregexp",
        e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
        n = d.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", {
          conjunction: "or"
        });
      function t(d) {
        var u = /^(?:\(\?:\))*\^/,
          e = /\$(?:\(\?:\))*$/;
        return u.test(d) && e.test(d) && e.test(d.replace(/\\[\s\S]/g, ""))
          ? d.replace(u, "").replace(e, "")
          : d;
      }
      function a(e, n) {
        var t = n ? "x" : "";
        return d.isRegExp(e)
          ? e[u] && e[u].captureNames
            ? e
            : d(e.source, t)
          : d(e, t);
      }
      function r(u) {
        return u instanceof RegExp ? u : d.escape(u);
      }
      function f(d, u, e) {
        return (d["subpattern".concat(e)] = u), d;
      }
      function c(d, u, e) {
        return d + (u < e.length - 1 ? "{{subpattern".concat(u, "}}") : "");
      }
      (d.tag = function(u) {
        return function(e) {
          for (
            var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            t[a - 1] = arguments[a];
          var i = t.map(r).reduce(f, {}),
            o = e.raw.map(c).join("");
          return d.build(o, i, u);
        };
      }),
        (d.build = function(r, f, c) {
          var i = -1 !== (c = c || "").indexOf("x"),
            o = /^\(\?([\w$]+)\)/.exec(r);
          o && (c = d._clipDuplicates(c + o[1]));
          var s = {};
          for (var l in f)
            if (f.hasOwnProperty(l)) {
              var m = a(f[l], i);
              s[l] = { pattern: t(m.source), names: m[u].captureNames || [] };
            }
          var p,
            h = a(r, i),
            b = 0,
            y = 0,
            g = [0],
            _ = h[u].captureNames || [],
            v = h.source.replace(n, function(d, u, n, t, a) {
              var r,
                f,
                c,
                i = u || n;
              if (i) {
                if (!s.hasOwnProperty(i))
                  throw new ReferenceError("Undefined property ".concat(d));
                u
                  ? ((r = _[y]),
                    (g[++y] = ++b),
                    (f = "(?<".concat(r || i, ">")))
                  : (f = "(?:"),
                  (p = b);
                var o = s[i].pattern.replace(e, function(d, u, e) {
                  if (u) {
                    if (((r = s[i].names[b - p]), ++b, r))
                      return "(?<".concat(r, ">");
                  } else if (e) return (c = +e - 1), s[i].names[c] ? "\\k<".concat(s[i].names[c], ">") : "\\".concat(+e + p);
                  return d;
                });
                return "".concat(f).concat(o, ")");
              }
              if (t) {
                if (((r = _[y]), (g[++y] = ++b), r))
                  return "(?<".concat(r, ">");
              } else if (a) return _[(c = +a - 1)] ? "\\k<".concat(_[c], ">") : "\\".concat(g[+a]);
              return d;
            });
          return d(v, c);
        });
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    (u.default = function(d) {
      function u(d, u, e, n) {
        return { name: d, value: u, start: e, end: n };
      }
      d.matchRecursive = function(e, n, t, a, r) {
        r = r || {};
        var f,
          c,
          i,
          o,
          s,
          l = -1 !== (a = a || "").indexOf("g"),
          m = -1 !== a.indexOf("y"),
          p = a.replace(/y/g, ""),
          h = r.escapeChar,
          b = r.valueNames,
          y = [],
          g = 0,
          _ = 0,
          v = 0,
          w = 0;
        if (((n = d(n, p)), (t = d(t, p)), h)) {
          if (h.length > 1)
            throw new Error("Cannot use more than one escape character");
          (h = d.escape(h)),
            (s = new RegExp(
              "(?:"
                .concat(h, "[\\S\\s]|(?:(?!")
                .concat(
                  d.union([n, t], "", { conjunction: "or" }).source,
                  ")[^"
                )
                .concat(h, "])+)+"),
              a.replace(/[^imu]+/g, "")
            ));
        }
        for (;;) {
          if (
            (h && (v += (d.exec(e, s, v, "sticky") || [""])[0].length),
            (i = d.exec(e, n, v)),
            (o = d.exec(e, t, v)),
            i && o && (i.index <= o.index ? (o = null) : (i = null)),
            i || o)
          )
            v = (_ = (i || o).index) + (i || o)[0].length;
          else if (!g) break;
          if (m && !g && _ > w) break;
          if (i) g || ((f = _), (c = v)), ++g;
          else {
            if (!o || !g)
              throw new Error("Unbalanced delimiter found in string");
            if (
              !--g &&
              (b
                ? (b[0] && f > w && y.push(u(b[0], e.slice(w, f), w, f)),
                  b[1] && y.push(u(b[1], e.slice(f, c), f, c)),
                  b[2] && y.push(u(b[2], e.slice(c, _), c, _)),
                  b[3] && y.push(u(b[3], e.slice(_, v), _, v)))
                : y.push(e.slice(c, _)),
              (w = v),
              !l)
            )
              break;
          }
          _ === v && ++v;
        }
        return (
          l &&
            !m &&
            b &&
            b[0] &&
            e.length > w &&
            y.push(u(b[0], e.slice(w), w, e.length)),
          y
        );
      };
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(17);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(101));
    /*!
     * XRegExp Unicode Base 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2008-present MIT License
     */ (u.default = function(d) {
      var u = {},
        e = d._dec,
        n = d._hex,
        a = d._pad4;
      function r(d) {
        return d.replace(/[- _]+/g, "").toLowerCase();
      }
      function f(d) {
        var u = /^\\[xu](.+)/.exec(d);
        return u ? e(u[1]) : d.charCodeAt("\\" === d[0] ? 1 : 0);
      }
      function c(e) {
        var t, r, c;
        return (
          u[e]["b!"] ||
          (u[e]["b!"] = ((t = u[e].bmp),
          (r = ""),
          (c = -1),
          d.forEach(
            t,
            /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
            function(d) {
              var u = f(d[1]);
              u > c + 1 &&
                ((r += "\\u".concat(a(n(c + 1)))),
                u > c + 2 && (r += "-\\u".concat(a(n(u - 1))))),
                (c = f(d[2] || d[1]));
            }
          ),
          c < 65535 &&
            ((r += "\\u".concat(a(n(c + 1)))), c < 65534 && (r += "-\\uFFFF")),
          r))
        );
      }
      function i(d, e) {
        var n = e ? "a!" : "a=";
        return (
          u[d][n] ||
          (u[d][n] = (function(d, e) {
            var n = u[d],
              t = "";
            return (
              n.bmp &&
                !n.isBmpLast &&
                (t = "[".concat(n.bmp, "]").concat(n.astral ? "|" : "")),
              n.astral && (t += n.astral),
              n.isBmpLast &&
                n.bmp &&
                (t += "".concat(n.astral ? "|" : "", "[").concat(n.bmp, "]")),
              e
                ? "(?:(?!".concat(
                    t,
                    ")(?:[\ud800-\udbff][\udc00-\udfff]|[\0-￿]))"
                  )
                : "(?:".concat(t, ")")
            );
          })(d, e))
        );
      }
      d.addToken(
        /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
        function(d, e, n) {
          var t = "P" === d[1] || !!d[2],
            a = -1 !== n.indexOf("A"),
            f = r(d[4] || d[3]),
            o = u[f];
          if ("P" === d[1] && d[2])
            throw new SyntaxError("Invalid double negation " + d[0]);
          if (!u.hasOwnProperty(f))
            throw new SyntaxError("Unknown Unicode token " + d[0]);
          if (o.inverseOf) {
            if (((f = r(o.inverseOf)), !u.hasOwnProperty(f)))
              throw new ReferenceError(
                ""
                  .concat("Unicode token missing data " + d[0], " -> ")
                  .concat(o.inverseOf)
              );
            (o = u[f]), (t = !t);
          }
          if (!o.bmp && !a)
            throw new SyntaxError(
              "Astral mode required for Unicode token " + d[0]
            );
          if (a) {
            if ("class" === e)
              throw new SyntaxError(
                "Astral mode does not support Unicode tokens within character classes"
              );
            return i(f, t);
          }
          return "class" === e
            ? t
              ? c(f)
              : o.bmp
            : "".concat((t ? "[^" : "[") + o.bmp, "]");
        },
        { scope: "all", optionalFlags: "A", leadChar: "\\" }
      ),
        (d.addUnicodeData = function(e) {
          var n = !0,
            a = !1,
            f = void 0;
          try {
            for (
              var c, i = (0, t.default)(e);
              !(n = (c = i.next()).done);
              n = !0
            ) {
              var o = c.value;
              if (!o.name) throw new Error("Unicode token requires name");
              if (!(o.inverseOf || o.bmp || o.astral))
                throw new Error(
                  "Unicode token has no character data " + o.name
                );
              (u[r(o.name)] = o), o.alias && (u[r(o.alias)] = o);
            }
          } catch (d) {
            (a = !0), (f = d);
          } finally {
            try {
              n || null == i.return || i.return();
            } finally {
              if (a) throw f;
            }
          }
          d.cache.flush("patterns");
        }),
        (d._getUnicodeProperty = function(d) {
          var e = r(d);
          return u[e];
        });
    }),
      (d.exports = u.default);
  },
  function(d, u, e) {
    "use strict";
    var n = e(17);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(427));
    /*!
     * XRegExp Unicode Blocks 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Blocks"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      { name: "InAdlam", astral: "\ud83a[\udd00-\udd5f]" },
      { name: "InAegean_Numbers", astral: "\ud800[\udd00-\udd3f]" },
      { name: "InAhom", astral: "\ud805[\udf00-\udf3f]" },
      { name: "InAlchemical_Symbols", astral: "\ud83d[\udf00-\udf7f]" },
      { name: "InAlphabetic_Presentation_Forms", bmp: "ﬀ-ﭏ" },
      { name: "InAnatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude7f]" },
      {
        name: "InAncient_Greek_Musical_Notation",
        astral: "\ud834[\ude00-\ude4f]"
      },
      { name: "InAncient_Greek_Numbers", astral: "\ud800[\udd40-\udd8f]" },
      { name: "InAncient_Symbols", astral: "\ud800[\udd90-\uddcf]" },
      { name: "InArabic", bmp: "؀-ۿ" },
      { name: "InArabic_Extended_A", bmp: "ࢠ-ࣿ" },
      {
        name: "InArabic_Mathematical_Alphabetic_Symbols",
        astral: "\ud83b[\ude00-\udeff]"
      },
      { name: "InArabic_Presentation_Forms_A", bmp: "ﭐ-﷿" },
      { name: "InArabic_Presentation_Forms_B", bmp: "ﹰ-\ufeff" },
      { name: "InArabic_Supplement", bmp: "ݐ-ݿ" },
      { name: "InArmenian", bmp: "԰-֏" },
      { name: "InArrows", bmp: "←-⇿" },
      { name: "InAvestan", astral: "\ud802[\udf00-\udf3f]" },
      { name: "InBalinese", bmp: "ᬀ-᭿" },
      { name: "InBamum", bmp: "ꚠ-꛿" },
      { name: "InBamum_Supplement", astral: "\ud81a[\udc00-\ude3f]" },
      { name: "InBasic_Latin", bmp: "\0-" },
      { name: "InBassa_Vah", astral: "\ud81a[\uded0-\udeff]" },
      { name: "InBatak", bmp: "ᯀ-᯿" },
      { name: "InBengali", bmp: "ঀ-৿" },
      { name: "InBhaiksuki", astral: "\ud807[\udc00-\udc6f]" },
      { name: "InBlock_Elements", bmp: "▀-▟" },
      { name: "InBopomofo", bmp: "㄀-ㄯ" },
      { name: "InBopomofo_Extended", bmp: "ㆠ-ㆿ" },
      { name: "InBox_Drawing", bmp: "─-╿" },
      { name: "InBrahmi", astral: "\ud804[\udc00-\udc7f]" },
      { name: "InBraille_Patterns", bmp: "⠀-⣿" },
      { name: "InBuginese", bmp: "ᨀ-᨟" },
      { name: "InBuhid", bmp: "ᝀ-᝟" },
      { name: "InByzantine_Musical_Symbols", astral: "\ud834[\udc00-\udcff]" },
      { name: "InCJK_Compatibility", bmp: "㌀-㏿" },
      { name: "InCJK_Compatibility_Forms", bmp: "︰-﹏" },
      { name: "InCJK_Compatibility_Ideographs", bmp: "豈-﫿" },
      {
        name: "InCJK_Compatibility_Ideographs_Supplement",
        astral: "\ud87e[\udc00-\ude1f]"
      },
      { name: "InCJK_Radicals_Supplement", bmp: "⺀-⻿" },
      { name: "InCJK_Strokes", bmp: "㇀-㇯" },
      { name: "InCJK_Symbols_And_Punctuation", bmp: "　-〿" },
      { name: "InCJK_Unified_Ideographs", bmp: "一-鿿" },
      { name: "InCJK_Unified_Ideographs_Extension_A", bmp: "㐀-䶿" },
      {
        name: "InCJK_Unified_Ideographs_Extension_B",
        astral: "[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_C",
        astral:
          "\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf3f]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_D",
        astral: "\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_E",
        astral:
          "\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udeaf]"
      },
      {
        name: "InCJK_Unified_Ideographs_Extension_F",
        astral:
          "\ud873[\udeb0-\udfff]|[\ud874-\ud879][\udc00-\udfff]|\ud87a[\udc00-\udfef]"
      },
      { name: "InCarian", astral: "\ud800[\udea0-\udedf]" },
      { name: "InCaucasian_Albanian", astral: "\ud801[\udd30-\udd6f]" },
      { name: "InChakma", astral: "\ud804[\udd00-\udd4f]" },
      { name: "InCham", bmp: "ꨀ-꩟" },
      { name: "InCherokee", bmp: "Ꭰ-᏿" },
      { name: "InCherokee_Supplement", bmp: "ꭰ-ꮿ" },
      { name: "InChess_Symbols", astral: "\ud83e[\ude00-\ude6f]" },
      { name: "InCombining_Diacritical_Marks", bmp: "̀-ͯ" },
      { name: "InCombining_Diacritical_Marks_Extended", bmp: "᪰-᫿" },
      { name: "InCombining_Diacritical_Marks_For_Symbols", bmp: "⃐-⃿" },
      { name: "InCombining_Diacritical_Marks_Supplement", bmp: "᷀-᷿" },
      { name: "InCombining_Half_Marks", bmp: "︠-︯" },
      { name: "InCommon_Indic_Number_Forms", bmp: "꠰-꠿" },
      { name: "InControl_Pictures", bmp: "␀-␿" },
      { name: "InCoptic", bmp: "Ⲁ-⳿" },
      { name: "InCoptic_Epact_Numbers", astral: "\ud800[\udee0-\udeff]" },
      { name: "InCounting_Rod_Numerals", astral: "\ud834[\udf60-\udf7f]" },
      { name: "InCuneiform", astral: "\ud808[\udc00-\udfff]" },
      {
        name: "InCuneiform_Numbers_And_Punctuation",
        astral: "\ud809[\udc00-\udc7f]"
      },
      { name: "InCurrency_Symbols", bmp: "₠-⃏" },
      { name: "InCypriot_Syllabary", astral: "\ud802[\udc00-\udc3f]" },
      { name: "InCyrillic", bmp: "Ѐ-ӿ" },
      { name: "InCyrillic_Extended_A", bmp: "ⷠ-ⷿ" },
      { name: "InCyrillic_Extended_B", bmp: "Ꙁ-ꚟ" },
      { name: "InCyrillic_Extended_C", bmp: "ᲀ-᲏" },
      { name: "InCyrillic_Supplement", bmp: "Ԁ-ԯ" },
      { name: "InDeseret", astral: "\ud801[\udc00-\udc4f]" },
      { name: "InDevanagari", bmp: "ऀ-ॿ" },
      { name: "InDevanagari_Extended", bmp: "꣠-ꣿ" },
      { name: "InDingbats", bmp: "✀-➿" },
      { name: "InDogra", astral: "\ud806[\udc00-\udc4f]" },
      { name: "InDomino_Tiles", astral: "\ud83c[\udc30-\udc9f]" },
      { name: "InDuployan", astral: "\ud82f[\udc00-\udc9f]" },
      { name: "InEarly_Dynastic_Cuneiform", astral: "\ud809[\udc80-\udd4f]" },
      {
        name: "InEgyptian_Hieroglyphs",
        astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2f]"
      },
      { name: "InElbasan", astral: "\ud801[\udd00-\udd2f]" },
      { name: "InEmoticons", astral: "\ud83d[\ude00-\ude4f]" },
      {
        name: "InEnclosed_Alphanumeric_Supplement",
        astral: "\ud83c[\udd00-\uddff]"
      },
      { name: "InEnclosed_Alphanumerics", bmp: "①-⓿" },
      { name: "InEnclosed_CJK_Letters_And_Months", bmp: "㈀-㋿" },
      {
        name: "InEnclosed_Ideographic_Supplement",
        astral: "\ud83c[\ude00-\udeff]"
      },
      { name: "InEthiopic", bmp: "ሀ-፿" },
      { name: "InEthiopic_Extended", bmp: "ⶀ-⷟" },
      { name: "InEthiopic_Extended_A", bmp: "꬀-꬯" },
      { name: "InEthiopic_Supplement", bmp: "ᎀ-᎟" },
      { name: "InGeneral_Punctuation", bmp: " -⁯" },
      { name: "InGeometric_Shapes", bmp: "■-◿" },
      { name: "InGeometric_Shapes_Extended", astral: "\ud83d[\udf80-\udfff]" },
      { name: "InGeorgian", bmp: "Ⴀ-ჿ" },
      { name: "InGeorgian_Extended", bmp: "Ა-Ჿ" },
      { name: "InGeorgian_Supplement", bmp: "ⴀ-⴯" },
      { name: "InGlagolitic", bmp: "Ⰰ-ⱟ" },
      { name: "InGlagolitic_Supplement", astral: "\ud838[\udc00-\udc2f]" },
      { name: "InGothic", astral: "\ud800[\udf30-\udf4f]" },
      { name: "InGrantha", astral: "\ud804[\udf00-\udf7f]" },
      { name: "InGreek_And_Coptic", bmp: "Ͱ-Ͽ" },
      { name: "InGreek_Extended", bmp: "ἀ-῿" },
      { name: "InGujarati", bmp: "઀-૿" },
      { name: "InGunjala_Gondi", astral: "\ud807[\udd60-\uddaf]" },
      { name: "InGurmukhi", bmp: "਀-੿" },
      { name: "InHalfwidth_And_Fullwidth_Forms", bmp: "＀-￯" },
      { name: "InHangul_Compatibility_Jamo", bmp: "㄰-㆏" },
      { name: "InHangul_Jamo", bmp: "ᄀ-ᇿ" },
      { name: "InHangul_Jamo_Extended_A", bmp: "ꥠ-꥿" },
      { name: "InHangul_Jamo_Extended_B", bmp: "ힰ-퟿" },
      { name: "InHangul_Syllables", bmp: "가-힯" },
      { name: "InHanifi_Rohingya", astral: "\ud803[\udd00-\udd3f]" },
      { name: "InHanunoo", bmp: "ᜠ-᜿" },
      { name: "InHatran", astral: "\ud802[\udce0-\udcff]" },
      { name: "InHebrew", bmp: "֐-׿" },
      { name: "InHigh_Private_Use_Surrogates", bmp: "\udb80-\udbff" },
      { name: "InHigh_Surrogates", bmp: "\ud800-\udb7f" },
      { name: "InHiragana", bmp: "぀-ゟ" },
      { name: "InIPA_Extensions", bmp: "ɐ-ʯ" },
      { name: "InIdeographic_Description_Characters", bmp: "⿰-⿿" },
      {
        name: "InIdeographic_Symbols_And_Punctuation",
        astral: "\ud81b[\udfe0-\udfff]"
      },
      { name: "InImperial_Aramaic", astral: "\ud802[\udc40-\udc5f]" },
      { name: "InIndic_Siyaq_Numbers", astral: "\ud83b[\udc70-\udcbf]" },
      { name: "InInscriptional_Pahlavi", astral: "\ud802[\udf60-\udf7f]" },
      { name: "InInscriptional_Parthian", astral: "\ud802[\udf40-\udf5f]" },
      { name: "InJavanese", bmp: "ꦀ-꧟" },
      { name: "InKaithi", astral: "\ud804[\udc80-\udccf]" },
      { name: "InKana_Extended_A", astral: "\ud82c[\udd00-\udd2f]" },
      { name: "InKana_Supplement", astral: "\ud82c[\udc00-\udcff]" },
      { name: "InKanbun", bmp: "㆐-㆟" },
      { name: "InKangxi_Radicals", bmp: "⼀-⿟" },
      { name: "InKannada", bmp: "ಀ-೿" },
      { name: "InKatakana", bmp: "゠-ヿ" },
      { name: "InKatakana_Phonetic_Extensions", bmp: "ㇰ-ㇿ" },
      { name: "InKayah_Li", bmp: "꤀-꤯" },
      { name: "InKharoshthi", astral: "\ud802[\ude00-\ude5f]" },
      { name: "InKhmer", bmp: "ក-៿" },
      { name: "InKhmer_Symbols", bmp: "᧠-᧿" },
      { name: "InKhojki", astral: "\ud804[\ude00-\ude4f]" },
      { name: "InKhudawadi", astral: "\ud804[\udeb0-\udeff]" },
      { name: "InLao", bmp: "຀-໿" },
      { name: "InLatin_1_Supplement", bmp: "-ÿ" },
      { name: "InLatin_Extended_A", bmp: "Ā-ſ" },
      { name: "InLatin_Extended_Additional", bmp: "Ḁ-ỿ" },
      { name: "InLatin_Extended_B", bmp: "ƀ-ɏ" },
      { name: "InLatin_Extended_C", bmp: "Ⱡ-Ɀ" },
      { name: "InLatin_Extended_D", bmp: "꜠-ꟿ" },
      { name: "InLatin_Extended_E", bmp: "ꬰ-꭯" },
      { name: "InLepcha", bmp: "ᰀ-ᱏ" },
      { name: "InLetterlike_Symbols", bmp: "℀-⅏" },
      { name: "InLimbu", bmp: "ᤀ-᥏" },
      { name: "InLinear_A", astral: "\ud801[\ude00-\udf7f]" },
      { name: "InLinear_B_Ideograms", astral: "\ud800[\udc80-\udcff]" },
      { name: "InLinear_B_Syllabary", astral: "\ud800[\udc00-\udc7f]" },
      { name: "InLisu", bmp: "ꓐ-꓿" },
      { name: "InLow_Surrogates", bmp: "\udc00-\udfff" },
      { name: "InLycian", astral: "\ud800[\ude80-\ude9f]" },
      { name: "InLydian", astral: "\ud802[\udd20-\udd3f]" },
      { name: "InMahajani", astral: "\ud804[\udd50-\udd7f]" },
      { name: "InMahjong_Tiles", astral: "\ud83c[\udc00-\udc2f]" },
      { name: "InMakasar", astral: "\ud807[\udee0-\udeff]" },
      { name: "InMalayalam", bmp: "ഀ-ൿ" },
      { name: "InMandaic", bmp: "ࡀ-࡟" },
      { name: "InManichaean", astral: "\ud802[\udec0-\udeff]" },
      { name: "InMarchen", astral: "\ud807[\udc70-\udcbf]" },
      { name: "InMasaram_Gondi", astral: "\ud807[\udd00-\udd5f]" },
      {
        name: "InMathematical_Alphanumeric_Symbols",
        astral: "\ud835[\udc00-\udfff]"
      },
      { name: "InMathematical_Operators", bmp: "∀-⋿" },
      { name: "InMayan_Numerals", astral: "\ud834[\udee0-\udeff]" },
      { name: "InMedefaidrin", astral: "\ud81b[\ude40-\ude9f]" },
      { name: "InMeetei_Mayek", bmp: "ꯀ-꯿" },
      { name: "InMeetei_Mayek_Extensions", bmp: "ꫠ-꫿" },
      { name: "InMende_Kikakui", astral: "\ud83a[\udc00-\udcdf]" },
      { name: "InMeroitic_Cursive", astral: "\ud802[\udda0-\uddff]" },
      { name: "InMeroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
      { name: "InMiao", astral: "\ud81b[\udf00-\udf9f]" },
      { name: "InMiscellaneous_Mathematical_Symbols_A", bmp: "⟀-⟯" },
      { name: "InMiscellaneous_Mathematical_Symbols_B", bmp: "⦀-⧿" },
      { name: "InMiscellaneous_Symbols", bmp: "☀-⛿" },
      { name: "InMiscellaneous_Symbols_And_Arrows", bmp: "⬀-⯿" },
      {
        name: "InMiscellaneous_Symbols_And_Pictographs",
        astral: "\ud83c[\udf00-\udfff]|\ud83d[\udc00-\uddff]"
      },
      { name: "InMiscellaneous_Technical", bmp: "⌀-⏿" },
      { name: "InModi", astral: "\ud805[\ude00-\ude5f]" },
      { name: "InModifier_Tone_Letters", bmp: "꜀-ꜟ" },
      { name: "InMongolian", bmp: "᠀-᢯" },
      { name: "InMongolian_Supplement", astral: "\ud805[\ude60-\ude7f]" },
      { name: "InMro", astral: "\ud81a[\ude40-\ude6f]" },
      { name: "InMultani", astral: "\ud804[\ude80-\udeaf]" },
      { name: "InMusical_Symbols", astral: "\ud834[\udd00-\uddff]" },
      { name: "InMyanmar", bmp: "က-႟" },
      { name: "InMyanmar_Extended_A", bmp: "ꩠ-ꩿ" },
      { name: "InMyanmar_Extended_B", bmp: "ꧠ-꧿" },
      { name: "InNKo", bmp: "߀-߿" },
      { name: "InNabataean", astral: "\ud802[\udc80-\udcaf]" },
      { name: "InNew_Tai_Lue", bmp: "ᦀ-᧟" },
      { name: "InNewa", astral: "\ud805[\udc00-\udc7f]" },
      { name: "InNumber_Forms", bmp: "⅐-↏" },
      { name: "InNushu", astral: "\ud82c[\udd70-\udeff]" },
      { name: "InOgham", bmp: " -᚟" },
      { name: "InOl_Chiki", bmp: "᱐-᱿" },
      { name: "InOld_Hungarian", astral: "\ud803[\udc80-\udcff]" },
      { name: "InOld_Italic", astral: "\ud800[\udf00-\udf2f]" },
      { name: "InOld_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
      { name: "InOld_Permic", astral: "\ud800[\udf50-\udf7f]" },
      { name: "InOld_Persian", astral: "\ud800[\udfa0-\udfdf]" },
      { name: "InOld_Sogdian", astral: "\ud803[\udf00-\udf2f]" },
      { name: "InOld_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
      { name: "InOld_Turkic", astral: "\ud803[\udc00-\udc4f]" },
      { name: "InOptical_Character_Recognition", bmp: "⑀-⑟" },
      { name: "InOriya", bmp: "଀-୿" },
      { name: "InOrnamental_Dingbats", astral: "\ud83d[\ude50-\ude7f]" },
      { name: "InOsage", astral: "\ud801[\udcb0-\udcff]" },
      { name: "InOsmanya", astral: "\ud801[\udc80-\udcaf]" },
      { name: "InPahawh_Hmong", astral: "\ud81a[\udf00-\udf8f]" },
      { name: "InPalmyrene", astral: "\ud802[\udc60-\udc7f]" },
      { name: "InPau_Cin_Hau", astral: "\ud806[\udec0-\udeff]" },
      { name: "InPhags_Pa", bmp: "ꡀ-꡿" },
      { name: "InPhaistos_Disc", astral: "\ud800[\uddd0-\uddff]" },
      { name: "InPhoenician", astral: "\ud802[\udd00-\udd1f]" },
      { name: "InPhonetic_Extensions", bmp: "ᴀ-ᵿ" },
      { name: "InPhonetic_Extensions_Supplement", bmp: "ᶀ-ᶿ" },
      { name: "InPlaying_Cards", astral: "\ud83c[\udca0-\udcff]" },
      { name: "InPrivate_Use_Area", bmp: "-" },
      { name: "InPsalter_Pahlavi", astral: "\ud802[\udf80-\udfaf]" },
      { name: "InRejang", bmp: "ꤰ-꥟" },
      { name: "InRumi_Numeral_Symbols", astral: "\ud803[\ude60-\ude7f]" },
      { name: "InRunic", bmp: "ᚠ-᛿" },
      { name: "InSamaritan", bmp: "ࠀ-࠿" },
      { name: "InSaurashtra", bmp: "ꢀ-꣟" },
      { name: "InSharada", astral: "\ud804[\udd80-\udddf]" },
      { name: "InShavian", astral: "\ud801[\udc50-\udc7f]" },
      { name: "InShorthand_Format_Controls", astral: "\ud82f[\udca0-\udcaf]" },
      { name: "InSiddham", astral: "\ud805[\udd80-\uddff]" },
      { name: "InSinhala", bmp: "඀-෿" },
      { name: "InSinhala_Archaic_Numbers", astral: "\ud804[\udde0-\uddff]" },
      { name: "InSmall_Form_Variants", bmp: "﹐-﹯" },
      { name: "InSogdian", astral: "\ud803[\udf30-\udf6f]" },
      { name: "InSora_Sompeng", astral: "\ud804[\udcd0-\udcff]" },
      { name: "InSoyombo", astral: "\ud806[\ude50-\udeaf]" },
      { name: "InSpacing_Modifier_Letters", bmp: "ʰ-˿" },
      { name: "InSpecials", bmp: "￰-￿" },
      { name: "InSundanese", bmp: "ᮀ-ᮿ" },
      { name: "InSundanese_Supplement", bmp: "᳀-᳏" },
      { name: "InSuperscripts_And_Subscripts", bmp: "⁰-₟" },
      { name: "InSupplemental_Arrows_A", bmp: "⟰-⟿" },
      { name: "InSupplemental_Arrows_B", bmp: "⤀-⥿" },
      { name: "InSupplemental_Arrows_C", astral: "\ud83e[\udc00-\udcff]" },
      { name: "InSupplemental_Mathematical_Operators", bmp: "⨀-⫿" },
      { name: "InSupplemental_Punctuation", bmp: "⸀-⹿" },
      {
        name: "InSupplemental_Symbols_And_Pictographs",
        astral: "\ud83e[\udd00-\uddff]"
      },
      {
        name: "InSupplementary_Private_Use_Area_A",
        astral: "[\udb80-\udbbf][\udc00-\udfff]"
      },
      {
        name: "InSupplementary_Private_Use_Area_B",
        astral: "[\udbc0-\udbff][\udc00-\udfff]"
      },
      { name: "InSutton_SignWriting", astral: "\ud836[\udc00-\udeaf]" },
      { name: "InSyloti_Nagri", bmp: "ꠀ-꠯" },
      { name: "InSyriac", bmp: "܀-ݏ" },
      { name: "InSyriac_Supplement", bmp: "ࡠ-࡯" },
      { name: "InTagalog", bmp: "ᜀ-ᜟ" },
      { name: "InTagbanwa", bmp: "ᝠ-᝿" },
      { name: "InTags", astral: "\udb40[\udc00-\udc7f]" },
      { name: "InTai_Le", bmp: "ᥐ-᥿" },
      { name: "InTai_Tham", bmp: "ᨠ-᪯" },
      { name: "InTai_Viet", bmp: "ꪀ-꫟" },
      { name: "InTai_Xuan_Jing_Symbols", astral: "\ud834[\udf00-\udf5f]" },
      { name: "InTakri", astral: "\ud805[\ude80-\udecf]" },
      { name: "InTamil", bmp: "஀-௿" },
      { name: "InTangut", astral: "[\ud81c-\ud821][\udc00-\udfff]" },
      { name: "InTangut_Components", astral: "\ud822[\udc00-\udeff]" },
      { name: "InTelugu", bmp: "ఀ-౿" },
      { name: "InThaana", bmp: "ހ-޿" },
      { name: "InThai", bmp: "฀-๿" },
      { name: "InTibetan", bmp: "ༀ-࿿" },
      { name: "InTifinagh", bmp: "ⴰ-⵿" },
      { name: "InTirhuta", astral: "\ud805[\udc80-\udcdf]" },
      { name: "InTransport_And_Map_Symbols", astral: "\ud83d[\ude80-\udeff]" },
      { name: "InUgaritic", astral: "\ud800[\udf80-\udf9f]" },
      { name: "InUnified_Canadian_Aboriginal_Syllabics", bmp: "᐀-ᙿ" },
      { name: "InUnified_Canadian_Aboriginal_Syllabics_Extended", bmp: "ᢰ-᣿" },
      { name: "InVai", bmp: "ꔀ-꘿" },
      { name: "InVariation_Selectors", bmp: "︀-️" },
      {
        name: "InVariation_Selectors_Supplement",
        astral: "\udb40[\udd00-\uddef]"
      },
      { name: "InVedic_Extensions", bmp: "᳐-᳿" },
      { name: "InVertical_Forms", bmp: "︐-︟" },
      { name: "InWarang_Citi", astral: "\ud806[\udca0-\udcff]" },
      { name: "InYi_Radicals", bmp: "꒐-꓏" },
      { name: "InYi_Syllables", bmp: "ꀀ-꒏" },
      { name: "InYijing_Hexagram_Symbols", bmp: "䷀-䷿" },
      { name: "InZanabazar_Square", astral: "\ud806[\ude00-\ude4f]" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(17);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(429));
    /*!
     * XRegExp Unicode Categories 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Categories"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      {
        name: "C",
        alias: "Other",
        isBmpLast: !0,
        bmp:
          "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜؝۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",
        astral:
          "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcbd\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca0-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]"
      },
      { name: "Cc", alias: "Control", bmp: "\0--" },
      {
        name: "Cf",
        alias: "Format",
        bmp: "­؀-؅؜۝܏࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\ufeff￹-￻",
        astral:
          "\ud804[\udcbd\udccd]|\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|\udb40[\udc01\udc20-\udc7f]"
      },
      {
        name: "Cn",
        alias: "Unassigned",
        bmp:
          "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿؝܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",
        astral:
          "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcc2-\udccc\udcce\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca4-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|[\udbbf\udbff][\udffe\udfff]"
      },
      {
        name: "Co",
        alias: "Private_Use",
        bmp: "-",
        astral:
          "[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]"
      },
      { name: "Cs", alias: "Surrogate", bmp: "\ud800-\udfff" },
      {
        name: "L",
        alias: "Letter",
        bmp:
          "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udd00-\udd43]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "LC",
        alias: "Cased_Letter",
        bmp:
          "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ",
        astral:
          "\ud801[\udc00-\udc4f\udcb0-\udcd3\udcd8-\udcfb]|\ud803[\udc80-\udcb2\udcc0-\udcf2]|\ud806[\udca0-\udcdf]|\ud81b[\ude40-\ude7f]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udd00-\udd43]"
      },
      {
        name: "Ll",
        alias: "Lowercase_Letter",
        bmp:
          "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
        astral:
          "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"
      },
      {
        name: "Lm",
        alias: "Modifier_Letter",
        bmp:
          "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟｰﾞﾟ",
        astral: "\ud81a[\udf40-\udf43]|\ud81b[\udf93-\udf9f\udfe0\udfe1]"
      },
      {
        name: "Lo",
        alias: "Other_Letter",
        bmp:
          "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳱᳵᳶℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc50-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud83a[\udc00-\udcc4]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" },
      {
        name: "Lu",
        alias: "Uppercase_Letter",
        bmp:
          "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
        astral:
          "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]"
      },
      {
        name: "M",
        alias: "Mark",
        bmp:
          "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",
        astral:
          "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc00-\udc02\udc38-\udc46\udc7f-\udc82\udcb0-\udcba\udd00-\udd02\udd27-\udd34\udd45\udd46\udd73\udd80-\udd82\uddb3-\uddc0\uddc9-\uddcc\ude2c-\ude37\ude3e\udedf-\udeea\udf00-\udf03\udf3b\udf3c\udf3e-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc35-\udc46\udc5e\udcb0-\udcc3\uddaf-\uddb5\uddb8-\uddc0\udddc\udddd\ude30-\ude40\udeab-\udeb7\udf1d-\udf2b]|\ud806[\udc2c-\udc3a\ude01-\ude0a\ude33-\ude39\ude3b-\ude3e\ude47\ude51-\ude5b\ude8a-\ude99]|\ud807[\udc2f-\udc36\udc38-\udc3f\udc92-\udca7\udca9-\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd8a-\udd8e\udd90\udd91\udd93-\udd97\udef3-\udef6]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf51-\udf7e\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"
      },
      {
        name: "Mc",
        alias: "Spacing_Mark",
        bmp:
          "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡ᳲᳳ᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦽ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",
        astral:
          "\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd45\udd46\udd82\uddb3-\uddb5\uddbf\uddc0\ude2c-\ude2e\ude32\ude33\ude35\udee0-\udee2\udf02\udf03\udf3e\udf3f\udf41-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63]|\ud805[\udc35-\udc37\udc40\udc41\udc45\udcb0-\udcb2\udcb9\udcbb-\udcbe\udcc1\uddaf-\uddb1\uddb8-\uddbb\uddbe\ude30-\ude32\ude3b\ude3c\ude3e\udeac\udeae\udeaf\udeb6\udf20\udf21\udf26]|\ud806[\udc2c-\udc2e\udc38\ude39\ude57\ude58\ude97]|\ud807[\udc2f\udc3e\udca9\udcb1\udcb4\udd8a-\udd8e\udd93\udd94\udd96\udef5\udef6]|\ud81b[\udf51-\udf7e]|\ud834[\udd65\udd66\udd6d-\udd72]"
      },
      { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" },
      {
        name: "Mn",
        alias: "Nonspacing_Mark",
        bmp:
          "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ఀఄా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",
        astral:
          "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc01\udc38-\udc46\udc7f-\udc81\udcb3-\udcb6\udcb9\udcba\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd73\udd80\udd81\uddb6-\uddbe\uddc9-\uddcc\ude2f-\ude31\ude34\ude36\ude37\ude3e\udedf\udee3-\udeea\udf00\udf01\udf3b\udf3c\udf40\udf66-\udf6c\udf70-\udf74]|\ud805[\udc38-\udc3f\udc42-\udc44\udc46\udc5e\udcb3-\udcb8\udcba\udcbf\udcc0\udcc2\udcc3\uddb2-\uddb5\uddbc\uddbd\uddbf\uddc0\udddc\udddd\ude33-\ude3a\ude3d\ude3f\ude40\udeab\udead\udeb0-\udeb5\udeb7\udf1d-\udf1f\udf22-\udf25\udf27-\udf2b]|\ud806[\udc2f-\udc37\udc39\udc3a\ude01-\ude0a\ude33-\ude38\ude3b-\ude3e\ude47\ude51-\ude56\ude59-\ude5b\ude8a-\ude96\ude98\ude99]|\ud807[\udc30-\udc36\udc38-\udc3d\udc3f\udc92-\udca7\udcaa-\udcb0\udcb2\udcb3\udcb5\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd90\udd91\udd95\udd97\udef3\udef4]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"
      },
      {
        name: "N",
        alias: "Number",
        bmp:
          "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
        astral:
          "\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud801[\udca0-\udca9]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\udd30-\udd39\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b]|\ud806[\udce0-\udcf2]|\ud807[\udc50-\udc6c\udd50-\udd59\udda0-\udda9]|\ud809[\udc00-\udc6e]|\ud81a[\ude60-\ude69\udf50-\udf59\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud835[\udfce-\udfff]|\ud83a[\udcc7-\udccf\udd50-\udd59]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]"
      },
      {
        name: "Nd",
        alias: "Decimal_Number",
        bmp:
          "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
        astral:
          "\ud801[\udca0-\udca9]|\ud803[\udd30-\udd39]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf39]|\ud806[\udce0-\udce9]|\ud807[\udc50-\udc59\udd50-\udd59\udda0-\udda9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]|\ud83a[\udd50-\udd59]"
      },
      {
        name: "Nl",
        alias: "Letter_Number",
        bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",
        astral:
          "\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]|\ud809[\udc00-\udc6e]"
      },
      {
        name: "No",
        alias: "Other_Number",
        bmp:
          "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",
        astral:
          "\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc65\udde1-\uddf4]|\ud805[\udf3a\udf3b]|\ud806[\udcea-\udcf2]|\ud807[\udc5a-\udc6c]|\ud81a[\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud83a[\udcc7-\udccf]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]"
      },
      {
        name: "P",
        alias: "Punctuation",
        bmp:
          "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹎、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",
        astral:
          "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"
      },
      { name: "Pc", alias: "Connector_Punctuation", bmp: "_‿⁀⁔︳︴﹍-﹏＿" },
      {
        name: "Pd",
        alias: "Dash_Punctuation",
        bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－"
      },
      {
        name: "Pe",
        alias: "Close_Punctuation",
        bmp:
          "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣"
      },
      { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" },
      { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" },
      {
        name: "Po",
        alias: "Other_Punctuation",
        bmp:
          "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙭᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹎、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",
        astral:
          "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"
      },
      {
        name: "Ps",
        alias: "Open_Punctuation",
        bmp:
          "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢"
      },
      {
        name: "S",
        alias: "Symbol",
        bmp:
          "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₿℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",
        astral:
          "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud83b[\udcac\udcb0\udef0\udef1]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]"
      },
      {
        name: "Sc",
        alias: "Currency_Symbol",
        bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-₿꠸﷼﹩＄￠￡￥￦",
        astral: "𞲰"
      },
      {
        name: "Sk",
        alias: "Modifier_Symbol",
        bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛﮲-﯁＾｀￣",
        astral: "\ud83c[\udffb-\udfff]"
      },
      {
        name: "Sm",
        alias: "Math_Symbol",
        bmp:
          "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",
        astral:
          "\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83b[\udef0\udef1]"
      },
      {
        name: "So",
        alias: "Other_Symbol",
        bmp:
          "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﷽￤￨￭￮￼�",
        astral:
          "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|𞲬|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udffa]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]"
      },
      { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" },
      { name: "Zl", alias: "Line_Separator", bmp: "\u2028" },
      { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" },
      { name: "Zs", alias: "Space_Separator", bmp: "    -   　" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(17);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(431));
    /*!
     * XRegExp Unicode Properties 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2012-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Properties"
        );
      var u = t.default;
      u.push({ name: "Assigned", inverseOf: "Cn" }), d.addUnicodeData(u);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      { name: "ASCII", bmp: "\0-" },
      {
        name: "Alphabetic",
        bmp:
          "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഀ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽꣾꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc00-\udc45\udc82-\udcb8\udcd0-\udce8\udd00-\udd32\udd44-\udd46\udd50-\udd72\udd76\udd80-\uddbf\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude34\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udee8\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d-\udf44\udf47\udf48\udf4b\udf4c\udf50\udf57\udf5d-\udf63]|\ud805[\udc00-\udc41\udc43-\udc45\udc47-\udc4a\udc80-\udcc1\udcc4\udcc5\udcc7\udd80-\uddb5\uddb8-\uddbe\uddd8-\udddd\ude00-\ude3e\ude40\ude44\ude80-\udeb5\udf00-\udf1a\udf1d-\udf2a]|\ud806[\udc00-\udc38\udca0-\udcdf\udcff\ude00-\ude32\ude35-\ude3e\ude50-\ude83\ude86-\ude97\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc3e\udc40\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd41\udd43\udd46\udd47\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd96\udd98\udee0-\udef6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50-\udf7e\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9e]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd47]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "Any",
        isBmpLast: !0,
        bmp: "\0-￿",
        astral: "[\ud800-\udbff][\udc00-\udfff]"
      },
      {
        name: "Default_Ignorable_Code_Point",
        bmp: "­͏؜ᅟᅠ឴឵᠋-᠎​-‏‪-‮⁠-⁯ㅤ︀-️\ufeffﾠ￰-￸",
        astral:
          "\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|[\udb40-\udb43][\udc00-\udfff]"
      },
      {
        name: "Lowercase",
        bmp:
          "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟸ-ꟺꬰ-ꭚꭜ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
        astral:
          "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"
      },
      {
        name: "Noncharacter_Code_Point",
        bmp: "﷐-﷯￾￿",
        astral:
          "[\ud83f\ud87f\ud8bf\ud8ff\ud93f\ud97f\ud9bf\ud9ff\uda3f\uda7f\udabf\udaff\udb3f\udb7f\udbbf\udbff][\udffe\udfff]"
      },
      {
        name: "Uppercase",
        bmp:
          "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
        astral:
          "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]"
      },
      { name: "White_Space", bmp: "\t-\r    - \u2028\u2029  　" }
    ];
  },
  function(d, u, e) {
    "use strict";
    var n = e(17);
    Object.defineProperty(u, "__esModule", { value: !0 }), (u.default = void 0);
    var t = n(e(433));
    /*!
     * XRegExp Unicode Scripts 4.2.4
     * <xregexp.com>
     * Steven Levithan (c) 2010-present MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */ (u.default = function(d) {
      if (!d.addUnicodeData)
        throw new ReferenceError(
          "Unicode Base must be loaded before Unicode Scripts"
        );
      d.addUnicodeData(t.default);
    }),
      (d.exports = u.default);
  },
  function(d, u) {
    d.exports = [
      {
        name: "Adlam",
        astral: "\ud83a[\udd00-\udd4a\udd50-\udd59\udd5e\udd5f]"
      },
      {
        name: "Ahom",
        astral: "\ud805[\udf00-\udf1a\udf1d-\udf2b\udf30-\udf3f]"
      },
      { name: "Anatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude46]" },
      {
        name: "Arabic",
        bmp: "؀-؄؆-؋؍-ؚ؜؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࢠ-ࢴࢶ-ࢽ࣓-ࣣ࣡-ࣿﭐ-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷽ﹰ-ﹴﹶ-ﻼ",
        astral:
          "\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]"
      },
      { name: "Armenian", bmp: "Ա-Ֆՙ-ֈ֊֍-֏ﬓ-ﬗ" },
      { name: "Avestan", astral: "\ud802[\udf00-\udf35\udf39-\udf3f]" },
      { name: "Balinese", bmp: "ᬀ-ᭋ᭐-᭼" },
      { name: "Bamum", bmp: "ꚠ-꛷", astral: "\ud81a[\udc00-\ude38]" },
      { name: "Bassa_Vah", astral: "\ud81a[\uded0-\udeed\udef0-\udef5]" },
      { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" },
      { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" },
      {
        name: "Bhaiksuki",
        astral: "\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc45\udc50-\udc6c]"
      },
      { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆺ" },
      { name: "Brahmi", astral: "\ud804[\udc00-\udc4d\udc52-\udc6f\udc7f]" },
      { name: "Braille", bmp: "⠀-⣿" },
      { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" },
      { name: "Buhid", bmp: "ᝀ-ᝓ" },
      { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ" },
      { name: "Carian", astral: "\ud800[\udea0-\uded0]" },
      { name: "Caucasian_Albanian", astral: "\ud801[\udd30-\udd63\udd6f]" },
      { name: "Chakma", astral: "\ud804[\udd00-\udd34\udd36-\udd46]" },
      { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" },
      { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" },
      {
        name: "Common",
        bmp:
          "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·։؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-₿℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮘-⯈⯊-⯾⸀-⹎⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\ufeff！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",
        astral:
          "\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9b\uddd0-\uddfc\udee1-\udefb]|\ud82f[\udca0-\udca3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\udde8\udee0-\udef3\udf00-\udf56\udf60-\udf78]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\ud83b[\udc71-\udcb4]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd00-\udd0c\udd10-\udd6b\udd70-\uddac\udde6-\uddff\ude01\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]|\udb40[\udc01\udc20-\udc7f]"
      },
      { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" },
      {
        name: "Cuneiform",
        astral:
          "\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc70-\udc74\udc80-\udd43]"
      },
      {
        name: "Cypriot",
        astral:
          "\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]"
      },
      { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" },
      { name: "Deseret", astral: "\ud801[\udc00-\udc4f]" },
      { name: "Devanagari", bmp: "ऀ-ॐ॓-ॣ०-ॿ꣠-ꣿ" },
      { name: "Dogra", astral: "\ud806[\udc00-\udc3b]" },
      {
        name: "Duployan",
        astral:
          "\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9c-\udc9f]"
      },
      {
        name: "Egyptian_Hieroglyphs",
        astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]"
      },
      { name: "Elbasan", astral: "\ud801[\udd00-\udd27]" },
      {
        name: "Ethiopic",
        bmp:
          "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ"
      },
      { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" },
      {
        name: "Glagolitic",
        bmp: "Ⰰ-Ⱞⰰ-ⱞ",
        astral:
          "\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]"
      },
      { name: "Gothic", astral: "\ud800[\udf30-\udf4a]" },
      {
        name: "Grantha",
        astral:
          "\ud804[\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]"
      },
      {
        name: "Greek",
        bmp:
          "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",
        astral: "\ud800[\udd40-\udd8e\udda0]|\ud834[\ude00-\ude45]"
      },
      { name: "Gujarati", bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿" },
      {
        name: "Gunjala_Gondi",
        astral:
          "\ud807[\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd98\udda0-\udda9]"
      },
      { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" },
      {
        name: "Han",
        bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶵一-鿯豈-舘並-龎",
        astral:
          "[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]"
      },
      {
        name: "Hangul",
        bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
      },
      { name: "Hanifi_Rohingya", astral: "\ud803[\udd00-\udd27\udd30-\udd39]" },
      { name: "Hanunoo", bmp: "ᜠ-᜴" },
      {
        name: "Hatran",
        astral: "\ud802[\udce0-\udcf2\udcf4\udcf5\udcfb-\udcff]"
      },
      { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" },
      {
        name: "Hiragana",
        bmp: "ぁ-ゖゝ-ゟ",
        astral: "\ud82c[\udc01-\udd1e]|🈀"
      },
      {
        name: "Imperial_Aramaic",
        astral: "\ud802[\udc40-\udc55\udc57-\udc5f]"
      },
      {
        name: "Inherited",
        bmp: "̀-ًͯ҅҆-ٰٕ॒॑᪰-᪾᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",
        astral:
          "\ud800[\uddfd\udee0]|𑌻|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\udb40[\udd00-\uddef]"
      },
      {
        name: "Inscriptional_Pahlavi",
        astral: "\ud802[\udf60-\udf72\udf78-\udf7f]"
      },
      {
        name: "Inscriptional_Parthian",
        astral: "\ud802[\udf40-\udf55\udf58-\udf5f]"
      },
      { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" },
      { name: "Kaithi", astral: "\ud804[\udc80-\udcc1\udccd]" },
      { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲ" },
      {
        name: "Katakana",
        bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",
        astral: "𛀀"
      },
      { name: "Kayah_Li", bmp: "꤀-꤭꤯" },
      {
        name: "Kharoshthi",
        astral:
          "\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f-\ude48\ude50-\ude58]"
      },
      { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" },
      { name: "Khojki", astral: "\ud804[\ude00-\ude11\ude13-\ude3e]" },
      { name: "Khudawadi", astral: "\ud804[\udeb0-\udeea\udef0-\udef9]" },
      { name: "Lao", bmp: "ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" },
      {
        name: "Latin",
        bmp:
          "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞹꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ"
      },
      { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" },
      { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" },
      {
        name: "Linear_A",
        astral: "\ud801[\ude00-\udf36\udf40-\udf55\udf60-\udf67]"
      },
      {
        name: "Linear_B",
        astral:
          "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]"
      },
      { name: "Lisu", bmp: "ꓐ-꓿" },
      { name: "Lycian", astral: "\ud800[\ude80-\ude9c]" },
      { name: "Lydian", astral: "\ud802[\udd20-\udd39\udd3f]" },
      { name: "Mahajani", astral: "\ud804[\udd50-\udd76]" },
      { name: "Makasar", astral: "\ud807[\udee0-\udef8]" },
      { name: "Malayalam", bmp: "ഀ-ഃഅ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" },
      { name: "Mandaic", bmp: "ࡀ-࡛࡞" },
      { name: "Manichaean", astral: "\ud802[\udec0-\udee6\udeeb-\udef6]" },
      {
        name: "Marchen",
        astral: "\ud807[\udc70-\udc8f\udc92-\udca7\udca9-\udcb6]"
      },
      {
        name: "Masaram_Gondi",
        astral:
          "\ud807[\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd47\udd50-\udd59]"
      },
      { name: "Medefaidrin", astral: "\ud81b[\ude40-\ude9a]" },
      { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" },
      { name: "Mende_Kikakui", astral: "\ud83a[\udc00-\udcc4\udcc7-\udcd6]" },
      {
        name: "Meroitic_Cursive",
        astral: "\ud802[\udda0-\uddb7\uddbc-\uddcf\uddd2-\uddff]"
      },
      { name: "Meroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
      {
        name: "Miao",
        astral: "\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]"
      },
      { name: "Modi", astral: "\ud805[\ude00-\ude44\ude50-\ude59]" },
      {
        name: "Mongolian",
        bmp: "᠀᠁᠄᠆-᠎᠐-᠙ᠠ-ᡸᢀ-ᢪ",
        astral: "\ud805[\ude60-\ude6c]"
      },
      { name: "Mro", astral: "\ud81a[\ude40-\ude5e\ude60-\ude69\ude6e\ude6f]" },
      {
        name: "Multani",
        astral:
          "\ud804[\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea9]"
      },
      { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" },
      { name: "Nabataean", astral: "\ud802[\udc80-\udc9e\udca7-\udcaf]" },
      { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" },
      { name: "Newa", astral: "\ud805[\udc00-\udc59\udc5b\udc5d\udc5e]" },
      { name: "Nko", bmp: "߀-ߺ߽-߿" },
      { name: "Nushu", astral: "𖿡|\ud82c[\udd70-\udefb]" },
      { name: "Ogham", bmp: " -᚜" },
      { name: "Ol_Chiki", bmp: "᱐-᱿" },
      {
        name: "Old_Hungarian",
        astral: "\ud803[\udc80-\udcb2\udcc0-\udcf2\udcfa-\udcff]"
      },
      { name: "Old_Italic", astral: "\ud800[\udf00-\udf23\udf2d-\udf2f]" },
      { name: "Old_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
      { name: "Old_Permic", astral: "\ud800[\udf50-\udf7a]" },
      { name: "Old_Persian", astral: "\ud800[\udfa0-\udfc3\udfc8-\udfd5]" },
      { name: "Old_Sogdian", astral: "\ud803[\udf00-\udf27]" },
      { name: "Old_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
      { name: "Old_Turkic", astral: "\ud803[\udc00-\udc48]" },
      { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୷" },
      { name: "Osage", astral: "\ud801[\udcb0-\udcd3\udcd8-\udcfb]" },
      { name: "Osmanya", astral: "\ud801[\udc80-\udc9d\udca0-\udca9]" },
      {
        name: "Pahawh_Hmong",
        astral:
          "\ud81a[\udf00-\udf45\udf50-\udf59\udf5b-\udf61\udf63-\udf77\udf7d-\udf8f]"
      },
      { name: "Palmyrene", astral: "\ud802[\udc60-\udc7f]" },
      { name: "Pau_Cin_Hau", astral: "\ud806[\udec0-\udef8]" },
      { name: "Phags_Pa", bmp: "ꡀ-꡷" },
      { name: "Phoenician", astral: "\ud802[\udd00-\udd1b\udd1f]" },
      {
        name: "Psalter_Pahlavi",
        astral: "\ud802[\udf80-\udf91\udf99-\udf9c\udfa9-\udfaf]"
      },
      { name: "Rejang", bmp: "ꤰ-꥓꥟" },
      { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" },
      { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" },
      { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" },
      { name: "Sharada", astral: "\ud804[\udd80-\uddcd\uddd0-\udddf]" },
      { name: "Shavian", astral: "\ud801[\udc50-\udc7f]" },
      { name: "Siddham", astral: "\ud805[\udd80-\uddb5\uddb8-\udddd]" },
      {
        name: "SignWriting",
        astral: "\ud836[\udc00-\ude8b\ude9b-\ude9f\udea1-\udeaf]"
      },
      {
        name: "Sinhala",
        bmp: "ංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",
        astral: "\ud804[\udde1-\uddf4]"
      },
      { name: "Sogdian", astral: "\ud803[\udf30-\udf59]" },
      { name: "Sora_Sompeng", astral: "\ud804[\udcd0-\udce8\udcf0-\udcf9]" },
      { name: "Soyombo", astral: "\ud806[\ude50-\ude83\ude86-\udea2]" },
      { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" },
      { name: "Syloti_Nagri", bmp: "ꠀ-꠫" },
      { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" },
      { name: "Tagalog", bmp: "ᜀ-ᜌᜎ-᜔" },
      { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" },
      { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" },
      { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" },
      { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" },
      { name: "Takri", astral: "\ud805[\ude80-\udeb7\udec0-\udec9]" },
      { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺" },
      {
        name: "Tangut",
        astral:
          "𖿠|[\ud81c-\ud820][\udc00-\udfff]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]"
      },
      { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘ-ౚౠ-ౣ౦-౯౸-౿" },
      { name: "Thaana", bmp: "ހ-ޱ" },
      { name: "Thai", bmp: "ก-ฺเ-๛" },
      { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" },
      { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" },
      { name: "Tirhuta", astral: "\ud805[\udc80-\udcc7\udcd0-\udcd9]" },
      { name: "Ugaritic", astral: "\ud800[\udf80-\udf9d\udf9f]" },
      { name: "Vai", bmp: "ꔀ-ꘫ" },
      { name: "Warang_Citi", astral: "\ud806[\udca0-\udcf2\udcff]" },
      { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" },
      { name: "Zanabazar_Square", astral: "\ud806[\ude00-\ude47]" }
    ];
  },
  function(d, u, e) {
    const { Transform: n } = e(2),
      t = e(32);
    d.exports = () =>
      new n({
        objectMode: !0,
        transform(d, u, e) {
          t.isComplete(d) || this.push(d), e();
        }
      });
  },
  function(d, u, e) {
    const { Transform: n } = e(2),
      t = e(25);
    d.exports = ({ time: d, timezone: u }) => {
      const e = new Date(d),
        a = t(d, u),
        r = d => new Date(d) < e;
      return new n({
        objectMode: !0,
        transform(d, u, e) {
          const n = {};
          d.postpone && r(d.postpone) && (n.postpone = null),
            d.start &&
              r(d.start) &&
              ((d.repeat &&
                ("COMPLETE" !== d.repeat.type ||
                  (d => {
                    const u = a.fromISO(d);
                    return u.hour > 0 || u.minute > 0;
                  })(d.start))) ||
                (n.start = null)),
            Object.keys(n).length ? this.push({ ...d, ...n }) : this.push(d),
            e();
        }
      });
    };
  },
  function(d, u, e) {
    const { Transform: n } = e(2),
      t = e(32),
      a = e(25),
      {
        COMPLETE_TASK: r,
        INCOMPLETE_TASK: f,
        COMMENT: c,
        PADDING: i
      } = t.TYPES,
      o = "INBOX",
      s = "TODO",
      l = "FUTURE",
      m = "DONE",
      p = ({ start: d, postpone: u }) =>
        [d, u]
          .reduce((d, u) => {
            if (!u) return d;
            const e = new Date(u);
            return d < e ? e : d;
          }, new Date("1980-01-01"))
          .getTime(),
      h = (d, u) => p(d) - p(u),
      b = (d, u) => d.text.localeCompare(u.text),
      y = (d, u, e) => d.reduce((d, n) => (0 === d ? n(u, e) : d), 0),
      g = (d, u, e) => {
        if (!u.length) return [];
        const n = [];
        return (
          e && !t.isPadding(e) && n.push((() => ({ type: i, text: "\n" }))()),
          ("To-Do" === d && u[0].type === c) ||
            n.push((d => ({ type: c, text: `{{type}} ${d}` }))(d)),
          u.forEach(d => n.push(d)),
          n
        );
      };
    d.exports = {
      parse: () => {
        let d = s;
        return new n({
          objectMode: !0,
          transform(u, e, n) {
            if (u.type !== c) return this.push({ ...u, section: d }), n();
            const t = u.text.toLowerCase();
            return t.match(/^{{type}} ?inbox\s*$/)
              ? ((d = o), n())
              : t.match(/^{{type}} ?future\s*$/)
              ? ((d = l), n())
              : t.match(/^{{type}} ?done\s*$/)
              ? ((d = m), n())
              : ((d = s), this.push({ ...u, section: d }), n());
          }
        });
      },
      process: ({ time: d, timezone: u }) => {
        const e = a(d, u);
        return new n({
          objectMode: !0,
          transform(d, u, n) {
            if (
              (t.isComplete(d)
                ? (d.section = m)
                : d.section === m && (d.section = s),
              ![r, f].includes(d.type))
            )
              return this.push(d), n();
            const a = (({ start: d, postpone: u }, e) =>
              [d, u]
                .filter(Boolean)
                .reduce((d, u) => d && e.fromISO(u) <= e.local(), !0))(d, e);
            switch (d.section) {
              case o:
              case s:
                a || (d.section = l);
                break;
              case l:
                a && (d.section = o);
                break;
              case m:
                break;
              default:
                throw new Error(`Invalid section: ${d.section}`);
            }
            return this.push(d), n();
          }
        });
      },
      sort: () => {
        const d = [],
          u = [],
          e = [],
          t = [];
        return new n({
          objectMode: !0,
          transform(n, a, r) {
            switch (n.section) {
              case o:
                d.push(n);
                break;
              case s:
                u.push(n);
                break;
              case l:
                e.push(n);
                break;
              case m:
                t.push(n);
                break;
              default:
                throw new Error(
                  `Unknown section for block: ${JSON.stringify(n, null, 2)}`
                );
            }
            r();
          },
          flush(n) {
            [
              { name: "Inbox", blocks: d },
              { name: "To-Do", blocks: u },
              { name: "Future", blocks: e.sort(y.bind(null, [h, b])) },
              { name: "Done", blocks: t }
            ].reduce((d, { name: u, blocks: e }) => {
              const n = g(u, e, d);
              return n.forEach(d => this.push(d)), n[n.length - 1];
            }, null),
              n();
          }
        });
      },
      stringify: () =>
        new n({
          objectMode: !0,
          transform(d, u, e) {
            this.push({ ...d, section: null }), e();
          }
        })
    };
  }
]);
