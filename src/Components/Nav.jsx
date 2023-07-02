import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {


  return (
 
        <nav>
            <ul>
                <li>
                    <NavLink to="/"> AnaSayfa </NavLink>
                </li>
                <li>
                    <NavLink to="/Hakkimizda"> Hakkımızda </NavLink>
                </li>
            </ul>
        </nav>
  )
}
