import React, { useEffect } from 'react'
import { useState } from 'react';

const Home = () => {
  const [product,setProduct] = useState([])


 useEffect (()=>{
ProductData()
  },[])

  async function ProductData (){

    const res = await fetch('https://fakestoreapi.com/products')

  const data = await res.json();
  //console.log(data)
  setProduct(data)


  }

  //console.log(product.find(p=>p.id))
 

  



   
  return (
    
   <>
   <h1 class="font-bold">Redux Store </h1>
   {product.map(prod=>(
    <div key={prod.id}>

      <h3>{prod.title}</h3>

    </div>
   ))}
   </>
  )
}

export default Home