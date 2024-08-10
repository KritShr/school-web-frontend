import { useMemo, useCallback } from "react";
import { useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const NoticeItem = ({notice}) => {
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
    <div className="items-center justify-between py-7 px-10 w-full rounded-md -bg--default-white flex mb-3 shadow-xl 
                    hover:-shadow--medium" onClick={() => moveToDetail(notice._id)}>
    <h3 className="text-2xl font-medium">
      {notice.title}
    </h3>
    <h4 className="text-xl">
      {returnDate}
    </h4>
  </div>
  );
};

NoticeItem.propTypes = {
  notice: PropTypes.object.isRequired,
};

export default NoticeItem;
