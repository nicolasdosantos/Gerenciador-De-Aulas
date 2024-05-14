import Banner from "../components/Banner";
import CardCadastro from "../components/CardCadastro";

function CadastroProfessores() {
    return(
        <div className="App">
            <Banner>
                <CardCadastro nome={"Professores"}>
                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"
                    }}>
                        Nome:
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
                        margin: "5px"
                    }}>
                        E-mail:
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
                        margin: "5px"
                    }}>
                        Senha:
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
                        margin: "5px"
                    }}>
                        CPF:
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
                        margin: "5px"
                    }}>
                        CPF
                    </label>
                    <input type="number" style={{
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
                        margin: "5px"
                    }}>
                        NIF
                    </label>
                    <input type="number" style={{
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
                        margin: "5px"
                    }}>
                        Data de nascimento
                    </label>
                    <input type="date" style={{
                        padding: "5px",
                        width: "600px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none"
                    }}/>
                </CardCadastro>
            </Banner>
        </div>
    )
}

export default CadastroProfessores
