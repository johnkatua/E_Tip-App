import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './SubMenu.css'

const SubMenu = ({ item }) => {
  console.log(item.subNav);
  const [subnav, setSubnav] = useState(false);


  const showSubnav = () => {
    setSubnav(!subnav);
  }
  return (
    <>
      <Link to={item.path} onClick={() => item.subNav && showSubnav} className='sidebarlink'>
        <div>
          {item.icon}
          <span className='sidebarlabel'>{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened 
            : item.subNav
            ? item.iconClosed 
            : null
          }
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
            return subnav.isVisible && (
              <Link to={item.path} key={index} className='dropdownlink'>
                {item.icon}
                <span className='sidebarlabel'>{item.title}</span>
              </Link>
            );
        })
      }
    </>
  )
}

export default SubMenu;
