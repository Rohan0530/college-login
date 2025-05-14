import React from 'react'
import '../style/TeacherAdmin.css'
const HomeStudent = () => {
    return (
        <div className='MainPage'>
            <div className='nav'>
                <h1>Student Page</h1>
                <ul className='itemnav'>
                    <li>Student Name</li>
                    <li><button>Logout</button></li>
                </ul>
            </div>
            <div className='main'>
                <aside className='asidebar'>
                    <div className="userdetail">
                        <ul className='sidenav'>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">My Courses</a></li>
                            <li><a href="#">Assignments</a></li>
                            <li><a href="#">Exams</a></li>
                            <li><a href="#">Grades</a></li>
                            <li><a href="#">Timetable</a></li>
                            <li><a href="#">Study Material</a></li>
                            <li><a href="#">Announcements</a></li>
                            <li><a href="#">Settings</a></li>
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
                            <tr>
                                <td>
                                    1001

                                </td>
                                <td>
                                    Sourabh karle

                                </td>
                                <td>
                                    Abcd@gmail.com
                                </td>
                                <td>
                                    View
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    1001

                                </td>
                                <td>
                                    Sourabh karle

                                </td>
                                <td>
                                    Abcd@gmail.com
                                </td>
                                <td>
                                    View
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HomeStudent
