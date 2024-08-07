import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-primary" href="/">SerenePath</a>
      <button className="navbar-toggler btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-outline-info" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link text-light" aria-current="page" href="/">Home</a>
          <a className="nav-link text-light" href="/about">About</a>
        </div>
         
      </div>
      
    </div>
  </nav>
  )
}

export default Navbar
