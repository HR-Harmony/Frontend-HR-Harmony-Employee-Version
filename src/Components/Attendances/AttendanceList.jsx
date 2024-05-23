import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { APIAttendance } from '@/Apis/APIAttendance';

const AttendanceList = () => {
  const [attendances, setAttendances] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchAttendances = async () => {
    setIsLoading(true);
    try {
      const attendancesData = await APIAttendance.getAllAttendances();
      setAttendances(attendancesData.attendance || []);
    } catch (error) {

    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAttendances();
  }, []);

  return (
    <div className="max-w-6xl ml-auto mr-auto">
      <div className="flex flex-wrap">
        <div className="w-full lg:mb-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
              <h5 className="text-lg font-semibold text-gray-700">View Attendance</h5>  
            </div>
            <div className="flex justify-between px-3 mt-3">
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
            <div className="overflow-x-auto mb-4 px-3">
              <table className="min-w-full mt-3 divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Employee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">In Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Out Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Total Work</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {isLoading ? (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-sm text-gray-500">Loading attendances data...</td>
                    </tr>
                  ) : attendances.length > 0 ? (
                    attendances.map((attendance) => {
                      return (
                        <tr key={attendance.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 relative flex justify-between">
                            {attendance.full_name_employee}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{attendance.attendance_date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{attendance.in_time}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{attendance.out_time}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{attendance.total_work || 'Not Found'}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4 text-sm text-gray-500">No attendance data available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="text-gray-500 text-sm my-4 flex justify-between items-center px-3">
                Showing 1 to {attendances.length} of {attendances.length} records
                <div>
                  <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 mb-4 ml-3 rounded focus:outline-none">
                    Previous
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none ml-2">
                    Next
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList;
