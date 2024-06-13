import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

export const APIProfile = {
    getProfile: async () => {
        try {
            const result = await axiosInstance.get('/profile');
            return result.data;
        } catch (error) {
            throw new Error(error);
        }
    },

    editProfile: async (data) => {
        console.log(data);
        try {
            const result = await axiosInstance.put('/profile/edit', data);
            toast.success(result.data.message);
            return result.data;
        } catch (error) {
            toast.error(error.response.data.message);
            throw new Error(error);
        }
    },

    changePassword: async (data) => {
        try {
            const result = await axiosInstance.put('/profile/change-password', data);
            toast.success(result.data.message);
            return result.data;
        } catch (error) {
            toast.error(error.response.data.message);
            throw new Error(error);
        }
    }
};