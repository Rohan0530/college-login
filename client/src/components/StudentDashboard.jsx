import React from 'react'
import '../style/StudentDashboard.css'
import { useNavigate } from 'react-router-dom'


const StudentDashboard = () => {

  let navigate = useNavigate()

  let handleLogout = ()=>{
    navigate('/')
  }
  return (
    <div className='student-main_cont'>
      <nav className='navbar-student'>
        <div className='nav-logo-cont'>
          <h1>Student Dashboard</h1>
        </div>
        <div className='nav-item-cont'>
            <p>Student Name</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className='student-second-cont'>
        <div className='student-card-cont'>
          <h1>Student Details</h1><br />
          <hr />
          <div className='student-details-cont'>
          <p>Full Name: Sourabh Karale</p>
          <p>Email: sourabh@gmail.com</p>
          <p>Mobile No: 9620017198</p>
          <p>Course: MCA</p>
          <p>Resume:</p>
          </div>

          <button >Edit Profile</button>
          
        </div>

      </div>
      
    </div>
  )
}

export default StudentDashboard
