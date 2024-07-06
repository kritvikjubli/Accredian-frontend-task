import React ,{useState}from 'react'
import aniversary from "../imgs/aniversary.png"
import money from "../imgs/money.png"
import m1 from "../imgs/m1.png"
import m2 from "../imgs/m2.png"
import m3 from "../imgs/m3.png"
import m4 from "../imgs/m4.png"
import SurveyModal from './Modalform'

const Refer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div id="Refer" className='flex justify-center items-center mt-10' >

        < div className=' flex w-[1360px] h-[692px] bg-[#EEF5FF] shadow-md rounded-[29px]'>
          <div className='flex flex-col gap-14'>
          <div className='font-[700] h-[190px] leading-[88px] w-[502px] text-[88px] ml-10 mt-[100px]'>
            <h1>Let's Learn<br/>& Earn</h1>
          </div>

          <div className='font-[400] text-[40px] leading-[65px] ml-10'>
            <h1>Get a chance to win <br/>up-to <span className='font-[700] text-[54px] text-[#1A73E8]'>Rs.15,000</span></h1>
          </div>

          <div>
            <button className='bg-[#1A73E8] text-white  w-[192px] h-[54px] top-[824px] left-[325px] py-[15px] px-[52px] rounded-lg ml-10' onClick={openModal}>Refer Now</button>
            <SurveyModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
          </div>
          <div>
          <img src={aniversary} className='relative z-[1]  w-[814px] h-[725px]'  alt="#" />
          </div>
            <img src={m1} className='w-[157px] h-[87px] top-[242px] left-[280px] absolute z-0 ' alt="#" />
            <img src={money} className='size-[157px] top-[744px] left-[840px] absolute z-0 ' alt="#" />
            <img src={m4} className='w-[157px] h-[87px] absolute z-[0] top-[243px] left-[1480px] ' alt="#" />
            <img src={m2} className='size-[157px] absolute z-0 left-[1025px] overflow-visible ' alt="#" />
            <img src={m3} className='size-[157px] absolute z-0 top-[523px] left-[1485px]' alt="#" />
        </div>

      </div>
  )
}

export default Refer