import React from 'react'
import '../style/Login.css'
import Teacher from './Teacher.png'
import { Link } from 'react-router-dom'

const TeacherLogin = () => {
  return (
    <div className='teacher_container'>

      <div className='avatar_container'>
        <img src={Teacher} alt="" />
      </div>

      <div className='login_heading_cont'>
        <h1>Login</h1>
      </div>

      <form action="" className='form_container'>

        <div className='input_container'>
          <input type="text" placeholder='Enter your email'/>
          <input type="password" placeholder='Enter your password' />
        </div>

        <div className='button_container'>
          <button type='submit'>Login</button>
        </div>
      </form>

      {/* <div>
        <p>Dont't have an account?  </p>
      </div> */}
      
    </div>
  )
}

export default TeacherLogin
