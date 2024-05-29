import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMedia = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [owner, setOwner] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://iwacu-kera-backend-1.onrender.com/api/media/create', {
        title,
        link,
        description,
        type,
        owner
      });
      console.log('Media added successfully:', response.data);
      setTitle('');
      setLink('');
      setDescription('');
      setType('');
      setOwner('');
      setAlertMessage('Media added successfully');
      navigate('/media');
    } catch (error) {
      console.error('Error adding media:', error);
      let errorMessage = 'Error adding media. Please try again.';
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = `Error adding media: ${error.response.data.message}`;
      } else if (error.message) {
        errorMessage = `Error adding media: ${error.message}`;
      }
      setAlertMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-auto p-8 mt-10 ml-20 bg-gray-100 rounded-lg shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">Add Media</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block mb-2 font-semibold text-gray-700">Link</label>
          <input
            type="text"
            id="link"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter link"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-semibold text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2 font-semibold text-gray-700">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="owner" className="block mb-2 font-semibold text-gray-700">Owner</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter owner"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add New'}
        </button>
        {alertMessage && (
          <div className={`mt-4 p-2 rounded-lg ${alertMessage.includes('successfully') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {alertMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddMedia;
