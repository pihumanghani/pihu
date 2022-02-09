import React from 'react';
import Commom from './Commom';
import Hub from "../Images/hub.jpg";

const About = () => {
    return (
        <>
            <Commom
            name="Welcome to About Page " 
            imgsrc={Hub}
            visit="/contact" 
            btname="Contact Now"
             />  
        </>
        );
};

export default About;
