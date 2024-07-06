import React,{useState} from 'react'
import SurveyModal from './Modalform'
import howrefer from "../imgs/howrefer.png"
import add from "../imgs/add.png"
import earn from "../imgs/earn.png"
import wallet from "../imgs/wallet.png"
import List from './utils/List'
import Table from './utils/Table'
import darrow from "./utils/darrow.png"

const Benifit = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div id="Benefits" className='mt-[50px]'>
        <div className='flex flex-col justify-center items-center bg-[#EEF5FF] w-screen h-[785px] gap-28'>
          <div className=' flex flex-col justify-center items-center mt-20'>
            <h1 className='font-[600]  text-[28px]'>How Do I <span className='text-[#1A73E8]'>Refer?</span></h1>
            <img src={howrefer} alt="" className='w-[1387px] h-[491px] relative' />
            <img src={add} alt="" className='w-[88px] h-[66px] absolute top-[1234px] left-[535px]' />
            <h1 className='absolute w-[193px] h-[88px] top-[1334px] left-[470px] text-[16px] font-[400] text-center '> Submit referrals easily via our website’s referral section.</h1>
            
            <img src={earn} alt="" className='w-[66px] h-[66px] absolute top-[1234px] left-[935px]' />
            <h1 className='absolute w-[193px] h-[88px] top-[1334px] left-[865px] text-[16px] font-[400] text-center '> Earn rewards once your referral joins an Accredian program.</h1>
            
            <img src={wallet} alt="" className='w-[66px] h-[66px] absolute top-[1234px] left-[1315px]' />
            <h1 className='absolute w-[193px] h-[88px] top-[1334px] left-[1260px] text-[16px] font-[400] text-center '> Both parties receive a bonus 30 days after program enrollment.</h1>
          </div>
          <div>
            <button className='bg-[#1A73E8] text-white  w-[192px] h-[54px] top-[824px] left-[325px] py-[15px] mb-12 px-[52px] rounded-lg' onClick={openModal}>Refer Now</button>
            <SurveyModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center mt-20'>
            <h1 className='w-[584px] h-[59px] font-[600] text-[28px] text-center'>What Are The<span className='text-[#1A73E8]'> Referral Benefits?</span></h1>
          </div>
          <div className='mt-12 flex flex-col justify-center items-center'>
            <div className='flex w-3/4 justify-end mr-60'>
              <button className='flex gap-2'  >
                <span>Enrolled</span>
                <div className='border border-[#3C4852] rounded-xl w-[34px] h-[17px]  flex justify-end items-center'>
                <span className='text-[#1A73E8] text-[45px] mb-2'>&#8226;</span>
                </div>
              </button>
            </div>
            <div className='flex gap-10 mt-2'>
                <List/>
                <Table/>
            </div>
            <div className=' w-3/4 flex justify-end mr-56 mt-8'>
              <button className='w-[174px] h-[41px] flex justify-center items-center gap-3 border rounded-lg text-[#9aa0a6] border-[#B6B6B6]'>
                <span className=''>Show More</span>
                 <img src={darrow} alt="" className='w-[15px] h-[9px]' />
                 </button>
            </div>
            <div className='mt-12'>
               <button className='bg-[#1A73E8] text-white  w-[236px] h-[64px] rounded-lg text-[20px] ' onClick={openModal}> Refer Now</button>
               <SurveyModal isOpen={modalIsOpen} onRequestClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Benifit