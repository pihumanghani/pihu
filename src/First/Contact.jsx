import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
      const { name, value } = event.target;
        setData((preValue) => {
            return {
              ...preValue,
              [name] : value,
            }
        })
    };
    const formSubmit = (e) => {
      e.preventDefault();
      alert(`Your name is ${data.fullname} Your Mobile number is ${data.phone} and Email is ${data.email}, Here is What You want to say ${data.msg}`);
    };
    return (
        <>
          <div className="my-5">
                <h1 className="text-center"> Contact US </h1>
          </div>
          <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                                <label
                                 for="exampleFormControlTextarea1"
                                  className="form-label"> FullName </label>
                                <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" />
                            </div>
                            <br />
                        <div className="mb-3">
                                <label
                                 for="exampleFormControlTextarea1"
                                  className="form-label"> Phone </label>
                                <input type="number" name="phone" value={data.phone} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="phone number" />
                            </div>
                            <br />
                            <div className="mb-3">
                                <label
                                 for="exampleFormControlTextarea1"
                                  className="form-label"> Email address </label>
                                <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <br />
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label"> Messages </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}>
                                </textarea>
                            </div>
                            <br />
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit"> Submit Form </button>
                            </div>
                            <br /><br /><br />
                        </form>
                </div>
            </div>
          </div>    
        </>
        );
};

export default Contact;
