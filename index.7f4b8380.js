window.onload=()=>{const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&e.target.hasAttribute("data-footer")}))}),{root:null,riitMargin:"0px",threshold:.1});document.querySelectorAll("[data-observer-target]").forEach((t=>{e.observe(t)}))};const e=document.querySelector(".header__nav-menu"),t=document.querySelector(".js-menu__open"),n=document.querySelector(".js-menu__close"),o=document.querySelector(".nav-menu__nav--list"),i=document.querySelector(".scroll__menu"),c=document.querySelector(".scroll__menu--btn"),s=document.querySelector(".scroll__menu-list--wrapper"),l=document.querySelectorAll(".scroll__menu-link");let a=null;function d(){e.classList.remove("open-menu")}function r(){s.classList.toggle("active"),c.classList.toggle("active")}t.addEventListener("click",(function(){e.classList.add("open-menu")})),n.addEventListener("click",d),o.addEventListener("click",(function(e){const t=document.querySelector(".active__nav-link");t&&t.classList.remove("active__nav-link");const n=e.target;n.classList.add("active__nav-link"),a=n.dataset.value,d()})),window.addEventListener("scroll",(()=>{let e=document.body.scrollHeight,t=e-.06*e;Math.round(window.scrollY)>300&&Math.round(window.scrollY)<t?i.classList.add("active"):i.classList.remove("active")})),c.addEventListener("click",r),l.forEach((e=>e.addEventListener("click",r)));const u=document.querySelectorAll(".collection__filter--btn"),m=document.querySelectorAll(".collection__filter--img");function v(e){const t=e.target;let n=null,o=null;t.closest(".collection__filter--btn")&&(u.forEach(((e,i)=>{e.classList.contains("active")&&(n=i,e.classList.remove("active"),m[n].classList.remove("visible")),e===t&&(o=i)})),t.classList.add("active"),m[o].classList.add("visible"))}u.forEach((e=>e.addEventListener("click",v)));var h;((e,t,n)=>{n=n||window;let o=!1;n.addEventListener(e,(function(){o||(o=!0,requestAnimationFrame((function(){n.dispatchEvent(new CustomEvent(t)),o=!1})))}))})("resize","optimizedResize"),(h=h||window).animation=function(e,t,n){const o=t.count;let i=0;t.start&&t.start.forEach((t=>{e.style[t[0]]=t[1]}));const c=[];t.anim.forEach((([e,t,n])=>{const i=Math.max(t,n),s=Math.min(t,n),l=(i-s)/o;c.push({style:e,from:t,to:n,step:l,reverse:s===n})}));const s=()=>{c.forEach((t=>{t.reverse?t.from-=t.step:t.from+=t.step,e.style[t.style]=t.from})),i++,i<o?requestAnimationFrame(s):(t.end&&t.end.forEach((t=>{e.style[t[0]]=t[1]})),n&&n())};requestAnimationFrame(s)};document.addEventListener("DOMContentLoaded",(()=>{const e=document.createElement("div");e.className="videotube-modal-overlay",document.body.insertAdjacentElement("beforeend",e);const t=document.createElement("div");t.id="videotube-modal-container";const n=[[3840,2160],[2560,1440],[1920,1080],[1280,720],[854,420],[640,360],[426,240]],o=()=>{const e=n.find((e=>e[0]<window.visualViewport.width))||n[n.length-1],o=document.getElementById("videotube-modal");o.width=e[0],o.height=e[1],t.style.cssText=`\n\t\t\twidth: ${e[0]};\n\t\t\theight: ${e[1]};\n\t\t`},i=()=>{const n=window.visualViewport.height,o=window.visualViewport.width,i=t.style.width,c=t.style.height;t.style.left=(o-i)/2,t.style.top=(n-c)/2,e.style.height=document.documentElement.clientHeight},c=()=>{i(),o()},s=()=>{animation(e,{end:[["display","none"]],anim:[["opacity",1,0]],count:20},(()=>{e.textContent=""})),window.removeEventListener("optimizedResize",c),document.removeEventListener("keyup",l)},l=e=>{27===e.keyCode&&s()};e.addEventListener("click",s),document.addEventListener("click",(t=>{const n=t.target.closest(".tube");if(!n)return;const s=n.href;let a=s.includes("youtube")?s.match(/(\?|&)v=([^&]+)/)[2]:s.match(/(\.be\/)([^&]+)/)[2];0!==a.length&&(t.preventDefault(),animation(e,{start:[["display","block"]],anim:[["opacity",0,1]],count:20}),e.insertAdjacentHTML("beforeend",`\n\t\t\t<div id="videotube-modal-loading">Загрузка...</div>\n\t\t\t<div id="videotube-modal-close">&#10006;</div>\n\t\t\t<div id="videotube-modal-container">\n\t\t\t\t<iframe src="https://youtube.com/embed/${a}?autoplay=1" \n\t\t\t\t\tframeborder="0"\n\t\t\t\t\tid="videotube-modal" \n\t\t\t\t\tallowfullscreen\n\t\t\t\t\tallow="autoplay">\n\t\t\t\t</iframe>\n\t\t\t</div>\n\t\t`),o(),i(),window.addEventListener("optimizedResize",c),document.addEventListener("keyup",l))}))}));
//# sourceMappingURL=index.7f4b8380.js.map
