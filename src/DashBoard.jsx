// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import ClassApp from './ClassApp';
import ClassTable from './ClassTable';

const Dashboard = () => {
  const [classes, setClasses] = useState([]);
  const [editingClass, setEditingClass] = useState(null);

  useEffect(() => {
    fetchClassesData();
  }, []);

  const fetchClassesData = async () => {
    const response = await fetch('/classes/class1.json');
    const data = await response.json();
    setClasses([data]);
  };

  const addClass = (newClass) => {
    console.log('Adding class:', newClass);
    setClasses((prevClasses) => [...prevClasses, newClass]);
  };

  const updateClass = (updatedClass) => {
    console.log('Updating class:', updatedClass);
    setClasses((prevClasses) =>
      prevClasses.map((cls) =>
        cls.id === updatedClass.id ? updatedClass : cls
      )
    );
    setEditingClass(null);
  };

  const deleteClass = (classId) => {
    console.log('Deleting class with ID:', classId);
    setClasses((prevClasses) =>
      prevClasses.filter((cls) => cls.id !== classId)
    );
  };

  return (
    <div>
      <h1>Class Dashboard</h1>
      <ClassApp onSubmit={editingClass ? updateClass : addClass} />
      <ClassTable
        classes={classes}
        onDelete={deleteClass}
        onUpdate={setEditingClass}
      />
    </div>
  );
};

export default Dashboard;
