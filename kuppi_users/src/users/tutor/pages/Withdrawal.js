import React from 'react'// Importing React library
import { IoIosArrowDropleftCircle } from "react-icons/io";  // Importing an arrow icon from react-icons
import WithdrawalDataBox from '../components/WithdrawalDataBox';

const Withdrawal = () => {
    const withdrawalArray = [
        {withdrawalId:'WD00001', date:'9/10/2024', amount:'10000.00', status:'Received'},
        {withdrawalId:'WD00002', date:'9/10/2024', amount:'10000.00', status:'Received'},
        {withdrawalId:'WD00003', date:'9/10/2024', amount:'10000.00', status:'Received'},
        {withdrawalId:'WD00004', date:'9/10/2024', amount:'10000.00', status:'Received'},
        {withdrawalId:'WD00005', date:'9/10/2024', amount:'10000.00', status:'Received'},
        {withdrawalId:'WD00006', date:'9/10/2024', amount:'10000.00', status:'Rejected'},
        {withdrawalId:'WD00007', date:'9/10/2024', amount:'10000.00', status:'Pending'},
        {withdrawalId:'WD00008', date:'9/10/2024', amount:'10000.00', status:'Pending'},
        {withdrawalId:'WD00009', date:'9/10/2024', amount:'10000.00', status:'Pending'},
    ]

  return (
    <div className='w-full min-h-[88.71vh] flex flex-col bg-gradient-to-b from-blue-200 to-gray-200 relative px-[100px] pt-[18px]'>
        
      <div className='absolute top-6 left-6'>
        <IoIosArrowDropleftCircle className='text-[40px] text-blue-500' />
      </div>
      
      <div>
        <span className='text-[24pt] font-semibold'>Withdrawal</span>
      </div>

      <div className='w-full h-full flex flex-col gap-4 pt-10'>
        <div className='w-full h-auto flex flex-row items-center text-[16pt] font-medium px-4'>
            <span className='w-3/12 text-center'>Withdrawal ID</span>
            <span className='w-3/12 text-center'>Date</span>
            <span className='w-3/12 text-center'>Amount (Rs.)</span>
            <span className='w-3/12 text-center'>Status</span>
        </div>
        <div className='w-full h-full flex flex-col gap-3 p-3 overflow-y-auto'
            style={{ maxHeight: '525px' }}>
            {withdrawalArray.map((data, index)=>(
                <WithdrawalDataBox key={index} withdrawalId={data.withdrawalId} date={data.date} amount={data.amount} status={data.status}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Withdrawal