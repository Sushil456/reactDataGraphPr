
import './jobcard.css'


export const Jobcard =()=>{
    return (<>
        <div class="container">
  <div class="card">
    <div class="card-header">
      <span class="badge bg-primary">View</span>
    </div>
    <div class="card-body">
      <h5 class="card-title">Job Title</h5>
      <p class="card-subtitle">Job Start Date</p>
      <p class="card-text">Total Vacancy</p>
      <button class="btn btn-primary">View Details</button>
    </div>
  </div>
</div>

    </>)
}