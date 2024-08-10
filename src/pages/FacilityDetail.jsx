import { useParams } from "react-router-dom";
import styles from "../css/page/Contact.module.css";
import { useState } from "react";

const AboutUs = () => {
  const {facilityId} =useParams();
  const [facility, setFacility] = useState([]);
  return (
    <div className="px-40 py-10 sm:px-20 lg:px-72 -bg-white">
      <div className={styles.contact4}>
        {/** title */}
        <h3 className="text-4xl text-center">
          {facilityId}
        </h3>

        {/** introduction */}
        <div>
          <h3 className="text-2xl leading-10 text-center">
            Creative Learners' Academy is located in Madhyapur Thimi, Nepal, and
            stands as a beacon of affordable, quality education. Welcoming
            students from across the nation, the academy proudly offers
            scholarships from Nursery through Grade Ten, fostering a diverse
            community of learners. 시설 설명 시설 설명
          </h3>
        </div>

      </div>
    </div>  
  );
};

export default AboutUs;
