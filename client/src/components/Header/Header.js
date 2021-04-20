import React from 'react';
import { Button } from 'semantic-ui-react';
import './Header.css';

const Header = () => {
  return (
    <div className='header_h1'>
      <div className='header-logo'>
        E-Tip Banking
      </div>
      <div className='header-list'>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className='header-buttons'>
        <Button className='btn1'>Login</Button>
        <Button className='btn2'>Register</Button>
      </div>
    </div>
  )
};

export default Header;