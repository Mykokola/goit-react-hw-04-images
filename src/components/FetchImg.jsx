import axios from "axios";
export const fetchImgj = async (imagesName,numb=1) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${imagesName}&page=${numb}&key=38205688-1a64b11afc73d687830058e8a&image_type=photo&orientation=horizontal&per_page=12`)
    return response
}