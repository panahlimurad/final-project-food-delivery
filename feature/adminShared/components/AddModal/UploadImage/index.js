import Image from "next/image";
import UploadIcon from "../../../../../public/uploadIcon.svg";



function UploadImage({
  handleNewProductImage,
  fileInputRef,
  handleButtonClick,
}) {

  return (
    <div className=" h-[122px] bg-[#43445A] rounded-lg flex items-center justify-center cursor-pointer mb-20 shadow">
      <input
        type="file"
        accept="image/*"
        onChange={(e)=>handleNewProductImage(e)}
        ref={fileInputRef}
        className="hidden"
      />
      <label
        onClick={handleButtonClick}
        className="w-full h-full flex items-center justify-center flex-col cursor-pointer"
      >
        <Image src={UploadIcon} alt="upload-img" />
        <span className="text-gray text-lg font-medium">  upload </span>
      </label>
    </div>
  );
}

export default UploadImage;
