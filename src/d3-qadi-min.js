!function(){function t(t,n){if(n in t)return n;n=n.charAt(0).toUpperCase()+n.slice(1);for(var e=0,r=X.length;r>e;++e){var i=X[e]+n;if(i in t)return i}}function n(t){return V(t,Q),t}function e(t){return"function"==typeof t?t:function(){return G(t,this)}}function r(t,n){function e(){this.removeAttribute(t)}function r(){this.removeAttributeNS(t.space,t.local)}function i(){this.setAttribute(t,n)}function o(){this.setAttributeNS(t.space,t.local,n)}function u(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}function a(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}return t=k.ns.qualify(t),null==n?t.local?r:e:"function"==typeof n?t.local?a:u:t.local?o:i}function i(t){return t.trim().replace(/\s+/g," ")}function o(t){return new RegExp("(?:^|\\s+)"+k.requote(t)+"(?:\\s+|$)","g")}function u(t){return(t+"").trim().split(/^|\s+/)}function a(t,n){function e(){for(var e=-1;++e<i;)t[e](this,n)}function r(){for(var e=-1,r=n.apply(this,arguments);++e<i;)t[e](this,r)}t=u(t).map(s);var i=t.length;return"function"==typeof n?r:e}function s(t){var n=o(t);return function(e,r){if(o=e.classList)return r?o.add(t):o.remove(t);var o=e.getAttribute("class")||"";r?(n.lastIndex=0,n.test(o)||e.setAttribute("class",i(o+" "+t))):e.setAttribute("class",i(o.replace(n," ")))}}function c(t,n,e){function r(){this.style.removeProperty(t)}function i(){this.style.setProperty(t,n,e)}function o(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}return null==n?r:"function"==typeof n?o:i}function f(t,n){function e(){delete this[t]}function r(){this[t]=n}function i(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}return null==n?e:"function"==typeof n?i:r}function l(t){return"function"==typeof t?t:(t=k.ns.qualify(t)).local?function(){return this.ownerDocument.createElementNS(t.space,t.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,t)}}function h(t,n){for(var e in n)Object.defineProperty(t.prototype,e,{value:n[e],enumerable:!1})}function p(){this._=Object.create(null)}function _(t){return(t+="")===Z||t[0]===tn?tn+t:t}function v(t){return(t+="")[0]===tn?t.slice(1):t}function d(t){return _(t)in this._}function g(t){return(t=_(t))in this._&&delete this._[t]}function m(){var t=[];for(var n in this._)t.push(v(n));return t}function y(){var t=0;for(var n in this._)++t;return t}function w(){for(var t in this._)return!1;return!0}function N(){this._=Object.create(null)}function x(t){return{__data__:t}}function A(t){return function(){return K(this,t)}}function b(t,n){return n>t?-1:t>n?1:t>=n?0:0/0}function S(t){return arguments.length||(t=b),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function z(){}function E(){}function O(t){function n(){for(var n,r=e,i=-1,o=r.length;++i<o;)(n=r[i].on)&&n.apply(this,arguments);return t}var e=[],r=new p;return n.on=function(n,i){var o,u=r.get(n);return arguments.length<2?u&&u.on:(u&&(u.on=null,e=e.slice(0,o=e.indexOf(u)).concat(e.slice(o+1)),r.remove(n)),i&&e.push(r.set(n,{on:i})),t)},n}function L(t,n,e){function r(){var n=this[u];n&&(this.removeEventListener(t,n,n.$),delete this[u])}function i(){var i=s(n,D(arguments));r.call(this),this.addEventListener(t,this[u]=i,i.$=e),i._=n}function o(){var n,e=new RegExp("^__on([^.]+)"+k.requote(t)+"$");for(var r in this)if(n=r.match(e)){var i=this[r];this.removeEventListener(n[1],i,i.$),delete this[r]}}var u="__on"+t,a=t.indexOf("."),s=q;a>0&&(t=t.slice(0,a));var c=nn.get(t);return c&&(t=c,s=P),a?n?i:r:n?z:o}function q(t,n){return function(e){var r=k.event;k.event=e,n[0]=this.__data__;try{t.apply(this,n)}finally{k.event=r}}}function P(t,n){var e=q(t,n);return function(t){var n=this,r=t.relatedTarget;r&&(r===n||8&r.compareDocumentPosition(n))||e.call(n,t)}}function C(t,n){for(var e=0,r=t.length;r>e;e++)for(var i,o=t[e],u=0,a=o.length;a>u;u++)(i=o[u])&&n(i,u,e);return t}function I(t){return V(t,en),t}function M(t){var n,e;return function(r,i,o){var u,a=t[o].update,s=a.length;for(o!=e&&(e=o,n=0),i>=n&&(n=i+1);!(u=a[n])&&++n<s;);return u}}function $(){var t=this.__transition__;t&&++t.active}function T(t){return"function"==typeof t?t:function(){return F(t,this)}}var k={version:"3.4.13"},j=[].slice,D=function(t){return j.call(t)},H=document,R=H.documentElement,B=window;try{D(R.childNodes)[0].nodeType}catch(U){D=function(t){for(var n=t.length,e=new Array(n);n--;)e[n]=t[n];return e}}var V={}.__proto__?function(t,n){t.__proto__=n}:function(t,n){for(var e in n)t[e]=n[e]},X=["webkit","ms","moz","Moz","o","O"],F=function(t,n){return n.querySelector(t)},G=function(t,n){return n.querySelectorAll(t)},J=R.matches||R[t(R,"matchesSelector")],K=function(t,n){return J.call(t,n)};"function"==typeof Sizzle&&(F=function(t,n){return Sizzle(t,n)[0]||null},G=Sizzle,K=Sizzle.matchesSelector),k.selection=function(){return rn};var Q=k.selection.prototype=[];Q.selectAll=function(t){var r,i,o=[];t=e(t);for(var u=-1,a=this.length;++u<a;)for(var s=this[u],c=-1,f=s.length;++c<f;)(i=s[c])&&(o.push(r=D(t.call(i,i.__data__,c,u))),r.parentNode=i);return n(o)};var W={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};k.ns={prefix:W,qualify:function(t){var n=t.indexOf(":"),e=t;return n>=0&&(e=t.slice(0,n),t=t.slice(n+1)),W.hasOwnProperty(e)?{space:W[e],local:t}:t}},Q.attr=function(t,n){if(arguments.length<2){if("string"==typeof t){var e=this.node();return t=k.ns.qualify(t),t.local?e.getAttributeNS(t.space,t.local):e.getAttribute(t)}for(n in t)this.each(r(n,t[n]));return this}return this.each(r(t,n))},k.requote=function(t){return t.replace(Y,"\\$&")};var Y=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;Q.classed=function(t,n){if(arguments.length<2){if("string"==typeof t){var e=this.node(),r=(t=u(t)).length,i=-1;if(n=e.classList){for(;++i<r;)if(!n.contains(t[i]))return!1}else for(n=e.getAttribute("class");++i<r;)if(!o(t[i]).test(n))return!1;return!0}for(n in t)this.each(a(n,t[n]));return this}return this.each(a(t,n))},Q.style=function(t,n,e){var r=arguments.length;if(3>r){if("string"!=typeof t){2>r&&(n="");for(e in t)this.each(c(e,t[e],n));return this}if(2>r)return B.getComputedStyle(this.node(),null).getPropertyValue(t);e=""}return this.each(c(t,n,e))},Q.property=function(t,n){if(arguments.length<2){if("string"==typeof t)return this.node()[t];for(n in t)this.each(f(n,t[n]));return this}return this.each(f(t,n))},Q.text=function(t){return arguments.length?this.each("function"==typeof t?function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}:null==t?function(){this.textContent=""}:function(){this.textContent=t}):this.node().textContent},Q.html=function(t){return arguments.length?this.each("function"==typeof t?function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}:null==t?function(){this.innerHTML=""}:function(){this.innerHTML=t}):this.node().innerHTML},Q.append=function(t){return t=l(t),this.select(function(){return this.appendChild(t.apply(this,arguments))})},Q.insert=function(t,n){return t=l(t),n=T(n),this.select(function(){return this.insertBefore(t.apply(this,arguments),n.apply(this,arguments)||null)})},Q.remove=function(){return this.each(function(){var t=this.parentNode;t&&t.removeChild(this)})},k.map=function(t){var n=new p;if(t instanceof p)t.forEach(function(t,e){n.set(t,e)});else for(var e in t)n.set(e,t[e]);return n};var Z="__proto__",tn="\x00";h(p,{has:d,get:function(t){return this._[_(t)]},set:function(t,n){return this._[_(t)]=n},remove:g,keys:m,values:function(){var t=[];for(var n in this._)t.push(this._[n]);return t},entries:function(){var t=[];for(var n in this._)t.push({key:v(n),value:this._[n]});return t},size:y,empty:w,forEach:function(t){for(var n in this._)t.call(this,v(n),this._[n])}}),k.set=function(t){var n=new N;if(t)for(var e=0,r=t.length;r>e;++e)n.add(t[e]);return n},h(N,{has:d,add:function(t){return this._[_(t+="")]=!0,t},remove:g,values:m,size:y,empty:w,forEach:function(t){for(var n in this._)t.call(this,v(n))}}),Q.data=function(t,e){function r(t,n){var r,i,o,u=t.length,a=n.length,l=Math.min(u,a),h=new Array(a),_=new Array(a),v=new Array(u);if(e){var d,g=new p,m=new Array(u);for(r=-1;++r<u;)g.has(d=e.call(i=t[r],i.__data__,r))?v[r]=i:g.set(d,i),m[r]=d;for(r=-1;++r<a;)(i=g.get(d=e.call(n,o=n[r],r)))?i!==!0&&(h[r]=i,i.__data__=o):_[r]=x(o),g.set(d,!0);for(r=-1;++r<u;)g.get(m[r])!==!0&&(v[r]=t[r])}else{for(r=-1;++r<l;)i=t[r],o=n[r],i?(i.__data__=o,h[r]=i):_[r]=x(o);for(;a>r;++r)_[r]=x(n[r]);for(;u>r;++r)v[r]=t[r]}_.update=h,_.parentNode=h.parentNode=v.parentNode=t.parentNode,s.push(_),c.push(h),f.push(v)}var i,o,u=-1,a=this.length;if(!arguments.length){for(t=new Array(a=(i=this[0]).length);++u<a;)(o=i[u])&&(t[u]=o.__data__);return t}var s=I([]),c=n([]),f=n([]);if("function"==typeof t)for(;++u<a;)r(i=this[u],t.call(i,i.parentNode.__data__,u));else for(;++u<a;)r(i=this[u],t);return c.enter=function(){return s},c.exit=function(){return f},c},Q.datum=function(t){return arguments.length?this.property("__data__",t):this.property("__data__")},Q.filter=function(t){var e,r,i,o=[];"function"!=typeof t&&(t=A(t));for(var u=0,a=this.length;a>u;u++){o.push(e=[]),e.parentNode=(r=this[u]).parentNode;for(var s=0,c=r.length;c>s;s++)(i=r[s])&&t.call(i,i.__data__,s,u)&&e.push(i)}return n(o)},Q.order=function(){for(var t=-1,n=this.length;++t<n;)for(var e,r=this[t],i=r.length-1,o=r[i];--i>=0;)(e=r[i])&&(o&&o!==e.nextSibling&&o.parentNode.insertBefore(e,o),o=e);return this},k.ascending=b,Q.sort=function(t){t=S.apply(this,arguments);for(var n=-1,e=this.length;++n<e;)this[n].sort(t);return this.order()},k.dispatch=function(){for(var t=new E,n=-1,e=arguments.length;++n<e;)t[arguments[n]]=O(t);return t},E.prototype.on=function(t,n){var e=t.indexOf("."),r="";if(e>=0&&(r=t.slice(e+1),t=t.slice(0,e)),t)return arguments.length<2?this[t].on(r):this[t].on(r,n);if(2===arguments.length){if(null==n)for(t in this)this.hasOwnProperty(t)&&this[t].on(r,null);return this}},k.event=null,Q.on=function(t,n,e){var r=arguments.length;if(3>r){if("string"!=typeof t){2>r&&(n=!1);for(e in t)this.each(L(e,t[e],n));return this}if(2>r)return(r=this.node()["__on"+t])&&r._;e=!1}return this.each(L(t,n,e))};var nn=k.map({mouseenter:"mouseover",mouseleave:"mouseout"});nn.forEach(function(t){"on"+t in H&&nn.remove(t)}),Q.each=function(t){return C(this,function(n,e,r){t.call(n,n.__data__,e,r)})},Q.call=function(t){var n=D(arguments);return t.apply(n[0]=this,n),this},Q.empty=function(){return!this.node()},Q.node=function(){for(var t=0,n=this.length;n>t;t++)for(var e=this[t],r=0,i=e.length;i>r;r++){var o=e[r];if(o)return o}return null},Q.size=function(){var t=0;return C(this,function(){++t}),t};var en=[];k.selection.enter=I,k.selection.enter.prototype=en,en.append=Q.append,en.empty=Q.empty,en.node=Q.node,en.call=Q.call,en.size=Q.size,en.select=function(t){for(var e,r,i,o,u,a=[],s=-1,c=this.length;++s<c;){i=(o=this[s]).update,a.push(e=[]),e.parentNode=o.parentNode;for(var f=-1,l=o.length;++f<l;)(u=o[f])?(e.push(i[f]=r=t.call(o.parentNode,u.__data__,f,s)),r.__data__=u.__data__):e.push(null)}return n(a)},en.insert=function(t,n){return arguments.length<2&&(n=M(this)),Q.insert.call(this,t,n)},Q.transition=function(){for(var t,n,e=d3_transitionInheritId||++d3_transitionId,r=[],i=d3_transitionInherit||{time:Date.now(),ease:d3_ease_cubicInOut,delay:0,duration:250},o=-1,u=this.length;++o<u;){r.push(t=[]);for(var a=this[o],s=-1,c=a.length;++s<c;)(n=a[s])&&d3_transitionNode(n,s,e,i),t.push(n)}return d3_transition(r,e)},Q.interrupt=function(){return this.each($)},k.select=function(t){var e=["string"==typeof t?F(t,H):t];return e.parentNode=R,n([e])},k.selectAll=function(t){var e=D("string"==typeof t?G(t,H):t);return e.parentNode=R,n([e])};var rn=k.select(R);Q.select=function(t){var e,r,i,o,u=[];t=T(t);for(var a=-1,s=this.length;++a<s;){u.push(e=[]),e.parentNode=(i=this[a]).parentNode;for(var c=-1,f=i.length;++c<f;)(o=i[c])?(e.push(r=t.call(o,o.__data__,c,a)),r&&"__data__"in o&&(r.__data__=o.__data__)):e.push(null)}return n(u)},"function"==typeof define&&define.amd?define(k):"object"==typeof module&&module.exports&&(module.exports=k)}();