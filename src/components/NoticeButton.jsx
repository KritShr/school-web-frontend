import { useMemo } from "react";
import Button1 from "./Button1";
import PropTypes from "prop-types";
import styles from "../css/components/NoticeButton.module.css";

const NoticeButton = ({ className = "", propWidth }) => {
  const noticeButtonStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.noticeButton, className].join(" ")}
      style={noticeButtonStyle}
    >
      <Button1 />
    </div>
  );
};

NoticeButton.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default NoticeButton;
