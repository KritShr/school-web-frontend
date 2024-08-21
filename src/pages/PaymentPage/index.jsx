//import GroupComponent from "../components/GroupComponent";
import styles from "../../Contact.module.css";

const Payment = () => {
  return (
    <div className="px-20 py-10 sm:px-4 lg:px-80 -bg--default-white">
      <div className={styles.contact4}>
        
        
        {/** image */}
        <div className="flex flex-col items-center">
          <img alt="" src="/cla_payment.png" loading="lazy" className="w-full h-auto max-w-none" style={{ maxWidth: '500px' }} />
        </div>

        <h3 className="text-left text-3xl font-medium py-5">
          <span className="-text--medium">Bank A/C Name :</span> Creative Learnerss Academy
        </h3>
        <h3 className="text-left text-3xl font-medium py-5">
          <span className="-text--medium">Account Number :</span> 2222440002306765
        </h3>
        <h3 className="text-left text-3xl font-medium py-5">
          <span className="-text--medium">Name of Bank :</span> Nepal Investment Mega Bank, Thimi
        </h3>
      </div>
    </div>
  );
};

export default Payment;
