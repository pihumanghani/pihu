import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (prop) => {
    return (
        <>


                <div className="col-md-4 col-10 mx-auto">
                <div className="card">
  <img src={prop.imgsrc} className="card-img-top" alt={prop.imgsrc} />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{prop.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
       </div>
     
         
        </>
        );
};

export default Card;
