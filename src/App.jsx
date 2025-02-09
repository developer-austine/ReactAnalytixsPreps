import React from 'react'
import Students from './components/Students';

const Studentss = [
    {id: 1, name: "Austine Alex", age: 16, grade: "A"},
    {id: 2, name: "Jane Smith", age: 17, grade: "B"},
    {id: 3, name: "Samuel Green", age: 15, grade: "A"},
]

const App = () => {
  return (
    <Students>
       {Studentss.map(({ id, name, age, grade }) => (
        <ul key={Studentss.id}>
            <h1>Student Name: {name}</h1>
            <h2>Age: {age}</h2>
            <h3>Grade: {grade}</h3>

            <h5>---------------------------</h5>

        </ul>
       ))}
    </Students>
  )
}

export default App