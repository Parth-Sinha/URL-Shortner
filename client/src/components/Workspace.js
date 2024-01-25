import React from "react";
import UrlTextBox from "./Maindashboard/UrlTextBox";
import Urls from "./Urls";
import TeamList from "./TeamList";
import GoUpArrow from "./GoUpArrow/GoUpArrow";

const Workspace = () => {

  function handleUserDropdown(){
    const elem = document.getElementById("userDropdown");
    elem.classList.toggle("hidden");
    document.getElementById("dropDownArrow").classList.toggle("rotate-180");
  }



  return (
    <div className="bg-black text-white pb-2">

      {/* top-arrow */}
     <GoUpArrow />


      {/* navbar */}
      <div className="flex justify-between py-2 pl-4 pr-[5%] items-center top-0 z-10 sticky bg-[#0d0d13f0] ">
        <div className="text-center text-cyan-500 text-[2.307rem] font-extrabold font-['Inter']">Slinkly</div>
        <div className="flex justify-center items-center">
          <button className="mr-10 text-xl p-1.5  rounded-[48px] text-yellow-600 pl-[25px] pr-[25.05px] py-[11px] hidden sm:inline">PREMIUM</button>
          <span onClick={handleUserDropdown} className="flex justify-center items-center gap-2 cursor-pointer">
            <div><i className="text-green-400 fa-solid fa-circle-user fa-xl"></i></div>
            <div className="relative border-none bg-transparent select-none  rounded-[48px] text-base font-light font-['Inter'] leading-7 ">UserName
              
              <div className="absolute transition-all duration-200 hidden mt-1 bg-[#0A2647] p-1 right-[-20px] w-[6rem] rounded z-20 gap-1" id="userDropdown"><ul>
              <a href="/"><li className="border-b-[.1rem] p-1 hover:bg-[#07192f] transition-all duration-200">Profile</li></a>
              <a href="/"><li className="border-b-[.1rem] p-1 hover:bg-[#07192f] transition-all duration-200">Plans</li></a>
              <a href="/"><li className=" p-1 hover:bg-[#07192f] transition-all duration-200">Sign Out</li></a>
              
                
              </ul></div>
              </div>

            <div id ="dropDownArrow" className="transition-all duration-200 origin-center"><i class="fa-solid fa-caret-down"></i></div>

          </span>
        </div>
      </div>

      {/* link shortener */}
      <div className="flex justify-center mt-4">
        <UrlTextBox />
      </div>

      {/* teams section */}
      <div className="mt-4 mb-14">
        <div className="text-4xl ml-4">TEAMS</div>
        <TeamList />
      </div>

      {/* urls list */}
      <div className="mt-4">
        <div className="text-4xl ml-4 mb-8">URLS</div>
        <Urls />
      </div>




    </div>


  )
}

export default Workspace;
