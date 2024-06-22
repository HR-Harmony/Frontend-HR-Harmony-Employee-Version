import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

export const APITraining = {
  viewAllTrainings: async (params) => {
    try {
      const result = await axiosInstance.get('/employee/trainings', {
        params,
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  viewTrainingById: async (id) => {
    try {
      const result = await axiosInstance.get(`/employee/trainings/${id}`);
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};