import React from 'react';

const AttendanceList = () => {
  const attendanceData = [
    {
      id: 1,
      employee: 'Arfara Yema Samgusdian',
      email: 'arfarayemasamgsudian@gmail.com',
      date: '2024-03-14',
      status: 'Present',
      clockIn: '03:15 AM',
      clockOut: '00:00',
      late: '00:00',
      earlyLeaving: '00:00',
      totalWork: '00:00'
    },
    {
      id: 2,
      employee: 'Arfara Yema Samgusdian',
      email: 'arfarayemasamgsudian@gmail.com',
      date: '2024-03-15',
      status: 'Present',
      clockIn: '03:15 AM',
      clockOut: '00:00',
      late: '00:00',
      earlyLeaving: '00:00',
      totalWork: '00:00'
    },
    {
      id: 3,
      employee: 'Arfara Yema Samgusdian',
      email: 'arfarayemasamgsudian@gmail.com',
      date: '2024-03-16',
      status: 'Present',
      clockIn: '03:15 AM',
      clockOut: '00:00',
      late: '00:00',
      earlyLeaving: '00:00',
      totalWork: '00:00'
    },
  ];

  return (
    <div className="border border-gray-200 rounded overflow-hidden max-w-6xl ml-auto mr-auto">
      <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">My Daily Attendance Report</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">In Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Out Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Late</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Early Leaving</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Work</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceData.map((data) => (
                <tr key={data.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span>{data.employee}</span>
                    <span className="text-xs text-gray-500 block">{data.email}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.clockIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.clockOut}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.late}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.earlyLeaving}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.totalWork}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${data.status === 'Present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {data.status}
                    </span>
                  </td>
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

export default AttendanceList;
