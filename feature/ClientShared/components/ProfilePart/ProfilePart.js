import React from 'react'
import upload from '../../../../public/svg/upload.svg'
import Image from 'next/image'
const ProfilePart = () => {
  return (
<div className='flex w-full '>
    <div className='w-[961px] sm:px-8 py-12 sm:bg-[#F3F4F6] bg-[#FFFFFF] max-[1200px]:w-full'>

<h1 className='text-[#4F4F4F] text-[30px] h-8 font-semibold leading-6 sm:ml-0 ml-8 '>Profile</h1>
<div className='flex justify-center flex-wrap items-center'>


<Image width={146} height={174}  src={upload} />

</div>

<div className="mt-4 flex justify-center items-center ">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

<div >
      <label htmlFor="inputField" className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
      Contact
      </label>
      <input
        type="tel"
        id="inputField"
        className="mt-1 sm:bg-[#FFFFFF] bg-[#F3F4F6] p-2 border text-[#828282] leading-6 font-normal rounded  text-lg sm:w-[424px] h-[53px] w-[260px]  "
        placeholder="+994"
        />
        </div>

        <div>


      <label htmlFor="inputField" className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
      Email
      </label>
       <input
        type="email"
        id="inputField"
        className="mt-1 p-2 border sm:bg-[#FFFFFF] bg-[#F3F4F6] text-[#828282] leading-6 font-normal rounded  text-lg w-[250px] h-[53px] sm:w-[424px] "
        placeholder="rahimlisarkhan@gmail.com"
        /> 
        </div>


        <div className='mr-8'>


      <label htmlFor="inputField" className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
        Username
      </label>
      <input
      type="text"
      id="inputField"
      className="mt-1 p-2 border sm:bg-[#FFFFFF] bg-[#F3F4F6] text-[#828282] leading-6 font-normal rounded  text-lg w-[250px] h-[53px] sm:w-[424px] "
      placeholder="rahimlisarkhan"
      />
        </div>

        <div>


    <label htmlFor="inputField" className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
    Address
      </label>
       <input
    type="text"
    id="inputField"
    className="mt-1 p-2 border sm:bg-[#FFFFFF] bg-[#F3F4F6] text-[#828282] leading-6 font-normal rounded  text-lg w-[250px] h-[53px] sm:w-[424px] "
    placeholder="Ataturk 45 Ganclik Baku"
    />
    </div>

    <div className='mr-8'>


  <label htmlFor="inputField" className="block text-lg font-semibold leading-6 text-[#4F4F4F]">
  Full Name
      </label>
       <input
    type="text"
    id="inputField"
    className="mt-1 p-2 border sm:bg-[#FFFFFF] bg-[#F3F4F6] text-[#828282] leading-6 font-normal rounded  text-lg  w-[250px] sm:w-[424px] h-[53px]  "
    placeholder="Sarkhan Rahimli " 
    />
    </div>

    <div>

      <button className='bg-[#6FCF97]  w-[250px]  sm:w-[424px] h-[53px] mt-7 rounded text-[#FFFFFF] text-[18px] font-semibold leading-6' >Save</button>
    </div>
    </div>


    </div>
    </div>
    </div>
  )
}

export default ProfilePart