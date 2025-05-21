// import React, { useState } from 'react';
// import '../style/Login.css';
// import Teacher from './Teacher.png';
// import Student from './Student.jpg';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'



// let Registration = () => {

//     let navigate = useNavigate()
//     let [accountType, setAccountType] = useState('staff');

//     let [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         subject: '',
//         contactNumber: '',
//         course: '',
//         resume: '',
//     });

//     let handleChange = (e) => {
//         let { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };



//     let handleAccountTypeChange = (type) => {
//         setAccountType(type);
//         setFormData({
//             name: '',
//             email: '',
//             password: '',
//             subject: '',
//             contactNumber: '',
//             course: '',
//             resume: '',
//         });
//     };

//     let handleRegister = async() => {
//         let dataToSubmit = { accountType, ...formData };
//         if(accountType === 'staff'){
//             let sendData = await axios.post('http://localhost:4500/api/staff/register',dataToSubmit)
//             console.log(sendData)
//         }else{
//             let sendData = await axios.post('http://localhost:4500/api/students/register',dataToSubmit)
//             console.log(sendData)
//         }
//         console.log(dataToSubmit);
//         alert(`Registered as ${accountType}`);
//         navigate('/')
//     };

//     return (
//         <div className="login-container">
//             <div className="login-card">
//                 <h2>Register as</h2>
//                 <div className="account-types">
//                     {['staff', 'student'].map((type) => {
//                         let imageSrc = type === 'staff' ? Teacher : Student;
//                         return (
//                             <div
//                                 key={type}
//                                 onClick={() => handleAccountTypeChange(type)}
//                                 className={`account-option ${accountType === type ? 'selected' : ''}`}
//                             >
//                                 <div className="avatar"><img src={imageSrc} alt={type} /></div>
//                                 <span>{type}</span>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <p className="welcome-text">
//                     Hello {accountType.toLowerCase()}!<br />
//                     Please fill out the form to register.
//                 </p>




//                 <input
//                     type="text"
//                     name="name"
//                     placeholder={`${accountType} Name`}
//                     className="input-field"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="input-field"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="input-field"
//                     value={formData.password}
//                     onChange={handleChange}
//                 />




//                 <div className={accountType === 'staff' ? '' : 'hidden-section'}>
//                     <input
//                         type="text"
//                         name="subject"
//                         placeholder="Subject"
//                         className="input-field"
//                         value={formData.subject}
//                         onChange={handleChange}
//                     />
//                 </div>





//                 {accountType === 'student' && (
//                     <div className={accountType === 'student' ? '' : 'hidden-section'}>
//                         <input
//                             type="text"
//                             name="contactNumber"
//                             placeholder="Contact Number"
//                             className="input-field"
//                             value={formData.contactNumber}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="text"
//                             name="course"
//                             placeholder="Grade"
//                             className="input-field"
//                             value={formData.course}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="file"
//                             name='resume'
//                             accept="application/pdf"
//                             className="input-field"
//                             onChange={handleChange}
//                         />
//                     </div>
//                 )}

//                 <button className="login-btn" onClick={handleRegister}>
//                     Register
//                 </button>

//                 <p className="signup-text">
//                     Already have an account? <Link to={'/'} className="signup-link">Login</Link>   
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Registration;


import React, { useState } from 'react';
import '../style/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

let Registration = () => {
    let navigate = useNavigate();
    let [accountType, setAccountType] = useState('');

    let [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        subject: '',
        contactNumber: '',
        course: '',
        resume: null,
    });

    let handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume') {
            setFormData(prev => ({ ...prev, resume: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    let handleAccountTypeChange = (e) => {
        const type = e.target.value;
        setAccountType(type);
        setFormData({
            name: '',
            email: '',
            password: '',
            subject: '',
            contactNumber: '',
            course: '',
            resume: null,
        });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!accountType) {
                alert('Please select an account type.');
                return;
            }

            const form = new FormData();
            form.append('role', accountType);
            form.append('name', formData.name);
            form.append('email', formData.email);
            form.append('password', formData.password);

            if (accountType === 'staff') {
                form.append('subject', formData.subject);
            } else {
                form.append('contactNumber', formData.contactNumber);
                form.append('course', formData.course);
                form.append('resume', formData.resume);
            }

            const url =
                accountType === 'staff'
                    ? 'http://localhost:4500/api/staff/register'
                    : 'http://localhost:4500/api/students/register';

            const sendData = await axios.post(url, form);

            console.log(sendData);
            toast.success('Registered successfully!');
            setTimeout(() => {
                navigate('/');
            }, 2000);        } catch (error) {
            console.error(error);
            toast.error('Registration failed. Please try again.');
        }
    };


    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Register</h2>

                <form onSubmit={handleSubmit}>
                    <select
                        // name="accountType"
                        value={accountType}
                        onChange={handleAccountTypeChange}
                        className="input-field"
                    >
                        <option value="">-- Select Account Type --</option>
                        <option value="staff">Staff</option>
                        <option value="student">Student</option>
                    </select>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input-field"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input-field"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    {/* Show the rest only if accountType is selected */}
                    {accountType && (
                        <>
                            <input
                                type="text"
                                name="name"
                                placeholder={`${accountType} Name`}
                                className="input-field"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            {accountType === 'staff' && (
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="input-field"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            )}

                            {accountType === 'student' && (
                                <>
                                    <input
                                        type="text"
                                        name="contactNumber"
                                        placeholder="Contact Number"
                                        className="input-field"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="course"
                                        placeholder="Course"
                                        className="input-field"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="file"
                                        name="resume"
                                        accept="application/pdf"
                                        className="input-field"
                                        onChange={handleChange}
                                        required
                                    />
                                </>
                            )}
                        </>
                    )}

                    <button type="submit" className="login-btn">
                        Register
                    </button>

                    <p className="signup-text">
                        Already have an account? <Link to="/" className="signup-link">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registration;
