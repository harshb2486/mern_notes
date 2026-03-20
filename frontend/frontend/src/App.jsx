import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage.jsx'
import Create from './pages/create.jsx'
import Notes from './pages/notesdetail.jsx'


const App = () => {
  return (
    <div>
      <button className='btn btn-outline'>click me</button>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/notes/:id" element={<Notes />} />
      </Routes>
    </div>  
  )
}

export default App