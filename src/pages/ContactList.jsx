import SearchInput from "../components1/SearchInput.jsx";
import ContactItem from "../components1/ContactItem.jsx";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios.js"

const ContactList = () => {
  const limit = 12; //가져올 카드 수
  const [contact, setContact] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchContact(skip, limit, loadMore);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const fetchContact = async(skip, limit, loadMore, searchTerm='') =>{
    const params = {
      skip,
      limit,
      searchTerm
    }
    try{
      const response = await axiosInstance.get('/contact', {params})

      if(loadMore) { // 더 보기 클릭 시 현재 상품 state에 가져온 state 추가
        setContact([...contact, ...response.data.contact]) 
      } else{
        setContact(response.data.contact);
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
      
    } catch(err){
      console.error(err);
    }
  }

  const handleLoadMore = () =>{
    fetchContact(skip+limit, limit, true, searchTerm);  
    setLoadMore(true);
    setSkip(skip+limit);
  }
  const handleSearchTerm = (event) => {
    setSkip(0);
    setSearchTerm(event.target.value);
    fetchContact(0, limit, loadMore, event.target.value);
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
        
      {/** contact 목록 */}
      <div className="py-10">
        <div className="items-center justify-between py-7 px-10 w-full rounded-md -bg--default-white flex mb-3 shadow-xl hover:-shadow--medium hover:">
          <h3 className="text-2xl font-medium">
            This is Title
          </h3>
          <h4 className="text-xl">
            0000-00-00
          </h4>
        </div>
        {contact.map(contact=>
          <ContactItem
            contact={contact} key={contact._id}
          />
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

export default ContactList;
