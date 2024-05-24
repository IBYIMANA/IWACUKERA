import React, { useState } from 'react';
import axios from 'axios';

function AddProverb() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [origin, setOrigin] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://iwacu-kera-backend-1.onrender.com/api/pro/create', {
        title,
        content,
        origin
      });
      console.log('Proverb added successfully:', response.data);
      // Clear the form
      setTitle('');
      setContent('');
      setOrigin('');
    } catch (error) {
      console.error('Error adding proverb:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg w-auto ml-20 mt-20 shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Add Proverb</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2 font-semibold text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
            placeholder="Enter content"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="origin" className="block mb-2 font-semibold text-gray-700">Origin</label>
          <input
            type="text"
            id="origin"
            name="origin"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
            placeholder="Enter origin"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add New
        </button>
      </form>
    </div>
  );
}

export default AddProverb;
