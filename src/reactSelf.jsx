import { useState } from "react";

export const Reactself =()=>{

  
  const students = [
    {id:1, firstname:'sushil', age:23, country:'india'},
    {id:2, firstname:'Rahul', age:23, country:'Mumbai'},
    {id:3, firstname:'Jyoti', age:23, country:'bangaldesh'},
    {id:4, firstname:'Kaalia', age:23, country:'UK'},
  ]
  
  const [selectedStudent, setSelectedStudent] = useState(null);

  const showDetails = (student) => {
    setSelectedStudent(student);
  };

  const closeDetails = () => {
    setSelectedStudent(null);
  };

  


  return(
    <>

    {/* <h1>Students Details </h1>
    {students.map((student)=>(
      <div key={student.id}>
        <h2>{student.firstname}</h2>
        <h3>{student.age}</h3>
        <p>{student.country}</p>
      </div>
    ))} */}

    {/* <h1>Student Details</h1> */}
      {/* <table className="table">
        <thead><tr><th>#</th><th>Name</th><th>Age</th><th>Country</th></tr></thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td>{student.firstname}</td>
              <td>{student.age}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      
      <div className="container">
      <h1>Student Details</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} onClick={() => showDetails(student)} data-bs-toggle="tooltip" data-bs-placement="right" title="Click to view details">
              <th scope="row">{student.id}</th>
              <td>{student.firstname}</td>
              <td>{student.age}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStudent && (
        <div className="card floating-card">
          <div className="card-body">
            <h5 className="card-title">{selectedStudent.firstname}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Age: {selectedStudent.age}</h6>
            <p className="card-text">Country: {selectedStudent.country}</p>
            <button className="btn btn-secondary" onClick={closeDetails}>Close</button>
          </div>
        </div>
      )}
      </div>
      

    
    </>
  )
}