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
                <div  className= {modal ? 'flex space-x-72 items-center' : 'hidden'}>
                  <p className='pl-2'>From first sale to full-scale, we're here for you every step of the way.</p>
                  <button className='bg-green-500 hover:bg-green-700  font-bold py-2 px-4 rounded'>Select a plan </button>
                 </div>
                 {
                   modal ? <button className='mr-2 cursor-pointer' onClick={modalDisplay} > X </button> :
                   <button className='bg-green-500 hover:bg-green-700  font-bold py-2 px-4 rounded ml-4 ' onClick={modalDisplay} > See Plans </button>
                 }
              
          </div>
          <div className='bg-white mt-4'>
            <div className='flex mb-4'>
              <div className="flex space-x-96 py-4 px-2">
                <h1>You're off to a great start</h1>
                <div>
                  <span> &#8226; &#8226; &#8226;</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex">
                <div className='basis-3/12'>
                  <div className='flex items-center py-6'><span className='text-blue-400 mx-2'><AiOutlineTag/></span><button>Add product</button> </div>
                  <div className='flex items-center py-6'><span className='text-blue-400 mx-2'><AiOutlineCheckCircle/></span><button>Customize Theme</button> </div>
                  <div className='flex items-center py-6'><span className='text-blue-400 mx-2'><IoIosGlobe/></span><button>Add domain</button> </div>
                </div>
                <div className="basis-9/12 bg-slate-50">
                  <div className='flex'>
                    <div>
                      <h2>Add your first product </h2>
                      <p>
                        You can add physical items,digital downloads,services, or 
                        anything else you 
                        dream up
                      </p>
                    </div>
                    <div>
                    <Image
                     src='/product.png'
                     alt="klmn cosmetics lippy" 
                     width={200}
                     height={200}
                    
                    />
                    </div>
                  </div>
                    <button>Add product</button>

                </div>
              </div>
            </div>
          </div>

          </div>
      </div>
   
  )
}

export default DashHome