import React from 'react';
import './BarraLateral.module.css';

function BarraLateral() {
    return (
        <div className="barraLateral">
            <ul>
                <li>Calendário</li>
                <li>Professores</li>
                <li>Cursos</li>
                <li>Matérias</li>
                <li>Salas</li>
                <li>Alunos</li>
            </ul>
        </div>
    );
}

export default BarraLateral;