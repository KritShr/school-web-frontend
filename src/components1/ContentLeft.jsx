import Search from "../components/Search";
import Story from "./Story";
import stylesBtn from "../css/components/Button.module.css";
import PropTypes from "prop-types";
import styles from "../css/components/ContentLeft.module.css";
import { useCallback } from "react";


const ContentLeft = ({ className = "" }) => {

  const onButtonClick = useCallback(() => {
    //다음 notice 가져오기
  }, []);

  return (
    <div className={[styles.contentLeft, className].join(" ")}>
      <div className={styles.contentLeftTop}>
        <div className={styles.searchButton}>
          <Search value="Value" />
        </div>
        <div className={styles.storyList}>
          <Story
            propAlignSelf="stretch"
            propFlex="unset"
            rectangle14="/rectangle-14.svg"
          />
        </div>
      </div>
      <button
          className={[stylesBtn.button, className].join(" ")}
          onClick={onButtonClick}
        >
        <div className={stylesBtn.txt}>More</div>
        <img className={stylesBtn.icon} alt="" src="/vector-1-11.svg" />
      </button>
    </div>
  );
};

ContentLeft.propTypes = {
  className: PropTypes.string,
};

export default ContentLeft;
