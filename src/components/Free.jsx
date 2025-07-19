import React from 'react'
import Container from './Container'
import { FaShuttleVan } from 'react-icons/fa'
import { CiRedo } from 'react-icons/ci'

const Free = () => {
  return (
    <>
    <section className='border-b-2 border-b-[#D8D8D8] py-2'>
        <Container>
          <div className='w-full lg:flex flex-wrap justify-between items-cente lg:ms-[5%] ms-0'>
            <div className='flex items-center lg:w-2/6 w-full justify-center lg:justify-start'>
              <h2 className='me-[10px] text-[#262626] text-[18px]'>2</h2>
              <p className='font-dm font-normal text-[16px] text-[#6D6D6D]'>Two years warranty</p>
            </div>
            <div className='flex items-center lg:w-2/6 w-full justify-center lg:justify-start py-2 lg:py-0'>
              <div className='me-[10px] text-[#262626] text-[18px]'>
                <FaShuttleVan />
              </div>
              <p className='font-dm font-normal text-[16px] text-[#6D6D6D]'>Free shipping</p>
            </div>
            <div className='flex items-center lg:w-2/6 w-full justify-center lg:justify-start'>
              <div className='me-[10px] text-[#262626] text-[18px]'>
                <CiRedo />
              </div>
              <p className='font-dm font-normal text-[16px] text-[#6D6D6D]'>Return policy in 30 days</p>
            </div>
          </div>
        </Container>
    </section>
    </>
  )
}

export default Free