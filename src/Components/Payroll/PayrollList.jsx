import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { APIEmployees } from '@/Apis/APIEmployees';
import { APIPayroll } from '@/Apis/APIPayroll';
import { toast } from 'react-toastify';

const PayrollList = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('Yanti Sari');
  const [selectedMonth, setSelectedMonth] = useState('2024-03');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPayrollId, setSelectedPayrollId] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [payrolls, setPayrolls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPayrolls = async () => {
    try {
      const payrollsData = await APIPayroll.getAllPayrolls();
      setPayrolls(payrollsData.payroll_info || []);
    } catch (error) {
      toast.error('Error fetching payrolls data');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesData = await APIEmployees.getAllEmployees();
        setEmployees(employeesData.employees || []);
      } catch (error) {
        toast.error('Error fetching employees data');
      }
    };

    fetchEmployees();
    fetchPayrolls();
  }, []);

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const openPaymentModal = (payrollId) => {
    setSelectedPayrollId(payrollId);
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handleConfirmPayment = async () => {
    try {
      await APIPayroll.updatePayrollStatus(selectedPayrollId, { paid_status: true });
      toast.success("Payment successful");
      closePaymentModal();
      fetchPayrolls();
    } catch (error) {
      toast.error("Failed to make payment");
    }
  };

  return (
    <div className="max-w-6xl mx-auto ml-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 shadow-md rounded-md mb-5">
        <div className="flex-grow mr-5 mb-5 md:mb-0">
          <label htmlFor="employee" className="block text-sm text-gray-800 mb-1">Employee</label>
          <select id="employee" value={selectedEmployee} onChange={handleEmployeeChange} className="block w-full px-3 py-1.5 text-base leading-6 text-gray-900 bg-white bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            {employees.map((employee) => (
              <option key={employee.id} value={employee.username}>
                {`${employee.first_name} ${employee.last_name}`}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-grow mr-5 mb-5 md:mb-0">
          <label htmlFor="monthSelect" className="block text-sm text-gray-800 mb-1">Select Month</label>
          <input type="month" id="monthSelect" value={selectedMonth} onChange={handleMonthChange} className="block w-full px-3 py-1.5 text-base leading-6 text-gray-900 bg-white bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
        </div>
        <div>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mt-5">
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="border border-gray-200 rounded overflow-hidden mx-5 my-5">
        <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">Payment Info for {selectedMonth}</h2>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payslip Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basic Salary</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hourly Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-sm text-gray-500">Loading payroll data...</td>
                  </tr>
                ) : payrolls.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-sm text-gray-500">No payroll data available.</td>
                  </tr>
                ) : (
                  payrolls.map((payroll) => {
                    const employee = employees.find(e => e.id === payroll.employee_id);
                    return (
                      <tr key={payroll.payroll_id}
                          className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-between items-center">
                          <div>
                            <span>{employee ? `${employee.full_name_employee}` : 'Not Found'}</span>
                            <span className="text-xs text-gray-500 block">{employee ? employee.email : ''}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payroll.payslip_type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payroll.basic_salary}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payroll.hourly_rate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {payroll.paid_status ? (
                            <span className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs">Paid</span>
                          ) : (
                            <span className="bg-red-200 text-red-700 py-1 px-3 rounded-full text-xs">Unpaid</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => openPaymentModal(payroll.payroll_id)}
                          >
                            Make Payment
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
            Showing 1 to {payrolls.length} of {payrolls.length} records
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
      <Transition appear show={isPaymentModalOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closePaymentModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex justify-between items-start">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Confirm Payment
                  </Dialog.Title>
                  <div className="ml-auto">
                    <button onClick={closePaymentModal} className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to make this payment?
                  </p>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    onClick={handleConfirmPayment}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PayrollList;



