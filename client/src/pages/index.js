import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <Link to='/users'>Show List of users</Link>
    </div>
  )
};

export default MainPage;