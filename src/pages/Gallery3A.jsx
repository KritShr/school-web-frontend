import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axios";
import SearchInput from "../components1/SearchInput";
import GalleryBox from "../components1/GalleryBox";  // Import GalleryBox component
import styles from "../css/page/Gallery3A.module.css";

const Gallery3A = () => {
  const { type } = useParams();

  const limit = 9; // Number of cards to fetch
  const [galleries, setGalleries] = useState([]);
  const [skip, setSkip] = useState(0); // Starting point for fetching images
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch galleries when component mounts or when 'type' changes
    fetchGalleries(0, limit, false, type, searchTerm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const fetchGalleries = async (skip, limit, loadMore, type, searchTerm = '') => {
    const params = {
      skip,
      limit,
      type,
      searchTerm
    };
    try {
      const response = await axiosInstance.get('/galleries', { params });

      if (loadMore) { // Append new galleries to the existing list when loading more
        setGalleries(prevGalleries => [...prevGalleries, ...response.data.galleries]);
      } else {
        setGalleries(response.data.galleries);
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoadMore = () => {
    fetchGalleries(skip + limit, limit, true, type, searchTerm);  
    setLoadMore(true);
    setSkip(skip + limit);
  };

  const handleSearchTerm = (event) => {
    setSkip(0);
    setSearchTerm(event.target.value);
    fetchGalleries(0, limit, false, type, event.target.value);
  };
  
  const getGalleryTitle = () => {
    switch (type) {
      case 'school':
        return "School Activities";
      case 'volunteer':
        return "Volunteers";
      default:
        return "Gallery";
    }
  };

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg-white">
      <div className={styles.contact4}>
      <h2 className="text-4xl font-bold text-center mt-8 mb-4">
      {getGalleryTitle()}
      </h2>
        <div className="justify-end flex">
          <SearchInput 
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            onSearch={handleSearchTerm}
          />
        </div>
          
        {/** Gallery list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 py-10">
          {galleries.map((gallery) => (
            <GalleryBox key={gallery._id} gallery={gallery} />  // Render GalleryBox for each gallery
          ))}
        </div>

        <div className="justify-end flex">
          {hasMore && (
            <button
              className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base"
              onClick={handleLoadMore}
            >
              More
            </button>
          )}
        </div>
      </div> 
    </div>
  );
};

export default Gallery3A;
