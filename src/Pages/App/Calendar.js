import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Templates/CommonHeader.js';
import Nav from '../../Components/Templates/BottomNav.js';

const Home = () => {
  return (
    <>
      <Header title="캘린더" show={["alert"]} />
        <div className="appWrapper">
          
        </div>
      <Nav />
    </>
  )
};

export default Home;