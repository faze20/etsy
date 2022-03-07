import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
// import { useRouter } from 'next/router'


const Cart = () => {
  // const router = useRouter()
  const[cartItem , setCartItem ] = useState(0);


  useEffect(() => {
    localStorage.setItem("cartqty", JSON.stringify(cartItem));
    // Cookies.set("cartValue", JSON.stringify(cartItem));
    // router.reload(window.location.cart)

  }, [cartItem])

  return (
    <div>
      <h1>

      Total cart item : {cartItem}
     </h1>
      <p>

       </p>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         onClick={(e) =>setCartItem(cartItem + 1)}>
          add item
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         onClick={(e) =>setCartItem(cartItem + 1)}>
          add item
        </button>

    </div>

  )
}

export default Cart



