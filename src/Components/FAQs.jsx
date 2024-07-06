import React from 'react'
import darrow from "./utils/darrow.png"
import headphone from "./utils/headphone.png"
const FAQs = () => {
  return (
    <div>
    <div id="FAQs" className='flex w-screen justify-center mt-48'>
    <div className='w-[1281px] h-[341px] flex flex-col gap-20'>
      <div className='w-[380px] h-[36px] flex justify-center ml-[28rem]'> 
        <h1 className='font-semibold text-[28px] leading-[36px]'>Frequently Asked <span className='text-[#1A73E8]'>Questions</span></h1>
      </div>
      <div className='flex gap-28'>
      <div className='flex flex-col gap-10'> 
        <div className='w-[259px] h-[68px] flex justify-center items-center shadow-lg rounded-lg border-2 border-[#E2E8F0] '>
        <button className='w-[190px] h-[28px] text-[17px] text-[#1A73E8] font-semibold'> Eligibility </button>
        </div>
        <div className='w-[259px] h-[68px] flex justify-center items-center  shadow-lg rounded-lg  border-2 border-[#737373] '>
        <button className='w-[190px] h-[28px] text-[17px] text-[#737373] font-semibold'> How To Use? </button>
        </div>
        <div className='w-[259px] h-[68px] flex justify-center items-center shadow-lg rounded-lg  border-2 border-[#737373]'>
        <button className='w-[190px] h-[28px] text-[17px] text-[#737373] font-semibold'>Terems And Conditions  </button>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-between w-[918px] h-[68px] '>
        <h1 className='font-semibold text-[#1A73E8] text-[17px]'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</h1>
        <img src={darrow} alt="" className='h-[7px] w-[12px]' />
        </div>
        <div>
        <h1 className='font-normal  text-[16px]'>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
        suitable for individuals from any field of work.</h1>
        </div>
        <div className='flex justify-between w-[770px] h-[68px]'>
        <h1 className='font-semibold  text-[17px]'>What is the minimum system configuration required?</h1>
        <img src={darrow} alt="" className='h-[7px] w-[12px]' />
        </div>
      </div>
      </div>
    </div>
    </div>
    <div className='flex w-screen justify-center items-center mt-72'>
    <div className="relative bg-blue-600 text-white p-6 rounded-lg flex items-center justify-between overflow-hidden w-[1360px] h-[210px]">
      <div className="absolute inset-0 flex justify-center items-center left-[720px] mt-[340px]">
        <div className="w-[631px] h-[631px] bg-[#237CF2] rounded-full opacity-60"></div>
        <div className="w-[514px] h-[514px] bg-[#3289FC] rounded-full opacity-50 absolute"></div>
        <div className="w-[374px] h-[374px] bg-[#4696FF] rounded-full opacity-40 absolute"></div>
      </div>
      <div className="flex items-center space-x-10  relative z-10 ml-6">
        <div className="bg-white p-2 rounded-xl">
          <img src={headphone} alt="icon" className="h-12 w-12" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Want to delve deeper into the program?</h2>
          <p>Share your details to receive expert insights from our program team!</p>
        </div>
      </div>
      <button className="bg-white text-[#1A73E8] w-[200px] text-[18px] h-[52px] px-4 py-2 rounded-lg font-semibold relative z-10 mr-10">
        Get in touch &gt;
      </button>
    </div>
    </div>
    </div>
  )
}


export default FAQs