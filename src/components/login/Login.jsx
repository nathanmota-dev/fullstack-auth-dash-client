//import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import video from '../../loginAssets/video.mp4';
import logo from '../../loginAssets/logo.png';

const Login = () => {
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
                        <span className="text">Não tem uma conta?</span>
                        <Link to={'/register'}>
                            <button className='btn'>Registre-se</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo" />
                        <h3>Bem vindo de volta!</h3>
                    </div>

                    <form action="" className='form grid'>
                        <span>Login Status will go here</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Usuário</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='username' placeholder='Entre com seu usuário' />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Senha</label>
                            <div className="input flex">
                                <BsShieldLockFill className='icon' />
                                <input type="text" id='password' placeholder='Entre com sua senha' />
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>

                        <span className='forgotPassword'>
                            Esqueceu sua senha? <a href="#">Clique aqui</a>
                        </span>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;