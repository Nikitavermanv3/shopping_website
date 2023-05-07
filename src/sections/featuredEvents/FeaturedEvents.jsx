import React from 'react'
import FeaturedEventsCard from '../../components/featuredItemsCard/FeaturedEventsCard'
import styles from './styles.module.css'

function FeaturedEvents() {
    const featuredEventsArr = [
        {
            title: 'Requirement of 2000 Diodes at Nasik plant',
            time: 'Sat, 02:PM onwards',
            name: 'Andrew Smith',
            place: 'Global foundries'
        },
        {
            title: 'Requirement of 2000 Diodes at Nasik plant',
            time: 'Sat, 02:PM onwards',
            name: 'Andrew Smith',
            place: 'Global foundries'
        }
    ]

    return (
        <div className={styles.feature_event_section}>
            <div>
                <h5>Featured Events</h5>
            </div>
            <p>See what's popular across thousands of Events</p>
            <div className={styles.featured_events_cards_container}>
                {
                    featuredEventsArr.map((featuredEvent, idx) => <FeaturedEventsCard cardContent={featuredEvent} key={`featured_events_card_${idx}`} />)
                }
            </div>
        </div>
    )
}

export default FeaturedEvents