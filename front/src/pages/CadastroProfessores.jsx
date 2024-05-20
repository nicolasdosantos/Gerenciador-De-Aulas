import React, { useState } from 'react';
import Banner from "../components/Banner";
import CardCadastro from "../components/CardCadastro";

function CadastroProfessores() {
    const [selectedDays, setSelectedDays] = useState([]);

    const handleDayClick = (day) => {
        setSelectedDays(prevDays =>
            prevDays.includes(day)
                ? prevDays.filter(d => d !== day)
                : [...prevDays, day]
        );
    };

    const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

    return(
        <div className="App">
            <Banner>
                <CardCadastro nome={"Professores"} nome2={"Cadastro de"}>

                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"
                    }}>
                        Nome:
                    </label>
                    <input type="text" style={{
                        padding: "5px",
                        width: "635px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none"
                    }}/>

                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"
                    }}>
                        E-mail:
                    </label>
                    <input type="text" style={{
                        padding: "5px",
                        width: "635px",
                        margin: "5px",
                        borderRadius: "5px",
                        border: "none"
                    }}/>

                    <div style={{display: "flex", textAlign: "left"}}>

                        <div>


                            <label style={{
                                fontWeight: "bold",
                                marginTop: "15px",
                                margin: "5px"
                            }}>
                                NIF:
                            </label>
                            <input type="number" style={{
                                padding: "5px",
                                width: "300px",
                                margin: "5px",
                                borderRadius: "5px",
                                border: "none"
                            }}/>

                            <label style={{
                                fontWeight: "bold",
                                marginTop: "15px",
                                margin: "5px"
                            }}>
                                Carga horária semanal:
                            </label>
                            <input type="number" style={{
                                padding: "5px",
                                width: "300px",
                                margin: "5px",
                                borderRadius: "5px",
                                border: "none"
                            }}/>
                            <label style={{
                                fontWeight: "bold",
                                marginTop: "15px",
                                margin: "5px"
                            }}>
                                Turno:
                            </label>
                            <select style={{
                                padding: "5px",
                                width: "300px",
                                margin: "5px",
                                borderRadius: "5px",
                                border: "none"
                            }}>
                                <option></option>
                                <option>Manha</option>
                                <option>Tarde</option>
                                <option>Noite</option>
                                <option>Integral(Manhã e tarde)</option>
                                <option>Manhã e Noite</option>
                                <option>Tarde e Noite</option>
                            </select>

                        </div>

                        <div>

                            <label style={{
                                fontWeight: "bold",
                                marginTop: "15px",
                                margin: "5px"
                            }}>
                                CPF:
                            </label>
                            <input type="text" style={{
                                padding: "5px",
                                width: "300px",
                                margin: "5px",
                                borderRadius: "5px",
                                border: "none"
                            }}/>

                            <label style={{
                                fontWeight: "bold",
                                marginTop: "15px",
                                margin: "5px"
                            }}>
                                Data de nascimento:
                            </label>
                            <input type="date" style={{
                                padding: "5px",
                                width: "300px",
                                margin: "5px",
                                borderRadius: "5px",
                                border: "none"
                            }}/>

                        </div>

                    </div>

                    <label style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        textAlign: "left",
                        margin: "5px"
                    }}>
                        Dias de trabalho:
                    </label>
                    <div style={{margin: '5px'}}>
                        {days.map((day, index) => (
                            <button
                                key={index}
                                onClick={() => handleDayClick(day)}
                                style={{
                                    padding: '10px',
                                    margin: '5px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    backgroundColor: selectedDays.includes(day) ? '#8b5cf6' : '#d1d5db',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}>
                                {day}
                            </button>
                        ))}
                    </div>

                </CardCadastro>
            </Banner>
        </div>
    )
}

export default CadastroProfessores
