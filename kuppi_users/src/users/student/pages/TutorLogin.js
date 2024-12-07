import React, {useState, useContext} from "react";
import { FaPlayCircle } from "react-icons/fa";
import Image from '../../../assets/tutor-login-page-image.jpg'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import Footer from "../../../common-components/Footer";

const LoginTutor = () => {
    const navigate = useNavigate();
    const { loginTutor } = useContext(AuthContext);

    const [fullName, setFullName] = useState('');
    const [email, setEmail]=useState('');
    const [phoneNumber, setPhoneNumber]=useState('');
    const [university, setUniversity]=useState('');
    const [degree, setDegree]=useState('');
    const [CurrentYear, setCurrentYear]=useState('');
    const [tutorBio, setTutorBio]=useState('');
    const [qulaifications, setQulaifications]=useState('');
    const [error, setError]=useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();

    if (!fullName || !email || !phoneNumber || !university || !degree || !CurrentYear || !tutorBio || !qulaifications) {
      setError('Please fill in all fields');
      return;
    }

    loginTutor('approved', 'nibm');
    setError('');
    navigate('/tutor/home');
  }

  return (
    <div className=" min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-green-200 w-full h-56 flex flex-col justify-center items-center">
        <img src={Image} alt="tutor-login-page-image" className=" w-full h-full object-cover"/>
        <div className="flex flex-col p-4 bg-black bg-opacity-50 rounded-lg item-center justify-center absolute">
            <h1 className="text-3xl font-bold text-center text-white mb-2">
              Become a Teacher / Tutor
            </h1>
            <p className="text-sm text-center text-white max-w-2xl mt-2">
            Contrary to popular belief, Lorem Ipsum in bus Bonorum et Malorum" 
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
            This book is a treatise on the theory of ethics, very popular during the 
            Renaissance. The first line of Lorem Ipsum.
            </p>
        </div>
      </header>
      {/* Main Section */}
      <div className="w-full px-28 py-8 grid grid-cols-1 md:grid-cols-2 gap-32 bg-gradient-to-b from-blue-200 to-gray-200">
        {/* Left Section: Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-3xl text-center font-semibold mb-8">How to become an instructor</h2>
          <form 
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* full name */}
            <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Full Name" className="font-medium">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e)=>{setFullName(e.target.value)}}
                  placeholder="Enter Your Full Name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            {/* email  */}
            <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Email" className="font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            {/* phone number  */}
            <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Phone Number" className="font-medium">Phone Number</label>
                <div className="flex items-center">
                    <span className="mr-2 text-gray-500">+94</span>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e)=>{setPhoneNumber(e.target.value)}}
                      placeholder="Enter your Phone Number"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
            {/* university  */}
            <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="University" className="font-medium">University</label>
                <select
                  value={university}
                  onChange={(e)=>{setUniversity(e.target.value)}}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option>Select your university</option>
                  <option>NIBM</option>
                </select> 
            </div>
            {/* degree  */}
            <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Faculty" className="font-medium">Degree</label>
                <input
                  type="text"
                  value={degree}
                  onChange={(e)=>{setDegree(e.target.value)}}
                  placeholder="Enter Your Degree"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            {/* academic year  */}
            <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Current Academic Year" className="font-medium">Current Academic Year</label>
                <select
                  value={CurrentYear}
                  onChange={(e)=>{setCurrentYear(e.target.value)}}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option>Select your university</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
            </div>
            <div className="w-full h-8 flex items-center">
                <div className="w-full border border-gray-300 bg-blue-500 flex"></div>
            </div>
            {/* tutor bio  */}
            <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Tutor Bio" className="font-medium">Tutor Bio</label>
                <textarea
                type="text"
                value={tutorBio}
                onChange={(e)=>{setTutorBio(e.target.value)}}
                placeholder="Enter Your Bio"
                className="w-full h-24 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />  
            </div>
            {/* qualifications  */}
            <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="qualifications" className="font-medium">Qulaifications</label>
                <textarea
                type="text"
                value={qulaifications}
                onChange={(e)=>{setQulaifications(e.target.value)}}
                placeholder="Enter Your Extra Qualifications"
                className="w-full h-24 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />  
            </div>
            <div className="w-full h-8 flex items-center">
                <p className="text-red-500 text-[12pt] font-semibold px-2">{error}</p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Right Section: How to Become a Tutor */}
        <div className="py-6 rounded-lg">
          <h2  className="text-3xl text-center font-semibold mb-8">How to become a Tutor</h2>
          <div className="w-full h-[350px] border-8 shadow-md border-white rounded-lg bg-gray-400 flex items-center justify-center mb-6">
            <div className="w-auto h-auto bg-white rounded-full">
                <FaPlayCircle className="text-red-500 text-9xl"/>
            </div>
          </div>
          <ul className="space-y-8 text-[14pt] text-gray-700 list-disc">
            <div className=" shadow-md bg-white p-5 rounded-lg">
                <li className="mx-3">You need to be a student registered in a university.</li>
            </div>
            <div className=" shadow-md bg-white p-5 rounded-lg">
                <li className="mx-3">You can upload any kuppi within <b>YOUR REGISTERED FACULTY</b>.</li>
            </div>
            <div className=" shadow-md bg-white p-5 rounded-lg">
                <li className="mx-3">
                  You can create a Kuppi folder on our platform, compress the
                  content into a <b>.zip folder</b>, and send it through WhatsApp.
                </li>
            </div>
            <div className=" shadow-md bg-white p-5 rounded-lg">
                <li className="mx-3">
                  Your Kuppi content will be reviewed, and <b>within 48 hours</b>, it
                  will be uploaded to the folder you created.
                </li>
            </div>
            <div className=" shadow-md bg-white p-5 rounded-lg">
                <li className="mx-3">
                  For further reference, a tutorial video is provided as a
                  step-by-step guide.
                </li>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginTutor;
