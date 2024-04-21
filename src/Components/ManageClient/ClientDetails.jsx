import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { ArrowCircleRightIcon, TrashIcon } from '@heroicons/react/solid';
import Header from "../Header/Header";

const ClientDetails = () => {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState("");

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleProjectViewDetailsClick = (projectId) => {
        navigate(`/tasks/project-details/${projectId}`);
    };

    const handleTasksViewDetailsClick = (taskId) => {
        navigate(`/tasks/task-details/${taskId}`);
    };

    const renderContent = () => {
        switch (selectedMenu) {
            default:
                return <div>
                    <div className="bg-white shadow-md rounded-lg mb-4">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-700">Personal Information</h2>
                    </div>
                    <div className="px-4 py-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" name="firstName" type="text" placeholder="First Name"/>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" name="lastName" type="text" placeholder="Last Name"/>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email"/>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Username"/>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                Status
                                </label>
                                <div className="relative">
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status">
                                    <option>Active</option>
                                    <option>Banned</option>
                                </select>
                                </div>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                                Contact Number
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" name="contactNumber" type="number" placeholder="Contact Number"/>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                                Gender
                                </label>
                                <div className="relative">
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                </div>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                                    Country
                                </label>
                                <div className="relative">
                                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country">
                                        <option value="">Select Country</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4 md:col-span-1">
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address1">
                                Address 1
                                </label>
                                <textarea name="address1" id="address1" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder=" Address 1"></textarea>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address2">
                                Address 2
                                </label>
                                <textarea name="address2" id="address2" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder=" Address 2"></textarea>
                            </div>
                            <div className="mb-4 md:col-span-1">
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                                City
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" name="city" type="city" placeholder="City"/>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                                State/Province
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="state" name="state" type="state" placeholder="State/Province"/>
                            </div>
                            <div className="mb-4 md:col-span-1">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalCode">
                                Zip Code / Postal Code
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="postalCode" name="postalCode" type="postalCode" placeholder="ZIP/Postal Code"/>
                            </div>
                        </div>
                        <div className="flex justify-end bg-gray-200 px-4 py-3">
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none mr-2">Reset</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Save</button>
                        </div>
                    </div>
                </div>
                </div>;
            case "personalInfo":
                return <div>
                </div>;
            case "profilePicture":
                return <div>
                <div className="bg-white shadow-md rounded-lg mb-4">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-700">Profile picture</h2>
                    </div>
                    <div className="px-4 py-2">
                        <div className="mb-4 md:col-span-2 lg:col-span-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile_picture">
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profile_picture" type="file" />
                        </div>
                    </div>
                </div>
                </div>;
            case "projects":
                return <div>
                    <div className="bg-white shadow-md rounded-lg mb-4">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-700">Projects</h2>
                        </div>
                        <div className="overflow-x-auto mb-4">
                        <div className='p-5'>
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
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projects</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teams</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                                        <th className="relative px-6 py-3">
                                        <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr className="group hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex justify-between">
                                                <div className="flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <button className="p-1 ml-10 text-blue-600 hover:text-blue-800 focus:outline-none" onClick={() => handleProjectViewDetailsClick()}>
                                                        <ArrowCircleRightIcon className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
                                    Showing 1 to of 3 records
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
                    </div>
                </div>;
            case "tasks":
                return <div>
                    <div className="bg-white shadow-md rounded-lg mb-4">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-700">Tasks</h2>
                        </div>
                        <div className="overflow-x-auto mb-4">
                        <div className='p-5'>
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
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projects</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teams</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th> 
                                        <th className="relative px-6 py-3">
                                        <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr className="group hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex justify-between">
                                                <div className="flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <button className="p-1 ml-10 text-blue-600 hover:text-blue-800 focus:outline-none" onClick={() => handleTasksViewDetailsClick()}>
                                                        <ArrowCircleRightIcon className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
                                    Showing 1 to of 3 records
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
                    </div>
                </div>;
            case "invoices":
                return <div>
                    <div className="bg-white shadow-md rounded-lg mb-4">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-700">Invoices</h2>
                        </div>
                        <div className="overflow-x-auto mb-4">
                        <div className='p-5'>
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
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"># </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill for</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> 
                                        <th className="relative px-6 py-3">
                                        <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr className="group hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
                                    Showing 1 to of 3 records
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
                    </div>
                </div>;
            case "changePassword":
                return <div>
                    <div className="bg-white shadow-md rounded-lg mb-4">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-700">Change Password</h2>
                        </div>
                        <div className="px-4 py-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4 md:col-span-1">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Current Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4 md:col-span-1">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    New Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Password"/>
                                </div>
                                <div className="mb-4 md:col-span-1">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Confirm New Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Password"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end bg-white-200 px-4 py-3">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Change Password</button>
                        </div>
                    </div>
                </div>;
        }
    };

    return(
        <div>
            <Header/>
            <div className="w-full mx-auto p-10 bg-white-50">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-1/4">
                        {/* Sidebar with menu */}
                        <div className="bg-white p-4 rounded shadow">
                            <div className="flex items-center mb-6">
                                <img
                                    className="h-16 w-16 rounded-full mr-4"
                                    src=".jpg"
                                    alt="Profile"
                                />
                                <div>
                                    <p className="text-gray-900 font-semibold">coba saja</p>
                                    <p className="text-gray-600 text-sm">interior</p>
                                </div>
                            </div>
                            <nav className="flex flex-col text-gray-800">
                                <a href="#" className="py-2 px-2 hover:bg-gray-100 rounded">Email</a>
                                <a href="#" className="py-2 px-2 hover:bg-gray-100 rounded">Contact Number</a>
                                <a href="#" className="py-2 px-2 hover:bg-gray-100 rounded" onClick={() => handleMenuClick("default")}>Personal Information</a>
                                <a href="#" className="py-2 px-2 hover:bg-gray-100 rounded" onClick={() => handleMenuClick("profilePicture")}>Profile Picture</a>
                                <a href="#" className="py-2 px-2 hover:bg-gray-100 rounded" onClick={() => handleMenuClick("projects")}>Projects</a>
                                <a href="#" className="py-2 px-2 hover:bg-gray-100 rounded" onClick={() => handleMenuClick("tasks")}>Tasks</a>
                                <a href="#" className="py-2 px-2 hover:bg-gray-100 rounded" onClick={() => handleMenuClick("invoices")}>Invoices</a>
                                <a href="#" className="py-2 px-2 hover:bg-gray-100 rounded" onClick={() => handleMenuClick("changePassword")}>Change Password</a>
                            </nav>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4">
                        <div className="bg-white p-6 rounded shadow">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientDetails;
