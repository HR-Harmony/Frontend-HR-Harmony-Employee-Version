import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

export const APIProjects = {
  getAllProjects: async () => {
    try {
      const result = await axiosInstance.get('/employee/projects');
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  createProject: async (projectData) => {
    try {
      const response = await axiosInstance.post('/employee/projects', projectData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error("Failed to create project.");
      throw new Error(error);
    }
  },

  getProjectById: async (id) => {
    try {
      const response = await axiosInstance.get(`employee/projects/${id}`);
      return response.data.project;
    } catch (error) {
      throw new Error(error);
    }
  },

  editProjectById: async (id, projectData) => {
    try {
      const response = await axiosInstance.put(`/employee/projects/${id}`, projectData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error("Failed to update project.");
      throw new Error(error);
    }
  },
  
  deleteProjectById: async (id) => {
    try {
      const response = await axiosInstance.delete(`/employee/projects/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error("Failed to delete project.");
      throw new Error(error);
    }
  },

  getProjectProgressBar: async () => {
    try {
      const result = await axiosInstance.get('/employee/projects/progress-bar');
      return result.data.project_status;
    } catch (error) {
      throw new Error(error);
    }
  },
};