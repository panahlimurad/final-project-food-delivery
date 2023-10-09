import React from "react";


const WorkText = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-center font-semibold text-2xl sm:text-3xl">How it Works</h1>
      <p className="text-center leading-9 font-medium text-base sm:text-lg">
        Delivery may be extended during sale periods. Please refer to the
        checkout page for an updated estimate for your location. Kindly note
        that once you have placed an order, it is no longer possible to modify
        your order. Taxes and duties are included in all product prices.It is
        possible to place an order with shipment to a different address than
        your home or billing address when paying with a credit card. Please note
        that Klarna payments require that your order is shipped to your
        registered home address.
      </p>
    </div>
  );
};

export default WorkText;
