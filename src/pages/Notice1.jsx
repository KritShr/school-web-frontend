import SearchInput from "../components1/SearchInput.jsx";
import NoticeItem from "../components1/NoticeItem.jsx";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios.js"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Notice1 = () => {
  const limit = 12; //가져올 카드 수
  const [notices, setNotices] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const isAuth = localStorage.getItem('isAuth');
  

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchNotices(skip, limit, loadMore);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const fetchNotices = async(skip, limit, loadMore, searchTerm='') =>{
    const params = {
      skip,
      limit,
      searchTerm
    }
    try{
      const response = await axiosInstance.get('/notices', {params})

      if(loadMore) { // 더 보기 클릭 시 현재 상품 state에 가져온 state 추가
        setNotices([...notices, ...response.data.notices]) 
      } else{
        setNotices(response.data.notices);
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
      
    } catch(err){
      console.error(err);
    }
  }

  const handleLoadMore = () =>{
    fetchNotices(skip+limit, limit, true, searchTerm);  
    setLoadMore(true);
    setSkip(skip+limit);
  }
  const handleSearchTerm = (event) => {
    setSkip(0);
    setSearchTerm(event.target.value);
    fetchNotices(0, limit, loadMore, event.target.value);
  }
  const navigate = useNavigate();
  const handleCreate = () => {
    console.log(`move to Create Notice!`)
    navigate('/notice/upload');
  }
  const handleDelete = async(noticeId)=>{
    try {
      await axiosInstance.delete(`/notices/${noticeId}`);
      setNotices(notices.filter(notice => notice._id !== noticeId));
      toast.info('Delete Success!');
    } catch (error) {
      console.error(error)
      toast.error('Delete Failed...');
    }
  }
  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg-white">
      <div className="justify-end flex">
        <SearchInput 
          setSearchTerm = {setSearchTerm}
          searchTerm = {searchTerm}
          onSearch = {handleSearchTerm}
        />
      </div>

      {isAuth && (
        <div className="mt-2 flex justify-end mb-1">
          <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={handleCreate}>Create</button>
        </div>
      )}
        
      {/** notice 목록 */}
      <div className="py-10">
        <div className="items-center justify-between py-7 px-10 w-full rounded-md -bg--default-white flex mb-3 shadow-xl hover:-shadow--medium hover:">
          <h3 className="text-2xl font-medium">
            This is Title
          </h3>
          <h4 className="text-xl">
            0000-00-00
          </h4>
        </div>
        {notices.map(notice=>
          <div className="flex">
            <NoticeItem notice={notice} key={notice._id} />
            {isAuth && (
              <div className="flex justify-left gap-3">
                <button className="-bg--color-silver px-4 py-2 mb-3 rounded-md hover:-bg--medium duration-200 text-base" onClick={() => handleDelete(notice._id)}>Delete</button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="justify-end flex">
        <button
            className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base"
            onClick={handleLoadMore}
          >
          More
        </button>
      </div>
    </div>
  );
};

export default Notice1;
