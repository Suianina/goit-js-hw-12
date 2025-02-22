import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderImage } from "./js/render-functions";

const refs = {
    form: document.querySelector(".search-form"),
    input: document.querySelector(".search-input"),
    list: document.querySelector(".gallery"),
    loader: document.querySelector(".loader"),
    loadMoreBtn: document.body.appendChild(Object.assign(document.createElement("button"), {
        textContent: "Load more", className: "load-more visually-hidden"
    }))
};

let params = { query: "", page: 1, perPage: 40, total: 0 };
let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250
});


refs.form.addEventListener("submit", async (e) => {
    e.preventDefault();
    params.query = refs.input.value.trim();

    if (!params.query)
        return iziToast.error({
            message: "Please enter some text",
        });

    refs.list.innerHTML = "";
    params.page = 1;
    toggleLoader(true);
    await fetchAndRenderImages();
});
        
refs.loadMoreBtn.addEventListener("click", async () => {
    params.page++;
    toggleLoader(true);
    await fetchAndRenderImages();
});
   
async function fetchAndRenderImages() {
    try {
        const { hits, totalHits } = await fetchImages(params.query, params.page);
        params.total = totalHits;

        if (!hits.length) return iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
         
        refs.list.insertAdjacentHTML("beforeend", renderImage(hits));
        lightbox.refresh();
        smoothScroll();
        if (params.page * params.perPage >= params.total) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results"
            });
            toggleLoadMore(false);
        } else {
            toggleLoadMore(true);
        }
    } catch (error) {
      } finally {
         toggleLoader(false);
    }
}

const toggleLoader = (show) => refs.loader.classList.toggle("visually-hidden", !show);
const toggleLoadMore = (show) => refs.loadMoreBtn.classList.toggle("visually-hidden", !show);
const smoothScroll = () => window.scrollBy({top: refs.list.firstElementChild.getBoundingClientRect().height * 2, behavior: "smooth" });
    
   



