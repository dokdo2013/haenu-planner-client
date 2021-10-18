import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Templates/CommonHeader.js';
import Nav from '../../Components/Templates/BottomNav.js';

const Home = () => {
  return (
    <>
      <Header title="시간표" show={["alert"]} />
      <div className="appWrapper">
        {/* <p>Contents</p> */}
      </div>
      <Nav />
    </>
  )
};

export default Home;