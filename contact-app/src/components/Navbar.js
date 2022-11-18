import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='font-mono space-x-2 bg-[#0c4a6e]'>
        <Link to="/">Home</Link>
        <Link to="/add">Add-Contact</Link>
    </div>
  )
}

export default Navbar;