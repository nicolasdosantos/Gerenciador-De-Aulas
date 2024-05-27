import React from 'react';
import css from '../components/BarraLateral.module.css';


function BarraLateral() {
    return (
        <div className={css.barraLateral}>
            <img src=""/>
            <ul className={css.barraLateral}>
                <li className={css.barraLateral}>Calendário</li>
                <li className={css.barraLateral}>Professores</li>
                <li className={css.barraLateral}>Cursos</li>
                <li className={css.barraLateral}>Matérias</li>
                <li className={css.barraLateral}>Salas</li>
                <li className={css.barraLateral}>Alunos</li>
            </ul>
        </div>
    );
}

export default BarraLateral;