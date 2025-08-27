import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let [singleData, setSingleData] = useState({})
  let productId = useParams()
  console.log(productId);
  
   let getSingleData = () =>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
    setSingleData(response.data)
    })
   }

   useEffect(() =>{
    getSingleData()
   })
   console.log(singleData);
   
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail