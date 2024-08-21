import React from "react";
import { useNavigate } from "react-router-dom";  // useNavigate를 import
import PropTypes from "prop-types";
import { useCallback } from "react";

const FacilityBox = ({facility}) => {
  const navigate = useNavigate();  // useNavigate 훅 사용

  const moveToDetail = useCallback((id) => {
    navigate(`/facilities/${id}`);
  }, [navigate]);

  return (
    <div className="p-10 m-10 bg-white rounded-xl shadow-2xl">
      <h1 className="text-3xl font-semibold text-center">
        {facility.title}
      </h1>

      {/* 이미지 추가: Admin Login 텍스트 바로 아래에 배치 */}
      <div className="flex justify-center mt-4">
        <div className="relative w-96 h-72"> {/* 4:3 비율 (2배 크기) */}
          <img 
            src={`${"http://43.203.223.3:8000/"}/${facility.images[0]}`}  // public 폴더의 이미지 파일 경로
            alt={facility.title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center"> {/* 부모 요소에 중앙 정렬 적용 */}
        <button 
          className="-bg--color-silver text-2xl font-semibold w-96 bg-black text-white px-4 py-2 items-center rounded-md 
                    hover:-bg--medium duration-200" 
          onClick={() => moveToDetail(facility._id)}
        >
          More
        </button>
      </div>
    </div>
  );
};

FacilityBox.propTypes = {
  facility: PropTypes.object.isRequired,
};

export default FacilityBox;
