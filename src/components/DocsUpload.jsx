import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { useState } from 'react';
import axiosInstance from '../utils/axios';
import { toast } from "react-toastify";

const DocsUpload = ({ onFileChange, files, CreateApi, DeleteApi }) => {
    const [loading, setLoading] = useState(false);

    const handleDrop = async (droppedFiles) => {
        setLoading(true);
        console.log("Files dropped:", droppedFiles);

        const uploadedFiles = [];

        for (let i = 0; i < droppedFiles.length; i++) {
            let formData = new FormData(); // Create a new FormData object for each file
            formData.append('files', droppedFiles[i]);

            const config = {
                header: { 'content-type': 'multipart/form-data' }
            };

            try {
                const response = await axiosInstance.post(CreateApi, formData, config);
                uploadedFiles.push(response.data.fileName);
                console.log(response.data.fileName);
            } catch (err) {
                console.error(`Error uploading file ${droppedFiles[i].name}:`, err);
            }
        }

        onFileChange([...files, ...uploadedFiles]);
        setLoading(false);
    }

    const handleDelete = async (file) => {
        const currentIndex = files.indexOf(file);
        let newFiles = [...files];
        newFiles.splice(currentIndex, 1);
        onFileChange(newFiles);
        try {
            console.log(file)
            console.log(`/${DeleteApi}/file/${file}`)
            await axiosInstance.delete(`/${DeleteApi}/file/${file}`);
        } catch (error) {
            console.error(error);
            toast.error('Delete Failed...');
        } 
        
    };

    return (
        <div className='flex gap-4'>
            <Dropzone onDrop={handleDrop} multiple accept=".pdf,.doc,.docx">
                {({ getRootProps, getInputProps }) => (
                    <section className='min-w-[300px] h-[300px] border -border--medium rounded-md -bg--default-white flex items-center justify-center hover:shadow-md'>
                        <div {...getRootProps()} className='text-6xl -text--medium cursor-pointer'>
                            <input {...getInputProps()} />
                            +
                        </div>
                    </section>
                )}
            </Dropzone>
            <div className='flex-grow h-[300px] items-center justify-center flex border rounded-md -bg--default-white px-1 py-1 -border--medium overflow-x-scroll overflow-y-hidden'>
                {loading ? (
                    <div className='flex items-center justify-center'>
                        <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 -border--gray-900'></div>
                    </div>
                ) : files?.length > 0 ? (
                    <div className='flex flex-col w-full'>
                        {files.map((file, index) => (
                            <div onClick={() => handleDelete(file)} key={file + index} className='w-full -bg--color-silver hover:-border--medium hover:-bg--medium rounded-md mb-1 cursor-pointer'>
                                <p className='w-full text-center py-2' >{file}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='text-text-default-default font-semibold text-center'>No document uploaded</p>
                )}
            </div>
        </div>
    );
}

DocsUpload.propTypes = {
    onFileChange: PropTypes.func.isRequired,
    files: PropTypes.array.isRequired,
    CreateApi: PropTypes.string,
    DeleteApi: PropTypes.string
};

export default DocsUpload;