import { toast } from 'react-toastify';

import axiosInstance from '@/configs/axiosInstance';

export const APIRecruitment = {
  createJob: async (jobData) => {
    try {
      const result = await axiosInstance.post('/jobs', jobData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("New job created successfully");
      return result.data;
    } catch (error) {
      toast.error("Failed to create new job.");
      throw new Error(error);
    }
  },

  getAllJobs: async () => {
    try {
      const result = await axiosInstance.get('/jobs');
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getJobById: async (id) => {
    try {
      const result = await axiosInstance.get(`/jobs/${id}`);
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  updateJobById: async (id, jobData) => {
    try {
      const result = await axiosInstance.put(`/jobs/${id}`, jobData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("New job updated successfully");
      return result.data;
    } catch (error) {
      toast.error("Failed to update job.");
      throw new Error(error);
    }
  },
  
  deleteJobById: async (id) => {
    try {
      const result = await axiosInstance.delete(`/jobs/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("New job deleted successfully");
      return result.data;
    } catch (error) {
      toast.error("Failed to delete job.");
      throw new Error(error);
    }
  },
};
