import React from 'react';
import { FiClock, FiBriefcase, FiCalendar, FiUser, FiEye } from 'react-icons/fi';

const JobDetails = () => {
    return(
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-20">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Job Details</h2>
                <div className="flex items-center mb-4">
                    <FiBriefcase className="mr-2 w-6 h-6" />
                    <span>Job Type: Full Time</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiBriefcase className="mr-2 w-6 h-6" />
                    <span>Designation: --</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiClock className="mr-2 w-6 h-6" />
                    <span>Experience: Fresh</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiBriefcase className="mr-2 w-6 h-6" />
                    <span>Positions: 2</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiCalendar className="mr-2 w-6 h-6" />
                    <span>Closing Date: 31-01-2023</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiUser className="mr-2 w-6 h-6" />
                    <span>Gender: Male</span>
                </div>
                <div className="flex items-center">
                    <FiEye className="mr-2 w-6 h-6" />
                    <span>Status: Published</span>
                </div>
            </div>
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-4 lg:mt-0 mr-auto">
                <h2 className="text-xl font-semibold mb-4">Overview and Job Description</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit libero vel
                    rhoncus dapibus. Quisque pulvinar, nisi non convallis lacinia, dui massa consectetur
                    lectus, eget fringilla turpis justo id velit.
                </p>
                <p className="mt-4">
                    Nunc non vestibulum eros. Fusce tempus eget risus nec elementum. Nulla facilisi.
                    Aenean rhoncus, purus eu consequat convallis, libero felis faucibus nunc, vitae
                    consequat neque leo non lectus.
                </p>
            </div>
        </div>
    );
};

export default JobDetails;
