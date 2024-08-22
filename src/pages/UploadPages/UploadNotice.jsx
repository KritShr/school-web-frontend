import React, { useEffect, useState } from 'react'
import DocsUpload from '../../components/DocsUpload';
import axiosInstance from '../../utils/axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const UploadNotice = ({isUpdate}) => {
    const navigate = useNavigate();
    const { noticeId } = useParams();
    const [notice, setNotice] = useState({
        title:'',
        description:'',
        files:[]
    })
    useEffect(() => {
        if (isUpdate && noticeId) {
          async function fetchNotice() {
            try {
              const response = await axiosInstance.get(`/notices/${noticeId}?type=single`);
              setNotice(response.data[0]);
            } catch (error) {
              console.error(error);
            }
          }
          fetchNotice();
        }
      }, [isUpdate, noticeId]);
    

    const handleChange= (event)=>{
        const{name, value} = event.target;
        setNotice(prevState=>({
          ...prevState, // 바꾸지 않는 값은 유지
          [name]: value // 바꾸는 값을 오버라이드
        }));
    }

    const handleFiles = (newFiles) => {
        setNotice(prevState=>({
            ...prevState,
            files: newFiles
        }));
    }
    
    const handleSubmit = async(event)=>{
        event.preventDefault();

        const body={...notice}
        console.log(body)
        try {
            if(isUpdate){
                await axiosInstance.put(`/notices/${noticeId}`, body);
            } else{
                await axiosInstance.post('/notices', body);
            }
            toast.info('Upload Success!');
            if(isUpdate){
                navigate(`/notice/${noticeId}`)
            } else{
                navigate('/notice');
            }
            
            
        } catch (error) {
            console.error(error);
            toast.error('Upload Failed...')
        }
    }

  return (
    <div className='px-10 py-10 sm:px-4 lg:px-40 -bg-white'>
        <div className="mt-10 mb-10 isolate self-center -bg--color-gainsboro-100 py-10 rounded-md">
            <div className="text-center">
                <h2 className="py-10 font-bold text-3xl text---third-template-colour">Upload Notice</h2>
            </div>
            <form onSubmit={handleSubmit} className="px-10 lg:px-40">
                <DocsUpload files = {notice.files} onFileChange={handleFiles} CreateApi={'/notices/file'} DeleteApi={'notices'}/>
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
                            value={notice.title}
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
                        value={notice.description}
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

export default UploadNotice;