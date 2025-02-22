import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderImage } from "./js/render-functions";

const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");
const list = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionPosition: "bottom",
    captionsData: "alt",
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = input.value.trim();

    if (value === "") {
        iziToast.error({
            position: "topRight",
            message: "Please enter some text",
        });
        return;
    }

    list.innerHTML = "";
    loader.classList.remove("visually-hidden");

    try {
        console.log("Надсилаємо запит з:", value);
        const data = await fetchImages(value);
        console.log("Ответ от API:", data);

        if (data.hits && data.hits.length > 0) {
            list.insertAdjacentHTML("beforeend", renderImage(data.hits));
            lightbox.refresh();
            input.value = "";
        } else {
            iziToast.error({
                position: "topRight",
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
        }
    } catch (error) {
        console.error("Помилка при запиті:", error);
        iziToast.error({
            position: "topRight",
            message: "Sorry, the request can't be completed at this time. Please try again",
        });
    } finally {
        loader.classList.add("visually-hidden");
    }
});


