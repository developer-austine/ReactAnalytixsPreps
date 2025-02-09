import React from 'react';
import TaskList from './components/TaskList';
import MovieList from './components/MovieList';

// const tasks = [
//     {id: 1, title: "Learn React Fundamentals", isCompleted: true},
//     {id: 2, title: "Pratice Props and Conditonal Rendering", isCompleted: false},
//     {id: 3, title: "Build a To-Do-List App", isCompleted: false},
// ]

const movies = [
  {id: 1, title:"Inception", year: 2010, isWatched: true},
  {id: 2, title:"The Matrix", year: 1999, isWatched: false},
  {id: 3, title:"Interstellar", year: 2014, isWatched: true},
];

const App = () => {
  return (
    <div>
        <h1>MOVIES APP ✔</h1>
        <MovieList movie={ movies } />
        {/* <TaskList task={ tasks } /> */}
    </div>
  )
}

export default App