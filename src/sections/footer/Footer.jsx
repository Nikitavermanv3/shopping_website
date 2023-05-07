import React from 'react'
import styles from './styles.module.css';


function UsefulLinks({ linksArr }) {
    return (
        <div className={styles.useful_links}>
            Useful Links
            {linksArr.map((text) => <div className=''>{text}</div>)}
        </div>
    )
}

function Footer() {
    return (
        <div className={styles.footer_section}>
            <div className={styles.footer_text_1}>
                You can all our call center, we are open on weekdays from 9:00AM to 8:00PM and on weekends from 9:00AM to 1:00PM
            </div>
            <div className={styles.footer_text_2}>
                +1-340-618-7841
            </div>
            <div className={styles.footer_text_3}>
                hello-bidpro@mail.com
            </div>

            <UsefulLinks linksArr={['About Us', 'Shop', 'Contact us', 'Cart', 'Privacy Policy']} />
            <UsefulLinks linksArr={["Home Page", "Store Listing", 'List View', 'Blog', 'Single Post']} />

            <div className={styles.newsletter}>
                Newsletter
            </div>
            <div className={styles.newsletter_text}>

                Join our Newsletter to get updates:
            </div>

            <div>
                <input className={styles.newsletter_input} />
            </div>

            <div>
                <button className={styles.newsletter_button} />
            </div>
        </div>
    )
}

export default Footer