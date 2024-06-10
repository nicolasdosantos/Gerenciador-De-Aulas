import Banner from "../components/Banner";
import css from "../components/CadastroAlunos.module.css";
import BtnCadastro from "../components/BtnCadastro";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";

function CadastroAlunos() {
    return (
        <div >
            <Banner>
                <div>
                    <Banner>
                        <div className={css.card}>
                            <div className={css.divesquerda}>
                                <img src="/Frame%206.svg" alt="Logo"/>
                                <BtnCadastro id={css.buttonnn} nome="Voltar"/>
                            </div>
                            <div className={css.divdireita}>
                                <div>
                                    <TituloCadastro titulo="Cadastro de Alunos"/>
                                </div>
                                <div className={css.inputs}>
                                    <div >
                                        <InputCadastro nome="Nome: "/>
                                    </div>
                                    <div>
                                        <InputCadastro nome="Email: "/>
                                    </div>
                                    <div className={css.grid}>
                                        <div>
                                            <InputCadastro nome="CPF: "/>
                                        </div>
                                        <div >
                                            <InputCadastro tipo="date" nome="Data de Nascimento: "/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <BtnCadastro nome="Cadastrar"/>
                                </div>
                            </div>
                        </div>
                    </Banner>
                </div>
            </Banner>
        </div>
    )
}

export default CadastroAlunos;