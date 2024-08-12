import React from 'react'

const Navbar = (props) => {
  return (
   
   <> <div className="bigcontainer">
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"></a>
     <h2>{props.test}</h2>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
         
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
      
      </form>
     
    </div>
  </div>
</nav>

</div>
   </>
  )
}

export default Navbar
