import React, { useState } from 'react'
import { IoIosArrowDropleftCircle } from 'react-icons/io' // Back arrow icon
import { useNavigate } from 'react-router-dom' // Navigation hook
import UploadIcon from '../../../assets/upload_blue_icon.png' // Upload icon image
import { FaCheckCircle } from "react-icons/fa" // Checkmark icon for popup

const UploadFilesSection = () => {
  const navigate = useNavigate(); // To navigate between pages
  const [title, setTitle] = useState(""); // State for session title
  const [url, setUrl] = useState(""); // State for session URL
  const [description, setDescription] = useState(""); // State for session description
  const [price, setPrice] = useState(1400.00); // State for session price
  const [selectedFile, setSelectedFile] = useState(null); // State for uploaded file
  const [isPopupVisible, setPopupVisible] = useState(false); // State for popup visibility
  const [error, setError] = useState(); // State for validation errors

  // Function to handle the "Create" button click
  const handleCreate = () => {
    if (!title || !url || !description) {
      setError("Please fill out all required fields");
      return;
    }

    setError('');
    togglePopup(); // Show the success popup
  };

  // Function to toggle the visibility of the popup
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Update the selected file state
  };

  // Function to handle file upload
  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading:", selectedFile.name); // Log the file name
    }
  };

  // Function to handle price slider change
  const handleChange = (e) => {
    setPrice(parseFloat(e.target.value)); // Update the price based on slider value
  };

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px] gap-2'>
      
      {/* Back button to navigate to the previous page */}
      <div className='absolute top-6 left-6 cursor-pointer'>
        <IoIosArrowDropleftCircle 
          onClick={() => { navigate('/tutor/upload_kuppi') }} 
          className='text-[40px] text-blue-500' 
        />
      </div>

      {/* Page title */}
      <div>
        <span className='text-[24pt] font-semibold'>Upload Files Section</span>
      </div>

      {/* Main content section */}
      <div className='w-full h-full flex flex-col rounded-lg bg-white gap-5 px-5 py-7'>

        {/* File upload area */}
        <div className='w-full h-full flex flex-row justify-center items-center gap-5 my-6'>
          <div className='w-[205px] h-full p-8 border-[3px] border-gray-400 rounded-lg'>
            <img src={UploadIcon} alt="upload-icon" className='w-full h-auto object-contain' />
          </div>
          <div className='w-[400px] h-full flex flex-col gap-4'>
            <span className='text-[16pt] font-medium'>Course Image</span>
            <p className='text-[12pt] font-normal'>
              Upload your course's image here. It must meet our 
              <a className='text-blue-500 underline' href='/tutor/upload_files'>Course image quality</a> standards to be accepted. 
              Important guidelines: 750x422 pixels; .jpg, .jpeg, .gif, or .png; no text on the image.
            </p>
            <div className="flex border-2 items-center rounded-lg border-gray-300">
              {/* File input */}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="fileInput"
                className="flex-grow py-2 px-4 bg-white rounded-lg cursor-pointer"
              >
                {selectedFile ? selectedFile.name : "No file selected"}
              </label>
              <button
                onClick={handleUpload}
                className="py-2 px-4 border-l-2 border-gray-300 hover:bg-gray-200 rounded-r-lg"
              >
                Upload File
              </button>
            </div>
          </div>
        </div>

        {/* Form for session details */}
        <div className='w-full h-full flex flex-row px-3 gap-12'>
          <div className='w-8/12 h-auto flex flex-col gap-4'>
            {/* Session title input */}
            <div className="w-auto h-auto flex flex-col gap-1">
              <label htmlFor="Session Title" className="font-medium">
                Session Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
                placeholder="Enter Session Title"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Session URL input */}
            <div className="w-auto h-auto flex flex-col gap-1">
              <label htmlFor="Session URL" className="font-medium">
                Session URL
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => { setUrl(e.target.value) }}
                placeholder="Enter Session URL"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Description input */}
            <div className="w-auto h-auto flex flex-col gap-1">
              <label htmlFor="Description" className="font-medium">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
                placeholder="Enter Session Description"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Price slider */}
          <div className='w-4/12 h-auto flex flex-col gap-3'>
            <div className="w-full flex flex-col px-5 bg-gray-200 rounded-lg shadow-md py-6 gap-1">
              <label className="block text-gray-700 text-[14pt] font-medium mb-2">
                Kuppi Price
              </label>
              <div className="flex flex-row items-center justify-between">
                <span className="text-gray-600 text-[14pt] font-medium">Rs.</span>
                <input
                  type="text"
                  readOnly
                  value={price.toFixed(2)}
                  className="w-20 px-2 py-1 text-center border border-gray-300 rounded-md bg-gray-100 font-medium text-gray-800"
                />
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="50"
                value={price}
                onChange={handleChange}
                className="mt-4 w-full h-2 bg-blue-300 rounded-full appearance-none cursor-pointer"
              />
            </div>
            {/* Error message */}
            <p className="w-full h-[30pt] flex items-center text-[12pt] text-red-500 font-medium px-5">{error}</p>
            <button onClick={handleCreate} className='w-full h-auto py-3 text-[14pt] font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg'>
              Create
            </button>
          </div>
        </div>
      </div>

      {/* Popup for success message */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[600px] p-6 rounded-lg shadow-lg flex flex-col gap-8 justify-center items-center">
            {/* Popup close button */}
            <div className="w-full flex justify-end items-center">
              <button onClick={togglePopup} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <FaCheckCircle className='text-[96pt] text-blue-500' />
            <div className='w-full h-full flex flex-col justify-center gap-1'>
              <span className='text-[18pt] text-blue-500 font-medium text-center'>Kuppi Session Upload Successfully</span>
            </div>
            <button onClick={() => { navigate('/tutor/home') }} className='w-[200px] py-3 text-[12pt] font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600'>
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadFilesSection;