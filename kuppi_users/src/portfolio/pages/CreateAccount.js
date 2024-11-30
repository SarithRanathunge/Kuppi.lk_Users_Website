import React, { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext} from '../../context/AuthContext'

const CreateAccount = () => {
  const navigate = useNavigate();
  const {loginUser} = useContext(AuthContext);

  const [fullName, setFullName] = useState('');
  const [email, setEmail]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');
  const [university, setUniversity]=useState('');
  const [degree, setDegree]=useState('');
  const [CurrentYear, setCurrentYear]=useState('');
  const [startYear, setStartYear]=useState('');
  const [error, setError]=useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!fullName || !email || !phoneNumber || !password || !confirmPassword || !university || !degree || !startYear || !startYear){
      setError('Please fill in all fields');
      return;
    }

    loginUser('approved');
    setError('');
    navigate('/student/home');
  }


  return (
    <div className='w-full h-full bg-gradient-to-b from-blue-200 to-gray-200 py-6'>
      <h2 className="text-4xl text-center font-semibold pb-6">How to become on Student</h2>
      <form onSubmit={handleSubmit} className='w-auto h-auto flex flex-row gap-20 bg-white mx-32 px-16 py-[55px] rounded-xl shadow-xl'>
        <div className='w-1/2 h-auto space-y-7'>
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
          {/* password  */}
          <div className="w-auto h-auto flex flex-col gap-1">
              <label htmlFor="Password" className="font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="Enter Your password"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
          </div>
          {/* confirm password  */}
          <div className="w-auto h-auto flex flex-col gap-1">
              <label htmlFor="Confirm Password" className="font-medium">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                placeholder="Enter Your password"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
          </div>
        </div>

        <div className='w-1/2 h-auto space-y-7'>
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
            {/* start year  */}
            <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="University Start Year" className="font-medium">University Start Year</label>
                <input
                  type="date"
                  value={startYear}
                  onChange={(e)=>{setStartYear(e.target.value)}}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            
            <div className="w-auto h-auto flex flex-col">
                <p className="text-red-500 text-[12pt] font-semibold px-2">{error}</p>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-[9.5px] mt-[4.5px] rounded-md hover:bg-blue-600"
                >
                  Continue
                </button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount