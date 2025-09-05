import React from 'react'
import { Bell, Menu, Plus, Search } from 'lucide-react';


function navbar() {
    return (
        <>
            <div className='h-20  flex justify-between text-white items-center  px-2 md:px-10 fixed w-full'>
                <div className='h-fit w-fit flex flex-row justify-center items-center md:gap-5'>
                    <div className='hover:bg-gray-700 p-2 rounded-full'>
                        <Menu className=' cursor-pointer' />
                    </div>
                    <div className='w-40 h-32'>
                        <img className='h-full w-full' src="https://i.postimg.cc/SQ1y3SMR/generated-image-1.png" alt="logo" />
                    </div>

                </div>

                <div className=' w-[40%]'>
                    <div className=' hidden  md:flex flex-row items-center border-[1px] border-gray-600 rounded-full w-full h-10 justify-evenly'>
                        <input type="text" placeholder='Search' className='bg-transparent h-full pl-5 w-[90%]' />
                        <Search strokeWidth={1} className=' bg-gray-600 h-full p-1 w-[10%] rounded-full rounded-tl-none rounded-bl-none' />
                    </div>

                    <Search strokeWidth={1} className=' md:hidden ' />
                </div>
                <div className='flex gap-4 items-center '>
                    <div className=' cursor-pointer flex flex-row bg-gray-800 rounded-full md:px-7 md:py-3 p-2 items-center'>    <Plus />Create</div>
                    <div className=' cursor-pointer'><Bell /></div>
                    <div className='w-10 h-10 cursor-pointer rounded-full'>
                        <img className=' rounded-full' src="https://yt3.ggpht.com/zBTVB18DcCYE1rRFVPRLUl7RcqT5ERZ1ksXBvN4Nxu3hUGPHhfhbzSjwd22WDbW5UEBIgGERuA=s88-c-k-c0x00ffffff-no-rj" alt="avatar" />
                    </div>


                </div>
            </div>
        </>
    )
}

export default navbar
