!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire49ef;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire49ef=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}}));var i=document.querySelectorAll(".collection__filter--btn"),a=document.querySelectorAll(".collection__filter--img");function u(e){var t=e.target,n=null,r=null;t.closest(".collection__filter--btn")&&(i.forEach((function(e,o){e.classList.contains("active")&&(n=o,e.classList.remove("active"),a[n].classList.remove("visible")),e===t&&(r=o)})),t.classList.add("active"),a[r].classList.add("visible"))}i.forEach((function(e){return e.addEventListener("click",u)}));var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){return c.default(e)||s.default(e,t)||v.default(e,t)||f.default()};var d,c=m(o("8slrw")),s=m(o("7AJDX")),f=m(o("ifqQW")),v=m(o("auk6i"));function m(e){return e&&e.__esModule?e:{default:e}}!function(e,t,n){n=n||window;var r=!1;n.addEventListener(e,(function(){r||(r=!0,requestAnimationFrame((function(){n.dispatchEvent(new CustomEvent(t)),r=!1})))}))}("resize","optimizedResize"),(d=d||window).animation=function(t,n,r){var o=n.count,i=0;n.start&&n.start.forEach((function(e){t.style[e[0]]=e[1]}));var a=[];n.anim.forEach((function(t){var n=e(l)(t,3),r=n[0],i=n[1],u=n[2],d=Math.max(i,u),c=Math.min(i,u),s=(d-c)/o;a.push({style:r,from:i,to:u,step:s,reverse:c===u})}));var u=function(){a.forEach((function(e){e.reverse?e.from-=e.step:e.from+=e.step,t.style[e.style]=e.from})),++i<o?requestAnimationFrame(u):(n.end&&n.end.forEach((function(e){t.style[e[0]]=e[1]})),r&&r())};requestAnimationFrame(u)};document.addEventListener("DOMContentLoaded",(function(){var e=document.createElement("div");e.className="videotube-modal-overlay",document.body.insertAdjacentElement("beforeend",e);var t=document.createElement("div");t.id="videotube-modal-container";var n=[[3840,2160],[2560,1440],[1920,1080],[1280,720],[854,420],[640,360],[426,240]],r=function(){var e=n.find((function(e){return e[0]<window.visualViewport.width}))||n[n.length-1],r=document.getElementById("videotube-modal");r.width=e[0],r.height=e[1],t.style.cssText="\n\t\t\twidth: ".concat(e[0],";\n\t\t\theight: ").concat(e[1],";\n\t\t")},o=function(){var n=window.visualViewport.height,r=window.visualViewport.width,o=t.style.width,i=t.style.height;t.style.left=(r-o)/2,t.style.top=(n-i)/2,e.style.height=document.documentElement.clientHeight},i=function(){o(),r()},a=function(){animation(e,{end:[["display","none"]],anim:[["opacity",1,0]],count:20},(function(){e.textContent=""})),window.removeEventListener("optimizedResize",i),document.removeEventListener("keyup",u)},u=function(e){27===e.keyCode&&a()};e.addEventListener("click",a),document.addEventListener("click",(function(t){var n=t.target.closest(".tube");if(n){var a=n.href,l=a.includes("youtube")?a.match(/(\?|&)v=([^&]+)/)[2]:a.match(/(\.be\/)([^&]+)/)[2];0!==l.length&&(t.preventDefault(),animation(e,{start:[["display","block"]],anim:[["opacity",0,1]],count:20}),e.insertAdjacentHTML("beforeend",'\n\t\t\t<div id="videotube-modal-loading">Загрузка...</div>\n\t\t\t<div id="videotube-modal-close">&#10006;</div>\n\t\t\t<div id="videotube-modal-container">\n\t\t\t\t<iframe src="https://youtube.com/embed/'.concat(l,'?autoplay=1" \n\t\t\t\t\tframeborder="0"\n\t\t\t\t\tid="videotube-modal" \n\t\t\t\t\tallowfullscreen\n\t\t\t\t\tallow="autoplay">\n\t\t\t\t</iframe>\n\t\t\t</div>\n\t\t')),r(),o(),window.addEventListener("optimizedResize",i),document.addEventListener("keyup",u))}}))}))}();
//# sourceMappingURL=index.a2bf9596.js.map
