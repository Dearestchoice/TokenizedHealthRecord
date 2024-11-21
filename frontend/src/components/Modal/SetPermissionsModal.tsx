import { useState } from "react";
import Modal from ".";

const SetPermissionsModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [formData, setFormData] = useState({
    permissionType: "",
    doctorName: "",
    status: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      {isOpen && (
        <Modal closeModal={closeModal} open={isOpen}>
          <form
            onSubmit={handleSubmit}
            className="text-white p-6 rounded-lg mx-auto shadow-md"
          >
            <h2 className="text-center text-2xl font-semibold mb-6">
              Set Permissions
            </h2>

            <label className="block mb-4">
              <span className="block text-sm font-medium">Permission Type</span>
              <select
                name="permissionType"
                value={formData.permissionType}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 focus:ring focus:ring-green-400"
              >
                <option value="" disabled>
                  Select Permission
                </option>
                <option value="View Health Records">View Health Records</option>
                <option value="Edit Health Records">Edit Health Records</option>
                <option value="Delete Health Records">
                  Delete Health Records
                </option>
              </select>
            </label>

            <label className="block mb-4">
              <span className="block text-sm font-medium">Doctor's Name</span>
              <input
                type="text"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 focus:ring focus:ring-green-400"
              />
            </label>

            <label className="block mb-4">
              <span className="block text-sm font-medium">Status</span>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 focus:ring focus:ring-green-400"
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </label>

            <div className="flex flex-col gap-2 justify-between">
              <button
                type="submit"
                className="bg-green-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    permissionType: "",
                    doctorName: "",
                    status: "",
                  })
                }
                className="bg-transparent border-2 border-red-500 text-red-500 font-semibold py-2 px-6 rounded-md hover:bg-red-500 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default SetPermissionsModal;
