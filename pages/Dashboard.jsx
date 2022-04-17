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
import BarChart from '../components/Chart';
import LineChart from '../components/LineChart';
import {collections , categories} from '../data/products'




function Dashboard() {
    const labels = ['perfect lips collection', 'accessories', 'lashes', 'lips', 'sales', 'face'];

    const quantity = (category) => collections.filter(function(item){
        if(item.category === category){
            return item

        }
    })
    // const side = labels.map((item)=> item)
    // const side = collections.map((item)=> {
    //     item.category.filter(function(cat){
    //         return cat
    //     })
    // }
       
    // )
    

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
    <div>
        <div className='flex '>
            <div className='basis-1/4'>
              <div >
                  <ul>
                    <li> <div className='flex items-center'> <AiOutlineHome/>Home  </div> </li>
                    <li className='flex justify-between'>
                        <div className='flex items-center justify-between'><BiBasket/>
                          Orders 
                        </div>
                        <span>203</span>
                    </li>
                    <li><div className='flex items-center'><AiOutlineTag/>Products</div></li>
                    <li><div className='flex items-center'><IoMdPerson/>Customers</div></li>
                    <li>
                        <div className='flex items-center '><AiOutlineBarChart/>
                              Analytics
                              <div className='block relative'>
                                  <ul className='absolute'>
                                      <li>Dashboard</li>
                                      <li>Insights</li>
                                      <li>Reports</li>
                                      <li>Live View</li>
                                  </ul>
                              </div>
                        </div>
                    </li>

                    <li><div className='flex items-center'> <AiOutlineNotification /> Marketing </div></li>
                    <li><div className='flex items-center'><IoMdSnow/>Discounts</div></li>
                    <li><div className='flex items-center'> <AiOutlineAppstore/> Apps</div></li>
                  </ul>
              </div>
              <div>
                  <h2><div className='flex items-center'>Sales Channel <AiOutlinePlusCircle/> </div> </h2>
                  <ul>
                      <li className='flex justify-between'><div className='flex items-center'><BiStore /> Online Store </div>
                      <span><AiOutlineEye/></span>
                      </li>
                      <li><div className='flex items-center'><IoLogoFacebook/>Facebook</div></li>
                      <li><div className='flex items-center'><AiFillFacebook/> Facebook Shop</div></li>
                      <li><div className='flex items-center'><AiOutlineInstagram/> Instagram</div></li>
                      <li></li>
                  </ul>
              </div>

            </div>

            <div className='basis-3/4'>
            <h2>Overview Dashboard</h2>
            <div className='flex'>
                <div>
                    <div>
                        <div className="calendar">
                            Last 30 Days
                        </div>
                        <p>compared to Apr 18-May 17, 2022</p>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <div>
                                <h3>Total Sales</h3>
                                <span>View Report</span>
                            </div>
                            <div> <p>$137,142.33</p> <span>&uarr;1,046%</span></div>
                            <div><span>Online Store</span><span>$137,142.33</span><span>&uarr;1,046%</span></div>
                            <h4>SALES OVER TIME</h4>
                            <div className="w-96">
                                <BarChart chartData={userData}/>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <h3>Online store sessions</h3>
                        <span>view report</span>
                    </div>
                    <div className='flex'>
                        <h2>93,418</h2>
                        <span>&uarr;1,046%</span>
                    </div>
                    <div className='flex'><span>Visitors</span><span>$88,009</span><span>&uarr;43%</span></div>
                    <h4>SESSIONS OVER TIME</h4>
                    <div>
                        <LineChart chartData={userData} />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard