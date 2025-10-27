import { User } from 'lucide-react'
import React from 'react'

function Dashbord() {
  return (
 <>
    <div>
      <h1 className=' text-center  font-bold text-2xl' >Dashbord</h1>
       
    </div>
    <div className='w-full h-28 '>
        <div className='h-full w-[90%] hover:bg-gray-800   flex  justify-center items-center m-4 rounded-md font-mono bg-gray-900 '>
        <User size={17}/>    <span className='text-gray-300 ml-1 '>All User  </span>
        </div>
    </div>
 </>
     )
}

export default Dashbord
