import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL


export const sendContactForm =  async (formData) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/contact`, formData);
        return response.data
    }catch(error){
        console.error('There was an error in while sending contact', error)
    }
}