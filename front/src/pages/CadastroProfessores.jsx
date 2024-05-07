import Banner from "../components/Banner";
import CardProfissionais from "../components/CardProfissionais";

function CadastroProfessores() {
    return(
        <div className="App">
            <Banner>
                <CardProfissionais nome="Professores" formAdicional="NIF" />
            </Banner>
        </div>
    )
}

export default CadastroProfessores