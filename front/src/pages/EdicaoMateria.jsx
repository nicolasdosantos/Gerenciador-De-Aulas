import React from "react";
import Banner from "../components/Banner";
import CardCadastroGrande from "../components/CardCadastroGrande";
import style3 from "../components/CardCadastroGrande.module.css";

function CadastroMateria() {
    return (
        <div className="App">
            <Banner>
                <CardCadastroGrande nome={"Matéria"} nome2={"Edição de"}>
                    <div style={{ width: '50%' }}>
                        <div className={style3.formGroup}>
                            <input type="text" placeholder="Nome da Matéria" style={{ width: "100%" }} />
                        </div>

                        <select style={{
                            width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "8px"
                        }}>
                            <option>Selecione uma sala</option>
                            <option>Sala 1</option>
                            <option>Sala 2</option>
                        </select>

                        <div className={style3.formGroup}>
                            <input type="time" placeholder="Horário - Início" />
                            <input type="time" placeholder="Horário - Término" />
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

                    <div style={{ width: '50%', margin: "30px" }}>
                        <div className={style3.formGroup} style={{ flexDirection: "column", marginTop: "-45px" }}>
                            <p>Professores</p>
                            <select style={{ width: '100%' }}>
                                <option>Selecione um professor</option>
                                <option>Laís Sinatra</option>
                                <option>Fernando Silva</option>
                            </select>
                        </div>

                        <div style={{display: "flex"}}>
                            <div className={style3.formGroup} style={{ flexDirection: "column" }}>
                                <p>Quantidade de horas</p>
                                <input type="number" style={{width: "100%"}}/>
                            </div>
                            <div className={style3.formGroup} style={{ flexDirection: "column" }}>
                                <p>Turno</p>
                                <select style={{width: "100%"}}>
                                    <option>Selecione o turno</option>
                                    <option>Manhã</option>
                                    <option>Tarde</option>
                                    <option>Noite</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </CardCadastroGrande>
            </Banner>
        </div>
    );
}

export default CadastroMateria;