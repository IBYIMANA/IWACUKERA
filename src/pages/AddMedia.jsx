import React from 'react'

const AddMedia = () => {
  return (
    <div className="w-auto p-8 mt-10 ml-20 bg-gray-100 rounded-lg shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">Add Media</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2 font-semibold text-gray-700">link</label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter content"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="origin" className="block mb-2 font-semibold text-gray-700">Description</label>
          <input
            type="text"
            id="origin"
            name="origin"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter origin"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="origin" className="block mb-2 font-semibold text-gray-700">Type</label>
          <input
            type="text"
            id="origin"
            name="origin"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter origin"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="origin" className="block mb-2 font-semibold text-gray-700">Owner</label>
          <input
            type="text"
            id="origin"
            name="origin"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter origin"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add New
        </button>
      </form>
    </div>
  )
}

export default AddMedia