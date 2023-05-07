import React from 'react'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import styles from "./styles.module.css";
import { Link } from 'react-router-dom'

export default function PopularCategories() {
    const popularCategoriesArr = [
        {
            text: "Nikita",
            iconClassName: "fa-cog"
        },
        {
            text: "Nikita",
            iconClassName: "fa-cog"
        },
        {
            text: "Nikita",
            iconClassName: "fa-cog"
        },
        {
            text: "Nikita",
            iconClassName: "fa-cog"
        },
        {
            text: "Nikita",
            iconClassName: "fa-cog"
        },
        {
            text: "Nikita",
            iconClassName: "fa-cog"
        }
    ]

    return (
        <div className={styles.popular_categories_section}>
            <h5>
                Explore Popular Categories
                <Link className={styles.popular_category_link} to='/viewAllCategories'>View All</Link>
            </h5>
            <div className={styles.category_cards_row}>
                {popularCategoriesArr.map(({ text, iconClassName }, i) => (
                    <CategoryCard key={`popular-category-card-${i}`} text={text} iconClassName={iconClassName} />
                ))}
            </div>
        </div>
    )
}