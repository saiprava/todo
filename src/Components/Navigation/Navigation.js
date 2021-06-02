import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElement';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavMenu>
         
          <NavLink to='/completed-task' activeStyle>
            View completed tasks
          </NavLink>
          <NavLink to='/deleted-task' activeStyle>
            View deleted tasks
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
