import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getProperties = async () => {
  try {
    const response = await axiosInstance.get("/property");
    return response.data;
  } catch (error) {
    console.error("There was an error while getting properties", error);
  }
};

export const getProperty = async (id) => {
  try {
    const response = await axiosInstance.get(`/property/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "There was an issue while fetching the single Property",
      error
    );
  }
};

export const createProperty = async (formData) => {
  try {
    const response = await axiosInstance.post(`/property`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("There was an issue while creating the property", error);
  }
};

export const updateProperty = async (id, formData) => {
  try {
    const response = await axiosInstance.put(`/property/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("This was the erro while updating the Property", error);
  }
};

export const deleteProperty = async (id) => {
  try {
    const response = await axiosInstance.delete(`/property/${id}`);
    return response.data;
  } catch (error) {
    console.error("The property was not deleted successfully", error);
  }
};
