import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContentLeft from "../components/ContentLeft";
import styles from "./Notice1.module.css";

const Notice1 = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.notice}>
      <section className={styles.subHeaderParent}>
        <div className={styles.contentLeftWrapper}>
          <ContentLeft />
        </div>
      </section>
    </div>
  );
};

export default Notice1;
