import Navbar from "../Navbar";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import LineGraph from "./LineGraph";
const Analytics = () =>{
    return (
        <div className="bg-black text-white pb-2 min-h-screen">

            <Navbar/>

            <div className="text-4xl ml-4">ANALYTICS</div>

            <div className=" justify-around my-4 flex flex-col items-center gap-5 sm:flex-row">
            <div className="bg-blue-800 justify-center flex-col text-center p-3 text-2xl w-56 border-2 rounded"><div>Total Clicks</div><div>9999</div></div>
            <div className="bg-blue-800 justify-center flex-col text-center p-3 text-2xl w-56 border-2 rounded"><div>Unique Clicks</div><div>1111</div></div>
            </div>

            <div className="flex flex-col sm:flex-row justify-evenly gap-5 items-center">
                <div className="sm:w-2/5 w-5/6">
                    <div className="text-2xl m-2 mt-5">Clicks by Countries</div>
                    <div><BarGraph data = {{
        labels: ['India', 'USA', 'UK', 'Russia', 'Singapore'],
        datasets: [
          {
            label: 'Click By Countries',
            data: [12, 19, 7, 9, 4],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}
      /></div>
                </div>

                <div className="sm:w-2/5 w-5/6">
                    <div className="text-2xl m-2 mt-5">Clicks by Cities</div>
                    <div><BarGraph data = {{
        labels: ['Delhi', 'Mumbai', 'New York', 'Los Angeles', 'Chennai'],
        datasets: [
          {
            label: 'Click By Countries',
            data: [12, 19, 7, 9, 4],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}
      /></div>
                </div>
            </div>




            <div className="flex flex-col sm:flex-row justify-evenly gap-5 items-center">
                <div className="sm:w-2/5 w-5/6">
                    <div className="text-2xl m-2 mt-5">Monthly Chart</div>
                    <div><LineGraph data = {{
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Clicks',
      data: [20, 33, 70, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.1,
    },
  ],
}}
      /></div>
                </div>

                <div className="sm:w-4/12 w-1/2">
                    <div className="text-2xl m-2 mt-5">Referrals</div>
                    <div><PieGraph data = {{
        labels: ['LinkedIn', 'Insta', 'Facebook', 'Website', 'Others'],
        datasets: [
          {
            label: 'Referrals',
            data: [12, 19, 7, 9, 4],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}
      /></div>

                </div>
            </div>







           
           
            
            
        </div>
    )
}

export default Analytics;