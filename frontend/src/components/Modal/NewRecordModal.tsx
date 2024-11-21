import { useState } from "react";
import Modal from ".";

const NewRecordModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [formData, setFormData] = useState({
    recordName: "",
    doctorName: "",
    date: "",
    file: null as File | null,
    enableTokenization: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add further submission logic here
  };

  return (
    <>
      {isOpen && (
        <Modal closeModal={closeModal} open={isOpen}>
          <form
            onSubmit={handleSubmit}
            className="text-white p-6 rounded-lg mx-auto shadow-md overflow-y-scroll max-h-[80vh] no-scrollbar"
          >
            <h2 className="text-center text-2xl font-semibold mb-6">
              Add New Record
            </h2>

            <label className="block mb-4">
              <span className="block text-sm font-medium">Record Name</span>
              <input
                type="text"
                name="recordName"
                value={formData.recordName}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 focus:ring focus:ring-green-400"
              />
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
              <span className="block text-sm font-medium">Date</span>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 focus:ring focus:ring-green-400"
              />
            </label>

            <label className="block mb-4">
              <span className="block text-sm font-medium">Upload File</span>
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                className="w-full mt-1 p-2 rounded-md bg-gray-900 text-gray-400 border border-gray-700 focus:ring focus:ring-green-400"
              />
            </label>

            <label className="flex items-center mb-6">
              <input
                type="checkbox"
                name="enableTokenization"
                checked={formData.enableTokenization}
                onChange={handleInputChange}
                className="h-4 w-4 text-green-400 bg-gray-900 border-gray-700 focus:ring-green-400"
              />
              <span className="ml-2 text-sm font-medium">
                Enable Tokenization
              </span>
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
                    recordName: "",
                    doctorName: "",
                    date: "",
                    file: null,
                    enableTokenization: false,
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

export default NewRecordModal;
