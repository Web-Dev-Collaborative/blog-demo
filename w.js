! function ( t ) {
  var e = {};

  function n( o ) {
    if ( e[ o ] ) return e[ o ].exports;
    var i = e[ o ] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[ o ].call( i.exports, i, i.exports, n ), i.l = !0, i.exports
  }
  n.m = t, n.c = e, n.d = function ( t, e, o ) {
    n.o( t, e ) || Object.defineProperty( t, e, {
      enumerable: !0,
      get: o
    } )
  }, n.r = function ( t ) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty( t, Symbol.toStringTag, {
      value: "Module"
    } ), Object.defineProperty( t, "__esModule", {
      value: !0
    } )
  }, n.t = function ( t, e ) {
    if ( 1 & e && ( t = n( t ) ), 8 & e ) return t;
    if ( 4 & e && "object" == typeof t && t && t.__esModule ) return t;
    var o = Object.create( null );
    if ( n.r( o ), Object.defineProperty( o, "default", {
        enumerable: !0,
        value: t
      } ), 2 & e && "string" != typeof t )
      for ( var i in t ) n.d( o, i, function ( e ) {
        return t[ e ]
      }.bind( null, i ) );
    return o
  }, n.n = function ( t ) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d( e, "a", e ), e
  }, n.o = function ( t, e ) {
    return Object.prototype.hasOwnProperty.call( t, e )
  }, n.p = "", n( n.s = 8 )
}( [ function ( t, e ) {
  function n( e ) {
    return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function ( t ) {
      return typeof t
    } : t.exports = n = function ( t ) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, n( e )
  }
  t.exports = n
}, function ( t, e, n ) {
  "use strict";
  n.d( e, "b", ( function () {
    return r
  } ) ), n.d( e, "a", ( function () {
    return a
  } ) );
  var o = null,
    i = function () {
      if ( null == o ) {
        o = "";
        var t, e = document.location.hostname.split( "." );
        if ( "undefined" != typeof TRACKS_COOKIE_DOMAIN ) o = TRACKS_COOKIE_DOMAIN;
        else
          for ( var n = 1; n <= e.length; ++n )
            if ( t = "." + e.slice( -n ).join( "." ), i = t, r = void 0, r = ( new Date ).getTime(), document.cookie = encodeURIComponent( "tk_tc" ) + "=" + r + "; domain=" + i + "; path=/;", a( "tc" ) == r ) {
              o = t;
              break
            }
        "" != o && ( ! function ( t ) {
          var e = new Date;
          e.setTime( e.getTime() - 1e3 ), document.cookie = encodeURIComponent( "tk_tc" ) + "= ; domain=" + t + "; path=/; expires=" + e.toUTCString()
        }( o ), o = "; domain=" + o )
      }
      var i, r;
      return o
    },
    r = function ( t, e, n ) {
      var o = encodeURIComponent( "tk_" + t ),
        r = new Date;
      void 0 === n && ( n = 15768e4 ), document.location.hostname.match( /((^|.)wp\.com$|^.?w\.org$)/ ) || ( r.setTime( r.getTime() + 1e3 * n ), document.cookie = o + "=" + encodeURIComponent( e ) + i() + "; path=/; expires=" + r.toUTCString() )
    },
    a = function ( t ) {
      var e = encodeURIComponent( "tk_" + t ) + "=",
        n = e.length,
        o = document.cookie.split( "; " ),
        i = o.length;
      for ( 1 === i && ( i = ( o = document.cookie.split( ";" ) ).length ), i--; i >= 0; i-- )
        if ( o[ i ].substring( 0, n ) === e ) return decodeURIComponent( o[ i ].substring( n ) );
      return null
    }
}, function ( t, e, n ) {
  "use strict";
  n.d( e, "a", ( function () {
    return E
  } ) );
  var o = n( 0 ),
    i = n.n( o ),
    r = n( 1 );

  function a( t ) {
    var e = [];
    if ( window.crypto && window.crypto.getRandomValues ) e = new Uint8Array( t ), window.crypto.getRandomValues( e );
    else
      for ( var n = 0; n < t; ++n ) e[ n ] = Math.floor( 256 * Math.random() );
    return btoa( String.fromCharCode.apply( String, e ) )
  }
  var c, u, d, f, l, s, p, m;

  function v() {
    c = void 0, u = null, d = null, [], f = null, l = {}, s = {}, p = {}, m = {}
  }
  v();
  var w = function ( t ) {
    if ( this.a = 1, t && t.length )
      for ( var e = 0; e < t.length; e++ ) this.push( t[ e ] )
  };
  w.prototype.push = function ( t ) {
    if ( t )
      if ( "object" == i()( t ) && t.length ) {
        var e = t.splice( 0, 1 );
        T[ e ] && T[ e ].apply( null, t )
      } else "function" == typeof t && t()
  };
  var h = function ( t ) {
      t._ui || t._ut || x(), k(), t._ui = t._ui || c, t._ut = t._ut || u, d && ( t._ul = d );
      var e = new Date;
      t._ts = e.getTime(), t._tz = e.getTimezoneOffset() / 60;
      var n = window.navigator,
        o = window.screen;
      t._lg = n.language, t._pf = n.platform, t._ht = o.height, t._wd = o.width;
      var r = void 0 !== window.pageXOffset ? window.pageXOffset : ( document.documentElement || document.body.parentNode || document.body ).scrollLeft,
        a = void 0 !== window.pageYOffset ? window.pageYOffset : ( document.documentElement || document.body.parentNode || document.body ).scrollTop;
      t._sx = void 0 !== r ? r : 0, t._sy = void 0 !== a ? a : 0, void 0 !== document.location && ( t._dl = document.location.toString() ), void 0 !== document.referrer && ( t._dr = document.referrer ),
        function t( e, n ) {
          if ( null == e || "object" !== i()( e ) ) return e;
          for ( var o in null != n && "object" === i()( n ) || ( n = e.constructor() ), e ) e.hasOwnProperty( o ) && ( n[ o ] = t( e[ o ] ) );
          return n
        }( s, t ), g( function ( t ) {
          var e = [];
          for ( var n in t ) t.hasOwnProperty( n ) && e.push( encodeURIComponent( n ) + "=" + encodeURIComponent( t[ n ] ) );
          return e.join( "&" )
        }( t ), t.use_beacon || !1 )
    },
    g = function ( t, e ) {
      if ( !navigator.userAgent.match( /wp-e2e-tests|bingbot|bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\-webcrawler|converacrawler|dataparksearch|findlinks|crawler|Netvibes|Sogou Pic Spider|ICC\-Crawler|Innovazion Crawler|Daumoa|EtaoSpider|A6\-Indexer|YisouSpider|Riddler|DBot|wsr\-agent|Xenu|SeznamBot|PaperLiBot|SputnikBot|CCBot|ProoXiBot|Scrapy|Genieo|Screaming Frog|YahooCacheSystem|CiBra|Nutch/ ) && !( t in p ) )
        if ( p[ t ] = !0, window.fetch && e ) y( t ), fetch( "//pixel.wp.com/t.gif?" + t + "&_rt=" + ( new Date ).getTime() + "&_=_", {
          mode: "no-cors",
          keepalive: !0
        } ).then( ( function () {
          _( t )
        } ) );
        else {
          var n = new Image;
          y( t ), n.query = t, n.onload = function () {
            delete p[ t ], n && _( n.query )
          }, n.src = "//pixel.wp.com/t.gif?" + t + "&_rt=" + ( new Date ).getTime() + "&_=_", n.alt = ":)"
        }
    },
    y = function ( t ) {
      var e, n = S();
      for ( e = 0; e < n.length; ++e )
        if ( t == n[ e ] ) return;
      n.push( t ), b( n )
    },
    b = function ( t ) {
      for ( ; t.join( " " ).length > 2048; ) t = t.slice( 1 );
      I( "qs", t.join( " " ), 1800 )
    },
    _ = function ( t ) {
      var e, n = [],
        o = S();
      for ( e = 0; e < o.length; ++e ) t != o[ e ] && n.push( o[ e ] );
      n.length !== o.length && b( n )
    },
    S = function () {
      var t = C( "qs" );
      return t ? t.split( " " ) : []
    },
    k = function () {
      null === f && ( f = window.setTimeout( ( function () {
        S().forEach( g ), f = null
      } ), 100 ) )
    },
    j = function () {
      return a( 18 )
    },
    C = function ( t ) {
      return Object( r.a )( t ) || l[ t ]
    },
    I = function ( t, e, n ) {
      l[ t ] = n <= -1 ? null : e, Object( r.b )( t, e, n )
    },
    O = function () {
      var t = [],
        e = C( "ai" ),
        n = C( "aip" );
      return n && ( t = n.split( "," ) ), e && t.push( e ), t
    },
    x = function () {
      var t = !( arguments.length > 0 && void 0 !== arguments[ 0 ] ) || arguments[ 0 ];
      if ( !c ) {
        var e = C( "ai" );
        e ? ( c = e, u = "anon" ) : t && ( c = j(), u = "anon", I( "ai", c ) )
      }
    },
    T = {
      storeContext: function ( t ) {
        "object" === i()( t ) && ( s = t )
      },
      identifyUser: function ( t, e ) {
        if ( e && ( d = e ), "0" != t && "" != t && null != t && c != t ) {
          c = t, u = "wpcom:user_id";
          for ( var n = O(), o = 0; o < n.length; o++ ) h( {
            _en: "_aliasUser",
            anonId: n[ o ]
          } );
          I( "ai", "", -1 ), I( "aip", "", -1 )
        }
      },
      identifyAnonUser: function ( t ) {
        if ( x( !1 ), c != t )
          if ( "anon" === u || null === u ) {
            if ( "anon" == u && c ) {
              var e = C( "aip" );
              e = e ? e.split( "," ) : [];
              for ( var n = !1, o = 0; o < e.length; o++ ) c == e[ o ] && ( n = !0 );
              n || ( e.push( c ), I( "aip", e.join( "," ) ) )
            }
            I( "ai", t ), c = t, u = "anon"
          } else h( {
            _en: "_aliasUser",
            anonId: t
          } )
      },
      recordEvent: function ( t, e, n ) {
        "_setProperties" !== t && ( ( e = e || {} )._en = t, "string" == typeof n && n.length > 0 && ( m[ n ] || ( m[ n ] = a( 18 ) ), e._ui = e._ui || m[ n ], e._ut = e._ut || "anon" ), h( e ) )
      },
      setProperties: function ( t ) {
        t._en = "_setProperties", h( t )
      },
      clearIdentity: function () {
        c = null, d = null, I( "ai", "", -1 ), I( "aip", "", -1 ), x()
      }
    };

  function E() {
    return window._tkq = window._tkq || [], window._tkq.a || ( k(), window._tkq = new w( window._tkq ) ), v(), T
  }
}, , , , , , function ( t, e, n ) {
  t.exports = n( 10 )
}, , function ( t, e, n ) {
  "use strict";
  n.r( e );
  var o = n( 0 ),
    i = n.n( o );
  var r = n( 2 );
  window.wpcom = window.wpcom || {}, window._tkq = window._tkq || [], window._stq = window._stq || [], Array.prototype.forEach || ( Array.prototype.forEach = function ( t, e ) {
    for ( var n = 0, o = this.length; n < o; n++ ) t.call( e || this, this[ n ], n, this )
  } ), window.wpcom.stats = function () {
    var t, e, n, o, r, a, c, u = ( n = function ( t, e, n ) {
        "function" == typeof t.addEventListener ? t.addEventListener( e, n ) : "object" === i()( t.attachEvent ) && t.attachEvent( "on" + e, n )
      }, o = function ( t ) {
        return "object" === i()( t ) && t.target ? t.target : window.event.srcElement
      }, r = function ( t ) {
        var e = 0;
        "object" === ( "undefined" == typeof InstallTrigger ? "undefined" : i()( InstallTrigger ) ) && ( e = 100 ), 7 === d() && ( e = 100 ), c( o( t ), e )
      }, a = function ( t ) {
        c( o( t ), 0 )
      }, c = function ( n, o ) {
        try {
          if ( "object" !== i()( n ) ) return;
          for ( ;
            "A" !== n.nodeName; ) {
            if ( void 0 === n.nodeName ) return;
            if ( "object" !== i()( n.parentNode ) ) return;
            n = n.parentNode
          }
          if ( function ( t ) {
              var e = document.location;
              if ( e.host === t.host ) return !0;
              if ( "" === t.host ) return !0;
              if ( e.protocol === t.protocol && e.host === t.hostname ) {
                if ( "http:" === e.protocol && e.host + ":80" === t.host ) return !0;
                if ( "https:" === e.protocol && e.host + ":443" === t.host ) return !0
              }
              return !1
            }( n ) ) return;
          if ( "javascript:" === n.protocol ) return;
          if ( function ( t ) {
              for ( var e = t;
                "BODY" !== e.nodeName; ) {
                if ( "wpcombar" === e.id ) return !0;
                if ( "wpadminbar" === e.id ) return !0;
                if ( "wpadvert" === e.className ) return !0;
                if ( e.className.indexOf( "wpcom-masterbar" ) > -1 ) return !0;
                if ( void 0 === e.nodeName ) return !0;
                if ( "object" !== i()( e.parentNode ) ) return !0;
                e = e.parentNode
              }
              return !1
            }( n ) ) return;
          if ( window._stq.push( [ "click", {
              u: n.href,
              r: void 0 !== n.rel ? n.rel : "0",
              b: void 0 !== t ? t : "0",
              p: void 0 !== e ? e : "0"
            } ] ), o )
            for ( var r = new Date, a = r.getTime() + o; !( ( r = new Date ).getTime() > a ); );
        } catch ( t ) {}
      }, {
        init: function ( o, i ) {
          t = o, e = i, document.body ? ( n( document.body, "click", r ), n( document.body, "contextmenu", a ) ) : document && ( n( document, "click", r ), n( document, "contextmenu", a ) )
        }
      } ),
      d = function () {
        var t = 0;
        if ( "object" === ( "undefined" == typeof navigator ? "undefined" : i()( navigator ) ) && "Microsoft Internet Explorer" == navigator.appName ) {
          var e = navigator.userAgent.match( /MSIE ([0-9]{1,})[\.0-9]{0,}/ );
          null !== e && ( t = parseInt( e[ 1 ] ) )
        }
        return t
      },
      f = function ( t ) {
        var e, n = [];
        for ( e in t ) t.hasOwnProperty( e ) && n.push( encodeURIComponent( e ) + "=" + encodeURIComponent( t[ e ] ) );
        return n.join( "&" )
      },
      l = function ( t, e, n ) {
        var o = new Image;
        o.src = document.location.protocol + "//pixel.wp.com/" + t + "?" + e + "&rand=" + Math.random(), o.alt = ":)", "string" == typeof n && document.body && ( o.id = n, document.body.appendChild( o ) )
      },
      s = function ( t ) {
        if ( this.a = 1, t && t.length )
          for ( var e = 0; e < t.length; e++ ) this.push( t[ e ] )
      };
    s.prototype.push = function ( t ) {
      if ( t )
        if ( "object" === i()( t ) && t.length ) {
          var e = t.splice( 0, 1 );
          v[ e ] && v[ e ].apply( null, t )
        } else "function" == typeof t && t()
    };
    var p, m = function () {
        window._stq.a || ( window._stq = new s( window._stq ) )
      },
      v = {
        view: function ( t ) {
          t.host = document.location.host, t.ref = document.referrer, l( "g.gif", f( t ), "wpstats" )
        },
        extra: function ( t ) {
          t.v = "wpcom-no-pv", l( "g.gif", f( t ), !1 )
        },
        raw: function ( t ) {
          l( "g.gif", f( t ), !1 )
        },
        click: function ( t ) {
          l( "c.gif", f( t ), !1 )
        },
        clickTrackerInit: function ( t, e ) {
          u.init( t, e )
        }
      },
      w = function t() {
        document.hidden || ( document.removeEventListener( "visibilitychange", t ), m() )
      };
    return 6 === d() && "complete" !== document.readyState && "object" === i()( document.attachEvent ) ? document.attachEvent( "onreadystatechange", ( function ( t ) {
      "complete" === document.readyState && window.setTimeout( m, 250 )
    } ) ) : ( p = "unknown", void 0 === document.visibilityState || "visible" !== document.visibilityState && "hidden" !== document.visibilityState && "prerender" !== document.visibilityState && "unloaded" !== document.visibilityState || ( p = document.visibilityState ), v.extra( {
      "x_stats-initial-visibility": p
    } ), void 0 !== document.hidden && document.hidden ? document.addEventListener( "visibilitychange", w ) : m() ), v
  }(), window.wpcom.tracks = Object( r.a )()
} ] );
