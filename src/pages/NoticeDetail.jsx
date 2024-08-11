import { useParams } from "react-router-dom";
import styles from "../css/page/Contact.module.css";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios.js"

const NoticeDetail = () => {
  const {noticeId} = useParams();
  const [notice, setNotice] = useState([]);

  useEffect(()=>{
    async function fetchNotice() {
      try {
        const response = await axiosInstance.get(`/notices/${noticeId}?type=single`);
        setNotice(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNotice();
  },[noticeId])
  var date = new Date(notice.updatedAt);
  var year = date.getFullYear().toString();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  
  var returnDate = year+"-"+month+"-"+day

  if(!notice) return null;

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg--default-white">
      <div className={styles.contact4}>
        <div className="mt-10 mb-10 isolate self-center -bg--color-gainsboro-100 py-10 px-10 rounded-md divide-y-2">
          {/** title & date */}
          <div className="items-center justify-between py-7 w-full flex mb-3">
            <h2 className="text-4xl font-semibold">{notice.title}</h2>
            <h4 className="text-xl">{returnDate}</h4>
          </div>

          {/** file download */}
          <div className="-bg--color-silver py-7 text-xl text-left">
            file.pdf
          </div>
          {/** descriptions */}
          <div className="text-xl leading-10 text-left py-7">
            {notice.description}
          </div>
        </div>
      </div>
      </div>
      
  );
};

export default NoticeDetail;
