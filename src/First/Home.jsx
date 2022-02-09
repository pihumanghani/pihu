import React from 'react';
import { NavLink } from 'react-router-dom';
import Rocket from "../Images/rocket.jpg";
import Commom from './Commom';

const Home = () => {
  return (
  <>
     <Commom name="Grow Your Business With" imgsrc={Rocket} visit="/services" btname="Get Started" />  
     </>
  );
};

export default Home;
