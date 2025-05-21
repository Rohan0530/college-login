import '../style/TeacherAdmin.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance, { setterFunction } from '../../axiosInstance';

const TeacherAdmin = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                setterFunction(setLoading)
                const res = await axiosInstance.get('students/all')
                setStudents(res.data)
            } catch (error) {
                console.error("Error fetching students:", error)
            }
        }
    
        fetchStudents()
    }, [])
    

    return (
        <div className='MainPage'>
            <div className='nav'>
                <h1>Teacher Page</h1>
                <ul className='itemnav'>
                    <li>Teacher Name</li>
                    <li><button>Logout</button></li>
                </ul>
            </div>
            <div className='main'>
                <aside className='asidebar'>
                    <div className="userdata">
                        <ul className='listname'>
                            <li>Student Name</li>
                            <li><button className='listbtn'>View</button></li>
                        </ul>
                    </div>
                </aside>
                <div className='mainconten'>
                    <h3>All Student Data</h3>
                    {
                        loading ? (<div className="spinner"></div>)
                            :
                            <table border={"2"} className='tabmain'>
                                <thead>
                                    <tr>
                                        <th>S.NO</th>
                                        <th>Student Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>View</th>
                                        <th>Download</th>
                                    </tr>
                                </thead>
                                <tbody className='BodyData'>
                                    {students.map((student, index) => (
                                        <tr key={student._id || index}>
                                            <td>{index + 1}</td>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                            <td>{student.contactNumber}</td>
                                            <td><a href={`http://localhost:4500/uploads/${student.resume}`} target="_blank">View</a></td>
                                            <td><a href={`http://localhost:4500/api/staff/download/${student.resume}`} style={{ background: 'none', }} rel="noopener noreferrer"><button>Click here</button></a></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    }

                </div>
            </div>
        </div>
    )
}

export default TeacherAdmin
