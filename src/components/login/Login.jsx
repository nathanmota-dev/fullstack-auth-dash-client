//import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
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
                            <label htmlFor="username">Username</label>                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;