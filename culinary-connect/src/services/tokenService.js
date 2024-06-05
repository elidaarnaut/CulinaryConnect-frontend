import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", 
});

// Function to save token securely
export const saveToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Function to get token from storage
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Function to remove token from storage (logout)
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  