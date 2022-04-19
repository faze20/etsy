import { useState } from 'react'
import {collections , categories} from '../../data/products'
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';



function DashOverview({title}) {
    const labels = ['perfect lips collection', 'accessories', 'lashes', 'lips', 'sales', 'face'];
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
    <div>
         <h2>{title}</h2>
         <div>
                <div className="calendar">
                    Last 30 Days
                </div>
<div className='flex'>
<p>Compared to {new Date().getDate()} </p>
                <p className='mx-2'>{new Date().getMonth()}</p>
                <p>{new Date().getYear()}</p>
                

</div>
                 </div>
            <div className='flex'>
                <div>
                   
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
  )
}

export default DashOverview