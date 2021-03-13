import React, {useState} from 'react';
import '../Dashboard/Dashboard.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <IconContext.Provider value={{color: "#fff"}}>
      <div className='Nav'>
        <Link to='#' className='NavIcon'>
          <FaIcons.FaBars />
        </Link>
        <h1 className='NavHeader'>E-Tip Banking</h1>
      </div>
      <nav className='SideBarNav' sidebar={sidebar}>
        <div className='SideBarWrap'></div>
      </nav>
    </IconContext.Provider>
  )
}

export default Dashboard
