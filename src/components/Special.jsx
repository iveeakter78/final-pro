import React from 'react'
import Container from './Container'
import spimg from "../assets/cap.png"
import spimg1 from "../assets/table.png"
import spimg2 from "../assets/head.png"
import spimg3 from "../assets/glass.png"
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { IoGitCompare } from 'react-icons/io5'

const Special = () => {
  return (
    <>
    <section className='pt-[128px]'>
        <Container>
            <h3 className='mb-[48px] text-[#262626] font-dm font-bold text-[39px] ms-[10px] lg:ms-0'>Special Offers</h3>
        <div className='lg:mx-0 mx-2'>
              <div className='lg:flex flex-wrap justify-between md:flex sm:flex'>
              <div className='lg:w-[24%] md:w-[32%] sm:w-[49%] w-full '>
                <div className='relative group'>
                    <div>
                        <img src={spimg} alt="" />
                    </div>
                        <div className='bg-[#FFFFFF] absolute bottom-0 right-0 w-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                          <ul className='py-3'>
                                              <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Add to Wish List</span>
                                                     <div className='ms-[10px]'>
                                                    <FaHeart />
                                                </div>
                                              </li>
                                            <li className='flex items-center py-2 justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Compare</span>
                                                <div className='ms-[10px]'>
                                                    <IoGitCompare />
                                                </div>
                                            </li>     
                                           <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Add to Cart</span>
                                           <div className='ms-[10px]'>
                                                     <FaShoppingCart />
                                                </div>
                                           </li>
                                                
                                          </ul>
                                    </div>
                                    <div className='py-2 px-6 bg-[black] text-[white] absolute top-[12px] left-[10px]'>
                                        <p>New</p>
                                    </div>
                </div>
                <div className='flex justify-between'>
                   <div className=''>
                    <h4 className='text-[#262626] font-dm font-bold text-[20px] mt-[12px]'>Basic Crew Neck Tee</h4>
                    <h6 className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>Black</h6>
                   </div>
                   <div className=''>
                    <p className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>$44.00</p>
                   </div>
                </div>
            </div>
               <div className='lg:w-[24%] md:w-[32%] sm:w-[49%] w-full mt-[20px] lg:mt-0 md:mt-0 sm:mt-0'>
                <div className='relative group'>
                    <div>
                        <img src={spimg1} alt="" />
                    </div>
                        <div className='bg-[#FFFFFF] absolute bottom-0 right-0 w-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                          <ul className='py-3'>
                                              <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Add to Wish List</span>
                                                     <div className='ms-[10px]'>
                                                    <FaHeart />
                                                </div>
                                              </li>
                                            <li className='flex items-center py-2 justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Compare</span>
                                                <div className='ms-[10px]'>
                                                    <IoGitCompare />
                                                </div>
                                            </li>     
                                           <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Add to Cart</span>
                                           <div className='ms-[10px]'>
                                                     <FaShoppingCart />
                                                </div>
                                           </li>
                                                
                                          </ul>
                                    </div>
                                    <div className='py-2 px-6 bg-[black] text-[white] absolute top-[12px] left-[10px]'>
                                        <p>New</p>
                                    </div>
                </div>
                <div className='flex justify-between'>
                   <div className=''>
                    <h4 className='text-[#262626] font-dm font-bold text-[20px] mt-[12px]'>Basic Crew Neck Tee</h4>
                    <h6 className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>Black</h6>
                   </div>
                   <div className=''>
                    <p className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>$44.00</p>
                   </div>
                </div>
            </div>
               <div className='lg:w-[24%] md:w-[32%] sm:w-[49%] w-full sm:mt-[20px] lg:mt-0 md:mt-0'>
                <div className='relative group'>
                    <div>
                        <img src={spimg2} alt="" />
                    </div>
                        <div className='bg-[#FFFFFF] absolute bottom-0 right-0 w-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                          <ul className='py-3'>
                                              <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Add to Wish List</span>
                                                     <div className='ms-[10px]'>
                                                    <FaHeart />
                                                </div>
                                              </li>
                                            <li className='flex items-center py-2 justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Compare</span>
                                                <div className='ms-[10px]'>
                                                    <IoGitCompare />
                                                </div>
                                            </li>     
                                           <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Add to Cart</span>
                                           <div className='ms-[10px]'>
                                                     <FaShoppingCart />
                                                </div>
                                           </li>
                                                
                                          </ul>
                                    </div>
                                    <div className='py-2 px-6 bg-[black] text-[white] absolute top-[12px] left-[10px]'>
                                        <p>New</p>
                                    </div>
                </div>
                <div className='flex justify-between'>
                   <div className=''>
                    <h4 className='text-[#262626] font-dm font-bold text-[20px] mt-[12px]'>Basic Crew Neck Tee</h4>
                    <h6 className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>Black</h6>
                   </div>
                   <div className=''>
                    <p className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>$44.00</p>
                   </div>
                </div>
            </div>
               <div className='lg:w-[24%] md:w-[32%] sm:w-[49%] w-full lg:mt-0 md:mt-0 sm:mt-[20px]'>
                <div className='relative group'>
                    <div>
                        <img src={spimg3} alt="" />
                    </div>
                        <div className='bg-[#FFFFFF] absolute bottom-0 right-0 w-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                                          <ul className='py-3'>
                                              <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Add to Wish List</span>
                                                     <div className='ms-[10px]'>
                                                    <FaHeart />
                                                </div>
                                              </li>
                                            <li className='flex items-center py-2 justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Compare</span>
                                                <div className='ms-[10px]'>
                                                    <IoGitCompare />
                                                </div>
                                            </li>     
                                           <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                                              ease-in-out font-dm font-normal text-[16px]'>Add to Cart</span>
                                           <div className='ms-[10px]'>
                                                     <FaShoppingCart />
                                                </div>
                                           </li>
                                                
                                          </ul>
                                    </div>
                                    <div className='py-2 px-6 bg-[black] text-[white] absolute top-[12px] left-[10px]'>
                                        <p>New</p>
                                    </div>
                </div>
                <div className='flex justify-between'>
                   <div className=''>
                    <h4 className='text-[#262626] font-dm font-bold text-[20px] mt-[12px]'>Basic Crew Neck Tee</h4>
                    <h6 className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>Black</h6>
                   </div>
                   <div className=''>
                    <p className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>$44.00</p>
                   </div>
                </div>
            </div>
          </div>
        </div>
        </Container>
    </section>
    </>
  )
}

export default Special