import { useParams } from "react-router-dom";
import styles from "../css/page/NoticeDetail.module.css";
import stylesDetail from "../css/components/Notices.module.css";
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
    <div className={styles.noticeDetail}>
      <section className={styles.bodyWrapper}>
        <div className={styles.body}>
          <div className={[stylesDetail.notices].join(" ")}>
            <div className={stylesDetail.rectangle} />
            <div className={stylesDetail.noticeItem}>
              <h3 className={stylesDetail.title}>{notice.title}</h3>
              <div className={stylesDetail.noticeItemSeparator} />
              <div className={stylesDetail.september102021Wrapper}>
                <div className={stylesDetail.september102021}>{returnDate}</div>
              </div>
            </div>
            <div className={stylesDetail.descriptions}>
              <p className={stylesDetail.writeSomeDescriptions}>
                {notice.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticeDetail;
