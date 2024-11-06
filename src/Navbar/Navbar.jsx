import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { NavLink  } from 'react-router-dom'

export default function Navbar(props) {

  const [input, setInput] = useState("")
  const handleChange = (value)=>{
  setInput(value)
  
}
  const toggleActive = (e) => {
    console.log(e);
  }

  return (
    <>
  <nav className="navbar navbar-expand-lg bg-success roboto-slab-font">
  <div className="container-fluid">
    <NavLink className="navbar-brand px-2" to ="#"><b>Movies & Tv Shows</b></NavLink>
    <div className='input-search mx-5'>
    <FaSearch id="search-icon" />
    <input type="text" placeholder= ' Type to search...' value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
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
