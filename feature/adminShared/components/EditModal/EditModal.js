import React from "react";

const EditModal = ({ isEditModalOpen, openEditModal, closeEditModal, form }) => {
  const { title, infoImg, description, initialValues, inputs, buttonTitle } = form;

  return (
    <>
      {isEditModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative bg-white p-8 rounded-lg w-[30%]">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button className="text-gray-700" onClick={closeEditModal}>
                &times;
              </button>
            </div>
            <form className="text-black flex flex-col gap-4">
              {inputs?.map((field, id) => {
                switch (field.type) {
                  case "text":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label htmlFor={field.name} className="text-sm font-medium">
                          {field.label}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          id={field.name}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg px-4 mt-3 h-[46px] focus:border"
                        />
                      </div>
                    );
                  case "textarea":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label htmlFor={field.name} className="text-sm font-medium">
                          {field.label}
                        </label>
                        <textarea
                          id={field.name}
                          name={field.name}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg p-4 mt-3 h-[133px] resize-none focus:border"
                        ></textarea>
                      </div>
                    );
                  case "number":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label htmlFor={field.name} className="text-sm font-medium">
                          {field.label}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          id={field.name}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg px-4 mt-3 h-[46px] focus:border"
                        />
                      </div>
                    );
                  case "select":
                    return (
                      <div className="form-group mb-5" key={id}>
                        <label htmlFor={field.name} className="text-sm font-medium">
                          {field.label}
                        </label>
                        <select
                          type="text"
                          name={field.name}
                          id={field.name}
                          autoComplete={field.name}
                          className="bg-[#5A5B70] outline-none w-full rounded-lg px-4 mt-3 h-[46px] focus:border"
                        >
                          <option>Salam</option>
                        </select>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
