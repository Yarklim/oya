!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire49ef;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire49ef=i),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}}));var o=document.querySelector(".header__nav-menu"),a=document.querySelector(".js-menu__open"),u=document.querySelector(".js-menu__close"),l=document.querySelector(".nav-menu__nav--list");a.addEventListener("click",(function(){o.classList.add("open-menu")})),u.addEventListener("click",(function(){o.classList.remove("open-menu")})),l.addEventListener("click",(function(e){var t=document.querySelector(".active__nav-link");t&&t.classList.remove("active__nav-link");var n=e.target;n.classList.add("active__nav-link"),n.dataset.value}));var c=document.querySelectorAll(".collection__filter--btn"),d=document.querySelectorAll(".collection__filter--img");function s(e){var t=e.target,n=null,r=null;t.closest(".collection__filter--btn")&&(c.forEach((function(e,i){e.classList.contains("active")&&(n=i,e.classList.remove("active"),d[n].classList.remove("visible")),e===t&&(r=i)})),t.classList.add("active"),d[r].classList.add("visible"))}c.forEach((function(e){return e.addEventListener("click",s)}));var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t){return m.default(e)||p.default(e,t)||h.default(e,t)||y.default()};var v,m=b(i("8slrw")),p=b(i("7AJDX")),y=b(i("ifqQW")),h=b(i("auk6i"));function b(e){return e&&e.__esModule?e:{default:e}}!function(e,t,n){n=n||window;var r=!1;n.addEventListener(e,(function(){r||(r=!0,requestAnimationFrame((function(){n.dispatchEvent(new CustomEvent(t)),r=!1})))}))}("resize","optimizedResize"),(v=v||window).animation=function(t,n,r){var i=n.count,o=0;n.start&&n.start.forEach((function(e){t.style[e[0]]=e[1]}));var a=[];n.anim.forEach((function(t){var n=e(f)(t,3),r=n[0],o=n[1],u=n[2],l=Math.max(o,u),c=Math.min(o,u),d=(l-c)/i;a.push({style:r,from:o,to:u,step:d,reverse:c===u})}));var u=function(){a.forEach((function(e){e.reverse?e.from-=e.step:e.from+=e.step,t.style[e.style]=e.from})),++o<i?requestAnimationFrame(u):(n.end&&n.end.forEach((function(e){t.style[e[0]]=e[1]})),r&&r())};requestAnimationFrame(u)};document.addEventListener("DOMContentLoaded",(function(){var e=document.createElement("div");e.className="videotube-modal-overlay",document.body.insertAdjacentElement("beforeend",e);var t=document.createElement("div");t.id="videotube-modal-container";var n=[[3840,2160],[2560,1440],[1920,1080],[1280,720],[854,420],[640,360],[426,240]],r=function(){var e=n.find((function(e){return e[0]<window.visualViewport.width}))||n[n.length-1],r=document.getElementById("videotube-modal");r.width=e[0],r.height=e[1],t.style.cssText="\n\t\t\twidth: ".concat(e[0],";\n\t\t\theight: ").concat(e[1],";\n\t\t")},i=function(){var n=window.visualViewport.height,r=window.visualViewport.width,i=t.style.width,o=t.style.height;t.style.left=(r-i)/2,t.style.top=(n-o)/2,e.style.height=document.documentElement.clientHeight},o=function(){i(),r()},a=function(){animation(e,{end:[["display","none"]],anim:[["opacity",1,0]],count:20},(function(){e.textContent=""})),window.removeEventListener("optimizedResize",o),document.removeEventListener("keyup",u)},u=function(e){27===e.keyCode&&a()};e.addEventListener("click",a),document.addEventListener("click",(function(t){var n=t.target.closest(".tube");if(n){var a=n.href,l=a.includes("youtube")?a.match(/(\?|&)v=([^&]+)/)[2]:a.match(/(\.be\/)([^&]+)/)[2];0!==l.length&&(t.preventDefault(),animation(e,{start:[["display","block"]],anim:[["opacity",0,1]],count:20}),e.insertAdjacentHTML("beforeend",'\n\t\t\t<div id="videotube-modal-loading">Загрузка...</div>\n\t\t\t<div id="videotube-modal-close">&#10006;</div>\n\t\t\t<div id="videotube-modal-container">\n\t\t\t\t<iframe src="https://youtube.com/embed/'.concat(l,'?autoplay=1" \n\t\t\t\t\tframeborder="0"\n\t\t\t\t\tid="videotube-modal" \n\t\t\t\t\tallowfullscreen\n\t\t\t\t\tallow="autoplay">\n\t\t\t\t</iframe>\n\t\t\t</div>\n\t\t')),r(),i(),window.addEventListener("optimizedResize",o),document.addEventListener("keyup",u))}}))}))}();
//# sourceMappingURL=index.75c08ba4.js.map