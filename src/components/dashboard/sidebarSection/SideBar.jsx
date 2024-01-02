//import React from 'react';
import './Sidebar.css';
import logo from '../../../loginAssets/logo.png';

const SideBar = () => {
    return (
        <div className='sidebar grid'>
            <div className="logoDiv flex">
                <img src={logo} alt="logo" />
                <h2>Plantas</h2>
            </div>
        </div>
    )
}

export default SideBar;