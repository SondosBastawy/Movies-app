import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { NavLink  } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-success roboto-slab-font">
  <div className="container-fluid">
    <NavLink className="navbar-brand px-2" to ="#"><b>Movies & Tv Shows</b></NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
        <li className="nav-item">
          <NavLink  className="nav-link" activeClassName="active" aria-current="page" to ="/">Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to ="tvShows" activeClassName="active">Tv Shows</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
