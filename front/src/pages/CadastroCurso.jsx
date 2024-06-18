import css from "../components/CadastroCurso.module.css";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";
import BtnCadastro from "../components/BtnCadastro";
import React from "react";
import Banner from "../components/Banner";
import CheckBoxDias from "../components/CheckBoxDias";

function CadastroCurso(){
    return (
        <Banner>
            <div>
                    <div className={css.divdireita}>
                        <TituloCadastro titulo="Cadastro de Curso" css={{margin: 0, marginBottom: 15}}/>
                        <div style={{display: "grid", gridTemplateColumns: "3fr 2fr", gap: 20}}>
                            <div>
                                <div className={css.primeiroBlocoDireita}>
                                    <InputCadastro css={{background: "#ECEFF5", height: "35px"}}
                                                   nome="Nome do curso: "/>
                                    <InputCadastro tipo="file" nome="Capa:"></InputCadastro>
                                    <InputCadastro css={{background: "#ECEFF5", height: "35px"}} tipo="number"
                                                   nome="Duração do curso:"/>
                                </div>
                                <div className={css.segundoBlocoDireita}>
                                    <InputCadastro css={{background: "#ECEFF5", height: "35px"}} className={css.inputP}
                                                   tipo="date" nome="Data - Início: "/>
                                    <InputCadastro css={{background: "#ECEFF5", height: "35px"}} tipo="date"
                                                   nome="Data - Término: "/>
                                </div>
                                <div className={css.terceiroBlocoDireita}>
                                    <InputCadastro css={{background: "#ECEFF5", height: "35px"}} className={css.inputP}
                                                   tipo="date" nome="Ferias - Início: "/>
                                    <InputCadastro css={{background: "#ECEFF5", height: "35px"}} tipo="date"
                                                   nome="Ferias - Término: "/>
                                </div>
                                <div>
                                    <CheckBoxDias titulo="Dias de trabalho:"></CheckBoxDias>
                                </div>
                                <BtnCadastro css={{width: "49.8vw", height: "7vh"}} nome="Cadastrar"></BtnCadastro>
                            </div>
                            <div className={css.pessoas}>
                                <div>
                                    <h2 style={{fontSize: "18px", fontWeight: "normal"}}>Professores:</h2>
                                    <select className={css.select}>
                                        <option>Selecione um Professor</option>
                                        <option>Lais</option>
                                        <option>Igor</option>
                                    </select>
                                </div>
                                <div>
                                    <h2 style={{fontSize: "18px", fontWeight: "normal"}}>Alunos:</h2>
                                    <select className={css.select}>
                                        <option>Selecione um Professor</option>
                                        <option>Nicolas</option>
                                        <option>Alexandre</option>
                                        <option>Murilo</option>
                                        <option>Caue</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                    </div>
            </div>
        </Banner>
    )
}

export default CadastroCurso