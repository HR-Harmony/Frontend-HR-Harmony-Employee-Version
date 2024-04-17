import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

export const APIProjects = {
  getAllProjects: async () => {
    try {
      const result = await axiosInstance.get('/projects', {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      if (result.data.code === 200) {
        toast.success(result.data.message);
      } else {
        toast.error("Gagal mengambil data projects.");
      }
      return result.data;
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Terjadi kesalahan jaringan atau server.");
      }
      throw new Error(error);
    }
  },

  createProject: async (projectData) => {
    try {
      const response = await axiosInstance.post('/projects', projectData, {
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
      const response = await axiosInstance.get(`/projects/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return response.data.project;
    } catch (error) {
      toast.error("Failed to retrieve project.");
      throw new Error(error);
    }
  },

  editProjectById: async (id, projectData) => {
    try {
      const response = await axiosInstance.put(`/projects/${id}`, projectData, {
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
      const response = await axiosInstance.delete(`/projects/${id}`, {
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
};