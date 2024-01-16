//import React from 'react';
import { useState } from 'react';
import './Register.css';
import '../../App.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { string, object } from "yup";
import { FaUserShield } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import video from '../../loginAssets/video.mp4';
import logo from '../../loginAssets/logo.png';

const schema = object({

    email: string().required("Email obrigatório").email("Email inválido"),
    username: string().required("Usuário obrigatório").min(3, "Mínimo de 3 caracteres"),
    password: string().required("Senha obrigatória").min(6, "Mínimo de 6 caracteres").max(12, "Máximo de 12 caracteres")
})

const Register = () => {

    const {
        register,
        handleSubmit: onSubmit,
        //watch,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo = useNavigate();

    const handleSubmit = (data) => {
        createUser(data);
    };

    const createUser = () => {

        //e.preventDefault();

        axios.post('http://localhost:3001/register', {

            email: email,
            username: username,
            password: password
        })
            .then(() => {
                console.log('Usuário cadastrado com sucesso!');
                navigateTo('/');
            })
            .catch((error) => {
                console.error('Erro na requisição HTTP:', error);
            });
    };

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

                    <form action="" className='form grid' onSubmit={onSubmit(handleSubmit)}>

                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input
                                    type="text"
                                    id='email'
                                    placeholder='Informe seu email'
                                    {...register('email', { required: true })}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }} />
                                <span className="error">{errors?.email?.message}</span>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">Usuário</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input
                                    type="text"
                                    id='username'
                                    placeholder='Informe seu usuário'
                                    {...register('username', { required: true })}
                                    onChange={(event) => {
                                        setUsername(event.target.value);
                                    }} />
                                <span className="error">{errors?.username?.message}</span>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Senha</label>
                            <div className="input flex">
                                <BsShieldLockFill className='icon' />
                                <input
                                    type="password"
                                    id='password'
                                    placeholder='Informe sua senha'
                                    {...register('password', { required: true })}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }} />
                                <span className="error">{errors?.password?.message}</span>
                            </div>
                        </div>


                        <button type='submit' className='btn flex'>
                            <span>Registre-se</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;