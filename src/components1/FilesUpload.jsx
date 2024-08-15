import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import axiosInstance from '../utils/axios';

const FilesUpload = ({onImageChange, images, CreateApi}) => {
    
    const handleDrop = async(files) => {
        console.log("Files dropped:", files);

        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append('images', files[0]);
        try{
            const response = await axiosInstance.post(CreateApi, formData, config);
            onImageChange([...images, response.data.fileName]);
            console.log(response.data.fileName)
        } catch(err){
            console.error(err);
        }
    }

    const handleDelete = async(image) => {
        const currentIndex = images.indexOf(image);
        let newImages = [...images]; //원본 복사
        newImages.splice(currentIndex, 1) //현재 이미지로부터 1개 지움 => 현재 이미지 지움
        onImageChange(newImages); //지운 상태를 화면에 반영
    };

    return (
        <div className='flex gap-4'>
            <Dropzone onDrop={handleDrop}>
                {({getRootProps, getInputProps}) => (
                    <section className='min-w-[300px] h-[300px] border -border--medium rounded-md -bg--default-white flex items-center justify-center hover:shadow-md'>
                        <div {...getRootProps()} className='text-6xl -text--medium cursor-pointer'>
                            <input {...getInputProps()} />
                            +
                        </div>  
                    </section>
                )}
            </Dropzone>
            <div className='flex-grow h-[300px] border flex items-center justify-center rounded-md -bg--default-white -border--medium overflow-x-scroll overflow-y-hidden '>
                {images?(
                    <div className='flex'>
                    {images.map((image, index)=>(
                        <div onClick={()=> handleDelete(image)} key={image+index}>
                            <img
                                className='min-w-[300px] h-[300px]'
                                src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
                                alt=''
                            />
                        </div>
                    ))}
                    </div>
                ):(
                    <p className='-text--text-default-default font-semibold text-center'>No image uploaded</p>
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

export default FilesUpload