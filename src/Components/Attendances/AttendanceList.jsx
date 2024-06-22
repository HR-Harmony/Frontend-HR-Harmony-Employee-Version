import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { APIAttendance } from '@/Apis/APIAttendance';
import Pagination from '../Pagination/Pagination';
import { getPaginatedData } from '../Pagination/Pagination';

const AttendanceList = () => {
  const [attendances, setAttendances] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [total_count, setTotalCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [per_page, setPerPage] = useState(10);

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(total_count / per_page)) {
      setCurrentPage(page);
    }
  };

  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  const paginatedAttendanceData = getPaginatedData(attendances, currentPage, per_page);
  
  const fetchAttendances = async () => {
    try {
      const params = { page: currentPage, per_page: per_page, search: searchQuery };
      const response = await APIAttendance.getAllAttendances(params);
      setAttendances(response.attendance || []);
      setTotalCount(response.pagination.total_count || 0);
      setCurrentPage(response.pagination.page || 1);
      setPerPage(response.pagination.per_page || 10);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchAttendances();
  }, [currentPage, per_page, searchQuery]);

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
                <select value={per_page} onChange={(e) => handlePerPageChange(Number(e.target.value))}>
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
                  ) : paginatedAttendanceData.length > 0 ? (
                    paginatedAttendanceData.map((attendance) => {
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
            <div className="text-gray-500 text-sm my-4 flex justify-between items-center px-3 py-3">
              <span>Showing {((currentPage - 1) * per_page) + 1} to {Math.min(currentPage * per_page, total_count)} of {total_count} records</span>
              <div className="flex justify-end">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(total_count / per_page)}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList;
