import { toast } from 'react-toastify';

import axiosInstance from '@/configs/axiosInstance';

export const APICoreHR = {
  getDepartments: async () => {
    try {
      const result = await axiosInstance.get('/departments', {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getDesignations: async () => {
    try {
      const result = await axiosInstance.get('/designations', {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
