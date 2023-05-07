import React from 'react'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

function ViewAllPage() {

    const recentCategoryCards = [
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        }
    ]

    const allCategoryCards = [
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        },
        {
            text: "Nikita",
            iconClassName: "fa-bug"
        }
    ]

    const chunkArrayInGroups = (arr, size) => {
        let resArr = [];
        while (arr.length > 0) {
            resArr.push(arr.splice(0, size))
        }
        return resArr
    }

    const recentCardsChunks = chunkArrayInGroups(recentCategoryCards, 3)
    const allCardsChunks = chunkArrayInGroups(allCategoryCards, 3)

    return (
        <div>
            <nav className='navbar' style={{ boxShadow: '20px 20px 20px buttonface', marginBottom: '20px' }}>
                <Link className="fa fa-angle-left" aria-hidden="true" to='/'></Link>
                <div className=' input-group row' style={{ width: '90%', marginRight: '10px' }}>
                    <input className="form-control badge-pill col-xs-4" type="text"
                        placeholder="Search category for insights" aria-label="Search by Products & Services">
                    </input>
                    <span className="input-group-append">
                        <button className="btn btn-outline-secondary badge-pill" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </nav>
            <div style={{ margin: '20px' }}>Recent Categories</div>
            <div className={styles.category_container}>
                {
                    recentCardsChunks.map((chunkArr) => <div className={styles.category_cards_row}>
                        {chunkArr.map(({ text, iconClassName }, i) => <CategoryCard key={`recent-category-card-${i}`} text={text} iconClassName={iconClassName} />)}
                    </div>)
                }
            </div>
            <div style={{ margin: '20px' }}>All Categories</div>
            <div className={styles.category_container}>
                {
                    allCardsChunks.map((chunkArr) => <div className={styles.category_cards_row}>
                        {chunkArr.map(({ text, iconClassName }, i) => <CategoryCard key={`all-category-card-${i}`} text={text} iconClassName={iconClassName} />)}
                    </div>)
                }
            </div>
        </div>
    )
}

export default ViewAllPage