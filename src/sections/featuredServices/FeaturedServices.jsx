import React from 'react'
import FeaturedItemsCard from '../../components/featuredItemsCard/FeaturedItemsCard'
import styles from "./styles.module.css";

function FeaturedServices() {
    const featuredServicesArr = [
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
        <div className={styles.feature_service_section}>
            <div>
                <h5>Featured Services</h5>
                <button type="button" className="btn btn-link float-right"><h6>View All</h6></button>
            </div>
            <div>See what's popular across thousands of Services</div>
            <div className={styles.trending_auctions_cards_container}>
                {
                    featuredServicesArr.map((trendingAuction, idx) => <FeaturedItemsCard cardContent={trendingAuction} key={`featured_services_card_${idx}`} />)
                }
            </div>
        </div>
    )
}

export default FeaturedServices