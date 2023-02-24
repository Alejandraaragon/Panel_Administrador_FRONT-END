import "./Sidebar.css";
import React from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom";
import logoaa from "../../assets/logoAA.png"





function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}> 
        {/* <span className="logo">PanelAdmin</span> */}
        <img src={logoaa} alt="aalogo" className="logo"/>
        </Link>
        
      </div>
        <div className="logo1">PanelAdmin</div>
      <hr/>
      <div  className="center">
        <ul>
        <p className="title1">MAIN</p>
        <Link to="/" style={{textDecoration:"none"}}> 
          <li>
            <GridViewIcon className="icons"/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title1">LIST</p>
          <Link to="/users" style={{textDecoration:"none"}}> 
          <li>
            <Person2OutlinedIcon className="icons"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}> 
          <li>
            <StoreMallDirectoryOutlinedIcon className="icons"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <CreditCardOutlinedIcon className="icons"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icons"/>
            <span>Delivery</span>
          </li>
          <p className="title1">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icons"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icons"/>
            <span>Notifications</span>
          </li>
          <p className="title1">SERVICE</p>
           <li>
            <SettingsSystemDaydreamOutlinedIcon className="icons"/>
            <span>System health</span>
          </li>
          <li>
            <PsychologyAltOutlinedIcon className="icons"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icons"/>
            <span>Settings</span>
          </li>
          <p className="title1">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icons"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icons"/>
            <span>Log out</span>
          </li>
        </ul>
      </div>
      {/* <div  className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div> */}
    </div>
  )
}

export default Sidebar
