import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa6'
import { IoGitCompare } from 'react-icons/io5'
import spimg from "../assets/cap.png"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ApiData } from './ContextApi'
const Page = ({allData}) => {
    // console.log(allData);
    
    let data = useContext(ApiData)
    // console.log(data);
    
  return (
    <>
    <div className='flex flex-wrap justify-between'>
       {allData.map(() => (
       <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
            <Link to={"/shop/id"}>
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
            </Link>                                     
        </div>
    ))}
    </div>
    </>
  )
}

export default Page