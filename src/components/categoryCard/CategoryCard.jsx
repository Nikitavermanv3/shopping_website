import React from 'react'
import styles from "./styles.module.css"

const CategoryCard = ({ iconClassName, text }) => {
  return (
    <div className={styles.category_card_container}>
      <div className={`${styles.category_card_icon} ${iconClassName}`} />
      <div className={styles.category_card_text}>{text}</div>
    </div>
  )
}

export default CategoryCard