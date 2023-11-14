import LayoutUser from "../../../feature/ClientShared/components/LayoutUser/LayoutUser";
import YourOrder from "../../../feature/ClientShared/components/yourorder/YourOrder";
import LayoutClient from "../../../layoutClient/LayoutClient";

const Orders = () => {
  return (
    <LayoutClient>
      <LayoutUser>
        <YourOrder />
      </LayoutUser>
    </LayoutClient>
  );
};
export default Orders;
