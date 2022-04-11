import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import { useRouter } from 'next/router'

const Cart = () => {
  const router = useRouter()
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
    <div className="block">
      <div className="flex justify-between my-4">
        <h1 className="text-4xl">My Cart</h1>
        <button onClick={() => router.back()}> &larr; continue shopping</button>
      </div>
      
      <div>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) :(
          <>
          <div className="m-0 pl-2 md:p-2 lg:m-4 bg-lime-50 lg:p-8 rounded-2xl">

          
            <table className="table-auto w-full">
            <thead>
              <tr className="text-left text-xs md:text-xs lg:text-base">
                
                <th className="w-1/2"> <div className="my-4">Product</div> </th>
                <th><div className="my-4">Price</div></th>
                <th><div className="my-4">Quantity</div></th>
                <th><div className="my-4 text-center md:text-left">Total</div></th>

               
              </tr>
            </thead>
            <tbody>
             
          {cart.map((item, index) => (
           <tr key={index} className="border-b text-xs md:text-xs lg:text-base" >
           
              <td>
                  <div className="flex items-center py-2 w-1/2">
                    <Image src={`/${item.image}`} alt='logo' height={100} width={100} />
                    <p className="ml-0.5 pl-1 md:ml-6 w-1/6">{item.name}</p>
                  </div>
              </td>

              <td>
                 <p className="mb-10 md:m-0">${item.price}</p>
              </td>

              <td>
                  <div className='flex flex-col md:flex-row  py-8 w-12'>
                      <button 
                          className="bg-green-500 text-white mx-1  px-4 border  rounded"
                          onClick={() => dispatch(incrementQuantity(item.id))}>
                        +
                      </button>
                      <button
                      className="px-4 border mx-1 my-1 rounded"
                      >
                        {item.quantity}
                      </button>

                      <button 
                      className=" px-4 border mx-1 rounded"
                      onClick={() => dispatch(decrementQuantity(item.id))}>
                        -
                      </button>
                  </div>
              </td>

             <td>
                  <div className="flex flex-col  md:flex-row items-center justify-between">
                      <p className="mb-8 md:m-0">$ {item.quantity * item.price}</p>
                      <button
                        className=" px-4 border rounded"
                        onClick={() => dispatch(removeFromCart(item.id))}>
                          x
                      </button>
                  </div>
             </td>
           </tr>
          ))}
          
           </tbody>
           </table>
           </div>

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

{/* <table class="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
      <div className="flex justify-around mb-6">
                <h4>Product</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
              </div>
    </tr> */}



