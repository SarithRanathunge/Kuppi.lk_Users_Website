import React, { useState } from "react"; 
import { IoIosArrowDropleftCircle } from "react-icons/io"; 
import { useNavigate } from "react-router-dom"; 
import { IoCloudUploadSharp, IoCloudDoneSharp } from "react-icons/io5"; 
import { FaCheckCircle } from "react-icons/fa";

// The UploadKuppiSession component allows tutors to upload video sessions along with a title, description, and thumbnail.
const UploadKuppiSession = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate between routes.

  // State variables to manage form inputs, previews, and errors.
  const [title, setTitle] = useState(""); 
  const [url, setUrl] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [videoPreview, setVideoPreview] = useState(null); 
  const [thumbnailPreview, setThumbnailPreview] = useState(null); 
  const [error, setError] = useState(); 
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Toggles the visibility of the popup modal.
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  // Handles video upload and sets a preview.
  const handleVideoUpload = (event) => {
    const file = event.target.files[0]; // Retrieves the uploaded file.
    if (file) {
      const reader = new FileReader(); // Reads file data.
      reader.onload = () => {
        setVideoPreview(reader.result); // Updates the state with video preview URL.
      };
      reader.readAsDataURL(file); // Converts file to a data URL.
    }
  };

  // Handles thumbnail upload and sets a preview.
  const handleThumbnailUpload = (event) => {
    const file = event.target.files[0]; // Retrieves the uploaded file.
    if (file) {
      const reader = new FileReader(); // Reads file data.
      reader.onload = () => {
        setThumbnailPreview(reader.result); // Updates the state with thumbnail preview URL.
      };
      reader.readAsDataURL(file); // Converts file to a data URL.
    }
  };

  // Validates inputs and displays a success popup if valid.
  const handleUpload = () => {
    // Check if all required fields are filled.
    if (!title || !url || !description) {
      setError("Please fill out all required fields"); // Set error message.
      return;
    }
    setError(""); // Clear any previous errors.
    togglePopup(); // Show success popup.
  };

  return (
    <div className="w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px] gap-5">
      
      {/* Back Button */}
      <div
        className="absolute top-6 left-6 cursor-pointer"
        onClick={() => {
          navigate("/tutor/Upload_section"); // Navigate to the upload section.
        }}
      >
        <IoIosArrowDropleftCircle className="text-[40px] text-blue-500" />
      </div>

      {/* Page Title */}
      <div>
        <span className="text-[24pt] font-semibold">Upload Kuppi Section</span>
      </div>

      {/* Upload Section */}
      <div className="w-full h-full flex flex-col bg-white rounded-lg gap-5 p-5 mb-8">
        <div className="w-full h-full flex flex-row">
          
          {/* Video Upload Section */}
          <div className="w-1/2 h-auto flex flex-col px-10 items-center">
            <span className="text-[18pt] font-medium">Upload Video Here</span>
            <label
              htmlFor="video-upload"
              className="w-full h-auto my-2 flex flex-col items-center cursor-pointer"
            >
              <input
                type="file"
                accept="video/*"
                id="video-upload"
                hidden
                onChange={handleVideoUpload}
              />
              {/* Video Preview */}
              <div
                id="video-preview"
                className={`w-full h-full rounded-lg border-2 border-dashed border-blue-500 bg-body-color flex flex-col justify-center gap-10 items-center text-center bg-center bg-cover ${
                  videoPreview ? "" : "flex p-8"
                }`}
              >
                {/* If no video uploaded, display placeholder */}
                {!videoPreview ? (
                  <>
                    <IoCloudUploadSharp className="text-[48pt] text-blue-500" />
                    <p className="text-[16pt] font-medium">
                      Drag and drop video or click here
                    </p>
                    <span className="block text-[12pt] text-gray-400">
                      Supported formats: MP4, AVI, MOV
                    </span>
                  </>
                ) : (
                  // Display video preview
                  <video
                    src={videoPreview}
                    className="w-full h-auto rounded-lg"
                    controls
                  />
                )}
              </div>
            </label>
          </div>

          {/* Thumbnail Upload Section */}
          <div className="w-1/2 h-auto flex flex-col px-10">
            <span className="text-[12pt] font-medium">Thumbnail</span>
            <span className="text-[10pt] font-normal text-gray-500">
              Set a thumbnail that stands out and draws viewers’ attention
            </span>
            <label
              htmlFor="thumbnail-upload"
              className="w-full h-auto my-2 flex flex-col items-center cursor-pointer"
            >
              <input
                type="file"
                accept="image/*"
                id="thumbnail-upload"
                hidden
                onChange={handleThumbnailUpload} 
              />
              {/* Thumbnail Preview */}
              <div
                id="thumbnail-preview"
                className={`w-full h-[260px] rounded-lg border-2 border-dashed border-gray-500 bg-body-color flex flex-col justify-center gap-10 p-7 items-center text-center bg-center bg-cover ${
                  thumbnailPreview ? "object-center" : "flex"
                }`}
                style={{
                  backgroundImage: thumbnailPreview
                    ? `url(${thumbnailPreview})`
                    : "none",
                }}
              >
                {/* If no thumbnail uploaded, display placeholder */}
                {!thumbnailPreview ? (
                  <>
                    <IoCloudDoneSharp className="text-[48pt] text-gray-500" />
                    <p className="text-[16pt] font-medium">
                      Drag and drop image or click here
                    </p>
                    <span className="block text-[12pt] text-gray-400">
                      JPEG, PNG, up to 50MB
                    </span>
                  </>
                ) : null}
              </div>
            </label>
          </div>
        </div>

        {/* Form Fields */}
        <div className="w-full h-full flex flex-col gap-4 px-3">
          
          {/* Title Input */}
          <div className="w-auto h-auto flex flex-col gap-1">
            <label htmlFor="Session Title" className="font-medium">
              Session Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Enter Session Title"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* URL Input */}
          <div className="w-auto h-auto flex flex-col gap-1">
            <label htmlFor="Session URL" className="font-medium">
              Session URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              placeholder="Enter Session URL"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Description Input */}
          <div className="w-auto h-auto flex flex-col gap-1">
            <label htmlFor="Description" className="font-medium">
              Description
            </label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Enter Session Description"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Error Message */}
          <p className="w-full h-[30pt] text-[12pt] text-red-500 font-medium px-5">{error}</p>

          {/* Action Buttons */}
          <div className="w-full h-auto flex flex-row text-[12pt] font-medium justify-end gap-5">
            <button
              onClick={handleUpload} 
              className="w-[120px] py-3 border-2 border-blue-500 bg-blue-500 hover:border-blue-600 hover:bg-blue-600 text-white rounded-lg"
            >
              Upload
            </button>
            <button className="w-[120px] py-3 border-2 border-red-500 bg-red-500 hover:bg-white hover:text-red-600 text-white rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
      
      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[600px] p-6 rounded-lg shadow-lg flex flex-col gap-8 justify-center items-center">
           
            {/* Close Button */}
            <div className="w-full flex justify-end items-center">
              <button onClick={togglePopup} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            {/* Success Icon */}
            <FaCheckCircle className='text-[96pt] text-blue-500' />
            <div className='w-full h-full flex flex-col justify-center gap-1'>
              <span className='text-[18pt] text-blue-500 font-medium text-center'>Kuppi Session Upload Successfully</span>
            </div>
            <button onClick={() => { 
                togglePopup();
                navigate('/tutor/Upload_section'); // Navigate back to the upload section.
              }} 
              className='w-[200px] py-3 text-[12pt] font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600'>
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadKuppiSession; // Export the component.
