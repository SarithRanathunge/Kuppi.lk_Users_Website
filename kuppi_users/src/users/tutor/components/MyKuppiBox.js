import React, { useContext } from 'react';
import { MdOutlineStarRate } from "react-icons/md"; // Import outline star icon
import { MdStarRate } from "react-icons/md"; // Import filled star icon
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import { AuthContext } from '../../../context/AuthContext'; // Import AuthContext for state sharing

const MyKuppiBox = ({ moduleImage, module, price, purchased, rate, status }) => {
    const navigate = useNavigate(); // Hook to programmatically navigate to a route
    const { addTutorKuppiModule } = useContext(AuthContext); // Access `addTutorKuppiModule` from context

    // Determine the CSS class for the status based on its value
    const statusClass = status.toLowerCase() === 'pending' 
        ? 'text-blue-500'  // Blue color for pending status
        : status.toLowerCase() === 'published'
        ? 'text-green-500' // Green color for published status
        : ''; // Default: no specific styling

    // Function to render star ratings based on the rate value
    const renderStars = (rate) => {
        const fullStars = Math.floor(rate); // Calculate the number of full stars
        const hasHalfStar = rate % 1 >= 0.5; // Determine if there's a half star
        const totalStars = 5; // Total number of stars to display
    
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            // Add full stars
            stars.push(
                <MdStarRate key={`full-${i}`} className="text-[13pt] text-yellow-500" />
            );
        }
    
        if (hasHalfStar) {
            // Add half star if applicable
            stars.push(
                <MdOutlineStarRate
                    key="half"
                    className="text-[13pt] text-yellow-500"
                />
            );
        }
    
        for (let i = stars.length; i < totalStars; i++) {
            // Add empty stars to fill up to totalStars
            stars.push(
                <MdOutlineStarRate
                    key={`empty-${i}`}
                    className="text-[13pt] text-gray-300"
                />
            );
        }
    
        return stars; // Return the array of star icons
    };

    // Handle click event for the component
    const handleClick = () => {
        addTutorKuppiModule(module); // Update the selected Kuppi module in context
        navigate('/tutor/Upload_section'); // Navigate to the tutor upload section
    };

    return (
        <div 
            className='w-full h-full flex flex-row rounded-lg hover:shadow-lg p-6 bg-white gap-5 cursor-pointer'
            onClick={handleClick} // Handle click event
        >
            {/* Module image */}
            <img 
                src={moduleImage} 
                alt="module-image" 
                className='w-[200px] h-[90px] object-cover rounded-lg' 
            />

            {/* Main content section */}
            <div className='w-full h-full flex flex-row justify-between items-start'>
                {/* Left content: Module details */}
                <div className='w-full flex flex-col'>
                    <div className='w-full flex flex-col'>
                        <div className='w-full flex flex-row items-center justify-start gap-3'>
                            {/* Module name */}
                            <span className='text-[16pt] text-black font-medium'>{module}</span>
                            {
                                purchased > 0 && (
                                    // Display star ratings if purchased is greater than 0
                                    <div className="h-fit flex flex-row items-center gap-1">
                                        <p className="text-[12pt] font-normal text-blue-500">{rate}</p>
                                        <div className="flex flex-row">{renderStars(rate)}</div>
                                        <p className="text-[12pt] font-normal text-gray-400 ml-1">({rate})</p>
                                    </div>
                                )
                            }
                        </div>
                        {/* Module price */}
                        <span className='text-[14pt] text-black font-medium'>Rs.{price}</span>
                    </div>

                    {/* Purchased info (if applicable) */}
                    <div className='w-auto h-auto'>
                        {
                            purchased > 0 && (
                                <span className='text-[14pt] text-gray-400 font-medium'>
                                    Purchased: {purchased}
                                </span>
                            )
                        }
                    </div>
                </div>

                {/* Status label */}
                <span className={`text-center text-[14pt] font-medium ${statusClass}`}>
                    {status}
                </span>
            </div>
        </div>
    );
};

export default MyKuppiBox;
