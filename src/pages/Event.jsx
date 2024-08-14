import EventBox from "../components1/EventBox.jsx";
import { useEffect, useState } from "react";
import SearchInput from "../components1/SearchInput.jsx";
import axiosInstance from "../utils/axios.js"

const Event = () => {
  const limit = 9; //가져올 카드 수
  const [newses, setNewses] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchNewses(skip, limit, loadMore);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchNewses = async(skip, limit, loadMore, searchTerm='') =>{
    const params = {
      skip,
      limit,
      searchTerm
    }
    try{
      const response = await axiosInstance.get('/news', {params})

      if(loadMore) { // 더 보기 클릭 시 현재 상품 state에 가져온 state 추가
        setNewses([...newses, ...response.data.newses]) 
      } else{
        setNewses(response.data.newses);
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
      console.log(newses);
      
    } catch(err){
      console.error(err);
    }
  }

  const handleLoadMore = () =>{
    fetchNewses(skip+limit, limit, true, searchTerm);  
    setLoadMore(true);
    setSkip(skip+limit);
  }
  const handleSearchTerm = (event) => {
    setSkip(0);
    setSearchTerm(event.target.value);
    fetchNewses(0, limit, loadMore, event.target.value);
  }


  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg-white"> {/* 전체 화면을 채우도록 수정 */}
      <div className="justify-end flex">
        <SearchInput 
          setSearchTerm = {setSearchTerm}
          searchTerm = {searchTerm}
          onSearch = {handleSearchTerm}
        />
      </div>

      <div className="max-w-screen-3xl mx-auto p-2"> {/* 중간에 정렬 */}
        <div className="grid grid-cols-3 grid-rows-2 gap-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-128 bg-white rounded-xl shadow-2xl">
            

            {/* 이미지 추가: Admin Login 텍스트 바로 아래에 배치 */}
            <div className="flex justify-center">
              <div className="relative w-full h-96"> {/* 4:3 비율 (2배 크기) */}
                <img 
                  src='image-8@2x.png'  // public 폴더의 이미지 파일 경로
                  alt=""
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center mt-3 pr-5 pl-5 truncate">
              Event Title
            </h1>
            <h1 className="text-l font-semibold text-right mt-2 pr-5">
              0000-00-00
            </h1>
            <h1 className="text-xl font-medium text-left mt-1 p-5 truncate">
              this is description this is description this is description this is description
              this is description this is description this is description
            </h1>

            <div className="m-5 flex justify-end"> {/* 부모 요소에 중앙 정렬 적용 */}
              <button 
                className="-bg--color-silver text-2xl font-bold bg-black text-white px-4 py-2 items-center rounded-md 
                          hover:-bg--medium duration-200 " 
              >
                More
              </button>
            </div>
          </div>
          

          {newses.map(news=>
            <div className="p-2.5">
              <EventBox
                news={news} key={news._id}
              />
            </div>
          )}
        </div>
      </div>

      <div className="justify-end flex">
        <button
            className="-bg--color-silver text-white inline-flex px-4 py-2 text-2xl font-bold rounded-md hover:-bg--medium duration-200"
            onClick={handleLoadMore}
          >
          More
        </button>
      </div>
    </div>
  );
};

export default Event;

