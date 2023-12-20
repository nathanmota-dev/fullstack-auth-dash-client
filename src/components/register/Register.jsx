//import React from 'react';
import './Register.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import video from '../../loginAssets/video.mp4';
import logo from '../../loginAssets/logo.png';

const Register = () => {
    return (
        <div className="loginPage">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Crie e Venda Incríveis Produtos</h2>´
                        <p>Adote a paz da natureza!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Já tem uma conta?</span>
                        <Link to={'/'}>
                            <button className='btn'>Entre</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo" />
                        <h3>Deixe a gente te conhecer!</h3>
                    </div>

                    <form action="" className='form grid'>

                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='email' placeholder='Informe seu email' />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">Usuário</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='username' placeholder='Informe seu usuário' />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Senha</label>
                            <div className="input flex">
                                <BsShieldLockFill className='icon' />
                                <input type="text" id='password' placeholder='Informe sua senha' />
                            </div>
                        </div>

                        <Link to={'/'}>
                            <button type='submit' className='btn flex'>
                                <span>Registre-se</span>
                                <AiOutlineSwapRight className='icon' />
                            </button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;