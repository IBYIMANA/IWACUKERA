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
      <h1 className='text-3xl font-extrabold text-center mb-10'>CONTACT US</h1>
      <div className='flex justify-center items-center gap-20'>
        <img src='../public/imigongo1.jpg' alt='Imigongo' className='w-1/2 rounded-lg shadow-md' />
        <div className='w-1/2'>
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label htmlFor='name' className='block text-gray-700 text-2xl mb-1'>Names:</label>
              <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} className='form-input rounded-lg h-12 w-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Name' required />
            </div>
            <div className='mb-6'>
              <label htmlFor='email' className='block text-gray-700 text-2xl mb-1'>Email:</label>
              <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} className='form-input rounded-lg h-12 w-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Email' required />
            </div>
            <div className='mb-6'>
              <label htmlFor='subject' className='block text-gray-700 text-2xl mb-1'>Subject:</label>
              <input type='text' id='subject' name='subject' value={formData.subject} onChange={handleChange} className='form-input rounded-lg h-12 w-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Subject' required />
            </div>
            <div className='mb-6'>
              <label htmlFor='message' className='block text-gray-700 text-2xl mb-1'>Message:</label>
              <textarea id='message' name='message' value={formData.message} onChange={handleChange} className='form-textarea rounded-lg h-40 w-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Message' required></textarea>
            </div>
            <button type='submit' className='bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
