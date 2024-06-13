import { toast } from 'react-toastify';

import axiosInstance from '@/configs/axiosInstance';

export const APIEmployees = {
  createEmployee: async (employeeData) => {
      try {
        const result = await axiosInstance.post('/admin/employees', employeeData);
        toast.success(result.data.message);
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

  getAllEmployees: async () => {
      try {
          const result = await axiosInstance.get('/admin/employees');
          return result.data;
      } catch (error) {
          throw new Error(error);
      }
  },

  deleteEmployee: async (employeeId) => {
    try {
      const result = await axiosInstance.delete(`/admin/employees/${employeeId}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Employee deleted successfully");
      return result.data;
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Terjadi kesalahan jaringan atau server.");
      }
      console.log("Error:", error);
      throw new Error(error);
    }
  },

  createRole: async (roleData) => {
    try {
      const result = await axiosInstance.post('/roles', roleData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(result.data.message);
      return result.data;
    } catch (error) {
      toast.error("Terjadi kesalahan saat menambahkan role.");
      throw new Error(error);
    }
  },

  getRoles: async () => {
    try {
        const result = await axiosInstance.get('/roles');
        return result.data;
    } catch (error) {
        throw new Error(error);
    }
  },

  editRole: async (roleId, roleData) => {
    try {
      const result = await axiosInstance.put(`/roles/${roleId}`, roleData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(result.data.message);
      return result.data;
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengedit role.");
      throw new Error(error);
    }
  },

  deleteRole: async (roleId) => {
    try {
      const result = await axiosInstance.delete(`/roles/${roleId}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success(result.data.message);
      return result.data;
    } catch (error) {
      toast.error("Terjadi kesalahan saat menghapus role.");
      throw new Error(error);
    }
  },

  createOfficeShift: async (newShift) => {
    try {
      const response = await axiosInstance.post('/shifts', newShift, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getOfficeShifts: async () => {
    try {
        const result = await axiosInstance.get('/shifts');
        return result.data;
    } catch (error) {
        throw new Error(error);
    }
  },
  
  updateOfficeShift: async (shiftId, updatedShift) => {
    try {
      const response = await axiosInstance.put(`/shifts/${shiftId}`, updatedShift, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return await response.data;
    } catch (error) {
      console.error("Error updating shift:", error);
      throw new Error(error);
    }
  },

  deleteOfficeShift: async (shiftId) => {
    try {
      const result = await axiosInstance.delete(`/shifts/${shiftId}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Shift deleted successfully");
      return result.data;
    } catch (error) {
      toast.error("Terjadi kesalahan saat menghapus shift.");
      throw new Error(error);
    }
  },

  createExitType: async (exitData) => {
    try {
      const result = await axiosInstance.post('/exits', exitData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Exit status created successfully");
      return result.data;
    } catch (error) {
      toast.error("Terjadi kesalahan saat menambahkan exit type.");
      throw new Error(error);
    }
  },
  
  getAllExitTypes: async () => {
    try {
      const result = await axiosInstance.get('/exits');
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  
  updateExitType: async (id, exitData) => {
    try {
      const result = await axiosInstance.put(`/exits/${id}`, exitData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Exit status updated successfully");
      return result.data;
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengedit exit type.");
      throw new Error(error);
    }
  },
  
  deleteExitType: async (id) => {
    try {
      const result = await axiosInstance.delete(`/exits/${id}`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Exit status deleted successfully");
      return result.data;
    } catch (error) {
      toast.error("Terjadi kesalahan saat menghapus exit type.");
      throw new Error(error);
    }
  },

  createEmployeeExit: async (exitEmployeesId, exitData) => {
    try {
      const result = await axiosInstance.post(`/admin/employees/${exitEmployeesId}/exit`, exitData, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      toast.success("Employee exit processed successfully");
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

  getAllEmployeeExits: async () => {
    try {
      const result = await axiosInstance.get('/admin/employees/exit');
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getEmployeeExitById: async (exitEmployeeId) => {
    try {
      const result = await axiosInstance.get(`/admin/employees/${exitEmployeeId}/exit`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteExitById: async (exitEmployeeId) => {
    try {
      const result = await axiosInstance.delete(`/admin/employees/${exitEmployeeId}/exit`, {
        headers: {
          'Authorization': `Bearer YOUR_TOKEN_HERE`
        }
      });
      return result.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};