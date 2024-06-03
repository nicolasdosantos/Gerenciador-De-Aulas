import style5 from '../components/NavBarPerfil.module.css';

function navBarPerfil({showPrograList}) {

    return (
        <div className={style5.principal}>

            <div className={style5.principalPerfil}>
                <div className={style5.perfil}>
                    <img src="/perfil.png" alt="banner"
                             style={{width: '140px', height: '140px', borderRadius: '70px'}}/>

                    <div className={style5.perfilNome}>
                        <p>Gustavo Donato</p>
                        <img src="/banner.png" alt="banner"
                             style={{width: '15px', height: '15px'}}/>
                    </div>

                    <p style={{color: '#8A8C98', marginBottom: '10px', fontSize: '17px'}}>Administrador</p>

                    <button className={style5.botao}><img src="/mais.png" alt="banner" className={style5.botaoImg}/>
                        Criar
                    </button>
                </div>

                <h2 className={style5.tituloProgra}>Programação do dia:</h2>
                <div className={style5.prograList} style={{ display: showPrograList ? 'block' : 'none' }}>
                    <div className={style5.prograDiv}>
                        <div className={style5.prograItemImage}>
                            <img src="/sino.png" alt="sino" style={{ width: '50px', height: '50px' }} />
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
        </div>
    );
}

export default navBarPerfil;