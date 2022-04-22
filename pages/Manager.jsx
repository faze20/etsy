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
     AiOutlineClose 
    } 
from "react-icons/ai";
import { HiMenu   } from "react-icons/hi";

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
import { format, parseISO, subDays } from "date-fns"


const reportDatas = []
for(let num =30; num >= 0; num--){
    var rawDate = parseISO(subDays(new Date(), num).toISOString().substring(0,10))
    reportDatas.push({
        date:format(rawDate , "MMM, d"),
        value:1 + Math.random(),
    })

}

function Dashboard() {
    const [showAnalytics , setShowAnalytics] = useState(false)
    const [allowComponent ,setAllowComponent ] = useState('home')
    const [showMobileNav , setShowMobileNav] = useState(false)

    

    const analyticsToggle = () => {
        setShowAnalytics(prev => !prev)
    }
    
    const displayComponent = (id)=>{
        setAllowComponent(id)
    }

   const salesData = {
       labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
       datasets:[
           {
               label: 'Sales for 2021(M)',
               data: [3,4,6,8,2,5,9],
               borderColor: '#000',
               borderWidth: 2,
               backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
            ],
               pointBorderColor:['rgba(255,206,86,0.2'],

           },
           {
               label: 'Sales for 2022(M)',
               data: [5,8,1,4,7,1,6],
               backgroundColor: [
                "rgba(255,206,86,0.2)",
                "#7367f0",
                "#ffe600",
                "#2c3e50",
                "#323232",
            ],
               pointBorderColor: 'rgba(54,162,235,0.2)',
               borderWidth:2,
               borderColor:'#000'
           }

       ]
   }
   const reportsData = {
       labels:reportDatas.map((report)=> report.date),
       datasets:[
           {
               label: 'Sales report',
               data:reportDatas.map((report)=>report.value),
               backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,

           }
       ]
   }
  
    

    const barData = {
        labels:categories.map((item)=> item.title),
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
            fill:true,
        },
        ],
        
    }

    const mobileToggle = () => {
        setShowMobileNav(prev => !prev)
    }
  return (
    <div className='relative'>
        <div className='flex flex-col md:flex-row '>
            <div  className='block mb-1 md:hidden mx-4 '>
                <a className='' onClick={mobileToggle}>
                    {showMobileNav ?
                     <div  className='flex justify-center border border-red-300 py-2 rounded items-center text-red-700 text-2xl'><span  className='text-sm'>Close nav</span><AiOutlineClose /></div> : 
                     <div className='flex justify-center border border-teal-300 py-2 items-center text-teal-500 text-2xl rounded'> <span className='text-sm'>Open nav</span><HiMenu /></div> 
                      }   
                </a>
                {showMobileNav && 
                    <section className="smallscreen_nav">
                        <div className="flex">
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
                        </div>
                    </section>
                }
            </div>

            <div className=' hidden md:block basis-1/4 rounded-md  mr-4 p-4 bg-stone-100'>
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

            <div className='basis-full lg:basis-3/4 rounded-md  p-4 bg-stone-100'>
               
                {allowComponent === 'overview' &&  <div><DashOverview  title='Overview' data={barData} lChart='true' bChart='true' /> </div> }
                {allowComponent === 'insights' &&  <div><DashOverview  title='Insights' data={salesData} lChart='true' bChart='true' /> </div>}
                {allowComponent === 'reports' &&  <div><DashOverview  title='Reports' data={reportsData} lChart='true' bChart='true' /> </div>  }
                {allowComponent === 'liveview' &&  <div><DashOverview  title='Live view'  data={reportsData} lChart='true'  /> </div>  }
                {allowComponent === 'home' &&  <div><DashHome /></div>  }
                {allowComponent === 'orders' &&  <div><DashOrders /></div>  }
                {allowComponent === 'customers' &&  <div><DashCustomers /> </div>  }
                {allowComponent === 'products' &&  <div><DashProducts /> </div>  }
                {allowComponent === 'discounts' &&  <div><Discounts/> </div>  }
                {allowComponent == 'marketing' && <div ><Marketing /> </div>  }
                {allowComponent == 'instagram' && <div  ><Link href='https://www.instagram.com'>Click to visit Instagram </Link> </div> }
                {allowComponent == 'facebook' && <div ><button>Click to visit Facebook</button> </div>  }
                {allowComponent == 'facebookshop' && <div ><button>Click to visit Facebook store</button> </div>  }
                
                {allowComponent == 'apps' && <div ><DashApps /> </div>  }
                {allowComponent == 'sales' && <div ><Sales /> </div>  }
                {allowComponent == 'onlinestore' && <div ><OnlineStore /> </div> }
                
               
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard
