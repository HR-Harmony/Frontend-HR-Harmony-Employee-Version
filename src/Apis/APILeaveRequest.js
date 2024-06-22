import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

export const APILeaveRequest = {
  getAllLeaveRequestTypes: async () => {
    try {
      const result = await axiosInstance.get('/employee/leave_request_types');
      return result.data;
    } catch (error) {
    }
  },


  getLeaveRequestTypeById: async (id) => {
    try {
      const result = await axiosInstance.get(`/employee/leave_requests/${id}`);
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  createLeaveRequest: async (leaveRequestData) => {
    try {
      const result = await axiosInstance.post('/employee/leave_requests', leaveRequestData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(result.data.message);
      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
      throw new Error(error);
    }

  },

  getAllLeaveRequests: async (params) => {
    try {
      const result = await axiosInstance.get('/employee/leave_requests', {
        params,
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getLeaveRequestById: async (id) => {
    try {
      const result = await axiosInstance.get(`/employee/leave_requests/${id}`);
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  updateLeaveRequestById: async (id, leaveRequestData) => {
    try {
      const result = await axiosInstance.put(`/employee/leave_requests/${id}`, leaveRequestData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(result.data.message);
      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
      throw new Error(error);
    }
  },

  deleteLeaveRequestById: async (id) => {
    try {
      const result = await axiosInstance.delete(`/employee/leave_requests/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(result.data.message);
      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
      throw new Error(error);
    }
  }
};