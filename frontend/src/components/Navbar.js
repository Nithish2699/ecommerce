import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> | 
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link> | 
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
