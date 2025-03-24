import{a as y,S as p,i as l}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g="20276088-c806993f1529a751a1465ba64",h="https://pixabay.com/api/";async function b(o){try{return(await y.get(h,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}let n,c;document.addEventListener("DOMContentLoaded",()=>{if(n=document.querySelector(".gallery"),!n){console.error("Gallery element not found in the DOM");return}});function L(o){if(!n)return;if(!Array.isArray(o)||o.length===0){console.warn("No images found");return}f();const t=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:s,comments:d,downloads:m})=>`
        <li class="gallery-item">
          <a href="${i}" class="gallery-link">
            <img src="${a}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${s}</p>
            <p><b>Comments:</b> ${d}</p>
            <p><b>Downloads:</b> ${m}</p>
          </div>
        </li>
      `).join("");n.insertAdjacentHTML("beforeend",t),c?setTimeout(()=>c.refresh(),100):c=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function f(){n&&(n.innerHTML="")}const w=document.querySelector(".form"),u=document.querySelector(".loader");w.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){l.error({message:"Please enter a search term!"});return}u.style.display="block",f();try{const a=await b(t);a.length===0?l.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):L(a)}catch{l.error({message:"Failed to fetch images. Try again later."})}finally{u.style.display="none"}});
//# sourceMappingURL=index.js.map
