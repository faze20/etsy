import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";



function Product({products}) {
    const [openQuickshopModal , setOpenQuickshopModal ] =useState(false)
    const [carouselImage, setCarouselImage ] = useState('/kvlmprdbanner.jpg')

  return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 ">

          {products.map((product, index) => (
              <div key={index} >
                    <div className='relative'>
                        <div >
                          <Image
                              src={`/${product.image}`}
                              alt="logo" 
                              width={360}
                              height={360}
                          />
                        </div>
                        <div  className='bg-gray-50 absolute opacity-0 hover:opacity-75 flex items-center justify-center w-full h-full top-0  text-center cursor-pointer transition ease-in-out delay-150  duration-300'>
                          {/* // className='border border-sky-500 p-2 bg-white font-semibold italic '  */}
                            
                            <button
                            onClick={(e) => setOpenQuickshopModal(true)}
                            className="bg-green-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
	                              	id="open-btn">
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
            {/* <div className={openQuickshopModal ? 'absolute left-0 right-0 bg-black opacity-85 top-0 p-12 '  : 'hidden' }> */}
            <div className={openQuickshopModal ? 'fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full '  : 'hidden' }>
              <div className='flex flex-col md:flex-row bg-slate-100  m-px md:my-4 md:mx-24 p-6  rounded '>
                  <div className='flex md:block'>
                    <div className='flex justify-center'>
                      <Image
                          src={carouselImage}
                          alt="logo" 
                          width={300}
                          height={300}
                      />
                    </div>

                    <div className='flex flex-col md:flex-row justify-center gap-x-4  mt-1 md:mt-4 mx-1 md:mx-8'>
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

                  <div className='mt-0 md:mt-6 grid grid-cols-1 ml-px md:ml-40'>

                  <div className=' my-4 flex'>

                      <div className='flex-1'>
                          <h1 className='text-base md:text-2xl tracking-tighter mb-0 md:mb-2 font-bold'>KLMV HIGHLIGHTER PALETE</h1>
                          <span > $32.00 </span>
                      </div>

                      <div className='flex-none text-4xl cursor-pointer m-px md:ml-24'>
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

                  <div className='flex my-2 md:my-6'>
                      <label className='mr-2' htmlFor="quantity">Quantity</label>
                      <input type="number" className='border w-10 ' name="" id="" placeholder=' 1' />
                  </div>

                  <div className='w-full md:w-1/2' >
                  
                  <button className="bg-black transition w-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:tracking-wide text-white  py-2  md:py-2.5 md:px-20 mt-1 md:mt-0 md:ml-4 border last:rounded shadow">
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
