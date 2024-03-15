import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';

const PayslipHistory = () => {
  const navigate = useNavigate();
  const [visibleDelete, setVisibleDelete] = useState(null);

  const handleViewDetails = (employeeId) => {
    navigate(`/payroll/payroll-view/${employeeId}`);
  };

  const payrollRecords = [
    {
      id: 1,
      employee: 'Fakhrity Hikmawan',
      netPayable: 'IDR5,000,000',
      salaryMonth: 'December, 2024',
      payDate: '2023-01-05'
    },
    {
      id: 2,
      employee: 'Arfara Yema Samgusdian',
      netPayable: 'IDR5,000,000',
      salaryMonth: 'December, 2024',
      payDate: '2023-01-05'
    }
  ];

  return (
    <div className="border border-gray-200 rounded overflow-hidden mx-5 my-5 max-w-5xl">
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">Payslip History</h2>
      </div>
      <div className="p-5">
        <div className="flex justify-between mb-4">
          <label className="flex items-center">
            Show
            <select className="mx-2 rounded border border-gray-300">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            entries
          </label>
          <div className="flex justify-end">
            <input type="search" placeholder="Search" className="rounded border border-gray-300 p-2" />
          </div>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Payable</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pay Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payrollRecords.map((record) => (
                <tr key={record.id}
                    onMouseEnter={() => setVisibleDelete(record.id)}
                    onMouseLeave={() => setVisibleDelete(null)}
                    className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 relative">
                    {record.employee}
                    {visibleDelete === record.id && (
                      <button className="absolute right-0 top-0 bottom-0 mr-4" onClick={() => handleViewDetails(record.id)}>
                        <EyeIcon className="h-5 w-5 text-blue-600 hover:text-blue-800" />
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.netPayable}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.salaryMonth}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.payDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
            Showing 1 to 2 of 2 records
            <div>
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none">
                Previous
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none ml-2">
                Next
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PayslipHistory;
