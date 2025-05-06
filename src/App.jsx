import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-full h-screen'>
      <div className='flex justify-center items-center   '>
        <div className='flex flex-col border p-4 rounded-lg mt-2'>
          <h1 className='text-4xl uppercase'>TODO list</h1>
           <div className='flex mt-3 space-x-3'>
           <input type="text" className='border rounded-md p-3 ' placeholder='Enter the items'  />
           <input type="date" className='border p-3' />
         
          <button className='border p-3 rounded-md'> ADD</button>
           </div>
           <div className='space-y-2 mt-6 flex justify-between border p-2'>
           <span className='text-3xl'>hello</span>
           <span className='text-3xl btn cursor-pointer border rounded-full px-2 '>X</span>
           </div>
           <div className='space-y-2 mt-6 flex justify-between border p-2'>
           <span className='text-3xl'>hello</span>
           <span className='text-3xl btn cursor-pointer border rounded-full px-2 '>X</span>
           </div>
          
        </div>
      </div>
      </div> 
     
    </>
  )
}

export default App
