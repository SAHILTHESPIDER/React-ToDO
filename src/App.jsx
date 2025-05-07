import { useState } from 'react'
import './App.css'
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { RiCalendarTodoFill } from "react-icons/ri";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-full h-screen bg-blue-300'>
      <div className='flex justify-center items-center   '>
        <div className='flex flex-col border p-4  bg-amber-50 border-white shadow-2xl backdrop-blur-3xl rounded-lg mt-8'>
          <div className='flex flex-row space-x-2'>
          <h1 className='text-4xl uppercase'>TODO list</h1>
          <h1 className='text-4xl'><RiCalendarTodoFill /></h1>
          </div>
          
           <div className='flex mt-3 space-x-3'>
           <input type="text" className='border rounded-md p-3  border-blue-500 px-10  ' placeholder='Things Need To Be Done'  />
           <input type="date" className='border p-3 border-blue-500 rounded-md' />
         
          <button className=' p-3 rounded-md cursor-pointer border text-2xl bg-blue-200 border-blue-200 text-amber-50'><IoIosAddCircle /></button>
           </div>
           <div className='space-y-2 mt-6 flex justify-between border p-2'>
           <span className='text-[1.2rem] font-serif mt-1'>hello</span>
           <div className='flex justify-end-safe space-x-2'>
           <span className='text-[1.2rem] font-serif mt-1 '>22/05/2025</span>
           <span className='text-[1.2rem]  btn cursor-pointer mt-2  px-2  '><FaDeleteLeft /></span>
           </div>
           </div>
         
          
          
        </div>
      </div>
      </div> 
     
    </>
  )
}

export default App
