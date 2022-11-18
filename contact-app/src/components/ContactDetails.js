import React from 'react';
import detail from "../images/detail.png";
import { useLocation } from 'react-router-dom';


const ContactDetails = () => {
  const location=useLocation();
  const {name,cell}=location.state;

  return (
    <div className='bg-[#c084fc] w-screen h-screen'>
        <div>
            <img src={detail} className="mx-40 border-solid border-orange-700 border-2"/>
            <div><h2>{name}</h2></div>
            <div><h2>{cell}</h2></div>
        </div>
    </div>
  )
}
export default ContactDetails;
