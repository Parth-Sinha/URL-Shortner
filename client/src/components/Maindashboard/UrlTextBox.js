import React, { useState } from 'react'

function UrlTextBox({
    isLinkhidden = false,
    onShortUrlRecieved,
}) {
    const [url, setUrl] = useState("www.google.com")
    const handleShortenClick = ()=>{
        const newUrl = {
            redirectedUrl: url,
        }
        fetch('http://localhost:8000/api/user/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
            , 
            body: JSON.stringify(newUrl),
        }).then(res=>res.json())
        .then((res) =>{
            console.log(url)
            const recievedShortUrl = res.shortUrl;
            console.log(recievedShortUrl);
        })
        .catch(error =>{
            window.alert(error);
            return;
        })
    }
    return (
        <div className="w-1/2 h-[76px] relative flex justify-end">

            <div className="w-1/4 h-[60px] pl-[25px] pr-[25.05px] py-[21px] mt-2 bg-blue-700 rounded-[48px] shadow border border-blue-700 justify-center items-center inline-flex">
                <button className="text-center text-white text-base font-semibold font-['Inter'] leading-[18px]" onClick={handleShortenClick}>Shorten Now!</button>
            </div>
            <div className="w-3/4 h-[76px] pl-[25px] pr-[25.19px] py-[14px] left-0 top-0 absolute bg-gray-900 rounded-[48px] shadow border-4 border-blue-700 border-opacity-10 justify-start items-center inline-flex">
                <div className="w-full justify-center items-center gap-5 flex">
                    <div className="text-center text-gray-300 text-xl font-light font-['Font Awesome 6 Pro'] leading-7" hidden = {isLinkhidden}>link</div>
                    <div className="w-full justify-start items-center gap-[5px] flex">
                        <input className="w-full text-gray-300 border-none bg-transparent select-none bg-gray-900 rounded-[48px] text-base font-light font-['Inter'] leading-7 " type="text" name='linkInput' placeholder='https://www.google.com' style={{outline:"none"}} onChange={e => setUrl(e.target.value)}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UrlTextBox
