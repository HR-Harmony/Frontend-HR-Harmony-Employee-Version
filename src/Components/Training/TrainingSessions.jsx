import React, { useState, useEffect, Fragment } from 'react';
import ReactQuill from 'react-quill';
import { PencilAltIcon, ArrowCircleRightIcon, TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { APITraining } from '@/Apis/APITraining';
import { APIEmployees } from '@/Apis/APIEmployees';

const TrainingSessions = () => {

    const navigate = useNavigate();
    const [showAddForm, setShowAddForm] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [trainings, setTrainings] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [trainingSkills, setTrainingSkills] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [selectedSkill, setSelectedSkill] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [trainingCost, setTrainingCost] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [selectedTrainingId, setSelectedTrainingId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [editingTraining, setEditingTraining] = useState(null);

    const fetchTrainings = async () => {
      setIsLoading(true);
      try {
        const response = await APITraining.viewAllTrainings();
        setTrainings(response.data);
      } catch (error) {

      }
      setIsLoading(false);
    };

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const trainersData = await APITraining.viewAllTrainers();
        setTrainers(trainersData.data);

        const trainingSkillsData = await APITraining.viewAllTrainingSkills();
        setTrainingSkills(trainingSkillsData.data);

        const employeesData = await APIEmployees.getAllEmployees();
        setEmployees(employeesData.employees);
      } catch (error) {

      }
      setIsLoading(false);
    };

    useEffect(() => {
      fetchTrainings();
      fetchData();
    }, []);

    const handleEditClick = (training) => {
        setEditingTraining(training);
        setIsEditModalOpen(true);
    };

    const handleAddNewClick = () => {
        setShowAddForm(true);
    };

    const handleReset = () => {
        setShowAddForm(false);
        setSelectedTrainer('');
        setSelectedSkill('');
        setSelectedEmployee('');
        setTrainingCost('');
        setStartDate('');
        setEndDate('');
        setStatus('');
        setDescription('');
    };
    
    const handleViewDetailsClick = (id) => {
        navigate(`/training/training-details/${id}`);
    };

    const handleSave = async () => {
      setIsLoading(true);
      const trainingData = {
        trainer_id: parseInt(selectedTrainer, 10),
        training_skill_id: parseInt(selectedSkill, 10),
        employee_id: parseInt(selectedEmployee, 10),
        training_cost: parseInt(trainingCost, 10),
        start_date: startDate,
        end_date: endDate,
        description: description
      };

      try {
        const response = await APITraining.createTraining(trainingData);
        handleReset();
      } catch (error) {

    }
      setIsLoading(false);
      fetchTrainings();
    };

    const handleDeleteClick = (id) => {
        setSelectedTrainingId(id);
        setShowDeleteConfirmation(true);
    };

    const handleConfirmDelete = async () => {
        setIsLoading(true);
        try {
            await APITraining.deleteTrainingById(selectedTrainingId);
            fetchTrainings();
            setShowDeleteConfirmation(false);
        } catch (error) {

        }
        setIsLoading(false);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        if (editingTraining) {
            const updatedTrainingData = {
                ...editingTraining,
                trainer_id: parseInt(editingTraining.trainer_id, 10),
                training_skill_id: parseInt(editingTraining.training_skill_id, 10),
                employee_id: parseInt(editingTraining.employee_id, 10),
                training_cost: parseInt(editingTraining.training_cost, 10)
            };

            try {
                const response = await APITraining.updateTrainingById(editingTraining.id, updatedTrainingData);
                setIsEditModalOpen(false);
                fetchTrainings();
            } catch (error) {

            }
        } else {

        }
    };

    return (
        <div className="border border-gray-200 rounded overflow-hidden mb-4 max-w-6xl ml-auto mr-auto">
            <div className="flex justify-between items-center p-5 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">List All Training Sessions</h2>
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Training Skill</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trainer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Training Cost</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {isLoading ? (
                        <tr>
                          <td colSpan="8" className="text-center py-4 text-sm text-gray-500">Loading training data...</td>
                        </tr>
                      ) : trainings.length === 0 ? (
                        <tr>
                          <td colSpan="8" className="text-center py-4 text-sm text-gray-500">No training data available.</td>
                        </tr>
                      ) : (
                        trainings.map((training) => (
                            <tr key={training.id} className="group hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <div className="flex justify-between">
                                        <div>{training.training_skill}</div>
                                        <div className="flex-shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="p-1 ml-10 text-blue-600 hover:text-blue-800 focus:outline-none" onClick={() => handleViewDetailsClick(training.id)}>
                                                <ArrowCircleRightIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{training.full_name_trainer}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(training.start_date).toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(training.end_date).toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{training.full_name_employee}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{training.training_cost}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        training.status === 'Not Started' ? 'bg-red-100 text-red-800' :
                                        training.status === 'Started' ? 'bg-green-100 text-green-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>
                                        {training.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                            </tr>
                        ))
                      )}
                    </tbody>
                </table>
            </div>
            <div className="text-gray-500 text-sm my-4 flex justify-between items-center">
                Showing {trainings.length} to of {trainings.length} records
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
  )
}

export default TrainingSessions