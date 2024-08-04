import Team1 from "../components1/Team1";
import styles from "../css/page/FacilitiesMain.module.css";

const FacilitiesMain = () => {
  
  return (
    <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.meetOurStaff}>
            <Team1 />
            <Team1 />
          </div>
        </div>
      
    </div>
  );
};

export default FacilitiesMain;
