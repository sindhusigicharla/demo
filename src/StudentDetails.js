function StudentDetails(){
  let students = [
    {
      name: "John Doe",
      age: 20,
      grade: "A"
    },
    {
      name: "Jane Smith",
      age: 22,
      grade: "B"
    },
    {
      name: "Alice Johnson",
      age: 19,
      grade: "A"
    },
    {
      name: "Bob Brown",
      age: 21,
      grade: "C"
    }
  ]

  if(students.length === 0){
    return (
    <div>
      <h1>No student data is available</h1>
    </div>
    )
  }else{
    return(
    <div>
      <h1>Student Details:</h1>
      <ul>
        {students.map((student)=>{
          return (
            <li>
              <h3>Name: {student.name}</h3>
              <p>Age: {student.age}</p>
              <p>Grade: {student.grade}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
  }
  
}

export default StudentDetails;