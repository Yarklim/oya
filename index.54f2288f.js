const t=document.querySelectorAll(".collection__filter--btn"),e=document.querySelectorAll(".collection__filter--img");function l(l){const c=l.target;let i=null,s=null;c.closest(".collection__filter--btn")&&(t.forEach(((t,l)=>{t.classList.contains("active")&&(i=l,t.classList.remove("active"),e[i].classList.remove("visible")),t===c&&(s=l)})),c.classList.add("active"),e[s].classList.add("visible"))}t.forEach((t=>t.addEventListener("click",l)));
//# sourceMappingURL=index.54f2288f.js.map
