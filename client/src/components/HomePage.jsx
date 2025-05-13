import React from 'react'
import '../style/HomePage.css'
import Teacher from './Teacher.png'
import student from './Student.jpg'
import { useNavigate } from "react-router-dom";


const HomePage = () => {

    let navigate = useNavigate()

    let handleTeacher=()=>{
        navigate('/teacherlogin')
    }

    let handleStudent=()=>{
        navigate('/studentlogin')
    }

  return (
    <div className='main_container'>

        <div className='heading_cont'>
            <h1>Please select your account type</h1>
        </div>

        <div className='profile_cont'>
            <div className="avatar" onClick={handleTeacher}>
                <img src={Teacher} alt="" /><br />
                <h3>Teacher</h3>
            </div>
            <div className="avatar" onClick={handleStudent}>
                <img src={student} alt="" /><br />
                <h3>Student</h3>
            </div>

        </div>
      
    </div>
  )
}

export default HomePage
