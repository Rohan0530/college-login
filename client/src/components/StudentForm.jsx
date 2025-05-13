import React from 'react'
import { useState } from 'react';
import '../style/StudentForm.css'
const StudentForm = () => {
    let [formData, setFormData] = useState({
        fname: '',
        middleName: '',
        dob: '',
        street: '',
        city: '',
        state: '',
        country: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fname: '',
            middleName: '',
            dob: '',
            street: '',
            city: '',
            state: '',
            country: '',
            email: ''
        })
    };


    return (
        <div className="student-main">
            <h1>Student Registration Form</h1>

            <form className="student-form" onSubmit={handleSubmit}>
                <div className="item-left">
                    <h2>Student Information</h2>
                </div>
                <div className="form-group">
                    <div className="form-group-mini">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} />
                    </div>
                    <div className="form-group-mini">
                        <label htmlFor="middleName">Last Name</label>
                        <input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group-mini">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                    </div>
                </div>
                <div className="item-left">
                    <h3>Address</h3>
                </div>

                <div className="form-group">
                    <div className="form-group-mini">
                        <label htmlFor="street">Street Address</label>
                        <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} />
                    </div>

                    <div className="form-group-mini">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-group-mini">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} />
                    </div>

                    <div className="form-group-mini">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" name="country" value={formData.country} />
                    </div>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="zip">ZIP Code</label>
                    <input type="text" id="zip" name="zip" />
                </div> */}
                <div className="item-left">
                    <h3>Contact Information</h3>
                </div>
                <div className="form-group">
                    <div className="form-group-mini">

                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="btn">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm
