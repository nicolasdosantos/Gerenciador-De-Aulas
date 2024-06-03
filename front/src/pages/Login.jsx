import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import css from '../components/Login.module.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === '' && password === 'milim') {
            alert('Login bem-sucedido!');
        } else {
            alert('Usuário ou senha incorretos');
        }
    };

    return (
        <div className={`${css.container} login`}>
            <Card style={{ width: '20rem', height: '25rem', boxShadow: 'rgba(0, 0, 0, 0.1) 10px 10px 20px', backgroundColor: 'white', borderRadius: '14px' }}>
                <Card.Img variant="top" src="/lEARNadm.png" alt="Logo" className={css.loginImg} />
                <Card.Body>
                    <div className={css.espacao}></div>
                    <div className="">
                        <input
                            required
                            type="text"
                            className={css.input}
                            placeholder="Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <span className={css.highlight}></span>
                        <span className={css.bar}></span>
                    </div>
                    <div className={css.espaco}></div>
                    <div className="">
                        <input
                            required
                            type="password"
                            className={css.input}
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className={css.highlight}></span>
                        <span className={css.bar}></span>
                    </div>
                </Card.Body>
                <div className={css.espacao}></div>
                <Button className={css.button} onClick={handleLogin}>Entrar</Button>
            </Card>
        </div>
    );
}

export default Login;
