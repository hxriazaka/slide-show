

const Slider = () => {
    return ( 
        <div>
                {/* ==================== Start Loading ==================== */}

            <section className="load">
                <div className="loader"></div>
                <div className="count"></div>
            </section>

            {/* ==================== End Loading ==================== */}



            {/* ==================== Start progress-scroll-button ==================== */}

            <div className="progress-wrap cursor-pointer">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            {/* ==================== End progress-scroll-button ==================== */}



            {/* ==================== Start cursor ==================== */}

            <div className="mouse-cursor cursor-outer"></div>
            <div className="mouse-cursor cursor-inner"></div>

            {/* ==================== End cursor ==================== */}


            {/* ==================== Start Slider ==================== */}

            <header className="slider slider-prlx fixed-slider">
                <div className="swiper-container parallax-slider">
                    <div className="swiper-wrapper">                      
                        <div className="swiper-slide swiper-img1">
                            <div className="bg-img valign" data-overlay-dark="6">                          
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-9 offset-md-1">
                                            <div className="caption">
                                                <h1 data-splitting className="custom-font">Unique brand Stories</h1>
                                                <p>If you need to redesign your new project, new visual strategy, ux structure
                                                    or you do hByra some cool ideas for collaboration.</p>
                                                <a href="#0" className="btn-dis custom-font mt-30">
                                                    <span>Discover More</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-img2">
                            <div className="bg-img valign" data-overlay-dark="7">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-9 offset-md-1">
                                            <div className="caption">
                                                <h1 data-splitting className="custom-font">Digital Design Awards</h1>
                                                <p>If you need to redesign your new project, new visual strategy, ux structure
                                                    or you do hByra some cool ideas for collaboration.</p>
                                                <a href="#0" className="btn-dis custom-font mt-30">
                                                    <span>Discover More</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* slider setting */}
                    <div className="control-text custom-font">
                        <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                            <span className="arrow prv">Prev</span>
                        </div>
                        <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                            <span className="arrow nxt">Next</span>
                        </div>
                    </div>
                    <div className="swiper-pagination custom-font"></div>

                    <div className="social-icon">
                        <a href="#0">Tw</a>
                        <a href="#0">Fb</a>
                        <a href="#0">Be</a>
                    </div>
                </div>
            </header>

            {/* ==================== End Slider ==================== */}
        </div>
     );
}
 
export default Slider;
