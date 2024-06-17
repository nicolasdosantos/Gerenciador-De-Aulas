import css from "../components/CadastroCurso.module.css";
import TituloCadastro from "../components/TituloCadastro";
import InputCadastro from "../components/InputCadastro";
import BtnCadastro from "../components/BtnCadastro";
import React from "react";
import Banner from "../components/Banner";

function CadastroCurso(){
    return (
        <div >
            <Banner>
                <div className={css.divdireita}>
                    <TituloCadastro titulo="Edição de" css={{margin: 0, marginBottom: 1, color: "#333",position:'relative',right:'100px',top:'30px',fontWeight:600,letterSpacing:'2px'}}/>
                    <TituloCadastro titulo="Curso" css={{margin: 0, marginBottom: 1, color: "#8C52FF",position:'relative',top:'-25px',left:'90px',fontWeight:600,letterSpacing:'2px'}}/>

                    <div style={{display: "grid", gridTemplateColumns: "3fr 2fr", gap: 20}}>
                        <div>
                            <div className={css.primeiroBlocoDireita}>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px"}}
                                               nome="Nome do curso: "/>
                                <InputCadastro tipo="file"  nome="Capa:"></InputCadastro>
                                <InputCadastro css={{background: "#ECEFF5", height: "35px"}} nome="Duração do curso:"/>
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
                            <BtnCadastro css={{width: "49.8vw", height: "7vh", fontSize: "20px", fontWeight: "bold", cursor: "pointer"}} nome="Cadastrar"></BtnCadastro>
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