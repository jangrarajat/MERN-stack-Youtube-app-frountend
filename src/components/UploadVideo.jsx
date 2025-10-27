import axios from 'axios';
import { X, ArrowUpFromLine, ImagePlus, TriangleAlert, Cross } from 'lucide-react'
import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import SmallLoader from './SmallLoader';

function UploadVideo({uploadVideoDiv,setUploadVideoDiv}) {

    const [imageFile, setImageFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [previewThumbnailLaoder, setpreviewThumbnailLaoder] = useState(false)



    function uloadVideo(e) {
        const file = e.target.files[0]
        if (file && file.type.startsWith('video/')) {
            setVideoFile(file);
            setVideoPreview(URL.createObjectURL(file));

        }

    }

    const handleImageSelect = async (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImageFile(file);
        }
        const data = new FormData()
        data.append('thumbnail', file)
        console.log(data)

        try {
            setpreviewThumbnailLaoder(true)
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/video/preview/image`, data)
            console.log("preview Image success", res.data)
            setImagePreview(res.data.url)
            setpreviewThumbnailLaoder(false)
        } catch (error) {
            setpreviewThumbnailLaoder(false)
            console.log("preview Image failes", error)
        }
    };



    return (
        <>
            {/* video upload section  */}
            {videoFile === null ? (<>
                <div className=' w-full h-[85%]  top-14 md:w-[90%] md:h-[80%]  bg-gray-900  md:left-[5%] md:top-[10%] z-50 fixed md:rounded-[30px]'>
                    <div className='w-full rounded-t-[30px] h-14 flex  justify-between items-center px-8'>
                        <h3 className='text-xl font-bold'>Upload videos</h3> <span className='hover:bg-gray-950 rounded-full p-1 ' onClick={()=>setUploadVideoDiv(pre=>!pre)}><X /></span>
                    </div>
                    <div className='w-full h-[1px] bg-gray-600'></div>
                    <div className='w-full h-[70%]  flex flex-col items-center justify-center gap-3'>
                        <label htmlFor="video" className=' hover:cursor-pointer h-40 w-40 bg-gray-950 rounded-full flex justify-center items-center'>
                            <ArrowUpFromLine size={100} strokeWidth={3} />
                        </label>
                        <h2 className='font-sans'>Drag and drop video files to upload</h2>
                        <input type="file" id='video' accept='video/*' name='file' className=' hidden' onChange={uloadVideo} />
                        <label htmlFor="video" className=' hover:cursor-pointer w-36 h-10 bg-white rounded-full text-gray-950 flex justify-center items-center   font-sans'>Select Files</label>
                    </div>
                </div>
            </>) : (<>
                {/* dietiels upload section  */}
                <div className=' w-full h-[85%]   top-14 md:w-[90%] md:h-[80%] bg-gray-900  md:left-[5%] md:top-[10%] z-50 fixed md:rounded-[30px]'>
                    <div className='w-full rounded-t-[30px]  h-14 flex  justify-between items-center px-8'>
                        <h3 className='text-xl font-bold'>Details</h3> <span className='hover:bg-gray-950 rounded-full p-1' onClick={()=>setUploadVideoDiv(pre=>!pre)}><X /></span>
                    </div>
                    <div className='w-full h-[1px] bg-gray-600'></div>

                    <div className=' myDiv w-[90%] h-[83%] md:h-[80%]  mx-auto flex flex-col-reverse md:flex-row'>
                        <div className='  h-fit md:h-full w-full md:w-[70%] md:myDiv '>
                            <div className='mt-20 md:mt-0 w-full h-10 px-5  flex items-center'> <h2 className=' text-2xl'>Details </h2></div>
                            <div className='w-[90%] mx-auto h-16 border mb-10 border-gray-400 rounded-lg hover:border-gray-100 '>
                                <div className='w-full h-[25 %] px-5'><h3 className='text-sm text-gray-300 pt-1'> Title (required)</h3></div>
                                <input type="text" name="" id="" placeholder='Title ' className='bg-transparent px-4 h-[75%] w-full pb-1' />
                            </div>
                            <div className='w-[90%] mx-auto h-16 border mb-10 border-gray-400 rounded-lg hover:border-gray-100 '>
                                <div className='w-full h-[25 %] px-5'><h3 className='text-sm text-gray-300 pt-1'> Description</h3></div>
                                <input type="text" name="" id="" placeholder='Tell viewers about your video ' className=' resize-vertical bg-transparent px-4  pb-1 h-[75%] w-full' />
                            </div>
                            <div className='w-[90%]  mx-auto md:h-36 min-h-48 h-fit   mb-24  '>
                                <div className='w-full h-[25%] flex flex-col mb-2  justify-center  '>
                                    <h3 className='text-[15px] font-semibold text-gray-300 pt-1'>Thumbnail</h3>
                                    <p className='text-sm text-gray-400'>Set a thumbnail that stands out and draws viewers' attention. </p>
                                </div>

                                <div className='w-full h-[100%]   flex flex-col md:flex-col gap-5'>
                                    <input type="file" className=' hidden' id='image' onChange={handleImageSelect} />
                                    <label htmlFor="image" className=' cursor-pointer h-28 w-full md:h-full md:w-[30%] border border-dashed flex flex-col justify-center items-center  rounded-lg'>

                                        {previewThumbnailLaoder ? (<>
                                            <SmallLoader />
                                        </>) : (<>
                                            <ImagePlus />
                                            <p className='text-sm font-light text-gray-400'>Upload file</p>

                                        </>)}

                                    </label>
                                    {!imagePreview === null ? (<></>) : (<>
                                        <div className='mx-auto cursor-pointer max-h-full max-w-[100%]  flex flex-col justify-center items-center  rounded-lg'>
                                              <div className=' relative left-36 top-7  hover:bg-red-500 rounded-full'> <X /></div>
                                            <img src={imagePreview} alt="imagePreview" className='h-full w-full rounded-lg  object-cover' />

                                        </div>
                                    </>)}
                                </div>

                            </div>




                        </div>


                        <div className='h-full w-full md:w-[30%] '>
                            <div className='w-full h-56  md:h-48    rounded-md'>
                                {videoPreview === null ? (<>
                                    <div className='h-full w-full flex justify-center items-center gap-2 '>
                                        <span><TriangleAlert /></span>    <span>video not fount</span>
                                    </div>
                                </>) : (<>
                                    <div className='h-full  w-full flex justify-center items-center gap-2 mt-12 m'>
                                        <video
                                            src={videoPreview}
                                            controls
                                            className="w-full h-72 md:h-48 object-cover rounded-lg mt-8"
                                        />
                                    </div>
                                </>)}

                            </div>
                        </div>
                    </div>
                    <div className=' hidden md:flex w-full h-[1px] bg-gray-600'></div>
                    <div className=' hidden w-full  h-[10%]  rounded-b-[30px] md:flex flex-row justify-between items-center px-5'>
                        <ArrowUpFromLine size={18} strokeWidth={3} />

                    </div>
                </div>
            </>)
            }
        </>
    )
}

export default UploadVideo
