import React from 'react'
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




function Dashboard() {
  return (
    <div>
        <div className='flex '>
            <div >
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
            <div>
                <div>
                    <h2>Overview Dashboard</h2>
                    <div>
                        <div className="calendar">
                            Last 30 Days
                        </div>
                        <p>compared to Apr 18-May 17, 2022</p>
                    </div>
                    <div className='flex'>
                        <div>
                            <div>
                                <h3>Total Sales</h3>
                                <span>View Report</span>
                            </div>
                            <div> <p>$137,142.33</p> <span>&uarr;1,046%</span></div>
                            <div><span>Online Store</span><span>$137,142.33</span><span>&uarr;1,046%</span></div>
                            <h4>SALES OVER TIME</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard