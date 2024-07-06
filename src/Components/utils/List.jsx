import React from 'react'
import arrow from "./arrow.png"
import garrow from "./garrow.png"
const List = () => {
  return (
    <div>
        <div className='w-[238px] h-[484px] rounded-lg flex flex-col justify-center items-center shadow-lg'>
            <div className="w-[238px] h-[53px] flex justify-between  rounded-t-lg items-center bg-[#1A73E8] text-white px-4">
                <h1 >All Program</h1>
                <img src={arrow} alt="" className='w-3 h-4 ' />
            </div>
            <div className="w-[238px] h-[53px] flex justify-between items-center px-4">
                <h1>Product Management</h1>
                <img src={garrow} alt="" className='w-3 h-4' />
            </div>
            <hr className='border-1 w-[205px] ml-4 border-slate-400' />
            <div className="w-[238px] h-[53px] flex justify-between items-center px-4">
                <h1>Strategy & Leadership</h1>
                <img src={garrow} alt="" className='w-3 h-4'/>
            </div>
            <hr className='border-1 w-[205px] ml-4 border-slate-400' />
            <div className="w-[238px] h-[53px] flex justify-between items-center px-4">
                <h1>Business Management</h1>
                <img src={garrow} alt=""className='w-3 h-4' />
            </div>
            <hr className='border-1 w-[205px] ml-4 border-slate-400' />
            <div className="w-[238px] h-[53px] flex justify-between items-center px-4">
                <h1>Fintech</h1>
                <img src={garrow} alt="" className='w-3 h-4'/>
            </div>
            <hr className='border-1 w-[205px] ml-4 border-slate-400' />
            <div className="w-[238px] h-[53px] flex justify-between items-center px-4">
                <h1>Senior Management</h1>
                <img src={garrow} alt="" className='w-3 h-4'/>
            </div>
            <hr className='border-1 w-[205px] ml-4 border-slate-400' />
            <div className="w-[238px] h-[53px] flex justify-between items-center px-4">
                <h1>Data Science</h1>
                <img src={garrow} alt="" className='w-3 h-4'/>
            </div>
            <hr className='border-1 w-[205px] ml-4 border-slate-400' />
            <div className="w-[238px] h-[53px] flex justify-between items-center px-4">
                <h1>Digital Transformation</h1>
                <img src={garrow} alt="" className='w-3 h-4'/>
            </div>
            <hr className='border-1 w-[205px] ml-4 border-slate-400' />
            <div className="w-[238px] h-[53px] flex justify-between items-center px-4">
                <h1>Business Analytics</h1>
                <img src={garrow} alt="" className='w-3 h-4'/>
            </div>
        </div>
    </div> 
  )
}

export default List