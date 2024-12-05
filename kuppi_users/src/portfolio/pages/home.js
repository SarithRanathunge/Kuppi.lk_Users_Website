import React,{useState} from 'react'
import logo from '../../assets/Kuppi.lk_logo_03.png'
import UniLogo from '../../assets/nibm-logo.png'
import HomeImage from '../../assets/home_page_image.png';
import Footer from '../../common-components/Footer';
import UniversityBadge from '../../common-components/UniversityBadge';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import ServiceBadge from '../components/ServiceBadge';
import StudentBadge from '../components/StudentBadge';
import LaptopIcon from '../../assets/laptop_image.png'
import StudentImage from '../../assets/user.jpg'

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

  const goToRegister = () =>{
    navigate('/create');
  }
  return (
    <div>
      <div className='w-full h-full overflow-hidden relative flex py-16 flex-row gap-40 justify-center bg-gradient-to-r from-[#f8fcff] via-[#dbeeff] to-[#f8fcff]'>
        <div className='flex flex-col gap-11'>
          <span className='text-[52px] font-bold'>Welcome to</span>
          <img src={logo} alt="Logo" className="h-auto w-[400px] object-contain relative left-16"/>
          <button className=" w-[200px] mt-24 py-7 text-[18px] bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
           onClick={goToRegister}
          >
            Register Now
          </button>
        </div>
        <img src={HomeImage} alt="Home_Image" className="h-auto w-[453.5px] object-contain" />
        <div className='w-[350px] h-[350px] rounded-full absolute bg-blue-300 top-[-150px] right-[-150px] '></div>
        <div className='w-20 h-20 rounded-full absolute bg-blue-300 top-[500px] right-[300px]'></div>
        <div className='w-10 h-10 rounded-full absolute bg-blue-300 top-[20px] right-[850px]'></div>
        <div className='w-[500px] h-[500px] rounded-full absolute bg-blue-300 top-[500px] left-[-300px]'></div>
        <div className='w-16 h-16 rounded-full absolute bg-blue-300 top-[165 px] left-36'></div>
        <div className='w-14 h-14 rounded-full absolute bg-blue-300 top-[550px] right-[750px]'></div>
      </div>

      <div className='w-full h-full px-14 py-8'>
        <span className='font-semibold text-[28pt]'>Explore Kuppi Select Your University</span>
        <div className="w-full h-auto flex flex-wrap justify-center gap-10 p-12">
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

      <div className='w-full h-full flex flex-col bg-gray-100 px-14 py-8 gap-4'>
        <div className='w-full flex flex-col items-center'>
          <span className='text-blue-500 font-medium mb-2'>Our Services</span>
          <span className='w-full font-semibold text-center text-[28pt]'>Empowering Students With Personalized, <br />Expert-Led Learning.</span>
        </div>

        <div className='w-full h-auto relative'>
          <div className='w-auto h-auto flex flex-row gap-5 px-5 py-10 overflow-hidden'>
            <ServiceBadge icon={LaptopIcon} headline="University Content" description="Top-quality video lessons from expert students, tailored to your courses."/>
            <ServiceBadge icon={LaptopIcon} headline="University Content" description="Top-quality video lessons from expert students, tailored to your courses."/>
            <ServiceBadge icon={LaptopIcon} headline="University Content" description="Top-quality video lessons from expert students, tailored to your courses."/>
            <ServiceBadge icon={LaptopIcon} headline="University Content" description="Top-quality video lessons from expert students, tailored to your courses."/>
          </div>
        </div>
        
      </div>

      <div className='w-full h-full flex flex-col px-14 py-8 gap-1'>
        <div className='w-full flex flex-col items-center'>
          <span className='w-full font-semibold text-center text-[28pt]'>Student Success Stories</span>
        </div>

        <div className='w-full h-auto relative'>
          <div className='w-auto h-auto flex flex-row gap-6 px-5 py-10 overflow-hidden'>
            <StudentBadge image={StudentImage} studentName="Liviru Navarathna" university="NIBM" description="The lessons here clarified my PDSA concepts like never before!"/>
            <StudentBadge image={StudentImage} studentName="Liviru Navarathna" university="NIBM" description="The lessons here clarified my PDSA concepts like never before!"/>
            <StudentBadge image={StudentImage} studentName="Liviru Navarathna" university="NIBM" description="The lessons here clarified my PDSA concepts like never before!"/>
            <StudentBadge image={StudentImage} studentName="Liviru Navarathna" university="NIBM" description="The lessons here clarified my PDSA concepts like never before!"/>
            <StudentBadge image={StudentImage} studentName="Liviru Navarathna" university="NIBM" description="The lessons here clarified my PDSA concepts like never before!"/>
          </div>
        </div>
        
      </div>

      <Footer/>
    </div>
  )
}

export default Home