import React, { useState } from 'react'
import Container from '../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const SignUp = () => {
    const auth = getAuth();
    const navigate = useNavigate()
   const [show, setShow] = useState(false)

   const [registration, setRegistration] = useState({
      FirstName: "",
      number: "",
      lastname: "",
      password: "",
      repet: "",
      email: ""
   })

   const [error, setError] = useState("")
    
   const handleClick = () =>{
      setShow(!show)
      
   }
   
   const handleRegister = (e)=>{
      // console.log(e.target.value);
      setRegistration({...registration, [e.target.name]: e.target.value})
   }

  const handleSign = ()=>{
    console.log(registration);
    const email = registration.email
    const password = registration.password
    toast("Your Registration is Complete")
    createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    console.log(user);
    setTimeout(() =>{
    navigate("/login")
    }, 2000)
  })
  .catch((error) => {
    const errorCode = error.code;
    if(errorCode.includes("auth/email-already-in-use")){
      setError("This Email is already used")
      // toast.error(error)
    }
    
  });

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
    <h2 className='font-dm font-bold text-[#262626] text-[49px] capitalize mb-[11px] mt-[124px]'>Sign up</h2>
    <span className='font-dm text-[12px] text-[#6D6D60] capitalize'><Link to={"/"}>Home</Link>  &gt; <Link to={"/signup"}></Link>SignUp</span>
    {/* second */}
    {error &&
     <p className='mt-[30px] py-2 px-2 bg-red-500 text-white w-[45%]'>{error}</p>
     }
    <p className='mt-[127px] w-[50%] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
   <hr className='mt-[47px] w-[50%] text-[#767676]'></hr>
    <div className='mt-[58px] w-[50%]'>
      <h3 className='font-dm font-bold text-[39px] text-[#262626] capitalize mb-[42px]'>Your Personal Details</h3>
      <div className='flex justify-between'>
         <div className='w-[45%] flex flex-col'>
            <label className='font-dm font-bold text-[16px] text-[#262626] capitalize' htmlFor="">First Name</label>
            <input 
             onChange={handleRegister}
            type="text"
            name='FirstName'
             className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]' placeholder='First Name' />
         </div>
           <div className='w-[45%] flex flex-col '>
            <label className='font-dm font-bold text-[16px] text-[#262626] capitalize' htmlFor="">Last Name</label>
              <input
            onChange={handleRegister} 
            type="text" 
            name='lastname'
            className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]' placeholder='Last Name' />
         </div>
      </div>
       <div className='w-[45%] flex flex-col mt-[35px]'>
            <label className='font-dm font-bold text-[16px] text-[#262626] capitalize' htmlFor="">Phone Number</label>
                  <input
            onChange={handleRegister}
            name='number' 
            type="number" className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]' placeholder='Your phone number' />
            </div>
        <h3 className='font-dm font-bold text-[39px] text-[#262626] capitalize mt-[35px] mb-[58px]'>Your Password</h3>
      <div className='flex justify-between'>
         <div className='w-[45%] flex flex-col relative'>
            <label className='font-dm font-bold text-[16px] text-[#262626] capitalize' htmlFor="">Password</label>
            <input
            onChange={handleRegister}
            name='password'
             type="text" className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]' placeholder='Password' />
            <div className='absolute top-[38px] right-[5px]'>
               {
                  show ? <IoIosEyeOff onClick={handleClick}/>
                  :   <IoIosEye onClick={handleClick} />
               }
            
               
            </div>
         </div>
           <div className='w-[45%] flex flex-col relative '>
            <label className='font-dm font-bold text-[16px] text-[#262626] capitalize' htmlFor="">Repeat Password</label>
            <input 
             onChange={handleRegister}
            type="text" 
            name='repet'
            className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]' placeholder='Repeat password' />
                <div className='absolute top-[38px] right-[5px]'>
               {
                  show ? <IoIosEyeOff onClick={handleClick}/>
                  :   <IoIosEye onClick={handleClick} />
               }
            
               
            </div>
         </div>
      </div>
         <div className='w-[45%] flex flex-col mt-[25px] '>
            <label className='font-dm font-bold text-[16px] text-[#262626] capitalize' htmlFor="">Email</label>
            <input 
             onChange={handleRegister}
            type="text" 
            name='email'
            className='w-full border-b-1 
            border-[#767676] py-3 px-2 font-dm text-[14px] text-[767676]' placeholder='Email' />
         </div>
      <button 
      onClick={handleSign}
      className='font-dm font-bold text-[#262626] hover:text-[#ffff] mt-[50px] 
      text-[14px] bg-[#ffff] hover:bg-[#262626] py-3 px-8 
      border-2 border-[#262626] cursor-pointer'>SignUp</button>
    </div>
   </Container>
   </>
  )
}

export default SignUp