import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './stylesheets/nav.css'

export default function Nav() {
  return (
    <div className="nav">
        <Link to="/"><h1>Contacts</h1></Link>
        <ul>
          <li>
            <Link to="/create" className='nav-btn'>Create</Link>
          </li>
        </ul>
        <Outlet/>
    </div>
  )
}
