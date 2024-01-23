import React from "react";
import UrlTextBox from "./Maindashboard/UrlTextBox";
import Urls from "./Urls";
import TeamList from "./TeamList";
const Workspace = () => {

  function handleUserDropdown(){
    const elem = document.getElementById("userDropdown");
    elem.classList.toggle("hidden");
  }

  return (
    <div className="bg-[#121212] text-white pb-2">


      {/* navbar */}
      <div className="flex justify-between py-2 pl-4 pr-[5%] items-center">
        <div className="text-center text-cyan-500 text-[2.307rem] font-extrabold font-['Inter']">Slinkly</div>
        <div className="flex justify-center items-center">
          <button className="mr-10 text-xl p-1.5  rounded-md bg-cyan-500 hidden sm:inline">PREMIUM</button>
          <span onClick={handleUserDropdown} className="flex justify-center items-center gap-2 cursor-pointer">
            <div><i className="text-green-400 fa-solid fa-circle-user fa-xl"></i></div>
            <div className="relative">UserName
              
              <div className="absolute hidden mt-1 bg-slate-500 p-2 right-[-20px] w-[6rem] rounded" id="userDropdown"><ul>
                <li className="">Sign Out</li>
                <li>Subscribe</li>
                <li>Profile</li>
              </ul></div>
              </div>

            <div><i class="fa-solid fa-caret-down"></i></div>

          </span>
        </div>
      </div>

      {/* link shortener */}
      <div className="flex justify-center mt-4">
        <UrlTextBox />
      </div>

      {/* teams section */}
      <div className="mt-4">
        <div className="text-4xl ml-4">TEAMS</div>
        <TeamList />
      </div>

      {/* urls list */}
      <div className="mt-4">
        <div className="text-4xl ml-4">URLS</div>
        <Urls />
      </div>




    </div>


  )
}

export default Workspace;
