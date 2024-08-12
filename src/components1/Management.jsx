import React from "react";
import { useNavigate } from "react-router-dom";  // useNavigate를 import
import PropTypes from "prop-types";
import { useCallback } from "react";

const Management = ({management}) => {
  const navigate = useNavigate();  // useNavigate 훅 사용

  const moveToDetail = useCallback((id) => {
    navigate(`/management/${id}`);
  }, [navigate]);

  return (
    <div className="p-10 m-10 bg-white rounded-xl shadow-2xl">
      <h1 className="text-3xl font-semibold text-center">
        {management.title}
      </h1>

      {/* 이미지 추가: Admin Login 텍스트 바로 아래에 배치 */}
      <div className="flex justify-center mt-4">
        <div className="relative w-96 h-72"> {/* 4:3 비율 (2배 크기) */}
          <img 
            src={`${import.meta.env.VITE_SERVER_URL}/${management.image}`}  // public 폴더의 이미지 파일 경로
            alt={management.title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

Management.propTypes = {
    management: PropTypes.object.isRequired,
};

export default Management;
