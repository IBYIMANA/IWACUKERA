import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className='px-24 py-20'>
      <h1 className='mb-10 text-3xl font-extrabold text-center'>CONTACT US</h1>
      <div className='flex items-center justify-center gap-20'>
        <img src='./imigongo1.jpg' alt='Imigongo' className='w-1/2 rounded-lg shadow-md' />
        <div className='w-1/2'>
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label htmlFor='name' className='block mb-1 text-2xl text-gray-700'>Names:</label>
              <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} className='w-full h-12 rounded-lg form-input bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Name' required />
            </div>
            <div className='mb-6'>
              <label htmlFor='email' className='block mb-1 text-2xl text-gray-700'>Email:</label>
              <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} className='w-full h-12 rounded-lg form-input bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Email' required />
            </div>
            <div className='mb-6'>
              <label htmlFor='subject' className='block mb-1 text-2xl text-gray-700'>Subject:</label>
              <input type='text' id='subject' name='subject' value={formData.subject} onChange={handleChange} className='w-full h-12 rounded-lg form-input bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Subject' required />
            </div>
            <div className='mb-6'>
              <label htmlFor='message' className='block mb-1 text-2xl text-gray-700'>Message:</label>
              <textarea id='message' name='message' value={formData.message} onChange={handleChange} className='w-full h-40 rounded-lg form-textarea bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Message' required></textarea>
            </div>
            <button type='submit' className='px-8 py-3 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
