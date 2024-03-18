import { toast } from 'react-toastify';

import axiosInstance from '@/configs/axiosInstance';

export const APIEmployees = {
  
    createEmployee: async (employeeData) => {
        console.log("Data yang dikirim:", employeeData);
        try {
          const result = await axiosInstance.post('/admin/employees', employeeData);
          console.log("Response dari API:", result);
          toast.success(result.data.message);
          return result.data;
        } catch (error) {
          toast.error(error.response.data.message);
          console.log("Error:", error);
          throw new Error(error);
        }
    },

    getAllEmployees: async () => {
        try {
            const result = await axiosInstance.get('/employees');
            console.log("Response dari API:", result);
            return result.data;
        } catch (error) {
            console.log("Error:", error);
            throw new Error(error);
        }
    },
};