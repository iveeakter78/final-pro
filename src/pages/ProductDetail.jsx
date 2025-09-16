import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import product from "../assets/glass.png"
import Container from '../components/Container';
import { FaPlus, FaStar } from 'react-icons/fa';

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
    <div className='mb-[235px]'>
      <Container>
            <div className='w-full mt-[45px] flex flex-wrap justify-between gap-y-5'>
              <img className=' w-[48%]' src={singleData.thumbnail} alt="" />
              {
                singleData?.images?.map((img)=>(
                     <img className='w-[48%]' src={img} alt="" />
                ))
              }

        {/* <img className='w-[48%]' src={product} alt="" /> */}
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
         <p className='font-dm text-[#767676] font-normal text-[14px]'>1 Review</p>
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
      <div className='mt-[29px] w-[63%]'>
        <div className='flex justify-between'>
          <p className='font-dm font-bold text-[16px] text-primary'>FEATURES  & DETAILS</p>
           <div className='text-[14px] text-primary'>
             <FaPlus />
           </div>
        </div>
         <hr className='text-[#E6E3E3] mt-[24px]'></hr>
      </div>
       <div className='mt-[29px] w-[63%]'>
        <div className='flex justify-between'>
          <p className='font-dm font-bold text-[16px] text-primary'>SHIPPING & RETURNS</p>
           <div className='text-[14px] text-primary'>
             <FaPlus />
           </div>
        </div>
         <hr className='text-[#E6E3E3] mt-[24px]'></hr>
      </div>
       <div className='mt-[29px] w-[63%]'>
        <p className='font-dm text-[16px] text-[#767676]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      {/* second part */}
       <div className='mt-[145px] flex items-center gap-x-10'>
        <h3 className='font-dm font-bold text-[20px] text-[#767676]'>Description</h3>
        <h3 className='font-dm font-bold text-[20px] text-primary'>Reviews (1)</h3>
       </div>
       <p className='mt-[42px] font-dm text-[#767676] text-14px'>1 review for Product</p>
       <hr className='mt-[16px] w-full text-[#E6E3E3]'></hr>
       <div className='mt-[23px]'>
         <div className='flex items-center gap-x-6'>
          <h4 className='font-dm text-[16px] text-primary'>John Ford</h4>
          <div className='text-[#FFD881] flex gap-x-1 items-center'>
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStar />
          </div>
         </div>
         <p className='mt-[14px] font-dm text-[14px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
         <hr className='mt-[16px] w-full text-[#E6E3E3]'></hr>
       </div>
       {/* third part */}
       <div className='mt-[53px] w-[60%]'>
         <h3>Add a Review</h3>
         <form className='mt-[48px]' action="">
          <label className='capitalize font-dm font-bold text-[16px] text-primary'>Name</label>
            <input className='w-full border-b-1 py-2 capitalize text-[#767676] border-b-[#E6E3E3]' placeholder="Your name here" type="text" />
           <div className='py-4'>
               <label className='capitalize font-dm font-bold text-[16px] text-primary'>Email</label>
            <input className='w-full border-b-1 py-2 capitalize text-[#767676] border-b-[#E6E3E3]' placeholder="Your email here" type="text" />
           </div>
             <label className='capitalize font-dm font-bold text-[16px] text-primary'>Review</label>
            <textarea className='w-full border-b-1 py-2 capitalize text-[#767676] border-b-[#E6E3E3]' placeholder="Your review here" type="text" />
              <button className='mt-[29px] px-16 py-3 text-[#ffff] capitalize 
              font-dm text-[14px] bg-[#262626]'>Post</button>
             
         </form>
       </div>
      </Container>
   
    </div>
    </>
  )
}

export default ProductDetail