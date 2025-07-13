import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiOutlineBars2 } from 'react-icons/hi2'
import { IoMdArrowDropdown, IoMdSearch } from 'react-icons/io'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
    <div className='bg-[#F5F5F3] py-3 w-full'>
        <Container>
            <Flex className={`items-center`}>
                <div className='w-2/8'>
                <div className={`flex items-center gap-2`}>
                    <HiOutlineBars2 />
                    <h5 className='text-[#262626] font-dm font-normal text-[14px]'>Shop by Category</h5>
                </div>
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
                <div className='w-2/8'>
                <div className={`flex lg:justify-end lg:gap-3 gap-2`}>
                    <div>
                        <div className='flex'>
                            <FaUser />
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                    <FaShoppingCart />
                </div>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Navbar