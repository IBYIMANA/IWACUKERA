import React from 'react'

function AddEvent() {
  return (
    <div className="w-auto p-8 mt-20 ml-20 bg-gray-100 rounded-lg shadow-md">
    <h1 className="mb-4 text-2xl font-semibold">Add Events</h1>
    <form>
      <div className="mb-4">
        <label htmlFor="date" className="block mb-2 font-semibold text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          name="title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-2 font-semibold text-gray-700">Content</label>
        <textarea
          id="content"
          name="content"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder="Enter content"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="file" className="block mb-2 font-semibold text-gray-700">Image</label>
        <input
          type="file"
          id="origin"
          name="origin"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          placeholder=" Enter description"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Add New
      </button>
    </form>
  </div>
);
}
  

export default AddEvent