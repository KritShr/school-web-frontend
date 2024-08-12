import React from "react";
import { useNavigate } from "react-router-dom";  // useNavigate를 import
import PropTypes from "prop-types";
import { useCallback } from "react";

const ManagementBox = ({staff}) => {
  return (
    <div className="w-60 h-auto p-3 bg-white rounded-lg shadow-xl flex-shrink-0 transform transition-transform hover:scale-105">
      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
        <img
          src={`${import.meta.env.VITE_SERVER_URL}/${staff.image}`}  // public 폴더의 이미지 파일 경로
          alt={staff.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-2 text-center">
        <h1 className="p-3 text-xl font-semibold text-gray-800">
          {staff.name}
        </h1>
        <h1 className="p-3 text-3xl font-semibold text-gray-600">
          {staff.department}
        </h1>
      </div>
    </div>
  );
};

ManagementBox.propTypes = {
    staff: PropTypes.object.isRequired,
};

export default ManagementBox;
