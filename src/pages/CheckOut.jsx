import React from 'react'
import Container from '../components/Container'
import { Link, useLocation } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const CheckOut = () => {
 const data = useLocation()
  const price = data.state.subTotalPrice;
  const {disscount = 0} =  data.state || {};
  const {cartItems = []} = data.state || {};
  {cartItems.length > 0 && cartItems.map((item, index) => (
  <div key={index}>
    <img src={item.thumbnail} alt=""  />
  </div>
  
))}

const handleClick = () =>{
  console.log("information");
  toast("checkout confirm successfully")
}





  return (
    <>
    <div>
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
        transition={Bounce}/>
          <div className='w-full flex justify-between border-2 border-[#767676] mt-[120px]'>
            <div className='w-[70%] border-r-2 border-r-[#767676] py-2 px-2'>
              <div>
            {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div className="w-full flex justify-between mb-2">
                      <div className='w-[1/8]'>
                        <h3 className='font-dm font-bold text-[18px] capitalize text-[#262626]'>Products</h3>
                        <img
                        src={item.thumbnail}
                        alt={item.title}
                        className='w-[25%]'
                      />
                      </div>
                      <div className='w-[3/8] pr-[30px]'> 
                        <div className='w-fit'>
                          <h3 className='font-dm font-bold text-[18px] capitalize text-[#262626]'>Product Title</h3>
                          <p className='font-dm text-[14px] text-[#767676] ps-[15px]'>{item.title}</p>
                        </div>
                      </div>
                           <div className='w-[1/8] pr-[10px]'>
                            <h3 className='font-dm font-bold text-[18px] capitalize text-[#262626]'>Quantity</h3>
                            <p className='font-dm text-[14px] text-[#767676] ps-[15px]'>{item.cartQun}</p>
                           </div>
                       <div className='w-[3/8]'>
                       <div className='w-fit '>
                          <h3 className='font-dm font-bold text-[18px] capitalize text-[#262626]'>Product Price</h3>
                           <p className='font-dm text-[14px] text-[#767676] ps-[15px]'>${item.price.toFixed(3)}</p>
                       </div>
                       </div>
                      
                    </div>
                  ))
                ) : (
                  <p>No items in cart</p>
                )}
</div>
             
            </div>
             <div className='w-[15%] text-center py-2'>
              <h3 className='font-dm font-bold text-[18px] capitalize text-[#262626]'>Disscount</h3>
               {disscount > 0 && (
    <p className='text-red-600 font-dm text-[14px] text-center'>-${disscount.toFixed(2)}</p>
                )}
            </div>
            <div className='w-[15%] text-center pr-[40px] py-2'>
              <h3 className='font-dm font-bold text-[18px] capitalize text-[#262626]'>Total Price</h3>
              <p className='font-dm text-[14px] text-[#767676] text-center'>${price.toFixed(3)}</p>
            </div>
          </div>
            <h2 className='mt-[124px] capitalize font-dm font-bold
            text-[49px] text-[#262626]'>Checkout</h2>
            <span className='mt-[16px] font-dm capitalize 
            text-[#6D6D60] text-[12px] ms-[10px]'> <Link to={"/"}>Home</Link>  &gt;  <Link to ={'/checkout'}>Checkout</Link></span>
            <p className='mt-[127px] font-dm text-[#767676]'>Have a coupon? Click here to enter your code</p>
            <h3 className='mt-[119px] font-dm font-bold text-[39px] text-[#262626]'>Billing Details</h3>
            <div className='w-[65%]'>
              <div className='flex justify-between'>
                <div className='flex flex-col w-full'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">First Name *</label>
                   <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='First Name' />
                </div>
                 <div className='flex flex-col w-full ms-[10px]'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Last Name *</label>
                   <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='Last Name' />
                </div>
              </div>
               <div className='flex flex-col w-full ms-[10px]'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Companye Name (optional)</label>
                   <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='Company Name' />
                </div>
                 <div className='flex flex-col w-full ms-[10px]'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Country *</label>
                   {/* <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='Last Name' /> */}
                   <select name="" id="Countries" className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]'>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                   </select>
                </div>
                 <div className='flex flex-col w-full ms-[10px]'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Street Address *</label>
                   <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='House number and street name' />
                   <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='Apartment, suite, unit etc. (optional)' />
                </div>
                 <div className='flex flex-col w-full ms-[10px]'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Last Name *</label>
                   <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='Last Name' />
                </div>
                  <div className='flex flex-col w-full ms-[10px]'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Town/City *</label>
                   {/* <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='Last Name' /> */}
                   <select name="" id="Town/City" className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]'>
                    <option>New York</option>
                    <option>Ottowa</option>
                    <option>Paris</option>
                    <option>Berlin</option>
                   </select>
                </div>
                  <div className='flex flex-col w-full ms-[10px]'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Post Code *</label>
                   {/* <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='Last Name' /> */}
                   <select name="" id="Post Code *" className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]'>
                    <option>1100</option>
                    <option>1112</option>
                    <option>1200</option>
                    <option>1203</option>
                   </select>
                </div>

                  <div className='flex flex-col w-full ms-[10px]'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Phone *</label>
                   <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="number" placeholder='Phone' />
                </div>
                  <div className='flex flex-col w-full ms-[10px]'>
                   <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Email Address *</label>
                   <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='Email' />
                </div>
            </div>
            <div className='mt-[129px] w-[65%]'>
              <h3 className='font-dm font-bold text-[39px] text-[#262626] mb-[14px]'>Additional Information</h3>
               <label className='my-4 text-[#262626] font-dm font-bold capitalize' htmlFor="">Other Notes (optional)</label>
                   <input className='w-full border-b-1 border-bg-[#F0F0F0] 
                   px-2 py-2 font-dm text-[14px] capitalize text-[#767676]' type="text" placeholder='Notes about your order, e.g. special notes for delivery.' />
            </div>
            <button onClick={handleClick} className='mt-[60px] bg-[#262626] text-[#ffffff] py-3 
            px-6 font-dm font-bold text-[14px] cursor-pointer'>Proceed Succesfull</button>
        </Container>
    </div>
    </>
  )
}

export default CheckOut