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
 

  



   
  return (
    
   <>
   <h1 class="font-bold ">Redux Store </h1>
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

    </div>
    </div>
    
   ))}
   </div>
   </>
  )
}

export default Home