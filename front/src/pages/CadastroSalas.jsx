import React from 'react';
import css from "../components/CadastroSalas.module.css";
import BtnCadastro from "../components/BtnCadastro";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";

function CadastroSalas() {
    return (
        <div className="App">
            <div style={{ backgroundImage: "url('/bannerNuvenzinhas.png')", height: '100vh', width: '100%' }}>
                <div className={css.card}>
                    <div className={css.divesquerda}>
                        <img src="/Frame%206.svg" alt="Banner"/>
                        <BtnCadastro nome="Voltar"/>
                    </div>
                    <div className={css.divdireita}>
                        <TituloCadastro
                            titulo="Cadastro de Classes"
                            styles={{
                                fontSize: '50px',
                                margin: '21px',
                                fontWeight: 'bold',
                                marginTop: '-19px',
                                color: '#8C52FF'
                            }}
                        />
                        <div className={css.divinput}>
                            <div className={css.inputs}>
                                <InputCadastro nome="Número: "/>
                                <InputCadastro nome="Capacidade: "/>
                                <InputCadastro nome="Descrição: "/>
                            </div>
                        </div>
                        <BtnCadastro nome="Cadastrar"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastroSalas;
