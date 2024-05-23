import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

export const APIHelpdesk = {
  createHelpdesk: async (helpdeskData) => {
    try {
      const result = await axiosInstance.post('/employee/helpdesks', helpdeskData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Helpdesk created successfully");
      return result.data;
    } catch (error) {
      toast.error("Error occurred while creating helpdesk.");
      throw new Error(error);
    }
  },

  viewAllHelpdesks: async () => {
    try {
      const result = await axiosInstance.get('/employee/helpdesks', {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      toast.error("Error occurred while fetching helpdesks.");
      throw new Error(error);
    }
  },

  viewHelpdeskById: async (id) => {
    if (!id) {
      toast.error("Invalid helpdesk ID.");
      throw new Error("Invalid helpdesk ID.");
    }
    
    try {
      const result = await axiosInstance.get(`/employee/helpdesks/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      toast.error("Error occurred while fetching helpdesk.");
      throw new Error(error);
    }
  },

  updateHelpdeskById: async (id, helpdeskData) => {
    try {
      const result = await axiosInstance.put(`/employee/helpdesks/${id}`, helpdeskData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Helpdesk updated successfully");
      return result.data;
    } catch (error) {
      toast.error("Error occurred while updating helpdesk.");
      throw new Error(error);
    }
  },

  deleteHelpdeskById: async (id) => {
    try {
      const result = await axiosInstance.delete(`/employee/helpdesks/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Helpdesk deleted successfully");
      return result.data;
    } catch (error) {
      toast.error("Error occurred while deleting helpdesk.");
      throw new Error(error);
    }
  }
};