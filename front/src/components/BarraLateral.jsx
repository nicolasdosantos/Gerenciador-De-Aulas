import style from './BarraLateral.module.css'

function BarraLateral (prop){
    return(
        <div>
            <div className={style.cor_barra}>
                <img src="/logo1.png"/>
                <button className={style.botao}>Calendário</button>
                <button className={style.botao}>Alunos</button>
                <button className={style.botao}>Cursos</button>
                <button className={style.botao}>Salas</button>
                <button className={style.botao}>Sair</button>
            </div>
            <div>
                <p>{prop.nome}</p>
                <button>+</button>
                <div></div>
            </div>
        </div>
    )
}

export default BarraLateral