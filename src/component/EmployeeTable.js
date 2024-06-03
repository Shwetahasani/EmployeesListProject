import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const EmployeeTable = ({ employees, handleEdit, handleDelete }) => {
    return (
        <table className="table table-bordered" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>Contact Modes</th>
                    <th>Marital Status</th>
                    <th>Immediate Joiner</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.firstName}</td>
                        <td>{emp.middleName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.phoneNumber}</td>
                        <td>{emp.contactModes.join(', ')}</td>
                        <td>{emp.maritalStatus}</td>
                        <td>{emp.immediateJoiner}</td>
                        <td>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <button onClick={() => handleEdit(emp.id)} className='p-1 text-white w-100' style={{ border: '1px solid green', backgroundColor: 'green', borderRadius: '5px' }}>
                                        <FaEdit /> Edit
                                    </button>
                                </div>
                                <div className='col-lg-6'>
                                    <button onClick={() => handleDelete(emp.id)} className='p-1 w-100 text-white' style={{ border: '1px solid red', backgroundColor: 'red', borderRadius: '5px' }}>
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
