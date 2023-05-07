import React from 'react'
import FeaturedItemsCard from '../../components/featuredItemsCard/FeaturedItemsCard'
import styles from "./styles.module.css";

function FeaturedProducts() {
    const featuredProductsArr = [
        {
            imgSrc: "",
            title: "Socks",
            price: "$ 5",
            timeLeft: "5 days 20 sec",
            bids: "5",
            shippingCost: "$10.20"
        },
        {
            imgSrc: "",
            title: "Socks",
            price: "$ 5",
            timeLeft: "5 days 20 sec",
            bids: "5",
            shippingCost: "$10.20"
        },
        {
            imgSrc: "",
            title: "Socks",
            price: "$ 5",
            timeLeft: "5 days 20 sec",
            bids: "5",
            shippingCost: "$10.20"
        },
        {
            imgSrc: "",
            title: "Socks",
            price: "$ 5",
            timeLeft: "5 days 20 sec",
            bids: "5",
            shippingCost: "$10.20"
        }
    ]

    return (
        <div className={styles.feature_product_section}>
            <div>
                <h5>Featured Products</h5>
                <button type="button" className="btn btn-link float-right"><h6>View All</h6></button>
            </div>
            <div>See what's popular across thousands of Products</div>
            <div className={styles.trending_auctions_cards_container}>
                {
                    featuredProductsArr.map((featuredProduct, idx) => <FeaturedItemsCard cardContent={featuredProduct} key={`trending_auction_card_${idx}`} />)
                }
            </div>
        </div>
    )
}

export default FeaturedProducts