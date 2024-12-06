import React, {useState} from 'react'
import logo from '../../../assets/Kuppi.lk_logo_03.png'
import UserImage from '../../../assets/user_image.png';
import Footer from '../../../common-components/Footer';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import UniLogo from '../../../assets/nibm-logo.png'
import UniversityBadge from '../../../common-components/UniversityBadge';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // State to track the number of visible badges
  const [visibleCount, setVisibleCount] = useState(12); // Initially show 8 badges
  const badges = Array(16).fill(UniLogo); // Array of badges (16 in this case)

  // Function to toggle the number of visible badges
  const toggleBadges = () => {
    setVisibleCount((prevCount) =>
      prevCount === badges.length ? 12 : badges.length
    );
  };

  return (
    <div>
      <div className='w-full h-full overflow-hidden relative flex py-16 flex-row gap-44 justify-center bg-gradient-to-r from-[#f8fcff] via-[#dbeeff] to-[#f8fcff]'>
        <div className='flex flex-col gap-11'>
          <span className='text-[52px] font-bold'>Welcome to</span>
          <img src={logo} alt="Logo" className="h-auto w-[400px] object-contain relative left-16"/>
          <button className=" w-[200px] mt-24 py-7 text-[18px] bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
           onClick={() => navigate('/student/course_modules')}
          >
            Purchase Kuppi
          </button>
        </div>
        <img src={UserImage} alt="Home_Image" className="h-auto w-[460px] top-[-20px] relative object-contain" />
        <div className='w-[350px] h-[350px] rounded-full absolute bg-blue-300 top-[-150px] right-[-150px] '></div>
        <div className='w-20 h-20 rounded-full absolute bg-blue-300 top-[500px] right-[300px]'></div>
        <div className='w-10 h-10 rounded-full absolute bg-blue-300 top-[20px] right-[850px]'></div>
        <div className='w-[500px] h-[500px] rounded-full absolute bg-blue-300 top-[500px] left-[-300px]'></div>
        <div className='w-16 h-16 rounded-full absolute bg-blue-300 top-[165 px] left-36'></div>
        <div className='w-14 h-14 rounded-full absolute bg-blue-300 top-[550px] right-[750px]'></div>
      </div>

      <div className='w-full h-full flex flex-col gap-8 px-14 py-8'>
        <div className='flex flex-col gap-5'>
          <span className='font-semibold text-[28pt]'>Your University</span>
          <div className="w-ful h-auto flex flex-row px-12 pl-36">
            <UniversityBadge logo={UniLogo    } />
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <span className='font-semibold text-[28pt]'>Other University</span>
          <div className="w-full h-auto flex flex-wrap justify-center gap-10 px-12">
            {/* Display badges up to the visible count */}
            {badges.slice(0, visibleCount).map((logo, index) => (
              <UniversityBadge key={index} logo={logo} />
            ))}
          </div>
  
          {/* Toggle Button */}
          <div className="flex justify-center mt-6">
            <button
              className="flex flex-col items-center font-medium text-center text-[14pt] text-blue-500"
              onClick={toggleBadges}
            >
              {visibleCount === badges.length ? (
                  <>
                    See Less  <MdKeyboardDoubleArrowUp className='text-[20pt] text-blue-500'/>
                  </>
                ) : (
                  <>
                    See More <MdKeyboardDoubleArrowDown className='text-[20pt] text-blue-500'/>
                  </>
                )
              }
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home