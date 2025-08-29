import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { TiArrowSortedDown } from 'react-icons/ti'
import { MdWindow } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaHeart, FaPlus } from 'react-icons/fa6'
import { IoGitCompare } from 'react-icons/io5'
import spimg from "../assets/cap.png"
import { FaShoppingCart } from 'react-icons/fa'
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import { ApiData } from '../components/ContextApi'

const Shop = () => {
  let {info} = useContext(ApiData)
  let [catShow, setCatShow] = useState(false)
  let [colourShow, setColourShow] = useState(false)
  let [brandShow, setBrandShow] = useState(false)
  let [shopShow, setShopShow] = useState(false)
  let catRef = useRef()
  let colorRef = useRef()
  let brandRef = useRef()
  let shopRef = useRef()

  let [category, setCategory] = useState([])
  let [brand, setBrand] = useState([])


  let [perPage, setPerPage] = useState(9)
  let [currentPage, setCurrentPage] = useState(1)
  let [cateFilter, setCateFilter] = useState([])
  let [low, setLow] = useState()
  let [high, setHigh] = useState()
  let [active, setActive] = useState("")
  let lastPage = perPage * currentPage;
  let firstPage = lastPage - perPage
  //  console.log(firstPage);
  let allData = info.slice(firstPage, lastPage)
  // console.log(allData);
  
  let pageNumber = []
  for(let i = 0; i < Math.ceil(info.length / perPage); i++){
    
     pageNumber.push(i);
  }

  let paginate = (index) =>{
    setCurrentPage(index + 1);
  }

   
  let next = () =>{
    // console.log("amii");
    if(currentPage < pageNumber.length){
       setCurrentPage((state)=> state + 1)
    }
  }



  let prev = () =>{
    
    if(currentPage > 1){
       setCurrentPage((state)=> state - 1)
    }
    
  }

  useEffect(()=>{
    setCategory([...new Set(info.map((item)=> item.category))])
    setBrand([...new Set(info.map((item)=> item.brand))])
  },[info])
  
  //  console.log(category);
  // console.log(brand);
  
   


  let handleCategory =(citem)=>{
   let cateFilter = info.filter((item) =>item.category == citem)
    setCateFilter(cateFilter)
  }
  // console.log(cateFilter);
  
  let handleBrand=(bitem)=>{
    let cateFilter = info.filter((item)=>item.brand == bitem)
     setCateFilter(cateFilter)
  }
  let handleList = ()=>{
    // console.log("ami");
    setActive("active")
  }
   
  // console.log(active);
  
   let handlePrice = (value)=>{
    setLow(value.low);
    setHigh(value.high);
    let priceShow = info.filter((item)=> item.price >= value.low && item.price <= value.high)
    setCateFilter(priceShow)
   }

  // console.log(low);
  // console.log(high);
  
  


   let handleChange =(e)=>{
    setPerPage(e.target.value);
    
   }
  




   useEffect(() =>{
     document.addEventListener("click",(e) =>{
        //  console.log(e.target);
        //  console.log(catRef.current.contains(e.target) == true);
         if(catRef.current.contains(e.target) == true){
            setCatShow(!catShow)
         }else{
            setCatShow(false)
         }
         if(colorRef.current.contains(e.target) == true){
             setColourShow(!colourShow)
         }else{
            setColourShow(false)
         }
         if(brandRef.current.contains(e.target) == true){
           setBrandShow(!brandShow)
         }else{
           setBrandShow(false)
         }
         if(shopRef.current.contains(e.target) == true){
              setShopShow(!shopShow)
         }else{
             setShopShow(false)
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
                   {category.map((item) =>(
                    
                            <li onClick={() =>handleCategory(item)} className='border-b-2 border-b-[#F0F0F0] py-2'>
                              <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>{item}</p>
                          </li>
                   ))}
             
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
                        {brand.map((item)=> (
                            <li className='border-b-2 border-b-[#F0F0F0] py-2' onClick={() =>handleBrand(item)}>
                      <span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>{item}</p>
                      </span></li>
                        ))}
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
                    <li onClick={()=> handlePrice({low: 0, high: 9.99})} className='border-b-2 border-b-[#F0F0F0] py-2'>
                      <span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'> $0.00 - $9.99</p>
                      </span></li>
                    <li onClick={()=> handlePrice({low:10, high:19.99})} className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>$10.00 - $19.99</p>
                      </span></li>
                    <li onClick={()=> handlePrice({low:20, high:29.99})} className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>$20.00 - $29.99</p>
                      </span></li>
                    <li onClick={()=> handlePrice({low:30, high:39.99})} className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>$30.00 - $39.99</p>
                      </span></li>
                    <li onClick={()=> handlePrice({low:40, high:69.99})} className='border-b-2 border-b-[#F0F0F0] py-2'><span className=''>
                        <p className='text-[#767676] font-dm normal-case font-normal text-[16px]'>$40.00 - $69.99</p>
                      </span></li>
                  </ul>
                     }
                   
                </div>
                <div className='w-[69%]'>
                  <div className='flex flex-wrap justify-between items-center w-full mb-[60px]'>
                      <div className='flex gap-2 w-[34%]'>
                        <div onClick={()=> setActive("")} 
                        className={`${active == "active" ? "py-1 px-1 border-1 border-[#F0F0F0] bg-[#ffff] text-[#737373] hover:bg-[#262626] hover:text-[#ffff]"
                          :"py-1 px-1 border-1 border-[#F0F0F0] bg-[#262626] text-[#ffff]"}`}>
                          <MdWindow />
                        </div>
                        <div className={`${active == "active" ?"py-1 px-1 border-1 border-[#F0F0F0] bg-[#262626] text-[#ffff]" 
                          : "py-1 px-1 border-1 border-[#F0F0F0] bg-[#ffff] text-[#737373] hover:bg-[#262626] hover:text-[#ffff]"}`} onClick={handleList}>
                          <AiOutlineBars />
                        </div>
                      </div>
                      <div className='w-[35%] flex items-center'>
                        <label className='text-[#737373] font-dm font-normal text-[16px] me-2'>Sort by:</label>
                         <form className="w-[70%]">

                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white font-dm">

                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
                                </form>
                      </div>
                      <div className='w-[30%] flex items-center'>
                       <label className='text-[#737373] me-2'>Show:</label>
                       <form className="w-full">

                                    <select id="countries" onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white font-dm ">
                                    
                                        <option>6</option>
                                        <option>9</option>
                                        <option>12</option>
                                        <option>15</option>
                                    </select>
                                </form>
                      </div>
                  </div>
                        <Page allData={allData} 
                        cateFilter={cateFilter}
                         active={active}
                         /> 
                  <div className=''>
                     <Pagination pageNumber = {pageNumber} 
                     paginate={paginate} 
                     currentPage={currentPage}
                     perPage={perPage}
                     info={info}
                     next={next}
                     prev={prev}
                     cateFilter={cateFilter}
                     />
                  </div>
                </div>
             </div>
        </Container>
    </section>
    </>
  )
}

export default Shop