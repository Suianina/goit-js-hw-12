import axios from "axios";
import iziToast from "izitoast";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "48789151-f51ae4d97727bedfe2d09c642";

export async function fetchImages(query, page = 1, perPage = 40 ) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page,
                per_page: perPage,
            },
        });
        return response.data; 
    } catch (error) {
        iziToast.error({
            position: "topRight",
            message: "Error fetching images. Please try again!",
        });
        return { hits: [], totalHits: 0 };
    }
}
