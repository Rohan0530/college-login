// import '../style/TeacherAdmin.css'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import axiosInstance, { setterFunction } from '../../axiosInstance';

// const TeacherAdmin = () => {
//     const [students, setStudents] = useState([])
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         const fetchStudents = async () => {
//             try {
//                 setterFunction(setLoading)
//                 const res = await axiosInstance.get('students/all')
//                 setStudents(res.data)
//             } catch (error) {
//                 console.error("Error fetching students:", error)
//             }
//         }
    
//         fetchStudents()
//     }, [])
    

//     return (
//         <div className='MainPage'>
//             <div className='nav'>
//                 <h1>Teacher Page</h1>
//                 <ul className='itemnav'>
//                     <li>Teacher Name</li>
//                     <li><button>Logout</button></li>
//                 </ul>
//             </div>
//             <div className='main'>
//                 <aside className='asidebar'>
//                     <div className="userdata">
//                         <ul className='listname'>
//                             <li>Student Name</li>
//                             <li><button className='listbtn'>View</button></li>
//                         </ul>
//                     </div>
//                 </aside>
//                 <div className='mainconten'>
//                     <h3>All Student Data</h3>
//                     {
//                         loading ? (<div className="spinner"></div>)
//                             :
//                             <table border={"2"} className='tabmain'>
//                                 <thead>
//                                     <tr>
//                                         <th>S.NO</th>
//                                         <th>Student Name</th>
//                                         <th>Email</th>
//                                         <th>Contact</th>
//                                         <th>View</th>
//                                         <th>Download</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className='BodyData'>
//                                     {students.map((student, index) => (
//                                         <tr key={student._id || index}>
//                                             <td>{index + 1}</td>
//                                             <td>{student.name}</td>
//                                             <td>{student.email}</td>
//                                             <td>{student.contactNumber}</td>
//                                             <td><a href={`http://localhost:4500/uploads/${student.resume}`} target="_blank">View</a></td>
//                                             <td><a href={`http://localhost:4500/api/staff/download/${student.resume}`} style={{ background: 'none', }} rel="noopener noreferrer"><button>Click here</button></a></td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                     }

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TeacherAdmin

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/TeacherDashboard.css'
import axiosInstance, { setterFunction } from '../../axiosInstance';




const TeacherAdmin = () => {

    let paze_size = 3;

    const [students, setStudents] = useState([]);
    let [current,setCurrent] = useState(0)
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

    let totalProduct = students.length;
    let noOfPages = Math.ceil(totalProduct / paze_size);
    let start = current * paze_size;
    let end = start + paze_size

    let handlePage=(n)=>{
        setCurrent(n)
    }

    let nextPage=()=>{
        setCurrent((prev) => prev - 1)
    }

    let prevPage=()=>{
        setCurrent((prev)=> prev + 1)
    }


    return (
        <div className='teacher-main_cont'>
            <nav className='navbar-teacher'>
                <div className='teacher-nav-logo-cont'>
                    <h1>Teacher Dashboard</h1>
                </div>
                <div className='teacher-nav-item-cont'>
                    <p>Teacher name</p>
                    <button>Logout</button>
                </div>
            </nav>

            
        {loading ? <div className='spinner'></div>
        : 
        <div className='teacher-second-cont'>
                {students.slice(start,end).map((student, index) => (
                    <div className='teacher-card-cont' key={index}>
                        <h1>{student.name}</h1><br />
                        <hr />
                        <div className='teacher-details-cont'>
                            <p>Full Name:{student.name} </p>
                            <p>Email:{student.email}</p>
                            <p>Mobile:{student.contactNumber}</p>
                            <p>Course:{student.course}</p>
                            <p>Resume:<a href={`http://localhost:4500/uploads/${student.resume}`} target="_blank">View resume</a></p>
                        </div>

                        <a href={`http://localhost:4500/api/staff/download/${student.resume}`}><button>Download Resume</button></a>

                    </div>
                ))}

            </div>
        }
            
            <div className='pagination-con'>
                <button onClick={()=>nextPage()} disabled={current === 0}>◀️</button>
                {[...Array(noOfPages).keys()].map((n)=>(
                    
                    <span
                    className={"page-number" + (n === current ? " active" : "")}
                    key={n}
                    onClick={()=>handlePage(n)}
                    >{n}</span>
                ))}
                <button onClick={()=>prevPage()} disabled={current === noOfPages - 1}>▶️</button>

            </div>

        </div>
    )
}

export default TeacherAdmin