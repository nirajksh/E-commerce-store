import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
const cartItem = useSelector((store)=>store.cart.cartItem)

console.log(cartItem)

  return (
    <div>Cart
      {cartItem}
    </div>
  )
}

export default Cart