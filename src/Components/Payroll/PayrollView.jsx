import React from 'react';

const PayrollView = () => {
  // Data dummy, ganti dengan data sebenarnya
  const payrollData = {
    employee: 'Fakhrity Hikmawan',
    designation: 'IT Manager',
    dateOfJoining: '2024-12-01',
    payPeriod: '2022-12',
    payDate: '14-12-2022',
    basicSalary: 'IDR10,000,000',
    totalEarnings: 'IDR10,000,000',
    totalDeductions: 'IDR0',
    netPay: 'IDR10,00,000',
    netPayWords: 'One Hundred Thousand',
    comments: '3ERRRR'
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            {/* Replace with actual logo */}
            <svg className="h-10 w-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Employee Pay Summary</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Employee details and pay information.</p>
          </div>
        </div>
        <div className="flex items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">EMPLOYEE NET PAY</h3>
          <p className="ml-4 text-lg text-gray-500">{payrollData.netPay}</p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Employee</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.employee}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Designation</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.designation}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Date of Joining</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.dateOfJoining}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Pay Period</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.payPeriod}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Pay Date</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.payDate}</dd>
          </div>
          <div className="bg-white px-4 py-5 grid grid-cols-2 gap-4 sm:px-6">
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-lg font-medium text-gray-900">EARNING</h3>
              <div className="mt-4">
                <dt className="text-sm font-medium text-gray-500">Basic Salary</dt>
                <dd className="mt-1 text-sm text-gray-900">{payrollData.basicSalary}</dd>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-lg font-medium text-gray-900">DEDUCTIONS</h3>
              {/* ... (isi dengan data potongan jika ada) ... */}
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Earning</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.totalEarnings}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Deduction</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.totalDeductions}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">NET PAY</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.netPay}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">In Words</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.netPayWords}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Payslip Comments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{payrollData.comments}</dd>
          </div>
        </dl>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button type="button" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
          Print
        </button>
        <button type="button" className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PayrollView;
