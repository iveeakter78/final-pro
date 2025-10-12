import React, { useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const LogIn = () => {
  
  const [show, setShow] = useState(false)
  const [checkInform, setCheckInform] = useState({
    password: "",
     email: "",
  })
  const handleClick = ()=>{
    // console.log("ok cool");
    setShow(!show)
  }

  const handleChange = (e)=>{
    setCheckInform({...checkInform, [e.target.name]:e.target.value});
    
  }

 const handleLog = () =>{
  console.log(checkInform);
  toast("LogIn successfully")
 }
  return (
   <>
   <Container>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
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
            <input onChange={handleChange}
             type="text" 
             name='email'
             value={checkInform.email}
             className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]' placeholder='company@domain.com' />
         </div>
           <div className='w-[35%] flex flex-col relative '>
            <label className='font-dm font-bold text-[16px] text-[#262626] capitalize' htmlFor="">Password</label>
            <input
            onChange={handleChange} 
             name='password'
            type= {show ? "text" : "password"}
            value={checkInform.password}
            className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]'
             placeholder='put your password' />
            
            <div className='text-[#767676] absolute top-[58%] text-[16px] right-[5px]'>
             {
              show ?(<IoIosEye onClick={handleClick}/>)
              :(<IoIosEyeOff onClick={handleClick}/>)
             }
              
              
              </div>
         </div>
      </div>
      <button 
       onClick={handleLog}
      className='font-dm font-bold text-[#262626] hover:text-[#ffff] mt-[50px] 
      text-[14px] bg-[#ffff] hover:bg-[#262626] py-3 px-8 
      border-2 border-[#262626] cursor-pointer'>Log in</button>
    </div>
   </Container>
   </>
  )
}

export default LogIn