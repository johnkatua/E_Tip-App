import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import '../components/Header/Header.css';
const MainPage = () => {
  return (
    <div className='main'>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        content
        <Link to='/users'>Show List of users</Link>
      </div>
      <div className='footer'>
        Footer
      </div>
    </div>
  )
};

export default MainPage;