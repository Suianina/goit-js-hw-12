import axios from "axios";
import iziToast from "izitoast";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "48789151-f51ae4d97727bedfe2d09c642";


export async function fetchImages(value) {
    const query = value.trim();
    console.log("Надсилаємо запит:", query)

    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        console.log("Відповідь від API:", response.data);
        return response.data; 
    } catch (error) {
        console.error("Помилка API:", error);
        iziToast.error({
            position: "topRight",
            message: "Error fetching images. Please try again!",
        });
        return { hits: [] };
    }
}
