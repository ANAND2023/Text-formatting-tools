import React from 'react'

export const Navbar = (props) => {
  return (
  <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="btn btn-success mx-1 my-1" onClick={props.toggleGreen} style={{width:"20px",height:"20px",border:"1px solid white"}}></div>
      <div className="btn btn-primary  mx-1 my-1"  onClick={props.toggleBlue} style={{width:"20px",height:"20px", border:"1px solid white"}}></div>
      <div className="btn btn-danger  mx-1 my-1"  onClick={props.toggleRed} style={{width:"20px",height:"20px", border:"1px solid white"}}></div>
      <div className="btn btn-dark  mx-1 my-1"  onClick={props.toggleDark} style={{width:"20px",height:"20px", border:"1px solid white"}}></div>
      {/* <div className="form-check mx-2">
  <input className="form-check-input bg-success" onClick={props.toggleGreen} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label"htmlFor="flexRadioDefault1">
  Green
  </label>
</div> */}
{/* <div className="form-check mx-2">
  <input className="form-check-input" type="radio" onClick={props.toggleRed} name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label"htmlFor="flexRadioDefault1">
   Red
  </label>
</div> */}
      {/* <div className={`form-check form-switch text-${props.mode==="light"? " dark":"light"}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label"htmlFor="flexSwitchCheckDefault `}>Mode</label>
</div> */}
    </div>
  </div>
  
</nav>
  </>
  )
}
