import { toast } from 'react-toastify';

import axiosInstance from '@/configs/axiosInstance';

export const APIPayroll = {
  getAllPayrolls: async () => {
    try {
      const result = await axiosInstance.get('/payrolls', {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getPayrollHistory: async () => {
    try {
      const result = await axiosInstance.get('/payrolls/history', {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  }
};
