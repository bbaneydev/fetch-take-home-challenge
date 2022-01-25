import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Notification from './components/Notification'

function App() {
  // state to store the data from the fetch request
  const [data, setData] = useState()


  // fetch request in order to GET all the info from the endpoint
  useEffect(() => {
    fetch('https://frontend-take-home.fetchrewards.com/form')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])

  // if there isn't data, return null until there is. Had some issues at first with the application trying to render before the data was available
  if (!data) {
    return null
  }


  return (
    <div className="App">
      <Routes>
        <Route exact path='thankyou' exact element={<Notification />} />
        <Route exact path='/' exact element={<Signup data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
