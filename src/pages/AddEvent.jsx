import React from 'react'

function AddEvent() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg w-auto ml-20 mt-20 shadow-md">
    <h1 className="text-2xl font-semibold mb-4">Add Events</h1>
    <form>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
        <input
          type="date"
          id="date"
          name="title"
          className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content</label>
        <textarea
          id="content"
          name="content"
          rows="4"
          className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
          placeholder="Enter content"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="file" className="block text-gray-700 font-semibold mb-2">Image</label>
        <input
          type="file"
          id="origin"
          name="origin"
          className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
          placeholder=" Enter description"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
      >
        Add Event
      </button>
    </form>
  </div>
);
}
  

export default AddEvent