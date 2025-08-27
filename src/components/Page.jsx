import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa6'
import { IoGitCompare } from 'react-icons/io5'
import spimg from "../assets/cap.png"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ApiData } from './ContextApi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const Page = ({allData, cateFilter}) => {
    // console.log(allData);
    // let data = useContext(ApiData)
    // console.log(data);
    // console.log(cateFilter);
    
  let [cateMain, setCateMain] = useState([])
   
  let [showAll, setShowAll] = useState(true)

   useEffect(() =>{
    let cateAll = cateFilter.slice(0, 5);
     setCateMain(cateAll)
   }, [cateFilter])
    
  //  console.log(cateMain);
   
  let handleShow = () =>{
    setCateMain(cateFilter)
    setShowAll(false)
  }
  let handleLess = ()=>{
    setCateMain(cateFilter.slice(0, 5))
    setShowAll(true)
  }









    let {loading} = useContext(ApiData)
    if(loading){
       return(
      <>
      <div className='text-[#767676] text-[32px] mt-[50px] ms-[40%]'>
        <AiOutlineLoading3Quarters />
      </div>
      </>
    )}

  return (
    <>
    <div className='flex flex-wrap justify-between'>
      {cateFilter.length > 0 ?(
          <div>
          <div className="flex flex-wrap justify-between">
                       {cateMain.map((item) => (
       <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
            <Link to={`/products/${item.id}`}>
                  <div className='relative group bg-[rgba(216,216,216,0.24)]'>
                                                                 <div>
                                                                     <img src={item.thumbnail} alt="" />
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
                                                                 <h4 className='text-[#262626] font-dm font-bold text-[20px] mt-[12px]'>{item.title}</h4>
                                                                 <h6 className='text-[#767676] font-dm font-normal text-[16px] mt-[15px] pb-[20px]'>{item.category}</h6>
                                                                </div>
                                                                <div className=''>
                                                                 <p className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>${item.price}</p>
                                                                </div>
                                                             </div>
            </Link>                                     
        </div>
    ))}
        </div>
        {showAll ? cateFilter.length > 5 && 
         <div className='' onClick={handleShow}>
           <h2>Show All</h2>
         </div> : 
          cateFilter.length > 5 && <div className='' onClick={handleLess}>
            <h2>Show Less</h2>
          </div> }
      </div>
      )
      :
      (    <div className='flex flex-wrap justify-between'>
           {allData.map((item) => (
       <div className='lg:w-[32%] md:w-[32%] sm:w-[49%] w-full '>
            <Link to={`/products/${item.id}`}>
                  <div className='relative group bg-[rgba(216,216,216,0.24)]'>
                                                                 <div>
                                                                     <img src={item.thumbnail} alt="" />
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
                                                                 <h4 className='text-[#262626] font-dm font-bold text-[20px] mt-[12px]'>{item.title}</h4>
                                                                 <h6 className='text-[#767676] font-dm font-normal text-[16px] mt-[15px] pb-[20px]'>{item.category}</h6>
                                                                </div>
                                                                <div className=''>
                                                                 <p className='text-[#767676] font-dm font-normal text-[16px] mt-[15px]'>${item.price}</p>
                                                                </div>
                                                             </div>
            </Link>                                     
        </div>
    ))}
      </div>)
      }
    
    </div>
    </>
  )
}

export default Page