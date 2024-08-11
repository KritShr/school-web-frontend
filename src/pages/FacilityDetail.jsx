import { useParams } from "react-router-dom";
import styles from "../css/page/Contact.module.css";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios.js"

const FacilityDetail = () => {
  const { facilityId } = useParams();
  const [facility, setFacility] = useState([]); // Treat facility as an object

  useEffect(() => {
    async function fetchFacility() {
      try {
        const response = await axiosInstance.get(`/facilities/${facilityId}?type=single`);
        setFacility(response.data[0]); // Directly set response.data
      } catch (error) {
        console.error(error);
      }
    }
    fetchFacility();
  }, [facilityId]);

  if (!facility) {
    return (
      <div>No Facility</div>
    );
  }
  return (
    <div className="px-40 py-10 sm:px-20 lg:px-72 -bg-white justify-center">
      <div className={styles.contact4}>
        {/** title */}
        <h3 className="text-4xl font-bold text-center">
          {facility.title}
        </h3>

        {/** image */}
        <div className="justify-center py-10">
          <img 
            src={`${import.meta.env.VITE_SERVER_URL}/${facility.image}`}  // public 폴더의 이미지 파일 경로
            alt={facility.title} 
            className="inset-0 w-full object-cover relative" 
          />
        </div>
        
        {/** introduction */}
        <div>
          <h3 className="text-2xl leading-10 text-left font-medium">
            {facility.description}
          </h3>
        </div>

      </div>
    </div>  
  );
};

export default FacilityDetail;
