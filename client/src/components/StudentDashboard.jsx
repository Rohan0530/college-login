import React from 'react'
import '../style/StudentDashboard.css'

const StudentDashboard = () => {
  return (
    <div className='student-main_cont'>
      <nav className='navbar-student'>
        <div className='nav-logo-cont'>
          <h1>Student Dashboard</h1>
        </div>
        <div className='nav-item-cont'>
            <p>Student Name</p>
            <button>Logout</button>
        </div>
      </nav>
      
    </div>
  )
}

export default StudentDashboard
