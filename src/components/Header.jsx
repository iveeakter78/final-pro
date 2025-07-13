import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import imges from "../assets/logo.png"
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

const Header = () => {
  let [show,setShow] = useState(false)
  return (
   <>
     <section className={` bg-white lg:py-2 ${show ? "mb-0" : "mb-6"} w-full`}>
        <Container>
          <Flex className={`lg:flex items-center`}>
            <div className='lg:w-4/8 w-full'>
              <img src={imges} alt="" />
            </div>
            <div className='lg:w-4/8 w-full'>
            <ul className={`lg:flex justify-center text-center lg:text-start gap-x-3 lg:mt-0 mt-2 py-2 lg:py-0
               duration-300 ease-in-out ${show == true ? "bg-green-300 mt-3 " : " mt-[-160px]"}`}>
                <li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">Home</a></li>
                  <li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">Shop</a></li>
                   <li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">About</a></li>
                    <li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">Contacts</a></li>
                     <li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">Journal</a></li>
              </ul>
              </div>
              <div className='lg:hidden absolute top-1 right-3' onClick={() =>setShow(!show)}>
                {show ? < RxCross2 /> :  < FaBars />}
               
                
              </div>
          </Flex>
        </Container>
     </section>
   </>
  )
}

export default Header