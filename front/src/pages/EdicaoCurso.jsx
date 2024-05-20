import Banner from "../components/Banner";
import CardCadastroGrande from "../components/CardCadastroGrande";
import style3 from "../components/CardCadastroGrande.module.css";
import React from "react";

function CadastroCurso(){
    return(
        <div className="App">
            <Banner>
                <CardCadastroGrande nome={"Curso"} nome2={"Edição de"}>
                    <div style={{width: '50%'}}>

                        <div className={style3.formGroup}>
                            <input type="text" placeholder="Nome do curso"/>
                            <input type="file"/>
                        </div>

                        <div className={style3.formGroup}>
                            <input type="date" placeholder="Data - Início"/>
                            <input type="date" placeholder="Data - Término"/>
                        </div>

                        <div className={style3.formGroup}>
                            <input type="date" placeholder="Férias - Início"/>
                            <input type="date" placeholder="Férias - Término"/>
                        </div>

                        <div className={style3.formGroup}>
                            <input type="date" placeholder="Férias - Início"/>
                            <input type="date" placeholder="Férias - Término"/>
                        </div>

                        <div className={style3.periodo}>
                            <button>S</button>
                            <button>T</button>
                            <button>Q</button>
                            <button>Q</button>
                            <button>S</button>
                            <button>S</button>
                            <button>D</button>
                        </div>

                        <button className={style3.botao}>Salvar</button>

                    </div>
                    <div style={{width: '50%', margin: "30px"}}>
                        <div className={style3.formGroup} style={{flexDirection: "column", marginTop: "-45px"}}>
                            <p>Professores</p>
                            <select style={{width: '100%'}}>
                                <option>Selecione um professor</option>
                                <option>Laís Sinatra</option>
                                <option>Fernando Silva</option>
                            </select>
                        </div>

                        <div className={style3.formGroup} style={{flexDirection: "column"}}>
                            <p>Participantes</p>
                            <select style={{width: '100%'}}>
                                <option>Selecione um participante</option>
                                <option>Cauê Barbosa</option>
                                <option>Matheus Polato</option>
                            </select>
                        </div>
                    </div>
                </CardCadastroGrande>
            </Banner>
        </div>
    )
}

export default CadastroCurso