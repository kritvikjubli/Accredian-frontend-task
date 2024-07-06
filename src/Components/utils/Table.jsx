import React from 'react'
import cap from "./cap.png"
const Table = () => {
    const arr=[
        "Professional Certificate Program in Product Management",
        "PG Certificate Program in Strategic Product Management",
        "Executive Program in Data Driven Product Management",
        "Executive Program in Product Management and Digital Transformation",
        "Executive Program in Product Management",
        "Advanced Certification in Product Management",
        "Executive Program in Product Management and Project Management"
    ]
    const price=[
        "₹ 7,000",
        "₹ 9,000",
        "₹ 10,000",
        "₹ 10,000",
        "₹ 10,000",
        "₹ 10,000",
        "₹ 10,000"
    ]
    const price2=[
        "₹ 9,000",
        "₹ 11,000",
        "₹ 10,000",
        "₹ 10,000",
        "₹ 10,000",
        "₹ 10,000",
        "₹ 10,000"
    ]

  return (
    <div className=' flex flex-col h-[561px]'>
        <div className=' flex justify-between items-center bg-[#afcef7] w-[921px] h-[58px] rounded-t-lg'>
            <h1 className='font-[700] text-[20px] text-[#1A73E8] ml-10'>Program</h1>
            <h1 className='font-[700] text-[20px]  text-[#1A73E8]  ml-72'>Referrer Bonus</h1>
            <h1 className='font-[700] text-[20px]  text-[#1A73E8]  mr-10'>Refree Bonus</h1>
        </div>
        <div className='w-[921px] h-[503px] bg-[#f8fbff] flex flex-row shadow-lg rounded-b-xl justify-around gap-48'>
            <div className='flex flex-col gap-2'>
                    {arr.map((item,key)=>{
                        return (
                            <div id={key} className='w-[387px] h-[48px] flex justify-between items-center ml-2 mt-3'>
                    <img src={cap} alt="" className='h-[18px] w-[24px]'/>
                    <h1 className='text-[20px] leading-[24px] w-[350px] '>{item}</h1>
                        </div>
                    )
                    })}
            </div>
            <div className='flex flex-col h-[503px] justify-evenly ml-24 '> 
                {
                    price.map((items,key)=>{
                        return (
                            <div id={key}className='w-[60px] h-[24px] flex flex-col justify-evenly items-center'>
                                <h1 className='text-[20px] font-normal leading-[24px] w-[350px] '>{items}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col h-[503px] justify-evenly'>
            {
                    price2.map((items,key)=>{
                        return (
                            <div id={key} className='w-[60px] h-[24px] flex flex-col justify-evenly items-center'>
                                <h1 className='text-[20px] font-normal leading-[24px] w-[350px] '>{items}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='absolute  top-[2243px] w-[520px] left-[830px] rotate-90 size-3 border-slate-500 '/>
            <hr className='absolute  top-[2243px] w-[520px] left-[1080px] rotate-90 size-3 border-slate-500 '/>
        </div>
    </div>
  )
}

export default Table