!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).workbox={})}(this,(function(n){"use strict";try{self["workbox:window:6.5.3"]&&_()}catch(n){}function t(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[e.port2])}))}function r(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function i(n,t){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=n[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.3"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function u(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var a=function(n,t){this.type=n,Object.assign(this,t)};function c(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function f(){}var s={type:"SKIP_WAITING"};function v(n,t){if(!t)return n&&n.then?n.then(f):Promise.resolve()}var h=function(n){var e,i;function f(t,r){var e,i;return void 0===r&&(r={}),(e=n.call(this)||this).nn={},e.tn=0,e.rn=new o,e.en=new o,e.on=new o,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,t=n.installing;e.tn>0||!u(t.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=t,n.removeEventListener("updatefound",e.cn)):(e.hn=t,e.an.add(t),e.rn.resolve(t)),++e.tn,t.addEventListener("statechange",e.ln)},e.ln=function(n){var t=e.fn,r=n.target,i=r.state,o=r===e.vn,u={sw:r,isExternal:o,originalEvent:n};!o&&e.dn&&(u.isUpdate=!0),e.dispatchEvent(new a(i,u)),"installed"===i?e.mn=self.setTimeout((function(){"installed"===i&&t.waiting===r&&e.dispatchEvent(new a("waiting",u))}),200):"activating"===i&&(clearTimeout(e.mn),o||e.en.resolve(r))},e.wn=function(n){var t=e.hn,r=t!==navigator.serviceWorker.controller;e.dispatchEvent(new a("controlling",{isExternal:r,originalEvent:n,sw:t,isUpdate:e.dn})),r||e.on.resolve(t)},e.gn=(i=function(n){var t=n.data,r=n.ports,i=n.source;return c(e.getSW(),(function(){e.an.has(i)&&e.dispatchEvent(new a("message",{data:t,originalEvent:n,ports:r,sw:i}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(i.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=t,e.nn=r,navigator.serviceWorker.addEventListener("message",e.gn),e}i=n,(e=f).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var h,l,d,m=f.prototype;return m.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&"complete"!==document.readyState)return v(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.dn=Boolean(navigator.serviceWorker.controller),e.yn=e.pn(),c(e.bn(),(function(n){e.fn=n,e.yn&&(e.hn=e.yn,e.en.resolve(e.yn),e.on.resolve(e.yn),e.yn.addEventListener("statechange",e.ln,{once:!0}));var t=e.fn.waiting;return t&&u(t.scriptURL,e.sn.toString())&&(e.hn=t,Promise.resolve().then((function(){e.dispatchEvent(new a("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener("updatefound",e.cn),navigator.serviceWorker.addEventListener("controllerchange",e.wn),e.fn}))}))}catch(n){return Promise.reject(n)}},m.update=function(){try{return this.fn?v(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},m.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},m.messageSW=function(n){try{return c(this.getSW(),(function(r){return t(r,n)}))}catch(n){return Promise.reject(n)}},m.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&t(this.fn.waiting,s)},m.pn=function(){var n=navigator.serviceWorker.controller;return n&&u(n.scriptURL,this.sn.toString())?n:void 0},m.bn=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return c(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},h=f,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&r(h.prototype,l),d&&r(h,d),f}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.jn(n).add(t)},t.removeEventListener=function(n,t){this.jn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,r=i(this.jn(n.type));!(t=r()).done;){(0,t.value)(n)}},t.jn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());n.Workbox=h,n.WorkboxEvent=a,n.messageSW=t,Object.defineProperty(n,"__esModule",{value:!0})}));

