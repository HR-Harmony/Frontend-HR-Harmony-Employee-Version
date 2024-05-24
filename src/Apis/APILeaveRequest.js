import { toast } from 'react-toastify';
import axiosInstance from '@/configs/axiosInstance';

export const APILeaveRequest = {
  getAllLeaveRequestTypes: async () => {
    try {
      const result = await axiosInstance.get('/leave_request_types', {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      toast.error("Error occurred while fetching leave request types.");
      throw new Error(error);
    }
  },

  getLeaveRequestTypeById: async (id) => {
    try {
      const result = await axiosInstance.get(`/leave_request_types/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
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
      toast.success("Leave request created successfully");
      return result.data;
    } catch (error) {
      toast.error("Error occurred while creating leave request.");
      throw new Error(error);
    }
  },

  getAllLeaveRequests: async () => {
    try {
      const result = await axiosInstance.get('/employee/leave_requests', {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      toast.error("Error occurred while fetching leave requests.");
      throw new Error(error);
    }
  },

  getLeaveRequestById: async (id) => {
    try {
      const result = await axiosInstance.get(`/employee/leave_requests/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
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
      toast.success("Leave request updated successfully");
      return result.data;
    } catch (error) {
      toast.error("Error occurred while updating leave request.");
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
      toast.success("Leave request deleted successfully");
      return result.data;
    } catch (error) {
      toast.error("Error occurred while deleting leave request.");
      throw new Error(error);
    }
  }
};