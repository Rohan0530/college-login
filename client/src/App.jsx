import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './components/StudentForm';
// import HomePage from './components/HomePage';
import Login from './components/Login';
// import StudentLogin from './components/StudentLogin';
// import StudentSignup from './components/StudentSignup';
import TeacherAdmin from './components/TeacherAdmin';
import HomeStudent from './components/HomeStudent';
import Registration from './components/Registration';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/student" element={<StudentForm />} /> */}
      <Route path='/' element={<Login/>}/>
      {/* <Route path='/teacherlogin' element={<TeacherLogin/>}/> */}
      <Route path='/registration' element={<Registration/>}/>
      {/* <Route path='/studentsignup' element={<StudentSignup/>}/> */}
      <Route path='/teacherAdmin' element={<TeacherAdmin />} />
      <Route path='/studentHome' element={<HomeStudent />} />

    </Routes>
  </Router>
  )
}

export default App
