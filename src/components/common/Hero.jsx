import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero1.jpg";
import cupImage from "../../assets/cup.png";
import PadhoIndiaLogo from "../../assets/padho_India_logo.png";

const Hero = () => {
  return (
    <div
      className="relative h-[150vh] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="text-center px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-yellow-300 leading-relaxed mb-4">
            PADHO INDIA SCHOLARSHIP
          </h1>

          {/* Updated Description */}
          <p className="text-gray-300 text-sm md:text-lg lg:text-xl mb-4 leading-relaxed font-medium">
            Millions Candidates Will Become{" "}
            <span className="text-yellow-400 font-semibold">Crorepatis</span>.
            <br />
            Over 10 Lakhs Students will get{" "}
            <span className="text-blue-400 font-semibold">Scholarship</span>...
            <br />
            And Millions of Students will make career by{" "}
            <span className="text-green-400 font-semibold">Higher study</span>.
          </p>

          {/* Cup Image and Text */}
          <div className="mb-6 flex flex-col items-center">
            <img
              src={PadhoIndiaLogo}
              alt="Cup"
              className="w-[180px] h-auto object-contain mb-2"
            />
            <span className="text-white px-6 py-2 font-bold text-lg animate-blinkBg">
              Scholarship Details
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link to="/freeonlinetuition" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-black text-xs md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
                Free Tuitions (5 to 12)
              </button>
            </Link>

            <Link to="/register" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkBlue hover:scale-105 transition-transform duration-300">
                Students Registration
              </button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link to="/exclusivescholarships" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkBlue hover:scale-105 transition-transform duration-300">
                Scholarship System
              </button>
            </Link>
             <Link to="/freeonlineitclasses" className="w-full sm:w-auto">
             <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              Free IT Training
            </button>
            </Link>
            
            <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              School Benefits
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link to="/GetMemberShipCard" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkBlue hover:scale-105 transition-transform duration-300">
                Get Membership Card
              </button>
            </Link>


          <Link to="/freemedicaltreatment" className="w-full sm:w-auto">
             <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              Free Medical Treatment
            </button>
            </Link>
             <Link to="/legalsupport" className="w-full sm:w-auto">
             <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              Legal Support
            </button>
            </Link>
            
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link to="/jobfacilities" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkBlue hover:scale-105 transition-transform duration-300">
                Job Vacancy
              </button>
            </Link>
            <Link to="/freespokenenglish" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              Free Spoken English
            </button>
            </Link>
            <Link to="/motivationalandinspiringclasses" className="w-full sm:w-auto">
             <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              Free Acting Chances
            </button>
            </Link>
            
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link to="/register" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkBlue hover:scale-105 transition-transform duration-300">
                Up to 70% discount for medicines
              </button>
            </Link>
             <Link to="/freecareercounseling" className="w-full sm:w-auto">
             <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              Free Career Counseling
            </button>
            </Link>
            
           <Link to="/motivationalandinspiringclasses" className="w-full sm:w-auto">
             <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              Up to 50% discount for QAR <br /> (Quick Affordable Rides)
            </button>
            </Link>
            
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link to="/motivationalandinspiringclasses" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkBlue hover:scale-105 transition-transform duration-300">
                Up to 50% discount for KK Raksha Kavach
              </button>
            </Link>
           <Link to="/motivationalandinspiringclasses" className="w-full sm:w-auto">
            <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
              Events Live Streaming
            </button>
            </Link>
            
            <Link to="/motivationalandinspiringclasses" className="w-full sm:w-auto">
              <button className="min-w-[20rem] text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
                State Level Top School
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
