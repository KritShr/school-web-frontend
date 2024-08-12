import styles from "../css/page/Gallery3A.module.css";
import { useState, useEffect } from "react"
import SearchInput from "../components1/SearchInput";
import axiosInstance from "../utils/axios"
import { useParams } from "react-router-dom";

const Gallery3A = () => {
  const {type} = useParams();

  const limit = 9; //가져올 카드 수
  const [galleries, setGalleries] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchGalleries(skip, limit, loadMore, type);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchGalleries = async(skip, limit, loadMore, type, searchTerm='') =>{
    const params = {
      skip,
      limit,
      type,
      searchTerm
    }
    try{
      const response = await axiosInstance.get('/galleries', {params})

      if(loadMore) { // 더 보기 클릭 시 현재 상품 state에 가져온 state 추가
        setGalleries([...galleries, ...response.data.galleries]) 
      } else{
        setGalleries(response.data.galleries);
        console.log(galleries)
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
      
    } catch(err){
      console.error(err);
    }
  }
  const handleLoadMore = () =>{
    fetchGalleries(skip+limit, limit, true, searchTerm);  
    setLoadMore(true);
    setSkip(skip+limit);
  }

  const handleSearchTerm = (event) => {
    setSkip(0);
    setSearchTerm(event.target.value);
    fetchGalleries(0, limit, loadMore, event.target.value);
  }
  
  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg-white">
      <div className={styles.contact4}>
        <h2>{type}</h2>
        <div className="justify-end flex">
          <SearchInput 
            setSearchTerm = {setSearchTerm}
            searchTerm = {searchTerm}
            onSearch = {handleSearchTerm}
          />
        </div>
          
        {/** gallery 목록 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 py-10">
          {galleries.map((gallery) => {
            const formattedDate = new Date(gallery.updatedAt).toLocaleDateString('en-CA');

            return (
              <div key={gallery.id} className="flex flex-col">
                <img
                  className="w-full h-full object-contain"
                  alt={gallery.title}
                  src={`${import.meta.env.VITE_SERVER_URL}/${gallery.image}`}
                />
                {/* Adjusted margin-top for tighter spacing */}
                <div className="flex mb-3 justify-between items-center text-lg text-gray-500">
                  <span>{gallery.title}</span>
                  <span>{formattedDate}</span>
                </div>
              </div>
            );
          })}
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
    </div>
  );
};

export default Gallery3A;
