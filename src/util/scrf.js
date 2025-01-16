//export let csrfToken = null;
import axios from "axios";

export const fetchCsrfToken = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/csrf-token`, {
      withCredentials: true, // Include cookies in the request
    });
    return response.data.csrfToken;
    console.log("CSRF Token fetched:", csrfToken);
  } catch (error) {
    console.error("Error fetching CSRF token:", error.response?.data || error.message);
  }
};




