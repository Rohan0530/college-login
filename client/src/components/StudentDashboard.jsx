import React, { useEffect, useState } from 'react'
import '../style/StudentDashboard.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import axiosInstance, { setterFunction } from '../../axiosInstance'


const StudentDashboard = () => {
  let [getData, setGetData] = useState()
  console.log(getData)
  let [loading, setLoading] = useState(false)
  let navigate = useNavigate()

  let handleLogout = () => {
    navigate('/')
  }
  let { id } = useParams()
  console.log(id)

  let GetSingleData = async (id) => {
    try {
      let singleData = await axiosInstance.get(`students/single/${id}`)
      console.log(singleData)
      setGetData(singleData.data.data)


    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    setterFunction(setLoading)
    GetSingleData(id)
  }, [])
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
        {loading ? (<div className='spinner'></div>)
          :
          <div className='student-card-cont'>
            <h1>Student Details</h1><br />
            <hr />
            <div className='student-details-cont'>
              <p>Full Name:{getData?.name} </p>
              <p>Email: {getData?.email}</p>
              <p>Mobile No: {getData?.contactNumber}</p>
              <p>Course:{getData?.course} </p>
              <p>Resume:{getData?.resume}</p>
            </div>

            <button >Edit Profile</button>

          </div>
        }

      </div>

    </div>
  )
}

export default StudentDashboard
