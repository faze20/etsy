import { useState } from 'react'
import { AiOutlineTag ,AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import Image from 'next/image'

 

function DashHome() {
  const [modal , setModal] = useState(true)
  const modalDisplay = () => {
    setModal(prev => !prev)
}

  return (
    <div>
        <div>
          <div className='flex bg-slate-900 py-2 rounded text-white justify-between  '>
                <div  className= {modal ? 'flex flex-col lg:flex-row space-x-1 md:space-x-72 space-y-4 lg:items-center' : 'hidden'}>
                  <p className='pl-2 text-xs md:text-base leading-6'>From first sale to full-scale, we're here for you every step of the way.</p>
                  <button className='bg-green-500 hover:bg-green-700  font-bold py-1 md:py-2 md:px-4 rounded'>Select a plan </button>
                 </div>
                 {
                   modal ? <button className='mr-2 cursor-pointer mx-4' onClick={modalDisplay} > X </button> :
                   <button className='bg-green-500 hover:bg-green-700 w-full font-bold py-2 px-4 rounded mx-2 lg:ml-4 ' onClick={modalDisplay} > See Plans </button>
                 }
              
          </div>
          <div className='bg-white mt-4 rounded-md border'>
            <div className=' border-b '>
              <div className="flex w-full justify-between py-4 px-2">
                <h1>You're off to a great start</h1>
                <div>
                  <span> &#8226; &#8226; &#8226;</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col lg:flex-row ">

                <div className='flex lg:block basis-3/12 border-r '>
                  <div className='flex items-center  border-b '>
                    <div className='w-0.5 bg-blue-400 h-16 '></div>
                    <span className='text-blue-400 mx-2'><AiOutlineTag/></span><button className='text-sm'>Add product</button> </div>
                  
                  <div className='flex items-center  border-b'>
                  <div className='w-0.5 bg-green-400 h-16 '></div>
                    <span className='text-green-400 mx-2'><AiOutlineCheckCircle/></span><button className='text-sm'>Customize Theme</button> </div>
                
                  <div className='flex items-center border-b'>
                  <div className='w-0.5 bg-orange-400 h-16 '></div>
                    <span className='text-orange-400 mx-2'><IoIosGlobe/></span><button className='text-sm'>Add domain</button> </div>
                </div>


                <div className="basis-9/12 bg-slate-50 pl-2 pt-6">
                  <div className='flex'>
                    <div className='basis-3/4 lg:basis-full' >
                      <h2 className='text-2xl lg:text-3xl font-semibold'>Add your first product </h2>
                      <p className='lg:w-9/12 my-4 leading-7'>
                        You can add physical items,digital downloads,services, or 
                        anything else you 
                        dream up
                      </p>
                    </div>
                    <div className='basis-1/4 '>
                      <Image
                      src='/product.png'
                      alt="klmn cosmetics lippy" 
                      width={60}
                      height={60}
                      />
                    </div>
                  </div>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  '>Add product</button>
<div className='mt-16'>

                    <button className=' text-green-500 font-semibold py-2 px-4 mb-1 rounded-3xl border border-green-500'> ?Learn more about product</button>
</div>
                </div>
              </div>
            </div>
          </div>

          </div>
      </div>
   
  )
}

export default DashHome