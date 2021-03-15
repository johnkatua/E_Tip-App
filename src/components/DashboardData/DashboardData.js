import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';

export const DashboardData = [
  {
    title: "About Us",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Our Aim",
        path: "/about-us/aim",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Our Vision",
        path: "/about-us/vision",
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: "Services",
    path: "/services",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Service 1",
        path: "/services/service 1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav"
      },
      {
        title: "Service 2",
        path: "/services/services 2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav"
      },
      {
        title: "Service 3",
        path: "/services/services 3",
        icon: <IoIcons.IoIosPaper />,
      }
    ]
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />
  },
  {
    title: "Events",
    path: "/events",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Event 1",
        path: "/events/event 1",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Event 2",
        path: "/events/event 2",
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />
  }
]
