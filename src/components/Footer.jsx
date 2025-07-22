import React from 'react'
import Container from './Container'
import fimg from "../assets/logo.png"
const Footer = () => {
  return (
    <>
    <section className='mt-[106px] bg-[#F5F5F3] py-[50px]'>
        <Container>
            <div className='w-full flex flex-wrap justify-between items-center'>
              <div className='w-2/12'>
               <h3>MENU</h3>
               <ul>
                <li><p>Home</p></li>
                <li><p>Shop</p></li>
                <li><p>About</p></li>
                <li><p>Contact</p></li>
                <li><p>Journal</p></li>
               </ul>
              </div>
              <div className='w-2/12'>
              <h3>SHOP</h3>
                <ul>
                    <li><p>Category 1</p></li>
                    <li><p>Category 2</p></li>
                    <li><p>Category 3</p></li>
                    <li><p>Category 4</p></li>
                    <li><p>Category 5</p></li>
                </ul>
              </div>
              <div className='w-3/12'>
              <h3>HELP</h3>
              <div>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Special E-shop</p>
                <p>Shipping</p>
                <p>Secure Payments</p>
              </div>
              </div>
              <div className='w-3/12'>
              <h3>(052) 611-5711</h3>
              <h5>company@domain.com</h5>
              </div>
              <div className='w-2/12'>
              <div>
                <img src={fimg} alt="" />
              </div>
              </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Footer