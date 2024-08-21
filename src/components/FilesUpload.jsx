import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import axiosInstance from '../utils/axios';
import { useState } from 'react';

const FilesUpload = ({onImageChange, images, CreateApi}) => {
    const [loading, setLoading] = useState(false);
    
    const handleDrop = async (files) => {
        setLoading(true);
        console.log("Files dropped:", files);
    
        const uploadedImages = [];
    
        for (let i = 0; i < files.length; i++) {
            let formData = new FormData(); // Create a new FormData object for each file
            formData.append('images', files[i]);
    
            const config = {
                header: { 'content-type': 'multipart/form-data' }
            };
    
            try {
                const response = await axiosInstance.post(CreateApi, formData, config);
                uploadedImages.push(response.data.fileName);
                console.log(response.data.fileName);
            } catch (err) {
                console.error(`Error uploading file ${files[i].name}:`, err);
            }
        }
    
        onImageChange([...images, ...uploadedImages]);
        setLoading(false);
    };

    const handleDelete = async(image) => {
        const currentIndex = images.indexOf(image);
        let newImages = [...images];
        newImages.splice(currentIndex, 1);
        onImageChange(newImages);
    };

    return (
        <div className='flex gap-4'>
            <Dropzone onDrop={handleDrop} multiple>
                {({getRootProps, getInputProps}) => (
                    <section className='min-w-[300px] h-[300px] border -border--medium rounded-md -bg--default-white flex items-center justify-center hover:shadow-md'>
                        <div {...getRootProps()} className='text-6xl -text--medium cursor-pointer'>
                            <input {...getInputProps()} />
                            +
                        </div>  
                    </section>
                )}
            </Dropzone>
            <div className='flex-grow h-[300px] border flex items-center justify-center rounded-md -bg--default-white -border--medium overflow-x-scroll overflow-y-hidden'>
                {loading ? (
                    <div className='flex items-center justify-center'>
                        <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900'></div>
                    </div>
                ) : images?.length > 0 ? (
                    <div className='flex'>
                        {images.map((image, index) => (
                            <div onClick={() => handleDelete(image)} key={image + index}>
                                <img
                                    className='min-w-[300px] h-[300px]'
                                    src={`${"http://43.203.223.3:8000/"}/${image}`}
                                    alt=''
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='text-text-default-default font-semibold text-center'>No image uploaded</p>
                )}
            </div>
        </div>
    )
}

FilesUpload.propTypes = {
    onImageChange: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired,
    CreateApi: PropTypes.string
};

export default FilesUpload;
