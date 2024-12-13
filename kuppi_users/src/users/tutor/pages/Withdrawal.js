import React from 'react' // Importing React library for component creation
import { IoIosArrowDropleftCircle } from "react-icons/io";  // Importing an arrow icon from react-icons to be used as a back button icon
import WithdrawalDataBox from '../components/WithdrawalDataBox'; // Importing the WithdrawalDataBox component to display withdrawal details

const Withdrawal = () => {
    // Sample data for withdrawal requests
    const withdrawalArray = [
        { withdrawalId: 'WD00001', date: '9/10/2024', amount: '10000.00', status: 'Received' },
        { withdrawalId: 'WD00002', date: '9/10/2024', amount: '10000.00', status: 'Received' },
        { withdrawalId: 'WD00003', date: '9/10/2024', amount: '10000.00', status: 'Received' },
        { withdrawalId: 'WD00004', date: '9/10/2024', amount: '10000.00', status: 'Received' },
        { withdrawalId: 'WD00005', date: '9/10/2024', amount: '10000.00', status: 'Received' },
        { withdrawalId: 'WD00006', date: '9/10/2024', amount: '10000.00', status: 'Rejected' },
        { withdrawalId: 'WD00007', date: '9/10/2024', amount: '10000.00', status: 'Pending' },
        { withdrawalId: 'WD00008', date: '9/10/2024', amount: '10000.00', status: 'Pending' },
        { withdrawalId: 'WD00009', date: '9/10/2024', amount: '10000.00', status: 'Pending' },
    ]

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px]'>
        {/* Back Arrow Button */}
        <div className='absolute top-6 left-6'>
            <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
        </div>
        
        {/* Page Title */}
        <div>
            <span className='text-[24pt] font-semibold'>Withdrawal</span>
        </div>

        {/* Withdrawal List Container */}
        <div className='w-full h-full flex flex-col gap-4 pt-10'>
            {/* Withdrawal Data Header: Defines column names */}
            <div className='w-full h-auto flex flex-row items-center text-[16pt] font-medium px-4'>
                <span className='w-3/12 text-center'>Withdrawal ID</span> {/* Column for Withdrawal ID */}
                <span className='w-3/12 text-center'>Date</span> {/* Column for Date */}
                <span className='w-3/12 text-center'>Amount (Rs.)</span> {/* Column for Amount */}
                <span className='w-3/12 text-center'>Status</span> {/* Column for Status */}
            </div>

            {/* Container for the withdrawal data list, with overflow handling */}
            <div className='w-full h-full flex flex-col gap-3 p-3 overflow-y-auto' style={{ maxHeight: '525px' }}>
                {/* Loop through withdrawalArray and render each withdrawal's data */}
                {withdrawalArray.map((data, index) => (
                    <WithdrawalDataBox
                        key={index} // Unique key for each item in the list
                        withdrawalId={data.withdrawalId} // Passing withdrawal ID to the child component
                        date={data.date} // Passing date to the child component
                        amount={data.amount} // Passing amount to the child component
                        status={data.status} // Passing status to the child component
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Withdrawal