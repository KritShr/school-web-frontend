import { useCallback } from "react";
import { useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const ContactItem = ({contact}) => {
  var date = new Date(contact.updatedAt);
  var year = date.getFullYear().toString();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  
  var returnDate = year+"-"+month+"-"+day

  const navigate = useNavigate();

  const moveToDetail = useCallback((id) => {
    navigate(`/contact/${id}`);
  }, [navigate]);
  
  return (
    <div className="items-center justify-between py-7 px-10 w-full rounded-md -bg--default-white flex mb-3 shadow-xl 
                    hover:-shadow--medium" onClick={() => moveToDetail(contact._id)}>
    <h3 className="text-2xl font-medium">
      {contact.title}
    </h3>
    <h4 className="text-xl">
      {returnDate}
    </h4>
  </div>
  );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactItem;
