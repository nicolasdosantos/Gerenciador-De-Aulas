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
                <p className={style3.nome2}>Cadastro de</p>
                <p className={style3.nome}>{prop.nome}</p>

                <form style={{display: "flex", flexDirection: "column", width: "100%"}}>

                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"}}>
                        {prop.formNome}
                    </label>
                    <input type="text" style={{
                        padding: "5px",
                        width: "600px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none"
                    }}/>

                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"}}>
                        {prop.email}
                    </label>
                    <input type="text" style={{
                        padding: "5px",
                        width: "600px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none"
                    }}/>

                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"}}>
                        {prop.senha}
                    </label>
                    <input type="text" style={{
                        padding: "5px",
                        width: "600px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none"
                    }}/>

                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"}}>
                        {prop.cpf}
                    </label>
                    <input type="text" style={{
                        padding: "5px",
                        width: "600px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none"
                    }}/>

                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"}}>
                        {prop.formAdicional}
                    </label>
                    <input type="text" style={{
                        padding: "5px",
                        width: "600px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none"}}/>

                </form>

                <button className={style3.botao2}>Concluir</button>
            </div>
        </div>
    )
}

export default CardCadastro
