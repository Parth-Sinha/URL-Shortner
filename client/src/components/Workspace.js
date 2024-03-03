import React from "react";
import UrlTextBox from "./Maindashboard/UrlTextBox";
import Urls from "./Urls";
import TeamList from "./TeamList";
import GoUpArrow from "./GoUpArrow/GoUpArrow";
import Navbar from "./Navbar";
import UrlTable from "./UrlTable";

const Workspace = () => {

  



  return (
    <div className="bg-black text-white pb-2">

      {/* top-arrow */}
     <GoUpArrow />

      {/* navbar */}
      <Navbar/>
      

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
        <UrlTable />
      </div>




    </div>


  )
}

export default Workspace;
