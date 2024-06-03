import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: 'male',
        phoneNumber: '',
        contactModes: [],
        maritalStatus: 'single',
        immediateJoiner: 'No',
    });
    const [isEditMode, setIsEditMode] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => {
            let newValue;
            if (type === 'checkbox') {
                newValue = checked 
                    ? [...prevData[name], value] 
                    : prevData[name].filter(mode => mode !== value);
            } else {
                newValue = value;
            }
            return {
                ...prevData,
                [name]: newValue,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            const updatedEmployees = employees.map((emp) =>
                emp.id === formData.id ? { ...formData } : emp
            );
            setEmployees(updatedEmployees);
            setIsEditMode(false);
        } else {
            setEmployees([...employees, { ...formData, id: Date.now() }]);
        }
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            gender: 'male',
            phoneNumber: '',
            contactModes: [],
            maritalStatus: 'single',
            immediateJoiner: 'No',
        });
    };

    const handleEdit = (id) => {
        const employeeToEdit = employees.find((emp) => emp.id === id);
        setFormData({ ...employeeToEdit });
        setIsEditMode(true);
    };

    const handleDelete = (id) => {
        const updatedEmployees = employees.filter((emp) => emp.id !== id);
        setEmployees(updatedEmployees);
    };

    const handleClear = () => {
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            gender: 'male',
            phoneNumber: '',
            contactModes: [],
            maritalStatus: 'single',
            immediateJoiner: 'No',
        });
        setIsEditMode(false);
    };

    return (
        <div>
            <div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4' style={{
                    border: '1px solid #00000029', borderRadius: "5px",
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                }}>
                    <div className='row'>
                        <div className='col-lg-12 ves' style={{ borderRadius: '5px' }}>
                            <div className='' style={{ height: '100px' }}>
                                <div>
                                    <center>
                                        <h3 className='p-2' style={{ fontSize: '1.25rem', marginTop: '50px' }}>
                                            Employees List Project
                                        </h3>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <EmployeeForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleClear={handleClear}
                        isEditMode={isEditMode}
                    />
                </div>
            </div>
            <div className='row mt-5'>
                <h5>Employee List Table</h5>
                <div className='col-lg-1'></div>
                <div className='col-lg-10'>
                    <EmployeeTable
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeeList;
