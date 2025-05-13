import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './components/StudentForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/student" element={<StudentForm />} />
    </Routes>
  </Router>
  )
}

export default App
