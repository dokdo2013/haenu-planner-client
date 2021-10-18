import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <Link to="/app">App</Link><br />
      <Link to="/login">Login</Link><br />
      <Link to="/register">Register</Link><br />
      <Link to="/support">Support</Link>
    </>
  )
};

export default Landing;