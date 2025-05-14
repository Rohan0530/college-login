import React, { useState } from 'react'
import '../style/Login.css'
import Teacher from './Teacher.png'
import { Link } from 'react-router-dom'

const TeacherLogin = () => {

  let [formData,setFormData] = useState({email:'',password:''})

  let handleChange=(e)=>{

    let {value,name} = e.target;
    setFormData((prev)=>({...prev,[name]:value}))
  }

  let handleSubmit=(e)=>{

    e.preventDefault()
    console.log(formData)

    setFormData({email:'',password:''})

  }
  return (
    <div className='teacher_container'>

      <div className='avatar_container'>
        <img src={Teacher} alt="" />
      </div>

      <div className='login_heading_cont'>
        <h1>Login</h1>
      </div>

      <form action="" className='form_container' onSubmit={handleSubmit}>

        <div className='input_container'>
          <input type="text" 
          placeholder='Enter your email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          />
          <input type="password" 
          placeholder='Enter your password'
          name='password'
          value={formData.password}
          onChange={handleChange} 
          />
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
