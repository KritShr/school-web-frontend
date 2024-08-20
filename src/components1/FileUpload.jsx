import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import axiosInstance from '../utils/axios';

const FileUpload = ({ onImageChange, image, CreateApi}) => {
    
    const handleDrop = async (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        };
        formData.append('image', files[0]);

        try {
            const response = await axiosInstance.post(CreateApi, formData, config);
            onImageChange(response.data.fileName); // Replace the image
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = ()=> {
        onImageChange(null); 
    };

    return (
        <div className='flex gap-4'>
            <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                    <section className='min-w-[300px] h-[300px] border -border--medium rounded-md -bg--default-white flex items-center justify-center hover:shadow-md'>
                        <div {...getRootProps()} className='text-6xl -text--medium cursor-pointer'>
                            <input {...getInputProps()} />
                            +
                        </div>  
                    </section>
                )}
            </Dropzone>
            <div className='flex-grow h-[300px] border flex items-center justify-center rounded-md -bg--default-white -border--medium overflow-x-scroll overflow-y-hidden '>
                {image ? (
                    <div onClick={handleDelete}>
                        <img
                            className='min-w-[300px] h-[300px]'
                            src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
                            alt=''
                        />
                    </div>
                ) : (
                    <p className='-text--text-default-default font-semibold text-center'>No image uploaded</p>
                )}
            </div>
        </div>
    );
};

FileUpload.propTypes = {
    onImageChange: PropTypes.func.isRequired,
    image: PropTypes.string, // Now it handles a single image
    CreateApi: PropTypes.string
};

export default FileUpload;