import React, { Children } from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const menuItem = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Theme</h1>
          <div className="bars"></div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} activeClassName="active" className="link">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{Children}</main>
    </div>
  )
}

export default Sidebar