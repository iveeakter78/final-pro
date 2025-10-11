import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
   <>
   <Container>
    <h2 className='font-dm font-bold text-[49px] text-[#262626] mt-[124px] capitalize'>My Account</h2>
    <span className='font-dm text-[#6D6D60] text-[12px]
     capitalize mt-[11px]'> <Link to={"/"} 
     className='cursor-pointer'>Home</Link> &gt; <Link to={"/account"} className='cursor-pointer'>
        </Link>My account</span>
        {/* second */}
        <div className='w-full flex justify-between mt-[127px]'>
            <div className='w-[29%]'>
                <h4 className='font-dm py-3 font-normal hover:font-bold 
                text-[16px] text-[#767676] hover:text-[#262626] border-b-1 cursor-pointer border-[#D8D8D8]'>Dashboard</h4>
                <h4 className='font-dm py-3 font-normal hover:font-bold 
                text-[16px] text-[#767676] hover:text-[#262626] border-b-1 cursor-pointer border-[#D8D8D8]'>Others</h4>
                <h4 className='font-dm py-3 font-normal hover:font-bold 
                text-[16px] text-[#767676] hover:text-[#262626] border-b-1 cursor-pointer border-[#D8D8D8]'>Donwloads</h4>
                <h4 className='font-dm py-3 font-normal hover:font-bold 
                text-[16px] text-[#767676] hover:text-[#262626] border-b-1 cursor-pointer border-[#D8D8D8]'>Addresses</h4>
                <h4 className='font-dm py-3 font-normal hover:font-bold 
                text-[16px] text-[#767676] hover:text-[#262626] border-b-1 cursor-pointer border-[#D8D8D8]'>Account details</h4>

                <h4 className='font-dm py-3 font-normal hover:font-bold 
                text-[16px] text-[#767676] hover:text-[#262626] border-b-1 cursor-pointer border-[#D8D8D8]'>Logout</h4>
            </div>
            <div className='w-[69%]'>
                <p className='font-dm text-[#767676]'>Hello <b className='text-[#262626]'>admin</b> (not <b className='text-[#262626]'>admin?</b> <b className='text-[#262626]'>Log out</b>)</p>
                <p className='mt-[35px] font-dm text-[#767676]'>From your account dashboard you can view your <b className='text-[#262626]'>recent orders,</b> manage your <b className='text-[#262626]'>shipping and billing addresses,</b> and <b className='text-[#262626]'>edit your password and account details.</b></p>
            </div>
        </div>
   </Container>
   </>
  )
}

export default Account