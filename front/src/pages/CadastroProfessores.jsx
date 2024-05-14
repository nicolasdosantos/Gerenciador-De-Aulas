import Banner from "../components/Banner";
import CardProfissionais from "../components/CardCadastro";

function CadastroProfessores() {
    return(
        <div className="App">
            <Banner>
                <CardCadastro nome="Professores" formAdicional="NIF" />
            </Banner>
        </div>
    )
}

export default CadastroProfessores
