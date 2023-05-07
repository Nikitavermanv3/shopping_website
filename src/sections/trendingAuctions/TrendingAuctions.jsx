import React from 'react'
import TrendingAuctionCard from '../../components/featuredItemsCard/FeaturedItemsCard'
import styles from "./styles.module.css"

function TrendingAuctions() {
    const trendingAuctionsArr = [
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
        <div className={styles.trending_auction_section}>
            <div className='trending_auction_heading'>
                <h5>Trending Auctions</h5>
                <button type="button" className="btn btn-link float-right"><h6>View All</h6></button>
            </div>
            <p>See what's popular across thousands of Auctions</p>
            <div className={styles.trending_auctions_cards_container}>
                {
                    trendingAuctionsArr.map((trendingAuction, idx) => <TrendingAuctionCard cardContent={trendingAuction} key={`trending_auction_card_${idx}`} />)
                }
            </div>
        </div>
    )
}

export default TrendingAuctions