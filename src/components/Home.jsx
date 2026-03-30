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

  console.log(product.find(p=>p.id))
 

 function handleAdd(prod){

  console.log(prod.length)

 }


   
  return (
    
   <>
   <div class="flex font-bold bg-slate-200 p-4 rounded-md ">
    <h1 class="mx-6">Redux Store </h1>
    <span class="text-end">Count</span>
   </div>
   <div class="flex flex-wrap justify-center gap-4 p-5">{product.map(prod=>(
    <div class="w-56 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 ">
    <div class="flex flex-col  bg-slate-150 justify-start " key={prod.id} >
<img class="w-full h-40 object-contain bg-gray-100"  src={prod.image} alt='' />

<div class="p-4">
        <h3 class="text-sm font-semibold text-gray-800 truncate">
          {prod.title}
        </h3>

        <p class="text-green-600 font-bold text-lg mt-2">
          ₹{prod.price}
        </p>
        
      </div>
<button class="bg-yellow-300 border p-1 rounded-lg m-2 " onClick={()=> handleAdd(prod)}>Add to cart</button>
    </div>
    </div>
    
   ))}
   </div>
   </>
  )
}

export default Home