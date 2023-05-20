export const reactself =(props)=>{

  const {firstName, age, company} = props

  const showAlert = ()=>{
    alert()
  }
  return(
    <>
      <h2>{firstName}</h2>
      <p>{age}</p>
      <p>{company}</p>


    <button onClick={showAlert} > Click Me </button>


    </>
  )
}