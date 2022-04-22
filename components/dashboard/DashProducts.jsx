import {useState } from 'react'
import {AiOutlineDown, AiFillCaretDown } from "react-icons/ai";








function DashProducts() {
  const [availability , setAvalability] = useState('Available')
  const [typeSelected , setTypeSelected] = useState('Type')
  const [showDropDown, setShowDropDown] = useState(true)
  const [showTypeDropDown, setShowTypeDropDown] = useState(true) 
  // var availability = 'Available'

  const handleButton = () => {
    setShowDropDown(prev => !prev)
  }

  const typeDropDown = ()=>{
    setShowTypeDropDown(prev => !prev)
  }

  const getSelected = (option) =>{
    if(!option){
      return
    }
    // availability = option
    setAvalability(option) 
    console.log(availability, option);
    handleButton()


  }

  const getTypeSelected = (option) =>{
    if(option === 'Type'){
      return
    }
    setTypeSelected(option) 
    typeDropDown()
    
    console.log(option);


  }
  // console.log(typeSelected);


  return (
    <div>
      <div className="flex">
        <h1>Collections</h1>
        <button>Create collection</button>
      </div>
      <section className="main_board">
        <div> <h3>All</h3>  <span>{typeSelected} {availability}</span></div>
        <div className="flex">
          <div><input type="text" placeholder='Filter collections' /></div>
         <div className="flex">
            <div className='relative'>
              <div className='flex items-center border border-sky-500 px-2 rounded'>
                <button onClick={handleButton}>{availability}</button>
                <AiFillCaretDown/>
              </div>

              <div className={showDropDown ? 'hidden' : 'absolute'}>
                <button onClick={()=> getSelected('pending')} >Pending</button>
                <button onClick={()=> getSelected('instock') }>In Stock</button>
                <button onClick={()=> getSelected('soldout') }>Sold Out</button>
                <button onClick={()=> getSelected('warehouse') }>Warehouse</button>
              </div>
            </div>

            <div className='relative'>
              <div className='flex items-center border border-sky-500 px-2 rounded'>
                <button onClick={typeDropDown}>{typeSelected}</button>
                <AiFillCaretDown/>
              </div>
              <div className={showTypeDropDown ? 'hidden' : 'absolute'}>
                <button onClick={()=> getTypeSelected('women')} >Women</button>
                <button onClick={()=> getTypeSelected('men') }>Men</button>
                <button onClick={()=> getTypeSelected('new arrivals') }>New Arrivals</button>
                <button onClick={()=> getTypeSelected('sports') }>Sports</button>
              </div>

             
            </div>

            {/* <div className='relative'>
              <div className='flex items-center border border-sky-500 px-2 rounded'>
                <button onClick={typeDropDown}>{typeSelected}</button>
                <input type="text"  value={typeSelected} onChange={typeDropDown} />
                <AiFillCaretDown/>
              </div>

              <div className={showTypeDropDown ? 'hidden' : 'absolute'}>
                <button onClick={()=> setTypeSelected('women') } >Women</button>
                <button onClick={()=>setTypeSelected('men' )}>Men</button>
                <button onClick={()=>setTypeSelected('new arrivals') }>New Arrivals</button>
                <button onClick={()=> setTypeSelected('sports')  }>Sports</button>
              </div>
              </div> */}





         </div>

        </div>
      </section>
    </div>
  )
}

export default DashProducts