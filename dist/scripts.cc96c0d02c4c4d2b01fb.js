!function(n,r){var t,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,t=n._,(e=n._=r()).noConflict=function(){return n._=t,e})}(this,(function(){var n="1.13.6",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,i=t.push,o=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function");"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof(r.document&&r.document.childNodes)&&(T=function(n){return"function"==typeof n||!1});var k=T,D=x("Object"),R=l&&D(new DataView(new ArrayBuffer(8))),F="undefined"!=typeof Map&&D(new Map),V=x("DataView"),P=R?function(n){return null!=n&&k(n.getInt8)&&I(n.buffer)}:V,q=s||x("Array");function U(n,r){return null!=n&&f.call(n,r)}var W=x("Arguments");!function(){W(arguments)||(W=function(n){return U(n,"callee")})}();var z=W;function L(n){return O(n)&&y(n)}function $(n){return function(){return n}}function C(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function K(n){return function(r){return null==r?void 0:r[n]}}var J=K("byteLength"),G=C(J),H=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,Q=c?function(n){return h?h(n)&&!P(n):G(n)&&H.test(a.call(n))}:$(!1),X=K("length");function Y(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,i=k(u)&&u.prototype||e,o="constructor";for(U(n,o)&&!r.contains(o)&&r.push(o);t--;)(o=b[t])in n&&n[o]!==i[o]&&!r.contains(o)&&r.push(o)}function Z(n){if(!_(n))return[];if(p)return p(n);var r=[];for(var t in n)U(n,t)&&r.push(t);return g&&Y(n,r),r}function nn(n,r){var t=Z(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0}function rn(n){return n instanceof rn?n:this instanceof rn?void(this._wrapped=n):new rn(n)}function tn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,J(n))}rn.VERSION=n,rn.prototype.valueOf=rn.prototype.toJSON=rn.prototype.value=function(){return this._wrapped},rn.prototype.toString=function(){return String(this._wrapped)};var en="[object DataView]";function un(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Y(n,r),r}function on(n){var r=X(n);return function(t){if(null==t)return!1;var e=un(t);if(X(e))return!1;for(var u=0;u<r;u++)if(!k(t[n[u]]))return!1;return n!==sn||!k(t[an])}}var an="forEach",fn=["clear","delete"],cn=["get","has","set"],ln=fn.concat(an,cn),sn=fn.concat(cn),pn=["add"].concat(fn,an,"has"),vn=F?on(ln):x("Map"),hn=F?on(sn):x("WeakMap"),yn=F?on(pn):x("Set"),dn=x("WeakSet");function gn(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function bn(n){for(var r={},t=Z(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function mn(n){var r=[];for(var t in n)k(n[t])&&r.push(t);return r.sort()}function jn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,f=0;f<a;f++){var c=o[f];r&&void 0!==t[c]||(t[c]=i[c])}return t}}var _n=jn(un),wn=jn(Z),An=jn(un,!0);function xn(n){if(!_(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function Sn(n){return q(n)?n:[n]}function On(n){return rn.toPath(n)}function Mn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function En(n,r,t){var e=Mn(n,On(r));return w(e)?t:e}function Bn(n){return n}function Nn(n){return n=wn({},n),function(r){return nn(r,n)}}function In(n){return n=On(n),function(r){return Mn(r,n)}}function Tn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,i){return n.call(r,t,e,u,i)}}return function(){return n.apply(r,arguments)}}function kn(n,r,t){return null==n?Bn:k(n)?Tn(n,r,t):_(n)&&!q(n)?Nn(n):In(n)}function Dn(n,r){return kn(n,r,1/0)}function Rn(n,r,t){return rn.iteratee!==Dn?rn.iteratee(n,r):kn(n,r,t)}function Fn(){}function Vn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}rn.toPath=Sn,rn.iteratee=Dn;var Pn=Date.now||function(){return(new Date).getTime()};function qn(n){var r=function(r){return n[r]},t="(?:"+Z(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,r):n}}var Un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Wn=qn(Un),zn=qn(bn(Un)),Ln=rn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},$n=/(.)^/,Cn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Kn=/\\|'|\r|\n|\u2028|\u2029/g;function Jn(n){return"\\"+Cn[n]}var Gn=/^\s*(\w|\$)+\s*$/,Hn=0;function Qn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=xn(n.prototype),o=n.apply(i,u);return _(o)?o:i}var Xn=j((function(n,r){var t=Xn.placeholder,e=function(){for(var u=0,i=r.length,o=Array(i),a=0;a<i;a++)o[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)o.push(arguments[u++]);return Qn(n,e,this,this,o)};return e}));Xn.placeholder=rn;var Yn=j((function(n,r,t){if(!k(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return Qn(n,e,r,this,t.concat(u))}));return e})),Zn=C(X);function nr(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,i=0,o=X(n);i<o;i++){var a=n[i];if(Zn(a)&&(q(a)||z(a)))if(r>1)nr(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var rr=j((function(n,r){var t=(r=nr(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=Yn(n[e],n)}return n})),tr=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),er=Xn(tr,rn,1);function ur(n){return function(){return!n.apply(this,arguments)}}function ir(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var or=Xn(ir,2);function ar(n,r,t){r=Rn(r,t);for(var e,u=Z(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e}function fr(n){return function(r,t,e){t=Rn(t,e);for(var u=X(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}var cr=fr(1),lr=fr(-1);function sr(n,r,t,e){for(var u=(t=Rn(t,e,1))(r),i=0,o=X(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i}function pr(n,r,t){return function(e,u,i){var a=0,f=X(e);if("number"==typeof i)n>0?a=i>=0?i:Math.max(i+f,a):f=i>=0?Math.min(i+1,f):i+f+1;else if(t&&i&&f)return e[i=t(e,u)]===u?i:-1;if(u!=u)return(i=r(o.call(e,a,f),L))>=0?i+a:-1;for(i=n>0?a:f-1;i>=0&&i<f;i+=n)if(e[i]===u)return i;return-1}}var vr=pr(1,cr,sr),hr=pr(-1,lr);function yr(n,r,t){var e=(Zn(n)?cr:ar)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function dr(n,r,t){var e,u;if(r=Tn(r,t),Zn(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=Z(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function gr(n,r,t){r=Rn(r,t);for(var e=!Zn(n)&&Z(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i}function br(n){var r=function(r,t,e,u){var i=!Zn(r)&&Z(r),o=(i||r).length,a=n>0?0:o-1;for(u||(e=r[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var f=i?i[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var i=arguments.length>=3;return r(n,Tn(t,u,4),e,i)}}var mr=br(1),jr=br(-1);function _r(n,r,t){var e=[];return r=Rn(r,t),dr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function wr(n,r,t){r=Rn(r,t);for(var e=!Zn(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0}function Ar(n,r,t){r=Rn(r,t);for(var e=!Zn(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1}function xr(n,r,t,e){return Zn(n)||(n=gn(n)),("number"!=typeof t||e)&&(t=0),vr(n,r,t)>=0}var Sr=j((function(n,r,t){var e,u;return k(r)?u=r:(r=On(r),e=r.slice(0,-1),r=r[r.length-1]),gr(n,(function(n){var i=u;if(!i){if(e&&e.length&&(n=Mn(n,e)),null==n)return;i=n[r]}return null==i?i:i.apply(n,t)}))}));function Or(n,r){return gr(n,In(r))}function Mr(n,r,t){var e,u,i=-1/0,o=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=Zn(n)?n:gn(n)).length;a<f;a++)null!=(e=n[a])&&e>i&&(i=e);else r=Rn(r,t),dr(n,(function(n,t,e){((u=r(n,t,e))>o||u===-1/0&&i===-1/0)&&(i=n,o=u)}));return i}var Er=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Br(n){return n?q(n)?o.call(n):S(n)?n.match(Er):Zn(n)?gr(n,Bn):gn(n):[]}function Nr(n,r,t){if(null==r||t)return Zn(n)||(n=gn(n)),n[Vn(n.length-1)];var e=Br(n),u=X(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=Vn(o,i),f=e[o];e[o]=e[a],e[a]=f}return e.slice(0,r)}function Ir(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=Rn(e,u),dr(t,(function(r,u){var o=e(r,u,t);n(i,r,o)})),i}}var Tr=Ir((function(n,r,t){U(n,t)?n[t].push(r):n[t]=[r]})),kr=Ir((function(n,r,t){n[t]=r})),Dr=Ir((function(n,r,t){U(n,t)?n[t]++:n[t]=1})),Rr=Ir((function(n,r,t){n[t?0:1].push(r)}),!0);function Fr(n,r,t){return r in t}var Vr=j((function(n,r){var t={},e=r[0];if(null==n)return t;k(e)?(r.length>1&&(e=Tn(e,r[1])),r=un(n)):(e=Fr,r=nr(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t})),Pr=j((function(n,r){var t,e=r[0];return k(e)?(e=ur(e),r.length>1&&(t=r[1])):(r=gr(nr(r,!1,!1),String),e=function(n,t){return!xr(r,t)}),Vr(n,e,t)}));function qr(n,r,t){return o.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Ur(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:qr(n,n.length-r)}function Wr(n,r,t){return o.call(n,null==r||t?1:r)}var zr=j((function(n,r){return r=nr(r,!0,!0),_r(n,(function(n){return!xr(r,n)}))})),Lr=j((function(n,r){return zr(n,r)}));function $r(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Rn(t,e));for(var u=[],i=[],o=0,a=X(n);o<a;o++){var f=n[o],c=t?t(f,o,n):f;r&&!t?(o&&i===c||u.push(f),i=c):t?xr(i,c)||(i.push(c),u.push(f)):xr(u,f)||u.push(f)}return u}var Cr=j((function(n){return $r(nr(n,!0,!0))}));function Kr(n){for(var r=n&&Mr(n,X).length||0,t=Array(r),e=0;e<r;e++)t[e]=Or(n,e);return t}var Jr=j(Kr);function Gr(n,r){return n._chain?rn(r).chain():r}function Hr(n){return dr(mn(n),(function(r){var t=rn[r]=n[r];rn.prototype[r]=function(){var n=[this._wrapped];return i.apply(n,arguments),Gr(this,t.apply(rn,n))}})),rn}dr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];rn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Gr(this,t)}})),dr(["concat","join","slice"],(function(n){var r=t[n];rn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Gr(this,n)}}));var Qr=Hr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:P,isArray:q,isFunction:k,isArguments:z,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:L,isTypedArray:Q,isEmpty:function(n){if(null==n)return!0;var r=X(n);return"number"==typeof r&&(q(n)||S(n)||z(n))?0===r:0===X(Z(n))},isMatch:nn,isEqual:function(n,r){return function n(r,t,e,i){if(r===t)return 0!==r||1/r==1/t;if(null==r||null==t)return!1;if(r!=r)return t!=t;var o=typeof r;return("function"===o||"object"===o||"object"==typeof t)&&function r(t,e,i,o){t instanceof rn&&(t=t._wrapped),e instanceof rn&&(e=e._wrapped);var f=a.call(t);if(f!==a.call(e))return!1;if(R&&"[object Object]"==f&&P(t)){if(!P(e))return!1;f=en}switch(f){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:0==+t?1/+t==1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return u.valueOf.call(t)===u.valueOf.call(e);case"[object ArrayBuffer]":case en:return r(tn(t),tn(e),i,o)}var c="[object Array]"===f;if(!c&&Q(t)){if(J(t)!==J(e))return!1;if(t.buffer===e.buffer&&t.byteOffset===e.byteOffset)return!0;c=!0}if(!c){if("object"!=typeof t||"object"!=typeof e)return!1;var l=t.constructor,s=e.constructor;if(l!==s&&!(k(l)&&l instanceof l&&k(s)&&s instanceof s)&&"constructor"in t&&"constructor"in e)return!1}o=o||[];for(var p=(i=i||[]).length;p--;)if(i[p]===t)return o[p]===e;if(i.push(t),o.push(e),c){if((p=t.length)!==e.length)return!1;for(;p--;)if(!n(t[p],e[p],i,o))return!1}else{var v,h=Z(t);if(p=h.length,Z(e).length!==p)return!1;for(;p--;)if(!U(e,v=h[p])||!n(t[v],e[v],i,o))return!1}return i.pop(),o.pop(),!0}(r,t,e,i)}(n,r)},isMap:vn,isWeakMap:hn,isSet:yn,isWeakSet:dn,keys:Z,allKeys:un,values:gn,pairs:function(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:bn,functions:mn,methods:mn,extend:_n,extendOwn:wn,assign:wn,defaults:An,create:function(n,r){var t=xn(n);return r&&wn(t,r),t},clone:function(n){return _(n)?q(n)?n.slice():_n({},n):n},tap:function(n,r){return r(n),n},get:En,has:function(n,r){for(var t=(r=On(r)).length,e=0;e<t;e++){var u=r[e];if(!U(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Rn(r,t);for(var e=Z(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},identity:Bn,constant:$,noop:Fn,toPath:Sn,property:In,propertyOf:function(n){return null==n?Fn:function(r){return En(n,r)}},matcher:Nn,matches:Nn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Tn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Vn,now:Pn,escape:Wn,unescape:zn,templateSettings:Ln,template:function(n,r,t){!r&&t&&(r=t),r=An({},r,rn.templateSettings);var e=RegExp([(r.escape||$n).source,(r.interpolate||$n).source,(r.evaluate||$n).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,(function(r,t,e,o,a){return i+=n.slice(u,a).replace(Kn,Jn),u=a+r.length,t?i+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),r})),i+="';\n";var o,a=r.variable;if(a){if(!Gn.test(a))throw new Error("variable is not a bare identifier: "+a)}else i="with(obj||{}){\n"+i+"}\n",a="obj";i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{o=new Function(a,"_",i)}catch(n){throw n.source=i,n}var f=function(n){return o.call(this,n,rn)};return f.source="function("+a+"){\n"+i+"}",f},result:function(n,r,t){var e=(r=On(r)).length;if(!e)return k(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=k(i)?i.call(n):i}return n},uniqueId:function(n){var r=++Hn+"";return n?n+r:r},chain:function(n){var r=rn(n);return r._chain=!0,r},iteratee:Dn,partial:Xn,bind:Yn,bindAll:rr,memoize:function(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return U(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t},delay:tr,defer:er,throttle:function(n,r,t){var e,u,i,o,a=0;t||(t={});var f=function(){a=!1===t.leading?0:Pn(),e=null,o=n.apply(u,i),e||(u=i=null)},c=function(){var c=Pn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,i=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,o=n.apply(u,i),e||(u=i=null)):e||!1===t.trailing||(e=setTimeout(f,l)),o};return c.cancel=function(){clearTimeout(e),a=0,e=u=i=null},c},debounce:function(n,r,t){var e,u,i,o,a,f=function(){var c=Pn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(o=n.apply(a,i)),e||(i=a=null))},c=j((function(c){return a=this,i=c,u=Pn(),e||(e=setTimeout(f,r),t&&(o=n.apply(a,i))),o}));return c.cancel=function(){clearTimeout(e),e=i=a=null},c},wrap:function(n,r){return Xn(r,n)},negate:ur,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:ir,once:or,findKey:ar,findIndex:cr,findLastIndex:lr,sortedIndex:sr,indexOf:vr,lastIndexOf:hr,find:yr,detect:yr,findWhere:function(n,r){return yr(n,Nn(r))},each:dr,forEach:dr,map:gr,collect:gr,reduce:mr,foldl:mr,inject:mr,reduceRight:jr,foldr:jr,filter:_r,select:_r,reject:function(n,r,t){return _r(n,ur(Rn(r)),t)},every:wr,all:wr,some:Ar,any:Ar,contains:xr,includes:xr,include:xr,invoke:Sr,pluck:Or,where:function(n,r){return _r(n,Nn(r))},max:Mr,min:function(n,r,t){var e,u,i=1/0,o=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=Zn(n)?n:gn(n)).length;a<f;a++)null!=(e=n[a])&&e<i&&(i=e);else r=Rn(r,t),dr(n,(function(n,t,e){((u=r(n,t,e))<o||u===1/0&&i===1/0)&&(i=n,o=u)}));return i},shuffle:function(n){return Nr(n,1/0)},sample:Nr,sortBy:function(n,r,t){var e=0;return r=Rn(r,t),Or(gr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Tr,indexBy:kr,countBy:Dr,partition:Rr,toArray:Br,size:function(n){return null==n?0:Zn(n)?n.length:Z(n).length},pick:Vr,omit:Pr,first:Ur,head:Ur,take:Ur,initial:qr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:Wr(n,Math.max(0,n.length-r))},rest:Wr,tail:Wr,drop:Wr,compact:function(n){return _r(n,Boolean)},flatten:function(n,r){return nr(n,r,!1)},without:Lr,uniq:$r,unique:$r,union:Cr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=X(n);e<u;e++){var i=n[e];if(!xr(r,i)){var o;for(o=1;o<t&&xr(arguments[o],i);o++);o===t&&r.push(i)}}return r},difference:zr,unzip:Kr,transpose:Kr,zip:Jr,object:function(n,r){for(var t={},e=0,u=X(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(o.call(n,e,e+=r));return t},mixin:Hr,default:rn});return Qr._=Qr,Qr}));