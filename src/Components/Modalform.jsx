import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const SurveyModal = ({ isOpen, onRequestClose }) => {
    const courses = [
        "Professional Certificate Program in Product Management",
        "PG Certificate Program in Strategic Product Management",
        "Executive Program in Data Driven Product Management",
        "Executive Program in Product Management and Digital Transformation",
        "Executive Program in Product Management",
        "Advanced Certification in Product Management",
        "Executive Program in Product Management and Project Management"
      ];

  const [formData, setFormData] = useState({
    referral_name: '',
    referal_email: '',
    referal_phone: '',
    referee_name: '',
    refree_email: '',
    id: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    console.log(JSON.stringify(formData));
      if (response.ok) {
        alert('Survey submitted successfully!');
        onRequestClose();
      } else {
        alert('Failed to submit survey');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit survey');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-start ml-56 p-4 z-30"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-lg space-y-4 z-40">
        <h2 className="text-xl font-semibold mb-4">Referral Survey</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='z-40'>
            <label className="block text-sm font-medium text-gray-700">Referer Name</label>
            <input
              type="text"
              name="referee_name"
              onChange={handleChange}
              value={formData.referee_name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className='z-40'>
            <label className="block text-sm font-medium text-gray-700">Referer Email</label>
            <input
              type="email"
              name="refree_email"
              value={formData.refree_email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className='z-40'>
            <label className="block text-sm font-medium text-gray-700">Referee Name</label>
            <input
              type="text"
              name="referral_name"
              value={formData.referral_name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Referee Email</label>
            <input
              type="email"
              name="referal_email"
              value={formData.referal_email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Referee Mobile No</label>
            <input
              type="number"
              name="referal_phone"
              value={formData.referal_phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Name</label>
            <div className="space-y-2">
              {courses.map((course,key) => (
                <div key={course} className="flex items-center">
                  <input
                    type="radio"
                    name="id"
                    value={key}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <label className="ml-3 block text-sm font-medium text-gray-700">
                    {course}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onRequestClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SurveyModal;
