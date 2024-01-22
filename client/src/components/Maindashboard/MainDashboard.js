import React from 'react'
import UrlTextBox from './UrlTextBox'
import { useNavigate } from 'react-router-dom'

function MainDashboard() {

  const navigate = useNavigate()

  const handleRegisterClick = ()=>{
    navigate('/register')
  }


  const handleLoginClick = ()=>{
    navigate('/login')
  }

  const handleLogoClick = ()=>{
    navigate('/')
  }

  return (
    <>
      <div className="bg-[url('../src/images/background.jpg')] h-screen w-full bg-cover">
        <div className="w-full justify-center items-center inline-flex mt-2">
          <div className="grow shrink basis-0 self-stretch justify-between items-center inline-flex ml-4">
            <div className="text-center text-cyan-500 text-[2.307rem] font-extrabold font-['Inter']" onClick={handleLogoClick}>Slinkly</div>
            <div className="justify-start items-start gap-5 flex mr-4">
              <div className="w-[7.5rem] pl-[25px] pr-[25.19px] py-[21px] bg-gray-900 rounded-[48px] shadow border border-gray-700 justify-center items-center gap-2.5 flex">
                <button className="text-center text-white text-base font-semibold font-['Inter'] leading-[18px]" onClick={handleLoginClick}>Login</button>
              </div>
              <div className="h-[60px] pl-[25px] pr-[25.05px] py-[21px] bg-blue-700 rounded-[48px] shadow border border-blue-700 justify-center items-center flex">
                  <button className="text-center text-white text-base font-semibold font-['Inter'] leading-[18px]" onClick={handleRegisterClick}>Register Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative top-48">
          <div className="w-full h-auto left-0 top-0 absolute flex-col justify-start items-center gap-5 inline-flex">
            <div className="w-full h-auto pl-[2.375rem] pr-[2.375rem] justify-center items-center inline-flex">
              <div className="text-center bg-gradient-to-r from-cyan-300 to-emerald-400 text-transparent bg-clip-text text-6xl font-extrabold font-['Inter'] leading-[5rem]">Shorten Your Loooong Links :)</div>
            </div>
            <div className="w-1/3 h-auto text-center text-gray-300 text-base font-light font-['Inter'] leading-normal">Slinkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</div>
          </div>

          <div className="w-full h-auto top-[194px] absolute flex-col justify-start items-center gap-8 inline-flex">
            <UrlTextBox isLinkhidden = {false}/>
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="justify-center items-center gap-2.5 inline-flex">
                <div className="text-center"><span className="text-gray-300 text-sm font-light font-['Inter']">You can create </span><span className="text-pink-500 text-sm font-bold font-['Inter']">05</span><span className="text-gray-300 text-sm font-light font-['Inter']"> more links. Register  Now to enjoy Unlimited usage</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainDashboard
