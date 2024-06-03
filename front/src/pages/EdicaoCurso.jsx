import css from "./CadastroCurso.module.css";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";
import BtnCadastro from "../components/BtnCadastro";
import React from "react";
import Banner from "../components/Banner";

function CadastroCurso(){
    return (
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <Banner>
                <div className={css.divdireita}>
                    <TituloCadastro titulo="Edição de Curso" css={{margin: 0, marginBottom: 15}} ></TituloCadastro>
                    <div style={{display: "grid", gridTemplateColumns: "3fr 2fr", gap: 20}}>
                        <div>
                            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 15, marginBottom: "10px"}}>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px"}}
                                               nome="Nome do curso: "/>
                                <InputCadastro tipo="file"  nome="Capa:"></InputCadastro>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px"}} nome="Duração do curso:"/>
                            </div>
                            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr ", gap: 10,marginBottom: "10px"}}>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px"}} className={css.inputP}
                                               tipo="date" nome="Data - Início: "/>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px"}} tipo="date"
                                               nome="Data - Término: "/>
                            </div>
                            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr ", gap: 10,marginBottom: "10px"}}>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px"}} className={css.inputP}
                                               tipo="date" nome="Ferias - Início: "/>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px"}} tipo="date"
                                               nome="Ferias - Término: "/>
                            </div>
                            <BtnCadastro css={{width: "49.8vw", height: "7vh"}} nome="Cadastrar"></BtnCadastro>
                        </div>
                        <div className={css.pessoas}>
                            <div>
                                <h2>Professores:</h2>
                                <select className={css.select}>
                                    <option>Selecione um Professor</option>
                                    <option>Lais</option>
                                    <option>Igor</option>
                                </select>
                            </div>
                            <div>
                                <h2>Alunos:</h2>
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
            </Banner>
        </div>
    )
}

export default CadastroCurso