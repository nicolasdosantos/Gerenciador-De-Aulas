import style3 from './CardCadastro.module.css'

function CardCadastro(prop){
    return(
        <div className={style3.fundo}>
            <div className={style3.lateral}>
                <img src="/logoRoxa.png" style={{margin: "20px"}}/>
                <p className={style3.titulo}>Administradores</p>
                <button className={style3.botao}>Voltar</button>
            </div>
            <div className={style3.fundoFormulario}>
                <p className={style3.nome2}>{prop.nome2}</p>
                <p className={style3.nome}>{prop.nome}</p>

                <form style={{display: "flex", flexDirection: "column", width: "100%"}}>
                    {prop.children}
                </form>

                <button className={style3.botao2}>Concluir</button>
            </div>
        </div>
    )
}

export default CardCadastro
