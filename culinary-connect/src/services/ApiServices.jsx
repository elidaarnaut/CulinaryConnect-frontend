import axios from "axios";
import { getToken } from './tokenService';

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", 
});

export const registerUser = async (formData) => {
    try {
        const response = await api.post('/auth/register', formData);
        console.log("User registered Successfully:", response.data);
        return response.data;
    } catch (err) {
        console.error("Error registering user:", err);
        throw err;
    }
};

export const loginUser = async (formData) => {
    try {
        const response = await api.post('/auth/login', formData);
        console.log("User logged in successfully:", response.data);
        return response.data;
    } catch (err) {
        console.error("Error logging in user:", err);
        throw err;
    }
};

export const logoutUser = async () => {
    try {
        const response = await api.get('/auth/logout');
        console.log("User logged out successfully:", response.data);
    } catch (err) {
        console.error("Error logging out user:", err);
        throw err;
    }
};

export const getUser = async () => {
    try {
        const token = getToken();
        const response = await api.get('/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("User data retrieved successfully:", response.data);
        return response.data;
    } catch (err) {
        console.error("Error getting user data:", err);
        throw err;
    }
};


export const forgotPassword = async (formData) => {
    try {
        const response = await api.post('/auth/forgotpassword', formData);
        console.log("Password reset link sent:", response.data);
        return response.data;
    } catch (err) {
        console.error("Error resetting password:", err);
        throw err;
    }
};

export const resetPassword = async (resettoken, newPassword) => { // Added resettoken parameter
    try {
        const response = await api.put(`/auth/resetpassword/${resettoken}`, {password: newPassword});
        console.log("Password reset successfully:", response.data);
        return response.data;
    } catch (err) {
        console.error("Error resetting password:", err);
        throw err;
    }
};

export const updateUser = async (userData) => {
    try {
        const token = getToken();
        const response = await api.put('/auth/updatedetails', userData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.error("Error updating user details:", err);
        throw err;
    }
};

export const updateUserPassword = async (passwordData) => {
    try {
        const token = getToken();
        const response = await api.put('/auth/updatepassword', passwordData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.error("Error updating user password:", err);
        throw err;
    }
};
