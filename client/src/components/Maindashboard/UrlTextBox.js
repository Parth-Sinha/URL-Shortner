import React from 'react'

function UrlTextBox({
    isLinkhidden = false,

}) {
    const handleShortenClick = ()=>{

    }
    return (
        // <div className="h-[76px] relative flex justify-end">

        //     <div className="w-1/4 h-[60px] pl-[25px] pr-[25.05px] py-[21px] mt-2 bg-blue-700 rounded-[48px] shadow border border-blue-700 justify-center items-center inline-flex">
        //         <button className="text-center text-white text-base font-semibold font-['Inter'] leading-[18px]" onClick={handleShortenClick}>Shorten Now!</button>
        //     </div>
        //     <div className="w-3/4 h-[76px] pl-[25px] pr-[25.19px] py-[14px] left-0 top-0 absolute bg-gray-900 rounded-[48px] shadow border-4 border-blue-700 border-opacity-10 justify-start items-center inline-flex">
        //         <div className="w-full justify-center items-center gap-5 flex">
        //             <div className="text-center text-gray-300 text-xl font-light font-['Font Awesome 6 Pro'] leading-7" hidden = {isLinkhidden}>link</div>
        //             <div className="w-full justify-start items-center gap-[5px] flex">
        //                 <input className="w-full text-gray-300 border-none bg-transparent select-none bg-gray-900 rounded-[48px] text-base font-light font-['Inter'] leading-7 " type="text" name='linkInput' placeholder='https://www.google.com' style={{outline:"none"}}/>
        //             </div>
        //         </div>
        //     </div>

        // </div>

        <div className='flex p-4 sm:text-xl text-md items-center text-white  w-[100%]  sm:w-[35rem] justify-center'>
            <div className='border-2 border-r-1 p-2 rounded-l-lg' hidden={isLinkhidden}><label for="link">Link</label></div>
            <div><input id="link"className='border-y-2 p-2 bg-blue-700 focus:outline-none focus:bg-blue-700 sm:w-[20rem] w-[9.6rem]' type='text' placeholder='Enter your link here'/></div>
            <div className='border-2 p-2 bg-cyan-500 border-l-.5 rounded-r-lg'><button onClick={handleShortenClick}>Shorten</button></div>
        </div>
    )
}

export default UrlTextBox
