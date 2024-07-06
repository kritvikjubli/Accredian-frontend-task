import React from 'react'
import Acc from "../imgs/Accwhite.png"
import plus from "../imgs/plus.png"
import facebook from "../imgs/facebook.png"
import insta from "../imgs/insta.png"
import twitter from "../imgs/twitter.png"
import inn from "../imgs/in.png"
import youtube from "../imgs/youtube.png"
const Support = () => {
  return (

    <footer id="Support" className="bg-[#282828] text-white py-10 mt-40">
        <div className='flex  justify-evenly gap-40 items-center'>
          <img
            src={Acc}
            alt="accredian logo"
            className="mb-4 w-[144px] h-[38px]"
          />
          <div className='flex flex-col'>
           <div className="bg-[#1A73E8] flex justify-center items-center text-center p-4 text-[14px]  w-[250px] h-[39px]">
      <h3 className="text-[14px] font-bold text-white">Schedule 1-on-1 Call Now</h3>
    </div>
    <div>
      <p className="text-[14px] text-white mt-2">Speak with a learning advisor</p>
    </div>
         </div>
        </div>
        <hr className='w-[1200px] mt-6 ml-72' />
      <div className="container mx-auto grid grid-cols-3 gap-8 justify-center items-center ml-80">
          
        <div className="mt-16 w-[432px]">
          <div>
            <h3 className="text-[20px] font-bold mb-4">Programs</h3>
            <ul className="space-y-6 font-bold text-[17px]">
              <li className='flex justify-between '>Data Science & AI     <img src={plus} className='w-[14px] h-[14px]' alt="" /></li>
              <li className='flex justify-between '>Product Management    <img src={plus} className='w-[14px] h-[14px]' alt="" /></li>
              <li className='flex justify-between '>Business Analytics    <img src={plus} className='w-[14px] h-[14px]' alt="" /></li>
              <li className='flex justify-between '>Digital Transformation<img src={plus} className='w-[14px] h-[14px]' alt="" /></li>
              <li className='flex justify-between '>Business Management   <img src={plus} className='w-[14px] h-[14px]' alt="" /></li>
              <li className='flex justify-between '>Project Management    <img src={plus} className='w-[14px] h-[14px]' alt="" /></li>
              <li className='flex justify-between '>Strategy & Leadership <img src={plus} className='w-[14px] h-[14px]' alt="" /></li>
              <li className='flex justify-between '>Senior Management     <img src={plus} className='w-[14px] h-[14px]' alt="" /></li>
              <li className='flex justify-between '>Fintech               <img src={plus} className='w-[14px] h-[14px]' alt="" /></li>
            </ul>
          </div>
        </div>
          <div className='w-[528px]'>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-[14px]" >
              <li>Email us (For Data Science Queries): admissions@accredian.com</li>
              <li>Email us (For Product Management Queries): rpm@accredian.com</li>
              <li>Data Science Admission Helpline: +91 9075653292 (9 AM - 7 PM)</li>
              <li>Product Management Admission Helpline: +91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969322507</li>
              <li>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
                Gurugram, Haryana 122015
              </li>
            </ul>
            <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com">
                <img src={facebook} alt="Facebook" className='w-[20px] h-[20px] ' />
              </a>
              <a href="https://www.linkedin.com">
                <img src={inn} alt="LinkedIn" className='w-[20px] h-[20px] ' />
              </a>
              <a href="https://www.twitter.com">
                <img src={twitter} alt="Twitter" className='w-[20px] h-[20px] ' />
              </a>
              <a href="https://www.youtube.com">
                <img src={insta } alt="YouTube" className='w-[20px] h-[20px] ' />
              </a>
              <a href="https://www.youtube.com">
                <img src={youtube} alt="YouTube" className='w-[20px] h-[20px] ' />
              </a>
            </div>
          </div>
          </div>
        <div className='w-[192px]'>
          <h3 className="text-lg font-bold mb-4">Accredian</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Master FAQs</li>
          </ul>
        </div>
      </div>
      <div className="space-y-2 flex justify-center mt-12">
            <div>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</div>
          </div>
      </footer>
  )
}

export default Support;