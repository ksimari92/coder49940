import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {

    const [cantidadItems, setCantidadItems] = useState(0);
    
  return (
    <>
    <div>
    <FaShoppingCart />
    {cantidadItems}
    </div>
    </>
  )
}

export default CartWidget