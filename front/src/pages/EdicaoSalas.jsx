import Banner from "../components/Banner";
import CardCadastro from "../components/CardCadastro";
import css from "../components/CadastroSalas.module.css";
import BtnCadastro from "../components/BtnCadastro";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";
import React from "react";

function EdicaoSalas(){
    return (
        <div className="App">
            <Banner>
                <div className={css.card}>
                    <div className={css.divesquerda}>
                        <img src="/Frame%206.svg" alt="Banner" />
                        <BtnCadastro nome="Voltar" />
                    </div>
                    <div className={css.divdireita}>
                        <TituloCadastro titulo="Cadastro de" titulo2="Classes" />
                        <div className={css.divinput}>
                            <div className={css.inputs}>
                                <InputCadastro nome="Número: " />
                                <InputCadastro nome="Capacidade: " />
                                <InputCadastro nome="Descrição: " />
                            </div>
                        </div>
                        <BtnCadastro nome="Cadastrar" />
                    </div>
                </div>
            </Banner>
        </div>
    );
}

export default EdicaoSalas