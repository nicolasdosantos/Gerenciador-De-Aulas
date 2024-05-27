import React from 'react';
import css from './NavBar.module.css';
function NavBar() {
    return (
        <div className={css.verticalNav}>
            <img className={css.logozinha} src="/logozinha.png" alt="Logo" />
            <ul className={css.navbarNav} style={{listStyleType: 'none', padding: '0'}}>
                <br/>
                <br/>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/calendario">Calendário</a>
                </li>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/professores">Professores</a>
                </li>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/cursos">Cursos</a>
                </li>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/materias">Matérias</a>
                </li>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/salas">Salas</a>
                </li>
                <li className={css.navItem}>
                    <a className={css.navLink} href="/alunos">Alunos</a>
                </li>
                <li className={css.navItem}>
                    <a id={css.sair} className={css.navLink} href="/inicial">Sair</a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
