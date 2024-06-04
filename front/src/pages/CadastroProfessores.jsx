import React from 'react';
import Banner from "../components/Banner";
import css from "../components/CadastroProfessores.module.css";
import BtnCadastro from "../components/BtnCadastro";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";
import CheckBoxDias from "../components/CheckBoxDias";

function CadastroProfessores() {
    return (
        <div className={css.app}>
            <Banner>
                <div className={css.card}>
                    <div className={css.divesquerda}>
                        <img src="/Frame%206.svg" alt="Logo"/>
                        <BtnCadastro nome="Voltar"></BtnCadastro>
                    </div>
                    <div className={css.divdireita}>
                        <TituloCadastro titulo="Cadastro de" titulo2="Professor"></TituloCadastro>
                        <div className={css.inputs}>
                            <InputCadastro nome="Nome: " />
                            <InputCadastro nome="Email: " />
                            <InputCadastro nome="CPF: " />
                            <div className={css.grid}>
                                <InputCadastro nome="NIF: " />
                                <InputCadastro tipo="date" nome="Data de Nascimento: " />
                            </div>
                            <div className={css.grid}>
                                <InputCadastro nome="Carga horária: " tipo="number" />
                                <div>
                                    <h1 style={{fontSize: 17, fontWeight: "normal",}}>Turno:</h1>
                                    <select className={css.select}>
                                        <option>Selecione um Turno</option>
                                        <option>Manhã</option>
                                        <option>Tarde</option>
                                        <option>Noite</option>
                                        <option>Integral (Manhã e Tarde)</option>
                                        <option>Vespertino (Tarde e Noite)</option>
                                        <option>Manhã e Noite</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <CheckBoxDias titulo="Dias de trabalho:"></CheckBoxDias>
                            </div>
                        </div>
                        <BtnCadastro nome="Cadastrar"></BtnCadastro>
                    </div>
                </div>
            </Banner>
        </div>
    );
}

export default CadastroProfessores;