import css from "../components/CadastroMateria.module.css";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";
import BtnCadastro from "../components/BtnCadastro";
import React from "react";
import Banner from "../components/Banner";
import CheckBoxDias from "../components/CheckBoxDias";

function CadastroCurso(){
    return (
        <Banner>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <div className={css.divdireita}>
                    <TituloCadastro titulo="Edição de Matéria" css={{margin: 0, marginBottom: 15}}/>
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20}}>
                        <div>
                            <div style={{gap: 15, marginBottom: "10px"}}>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px", width: "34vw"}}
                                               nome="Nome do curso: "/>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", gap: 10, marginBottom: "10px"}}>
                                <h2 style={{ fontSize: "18px", fontWeight: "normal" }}>Salas:</h2>
                                <select className={css.select}>
                                    <option>Selecione uma sala</option>
                                    <option>Informatica</option>
                                    <option>Biblioteca</option>
                                    <option>Sala 5</option>
                                </select>
                            </div>
                            <div className={css.terceiroBlocoDireita}>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px", width: "16.5vw"}}
                                               className={css.inputP}
                                               tipo="time" nome="Horário - Início: "/>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px", width: "16.7vw"}}
                                               tipo="time"
                                               nome="Horário - Término: "/>
                            </div>
                            <div>
                                <CheckBoxDias titulo="Dias de trabalho:"></CheckBoxDias>
                            </div>
                            <BtnCadastro css={{width: "34vw", height: "7vh"}} nome="Cadastrar"></BtnCadastro>
                        </div>
                        <div className={css.pessoas}>
                            <div>
                                <h2 style={{ fontSize: "18px", fontWeight: "normal" }} >Professores:</h2>
                                <select className={css.select}>
                                    <option>Selecione um Professor</option>
                                    <option>Nicolas</option>
                                    <option>Alexandre</option>
                                    <option>Murilo</option>
                                    <option>Caue</option>
                                </select>
                            </div>
                            <div className={css.segundoBlocoEsquerda}>
                                <div>
                                    <InputCadastro css={{background: "#ECEFF5", height: "6vh", width: "16.7vw"}} className={css.inputP} tipo="number" nome="Carga horária: "/>
                                </div>
                                <div>
                                    <h1 style={{fontSize: "18px", fontWeight: "normal"}}>Turno:</h1>
                                    <select className={css.select} style={{width: "17vw", height: "6vh"}}>
                                        <option>Selecione um turno</option>
                                        <option>Manhã</option>
                                        <option>Tarde</option>
                                        <option>Noite</option>
                                        <option>Matutino (Manhã e Tarde)</option>
                                        <option>Vespertino (Tarde e Noite)</option>
                                        <option>Manhã e Noite</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Banner>
    )
}

export default CadastroCurso