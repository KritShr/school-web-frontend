import React, { useEffect, useState } from 'react'
import FilesUpload from '../components1/FilesUpload';
import axiosInstance from '../utils/axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const UploadFacility = ({isUpdate}) => {
    const navigate = useNavigate();
    const { facilityId } = useParams();
    const [facility, setFacility] = useState({
        title:'',
        description:'',
        images:[]
    })

    useEffect(() => {
        if (isUpdate && facilityId) {
          async function fetchFacility() {
            try {
              const response = await axiosInstance.get(`/facilities/${facilityId}?type=single`);
              setFacility(response.data[0]);
            } catch (error) {
              console.error(error);
            }
          }
          fetchFacility();
        }
      }, [isUpdate, facilityId]);
    

    const handleChange= (event)=>{
        const{name, value} = event.target;
        setFacility(prevState=>({
          ...prevState, // 바꾸지 않는 값은 유지
          [name]: value // 바꾸는 값을 오버라이드
        }));
    }

    const handleImages = (newImages) => {
        setFacility(prevState=>({
            ...prevState,
            images: newImages
        }));
    }
    
    const handleSubmit = async(event)=>{
        event.preventDefault();

        const body={...facility}
        console.log(body)
        try {
            if(isUpdate){
                await axiosInstance.put(`/facilities/${facilityId}`, body);
            } else{
                await axiosInstance.post('/facilities', body);
            }
            toast.info('Upload Success!');
            navigate('/facilities');
            
        } catch (error) {
            console.error(error);
            toast.error('Upload Failed...')
        }
    }

  return (
    <div className='px-10 py-10 sm:px-4 lg:px-40 -bg-white'>
        <div className="mt-10 mb-10 isolate self-center -bg--color-gainsboro-100 py-10 rounded-md">
            <div className="text-center">
                <h2 className="py-10 font-bold text-3xl text---third-template-colour">Upload Facility</h2>
            </div>
            <form onSubmit={handleSubmit} className="px-10 lg:px-40">
                <FilesUpload images = {facility.images} onImageChange={handleImages} CreateApi={'/galleries/image'}/>
                <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className='sm:col-span-2'>
                    <label htmlFor="title" className="block text-sm font-semibold leading-6 text---third-template-colour text-left">Title</label>
                    <div className="mt-2.5">
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset -ring--medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:-ring--medium sm:text-sm sm:leading-6"  
                            onChange={handleChange}
                            value={facility.title}
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900 text-left">Description</label>
                    <div className="mt-2.5">
                    <textarea 
                        name="description" 
                        id="description" 
                        rows="4" 
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset -ring--medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:-ring--medium sm:text-sm sm:leading-6" 
                        onChange={handleChange}
                        value={facility.description}
                    />
                    </div>
                </div>
                </div>
                <div className="flex justify-end mt-5">
                <button type="submit" className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base">
                    Submit
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UploadFacility;