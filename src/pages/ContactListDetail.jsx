import { useParams } from "react-router-dom";
import styles from "../css/page/Contact.module.css";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios.js"

const ContactListDetail = () => {
  const {contactlistId} = useParams();
  const [contactlist, setContactList] = useState([]);

  useEffect(()=>{
    async function fetchContactList() {
      try {
        const response = await axiosInstance.get(`/contacts/${contactlistId}?type=single`);
        setContactList(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContactList();
  },[contactlistId])
  var date = new Date(contactlist.updatedAt);
  var year = date.getFullYear().toString();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  
  var returnDate = year+"-"+month+"-"+day

  if(!contactlist) return(
    <div>No No</div>
  )

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg--default-white">
      <div className={styles.contact4}>
        <div className="mt-10 mb-10 isolate self-center -bg--color-gainsboro-100 py-10 px-10 rounded-md divide-y-2">          
          {/** title & date */}
          <div className="items-center justify-between py-7 w-full flex mb-3">
            <h2 className="text-4xl font-semibold">{contactlist.title}</h2>
            <h4 className="text-xl">{returnDate}</h4>
          </div>

          {/** name &email, descriptions */}
          <div>
            <div className="text-right text-xl">
              <h4>{contactlist.name}</h4>
              <h4>{contactlist.email}</h4>
            </div>
            <div className="text-xl leading-10 text-left py-10">
              {contactlist.description}
            </div>
          </div>
          
        </div>
      </div>
      </div>
      
  );
};

export default ContactListDetail;
