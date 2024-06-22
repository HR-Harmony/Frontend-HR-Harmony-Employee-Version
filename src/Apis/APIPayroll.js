import { toast } from 'react-toastify';

import axiosInstance from '@/configs/axiosInstance';

export const APIPayroll = {
  getAllPayrolls: async () => {
    try {
      const result = await axiosInstance.get('/payrolls');
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getPayrollHistory: async (params) => {
    try {
      const result = await axiosInstance.get('/employee/payrolls', {
        params,
      });
      
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  updatePayrollStatus: async (payrollId, paidStatus) => {
    try {
      const result = await axiosInstance.put(`/payrolls/${payrollId}`, { paid_status: paidStatus }, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success('Updated payroll status successfully');
      return result.data;
    } catch (error) {
      toast.error('Failed to update payroll status');
      throw new Error(error);
    }
  },

  createRequestLoan: async (requestLoanData) => {
    try {
      const result = await axiosInstance.post('/employee/request_loans', requestLoanData);
      toast.success('Request loan created successfully');
      return result.data;
    } catch (error) {
      toast.error('Failed to create request loan');
      throw new Error(error);
    }
  },

  getAllRequestLoans: async (params) => {
    try {
      const result = await axiosInstance.get('/employee/request_loans', {
        params,
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getRequestLoanById: async (id) => {
    try {
      const result = await axiosInstance.get(`/employee/request_loans/${id}`);
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  updateRequestLoanById: async (id, requestLoanData) => {
    try {
      const result = await axiosInstance.put(`/employee/request_loans/${id}`, requestLoanData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success('Request loan updated successfully');
      return result.data;
    } catch (error) {
      toast.error('Failed to update request loan');
      throw new Error(error);
    }
  },

  deleteRequestLoanById: async (id) => {
    try {
      const result = await axiosInstance.delete(`/employee/request_loans/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success('Request loan deleted successfully');
      return result.data;
    } catch (error) {
      toast.error('Failed to delete request loan');
      throw new Error(error);
    }
  }
};
