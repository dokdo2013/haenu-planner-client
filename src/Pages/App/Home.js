import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Templates/CommonHeader.js';
import Nav from '../../Components/Templates/BottomNav.js';

const Home = () => {
  return (
    <>
      <Header title="홈" show={["alert"]} />
      <div className="appWrapper">
        <p>Contents</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quidem est voluptates beatae quo assumenda voluptate enim atque vel magnam sint non nulla esse repellendus. Officiis inventore pariatur esse deserunt.</p>
      </div>
      <Nav />
    </>
  )
};

export default Home;