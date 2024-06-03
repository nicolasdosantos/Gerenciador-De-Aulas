import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import NavBar from "../components/NavBar";
import css from "../components/DashBoard.module.css";

const DashBoard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <div className={css.dashboardContainer}>
            <NavBar />
            <div className={css.content}>
                <h2 className={css.ola}>Olá! Explore a melhor gestão escolar!</h2>
                <div className={css.sliderContainer}>
                    <Slider {...settings} className={css.slider}>
                        <div className={css.slide}>
                            <img src="/1.png" alt="Slide 1" className={css.slideImage}/>
                        </div>
                        <div className={css.slide}>
                            <img src="/2.png" alt="Slide 2" className={css.slideImage}/>
                        </div>
                        <div className={css.slide}>
                            <img src="/3.png" alt="Slide 3" className={css.slideImage}/>
                        </div>
                        <div className={css.slide}>
                            <img src="/4.png" alt="Slide 4" className={css.slideImage}/>
                        </div>
                        <div className={css.slide}>
                            <img src="/5.png" alt="Slide 5" className={css.slideImage}/>
                        </div>
                    </Slider>
                </div>
                <h2 style={{color: "rgb(102, 105, 124)", position: "relative", right: "456px", top: "28px"}}>Cursos</h2>

                <div className={css.scrollContainer}>
                    {[...Array(20)].map((_, index) => (
                        <div className={css.qqqq} key={index}>
                            <img src={`/image${index + 1}.png`} alt={`Card ${index + 1}`} className={css.cardImage} />
                        </div>
                    ))}
                </div>

                <h2 id={css.cadastrosd}>Cadastros</h2>

                <div className={css.cadss}>
                    <div className={css.qazul}>Professores:</div>
                    <div className={css.qazul}>Alunos:</div>
                    <div className={css.qazul}>Cursos:</div>
                    <div className={css.qazul}>Salas:</div>
                </div>

                <div className={css.qbranco}>
                    <div id={css.cad}>12 cadastrados</div>
                    <div id={css.cad}>1120 cadastrados</div>
                    <div id={css.cad}>08 cadastrados</div>
                    <div id={css.cad}>14 cadastrados</div>
                </div>

                <footer>
                    <img src="/lEARN.png" style={{width: "212px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", top: "83px"}}/>
                </footer>
            </div>


        </div>
    );
};

export default DashBoard;
