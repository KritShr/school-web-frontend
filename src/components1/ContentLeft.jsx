import SearchInput from "../components1/SearchInput";
import NoticeItem from "./NoticeItem";
import stylesBtn from "../css/components/Button.module.css";
import PropTypes from "prop-types";
import styles from "../css/components/ContentLeft.module.css";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios.js"


const ContentLeft = ({ className = "" }) => {
  const limit = 12; //가져올 카드 수
  const [notices, setNotices] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className={[styles.contentLeft, className].join(" ")}>
      <div className={styles.contentLeftTop}>
        <SearchInput 
          setSearchTerm = {setSearchTerm}
          searchTerm = {searchTerm}
          onSearch = {handleSearchTerm}
        />
        
        {/** notice 목록 */}
        <div className={styles.storyList}>
          {notices.map(notice=>
            <NoticeItem
              notice={notice} key={notice._id}
              propAlignSelf="stretch"
              propFlex="unset"
              rectangle14="/rectangle-14.svg"
            />
          )}
          
        </div>
      </div>
      <button
          className={[stylesBtn.button, className].join(" ")}
          onClick={handleLoadMore}
        >
        <div className={stylesBtn.txt}>More</div>
        <img className={stylesBtn.icon} alt="" src="/vector-1-11.svg" />
      </button>
    </div>
  );
};

ContentLeft.propTypes = {
  className: PropTypes.string,
};

export default ContentLeft;
