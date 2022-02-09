import React from 'react';
import { NavLink } from 'react-router-dom';
import Tiger from "../Images/tiger.jpg";

const Commom = (prop) => {
    return (
        <>
         
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className='col-10 mx-auto'> 
                <div className='row'>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-0 d-flex align-items-center flex-column">
                    <h1> {prop.name} <strong className="brand-name"><br /> Pihu & Khushi </strong></h1>
                  <h2 className="my-3">We are the team of talented developer making Websites</h2>
                    <div className="mt-3">
                        <NavLink to={prop.visit} className="btn-get-started"> {prop.btname} </NavLink>
                    </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={prop.imgsrc} alt="home page" className="img-fluid animated" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>     
        </>
        );
};

export default Commom;
