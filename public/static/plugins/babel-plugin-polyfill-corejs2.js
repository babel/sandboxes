!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).babelPluginPolyfillCorejs2=e()}}(function(){return function(){return function e(t,r,n){function i(o,a){if(!r[o]){if(!t[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[o]={exports:{}};t[o][0].call(u.exports,function(e){return i(t[o][1][e]||e)},u,u.exports,e,t,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}}()({1:[function(e,t,r){(function(r){"use strict";var n=e("object-assign");function i(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0}function s(e){return r.Buffer&&"function"==typeof r.Buffer.isBuffer?r.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var o=e("util/"),a=Object.prototype.hasOwnProperty,l=Array.prototype.slice,c="foo"===function(){}.name;function u(e){return Object.prototype.toString.call(e)}function p(e){return!s(e)&&("function"==typeof r.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var f=t.exports=b,d=/\s*function\s+([^\(\s]*)\s*/;function h(e){if(o.isFunction(e)){if(c)return e.name;var t=e.toString().match(d);return t&&t[1]}}function m(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function y(e){if(c||!o.isFunction(e))return o.inspect(e);var t=h(e);return"[Function"+(t?": "+t:"")+"]"}function g(e,t,r,n,i){throw new f.AssertionError({message:r,actual:e,expected:t,operator:n,stackStartFunction:i})}function b(e,t){e||g(e,!0,t,"==",f.ok)}function v(e,t,r,n){if(e===t)return!0;if(s(e)&&s(t))return 0===i(e,t);if(o.isDate(e)&&o.isDate(t))return e.getTime()===t.getTime();if(o.isRegExp(e)&&o.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(p(e)&&p(t)&&u(e)===u(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===i(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(s(e)!==s(t))return!1;var a=(n=n||{actual:[],expected:[]}).actual.indexOf(e);return-1!==a&&a===n.expected.indexOf(t)||(n.actual.push(e),n.expected.push(t),function(e,t,r,n){if(null==e||null==t)return!1;if(o.isPrimitive(e)||o.isPrimitive(t))return e===t;if(r&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=E(e),s=E(t);if(i&&!s||!i&&s)return!1;if(i)return e=l.call(e),t=l.call(t),v(e,t,r);var a,c,u=S(e),p=S(t);if(u.length!==p.length)return!1;for(u.sort(),p.sort(),c=u.length-1;c>=0;c--)if(u[c]!==p[c])return!1;for(c=u.length-1;c>=0;c--)if(a=u[c],!v(e[a],t[a],r,n))return!1;return!0}(e,t,r,n))}return r?e===t:e==t}function E(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function x(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function T(e,t,r,n){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),i=function(e){var t;try{e()}catch(e){t=e}return t}(t),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),e&&!i&&g(i,r,"Missing expected exception"+n);var s="string"==typeof n,a=!e&&i&&!r;if((!e&&o.isError(i)&&s&&x(i,r)||a)&&g(i,r,"Got unwanted exception"+n),e&&i&&r&&!x(i,r)||!e&&i)throw i}f.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=m(y((t=this).actual),128)+" "+t.operator+" "+m(y(t.expected),128),this.generatedMessage=!0);var r=e.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,r);else{var n=new Error;if(n.stack){var i=n.stack,s=h(r),o=i.indexOf("\n"+s);if(o>=0){var a=i.indexOf("\n",o+1);i=i.substring(a+1)}this.stack=i}}},o.inherits(f.AssertionError,Error),f.fail=g,f.ok=b,f.equal=function(e,t,r){e!=t&&g(e,t,r,"==",f.equal)},f.notEqual=function(e,t,r){e==t&&g(e,t,r,"!=",f.notEqual)},f.deepEqual=function(e,t,r){v(e,t,!1)||g(e,t,r,"deepEqual",f.deepEqual)},f.deepStrictEqual=function(e,t,r){v(e,t,!0)||g(e,t,r,"deepStrictEqual",f.deepStrictEqual)},f.notDeepEqual=function(e,t,r){v(e,t,!1)&&g(e,t,r,"notDeepEqual",f.notDeepEqual)},f.notDeepStrictEqual=function e(t,r,n){v(t,r,!0)&&g(t,r,n,"notDeepStrictEqual",e)},f.strictEqual=function(e,t,r){e!==t&&g(e,t,r,"===",f.strictEqual)},f.notStrictEqual=function(e,t,r){e===t&&g(e,t,r,"!==",f.notStrictEqual)},f.throws=function(e,t,r){T(!0,e,t,r)},f.doesNotThrow=function(e,t,r){T(!1,e,t,r)},f.ifError=function(e){if(e)throw e},f.strict=n(function e(t,r){t||g(t,!0,r,"==",e)},f,{equal:f.strictEqual,deepEqual:f.deepStrictEqual,notEqual:f.notStrictEqual,notDeepEqual:f.notDeepStrictEqual}),f.strict.strict=f.strict;var S=Object.keys||function(e){var t=[];for(var r in e)a.call(e,r)&&t.push(r);return t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"object-assign":11,"util/":4}],2:[function(e,t,r){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],3:[function(e,t,r){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],4:[function(e,t,r){(function(t,n){var i=/%[sdj%]/g;r.format=function(e){if(!g(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(a(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,s=n.length,o=String(e).replace(i,function(e){if("%%"===e)return"%";if(r>=s)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),l=n[r];r<s;l=n[++r])m(l)||!E(l)?o+=" "+l:o+=" "+a(l);return o},r.deprecate=function(e,i){if(b(n.process))return function(){return r.deprecate(e,i).apply(this,arguments)};if(!0===t.noDeprecation)return e;var s=!1;return function(){if(!s){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),s=!0}return e.apply(this,arguments)}};var s,o={};function a(e,t){var n={seen:[],stylize:c};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),h(t)?n.showHidden=t:t&&r._extend(n,t),b(n.showHidden)&&(n.showHidden=!1),b(n.depth)&&(n.depth=2),b(n.colors)&&(n.colors=!1),b(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=l),u(n,e,n.depth)}function l(e,t){var r=a.styles[t];return r?"["+a.colors[r][0]+"m"+e+"["+a.colors[r][1]+"m":e}function c(e,t){return e}function u(e,t,n){if(e.customInspect&&t&&S(t.inspect)&&t.inspect!==r.inspect&&(!t.constructor||t.constructor.prototype!==t)){var i=t.inspect(n,e);return g(i)||(i=u(e,i,n)),i}var s=function(e,t){if(b(t))return e.stylize("undefined","undefined");if(g(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(y(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(e,t);if(s)return s;var o=Object.keys(t),a=function(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(t)),T(t)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return p(t);if(0===o.length){if(S(t)){var l=t.name?": "+t.name:"";return e.stylize("[Function"+l+"]","special")}if(v(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(x(t))return e.stylize(Date.prototype.toString.call(t),"date");if(T(t))return p(t)}var c,E="",P=!1,w=["{","}"];(d(t)&&(P=!0,w=["[","]"]),S(t))&&(E=" [Function"+(t.name?": "+t.name:"")+"]");return v(t)&&(E=" "+RegExp.prototype.toString.call(t)),x(t)&&(E=" "+Date.prototype.toUTCString.call(t)),T(t)&&(E=" "+p(t)),0!==o.length||P&&0!=t.length?n<0?v(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),c=P?function(e,t,r,n,i){for(var s=[],o=0,a=t.length;o<a;++o)_(t,String(o))?s.push(f(e,t,r,n,String(o),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(f(e,t,r,n,i,!0))}),s}(e,t,n,a,o):o.map(function(r){return f(e,t,n,a,r,P)}),e.seen.pop(),function(e,t,r){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(c,E,w)):w[0]+E+w[1]}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,r,n,i,s){var o,a,l;if((l=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(a=e.stylize("[Setter]","special")),_(n,i)||(o="["+i+"]"),a||(e.seen.indexOf(l.value)<0?(a=m(r)?u(e,l.value,null):u(e,l.value,r-1)).indexOf("\n")>-1&&(a=s?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),b(o)){if(s&&i.match(/^\d+$/))return a;(o=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+a}function d(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function m(e){return null===e}function y(e){return"number"==typeof e}function g(e){return"string"==typeof e}function b(e){return void 0===e}function v(e){return E(e)&&"[object RegExp]"===P(e)}function E(e){return"object"==typeof e&&null!==e}function x(e){return E(e)&&"[object Date]"===P(e)}function T(e){return E(e)&&("[object Error]"===P(e)||e instanceof Error)}function S(e){return"function"==typeof e}function P(e){return Object.prototype.toString.call(e)}function w(e){return e<10?"0"+e.toString(10):e.toString(10)}r.debuglog=function(e){if(b(s)&&(s=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!o[e])if(new RegExp("\\b"+e+"\\b","i").test(s)){var n=t.pid;o[e]=function(){var t=r.format.apply(r,arguments);console.error("%s %d: %s",e,n,t)}}else o[e]=function(){};return o[e]},r.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},r.isArray=d,r.isBoolean=h,r.isNull=m,r.isNullOrUndefined=function(e){return null==e},r.isNumber=y,r.isString=g,r.isSymbol=function(e){return"symbol"==typeof e},r.isUndefined=b,r.isRegExp=v,r.isObject=E,r.isDate=x,r.isError=T,r.isFunction=S,r.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},r.isBuffer=e("./support/isBuffer");var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r.log=function(){var e,t;console.log("%s - %s",(e=new Date,t=[w(e.getHours()),w(e.getMinutes()),w(e.getSeconds())].join(":"),[e.getDate(),A[e.getMonth()],t].join(" ")),r.format.apply(r,arguments))},r.inherits=e("inherits"),r._extend=function(e,t){if(!t||!E(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":3,_process:13,inherits:2}],5:[function(e,t,r){"use strict";r.byteLength=function(e){var t=c(e),r=t[0],n=t[1];return 3*(r+n)/4-n},r.toByteArray=function(e){var t,r,n=c(e),o=n[0],a=n[1],l=new s(function(e,t,r){return 3*(t+r)/4-r}(0,o,a)),u=0,p=a>0?o-4:o;for(r=0;r<p;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;2===a&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,l[u++]=255&t);1===a&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t);return l},r.fromByteArray=function(e){for(var t,r=e.length,i=r%3,s=[],o=0,a=r-i;o<a;o+=16383)s.push(u(e,o,o+16383>a?a:o+16383));1===i?(t=e[r-1],s.push(n[t>>2]+n[t<<4&63]+"==")):2===i&&(t=(e[r-2]<<8)+e[r-1],s.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return s.join("")};for(var n=[],i=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,l=o.length;a<l;++a)n[a]=o[a],i[o.charCodeAt(a)]=a;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function u(e,t,r){for(var i,s,o=[],a=t;a<r;a+=3)i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(n[(s=i)>>18&63]+n[s>>12&63]+n[s>>6&63]+n[63&s]);return o.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},{}],6:[function(e,t,r){},{}],7:[function(e,t,r){arguments[4][6][0].apply(r,arguments)},{dup:6}],8:[function(e,t,r){(function(t){"use strict";var n=e("base64-js"),i=e("ieee754");r.Buffer=t,r.SlowBuffer=function(e){+e!=e&&(e=0);return t.alloc(+e)},r.INSPECT_MAX_BYTES=50;var s=2147483647;function o(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return r.__proto__=t.prototype,r}function t(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return c(e)}return a(e,t,r)}function a(e,r,n){if("string"==typeof e)return function(e,r){"string"==typeof r&&""!==r||(r="utf8");if(!t.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var n=0|f(e,r),i=o(n),s=i.write(e,r);s!==n&&(i=i.slice(0,s));return i}(e,r);if(ArrayBuffer.isView(e))return u(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(F(e,ArrayBuffer)||e&&F(e.buffer,ArrayBuffer))return function(e,r,n){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(n||0))throw new RangeError('"length" is outside of buffer bounds');var i;i=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);return i.__proto__=t.prototype,i}(e,r,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return t.from(i,r,n);var s=function(e){if(t.isBuffer(e)){var r=0|p(e.length),n=o(r);return 0===n.length?n:(e.copy(n,0,0,r),n)}if(void 0!==e.length)return"number"!=typeof e.length||U(e.length)?o(0):u(e);if("Buffer"===e.type&&Array.isArray(e.data))return u(e.data)}(e);if(s)return s;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return t.from(e[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return l(e),o(e<0?0:0|p(e))}function u(e){for(var t=e.length<0?0:0|p(e.length),r=o(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function p(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|e}function f(e,r){if(t.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||F(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var s=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return L(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return B(e).length;default:if(s)return i?-1:L(e).length;r=(""+r).toLowerCase(),s=!0}}function d(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function h(e,r,n,i,s){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),U(n=+n)&&(n=s?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(s)return-1;n=e.length-1}else if(n<0){if(!s)return-1;n=0}if("string"==typeof r&&(r=t.from(r,i)),t.isBuffer(r))return 0===r.length?-1:m(e,r,n,i,s);if("number"==typeof r)return r&=255,"function"==typeof Uint8Array.prototype.indexOf?s?Uint8Array.prototype.indexOf.call(e,r,n):Uint8Array.prototype.lastIndexOf.call(e,r,n):m(e,[r],n,i,s);throw new TypeError("val must be string, number or Buffer")}function m(e,t,r,n,i){var s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var u=-1;for(s=r;s<a;s++)if(c(e,s)===c(t,-1===u?0:s-u)){if(-1===u&&(u=s),s-u+1===l)return u*o}else-1!==u&&(s-=s-u),u=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){for(var p=!0,f=0;f<l;f++)if(c(e,s+f)!==c(t,f)){p=!1;break}if(p)return s}return-1}function y(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var s=t.length;n>s/2&&(n=s/2);for(var o=0;o<n;++o){var a=parseInt(t.substr(2*o,2),16);if(U(a))return o;e[r+o]=a}return o}function g(e,t,r,n){return R(L(t,e.length-r),e,r,n)}function b(e,t,r,n){return R(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function v(e,t,r,n){return b(e,t,r,n)}function E(e,t,r,n){return R(B(t),e,r,n)}function x(e,t,r,n){return R(function(e,t){for(var r,n,i,s=[],o=0;o<e.length&&!((t-=2)<0);++o)r=e.charCodeAt(o),n=r>>8,i=r%256,s.push(i),s.push(n);return s}(t,e.length-r),e,r,n)}function T(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function S(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var s,o,a,l,c=e[i],u=null,p=c>239?4:c>223?3:c>191?2:1;if(i+p<=r)switch(p){case 1:c<128&&(u=c);break;case 2:128==(192&(s=e[i+1]))&&(l=(31&c)<<6|63&s)>127&&(u=l);break;case 3:s=e[i+1],o=e[i+2],128==(192&s)&&128==(192&o)&&(l=(15&c)<<12|(63&s)<<6|63&o)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:s=e[i+1],o=e[i+2],a=e[i+3],128==(192&s)&&128==(192&o)&&128==(192&a)&&(l=(15&c)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(u=l)}null===u?(u=65533,p=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),i+=p}return function(e){var t=e.length;if(t<=P)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=P));return r}(n)}r.kMaxLength=s,t.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()}catch(e){return!1}}(),t.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(t.prototype,"parent",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.buffer}}),Object.defineProperty(t.prototype,"offset",{enumerable:!0,get:function(){if(t.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&t[Symbol.species]===t&&Object.defineProperty(t,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),t.poolSize=8192,t.from=function(e,t,r){return a(e,t,r)},t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array,t.alloc=function(e,t,r){return function(e,t,r){return l(e),e<=0?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)}(e,t,r)},t.allocUnsafe=function(e){return c(e)},t.allocUnsafeSlow=function(e){return c(e)},t.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==t.prototype},t.compare=function(e,r){if(F(e,Uint8Array)&&(e=t.from(e,e.offset,e.byteLength)),F(r,Uint8Array)&&(r=t.from(r,r.offset,r.byteLength)),!t.isBuffer(e)||!t.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var n=e.length,i=r.length,s=0,o=Math.min(n,i);s<o;++s)if(e[s]!==r[s]){n=e[s],i=r[s];break}return n<i?-1:i<n?1:0},t.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return t.alloc(0);var n;if(void 0===r)for(r=0,n=0;n<e.length;++n)r+=e[n].length;var i=t.allocUnsafe(r),s=0;for(n=0;n<e.length;++n){var o=e[n];if(F(o,Uint8Array)&&(o=t.from(o)),!t.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(i,s),s+=o.length}return i},t.byteLength=f,t.prototype._isBuffer=!0,t.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)d(this,t,t+1);return this},t.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)d(this,t,t+3),d(this,t+1,t+2);return this},t.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)d(this,t,t+7),d(this,t+1,t+6),d(this,t+2,t+5),d(this,t+3,t+4);return this},t.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?S(this,0,e):function(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return _(this,t,r);case"utf8":case"utf-8":return S(this,t,r);case"ascii":return w(this,t,r);case"latin1":case"binary":return A(this,t,r);case"base64":return T(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}.apply(this,arguments)},t.prototype.toLocaleString=t.prototype.toString,t.prototype.equals=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===t.compare(this,e)},t.prototype.inspect=function(){var e="",t=r.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},t.prototype.compare=function(e,r,n,i,s){if(F(e,Uint8Array)&&(e=t.from(e,e.offset,e.byteLength)),!t.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===r&&(r=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===s&&(s=this.length),r<0||n>e.length||i<0||s>this.length)throw new RangeError("out of range index");if(i>=s&&r>=n)return 0;if(i>=s)return-1;if(r>=n)return 1;if(this===e)return 0;for(var o=(s>>>=0)-(i>>>=0),a=(n>>>=0)-(r>>>=0),l=Math.min(o,a),c=this.slice(i,s),u=e.slice(r,n),p=0;p<l;++p)if(c[p]!==u[p]){o=c[p],a=u[p];break}return o<a?-1:a<o?1:0},t.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},t.prototype.indexOf=function(e,t,r){return h(this,e,t,r,!0)},t.prototype.lastIndexOf=function(e,t,r){return h(this,e,t,r,!1)},t.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return y(this,e,t,r);case"utf8":case"utf-8":return g(this,e,t,r);case"ascii":return b(this,e,t,r);case"latin1":case"binary":return v(this,e,t,r);case"base64":return E(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var P=4096;function w(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function A(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function _(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",s=t;s<r;++s)i+=D(e[s]);return i}function O(e,t,r){for(var n=e.slice(t,r),i="",s=0;s<n.length;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}function C(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function I(e,r,n,i,s,o){if(!t.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>s||r<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function k(e,t,r,n,i,s){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(e,t,r,n,s){return t=+t,r>>>=0,s||k(e,0,r,4),i.write(e,t,r,n,23,4),r+4}function N(e,t,r,n,s){return t=+t,r>>>=0,s||k(e,0,r,8),i.write(e,t,r,n,52,8),r+8}t.prototype.slice=function(e,r){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<e&&(r=e);var i=this.subarray(e,r);return i.__proto__=t.prototype,i},t.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||C(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n},t.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||C(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},t.prototype.readUInt8=function(e,t){return e>>>=0,t||C(e,1,this.length),this[e]},t.prototype.readUInt16LE=function(e,t){return e>>>=0,t||C(e,2,this.length),this[e]|this[e+1]<<8},t.prototype.readUInt16BE=function(e,t){return e>>>=0,t||C(e,2,this.length),this[e]<<8|this[e+1]},t.prototype.readUInt32LE=function(e,t){return e>>>=0,t||C(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},t.prototype.readUInt32BE=function(e,t){return e>>>=0,t||C(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},t.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||C(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},t.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||C(e,t,this.length);for(var n=t,i=1,s=this[e+--n];n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},t.prototype.readInt8=function(e,t){return e>>>=0,t||C(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},t.prototype.readInt16LE=function(e,t){e>>>=0,t||C(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt16BE=function(e,t){e>>>=0,t||C(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt32LE=function(e,t){return e>>>=0,t||C(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},t.prototype.readInt32BE=function(e,t){return e>>>=0,t||C(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},t.prototype.readFloatLE=function(e,t){return e>>>=0,t||C(e,4,this.length),i.read(this,e,!0,23,4)},t.prototype.readFloatBE=function(e,t){return e>>>=0,t||C(e,4,this.length),i.read(this,e,!1,23,4)},t.prototype.readDoubleLE=function(e,t){return e>>>=0,t||C(e,8,this.length),i.read(this,e,!0,52,8)},t.prototype.readDoubleBE=function(e,t){return e>>>=0,t||C(e,8,this.length),i.read(this,e,!1,52,8)},t.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||I(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},t.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||I(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},t.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,1,255,0),this[t]=255&e,t+1},t.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},t.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},t.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},t.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},t.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);I(this,e,t,r,i-1,-i)}var s=0,o=1,a=0;for(this[t]=255&e;++s<r&&(o*=256);)e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},t.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);I(this,e,t,r,i-1,-i)}var s=r-1,o=1,a=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},t.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},t.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},t.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},t.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},t.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},t.prototype.writeFloatLE=function(e,t,r){return j(this,e,t,!0,r)},t.prototype.writeFloatBE=function(e,t,r){return j(this,e,t,!1,r)},t.prototype.writeDoubleLE=function(e,t,r){return N(this,e,t,!0,r)},t.prototype.writeDoubleBE=function(e,t,r){return N(this,e,t,!1,r)},t.prototype.copy=function(e,r,n,i){if(!t.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-n&&(i=e.length-r+n);var s=i-n;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,n,i);else if(this===e&&n<r&&r<i)for(var o=s-1;o>=0;--o)e[o+r]=this[o+n];else Uint8Array.prototype.set.call(e,this.subarray(n,i),r);return s},t.prototype.fill=function(e,r,n,i){if("string"==typeof e){if("string"==typeof r?(i=r,r=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!t.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){var s=e.charCodeAt(0);("utf8"===i&&s<128||"latin1"===i)&&(e=s)}}else"number"==typeof e&&(e&=255);if(r<0||this.length<r||this.length<n)throw new RangeError("Out of range index");if(n<=r)return this;var o;if(r>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=r;o<n;++o)this[o]=e;else{var a=t.isBuffer(e)?e:t.from(e,i),l=a.length;if(0===l)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-r;++o)this[o+r]=a[o%l]}return this};var M=/[^+\/0-9A-Za-z-_]/g;function D(e){return e<16?"0"+e.toString(16):e.toString(16)}function L(e,t){var r;t=t||1/0;for(var n=e.length,i=null,s=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function B(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function R(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function F(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function U(e){return e!=e}}).call(this,e("buffer").Buffer)},{"base64-js":5,buffer:8,ieee754:9}],9:[function(e,t,r){r.read=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,c=l>>1,u=-7,p=r?i-1:0,f=r?-1:1,d=e[t+p];for(p+=f,s=d&(1<<-u)-1,d>>=-u,u+=a;u>0;s=256*s+e[t+p],p+=f,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=n;u>0;o=256*o+e[t+p],p+=f,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),s-=c}return(d?-1:1)*o*Math.pow(2,s-n)},r.write=function(e,t,r,n,i,s){var o,a,l,c=8*s-i-1,u=(1<<c)-1,p=u>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:s-1,h=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+p>=1?f/l:f*Math.pow(2,1-p))*l>=2&&(o++,l/=2),o+p>=u?(a=0,o=u):o+p>=1?(a=(t*l-1)*Math.pow(2,i),o+=p):(a=t*Math.pow(2,p-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=255&a,d+=h,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;e[r+d]=255&o,d+=h,o/=256,c-=8);e[r+d-h]|=128*m}},{}],10:[function(e,t,r){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}t.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},{}],11:[function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,o,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in r=Object(arguments[l]))i.call(r,c)&&(a[c]=r[c]);if(n){o=n(r);for(var u=0;u<o.length;u++)s.call(r,o[u])&&(a[o[u]]=r[o[u]])}}return a}},{}],12:[function(e,t,r){(function(e){function t(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}r.resolve=function(){for(var r="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(r=o+"/"+r,i="/"===o.charAt(0))}return(i?"/":"")+(r=t(n(r.split("/"),function(e){return!!e}),!i).join("/"))||"."},r.normalize=function(e){var s=r.isAbsolute(e),o="/"===i(e,-1);return(e=t(n(e.split("/"),function(e){return!!e}),!s).join("/"))||s||(e="."),e&&o&&(e+="/"),(s?"/":"")+e},r.isAbsolute=function(e){return"/"===e.charAt(0)},r.join=function(){var e=Array.prototype.slice.call(arguments,0);return r.normalize(n(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},r.relative=function(e,t){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=r.resolve(e).substr(1),t=r.resolve(t).substr(1);for(var i=n(e.split("/")),s=n(t.split("/")),o=Math.min(i.length,s.length),a=o,l=0;l<o;l++)if(i[l]!==s[l]){a=l;break}var c=[];for(l=a;l<i.length;l++)c.push("..");return(c=c.concat(s.slice(a))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!i){n=s;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},r.basename=function(e,t){var r=function(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){r=t+1;break}}else-1===n&&(i=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},r.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===n&&(i=!1,n=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){r=o+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===r+1?"":e.slice(t,n)};var i="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,e("_process"))},{_process:13}],13:[function(e,t,r){var n,i,s=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,u=[],p=!1,f=-1;function d(){p&&c&&(p=!1,c.length?u=c.concat(u):f=-1,u.length&&h())}function h(){if(!p){var e=l(d);p=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,p=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function y(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new m(e,t)),1!==u.length||p||l(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=y,s.addListener=y,s.once=y,s.off=y,s.removeListener=y,s.removeAllListeners=y,s.emit=y,s.prependListener=y,s.prependOnceListener=y,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},{}],14:[function(e,t,r){"use strict";r.__esModule=!0,r.default=function(e,t,r){const s=Object.keys(e),o=!s.length,a=s.some(e=>"node"!==e);return{...r,..."usage-pure"===t?i:null,...o||a?n:null}};const n={"web.timers":{},"web.immediate":{},"web.dom.iterable":{}},i={"es6.parse-float":{},"es6.parse-int":{},"es7.string.at":{}}},{}],15:[function(e,t,r){(function(e){"use strict";r.__esModule=!0,r.StaticProperties=r.InstanceProperties=r.BuiltIns=r.CommonIterators=void 0;const t=(e,t,r=[],n)=>({name:e,pure:t,global:r,meta:n}),n=(e,r,n=null)=>t(r[0],e,r,{minRuntimeVersion:n}),i=e=>t(e[0],null,e),s=(e,r)=>t(r,e,[]),o=["es6.object.to-string","es6.array.iterator","web.dom.iterable"],a=["es6.string.iterator",...o];r.CommonIterators=a;const l=["es6.object.to-string","es6.promise"],c={DataView:i(["es6.typed.data-view"]),Float32Array:i(["es6.typed.float32-array"]),Float64Array:i(["es6.typed.float64-array"]),Int8Array:i(["es6.typed.int8-array"]),Int16Array:i(["es6.typed.int16-array"]),Int32Array:i(["es6.typed.int32-array"]),Map:n("map",["es6.map",...a]),Number:i(["es6.number.constructor"]),Promise:n("promise",l),RegExp:i(["es6.regexp.constructor"]),Set:n("set",["es6.set",...a]),Symbol:n("symbol",["es6.symbol"]),Uint8Array:i(["es6.typed.uint8-array"]),Uint8ClampedArray:i(["es6.typed.uint8-clamped-array"]),Uint16Array:i(["es6.typed.uint16-array"]),Uint32Array:i(["es6.typed.uint32-array"]),WeakMap:n("weak-map",["es6.weak-map",...a]),WeakSet:n("weak-set",["es6.weak-set",...a]),setImmediate:s("set-immediate","web.immediate"),clearImmediate:s("clear-immediate","web.immediate"),parseFloat:s("parse-float","es6.parse-float"),parseInt:s("parse-int","es6.parse-int")};r.BuiltIns=c;const u={__defineGetter__:i(["es7.object.define-getter"]),__defineSetter__:i(["es7.object.define-setter"]),__lookupGetter__:i(["es7.object.lookup-getter"]),__lookupSetter__:i(["es7.object.lookup-setter"]),anchor:i(["es6.string.anchor"]),big:i(["es6.string.big"]),bind:i(["es6.function.bind"]),blink:i(["es6.string.blink"]),bold:i(["es6.string.bold"]),codePointAt:i(["es6.string.code-point-at"]),copyWithin:i(["es6.array.copy-within"]),endsWith:i(["es6.string.ends-with"]),entries:i(o),every:i(["es6.array.is-array"]),fill:i(["es6.array.fill"]),filter:i(["es6.array.filter"]),finally:i(["es7.promise.finally",...l]),find:i(["es6.array.find"]),findIndex:i(["es6.array.find-index"]),fixed:i(["es6.string.fixed"]),flags:i(["es6.regexp.flags"]),flatMap:i(["es7.array.flat-map"]),fontcolor:i(["es6.string.fontcolor"]),fontsize:i(["es6.string.fontsize"]),forEach:i(["es6.array.for-each"]),includes:i(["es6.string.includes","es7.array.includes"]),indexOf:i(["es6.array.index-of"]),italics:i(["es6.string.italics"]),keys:i(o),lastIndexOf:i(["es6.array.last-index-of"]),link:i(["es6.string.link"]),map:i(["es6.array.map"]),match:i(["es6.regexp.match"]),name:i(["es6.function.name"]),padStart:i(["es7.string.pad-start"]),padEnd:i(["es7.string.pad-end"]),reduce:i(["es6.array.reduce"]),reduceRight:i(["es6.array.reduce-right"]),repeat:i(["es6.string.repeat"]),replace:i(["es6.regexp.replace"]),search:i(["es6.regexp.search"]),slice:i(["es6.array.slice"]),small:i(["es6.string.small"]),some:i(["es6.array.some"]),sort:i(["es6.array.sort"]),split:i(["es6.regexp.split"]),startsWith:i(["es6.string.starts-with"]),strike:i(["es6.string.strike"]),sub:i(["es6.string.sub"]),sup:i(["es6.string.sup"]),toISOString:i(["es6.date.to-iso-string"]),toJSON:i(["es6.date.to-json"]),toString:i(["es6.object.to-string","es6.date.to-string","es6.regexp.to-string"]),trim:i(["es6.string.trim"]),trimEnd:i(["es7.string.trim-right"]),trimLeft:i(["es7.string.trim-left"]),trimRight:i(["es7.string.trim-right"]),trimStart:i(["es7.string.trim-left"]),values:i(o)};r.InstanceProperties=u;const p={Array:{from:n("array/from",["es6.symbol","es6.array.from",...a]),isArray:n("array/is-array",["es6.array.is-array"]),of:n("array/of",["es6.array.of"])},Date:{now:n("date/now",["es6.date.now"])},JSON:{stringify:s("json/stringify","es6.symbol")},Math:{acosh:n("math/acosh",["es6.math.acosh"],"7.0.1"),asinh:n("math/asinh",["es6.math.asinh"],"7.0.1"),atanh:n("math/atanh",["es6.math.atanh"],"7.0.1"),cbrt:n("math/cbrt",["es6.math.cbrt"],"7.0.1"),clz32:n("math/clz32",["es6.math.clz32"],"7.0.1"),cosh:n("math/cosh",["es6.math.cosh"],"7.0.1"),expm1:n("math/expm1",["es6.math.expm1"],"7.0.1"),fround:n("math/fround",["es6.math.fround"],"7.0.1"),hypot:n("math/hypot",["es6.math.hypot"],"7.0.1"),imul:n("math/imul",["es6.math.imul"],"7.0.1"),log1p:n("math/log1p",["es6.math.log1p"],"7.0.1"),log10:n("math/log10",["es6.math.log10"],"7.0.1"),log2:n("math/log2",["es6.math.log2"],"7.0.1"),sign:n("math/sign",["es6.math.sign"],"7.0.1"),sinh:n("math/sinh",["es6.math.sinh"],"7.0.1"),tanh:n("math/tanh",["es6.math.tanh"],"7.0.1"),trunc:n("math/trunc",["es6.math.trunc"],"7.0.1")},Number:{EPSILON:n("number/epsilon",["es6.number.epsilon"]),MIN_SAFE_INTEGER:n("number/min-safe-integer",["es6.number.min-safe-integer"]),MAX_SAFE_INTEGER:n("number/max-safe-integer",["es6.number.max-safe-integer"]),isFinite:n("number/is-finite",["es6.number.is-finite"]),isInteger:n("number/is-integer",["es6.number.is-integer"]),isSafeInteger:n("number/is-safe-integer",["es6.number.is-safe-integer"]),isNaN:n("number/is-nan",["es6.number.is-nan"]),parseFloat:n("number/parse-float",["es6.number.parse-float"]),parseInt:n("number/parse-int",["es6.number.parse-int"])},Object:{assign:n("object/assign",["es6.object.assign"]),create:n("object/create",["es6.object.create"]),defineProperties:n("object/define-properties",["es6.object.define-properties"]),defineProperty:n("object/define-property",["es6.object.define-property"]),entries:n("object/entries",["es7.object.entries"]),freeze:n("object/freeze",["es6.object.freeze"]),getOwnPropertyDescriptor:n("object/get-own-property-descriptor",["es6.object.get-own-property-descriptor"]),getOwnPropertyDescriptors:n("object/get-own-property-descriptors",["es7.object.get-own-property-descriptors"]),getOwnPropertyNames:n("object/get-own-property-names",["es6.object.get-own-property-names"]),getOwnPropertySymbols:n("object/get-own-property-symbols",["es6.symbol"]),getPrototypeOf:n("object/get-prototype-of",["es6.object.get-prototype-of"]),is:n("object/is",["es6.object.is"]),isExtensible:n("object/is-extensible",["es6.object.is-extensible"]),isFrozen:n("object/is-frozen",["es6.object.is-frozen"]),isSealed:n("object/is-sealed",["es6.object.is-sealed"]),keys:n("object/keys",["es6.object.keys"]),preventExtensions:n("object/prevent-extensions",["es6.object.prevent-extensions"]),seal:n("object/seal",["es6.object.seal"]),setPrototypeOf:n("object/set-prototype-of",["es6.object.set-prototype-of"]),values:n("object/values",["es7.object.values"])},Promise:{all:i(a),race:i(a)},Reflect:{apply:n("reflect/apply",["es6.reflect.apply"]),construct:n("reflect/construct",["es6.reflect.construct"]),defineProperty:n("reflect/define-property",["es6.reflect.define-property"]),deleteProperty:n("reflect/delete-property",["es6.reflect.delete-property"]),get:n("reflect/get",["es6.reflect.get"]),getOwnPropertyDescriptor:n("reflect/get-own-property-descriptor",["es6.reflect.get-own-property-descriptor"]),getPrototypeOf:n("reflect/get-prototype-of",["es6.reflect.get-prototype-of"]),has:n("reflect/has",["es6.reflect.has"]),isExtensible:n("reflect/is-extensible",["es6.reflect.is-extensible"]),ownKeys:n("reflect/own-keys",["es6.reflect.own-keys"]),preventExtensions:n("reflect/prevent-extensions",["es6.reflect.prevent-extensions"]),set:n("reflect/set",["es6.reflect.set"]),setPrototypeOf:n("reflect/set-prototype-of",["es6.reflect.set-prototype-of"])},String:{at:s("string/at","es7.string.at"),fromCodePoint:n("string/from-code-point",["es6.string.from-code-point"]),raw:n("string/raw",["es6.string.raw"])},Symbol:{asyncIterator:i(["es6.symbol","es7.symbol.async-iterator"]),for:s("symbol/for","es6.symbol"),hasInstance:s("symbol/has-instance","es6.symbol"),isConcatSpreadable:s("symbol/is-concat-spreadable","es6.symbol"),iterator:t("es6.symbol","symbol/iterator",a),keyFor:s("symbol/key-for","es6.symbol"),match:n("symbol/match",["es6.regexp.match"]),replace:s("symbol/replace","es6.symbol"),search:s("symbol/search","es6.symbol"),species:s("symbol/species","es6.symbol"),split:s("symbol/split","es6.symbol"),toPrimitive:s("symbol/to-primitive","es6.symbol"),toStringTag:s("symbol/to-string-tag","es6.symbol"),unscopables:s("symbol/unscopables","es6.symbol")}};r.StaticProperties=p}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],16:[function(e,t,r){"use strict";r.__esModule=!0,r.hasMinVersion=function(e,t){if(!t||!e)return!0;i.default.valid(t)&&(t=`^${t}`);return!i.default.intersects(`<${e}`,t)&&!i.default.intersects(">=8.0.0",t)};var n,i=(n=e("semver"))&&n.__esModule?n:{default:n}},{semver:456}],17:[function(e,t,r){"use strict";r.__esModule=!0,r.default=void 0;var n=c(e("@babel/compat-data/corejs2-built-ins")),i=e("./built-in-definitions"),s=c(e("./add-platform-specific-polyfills")),o=e("./helpers"),a=c(e("@babel/helper-define-polyfill-provider")),l=e("@babel/core");function c(e){return e&&e.__esModule?e:{default:e}}const u=Function.call.bind(Object.hasOwnProperty);var p=(0,a.default)(function(e,{version:t="7.0.0-beta.0","#__secret_key__@babel/preset-env__compatibility":{entryInjectRegenerator:r}={}}){const a=e.createMetaResolver({global:i.BuiltIns,static:i.StaticProperties,instance:i.InstanceProperties}),{debug:c,shouldInjectPolyfill:p,method:f}=e,d=(0,s.default)(e.targets,f,n.default),h="usage-pure"===f?"core-js/library/fn":"core-js/modules";function m(e,t){"string"!=typeof e?e.forEach(e=>m(e,t)):p(e)&&(c(e),t.injectGlobalImport(`${h}/${e}.js`))}function y(e,t){u(d,e)&&m(e,t)}return{name:"corejs2",polyfills:d,entryGlobal(e,t,n){"import"===e.kind&&"core-js"===e.source&&(c(null),m(Object.keys(d),t),r&&t.injectGlobalImport("regenerator-runtime/runtime.js"),n.remove())},usageGlobal(e,t){const r=a(e);if(!r)return;let n=r.desc.global;if("global"!==r.kind&&e.object&&"prototype"===e.placement){const t=e.object.toLowerCase();n=n.filter(e=>e.includes(t))}m(n,t)},usagePure(e,r,n){if("in"===e.kind)return void("Symbol.iterator"===e.key&&n.replaceWith(l.types.callExpression(r.injectDefaultImport(`${h}/is-iterable.js`,"isIterable"),[n.node.right])));if("property"===e.kind){if(!n.isMemberExpression())return;if(!n.isReferenced())return;if("Symbol.iterator"===e.key&&p("es6.symbol")&&n.parentPath.isCallExpression({callee:n.node})&&0===n.parent.arguments.length)return n.parentPath.replaceWith(l.types.callExpression(r.injectDefaultImport(`${h}/get-iterator.js`,"getIterator"),[n.node.object])),void n.skip()}const i=a(e);if(!i)return;const s=function(e,r,n){const{pure:i,meta:s,name:a}=e;if(i&&(0,o.hasMinVersion)(s&&s.minRuntimeVersion,t)&&p(a))return n.injectDefaultImport(`${h}/${i}.js`,r)}(i.desc,i.name,r);s&&n.replaceWith(s)},visitor:"usage-global"===f&&{YieldExpression(t){t.node.delegate&&y("web.dom.iterable",e.getUtils(t))},"ForOfStatement|ArrayPattern"(t){i.CommonIterators.forEach(r=>y(r,e.getUtils(t)))}}}});r.default=p},{"./add-platform-specific-polyfills":14,"./built-in-definitions":15,"./helpers":16,"@babel/compat-data/corejs2-built-ins":19,"@babel/core":43,"@babel/helper-define-polyfill-provider":91}],18:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.codeFrameColumns=a,r.default=function(e,r,n,i={}){if(!s){s=!0;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";if(t.emitWarning)t.emitWarning(e,"DeprecationWarning");else{const t=new Error(e);t.name="DeprecationWarning",console.warn(new Error(e))}}return n=Math.max(n,0),a(e,{start:{column:n,line:r}},i)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/highlight"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}let s=!1;const o=/\r\n|[\n\r\u2028\u2029]/;function a(e,t,r={}){const i=(r.highlightCode||r.forceColor)&&(0,n.shouldHighlight)(r),s=(0,n.getChalk)(r),a=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(s),l=(e,t)=>i?e(t):t,c=e.split(o),{start:u,end:p,markerLines:f}=function(e,t,r){const n=Object.assign({column:0,line:-1},e.start),i=Object.assign({},n,e.end),{linesAbove:s=2,linesBelow:o=3}=r||{},a=n.line,l=n.column,c=i.line,u=i.column;let p=Math.max(a-(s+1),0),f=Math.min(t.length,c+o);-1===a&&(p=0),-1===c&&(f=t.length);const d=c-a,h={};if(d)for(let e=0;e<=d;e++){const r=e+a;if(l)if(0===e){const e=t[r-1].length;h[r]=[l,e-l+1]}else if(e===d)h[r]=[0,u];else{const n=t[r-e].length;h[r]=[0,n]}else h[r]=!0}else h[a]=l===u?!l||[l,0]:[l,u-l];return{start:p,end:f,markerLines:h}}(t,c,r),d=t.start&&"number"==typeof t.start.column,h=String(p).length;let m=(i?(0,n.default)(e,r):e).split(o).slice(u,p).map((e,t)=>{const n=u+1+t,i=` ${` ${n}`.slice(-h)} | `,s=f[n],o=!f[n+1];if(s){let t="";if(Array.isArray(s)){const n=e.slice(0,Math.max(s[0]-1,0)).replace(/[^\t]/g," "),c=s[1]||1;t=["\n ",l(a.gutter,i.replace(/\d/g," ")),n,l(a.marker,"^").repeat(c)].join(""),o&&r.message&&(t+=" "+l(a.message,r.message))}return[l(a.marker,">"),l(a.gutter,i),e,t].join("")}return` ${l(a.gutter,i)}${e}`}).join("\n");return r.message&&!d&&(m=`${" ".repeat(h+1)}${r.message}\n${m}`),i?s.reset(m):m}}).call(this,e("_process"))},{"@babel/highlight":120,_process:13}],19:[function(e,t,r){t.exports=e("./data/corejs2-built-ins.json")},{"./data/corejs2-built-ins.json":20}],20:[function(e,t,r){t.exports={"es6.array.copy-within":{chrome:"45",opera:"32",edge:"12",firefox:"32",safari:"9",node:"4",ios:"9",samsung:"5",electron:"0.32"},"es6.array.every":{chrome:"5",opera:"10.10",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.fill":{chrome:"45",opera:"32",edge:"12",firefox:"31",safari:"7.1",node:"4",ios:"8",samsung:"5",electron:"0.32"},"es6.array.filter":{chrome:"5",opera:"10.10",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.find":{chrome:"45",opera:"32",edge:"12",firefox:"25",safari:"7.1",node:"4",ios:"8",samsung:"5",electron:"0.32"},"es6.array.find-index":{chrome:"45",opera:"32",edge:"12",firefox:"25",safari:"7.1",node:"4",ios:"8",samsung:"5",electron:"0.32"},"es7.array.flat-map":{chrome:"69",opera:"56",edge:"79",firefox:"62",safari:"12",node:"11",ios:"12",samsung:"10",electron:"4"},"es6.array.for-each":{chrome:"5",opera:"10.10",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.from":{chrome:"51",opera:"38",edge:"15",firefox:"36",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es7.array.includes":{chrome:"47",opera:"34",edge:"14",firefox:"43",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.36"},"es6.array.index-of":{chrome:"5",opera:"10.10",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.is-array":{chrome:"5",opera:"10.50",edge:"12",firefox:"4",safari:"4",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.iterator":{chrome:"38",opera:"25",edge:"12",firefox:"28",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.array.last-index-of":{chrome:"5",opera:"10.10",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.map":{chrome:"5",opera:"10.10",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.of":{chrome:"45",opera:"32",edge:"12",firefox:"25",safari:"9",node:"4",ios:"9",samsung:"5",electron:"0.32"},"es6.array.reduce":{chrome:"5",opera:"10.50",edge:"12",firefox:"3",safari:"4",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.reduce-right":{chrome:"5",opera:"10.50",edge:"12",firefox:"3",safari:"4",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.some":{chrome:"5",opera:"10.10",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.array.sort":{chrome:"63",opera:"50",edge:"12",firefox:"5",safari:"12",node:"10",ie:"9",ios:"12",samsung:"8",electron:"3"},"es6.array.species":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.date.now":{chrome:"5",opera:"10.50",edge:"12",firefox:"2",safari:"4",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.date.to-iso-string":{chrome:"5",opera:"10.50",edge:"12",firefox:"3.5",safari:"4",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.date.to-json":{chrome:"5",opera:"12.10",edge:"12",firefox:"4",safari:"10",node:"0.10",ie:"9",android:"4",ios:"10",samsung:"1",electron:"0.20"},"es6.date.to-primitive":{chrome:"47",opera:"34",edge:"15",firefox:"44",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.36"},"es6.date.to-string":{chrome:"5",opera:"10.50",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"10",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.function.bind":{chrome:"7",opera:"12",edge:"12",firefox:"4",safari:"5.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.function.has-instance":{chrome:"51",opera:"38",edge:"15",firefox:"50",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.function.name":{chrome:"5",opera:"10.50",edge:"14",firefox:"2",safari:"4",node:"0.10",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.map":{chrome:"51",opera:"38",edge:"15",firefox:"53",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.math.acosh":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.asinh":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.atanh":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.cbrt":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.clz32":{chrome:"38",opera:"25",edge:"12",firefox:"31",safari:"9",node:"0.12",ios:"9",samsung:"3",electron:"0.20"},"es6.math.cosh":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.expm1":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.fround":{chrome:"38",opera:"25",edge:"12",firefox:"26",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.hypot":{chrome:"38",opera:"25",edge:"12",firefox:"27",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.imul":{chrome:"30",opera:"17",edge:"12",firefox:"23",safari:"7",node:"0.12",android:"4.4",ios:"7",samsung:"2",electron:"0.20"},"es6.math.log1p":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.log10":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.log2":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.sign":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"9",node:"0.12",ios:"9",samsung:"3",electron:"0.20"},"es6.math.sinh":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.tanh":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.math.trunc":{chrome:"38",opera:"25",edge:"12",firefox:"25",safari:"7.1",node:"0.12",ios:"8",samsung:"3",electron:"0.20"},"es6.number.constructor":{chrome:"41",opera:"28",edge:"12",firefox:"36",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.22"},"es6.number.epsilon":{chrome:"34",opera:"21",edge:"12",firefox:"25",safari:"9",node:"0.12",ios:"9",samsung:"2",electron:"0.20"},"es6.number.is-finite":{chrome:"19",opera:"15",edge:"12",firefox:"16",safari:"9",node:"0.12",android:"4.1",ios:"9",samsung:"1.5",electron:"0.20"},"es6.number.is-integer":{chrome:"34",opera:"21",edge:"12",firefox:"16",safari:"9",node:"0.12",ios:"9",samsung:"2",electron:"0.20"},"es6.number.is-nan":{chrome:"19",opera:"15",edge:"12",firefox:"15",safari:"9",node:"0.12",android:"4.1",ios:"9",samsung:"1.5",electron:"0.20"},"es6.number.is-safe-integer":{chrome:"34",opera:"21",edge:"12",firefox:"32",safari:"9",node:"0.12",ios:"9",samsung:"2",electron:"0.20"},"es6.number.max-safe-integer":{chrome:"34",opera:"21",edge:"12",firefox:"31",safari:"9",node:"0.12",ios:"9",samsung:"2",electron:"0.20"},"es6.number.min-safe-integer":{chrome:"34",opera:"21",edge:"12",firefox:"31",safari:"9",node:"0.12",ios:"9",samsung:"2",electron:"0.20"},"es6.number.parse-float":{chrome:"34",opera:"21",edge:"12",firefox:"25",safari:"9",node:"0.12",ios:"9",samsung:"2",electron:"0.20"},"es6.number.parse-int":{chrome:"34",opera:"21",edge:"12",firefox:"25",safari:"9",node:"0.12",ios:"9",samsung:"2",electron:"0.20"},"es6.object.assign":{chrome:"49",opera:"36",edge:"13",firefox:"36",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.object.create":{chrome:"5",opera:"12",edge:"12",firefox:"4",safari:"4",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es7.object.define-getter":{chrome:"62",opera:"49",edge:"16",firefox:"48",safari:"9",node:"8.10",ios:"9",samsung:"8",electron:"3"},"es7.object.define-setter":{chrome:"62",opera:"49",edge:"16",firefox:"48",safari:"9",node:"8.10",ios:"9",samsung:"8",electron:"3"},"es6.object.define-property":{chrome:"5",opera:"12",edge:"12",firefox:"4",safari:"5.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.object.define-properties":{chrome:"5",opera:"12",edge:"12",firefox:"4",safari:"4",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es7.object.entries":{chrome:"54",opera:"41",edge:"14",firefox:"47",safari:"10.1",node:"7",ios:"10.3",samsung:"6",electron:"1.5"},"es6.object.freeze":{chrome:"44",opera:"31",edge:"12",firefox:"35",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"es6.object.get-own-property-descriptor":{chrome:"44",opera:"31",edge:"12",firefox:"35",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"es7.object.get-own-property-descriptors":{chrome:"54",opera:"41",edge:"15",firefox:"50",safari:"10.1",node:"7",ios:"10.3",samsung:"6",electron:"1.5"},"es6.object.get-own-property-names":{chrome:"40",opera:"27",edge:"12",firefox:"33",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.21"},"es6.object.get-prototype-of":{chrome:"44",opera:"31",edge:"12",firefox:"35",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"es7.object.lookup-getter":{chrome:"62",opera:"49",edge:"79",firefox:"36",safari:"9",node:"8.10",ios:"9",samsung:"8",electron:"3"},"es7.object.lookup-setter":{chrome:"62",opera:"49",edge:"79",firefox:"36",safari:"9",node:"8.10",ios:"9",samsung:"8",electron:"3"},"es6.object.prevent-extensions":{chrome:"44",opera:"31",edge:"12",firefox:"35",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"es6.object.to-string":{chrome:"57",opera:"44",edge:"15",firefox:"51",safari:"10",node:"8",ios:"10",samsung:"7",electron:"1.7"},"es6.object.is":{chrome:"19",opera:"15",edge:"12",firefox:"22",safari:"9",node:"0.12",android:"4.1",ios:"9",samsung:"1.5",electron:"0.20"},"es6.object.is-frozen":{chrome:"44",opera:"31",edge:"12",firefox:"35",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"es6.object.is-sealed":{chrome:"44",opera:"31",edge:"12",firefox:"35",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"es6.object.is-extensible":{chrome:"44",opera:"31",edge:"12",firefox:"35",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"es6.object.keys":{chrome:"40",opera:"27",edge:"12",firefox:"35",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.21"},"es6.object.seal":{chrome:"44",opera:"31",edge:"12",firefox:"35",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"es6.object.set-prototype-of":{chrome:"34",opera:"21",edge:"12",firefox:"31",safari:"9",node:"0.12",ie:"11",ios:"9",samsung:"2",electron:"0.20"},"es7.object.values":{chrome:"54",opera:"41",edge:"14",firefox:"47",safari:"10.1",node:"7",ios:"10.3",samsung:"6",electron:"1.5"},"es6.promise":{chrome:"51",opera:"38",edge:"14",firefox:"45",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es7.promise.finally":{chrome:"63",opera:"50",edge:"18",firefox:"58",safari:"11.1",node:"10",ios:"11.3",samsung:"8",electron:"3"},"es6.reflect.apply":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.construct":{chrome:"49",opera:"36",edge:"13",firefox:"49",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.define-property":{chrome:"49",opera:"36",edge:"13",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.delete-property":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.get":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.get-own-property-descriptor":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.get-prototype-of":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.has":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.is-extensible":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.own-keys":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.prevent-extensions":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.set":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.reflect.set-prototype-of":{chrome:"49",opera:"36",edge:"12",firefox:"42",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"es6.regexp.constructor":{chrome:"50",opera:"37",edge:"79",firefox:"40",safari:"10",node:"6",ios:"10",samsung:"5",electron:"1.1"},"es6.regexp.flags":{chrome:"49",opera:"36",edge:"79",firefox:"37",safari:"9",node:"6",ios:"9",samsung:"5",electron:"0.37"},"es6.regexp.match":{chrome:"50",opera:"37",edge:"79",firefox:"49",safari:"10",node:"6",ios:"10",samsung:"5",electron:"1.1"},"es6.regexp.replace":{chrome:"50",opera:"37",edge:"79",firefox:"49",safari:"10",node:"6",ios:"10",samsung:"5",electron:"1.1"},"es6.regexp.split":{chrome:"50",opera:"37",edge:"79",firefox:"49",safari:"10",node:"6",ios:"10",samsung:"5",electron:"1.1"},"es6.regexp.search":{chrome:"50",opera:"37",edge:"79",firefox:"49",safari:"10",node:"6",ios:"10",samsung:"5",electron:"1.1"},"es6.regexp.to-string":{chrome:"50",opera:"37",edge:"79",firefox:"39",safari:"10",node:"6",ios:"10",samsung:"5",electron:"1.1"},"es6.set":{chrome:"51",opera:"38",edge:"15",firefox:"53",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.symbol":{chrome:"51",opera:"38",edge:"79",firefox:"51",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es7.symbol.async-iterator":{chrome:"63",opera:"50",edge:"79",firefox:"57",safari:"12",node:"10",ios:"12",samsung:"8",electron:"3"},"es6.string.anchor":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.big":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.blink":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.bold":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.code-point-at":{chrome:"41",opera:"28",edge:"12",firefox:"29",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.22"},"es6.string.ends-with":{chrome:"41",opera:"28",edge:"12",firefox:"29",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.22"},"es6.string.fixed":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.fontcolor":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.fontsize":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.from-code-point":{chrome:"41",opera:"28",edge:"12",firefox:"29",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.22"},"es6.string.includes":{chrome:"41",opera:"28",edge:"12",firefox:"40",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.22"},"es6.string.italics":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.iterator":{chrome:"38",opera:"25",edge:"12",firefox:"36",safari:"9",node:"0.12",ios:"9",samsung:"3",electron:"0.20"},"es6.string.link":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es7.string.pad-start":{chrome:"57",opera:"44",edge:"15",firefox:"48",safari:"10",node:"8",ios:"10",samsung:"7",electron:"1.7"},"es7.string.pad-end":{chrome:"57",opera:"44",edge:"15",firefox:"48",safari:"10",node:"8",ios:"10",samsung:"7",electron:"1.7"},"es6.string.raw":{chrome:"41",opera:"28",edge:"12",firefox:"34",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.22"},"es6.string.repeat":{chrome:"41",opera:"28",edge:"12",firefox:"24",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.22"},"es6.string.small":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.starts-with":{chrome:"41",opera:"28",edge:"12",firefox:"29",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.22"},"es6.string.strike":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.sub":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.sup":{chrome:"5",opera:"15",edge:"12",firefox:"17",safari:"6",node:"0.10",android:"4",ios:"7",phantom:"2",samsung:"1",electron:"0.20"},"es6.string.trim":{chrome:"5",opera:"10.50",edge:"12",firefox:"3.5",safari:"4",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es7.string.trim-left":{chrome:"66",opera:"53",edge:"79",firefox:"61",safari:"12",node:"10",ios:"12",samsung:"9",electron:"3"},"es7.string.trim-right":{chrome:"66",opera:"53",edge:"79",firefox:"61",safari:"12",node:"10",ios:"12",samsung:"9",electron:"3"},"es6.typed.array-buffer":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.typed.data-view":{chrome:"5",opera:"12",edge:"12",firefox:"15",safari:"5.1",node:"0.10",ie:"10",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"es6.typed.int8-array":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.typed.uint8-array":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.typed.uint8-clamped-array":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.typed.int16-array":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.typed.uint16-array":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.typed.int32-array":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.typed.uint32-array":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.typed.float32-array":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.typed.float64-array":{chrome:"51",opera:"38",edge:"13",firefox:"48",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"es6.weak-map":{chrome:"51",opera:"38",edge:"15",firefox:"53",safari:"9",node:"6.5",ios:"9",samsung:"5",electron:"1.2"},"es6.weak-set":{chrome:"51",opera:"38",edge:"15",firefox:"53",safari:"9",node:"6.5",ios:"9",samsung:"5",electron:"1.2"}}},{}],21:[function(e,t,r){t.exports={"es6.module":{edge:"16",firefox:"60",chrome:"61",safari:"10.1",opera:"48",ios_saf:"10.3",android:"61",op_mob:"48",and_chr:"61",and_ff:"60",samsung:"8.2"}}},{}],22:[function(e,t,r){t.exports={"proposal-numeric-separator":{chrome:"75",opera:"62",edge:"79",firefox:"70",safari:"13",node:"12.5",ios:"13",samsung:"11",electron:"6"},"proposal-class-properties":{chrome:"74",opera:"61",edge:"79",node:"12",samsung:"11",electron:"6"},"proposal-private-methods":{chrome:"84"},"proposal-nullish-coalescing-operator":{chrome:"80",opera:"67",edge:"80",firefox:"72",safari:"13.1",node:"14",electron:"8.1"},"proposal-optional-chaining":{chrome:"80",opera:"67",edge:"80",firefox:"74",safari:"13.1",node:"14",electron:"8.1"},"proposal-json-strings":{chrome:"66",opera:"53",edge:"79",firefox:"62",safari:"12",node:"10",ios:"12",samsung:"9",electron:"3"},"proposal-optional-catch-binding":{chrome:"66",opera:"53",edge:"79",firefox:"58",safari:"11.1",node:"10",ios:"11.3",samsung:"9",electron:"3"},"transform-parameters":{chrome:"49",opera:"36",edge:"18",firefox:"53",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"proposal-async-generator-functions":{chrome:"63",opera:"50",edge:"79",firefox:"57",safari:"12",node:"10",ios:"12",samsung:"8",electron:"3"},"proposal-object-rest-spread":{chrome:"60",opera:"47",edge:"79",firefox:"55",safari:"11.1",node:"8.3",ios:"11.3",samsung:"8",electron:"2"},"transform-dotall-regex":{chrome:"62",opera:"49",edge:"79",firefox:"78",safari:"11.1",node:"8.10",ios:"11.3",samsung:"8",electron:"3"},"proposal-unicode-property-regex":{chrome:"64",opera:"51",edge:"79",firefox:"78",safari:"11.1",node:"10",ios:"11.3",samsung:"9",electron:"3"},"transform-named-capturing-groups-regex":{chrome:"64",opera:"51",edge:"79",safari:"11.1",node:"10",ios:"11.3",samsung:"9",electron:"3"},"transform-async-to-generator":{chrome:"55",opera:"42",edge:"15",firefox:"52",safari:"11",node:"7.6",ios:"11",samsung:"6",electron:"1.6"},"transform-exponentiation-operator":{chrome:"52",opera:"39",edge:"14",firefox:"52",safari:"10.1",node:"7",ios:"10.3",samsung:"6",electron:"1.3"},"transform-template-literals":{chrome:"41",opera:"28",edge:"13",firefox:"34",safari:"13",node:"4",ios:"13",samsung:"3.4",electron:"0.22"},"transform-literals":{chrome:"44",opera:"31",edge:"12",firefox:"53",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"transform-function-name":{chrome:"51",opera:"38",edge:"79",firefox:"53",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"transform-arrow-functions":{chrome:"47",opera:"34",edge:"13",firefox:"45",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.36"},"transform-block-scoped-functions":{chrome:"41",opera:"28",edge:"12",firefox:"46",safari:"10",node:"4",ie:"11",ios:"10",samsung:"3.4",electron:"0.22"},"transform-classes":{chrome:"46",opera:"33",edge:"13",firefox:"45",safari:"10",node:"5",ios:"10",samsung:"5",electron:"0.36"},"transform-object-super":{chrome:"46",opera:"33",edge:"13",firefox:"45",safari:"10",node:"5",ios:"10",samsung:"5",electron:"0.36"},"transform-shorthand-properties":{chrome:"43",opera:"30",edge:"12",firefox:"33",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.28"},"transform-duplicate-keys":{chrome:"42",opera:"29",edge:"12",firefox:"34",safari:"9",node:"4",ios:"9",samsung:"3.4",electron:"0.25"},"transform-computed-properties":{chrome:"44",opera:"31",edge:"12",firefox:"34",safari:"7.1",node:"4",ios:"8",samsung:"4",electron:"0.30"},"transform-for-of":{chrome:"51",opera:"38",edge:"15",firefox:"53",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"transform-sticky-regex":{chrome:"49",opera:"36",edge:"13",firefox:"3",safari:"10",node:"6",ios:"10",samsung:"5",electron:"0.37"},"transform-unicode-escapes":{chrome:"44",opera:"31",edge:"12",firefox:"53",safari:"9",node:"4",ios:"9",samsung:"4",electron:"0.30"},"transform-unicode-regex":{chrome:"50",opera:"37",edge:"13",firefox:"46",safari:"12",node:"6",ios:"12",samsung:"5",electron:"1.1"},"transform-spread":{chrome:"46",opera:"33",edge:"13",firefox:"36",safari:"10",node:"5",ios:"10",samsung:"5",electron:"0.36"},"transform-destructuring":{chrome:"51",opera:"38",edge:"15",firefox:"53",safari:"10",node:"6.5",ios:"10",samsung:"5",electron:"1.2"},"transform-block-scoping":{chrome:"49",opera:"36",edge:"14",firefox:"51",safari:"11",node:"6",ios:"11",samsung:"5",electron:"0.37"},"transform-typeof-symbol":{chrome:"38",opera:"25",edge:"12",firefox:"36",safari:"9",node:"0.12",ios:"9",samsung:"3",electron:"0.20"},"transform-new-target":{chrome:"46",opera:"33",edge:"14",firefox:"41",safari:"10",node:"5",ios:"10",samsung:"5",electron:"0.36"},"transform-regenerator":{chrome:"50",opera:"37",edge:"13",firefox:"53",safari:"10",node:"6",ios:"10",samsung:"5",electron:"1.1"},"transform-member-expression-literals":{chrome:"7",opera:"12",edge:"12",firefox:"2",safari:"5.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"transform-property-literals":{chrome:"7",opera:"12",edge:"12",firefox:"2",safari:"5.1",node:"0.10",ie:"9",android:"4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"},"transform-reserved-words":{chrome:"13",opera:"10.50",edge:"12",firefox:"2",safari:"3.1",node:"0.10",ie:"9",android:"4.4",ios:"6",phantom:"2",samsung:"1",electron:"0.20"}}},{}],23:[function(e,t,r){t.exports=e("./data/native-modules.json")},{"./data/native-modules.json":21}],24:[function(e,t,r){t.exports=e("./data/plugins.json")},{"./data/plugins.json":22}],25:[function(e,t,r){"use strict";function n(){const t=(r=e("gensync"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.makeWeakCache=l,r.makeWeakCacheSync=function(e){return o(l(e))},r.makeStrongCache=c,r.makeStrongCacheSync=function(e){return o(c(e))},r.assertSimpleType=h;var i=e("../gensync-utils/async"),s=e("./util");const o=e=>(0,n().default)(e).sync;function*a(e){return!0}function l(e){return u(WeakMap,e)}function c(e){return u(Map,e)}function u(e,t){const r=new e,n=new e,o=new e;return function*(e,a){const l=yield*(0,i.isAsync)(),c=l?n:r,u=yield*function*(e,t,r,n,s){const o=yield*p(t,n,s);if(o.valid)return o;if(e){const e=yield*p(r,n,s);if(e.valid){const t=yield*(0,i.waitFor)(e.value.promise);return{valid:!0,value:t}}}return{valid:!1,value:null}}(l,c,o,e,a);if(u.valid)return u.value;const h=new d(a),y=t(e,h);let g,b;if((0,s.isIterableIterator)(y)){const t=y;b=yield*(0,i.onFirstPause)(t,()=>{g=function(e,t,r){const n=new m;return f(t,e,r,n),n}(h,o,e)})}else b=y;return f(c,h,e,b),g&&(o.delete(e),g.release(b)),b}}function*p(e,t,r){const n=e.get(t);if(n)for(const{value:e,valid:t}of n)if(yield*t(r))return{valid:!0,value:e};return{valid:!1,value:null}}function f(e,t,r,n){t.configured()||t.forever();let i=e.get(r);switch(t.deactivate(),t.mode()){case"forever":i=[{value:n,valid:a}],e.set(r,i);break;case"invalidate":i=[{value:n,valid:t.validator()}],e.set(r,i);break;case"valid":i?i.push({value:n,valid:t.validator()}):(i=[{value:n,valid:t.validator()}],e.set(r,i))}}class d{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=e}simple(){return function(e){function t(t){if("boolean"!=typeof t)return e.using(()=>h(t()));t?e.forever():e.never()}return t.forever=(()=>e.forever()),t.never=(()=>e.never()),t.using=(t=>e.using(()=>h(t()))),t.invalidate=(t=>e.invalidate(()=>h(t()))),t}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const t=e(this._data),r=(0,i.maybeAsync)(e,"You appear to be using an async cache handler, but Babel has been called synchronously");return(0,i.isThenable)(t)?t.then(e=>(this._pairs.push([e,r]),e)):(this._pairs.push([t,r]),t)}invalidate(e){return this._invalidate=!0,this.using(e)}validator(){const e=this._pairs;return function*(t){for(const[r,n]of e)if(r!==(yield*n(t)))return!1;return!0}}deactivate(){this._active=!1}configured(){return this._configured}}function h(e){if((0,i.isThenable)(e))throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");if(null!=e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}class m{constructor(){this.released=!1,this.promise=new Promise(e=>{this._resolve=e})}release(e){this.released=!0,this._resolve(e)}}},{"../gensync-utils/async":42,"./util":37,gensync:255}],26:[function(e,t,r){"use strict";function n(){const t=u(e("path"));return n=function(){return t},t}function i(){const t=u(e("debug"));return i=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.buildPresetChain=function*(e,t){const r=yield*f(e,t);return r?{plugins:D(r.plugins),presets:D(r.presets),options:r.options.map(e=>M(e))}:null},r.buildRootChain=function*(e,t){const r=yield*E({options:e,dirname:t.cwd},t);if(!r)return null;let i;"string"==typeof e.configFile?i=yield*(0,a.loadConfig)(e.configFile,t.cwd,t.envName,t.caller):!1!==e.configFile&&(i=yield*(0,a.findRootConfig)(t.root,t.envName,t.caller));let{babelrc:s,babelrcRoots:l}=e,c=t.cwd;const u={options:[],presets:[],plugins:[]};if(i){const e=g(i),r=yield*x(e,t);if(!r)return null;void 0===s&&(s=e.options.babelrc),void 0===l&&(c=e.dirname,l=e.options.babelrcRoots),j(u,r)}const p="string"==typeof t.filename?yield*(0,a.findPackageData)(t.filename):null;let f,d;const h={options:[],presets:[],plugins:[]};if((!0===s||void 0===s)&&p&&function(e,t,r,i){if("boolean"==typeof r)return r;const s=e.root;if(void 0===r)return-1!==t.directories.indexOf(s);let a=r;Array.isArray(a)||(a=[a]);if(1===(a=a.map(e=>"string"==typeof e?n().default.resolve(i,e):e)).length&&a[0]===s)return-1!==t.directories.indexOf(s);return a.some(r=>("string"==typeof r&&(r=(0,o.default)(r,i)),t.directories.some(t=>U(r,i,t,e))))}(t,p,l,c)){if(({ignore:f,config:d}=yield*(0,a.findRelativeConfig)(p,t.envName,t.caller)),f&&R(t,f.ignore,null,f.dirname))return null;if(d){const e=yield*x(b(d),t);if(!e)return null;j(h,e)}}const m=j(j(j({options:[],presets:[],plugins:[]},u),h),r);return{plugins:D(m.plugins),presets:D(m.presets),options:m.options.map(e=>M(e)),ignore:f||void 0,babelrc:d||void 0,config:i||void 0}},r.buildPresetChainWalker=void 0;var s=e("./validation/options"),o=u(e("./pattern-to-regex")),a=e("./files"),l=e("./caching"),c=e("./config-descriptors");function u(e){return e&&e.__esModule?e:{default:e}}const p=(0,i().default)("babel:config:config-chain");const f=I({root:e=>d(e),env:(e,t)=>h(e)(t),overrides:(e,t)=>m(e)(t),overridesEnv:(e,t,r)=>y(e)(t)(r)});r.buildPresetChainWalker=f;const d=(0,l.makeWeakCacheSync)(e=>A(e,e.alias,c.createUncachedDescriptors)),h=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>_(e,e.alias,c.createUncachedDescriptors,t))),m=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>O(e,e.alias,c.createUncachedDescriptors,t))),y=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>(0,l.makeStrongCacheSync)(r=>C(e,e.alias,c.createUncachedDescriptors,t,r))));const g=(0,l.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("configfile",e.options)})),b=(0,l.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("babelrcfile",e.options)})),v=(0,l.makeWeakCacheSync)(e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("extendsfile",e.options)})),E=I({root:e=>A(e,"base",c.createCachedDescriptors),env:(e,t)=>_(e,"base",c.createCachedDescriptors,t),overrides:(e,t)=>O(e,"base",c.createCachedDescriptors,t),overridesEnv:(e,t,r)=>C(e,"base",c.createCachedDescriptors,t,r)}),x=I({root:e=>T(e),env:(e,t)=>S(e)(t),overrides:(e,t)=>P(e)(t),overridesEnv:(e,t,r)=>w(e)(t)(r)}),T=(0,l.makeWeakCacheSync)(e=>A(e,e.filepath,c.createUncachedDescriptors)),S=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>_(e,e.filepath,c.createUncachedDescriptors,t))),P=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>O(e,e.filepath,c.createUncachedDescriptors,t))),w=(0,l.makeWeakCacheSync)(e=>(0,l.makeStrongCacheSync)(t=>(0,l.makeStrongCacheSync)(r=>C(e,e.filepath,c.createUncachedDescriptors,t,r))));function A({dirname:e,options:t},r,n){return n(e,t,r)}function _({dirname:e,options:t},r,n,i){const s=t.env&&t.env[i];return s?n(e,s,`${r}.env["${i}"]`):null}function O({dirname:e,options:t},r,n,i){const s=t.overrides&&t.overrides[i];if(!s)throw new Error("Assertion failure - missing override");return n(e,s,`${r}.overrides[${i}]`)}function C({dirname:e,options:t},r,n,i,s){const o=t.overrides&&t.overrides[i];if(!o)throw new Error("Assertion failure - missing override");const a=o.env&&o.env[s];return a?n(e,a,`${r}.overrides[${i}].env["${s}"]`):null}function I({root:e,env:t,overrides:r,overridesEnv:n}){return function*(i,s,o=new Set){const{dirname:a}=i,l=[],c=e(i);if(L(c,a,s)){l.push(c);const e=t(i,s.envName);e&&L(e,a,s)&&l.push(e),(c.options.overrides||[]).forEach((e,t)=>{const o=r(i,t);if(L(o,a,s)){l.push(o);const e=n(i,t,s.envName);e&&L(e,a,s)&&l.push(e)}})}if(l.some(({options:{ignore:e,only:t}})=>R(s,e,t,a)))return null;const u={options:[],presets:[],plugins:[]};for(const e of l){if(!(yield*k(u,e.options,a,s,o)))return null;N(u,e)}return u}}function*k(e,t,r,n,i){if(void 0===t.extends)return!0;const s=yield*(0,a.loadConfig)(t.extends,r,n.envName,n.caller);if(i.has(s))throw new Error(`Configuration cycle detected loading ${s.filepath}.\n`+"File already loaded following the config chain:\n"+Array.from(i,e=>` - ${e.filepath}`).join("\n"));i.add(s);const o=yield*x(v(s),n,i);return i.delete(s),!!o&&(j(e,o),!0)}function j(e,t){return e.options.push(...t.options),e.plugins.push(...t.plugins),e.presets.push(...t.presets),e}function N(e,{options:t,plugins:r,presets:n}){return e.options.push(t),e.plugins.push(...r()),e.presets.push(...n()),e}function M(e){const t=Object.assign({},e);return delete t.extends,delete t.env,delete t.overrides,delete t.plugins,delete t.presets,delete t.passPerPreset,delete t.ignore,delete t.only,delete t.test,delete t.include,delete t.exclude,Object.prototype.hasOwnProperty.call(t,"sourceMap")&&(t.sourceMaps=t.sourceMap,delete t.sourceMap),t}function D(e){const t=new Map,r=[];for(const n of e)if("function"==typeof n.value){const e=n.value;let i=t.get(e);i||(i=new Map,t.set(e,i));let s=i.get(n.name);s?s.value=n:(s={value:n},r.push(s),n.ownPass||i.set(n.name,s))}else r.push({value:n});return r.reduce((e,t)=>(e.push(t.value),e),[])}function L({options:e},t,r){return(void 0===e.test||B(r,e.test,t))&&(void 0===e.include||B(r,e.include,t))&&(void 0===e.exclude||!B(r,e.exclude,t))}function B(e,t,r){return F(e,Array.isArray(t)?t:[t],r)}function R(e,t,r,n){return t&&F(e,t,n)?(p("Ignored %o because it matched one of %O from %o",e.filename,t,n),!0):!(!r||F(e,r,n))&&(p("Ignored %o because it failed to match one of %O from %o",e.filename,r,n),!0)}function F(e,t,r){return t.some(t=>U(t,r,e.filename,e))}function U(e,t,r,n){if("function"==typeof e)return!!e(r,{dirname:t,envName:n.envName,caller:n.caller});if("string"!=typeof r)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"==typeof e&&(e=(0,o.default)(e,t)),e.test(r)}},{"./caching":25,"./config-descriptors":27,"./files":28,"./pattern-to-regex":35,"./validation/options":39,debug:251,path:12}],27:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createCachedDescriptors=function(e,t,r){const{plugins:n,presets:i,passPerPreset:s}=t;return{options:t,plugins:n?()=>c(n,e)(r):()=>[],presets:i?()=>a(i,e)(r)(!!s):()=>[]}},r.createUncachedDescriptors=function(e,t,r){let n,i;return{options:t,plugins:()=>(n||(n=d(t.plugins||[],e,r)),n),presets:()=>(i||(i=f(t.presets||[],e,r,!!t.passPerPreset)),i)}},r.createDescriptor=m;var n=e("./files"),i=e("./item"),s=e("./caching");const o=new WeakMap,a=(0,s.makeWeakCacheSync)((e,t)=>{const r=t.using(e=>e);return(0,s.makeStrongCacheSync)(t=>(0,s.makeStrongCacheSync)(n=>f(e,r,t,n).map(e=>p(o,e))))}),l=new WeakMap,c=(0,s.makeWeakCacheSync)((e,t)=>{const r=t.using(e=>e);return(0,s.makeStrongCacheSync)(t=>d(e,r,t).map(e=>p(l,e)))}),u={};function p(e,t){const{value:r,options:n=u}=t;if(!1===n)return t;let i=e.get(r);i||(i=new WeakMap,e.set(r,i));let s=i.get(n);if(s||(s=[],i.set(n,s)),-1===s.indexOf(t)){const e=s.filter(e=>(function(e,t){return e.name===t.name&&e.value===t.value&&e.options===t.options&&e.dirname===t.dirname&&e.alias===t.alias&&e.ownPass===t.ownPass&&(e.file&&e.file.request)===(t.file&&t.file.request)&&(e.file&&e.file.resolved)===(t.file&&t.file.resolved)})(e,t));if(e.length>0)return e[0];s.push(t)}return t}function f(e,t,r,n){return h("preset",e,t,r,n)}function d(e,t,r){return h("plugin",e,t,r)}function h(e,t,r,n,i){const s=t.map((t,s)=>m(t,r,{type:e,alias:`${n}$${s}`,ownPass:!!i}));return function(e){const t=new Map;for(const r of e){if("function"!=typeof r.value)continue;let n=t.get(r.value);if(n||(n=new Set,t.set(r.value,n)),n.has(r.name)){const t=e.filter(e=>e.value===r.value);throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]","","Duplicates detected are:",`${JSON.stringify(t,null,2)}`].join("\n"))}n.add(r.name)}}(s),s}function m(e,t,{type:r,alias:s,ownPass:o}){const a=(0,i.getItemDescriptor)(e);if(a)return a;let l,c,u=e;Array.isArray(u)&&(3===u.length?[u,c,l]=u:[u,c]=u);let p=void 0,f=null;if("string"==typeof u){if("string"!=typeof r)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===r?n.loadPlugin:n.loadPreset,i=u;({filepath:f,value:u}=e(u,t)),p={request:i,resolved:f}}if(!u)throw new Error(`Unexpected falsy value: ${String(u)}`);if("object"==typeof u&&u.__esModule){if(!u.default)throw new Error("Must export a default export when using ES6 modules.");u=u.default}if("object"!=typeof u&&"function"!=typeof u)throw new Error(`Unsupported format: ${typeof u}. Expected an object or a function.`);if(null!==f&&"object"==typeof u&&u)throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${f}`);return{name:l,alias:f||s,value:u,options:c,dirname:t,ownPass:o,file:p}}},{"./caching":25,"./files":28,"./item":33}],28:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.findConfigUpwards=function*(e){return null},r.findPackageData=function*(e){return{filepath:e,directories:[],pkg:null,isPackage:!1}},r.findRelativeConfig=function*(e,t,r){return{pkg:null,config:null,ignore:null}},r.findRootConfig=function*(e,t,r){return null},r.loadConfig=function*(e,t,r,n){throw new Error(`Cannot load ${e} relative to ${t} in a browser`)},r.resolvePlugin=function(e,t){return null},r.resolvePreset=function(e,t){return null},r.loadPlugin=function(e,t){throw new Error(`Cannot load plugin ${e} relative to ${t} in a browser`)},r.loadPreset=function(e,t){throw new Error(`Cannot load preset ${e} relative to ${t} in a browser`)},r.ROOT_CONFIG_FILENAMES=void 0;r.ROOT_CONFIG_FILENAMES=[]},{}],29:[function(e,t,r){"use strict";function n(){const t=g(e("gensync"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=e("../gensync-utils/async"),s=e("./util"),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("../index")),a=g(e("./plugin")),l=e("./item"),c=e("./config-chain");function u(){const t=g(e("@babel/traverse"));return u=function(){return t},t}var p=e("./caching"),f=e("./validation/options"),d=e("./validation/plugins"),h=g(e("./helpers/config-api")),m=g(e("./partial"));function y(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function g(e){return e&&e.__esModule?e:{default:e}}var b=(0,n().default)(function*(e){const t=yield*(0,m.default)(e);if(!t)return null;const{options:r,context:n}=t,i={},o=[[]];try{const{plugins:e,presets:t}=r;if(!e||!t)throw new Error("Assertion failure - plugins and presets exist");if(yield*function*e(t,r){const a=[];for(let e=0;e<t.plugins.length;e++){const r=t.plugins[e];if(!1!==r.options)try{a.push(yield*E(r,n))}catch(n){throw e>0&&"BABEL_UNKNOWN_PLUGIN_PROPERTY"===n.code&&(0,f.checkNoUnwrappedItemOptionPairs)(t.plugins[e-1],r,"plugin",e,n),n}}const l=[];for(let e=0;e<t.presets.length;e++){const i=t.presets[e];if(!1!==i.options)try{l.push({preset:yield*P(i,n),pass:i.ownPass?[]:r})}catch(r){throw e>0&&"BABEL_UNKNOWN_OPTION"===r.code&&(0,f.checkNoUnwrappedItemOptionPairs)(t.presets[e-1],i,"preset",e,r),r}}if(l.length>0){o.splice(1,0,...l.map(e=>e.pass).filter(e=>e!==r));for(const{preset:t,pass:r}of l){if(!t)return!0;if(yield*e({plugins:t.plugins,presets:t.presets},r))return!0;t.options.forEach(e=>{(0,s.mergeOptions)(i,e)})}}a.length>0&&r.unshift(...a)}({plugins:e.map(e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t}),presets:t.map(e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t})},o[0]))return null}catch(e){throw/^\[BABEL\]/.test(e.message)||(e.message=`[BABEL] ${n.filename||"unknown"}: ${e.message}`),e}const a=i;return(0,s.mergeOptions)(a,r),a.plugins=o[0],a.presets=o.slice(1).filter(e=>e.length>0).map(e=>({plugins:e})),a.passPerPreset=a.presets.length>0,{options:a,passes:o}});r.default=b;const v=(0,p.makeWeakCache)(function*({value:e,options:t,dirname:r,alias:n},i){if(!1===t)throw new Error("Assertion failure");t=t||{};let s=e;if("function"==typeof e){const a=Object.assign({},o,(0,h.default)(i));try{s=e(a,t,r)}catch(e){throw n&&(e.message+=` (While processing: ${JSON.stringify(n)})`),e}}if(!s||"object"!=typeof s)throw new Error("Plugin/Preset did not return an object.");if("function"==typeof s.then)throw yield*[],new Error("You appear to be using an async plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return{value:s,options:t,dirname:r,alias:n}});function*E(e,t){if(e.value instanceof a.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*x(yield*v(e,t),t)}const x=(0,p.makeWeakCache)(function*({value:e,options:t,dirname:r,alias:n},s){const o=(0,d.validatePluginObject)(e),l=Object.assign({},o);if(l.visitor&&(l.visitor=u().default.explode(Object.assign({},l.visitor))),l.inherits){const e={name:void 0,alias:`${n}$inherits`,value:l.inherits,options:t,dirname:r},o=yield*(0,i.forwardAsync)(E,t=>s.invalidate(r=>t(e,r)));l.pre=A(o.pre,l.pre),l.post=A(o.post,l.post),l.manipulateOptions=A(o.manipulateOptions,l.manipulateOptions),l.visitor=u().default.visitors.merge([o.visitor||{},l.visitor||{}])}return new a.default(l,t,n)}),T=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}},S=(e,t,r)=>{if(!t.filename){const{options:t}=e;T(t,r),t.overrides&&t.overrides.forEach(e=>T(e,r))}};function*P(e,t){const r=w(yield*v(e,t));return S(r,t,e),yield*(0,c.buildPresetChain)(r,t)}const w=(0,p.makeWeakCacheSync)(({value:e,dirname:t,alias:r})=>({options:(0,f.validate)("preset",e),alias:r,dirname:t}));function A(e,t){const r=[e,t].filter(Boolean);return r.length<=1?r[0]:function(...e){for(const t of r)t.apply(this,e)}}},{"../gensync-utils/async":42,"../index":43,"./caching":25,"./config-chain":26,"./helpers/config-api":30,"./item":33,"./partial":34,"./plugin":36,"./util":37,"./validation/options":39,"./validation/plugins":40,"@babel/traverse":133,gensync:255}],30:[function(e,t,r){"use strict";function n(){const t=(r=e("semver"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return{version:i.version,cache:e.simple(),env:t=>e.using(e=>void 0===t?e.envName:"function"==typeof t?(0,s.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some(t=>{if("string"!=typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))),async:()=>!1,caller:t=>e.using(e=>(0,s.assertSimpleType)(t(e.caller))),assertVersion:o}};var i=e("../../"),s=e("../caching");function o(e){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");if(n().default.satisfies(i.version,e))return;const t=Error.stackTraceLimit;"number"==typeof t&&t<25&&(Error.stackTraceLimit=25);const r=new Error(`Requires Babel "${e}", but was loaded with "${i.version}". `+'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');throw"number"==typeof t&&(Error.stackTraceLimit=t),Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:i.version,range:e})}},{"../../":43,"../caching":25,semver:59}],31:[function(e,t,r){(function(e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getEnv=function(t="development"){return e.env.BABEL_ENV||e.env.NODE_ENV||t}}).call(this,e("_process"))},{_process:13}],32:[function(e,t,r){"use strict";function n(){const t=o(e("gensync"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i.default}}),r.loadOptionsAsync=r.loadOptionsSync=r.loadOptions=r.loadPartialConfigAsync=r.loadPartialConfigSync=r.loadPartialConfig=void 0;var i=o(e("./full")),s=e("./partial");function o(e){return e&&e.__esModule?e:{default:e}}const a=(0,n().default)(function*(e){var t;const r=yield*(0,i.default)(e);return null!=(t=null==r?void 0:r.options)?t:null}),l=e=>(t,r)=>(void 0===r&&"function"==typeof t&&(r=t,t=void 0),r?e.errback(t,r):e.sync(t)),c=l(s.loadPartialConfig);r.loadPartialConfig=c;const u=s.loadPartialConfig.sync;r.loadPartialConfigSync=u;const p=s.loadPartialConfig.async;r.loadPartialConfigAsync=p;const f=l(a);r.loadOptions=f;const d=a.sync;r.loadOptionsSync=d;const h=a.async;r.loadOptionsAsync=h},{"./full":29,"./partial":34,gensync:255}],33:[function(e,t,r){"use strict";function n(){const t=(r=e("path"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.createItemFromDescriptor=s,r.createConfigItem=function(e,{dirname:t=".",type:r}={}){return s((0,i.createDescriptor)(e,n().default.resolve(t),{type:r,alias:"programmatic item"}))},r.getItemDescriptor=function(e){if(e instanceof o)return e._descriptor;return};var i=e("./config-descriptors");function s(e){return new o(e)}class o{constructor(e){this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(o.prototype)},{"./config-descriptors":27,path:12}],34:[function(e,t,r){"use strict";function n(){const t=f(e("path"));return n=function(){return t},t}function i(){const t=f(e("gensync"));return i=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=d,r.loadPartialConfig=void 0;var s=f(e("./plugin")),o=e("./util"),a=e("./item"),l=e("./config-chain"),c=e("./helpers/environment"),u=e("./validation/options"),p=e("./files");function f(e){return e&&e.__esModule?e:{default:e}}function*d(e){if(null!=e&&("object"!=typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const t=e?(0,u.validate)("arguments",e):{},{envName:r=(0,c.getEnv)(),cwd:i=".",root:s=".",rootMode:f="root",caller:d}=t,h=n().default.resolve(i),m=yield*function*(e,t){switch(t){case"root":return e;case"upward-optional":{const t=yield*(0,p.findConfigUpwards)(e);return null===t?e:t}case"upward":{const t=yield*(0,p.findConfigUpwards)(e);if(null!==t)return t;throw Object.assign(new Error('Babel was run with rootMode:"upward" but a root could not '+`be found when searching upward from "${e}".\n`+"One of the following config files must be in the directory tree: "+`"${p.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value.")}}(n().default.resolve(h,s),f),y={filename:"string"==typeof t.filename?n().default.resolve(i,t.filename):void 0,cwd:h,root:m,envName:r,caller:d},g=yield*(0,l.buildRootChain)(t,y);if(!g)return null;const b={};return g.options.forEach(e=>{(0,o.mergeOptions)(b,e)}),b.babelrc=!1,b.configFile=!1,b.passPerPreset=!1,b.envName=y.envName,b.cwd=y.cwd,b.root=y.root,b.filename="string"==typeof y.filename?y.filename:void 0,b.plugins=g.plugins.map(e=>(0,a.createItemFromDescriptor)(e)),b.presets=g.presets.map(e=>(0,a.createItemFromDescriptor)(e)),{options:b,context:y,ignore:g.ignore,babelrc:g.babelrc,config:g.config}}const h=(0,i().default)(function*(e){const t=yield*d(e);if(!t)return null;const{options:r,babelrc:n,ignore:i,config:o}=t;return(r.plugins||[]).forEach(e=>{if(e.value instanceof s.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")}),new m(r,n?n.filepath:void 0,i?i.filepath:void 0,o?o.filepath:void 0)});r.loadPartialConfig=h;class m{constructor(e,t,r,n){this.options=e,this.babelignore=r,this.babelrc=t,this.config=n,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(m.prototype)},{"./config-chain":26,"./files":28,"./helpers/environment":31,"./item":33,"./plugin":36,"./util":37,"./validation/options":39,gensync:255,path:12}],35:[function(e,t,r){"use strict";function n(){const t=s(e("path"));return n=function(){return t},t}function i(){const t=s(e("lodash/escapeRegExp"));return i=function(){return t},t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const r=n().default.resolve(t,e).split(n().default.sep);return new RegExp(["^",...r.map((e,t)=>{const n=t===r.length-1;return"**"===e?n?f:p:"*"===e?n?u:c:0===e.indexOf("*.")?l+(0,i().default)(e.slice(1))+(n?a:o):(0,i().default)(e)+(n?a:o)})].join(""))};const o=`\\${n().default.sep}`,a=`(?:${o}|$)`,l=`[^${o}]+`,c=`(?:${l}${o})`,u=`(?:${l}${a})`,p=`${c}*?`,f=`${c}*?${u}?`},{"lodash/escapeRegExp":413,path:12}],36:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=class{constructor(e,t,r){this.key=e.name||r,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=t}}},{}],37:[function(e,t,r){"use strict";function n(e,t){for(const r of Object.keys(t)){const n=t[r];void 0!==n&&(e[r]=n)}}Object.defineProperty(r,"__esModule",{value:!0}),r.mergeOptions=function(e,t){for(const r of Object.keys(t))if("parserOpts"===r&&t.parserOpts){const r=t.parserOpts,i=e.parserOpts=e.parserOpts||{};n(i,r)}else if("generatorOpts"===r&&t.generatorOpts){const r=t.generatorOpts,i=e.generatorOpts=e.generatorOpts||{};n(i,r)}else{const n=t[r];void 0!==n&&(e[r]=n)}},r.isIterableIterator=function(e){return!!e&&"function"==typeof e.next&&"function"==typeof e[Symbol.iterator]}},{}],38:[function(e,t,r){"use strict";function n(e){switch(e.type){case"root":return"";case"env":return`${n(e.parent)}.env["${e.name}"]`;case"overrides":return`${n(e.parent)}.overrides[${e.index}]`;case"option":return`${n(e.parent)}.${e.name}`;case"access":return`${n(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error(`Assertion failure: Unknown type ${e.type}`)}}function i(e,t){return{type:"access",name:t,parent:e}}function s(e,t){if(void 0!==t&&("object"!=typeof t||Array.isArray(t)||!t))throw new Error(`${n(e)} must be an object, or undefined`);return t}function o(e,t){if(null!=t&&!Array.isArray(t))throw new Error(`${n(e)} must be an array, or undefined`);return t}function a(e){return"string"==typeof e||"function"==typeof e||e instanceof RegExp}function l(e,t){if(("object"!=typeof t||!t)&&"string"!=typeof t&&"function"!=typeof t)throw new Error(`${n(e)} must be a string, object, function`);return t}Object.defineProperty(r,"__esModule",{value:!0}),r.msg=n,r.access=i,r.assertRootMode=function(e,t){if(void 0!==t&&"root"!==t&&"upward"!==t&&"upward-optional"!==t)throw new Error(`${n(e)} must be a "root", "upward", "upward-optional" or undefined`);return t},r.assertSourceMaps=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"inline"!==t&&"both"!==t)throw new Error(`${n(e)} must be a boolean, "inline", "both", or undefined`);return t},r.assertCompact=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"auto"!==t)throw new Error(`${n(e)} must be a boolean, "auto", or undefined`);return t},r.assertSourceType=function(e,t){if(void 0!==t&&"module"!==t&&"script"!==t&&"unambiguous"!==t)throw new Error(`${n(e)} must be "module", "script", "unambiguous", or undefined`);return t},r.assertCallerMetadata=function(e,t){const r=s(e,t);if(r){if("string"!=typeof r.name)throw new Error(`${n(e)} set but does not contain "name" property string`);for(const t of Object.keys(r)){const s=i(e,t),o=r[t];if(null!=o&&"boolean"!=typeof o&&"string"!=typeof o&&"number"!=typeof o)throw new Error(`${n(s)} must be null, undefined, a boolean, a string, or a number.`)}}return t},r.assertInputSourceMap=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&("object"!=typeof t||!t))throw new Error(`${n(e)} must be a boolean, object, or undefined`);return t},r.assertString=function(e,t){if(void 0!==t&&"string"!=typeof t)throw new Error(`${n(e)} must be a string, or undefined`);return t},r.assertFunction=function(e,t){if(void 0!==t&&"function"!=typeof t)throw new Error(`${n(e)} must be a function, or undefined`);return t},r.assertBoolean=function(e,t){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${n(e)} must be a boolean, or undefined`);return t},r.assertObject=s,r.assertArray=o,r.assertIgnoreList=function(e,t){const r=o(e,t);r&&r.forEach((t,r)=>(function(e,t){if("string"!=typeof t&&"function"!=typeof t&&!(t instanceof RegExp))throw new Error(`${n(e)} must be an array of string/Function/RegExp values, or undefined`);return t})(i(e,r),t));return r},r.assertConfigApplicableTest=function(e,t){if(void 0===t)return t;if(Array.isArray(t))t.forEach((t,r)=>{if(!a(t))throw new Error(`${n(i(e,r))} must be a string/Function/RegExp.`)});else if(!a(t))throw new Error(`${n(e)} must be a string/Function/RegExp, or an array of those`);return t},r.assertConfigFileSearch=function(e,t){if(void 0!==t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error(`${n(e)} must be a undefined, a boolean, a string, `+`got ${JSON.stringify(t)}`);return t},r.assertBabelrcSearch=function(e,t){if(void 0===t||"boolean"==typeof t)return t;if(Array.isArray(t))t.forEach((t,r)=>{if(!a(t))throw new Error(`${n(i(e,r))} must be a string/Function/RegExp.`)});else if(!a(t))throw new Error(`${n(e)} must be a undefined, a boolean, a string/Function/RegExp `+`or an array of those, got ${JSON.stringify(t)}`);return t},r.assertPluginList=function(e,t){const r=o(e,t);r&&r.forEach((t,r)=>(function(e,t){if(Array.isArray(t)){if(0===t.length)throw new Error(`${n(e)} must include an object`);if(t.length>3)throw new Error(`${n(e)} may only be a two-tuple or three-tuple`);if(l(i(e,0),t[0]),t.length>1){const r=t[1];if(void 0!==r&&!1!==r&&("object"!=typeof r||Array.isArray(r)||null===r))throw new Error(`${n(i(e,1))} must be an object, false, or undefined`)}if(3===t.length){const r=t[2];if(void 0!==r&&"string"!=typeof r)throw new Error(`${n(i(e,2))} must be a string, or undefined`)}}else l(e,t);return t})(i(e,r),t));return r}},{}],39:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.validate=function(e,t){return u({type:"root",source:e},t)},r.checkNoUnwrappedItemOptionPairs=function(e,t,r,n,i){e.file&&void 0===e.options&&"object"==typeof t.value&&(i.message+="\n- Maybe you meant to use\n"+`"${r}": [\n  ["${e.file.request}", ${JSON.stringify(t.value,void 0,2)}]\n]\n`+`To be a valid ${r}, its name and options should be wrapped in a pair of brackets`)};s(e("../plugin"));var n=s(e("./removed")),i=e("./option-assertions");function s(e){return e&&e.__esModule?e:{default:e}}const o={cwd:i.assertString,root:i.assertString,rootMode:i.assertRootMode,configFile:i.assertConfigFileSearch,caller:i.assertCallerMetadata,filename:i.assertString,filenameRelative:i.assertString,code:i.assertBoolean,ast:i.assertBoolean,envName:i.assertString},a={babelrc:i.assertBoolean,babelrcRoots:i.assertBabelrcSearch},l={extends:i.assertString,ignore:i.assertIgnoreList,only:i.assertIgnoreList},c={inputSourceMap:i.assertInputSourceMap,presets:i.assertPluginList,plugins:i.assertPluginList,passPerPreset:i.assertBoolean,env:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside of another .env block`);const r=e.parent,n=(0,i.assertObject)(e,t);if(n)for(const t of Object.keys(n)){const s=(0,i.assertObject)((0,i.access)(e,t),n[t]);if(!s)continue;const o={type:"env",name:t,parent:r};u(o,s)}return n},overrides:function(e,t){if("env"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .env block`);if("overrides"===e.parent.type)throw new Error(`${(0,i.msg)(e)} is not allowed inside an .overrides block`);const r=e.parent,n=(0,i.assertArray)(e,t);if(n)for(const[t,s]of n.entries()){const n=(0,i.access)(e,t),o=(0,i.assertObject)(n,s);if(!o)throw new Error(`${(0,i.msg)(n)} must be an object`);const a={type:"overrides",index:t,parent:r};u(a,o)}return n},test:i.assertConfigApplicableTest,include:i.assertConfigApplicableTest,exclude:i.assertConfigApplicableTest,retainLines:i.assertBoolean,comments:i.assertBoolean,shouldPrintComment:i.assertFunction,compact:i.assertCompact,minified:i.assertBoolean,auxiliaryCommentBefore:i.assertString,auxiliaryCommentAfter:i.assertString,sourceType:i.assertSourceType,wrapPluginVisitorMethod:i.assertFunction,highlightCode:i.assertBoolean,sourceMaps:i.assertSourceMaps,sourceMap:i.assertSourceMaps,sourceFileName:i.assertString,sourceRoot:i.assertString,getModuleId:i.assertFunction,moduleRoot:i.assertString,moduleIds:i.assertBoolean,moduleId:i.assertString,parserOpts:i.assertObject,generatorOpts:i.assertObject};function u(e,t){const r=function e(t){return"root"===t.type?t.source:e(t.parent)}(e);return function(e){if(f(e,"sourceMap")&&f(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(t),Object.keys(t).forEach(n=>{const s={type:"option",name:n,parent:e};if("preset"===r&&l[n])throw new Error(`${(0,i.msg)(s)} is not allowed in preset options`);if("arguments"!==r&&o[n])throw new Error(`${(0,i.msg)(s)} is only allowed in root programmatic options`);if("arguments"!==r&&"configfile"!==r&&a[n]){if("babelrcfile"===r||"extendsfile"===r)throw new Error(`${(0,i.msg)(s)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, `+"or babel.config.js/config file options");throw new Error(`${(0,i.msg)(s)} is only allowed in root programmatic options, or babel.config.js/config file options`)}(c[n]||l[n]||a[n]||o[n]||p)(s,t[n])}),t}function p(e){const t=e.name;if(n.default[t]){const{message:r,version:s=5}=n.default[t];throw new Error(`Using removed Babel ${s} option: ${(0,i.msg)(e)} - ${r}`)}{const t=new Error(`Unknown option: ${(0,i.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);throw t.code="BABEL_UNKNOWN_OPTION",t}}function f(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},{"../plugin":36,"./option-assertions":38,"./removed":41}],40:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.validatePluginObject=function(e){const t={type:"root",source:"plugin"};return Object.keys(e).forEach(r=>{const n=i[r];if(!n){const e=new Error(`.${r} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}n({type:"option",name:r,parent:t},e[r])}),e};var n=e("./option-assertions");const i={name:n.assertString,manipulateOptions:n.assertFunction,pre:n.assertFunction,post:n.assertFunction,inherits:n.assertFunction,visitor:function(e,t){const r=(0,n.assertObject)(e,t);if(r&&(Object.keys(r).forEach(e=>(function(e,t){if(t&&"object"==typeof t)Object.keys(t).forEach(t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)});else if("function"!=typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t})(e,r[e])),r.enter||r.exit))throw new Error(`${(0,n.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return r},parserOverride:n.assertFunction,generatorOverride:n.assertFunction}},{"./option-assertions":38}],41:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},{}],42:[function(e,t,r){"use strict";function n(){const t=(r=e("gensync"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.maybeAsync=function(e,t){return(0,n().default)({sync(...r){const n=e.apply(this,r);if(u(n))throw new Error(t);return n},async(...t){return Promise.resolve(e.apply(this,t))}})},r.forwardAsync=function(e,t){const r=(0,n().default)(e);return a(e=>{const n=r[e];return t(n)})},r.isThenable=u,r.waitFor=r.onFirstPause=r.isAsync=void 0;const i=e=>e,s=(0,n().default)(function*(e){return yield*e}),o=(0,n().default)({sync:()=>!1,errback:e=>e(null,!0)});r.isAsync=o;const a=(0,n().default)({sync:e=>e("sync"),async:e=>e("async")});const l=(0,n().default)({name:"onFirstPause",arity:2,sync:function(e){return s.sync(e)},errback:function(e,t,r){let n=!1;s.errback(e,(e,t)=>{n=!0,r(e,t)}),n||t()}});r.onFirstPause=l;const c=(0,n().default)({sync:i,async:i});function u(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}r.waitFor=c},{gensync:255}],43:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(r,"File",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(r,"buildExternalHelpers",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"resolvePlugin",{enumerable:!0,get:function(){return s.resolvePlugin}}),Object.defineProperty(r,"resolvePreset",{enumerable:!0,get:function(){return s.resolvePreset}}),Object.defineProperty(r,"version",{enumerable:!0,get:function(){return o.version}}),Object.defineProperty(r,"getEnv",{enumerable:!0,get:function(){return a.getEnv}}),Object.defineProperty(r,"tokTypes",{enumerable:!0,get:function(){return function(){const t=e("@babel/parser");(function(){return t});return t}().tokTypes}}),Object.defineProperty(r,"traverse",{enumerable:!0,get:function(){return function(){const t=y(e("@babel/traverse"));(function(){return t});return t}().default}}),Object.defineProperty(r,"template",{enumerable:!0,get:function(){return function(){const t=y(e("@babel/template"));(function(){return t});return t}().default}}),Object.defineProperty(r,"createConfigItem",{enumerable:!0,get:function(){return c.createConfigItem}}),Object.defineProperty(r,"loadPartialConfig",{enumerable:!0,get:function(){return u.loadPartialConfig}}),Object.defineProperty(r,"loadPartialConfigSync",{enumerable:!0,get:function(){return u.loadPartialConfigSync}}),Object.defineProperty(r,"loadPartialConfigAsync",{enumerable:!0,get:function(){return u.loadPartialConfigAsync}}),Object.defineProperty(r,"loadOptions",{enumerable:!0,get:function(){return u.loadOptions}}),Object.defineProperty(r,"loadOptionsSync",{enumerable:!0,get:function(){return u.loadOptionsSync}}),Object.defineProperty(r,"loadOptionsAsync",{enumerable:!0,get:function(){return u.loadOptionsAsync}}),Object.defineProperty(r,"transform",{enumerable:!0,get:function(){return p.transform}}),Object.defineProperty(r,"transformSync",{enumerable:!0,get:function(){return p.transformSync}}),Object.defineProperty(r,"transformAsync",{enumerable:!0,get:function(){return p.transformAsync}}),Object.defineProperty(r,"transformFile",{enumerable:!0,get:function(){return f.transformFile}}),Object.defineProperty(r,"transformFileSync",{enumerable:!0,get:function(){return f.transformFileSync}}),Object.defineProperty(r,"transformFileAsync",{enumerable:!0,get:function(){return f.transformFileAsync}}),Object.defineProperty(r,"transformFromAst",{enumerable:!0,get:function(){return d.transformFromAst}}),Object.defineProperty(r,"transformFromAstSync",{enumerable:!0,get:function(){return d.transformFromAstSync}}),Object.defineProperty(r,"transformFromAstAsync",{enumerable:!0,get:function(){return d.transformFromAstAsync}}),Object.defineProperty(r,"parse",{enumerable:!0,get:function(){return h.parse}}),Object.defineProperty(r,"parseSync",{enumerable:!0,get:function(){return h.parseSync}}),Object.defineProperty(r,"parseAsync",{enumerable:!0,get:function(){return h.parseAsync}}),r.types=r.OptionManager=r.DEFAULT_EXTENSIONS=void 0;var n=y(e("./transformation/file/file")),i=y(e("./tools/build-external-helpers")),s=e("./config/files"),o=e("../package.json"),a=e("./config/helpers/environment");function l(){const t=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));return l=function(){return t},t}Object.defineProperty(r,"types",{enumerable:!0,get:function(){return l()}});var c=e("./config/item"),u=e("./config"),p=e("./transform"),f=e("./transform-file"),d=e("./transform-ast"),h=e("./parse");function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function y(e){return e&&e.__esModule?e:{default:e}}const g=Object.freeze([".js",".jsx",".es6",".es",".mjs"]);r.DEFAULT_EXTENSIONS=g;r.OptionManager=class{init(e){return(0,u.loadOptions)(e)}}},{"../package.json":60,"./config":32,"./config/files":28,"./config/helpers/environment":31,"./config/item":33,"./parse":44,"./tools/build-external-helpers":47,"./transform":50,"./transform-ast":48,"./transform-file":49,"./transformation/file/file":52,"@babel/parser":121,"@babel/template":124,"@babel/traverse":133,"@babel/types":198}],44:[function(e,t,r){"use strict";function n(){const t=a(e("gensync"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.parseAsync=r.parseSync=r.parse=void 0;var i=a(e("./config")),s=a(e("./parser")),o=a(e("./transformation/normalize-opts"));function a(e){return e&&e.__esModule?e:{default:e}}const l=(0,n().default)(function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,s.default)(r.passes,(0,o.default)(r),e)});r.parse=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return l.sync(e,t);l.errback(e,t,r)};const c=l.sync;r.parseSync=c;const u=l.async;r.parseAsync=u},{"./config":32,"./parser":45,"./transformation/normalize-opts":57,gensync:255}],45:[function(e,t,r){"use strict";function n(){const t=e("@babel/parser");return n=function(){return t},t}function i(){const t=e("@babel/code-frame");return i=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function*(e,{parserOpts:t,highlightCode:r=!0,filename:s="unknown"},a){try{const l=[];for(const r of e)for(const e of r){const{parserOverride:r}=e;if(r){const e=r(a,t,n().parse);void 0!==e&&l.push(e)}}if(0===l.length)return(0,n().parse)(a,t);if(1===l.length){if(yield*[],"function"==typeof l[0].then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return l[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(e){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===e.code&&(e.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:t,missingPlugin:n}=e;if(t){const l=(0,i().codeFrameColumns)(a,{start:{line:t.line,column:t.column+1}},{highlightCode:r});e.message=n?`${s}: `+(0,o.default)(n[0],t,l):`${s}: ${e.message}\n\n`+l,e.code="BABEL_PARSE_ERROR"}throw e}};var s,o=(s=e("./util/missing-plugin-helper"))&&s.__esModule?s:{default:s}},{"./util/missing-plugin-helper":46,"@babel/code-frame":18,"@babel/parser":121}],46:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){let s=`Support for the experimental syntax '${e}' isn't currently enabled `+`(${t.line}:${t.column+1}):\n\n`+r;const o=n[e];if(o){const{syntax:e,transform:t}=o;if(e){const r=i(e);if(t){const e=i(t),n=t.name.startsWith("@babel/plugin")?"plugins":"presets";s+=`\n\nAdd ${e} to the '${n}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${r} to the 'plugins' section to enable parsing.`}else s+=`\n\nAdd ${r} to the 'plugins' section of your Babel config `+"to enable parsing."}}return s};const n={classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://git.io/JvpRG"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/preset-flow",url:"https://git.io/JfeDn"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/preset-react",url:"https://git.io/JfeDR"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},moduleAttributes:{syntax:{name:"@babel/plugin-syntax-module-attributes",url:"https://git.io/JfK3k"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},privateIn:{syntax:{name:"@babel/plugin-syntax-private-property-in-object",url:"https://git.io/JfK3q"},transform:{name:"@babel/plugin-proposal-private-property-in-object",url:"https://git.io/JfK3O"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://git.io/JvKp3"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/preset-typescript",url:"https://git.io/JfeDz"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}};n.privateIn.syntax=n.privateIn.transform;const i=({name:e,url:t})=>`${e} (${t})`},{}],47:[function(e,t,r){"use strict";function n(){const t=u(e("@babel/helpers"));return n=function(){return t},t}function i(){const t=l(e("@babel/generator"));return i=function(){return t},t}function s(){const t=l(e("@babel/template"));return s=function(){return t},t}function o(){const t=u(e("@babel/types"));return o=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t="global"){let r;const n={global:f,module:d,umd:h,var:m}[t];if(!n)throw new Error(`Unsupported output type ${t}`);r=n(e);return(0,i().default)(r).code};var a=l(e("../transformation/file/file"));function l(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}const p=e=>s().default`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(e);function f(e){const t=o().identifier("babelHelpers"),r=[],n=o().functionExpression(null,[o().identifier("global")],o().blockStatement(r)),i=o().program([o().expressionStatement(o().callExpression(n,[o().conditionalExpression(o().binaryExpression("===",o().unaryExpression("typeof",o().identifier("global")),o().stringLiteral("undefined")),o().identifier("self"),o().identifier("global"))]))]);return r.push(o().variableDeclaration("var",[o().variableDeclarator(t,o().assignmentExpression("=",o().memberExpression(o().identifier("global"),t),o().objectExpression([])))])),y(r,t,e),i}function d(e){const t=[],r=y(t,null,e);return t.unshift(o().exportNamedDeclaration(null,Object.keys(r).map(e=>o().exportSpecifier(o().cloneNode(r[e]),o().identifier(e))))),o().program(t,[],"module")}function h(e){const t=o().identifier("babelHelpers"),r=[];return r.push(o().variableDeclaration("var",[o().variableDeclarator(t,o().identifier("global"))])),y(r,t,e),o().program([p({FACTORY_PARAMETERS:o().identifier("global"),BROWSER_ARGUMENTS:o().assignmentExpression("=",o().memberExpression(o().identifier("root"),t),o().objectExpression([])),COMMON_ARGUMENTS:o().identifier("exports"),AMD_ARGUMENTS:o().arrayExpression([o().stringLiteral("exports")]),FACTORY_BODY:r,UMD_ROOT:o().identifier("this")})])}function m(e){const t=o().identifier("babelHelpers"),r=[];r.push(o().variableDeclaration("var",[o().variableDeclarator(t,o().objectExpression([]))]));const n=o().program(r);return y(r,t,e),r.push(o().expressionStatement(t)),n}function y(e,t,r){const i=e=>t?o().memberExpression(t,o().identifier(e)):o().identifier(`_${e}`),s={};return n().list.forEach(function(t){if(r&&r.indexOf(t)<0)return;const o=s[t]=i(t);n().ensure(t,a.default);const{nodes:l}=n().get(t,i,o);e.push(...l)}),s}},{"../transformation/file/file":52,"@babel/generator":74,"@babel/helpers":119,"@babel/template":124,"@babel/types":198}],48:[function(e,t,r){"use strict";function n(){const t=o(e("gensync"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.transformFromAstAsync=r.transformFromAstSync=r.transformFromAst=void 0;var i=o(e("./config")),s=e("./transformation");function o(e){return e&&e.__esModule?e:{default:e}}const a=(0,n().default)(function*(e,t,r){const n=yield*(0,i.default)(r);if(null===n)return null;if(!e)throw new Error("No AST given");return yield*(0,s.run)(n,t,e)});r.transformFromAst=function(e,t,r,n){if("function"==typeof r&&(n=r,r=void 0),void 0===n)return a.sync(e,t,r);a.errback(e,t,r,n)};const l=a.sync;r.transformFromAstSync=l;const c=a.async;r.transformFromAstAsync=c},{"./config":32,"./transformation":55,gensync:255}],49:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")},r.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},r.transformFile=void 0;r.transformFile=function(e,t,r){"function"==typeof t&&(r=t),r(new Error("Transforming files is not supported in browsers"),null)}},{}],50:[function(e,t,r){"use strict";function n(){const t=o(e("gensync"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.transformAsync=r.transformSync=r.transform=void 0;var i=o(e("./config")),s=e("./transformation");function o(e){return e&&e.__esModule?e:{default:e}}const a=(0,n().default)(function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,s.run)(r,e)});r.transform=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return a.sync(e,t);a.errback(e,t,r)};const l=a.sync;r.transformSync=l;const c=a.async;r.transformAsync=c},{"./config":32,"./transformation":55,gensync:255}],51:[function(e,t,r){"use strict";function n(){const t=s(e("lodash/sortBy"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){if(!o){const e=i.default.sync({babelrc:!1,configFile:!1,plugins:[a]});if(!(o=e?e.passes[0][0]:void 0))throw new Error("Assertion failure")}return o};var i=s(e("../config"));function s(e){return e&&e.__esModule?e:{default:e}}let o;const a={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){let t=!1;for(let r=0;r<e.body.length;r++){const n=e.body[r];if(null!=(null==n?void 0:n._blockHoist)){t=!0;break}}t&&(e.body=(0,n().default)(e.body,function(e){let t=null==e?void 0:e._blockHoist;return null==t&&(t=1),!0===t&&(t=2),-1*t}))}}}}},{"../config":32,"lodash/sortBy":435}],52:[function(e,t,r){"use strict";function n(){const t=u(e("@babel/helpers"));return n=function(){return t},t}function i(){const t=u(e("@babel/traverse"));return i=function(){return t},t}function s(){const t=e("@babel/code-frame");return s=function(){return t},t}function o(){const t=u(e("@babel/types"));return o=function(){return t},t}function a(){const t=e("@babel/helper-module-transforms");return a=function(){return t},t}function l(){const t=(r=e("semver"))&&r.__esModule?r:{default:r};var r;return l=function(){return t},t}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;const p={enter(e,t){const r=e.node.loc;r&&(t.loc=r,e.stop())}};class f{constructor(e,{code:t,ast:r,inputMap:n}){this._map=new Map,this.declarations={},this.path=null,this.ast={},this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=t,this.ast=r,this.inputMap=n,this.path=i().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(o().interpreterDirective(e)):this.path.get("interpreter").remove()}set(e,t){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,a().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,t){let r;try{r=n().minVersion(e)}catch(e){if("BABEL_HELPER_UNKNOWN"!==e.code)throw e;return!1}return"string"!=typeof t||(l().default.valid(t)&&(t=`^${t}`),!l().default.intersects(`<${r}`,t)&&!l().default.intersects(">=8.0.0",t))}addHelper(e){const t=this.declarations[e];if(t)return o().cloneNode(t);const r=this.get("helperGenerator");if(r){const t=r(e);if(t)return t}n().ensure(e,f);const i=this.declarations[e]=this.scope.generateUidIdentifier(e),s={};for(const t of n().getDependencies(e))s[t]=this.addHelper(t);const{nodes:a,globals:l}=n().get(e,e=>s[e],i,Object.keys(this.scope.getAllBindings()));return l.forEach(e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)}),a.forEach(e=>{e._compact=!0}),this.path.unshiftContainer("body",a),this.path.get("body").forEach(e=>{-1!==a.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)}),i}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,t,r=SyntaxError){let n=e&&(e.loc||e._loc);if(!n&&e){const r={loc:null};(0,i().default)(e,p,this.scope,r);let s="This is an error on an internal node. Probably an internal error.";(n=r.loc)&&(s+=" Location has been estimated."),t+=` (${s})`}if(n){const{highlightCode:e=!0}=this.opts;t+="\n"+(0,s().codeFrameColumns)(this.code,{start:{line:n.start.line,column:n.start.column+1},end:n.end&&n.start.line===n.end.line?{line:n.end.line,column:n.end.column+1}:void 0},{highlightCode:e})}return new r(t)}}r.default=f},{"@babel/code-frame":18,"@babel/helper-module-transforms":106,"@babel/helpers":119,"@babel/traverse":133,"@babel/types":198,semver:59}],53:[function(e,t,r){"use strict";function n(){const t=o(e("convert-source-map"));return n=function(){return t},t}function i(){const t=o(e("@babel/generator"));return i=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const{opts:r,ast:o,code:a,inputMap:l}=t,c=[];for(const t of e)for(const e of t){const{generatorOverride:t}=e;if(t){const e=t(o,r.generatorOpts,a,i().default);void 0!==e&&c.push(e)}}let u;if(0===c.length)u=(0,i().default)(o,r.generatorOpts,a);else{if(1!==c.length)throw new Error("More than one plugin attempted to override codegen.");if("function"==typeof(u=c[0]).then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:p,map:f}=u;f&&l&&(f=(0,s.default)(l.toObject(),f));"inline"!==r.sourceMaps&&"both"!==r.sourceMaps||(p+="\n"+n().default.fromObject(f).toComment());"inline"===r.sourceMaps&&(f=null);return{outputCode:p,outputMap:f}};var s=o(e("./merge-map"));function o(e){return e&&e.__esModule?e:{default:e}}},{"./merge-map":54,"@babel/generator":74,"convert-source-map":250}],54:[function(e,t,r){"use strict";function n(){const t=(r=e("source-map"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}function i(e){return`${e.line}/${e.columnStart}`}function s(e){const t=new(n().default.SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),r=new Map,i=new Map;let s=null;return t.computeColumnSpans(),t.eachMapping(e=>{if(null===e.originalLine)return;let n=r.get(e.source);n||(n={path:e.source,content:t.sourceContentFor(e.source,!0)},r.set(e.source,n));let o=i.get(n);o||(o={source:n,mappings:[]},i.set(n,o));const a={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};s&&s.source===n&&s.mapping.line===e.originalLine&&(s.mapping.columnEnd=e.originalColumn),s={source:n,mapping:a},o.mappings.push({original:a,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map(e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1}))})},null,n().default.SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(i.values())}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const r=s(e),o=s(t),a=new(n().default.SourceMapGenerator);for(const{source:e}of r.sources)"string"==typeof e.content&&a.setSourceContent(e.path,e.content);if(1===o.sources.length){const e=o.sources[0],t=new Map;!function(e,t){for(const{source:r,mappings:n}of e.sources)for(const{original:e,generated:i}of n)for(const n of i)t(n,e,r)}(r,(r,n,s)=>{!function(e,t,r){const n=function({mappings:e},{line:t,columnStart:r,columnEnd:n}){return function(e,t){const r=function(e,t){let r=0,n=e.length;for(;r<n;){const i=Math.floor((r+n)/2),s=e[i],o=t(s);if(0===o){r=i;break}o>=0?n=i:r=i+1}let i=r;if(i<e.length){for(;i>=0&&t(e[i])>=0;)i--;return i+1}return i}(e,t),n=[];for(let i=r;i<e.length&&0===t(e[i]);i++)n.push(e[i]);return n}(e,({original:e})=>t>e.line?-1:t<e.line?1:r>=e.columnEnd?-1:n<=e.columnStart?1:0)}(e,t);for(const{generated:e}of n)for(const t of e)r(t)}(e,r,e=>{const r=i(e);t.has(r)||(t.set(r,e),a.addMapping({source:s.path,original:{line:n.line,column:n.columnStart},generated:{line:e.line,column:e.columnStart},name:n.name}))})});for(const e of t.values()){if(e.columnEnd===1/0)continue;const r={line:e.line,columnStart:e.columnEnd},n=i(r);t.has(n)||a.addMapping({generated:{line:r.line,column:r.columnStart}})}}const l=a.toJSON();"string"==typeof r.sourceRoot&&(l.sourceRoot=r.sourceRoot);return l}},{"source-map":467}],55:[function(e,t,r){"use strict";function n(){const t=c(e("@babel/traverse"));return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.run=function*(e,t,r){const c=yield*(0,a.default)(e.passes,(0,o.default)(e),t,r),p=c.opts;try{yield*function*(e,t){for(const r of t){const t=[],o=[],a=[];for(const n of r.concat([(0,s.default)()])){const r=new i.default(e,n.key,n.options);t.push([n,r]),o.push(r),a.push(n.visitor)}for(const[r,n]of t){const t=r.pre;if(t){const r=t.call(n,e);if(yield*[],u(r))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const l=n().default.visitors.merge(a,o,e.opts.wrapPluginVisitorMethod);(0,n().default)(e.ast,l,e.scope);for(const[r,n]of t){const t=r.post;if(t){const r=t.call(n,e);if(yield*[],u(r))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(c,e.passes)}catch(e){var f;throw e.message=`${null!=(f=p.filename)?f:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_TRANSFORM_ERROR"),e}let d,h;try{!1!==p.code&&({outputCode:d,outputMap:h}=(0,l.default)(e.passes,c))}catch(e){var m;throw e.message=`${null!=(m=p.filename)?m:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_GENERATE_ERROR"),e}return{metadata:c.metadata,options:p,ast:!0===p.ast?c.ast:null,code:void 0===d?null:d,map:void 0===h?null:h,sourceType:c.ast.program.sourceType}};var i=c(e("./plugin-pass")),s=c(e("./block-hoist-plugin")),o=c(e("./normalize-opts")),a=c(e("./normalize-file")),l=c(e("./file/generate"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}},{"./block-hoist-plugin":51,"./file/generate":53,"./normalize-file":56,"./normalize-opts":57,"./plugin-pass":58,"@babel/traverse":133}],56:[function(e,t,r){"use strict";function n(){const t=f(e("fs"));return n=function(){return t},t}function i(){const t=f(e("path"));return i=function(){return t},t}function s(){const t=f(e("debug"));return s=function(){return t},t}function o(){const t=f(e("lodash/cloneDeep"));return o=function(){return t},t}function a(){const t=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));return a=function(){return t},t}function l(){const t=f(e("convert-source-map"));return l=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function*(e,t,r,s){if(r=`${r||""}`,s){if("Program"===s.type)s=a().file(s,[],[]);else if("File"!==s.type)throw new Error("AST root must be a Program or File node");s=(0,o().default)(s)}else s=yield*(0,u.default)(e,t,r);let p=null;if(!1!==t.inputSourceMap){if("object"==typeof t.inputSourceMap&&(p=l().default.fromObject(t.inputSourceMap)),!p){const e=b(m,s);if(e)try{p=l().default.fromComment(e)}catch(e){d("discarding unknown inline input sourcemap",e)}}if(!p){const e=b(y,s);if("string"==typeof t.filename&&e)try{const r=y.exec(e),s=n().default.readFileSync(i().default.resolve(i().default.dirname(t.filename),r[1]));s.length>h?d("skip merging input map > 1 MB"):p=l().default.fromJSON(s)}catch(e){d("discarding unknown file input sourcemap",e)}else e&&d("discarding un-loadable file input sourcemap")}}return new c.default(t,{code:r,ast:s,inputMap:p})};var c=f(e("./file/file")),u=f(e("../parser"));function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}const d=(0,s().default)("babel:transform:file"),h=1e6;const m=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,y=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function g(e,t,r){return t&&(t=t.filter(({value:t})=>!e.test(t)||(r=t,!1))),[t,r]}function b(e,t){let r=null;return a().traverseFast(t,t=>{[t.leadingComments,r]=g(e,t.leadingComments,r),[t.innerComments,r]=g(e,t.innerComments,r),[t.trailingComments,r]=g(e,t.trailingComments,r)}),r}},{"../parser":45,"./file/file":52,"@babel/types":198,"convert-source-map":250,debug:251,fs:7,"lodash/cloneDeep":409,path:12}],57:[function(e,t,r){"use strict";function n(){const t=(r=e("path"))&&r.__esModule?r:{default:r};var r;return n=function(){return t},t}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const{filename:t,cwd:r,filenameRelative:i=("string"==typeof t?n().default.relative(r,t):"unknown"),sourceType:s="module",inputSourceMap:o,sourceMaps:a=!!o,moduleRoot:l,sourceRoot:c=l,sourceFileName:u=n().default.basename(i),comments:p=!0,compact:f="auto"}=e.options,d=e.options,h=Object.assign({},d,{parserOpts:Object.assign({sourceType:".mjs"===n().default.extname(i)?"module":s,sourceFileName:t,plugins:[]},d.parserOpts),generatorOpts:Object.assign({filename:t,auxiliaryCommentBefore:d.auxiliaryCommentBefore,auxiliaryCommentAfter:d.auxiliaryCommentAfter,retainLines:d.retainLines,comments:p,shouldPrintComment:d.shouldPrintComment,compact:f,minified:d.minified,sourceMaps:a,sourceRoot:c,sourceFileName:u},d.generatorOpts)});for(const t of e.passes)for(const e of t)e.manipulateOptions&&e.manipulateOptions(h,h.parserOpts);return h}},{path:12}],58:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=class{constructor(e,t,r){this._map=new Map,this.key=t,this.file=e,this.opts=r||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}getModuleName(){return this.file.getModuleName()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}},{}],59:[function(e,t,r){(function(e){var n;r=t.exports=X,n="object"==typeof e&&e.env&&e.env.NODE_DEBUG&&/\bsemver\b/i.test(e.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var i=256,s=Number.MAX_SAFE_INTEGER||9007199254740991,o=r.re=[],a=r.src=[],l=0,c=l++;a[c]="0|[1-9]\\d*";var u=l++;a[u]="[0-9]+";var p=l++;a[p]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var f=l++;a[f]="("+a[c]+")\\.("+a[c]+")\\.("+a[c]+")";var d=l++;a[d]="("+a[u]+")\\.("+a[u]+")\\.("+a[u]+")";var h=l++;a[h]="(?:"+a[c]+"|"+a[p]+")";var m=l++;a[m]="(?:"+a[u]+"|"+a[p]+")";var y=l++;a[y]="(?:-("+a[h]+"(?:\\."+a[h]+")*))";var g=l++;a[g]="(?:-?("+a[m]+"(?:\\."+a[m]+")*))";var b=l++;a[b]="[0-9A-Za-z-]+";var v=l++;a[v]="(?:\\+("+a[b]+"(?:\\."+a[b]+")*))";var E=l++,x="v?"+a[f]+a[y]+"?"+a[v]+"?";a[E]="^"+x+"$";var T="[v=\\s]*"+a[d]+a[g]+"?"+a[v]+"?",S=l++;a[S]="^"+T+"$";var P=l++;a[P]="((?:<|>)?=?)";var w=l++;a[w]=a[u]+"|x|X|\\*";var A=l++;a[A]=a[c]+"|x|X|\\*";var _=l++;a[_]="[v=\\s]*("+a[A]+")(?:\\.("+a[A]+")(?:\\.("+a[A]+")(?:"+a[y]+")?"+a[v]+"?)?)?";var O=l++;a[O]="[v=\\s]*("+a[w]+")(?:\\.("+a[w]+")(?:\\.("+a[w]+")(?:"+a[g]+")?"+a[v]+"?)?)?";var C=l++;a[C]="^"+a[P]+"\\s*"+a[_]+"$";var I=l++;a[I]="^"+a[P]+"\\s*"+a[O]+"$";var k=l++;a[k]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";var j=l++;a[j]="(?:~>?)";var N=l++;a[N]="(\\s*)"+a[j]+"\\s+",o[N]=new RegExp(a[N],"g");var M=l++;a[M]="^"+a[j]+a[_]+"$";var D=l++;a[D]="^"+a[j]+a[O]+"$";var L=l++;a[L]="(?:\\^)";var B=l++;a[B]="(\\s*)"+a[L]+"\\s+",o[B]=new RegExp(a[B],"g");var R=l++;a[R]="^"+a[L]+a[_]+"$";var F=l++;a[F]="^"+a[L]+a[O]+"$";var U=l++;a[U]="^"+a[P]+"\\s*("+T+")$|^$";var V=l++;a[V]="^"+a[P]+"\\s*("+x+")$|^$";var W=l++;a[W]="(\\s*)"+a[P]+"\\s*("+T+"|"+a[_]+")",o[W]=new RegExp(a[W],"g");var K=l++;a[K]="^\\s*("+a[_]+")\\s+-\\s+("+a[_]+")\\s*$";var q=l++;a[q]="^\\s*("+a[O]+")\\s+-\\s+("+a[O]+")\\s*$";var $=l++;a[$]="(<|>)?=?\\s*\\*";for(var G=0;G<35;G++)n(G,a[G]),o[G]||(o[G]=new RegExp(a[G]));function Y(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof X)return e;if("string"!=typeof e)return null;if(e.length>i)return null;if(!(t.loose?o[S]:o[E]).test(e))return null;try{return new X(e,t)}catch(e){return null}}function X(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof X){if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>i)throw new TypeError("version is longer than "+i+" characters");if(!(this instanceof X))return new X(e,t);n("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?o[S]:o[E]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(t>=0&&t<s)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}r.parse=Y,r.valid=function(e,t){var r=Y(e,t);return r?r.version:null},r.clean=function(e,t){var r=Y(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null},r.SemVer=X,X.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},X.prototype.toString=function(){return this.version},X.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof X||(e=new X(e,this.options)),this.compareMain(e)||this.comparePre(e)},X.prototype.compareMain=function(e){return e instanceof X||(e=new X(e,this.options)),H(this.major,e.major)||H(this.minor,e.minor)||H(this.patch,e.patch)},X.prototype.comparePre=function(e){if(e instanceof X||(e=new X(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],i=e.prerelease[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return H(r,i)}while(++t)},X.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)"number"==typeof this.prerelease[r]&&(this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new X(e,r).inc(t,n).version}catch(e){return null}},r.diff=function(e,t){if(ee(e,t))return null;var r=Y(e),n=Y(t),i="";if(r.prerelease.length||n.prerelease.length){i="pre";var s="prerelease"}for(var o in r)if(("major"===o||"minor"===o||"patch"===o)&&r[o]!==n[o])return i+o;return s},r.compareIdentifiers=H;var J=/^[0-9]+$/;function H(e,t){var r=J.test(e),n=J.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1}function z(e,t,r){return new X(e,r).compare(new X(t,r))}function Q(e,t,r){return z(e,t,r)>0}function Z(e,t,r){return z(e,t,r)<0}function ee(e,t,r){return 0===z(e,t,r)}function te(e,t,r){return 0!==z(e,t,r)}function re(e,t,r){return z(e,t,r)>=0}function ne(e,t,r){return z(e,t,r)<=0}function ie(e,t,r,n){switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return ee(e,r,n);case"!=":return te(e,r,n);case">":return Q(e,r,n);case">=":return re(e,r,n);case"<":return Z(e,r,n);case"<=":return ne(e,r,n);default:throw new TypeError("Invalid operator: "+t)}}function se(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof se){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof se))return new se(e,t);n("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===oe?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}r.rcompareIdentifiers=function(e,t){return H(t,e)},r.major=function(e,t){return new X(e,t).major},r.minor=function(e,t){return new X(e,t).minor},r.patch=function(e,t){return new X(e,t).patch},r.compare=z,r.compareLoose=function(e,t){return z(e,t,!0)},r.rcompare=function(e,t,r){return z(t,e,r)},r.sort=function(e,t){return e.sort(function(e,n){return r.compare(e,n,t)})},r.rsort=function(e,t){return e.sort(function(e,n){return r.rcompare(e,n,t)})},r.gt=Q,r.lt=Z,r.eq=ee,r.neq=te,r.gte=re,r.lte=ne,r.cmp=ie,r.Comparator=se;var oe={};function ae(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof ae)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new ae(e.raw,t);if(e instanceof se)return new ae(e.value,t);if(!(this instanceof ae))return new ae(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function le(e){return!e||"x"===e.toLowerCase()||"*"===e}function ce(e,t,r,n,i,s,o,a,l,c,u,p,f){return((t=le(r)?"":le(n)?">="+r+".0.0":le(i)?">="+r+"."+n+".0":">="+t)+" "+(a=le(l)?"":le(c)?"<"+(+l+1)+".0.0":le(u)?"<"+l+"."+(+c+1)+".0":p?"<="+l+"."+c+"."+u+"-"+p:"<="+a)).trim()}function ue(e,t,r){for(var i=0;i<e.length;i++)if(!e[i].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(i=0;i<e.length;i++)if(n(e[i].semver),e[i].semver!==oe&&e[i].semver.prerelease.length>0){var s=e[i].semver;if(s.major===t.major&&s.minor===t.minor&&s.patch===t.patch)return!0}return!1}return!0}function pe(e,t,r){try{t=new ae(t,r)}catch(e){return!1}return t.test(e)}function fe(e,t,r,n){var i,s,o,a,l;switch(e=new X(e,n),t=new ae(t,n),r){case">":i=Q,s=ne,o=Z,a=">",l=">=";break;case"<":i=Z,s=re,o=Q,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(pe(e,t,n))return!1;for(var c=0;c<t.set.length;++c){var u=t.set[c],p=null,f=null;if(u.forEach(function(e){e.semver===oe&&(e=new se(">=0.0.0")),p=p||e,f=f||e,i(e.semver,p.semver,n)?p=e:o(e.semver,f.semver,n)&&(f=e)}),p.operator===a||p.operator===l)return!1;if((!f.operator||f.operator===a)&&s(e,f.semver))return!1;if(f.operator===l&&o(e,f.semver))return!1}return!0}se.prototype.parse=function(e){var t=this.options.loose?o[U]:o[V],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=r[1],"="===this.operator&&(this.operator=""),r[2]?this.semver=new X(r[2],this.options.loose):this.semver=oe},se.prototype.toString=function(){return this.value},se.prototype.test=function(e){return n("Comparator.test",e,this.options.loose),this.semver===oe||("string"==typeof e&&(e=new X(e,this.options)),ie(e,this.operator,this.semver,this.options))},se.prototype.intersects=function(e,t){if(!(e instanceof se))throw new TypeError("a Comparator is required");var r;if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return r=new ae(e.value,t),pe(this.value,r,t);if(""===e.operator)return r=new ae(this.value,t),pe(e.semver,r,t);var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),s=this.semver.version===e.semver.version,o=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=ie(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),l=ie(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||i||s&&o||a||l},r.Range=ae,ae.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},ae.prototype.toString=function(){return this.range},ae.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?o[q]:o[K];e=e.replace(r,ce),n("hyphen replace",e),e=e.replace(o[W],"$1$2$3"),n("comparator trim",e,o[W]),e=(e=(e=e.replace(o[N],"$1~")).replace(o[B],"$1^")).split(/\s+/).join(" ");var i=t?o[U]:o[V],s=e.split(" ").map(function(e){return function(e,t){return n("comp",e,t),e=function(e,t){return e.trim().split(/\s+/).map(function(e){return function(e,t){n("caret",e,t);var r=t.loose?o[F]:o[R];return e.replace(r,function(t,r,i,s,o){var a;return n("caret",e,t,r,i,s,o),le(r)?a="":le(i)?a=">="+r+".0.0 <"+(+r+1)+".0.0":le(s)?a="0"===r?">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":">="+r+"."+i+".0 <"+(+r+1)+".0.0":o?(n("replaceCaret pr",o),a="0"===r?"0"===i?">="+r+"."+i+"."+s+"-"+o+" <"+r+"."+i+"."+(+s+1):">="+r+"."+i+"."+s+"-"+o+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+s+"-"+o+" <"+(+r+1)+".0.0"):(n("no pr"),a="0"===r?"0"===i?">="+r+"."+i+"."+s+" <"+r+"."+i+"."+(+s+1):">="+r+"."+i+"."+s+" <"+r+"."+(+i+1)+".0":">="+r+"."+i+"."+s+" <"+(+r+1)+".0.0"),n("caret return",a),a})}(e,t)}).join(" ")}(e,t),n("caret",e),e=function(e,t){return e.trim().split(/\s+/).map(function(e){return function(e,t){var r=t.loose?o[D]:o[M];return e.replace(r,function(t,r,i,s,o){var a;return n("tilde",e,t,r,i,s,o),le(r)?a="":le(i)?a=">="+r+".0.0 <"+(+r+1)+".0.0":le(s)?a=">="+r+"."+i+".0 <"+r+"."+(+i+1)+".0":o?(n("replaceTilde pr",o),a=">="+r+"."+i+"."+s+"-"+o+" <"+r+"."+(+i+1)+".0"):a=">="+r+"."+i+"."+s+" <"+r+"."+(+i+1)+".0",n("tilde return",a),a})}(e,t)}).join(" ")}(e,t),n("tildes",e),e=function(e,t){return n("replaceXRanges",e,t),e.split(/\s+/).map(function(e){return function(e,t){e=e.trim();var r=t.loose?o[I]:o[C];return e.replace(r,function(t,r,i,s,o,a){n("xRange",e,t,r,i,s,o,a);var l=le(i),c=l||le(s),u=c||le(o),p=u;return"="===r&&p&&(r=""),l?t=">"===r||"<"===r?"<0.0.0":"*":r&&p?(c&&(s=0),o=0,">"===r?(r=">=",c?(i=+i+1,s=0,o=0):(s=+s+1,o=0)):"<="===r&&(r="<",c?i=+i+1:s=+s+1),t=r+i+"."+s+"."+o):c?t=">="+i+".0.0 <"+(+i+1)+".0.0":u&&(t=">="+i+"."+s+".0 <"+i+"."+(+s+1)+".0"),n("xRange return",t),t})}(e,t)}).join(" ")}(e,t),n("xrange",e),e=function(e,t){return n("replaceStars",e,t),e.trim().replace(o[$],"")}(e,t),n("stars",e),e}(e,this.options)},this).join(" ").split(/\s+/);return this.options.loose&&(s=s.filter(function(e){return!!e.match(i)})),s=s.map(function(e){return new se(e,this.options)},this)},ae.prototype.intersects=function(e,t){if(!(e instanceof ae))throw new TypeError("a Range is required");return this.set.some(function(r){return r.every(function(r){return e.set.some(function(e){return e.every(function(e){return r.intersects(e,t)})})})})},r.toComparators=function(e,t){return new ae(e,t).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},ae.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new X(e,this.options));for(var t=0;t<this.set.length;t++)if(ue(this.set[t],e,this.options))return!0;return!1},r.satisfies=pe,r.maxSatisfying=function(e,t,r){var n=null,i=null;try{var s=new ae(t,r)}catch(e){return null}return e.forEach(function(e){s.test(e)&&(n&&-1!==i.compare(e)||(i=new X(n=e,r)))}),n},r.minSatisfying=function(e,t,r){var n=null,i=null;try{var s=new ae(t,r)}catch(e){return null}return e.forEach(function(e){s.test(e)&&(n&&1!==i.compare(e)||(i=new X(n=e,r)))}),n},r.minVersion=function(e,t){e=new ae(e,t);var r=new X("0.0.0");if(e.test(r))return r;if(r=new X("0.0.0-0"),e.test(r))return r;r=null;for(var n=0;n<e.set.length;++n){var i=e.set[n];i.forEach(function(e){var t=new X(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!Q(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}})}if(r&&e.test(r))return r;return null},r.validRange=function(e,t){try{return new ae(e,t).range||"*"}catch(e){return null}},r.ltr=function(e,t,r){return fe(e,t,"<",r)},r.gtr=function(e,t,r){return fe(e,t,">",r)},r.outside=fe,r.prerelease=function(e,t){var r=Y(e,t);return r&&r.prerelease.length?r.prerelease:null},r.intersects=function(e,t,r){return e=new ae(e,r),t=new ae(t,r),e.intersects(t)},r.coerce=function(e){if(e instanceof X)return e;if("string"!=typeof e)return null;var t=e.match(o[k]);if(null==t)return null;return Y(t[1]+"."+(t[2]||"0")+"."+(t[3]||"0"))}}).call(this,e("_process"))},{_process:13}],60:[function(e,t,r){t.exports={_from:"@babel/core@^7.0.0-0",_id:"@babel/core@7.10.5",_inBundle:!1,_integrity:"sha512-O34LQooYVDXPl7QWCdW9p4NR+QlzOr7xShPPJz8GsuCU3/8ua/wqTr7gmnxXv+WBESiGU/G5s16i6tUvHkNb+w==",_location:"/@babel/core",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@babel/core@^7.0.0-0",name:"@babel/core",escapedName:"@babel%2fcore",scope:"@babel",rawSpec:"^7.0.0-0",saveSpec:null,fetchSpec:"^7.0.0-0"},_requiredBy:["#DEV:/","#USER","/@babel/helper-transform-fixture-test-runner","/@jest/transform","/jest-config"],_resolved:"https://registry.npmjs.org/@babel/core/-/core-7.10.5.tgz",_shasum:"1f15e2cca8ad9a1d78a38ddba612f5e7cdbbd330",_spec:"@babel/core@^7.0.0-0",_where:"/tmp/817286d7ccfa5fadf68e972e61e5dbec907c17ae/package",author:{name:"Sebastian McKenzie",email:"sebmck@gmail.com"},browser:{"./lib/config/files/index.js":"./lib/config/files/index-browser.js","./lib/transform-file.js":"./lib/transform-file-browser.js","./src/config/files/index.js":"./src/config/files/index-browser.js","./src/transform-file.js":"./src/transform-file-browser.js"},bugs:{url:"https://github.com/babel/babel/issues"},bundleDependencies:!1,dependencies:{"@babel/code-frame":"^7.10.4","@babel/generator":"^7.10.5","@babel/helper-module-transforms":"^7.10.5","@babel/helpers":"^7.10.4","@babel/parser":"^7.10.5","@babel/template":"^7.10.4","@babel/traverse":"^7.10.5","@babel/types":"^7.10.5","convert-source-map":"^1.7.0",debug:"^4.1.0",gensync:"^1.0.0-beta.1",json5:"^2.1.2",lodash:"^4.17.19",resolve:"^1.3.2",semver:"^5.4.1","source-map":"^0.5.0"},deprecated:!1,description:"Babel compiler core.",devDependencies:{"@babel/helper-transform-fixture-test-runner":"^7.10.5"},engines:{node:">=6.9.0"},funding:{type:"opencollective",url:"https://opencollective.com/babel"},gitHead:"f7964a9ac51356f7df6404a25b27ba1cffba1ba7",homepage:"https://babeljs.io/",keywords:["6to5","babel","classes","const","es6","harmony","let","modules","transpile","transpiler","var","babel-core","compiler"],license:"MIT",main:"lib/index.js",name:"@babel/core",publishConfig:{access:"public"},repository:{type:"git",url:"git+https://github.com/babel/babel.git",directory:"packages/babel-core"},version:"7.10.5"}},{}],61:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;const n=/^[ \t]+$/;r.default=class{constructor(e){this._map=null,this._buf=[],this._last="",this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:null,line:null,column:null,filename:null},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,t={code:this._buf.join("").trimRight(),map:null,rawMappings:null==e?void 0:e.getRawMappings()};return e&&Object.defineProperty(t,"map",{configurable:!0,enumerable:!0,get(){return this.map=e.get()},set(e){Object.defineProperty(this,"map",{value:e,writable:!0})}}),t}append(e){this._flush();const{line:t,column:r,filename:n,identifierName:i,force:s}=this._sourcePosition;this._append(e,t,r,i,n,s)}queue(e){if("\n"===e)for(;this._queue.length>0&&n.test(this._queue[0][0]);)this._queue.shift();const{line:t,column:r,filename:i,identifierName:s,force:o}=this._sourcePosition;this._queue.unshift([e,t,r,s,i,o])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,t,r,n,i,s){this._map&&"\n"!==e[0]&&this._map.mark(this._position.line,this._position.column,t,r,n,i,s),this._buf.push(e),this._last=e[e.length-1];for(let t=0;t<e.length;t++)"\n"===e[t]?(this._position.line++,this._position.column=0):this._position.column++}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}endsWith(e){if(1===e.length){let t;if(this._queue.length>0){const e=this._queue[0][0];t=e[e.length-1]}else t=this._last;return t===e}const t=this._last+this._queue.reduce((e,t)=>t[0]+e,"");return e.length<=t.length&&t.slice(-e.length)===e}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,t){this.source("start",e,!0),t(),this.source("end",e),this._disallowPop("start",e)}source(e,t,r){e&&!t||this._normalizePosition(e,t,this._sourcePosition,r)}withSource(e,t,r){if(!this._map)return r();const n=this._sourcePosition.line,i=this._sourcePosition.column,s=this._sourcePosition.filename,o=this._sourcePosition.identifierName;this.source(e,t),r(),this._sourcePosition.force&&this._sourcePosition.line===n&&this._sourcePosition.column===i&&this._sourcePosition.filename===s||this._disallowedPop&&this._disallowedPop.line===n&&this._disallowedPop.column===i&&this._disallowedPop.filename===s||(this._sourcePosition.line=n,this._sourcePosition.column=i,this._sourcePosition.filename=s,this._sourcePosition.identifierName=o,this._sourcePosition.force=!1,this._disallowedPop=null)}_disallowPop(e,t){e&&!t||(this._disallowedPop=this._normalizePosition(e,t))}_normalizePosition(e,t,r,n){const i=t?t[e]:null;void 0===r&&(r={identifierName:null,line:null,column:null,filename:null,force:!1});const s=r.line,o=r.column,a=r.filename;return r.identifierName="start"===e&&(null==t?void 0:t.identifierName)||null,r.line=null==i?void 0:i.line,r.column=null==i?void 0:i.column,r.filename=null==t?void 0:t.filename,(n||r.line!==s||r.column!==o||r.filename!==a)&&(r.force=n),r}getCurrentColumn(){const e=this._queue.reduce((e,t)=>t[0]+e,""),t=e.lastIndexOf("\n");return-1===t?this._position.column+e.length:e.length-1-t}getCurrentLine(){const e=this._queue.reduce((e,t)=>t[0]+e,"");let t=0;for(let r=0;r<e.length;r++)"\n"===e[r]&&t++;return this._position.line+t}}},{}],62:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.File=function(e){e.program&&this.print(e.program.interpreter,e);this.print(e.program,e)},r.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline();this.printSequence(e.body,e)},r.BlockStatement=function(e){var t;this.token("{"),this.printInnerComments(e);const r=null==(t=e.directives)?void 0:t.length;e.body.length||r?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),r&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith("\n")||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},r.Noop=function(){},r.Directive=function(e){this.print(e.value,e),this.semicolon()},r.DirectiveLiteral=function(e){const t=this.getPossibleRaw(e);if(null!=t)return void this.token(t);const{value:r}=e;if(i.test(r)){if(n.test(r))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${r}'`)}else this.token(`"${r}"`)},r.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},r.Placeholder=function(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()};const n=/(?:^|[^\\])(?:\\\\)*'/,i=/(?:^|[^\\])(?:\\\\)*"/},{}],63:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ClassExpression=r.ClassDeclaration=function(e,t){this.format.decoratorsBeforeExport&&(n.isExportDefaultDeclaration(t)||n.isExportNamedDeclaration(t))||this.printJoin(e.decorators,e);e.declare&&(this.word("declare"),this.space());e.abstract&&(this.word("abstract"),this.space());this.word("class"),e.id&&(this.space(),this.print(e.id,e));this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e));e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},r.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith("\n")||this.newline(),this.rightBrace())},r.ClassProperty=function(e){this.printJoin(e.decorators,e),this.tsPrintClassMemberModifiers(e,!0),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e));e.optional&&this.token("?");e.definite&&this.token("!");this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},r.ClassPrivateProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e));this.semicolon()},r.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},r.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},r._classMethodHead=function(e){this.printJoin(e.decorators,e),this.tsPrintClassMemberModifiers(e,!1),this._methodHead(e)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},{"@babel/types":198}],64:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator);this.print(e.argument,e)},r.DoExpression=function(e){this.word("do"),this.space(),this.print(e.body,e)},r.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},r.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},r.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},r.NewExpression=function(e,t){if(this.word("new"),this.space(),this.print(e.callee,e),this.format.minified&&0===e.arguments.length&&!e.optional&&!n.isCallExpression(t,{callee:e})&&!n.isMemberExpression(t)&&!n.isNewExpression(t))return;this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},r.SequenceExpression=function(e){this.printList(e.expressions,e)},r.ThisExpression=function(){this.word("this")},r.Super=function(){this.word("super")},r.Decorator=function(e){this.token("@"),this.print(e.expression,e),this.newline()},r.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&n.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;n.isLiteral(e.property)&&"number"==typeof e.property.value&&(t=!0);e.optional&&this.token("?.");t?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},r.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?.");this.token("("),this.printList(e.arguments,e),this.token(")")},r.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},r.Import=function(){this.word("import")},r.EmptyStatement=function(){this.semicolon(!0)},r.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},r.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?");this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},r.LogicalExpression=r.BinaryExpression=r.AssignmentExpression=function(e,t){const r=this.inForStatementInitCounter&&"in"===e.operator&&!i.needsParens(e,t);r&&this.token("(");this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator);this.space(),this.print(e.right,e),r&&this.token(")")},r.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},r.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&n.isMemberExpression(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let t=e.computed;n.isLiteral(e.property)&&"number"==typeof e.property.value&&(t=!0);t?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},r.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},r.PrivateName=function(e){this.token("#"),this.print(e.id,e)},r.V8IntrinsicIdentifier=function(e){this.token("%"),this.word(e.name)},r.AwaitExpression=r.YieldExpression=void 0;var n=o(e("@babel/types")),i=o(e("../node"));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function a(e){return function(t){if(this.word(e),t.delegate&&this.token("*"),t.argument){this.space();const e=this.startTerminatorless();this.print(t.argument,t),this.endTerminatorless(e)}}}const l=a("yield");r.YieldExpression=l;const c=a("await");r.AwaitExpression=c},{"../node":75,"@babel/types":198}],65:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.AnyTypeAnnotation=function(){this.word("any")},r.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},r.BooleanTypeAnnotation=function(){this.word("boolean")},r.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},r.NullLiteralTypeAnnotation=function(){this.word("null")},r.DeclareClass=function(e,t){n.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("class"),this.space(),this._interfaceish(e)},r.DeclareFunction=function(e,t){n.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e));this.semicolon()},r.InferredPredicate=function(){this.token("%"),this.word("checks")},r.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},r.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},r.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},r.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},r.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},r.DeclareOpaqueType=function(e,t){n.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.OpaqueType(e)},r.DeclareVariable=function(e,t){n.isDeclareExportDeclaration(t)||(this.word("declare"),this.space());this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},r.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space());(function(e){if(e.declaration){const t=e.declaration;this.print(t,e),n.isStatement(t)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}).apply(this,arguments)},r.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),i.ExportAllDeclaration.apply(this,arguments)},r.EnumDeclaration=function(e){const{id:t,body:r}=e;this.word("enum"),this.space(),this.print(t,e),this.print(r,e)},r.EnumBooleanBody=function(e){const{explicitType:t}=e;a(this,"boolean",t),l(this,e)},r.EnumNumberBody=function(e){const{explicitType:t}=e;a(this,"number",t),l(this,e)},r.EnumStringBody=function(e){const{explicitType:t}=e;a(this,"string",t),l(this,e)},r.EnumSymbolBody=function(e){a(this,"symbol",!0),l(this,e)},r.EnumDefaultedMember=function(e){const{id:t}=e;this.print(t,e),this.token(",")},r.EnumBooleanMember=function(e){c(this,e)},r.EnumNumberMember=function(e){c(this,e)},r.EnumStringMember=function(e){c(this,e)},r.ExistsTypeAnnotation=function(){this.token("*")},r.FunctionTypeAnnotation=function(e,t){this.print(e.typeParameters,e),this.token("("),this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e));this.token(")"),"ObjectTypeCallProperty"===t.type||"DeclareFunction"===t.type||"ObjectTypeProperty"===t.type&&t.method?this.token(":"):(this.space(),this.token("=>"));this.space(),this.print(e.returnType,e)},r.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?");e.name&&(this.token(":"),this.space());this.print(e.typeAnnotation,e)},r.GenericTypeAnnotation=r.ClassImplements=r.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},r._interfaceish=function(e){this.print(e.id,e),this.print(e.typeParameters,e),e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e));e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e));this.space(),this.print(e.body,e)},r._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))},r.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},r.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e));this.space(),this.print(e.body,e)},r.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:u})},r.MixedTypeAnnotation=function(){this.word("mixed")},r.EmptyTypeAnnotation=function(){this.word("empty")},r.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},r.NumberTypeAnnotation=function(){this.word("number")},r.StringTypeAnnotation=function(){this.word("string")},r.ThisTypeAnnotation=function(){this.word("this")},r.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},r.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},r.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},r.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},r.TypeParameterDeclaration=r.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},r.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e);e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},r.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e));e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e));this.semicolon()},r.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const t=e.properties.concat(e.callProperties||[],e.indexers||[],e.internalSlots||[]);t.length&&(this.space(),this.printJoin(t,e,{addNewlines(e){if(e&&!t[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==t.length||e.inexact)&&(this.token(","),this.space())}}),this.space());e.inexact&&(this.indent(),this.token("..."),t.length&&this.newline(),this.dedent());e.exact?this.token("|}"):this.token("}")},r.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space());this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},r.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space());this.print(e.value,e)},r.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space());this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space());this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},r.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space());e.static&&(this.word("static"),this.space());"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space());this._variance(e),this.print(e.key,e),e.optional&&this.token("?");e.method||(this.token(":"),this.space());this.print(e.value,e)},r.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},r.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},r.SymbolTypeAnnotation=function(){this.word("symbol")},r.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:p})},r.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},r.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},r.VoidTypeAnnotation=function(){this.word("void")},Object.defineProperty(r,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.NumericLiteral}}),Object.defineProperty(r,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.StringLiteral}});var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types")),i=e("./modules"),s=e("./types");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e,t,r){r&&(e.space(),e.word("of"),e.space(),e.word(t)),e.space()}function l(e,t){const{members:r}=t;e.token("{"),e.indent(),e.newline();for(const n of r)e.print(n,t),e.newline();e.dedent(),e.token("}")}function c(e,t){const{id:r,init:n}=t;e.print(r,t),e.space(),e.token("="),e.space(),e.print(n,t),e.token(",")}function u(){this.space(),this.token("&"),this.space()}function p(){this.space(),this.token("|"),this.space()}},{"./modules":69,"./types":72,"@babel/types":198}],66:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("./template-literals");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})});var i=e("./expressions");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return i[e]}})});var s=e("./statements");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return s[e]}})});var o=e("./classes");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return o[e]}})});var a=e("./methods");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return a[e]}})});var l=e("./modules");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return l[e]}})});var c=e("./types");Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return c[e]}})});var u=e("./flow");Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return u[e]}})});var p=e("./base");Object.keys(p).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return p[e]}})});var f=e("./jsx");Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return f[e]}})});var d=e("./typescript");Object.keys(d).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return d[e]}})})},{"./base":62,"./classes":63,"./expressions":64,"./flow":65,"./jsx":67,"./methods":68,"./modules":69,"./statements":70,"./template-literals":71,"./types":72,"./typescript":73}],67:[function(e,t,r){"use strict";function n(){this.space()}Object.defineProperty(r,"__esModule",{value:!0}),r.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},r.JSXIdentifier=function(e){this.word(e.name)},r.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},r.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},r.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},r.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},r.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},r.JSXText=function(e){const t=this.getPossibleRaw(e);null!=t?this.token(t):this.token(e.value)},r.JSXElement=function(e){const t=e.openingElement;if(this.print(t,e),t.selfClosing)return;this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingElement,e)},r.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:n}));e.selfClosing?(this.space(),this.token("/>")):this.token(">")},r.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},r.JSXEmptyExpression=function(e){this.printInnerComments(e)},r.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const t of e.children)this.print(t,e);this.dedent(),this.print(e.closingFragment,e)},r.JSXOpeningFragment=function(){this.token("<"),this.token(">")},r.JSXClosingFragment=function(){this.token("</"),this.token(">")}},{}],68:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},r._parameters=function(e,t){for(let r=0;r<e.length;r++)this._param(e[r],t),r<e.length-1&&(this.token(","),this.space())},r._param=function(e,t){this.printJoin(e.decorators,e),this.print(e,t),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},r._methodHead=function(e){const t=e.kind,r=e.key;"get"!==t&&"set"!==t||(this.word(t),this.space());e.async&&(this.word("async"),this.space());"method"!==t&&"init"!==t||e.generator&&this.token("*");e.computed?(this.token("["),this.print(r,e),this.token("]")):this.print(r,e);e.optional&&this.token("?");this._params(e)},r._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))},r._functionHead=function(e){e.async&&(this.word("async"),this.space());this.word("function"),e.generator&&this.token("*");this.space(),e.id&&this.print(e.id,e);this._params(e),this._predicate(e)},r.FunctionDeclaration=r.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},r.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const t=e.params[0];1===e.params.length&&n.isIdentifier(t)&&!function(e,t){return e.typeParameters||e.returnType||t.typeAnnotation||t.optional||t.trailingComments}(e,t)?this.format.retainLines&&e.loc&&e.body.loc&&e.loc.start.line<e.body.loc.start.line?(this.token("("),t.loc&&t.loc.start.line>e.loc.start.line?(this.indent(),this.print(t,e),this.dedent(),this._catchUp("start",e.body.loc)):this.print(t,e),this.token(")")):this.print(t,e):this._params(e);this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},{"@babel/types":198}],69:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space());this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))},r.ImportDefaultSpecifier=function(e){this.print(e.local,e)},r.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},r.ExportSpecifier=function(e){this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},r.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},r.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space());this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.semicolon()},r.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&n.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),s.apply(this,arguments)},r.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&n.isClassDeclaration(e.declaration)&&this.printJoin(e.declaration.decorators,e);this.word("export"),this.space(),this.word("default"),this.space(),s.apply(this,arguments)},r.ImportDeclaration=function(e){var t;this.word("import"),this.space(),("type"===e.importKind||"typeof"===e.importKind)&&(this.word(e.importKind),this.space());const r=e.specifiers.slice(0);if(null==r?void 0:r.length){for(;;){const t=r[0];if(!n.isImportDefaultSpecifier(t)&&!n.isImportNamespaceSpecifier(t))break;this.print(r.shift(),e),r.length&&(this.token(","),this.space())}r.length&&(this.token("{"),this.space(),this.printList(r,e),this.space(),this.token("}")),this.space(),this.word("from"),this.space()}this.print(e.source,e),(null==(t=e.attributes)?void 0:t.length)&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e));this.semicolon()},r.ImportAttribute=function(e){this.print(e.key),this.token(":"),this.space(),this.print(e.value)},r.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){if(e.declaration){const t=e.declaration;this.print(t,e),n.isStatement(t)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const t=e.specifiers.slice(0);let r=!1;for(;;){const i=t[0];if(!n.isExportDefaultSpecifier(i)&&!n.isExportNamespaceSpecifier(i))break;r=!0,this.print(t.shift(),e),t.length&&(this.token(","),this.space())}(t.length||!t.length&&!r)&&(this.token("{"),t.length&&(this.space(),this.printList(t,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}}},{"@babel/types":198}],70:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)},r.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const t=e.alternate&&n.isIfStatement(function e(t){if(!n.isStatement(t.body))return t;return e(t.body)}(e.consequent));t&&(this.token("{"),this.newline(),this.indent());this.printAndIndentOnComments(e.consequent,e),t&&(this.dedent(),this.newline(),this.token("}"));e.alternate&&(this.endsWith("}")&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},r.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e));this.token(";"),e.update&&(this.space(),this.print(e.update,e));this.token(")"),this.printBlock(e)},r.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},r.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},r.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},r.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e);e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},r.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.token(")"),this.space());this.print(e.body,e)},r.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(t,r){if(!t&&e.cases[e.cases.length-1]===r)return-1}}),this.token("}")},r.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":"));e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},r.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},r.VariableDeclaration=function(e,t){e.declare&&(this.word("declare"),this.space());this.word(e.kind),this.space();let r,i=!1;if(!n.isFor(t))for(const t of e.declarations)t.init&&(i=!0);i&&(r="const"===e.kind?h:d);if(this.printList(e.declarations,e,{separator:r}),n.isFor(t)&&(t.left===e||t.init===e))return;this.semicolon()},r.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!");this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},r.ThrowStatement=r.BreakStatement=r.ReturnStatement=r.ContinueStatement=r.ForOfStatement=r.ForInStatement=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}const s=function(e){return function(t){this.word("for"),this.space(),"of"===e&&t.await&&(this.word("await"),this.space()),this.token("("),this.print(t.left,t),this.space(),this.word(e),this.space(),this.print(t.right,t),this.token(")"),this.printBlock(t)}},o=s("in");r.ForInStatement=o;const a=s("of");function l(e,t="label"){return function(r){this.word(e);const n=r[t];if(n){this.space();const e="label"==t,i=this.startTerminatorless(e);this.print(n,r),this.endTerminatorless(i)}this.semicolon()}}r.ForOfStatement=a;const c=l("continue");r.ContinueStatement=c;const u=l("return","argument");r.ReturnStatement=u;const p=l("break");r.BreakStatement=p;const f=l("throw","argument");function d(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<4;e++)this.space(!0)}function h(){if(this.token(","),this.newline(),this.endsWith("\n"))for(let e=0;e<6;e++)this.space(!0)}r.ThrowStatement=f},{"@babel/types":198}],71:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},r.TemplateElement=function(e,t){const r=t.quasis[0]===e,n=t.quasis[t.quasis.length-1]===e,i=(r?"`":"}")+e.value.raw+(n?"`":"${");this.token(i)},r.TemplateLiteral=function(e){const t=e.quasis;for(let r=0;r<t.length;r++)this.print(t[r],e),r+1<t.length&&this.print(e.expressions[r],e)}},{}],72:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Identifier=function(e){this.exactSource(e.loc,()=>{this.word(e.name)})},r.ArgumentPlaceholder=function(){this.token("?")},r.SpreadElement=r.RestElement=function(e){this.token("..."),this.print(e.argument,e)},r.ObjectPattern=r.ObjectExpression=function(e){const t=e.properties;this.token("{"),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token("}")},r.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},r.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(i.isAssignmentPattern(e.value)&&i.isIdentifier(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&i.isIdentifier(e.key)&&i.isIdentifier(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},r.ArrayPattern=r.ArrayExpression=function(e){const t=e.elements,r=t.length;this.token("["),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i?(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(",")):this.token(",")}this.token("]")},r.RecordExpression=function(e){const t=e.properties;let r,n;if("bar"===this.format.recordAndTupleSyntaxType)r="{|",n="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);r="#{",n="}"}this.token(r),this.printInnerComments(e),t.length&&(this.space(),this.printList(t,e,{indent:!0,statement:!0}),this.space());this.token(n)},r.TupleExpression=function(e){const t=e.elements,r=t.length;let n,i;if("bar"===this.format.recordAndTupleSyntaxType)n="[|",i="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);n="#[",i="]"}this.token(n),this.printInnerComments(e);for(let n=0;n<t.length;n++){const i=t[n];i&&(n>0&&this.space(),this.print(i,e),n<r-1&&this.token(","))}this.token(i)},r.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},r.BooleanLiteral=function(e){this.word(e.value?"true":"false")},r.NullLiteral=function(){this.word("null")},r.NumericLiteral=function(e){const t=this.getPossibleRaw(e),r=this.format.jsescOption,n=e.value+"";r.numbers?this.number((0,s.default)(e.value,r)):null==t?this.number(n):this.format.minified?this.number(t.length<n.length?t:n):this.number(t)},r.StringLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);const r=this.format.jsescOption;this.format.jsonCompatibleStrings&&(r.json=!0);const n=(0,s.default)(e.value,r);return this.token(n)},r.BigIntLiteral=function(e){const t=this.getPossibleRaw(e);if(!this.format.minified&&null!=t)return void this.token(t);this.token(e.value+"n")},r.PipelineTopicExpression=function(e){this.print(e.expression,e)},r.PipelineBareFunction=function(e){this.print(e.callee,e)},r.PipelinePrimaryTopicReference=function(){this.token("#")};var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types")),s=(n=e("jsesc"))&&n.__esModule?n:{default:n};function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}},{"@babel/types":198,jsesc:260}],73:[function(e,t,r){"use strict";function n(e,t){!0!==t&&e.token(t)}Object.defineProperty(r,"__esModule",{value:!0}),r.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?");this.print(e.typeAnnotation,e)},r.TSTypeParameterDeclaration=r.TSTypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},r.TSTypeParameter=function(e){this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e));e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},r.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space());e.readonly&&(this.word("readonly"),this.space());this._param(e.parameter)},r.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space());this._functionHead(e),this.token(";")},r.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},r.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},r.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e),this.token(";")},r.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.token(";")},r.TSPropertySignature=function(e){const{readonly:t,initializer:r}=e;t&&(this.word("readonly"),this.space());this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(";")},r.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("[");this.print(e.key,e),e.computed&&this.token("]");e.optional&&this.token("?")},r.TSMethodSignature=function(e){this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},r.TSIndexSignature=function(e){const{readonly:t}=e;t&&(this.word("readonly"),this.space());this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},r.TSAnyKeyword=function(){this.word("any")},r.TSBigIntKeyword=function(){this.word("bigint")},r.TSUnknownKeyword=function(){this.word("unknown")},r.TSNumberKeyword=function(){this.word("number")},r.TSObjectKeyword=function(){this.word("object")},r.TSBooleanKeyword=function(){this.word("boolean")},r.TSStringKeyword=function(){this.word("string")},r.TSSymbolKeyword=function(){this.word("symbol")},r.TSVoidKeyword=function(){this.word("void")},r.TSUndefinedKeyword=function(){this.word("undefined")},r.TSNullKeyword=function(){this.word("null")},r.TSNeverKeyword=function(){this.word("never")},r.TSThisType=function(){this.word("this")},r.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},r.TSConstructorType=function(e){this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},r.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.space(),this.token("=>"),this.space(),this.print(e.typeAnnotation.typeAnnotation,e)},r.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},r.TSTypePredicate=function(e){e.asserts&&(this.word("asserts"),this.space());this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))},r.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName)},r.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},r.tsPrintTypeLiteralOrInterfaceBody=function(e,t){this.tsPrintBraced(e,t)},r.tsPrintBraced=function(e,t){if(this.token("{"),e.length){this.indent(),this.newline();for(const r of e)this.print(r,t),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},r.TSArrayType=function(e){this.print(e.elementType,e),this.token("[]")},r.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},r.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},r.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},r.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},r.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},r.tsPrintUnionOrIntersectionType=function(e,t){this.printJoin(e.types,e,{separator(){this.space(),this.token(t),this.space()}})},r.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},r.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},r.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},r.TSTypeOperator=function(e){this.token(e.operator),this.space(),this.print(e.typeAnnotation,e)},r.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},r.TSMappedType=function(e){const{readonly:t,typeParameter:r,optional:i}=e;this.token("{"),this.space(),t&&(n(this,t),this.word("readonly"),this.space());this.token("["),this.word(r.name),this.space(),this.word("in"),this.space(),this.print(r.constraint,r),this.token("]"),i&&(n(this,i),this.token("?"));this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},r.TSLiteralType=function(e){this.print(e.literal,e)},r.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},r.TSInterfaceDeclaration=function(e){const{declare:t,id:r,typeParameters:n,extends:i,body:s}=e;t&&(this.word("declare"),this.space());this.word("interface"),this.space(),this.print(r,e),this.print(n,e),i&&(this.space(),this.word("extends"),this.space(),this.printList(i,e));this.space(),this.print(s,e)},r.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},r.TSTypeAliasDeclaration=function(e){const{declare:t,id:r,typeParameters:n,typeAnnotation:i}=e;t&&(this.word("declare"),this.space());this.word("type"),this.space(),this.print(r,e),this.print(n,e),this.space(),this.token("="),this.space(),this.print(i,e),this.token(";")},r.TSAsExpression=function(e){const{expression:t,typeAnnotation:r}=e;this.print(t,e),this.space(),this.word("as"),this.space(),this.print(r,e)},r.TSTypeAssertion=function(e){const{typeAnnotation:t,expression:r}=e;this.token("<"),this.print(t,e),this.token(">"),this.space(),this.print(r,e)},r.TSEnumDeclaration=function(e){const{declare:t,const:r,id:n,members:i}=e;t&&(this.word("declare"),this.space());r&&(this.word("const"),this.space());this.word("enum"),this.space(),this.print(n,e),this.space(),this.tsPrintBraced(i,e)},r.TSEnumMember=function(e){const{id:t,initializer:r}=e;this.print(t,e),r&&(this.space(),this.token("="),this.space(),this.print(r,e));this.token(",")},r.TSModuleDeclaration=function(e){const{declare:t,id:r}=e;t&&(this.word("declare"),this.space());e.global||(this.word("Identifier"===r.type?"namespace":"module"),this.space());if(this.print(r,e),!e.body)return void this.token(";");let n=e.body;for(;"TSModuleDeclaration"===n.type;)this.token("."),this.print(n.id,n),n=n.body;this.space(),this.print(n,e)},r.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},r.TSImportType=function(e){const{argument:t,qualifier:r,typeParameters:n}=e;this.word("import"),this.token("("),this.print(t,e),this.token(")"),r&&(this.token("."),this.print(r,e));n&&this.print(n,e)},r.TSImportEqualsDeclaration=function(e){const{isExport:t,id:r,moduleReference:n}=e;t&&(this.word("export"),this.space());this.word("import"),this.space(),this.print(r,e),this.space(),this.token("="),this.space(),this.print(n,e),this.token(";")},r.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},r.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},r.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},r.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},r.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:t,parameters:r}=e;this.print(t,e),this.token("("),this._parameters(r,e),this.token(")"),this.print(e.typeAnnotation,e)},r.tsPrintClassMemberModifiers=function(e,t){t&&e.declare&&(this.word("declare"),this.space());e.accessibility&&(this.word(e.accessibility),this.space());e.static&&(this.word("static"),this.space());e.abstract&&(this.word("abstract"),this.space());t&&e.readonly&&(this.word("readonly"),this.space())}},{}],74:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){return new o(e,t,r).generate()},r.CodeGenerator=void 0;var n=s(e("./source-map")),i=s(e("./printer"));function s(e){return e&&e.__esModule?e:{default:e}}class o extends i.default{constructor(e,t={},r){super(function(e,t){const r={auxiliaryCommentBefore:t.auxiliaryCommentBefore,auxiliaryCommentAfter:t.auxiliaryCommentAfter,shouldPrintComment:t.shouldPrintComment,retainLines:t.retainLines,retainFunctionParens:t.retainFunctionParens,comments:null==t.comments||t.comments,compact:t.compact,minified:t.minified,concise:t.concise,jsonCompatibleStrings:t.jsonCompatibleStrings,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!t.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0},t.jsescOption),recordAndTupleSyntaxType:t.recordAndTupleSyntaxType};r.minified?(r.compact=!0,r.shouldPrintComment=r.shouldPrintComment||(()=>r.comments)):r.shouldPrintComment=r.shouldPrintComment||(e=>r.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0);"auto"===r.compact&&(r.compact=e.length>5e5,r.compact&&console.error("[BABEL] Note: The code generator has deoptimised the styling of "+`${t.filename} as it exceeds the max of 500KB.`));r.compact&&(r.indent.adjustMultilineComment=!1);return r}(r,t),t.sourceMaps?new n.default(t,r):null),this.ast=e}generate(){return super.generate(this.ast)}}r.CodeGenerator=class{constructor(e,t,r){this._generator=new o(e,t,r)}generate(){return this._generator.generate()}}},{"./printer":78,"./source-map":79}],75:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.needsWhitespace=d,r.needsWhitespaceBefore=function(e,t){return d(e,t,"before")},r.needsWhitespaceAfter=function(e,t){return d(e,t,"after")},r.needsParens=function(e,t,r){if(!t)return!1;if(s.isNewExpression(t)&&t.callee===e&&function e(t){if(s.isCallExpression(t))return!0;return s.isMemberExpression(t)&&e(t.object)}(e))return!0;return f(c,e,t,r)};var n=a(e("./whitespace")),i=a(e("./parentheses")),s=a(e("@babel/types"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function l(e){const t={};function r(e,r){const n=t[e];t[e]=n?function(e,t,i){const s=n(e,t,i);return null==s?r(e,t,i):s}:r}for(const t of Object.keys(e)){const n=s.FLIPPED_ALIAS_KEYS[t];if(n)for(const i of n)r(i,e[t]);else r(t,e[t])}return t}const c=l(i),u=l(n.nodes),p=l(n.list);function f(e,t,r,n){const i=e[t.type];return i?i(t,r,n):null}function d(e,t,r){if(!e)return 0;s.isExpressionStatement(e)&&(e=e.expression);let n=f(u,e,t);if(!n){const i=f(p,e,t);if(i)for(let t=0;t<i.length&&!(n=d(i[t],e,r));t++);}return"object"==typeof n&&null!==n&&n[r]||0}},{"./parentheses":76,"./whitespace":77,"@babel/types":198}],76:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.NullableTypeAnnotation=function(e,t){return n.isArrayTypeAnnotation(t)},r.FunctionTypeAnnotation=function(e,t,r){return n.isUnionTypeAnnotation(t)||n.isIntersectionTypeAnnotation(t)||n.isArrayTypeAnnotation(t)||n.isTypeAnnotation(t)&&n.isArrowFunctionExpression(r[r.length-3])},r.UpdateExpression=function(e,t){return a(e,t)||o(e,t)},r.ObjectExpression=function(e,t,r){return u(r,{considerArrow:!0})},r.DoExpression=function(e,t,r){return u(r)},r.Binary=function(e,t){if("**"===e.operator&&n.isBinaryExpression(t,{operator:"**"}))return t.left===e;if(o(e,t))return!0;if(a(e,t)||n.isUnaryLike(t)||n.isAwaitExpression(t))return!0;if(n.isBinary(t)){const r=t.operator,i=s[r],o=e.operator,a=s[o];if(i===a&&t.right===e&&!n.isLogicalExpression(t)||i>a)return!0}},r.IntersectionTypeAnnotation=r.UnionTypeAnnotation=function(e,t){return n.isArrayTypeAnnotation(t)||n.isNullableTypeAnnotation(t)||n.isIntersectionTypeAnnotation(t)||n.isUnionTypeAnnotation(t)},r.TSAsExpression=function(){return!0},r.TSTypeAssertion=function(){return!0},r.TSIntersectionType=r.TSUnionType=function(e,t){return n.isTSArrayType(t)||n.isTSOptionalType(t)||n.isTSIntersectionType(t)||n.isTSUnionType(t)||n.isTSRestType(t)},r.TSInferType=function(e,t){return n.isTSArrayType(t)||n.isTSOptionalType(t)},r.BinaryExpression=function(e,t){return"in"===e.operator&&(n.isVariableDeclarator(t)||n.isFor(t))},r.SequenceExpression=function(e,t){if(n.isForStatement(t)||n.isThrowStatement(t)||n.isReturnStatement(t)||n.isIfStatement(t)&&t.test===e||n.isWhileStatement(t)&&t.test===e||n.isForInStatement(t)&&t.right===e||n.isSwitchStatement(t)&&t.discriminant===e||n.isExpressionStatement(t)&&t.expression===e)return!1;return!0},r.AwaitExpression=r.YieldExpression=function(e,t){return n.isBinary(t)||n.isUnaryLike(t)||a(e,t)||n.isAwaitExpression(t)&&n.isYieldExpression(e)||n.isConditionalExpression(t)&&e===t.test||o(e,t)},r.ClassExpression=function(e,t,r){return u(r,{considerDefaultExports:!0})},r.UnaryLike=l,r.FunctionExpression=function(e,t,r){return u(r,{considerDefaultExports:!0})},r.ArrowFunctionExpression=function(e,t){return n.isExportDeclaration(t)||c(e,t)},r.ConditionalExpression=c,r.OptionalCallExpression=r.OptionalMemberExpression=function(e,t){return n.isCallExpression(t,{callee:e})||n.isMemberExpression(t,{object:e})},r.AssignmentExpression=function(e,t,r){return!!n.isObjectPattern(e.left)||c(e,t)},r.LogicalExpression=function(e,t){switch(e.operator){case"||":return!!n.isLogicalExpression(t)&&("??"===t.operator||"&&"===t.operator);case"&&":return n.isLogicalExpression(t,{operator:"??"});case"??":return n.isLogicalExpression(t)&&"??"!==t.operator}};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}const s={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},o=(e,t)=>(n.isClassDeclaration(t)||n.isClassExpression(t))&&t.superClass===e,a=(e,t)=>(n.isMemberExpression(t)||n.isOptionalMemberExpression(t))&&t.object===e||(n.isCallExpression(t)||n.isOptionalCallExpression(t)||n.isNewExpression(t))&&t.callee===e||n.isTaggedTemplateExpression(t)&&t.tag===e||n.isTSNonNullExpression(t);function l(e,t){return a(e,t)||n.isBinaryExpression(t,{operator:"**",left:e})||o(e,t)}function c(e,t){return!!(n.isUnaryLike(t)||n.isBinary(t)||n.isConditionalExpression(t,{test:e})||n.isAwaitExpression(t)||n.isTSTypeAssertion(t)||n.isTSAsExpression(t))||l(e,t)}function u(e,{considerArrow:t=!1,considerDefaultExports:r=!1}={}){let i=e.length-1,s=e[i],o=e[--i];for(;i>0;){if(n.isExpressionStatement(o,{expression:s})||r&&n.isExportDefaultDeclaration(o,{declaration:s})||t&&n.isArrowFunctionExpression(o,{body:s}))return!0;if(!(a(s,o)&&!n.isNewExpression(o)||n.isSequenceExpression(o)&&o.expressions[0]===s||n.isConditional(o,{test:s})||n.isBinary(o,{left:s})||n.isAssignmentExpression(o,{left:s})))return!1;s=o,o=e[--i]}return!1}},{"@babel/types":198}],77:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.list=r.nodes=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e,t={}){return n.isMemberExpression(e)||n.isOptionalMemberExpression(e)?(s(e.object,t),e.computed&&s(e.property,t)):n.isBinary(e)||n.isAssignmentExpression(e)?(s(e.left,t),s(e.right,t)):n.isCallExpression(e)||n.isOptionalCallExpression(e)?(t.hasCall=!0,s(e.callee,t)):n.isFunction(e)?t.hasFunction=!0:n.isIdentifier(e)&&(t.hasHelper=t.hasHelper||o(e.callee)),t}function o(e){return n.isMemberExpression(e)?o(e.object)||o(e.property):n.isIdentifier(e)?"require"===e.name||"_"===e.name[0]:n.isCallExpression(e)?o(e.callee):!(!n.isBinary(e)&&!n.isAssignmentExpression(e))&&(n.isIdentifier(e.left)&&o(e.left)||o(e.right))}function a(e){return n.isLiteral(e)||n.isObjectExpression(e)||n.isArrayExpression(e)||n.isIdentifier(e)||n.isMemberExpression(e)}const l={AssignmentExpression(e){const t=s(e.right);if(t.hasCall&&t.hasHelper||t.hasFunction)return{before:t.hasFunction,after:!0}},SwitchCase:(e,t)=>({before:e.consequent.length||t.cases[0]===e,after:!e.consequent.length&&t.cases[t.cases.length-1]===e}),LogicalExpression(e){if(n.isFunction(e.left)||n.isFunction(e.right))return{after:!0}},Literal(e){if("use strict"===e.value)return{after:!0}},CallExpression(e){if(n.isFunction(e.callee)||o(e))return{before:!0,after:!0}},OptionalCallExpression(e){if(n.isFunction(e.callee))return{before:!0,after:!0}},VariableDeclaration(e){for(let t=0;t<e.declarations.length;t++){const r=e.declarations[t];let n=o(r.id)&&!a(r.init);if(!n){const e=s(r.init);n=o(r.init)&&e.hasCall||e.hasFunction}if(n)return{before:!0,after:!0}}},IfStatement(e){if(n.isBlockStatement(e.consequent))return{before:!0,after:!0}}};r.nodes=l,l.ObjectProperty=l.ObjectTypeProperty=l.ObjectMethod=function(e,t){if(t.properties[0]===e)return{before:!0}},l.ObjectTypeCallProperty=function(e,t){var r;if(t.callProperties[0]===e&&!(null==(r=t.properties)?void 0:r.length))return{before:!0}},l.ObjectTypeIndexer=function(e,t){var r,n;if(t.indexers[0]===e&&!(null==(r=t.properties)?void 0:r.length)&&!(null==(n=t.callProperties)?void 0:n.length))return{before:!0}},l.ObjectTypeInternalSlot=function(e,t){var r,n,i;if(t.internalSlots[0]===e&&!(null==(r=t.properties)?void 0:r.length)&&!(null==(n=t.callProperties)?void 0:n.length)&&!(null==(i=t.indexers)?void 0:i.length))return{before:!0}};const c={VariableDeclaration:e=>e.declarations.map(e=>e.init),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties};r.list=c,[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach(function([e,t]){"boolean"==typeof t&&(t={after:t,before:t}),[e].concat(n.FLIPPED_ALIAS_KEYS[e]||[]).forEach(function(e){l[e]=function(){return t}})})},{"@babel/types":198}],78:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,i=(n=e("./buffer"))&&n.__esModule?n:{default:n},s=c(e("./node")),o=c(e("@babel/types")),a=c(e("./generators"));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}const u=/e/i,p=/\.0+$/,f=/^0[box]/,d=/^\s*[@#]__PURE__\s*$/;class h{constructor(e,t){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._printedCommentStarts={},this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e||{},this._buf=new i.default(t)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){this.format.compact||(this._buf.hasContent()&&!this.endsWith(" ")&&!this.endsWith("\n")||e)&&this._space()}word(e){(this._endsWithWord||this.endsWith("/")&&0===e.indexOf("/"))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=Number.isInteger(+e)&&!f.test(e)&&!u.test(e)&&!p.test(e)&&"."!==e[e.length-1]}token(e){("--"===e&&this.endsWith("!")||"+"===e[0]&&this.endsWith("+")||"-"===e[0]&&this.endsWith("-")||"."===e[0]&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e){if(!this.format.retainLines&&!this.format.compact)if(this.format.concise)this.space();else if(!(this.endsWith("\n\n")||("number"!=typeof e&&(e=1),e=Math.min(2,e),(this.endsWith("{\n")||this.endsWith(":\n"))&&e--,e<=0)))for(let t=0;t<e;t++)this._newline()}endsWith(e){return this._buf.endsWith(e)}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,t){this._catchUp("start",e),this._buf.exactSource(e,t)}source(e,t){this._catchUp(e,t),this._buf.source(e,t)}withSource(e,t,r){this._catchUp(e,t),this._buf.withSource(e,t,r)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,t=!1){this._maybeAddParen(e),this._maybeIndent(e),t?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith("\n")&&"\n"!==e[0]&&this._buf.queue(this._getIndent())}_maybeAddParen(e){const t=this._parenPushNewlineState;if(!t)return;let r;for(r=0;r<e.length&&" "===e[r];r++)continue;if(r===e.length)return;const n=e[r];if("\n"!==n){if("/"!==n||r+1===e.length)return void(this._parenPushNewlineState=null);const t=e[r+1];if("*"===t){if(d.test(e.slice(r+2,e.length-2)))return}else if("/"!==t)return void(this._parenPushNewlineState=null)}this.token("("),this.indent(),t.printed=!0}_catchUp(e,t){if(!this.format.retainLines)return;const r=t?t[e]:null;if(null!=(null==r?void 0:r.line)){const e=r.line-this._buf.getCurrentLine();for(let t=0;t<e;t++)this._newline()}}_getIndent(){return this.format.indent.style.repeat(this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,(null==e?void 0:e.printed)&&(this.dedent(),this.newline(),this.token(")"))}print(e,t){if(!e)return;const r=this.format.concise;e._compact&&(this.format.concise=!0);const n=this[e.type];if(!n)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const i=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!i);let a=s.needsParens(e,t,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(a=!0),a&&this.token("("),this._printLeadingComments(e);const l=o.isProgram(e)||o.isFile(e)?null:e.loc;this.withSource("start",l,()=>{n.call(this,e,t)}),this._printTrailingComments(e),a&&this.token(")"),this._printStack.pop(),this.format.concise=r,this._insideAux=i}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const t=e.extra;if(t&&null!=t.raw&&null!=t.rawValue&&e.value===t.rawValue)return t.raw}printJoin(e,t,r={}){if(!(null==e?void 0:e.length))return;r.indent&&this.indent();const n={addNewlines:r.addNewlines};for(let i=0;i<e.length;i++){const s=e[i];s&&(r.statement&&this._printNewline(!0,s,t,n),this.print(s,t),r.iterator&&r.iterator(s,i),r.separator&&i<e.length-1&&r.separator.call(this),r.statement&&this._printNewline(!1,s,t,n))}r.indent&&this.dedent()}printAndIndentOnComments(e,t){const r=e.leadingComments&&e.leadingComments.length>0;r&&this.indent(),this.print(e,t),r&&this.dedent()}printBlock(e){const t=e.body;o.isEmptyStatement(t)||this.space(),this.print(t,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,t=!0){var r;(null==(r=e.innerComments)?void 0:r.length)&&(t&&this.indent(),this._printComments(e.innerComments),t&&this.dedent())}printSequence(e,t,r={}){return r.statement=!0,this.printJoin(e,t,r)}printList(e,t,r={}){return null==r.separator&&(r.separator=m),this.printJoin(e,t,r)}_printNewline(e,t,r,n){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let i=0;if(this._buf.hasContent()){e||i++,n.addNewlines&&(i+=n.addNewlines(e,t)||0),(e?s.needsWhitespaceBefore:s.needsWhitespaceAfter)(t,r)&&i++}this.newline(i)}_getComments(e,t){return t&&(e?t.leadingComments:t.trailingComments)||[]}_printComment(e,t){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;if(this._printedComments.add(e),null!=e.start){if(this._printedCommentStarts[e.start])return;this._printedCommentStarts[e.start]=!0}const r="CommentBlock"===e.type,n=r&&!t&&!this._noLineTerminator;n&&this._buf.hasContent()&&this.newline(1),this.endsWith("[")||this.endsWith("{")||this.space();let i=r||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(r&&this.format.indent.adjustMultilineComment){var s;const t=null==(s=e.loc)?void 0:s.start.column;if(t){const e=new RegExp("\\n\\s{1,"+t+"}","g");i=i.replace(e,"\n")}const r=Math.max(this._getIndent().length,this._buf.getCurrentColumn());i=i.replace(/\n(?!$)/g,`\n${" ".repeat(r)}`)}this.endsWith("/")&&this._space(),this.withSource("start",e.loc,()=>{this._append(i)}),n&&this.newline(1)}_printComments(e,t){if(null==e?void 0:e.length)if(t&&1===e.length&&d.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith("\n"));else for(const t of e)this._printComment(t)}}function m(){this.token(","),this.space()}r.default=h,Object.assign(h.prototype,a)},{"./buffer":61,"./generators":66,"./node":75,"@babel/types":198}],79:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,i=(n=e("source-map"))&&n.__esModule?n:{default:n};r.default=class{constructor(e,t){this._cachedMap=null,this._code=t,this._opts=e,this._rawMappings=[]}get(){if(!this._cachedMap){const e=this._cachedMap=new i.default.SourceMapGenerator({sourceRoot:this._opts.sourceRoot}),t=this._code;"string"==typeof t?e.setSourceContent(this._opts.sourceFileName.replace(/\\/g,"/"),t):"object"==typeof t&&Object.keys(t).forEach(r=>{e.setSourceContent(r.replace(/\\/g,"/"),t[r])}),this._rawMappings.forEach(t=>e.addMapping(t),e)}return this._cachedMap.toJSON()}getRawMappings(){return this._rawMappings.slice()}mark(e,t,r,n,i,s,o){this._lastGenLine!==e&&null===r||(o||this._lastGenLine!==e||this._lastSourceLine!==r||this._lastSourceColumn!==n)&&(this._cachedMap=null,this._lastGenLine=e,this._lastSourceLine=r,this._lastSourceColumn=n,this._rawMappings.push({name:i||void 0,generated:{line:e,column:t},source:null==r?void 0:(s||this._opts.sourceFileName).replace(/\\/g,"/"),original:null==r?void 0:{line:r,column:n}}))}}},{"source-map":467}],80:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getInclusionReasons=function(e,t,r){const n=r[e]||{};return Object.keys(t).reduce((e,r)=>{const a=(0,o.getLowestImplementedVersion)(n,r),l=t[r];if(a){const t=(0,o.isUnreleasedVersion)(a,r),n=(0,o.isUnreleasedVersion)(l,r);n||!t&&!i.default.lt(l.toString(),(0,o.semverify)(a))||(e[r]=(0,s.prettifyVersion)(l))}else e[r]=(0,s.prettifyVersion)(l);return e},{})};var n,i=(n=e("semver"))&&n.__esModule?n:{default:n},s=e("./pretty"),o=e("./utils")},{"./pretty":84,"./utils":86,semver:87}],81:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.targetsSupported=a,r.isRequired=l,r.default=function(e,t,r,n,i,s,o){const a=new Set,c={compatData:e,includes:t,excludes:r};for(const t in e)if(l(t,n,c))a.add(t);else if(o){const e=o.get(t);e&&a.add(e)}i&&i.forEach(e=>!r.has(e)&&a.add(e));s&&s.forEach(e=>!t.has(e)&&a.delete(e));return a};var n=o(e("semver")),i=o(e("@babel/compat-data/plugins")),s=e("./utils");function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){const r=Object.keys(e);return 0!==r.length&&0===r.filter(r=>{const i=(0,s.getLowestImplementedVersion)(t,r);if(!i)return!0;const o=e[r];if((0,s.isUnreleasedVersion)(o,r))return!1;if((0,s.isUnreleasedVersion)(i,r))return!0;if(!n.default.valid(o.toString()))throw new Error(`Invalid version passed for target "${r}": "${o}". `+"Versions must be in semver format (major.minor.patch)");return n.default.gt((0,s.semverify)(i),o.toString())}).length}function l(e,t,{compatData:r=i.default,includes:n,excludes:s}={}){return(null==s||!s.has(e))&&(!(null==n||!n.has(e))||!a(t,r[e]))}},{"./utils":86,"@babel/compat-data/plugins":24,semver:87}],82:[function(e,t,r){(function(t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isBrowsersQueryValid=g,r.default=function(e={},t={}){let{browsers:r}=e;if(e.esmodules){const e=o.default["es6.module"];r=Object.keys(e).map(t=>`${t} ${e[t]}`).join(", ")}const u=function(e){return(0,s.default)(void 0===e||g(e),`Invalid Option: '${String(e)}' is not a valid browserslist query`),e}(r),p=Object.assign({},e);delete p.esmodules,delete p.browsers;let f=function(e){const t=Object.keys(c.TargetNames);for(const r in e)if(!c.TargetNames[r])throw new Error(`Invalid Option: '${r}' is not a valid target\n        Maybe you meant to use '${(0,i.default)(r,t)}'?`);return e}(p);const d=!!u,h=d||Object.keys(f).length>0,b=!t.ignoreBrowserslistConfig&&!h;if(d||b){h||(n.default.defaults=(E=f,Object.keys(E).reduce((e,t)=>{if(y.indexOf(t)>=0){const r=E[t];return e.concat(`${t} ${r}`)}return e},[])));const e=(0,n.default)(u,{path:t.configPath,mobileToDesktop:!0,env:t.browserslistEnv}),r=function(e){return e.reduce((e,t)=>{const[r,n]=t.split(" "),i=l.browserNameMap[r];if(!i)return e;try{const t=n.split("-")[0].toLowerCase(),s=(0,a.isUnreleasedVersion)(t,r);if(!e[i])return e[i]=s?t:(0,a.semverify)(t),e;const o=e[i],l=(0,a.isUnreleasedVersion)(o,r);if(l&&s)e[i]=(0,a.getLowestUnreleased)(o,t,r);else if(l)e[i]=(0,a.semverify)(t);else if(!l&&!s){const r=(0,a.semverify)(t);e[i]=(0,a.semverMin)(o,r)}}catch(e){}return e},{})}(e);f=Object.assign(r,f),n.default.defaults=m}var E;const x=Object.keys(f).sort().reduce((e,t)=>{var r;const n=f[t];"number"==typeof n&&n%1!=0&&e.decimalWarnings.push({target:t,value:n});const i=null!=(r=v[t])?r:v.__default,[s,o]=i(t,n);return o&&(e.targets[s]=o),e},{targets:{},decimalWarnings:[]});return T=x.decimalWarnings,(null==T?void 0:T.length)&&(console.log("Warning, the following targets are using a decimal version:"),console.log(""),T.forEach(({target:e,value:t})=>console.log(`  ${e}: ${t}`)),console.log(""),console.log("We recommend using a string for minor/patch versions to avoid numbers like 6.10"),console.log("getting parsed as 6.1, which can lead to unexpected behavior."),console.log("")),x.targets;var T},Object.defineProperty(r,"unreleasedLabels",{enumerable:!0,get:function(){return l.unreleasedLabels}}),Object.defineProperty(r,"prettifyTargets",{enumerable:!0,get:function(){return u.prettifyTargets}}),Object.defineProperty(r,"getInclusionReasons",{enumerable:!0,get:function(){return p.getInclusionReasons}}),Object.defineProperty(r,"filterItems",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(r,"isRequired",{enumerable:!0,get:function(){return f.isRequired}});var n=h(e("browserslist")),i=h(e("levenary")),s=h(e("invariant")),o=h(e("@babel/compat-data/native-modules")),a=e("./utils"),l=e("./targets"),c=e("./options"),u=e("./pretty"),p=e("./debug"),f=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("./filter-items"));function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function h(e){return e&&e.__esModule?e:{default:e}}const m=n.default.defaults,y=[...Object.keys(n.default.data),...Object.keys(n.default.aliases)];function g(e){return"string"==typeof e||Array.isArray(e)}function b(e,t){try{return(0,a.semverify)(t)}catch(r){throw new Error(`Invalid Option: '${t}' is not a valid value for 'targets.${e}'.`)}}const v={__default:(e,t)=>[e,(0,a.isUnreleasedVersion)(t,e)?t.toLowerCase():b(e,t)],node:(e,r)=>[e,!0===r||"current"===r?t.versions.node:b(e,r)]}}).call(this,e("_process"))},{"./debug":80,"./filter-items":81,"./options":83,"./pretty":84,"./targets":85,"./utils":86,"@babel/compat-data/native-modules":23,_process:13,browserslist:237,invariant:258,levenary:262}],83:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TargetNames=void 0;r.TargetNames={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung"}},{}],84:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.prettifyVersion=o,r.prettifyTargets=function(e){return Object.keys(e).reduce((t,r)=>{let n=e[r];const i=s.unreleasedLabels[r];return"string"==typeof n&&i!==n&&(n=o(n)),t[r]=n,t},{})};var n,i=(n=e("semver"))&&n.__esModule?n:{default:n},s=e("./targets");function o(e){if("string"!=typeof e)return e;const t=[i.default.major(e)],r=i.default.minor(e),n=i.default.patch(e);return(r||n)&&t.push(r),n&&t.push(n),t.join(".")}},{"./targets":85,semver:87}],85:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.browserNameMap=r.unreleasedLabels=void 0;r.unreleasedLabels={safari:"tp"};r.browserNameMap={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"}},{}],86:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.semverMin=l,r.semverify=function(e){if("string"==typeof e&&i.default.valid(e))return e;(0,n.default)("number"==typeof e||"string"==typeof e&&a.test(e),`'${e}' is not a valid version`);const t=e.toString().split(".");for(;t.length<3;)t.push("0");return t.join(".")},r.isUnreleasedVersion=function(e,t){const r=s.unreleasedLabels[t];return!!r&&r===e.toString().toLowerCase()},r.getLowestUnreleased=function(e,t,r){const n=s.unreleasedLabels[r],i=[e,t].some(e=>e===n);if(i)return e===i?t:e||t;return l(e,t)},r.getLowestImplementedVersion=function(e,t){const r=e[t];if(!r&&"android"===t)return e.chrome;return r};var n=o(e("invariant")),i=o(e("semver")),s=e("./targets");function o(e){return e&&e.__esModule?e:{default:e}}const a=/^(\d+|\d+.\d+)$/;function l(e,t){return e&&i.default.lt(e,t)?e:t}},{"./targets":85,invariant:258,semver:87}],87:[function(e,t,r){arguments[4][59][0].apply(r,arguments)},{_process:13,dup:59}],88:[function(e,t,r){"use strict";r.__esModule=!0,r.stringifyTargetsMultiline=function(e){return JSON.stringify((0,n.prettifyTargets)(e),null,2)},r.stringifyTargets=function(e){return JSON.stringify(e).replace(/,/g,", ").replace(/^\{"/,'{ "').replace(/"\}$/,'" }')},r.presetEnvSilentDebugHeader=void 0;var n=e("@babel/helper-compilation-targets");r.presetEnvSilentDebugHeader="#__secret_key__@babel/preset-env__don't_log_debug_header_and_resolved_targets"},{"@babel/helper-compilation-targets":82}],89:[function(e,t,r){(function(t){"use strict";r.__esModule=!0,r.has=function(e,t){try{return n.default.sync(t,{basedir:e}),!0}catch{return!1}},r.logMissing=o,r.laterLogMissing=function(e){e.forEach(e=>a.add(e)),l()};var n=s(e("resolve")),i=s(e("lodash.debounce"));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){if(0===e.size)return;const r=Array.from(e).sort().join(" ");console.warn("\nSome polyfills have been added but are not present in your dependencies.\nPlease run one of the following commands:\n"+`\tnpm install --save ${r}\n`+`\tyarn add ${r}\n`),t.exitCode=1}let a=new Set;const l=(0,i.default)(()=>{o(a),a=new Set},1e3)}).call(this,e("_process"))},{_process:13,"lodash.debounce":263,resolve:446}],90:[function(e,t,r){"use strict";r.__esModule=!0,r.default=void 0;var n=e("@babel/core");r.default=class{constructor(){this._imports=new WeakMap,this._anonymousImports=new WeakMap,this._lastImports=new WeakMap}storeAnonymous(e,t,r){const i=this._normalizeKey(e,t,""),s=this._ensure(this._anonymousImports,e,Set);if(s.has(i))return;const o=r("script"===e.node.sourceType,n.types.stringLiteral(t));s.add(i),this._injectImport(e,o)}storeNamed(e,t,r,i){const s=this._normalizeKey(e,t,r),o=this._ensure(this._imports,e,Map);if(!o.has(s)){const{node:a,name:l}=i("script"===e.node.sourceType,n.types.stringLiteral(t),n.types.identifier(r));o.set(s,l),this._injectImport(e,a)}return n.types.identifier(o.get(s))}_injectImport(e,t){let r=this._lastImports.get(e);r=(r=r&&r.node?r.insertAfter(t):e.unshiftContainer("body",t))[r.length-1],this._lastImports.set(e,r)}_ensure(e,t,r){return e.has(t)||e.set(t,new r),e.get(t)}_normalizeKey(e,t,r){return`${e.node.sourceType}::${t}::${r}`}}},{"@babel/core":43}],91:[function(e,t,r){"use strict";r.__esModule=!0,r.default=function(e){return(0,n.declare)((t,r,n)=>{t.assertVersion(7);const{traverse:f}=t;let d;const h=(0,l.applyMissingDependenciesDefaults)(r,t),{debug:m,method:y,targets:g,provider:b,callProvider:v}=function(e,t,r,n,a,c){const{method:f,methodName:d,targets:h,debug:m,shouldInjectPolyfill:y,providerOptions:g}=function(e){const{method:t,targets:r,ignoreBrowserslistConfig:n,configPath:s,debug:o,shouldInjectPolyfill:a,...l}=e;let c;if("usage-global"===t)c="usageGlobal";else if("entry-global"===t)c="entryGlobal";else{if("usage-pure"!==t)throw"string"!=typeof t?new Error(".method must be a string"):new Error('.method must be one of "entry-global", "usage-global"'+` or "usage-pure" (received ${JSON.stringify(t)})`);c="usagePure"}if("function"==typeof a){if(e.include||e.exclude)throw new Error(".include and .exclude are not supported when using the .shouldInjectPolyfill function.")}else if(null!=a)throw new Error(".shouldInjectPolyfill must be a function, or undefined"+` (received ${JSON.stringify(a)})`);const u=(0,i.default)(r,{ignoreBrowserslistConfig:n,configPath:s});return{method:t,methodName:c,targets:u,shouldInjectPolyfill:a,debug:!!o,providerOptions:l}}(t),b=(0,s.createUtilsGetter)(new o.default);let v,E,x,T,S;const P=new Map,w={babel:c,getUtils:b,method:t.method,targets:h,createMetaResolver:p.default,shouldInjectPolyfill(t){if(void 0===T)throw new Error(`Internal error in the ${e.name} provider: `+"shouldInjectPolyfill() can't be called during initialization.");if(!T.has(t))throw new Error(`Internal error in the ${A.name} provider: `+`unknown polyfill "${t}".`);if(S&&!S(t))return!1;let r=(0,i.isRequired)(t,h,{compatData:x,includes:v,excludes:E});if(y&&"boolean"!=typeof(r=y(t,r)))throw new Error(".shouldInjectPolyfill must return a boolean.");return r},debug(e){a().found=!0,m&&e&&(a().polyfills.has(A.name)||a().polyfills.set(e,x&&e&&x[e]))},assertDependency(e,t="*"){if(!1===r)return;const i="*"===t?e:`${e}@^${t}`,s=!r.all&&function(e,t,r){let n=e.get(t);void 0===n&&(n=r(),e.set(t,n));return n}(P,e,()=>u.has(n,e));s||a().missingDeps.add(i)}},A=e(w,g,n);if("function"!=typeof A[d])throw new Error(`The "${A.name||e.name}" provider doesn't `+`support the "${f}" polyfilling method.`);Array.isArray(A.polyfills)?(T=new Set(A.polyfills),S=A.filterPolyfills):A.polyfills?(T=new Set(Object.keys(A.polyfills)),x=A.polyfills,S=A.filterPolyfills):T=new Set;return({include:v,exclude:E}=(0,l.validateIncludeExclude)(A.name||e.name,T,g.include||[],g.exclude||[])),{debug:m,method:f,targets:h,provider:A,callProvider(e,t){const r=b(t);A[d](e,r,t)}}}(e,r,h,n,()=>d,t),E="entry-global"===y?c.entry:c.usage,x=b.visitor?f.visitors.merge([E(v),b.visitor]):E(v);return m&&m!==a.presetEnvSilentDebugHeader&&(console.log(`${b.name}: \`DEBUG\` option`),console.log(`\nUsing targets: ${(0,a.stringifyTargetsMultiline)(g)}`),console.log(`\nUsing polyfills with \`${y}\` method:`)),{name:"inject-polyfills",visitor:x,pre(){var e;d={polyfills:new Map,found:!1,providers:new Set,missingDeps:new Set},null==(e=b.pre)||e.apply(this,arguments)},post(){var e;if(null==(e=b.post)||e.apply(this,arguments),!1!==h&&("per-file"===h.log?u.logMissing(d.missingDeps):u.laterLogMissing(d.missingDeps)),m)if(this.filename&&console.log(`\n[${this.filename}]`),0!==d.polyfills.size){"entry-global"===y?console.log(`The ${b.name} polyfill entry has been replaced with `+"the following polyfills:"):console.log(`The ${b.name} polyfill added the following polyfills:`);for(const[e,t]of d.polyfills)if(t){const r=(0,i.getInclusionReasons)(e,g,t),n=JSON.stringify(r).replace(/,/g,", ").replace(/^\{"/,'{ "').replace(/"\}$/,'" }');console.log(`  ${e} ${n}`)}else console.log(`  ${e}`)}else console.log("entry-global"===y?d.found?`Based on your targets, the ${b.name} polyfill did not add any polyfill.`:`The entry point for the ${b.name} polyfill has not been found.`:`Based on your code and targets, the ${b.name} polyfill did not add any polyfill.`)}}})};var n=e("@babel/helper-plugin-utils"),i=h(e("@babel/helper-compilation-targets")),s=e("./utils"),o=f(e("./imports-cache")),a=e("./debug-utils"),l=e("./normalize-options"),c=h(e("./visitors")),u=h(e("./dependencies")),p=f(e("./meta-resolver"));function f(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function h(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}},{"./debug-utils":88,"./dependencies":89,"./imports-cache":90,"./meta-resolver":92,"./normalize-options":93,"./utils":94,"./visitors":96,"@babel/helper-compilation-targets":82,"@babel/helper-plugin-utils":111}],92:[function(e,t,r){"use strict";r.__esModule=!0,r.default=function(e){const{static:t,instance:r,global:s}=e;return e=>{if("global"===e.kind&&s&&(0,n.has)(s,e.name))return{kind:"global",desc:s[e.name],name:e.name};if("property"===e.kind||"in"===e.kind){const{placement:o,object:a,key:l}=e;if(a&&"static"===o){if(s&&i.has(a)&&(0,n.has)(s,l))return{kind:"global",desc:s[l],name:l};if(t&&(0,n.has)(t,a)&&(0,n.has)(t[a],l))return{kind:"static",desc:t[a][l],name:`${a}$${l}`}}if(r&&(0,n.has)(r,l))return{kind:"instance",desc:r[l],name:`${l}`}}}};var n=e("./utils");const i=new Set(["global","globalThis","self","window"])},{"./utils":94}],93:[function(e,t,r){"use strict";r.__esModule=!0,r.validateIncludeExclude=function(e,t,r,s){let o;const a=e=>{const r=function(e){if(e instanceof RegExp)return e;try{return new RegExp(`^${e}$`)}catch{return null}}(e);if(!r)return!1;let n=!1;for(const e of t)r.test(e)&&(n=!0,o.add(e));return!n},l=o=new Set,c=Array.from(r).filter(a),u=o=new Set,p=Array.from(s).filter(a),f=(0,n.intersection)(l,u);if(f.size>0||c.length>0||p.length>0)throw new Error(`Error while validating the "${e}" provider options:\n`+i("include",c)+i("exclude",p)+function(e){return e.size?'  - The following polyfills were matched both by "include" and "exclude" patterns:\n'+Array.from(e,e=>`    ${e}\n`).join(""):""}(f));return{include:l,exclude:u}},r.applyMissingDependenciesDefaults=function(e,t){const{missingDependencies:r={}}=e;if(!1===r)return!1;const n=t.caller(e=>null==e?void 0:e.name),{log:i="deferred",inject:s=("rollup-plugin-babel"===n?"throw":"import"),all:o=!1}=r;return{log:i,inject:s,all:o}};var n=e("./utils");function i(e,t){return t.length?`  - The following "${e}" patterns didn't match any polyfill:\n`+t.map(e=>`    ${String(e)}\n`).join(""):""}},{"./utils":94}],94:[function(e,t,r){"use strict";r.__esModule=!0,r.intersection=function(e,t){const r=new Set;return e.forEach(e=>t.has(e)&&r.add(e)),r},r.has=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.resolveKey=function e(t,r=!1){const{node:n,parent:i,scope:s}=t;if(t.isStringLiteral())return n.value;const{name:o}=n;const a=t.isIdentifier();if(a&&!r&&!i.computed)return o;if(r&&t.isMemberExpression()&&t.get("object").isIdentifier({name:"Symbol"})&&!s.hasBinding("Symbol",!0)){const r=e(t.get("property"),t.node.computed);if(r)return"Symbol."+r}if(!a||s.hasBinding(o,!0)){const{value:e}=t.evaluate();if("string"==typeof e)return e}},r.resolveSource=function(e){if(e.isMemberExpression()&&e.get("property").isIdentifier({name:"prototype"})){const t=i(e.get("object"));return t?{id:t,placement:"prototype"}:{id:null,placement:null}}const t=i(e);if(t)return{id:t,placement:"static"};const{value:r}=e.evaluate();if(void 0!==r)return{id:(n=r,Object.prototype.toString.call(n).slice(8,-1)),placement:"prototype"};if(e.isRegExpLiteral())return{id:"RegExp",placement:"prototype"};if(e.isFunction())return{id:"Function",placement:"prototype"};var n;return{id:null,placement:null}},r.getImportSource=function({node:e}){if(0===e.specifiers.length)return e.source.value},r.getRequireSource=function({node:e}){if(!n.types.isExpressionStatement(e))return;const{expression:t}=e;if(n.types.isCallExpression(t)&&n.types.isIdentifier(t.callee)&&"require"===t.callee.name&&1===t.arguments.length&&n.types.isStringLiteral(t.arguments[0]))return t.arguments[0].value},r.createUtilsGetter=function(e){return t=>{const r=t.findParent(e=>e.isProgram());return{injectGlobalImport(t){e.storeAnonymous(r,t,(e,t)=>e?n.template.statement.ast`require(${t})`:n.types.importDeclaration([],t))},injectNamedImport:(t,i,o=i)=>e.storeNamed(r,t,i,(e,t,i)=>{const a=r.scope.generateUidIdentifier(o);return{node:e?s(n.template.statement.ast`
                  var ${a} = require(${t}).${i}
                `):n.types.importDeclaration([n.types.importSpecifier(a,i)],t),name:a.name}}),injectDefaultImport:(t,i=t)=>e.storeNamed(r,t,"default",(e,t)=>{const o=r.scope.generateUidIdentifier(i);return{node:e?s(n.template.statement.ast`var ${o} = require(${t})`):n.types.importDeclaration([n.types.importDefaultSpecifier(o)],t),name:o.name}})}}};var n=e("@babel/core");function i(e){if(e.isIdentifier()&&!e.scope.hasBinding(e.node.name,!0))return e.node.name;const{deopt:t}=e.evaluate();return t&&t.isIdentifier()?t.node.name:void 0}function s(e){return e._blockHoist=3,e}},{"@babel/core":43}],95:[function(e,t,r){"use strict";r.__esModule=!0,r.default=void 0;var n=e("../utils");r.default=(e=>({ImportDeclaration(t){const r=(0,n.getImportSource)(t);r&&e({kind:"import",source:r},t)},Program(t){t.get("body").forEach(t=>{const r=(0,n.getRequireSource)(t);r&&e({kind:"import",source:r},t)})}}))},{"../utils":94}],96:[function(e,t,r){"use strict";r.__esModule=!0,r.entry=r.usage=void 0;var n=s(e("./usage"));r.usage=n.default;var i=s(e("./entry"));function s(e){return e&&e.__esModule?e:{default:e}}r.entry=i.default},{"./entry":95,"./usage":97}],97:[function(e,t,r){"use strict";r.__esModule=!0,r.default=void 0;var n=e("../utils");r.default=(e=>{function t(t,r,n,i){return e({kind:"property",object:t,key:r,placement:n},i)}return{ReferencedIdentifier(t){const{node:{name:r},scope:n}=t;n.getBindingIdentifier(r)||e({kind:"global",name:r},t)},MemberExpression(e){const r=(0,n.resolveKey)(e.get("property"),e.node.computed);if(!r||"prototype"===r)return;const i=e.get("object"),s=i.scope.getBinding(i.node.name);if(s&&s.path.isImportNamespaceSpecifier())return;const o=(0,n.resolveSource)(i);return t(o.id,r,o.placement,e)},ObjectPattern(e){const{parentPath:r,parent:i}=e;let s;if(r.isVariableDeclarator())s=r.get("init");else if(r.isAssignmentExpression())s=r.get("right");else if(r.isFunction()){const t=r.parentPath;(t.isCallExpression()||t.isNewExpression())&&t.node.callee===i&&(s=t.get("arguments")[e.key])}let o=null,a=null;s&&({id:o,placement:a}=(0,n.resolveSource)(s));for(const r of e.get("properties"))if(r.isObjectProperty()){const e=(0,n.resolveKey)(r.get("key"));e&&t(o,e,a,r)}},BinaryExpression(t){if("in"!==t.node.operator)return;const r=(0,n.resolveSource)(t.get("right")),i=(0,n.resolveKey)(t.get("left"),!0);i&&e({kind:"in",object:r.id,key:i,placement:r.placement},t)}}})},{"../utils":94}],98:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function({node:e,parent:t,scope:r,id:i},o=!1){if(e.id)return;if(!s.isObjectProperty(t)&&!s.isObjectMethod(t,{kind:"method"})||t.computed&&!s.isLiteral(t.key)){if(s.isVariableDeclarator(t)){if(i=t.id,s.isIdentifier(i)&&!o){const t=r.parent.getBinding(i.name);if(t&&t.constant&&r.getBinding(i.name)===t)return e.id=s.cloneNode(i),void(e.id[s.NOT_LOCAL_BINDING]=!0)}}else if(s.isAssignmentExpression(t,{operator:"="}))i=t.left;else if(!i)return}else i=t.key;let a;i&&s.isLiteral(i)?a=function(e){if(s.isNullLiteral(e))return"null";if(s.isRegExpLiteral(e))return`_${e.pattern}_${e.flags}`;if(s.isTemplateLiteral(e))return e.quasis.map(e=>e.value.raw).join("");if(void 0!==e.value)return e.value+"";return""}(i):i&&s.isIdentifier(i)&&(a=i.name);if(void 0===a)return;return a=s.toBindingIdentifierName(a),(i=s.identifier(a))[s.NOT_LOCAL_BINDING]=!0,function(e,t,r,i){if(e.selfReference){if(!i.hasBinding(r.name)||i.hasGlobal(r.name)){if(!s.isFunction(t))return;let e=l;t.generator&&(e=c);const o=e({FUNCTION:t,FUNCTION_ID:r,FUNCTION_KEY:i.generateUidIdentifier(r.name)}).expression,a=o.callee.body.body[0].params;for(let e=0,r=(0,n.default)(t);e<r;e++)a.push(i.generateUidIdentifier("x"));return o}i.rename(r.name)}t.id=r,i.getProgramParent().references[r.name]=!0}(function(e,t,r){const n={selfAssignment:!1,selfReference:!1,outerDeclar:r.getBindingIdentifier(t),references:[],name:t},i=r.getOwnBinding(t);return i?"param"===i.kind&&(n.selfReference=!0):(n.outerDeclar||r.hasGlobal(t))&&r.traverse(e,u,n),n}(e,a,r),e,i,r)||e};var n=a(e("@babel/helper-get-function-arity")),i=a(e("@babel/template")),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e){return e&&e.__esModule?e:{default:e}}const l=(0,i.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),c=(0,i.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),u={"ReferencedIdentifier|BindingIdentifier"(e,t){if(e.node.name!==t.name)return;e.scope.getBindingIdentifier(t.name)===t.outerDeclar&&(t.selfReference=!0,e.stop())}}},{"@babel/helper-get-function-arity":99,"@babel/template":124,"@babel/types":198}],99:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const t=e.params;for(let e=0;e<t.length;e++){const r=t[e];if(n.isAssignmentPattern(r)||n.isRestElement(r))return e}return t.length};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},{"@babel/types":198}],100:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r){e.traverse(t,Object.assign({},a,r,{memoiser:new s}))};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}class s{constructor(){this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const t=this._map.get(e),{value:r}=t;return t.count--,0===t.count?n.assignmentExpression("=",r,e):r}set(e,t,r){return this._map.set(e,{count:r,value:t})}}function o(e,t){const{node:r}=e;if(e.isOptionalMemberExpression())return n.memberExpression(t,r.property,r.computed);if(e.isOptionalCallExpression()){const i=e.get("callee");if(e.node.optional&&i.isOptionalMemberExpression()){const{object:s}=i.node,o=e.scope.maybeGenerateMemoised(s)||s;return i.get("object").replaceWith(n.assignmentExpression("=",o,s)),n.callExpression(n.memberExpression(t,n.identifier("call")),[o,...r.arguments])}return n.callExpression(t,r.arguments)}return e.node}const a={memoise(){},handle(e){const{node:t,parent:r,parentPath:i}=e;if(e.isOptionalMemberExpression()){if(function(e){for(;e&&!e.isProgram();){const{parentPath:t,container:r,listKey:n}=e,i=t.node;if(n){if(r!==i[n])return!0}else if(r!==i)return!0;e=t}return!1}(e))return;const s=e.find(({node:t,parent:r,parentPath:n})=>n.isOptionalMemberExpression()?r.optional||r.object!==t:!n.isOptionalCallExpression()||(t!==e.node&&r.optional||r.callee!==t)),a=s.parentPath;if(a.isUpdateExpression({argument:t})||a.isAssignmentExpression({left:t}))throw e.buildCodeFrameError("can't handle assignment");const l=a.isUnaryExpression({operator:"delete"});if(l&&s.isOptionalMemberExpression()&&s.get("property").isPrivateName())throw e.buildCodeFrameError("can't delete a private class element");let c=e;for(;;)if(c.isOptionalMemberExpression()){if(c.node.optional)break;c=c.get("object")}else{if(!c.isOptionalCallExpression())throw new Error(`Internal error: unexpected ${c.node.type}`);if(c.node.optional)break;c=c.get("callee")}const{scope:u}=e,p=c.isOptionalMemberExpression()?"object":"callee",f=c.node[p],d=u.maybeGenerateMemoised(f),h=null!=d?d:f,m=i.isOptionalCallExpression({callee:t}),y=i.isCallExpression({callee:t});c.replaceWith(o(c,h)),m?r.optional?i.replaceWith(this.optionalCall(e,r.arguments)):i.replaceWith(this.call(e,r.arguments)):y?e.replaceWith(this.boundGet(e)):e.replaceWith(this.get(e));let g,b=e.node;for(let t=e;t!==s;){const{parentPath:e}=t;if(e===s&&m&&r.optional){b=e.node;break}b=o(e,b),t=e}const v=s.parentPath;if(n.isMemberExpression(b)&&v.isOptionalCallExpression({callee:s.node,optional:!0})){const{object:t}=b;(g=e.scope.maybeGenerateMemoised(t))&&(b.object=n.assignmentExpression("=",g,t))}let E=s;if(l&&(E=v,b=v.node),E.replaceWith(n.conditionalExpression(n.logicalExpression("||",n.binaryExpression("===",d?n.assignmentExpression("=",n.cloneNode(h),n.cloneNode(f)):n.cloneNode(h),n.nullLiteral()),n.binaryExpression("===",n.cloneNode(h),u.buildUndefinedNode())),l?n.booleanLiteral(!0):u.buildUndefinedNode(),b)),g){const e=v.node;v.replaceWith(n.optionalCallExpression(n.optionalMemberExpression(e.callee,n.identifier("call"),!1,!0),[n.cloneNode(g),...e.arguments],!1))}}else if(i.isUpdateExpression({argument:t})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:s,prefix:o}=r;this.memoise(e,2);const a=n.binaryExpression(s[0],n.unaryExpression("+",this.get(e)),n.numericLiteral(1));if(o)i.replaceWith(this.set(e,a));else{const{scope:r}=e,s=r.generateUidIdentifierBasedOnNode(t);r.push({id:s}),a.left=n.assignmentExpression("=",n.cloneNode(s),a.left),i.replaceWith(n.sequenceExpression([this.set(e,a),n.cloneNode(s)]))}}else{if(i.isAssignmentExpression({left:t})){if(this.simpleSet)return void e.replaceWith(this.simpleSet(e));const{operator:t,right:s}=r;let o=s;return"="!==t&&(this.memoise(e,2),o=n.binaryExpression(t.slice(0,-1),this.get(e),o)),void i.replaceWith(this.set(e,o))}i.isCallExpression({callee:t})?i.replaceWith(this.call(e,r.arguments)):i.isOptionalCallExpression({callee:t})?i.replaceWith(this.optionalCall(e,r.arguments)):i.isForXStatement({left:t})||i.isObjectProperty({value:t})&&i.parentPath.isObjectPattern()||i.isAssignmentPattern({left:t})&&i.parentPath.isObjectProperty({value:r})&&i.parentPath.parentPath.isObjectPattern()||i.isArrayPattern()||i.isAssignmentPattern({left:t})&&i.parentPath.isArrayPattern()||i.isRestElement()?e.replaceWith(this.destructureSet(e)):e.replaceWith(this.get(e))}}}},{"@babel/types":198}],101:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,i=(n=e("assert"))&&n.__esModule?n:{default:n},s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}r.default=class{constructor(e,t,r){this._statements=[],this._resultName=null,this._scope=null,this._hub=null,this._scope=t,this._hub=r,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(s.importDeclaration([],s.stringLiteral(this._importedSource))),this}require(){return this._statements.push(s.expressionStatement(s.callExpression(s.identifier("require"),[s.stringLiteral(this._importedSource)]))),this}namespace(e="namespace"){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,i.default)("ImportDeclaration"===t.type),(0,i.default)(0===t.specifiers.length),t.specifiers=[s.importNamespaceSpecifier(e)],this._resultName=s.cloneNode(e),this}default(e){e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return(0,i.default)("ImportDeclaration"===t.type),(0,i.default)(0===t.specifiers.length),t.specifiers=[s.importDefaultSpecifier(e)],this._resultName=s.cloneNode(e),this}named(e,t){if("default"===t)return this.default(e);e=this._scope.generateUidIdentifier(e);const r=this._statements[this._statements.length-1];return(0,i.default)("ImportDeclaration"===r.type),(0,i.default)(0===r.specifiers.length),r.specifiers=[s.importSpecifier(e,s.identifier(t))],this._resultName=s.cloneNode(e),this}var(e){e=this._scope.generateUidIdentifier(e);let t=this._statements[this._statements.length-1];return"ExpressionStatement"!==t.type&&((0,i.default)(this._resultName),t=s.expressionStatement(this._resultName),this._statements.push(t)),this._statements[this._statements.length-1]=s.variableDeclaration("var",[s.variableDeclarator(e,t.expression)]),this._resultName=s.cloneNode(e),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=s.callExpression(e,[t.expression]):"VariableDeclaration"===t.type?((0,i.default)(1===t.declarations.length),t.declarations[0].init=s.callExpression(e,[t.declarations[0].init])):i.default.fail("Unexpected type."),this}prop(e){const t=this._statements[this._statements.length-1];return"ExpressionStatement"===t.type?t.expression=s.memberExpression(t.expression,s.identifier(e)):"VariableDeclaration"===t.type?((0,i.default)(1===t.declarations.length),t.declarations[0].init=s.memberExpression(t.declarations[0].init,s.identifier(e))):i.default.fail("Unexpected type:"+t.type),this}read(e){this._resultName=s.memberExpression(this._resultName,s.identifier(e))}}},{"@babel/types":198,assert:1}],102:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=l(e("assert")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types")),s=l(e("./import-builder")),o=l(e("./is-module"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}r.default=class{constructor(e,t,r){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1};const n=e.find(e=>e.isProgram());this._programPath=n,this._programScope=n.scope,this._hub=n.hub,this._defaultOpts=this._applyDefaults(t,r,!0)}addDefault(e,t){return this.addNamed("default",e,t)}addNamed(e,t,r){return(0,n.default)("string"==typeof e),this._generateImport(this._applyDefaults(t,r),e)}addNamespace(e,t){return this._generateImport(this._applyDefaults(e,t),null)}addSideEffect(e,t){return this._generateImport(this._applyDefaults(e,t),!1)}_applyDefaults(e,t,r=!1){const i=[];"string"==typeof e?(i.push({importedSource:e}),i.push(t)):((0,n.default)(!t,"Unexpected secondary arguments."),i.push(e));const s=Object.assign({},this._defaultOpts);for(const e of i)e&&(Object.keys(s).forEach(t=>{void 0!==e[t]&&(s[t]=e[t])}),r||(void 0!==e.nameHint&&(s.nameHint=e.nameHint),void 0!==e.blockHoist&&(s.blockHoist=e.blockHoist)));return s}_generateImport(e,t){const r="default"===t,n=!!t&&!r,a=null===t,{importedSource:l,importedType:c,importedInterop:u,importingInterop:p,ensureLiveReference:f,ensureNoContext:d,nameHint:h,blockHoist:m}=e;let y=h||t;const g=(0,o.default)(this._programPath),b=g&&"node"===p,v=g&&"babel"===p,E=new s.default(l,this._programScope,this._hub);if("es6"===c){if(!b&&!v)throw new Error("Cannot import an ES6 module from CommonJS");E.import(),a?E.namespace(h||l):(r||n)&&E.named(y,t)}else{if("commonjs"!==c)throw new Error(`Unexpected interopType "${c}"`);if("babel"===u)if(b){y="default"!==y?y:l;const e=`${l}$es6Default`;E.import(),a?E.default(e).var(y||l).wildcardInterop():r?f?E.default(e).var(y||l).defaultInterop().read("default"):E.default(e).var(y).defaultInterop().prop(t):n&&E.default(e).read(t)}else v?(E.import(),a?E.namespace(y||l):(r||n)&&E.named(y,t)):(E.require(),a?E.var(y||l).wildcardInterop():(r||n)&&f?r?(y="default"!==y?y:l,E.var(y).read(t),E.defaultInterop()):E.var(l).read(t):r?E.var(y).defaultInterop().prop(t):n&&E.var(y).prop(t));else if("compiled"===u)b?(E.import(),a?E.default(y||l):(r||n)&&E.default(l).read(y)):v?(E.import(),a?E.namespace(y||l):(r||n)&&E.named(y,t)):(E.require(),a?E.var(y||l):(r||n)&&(f?E.var(l).read(y):E.prop(t).var(y)));else{if("uncompiled"!==u)throw new Error(`Unknown importedInterop "${u}".`);if(r&&f)throw new Error("No live reference for commonjs default");b?(E.import(),a?E.default(y||l):r?E.default(y):n&&E.default(l).read(y)):v?(E.import(),a?E.default(y||l):r?E.default(y):n&&E.named(y,t)):(E.require(),a?E.var(y||l):r?E.var(y):n&&(f?E.var(l).read(y):E.var(y).prop(t)))}}const{statements:x,resultName:T}=E.done();return this._insertStatements(x,m),(r||n)&&d&&"Identifier"!==T.type?i.sequenceExpression([i.numericLiteral(0),T]):T}_insertStatements(e,t=3){e.forEach(e=>{e._blockHoist=t});const r=this._programPath.get("body").find(e=>{const t=e.node._blockHoist;return Number.isFinite(t)&&t<4});r?r.insertBefore(e):this._programPath.unshiftContainer("body",e)}}},{"./import-builder":101,"./is-module":104,"@babel/types":198,assert:1}],103:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.addDefault=function(e,t,r){return new n.default(e).addDefault(t,r)},r.addNamed=function(e,t,r,i){return new n.default(e).addNamed(t,r,i)},r.addNamespace=function(e,t,r){return new n.default(e).addNamespace(t,r)},r.addSideEffect=function(e,t,r){return new n.default(e).addSideEffect(t,r)},Object.defineProperty(r,"ImportInjector",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(r,"isModule",{enumerable:!0,get:function(){return i.default}});var n=s(e("./import-injector")),i=s(e("./is-module"));function s(e){return e&&e.__esModule?e:{default:e}}},{"./import-injector":102,"./is-module":104}],104:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const{sourceType:t}=e.node;if("module"!==t&&"script"!==t)throw e.buildCodeFrameError(`Unknown sourceType "${t}", cannot transform.`);return"module"===e.node.sourceType}},{}],105:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var r,n,i;const{filename:s,filenameRelative:o=s,sourceRoot:a=(null!=(r=t.moduleRoot)?r:e.moduleRoot)}=e,{moduleId:l=e.moduleId,moduleIds:c=(null!=(n=e.moduleIds)?n:!!l),getModuleId:u=e.getModuleId,moduleRoot:p=(null!=(i=e.moduleRoot)?i:a)}=t;if(!c)return null;if(null!=l&&!u)return l;let f=null!=p?p+"/":"";if(o){const e=null!=a?new RegExp("^"+a+"/?"):"";f+=o.replace(e,"").replace(/\.(\w*?)$/,"")}return f=f.replace(/\\/g,"/"),u&&u(f)||f}},{}],106:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.rewriteModuleStatementsAndPrepareHeader=function(e,{exportName:t,strict:r,allowTopLevelThis:p,strictMode:f,loose:d,noInterop:h,lazy:g,esNamespaceOnly:b}){(0,n.default)((0,a.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const v=(0,u.default)(e,t,{noInterop:h,loose:d,lazy:g,esNamespaceOnly:b});p||(0,l.default)(e);if((0,c.default)(e,v),!1!==f){const t=e.node.directives.some(e=>"use strict"===e.value.value);t||e.unshiftContainer("directives",i.directive(i.directiveLiteral("use strict")))}const E=[];(0,u.hasExports)(v)&&!r&&E.push(function(e,t=!1){return(t?s.default.statement`
        EXPORTS.__esModule = true;
      `:s.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}(v,d));const x=function(e,t){const r=Object.create(null);for(const e of t.local.values())for(const t of e.names)r[t]=!0;let n=!1;for(const e of t.source.values()){for(const t of e.reexports.keys())r[t]=!0;for(const t of e.reexportNamespace)r[t]=!0;n=n||e.reexportAll}if(!n||0===Object.keys(r).length)return null;const s=e.scope.generateUidIdentifier("exportNames");return delete r.default,{name:s.name,statement:i.variableDeclaration("var",[i.variableDeclarator(s,i.valueToNode(r))])}}(e,v);x&&(v.exportNameListName=x.name,E.push(x.statement));return E.push(...function(e,t,r=!1){const n=[],s=[];for(const[e,r]of t.local)"import"===r.kind||("hoisted"===r.kind?n.push(y(t,r.names,i.identifier(e))):s.push(...r.names));for(const e of t.source.values()){r||n.push(...m(t,e,r));for(const t of e.reexportNamespace)s.push(t)}return n.push(...(0,o.default)(s,100).map(r=>y(t,r,e.scope.buildUndefinedNode()))),n}(e,v,d)),{meta:v,headers:E}},r.ensureStatementsHoisted=function(e){e.forEach(e=>{e._blockHoist=3})},r.wrapInterop=function(e,t,r){if("none"===r)return null;let n;if("default"===r)n="interopRequireDefault";else{if("namespace"!==r)throw new Error(`Unknown interop: ${r}`);n="interopRequireWildcard"}return i.callExpression(e.hub.addHelper(n),[t])},r.buildNamespaceInitStatements=function(e,t,r=!1){const n=[];let o=i.identifier(t.name);t.lazy&&(o=i.callExpression(o,[]));for(const e of t.importsNamespace)e!==t.name&&n.push(s.default.statement`var NAME = SOURCE;`({NAME:e,SOURCE:i.cloneNode(o)}));r&&n.push(...m(e,t,r));for(const r of t.reexportNamespace)n.push((t.lazy?s.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:s.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:r,NAMESPACE:i.cloneNode(o)}));if(t.reexportAll){const a=function(e,t,r){return(r?s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:t,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?s.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}(e,i.cloneNode(o),r);a.loc=t.reexportAll.loc,n.push(a)}return n},Object.defineProperty(r,"isModule",{enumerable:!0,get:function(){return a.isModule}}),Object.defineProperty(r,"rewriteThis",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(r,"hasExports",{enumerable:!0,get:function(){return u.hasExports}}),Object.defineProperty(r,"isSideEffectImport",{enumerable:!0,get:function(){return u.isSideEffectImport}}),Object.defineProperty(r,"getModuleName",{enumerable:!0,get:function(){return p.default}});var n=h(e("assert")),i=d(e("@babel/types")),s=h(e("@babel/template")),o=h(e("lodash/chunk")),a=e("@babel/helper-module-imports"),l=h(e("./rewrite-this")),c=h(e("./rewrite-live-references")),u=d(e("./normalize-and-load-metadata")),p=h(e("./get-module-name"));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function h(e){return e&&e.__esModule?e:{default:e}}const m=(e,t,r)=>{const n=t.lazy?i.callExpression(i.identifier(t.name),[]):i.identifier(t.name),o=(e=>e?s.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE.IMPORT_NAME;`:s.default`
      Object.defineProperty(EXPORTS, "EXPORT_NAME", {
        enumerable: true,
        get: function() {
          return NAMESPACE.IMPORT_NAME;
        },
      });
    `)(r);return Array.from(t.reexports,([t,r])=>o({EXPORTS:e.exportName,EXPORT_NAME:t,NAMESPACE:i.cloneNode(n),IMPORT_NAME:r}))};function y(e,t,r){return i.expressionStatement(t.reduce((t,r)=>s.default.expression`EXPORTS.NAME = VALUE`({EXPORTS:e.exportName,NAME:r,VALUE:t}),r))}},{"./get-module-name":105,"./normalize-and-load-metadata":107,"./rewrite-live-references":108,"./rewrite-this":109,"@babel/helper-module-imports":103,"@babel/template":124,"@babel/types":198,assert:1,"lodash/chunk":407}],107:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.hasExports=function(e){return e.hasExports},r.isSideEffectImport=o,r.default=function(e,t,{noInterop:r=!1,loose:n=!1,lazy:a=!1,esNamespaceOnly:l=!1}={}){t||(t=e.scope.generateUidIdentifier("exports").name);!function(e){e.get("body").forEach(e=>{e.isExportDefaultDeclaration()&&(0,s.default)(e)})}(e);const{local:c,source:u,hasExports:p}=function(e,{loose:t,lazy:r}){const n=function(e,t){const r=new Map;e.get("body").forEach(e=>{let n;if(e.isImportDeclaration())n="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(t&&e.node.source&&e.get("source").isStringLiteral())return void e.node.specifiers.forEach(e=>{r.set(e.local.name,"block")});if(e.isFunctionDeclaration())n="hoisted";else if(e.isClassDeclaration())n="block";else if(e.isVariableDeclaration({kind:"var"}))n="var";else{if(!e.isVariableDeclaration())return;n="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach(e=>{r.set(e,n)})});const n=new Map,i=e=>{const t=e.node.name;let i=n.get(t);if(!i){const s=r.get(t);if(void 0===s)throw e.buildCodeFrameError(`Exporting local "${t}", which is not declared.`);i={names:[],kind:s},n.set(t,i)}return i};return e.get("body").forEach(e=>{if(!e.isExportNamedDeclaration()||!t&&e.node.source){if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");i(t.get("id")).names.push("default")}}else if(e.node.declaration){const t=e.get("declaration"),r=t.getOuterBindingIdentifierPaths();Object.keys(r).forEach(e=>{if("__esModule"===e)throw t.buildCodeFrameError('Illegal export "__esModule".');i(r[e]).names.push(e)})}else e.get("specifiers").forEach(e=>{const t=e.get("local"),r=e.get("exported");if("__esModule"===r.node.name)throw r.buildCodeFrameError('Illegal export "__esModule".');i(t).names.push(r.node.name)})}),n}(e,t),s=new Map,a=t=>{const r=t.value;let n=s.get(r);return n||(n={name:e.scope.generateUidIdentifier((0,i.basename)(r,(0,i.extname)(r))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1},s.set(r,n)),n};let l=!1;e.get("body").forEach(e=>{if(e.isImportDeclaration()){const t=a(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach(e=>{if(e.isImportDefaultSpecifier()){const r=e.get("local").node.name;t.imports.set(r,"default");const i=n.get(r);i&&(n.delete(r),i.names.forEach(e=>{t.reexports.set(e,"default")}))}else if(e.isImportNamespaceSpecifier()){const r=e.get("local").node.name;t.importsNamespace.add(r);const i=n.get(r);i&&(n.delete(r),i.names.forEach(e=>{t.reexportNamespace.add(e)}))}else if(e.isImportSpecifier()){const r=e.get("imported").node.name,i=e.get("local").node.name;t.imports.set(i,r);const s=n.get(i);s&&(n.delete(i),s.names.forEach(e=>{t.reexports.set(e,r)}))}})}else if(e.isExportAllDeclaration()){l=!0;const t=a(e.node.source);t.loc||(t.loc=e.node.loc),t.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){l=!0;const t=a(e.node.source);t.loc||(t.loc=e.node.loc),e.get("specifiers").forEach(e=>{if(!e.isExportSpecifier())throw e.buildCodeFrameError("Unexpected export specifier type");const r=e.get("local").node.name,n=e.get("exported").node.name;if(t.reexports.set(n,r),"__esModule"===n)throw n.buildCodeFrameError('Illegal export "__esModule".')})}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(l=!0)});for(const e of s.values()){let t=!1,r=!1;e.importsNamespace.size>0&&(t=!0,r=!0),e.reexportAll&&(r=!0);for(const n of e.imports.values())"default"===n?t=!0:r=!0;for(const n of e.reexports.values())"default"===n?t=!0:r=!0;t&&r?e.interop="namespace":t&&(e.interop="default")}for(const[e,t]of s)if(!1!==r&&!o(t)&&!t.reexportAll)if(!0===r)t.lazy=!/\./.test(e);else if(Array.isArray(r))t.lazy=-1!==r.indexOf(e);else{if("function"!=typeof r)throw new Error(".lazy must be a boolean, string array, or function");t.lazy=r(e)}return{hasExports:l,local:n,source:s}}(e,{loose:n,lazy:a});!function(e){e.get("body").forEach(e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const t=e.get("declaration");if(!t.isFunctionDeclaration()&&!t.isClassDeclaration())throw t.buildCodeFrameError("Unexpected default expression export.");t._blockHoist=e.node._blockHoist,e.replaceWith(t)}else e.isExportAllDeclaration()&&e.remove()})}(e);for(const[,e]of u)e.importsNamespace.size>0&&(e.name=e.importsNamespace.values().next().value),r?e.interop="none":l&&"namespace"===e.interop&&(e.interop="default");return{exportName:t,exportNameListName:null,hasExports:p,local:c,source:u}};var n,i=e("path"),s=(n=e("@babel/helper-split-export-declaration"))&&n.__esModule?n:{default:n};function o(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}},{"@babel/helper-split-export-declaration":114,path:12}],108:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){const r=new Map,n=new Map,s=t=>{e.requeue(t)};for(const[e,n]of t.source){for(const[t,i]of n.imports)r.set(t,[e,i,null]);for(const t of n.importsNamespace)r.set(t,[e,null,t])}for(const[e,r]of t.local){let t=n.get(e);t||(t=[],n.set(e,t)),t.push(...r.names)}e.traverse(c,{metadata:t,requeueInParent:s,scope:e.scope,exported:n}),(0,o.default)(e,new Set([...Array.from(r.keys()),...Array.from(n.keys())])),e.traverse(f,{seen:new WeakSet,metadata:t,requeueInParent:s,scope:e.scope,imported:r,exported:n,buildImportReference:([e,r,n],s)=>{const o=t.source.get(e);if(n)return o.lazy&&(s=i.callExpression(s,[])),s;let a=i.identifier(o.name);return o.lazy&&(a=i.callExpression(a,[])),i.memberExpression(a,i.identifier(r))}})};var n=l(e("assert")),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types")),s=l(e("@babel/template")),o=l(e("@babel/helper-simple-access"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}const c={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this,{id:s}=e.node;if(!s)throw new Error("Expected class to have a name");const o=s.name,a=r.get(o)||[];if(a.length>0){const r=i.expressionStatement(u(n,a,i.identifier(o)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}},VariableDeclaration(e){const{requeueInParent:t,exported:r,metadata:n}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach(s=>{const o=r.get(s)||[];if(o.length>0){const r=i.expressionStatement(u(n,o,i.identifier(s)));r._blockHoist=e.node._blockHoist,t(e.insertAfter(r)[0])}})}},u=(e,t,r)=>(t||[]).reduce((t,r)=>i.assignmentExpression("=",i.memberExpression(i.identifier(e.exportName),i.identifier(r)),t),r),p=e=>s.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,f={ReferencedIdentifier(e){const{seen:t,buildImportReference:r,scope:n,imported:s,requeueInParent:o}=this;if(t.has(e.node))return;t.add(e.node);const a=e.node.name,l=e.scope.getBinding(a);if(n.getBinding(a)!==l)return;const c=s.get(a);if(c){const t=r(c,e.node);if(t.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&i.isMemberExpression(t))e.replaceWith(i.sequenceExpression([i.numericLiteral(0),t]));else if(e.isJSXIdentifier()&&i.isMemberExpression(t)){const{object:r,property:n}=t;e.replaceWith(i.JSXMemberExpression(i.JSXIdentifier(r.name),i.JSXIdentifier(n.name)))}else e.replaceWith(t);o(e),e.skip()}},AssignmentExpression:{exit(e){const{scope:t,seen:r,imported:s,exported:o,requeueInParent:a,buildImportReference:l}=this;if(r.has(e.node))return;r.add(e.node);const c=e.get("left");if(!c.isMemberExpression())if(c.isIdentifier()){const r=c.node.name;if(t.getBinding(r)!==e.scope.getBinding(r))return;const f=o.get(r),d=s.get(r);if((null==f?void 0:f.length)>0||d){(0,n.default)("="===e.node.operator,"Path was not simplified");const t=e.node;d&&(t.left=l(d,t.left),t.right=i.sequenceExpression([t.right,p(r)])),e.replaceWith(u(this.metadata,f,t)),a(e)}}else{const r=c.getOuterBindingIdentifiers(),n=Object.keys(r).filter(r=>t.getBinding(r)===e.scope.getBinding(r)),l=n.find(e=>s.has(e));l&&(e.node.right=i.sequenceExpression([e.node.right,p(l)]));const f=[];if(n.forEach(e=>{const t=o.get(e)||[];t.length>0&&f.push(u(this.metadata,t,i.identifier(e)))}),f.length>0){let t=i.sequenceExpression(f);e.parentPath.isExpressionStatement()&&((t=i.expressionStatement(t))._blockHoist=e.parentPath.node._blockHoist),a(e.insertAfter(t)[0])}}}},"ForOfStatement|ForInStatement"(e){const{scope:t,node:r}=e,{left:n}=r,{exported:s,scope:o}=this;if(!i.isVariableDeclaration(n)){let r=!1;const a=e.get("body"),l=a.scope;for(const e of Object.keys(i.getOuterBindingIdentifiers(n)))s.get(e)&&o.getBinding(e)===t.getBinding(e)&&(r=!0,l.hasOwnBinding(e)&&l.rename(e));if(!r)return;const c=t.generateUidIdentifierBasedOnNode(n);a.unshiftContainer("body",i.expressionStatement(i.assignmentExpression("=",n,c))),e.get("left").replaceWith(i.variableDeclaration("let",[i.variableDeclarator(i.cloneNode(c))])),t.registerDeclaration(e.get("left"))}}}},{"@babel/helper-simple-access":113,"@babel/template":124,"@babel/types":198,assert:1}],109:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){e.traverse(i)};var n=e("@babel/helper-replace-supers");const i={ThisExpression(e){e.replaceWith(e.scope.buildUndefinedNode())},Function(e){e.isMethod()?(0,n.skipAllButComputedKey)(e):e.isArrowFunctionExpression()||e.skip()},ClassProperty(e){(0,n.skipAllButComputedKey)(e)},ClassPrivateProperty(e){e.skip()}}},{"@babel/helper-replace-supers":112}],110:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,r,i){return 1===r.length&&n.isSpreadElement(r[0])&&n.isIdentifier(r[0].argument,{name:"arguments"})?n.callExpression(n.memberExpression(e,n.identifier("apply")),[t,r[0].argument]):i?n.optionalCallExpression(n.optionalMemberExpression(e,n.identifier("call"),!1,!0),[t,...r],!1):n.callExpression(n.memberExpression(e,n.identifier("call")),[t,...r])};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},{"@babel/types":198}],111:[function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Object.defineProperty(r,"__esModule",{value:!0}),r.declare=function(e){return(t,r,i)=>(t.assertVersion||(t=Object.assign(function(e){let t=null;"string"==typeof e.version&&/^7\./.test(e.version)&&(!(t=Object.getPrototypeOf(e))||n(t,"version")&&n(t,"transform")&&n(t,"template")&&n(t,"types")||(t=null));return Object.assign({},t,e)}(t),{assertVersion(e){!function(e,t){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");const r=Error.stackTraceLimit;"number"==typeof r&&r<25&&(Error.stackTraceLimit=25);let n;n="7."===t.slice(0,2)?new Error(`Requires Babel "^7.0.0-beta.41", but was loaded with "${t}". `+"You'll need to update your @babel/core version."):new Error(`Requires Babel "${e}", but was loaded with "${t}". `+'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');"number"==typeof r&&(Error.stackTraceLimit=r);throw Object.assign(n,{code:"BABEL_VERSION_UNSUPPORTED",version:t,range:e})}(e,t.version)}})),e(t,r||{},i))}},{}],112:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.skipAllButComputedKey=u,r.default=r.environmentVisitor=void 0;var n=l(e("@babel/traverse")),i=l(e("@babel/helper-member-expression-to-functions")),s=l(e("@babel/helper-optimise-call-expression")),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r,n){e=o.cloneNode(e);const i=t||n?e:o.memberExpression(e,o.identifier("prototype"));return o.callExpression(r.addHelper("getPrototypeOf"),[i])}function u(e){if(!e.node.computed)return void e.skip();const t=o.VISITOR_KEYS[e.type];for(const r of t)"key"!==r&&e.skipKey(r)}const p={TypeAnnotation(e){e.skip()},Function(e){e.isMethod()||e.isArrowFunctionExpression()||e.skip()},"Method|ClassProperty|ClassPrivateProperty"(e){u(e)}};r.environmentVisitor=p;const f=n.default.visitors.merge([p,{Super(e,t){const{node:r,parentPath:n}=e;n.isMemberExpression({object:r})&&t.handle(n)}}]),d={memoise(e,t){const{scope:r,node:n}=e,{computed:i,property:s}=n;if(!i)return;const o=r.maybeGenerateMemoised(s);o&&this.memoiser.set(s,o,t)},prop(e){const{computed:t,property:r}=e.node;return this.memoiser.has(r)?o.cloneNode(this.memoiser.get(r)):t?o.cloneNode(r):o.stringLiteral(r.name)},get(e){return this._get(e,this._getThisRefs())},_get(e,t){const r=c(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return o.callExpression(this.file.addHelper("get"),[t.memo?o.sequenceExpression([t.memo,r]):r,this.prop(e),t.this])},_getThisRefs(){if(!this.isDerivedConstructor)return{this:o.thisExpression()};const e=this.scope.generateDeclaredUidIdentifier("thisSuper");return{memo:o.assignmentExpression("=",e,o.thisExpression()),this:o.cloneNode(e)}},set(e,t){const r=this._getThisRefs(),n=c(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod);return o.callExpression(this.file.addHelper("set"),[r.memo?o.sequenceExpression([r.memo,n]):n,this.prop(e),t,r.this,o.booleanLiteral(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError("Destructuring to a super field is not supported yet.")},call(e,t){const r=this._getThisRefs();return(0,s.default)(this._get(e,r),o.cloneNode(r.this),t,!1)}},h=Object.assign({},d,{prop(e){const{property:t}=e.node;return this.memoiser.has(t)?o.cloneNode(this.memoiser.get(t)):o.cloneNode(t)},get(e){const{isStatic:t,superRef:r}=this,{computed:n}=e.node,i=this.prop(e);let s;return s=t?r?o.cloneNode(r):o.memberExpression(o.identifier("Function"),o.identifier("prototype")):r?o.memberExpression(o.cloneNode(r),o.identifier("prototype")):o.memberExpression(o.identifier("Object"),o.identifier("prototype")),o.memberExpression(s,i,n)},set(e,t){const{computed:r}=e.node,n=this.prop(e);return o.assignmentExpression("=",o.memberExpression(o.thisExpression(),n,r),t)},destructureSet(e){const{computed:t}=e.node,r=this.prop(e);return o.memberExpression(o.thisExpression(),r,t)},call(e,t){return(0,s.default)(this.get(e),o.thisExpression(),t,!1)}});r.default=class{constructor(e){const t=e.methodPath;this.methodPath=t,this.isDerivedConstructor=t.isClassMethod({kind:"constructor"})&&!!e.superRef,this.isStatic=t.isObjectMethod()||t.node.static,this.isPrivateMethod=t.isPrivate()&&t.isMethod(),this.file=e.file,this.superRef=e.superRef,this.isLoose=e.isLoose,this.opts=e}getObjectRef(){return o.cloneNode(this.opts.objectRef||this.opts.getObjectRef())}replace(){const e=this.isLoose?h:d;(0,i.default)(this.methodPath,f,Object.assign({file:this.file,scope:this.methodPath.scope,isDerivedConstructor:this.isDerivedConstructor,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),superRef:this.superRef},e))}}},{"@babel/helper-member-expression-to-functions":100,"@babel/helper-optimise-call-expression":110,"@babel/traverse":133,"@babel/types":198}],113:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){e.traverse(s,{scope:e.scope,bindingNames:t,seen:new WeakSet})};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}const s={UpdateExpression:{exit(e){const{scope:t,bindingNames:r}=this,i=e.get("argument");if(!i.isIdentifier())return;const s=i.node.name;if(r.has(s)&&t.getBinding(s)===e.scope.getBinding(s))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const t="++"==e.node.operator?"+=":"-=";e.replaceWith(n.assignmentExpression(t,i.node,n.numericLiteral(1)))}else if(e.node.prefix)e.replaceWith(n.assignmentExpression("=",n.identifier(s),n.binaryExpression(e.node.operator[0],n.unaryExpression("+",i.node),n.numericLiteral(1))));else{const t=e.scope.generateUidIdentifierBasedOnNode(i.node,"old"),r=t.name;e.scope.push({id:t});const s=n.binaryExpression(e.node.operator[0],n.identifier(r),n.numericLiteral(1));e.replaceWith(n.sequenceExpression([n.assignmentExpression("=",n.identifier(r),n.unaryExpression("+",i.node)),n.assignmentExpression("=",n.cloneNode(i.node),s),n.identifier(r)]))}}},AssignmentExpression:{exit(e){const{scope:t,seen:r,bindingNames:i}=this;if("="===e.node.operator)return;if(r.has(e.node))return;r.add(e.node);const s=e.get("left");if(!s.isIdentifier())return;const o=s.node.name;i.has(o)&&t.getBinding(o)===e.scope.getBinding(o)&&(e.node.right=n.binaryExpression(e.node.operator.slice(0,-1),n.cloneNode(e.node.left),e.node.right),e.node.operator="=")}}}},{"@babel/types":198}],114:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be splitted.");const t=e.isExportDefaultDeclaration(),r=e.get("declaration"),i=r.isClassDeclaration();if(t){const t=r.isFunctionDeclaration()||i,s=r.isScope()?r.scope.parent:r.scope;let o=r.node.id,a=!1;o||(a=!0,o=s.generateUidIdentifier("default"),(t||r.isFunctionExpression()||r.isClassExpression())&&(r.node.id=n.cloneNode(o)));const l=t?r:n.variableDeclaration("var",[n.variableDeclarator(n.cloneNode(o),r.node)]),c=n.exportNamedDeclaration(null,[n.exportSpecifier(n.cloneNode(o),n.identifier("default"))]);return e.insertAfter(c),e.replaceWith(l),a&&s.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const s=r.getOuterBindingIdentifiers(),o=Object.keys(s).map(e=>n.exportSpecifier(n.identifier(e),n.identifier(e))),a=n.exportNamedDeclaration(null,o);return e.insertAfter(a),e.replaceWith(r.node),e};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(e("@babel/types"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}},{"@babel/types":198}],115:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isIdentifierStart=u,r.isIdentifierChar=p,r.isIdentifierName=function(e){let t=!0;for(let r=0,n=Array.from(e);r<n.length;r++){const e=n[r],i=e.codePointAt(0);if(t){if(!u(i))return!1;t=!1}else if(!p(i))return!1}return!t};let n="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",i="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const s=new RegExp("["+n+"]"),o=new RegExp("["+n+i+"]");n=i=null;const a=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938],l=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];function c(e,t){let r=65536;for(let n=0,i=t.length;n<i;n+=2){if((r+=t[n])>e)return!1;if((r+=t[n+1])>=e)return!0}return!1}function u(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&s.test(String.fromCharCode(e)):c(e,a)))}function p(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&o.test(String.fromCharCode(e)):c(e,a)||c(e,l))))}},{}],116:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isIdentifierName",{enumerable:!0,get:function(){return n.isIdentifierName}}),Object.defineProperty(r,"isIdentifierChar",{enumerable:!0,get:function(){return n.isIdentifierChar}}),Object.defineProperty(r,"isIdentifierStart",{enumerable:!0,get:function(){return n.isIdentifierStart}}),Object.defineProperty(r,"isReservedWord",{enumerable:!0,get:function(){return i.isReservedWord}}),Object.defineProperty(r,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return i.isStrictBindOnlyReservedWord}}),Object.defineProperty(r,"isStrictBindReservedWord",{enumerable:!0,get:function(){return i.isStrictBindReservedWord}}),Object.defineProperty(r,"isStrictReservedWord",{enumerable:!0,get:function(){return i.isStrictReservedWord}}),Object.defineProperty(r,"isKeyword",{enumerable:!0,get:function(){return i.isKeyword}});var n=e("./identifier"),i=e("./keyword")},{"./identifier":115,"./keyword":117}],117:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isReservedWord=l,r.isStrictReservedWord=c,r.isStrictBindOnlyReservedWord=u,r.isStrictBindReservedWord=function(e,t){return c(e,t)||u(e)},r.isKeyword=function(e){return s.has(e)};const n=["implements","interface","let","package","private","protected","public","static","yield"],i=["eval","arguments"],s=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),o=new Set(n),a=new Set(i);function l(e,t){return t&&"await"===e||"enum"===e}function c(e,t){return l(e,t)||o.has(e)}function u(e){return a.has(e)}},{}],118:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,i=(n=e("@babel/template"))&&n.__esModule?n:{default:n};const s=Object.create(null);var o=s;r.default=o;const a=e=>t=>({minVersion:e,ast:()=>i.default.program.ast(t)});s.typeof=a("7.0.0-beta.0")`
  export default function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) { return typeof obj; };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
    }

    return _typeof(obj);
  }
`,s.jsx=a("7.0.0-beta.0")`
  var REACT_ELEMENT_TYPE;

  export default function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = (
        typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element")
      ) || 0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      // If we're going to assign props.children, we create a new object now
      // to avoid mutating defaultProps.
      props = {
        children: void 0,
      };
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null,
    };
  }
`,s.asyncIterator=a("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method
    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator]
        if (method != null) return method.call(iterable);
      }
      if (Symbol.iterator) {
        method = iterable[Symbol.iterator]
        if (method != null) return method.call(iterable);
      }
    }
    throw new TypeError("Object is not async iterable");
  }
`,s.AwaitValue=a("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,s.AsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; };
  }

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,s.wrapAsyncGenerator=a("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,s.awaitAsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,s.asyncGeneratorDelegate=a("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () { return this; };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,s.asyncToGenerator=a("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,s.classCallCheck=a("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,s.createClass=a("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`,s.defineEnumerableProperties=a("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,s.defaults=a("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,s.defineProperty=a("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,s.extends=a("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,s.objectSpread=a("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,s.objectSpread2=a("7.5.0")`
  import defineProperty from "defineProperty";

  // This function is different to "Reflect.ownKeys". The enumerableOnly
  // filters on symbol properties only. Returned string properties are always
  // enumerable. It is good to use in objectSpread.

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  export default function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
`,s.inherits=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,s.inheritsLoose=a("7.0.0-beta.0")`
  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
`,s.getPrototypeOf=a("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,s.setPrototypeOf=a("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,s.isNativeReflectConstruct=a("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Date object.
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,s.construct=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,s.isNativeFunction=a("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,s.wrapNativeSuper=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,s.instanceof=a("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,s.interopRequireDefault=a("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,s.interopRequireWildcard=a("7.0.0-beta.0")`
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;

    var cache = new WeakMap();
    _getRequireWildcardCache = function () { return cache; };
    return cache;
  }

  export default function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,s.newArrowCheck=a("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,s.objectDestructuringEmpty=a("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,s.objectWithoutPropertiesLoose=a("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,s.objectWithoutProperties=a("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,s.assertThisInitialized=a("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,s.possibleConstructorReturn=a("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return assertThisInitialized(self);
  }
`,s.createSuper=a("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,s.superPropBase=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,s.get=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`,s.set=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,s.taggedTemplateLiteral=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,s.taggedTemplateLiteralLoose=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,s.readOnlyError=a("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new Error("\\"" + name + "\\" is read-only");
  }
`,s.classNameTDZError=a("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,s.temporalUndefined=a("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,s.tdz=a("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,s.temporalRef=a("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,s.slicedToArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.slicedToArrayLoose=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.toArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,s.toConsumableArray=a("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,s.arrayWithoutHoles=a("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,s.arrayWithHoles=a("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,s.maybeArrayLike=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`,s.iterableToArray=a("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
`,s.iterableToArrayLimit=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,s.iterableToArrayLimitLoose=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,s.unsupportedIterableToArray=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,s.arrayLikeToArray=a("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,s.nonIterableSpread=a("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.nonIterableRest=a("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.createForOfIteratorHelper=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = o[Symbol.iterator]();
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,s.createForOfIteratorHelperLoose=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        return function() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        }
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }
`,s.skipFirstGeneratorNext=a("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,s.toPrimitive=a("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,s.toPropertyKey=a("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,s.initializerWarningHelper=a("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,s.initializerDefineProperty=a("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,s.applyDecoratedDescriptor=a("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            // This is a hack to avoid this being processed by 'transform-runtime'.
            // See issue #9.
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,s.classPrivateFieldLooseKey=a("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,s.classPrivateFieldLooseBase=a("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,s.classPrivateFieldGet=a("7.0.0-beta.0")`
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,s.classPrivateFieldSet=a("7.0.0-beta.0")`
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }

    return value;
  }
`,s.classPrivateFieldDestructureSet=a("7.4.4")`
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,s.classStaticPrivateFieldSpecGet=a("7.0.2")`
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,s.classStaticPrivateFieldSpecSet=a("7.0.2")`
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }

    return value;
  }
`,s.classStaticPrivateMethodGet=a("7.3.2")`
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    return method;
  }
`,s.classStaticPrivateMethodSet=a("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,s.decorate=a("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,s.classPrivateMethodGet=a("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,s.classPrivateMethodSet=a("7.1.6")`
  export default function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }
`,s.wrapRegExp=a("7.2.6")`
  import wrapNativeSuper from "wrapNativeSuper";
  import getPrototypeOf from "getPrototypeOf";
  import possibleConstructorReturn from "possibleConstructorReturn";
  import inherits from "inherits";

  export default function _wrapRegExp(re, groups) {
    _wrapRegExp = function(re, groups) {
      return new BabelRegExp(re, undefined, groups);
    };

    var _RegExp = wrapNativeSuper(RegExp);
    var _super = RegExp.prototype;
    var _groups = new WeakMap();

    function BabelRegExp(re, flags, groups) {
      var _this = _RegExp.call(this, re, flags);
      // if the regex is recreated with 'g' flag
      _groups.set(_this, groups || _groups.get(re));
      return _this;
    }
    inherits(BabelRegExp, _RegExp);

    BabelRegExp.prototype.exec = function(str) {
      var result = _super.exec.call(this, str);
      if (result) result.groups = buildGroups(result, this);
      return result;
    };
    BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
      if (typeof substitution === "string") {
        var groups = _groups.get(this);
        return _super[Symbol.replace].call(
          this,
          str,
          substitution.replace(/\\$<([^>]+)>/g, function(_, name) {
            return "$" + groups[name];
          })
        );
      } else if (typeof substitution === "function") {
        var _this = this;
        return _super[Symbol.replace].call(
          this,
          str,
          function() {
            var args = [];
            args.push.apply(args, arguments);
            if (typeof args[args.length - 1] !== "object") {
              // Modern engines already pass result.groups as the last arg.
              args.push(buildGroups(args, _this));
            }
            return substitution.apply(this, args);
          }
        );
      } else {
        return _super[Symbol.replace].call(this, str, substitution);
      }
    }

    function buildGroups(result, re) {
      // NOTE: This function should return undefined if there are no groups,
      // but in that case Babel doesn't add the wrapper anyway.

      var g = _groups.get(re);
      return Object.keys(g).reduce(function(groups, name) {
        groups[name] = result[g[name]];
        return groups;
      }, Object.create(null));
    }

    return _wrapRegExp.apply(this, arguments);
  }