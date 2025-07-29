import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiOutlineBars2 } from 'react-icons/hi2'
import { IoMdArrowDropdown, IoMdArrowDropright, IoMdSearch } from 'react-icons/io'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useRef } from 'react'
import image from "../assets/cart.png"
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
    let [cateshow, setCateshow] = useState(false)
    let [accshow, setAccshow] = useState(false)
    let [cartshow, setCartshow] = useState(false)
    // let handleCatagory =()=>{
    //     setCatshow(!catshow)
    // }

    let cateRef = useRef()
    let accRef = useRef()
    let cartRef = useRef()
    useEffect(()=>{
        document.addEventListener("click", (e)=>{
            // console.log(e.target);
            // console.log(cateRef.current.contains(e.target) == true);
            if(cateRef.current.contains(e.target) == true){
               setCateshow(!cateshow);
            }else{
                 setCateshow(cateshow);
            }
            if(accRef.current.contains(e.target) == true){
              setAccshow(!accshow);
            }else{
                setAccshow(accshow);
            }
            if(cartRef.current.contains(e.target) == true){
              setCartshow(!cartshow)
            }else{
              setCartshow(cartshow)
            }
        });
    },[cateshow, accshow, cartshow]);
  return (
    <>
    <div className='bg-[#F5F5F3] py-3 lg:pt-[50px] pt-[20px] w-full'>
        <Container>
            <div className={`flex flex-wrap items-center`}>
                <div className='w-2/8 relative'>
                <div className={`flex items-center gap-2`} ref={cateRef}>
                    <HiOutlineBars2 />
                    <h5 className='text-[#262626] font-dm font-normal text-[14px]'>Shop by Category</h5>
                </div>
                 {cateshow &&
                           <div className='bg-[#262626] py-2 absolute z-10 top-[42px] left-0 w-full'>
                     <ul>
                  <li className='text-[rgba(255,255,255,0.7)] relative group
                     ps-[20px] font-dm font-normal py-3 border-b-1 border-[#979797] text-[14px] hover:text-[#fff] hover:ps-[30px] duration-300 ease-in-out'>
                     <div className='flex justify-between'>
                          <span> Accesories</span>
                        <div>
                            <IoMdArrowDropright />
                        </div>
                     </div>
                     <ul className='absolute top-[15px] left-[100%] bg-[#262626] py-2 w-[150px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                        <li className=' font-dm font-normal ps-[20px] py-1 text-[rgba(255,255,255,0.7)] border-b-1 
                        border-[#979797] text-[14px] 
                        hover:text-[#fff] hover:ps-[30px] duration-300 ease-in-out'>home1</li>
                        <li className=' font-dm font-normal ps-[20px] py-1 text-[rgba(255,255,255,0.7)] border-b-1 
                        border-[#979797] text-[14px] 
                        hover:text-[#fff] hover:ps-[30px] duration-300 ease-in-out'>home2</li>
                        <li className=' font-dm font-normal ps-[20px] py-1 text-[rgba(255,255,255,0.7)]  
                        text-[14px] hover:text-[#fff] hover:ps-[30px] duration-300 ease-in-out'>home3</li>
                     </ul>
                     </li>
                     <li className='text-[rgba(255,255,255,0.7)]
                     ps-[20px] font-dm font-normal  py-3 border-b-1 border-[#979797] text-[14px] hover:text-[#fff] 
                     hover:ps-[30px] duration-300 ease-in-out'>Furniture</li>
                      <li className='text-[rgba(255,255,255,0.7)]
                     ps-[20px] font-dm font-normal py-3 border-b-1 border-[#979797] 
                     text-[14px] hover:text-[#fff] hover:ps-[30px] duration-300 ease-in-out'>Electronics</li>
                       <li className='text-[rgba(255,255,255,0.7)]
                     ps-[20px] font-dm font-normal py-3 border-b-1 border-[#979797] text-[14px] 
                     hover:text-[#fff] hover:ps-[30px] duration-300 ease-in-out'>Clothes</li>
                        <li className='text-[rgba(255,255,255,0.7)]
                     ps-[20px] font-dm font-normal py-3 text-[14px] 
                     hover:text-[#fff] hover:ps-[30px] duration-300 ease-in-out'>Bags</li>
                </ul>
                </div>
                 }
                
                 
                </div>
                <div className='w-4/8'>
                 <div className='relative'>
                      <input className='w-full bg-white rounded-full pl-4 py-2 font-dm 
                  font-normal text-[14px] text-[#C4C4C4] ' type="text" placeholder ='Search Products' />
                  <div className='absolute top-[10px] right-3 text-[16px]'>
                    <IoMdSearch />
                  </div>
                 </div>
                </div>
                <div className='w-2/8 relative'>
                <div className={`flex justify-end lg:gap-3 gap-2`}>
                        <div className={`flex`}ref={accRef}>
                         <FaUser />
                            <IoMdArrowDropdown />
                        </div>
                        {accshow &&
                          <div className='absolute z-10 top-[40px] left-[20%] w-[200px]'>
                            <ul>
                                <li className='font-dm text-[#FFFFFF] font-bold 
                                text-[14px] bg-[#2B2B2B]
                                hover:text-[#262626] hover:bg-[#FFFFFF] duration-300 ease-in-out text-center py-2'>My Account</li>
                                  <li className='font-dm text-[#FFFFFF] font-bold 
                                text-[14px] bg-[#2B2B2B] 
                                hover:text-[#262626] hover:bg-[#FFFFFF] duration-300 ease-in-out text-center py-2'>Log Out</li>
                             </ul>
                          </div>
                        }
                        <div className='' ref={cartRef}>
                           <FaShoppingCart />
                        </div>
                </div>
                {cartshow &&
                     <div className='bg-[#FFFFFF] absolute z-10 top-[40px] left-0 w-full'>
                       <div className='bg-[#F5F5F3] flex flex-wrap justify-between px-2'>
                          <div>
                            <img src={image} alt="" />
                          </div>
                          <div className='mt-[15px]'>
                            <h3>Black Smart Watch</h3>
                            <h5>$44.00</h5>
                          </div>
                          <div className='mt-[28px]'>
                            <RxCross2 />
                          </div>
                       </div>
                       <h4 className='font-dm font-bold text-[16px] text-[#262626] ps-2 mt-[14px]'><span className='font-dm font-normal text-[16px] text-[#767676]'>Subtotal:</span> $44.00</h4>
                       <div className='mt-[13px] flex justify-around'>
                         <div className='font-dm text-[#FFFFFF] font-bold 
                                text-[14px] bg-[#2B2B2B]
                                hover:text-[#262626] hover:bg-[#FFFFFF] hover:border-2 hover:border-b-[#262626] duration-300 ease-in-out text-center px-6 py-2'>View Cart</div>
                         <div className='font-dm text-[#FFFFFF] font-bold 
                                text-[14px] bg-[#2B2B2B]
                                hover:text-[#262626] hover:bg-[#FFFFFF] hover:border-2 hover:border-b-[#262626] duration-300 ease-in-out text-center px-6 py-2'>Checkout</div>        
                 </div>
                    </div>
                }
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Navbar