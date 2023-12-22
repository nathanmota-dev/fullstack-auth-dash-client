//import React from 'react';
import { useState } from 'react';
import './Login.css';
import '../../App.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import video from '../../loginAssets/video.mp4';
import logo from '../../loginAssets/logo.png';

const Login = () => {

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [error, setError] = useState(null);
    const navigateTo = useNavigate();

    const loginUser = (e) => {

        e.preventDefault();

        axios.post('http://localhost:3001/login', {

            username: loginUsername,
            password: loginPassword
        })
            .then((response) => {
                console.log(response);

                if (response.data.message) {
                    setError(response.data.message);
                    navigateTo('/');
                } else {
                    setError(null);
                    navigateTo('/dashboard');
                }
            })
            .catch((error) => {
                console.error('Erro no login:', error);
                setError('Erro ao processar a solicitação');
            });
    }

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
                        <h3>Bem vindo!</h3>
                    </div>

                    <form action="" className='form grid'>
                        <span style={{ display: error ? 'inline' : 'none' }} className='showMessage'>{error}</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Usuário</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='username' placeholder='Entre com seu usuário'
                                    onChange={(event) => {
                                        setLoginUsername(event.target.value);
                                    }} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Senha</label>
                            <div className="input flex">
                                <BsShieldLockFill className='icon' />
                                <input type="text" id='password' placeholder='Entre com sua senha'
                                    onChange={(event) => {
                                        setLoginPassword(event.target.value);
                                    }} />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={loginUser}>
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