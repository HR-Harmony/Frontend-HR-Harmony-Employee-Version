import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIRecruitment } from '@/Apis/APIRecruitment';
import { FiClock, FiBriefcase, FiCalendar, FiUser, FiEye } from 'react-icons/fi';
import { toast } from 'react-toastify';

const JobDetails = () => {
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await APIRecruitment.getJobById(id);
                setJobDetails(response.new_job || {});
            } catch (error) {
                toast.error("Failed to fetch job details.");
            }
        };

        fetchJobDetails();
    }, [id]);

    if (!jobDetails) return <div>Loading...</div>;

    return(
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-20">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Job Details</h2>
                <div className="flex items-center mb-4">
                    <FiBriefcase className="mr-2 w-6 h-6" />
                    <span>Job Type: {jobDetails.job_type}</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiBriefcase className="mr-2 w-6 h-6" />
                    <span>Designation: {jobDetails.designation_name}</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiClock className="mr-2 w-6 h-6" />
                    <span>Experience: {jobDetails.minimum_experience}</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiBriefcase className="mr-2 w-6 h-6" />
                    <span>Positions: {jobDetails.number_of_position}</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiCalendar className="mr-2 w-6 h-6" />
                    <span>Closing Date: {jobDetails.date_closing}</span>
                </div>
                <div className="flex items-center mb-4">
                    <FiUser className="mr-2 w-6 h-6" />
                    <span>Gender: {jobDetails.gender}</span>
                </div>
                <div className="flex items-center">
                    <FiEye className="mr-2 w-6 h-6" />
                    <span>Status: {jobDetails.is_publish ? 'Published' : 'Unpublished'}</span>
                </div>
            </div>
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-4 lg:mt-0 mr-auto">
                <h2 className="text-xl font-semibold mb-4">Overview and Job Description</h2>
                <p>{jobDetails.short_description}</p>
                <p className="mt-4">{jobDetails.long_description}</p>
            </div>
        </div>
    );
};

export default JobDetails;

