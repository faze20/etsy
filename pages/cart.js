import { useState } from "react";
import { PayPalButton } from "@repeatgg/react-paypal-button-v2";
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import  { useRouter } from 'next/router'

const Cart = () => {
  const router = useRouter()
  const[showPaypal , setShowPaypal ] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  return (
    <div className="block relative">
      <div className="flex justify-between my-4">
        <h1 className="text-4xl">My Cart</h1>
        <button onClick={() => router.back()}> &larr; continue shopping</button>
      </div>
      
      <div>
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) :(
          <>
          <div className="mb-4">
          <button onClick={()=>setShowPaypal(true)}
            className="bg-green-500 hover:bg-green-700 hover:tracking-widest text-white font-bold py-2 px-4 rounded w-full ">
              Pay Now (${getTotalPrice()})
            </button>
          </div>
          <div className="m-0 pl-2 md:p-2 lg:m-2 bg-lime-50 lg:p-8 rounded-2xl">
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
          <div className="mt-4">
          <h2 className="text-center mb-4 font-bold text-lg">Grand Total: ${getTotalPrice()}</h2>
            <button onClick={()=>setShowPaypal(true)}
            className="bg-green-500 hover:bg-green-700 hover:tracking-widest hover:text-white font-bold py-2 px-4 rounded w-full ">
              Pay Now (${getTotalPrice()})
            </button>
          </div>
          <div className={showPaypal ?  "absolute bg-lime-50 rounded-md  top-0 w-full h-screen " : "hidden" }>
            <div className="flex items-center   justify-between m-4">
            <h4 className="text-3xl  ">
                 Amount Due: ${getTotalPrice()}
            </h4> 
             <button
             onClick={()=>setShowPaypal(false)}
              className="text-lg border rounded-sm cursor-pointer py-2 px-4" > X
             </button>
            </div>
            <div className="flex items-center justify-center h-3/4">
              <div className="block w-80">
                <PayPalButton
                    options={{
                        clientId:"Af0hsDbQMrzfPTnYx_wSGEOs3J3Q07op0fHSG0KsEuum8n8kEc7-LwYuAO9H4kXcFZcSEc7AumjMAAR1",
                        currency: "USD",
                        }}
                        amount={getTotalPrice()}
                        onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);
                        //   OPTIONAL: Call your server to save the transaction
                        return fetch("http://localhost:3000/api/paypaltransaction", {
                            method: "post",
                            body: JSON.stringify({
                            orderId: data.orderID 
                            })
                        });
                        }}
                  />
              </div>
            </div>
          </div>
          </>
        )
         }
      </div>
    </div>
  )
}

export default Cart





