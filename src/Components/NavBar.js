import React from 'react';
import { NavLink } from 'react-router-dom';

import Login from './users/Login'
import Logout from './users/Logout'
import { NavItem } from "../ui/Styles"

const NavBar = () => {
  return (
    < >
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div className="title">Happy Trails</div>
        </div>
        <div class="navbar-menu">
          <NavLink className="link" to="/">Home</NavLink>
        </div>
        <div class="navbar-menu">
          <NavLink className="link" to="/trails">Trails</NavLink>
        </div>
        <div class="navbar-menu">
          <NavLink className="link" to="/reviews">Reviews</NavLink>
        </div>
      </nav>
      {/* <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <NavLink className="link" to="/">Home</NavLink>
        </div>
        <div class="navbar-menu">
          <NavLink className="link" to="/trails">Trails</NavLink>
        </div>
      </nav> */}

      <NavItem>

        <ul className="nav-links">
          <li>
            <NavLink className="link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/trails">Trails</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/reviews">Reviews</NavLink>
          </li>
        </ul>
      </NavItem>
    </>
  )
}

export default NavBar

 //   <div className="LogInOut">
  //     {currentUser ? <H2><strong>Welcome, {currentUser.username}!</strong></H2> : ""}
  //     {currentUser ? <Logout /> : <Login />}
  //   </div> 

  // const mapStateToProps = ({ currentUser }) => {
// return {
//   currentUser
// }
// }

// export default connect(mapStateToProps)(NavBar)