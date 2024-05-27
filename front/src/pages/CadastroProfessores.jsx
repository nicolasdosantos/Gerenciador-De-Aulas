import Banner from "../components/Banner";
import css from "./CadastroProfessores.module.css";
import BtnCadastro from "../components/BtnCadastro";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";

function CadastroAlunos() {
    return (
        <div className="App">
            <Banner>
                <div>
                    <Banner>
                        <div className={css.card}>
                            <div className={css.divesquerda}>
                                <img src="/Frame%206.svg"/>
                                <BtnCadastro nome="Voltar"></BtnCadastro>
                            </div>
                            <div className={css.divdireita}>
                                <div>
                                    <TituloCadastro css={{margin: "-15px"}} titulo="Cadastro de" titulo2="Professor"></TituloCadastro>
                                </div>
                                <div className={css.inputs}>
                                    <div>
                                        <InputCadastro nome="Nome: "></InputCadastro>
                                    </div>
                                    <div>
                                        <InputCadastro nome="Email: "></InputCadastro>
                                    </div>
                                    <div>
                                        <InputCadastro nome="CPF: "></InputCadastro>
                                    </div>
                                    <div className={css.grid}>
                                        <div>
                                            <InputCadastro nome="NIF: "></InputCadastro>
                                        </div>
                                        <div>
                                            <InputCadastro tipo="number" nome="Data de Nascimento: "></InputCadastro>
                                        </div>
                                    </div>
                                    <div className={css.grid}>
                                        <div>
                                            <InputCadastro nome="Carga horária: "></InputCadastro>
                                        </div>
                                        <div>
                                            <div>
                                                <h1 style={{fontSize: "17px", display: "flex", fontWeight: "normal"}} >Turno:</h1>
                                                <select className={css.select}>
                                                    <option>Selecione um Turno</option>
                                                    <option>Manhã</option>
                                                    <option>Tarde</option>
                                                    <option>Noite</option>
                                                    <option>Integral(Manha e Tarde)</option>
                                                    <option>Vespertino(Tarde e Noite)</option>
                                                    <option>Manhã e Noite</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <BtnCadastro nome="Cadastrar"></BtnCadastro>
                                </div>

                            </div>
                        </div>
                    </Banner>
                </div>
            </Banner>
        </div>
    )
}

export default CadastroAlunos