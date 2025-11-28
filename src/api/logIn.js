import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_URL


export const userLogin = async (email, password) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/auth/login`,{
            email,
            password
        });
        console.log('Response from the login Page', response.data);
        const token = response.data.token;
        if(token){
        localStorage.setItem("token", token)

        }
        return response.data
    }catch(error){
        console.error('There was an error while trying to login', error);
        // Return error message if API is not available
        return {error:error.response?.data?.message || 'Login service is currently unavailable. Please try again later.' }
    }

}