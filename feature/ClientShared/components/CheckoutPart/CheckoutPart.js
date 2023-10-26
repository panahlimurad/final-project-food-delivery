import React from "react";

const CheckoutPart = () => {
  return (
    <>
      <div className="sm:ml-5 mr-2 px-12 py-12 w-full md:bg-[#F3F4F6] bg-[#FFFFFF]">
        <h1 className="text-[#4F4F4F] text-[30px] h-8 font-semibold leading-6 md:ml-0 ml-8 hidden md:block">
          Checkout
        </h1>

        <div className="flex justify-center flex-wrap items-center">
          <div className="mt-4 flex justify-center items-center  ">
            <div className="grid grid-cols-1  gap-3 h-full">
              <div>
                <label
                  htmlFor="inputField"
                  className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="inputField"
                  className="mt-1 p-2 border text-[#828282] leading-6 font-normal rounded text-xl  w-[260px] h-[53px] sm:w-[320px] xl:w-[360px] md:bg-[#FFFFFF] bg-[#F3F4F6] "
                  placeholder="Ataturk 45 Ganclik Baku"
                />
              </div>

              <div>
                <label
                  htmlFor="inputField"
                  className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="inputField"
                  className="mt-1 p-2 border text-[#828282] leading-6 font-normal rounded text-xl  sm:w-[320px] xl:w-[360px]  h-[53px] w-[260px]  md:bg-[#FFFFFF] bg-[#F3F4F6] "
                  placeholder="+994"
                />
              </div>

              <div>
                <label
                  htmlFor="inputField"
                  className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
                  Payment Method
                </label>

                <div className="flex justify-between  mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2   gap-3">
                    <div className="flex items-center  ">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5  text-green-500"
                      />
                      <label className="text-[#6FCF97] text-sm ml-2 font-normal leading-6">
                        pay at the door by credit card
                      </label>
                    </div>

                    <div className="flex items-center ">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5  text-green-500"
                      />
                      <label className="text-[#6FCF97] text-sm ml-2 font-normal leading-6">
                        pay at the door by credit card
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="bg-[#6FCF97]  w-[260px]  sm:w-[320px] xl:w-[360px]  h-[53px] mt-7 rounded text-[#FFFFFF] text-[18px] font-semibold leading-6 hover:bg-[#1b6339]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPart;
