import React from 'react'
import Container from './Container'
import fimg from "../assets/logo.png"
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <section className='mt-[106px] bg-[#F5F5F3] py-[50px]'>
        <Container>
            <div className='w-full lg:flex md:flex flex-wrap justify-between items-center'>
              <div className='lg:w-2/12 md:w-1/2 w-full text-center lg:text-start md:text-start md:px-4 lg:px-0'>
               <h3 className='text-[#262626] font-dm font-bold text-16px mt-[17px]'>MENU</h3>
               <ul>
                <Link to="/"><li className='text-[#6D6D6D] font-dm font-normal text-[14px]'><p>Home</p></li></Link>
                <Link to="/shop"><li className='text-[#6D6D6D] font-dm font-normal text-[14px] py-1'><p>Shop</p></li></Link>
                 <Link to={"/about"}><li className='text-[#6D6D6D] font-dm font-normal text-[14px]'><p>About</p></li></Link>
                <Link to={"/contact"}><li className='text-[#6D6D6D] font-dm font-normal text-[14px] py-1'><p>Contact</p></li></Link>
                <Link to={"/journal"}><li className='text-[#6D6D6D] font-dm font-normal text-[14px]'><p>Journal</p></li></Link>
                
                
               </ul>
              </div>
              <div className='lg:w-2/12 md:w-1/2 w-full text-center lg:text-start md:text-start py-3 lg:py-0 md:py-0'>
              <h3 className='text-[#262626] font-dm font-bold text-16px mt-[17px]'>SHOP</h3>
                <ul>
                    <li className='text-[#6D6D6D] font-dm font-normal text-[14px]'><p>Category 1</p></li>
                    <li className='text-[#6D6D6D] font-dm font-normal text-[14px] py-1'><p>Category 2</p></li>
                    <li className='text-[#6D6D6D] font-dm font-normal text-[14px]'><p>Category 3</p></li>
                    <li className='text-[#6D6D6D] font-dm font-normal text-[14px] py-1'><p>Category 4</p></li>
                    <li className='text-[#6D6D6D] font-dm font-normal text-[14px]'><p>Category 5</p></li>
                </ul>
              </div>
              <div className='lg:w-3/12 md:w-1/2 w-full text-center lg:text-start md:text-start md:px-4 lg:px-0 md:py-3 lg:py-0 py-0'>
              <h3 className='text-[#262626] font-dm font-bold text-16px mt-[17px]'>HELP</h3>
              <div>
                <p className='text-[#6D6D6D] font-dm font-normal text-[14px]'>Privacy Policy</p>
                <p className='text-[#6D6D6D] font-dm font-normal text-[14px] py-1'>Terms & Conditions</p>
                <p className='text-[#6D6D6D] font-dm font-normal text-[14px]'>Special E-shop</p>
                <p className='text-[#6D6D6D] font-dm font-normal text-[14px] py-1'>Shipping</p>
                <p className='text-[#6D6D6D] font-dm font-normal text-[14px]'>Secure Payments</p>
              </div>
              </div>
              <div className='lg:w-3/12 md:w-1/2 w-full lg:mb-[100px] text-center lg:text-start md:text-start py-3 lg:py-0 md:py-0'>
              <h3 className='text-[#262626] font-dm font-bold text-16px mt-[17px]'>(052) 611-5711</h3>
              <h5 className='text-[#6D6D6D] font-dm font-normal text-[14px]'>company@domain.com</h5>
              </div>
              <div className='lg:w-2/12 md:w-1/2 w-full lg:mb-[100px] mt-[30px] lg:mt-0'>
              <div className='ms-[45%] lg:ms-[35%] md:ms-[20px]'>
                <img src={fimg} alt="" />
              </div>
              </div>
            </div>
            <div className='w-full lg:flex md:flex justify-between mt-[65px]'>
              <div className='lg:w-1/3 md:w-1/3 w-full'>
                <div className='flex items-center justify-center lg:justify-start md:justify-start md:px-4 lg:px-0 '>
                   <FaFacebookF />
                <div className='mx-[10px]'>
                   <FaLinkedinIn />
                </div>
                 <FaInstagram />
                </div>
              </div>
              <div className='lg:w-2/3 md:w-2/3 w-full text-center lg:ms-[42%] lg:text-start md:text-start py-4 lg:py-0 md:py-0'>
                <p className='text-[#6D6D6D] font-dm font-normal text-[14px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
              </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Footer