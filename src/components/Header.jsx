
import React from 'react';
import {AiOutlineBars} from 'react-icons/ai'
const Header = () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <div className="dropdown">
        <button className="dropdown-button"><AiOutlineBars/></button>
        <div className="dropdown-content">
          <a href="/">Login</a>
          <a href="/">Signup</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
