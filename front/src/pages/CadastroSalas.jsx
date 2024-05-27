import Banner from "../components/Banner";
import css from "../components/CadastroCard.module.css";
import BtnCadastro from "../components/BtnCadastro";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";

function CadastroSalas(){
    return(
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
                                    <TituloCadastro titulo="Cadastro de" titulo2="Classes"></TituloCadastro>
                                </div>
                                <div>
                                    <div className={css.inputs}>
                                        <InputCadastro nome="Número: "></InputCadastro>
                                    </div>
                                    <div>
                                        <InputCadastro nome="Capacidade: "></InputCadastro>
                                    </div>
                                    <div>
                                        <InputCadastro nome="Descrição: "></InputCadastro>
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

export default CadastroSalas