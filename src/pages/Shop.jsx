import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { TiArrowSortedDown } from 'react-icons/ti'
import { MdWindow } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaHeart } from 'react-icons/fa6'
import { IoGitCompare } from 'react-icons/io5'
import spimg from "../assets/cap.png"
import { FaShoppingCart } from 'react-icons/fa'
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import { ApiData } from '../components/ContextApi'

const Shop = () => {
  let info = useContext(ApiData)
  let [catShow, setCatShow] = useState(false)
  let [colourShow, setColourShow] = useState(false)
  let [brandShow, setBrandShow] = useState(false)
  let [shopShow, setShopShow] = useState(false)
  let catRef = useRef()
  let colorRef = useRef()
  let brandRef = useRef()
  let shopRef = useRef()

  let [perPage, setPerPage] = useState(6)
  let [currentPage, setCurrentPage] = useState(1)
  let lastPage = perPage * currentPage;
  let firstPage = lastPage - perPage
  //  console.log(firstPage);
  let allData = info.slice(firstPage, lastPage)
  // console.log(allData);
  




   useEffect(() =>{
     document.addEventListener("click",(e) =>{
        //  console.log(e.target);
        //  console.log(catRef.current.contains(e.target) == true);
         if(catRef.current.contains(e.target) == true){
            setCatShow(!catShow)
         }else{
            setCatShow(catShow)
         }
         if(colorRef.current.contains(e.target) == true){
             setColourShow(!colourShow)
         }else{
            setColourShow(colourShow)
         }
         if(brandRef.current.contains(e.target) == true){
           setBrandShow(!brandShow)
         }else{
           setBrandShow(brandShow)
         }
         if(shopRef.current.contains(e.target) == true){
              setShopShow(!shopShow)
         }else{
             setShopShow(shopShow)
         }
     })
    
   },[catShow ,colourShow ,brandShow])
  return (
    <>
    <section>
        <Container>
             <h2 className='text-[#262626] font-dm font-bold text-[49px]'>Products</h2>
             <span className='mt-[11px] font-dm font-normal text-[#767676] flex gap-1'><Link to="/"><p>Home</p></Link>&gt;<Link to="/shop"><p>Products</p></Link></span>
             <div className='mt-[130px] flex justify-between w-full'>
                <div className='w-[29%]'>
                  <h4 className='text-[#262626] font-dm font-bold text-[20px] normal-case' ref={catRef}>Shop by Category</h4>
                 {catShow &&
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
                 {colourShow &&
                     <ul className='mt-[15px] mb-[25px]'>
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
                 {brandShow &&
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
                <div className='flex justify-between items-center pt-8' ref={shopRef}> 
                  <h4 className='text-[#262626] font-dm font-bold text-[20px] normal-case'>Shop by Price</h4>
                   <div>
                     <TiArrowSortedDown />
                   </div>
                  </div>  
                  { shopShow &&
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
                     }
                   
                </div>
                <div className='w-[69%]'>
                  <div className='flex flex-wrap justify-between items-center w-full mb-[60px]'>
                      <div className='flex gap-2 w-[34%]'>
                        <div className='py-1 px-1 border-1 border-[#F0F0F0] bg-[#ffff] 
                        text-[#737373] hover:bg-[#262626] hover:text-[#ffff] 
                         duration-300 ease-in-out'>
                          <MdWindow />
                        </div>
                        <div className='py-1 px-1 border-1 border-[#F0F0F0] bg-[#ffff] 
                        text-[#737373] hover:bg-[#262626] hover:text-[#ffff] 
                         duration-300 ease-in-out'>
                          <AiOutlineBars />
                        </div>
                      </div>
                      <div className='w-[35%] flex items-center'>
                        <label className='text-[#737373] me-2'>Sort by:</label>
                       <div className='relative'>
                        <input className='border-2 border-[#F0F0F0] py-1 text-[#737373] ps-[5px]' type="text" placeholder='number'/>
                        <div className='absolute top-[10px] right-[5px] text-[#737373]'>
                          <IoMdArrowDropdown />
                        </div>
                       </div>
                      </div>
                      <div className='w-[30%] flex items-center'>
                       <label className='text-[#737373] me-2'>Show:</label>
                        <div className='relative'>
                        <input className='border-2 border-[#F0F0F0] py-1 text-[#737373] ps-[5px]' type="text" placeholder='number'/>
                        <div className='absolute top-[10px] right-[5px] text-[#737373]'>
                          <IoMdArrowDropdown />
                        </div>
                       </div>
                      </div>
                  </div>
                        <Page allData={allData} /> 
                  <div className='mt-[53px] flex justify-between items-center'>
                     <Pagination />
                  </div>
                </div>
             </div>
        </Container>
    </section>
    </>
  )
}

export default Shop