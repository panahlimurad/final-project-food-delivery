import { useSelector } from "react-redux";
import CheckoutPart from "../../../feature/ClientShared/components/CheckoutPart/CheckoutPart";
import CheckoutYourOrder from "../../../feature/ClientShared/components/CheckoutYourOrder/CheckoutYourOrder";
import CheckouSuccess from "../../../feature/ClientShared/components/checkoutsuccess/CheckouSuccess";

const Checkout = () => {
  const isCheckOrder = useSelector((state) => state.checkOrder.checkOrderState);
console.log("state", isCheckOrder);
  return (
    <div className="flex w-full md:flex-nowrap flex-wrap-reverse">
      {isCheckOrder ? (
        <CheckouSuccess />
        ) : (
        <>
        <CheckoutPart />
        <CheckoutYourOrder />
        </>

      )}
    </div>
  );
};
export default Checkout;
