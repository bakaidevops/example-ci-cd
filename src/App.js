import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api`).then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      <div className='our-team'>
      <h1 className='hello' >APP</h1>
      <h2 className='hello'>Working</h2>
      </div>

      {(typeof backendData.users === "undefined") ? (
        <p className='hello'>Loading...</p>
      ) : (
         backendData.users.map((user, i) => (
          <div className='our-team'>
             <p className='item' key={i}>{user}</p>
          </div>
         ))
      )}
    </div>
  )
}

export default App
