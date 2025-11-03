import axios from 'axios';
import { X, ArrowUpFromLine, ImagePlus, TriangleAlert, Cross, Upload, MessageSquare } from 'lucide-react'
import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import SmallLoader from './SmallLoader';
import ButtonLoading from './ButtonLoading';
function UploadVideo({ uploadVideoDiv, setUploadVideoDiv }) {

    const [imageFile, setImageFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [previewThumbnailLaoder, setpreviewThumbnailLaoder] = useState(false)
    const [public_id, setPublic_id] = useState('');

    const token = localStorage.getItem("accessToken");

    // progress percent (0-100). null means hidden.

    const [uploading, setUploading] = useState(false);



    function uloadVideo(e) {
        const file = e.target.files[0]

        if (file && file.type.startsWith('video/')) {
            setTitle(file.name)
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


        try {
            setpreviewThumbnailLaoder(true)
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/video/preview/image`, data)

            setImagePreview(res.data.url)
            setPublic_id(res.data.public_id)
            setpreviewThumbnailLaoder(false)
        } catch (error) {
            setpreviewThumbnailLaoder(false)
            console.log("preview Image failes", error)
        }
    };

    const handleDeletePreviewImage = async () => {
        setImagePreview(null)
        if (public_id !== '') {
            try {
                const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/video/delete/preview/image`, { "public_id": public_id })
                console.log(res)
            } catch (error) {
                console.log(error.message)
            }

        }
        setPublic_id('')
    }


    const handleVideoUplaod = async () => {
        console.log(token)

        if (title !== '' && description !== '' && videoFile !== null && imageFile !== null) {
            console.log("All feild is full")
            const formData = new FormData()
            formData.append("title", title)
            formData.append("description", description)
            formData.append("thumbnail", imageFile)
            formData.append("video", videoFile)
            try {
                setUploading(true);


                const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/video/upload`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ Auth header
                        "Content-Type": "multipart/form-data",
                    },

                });

                console.log("upload successfully", res)
            } catch (error) {
                setUploading(false);

                console.log("upload failed", error.message)
            }

        } else {
            console.log("input is empty")

            setUploading(false);
        }
    }

    return (
        <>



            {/* video upload section  */}
            {videoFile === null ? (<>
                <div className=' w-full h-[85%]  top-14 md:w-[90%] md:h-[80%]  bg-gray-900  md:left-[5%] md:top-[10%] z-50 fixed md:rounded-[30px]'>
                    <div className='w-full rounded-t-[30px] h-14 flex  justify-between items-center px-8'>
                        <h3 className='text-xl font-bold'>
                            Upload videos
                        </h3>
                        <span className='hover:bg-gray-950 rounded-full p-1 '
                            onClick={() => setUploadVideoDiv(pre => !pre)}>
                            <X />
                        </span>
                    </div>
                    <div className='w-full h-[1px] bg-gray-600'></div>
                    <div className='w-full h-[70%]  flex flex-col items-center justify-center gap-3'>
                        <label htmlFor="video" className=' hover:cursor-pointer h-40 w-40 bg-gray-950 rounded-full flex justify-center items-center'>
                            <ArrowUpFromLine size={100} strokeWidth={3} />
                        </label>
                        <h2 className='font-sans'>Drag and drop video files to upload</h2>
                        <input type="file" id='video' accept='video/*' name='file' className=' hidden' onChange={uloadVideo} />
                        <label htmlFor="video" className=' hover:cursor-pointer w-36 h-10 bg-white rounded-full text-gray-950 flex justify-center items-center   font-sans'>
                            Select Files
                        </label>
                    </div>
                </div>
            </>) : (<>
                {/* dietiels upload section  */}
                <div className=' w-full h-[85%]   top-14 md:w-[90%] md:h-[80%] bg-gray-900  md:left-[5%] md:top-[10%] z-50 fixed md:rounded-[30px]'>
                    <div className='w-full rounded-t-[30px]  h-14 flex  justify-between items-center px-8'>
                        <h3 className='text-xl font-bold'>
                            Details
                        </h3>
                        <span className='hover:bg-gray-950 rounded-full p-1'
                            onClick={() => setUploadVideoDiv(pre => !pre)}>
                            <X />
                        </span>
                    </div>
                    <div className='w-full h-[1px] bg-gray-600'></div>

                    <div className=' myDiv w-[90%] h-[83%] md:h-[80%]  mx-auto flex flex-col-reverse md:flex-row'>
                        <div className='  h-fit md:h-full w-full md:w-[70%] md:myDiv '>
                            <div className='mt-20 md:mt-0 w-full h-10 px-5  flex items-center'>
                                <h2 className=' text-2xl'>
                                    Details
                                </h2>
                            </div>
                            <div className='w-[90%] mx-auto h-16 border mb-10 border-gray-400 rounded-lg hover:border-gray-100 '>
                                <div className='w-full h-[25 %] px-5'>
                                    <h3 className='text-sm text-gray-300 pt-1'>
                                        Title (required)
                                    </h3>
                                </div>
                                <input type="text" name="title" id="title" placeholder='Title ' value={title} className='bg-transparent px-4 h-[75%] w-full pb-1' onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className='w-[90%] mx-auto h-16 border mb-10 border-gray-400 rounded-lg hover:border-gray-100 '>
                                <div className='w-full h-[25 %] px-5'>
                                    <h3 className='text-sm text-gray-300 pt-1'>
                                        Description
                                    </h3>
                                </div>
                                <input type="text" name="Description" id="Description" placeholder='Tell viewers about your video ' value={description} className=' resize-vertical bg-transparent px-4  pb-1 h-[75%] w-full' onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className='w-[90%]  mx-auto md:h-36 min-h-48 h-fit   mb-24  '>
                                <div className='w-full h-[25%] flex flex-col mb-2  justify-center  '>
                                    <h3 className='text-[15px] font-semibold text-gray-300 pt-1'>
                                        Thumbnail
                                    </h3>
                                    <p className='text-sm text-gray-400'>
                                        Set a thumbnail that stands out and draws viewers' attention.
                                    </p>
                                </div>

                                <div className='w-full h-[100%]   flex flex-col md:flex-col gap-5'>
                                    <input type="file" className=' hidden' id='image' onChange={handleImageSelect} />
                                    {
                                        imagePreview === null ? (
                                            <label htmlFor="image" className=' cursor-pointer h-28 w-full md:h-full md:w-[30%] border border-dashed flex flex-col justify-center items-center  rounded-lg'>

                                                {previewThumbnailLaoder ? (<>
                                                    <SmallLoader />
                                                </>) : (<>
                                                    <ImagePlus />
                                                    <p className='text-sm font-light text-gray-400'>
                                                        Upload file
                                                    </p>

                                                </>)}

                                            </label>
                                        ) : null

                                    }
                                    {
                                        imagePreview ? (<div className='mx-auto mb-10 cursor-pointer max-h-full max-w-[100%]  flex flex-col justify-center items-center  rounded-lg'>
                                            <div className=' relative left-44 md:left-40 top-7  hover:bg-red-500 rounded-full'
                                                onClick={handleDeletePreviewImage}>
                                                <X />
                                            </div>
                                            <img src={imagePreview} alt="imagePreview" className='h-full w-full rounded-lg  object-cover' />

                                        </div>) : null
                                    }


                                    <button className='flex w-full md:hidden justify-center items-center bg-blue-500 px-3 mr-5  py-2 rounded-md gap-2 hover:scale-105 duration-300 active:scale-100'
                                        onClick={handleVideoUplaod}
                                    >
                                        {
                                            uploading ? (
                                                <>
                                                    <Upload className=' animate-bounce' />
                                                    <span className='font-mono'>Uplaoding...</span>
                                                    <ButtonLoading />
                                                </>
                                            ) : (<>
                                                <Upload />
                                                <span>
                                                    Upload
                                                </span>
                                            </>)
                                        }
                                    </button>

                                </div>

                            </div>




                        </div>


                        <div className='h-full w-full md:w-[30%] '>
                            <div className='w-full h-56  md:h-48    rounded-md'>
                                {videoPreview === null ? (<>
                                    <div className='h-full w-full flex justify-center items-center gap-2 '>
                                        <span>
                                            <TriangleAlert />
                                        </span>
                                        <span>
                                            video not fount
                                        </span>
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
                        <MessageSquare />
                        <button className='flex bg-blue-500 px-3 mr-5  py-2 rounded-md gap-2 hover:scale-105 duration-300 active:scale-100'
                            onClick={handleVideoUplaod}
                        >
                            {
                                uploading ? (
                                    <>
                                        <Upload className=' animate-bounce' />
                                        <ButtonLoading />
                                    </>
                                ) : (<>
                                    <Upload />
                                    <span>
                                        Upload
                                    </span>
                                </>)
                            }
                        </button>
                    </div>
                </div>
            </>)
            }
        </>
    )
}

export default UploadVideo
