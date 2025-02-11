import React from 'react'
import ProfileList from './components/ProfileList';

const profiles = [
  {
    id: 1,
    name: 'Austine Alex',
    role: 'Software Engineer',
    isOnline: true,
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'UI/U Designer',
    isOnline: false,
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: 'Samuel Green',
    role: 'Project Manager',
    isOnline: true,
    avatar: "https://via.placeholder.com/150",
  },
];

const App = () => {
  return (
    <div>
      <h1>Profile Cards Exercise</h1>
      <ProfileList profile={ profiles } />
    </div>
  )
}

export default App