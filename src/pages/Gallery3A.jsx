import stylesBtn from "../css/components/Button.module.css";
import styles from "../css/page/Gallery3A.module.css";
import { useState, useEffect } from "react"
import SearchInput from "../components1/SearchInput";
import axiosInstance from "../utils/axios"

const Gallery3A = () => {
  const limit = 9; //가져올 카드 수
  const [galleries, setGalleries] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchGalleries(skip, limit, loadMore);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchGalleries = async(skip, limit, loadMore, searchTerm='') =>{
    const params = {
      skip,
      limit,
      searchTerm
    }
    try{
      const response = await axiosInstance.get('/galleries', {params})

      if(loadMore) { // 더 보기 클릭 시 현재 상품 state에 가져온 state 추가
        setGalleries([...galleries, ...response.data.galleries]) 
      } else{
        setGalleries(response.data.galleries);
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
    <div className={styles.gallery3a}>
      <main className={styles.subHeaderParent}>
        <section className={styles.galleryWrapper}>
          <div className={styles.gallery4}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle6.svg"
            />
            <div className={styles.image}>
              <div className={styles.imageChild} />
              <img className={styles.imageItem} alt="" />
              <img className={styles.imageInner} alt="" />
              <div className={styles.overlay}>
                <div className={styles.overlayChild} />
                <div className={styles.icon}>
                  <div className={styles.iconBd} />
                  <img className={styles.volleyballBallIcon} alt="" />
                  <div className={styles.div}></div>
                  <img className={styles.iconChild} alt="" />
                  <img className={styles.iconItem} alt="" />
                </div>
                <div className={styles.text}>
                  AfLorem ipsum dolor sit amet, consectetur adcing elit.
                </div>
              </div>
            </div>
            <div className={styles.galleryContainer}>
              <div className={styles.galleryItems}>
                <div className={styles.galleryTitleContainer}>
                  <h3 className={styles.ourGallery}>
                    <span>{` `}</span>
                    <span className={styles.our}>Our</span>
                    <span> Gallery</span>
                  </h3>
                  <div className={styles.galleryDivider}>
                    <div className={styles.titleDivider} />
                  </div>
                </div>
                <div className={styles.imageRow}>
                  <div className={styles.imagePlaceholder} />
                </div>
              </div>
            </div>
            <SearchInput 
              setSearchTerm = {setSearchTerm}
              searchTerm = {searchTerm}
              onSearch = {handleSearchTerm}
            />
            <div className={styles.imageCarousel}>
              <div className={styles.carouselImages}>
                {galleries.map((gallery)=>(
                  <div key={gallery.image}>
                    <img
                      className={styles.imageIcon10}
                      alt={gallery.title}
                      src={`${import.meta.env.VITE_SERVER_URL}/${gallery.image}`}
                    />
                  </div>
                ))}
                
              </div>
              <div className={styles.carouselButtons}>
                <button
                  className={[stylesBtn.button].join(" ")}
                  onClick={handleLoadMore}
                >
                  <div className={stylesBtn.txt}>More</div>
                  <img className={stylesBtn.icon} alt="" src="/vector-1-11.svg" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery3A;
