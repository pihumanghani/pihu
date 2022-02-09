import React from 'react';
import { NavLink } from 'react-router-dom';
import Tiger from "../Images/tiger.jpg";
import "./Menu.css";

const Menu = () => {
  return (
  <>
  <div className="container-fluid nav_bg">
        <div className="row">
          <div className='col-10 mx-auto'>          
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

  <img src={Tiger} width="50px" height="50px" className="mt-1"  />
  <span> ✌️ </span>
    <NavLink className="navbar-brand" to="/" >Pihu & Khushi</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
        </li>       
      </ul>
    </div>
  </div>
</nav>
</div>              
        </div>
  </div>
  </>
  );
};

export default Menu;
