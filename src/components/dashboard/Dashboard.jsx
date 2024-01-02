//import React from 'react';
import '../dashboard/Dashboard.css';
import SideBar from './sidebarSection/SideBar';
import BodySection from './bodySection/BodySection';
//import { video } from '../../loginAssets/video.mp4';

const Dashboard = () => {
    return (
        <div>
            <SideBar />
            <BodySection />
        </div>
    );
}

export default Dashboard;