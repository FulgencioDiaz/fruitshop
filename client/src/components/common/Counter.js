import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { useState } from 'react'
import CartConsumer from "../../hooks/useCart";
const Counter = ({ itemCarro}) => {
const [cart, setCart] = CartConsumer()


const onIncrementToCart = (item) => {

  const element = cart.find(i => i === item)
 
  if (!element) {
    item.kg = 1

    setCart([...cart, item])

  } else {
    element.kg = element.kg + 1;

    
    setCart([...cart])

  }
}

const onDecrementToCart = (item) => {

  const element = cart.find(i => i === item)
  console.log(element)
  if (!element) {
    return false;
  } else {
    if (element.kg === 1) {
      setCart(cart.filter(i => i !== element))
  
      return;
    }
    element.kg = element.kg - 1;
    setCart([...cart])
  
  }
}



  return (
    <div>
<Button onClick={() => onIncrementToCart(itemCarro)} >+</Button>
<span>{(cart.includes(itemCarro) && itemCarro.kg || 0 )+ 'kg'}</span>
<Button  onClick={() => onDecrementToCart(itemCarro)} >-</Button>
    </div>
  )
}

export default Counter
