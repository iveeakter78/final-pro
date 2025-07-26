import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import imges from "../assets/logo.png"
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Header = () => {
  let [show,setShow] = useState(false)
  return (
   <>
     <section className={` bg-white lg:py-2 lg:mb-0 ${show ? "mb-0" : "mb-6"} w-full`}>
        <Container>
          <Flex className={`lg:flex items-center`}>
            <div className='lg:w-2/8 w-full'>
              <img src={imges} alt="" />
            </div>
            <div className='lg:w-6/8 w-full'>
            <ul className={`lg:flex flex-wrap justify-center lg:me-[35%] me-0 text-center gap-x-3 lg:mt-0 mt-2 py-2 lg:py-0
               duration-300 ease-in-out ${show == true ? "bg-green-300 mt-3 " : " mt-[-160px]"}`}>
                <Link to={"/"}><li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">Home</a></li></Link>
                 <Link to={"/shop"}><li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">Shop</a></li></Link>
                  <Link to={"/about"}><li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">About</a></li></Link>
                  <Link to={"/contact"}><li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">Contacts</a></li></Link>  
                   <Link to={"/journal"}> <li><a className='font-dm font-normal text-[14px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out' href="#">Journal</a></li></Link> 
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