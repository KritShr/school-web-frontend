import Search from "./Search";
import Story from "./Story";
import Button2 from "./Button2";
import PropTypes from "prop-types";
import styles from "./ContentLeft.module.css";

const ContentLeft = ({ className = "" }) => {
  return (
    <div className={[styles.contentLeft, className].join(" ")}>
      <div className={styles.contentLeftTop}>
        <div className={styles.contentSearch}>
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              <h3 className={styles.notice}>Notice</h3>
            </div>
            <div className={styles.searchIcon}>
              <div className={styles.storyBackground} />
              <div className={styles.searchIconClose}>
                <div className={styles.storyForeground} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchButton}>
          <Search value="Value" />
        </div>
        <div className={styles.storyList}>
          <Story rectangle14="/rectangle-14.svg" />
          <Story
            propAlignSelf="stretch"
            propFlex="unset"
            rectangle14="/rectangle-14.svg"
          />
          <Story
            propAlignSelf="stretch"
            propFlex="unset"
            rectangle14="/rectangle-14.svg"
          />
          <Story
            propAlignSelf="stretch"
            propFlex="unset"
            rectangle14="/rectangle-14.svg"
          />
          <div className={styles.storyItem}>
            <Story
              propAlignSelf="unset"
              propFlex="1"
              rectangle14="/rectangle-14.svg"
            />
          </div>
        </div>
      </div>
      <Button2 nextPage="Next page" />
    </div>
  );
};

ContentLeft.propTypes = {
  className: PropTypes.string,
};

export default ContentLeft;
