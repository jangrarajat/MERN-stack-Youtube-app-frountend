import React from 'react'

function PageLoader() {
    return (
     <>
        <div className='h-fit w-full  pb-2 ' >
            <div className='h-60 w-full    '>
                <img className='w-full h-full bg-gray-600 animate-pulse '  />
            </div>
            <div className='w-full h-fit min-h-20  flex  md:rounded-lg  '>
                <div className=' h-full w-[10%] flex justify-center items-center  pt-5 md:pt-2'>
                    <div className=' w-8 h-8 md:w-10 md:h-10 rounded-full   overflow-hidden bg-gray-600 animate-pulse' >

                    </div>
                </div>
                <div className='w-[82%] h-full '>
                    <div className='w-full h-[60%] max-h-12    overflow-hidden'>
                        <h2 className=''></h2>
                    </div>
                    <div className='w-full h-[40%] text-gray-400 flex flex-row mt-3 gap-1 md:flex-col'>
                        <p className='text-sm bg-gray-600 animate-pulse text-gray-600'>........................................................................................................................</p>
                         
                    </div>
                      <div className='w-full h-[40%] text-gray-400 flex flex-row mt-1 gap-1 md:flex-col'>
                        <p className='text-sm bg-gray-600 animate-pulse text-gray-600'>........................................................................................................................</p>
                         
                    </div>
                        
                </div>
                <div className='w-[8%] h-full mt-5 flex justify-center'>
                    <div className=' hidden md:flex hover:bg-gray-700  h-full p-1 rounded-full'>
                        <p className='flex  text-sm text-gray-600 bg-gray-600 animate-pulse'><span>................</span> <span>...............</span></p>

                    </div>

                </div>
            </div>
        </div>
           <div className='h-fit w-full  pb-2 ' >
            <div className='h-60 w-full    '>
                <img className='w-full h-full bg-gray-600 animate-pulse '  />
            </div>
            <div className='w-full h-fit min-h-20  flex  md:rounded-lg  '>
                <div className=' h-full w-[10%] flex justify-center items-center  pt-5 md:pt-2'>
                    <div className=' w-8 h-8 md:w-10 md:h-10 rounded-full   overflow-hidden bg-gray-600 animate-pulse' >

                    </div>
                </div>
                <div className='w-[82%] h-full '>
                    <div className='w-full h-[60%] max-h-12    overflow-hidden'>
                        <h2 className=''></h2>
                    </div>
                    <div className='w-full h-[40%] text-gray-400 flex flex-row mt-3 gap-1 md:flex-col'>
                        <p className='text-sm bg-gray-600 animate-pulse text-gray-600'>........................................................................................................................</p>
                         
                    </div>
                      <div className='w-full h-[40%] text-gray-400 flex flex-row mt-1 gap-1 md:flex-col'>
                        <p className='text-sm bg-gray-600 animate-pulse text-gray-600'>........................................................................................................................</p>
                         
                    </div>
                        
                </div>
                <div className='w-[8%] h-full mt-5 flex justify-center'>
                    <div className=' hidden md:flex hover:bg-gray-700  h-full p-1 rounded-full'>
                        <p className='flex  text-sm text-gray-600 bg-gray-600 animate-pulse'><span>................</span> <span>...............</span></p>

                    </div>

                </div>
            </div>
        </div>
     </>

    )
}

export default PageLoader
