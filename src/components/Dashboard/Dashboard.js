import React, {useState} from 'react';
import '../Dashboard/Dashboard.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { useSpring, animated } from 'react-spring';
import {DashboardData} from '../DashboardData/DashboardData';
import SubMenu from '../SubMenu/SubMenu';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const SideBarNavStyle = useSpring({
    left: sidebar ? '0' : '-100%'
  });

  // const MoveSidebar = useSpring({
  //   left: sidebar ? '100%' : '0' 
  // });

  return (
    <IconContext.Provider value={{color: "#fff"}}>
      <animated.div className='Nav'>
        <Link to='#' className='NavIcon'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <h1 className='NavHeader'>E-Tip Banking</h1>
      </animated.div>
      <animated.nav className='SideBarNav' sidebar={sidebar} style={SideBarNavStyle}>
        <div className='SideBarWrap'>
          <Link to='#' className='NavIcon'>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </Link>
          {DashboardData.map((item, index) => {
            return <SubMenu item={item} key={index} />
          })}
        </div>
      </animated.nav>
    </IconContext.Provider>
  )
}

export default Dashboard
