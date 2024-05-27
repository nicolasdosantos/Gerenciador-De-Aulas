import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import NavBar from "../components/NavBar";
import css from "../components/DashBoard.module.css";

const DashBoard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
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
            </div>
        </div>
    );
};

export default DashBoard;
