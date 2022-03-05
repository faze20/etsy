import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";



function Product({products}) {
    const [openQuickshopModal , setOpenQuickshopModal ] =useState(false)
    const [carouselImage, setCarouselImage ] = useState('/kvlmprdbanner.jpg')

  return (
      <div className="grid gap-4 grid-cols-4 ">

          {products.map((product, index) => (
              <div key={index} >
                    <div className='relative'>
                        <div className='z-60'>

                        <Image
                            src={`/${product.image}`}
                            alt="logo" 
                            width={360}
                            height={360}
                        />
                        </div>
                        <div  className='bg-gray-50 absolute opacity-0 hover:opacity-75 flex items-center justify-center w-full h-full top-0  text-center cursor-pointer transition ease-in-out delay-150  duration-300'>
                            
                            <button
                            onClick={(e) => setOpenQuickshopModal(true)}
                            className='border border-sky-500 p-2 bg-white font-semibold italic ' >
                                Quick Shop
                            </button>
                            
                        </div>
                    </div>
                    <div className='text-center space-y-2'>

                    <h1>{product.name}</h1>

                    <h3>{product.price}</h3>
                    </div>
              </div>
          )
           
            )}
            <div className={openQuickshopModal ? 'absolute left-0 right-0 bg-black opacity-85 top-0 p-12 '  : 'hidden' }>

           <div className='flex bg-slate-100 my-4 mx-24 p-6  rounded h-full'>
               <div>
                        <div className='flex justify-center'>
                        <Image
                            src={carouselImage}
                            alt="logo" 
                            width={300}
                            height={300}
                        />
                        </div>



               <div className='flex justify-center gap-x-4 mt-4 mx-8'>
                <div onClick={e =>setCarouselImage('/kvlmfoundation.jpg')}
                 className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  <Image
                    src='/kvlmprdbnner3.jpg'
                    alt="logo" 
                    width={108}
                    height={108}
                   
                  />
                </div>
                <div onClick={e =>setCarouselImage('/kvlmsale.jpg')}
                 className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  <Image
                    src='/kvlmprdbnner4.jpg'
                    alt="logo" 
                    width={108}
                    height={108}
                  />
                </div>
                <div onClick={e =>setCarouselImage('/kvlmprdbanner.jpg')}
                 className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                  <Image
                    src='/kvlmprdtbnner2.jpg'
                    alt="logo" 
                    width={108}
                    height={108}
                  />
                </div>
            </div>
                   

               </div>


            <div className='mt-6 grid grid-cols-1 ml-40'>

             <div className=' my-4 flex'>

                 <div className=''>
                    <h1 className='text-2xl tracking-tighter mb-2 font-bold'>KLMV HIGHLIGHTER PALETE</h1>
                    <span > $32.00 </span>
                 </div>

                 <div className='text-4xl cursor-pointer ml-24'>
                    <AiOutlineClose onClick={(e) => setOpenQuickshopModal()} />
                 </div>
             </div>

           <div className='' >
              <p className=' text-xs '>
                Pay in full or in  4 interest-free installments for orders beteen $50 and $3000 with
                  <span className='mx-2'>shopPay</span> 
                  <a href="#">Learn more.</a>
              </p>
           </div>
           
           <form className='my-4 grid place-items-center'>

             <div className='flex my-6'>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" className='border w-10 ' name="" id="" placeholder=' 1' />
             </div>

             <div className='flex flex-col md:flex-row  mx-16 my-6 md:mx-0 '>
             {/* <button className="bg-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-black  text-gray-800  py-4 md:py-2.5 md:px-20 border rounded shadow">
                ADD TO CART
            </button> */}
            <button className="bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:tracking-wide text-white  py-4 md:py-2.5 md:px-20 mt-6 md:mt-0 md:ml-4 border last:rounded shadow">
                BUY IT NOW
            </button>
            
             </div>

           </form>
           

           <div className='space-y-4 mt-4 h-36 overflow-auto text-xs '>
             <p>Super Pigmented Highlighter palete</p>
             <p>$ beautigul sgade</p>
             <p>Will look bomb with any makeup look</p>
             <p>Shade names:</p>
             <p>Top left: Summer Nights</p>
             <p>Top Right:Sun kissed</p>
             <p>Bottom Leeft:Henny</p>
             <p>Bottom Right:Hot Girl</p>
             <p>Cruelty free</p>

             <p>Recyclable</p>
             <p>Caution and warning:Discontinue use if signs of irritation or rash appear.</p>
           </div>


           </div>
         </div>

            </div>
      </div>
   
  )
}

export default Product
