import React from 'react'
import Container from './Container'
import Flex from './Flex'
import addimg from "../assets/Ad_1.png"
import addimg1 from "../assets/Ad_2.png"
import addimg2 from "../assets/Ad_3.png"

const Add = () => {
  return (
    <>
    <section className='pt-[174px] px-2 lg:px-0'>
        <Container>
           <Flex className={`w-full justify-between`}>
            <div className='lg:w-[49%] w-full'>
          <div className='md:ms-[35px] lg:ms-0 ms-0'>
             <img src={addimg} alt="" />
          </div>
           </div>
            <div className='lg:w-[49%] w-full mt-[30px] lg:mt-0'>
               <div className='md:ms-[35px] lg:ms-0 ms-0'>
                <img src={addimg1} alt="" />
               <img className='mt-[30px]' src={addimg2} alt="" />
               </div>
            </div>
           </Flex>
        </Container>
    </section>
    </>
  )
}

export default Add