import './jobcard.css'
import { SingleCard } from './singlecard'

export const Jobcard =()=>{
    return (<>
        
        <SingleCard title={"SI Officer "} publisher={"BPSC"} view={"12300"}/>
        <SingleCard title={"Sub divisional Clerk"} publisher={"UPPSC"} view={"4700"}/>
        <SingleCard title={"General Typist job"} publisher={"JSSC"} view={"9080"}/>
        

      
        <div class="container">
          <div class="row">
            <div class="col">

        <SingleCard title={"pub sanitary officer"} publisher={"SSC"} view={"1000"}/>
            </div>
          </div>
        </div>
    
        

   


</>)
}