import EventBox from "../components1/EventBox.jsx";
import { useEffect, useState } from "react";
import SearchInput from "../components1/SearchInput.jsx";
import axiosInstance from "../utils/axios.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../css/page/Contact.module.css";


const Event = () => {
  const limit = 6; // Number of cards to fetch per page
  const [newses, setNewses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const [searchTerm, setSearchTerm] = useState("");

  const isAuth = localStorage.getItem('isAuth');
  
  useEffect(() => {
    fetchNewses(currentPage, limit, searchTerm);
  }, [currentPage, searchTerm]);

  const fetchNewses = async (page, limit, searchTerm = "") => {
    const skip = (page - 1) * limit;
    const params = {
      skip,
      limit,
      searchTerm
    };
    try {
      const response = await axiosInstance.get('/news', { params });
      //console.log('API Response:', response.data);


      setNewses(response.data.newses);
      // Estimating total pages based on `hasMore` field
      const totalItems = response.data.hasMore ? (page * limit + 1) : (page * limit);
      const pages = Math.ceil(totalItems / limit);
      setTotalPages(pages);
      console.log('Total Pages:', pages); // Debugging output
    } catch (err) {
      //console.error(err);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Adds smooth scrolling effect
    });
  };

  const handleSearchTerm = (event) => {
    setCurrentPage(1); // Reset to first page when searching
    setSearchTerm(event.target.value);
  };

  const handleDelete = async (newsId) => {
    try {
      await axiosInstance.delete(`/news/${newsId}`);
      setNewses(newses.filter(news => news._id !== newsId));
      toast.info('Delete Success!');
    } catch (error) {
      console.error(error);
      toast.error('Delete Failed...');
    }
  };

  const navigate = useNavigate();
  const handleCreate = () => {
    console.log(`move to Create News!`)
    navigate('/newses/upload');
  }  

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg-white">
      <div  className={styles.contact4}>
      <div className="justify-end flex">
        <SearchInput 
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          onSearch={handleSearchTerm}
        />
      </div>
      {isAuth && (
        <div className="mt-2 flex justify-end mb-1">
          <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={handleCreate}>Create</button>
        </div>
      )}

      <div className="max-w-screen-3xl mx-auto p-2">
        <div className="grid grid-cols-3 grid-rows-2 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {newses.map(news => (
            <div className="p-2.5 transform transition-transform duration-200 hover:scale-105" key={news._id}>
              {isAuth && (
                <div className="mt-2 flex justify-left gap-2 mb-1"> 
                  <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={() => handleDelete(news._id)}>Delete</button>
                </div>
              )}
              <EventBox news={news} />
            </div>
          ))}
        </div>
      </div>

      <div className="justify-center flex mt-8">
        <nav className="inline-flex -space-x-px">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "-bg--medium -text--default-white"
                  : "-bg--color-silver -text--text-default-default"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </div></div>
    </div>
  );
};

export default Event;
