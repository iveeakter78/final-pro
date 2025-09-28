import React, { useState } from 'react'
import Container from '../components/Container'
import { FaLessThan } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import productimg from "../assets/glass.png"
import { useDispatch, useSelector } from 'react-redux'
import { cartQuantity } from '../slice/cartSlice'
import { current } from '@reduxjs/toolkit'

const Cart = () => {
    const data = useSelector(state =>state.cartDetails.cartItems) 
    const totalPrice = data.reduce((prev, current) =>{
        return prev + current.price*current.cartQun
    }, 0)

     console.log(totalPrice);
     
    // const Total = totalPrice - disscount



    const [cupponName, setCupponName] = useState("")
    const [disscount, setDissCount] = useState("")

    const handleChange = (e)=>{
        setCupponName(e.target.value);
        
    }
    // console.log(cupponName);
    

   const handleApply = ()=>{
    if(cupponName == "fdr2413"){
        console.log("20%");
        setDissCount(totalPrice*.2);
        
        
    }else{
        console.log("no disscount");
        
    }
   }

const Total = totalPrice - disscount

    const dispatch = useDispatch()
    // console.log(data, "Data");

   const handleIncrement = (id) =>{
    console.log( id,"id");
    dispatch(cartQuantity({id:id , type:"increment"}))
    
   }
   const handleDecrement =(id) =>{
    console.log(id,"id");
     dispatch(cartQuantity({ id: id, type: "decrement" }));


//     if(id > 0){
//          dispatch(cartQuantity({ id: id, type: "decrement" }));
//     }else{
//         dispatch(cartQuantity({id:"id"}));
//     }
    }


     
  return (
    <div>
        <Container>
            <h2 className='mt-[124px] font-dm font-bold text-[49px] capitalize'>Cart</h2>
            <span className='pt-[15px] flex items-center gap-x-1'>
              <Link to={"/"}><p className='text-[#6D6D60] font-dm  text-[12px] capitalize'>Home</p></Link> &gt; 
              <Link to={"/cart"}><p className='text-[#6D6D60] font-dm  text-[12px] capitalize'>Cart</p></Link>
            </span>
            <div className='mt-[136px] w-full flex justify-between items-center bg-[#F5F5F3] py-3 px-2'>
                <div className='w-[25%]'>
                    <p className='font-dm font-bold text-[16px] text-primary capitalize'>Product</p>
                </div>
                   <div className='w-[25%]'>
                    <p className='font-dm font-bold text-[16px] text-primary capitalize'>Price</p>
                </div>
                   <div className='w-[25%]'>
                    <p className='font-dm font-bold text-[16px] text-primary capitalize'>Quantity</p>
                </div>
                   <div className='w-[25%]'>
                    <p className='font-dm font-bold text-[16px] text-primary capitalize'>Total</p>
                </div>
            </div>
            {
                data.length > 0 ?
                 data?.map((item, index)=>(
                    <div className='w-full flex justify-between items-center py-3 px-2 border-1 border-[#F0F0F0]'>
                        <div className='w-[25%]'>
                    <div className='flex gap-x-4 items-center'>
                        <div>
                            <RxCross2 />
                        </div>
                        <div className='w-[28%]'>
                            <img className='w-full' src={item.thumbnail} alt="" />
                        </div>
                        <div>
                            <p className='font-dm font-bold text-[16px] capitalize text-primary'>{item.title}</p>
                        </div>
                    </div>
                </div>
                   <div className='w-[25%]'>
                    <p className='font-dm font-bold text-[20px] text-primary '>${item.price}</p>
                </div>
                   <div className='w-[25%]'>
        <div className='flex items-center gap-x-4 border-2 border-[#F0F0F0] w-fit px-8 py-2'>
          <p className='cursor-pointer' onClick={()=>handleDecrement(index)}>-</p>
          <p>{item.cartQun}</p>
          <p className='cursor-pointer' onClick={()=>handleIncrement(index)}>+</p>
        </div>
                </div>
                   <div className='w-[25%]'>
                    <p className='font-dm font-bold text-[20px] text-primary'>
                       ${(item.price * item.cartQun).toFixed(3)}
                       </p>
                </div>
                    </div>
                    ))
                 :
                "no items"
            }
              <div className='w-full flex justify-between items-center py-3 px-2 border-1 border-t-0 border-[#F0F0F0]'>
                <div className='w-[25%]'>
           <select className='px-11 py-2 border-2 border-[#F0F0F0]'>
            <option value="S">S</option>
             <option value="M">M</option>
              <option value="L">L</option>
               <option value="XL">XL</option>
          </select>
                </div>
                   <div className='w-[75%] flex justify-between items-center pr-[45px]'>
                    <div className='flex items-center justify-baseline'>
                       {/* <p className='font-dm font-bold text-[14px] text-primary capitalize'>Apply coupon</p> */}
                       <input onChange={handleChange}
                       className='font-dm font-bold text-[14px] text-primary  py-2 ps-2 border-2 rounded
                        border-gray-400' type="text" placeholder='Apply coupon' />
                       <button onClick={handleApply}
                       className='bg-[#262626] py-2 px-3 text-[#FFFFFF] font-dm cursor-pointer rounded'>Apply</button>
                    </div>
                    <p className='font-dm font-bold text-[14px] text-primary capitalize'>Update cart</p>
                </div>
            </div>
            {/* second part */}
            <div className='mt-[54px]'>
                <p className='text-right font-dm font-bold text-[20px] text-[#262626]'>Cart totals</p>
                <div className='w-[50%] ms-[50%] mt-[24px]'>
                   <div className='border-2 border-gray-400 flex items-center justify-between'>
                    <h3 className='py-2 ps-[20px] pr-[140px] border-e-2 border-gray-400
                    font-dm font-bold text-[#262626]'>Subtotal</h3>
                    <h6 className='py-2 ps-[20px] pr-[140px] text-[#767676]
                    font-dm'>${totalPrice.toFixed(3)}</h6>
                   </div>
                     <div className='border-2  border-t-0 border-gray-400 flex items-center justify-between'>
                     <h3 className='py-2 ps-[20px] pr-[126px] border-e-2 border-gray-400 
                     font-dm font-bold text-[#262626]'>Disscount</h3>
                    <h6 className='py-2 ps-[20px] pr-[140px] font-dm text-[#262626]'>${disscount}</h6>
                   </div>
                   <div className='border-2  border-t-0 border-gray-400 flex items-center justify-between'>
                     <h3 className='py-2 ps-[20px] pr-[166.9px] border-e-2 border-gray-400 
                     font-dm font-bold text-[#262626]'>Total</h3>
                    <h6 className='py-2 ps-[20px] pr-[140px] font-dm text-[#262626]'>${Total.toFixed(3)}</h6>
                   </div>
                </div>
            </div>
            {/* third part */}
            <a href=""><button className='mt-[30px] ms-[80%] bg-[#262626] text-[#FFFFFF] py-3 cursor-pointer px-8'>
                Proceed to Checkout
            </button></a>
        </Container>
    </div>
  )
}

export default Cart