import style5 from '../components/NavBarPerfil.module.css';
import React, { useState } from 'react';

function NavBarPerfil({ showPrograList, isCalendario }) {
    const [exibirPerfil, setExibirPerfil] = useState(isCalendario);
    const [exibirCard, setExibirCard] = useState(false);

    function togglePerfil(){
        if (!isCalendario) {
            setExibirPerfil(!exibirPerfil);
        }
    }

    const toggleCard = () => {
        setExibirCard(!exibirCard);
    };

    return (
        <div className={style5.principal}>

            {!exibirPerfil && !isCalendario && (
                <div className={style5.logoNav}>
                    <button onClick={togglePerfil} className={style5.botaoImgLogo}>
                        <img src="/logoCorujaEmPng.png" alt="bannerLogo" className={style5.imgLogo}/>
                    </button>
                </div>
            )}

            {exibirPerfil && (
                <div className={style5.principalPerfil}>
                    {!isCalendario && (
                        <button onClick={togglePerfil} className={style5.botaoImgVoltar}>
                            <img src="/banner.png" alt="bannerVoltar" className={style5.imgVoltar}/>
                        </button>
                    )}

                    <div className={style5.perfil}>
                        <img src="/perfilPng.png" alt="perfil"
                             style={{width: '150px', height: '150px', borderRadius: '70px'}}/>

                        <p className={style5.perfilNome}>Gustavo Donato</p>
                        <p style={{color: '#8A8C98', marginBottom: '10px', fontSize: '18px'}}>Administrador</p>

                        <div className={style5.cardCriar}>
                            <button className={style5.botao} onClick={toggleCard}>
                                <img src="/maisRoxo.png" alt="banner" className={style5.botaoImg}/>
                                Criar
                            </button>

                            <hr style={{border: '1px solid #fff', marginLeft: '10px', marginRight: '10px'}}/>

                            {exibirCard && (
                                <div className={style5.card}>
                                    <button className={style5.cardBotao}>Alunos <p>+</p></button>
                                    <button className={style5.cardBotao}>Professores <p>+</p></button>
                                    <button className={style5.cardBotao}>Cursos <p>+</p></button>
                                    <button className={style5.cardBotao}>Salas <p>+</p></button>
                                </div>
                            )}
                        </div>
                    </div>

                    <h2 className={style5.tituloProgra}>Programação do dia:</h2>
                    <div className={style5.prograList} style={{display: showPrograList ? 'block' : 'none'}}>

                        <div className={style5.prograDiv}>
                            <div className={style5.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style5.prograItem}>
                                <p className={style5.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style5.prograTextC}>Python</p>

                                <div className={style5.prograTextoDiv}>
                                    <p className={style5.prograTextS}>Sala 2</p>
                                    <p className={style5.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>

                        <div className={style5.prograDiv}>
                            <div className={style5.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style5.prograItem}>
                                <p className={style5.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style5.prograTextC}>Python</p>

                                <div className={style5.prograTextoDiv}>
                                    <p className={style5.prograTextS}>Sala 2</p>
                                    <p className={style5.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>

                        <div className={style5.prograDiv}>
                            <div className={style5.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style5.prograItem}>
                                <p className={style5.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style5.prograTextC}>Python</p>

                                <div className={style5.prograTextoDiv}>
                                    <p className={style5.prograTextS}>Sala 2</p>
                                    <p className={style5.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>

                        <div className={style5.prograDiv}>
                            <div className={style5.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style5.prograItem}>
                                <p className={style5.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style5.prograTextC}>Python</p>

                                <div className={style5.prograTextoDiv}>
                                    <p className={style5.prograTextS}>Sala 2</p>
                                    <p className={style5.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>

                        <div className={style5.prograDiv}>
                            <div className={style5.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style5.prograItem}>
                                <p className={style5.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style5.prograTextC}>Python</p>

                                <div className={style5.prograTextoDiv}>
                                    <p className={style5.prograTextS}>Sala 2</p>
                                    <p className={style5.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>

                        <div className={style5.prograDiv}>
                            <div className={style5.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style5.prograItem}>
                                <p className={style5.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style5.prograTextC}>Python</p>

                                <div className={style5.prograTextoDiv}>
                                    <p className={style5.prograTextS}>Sala 2</p>
                                    <p className={style5.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>

                        <div className={style5.prograDiv}>
                            <div className={style5.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style5.prograItem}>
                                <p className={style5.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style5.prograTextC}>Python</p>

                                <div className={style5.prograTextoDiv}>
                                    <p className={style5.prograTextS}>Sala 2</p>
                                    <p className={style5.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>

                        <div className={style5.prograDiv}>
                            <div className={style5.prograItemImage}>
                                <img src="/sino.png" alt="sino" style={{width: '50px', height: '50px'}}/>
                            </div>

                            <div className={style5.prograItem}>
                                <p className={style5.prograTextT}>Desenvolvimento de sistemas</p>
                                <p className={style5.prograTextC}>Python</p>

                                <div className={style5.prograTextoDiv}>
                                    <p className={style5.prograTextS}>Sala 2</p>
                                    <p className={style5.prograTextH}>07:30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBarPerfil;