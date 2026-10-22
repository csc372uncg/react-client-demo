import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CollegeForm from './CollegeForm.jsx'
import CollegeList from './CollegeList.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/add" element={<CollegeForm />} />
        <Route path="/colleges" element={<CollegeList />} />
      </Routes>
    </Router>
  )
}

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to the College App!</h1>
      <p>Use the navigation to add or view colleges.</p>
      <Link to="/add">Add College</Link>
      <br />
      <Link to="/colleges">View Colleges</Link>
    </div>
  );
}



export default App
