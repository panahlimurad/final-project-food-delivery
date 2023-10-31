import React from "react";

export default function EditModal(
  {
    // isEditModalOpen,
    // closeModal,
    // form: { title, infoImg, description, initialValues, inputs, buttonTitle }
  }
) {
  return (
    <div class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center" id="modal">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div class="relative bg-white p-8 rounded-lg w-[30%]">
        <div class="absolute top-0 right-0 pt-4 pr-4">
            <button class="text-gray-700" onclick="closeModal()">&times;</button>
        </div>
        <form className="text-black flex flex-col gap-4">
          <label> address</label>
            <input placeholder="address"/>
            <label> address</label>
            <input placeholder="address"/>
        </form>
    </div>
</div>
  );
}
