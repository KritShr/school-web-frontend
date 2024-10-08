import PropTypes from "prop-types";
import axiosInstance from "../../../utils/axios"
import { useState, useEffect } from "react"
import { useNavigate} from "react-router-dom";

const Gallery = ({}) => {
  const limit = 3;
  const [galleries, setGalleries] = useState([]);

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchGalleries(limit);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const navigate = useNavigate();
  const fetchGalleries = async(limit) =>{
    const params = {
      limit
    }
    try{
      const response = await axiosInstance.get('/galleries', {params})
      setGalleries(response.data.galleries);
    } catch(err){
      console.error(err);
    }
  }

  const moveToGallery = () =>{
    navigate('/gallery/school')
  }

  return (
    <div className="flex gap-3 lg:gap-5">
      {galleries.map((gallery) => (
        <div key={gallery.id} className="w-1/3 h-48 lg:h-80" onClick={moveToGallery}>
          <img
            className="w-full h-full object-cover cursor-pointer"
            alt={gallery.title}
            src={`${import.meta.env.VITE_SERVER_URL}/${gallery.images[0]}`}
          />
        </div>
      ))}
    </div>

  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;