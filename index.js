import{a as p,i as l,S as g}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const y="https://pixabay.com/api/",h="48789151-f51ae4d97727bedfe2d09c642";async function v(e,t=1,n=40){try{return(await p.get(y,{params:{key:h,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:n}})).data}catch{return l.error({position:"topRight",message:"Error fetching images. Please try again!"}),{hits:[],totalHits:0}}}function L(e){return e.map(t=>`
      <li class="gallery-item">
        <div class="image-cont">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="image-descr">
            <div class="descr-box">
              <p class="image-feature">Likes</p>
              <p class="image-data">${t.likes}</p>
            </div>
            <div class="descr-box">
              <p class="image-feature">Views</p>
              <p class="image-data">${t.views}</p>
            </div>
            <div class="descr-box">
              <p class="image-feature">Comments</p>
              <p class="image-data">${t.comments}</p>
            </div>
            <div class="descr-box">
              <p class="image-feature">Downloads</p>
              <p class="image-data">${t.downloads}</p>
            </div>
          </div>
        </div>
      </li>
    `).join("")}const s={form:document.querySelector(".search-form"),input:document.querySelector(".search-input"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")};let o={query:"",page:1,perPage:40,total:0},b=new g(".gallery a",{captions:!0,captionDelay:250});const d=e=>{e?(s.loadMoreBtn.classList.remove("visually-hidden"),s.loadMoreBtn.classList.add("visible")):(s.loadMoreBtn.classList.add("visually-hidden"),s.loadMoreBtn.classList.remove("visible"))},f=e=>{e?(s.loadMoreBtn.classList.add("disabled"),s.loadMoreBtn.disabled=!0):(s.loadMoreBtn.classList.remove("disabled"),s.loadMoreBtn.disabled=!1)};s.form.addEventListener("submit",async e=>{if(e.preventDefault(),o.query=s.input.value.trim(),!o.query)return l.error({message:"Please enter some text"});s.list.innerHTML="",o.page=1,o.total=0,u(!0),d(!1),await m()});s.loadMoreBtn.addEventListener("click",async()=>{o.page++,u(!0),f(!0),await m()});async function m(){try{const{hits:e,totalHits:t}=await v(o.query,o.page);if(o.total=t,!e.length)return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});s.list.insertAdjacentHTML("beforeend",L(e)),b.refresh(),M(),o.page*o.perPage>=o.total?(l.info({message:"We're sorry, but you've reached the end of search results"}),d(!1)):d(!0)}catch{}finally{u(!1),f(!1)}}const u=e=>s.loader.classList.toggle("visually-hidden",!e),M=()=>window.scrollBy({top:s.list.firstElementChild.getBoundingClientRect().height*2,behavior:"smooth"});
//# sourceMappingURL=index.js.map
