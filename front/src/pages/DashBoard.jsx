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
                <h2 style={{color: "#959db0", position: "relative", right: "450px"}}>Cursos</h2>

                <div className={css.quad}>

                    <div className={css.q}></div>
                    <div className={css.qq}></div>
                    <div className={css.qqq}></div>
                    <div className={css.qqqq}></div>


                </div>

                <h2 id={css.cadastrosd}>Cadastros:</h2>

                <div className={css.cadss}>
                    <div className={css.professores}>Professores:</div>
                    <div className={css.alunos}>Alunos:</div>
                    <div className={css.cursos}>Cursos:</div>
                    <div className={css.salas}>Salas:</div>
                </div>

                <div className={css.qbranco}>
                    <div id={css.cad1}>12 cadastrados</div>
                    <div id={css.cad2}>1120 cadastrados</div>
                    <div id={css.cad3}>08 cadastrados</div>
                    <div id={css.cad4}>14 cadastrados</div>
                </div>



            </div>
            <footer>
                <img style={{width: "100px", position: "relative", top:"185px",left:"50px"}} src="/lEARN.png"/>
            </footer>
        </div>
    );
};

export default DashBoard;
