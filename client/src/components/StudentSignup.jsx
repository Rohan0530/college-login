import React from 'react'
import student from './Student.jpg'
import '../style/Login.css'
import { Link } from 'react-router-dom'




const StudentSignup = () => {
  return (
    <div className='teacher_container'>
    
          <div className='avatar_container'>
            <img src={student} alt="" />
          </div>
    
          <div className='login_heading_cont'>
            <h1>SignUp</h1>
          </div>
    
          <form action="" className='form_container'>
    
            <div className='input_container'>
              <input type="text" placeholder='Enter your email'/>
              <input type="password" placeholder='Enter your password' />
            </div>
    
            <div className='button_container'>
              <button type='submit'>Signup</button>
            </div>
          </form>
    
          <div>
            <p>Already have an account?  <Link to={'/studentlogin'} style={{textDecoration:"none"}}>Login</Link></p>
          </div>
          
        </div>
  )
}

export default StudentSignup
