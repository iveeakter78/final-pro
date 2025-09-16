import React from 'react'
import { CiStar } from 'react-icons/ci';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const ProductRating = ({rating}) => {
     console.log(rating);
     const fullRating = Math.floor(rating) || 0
     const halfRating = rating % 1 >= 0.5
     const emptyRating = 5 - fullRating - (halfRating ? 1 : 0)
  return <div className='flex gap-x-1'>
    {[...Array(fullRating)].map(()=>(
          <div className='text-[#FFD881]'>
             <FaStar />
          </div>
  ))}
  { halfRating && <FaStarHalfAlt className='text-[#FFD881]'/>}

  {[...Array(emptyRating)].map(()=>(
          <div className='text-[#FFD881]'>
             <CiStar />
          </div>
  ))}
  </div>
}


export default ProductRating