import React, { useState } from 'react'; // Importing React and useState for managing component state
import { IoIosArrowDropleftCircle } from "react-icons/io"; // Importing an icon for navigation
import EarningsDataBox from '../components/EarningsDataBox'; // Importing a custom component for displaying earnings data
import moduleImage from '../../../assets/searched-module-main-image.jpg'; // Importing a sample image for modules
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation between routes

const Earnings = () => {
  const navigate = useNavigate(); // Initializing useNavigate for route navigation
  const [isPopupVisible, setPopupVisible] = useState(false); // State to toggle the visibility of the withdrawal pop-up
  const [amount, setAmount] = useState(''); // State for withdrawal amount input
  const [bankName, setBankName] = useState(''); // State for the selected bank name
  const [bankBranch, setBankBranch] = useState(''); // State for the selected bank branch
  const [bankAccountNo, setBankAccountNo] = useState(''); // State for the entered bank account number
  const [error, setError] = useState(''); // State for error messages

  // Function to toggle the visibility of the pop-up and reset error message
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
    setError('');
  };

  // Array of earnings data (mock data for demonstration purposes)
  const earningArray = [
    { moduleImage: moduleImage, module: 'Introduction to Computer Science', purchased: 20, price: 2500 },
    { moduleImage: moduleImage, module: 'Introduction to Computer Science', purchased: 20, price: 2500 },
    { moduleImage: moduleImage, module: 'Introduction to Computer Science', purchased: 20, price: 2500 },
    { moduleImage: moduleImage, module: 'Introduction to Computer Science', purchased: 20, price: 2500 },
    { moduleImage: moduleImage, module: 'Introduction to Computer Science', purchased: 20, price: 2500 },
    { moduleImage: moduleImage, module: 'Introduction to Computer Science', purchased: 20, price: 2500 }
    // Add more entries as needed
  ];

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation to check if all fields are filled
    if (amount === '' || bankName === '' || bankBranch === '' || bankAccountNo === '') {
      setError('Please fill all the fields'); // Display an error message
      return;
    }

    setError(''); // Reset error message
    navigate('/tutor/withdrawal'); // Navigate to the withdrawal page
  };

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px]'>
      
      {/* Back navigation button */}
      <div className='absolute top-6 left-6'>
        <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
      </div>
      
      {/* Page Title */}
      <div>
        <span className='text-[24pt] font-semibold'>Earnings</span>
      </div>

      {/* Earnings Information Section */}
      <div className='w-full h-full flex flex-col gap-8 pt-8'>
        {/* Total Earning Display */}
        <div className='w-full h-full flex flex-row justify-between items-center px-12 py-8 bg-blue-500 rounded-lg'>
          <div className='w-full h-full flex flex-col justify-center text-white'>
            <span className='text-[18pt] font-semibold'>Total Earning</span>
            <span className='text-[28pt] font-bold'>Rs.6000.00</span>
          </div>
          {/* Button to show withdrawal request pop-up */}
          <button className='w-[500px] h-full border-2 text-blue-500 bg-white text-[16pt] font-semibold py-5 rounded-lg hover:bg-gray-300 hover:border-white'
            onClick={togglePopup}
          >
            Make Withdrawal Request
          </button>
        </div>

        {/* Earnings List */}
        <div className='w-full h-full flex flex-col items-center justify-center gap-5'>
          <div className='w-full h-auto flex flex-row items-center text-[16pt] font-medium border-b-[3px] border-blue-500'>
            <span className='w-2/12 text-center font-medium text-blue-500'>Kuppi Earnings</span>
          </div>
          {/* Earnings Data Box List */}
          <div className='w-full h-full flex flex-col gap-3 px-3 overflow-y-auto' style={{ maxHeight: '330px' }}>
            {
              earningArray.map((data, index) => (
                <EarningsDataBox key={index} moduleImage={data.moduleImage} module={data.module} purchased={data.purchased} price={data.price} />
              ))
            }
          </div>
        </div>
      </div>

      {/* Withdrawal Request Pop-up */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[600px] p-8 rounded-lg shadow-lg flex flex-col gap-6">
            {/* Pop-up Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-[18pt] font-semibold">Make Withdrawal Request</h2>
              <button onClick={togglePopup} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-4">
              {/* Withdrawal Amount Input */}
              <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Withdrawal Amount" className="font-medium">Withdrawal Amount</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => { setAmount(e.target.value); }}
                  placeholder="Enter Withdrawal Amount"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              
              {/* Bank Name Dropdown */}
              <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Bank Name" className="font-medium">Bank Name</label>
                <select
                  value={bankName}
                  onChange={(e) => { setBankName(e.target.value); }}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option>Select your Bank Name</option>
                  <option>NSB</option>
                  <option>Commercial Bank</option>
                  <option>BOC</option>
                  <option>HNB</option>
                </select>
              </div>
              
              {/* Bank Branch Dropdown */}
              <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Bank Branch" className="font-medium">Bank Branch</label>
                <select
                  value={bankBranch}
                  onChange={(e) => { setBankBranch(e.target.value); }}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option>Select your Bank Branch</option>
                  <option>Colombo 07</option>
                  <option>Maharagama</option>
                  <option>Wadduwa</option>
                  <option>Piliyandala</option>
                </select>
              </div>
              
              {/* Bank Account Number Input */}
              <div className="w-auto h-auto flex flex-col gap-1">
                <label htmlFor="Bank Account No." className="font-medium">Bank Account No.</label>
                <input
                  type="text"
                  value={bankAccountNo}
                  onChange={(e) => { setBankAccountNo(e.target.value); }}
                  placeholder="Enter Bank Account Number"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              
              {/* Submit and Cancel Buttons */}
              <div className="w-auto h-auto flex flex-col gap-1">
                {/* Error Message */}
                <p className="w-full h-6 text-red-500 text-[12pt] font-semibold px-4">{error}</p>
                <div className="w-full h-full flex flex-row justify-between items-center">
                  <button className="text-red-600 px-4 py-[9.5px] rounded-md border-2 border-red-500 hover:text-white hover:bg-red-500" onClick={togglePopup}>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 border-2 border-blue-500 text-white px-4 py-[9.5px] rounded-md hover:bg-blue-600 hover:border-blue-600"
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Earnings;