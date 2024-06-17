import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import css from './NavBar.module.css';

function NavBar() {
    const [hamburguer, setHamburguer] = useState(true);

    function menu() {
        setHamburguer(!hamburguer);
    }

    return (
        <div>
            <button className={css.botaoMenu} onClick={menu} style={{color: hamburguer ? '#fff' : '#000'}}>
                {hamburguer ? <FaTimes size={24} style={{position: 'fixed'}} /> : <FaBars size={24} />}
            </button>

            <div className={css.verticalNav} style={{left: hamburguer ? '0px' : '-300px'}}>
                <img className={css.logozinha} src="/logozinha.png" alt="Logo"/>
                <ul className={css.navbarNav}>
                    <br/>
                    <br/>
                    <li className={css.navItem}>
                        <a className={css.navLink} href="/dashboard">Home</a>
                    </li>
                    <li className={css.navItem}>
                        <a className={css.navLink} href="/Calendario">Calendário</a>
                    </li>
                    <li className={css.navItem}>
                        <a className={css.navLink} href="/lista-cadastros">Cadastro</a>
                    </li>
                    <li className={css.navItem}>
                        <a id={css.sair} className={css.navLink} href="/">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;