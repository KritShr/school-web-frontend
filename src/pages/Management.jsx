import GroupComponent from "../components/GroupComponent";
import styles from "../css/page/Management.module.css";
import styles_c from "../css/page/Contact.module.css";

const Management = () => {
  return (
    <div className="px-20 py-10 sm:px-4 lg:px-80 -bg--default-white">
      <div className={styles_c.contact4}>

        {/** team */}
        <div className="-bg--color-silver py-10 px-10 flex-col">
          <h2 className="text-left text-4xl font-bold -text--medium text-center">Meet Our Team</h2>
          <div className="-bg--default-white rounded-md">
            <div>
              <img alt="" src="/image-11@2x.png" loading="lazy"/>
              <h6>This is role.</h6>
              <h3>name</h3>
              <h4>This is description.</h4>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Management;
