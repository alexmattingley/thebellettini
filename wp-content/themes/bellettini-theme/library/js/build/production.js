/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-hashchange-history-audio-video-input-inputtypes-localstorage-websockets-geolocation-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_mediaqueries-css_regions-css_supports-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("regions",function(){var a=Modernizr.prefixed("flowFrom"),b=Modernizr.prefixed("flowInto");if(!a||!b)return!1;var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("div"),f="modernizr_flow_for_regions_check";d.innerText="M",c.style.cssText="top: 150px; left: 150px; padding: 0px;",e.style.cssText="width: 50px; height: 50px; padding: 42px;",e.style[a]=f,c.appendChild(d),c.appendChild(e),document.documentElement.appendChild(c);var g,h,i=d.getBoundingClientRect();return d.style[b]=f,g=d.getBoundingClientRect(),h=g.left-i.left,document.documentElement.removeChild(c),d=e=c=undefined,h==42}),Modernizr.addTest("supports","CSSSupportsRule"in window);
/*
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;

function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function


function create_form(){
  console.log('create_form called');
  jQuery('body').wl_formBuilder({
    formTitle: 'Contact Us',
    fields: {
      1: 'name',
      2: 'email',
      3: 'phone',
      4: 'message',
    },
    submitText: 'Submit',
    thankyouPage: '/contact/thank-you'
  });
}


function create_vicinty_map(){
  var vicinities = new Array();
  vicinities[0] = new Array();
          vicinities[0]['category'] = "The Bellettini";
          vicinities[0]['name'] = "The Bellettini";
          vicinities[0]['address'] = "1115 108th Ave NE<br/> Bellevue, WA 98004";
          vicinities[0]['lat'] = 47.620874;
          vicinities[0]['lng'] = -122.197114;
          vicinities[0]['marker'] = "http://google.com/mapfiles/ms/micons/red-dot.png";vicinities[1] = new Array();
  vicinities[1]['category'] = "Arts";
  vicinities[1]['name'] = "Tateuchi Center";
  vicinities[1]['address'] = "855 106th Avenue NE Suite 150<br />Bellevue, WA 98004";
  vicinities[1]['lat'] = 47.6189193;
  vicinities[1]['lng'] = -122.1995247;
  vicinities[1]['marker'] = "http://maps.google.com/mapfiles/ms/micons/arts.png";
  vicinities[2] = new Array();
  vicinities[2]['category'] = "Arts";
  vicinities[2]['name'] = "Bellevue Art Museum";
  vicinities[2]['address'] = "510 Bellevue Way NE<br />Bellevue, WA 98004";
  vicinities[2]['lat'] = 47.6153172;
  vicinities[2]['lng'] = -122.2011678;
  vicinities[2]['marker'] = "http://maps.google.com/mapfiles/ms/micons/arts.png";
  vicinities[3] = new Array();
  vicinities[3]['category'] = "City Resources";
  vicinities[3]['name'] = "US Post Office";
  vicinities[3]['address'] = "1171 Bellevue Way NE<br />Bellevue, WA 98004";
  vicinities[3]['lat'] = 47.620767;
  vicinities[3]['lng'] = -122.2017153;
  vicinities[3]['marker'] = "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png";
  vicinities[4] = new Array();
  vicinities[4]['category'] = "City Resources";
  vicinities[4]['name'] = "Bellevue Library";
  vicinities[4]['address'] = "1111 110th Ave NE<br>Bellevue, WA 98004";
  vicinities[4]['lat'] = 47.6201601;
  vicinities[4]['lng'] = -122.1943373;
  vicinities[4]['marker'] = "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png";
  vicinities[5] = new Array();
  vicinities[5]['category'] = "City Resources";
  vicinities[5]['name'] = "Meydenbauer Convention Center";
  vicinities[5]['address'] = "11100 NE 6th Street<br />Bellevue, WA 98004";
  vicinities[5]['lat'] = 47.615916;
  vicinities[5]['lng'] = -122.191856;
  vicinities[5]['marker'] = "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png";
  vicinities[6] = new Array();
  vicinities[6]['category'] = "Grocery Stores";
  vicinities[6]['name'] = "QFC";
  vicinities[6]['address'] = "10116 NE 8th St Bellevue<br />WA 98004";
  vicinities[6]['lat'] = 47.6185542;
  vicinities[6]['lng'] = -122.2054362;
  vicinities[6]['marker'] = "http://maps.google.com/mapfiles/ms/micons/groecerystore.png";
  vicinities[7] = new Array();
  vicinities[7]['category'] = "Grocery Stores";
  vicinities[7]['name'] = "Whole Foods";
  vicinities[7]['address'] = "888 116th Ave NE<br />Bellevue, WA 98004";
  vicinities[7]['lat'] = 47.6185386;
  vicinities[7]['lng'] = -122.1845645;
  vicinities[7]['marker'] = "http://maps.google.com/mapfiles/ms/micons/groecerystore.png";
  vicinities[8] = new Array();
  vicinities[8]['category'] = "Lodging";
  vicinities[8]['name'] = "Hyatt Regency Bellevue";
  vicinities[8]['address'] = "900 Bellevue Way NE<br />Bellevue, WA 98004";
  vicinities[8]['lat'] = 47.61828;
  vicinities[8]['lng'] = -122.201031;
  vicinities[8]['marker'] = "http://maps.google.com/mapfiles/ms/micons/lodging.png";
  vicinities[9] = new Array();
  vicinities[9]['category'] = "Medical Centers";
  vicinities[9]['name'] = "Group Health Bellevue Medical Center";
  vicinities[9]['address'] = "11511 NE 10th St<br />Bellevue, WA 98004";
  vicinities[9]['lat'] = 47.6186263;
  vicinities[9]['lng'] = -122.1864973;
  vicinities[9]['marker'] = "http://maps.google.com/mapfiles/ms/micons/hospitals.png";
  vicinities[10] = new Array();
  vicinities[10]['category'] = "Medical Centers";
  vicinities[10]['name'] = "Overlake Hospital Medical Center";
  vicinities[10]['address'] = "1035 116th Ave NE<br />Bellevue, WA 98004";
  vicinities[10]['lat'] = 47.61972;
  vicinities[10]['lng'] = -122.187574;
  vicinities[10]['marker'] = "http://maps.google.com/mapfiles/ms/micons/hospitals.png";
  vicinities[11] = new Array();
  vicinities[11]['category'] = "Medical Centers";
  vicinities[11]['name'] = "Virginia Mason Bellevue Medical Center";
  vicinities[11]['address'] = "222 112th Ave NE<br />Bellevue, WA 98004";
  vicinities[11]['lat'] = 47.6126673;
  vicinities[11]['lng'] = -122.190135;
  vicinities[11]['marker'] = "http://maps.google.com/mapfiles/ms/micons/hospitals.png";
  vicinities[12] = new Array();
  vicinities[12]['category'] = "Parks & Gardens";
  vicinities[12]['name'] = "McCormick Park";
  vicinities[12]['address'] = "11190 NE 12th Street<br />Bellevue, WA 98004";
  vicinities[12]['lat'] = 47.6210464;
  vicinities[12]['lng'] = -122.1910576;
  vicinities[12]['marker'] = "http://maps.google.com/mapfiles/ms/micons/tree.png";
  vicinities[13] = new Array();
  vicinities[13]['category'] = "Parks & Gardens";
  vicinities[13]['name'] = "Bellevue Botanical Garden";
  vicinities[13]['address'] = "12001 Main St<br />Bellevue, WA 98005";
  vicinities[13]['lat'] = 47.609982;
  vicinities[13]['lng'] = -122.1810055;
  vicinities[13]['marker'] = "http://maps.google.com/mapfiles/ms/micons/tree.png";
  vicinities[14] = new Array();
  vicinities[14]['category'] = "Parks & Gardens";
  vicinities[14]['name'] = "Bellevue Downtown Park";
  vicinities[14]['address'] = "10201 NE 4th St<br />Bellevue, WA 98004";
  vicinities[14]['lat'] = 47.613791;
  vicinities[14]['lng'] = -122.2042613;
  vicinities[14]['marker'] = "http://maps.google.com/mapfiles/ms/micons/tree.png";
  vicinities[15] = new Array();
  vicinities[15]['category'] = "Restaurants";
  vicinities[15]['name'] = "Seastar";
  vicinities[15]['address'] = "205 108th Ave NE<br />Bellevue, WA 98004";
  vicinities[15]['lat'] = 47.6123928;
  vicinities[15]['lng'] = -122.1965487;
  vicinities[15]['marker'] = "http://maps.google.com/mapfiles/ms/micons/restaurant.png";
  vicinities[16] = new Array();
  vicinities[16]['category'] = "Restaurants";
  vicinities[16]['name'] = "Daniels Broiler";
  vicinities[16]['address'] = "10500 NE 8th St<br />Bellevue, WA 98004";
  vicinities[16]['lat'] = 47.617709;
  vicinities[16]['lng'] = -122.2002356;
  vicinities[16]['marker'] = "http://maps.google.com/mapfiles/ms/micons/restaurant.png";
  vicinities[17] = new Array();
  vicinities[17]['category'] = "Restaurants";
  vicinities[17]['name'] = "John Howie Steakhouse";
  vicinities[17]['address'] = "11111 NE 8th St #125<br />Bellevue, WA 98004";
  vicinities[17]['lat'] = 47.616604;
  vicinities[17]['lng'] = -122.192653;
  vicinities[17]['marker'] = "http://maps.google.com/mapfiles/ms/micons/restaurant.png";
  vicinities[18] = new Array();
  vicinities[18]['category'] = "Shopping";
  vicinities[18]['name'] = "Bellevue Galleria";
  vicinities[18]['address'] = "550 106th Avenue NE<br />Bellevue, WA 98004";
  vicinities[18]['lat'] = 47.6151363;
  vicinities[18]['lng'] = -122.1981458;
  vicinities[18]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[19] = new Array();
  vicinities[19]['category'] = "Shopping";
  vicinities[19]['name'] = "University Book Store";
  vicinities[19]['address'] = "990 102nd Avenue NE<br />Bellevue, WA 98004";
  vicinities[19]['lat'] = 47.6188973;
  vicinities[19]['lng'] = -122.203898;
  vicinities[19]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[20] = new Array();
  vicinities[20]['category'] = "Shopping";
  vicinities[20]['name'] = "Lincoln Square";
  vicinities[20]['address'] = "700 Bellevue Way NE #310<br />Bellevue, WA 98004";
  vicinities[20]['lat'] = 47.6166585;
  vicinities[20]['lng'] = -122.2013727;
  vicinities[20]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[21] = new Array();
  vicinities[21]['category'] = "Shopping";
  vicinities[21]['name'] = "Bellevue Square";
  vicinities[21]['address'] = "575 Bellevue Square<br />Bellevue, WA 98004";
  vicinities[21]['lat'] = 47.615624;
  vicinities[21]['lng'] = -122.203553;
  vicinities[21]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[22] = new Array();
  vicinities[22]['category'] = "Shopping";
  vicinities[22]['name'] = "Barnes & Noble";
  vicinities[22]['address'] = "626 106th Ave NE<br />Bellevue, WA 98004";
  vicinities[22]['lat'] = 47.61668;
  vicinities[22]['lng'] = -122.198073;
  vicinities[22]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[23] = new Array();
  vicinities[23]['category'] = "Shopping";
  vicinities[23]['name'] = "The Bravern";
  vicinities[23]['address'] = "11111 NE 8th St<br />Bellevue, WA 98004";
  vicinities[23]['lat'] = 47.616604;
  vicinities[23]['lng'] = -122.192653;
  vicinities[23]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[24] = new Array();
  vicinities[24]['category'] = "Shopping";
  vicinities[24]['name'] = "Home Depot";
  vicinities[24]['address'] = "325 120th Avenue NE<br />Bellevue, WA 98005";
  vicinities[24]['lat'] = 47.6134562;
  vicinities[24]['lng'] = -122.1805578;
  vicinities[24]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  ;
  var numVicinity = 24;
   initialize(vicinities, numVicinity);
}


function photo_gallery_class(){
  console.log('calling');
  jQuery('.gallery-thumbs img').removeClass();
  jQuery('.gallery-thumbs img').addClass('col-xs-4 col-md-4');
}

/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

  create_form();
  loadGravatars();
  photo_gallery_class();


}); /* end of as page load scripts */

