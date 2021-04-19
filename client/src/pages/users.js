import { Link } from 'react-router-dom';
import React from 'react';;


const UsersPage = () => {
  return (
    <div>
      <ul>
        {['alex', 'john', 'allan'].map((user, idx) => {
          return <li key={idx}>{user}</li>
        })}
      </ul>
      <Link to='/'>Back to home</Link>
    </div>
  )
};

export default UsersPage;