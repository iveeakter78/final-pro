import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import product from "../assets/glass.png"
import Container from '../components/Container';
import { FaStar } from 'react-icons/fa';

const ProductDetail = () => {
  let [singleData, setSingleData] = useState({})
  let productId = useParams()
  console.log(productId);
  
   let getSingleData = () =>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
    setSingleData(response.data)
    })
   }

   useEffect(() =>{
    getSingleData()
   })
   console.log(singleData);
   
  return (
    <>
    <div>
      <Container>
            <div className='w-full mt-[45px] flex flex-wrap justify-between gap-y-5'>
            <div className=' w-[48%]'>
        <img className='w-full' src={product} alt="" />
      </div>
            <div className=' w-[48%]'>
        <img className='w-full' src={product} alt="" />
      </div>
            <div className=' w-[48%]'>
        <img className='w-full' src={product} alt="" />
      </div>
            <div className=' w-[48%]'>
        <img className='w-full' src={product} alt="" />
      </div>
      </div>
      <div className='mt-[66px] w-[63%]'>
       <div className='flex gap-x-4 items-center'>
         <div className='text-[#FFD881] flex gap-x-1'>
            <FaStar />
             <FaStar />
              <FaStar />
               <FaStar />
                <FaStar />
         </div>
         <p className='font-dm text-secondery font-normal text-[14px]'>1 Review</p>
       </div>
       <div className='flex items-center mt-[21px]'>
        <p className='text-[#D8D8D8] font-dm'><del>$88.00</del></p>
        <p className='ps-[22px] text-primary font-dm text-[20px] font-bold'>$44.00</p>
       </div>
        <hr className='text-[#E6E3E3] mt-[24px]'></hr>
      </div>
        <div className='mt-[29px] w-[63%]'>
       <div className='flex gap-x-8 items-center'>
       <p className='text-primary font-dm font-bold'>COLOR:</p>
         <div className='flex items-center gap-x-2'>
          <div className='bg-[#D9D9D9] w-[20px] h-[20px] rounded-full'></div>
          <div className='bg-[#FF8787] w-[28px] h-[28px] rounded-full'></div>
          <div className='bg-[#E6F6D3] w-[20px] h-[20px] rounded-full'></div>
          <div className='bg-[#F1F1F1] w-[20px] h-[20px] rounded-full'></div>
          <div className='bg-[#D1F5ED] w-[20px] h-[20px] rounded-full'></div>
         </div>
       </div>
       <div className='flex gap-x-15 items-center mt-[30px]'>
        <p className='text-primary font-bold font-dm'>SIZE:</p>
        <div className=''>
          <select className='px-11 py-2 border-2 border-[#F0F0F0]'>
            <option value="S">S</option>
             <option value="M">M</option>
              <option value="L">L</option>
               <option value="XL">XL</option>
          </select>
        </div>
       </div>
        <div className='flex gap-x-4 items-center mt-[30px]'>
        <p className='text-primary font-bold font-dm'>QUANTITY:</p>
        <div className='flex items-center gap-x-4 border-2 border-[#F0F0F0] px-8 py-2'>
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
       </div>
        <hr className='text-[#E6E3E3] mt-[24px]'></hr>
      </div>
      <div className='mt-[24px] w-[63%]'>
        <div className='flex items-center gap-x-4'>
            <p className='font-dm font-bold text-primary'>STATUS:</p>
         <p className='font-dm font-normal text-[#D8D8D8]'>In stock</p>
        </div>
      <hr className='text-[#E6E3E3] mt-[24px]'></hr>
      </div>
      <div className='mt-[29px] w-[63%]'>
        <div className='flex items-center gap-x-2'>
               <button className='py-2 px-5 border-2 
        border-bg-primary text-primary font-dm font-bold bg-[#ffff]
        text-[14px] hover:text-[#ffff] hover:bg-[#262626]'>Add to Wish List</button>
         <button className='py-2 px-7 border-2 
        border-bg-primary text-primary font-dm font-bold bg-[#ffff]
        text-[14px] hover:text-[#ffff] hover:bg-[#262626]'>Add to Cart</button>
        </div>
          <hr className='text-[#E6E3E3] mt-[24px]'></hr>
      </div>
      </Container>
   
    </div>
    </>
  )
}

export default ProductDetail