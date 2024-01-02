//import React from 'react';
import './Sidebar.css';
import logo from '../../../loginAssets/logo.png';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsCreditCard2Front, BsTrophy } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';

const SideBar = () => {
    return (
        <div className='sidebar grid'>
            <div className="logoDiv flex">
                <img src={logo} alt="logo" />
                <h2>Plantas</h2>
            </div>

            <div className="menuDiv">
                <h3 className='divTitle'>QUICK MENU</h3>
                <ul className='menuLists grid'>

                    <li className='listItem'>
                        <a href="#" className='menuLink flex'>
                            <IoMdSpeedometer className='icon' />
                            <span className='smallText'>Dashboard</span>
                        </a>
                    </li>

                    <li className='listItem'>
                        <a href="#" className='menuLink flex'>
                            <MdDeliveryDining className='icon' />
                            <span className='smallText'>Meus pedidos</span>
                        </a>
                    </li>

                    <li className='listItem'>
                        <a href="#" className='menuLink flex'>
                            <MdOutlineExplore className='icon' />
                            <span className='smallText'>Explore</span>
                        </a>
                    </li>

                    <li className='listItem'>
                        <a href="#" className='menuLink flex'>
                            <BsTrophy className='icon' />
                            <span className='smallText'>Produtos</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className='divTitle'>SETTINGS</h3>
                <ul className='menuLists grid'>

                    <li className='listItem'>
                        <a href="#" className='menuLink flex'>
                            <AiOutlinePieChart className='icon' />
                            <span className='smallText'>Gráficos</span>
                        </a>
                    </li>

                    <li className='listItem'>
                        <a href="#" className='menuLink flex'>
                            <BiTrendingUp className='icon' />
                            <span className='smallText'>Trends</span>
                        </a>
                    </li>

                    <li className='listItem'>
                        <a href="#" className='menuLink flex'>
                            <MdOutlinePermContactCalendar className='icon' />
                            <span className='smallText'>Contatos</span>
                        </a>
                    </li>

                    <li className='listItem'>
                        <a href="#" className='menuLink flex'>
                            <BsCreditCard2Front className='icon' />
                            <span className='smallText'>Cobrança</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;