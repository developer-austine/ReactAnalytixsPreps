import React from 'react'
import '../index.css';

const styles = { 
    backgroundColor: 'white' ,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    width: "200px",
    margin: "10px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
}

const Button = () => {
    return (
        <button onClick={(Math.round(Math.random() * 10))}>Update Profile</button>
    )
}

const ProfileList = ({ profile }) => {
  return (
    <div style= { styles }>
        {profile.map(({ id, name, role, isOnline, avatar }) => (
            <div key={ id }>
                <h1>👤Name: { name }</h1>
                <h2>Role: { role }</h2>
                <p>Status: { isOnline ? "🟢 Online" : "⚪ Offline" }</p>
                <p>Avatar: { avatar} </p>
                <Button />
                <h3>------------------------------</h3>
            </div>
        ))}
    </div>
  )
}

export default ProfileList