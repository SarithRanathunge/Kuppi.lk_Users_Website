import React from 'react'

// Define the WithdrawalDataBox component that takes in props: withdrawalId, date, amount, and status
const WithdrawalDataBox = ({ withdrawalId, date, amount, status }) => {
  // Determine the class for the status text dynamically based on the value of the status prop
  const statusClass = status.toLowerCase() === 'pending' // If status is 'pending'
    ? 'text-blue-500'                                    // Assign blue text color for 'pending'
    : status.toLowerCase() === 'received'               // If status is 'received'
    ? 'text-green-500'                                   // Assign green text color for 'received'
    : status.toLowerCase() === 'rejected'               // If status is 'rejected'
    ? 'text-red-500'                                     // Assign red text color for 'rejected'
    : '';                                                // Default to no additional styling if no match

  return (
    <div 
      // Wrapper div that contains the entire data box
      className='w-full h-auto flex flex-row items-center bg-white rounded-lg shadow-lg py-5 text-[14pt] font-medium'
    >
      {/* Display the withdrawal ID in the first column */}
      <span className='w-3/12 text-center'>{withdrawalId}</span>

      {/* Display the date in the second column */}
      <span className='w-3/12 text-center'>{date}</span>

      {/* Display the amount in the third column */}
      <span className='w-3/12 text-center'>{amount}</span>

      {/* Display the status in the fourth column with dynamically applied styling */}
      <span className={`w-3/12 text-center ${statusClass}`}>
        {status}
      </span>
    </div>
  );
}

export default WithdrawalDataBox;