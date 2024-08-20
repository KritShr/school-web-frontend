import { useParams, useNavigate } from "react-router-dom";
import styles from "../../Contact.module.css";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios.js"

const NoticeDetail = () => {
  const {noticeId} = useParams();
  const [notice, setNotice] = useState([]);
  const isAuth = localStorage.getItem('isAuth');

  useEffect(()=>{
    async function fetchNotice() {
      try {
        const response = await axiosInstance.get(`/notices/${noticeId}?type=single`);
        setNotice(response.data[0]);
        console.log(notice)
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

  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate(`/notice/update/${noticeId}`);
  }

  if(!notice) return(
    <div>No Notice</div>
  )

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg--default-white">
      <div className={styles.contact4}>
        {isAuth ==='true'&& (
          <div className="mt-2 flex justify-end mb-1">
            <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={handleUpdate}>
              Update
            </button>
          </div>
        )}
        <div className="mt-10 mb-10 isolate self-center -bg--color-gainsboro-100 py-10 px-10 rounded-md divide-y-2">
          {/** title & date */}
          <div className="items-center justify-between py-7 w-full flex mb-3">
            <h2 className="text-4xl font-semibold">{notice.title}</h2>
            <h4 className="text-xl">{returnDate}</h4>
          </div>

          {/** File Download */}
          {notice.files && notice.files.length > 0 ? (
            <div className="-bg--color-silver gap-3 text-xl text-left">
              <ul>
                {notice.files.map((file, index) => (
                  <li key={index} className="py-1"> 
                    <a
                      href={`${process.env.VITE_SERVER_URL}/${file}`}
                      download
                      className="-text--text-default-default hover:-text--medium"
                    >
                      {file}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="-bg--color-silver py-7 text-xl text-left">
              No files available
            </div>
          )}

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
