import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
   <>
   <Container>
    <h2 className='font-dm font-bold text-[#262626] text-[49px] capitalize mb-[11px] mt-[124px]'>Login</h2>
    <span className='font-dm text-[12px] text-[#6D6D60] capitalize'><Link to={"/"}>Home</Link>  &gt; <Link to={"/login"}>Login</Link></span>
    {/* second */}
    <p className='mt-[127px] w-[50%] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
   <hr className='mt-[47px] w-[50%] text-[#767676]'></hr>
    <div className='mt-[58px] w-[50%]'>
      <h3 className='font-dm font-bold text-[39px] text-[#262626] capitalize mb-[42px]'>Returning Customer</h3>
      <div className='flex justify-between'>
         <div className='w-[35%] flex flex-col'>
            <label className='font-dm font-bold text-[16px] text-[#262626] capitalize' htmlFor="">Email address</label>
            <input type="text" className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]' placeholder='company@domain.com' />
         </div>
           <div className='w-[35%] flex flex-col '>
            <label className='font-dm font-bold text-[16px] text-[#262626] capitalize' htmlFor="">Password</label>
            <input type="text" className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]' placeholder='put your password' />
         </div>
      </div>
      <button className='font-dm font-bold text-[#262626] hover:text-[#ffff] mt-[50px] 
      text-[14px] bg-[#ffff] hover:bg-[#262626] py-3 px-8 
      border-2 border-[#262626] cursor-pointer'>Log in</button>
    </div>
   </Container>
   </>
  )
}

export default LogIn