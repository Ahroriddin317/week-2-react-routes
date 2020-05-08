import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
          <Link to="/dashboard/profile/9c1402ae-f277-40ce-9d80-31663c6ea535">Go To Profile</Link>
          <Link to="/dashboard/main">Go To Main</Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
