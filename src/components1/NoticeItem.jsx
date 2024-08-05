import { useMemo, useCallback } from "react";
import { useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../css/components/Story.module.css";

const NoticeItem = ({notice}) => {
  const storyStyle = useMemo(() => {
    return {
      alignSelf: 'stretch',
      flex: 'unset',
    };
  }, []);

  var date = new Date(notice.updatedAt);
  var year = date.getFullYear().toString();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  
  var returnDate = year+"-"+month+"-"+day

  const navigate = useNavigate();

  const moveToDetail = useCallback((id) => {
    navigate(`/notice/${id}`);
  }, [navigate]);
  
  return (
    <div className={[styles.story].join(" ")} style={storyStyle} onClick={() => moveToDetail(notice._id)}>
      <img className={styles.storyChild} alt="" src={"/rectangle-14.svg"} />
      <div className={styles.title}>{notice.title}</div>
      <div className={styles.september102021}>{returnDate}</div>
    </div>
  );
};

NoticeItem.propTypes = {
  notice: PropTypes.object.isRequired,
};

export default NoticeItem;
