import{a as m,i as l,S as g}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const f="https://pixabay.com/api/",y="48789151-f51ae4d97727bedfe2d09c642";async function h(r,e=1,n=40){try{return(await m.get(f,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:n}})).data}catch{return l.error({position:"topRight",message:"Error fetching images. Please try again!"}),{hits:[],totalHits:0}}}function v(r){return r.map(e=>`
      <li class="gallery-item">
        <div class="image-cont">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="image-descr">
            <div class="descr-box">
              <p class="image-feature">Likes</p>
              <p class="image-data">${e.likes}</p>
            </div>
            <div class="descr-box">
              <p class="image-feature">Views</p>
              <p class="image-data">${e.views}</p>
            </div>
            <div class="descr-box">
              <p class="image-feature">Comments</p>
              <p class="image-data">${e.comments}</p>
            </div>
            <div class="descr-box">
              <p class="image-feature">Downloads</p>
              <p class="image-data">${e.downloads}</p>
            </div>
          </div>
        </div>
      </li>
    `).join("")}const o={form:document.querySelector(".search-form"),input:document.querySelector(".search-input"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.body.appendChild(Object.assign(document.createElement("button"),{textContent:"Load more",className:"load-more visually-hidden"}))};let a={query:"",page:1,perPage:40,total:0},b=new g(".gallery a",{captions:!0,captionDelay:250});o.form.addEventListener("submit",async r=>{if(r.preventDefault(),a.query=o.input.value.trim(),!a.query)return l.error({message:"Please enter some text"});o.list.innerHTML="",a.page=1,d(!0),await p()});o.loadMoreBtn.addEventListener("click",async()=>{a.page++,d(!0),await p()});async function p(){try{const{hits:r,totalHits:e}=await h(a.query,a.page);if(a.total=e,!r.length)return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});o.list.insertAdjacentHTML("beforeend",v(r)),b.refresh(),L(),a.page*a.perPage>=a.total?(l.info({message:"We're sorry, but you've reached the end of search results"}),u(!1)):u(!0)}catch{}finally{d(!1)}}const d=r=>o.loader.classList.toggle("visually-hidden",!r),u=r=>o.loadMoreBtn.classList.toggle("visually-hidden",!r),L=()=>window.scrollBy({top:o.list.firstElementChild.getBoundingClientRect().height*2,behavior:"smooth"});
//# sourceMappingURL=index.js.map
