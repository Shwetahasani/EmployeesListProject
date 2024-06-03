import React from 'react';

const EmployeeForm = ({ formData, handleChange, handleSubmit, handleClear, isEditMode }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label className='mt-2' style={{ float: 'left' }}>First Name:</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className='w-100'
            />

            <label className='mt-2' style={{ float: 'left' }}>Middle Name:</label>
            <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className='w-100'
            />

            <label className='mt-2' style={{ float: 'left' }}>Last Name:</label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className='w-100'
            />

            <label className='mt-2' style={{ float: 'left' }}>Gender :</label>
            <div className='mt-2' style={{ display: 'flex', flexDirection: 'row' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px', paddingLeft: '10px' }}>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        className='w-100'
                    />
                    Male
                </label>

                <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        className='w-100'
                    />
                    Female
                </label>

                <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="radio"
                        name="gender"
                        value="others"
                        checked={formData.gender === 'others'}
                        onChange={handleChange}
                        className='w-100'
                    />
                    Others
                </label>
            </div>

            <label className='mt-2' style={{ float: 'left' }}>Phone Number:</label>
            <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className='w-100'
            />

            <label className='mt-2' style={{ float: 'left' }}>Mode of contact :</label>
            <div className='mt-2' style={{ display: 'flex', flexDirection: 'row', paddingLeft: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                    <input
                        type="checkbox"
                        name="contactModes"
                        value="email"
                        checked={formData.contactModes.includes('email')}
                        onChange={handleChange}
                        className='w-100'
                    />
                    Email
                </label>

                <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="checkbox"
                        name="contactModes"
                        value="phone"
                        checked={formData.contactModes.includes('phone')}
                        onChange={handleChange}
                        className='w-100'
                    />
                    Phone
                </label>
            </div>

            <label className='mt-2' style={{ float: 'left' }}>Marital Status:</label>
            <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className='w-100'
            >
                <option value="married">Married</option>
                <option value="single">Single</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
            </select>

            <div className='mt-2' style={{ display: 'flex', flexDirection: 'row' }}>
                <label style={{ marginRight: '10px' }}>Immediate Joiner:</label>
                <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                    <input
                        type="radio"
                        name="immediateJoiner"
                        value="Yes"
                        checked={formData.immediateJoiner === 'Yes'}
                        onChange={handleChange}
                        className='w-100'
                    />
                    Yes
                </label>

                <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="radio"
                        name="immediateJoiner"
                        value="No"
                        checked={formData.immediateJoiner === 'No'}
                        onChange={handleChange}
                        className='w-100'
                    />
                    No
                </label>
            </div>
            <div className='row mt-3 mb-2'>
                <div className='col-lg-6'>
                    <button type="submit" className='w-100 bg-dark text-white' style={{ borderRadius: '5px' }}>
                        {isEditMode ? 'Update' : 'Submit'}
                    </button>
                </div>
                <div className='col-lg-6'>
                    <button type="button" className='w-100 bg-white' style={{ borderRadius: '5px' }} onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EmployeeForm;
