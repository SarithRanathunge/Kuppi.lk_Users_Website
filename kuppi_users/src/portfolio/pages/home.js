import React,{useState} from 'react'
import logo from '../../assets/Kuppi.lk_logo_03.png'  // Logo for the website
import UniLogo from '../../assets/nibm-logo.png'  // University logo
import HomeImage from '../../assets/home_page_image.png';  // Image for the homepage
import Footer from '../../common-components/Footer';  // Footer component
import UniversityBadge from '../../common-components/UniversityBadge';  // University badge component
import { useNavigate } from 'react-router-dom';  // Hook for navigation
import { MdKeyboardDoubleArrowDown } from "react-icons/md";  // Icon for 'See More'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";  // Icon for 'See Less'
import ServiceBadge from '../components/ServiceBadge';  // Service badge component
import StudentBadge from '../components/StudentBadge';  // Student badge component
import LaptopIcon from '../../assets/laptop_image.png'  // Laptop image for service badge
import StudentImage from '../../assets/user.jpg'  // Image for student stories
import Slider from "react-slick";  // Slick carousel for sliders
import "slick-carousel/slick/slick.css";  // Styles for the slider
import "slick-carousel/slick/slick-theme.css";  // Theme for the slider
import "../css files/Home.css"  // Custom styles for the home page

const Home = () => {
  const navigate = useNavigate();
  
  // Show more and less functionality for displaying university badges
  const [visibleCount, setVisibleCount] = useState(12);  // Initially show 12 badges
  const badges = [
    {logo: UniLogo, university:'IIT'},  // Example data for badges (repeated for simplicity)
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'},
    {logo: UniLogo, university:'IIT'}
  ] // Array of badges (20 in total)

  // Function to toggle between showing more or less badges
  const toggleBadges = () => {
    setVisibleCount((prevCount) =>
      prevCount === badges.length ? 12 : badges.length
    );
  };

  // Navigate to the registration page
  const goToRegister = () => {
    navigate('/create');
  }

  // Dummy data for service section
  const serviceArray = [
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`},
    {icon:{LaptopIcon}, headline:`University Content`, description:`Top-quality video lessons from expert students, tailored to your courses.`}
  ];

  // Dummy data for student stories section
  const studentArray = [
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"},
    {image:{StudentImage}, studentName:"Liviru Navarathna", university:"NIBM", description:"The lessons here clarified my PDSA concepts like never before!"}
  ]

  // Settings for the service carousel
  const serviceSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  // Settings for the student stories carousel
  const studentSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <div>
      {/* Welcome Section */}
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
        {/* Decorative circles on the background */}
        <div className='w-[350px] h-[350px] rounded-full absolute bg-blue-300 top-[-150px] right-[-150px] '></div>
        <div className='w-20 h-20 rounded-full absolute bg-blue-300 top-[500px] right-[300px]'></div>
        <div className='w-10 h-10 rounded-full absolute bg-blue-300 top-[20px] right-[850px]'></div>
        <div className='w-[500px] h-[500px] rounded-full absolute bg-blue-300 top-[500px] left-[-300px]'></div>
        <div className='w-16 h-16 rounded-full absolute bg-blue-300 top-[165px] left-36'></div>
        <div className='w-14 h-14 rounded-full absolute bg-blue-300 top-[550px] right-[750px]'></div>
      </div>

      {/* University Badges Section */}
      <div className='w-full h-full px-14 py-8'>
        <span className='font-semibold text-[28pt]'>Explore Kuppi Select Your University</span>
        <div className="w-full h-auto flex flex-wrap justify-center gap-10 p-12">
          {/* Display badges up to the visible count */}
          {badges.slice(0, visibleCount).map((data, index) => (
              <UniversityBadge key={index} logo={data.logo} university={data.university} />
          ))}
        </div>

        {/* Toggle Button to show more or less badges */}
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

      {/* Services Section */}
      <div className='w-full h-full flex flex-col bg-gray-100 px-14 py-8'>
        <div className='w-full flex flex-col items-center'>
          <span className='text-blue-500 font-medium mb-2'>Our Services</span>
          <span className='w-full font-semibold text-center text-[28pt]'>Empowering Students With Personalized, <br />Expert-Led Learning.</span>
        </div>
        <div className='w-full flex flex-col justify-center items-center mb-6'>
          <div className='w-[1250px]'>
            <Slider {...serviceSettings}>
              {serviceArray.map((data, index) => (
                <ServiceBadge 
                  key={index}
                  icon={data.icon} 
                  headline={data.headline} 
                  description={data.description}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      
      {/* Student Success Stories Section */}
      <div className='w-full h-full flex flex-col px-14 py-8'>
        <div className='w-full flex flex-col items-center'>
          <span className='w-full font-semibold text-center text-[28pt]'>Student Success Stories</span>
        </div>
        <div className='w-full flex flex-col justify-center items-center mb-7'>
          <div className='w-[1250px]'>
            <Slider {...studentSettings}>
            {studentArray.map((data, index) => (
              <StudentBadge 
                key={index}
                image={data.image}
                studentName={data.studentName}
                university={data.university}
                description={data.description}
              />
            ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer/>
    </div>
  )
}

export default Home