import React from 'react'
import Container from '../components/Container'
import { FaLessThan } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import productimg from "../assets/glass.png"
import { useDispatch, useSelector } from 'react-redux'
import { cartQuantity } from '../slice/cartSlice'

const Cart = () => {
    const data = useSelector(state =>state.cartDetails.cartItems) 
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
                    <p className='font-dm font-bold text-[20px] text-primary'>${
                     item.price * item.cartQun
                    
                    }</p>
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
                    <p className='font-dm font-bold text-[14px] text-primary capitalize'>Apply coupon</p>
                    <p className='font-dm font-bold text-[14px] text-primary capitalize'>Update cart</p>
                </div>
            </div>
            {/* second part */}
            <div className='mt-[54px]'>
                <p className='text-right font-dm font-bold text-[20px] text-primary'>Cart totals</p>
                <div className='w-[45%] flex items-center justify-end'>
                   <div></div>
                   <div></div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Cart