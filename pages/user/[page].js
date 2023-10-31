import { useRouter } from "next/router";
import React from "react";
import ProfilePart from "../../feature/ClientShared/components/ProfilePart/ProfilePart";
import Basket from "./basket";
import YourOrder from "../../feature/ClientShared/components/yourorder/YourOrder";
import Checkout from "./checkout";

const userPage = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div>
      {page === "profile" && <ProfilePart />}
      {page === "orders" && <YourOrder />}
      {page === "basket" && <Basket />}
      {page === "checkout" && <Checkout />}
    </div>
  );
};

export default userPage;
