import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

export const APIDashboard = {
    getDashboard: async (queryParams) => {
        try {
            const result = await axiosInstance.get('/employee/dashboard', {
                params: queryParams,
                headers: {
                    'Authorization': `Bearer YOUR_TOKEN_HERE`
                }
            });
            return result.data;
        } catch (error) {
            throw new Error(error);
        }
    },

    clickInDashboard: async () => {
        try {
            const result = await axiosInstance.post('/employee/checkin', {
                headers: {
                    'Authorization': `Bearer YOUR_TOKEN_HERE`
                }
            });
            toast.success(result.data.message);
            return result.data;
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to clock in');
            throw new Error(error);
        }
    },

    clickOutDashboard: async () => {
        try {
            const result = await axiosInstance.put('/employee/checkout', {
                headers: {
                    'Authorization': `Bearer YOUR_TOKEN_HERE`
                }
            });
            toast.success(result.data.message);
            return result.data;
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to clock out');
            throw new Error(error);
        }
    },
};
