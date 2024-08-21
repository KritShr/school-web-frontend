//import GroupComponent from "../components/GroupComponent";
import styles from "../Contact.module.css";

const Payment = () => {
  return (
    <div className="px-20 py-10 sm:px-4 lg:px-80 -bg--default-white">
      <div className={styles.contact4}>
        
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

        

      </div>
    </div>
  );
};

export default Payment;
