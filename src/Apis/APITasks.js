import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

export const APITasks = {
  createTask: async (taskData) => {
    try {
      const response = await axiosInstance.post('/employee/tasks', taskData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error("Failed to create task.");
      throw new Error(error);
    }
  },

  getAllTasks: async () => {
    try {
      const response = await axiosInstance.get('/employee/tasks', {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to retrieve tasks.");
      throw new Error(error);
    }
  },

  getTaskById: async (id) => {
    try {
      const response = await axiosInstance.get(`/tasks/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return response.data.task;
    } catch (error) {
      toast.error("Failed to retrieve task.");
      throw new Error(error);
    }
  },

  updateTaskById: async (id, taskData) => {
    try {
      const response = await axiosInstance.put(`/employee/tasks/${id}`, taskData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error("Failed to update task.");
      throw new Error(error);
    }
  },

  deleteTaskById: async (id) => {
    try {
      const response = await axiosInstance.delete(`/employee/tasks/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Failed to delete task.");
      throw new Error(error);
    }
  },
};