import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-secondary bg-dark ">
    <a className="navbar-brand text-light" href="#"  >{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      {/* <li className="nav-item ">
        <a className="nav-link text-light" href="/about">About</a>
      </li> */}
    </ul>
    
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  
  </div>
</nav>
   </>
  )
}
