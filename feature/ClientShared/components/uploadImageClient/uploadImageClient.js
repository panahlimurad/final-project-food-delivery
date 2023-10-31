import Image from "next/image";
import uploadImageClient from "../../../../public/svg/uploadImageClient.svg";



function UploadImageClient({
  handleNewProductImage,
  fileInputRef,
  handleButtonClick,
  addProductImage
}) {

   
  return (
    <div className="w-[150px] h-[140px] bg-[#fff] rounded-full justify-center cursor-pointer shadow">
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
       {addProductImage ? <Image className="rounded-full w-[130px] h-[130px]" src={addProductImage} width={100} height={100} alt="upload-img" /> : <Image src={uploadImageClient} alt="upload-img" /> } 
        <span className={addProductImage ? `hidden` :`text-[#929292] text-lg font-medium` }>image</span>
      </label>
    </div>
  );
}

export default UploadImageClient;
