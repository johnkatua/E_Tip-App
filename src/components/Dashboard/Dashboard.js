import React, {useState} from 'react';
import '../Dashboard/Dashboard.css';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { useSpring, animated } from 'react-spring';

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  const SideBarNavStyle = useSpring({
    left: sidebar ? '0' : '-100%'
  });

  const MoveSidebar = useSpring({
    left: sidebar ? '100%' : '0' 
  });

  return (
    <IconContext.Provider value={{color: "#fff"}}>
      <animated.div className='Nav' style={MoveSidebar}>
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
        </div>
      </animated.nav>
    </IconContext.Provider>
  )
}

export default Dashboard
