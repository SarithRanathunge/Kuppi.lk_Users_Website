import React, {useContext} from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";


const SearchedModuleBox = ({mainImage, headline, description, rate, numofrated, tutorImage, tutorName, tutorEnrolledYear, price}) => {
  const navigate = useNavigate()
  const {addModuleKuppi} = useContext(AuthContext)

  // Function to generate stars based on rating
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate); // Number of full stars
    const hasHalfStar = rate % 1 >= 0.5; // Check for half star
    const totalStars = 5; // Max stars

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <MdStarRate key={`full-${i}`} className="text-[13pt] text-yellow-500" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <MdOutlineStarRate
          key="half"
          className="text-[13pt] text-yellow-500"
        />
      );
    }

    // Add empty stars for remaining slots
    for (let i = stars.length; i < totalStars; i++) {
      stars.push(
        <MdOutlineStarRate
          key={`empty-${i}`}
          className="text-[13pt] text-gray-300"
        />
      );
    }

    return stars;
  };

  return (
    <div className="w-[380px] h-auto flex flex-col gap-3 justify-center p-5 rounded-xl bg-gray-100 cursor-pointer text-black hover:shadow-lg"
     onClick={() => {
      navigate('/student/module_payment')
      addModuleKuppi(headline);
    }}
    >
      <img
        src={mainImage}
        alt="Main-Image"
        className="w-full h-56 object-cover rounded-lg bg-gray-400"
      />

      <p className="text-left font-semibold text-[18pt]">
        {headline.length >= 27 ? headline.slice(0, 25) + "..." : headline}
      </p>

      <p className="font-normal text-[12pt]">
        {description.length >= 90 ? description.slice(0, 87) + "..." : description}
      </p>

      <div className="w-full h-fit flex flex-row items-center gap-1">
        <p className="text-[12pt] font-normal text-blue-500">{rate}</p>
        <div className="flex flex-row">{renderStars(rate)}</div>
        <p className="text-[12pt] font-normal text-gray-400 ml-1">({numofrated})</p>
      </div>

      <div className="flex flex-row items-center justify-between mt-3">
        <div className="flex flex-row items-center gap-2">
          <img
            src={tutorImage}
            alt="-"
            className="w-12 h-12 object-cover rounded-full bg-gray-400"
          />
          <div>
            <span className="block text-sm font-semibold">{tutorName}</span>
            <span className="block text-xs text-gray-500">{tutorEnrolledYear}</span>
          </div>
        </div>
        <p className="w-auto h-fit text-right text-lg font-bold text-blue-600">LKR.{price}</p>
      </div>
    </div>
  );
};

export default SearchedModuleBox;