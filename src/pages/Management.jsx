import GroupComponent from "../components/GroupComponent";
import styles from "../css/page/Management.module.css";
import styles_c from "../css/page/Contact.module.css";

const Management = () => {
  return (
    <div className="px-20 py-10 sm:px-4 lg:px-80 -bg--default-white">
      <div className={styles_c.contact4}>
        
        {/** founder */}
        <div className="grid grid-cols-2 gap-3 lg:gap-10 sm:grid-cols-1 lg:grid-cols-2">
          {/** text */}
          <div className="flex flex-col justify-evenly">
            <h2 className="text-left text-4xl font-bold -text--medium">PRINCIPAL</h2>
            <h3 className="text-left text-3xl font-medium py-5">MR. KrishnaHari Ghawa Shrestha</h3>
            <h4 className="text-justify text-2xl font-normal">
              This is description. This is description. This is description. This is description. This is description.
              This is description. This is description. This is description. This is description. This is description.
              This is description. This is description. This is description. This is description. This is description.
              This is description. This is description. This is description. This is description. This is description.
              This is description. This is description. This is description. This is description. This is description. 
            </h4>
          </div>
          {/** image */}
          <div className="flex flex-col">
            <img alt="" src="/image-11@2x.png" loading="lazy"/>
          </div>
        </div>

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
