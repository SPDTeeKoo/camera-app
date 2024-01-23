// src/components/ClassTable.js
import React from 'react';

const ClassTable = ({ classes, onDelete, onUpdate }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Class ID</th>
          <th>School ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {classes.map((cls) => (
          <tr key={cls.id}>
            <td>{cls.id}</td>
            <td>{cls.schoolId}</td>
            <td>
              <button onClick={() => onUpdate(cls)}>Edit</button>
              <button onClick={() => onDelete(cls.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClassTable;
