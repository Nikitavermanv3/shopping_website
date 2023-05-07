import React from 'react'
import styles from './styles.module.css'

function FeaturedItemsCard({ cardContent }) {

    let {
        imgSrc,
        title,
        price,
        timeLeft,
        bids,
        shippingCost
    } = cardContent;

    if (imgSrc === "") {
        imgSrc = "https://placehold.co/140x134"
    }

    return (
        <div className={`card ${styles.feature_items_card}`} style={{ "width": "18rem" }}>
            <img className="card-img-top" src={imgSrc} alt="feature_items_image" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5 className="card-title">{price}</h5>
                <p>Time Left</p>
                <p style={{color: 'red'}}>{timeLeft}</p>
                <p>{bids} bids</p>
                <p>{shippingCost} shipping</p>
            </div>
        </div>
    )
}

export default FeaturedItemsCard