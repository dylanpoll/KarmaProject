import React from 'react';
import './App.css'; 
import {Link} from 'react-router-dom'

function Navigation() {
  const Style = {
      color:'white'
  }
  return (
    <nav>
        <div className="bigHeader"><h3> Karma </h3></div>
            <ul className="nav-link">
                    <Link style={Style} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={Style} to='/users'>
                    <li>User Rankings</li>
                    </Link>
                    <Link style={Style} to='/newUser'>
                    <li>Create New Account</li>
                    </Link>
                    <Link style={Style} to='/questBoard'>
                    <li>Quest Board</li>
                    </Link>
                    <Link style={Style} to='/discord'>
                    <li>Discord Info</li>
                    </Link>
            </ul>
    </nav>
  );
}


export default Navigation;