import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import Cookies from 'js-cookie'
// import { useRouter } from 'next/router'


const Cart = () => {
  // const router = useRouter()
  const[cartItem , setCartItem ] = useState(0);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };




  return (
    <div className="flex">
      
      <div>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) :(
          <>
          <h2 className="text-center text-2xl mb-6">Cart Items:</h2>
          
          {cart.map((item, index) => (
            <div key={index} className='flex w-full'>
              <div className=''>
                <Image src={`/${item.image}`} alt='logo' height={90} width={65} />
              </div>
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className='flex py-8'>
              <button 
              className="bg-transparent mx-1 hover:bg-blue-500 text-blue-700  hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button 
                className="bg-transparent mx-1 hover:bg-green-500 text-green-700  hover:text-white  px-4 border border-green-500 hover:border-transparent rounded"
                onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button
                className="bg-transparent mx-1 hover:bg-red-500 text-red-700  hover:text-white  px-4 border border-red-500 hover:border-transparent rounded"
                onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
                
                </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>

          <div className="mt-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full md:w-1/2">
              Pay Now (${getTotalPrice()})
            </button>
          </div>
          
          </>
        )
        
         }
      </div>

    </div>

  )
}

export default Cart



