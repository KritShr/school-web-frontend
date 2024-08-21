import React from "react";
import PropTypes from "prop-types";

const ManagementBox = ({staff}) => {
  const dept = ['Principal', 'Coordinator', 'Teaching Staff', 'Non-teaching Staff']

  return (
    <div>
      <div className="w-60 h-[430px] p-3 bg-white rounded-lg shadow-xl flex-shrink-0 transform transition-transform hover:scale-105">
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
          <img
            src={`${"http://43.203.223.3:8000/"}/${staff.image}`}  // public 폴더의 이미지 파일 경로
            alt={staff.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-2 text-center">
          <h1 className="p-3 text-lg font-semibold text-gray-800 -text--medium">
            {staff.name}
          </h1>
          <h1 className="p-3 text-2xl font-bold text-gray-600">
            {dept[staff.department-1]}
          </h1>
        </div>
      </div>  
    </div>
  );
};

ManagementBox.propTypes = {
    staff: PropTypes.object.isRequired,
};

export default ManagementBox;
