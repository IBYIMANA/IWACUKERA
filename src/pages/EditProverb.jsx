import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditProverb() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [origin, setOrigin] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProverb();
  }, []);

  const fetchProverb = async () => {
    try {
      const response = await axios.get(`https://iwacu-kera-backend-1.onrender.com/api/pro/${id}`);
      const proverb = response.data;
      setTitle(proverb.title);
      setContent(proverb.content);
      setOrigin(proverb.origin);
    } catch (error) {
      console.error('Error fetching proverb:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.update(`https://iwacu-kera-backend-1.onrender.com/api/pro/update//${id}`, {
        title,
        content,
        origin
      });
      setAlertMessage('Proverb updated successfully');
      navigate('/proverb');
    } catch (error) {
      console.error('Error updating proverb:', error);
      setAlertMessage('Error updating proverb. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg w-auto ml-20 mt-20 shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Edit Proverb</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
            placeholder="Enter origin"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Update
        </button>
        {alertMessage && (
          <div className={`mt-4 p-2 rounded-lg ${alertMessage.includes('successfully') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {alertMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default EditProverb;
