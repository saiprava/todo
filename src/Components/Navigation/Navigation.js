import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent:"flex-end"}}>
      <NavLink to='/' style={{fontFamily:"'Lobster', cursive",padding:"25px",fontSize: "20px"}}>
          Home
        </NavLink>
        
         
         <NavLink to='/completed-task' style={{fontFamily:"'Lobster', cursive",padding:"25px",fontSize: "20px"}}>
            View completed tasks
          </NavLink>
          <NavLink to='/deleted-task' style={{fontFamily:"'Lobster', cursive",padding:"25px",fontSize: "20px"}}>
            View deleted tasks
          </NavLink>
          
          </div>
  );
};

export default Navbar;
