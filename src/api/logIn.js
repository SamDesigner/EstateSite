import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_URL


export const userLogin = async (email, password) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/auth/login`,{
            email,
            password
        });
        return response.data
    }catch(error){
        console.error('There was an error while trying to signup',error);
        return error
    }

}