jQuery(window).load(function($){
  create_vicinty_map();
});

// this variable will collect the html which will eventually be placed in the side_bar
var vicinityList = "<ul>\n";
var category = "";
var numCatDisplay = 0;
var vicinityMapDiv = "map";

// arrays to hold copies of the markers and html used by the side_bar
// because the function closure trick doesnt work there
var gmarkers = [];
var map = null;


/*
 *
 */
function initialize(vicinities, numVicinity) {

	var mapDiv = document.getElementById(vicinityMapDiv);

	// create the map
	var myOptions = {
		zoom: 15,
		center: new google.maps.LatLng(vicinities[0]['lat'], vicinities[0]['lng']),
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	map = new google.maps.Map(mapDiv, myOptions);

	google.maps.event.addListener(map, 'click', function(){
		infowindow.close();
	});

	// Add markers to the map
	// Set up markers with info windows
	// add the points
	for(x = 0; x < numVicinity; x++){
		var point = new google.maps.LatLng(vicinities[x]['lat'],vicinities[x]['lng']);
		var marker = createMarker(point, vicinities[x]);

// Extending the bounds object with each LatLng
//bounds.extend(point);

//if(x == 0)
	//alert(vicinities[x]['name']);
	}

// Adjusting the map to new bounding box
//map.fitBounds(bounds)

	// put the assembled vicinityList contents into the Listing div
	document.getElementById("vicinity-list").innerHTML = vicinityList + "</ul>\n</li>\n</ul>\n";
}	// end of initialize()


var infowindow = new google.maps.InfoWindow({
	//size: new google.maps.Size(150,50)
});


/*
 * This function picks up the click and opens the corresponding info window
 */
function myclick(i) {
	google.maps.event.trigger(gmarkers[i], "click");

	// scroll to top of map
	//$('html, body').animate({ scrollTop: 150 }, 500);
}



/*
 * A function to create the marker and set up the event window function
 */
function createMarker(latlng, vicinity) {
//function createMarker(latlng, name, html) {
	//var contentString = html;
	var contentString = "<strong>" + vicinity['name'] + "</strong><br />" + vicinity['address'];



	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		icon: vicinity['marker'],
		zIndex: Math.round(latlng.lat()*-100000)<<5
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(contentString);
		infowindow.open(map,marker);
	});

	// save the info we need to use later for the side_bar
	gmarkers.push(marker);




	// Only add to vicinity list, if category is not empty.
	// Category for Camellia at Deerwood marker is empty, therefore, it's not added to the list.
	if(vicinity['category'] != ""){
		// if it's a new category, start a new list
		if(category != vicinity['category']){
			// close previous list
			if(category != ""){
				vicinityList += '</ul>\n</li>\n';
			}

			// start new list
			vicinityList += '<li class="vCategory"><b>' + vicinity['category'] + ': </b><ul>\n';

			// set category tracking to new category
			category = vicinity['category'];

			numCatDisplay += 1;
		}

		// add a line to the side_bar html
		vicinityList += '<li><a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + vicinity['name'] + '<\/a></li>';
	}
}