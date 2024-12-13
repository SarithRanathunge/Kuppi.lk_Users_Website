// Importing necessary libraries and components
import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io"; // Icon for back navigation
import { useNavigate } from "react-router-dom"; // React Router hook for navigation
import { IoCloudUploadSharp, IoCloudDoneSharp } from "react-icons/io5"; // Icons for file upload previews

// Main component definition
const UploadKuppiSession = () => {
  const navigate = useNavigate(); // Hook for navigating between routes

  // State variables for form inputs and previews
  const [title, setTitle] = useState(""); // State for session title
  const [url, setUrl] = useState(""); // State for session URL
  const [description, setDescription] = useState(""); // State for session description
  const [videoPreview, setVideoPreview] = useState(null); // State for video preview
  const [thumbnailPreview, setThumbnailPreview] = useState(null); // State for thumbnail preview
  const [error, setError] = useState(); // State for displaying validation error

  // Handler function for video file upload
  const handleVideoUpload = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader(); // FileReader for reading file contents
      reader.onload = () => {
        setVideoPreview(reader.result); // Set the video preview to the uploaded file
      };
      reader.readAsDataURL(file); // Convert file to data URL
    }
  };

  // Handler function for thumbnail file upload
  const handleThumbnailUpload = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader(); // FileReader for reading file contents
      reader.onload = () => {
        setThumbnailPreview(reader.result); // Set the thumbnail preview to the uploaded file
      };
      reader.readAsDataURL(file); // Convert file to data URL
    }
  };

  // Function to handle the upload process
  const handleUpload = () => {
    // Check if all required fields are filled
    if (!title || !url || !description) {
      setError("Please fill out all required fields"); // Display error if fields are missing
      return;
    }
    setError(""); // Clear error message
    navigate('/tutor/upload_files'); // Navigate to the next page after successful upload
  };

  return (
    <div className="w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px] gap-5">
      {/* Back navigation button */}
      <div
        className="absolute top-6 left-6 cursor-pointer"
        onClick={() => {
          navigate("/tutor/Upload_section"); // Navigate back to previous section
        }}
      >
        <IoIosArrowDropleftCircle className="text-[40px] text-blue-500" />
      </div>

      {/* Page title */}
      <div>
        <span className="text-[24pt] font-semibold">Upload Kuppi Section</span>
      </div>

      {/* Upload form section */}
      <div className="w-full h-full flex flex-col bg-white rounded-lg gap-5 p-5 mb-8">
        <div className="w-full h-full flex flex-row">
          {/* Video upload section */}
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
                onChange={handleVideoUpload} // Trigger video upload handler
              />
              <div
                id="video-preview"
                className={`w-full h-full rounded-lg border-2 border-dashed border-blue-500 bg-body-color flex flex-col justify-center gap-10 items-center text-center bg-center bg-cover ${
                  videoPreview ? "" : "flex p-8"
                }`}
              >
                {/* Display video preview if uploaded, otherwise show placeholder */}
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
                  <video
                    src={videoPreview}
                    className="w-full h-auto rounded-lg"
                    controls
                  />
                )}
              </div>
            </label>
          </div>

          {/* Thumbnail upload section */}
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
                onChange={handleThumbnailUpload} // Trigger thumbnail upload handler
              />
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
                {/* Display thumbnail preview if uploaded, otherwise show placeholder */}
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

        {/* Form input fields */}
        <div className="w-full h-full flex flex-col gap-4 px-3">
          {/* Session Title Input */}
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

          {/* Session URL Input */}
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

          {/* Session Description Input */}
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

          {/* Error Message Display */}
          <p className="w-full h-[30pt] text-[12pt] text-red-500 font-medium px-5">{error}</p>

          {/* Action Buttons */}
          <div className="w-full h-auto flex flex-row text-[12pt] font-medium justify-end gap-5">
            <button
              onClick={handleUpload} // Trigger upload handler
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
    </div>
  );
};

export default UploadKuppiSession;