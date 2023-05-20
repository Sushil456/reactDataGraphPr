import './singlecard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faEye } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon="fa-regular fa-square-poll-vertical" />


export const SingleCard =(props)=>{
    return (
        <>
        
        <div class="card">
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    <div className="title">{props.title}</div>
    <div className="notifications"><FontAwesomeIcon icon={faEye} />{props.view}</div>
  </div>
  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2px'}}>
    <span className='subtitle'>{props.publisher}</span>
    <span className='badge'>
      <span className='badge-1'>badge 1</span>
      <span className='badge-2'>badge 1</span>
      <span className='badge-3'>badge 1</span>
      <span className='badge-4'>badge 1</span>
      
    </span>
  </div>
</div>
        </>


    )
}