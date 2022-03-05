import { useState , useEffect  } from 'react'
import Cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";

function Cart({initialCartValue}) {

  const[cartItem , setCartItem ] = useState('');
  console.log(initialCartValue);

  useEffect(() => {
    Cookie.set("cartValue", JSON.stringify(cartItem));
  }, [cartItem]);


  return (
    <div>
      <h1>

        cart
      </h1>
        <button onClick={(e) =>setCartItem(23) }>
          add item
        </button>
        {/* <input onChange={(e) => setCartItem(e.target.value)} type="number"  placeholder='qty'/> */}

    </div>
  )
}

export default Cart

export async function getInitialProps({ req }) {
  const cookies = parseCookies(req);
  console.log(cookies)
  return {
    initialCartValue: cookies.cartItem

    
  }
}