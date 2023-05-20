export const Reactself =(props)=>{

  const {firstName, age, company} = props

  const showAlert = ()=>{
    alert("please support me ")
  }

  return(
    <>
      <h2>{firstName}</h2>
      <p>{age}</p>
      <p>{company}</p>


    <button onClick={showAlert} > Click Me </button>
    <button onClick={()=>alert("this is the best way to prompt")} > Click Me </button>
    <button onClick={()=>alert("how to get that money")} > Click Me </button>


    </>
  )
}