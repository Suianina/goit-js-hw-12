import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "48789151-f51ae4d97727bedfe2d09c642";

export async function getImages(query, page){
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page,
                per_page: 40,
            },
        });
        return response.data;
    }