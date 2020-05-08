import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <Link to="/dashboard/profile/9c1402ae-f277-40ce-9d80-31663c6ea535">Go To Profile</Link>
          <br />
          <Link to="/dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

export default Main
