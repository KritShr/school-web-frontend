import SearchInput from "../../components/SearchInput.jsx";
import ContactItem from "./Sections/ContactItem.jsx";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios.js"
import styles from "../../Contact.module.css";
import { toast } from 'react-toastify';

const ContactList = () => {
  const limit = 5; //가져올 카드 수
  const [contacts, setContacts] = useState([]);
  const [skip, setSkip] = useState(0); // 이미지를 불러올 시작점
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchContacts(skip, limit, loadMore);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const fetchContacts = async(skip, limit, loadMore, searchTerm='') =>{
    const params = {
      skip,
      limit,
      searchTerm
    }
    try{
      const response = await axiosInstance.get('/contacts', {params})

      if(loadMore) { // 더 보기 클릭 시 현재 상품 state에 가져온 state 추가
        setContacts([...contacts, ...response.data.contacts]) 
      } else{
        setContacts(response.data.contacts);
      }
      setHasMore(response.data.hasMore);
      setLoadMore(false);
      
    } catch(err){
      console.error(err);
    }
  }

  const handleLoadMore = () =>{
    fetchContacts(skip+limit, limit, true, searchTerm);  
    setLoadMore(true);
    setSkip(skip+limit);
  }
  const handleSearchTerm = (event) => {
    setSkip(0);
    setSearchTerm(event.target.value);
    fetchContacts(0, limit, loadMore, event.target.value);
  }

  const handleDelete = async () => {
    try {
      // Loop through all contacts and send a delete request for each
      for (const contact of contacts) {
        await axiosInstance.delete(`/contacts/${contact._id}`);
      }
      
      // Clear the contacts array in the state after successful deletion
      setContacts([]);
      toast.info('Delete this page Successfully!')
      console.log('All contacts deleted.');
      await fetchContacts(0, limit, false, searchTerm);
    } catch (error) {
      console.error('Failed to delete contacts:', error);
      toast.error('Delete Failed...')
    }
  };
  console.log(contacts)
  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg-white">
      <div className={styles.contact4}>
      <div className="justify-end flex">
        <SearchInput 
          setSearchTerm = {setSearchTerm}
          searchTerm = {searchTerm}
          onSearch = {handleSearchTerm}
        />
      </div>
      <div className="mt-2 flex justify-start mb-1">
        <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={handleDelete}>Delete This Page</button>
      </div>
        
      {/** contact 목록 */}
      <div className="py-10">
        {contacts.map(contact=>
          <ContactItem
            contact={contact} key={contact._id}
          />
        )}
      </div>

      <div className="justify-end flex">
        {hasMore && <button
            className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base"
            onClick={handleLoadMore}
          >
          More
        </button>}
      </div></div>
    </div>
  );
};

export default ContactList;
