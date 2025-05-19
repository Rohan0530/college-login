import React, { useEffect, useState } from 'react'
import '../style/StudentDashboard.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const StudentDashboard = () => {
  let [getData, setGetData] = useState()
  console.log(getData)

  let navigate = useNavigate()

  let handleLogout = ()=>{
    navigate('/')
  }
let {id} = useParams()
console.log(id)

  let GetSingleData = async(id)=>{
    try {

      let singleData = await axios.get(`http://localhost:4500/api/students/single/${id}`)
      console.log(singleData)
      setGetData(singleData.data.data)
      
      
    } catch (error) {
      
    }
    
  }

  useEffect(()=>{
    GetSingleData(id)
  },[])
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
          <p>Full Name:{getData?.name} </p>
          <p>Email: {getData?.email}</p>
          <p>Mobile No: 9620017198</p>
          <p>Course: MCA</p>
          <p>Resume:{getData?.resume}</p>
          </div>

          <button >Edit Profile</button>
          
        </div>

      </div>
      
    </div>
  )
}

export default StudentDashboard
