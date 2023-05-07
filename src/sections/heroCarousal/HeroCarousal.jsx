import React from 'react'
import styles from './styles.module.css'

function CarouselDotDot({ cardsArr }) {
    return (
        <ol className="carousel-indicators">
            {cardsArr.map((idx) => {
                if (idx === 0) {
                    return (<li data-target="#heroCarousel" data-slide-to={idx} className="active" key={`carousel_dotdot_${idx}`}></li>)
                }
                return (<li data-target="#heroCarousel" data-slide-to={idx} key={`carousel_dotdot_${idx}`}></li>)
            })}
        </ol>
    )
}

function CarouselInner({ cardsArr }) {
    return (
        <div className="carousel-inner">
            {cardsArr.map((idx) =>
                <CarousalCard index={idx} key={`carousel_inner_${idx}`} />
            )}
        </div>
    )
}

function CarousalCard({ index, imgSrc = "https://placehold.co/800x400" }) {
    return (
        <div className={`carousel-item ${index === 0 && 'active'}`}>
            <img className="d-block w-100" src={imgSrc} alt="First slide" />
        </div>
    )
}

function CarouselArrowKeys() {
    return (
        <>
            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </>
    )
}

function HeroCarousal() {
    const cardsArr = [...Array(3).keys()];

    return (
        <div className={styles.carousel_slide}>
            <div id="heroCarousel" className='carousel slide' data-ride="carousel">
                <CarouselDotDot cardsArr={cardsArr} />
                <CarouselInner cardsArr={cardsArr} />
                <CarouselArrowKeys />
            </div>
        </div>
    )
}

export default HeroCarousal