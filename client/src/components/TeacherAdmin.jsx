import React from 'react'
import '../style/TeacherAdmin.css'
const TeacherAdmin = () => {
    return (
        <div className='MainPage'>
            <div className='nav'>
                <h1>Teacher Page</h1>
                <ul className='itemnav'>
                    <li>Student Name</li>
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

export default TeacherAdmin
