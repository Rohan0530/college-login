import '../style/TeacherAdmin.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TeacherAdmin = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await axios.get('http://localhost:4500/api/students/all')
                console.log("Data",res);
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
                    <table border={"2"} className='tabmain'>
                        <thead>
                            <tr>
                                <th>Student id</th>
                                <th>Student Name</th>
                                <th>Email</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody className='BodyData'>
                            {students.map((student, index) => (
                                <tr key={student._id || index}>
                                    <td>{student._id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td><a href={`http://localhost:4500/uploads/${student.resume}`} target="_blank">View</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TeacherAdmin
