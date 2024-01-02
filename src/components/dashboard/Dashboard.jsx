//import React from 'react';
import '../dashboard/Dashboard.css';
import SideBar from './sidebarSection/SideBar';

const Dashboard = () => {
    return (
        <div>
            This is a Dashboard
            <SideBar />
            <a href="/">Log out</a>
        </div>
    );
}

export default Dashboard;