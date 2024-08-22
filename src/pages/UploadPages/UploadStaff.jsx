import React, { useState } from 'react'
import FileUpload from '../../components/FileUpload'
import axiosInstance from '../../utils/axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dept } from '../../utils/selectData';
import { useNavigate } from 'react-router-dom';

const UploadStaff = () => {
    const navigate = useNavigate();

    const [staff, setStaff] = useState({
        name:'',
        department:'',
        image:''
    })

    const handleChange= (event)=>{
        const{name, value} = event.target;
        setStaff(prevState=>({
          ...prevState, // 바꾸지 않는 값은 유지
          [name]: value // 바꾸는 값을 오버라이드
        }));
    }

    const handleImages = (newImage) => {
        setStaff(prevState=>({
            ...prevState,
            image: newImage
        }));
    }
    
    const handleSubmit = async(event)=>{
        event.preventDefault();

        const body={...staff}
        console.log(body)
        try {
            await axiosInstance.post('/staffs', body);
            toast.info('Upload Success!');
            navigate('/management');
            
        } catch (error) {
            console.error(error);
            toast.error('Upload Failed...')
        }
    }

  return (
    <div className='px-10 py-10 sm:px-4 lg:px-40 -bg-white'>
        <div className="mt-10 mb-10 isolate self-center -bg--color-gainsboro-100 py-10 rounded-md">
            <div className="text-center">
                <h2 className="py-10 font-bold text-3xl text---third-template-colour">Upload Management</h2>
            </div>
            <form onSubmit={handleSubmit} className="px-10 lg:px-40">
                <FileUpload image = {staff.image} onImageChange={handleImages} CreateApi={'/staffs/image'} DeleteApi={'staffs'}/>
                <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div >
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text---third-template-colour text-left">Name</label>
                    <div className="mt-2.5">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset -ring--medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:-ring--medium sm:text-sm sm:leading-6"  
                        onChange={handleChange}
                        value={staff.name}
                    />
                    </div>
                </div>
                <div >
                    <label htmlFor="department" className="block text-sm font-semibold leading-6 text-gray-900 text-left">Department</label>
                    <div className="mt-2.5">
                        <select
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset -ring--medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:-ring--medium sm:text-sm sm:leading-6"
                            name="department" id="department" onChange={handleChange} value={staff.department}
                        >
                            {dept.map(item=>(
                                <option key={item.key} value={item.key}>{item.value}</option>
                            ))}
                        </select>
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

export default UploadStaff