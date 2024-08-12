import { useEffect, useState, useRef } from "react";
import ManagementBox from "../components1/ManagementBox.jsx";
import axiosInstance from "../utils/axios.js";

const Management = () => {
  const limit = 12; // 가져올 카드 수
  const [management, setManagement] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const sliderRef = useRef(null); // 슬라이더 영역에 대한 참조
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태 체크
  const [startPos, setStartPos] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    fetchManagement(skip, limit, loadMore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchManagement = async (skip, limit, loadMore) => {
    const params = {
      skip,
      limit,
    };
    try {
      const response = await axiosInstance.get("/staffs", { params });

      if (loadMore) {
        setManagement([...management, ...response.data.management]);
      } else {
        setManagement(response.data.management);
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoadMore = () => {
    fetchManagement(skip + limit, limit, true);
    setLoadMore(true);
    setSkip(skip + limit);
  };

  const startDrag = (e) => {
    setIsDragging(true);
    setStartPos(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startPos) * 2; // 스크롤 속도 조정
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 bg-white">
      <div className="max-w-screen-xl mx-auto p-8">
        <div
          className="py-10 h-[500px] flex overflow-x-scroll overflow-y-hidden space-x-6 cursor-grab active:cursor-grabbing scrollbar-custom"
          ref={sliderRef}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onMouseMove={handleDrag}
        >
        {/* 여러 박스 배치*/}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className="w-60 h-auto p-3 bg-white rounded-lg shadow-xl flex-shrink-0 transform transition-transform hover:scale-105"
            key={index}
          >
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
            <img
              src="image-1@2x.png"
              alt="Staff"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-2 text-center">
            <h1 className="p-3 text-xl font-semibold text-gray-800">
              이름이름이름이름
            </h1>
            <h1 className="p-3 text-3xl font-semibold text-gray-600">
              잡
            </h1>
          </div>
        </div>
      ))} 
    </div>
        
      </div>
    </div>
  );
};

export default Management;
