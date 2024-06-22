import { toast } from 'react-toastify';

import axiosInstance from '@/configs/axiosInstance';

export const APIAttendance  = {
  getAllAttendances: async (params) => {
    try {
      const result = await axiosInstance.get('/employee/attendance', {
        params,
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getAttendanceById: async (attendanceId) => {
    try {
      const result = await axiosInstance.get(`/employee/attendance/${attendanceId}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  updateAttendance: async (attendanceId, attendanceData) => {
    try {
      const result = await axiosInstance.put(`/employee/attendance/${attendanceId}`, attendanceData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Attendance data updated successfully");
      return result.data;
    } catch (error) {
      toast.error("Error updating attendance data.");
      throw new Error(error);
    }
  },

  deleteAttendance: async (attendanceId) => {
    try {
      const result = await axiosInstance.delete(`/employee/attendance/${attendanceId}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Attendance data deleted successfully");
      return result.data;
    } catch (error) {
      toast.error("Error deleting attendance data.");
      throw new Error(error);
    }
  },

  createOvertimeRequest: async (overtimeRequestData) => {
    try {
      const result = await axiosInstance.post('/employee/overtime_requests', overtimeRequestData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Overtime Request data added successfully");
      return result.data;
    } catch (error) {
      toast.error("Error adding Overtime Request data.");
      throw new Error(error);
    }
  },

  getAllOvertimeRequests: async (params) => {
    try {
      const result = await axiosInstance.get('/employee/overtime_requests', {
        params,
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getOvertimeRequestById: async (overtimeRequestId) => {
    try {
      const result = await axiosInstance.get(`/overtime_requests/${overtimeRequestId}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  updateOvertimeRequest: async (overtimeRequestId, overtimeRequestData) => {
    try {
      const result = await axiosInstance.put(`/employee/overtime_requests/${overtimeRequestId}`, overtimeRequestData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Overtime Request data updated successfully");
      return result.data;
    } catch (error) {
      toast.error("Error updating Overtime Request data.");
      throw new Error(error);
    }
  },

  deleteOvertimeRequest: async (overtimeRequestId) => {
    try {
      const result = await axiosInstance.delete(`/employee/overtime_requests/${overtimeRequestId}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Overtime Request data deleted successfully");
      return result.data;
    } catch (error) {
      toast.error("Error deleting Overtime Request data.");
      throw new Error(error);
    }
  },
};