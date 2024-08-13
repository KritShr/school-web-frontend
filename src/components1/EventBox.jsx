import React from "react";
import { useNavigate } from "react-router-dom";  // useNavigate를 import
import PropTypes from "prop-types";
import { useCallback } from "react";

const EventBox = ({event}) => {
  const navigate = useNavigate();  // useNavigate 훅 사용

  const moveToDetail = useCallback((id) => {
    navigate(`/events/${id}`);
  }, [navigate]);

  return (
    <div className="p-5 m-5 bg-white rounded-xl shadow-2xl">
      {/* 이미지 추가: Admin Login 텍스트 바로 아래에 배치 */}
      <div className="flex justify-center mt-4">
        <div className="relative w-96 h-72"> {/* 4:3 비율 (2배 크기) */}
          <img 
            src={`${import.meta.env.VITE_SERVER_URL}/${event.image}`}  // public 폴더의 이미지 파일 경로
            alt={event.title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-center">
        {event.title}
      </h1>
      

      <div className="mt-6 flex justify-center"> {/* 부모 요소에 중앙 정렬 적용 */}
        <button 
          className="-bg--color-silver text-2xl font-bold w-96 bg-black text-white px-4 py-2 items-center rounded-md 
                    hover:-bg--medium duration-200" 
          onClick={() => moveToDetail(event._id)}
        >
          more
        </button>
      </div>
    </div>
  );
};

EventBox.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventBox;
