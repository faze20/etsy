import { useState } from 'react'
import {
    AiOutlineHome, 
    AiOutlineTag ,
     AiOutlineBarChart,
     AiOutlineNotification,
     AiOutlineAppstore,
     AiOutlinePlusCircle,
     AiOutlineInstagram,
     AiFillFacebook,
     AiOutlineEye,
    } 
from "react-icons/ai";
import { IoMdPerson , IoMdSnow } from "react-icons/io";
import { BiBasket } from "react-icons/bi";
import { BiStore } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io5";
import {collections , categories} from '../data/products'
import DashOverview from '../components/dashboard/DashOverview';
import DashHome from '../components/dashboard/DashHome';
import DashOrders from '../components/dashboard/DashOrders';
import DashProducts from '../components/dashboard/DashProducts';
import DashCustomers from '../components/dashboard/DashCustomers';
import OnlineStore from '../components/dashboard/OnlineStore';
import Sales from '../components/dashboard/Sales';
import Marketing from '../components/dashboard/Marketing';
import Discounts from '../components/dashboard/Discounts';
import DashApps from '../components/dashboard/DashApps';
import Link from 'next/link';




function Dashboard() {
    const labels = ['perfect lips collection', 'accessories', 'lashes', 'lips', 'sales', 'face'];
    const [showAnalytics , setShowAnalytics] = useState(false)
    const [allowComponent ,setAllowComponent ] = useState('home')
    

    const analyticsToggle = () => {
        setShowAnalytics(prev => !prev)
    }
    
    const displayComponent = (id)=>{
        setAllowComponent(id)
    }

    const quantity = (category) => collections.filter(function(item){
        if(item.category === category){
            return item

        }
    })
   
    

    const [userData, setUserData] = useState({
        labels: categories.map((item)=> item.title),
        datasets: [
          {
            label: "Categories",
            data: categories.map((data) => (data.quantity)),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
  return (
    <div className=''>
        <div className='flex '>
            <div className='basis-1/4 rounded-md  mr-4 p-4 bg-stone-100'>
              <div >
                  <ul className='space-y-6 '>
                    <li>
                         <div className='flex items-center space-x-2'> <AiOutlineHome/> 
                            <button onClick={(e)=>displayComponent('home')}>Home </button> 
                          </div>
                     </li>
                    <li className='flex justify-between '>
                        <div className='flex items-center space-x-2'><BiBasket/>
                           <button onClick={(e)=>displayComponent('orders')}>Orders</button>
                        </div>
                        <span>203</span>
                    </li>
                    <li>
                        <div className='flex items-center space-x-2'><AiOutlineTag/>
                         <button onClick={(e)=>displayComponent('products')}>Products</button> 
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center space-x-2'><IoMdPerson/> 
                        <button onClick={(e)=>displayComponent('customers')}>Customers</button> 
                        </div>
                    </li>
                    <li className='relative'>
                        <div className='flex items-center space-x-2'><AiOutlineBarChart/>
                              <button className='cursor-pointer' onClick={analyticsToggle}> Analytics</button></div>
                             
                                  <div className={showAnalytics ? 'block' : 'hidden'} >
                                  <ul className=' bg-lime-200 p-4 rounded-md ml-4 space-y-4' >
                                      <li><button onClick={(e)=>displayComponent('overview')}>Dashboard</button> </li>
                                      <li><button onClick={(e)=>displayComponent('insights')}>Insights</button></li>
                                      <li><button onClick={(e)=>displayComponent('reports')}>Reports</button></li>
                                      <li><button onClick={(e)=>displayComponent('liveview')}>Live View</button></li>
                                  </ul>

                                  </div>
                             
                        
                    </li>

                    <li>
                        <div className='flex items-center space-x-2'> <AiOutlineNotification /> 
                                <button onClick={(e)=>displayComponent('marketing')}>Marketing</button> 
                         </div>
                    </li>
                    <li>
                        <div className='flex items-center space-x-2'><IoMdSnow/> 
                                <button onClick={(e)=>displayComponent('discounts')}>Discounts</button> 
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center space-x-2'> <AiOutlineAppstore/> 
                        <button onClick={(e)=>displayComponent('apps')}>Apps</button> 
                        </div>
                    </li>
                  </ul>
              </div>
              <div>
                  <h2>
                      <div className='flex items-center my-6 space-x-2'> 
                      <button onClick={(e)=>displayComponent('sales')}>Sales Channel</button> 
                         <AiOutlinePlusCircle/> 
                  </div>
                   </h2>
                  <ul className='space-y-6 '>
                      <li className='flex justify-between'>
                          <div className='flex items-center space-x-2'>
                              <BiStore />
                              <button onClick={(e)=>displayComponent('onlinestore')}>Online Store</button> 
                       </div>
                      <span><AiOutlineEye/></span>
                      </li>
                      <li>
                          <div className='flex items-center space-x-2'><IoLogoFacebook/> 
                          <button onClick={(e)=>displayComponent('facebook')}>Facebook</button> 
                           </div>
                      </li>
                      <li>
                          <div className='flex items-center space-x-2'><AiFillFacebook/>
                          <button onClick={(e)=>displayComponent('facebookshop')}>Facebook Shop</button>  
                          </div>
                      </li>
                      <li>
                          <div className='flex items-center space-x-2'>
                              <AiOutlineInstagram/>
                              <button onClick={(e)=>displayComponent('instagram')}>Instagram</button> 
                               </div>
                      </li>
                      <li></li>
                  </ul>
              </div>

            </div>

            <div className='basis-3/4 rounded-md  p-4 bg-stone-100'>
               
                {allowComponent === 'overview' ?  <div><DashOverview  title='Overview' /> </div> : <div></div> }
                {allowComponent === 'insights' ?  <div><DashOverview  title='Insights' /> </div> : <div></div> }
                {allowComponent === 'reports' ?  <div><DashOverview  title='Reports' /> </div> : <div></div> }
                {allowComponent === 'liveview' ?  <div><DashOverview  title='Live view' /> </div> : <div></div> }
                {allowComponent === 'home' ?  <div><DashHome /></div> : <div></div> }
                {allowComponent === 'orders' ?  <div><DashOrders /></div> : <div></div> }
                {allowComponent === 'customers' ?  <div><DashCustomers /> </div> : <div></div> }
                {allowComponent === 'products' ?  <div><DashProducts /> </div> : <div></div> }
                {allowComponent === 'discounts' ?  <div><Discounts/> </div> : <div></div> }
                {allowComponent == 'marketing' ? <div ><Marketing /> </div> : <div></div> }
                {allowComponent == 'instagram' ? <div  ><Link href='https://www.instagram.com'>Click to visit Instagram </Link> </div> : <div></div> }
                {allowComponent == 'facebook' ? <div ><button>Click to visit Facebook</button> </div> : <div></div> }
                {allowComponent == 'facebookshop' ? <div ><button>Click to visit Facebook store</button> </div> : <div></div> }
                
                {allowComponent == 'apps' ? <div ><DashApps /> </div> : <div></div> }
                {allowComponent == 'sales' ? <div ><Sales /> </div> : <div></div> }
                {allowComponent == 'onlinestore' ? <div ><OnlineStore /> </div> : <div></div> }
                
               
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard



// if(id === 'home'){
//     setShowHomeComponent(true)
// }
// if(id ==='orders'){
//     setShowOrdersComponent(true)
// }
// if(id ==='products'){
//     setShowProductsComponent(true)
// }
// if(id ==='customers'){
//     setShowCustomersComponent(true)
// }