import FacilityBox from "./FacilityBox.jsx";
import { useEffect, useState } from "react";
import SearchInput from "../../components1/SearchInput.jsx";
import axiosInstance from "../../utils/axios.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../../Contact.module.css";

const FacilitiesMain = () => {
  const limit = 12; //가져올 카드 수
  const [facilities, setFacilities] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const isAuth = localStorage.getItem('isAuth');

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchFacilities(skip, limit, loadMore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchFacilities = async (skip, limit, loadMore, searchTerm = '') => {
    const params = {
      skip,
      limit,
      searchTerm
    };
    try {
      const response = await axiosInstance.get('/facilities', { params });

      if (loadMore) { // 더 보기 클릭 시 현재 상품 state에 가져온 state 추가
        setFacilities([...facilities, ...response.data.facilities]);
      } else {
        setFacilities(response.data.facilities);
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoadMore = () => {
    fetchFacilities(skip + limit, limit, true, searchTerm);
    setLoadMore(true);
    setSkip(skip + limit);
  };

  const handleSearchTerm = (event) => {
    setSkip(0);
    setSearchTerm(event.target.value);
    fetchFacilities(0, limit, loadMore, event.target.value);
  };

  const handleDelete = async (facilityId) => {
    try {
      await axiosInstance.delete(`/facilities/${facilityId}`);
      setFacilities(facilities.filter(facility => facility._id !== facilityId));
      toast.info('Delete Success!');
    } catch (error) {
      console.error(error);
      toast.error('Delete Failed...');
    }
  };

  const navigate = useNavigate();
  const handleCreate = () => {
    console.log(`move to Create Facility!`);
    navigate('/facilities/upload');
  };

  console.log(facilities);

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg-white"> {/* 전체 화면을 채우도록 수정 */}
    <div  className={styles.contact4}>
      <div className="justify-end flex">
        <SearchInput 
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          onSearch={handleSearchTerm}
        />
      </div>

      {isAuth ==='true'&& (
        <div className="mt-2 flex justify-end mb-1">
          <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={handleCreate}>Create</button>
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto p-4"> {/* 중간에 정렬 */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {facilities.map(facility =>
            <div className="p-2.5 transform transition-transform duration-200 hover:scale-105" key={facility._id}>
              {isAuth ==='true'&& (
                <div className="mt-2 flex justify-left gap-2 mb-1"> 
                  <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={() => handleDelete(facility._id)}>Delete</button>
                </div>
              )}
              <FacilityBox
                facility={facility} key={facility._id}
              />
            </div>
          )}
        </div>
      </div>

      <div className="justify-center flex">
        {hasMore && (<button
          className="-bg--color-silver text-2xl font-semibold bg-black text-white px-4 py-2 items-center rounded-md 
                    hover:-bg--medium duration-200"
          onClick={handleLoadMore}
        >
          More
        </button>)}
      </div></div>
    </div>
  );
};

export default FacilitiesMain;
