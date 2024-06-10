import React, { useState } from 'react';
import css from './NavBar.module.css';

function NavBar() {
    const [hamburguer, setHamburguer] = useState(true)

    function menu(){
        setHamburguer(!hamburguer);
    }


    return (
        <div>
            <button className={css.botaoMenu} onClick={menu}>
                Hamburguer
            </button>


            <div className={css.verticalNav} style={{left: hamburguer ? '0px' : '-300px'}}>
                <img className={css.logozinha} src="/logozinha.png" alt="Logo"/>
                <ul className={css.navbarNav} style={{listStyleType: 'none', padding: '0'}}>
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
