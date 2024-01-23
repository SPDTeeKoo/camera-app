// src/components/ClassForm.js
import React, { useState } from 'react';

const ClassApp = ({ onSubmit }) => {
  const [classData, setClassData] = useState({
    id: '',
    schoolId: '',
    students: [],
    status: 'ACTIVE',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(classData);
    setClassData({
      id: '',
      schoolId: '',
      students: [],
      status: 'ACTIVE',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Class ID:
        <input
          type="text"
          name="id"
          value={classData.id}
          onChange={handleChange}
        />
      </label>
      <label>
        School ID:
        <input
          type="text"
          name="schoolId"
          value={classData.schoolId}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClassApp;
