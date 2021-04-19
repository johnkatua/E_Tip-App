import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to='/register'>I don't have an account</Link>
    </div>
  )
};

export default LoginPage;