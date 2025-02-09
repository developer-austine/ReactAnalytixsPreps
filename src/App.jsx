import React from 'react';
import TaskList from './components/TaskList';

const tasks = [
    {id: 1, title: "Learn React Fundamentals", isCompleted: true},
    {id: 2, title: "Pratice Props and Conditonal Rendering", isCompleted: false},
    {id: 3, title: "Build a To-Do-List App", isCompleted: false},
]

const App = () => {
  return (
    <div>
        <h1>TASKS ✔</h1>
        <TaskList task={ tasks } />
    </div>
  )
}

export default App