import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"

const CategoryCard = ({ iconClassName, text, details }) => {
  return (
    <Link to={`/${details}`} style={{color: '#444444'}}>
      <div className={styles.category_card_container}>
        <div className={`${styles.category_card_icon} ${iconClassName}`} />
        <div className={styles.category_card_text}>{text}</div>
      </div>
    </Link>
  )
}

export default CategoryCard