import Banner from "../components/Banner";
import CardCadastro from "../components/CardCadastro";

function CadastroSalas(){
    return(
        <div className="App">
            <Banner>
                <CardCadastro nome={"Salas"}>

                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"
                    }}>
                        Nome/Número:
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
                        Capacidade de Alunos:
                    </label>
                    <input type="number" style={{
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

export default CadastroSalas