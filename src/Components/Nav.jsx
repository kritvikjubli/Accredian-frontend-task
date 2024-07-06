import React from 'react'
import Acc from "../imgs/Acc.png"
import arrow from "../imgs/arrow.png"
const Nav = () => {
  return (
    <div className="h-[79.2px] px top-[60px] py-[9.6px] px-[280px]">
    <div className='flex justify-between items-center py-[10px]'>
        <div className='flex justify-center items-center gap-[32px]'>
            <a href="https://home.accredian.com/" target='_blank' rel='noreferrer'>
            <img className='h-[36.66px] w-[125px]' src={Acc} alt="#"/>
            </a>
            <button className='bg-blue-500 w-[116px] h-[40px] text-white rounded-md flex justify-center items-center gap-[5px]'> <span>Courses</span><img className='h-4 w-4' src={arrow} alt="#" /></button>
        </div>
        <div className='flex justify-center items-center gap-[32px] h-[40px] font-[500]' >
            <h1>Refer & Earn</h1>
            <h1>Resources</h1>
            <h1>About us</h1>
            <button className='w-[77px] h-[40px] bg-[#eaedf1] rounded-md'>Login</button>
            <button className='w-[115px] h-[40px] bg-[#1A73E8] rounded-md text-white'>Try for free</button>

        </div>
    </div>
    </div>
  )
}

export default Nav