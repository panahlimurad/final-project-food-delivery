import React from 'react'

const CheckoutPart = () => {
  return (
   <>
   
   
   <div className='w-[618px]  mt-5   sm:px-8 py-12 sm:bg-[#F3F4F6] bg-[#FFFFFF]'>

   <h1 className='text-[#4F4F4F] text-[30px] h-8 font-semibold leading-6 sm:ml-0 ml-8'>Checkout</h1>

   <div className='flex justify-center flex-wrap items-center'>


   <div className="mt-4 flex justify-center items-center ">
<div className="grid grid-cols-1  gap-3">


<div>

<label htmlFor="inputField" className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
Delivery Address
  </label>
   <input
type="text"
id="inputField"
className="mt-1 p-2 border text-[#828282] leading-6 font-normal rounded text-xl w-[286px] h-[53px] sm:w-[542px] sm:bg-[#FFFFFF] bg-[#F3F4F6] "
placeholder="Ataturk 45 Ganclik Baku"
/>
</div>

<div >
      <label htmlFor="inputField" className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
      Contact Number
      </label>
      <input
        type="tel"
        id="inputField"
        className="mt-1 p-2 border text-[#828282] leading-6 font-normal rounded text-xl sm:w-[542px] h-[53px] w-[286px]  sm:bg-[#FFFFFF] bg-[#F3F4F6] "
        placeholder="+994"
        />
        </div>


        <div>

<label htmlFor="inputField" className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
Payment Method
      </label>

      <div className='flex justify-between  mt-2'>


      <div className="grid grid-cols-1 sm:grid-cols-2   gap-3">

      <div className="flex items-center  ">
      <input
        type="radio"
        
       
        className="form-radio h-5 w-5  text-green-500"
      />
     <label className="text-[#6FCF97] text-sm ml-2 font-normal leading-6">pay at the door by credit card</label>
      
    </div>

     <div className="flex items-center ">
      <input
        type="radio"
       
        className="form-radio h-5 w-5  text-green-500"
        />
      <label className="text-[#6FCF97] text-sm ml-2 font-normal leading-6">pay at the door by credit card</label>
      
    </div>
        </div>

</div>
</div>


        <div>

<button className='bg-[#6FCF97]  w-[286px]  sm:w-[542px] h-[53px] mt-7 rounded text-[#FFFFFF] text-[18px] font-semibold leading-6 hover:bg-[#1b6339]' >Checkout</button>
</div>


    </div>

    </div>

   </div>


   </div>
   
   
   </>
  )
}

export default CheckoutPart