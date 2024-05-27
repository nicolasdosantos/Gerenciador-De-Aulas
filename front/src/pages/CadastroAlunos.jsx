import Banner from "../components/Banner";
import css from "./CadastroAlunos.module.css";
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
                                    <TituloCadastro titulo="Cadastro de" titulo2="Alunos"></TituloCadastro>
                                </div>
                                <div className={css.inputs}>
                                    <div >
                                        <InputCadastro nome="Nome: "></InputCadastro>
                                    </div>
                                    <div>
                                        <InputCadastro nome="Email: "></InputCadastro>
                                    </div>
                                    <div className={css.grid}>
                                        <div>
                                            <InputCadastro nome="CPF: "></InputCadastro>
                                        </div>
                                        <div >
                                            <InputCadastro tipo="date" nome="Data de Nascimento: "></InputCadastro>
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