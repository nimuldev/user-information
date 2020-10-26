import React from 'react';
import './EachUser.css';

const EachUser = (props) => {

  const { name, img, salary, email, phone } = props.com;

  return (
    <div>
      <div className="details">
        <div>
          <img className="img" src={img} alt="" />
        </div>
        <div className="information">
          <h3>Name : {name}</h3>
          <p>Email :{email}</p>
          <p>Phone No. : {phone}</p>
          <p>salery : {salary} $</p>
          <button onClick={() => props.eventHandler(props.com)}>  Add me</button>
        </div>
      </div>



    </div>
  );
};

export default EachUser;