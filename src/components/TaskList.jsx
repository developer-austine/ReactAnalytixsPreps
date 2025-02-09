import React from 'react';

const TaskList = ({ task }) => {
  return (
    <div>
      {task.length === 0 ? (
        <h2>No tasks available.</h2>
      ) : (
        task.map(({ id, title, isCompleted }) => (
          <div key={id} style={{ marginBottom: "20px" }}>
            <h1>Task: {title}</h1>
            <h2>Status: {isCompleted ? "✅ Completed" : "⏳ Pending"}</h2>
            <h3>----------------------------------------------</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
