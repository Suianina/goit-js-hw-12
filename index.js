import{a as P,S,i}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const w="https://pixabay.com/api/",q="48789151-f51ae4d97727bedfe2d09c642";async function g(s,e){return(await P.get(w,{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40}})).data}function h(s){return s.map(e=>`
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
    `).join("")}const p=document.querySelector(".load-more-btn"),x=document.querySelector(".search-form"),R=document.querySelector(".search-input"),d=document.querySelector(".gallery"),y=document.querySelector(".loader");let n,l="",m;const B=40;let v=new S(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"});x.addEventListener("submit",async s=>{if(s.preventDefault(),l=s.target.elements.query.value.trim(),n=1,!l){i.error({position:"topRight",message:"Please enter some text"}),o();return}b(),a(),d.innerHTML="";try{const e=await g(l,n);if(m=Math.ceil(e.totalHits/B),e.hits&&e.hits.length>0){const c=h(e.hits);d.insertAdjacentHTML("beforeend",c),o(),a(),v.refresh()}else i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),o(),a()}catch{a(),o(),i.error({position:"topRight",message:"Sorry, the request can't be completed at this time. Please try again"})}R.value="",L()});p.addEventListener("click",async()=>{n++,b(),a();try{const s=await g(l,n),e=h(s.hits);d.insertAdjacentHTML("beforeend",e),v.refresh(),$()}catch(s){console.log(s),i.error({position:"bottomRight",message:"Sorry, the request can't be completed at this time. Please try again"})}o(),L()});function E(){p.classList.remove("visually-hidden")}function a(){p.classList.add("visually-hidden")}function b(){y.classList.remove("visually-hidden")}function o(){y.classList.add("visually-hidden")}function L(){n>=m?(a(),m&&(i.info({position:"bottomRight",message:"We're sorry, but you've reached the end of search results"}),a())):E()}function $(){const e=d.children[0].getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
