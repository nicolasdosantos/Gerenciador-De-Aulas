import React from 'react';
import style3 from './CardCadastroGrande.module.css';

function CardCadastroGrande(prop) {
    return (
        <div className={style3.fundo}>

            <div className={style3.fundoFormulario}>

                <p className={style3.titulo}>
                    {prop.nome2} <span style={{color: "#8C52FF"}}>{prop.nome}</span>
                </p>

                <div style={{display: "flex"}}>
                    {prop.children}
                </div>


            </div>
        </div>
    );
}

export default CardCadastroGrande;