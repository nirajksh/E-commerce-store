import React from 'react'
import { useState } from 'react';

const Home = () => {
  const [productData,setProductData] = useState([])



  async function ProductData (){

    const res = await fetch('https://fakestoreapi.com/products')

  const data = await res.json();
  console.log(data)
  setProductData(data)


  }

  ProductData()



   
  return (
    
   <>
   <h1>Redux Store </h1>
   <h3></h3>
   </>
  )
}

export default Home