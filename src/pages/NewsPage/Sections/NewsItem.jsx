import React from "react";
import { useNavigate } from "react-router-dom";  // useNavigate를 import
import PropTypes from "prop-types";
import { useCallback } from "react";

const NewsItem = ({news}) => {
  var date = new Date(news.updatedAt);
  var year = date.getFullYear().toString();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  
  var returnDate = year+"-"+month+"-"+day


  const navigate = useNavigate();  // useNavigate 훅 사용

  const moveToDetail = useCallback((newsId) => {
    navigate(`/newses/${newsId}`);
  }, [navigate]);

  return (
    <div className="w-128 bg-white rounded-xl shadow-2xl">
      {/* 이미지 추가: Admin Login 텍스트 바로 아래에 배치 */}
      <div className="flex justify-center mt-4">
        <div className="relative w-full h-96"> {/* 4:3 비율 (2배 크기) */}
          <img 
            src={`${"http://43.203.223.3:8000/"}/${news.images[0]}`}  // public 폴더의 이미지 파일 경로
            alt={news.title} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mt-3 pr-5 pl-5 truncate">
        {news.title}
      </h1>
      <h4 className="text-lg font-semibold text-right mt-2 pr-5">
        {returnDate}
      </h4>
      <h1 className="text-xl font-medium text-left mt-1 p-5 truncate">
        {news.description}
      </h1>


      <div className="m-5 flex justify-end"> {/* 부모 요소에 중앙 정렬 적용 */}
        <button 
          className="mb-5 -bg--color-silver text-xl font-semibold text-white px-4 py-2 items-center rounded-md 
                    hover:-bg--medium duration-200" 
          onClick={() => moveToDetail(news._id)}
        >
          More
        </button>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
