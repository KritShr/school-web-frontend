import React from "react";
import { useNavigate } from "react-router-dom";  // useNavigate를 import
import PropTypes from "prop-types";
import { useCallback } from "react";
import styles from "../../Contact.module.css";

const GalleryBox = ({gallery}) => {
  var date = new Date(gallery.updatedAt);
  var year = date.getFullYear().toString();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  
  var returnDate = year+"-"+month+"-"+day

  console.log(gallery)


  const navigate = useNavigate();  // useNavigate 훅 사용

  const moveToDetail = useCallback((galleryId) => {
    navigate(`/galleries/${galleryId}`);
  }, [navigate]);

  return (
    <div className="w-128 -bg--default-white rounded-xl hover:shadow-2xl cursor-pointer" onClick={()=>{moveToDetail(gallery._id)}}>
      <div className={styles.contact4}>
      {/* 이미지 추가: Admin Login 텍스트 바로 아래에 배치 */}
      <div className="flex justify-center mt-4">
        <div className="relative w-full h-96"> {/* 4:3 비율 (2배 크기) */}
          <img 
            src={`${import.meta.env.VITE_SERVER_URL}/${gallery.images[0]}`}  // public 폴더의 이미지 파일 경로
            alt={gallery.title} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mt-3 pr-5 pl-5 truncate">
        {gallery.title}
      </h1>
      <h4 className="text-lg font-semibold text-right mt-2 pr-5">
        {returnDate}
      </h4>
      <h1 className="text-xl font-medium text-left mt-1 p-5 truncate">
        {gallery.description}
      </h1>
      </div>
    </div>
  );
};

GalleryBox.propTypes = {
    gallery: PropTypes.object.isRequired,
};

export default GalleryBox;
