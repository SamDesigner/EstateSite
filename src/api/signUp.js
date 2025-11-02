import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_URL
export const userSignUp = async (name, email, password) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/auth/signup`,{
            name,
            email,
            password
        });
        // const token = response.data.token;
     
        return response.data
    }catch(error){
        console.error('There was an error while trying to signup',error);
        // Return error message if API is not available
        return { error: 'Signup service is currently unavailable. Please try again later.' }
    }

}