import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { FaHeart, FaPlus } from 'react-icons/fa6'
import spimg from "../assets/cap.png"
import { IoGitCompare } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'

const Shop = () => {
  let [catshow, setCatShow] = useState(false)
  let [colourshow, setColourShow] = useState(false)
  let [brandshow, setBrandShow] = useState(false)
  let catRef = useRef()
  let colorRef = useRef()
  let brandRef = useRef()
   useEffect(() =>{
     document.addEventListener("click",(e) =>{
        //  console.log(e.target);
        //  console.log(catRef.current.contains(e.target) == true);
         if(catRef.current.contains(e.target) == true){
            setCatShow(!catshow)
         }else{
            setCatShow(catshow)
         }
         if(colorRef.current.contains(e.target) == true){
             setColourShow(!colourshow)
         }else{
            setColourShow(colourshow)
         }
         if(brandRef.current.contains(e.target) == true){
           setBrandShow(!brandshow)
         }else{
           setBrandShow(brandshow)
         }
     })
    
   },[catshow ,colourshow ,brandshow])
  return (
    <>
    <section>
        <Container>
             <h2 className='text-[#262626] font-dm font-bold text-[49px]'>Products</h2>
             <span className='mt-[11px] font-dm font-normal text-[#767676] flex gap-1'><Link to="/"><p>Home</p></Link>&gt;<Link to="/shop"><p>Products</p></Link></span>
             <div className='mt-[130px] flex justify-between w-full'>
                <div className='w-[29%]'>
                  <h4 className='text-[#262626] font-dm font-bold text-[20px] normal-case' ref={catRef}>Shop by Category</h4>
                 {catshow &&
                   <ul className='mt-[35px]'>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'>
                      <span className='flex justify-between'>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Category 1</p>
                        <div className='text-[#767676]'>
                          <FaPlus />
                        </div>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className='flex justify-between'>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Category 2</p>
                        <div className='text-[#767676]'>
                          <FaPlus />
                        </div>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className='flex justify-between'>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Category 3</p>
                        <div className='text-[#767676]'>
                          <FaPlus />
                        </div>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className='flex justify-between'>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Category 4</p>
                        <div className='text-[#767676]'>
                          <FaPlus />
                        </div>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className='flex justify-between'>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Category 5</p>
                        <div className='text-[#767676]'>
                          <FaPlus />
                        </div>
                      </span></li>
                  </ul>
                 }
                 <div className='flex justify-between items-center' ref={colorRef}>
                    <h4 className='text-[#262626] font-dm font-bold text-[20px] normal-case py-8'>Shop by Color</h4>
                    <div>
                      <TiArrowSortedDown />
                    </div>
                 </div>
                 {colourshow &&
                     <ul className='mt-[15px]'>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'>
                      <span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Colour 1</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Colour 2</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Colour 3</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Colour 4</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Colour 5</p>
                      </span></li>
                  </ul>
                 }
                 <div className='flex justify-between' ref={brandRef}>
                   <h4 className='text-[#262626] font-dm font-bold text-[20px] normal-case'>Shop by Brand</h4>
                   <div>
                    <TiArrowSortedDown />
                   </div>
                 </div>
                 {brandshow &&
                       <ul className='mt-[35px]'>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'>
                      <span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Brand 1</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Brand 2</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Brand 3</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Brand 4</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>Brand 5</p>
                      </span></li>
                  </ul>
                 }
                    
                  <h4 className='text-[#262626] font-dm font-bold text-[20px] normal-case pt-8'>Shop by Price</h4>
                     <ul className='mt-[35px]'>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'>
                      <span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'> $0.00 - $9.99</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>$10.00 - $19.99</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>$20.00 - $29.99</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>$30.00 - $39.99</p>
                      </span></li>
                    <li className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>$40.00 - $69.99</p>
                      </span></li>
                  </ul>
                </div>
                <div className='w-[69%]'>
                  <div  className='lg:flex flex-wrap justify-between md:flex sm:flex'>
                      <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                          <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                      <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                     <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                      <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                       <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                         <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                         <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                        <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                           <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                        <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                         <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
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
                  </div>
                </div>
             </div>
        </Container>
    </section>
    </>
  )
}

export default Shop