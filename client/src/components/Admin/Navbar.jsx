import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <Fragment>
      <div className="nav-bar">
        <div className="nav-container">
          <div className="logo" style={{color:"white"}}>Admin Tools</div>
          <ul>
            <li><Link to="/market"><button>Go to the shop</button></Link></li>
            <li>Products</li>
            <li>Customers</li>
          </ul>
        </div>
       
      </div>
    </Fragment>
  );
};

export default NavBar;
