import React from 'react';
import css from './NavBar.module.css';

function NavBar() {
    return (
        <div className={css.verticalNav}>
            <img className={css.logozinha} src="/logozinha.png" alt="Logo" />
            <ul className={css.navbarNav} style={{ listStyleType: 'none', padding: '0' }}>
                <br />
                <br />
                <li className={css.navItem}>
                    <a className={css.navLink} href="/Home">Home</a>
                </li>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/calendario">Calendário</a>
                </li>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/cadastro">Cadastro</a>
                </li>
                <li className={css.navItem}>
                    <a id={css.sair} className={css.navLink} href="/inicial">Sair</a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
