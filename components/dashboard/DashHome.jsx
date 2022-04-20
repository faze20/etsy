import { useState } from 'react'

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
          <div>
            <div className='flex'>
              

            </div>
          </div>

          </div>
      </div>
   
  )
}

export default DashHome