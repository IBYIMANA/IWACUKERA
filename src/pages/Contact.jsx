import React from 'react'

const Contact = () => {
  return (
    <div>
    <div className='px-24 py-40 '>
    <h1 className='text-3xl font-extrabold text-center'> CONTACT US</h1>
     <div className='flex gap-20 mt-10' >
      <img src='../public/imigongo1.jpg' className='w-1/2'/>
      <div className='w-full'>
      <form className='mt-1'>
      <label class="block">
     <span class="text-gray-700 text-2xl">Names:</span>
     <input type="text" class="form-control  rounded-2xl h-16 w-full bg-slate-100 mt-1" placeholder="Name"/>
      </label>  
      <label class="block">
     <span class="text-gray-700 text-2xl">Email:</span>
     <input type="text" class=" rounded-2xl h-16 w-full bg-slate-100 mt-1" placeholder="Email"/>
      </label>    
     
      <label class="block">
     <span class="text-gray-700 text-2xl">Subject:</span>
     <input type="text" class="  rounded-2xl h-16 w-full bg-slate-100 mt-1" placeholder="Subject"/>
      </label>
      <label class="block">
     <span class="text-gray-700 text-2xl">Message:</span>
     <textarea name="" class=" rounded-2xl h-40 w-full bg-slate-100 mt-1" id="" placeholder="Message"></textarea>
      </label>
     </form>
     </div>
     </div>
     </div>
    </div>            
   
    
  )
}

export default Contact