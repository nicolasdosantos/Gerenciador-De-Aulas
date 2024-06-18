import React, { useState, useRef } from 'react';
import style5 from '../components/NavBarPerfil.module.css';
import { useNavigate } from "react-router-dom";

import { SlArrowLeft } from "react-icons/sl";

function NavBarPerfil({ showPrograList }) {
    const [exibirPerfil, setExibirPerfil] = useState(false);
    const [exibirCard, setExibirCard] = useState(false);
    const prograListRef = useRef(null);
    const [barraLateralVisivel, setBarraLateralVisivel] = useState(false);
    const [animacaoPerfil, setPerfil] = useState(true);

    const navigate = useNavigate();


    function menuPerfil() {
        setPerfil(!animacaoPerfil);
    }

    const toggleBarraLateral = () => {
        setBarraLateralVisivel(!barraLateralVisivel);
    };

    function togglePerfil() {
        setExibirPerfil(!exibirPerfil);
    }

    function toggleCard() {
        setExibirCard(!exibirCard);
    }

    function scrollLeft() {
        if (prograListRef.current) {
            prograListRef.current.scrollTo({
                left: prograListRef.current.scrollLeft - 200,
                behavior: 'smooth'
            });
        }
    }

    function scrollRight() {
        if (prograListRef.current) {
            prograListRef.current.scrollTo({
                left: prograListRef.current.scrollLeft + 200,
                behavior: 'smooth'
            });
        }
    }

    return (
        <>
            <div className={style5.principal}>
                <div className={`${style5.barraLateral} ${barraLateralVisivel ? style5.visivel : ''}`}>
                </div>

                <div className={style5.logoNav}>
                    <button onClick={() => {
                        menuPerfil();
                        togglePerfil();
                        toggleBarraLateral();
                    }} className={style5.botaoImgLogo}>
                        <img src="/logoCorujaEmPng.png" alt="bannerLogo" className={style5.imgLogo}/>
                    </button>
                </div>
            </div>

            <div style={{right: exibirPerfil ? '-350px' : '0px'}} className={style5.principalPerfil}>
                <button onClick={togglePerfil} className={style5.botaoImgVoltar}>
                    <SlArrowLeft className={style5.imgVoltar}/>
                </button>

                <div className={style5.perfil}>
                    <img src="/perfilPng.png" alt="perfil" className={style5.imgPerfill}/>
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
                <div className={style5.prograList} ref={prograListRef}
                     style={{overflowX: 'auto', display: showPrograList ? 'block' : 'none'}}>

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
        </>
    )
        ;
}

export default NavBarPerfil;
