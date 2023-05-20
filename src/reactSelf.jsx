import { useState } from "react"

export const Reactself =({firstname, age, country})=>{

  const [love, setlove] = useState(0)
  const name = ['sushil', 'rahul', 'satish', 'sanvi', 'sunil', 'rajmuni', 'kanchan']


  const students = [
    {id:1, firstname:'sushil', age:23, country:'india'},
    {id:2, firstname:'Rahul', age:23, country:'Mumbai'},
    {id:3, firstname:'Jyoti', age:23, country:'bangaldesh'},
    {id:4, firstname:'Kaalia', age:23, country:'UK'},
  ]
  const increaselove = ()=>{
    setlove(love +1)

  }
  
  const takelove = ()=>{
    setlove(love === 0 ? 0 : love -1)
  }


  


  return(
    <>
      
      <h2 style={{color:"red"}}>Love : {love}</h2>
      <button onClick={increaselove}>Give Love</button>
      <button onClick={takelove}>Give Hate</button>

      {name && name.length > 0 ? 
      (<div>
        <h2>Data:</h2>
        <ul>{name.map((item, index)=>(<li key={index}> {item} </li>))}</ul>
      </div>):(<p> No data Available </p>)
      }

      <div>
        <h2>{firstname}</h2>
        <h4>{age}</h4>
        <p>{country}</p>
      </div>
       

      {students && students.map((student) =>(
        <Reactself 
        key={student.id}
        firstname={student.firstname}
        age={student.age}
        country={student.country} 
        />
      ))}

    
    </>
  )
}