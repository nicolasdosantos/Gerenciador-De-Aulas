import style3 from './CardProfissionais.module.css'

function CardProfissionais(prop){
    return(
        <div className={style3.fundo}>
            <div>
                <img src="/logo2.png"/>
                <p>Administradores</p>
                <button>Voltar</button>
            </div>
            <div className={style3.fundoFormulario}>
                <p>Cadastro de</p>
                <p className={style3.nome}>{prop.nome}</p>
                <form>
                    <label>
                        Nome:
                        <input type="text"/>
                    </label>
                    <label>
                        E-mail:
                        <input type="text"/>
                    </label>
                    <label>
                        CPF:
                        <input type="text"/>
                    </label>
                    <label>
                        {prop.formAdicional}
                        <input type="text"/>
                    </label>
                </form>
                <button>Concluir</button>
            </div>
        </div>
    )
}

export default CardProfissionais