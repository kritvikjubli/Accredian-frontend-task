import React from 'react'
import eclipse from "../imgs/Eclipes.png"
import { Link } from 'react-scroll';

const Tabs = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[797px] h-[63px] bg-[#e5effc] rounded-[38px]'> 
            <ul className='flex justify-evenly items-center mt-4 font-[500]'>
            <Link  activeClass="active" to="section1" spy={true} smooth={true} duration={500} className='flex flex-col justify-center items-center cursor-pointer'><span className='text-[#1A73E8] font-[500]'>Refer</span> <img className='h-[6px] w-[6px]' src={eclipse}alt="#" /></Link>
            <Link to="Benefits" spy={true} smooth={true} duration={500} className="cursor-pointer">Benefits</Link>
            <Link to="FAQs" spy={true} smooth={true} duration={500} className="cursor-pointer" >FAQs</Link>
            <Link to="Support" spy={true} smooth={true} duration={500} className="cursor-pointer">Support</Link>
            </ul>
        </div>
        </div>
  )
}

export default Tabs