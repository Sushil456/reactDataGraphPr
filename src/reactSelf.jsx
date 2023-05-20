import { useState } from "react"

export const Reactself =(props)=>{

  const {firstName, age, company} = props

  const showAlert = ()=>{
    alert("please support me ")
  }

  const onTextChange = (event)=>{
    console.log(event.target.value);
  }


  const [counter, setCounter] = useState(0);

  const increment =()=>{
    setCounter(counter + 1);
    console.log(counter)
  }
  return(
    <>
      <h2>{firstName}</h2>
      <p>{age}</p>
      <p>{company}</p>


    <button onClick={showAlert} > Click Me </button>
    <button onClick={()=>alert("this is the best way to prompt")} > Click Me </button>
    <button onClick={()=>alert("how to get that money")} > Click Me </button>

    <h4>Text Box value</h4>
    <input onChange={onTextChange} />

    <button onClick = {increment} >increment</button>
    <p> {counter}</p>
    </>
  )
}