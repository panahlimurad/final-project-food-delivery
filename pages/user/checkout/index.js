import CheckoutPart from "../../../feature/ClientShared/components/CheckoutPart/CheckoutPart";
import CheckoutYourOrder from "../../../feature/ClientShared/components/CheckoutYourOrder/CheckoutYourOrder";

const Checkout = () => {
  return (
    <div className="flex w-full md:flex-nowrap flex-wrap-reverse">
      <CheckoutPart />
      <CheckoutYourOrder />
    </div>
  );
};
export default Checkout;
