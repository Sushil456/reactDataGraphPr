// import socketIOClient from 'socket.io-client'
// import {useState, useEffect} from 'react';
// import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip } from 'recharts';
// import Progressbar from './progressbar';
// import { Drop } from './dropdown';
import { reactself } from "./reactSelf"

export const App = () => {

  // const [data, setdata] = useState([])  ;
  // useEffect(()=>{
  //   const socket = socketIOClient("http://127.0.0.1:4000/")
  //   socket.on("message", (data)=>{
  //     setdata(data)
  //     // this.render()
  //   })
  // }, [])


  return (
    <div>

        {/* <LineChart width={1000} height={300} data={data}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="x" stroke="#8884d8" />
      <Line type="monotone" dataKey="y" stroke="#82ca9d" />
      <Tooltip />
    </LineChart>

    <Progressbar />

    <br/>
    <Drop /> */}
    <reactself firstName="Sushil" age="23" company="cisco"/>
    </div>
  )


  
}
