import Urls from "./Urls";
const TeamList = () => {

    function handleShowUrls(i) {
        console.log(i);
        const elems = document.getElementsByClassName("collapsible");
        elems[i].classList.toggle('h-0');



    }

    return (
        <div className="mx-[5%]">


            <div className="bg-slate-800 my-4 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:justify-between p-2 pl-3 sm:p-5 text-lg rounded-t-xl bg-cyan-600 sm:leading-10 items-left">
                    <div className="overflow-hidden">
                        <div className="text-2xl">Team Name</div>
                        <div>Created by Admin Name</div>
                        <div><span className="m-1"><i class="fa-solid fa-calendar-days"></i></span><span>23-01-2024</span></div>
                    </div>
                    <div className="flex-col flex sm:items-end items-center min-w-[14rem]">
                        <button className="" onClick={() => { handleShowUrls(0) }}><span className="m-1"><i class="fa-solid fa-list"></i></span>Show URLs<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-plus"></i></span>Add link<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-sign-out-alt"></i></span>Leave team<span></span></button>

                    </div>


                </div>
                <div className="collapsible h-0 overflow-hidden transition-all duration-300 ease-in-out">
                    <Urls />
                </div>

                
            </div>

            <div className="bg-slate-800 my-4 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:justify-between p-2 pl-3 sm:p-5 text-lg rounded-t-xl bg-cyan-600 sm:leading-10 items-left">
                    <div className="overflow-hidden">
                        <div className="text-2xl">Team Name</div>
                        <div>Created by Admin Name</div>
                        <div><span className="m-1"><i class="fa-solid fa-calendar-days"></i></span><span>23-01-2024</span></div>
                    </div>
                    <div className="flex-col flex sm:items-end items-center min-w-[14rem]">
                        <button className="" onClick={() => { handleShowUrls(1) }}><span className="m-1"><i class="fa-solid fa-list"></i></span>Show URLs<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-plus"></i></span>Add link<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-sign-out-alt"></i></span>Leave team<span></span></button>

                    </div>


                </div>
                <div className="collapsible h-0 overflow-hidden transition-all duration-300 ease-in-out">
                    <Urls />
                </div>

                
            </div>

            <div className="bg-slate-800 my-4 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:justify-between p-2 pl-3 sm:p-5 text-lg rounded-t-xl bg-cyan-600 sm:leading-10 items-left">
                    <div className="overflow-hidden">
                        <div className="text-2xl">Team Name</div>
                        <div>Created by Admin Name</div>
                        <div><span className="m-1"><i class="fa-solid fa-calendar-days"></i></span><span>23-01-2024</span></div>
                    </div>
                    <div className="flex-col flex sm:items-end items-center min-w-[14rem]">
                        <button className="" onClick={() => { handleShowUrls(2) }}><span className="m-1"><i class="fa-solid fa-list"></i></span>Show URLs<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-plus"></i></span>Add link<span></span></button>
                        <button><span className="m-1"><i class="fa-solid fa-sign-out-alt"></i></span>Leave team<span></span></button>

                    </div>


                </div>
                <div className="collapsible h-0 overflow-hidden transition-all duration-300 ease-in-out">
                    <Urls />
                </div>

                
            </div>








        </div>
    )
}

export default TeamList;