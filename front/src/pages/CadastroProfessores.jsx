import Banner from "../components/Banner";
import CardCadastro from "../components/CardCadastro";

function CadastroProfessores() {
    return(
        <div className="App">
            <Banner>
                <CardCadastro nome="Professores" 
                              formNome="Nome: " 
                              email="E-mail: " 
                              senha="senha" cpf="CPF: " 
                              formAdicional="NIF" 
                              dataNascimento="Data de Nascimento"/>
            </Banner>
        </div>
    )
}

export default CadastroProfessores
