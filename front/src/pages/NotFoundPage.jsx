import React from 'react';
import css from '../components/NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.notFoundContainer}>
            <div className={css.notFoundContent}>
                <h1 id={css.oops}>Oops...</h1>
                <h2 id={css.numerro}>404</h2>
                <p id={css.naoE}>Não encontramos essa página</p>
                <img id={css.pessoas} src="/pessoas.png" alt="Pessoas"/>
                <div className={css.imageContainer}></div>
            </div>
            <img className={css.coruja} src="/LogoBranca.png" alt="Coruja"/>
        </div>
    );
};

export default NotFoundPage;
