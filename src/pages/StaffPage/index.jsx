import { useEffect, useState, useRef } from "react";
import ManagementBox from "./Sections/StaffItem.jsx";
import axiosInstance from "../../utils/axios.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "../../Contact.module.css";

const StaffPage = () => {
  const limit = 12; // 가져올 카드 수
  const [staffs, setStaffs] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const sliderRef = useRef(null); // 슬라이더 영역에 대한 참조
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태 체크
  const [startPos, setStartPos] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const navigate = useNavigate();

  const isAuth = localStorage.getItem('isAuth');

  useEffect(() => {
    fetchStaffs(skip, limit, loadMore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchStaffs = async (skip, limit, loadMore) => {
    const params = {
      skip,
      limit,
    };
    try {
      const response = await axiosInstance.get("/staffs", { params });

      if (loadMore) {
        setStaffs([...staffs, ...response.data.staffs]);
      } else {
        setStaffs(response.data.staffs);
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
    } catch (err) {
      console.error(err);
    }
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

  const handleDelete = async(staffId) => {
    try {
      await axiosInstance.delete(`/staffs/${staffId}`);
      setStaffs(staffs.filter(staff => staff._id !== staffId));
      toast.info('Delete Success!');
    } catch (error) {
      console.error(error)
      toast.error('Delete Failed...');
    }
  }

  const handleCreate = () => {
    console.log(`move to Create Management!`)
    navigate('/management/upload');
  }

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 bg-white">
      <div  className={styles.contact4}>
      <div className="max-w-screen-xl mx-auto p-8">
        <h2 className="text-5xl font-semibold text-center mb-5"> Board of <span className="-text--medium">Directors</span> </h2>
          {isAuth ==='true'&& (
            <div className="mt-2 flex justify-end mb-1">
              <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={handleCreate}>Create</button>
            </div>
          )}
          <div
            className="py-10 h-[550px] flex overflow-x-scroll overflow-y-hidden space-x-6 cursor-grab active:cursor-grabbing scrollbar-custom"
            ref={sliderRef}
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={handleDrag}
          >
          {/* 여러 박스 배치*/}
          {staffs.map(staff=>
            <div className="p-2.5">
              {isAuth ==='true'&& (
                <div className="mt-2 flex justify-left gap-2 mb-1"> 
                  <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={()=> handleDelete(staff._id)}>Delete</button>
                </div>
              )}
              <ManagementBox
                staff={staff} key={staff._id}
              />
              
            </div>
          )}
        </div>
        
      </div></div>
    </div>
  );
};

export default StaffPage;
